/* scene_player.js — the browser INTERPRETER. A faithful port of engine/interp.py::drive:
 * given a portable scene.json + loaded glTFs (set + actors, with their animation clips), it
 * exposes window.__seek(t) that poses actors, selects/advances clips, and moves the camera —
 * the SAME per-frame spec the Python renderer uses, so the picture agrees by construction.
 * Global THREE (classic build) + THREE.GLTFLoader + THREE.AnimationMixer. No modules, no CDN. */
(function (global) {
  'use strict';

  // ---- pure math (mirrors engine/interp.py) ----
  function ease(x){ x = x<0?0:(x>1?1:x); return 1-Math.pow(1-x,3); }
  function wrap(a){ while(a>Math.PI)a-=2*Math.PI; while(a<-Math.PI)a+=2*Math.PI; return a; }
  function lerp3(a,b,u){ return [a[0]+(b[0]-a[0])*u, a[1]+(b[1]-a[1])*u, a[2]+(b[2]-a[2])*u]; }
  function lastLE(seq,t){ var r = seq.length?seq[0]:null; for(var i=0;i<seq.length;i++){ if(seq[i].at<=t+1e-6) r=seq[i]; else break; } return r; }
  function prevLt(seq,at){ var r=null; for(var i=0;i<seq.length;i++){ if(seq[i].at<at-1e-6) r=seq[i]; } return r; }
  function speakerAt(sp,t){ for(var i=0;i<sp.length;i++){ if(sp[i].at<=t && t<sp[i].at+sp[i].dur) return sp[i].i; } return null; }

  // Mirrors interp._speaker_pos_eased. Explicit-shot mode used to aim straight at acts[spk].pos, which
  // SNAPS the aim the instant a line starts (measured 32-34 unit frame jumps in the Python renderer when
  // the turn passed between characters 1.3 m apart). Group mode already eased it; explicit never did.
  // Both interpreters must agree exactly, so this lands in both files with the same 0.45 s ramp.
  function speakerPosEased(sc,t){
    var acts=sc.actors, segs=(sc.speakers||[]).slice().sort(function(a,b){return a.at-b.at;});
    var cur=null,prev=null;
    for(var i=0;i<segs.length;i++){ if(segs[i].at<=t+1e-6){ prev=cur; cur=segs[i]; } else break; }
    if(cur===null) return null;
    // SMOOTHSTEP, not ease(): ease() is a cubic ease-OUT, steepest at x=0, which still snapped.
    var cs=acts[cur.i].pos, ps=prev?acts[prev.i].pos:cs;
    var x=(t-cur.at)/0.60; x = x<0?0:(x>1?1:x); var e=x*x*(3.0-2.0*x);
    return [ps[0]+(cs[0]-ps[0])*e, ps[1]+(cs[1]-ps[1])*e, ps[2]+(cs[2]-ps[2])*e];
  }

  function favoredAt(sc,t){
    var g=sc.group, acts=sc.actors, segs=sc.speakers.slice().sort(function(a,b){return a.at-b.at;});
    var cur=null,prev=null;
    for(var i=0;i<segs.length;i++){ if(segs[i].at<=t+1e-6){ prev=cur; cur=segs[i]; } else break; }
    if(cur===null) return [g.gcx,g.gcz];
    var cs=acts[cur.i].pos, ps=prev?acts[prev.i].pos:cs, e=ease((t-cur.at)/0.45);
    return [ps[0]+(cs[0]-ps[0])*e, ps[2]+(cs[2]-ps[2])*e];
  }

  var FAVOR_POS=0.22, FAVOR_AIM=0.40, CAM_D=5.2, CAM_Y=1.66, AIM_Y=1.40;
  // v27.21 (E5): the same JAW_GAIN and the same NEAREST-SAMPLE rule as engine/interp.jaw_at. Nearest
  // sample rather than interpolation precisely so the two languages cannot disagree: the envelope is
  // already a 25 Hz RMS, and two interpolators would have to match to the last bit for parity to hold.
  var JAW_GAIN=0.9;
  // v28: see interp._chan_at - ONE lookup shared by the jaw and both viseme channels, so the browser
  // cannot read `wide` by a different rule from the one it reads `env` by.
  function chanAt(mouth,t,key,gain){
    if(!mouth||!mouth.length) return 0.0;
    for(var k=0;k<mouth.length;k++){ var sg=mouth[k];
      if(sg.start<=t && t<sg.start+sg.dur){
        var ch=sg[key]; if(!ch||!ch.length) return 0.0;
        var i=Math.floor((t-sg.start)/sg.hop);
        if(i<0) i=0; if(i>=ch.length) i=ch.length-1;
        return gain*ch[i];
      } }
    return 0.0;
  }
  function jawAt(mouth,t){ return chanAt(mouth,t,'env',JAW_GAIN); }
  // v28: see interp.viseme_at - gated on the jaw, so no shape is held through a silence.
  var VIS_GAIN=0.55;
  // v29.36: see engine/interp - the four gaze constants, which must be these exact numbers in both
  // languages or gates/gaze_parity fails. The gain is 1.0 and not the browser preview's old 0.6 because no
  // forge head carries an eye-gaze morph to take the remainder (measured; see interp.py's registry note).
  var GAZE_GAIN=1.0, GAZE_CLAMP=0.20, GAZE_EYE=0.8, GAZE_UP=-0.05, GAZE_Q=1e6;
  // see engine/interp._g6 - floor(v*Q+0.5)/Q, NOT Math.round, because Python rounds half to even and
  // JS rounds half up. atan2 is not correctly rounded in either language and the two disagree by an ulp.
  function g6(v){ return Math.floor(v*GAZE_Q+0.5)/GAZE_Q; }
  function visemeAt(mouth,t){
    var openNow=chanAt(mouth,t,'env',1.0);
    if(openNow<=0.0) return [0.0,0.0];
    return [VIS_GAIN*openNow*chanAt(mouth,t,'wide',1.0),
            VIS_GAIN*openNow*chanAt(mouth,t,'round',1.0)];
  }

  function drive(sc,t){
    var acts=sc.actors, dancers=sc.dancers||[], speakers=sc.speakers||[];
    // see interp.drive: the aim must NOT be gated on an active line, or it lurches in every gap
    var spk=speakerAt(speakers,t), spkPos = speakerPosEased(sc,t);
    var out=[];
    for(var idx=0; idx<acts.length; idx++){
      var a=acts[idx], pos=a.pos.slice(), face=a.base_face, moving=false, frm=a.pos.slice(), mvFrom=null;
      var moves=a.moves||[];
      for(var m=0;m<moves.length;m++){ var mv=moves[m];
        if(t>=mv.at){ var e=ease((t-mv.at)/Math.max(0.1,mv.dur)); var to=[mv.to[0],a.pos[1],mv.to[1]];
          pos=lerp3(frm,to,e); if(e<1){ moving=true; face=Math.atan2(to[0]-frm[0],to[2]-frm[2]); mvFrom=frm; } frm=to; } }
      if(dancers.indexOf(idx)>=0){
        var other=dancers.filter(function(j){return j!==idx;});
        if(other.length){ var op=acts[other[0]].pos; face=Math.atan2(op[0]-pos[0],op[2]-pos[2]); }
      } else if(!moving && a.looks && a.looks.length){
        var al=lastLE(a.looks,t), pl=prevLt(a.looks,al.at), le=ease((t-al.at)/0.6);
        face = pl ? (pl.angle + wrap(al.angle-pl.angle)*le) : al.angle;
      }
      // v27.22 (P2): the clip's PHASE. See interp.drive - Prime restarts the mixer on a clip change, so
      // its animation time is t - t_change; this used to set the mixer to the absolute t and the two
      // renderers ran the same animation at different points inside it.
      var clip, clipSince = 0.0;
      if(moving){
        clip = "Walk";
        for(var mi=0;mi<moves.length;mi++){ var m2=moves[mi];
          if(t>=m2.at && (t-m2.at) < Math.max(0.1,m2.dur)) clipSince = m2.at; }
      } else {
        var cur = lastLE(a.clips||[],t);
        clip = (cur||{clip:"Idle"}).clip;
        clipSince = cur ? cur.at : 0.0;
      }
      var jaw = jawAt(a.mouth,t);
      // see interp.drive: a looping Talk clip fights the measured envelope, so the envelope wins
      if(jaw>0.0 && clip==="Talk") clip="Idle";
      var clipT = t - clipSince;
      // v29.1: see interp.drive - a rig-2 walker's cycle follows the ground it covers, so its feet stay planted
      if(moving && a.walkSpeed && mvFrom!==null){ var wdx=pos[0]-mvFrom[0], wdz=pos[2]-mvFrom[2];
        clipT = Math.sqrt(wdx*wdx + wdz*wdz) / a.walkSpeed; }
      // v29.1: see interp.drive - a move that plays once holds its last pose (rig 2 only)
      if(a.once && a.once.hasOwnProperty(clip) && clipT > a.once[clip]) clipT = a.once[clip];
      var vz = visemeAt(a.mouth,t);
      out.push({pos:pos, face:face, clip:clip, jaw:jaw, wide:vz[0], round:vz[1],
                clip_t: clipT>0.0?clipT:0.0});
    }
    var cp,ct,shotFov=null;
    if(sc.camera_mode==="group"){
      var g=sc.group, f=favoredAt(sc,t);
      cp=[g.gcx+(f[0]-g.gcx)*FAVOR_POS, CAM_Y, g.front_z-CAM_D];
      ct=[g.gcx+(f[0]-g.gcx)*FAVOR_AIM, AIM_Y, g.gcz];
    } else {
      var shots=sc.shots, cur=lastLE(shots,t), ci=shots.indexOf(cur), nxt=ci+1<shots.length?shots[ci+1]:null;
      cp=[cur.px,cur.py,cur.pz]; ct=[cur.tx,cur.ty,cur.tz];
      shotFov = (cur.fov===undefined||cur.fov===null) ? null : cur.fov;
      if(nxt && !cur.cut){ var e2=ease((t-cur.at)/Math.max(0.1,nxt.at-cur.at));
        cp=lerp3(cp,[nxt.px,nxt.py,nxt.pz],e2); ct=lerp3(ct,[nxt.tx,nxt.ty,nxt.tz],e2);
        // v29.36: see interp.drive - a shot that GLIDES glides its lens too, from whichever end declares
        // one (the other falls back to the scene's lens, then the renderer's default). A cut holds its own.
        var nf2=(nxt.fov===undefined||nxt.fov===null)?null:nxt.fov;
        if(shotFov!==null || nf2!==null){
          var dfl2=sc.camera_fov||sc.fov;
          var a02=(shotFov!==null)?shotFov:dfl2, a12=(nf2!==null)?nf2:dfl2;
          shotFov=a02+(a12-a02)*e2;
        } }
      // v29.17: see interp.drive - <camera aim="shot"> holds the written shot; the default favours the speaker
      if(spkPos!==null && (sc.camera_aim||'speaker')!=='shot') ct=lerp3(ct,[spkPos[0],spkPos[1]+1.35,spkPos[2]],0.6);
    }
    var res={actors:out, camera:{pos:cp, target:ct}};
    // v29.36: see interp.drive - only a scene whose shots declare a lens carries `fov` at all, so the
    // camera object a delivered spec produces keeps exactly the two keys it has always had.
    if(sc.camera_mode!=="group" && shotFov!==null) res.camera.fov=shotFov;
    // v29.36 GAZE, opt-in - the mirror of interp.drive. A SECOND pass, because one actor's target is
    // another's resolved position, and the two interpreters must read the same finished positions rather
    // than whatever order each one's loop happens to run in.
    if(sc.gaze_mode){
      var spkXZ=null;
      if(spk!==null && spk!==undefined && spk>=0 && spk<out.length) spkXZ=[out[spk].pos[0],out[spk].pos[2]];
      for(var gi=0; gi<acts.length; gi++){
        var ga=acts[gi], gst=out[gi], gt=null, gzl=ga.gazes||[];
        if(gzl.length){ var gg=lastLE(gzl,t); gt=(gg.to==='speaker')?spkXZ:gg.to; }
        if(gt===null && spk!==null && spk!==undefined && spk>=0 && spk!==gi) gt=spkXZ;
        var gyaw=0.0, glr=0.0, glu=0.0;
        if(gt!==null && gt!==undefined){
          var grel=wrap(Math.atan2(gt[0]-gst.pos[0], gt[1]-gst.pos[2]) - gst.face);
          gyaw=GAZE_GAIN*grel;
          gyaw=(gyaw<-GAZE_CLAMP)?-GAZE_CLAMP:((gyaw>GAZE_CLAMP)?GAZE_CLAMP:gyaw);
          glr=grel/GAZE_EYE;
          glr=(glr<-1.0)?-1.0:((glr>1.0)?1.0:glr);
          glu=GAZE_UP;
        }
        gst.head_yaw=g6(gyaw); gst.look_right=g6(glr); gst.look_up=g6(glu);
      }
    }
    if(sc.props && sc.props.length) res.props=sc.props.map(function(p){ return propState(p,t); });   // v29.1
    return res;
  }

  // v29.1: see interp.prop_state - held (by actor index, in a hand) or resting (at a place), the last event decides
  function propState(p,t){
    var st={held:-1, hand:'R', pos:p.rest.pos, quat:p.rest.quat}, ev=p.events||[];
    for(var i=0;i<ev.length;i++){
      if(ev[i].at>t) break;
      if(ev[i].hold!==undefined) st={held:ev[i].hold, hand:ev[i].hand, pos:st.pos, quat:st.quat};
      else st={held:-1, hand:st.hand, pos:ev[i].rest.pos, quat:ev[i].rest.quat};
    }
    // v29.27 TIMED VISIBILITY - the mirror of engine/interp.prop_state. The rule is written out the same way in
    // both languages, including the >= on hide, because gates/interpreter_parity compares the two at
    // max_error 0.00e+00 and a boundary that differs by one frame is a difference.
    var vis=true;
    if(p.show!==undefined && p.show!==null && t<p.show) vis=false;
    if(p.hide!==undefined && p.hide!==null && t>=p.hide) vis=false;
    st.visible=vis;
    return st;
  }

  function groupOf(actors){
    var n=Math.max(1,actors.length), gx=0,gz=0,fz=1e9;
    for(var i=0;i<actors.length;i++){ gx+=actors[i].pos[0]; gz+=actors[i].pos[2]; fz=Math.min(fz,actors[i].pos[2]); }
    return {gcx:gx/n, gcz:gz/n, front_z:(actors.length?fz:0)};
  }

  /* ---- THE LIVE MOUTH: speech with no recording behind it ----------------------------------
   *
   * A lesson's mouth is MEASURED. engine/speech bakes an mp3, the compositor takes a 25 Hz RMS
   * envelope off it, and jawAt above reads that envelope back - so the sound and the jaw are one
   * object seen twice and cannot drift apart.
   *
   * The site's front door has no mp3. It is spoken by the BROWSER's own voice through the Web
   * Speech API, which hands out no duration, no envelope and no audio stream at all - only
   * onstart, onboundary and onend. Every way of fitting a picture to that is a PREDICTION, and a
   * prediction two seconds long leaves the mouth moving after the voice has stopped, which is
   * precisely the thing that makes a talking head look broken.
   *
   * So the rule is inverted: START THE SPEECH AND LET IT DRIVE THE PICTURE. The envelope here is
   * synthetic and ENDLESS, so it cannot run out however long the answer turns out to be - which
   * is also why the word cap can be asked of the model rather than enforced on it, and why an
   * overrun costs only time. Every word boundary the browser reports resets the phase, so the
   * mouth opens ON the word instead of wherever a free-running loop had got to. onend stops it.
   * Nothing anywhere predicts how long anything will take.
   *
   * THE CONSEQUENCE IS ACCEPTED AND WRITTEN DOWN: this mouth is permanently cruder than a
   * lesson's. It has syllables but no phonemes, because there is no recording to take phonemes
   * from. That is a property of the Web Speech API and no amount of work in this file changes it.
   *
   * IT IS DELIBERATELY NOT IN drive(). drive() is the one function this file and engine/interp.py
   * must agree on to the last bit, and here there is nothing to agree WITH - no mp4 is ever
   * rendered of a browser voice, so there is no second renderer to match. It is applied inside
   * seek() AFTER drive(), in the same place and for the same reason as the viewer's camera. */
  var LIVE_SYLL = 4.6;      // syllables per second - ordinary speech
  var LIVE_JAW  = 0.72;     // the opening a syllable reaches; the measured path peaks near 0.9
  function liveMouthAt(u){
    if(!(u > 0)) u = 0;
    var a = 0.5 - 0.5*Math.cos(2*Math.PI*LIVE_SYLL*u);        // one opening per syllable
    return [LIVE_JAW * a * (0.78 + 0.22*Math.sin(2*Math.PI*0.31*u)),
            // the two viseme channels ride the opening, exactly as visemeAt gates them on it, so
            // a shut mouth is never left holding a shape
            VIS_GAIN * a * (0.5 + 0.5*Math.sin(2*Math.PI*0.53*u)),
            VIS_GAIN * a * (0.5 + 0.5*Math.sin(2*Math.PI*0.37*u + 1.9))];
  }
  function liveNow(){
    return ((global.performance && global.performance.now) ? global.performance.now()
                                                           : Date.now()) / 1000;
  }

  // ---- lighting: tuned to THREE (legacy sRGB/ACES) so the APPEARANCE matches the Prime
  // pygfx rigs (same warm key + soft fills + shadows). Cross-renderer, so values differ from
  // Prime's radiometric numbers — the goal is a structurally equivalent picture. ----
  function addLights(THREE, scene, lighting){
    var shadows = !!(lighting && lighting.shadows);
    scene.add(new THREE.AmbientLight(0xffe9d0, 0.50));
    scene.add(new THREE.HemisphereLight(0xdfe8f2, 0x3a3d40, 0.45));
    var key = new THREE.DirectionalLight(0xfff2d8, 1.35); key.position.set(6,13,-3);
    if(shadows){ key.castShadow=true; if(key.shadow){ key.shadow.mapSize.width=2048; key.shadow.mapSize.height=2048;
      var c=key.shadow.camera; c.left=-14;c.right=14;c.top=14;c.bottom=-14;c.near=0.5;c.far=60; key.shadow.bias=-0.0009; } }
    scene.add(key);
    var f1=new THREE.DirectionalLight(0xcfe0ff,0.30); f1.position.set(-6,5,3); scene.add(f1);
    var f2=new THREE.DirectionalLight(0xfff3e2,0.35); f2.position.set(0,4,9); scene.add(f2);
    return shadows;
  }

  // ---- the player ----
  function ScenePlayer(THREE, renderer){
    // `view` starts NULL, so a freshly constructed player renders the director's camera and nothing else.
    // A page opts in; the scene never can.
    this.view=null;
    // `live` starts NULL too, and for the same reason: a freshly constructed player moves the
    // mouth the scene says to move and not one it was told about from outside.
    this.live=null;
    this.THREE=THREE; this.renderer=renderer; this.mixers=[]; this.roots=[]; this.scene=null; this.camera=null;
    this.sc=null; this.clock=null; this.curClip=[];
  }
  // GLTFLoader.parse is ASYNC — load set + all actors, then finish and call onReady.
  ScenePlayer.prototype.load = function(S, buffers, onReady){
    var self=this, THREE=this.THREE;
    var scene=new THREE.Scene(); this.scene=scene;
    var shadows = addLights(THREE, scene, S.lighting);
    if(shadows && this.renderer){ this.renderer.shadowMap.enabled=true; this.renderer.shadowMap.type=THREE.PCFSoftShadowMap; }
    var setRel = (shadows && S.set.noceil_glb) ? S.set.noceil_glb : (S.set.glb || S.set.noceil_glb);
    this.mixers=[]; this.roots=[]; this.curClip=[]; this._mm=[];   // _mm: a new lesson's actors, not the last one's
    for(var i=0;i<S.actors.length;i++){ this.mixers.push(null); this.roots.push(null); this.curClip.push(null); }
    var items=[{rel:setRel, kind:'set'}];
    for(var j=0;j<S.actors.length;j++) items.push({rel:S.actors[j].model_glb, kind:'actor', idx:j});
    // v29.1: the props that change hands - separate models, placed or carried by seek()
    this.props=[]; this._holds={};
    for(var pj=0;pj<(S.props||[]).length;pj++){ this.props.push(null); items.push({rel:S.props[pj].glb, kind:'prop', idx:pj}); }
    var loader=new THREE.GLTFLoader(), remaining=items.length;
    // v27.36: EXT_meshopt_compression, for the site's smaller encoding. GLTFLoader already understands
    // the extension and cannot decode without a decoder, and compressed assets mark it REQUIRED - so an
    // asset that needs one and does not get one FAILS to parse, loudly, rather than drawing an empty
    // scene. Guarded, so a site that publishes only exact geometry behaves exactly as before and this
    // line is a no-op.
    if (typeof MeshoptDecoder !== 'undefined' && loader.setMeshoptDecoder) loader.setMeshoptDecoder(MeshoptDecoder);
    // v28.3: THE GPU DENORMALISES skinWeight, THE RAYCASTER DOES NOT.
    // In the compressed (meshopt) encoding the skin weights arrive as a NORMALIZED Uint8 attribute: WebGL divides
    // them by 255 on the way into the shader, so the character is DRAWN correctly - measured, the two encodings'
    // pictures differ by 0.18/255 mean, 0.045 % of pixels over 20. three.js's CPU path (boneTransform, used by
    // Mesh.raycast) reads the attribute raw, so every skinned vertex is thrown about 1000x away from where it is
    // drawn - vertex 0 of the body landed at world (-1637, 390, 180) instead of (-6.42, 1.53, 0.71). The
    // consequence was invisible until something asked the CPU where a surface is: a click on a character in
    // "Interactive, smaller" passed straight THROUGH them and selected whatever stood behind - the ray's first
    // three hits were the car at 4.75/4.83/5.39 m instead of the person at 2.85/2.89/3.07 m.
    // So: hold the weights as the plain floats the GPU already uses. Identical numbers, so the picture does not
    // change; the raycaster now agrees with it. The exact encoding ships Float32 weights already and is untouched.
    function denormaliseSkinWeights(root){
      root.traverse(function(o){
        if(!o.isSkinnedMesh || !o.geometry) return;
        var a=o.geometry.attributes.skinWeight;
        if(!a || !a.normalized || !a.array || a.array instanceof Float32Array) return;
        var d=(a.array instanceof Uint8Array)?255:(a.array instanceof Uint16Array)?65535:1;
        var f=new Float32Array(a.array.length);
        for(var i=0;i<f.length;i++) f[i]=a.array[i]/d;
        o.geometry.setAttribute('skinWeight', new THREE.BufferAttribute(f, a.itemSize, false));
      });
    }
    // v29.0 DRESSING (engine/dress.py): the lesson's values on the room's named places, drawn ONCE at load, never by
    // seek(). A quad is the very PNG Prime drew, unlit and outside tone mapping, so its colours are the PNG's in both
    // renderers; a paint sets the named part's base colour EXACTLY as this GLTFLoader sets a baked factor
    // (color.fromArray), so a painted part and a baked part of that colour agree here as they do in Prime.
    var dress=S.dress||[], quads=dress.filter(function(d){return d.kind==='quad';});
    remaining += quads.length;
    self.dressErrors=[];
    function paintSet(root){
      dress.forEach(function(d){
        if(d.kind!=='paint') return;
        var hit=0;
        root.traverse(function(o){ if(o.isMesh && o.name===d.mesh && o.material){ o.material.color.fromArray(d.factor); hit++; } });
        if(!hit) self.dressErrors.push(d.anchor);
      });
    }
    quads.forEach(function(d){
      var img=new Image();
      img.onload=function(){
        var tex=new THREE.Texture(img); tex.encoding=THREE.sRGBEncoding; tex.needsUpdate=true;
        var m=new THREE.Mesh(new THREE.PlaneGeometry(d.size[0], d.size[1]),
          new THREE.MeshBasicMaterial({map:tex, transparent:true, toneMapped:false, side:THREE.DoubleSide}));
        m.position.set(d.pos[0], d.pos[1], d.pos[2]); m.rotation.y=d.rotY; m.name='dress:'+d.anchor;
        scene.add(m); done();
      };
      img.onerror=function(){ self.dressErrors.push(d.anchor); done(); };
      img.src=URL.createObjectURL(new Blob([buffers[d.png]], {type:'image/png'}));
    });
    function done(){ if(--remaining===0){ self._finish(S); if(onReady) onReady(); } }
    items.forEach(function(item){
      var buf=buffers[item.rel];
      loader.parse(buf, '', function(g){
        if(item.kind==='set'){
          g.scene.traverse(function(o){ if(o.isMesh){ o.castShadow=shadows; o.receiveShadow=shadows; } });
          paintSet(g.scene);
          scene.add(g.scene);
        } else if(item.kind==='prop'){
          var pr=g.scene; pr.matrixAutoUpdate=false; pr.name='prop:'+S.props[item.idx].id;
          if(shadows) pr.traverse(function(o){ if(o.isMesh) o.castShadow=true; });
          scene.add(pr); self.props[item.idx]=pr;
        } else {
          var root=g.scene; denormaliseSkinWeights(root);
          if(shadows) root.traverse(function(o){ if(o.isMesh) o.castShadow=true; });
          scene.add(root); self.roots[item.idx]=root;
          self.mixers[item.idx]={ mixer:new THREE.AnimationMixer(root), clips:g.animations||[], cur:null };
        }
        done();
      }, function(err){ self.error=String(err&&err.message||err); if(!global.__AP_NO_HOOKS) global.__err=self.error; done(); });
    });
    return this;
  };
  // THE FOV CONVENTION, DERIVED (v29.0) - it replaces FOVK = 0.70, a constant fitted by eye and registered as a
  // compensation whose root cause was "not established". The root cause: pygfx applies `fov` to the MEAN of the
  // view's width and height (pygfx 0.17, cameras/_perspective.py: size = 2*near*tan(fov/2); height =
  // 2*size/(1+aspect)); THREE.js applies it to the height. So Prime's fov fp is the THREE vertical fov f3 with
  // tan(f3/2) = tan(fp/2) * 2/(1+aspect) - 0.72 at 16:9, not 0.70. The 0.02 framed every web-player shot 2.8% tighter
  // than the MP4 of the same scene (measured on the dress probe: the board 536 px wide in the page, 520 in Prime).
  // gates/param_growth and gates/param_parity hold the two renderers to the same pixels for a dressed place.
  function primeFovToThree(fp, aspect){ return 2*Math.atan(2/(1+aspect)*Math.tan(fp*Math.PI/360))*180/Math.PI; }
  ScenePlayer.prototype._finish = function(S){
    var THREE=this.THREE;
    this.sc={ actors:S.actors.map(function(a){var o={pos:a.pos, base_face:a.base_face, moves:a.moves||[], looks:a.looks||[], clips:a.clips||[], mouth:a.mouth||[]};
                if(a.walkSpeed) o.walkSpeed=a.walkSpeed; if(a.once) o.once=a.once;
                if(a.gazes) o.gazes=a.gazes;                                                 // v29.36 gaze cues
                return o;}),    // v29.1 rig-2 walkers
              props:(S.props||[]).map(function(p){return {id:p.id, rest:p.rest, events:p.events||[]};}),   // v29.1
              dancers:S.dancers||[], speakers:S.speakers||[], camera_mode:S.camera.mode, shots:S.shots,
              group:groupOf(S.actors), fov:S.camera.fov };
    if(S.camera.aim) this.sc.camera_aim=S.camera.aim;                                        // v29.17
    if(S.camera.fovDeg) this.sc.camera_fov=S.camera.fovDeg;                                  // v29.30 declared lens
    if(S.camera.gaze) this.sc.gaze_mode=S.camera.gaze;                                       // v29.36
    var aspect=(S.size?S.size[0]/S.size[1]:16/9);
    this.camera=new THREE.PerspectiveCamera(primeFovToThree(S.camera.fov, aspect), aspect, 0.05, 500);
  };
  // v28: every mesh on actor i that carries a mouth morph, found once per actor and then reused. Walking
  // the scene graph per frame would be the kind of cost that is invisible on one actor and not on five.
  ScenePlayer.prototype._mouthMeshes = function(i){
    this._mm = this._mm || [];
    if(this._mm[i] !== undefined) return this._mm[i];
    var out=[], root=this.roots[i];
    if(root) root.traverse(function(o){
      var d=o.morphTargetDictionary;
      if(d && o.morphTargetInfluences && d.jawOpen !== undefined) out.push(o);
    });
    this._mm[i]=out;
    return out;
  };
  ScenePlayer.prototype._setMouth = function(i, jaw, wide, rnd){
    var ms=this._mouthMeshes(i);
    for(var k=0;k<ms.length;k++){
      var o=ms[k], d=o.morphTargetDictionary, w=o.morphTargetInfluences;
      w[d.jawOpen]=jaw;
      if(d.mouthWide!==undefined) w[d.mouthWide]=wide;     // absent on pre-v28 heads: jaw alone,
      if(d.mouthRound!==undefined) w[d.mouthRound]=rnd;    // exactly as those heads always drove
    }
  };
  /* THE THREE THINGS A SPEAKING VOICE CAN TELL US, and nothing else is asked of it.
   * A caller starts the mouth when the voice starts, nudges it on every word boundary the voice
   * reports, and stops it when the voice ends. `live` is null at every other moment, and while it
   * is null seek() behaves exactly as it always has - the authored mouth and nothing over it. */
  ScenePlayer.prototype.sayStart = function(actorIndex){
    this.live = { actor: (actorIndex || 0) | 0, word: liveNow() };
    return this;
  };
  ScenePlayer.prototype.sayWord = function(){
    if(this.live) this.live.word = liveNow();
    return this;
  };
  ScenePlayer.prototype.sayStop = function(){ this.live = null; return this; };
  ScenePlayer.prototype.saying = function(){ return !!this.live; };

  // v29.36: the node the head rides on, found once per actor. The forge parents head, hair and eyes to a
  // WorldObject called `neck`; there is no bone named head on this skeleton, which is why the old preview
  // page's /head/ bone search turned nothing at all.
  ScenePlayer.prototype._neckNode = function(i){
    this._nk = this._nk || [];
    if(this._nk[i] !== undefined) return this._nk[i];
    var root=this.roots[i];
    this._nk[i] = (root && root.getObjectByName('neck')) || null;
    return this._nk[i];
  };
  ScenePlayer.prototype._setGaze = function(i, yaw, lookR, lookU){
    var THREE=this.THREE, nk=this._neckNode(i);
    if(nk){
      var q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), yaw);
      nk.quaternion.multiply(q);
    }
    // the eye morphs, where a head has them. No forge head does today (measured: eyeBlink, jawOpen,
    // mouthWide, mouthRound and nothing else), so this loop writes nothing - and does the right thing
    // the day one exports them, without a player change.
    var root=this.roots[i];
    if(root) root.traverse(function(o){
      var d=o.morphTargetDictionary, w=o.morphTargetInfluences;
      if(!d || !w) return;
      if(d.lookRight!==undefined) w[d.lookRight]=lookR;
      if(d.lookUp!==undefined) w[d.lookUp]=lookU;
    });
  };
  ScenePlayer.prototype._setClip = function(i, want){
    var m=this.mixers[i]; if(want===m.cur) return;
    var cl=null; for(var k=0;k<m.clips.length;k++){ if(m.clips[k].name===want){ cl=m.clips[k]; break; } }
    if(!cl) return; m.mixer.stopAllAction(); m.mixer.clipAction(cl).play(); m.cur=want;
  };
  ScenePlayer.prototype.seek = function(t){
    var THREE=this.THREE, fr=drive(this.sc,t);
    for(var i=0;i<this.roots.length;i++){
      var st=fr.actors[i]; this.roots[i].position.set(st.pos[0],st.pos[1],st.pos[2]);
      this.roots[i].rotation.set(0, st.face, 0);
      this._setClip(i, st.clip);
      // v27.22 (P2): the interpreter's clip phase, so this matches Prime's restarted mixer exactly.
      this.mixers[i].mixer.setTime(Math.max(0, st.clip_t === undefined ? t : st.clip_t));
      // v28: THE MOUTH. drive() has returned `jaw` since v27.21 and this loop never applied it: the
      // value was computed for every actor on every frame and then dropped, so the published player's
      // characters spoke with their mouths shut while the MP4 of the same lesson moved them. The parity
      // gate could not see it because it compares drive()'s OUTPUT, and the output was right.
      //
      // Applied AFTER mixer.setTime, because the baked Idle clip animates the same morph weights (the
      // blink) and would otherwise overwrite the jaw on the next frame. Only the mouth targets are
      // written, so the clip still owns the blink.
      this._setMouth(i, st.jaw || 0, st.wide || 0, st.round || 0);
      // THE LIVE MOUTH, laid over the authored one and only while a voice is actually speaking.
      // Same placement rule as the viewer's camera below: what the two renderers must AGREE on is
      // drive()'s output, so the one thing they cannot share belongs strictly outside it. With no
      // live speech this branch does not run and the picture is the authored picture exactly.
      if(this.live && this.live.actor === i){
        var lm = liveMouthAt(liveNow() - this.live.word);
        this._setMouth(i, lm[0], lm[1], lm[2]);
      }
      // v29.36 GAZE. Also after mixer.setTime, and for the same reason the mouth is: the seated clips
      // animate `neck` themselves, so a write before the seek would be overwritten. COMPOSED with what
      // the clip wrote, exactly as engine/prime_stage.set_gaze does it, so the nod survives the turn.
      // THREE.GLTFLoader sanitises node names, but `neck` has no dot in it, so one spelling is enough -
      // unlike 'hold.R' below, which arrives as 'holdR'.
      if(st.head_yaw !== undefined) this._setGaze(i, st.head_yaw, st.look_right||0, st.look_up||0);
    }
    // v29.1 THE PROPS: after every actor's pose is set, each is either resting (its place) or riding the palm's hold
    // node of the actor holding it - the node's WORLD matrix, the same one Prime reads
    var props=fr.props||[];
    for(var pk=0;pk<props.length;pk++){
      var obj=this.props[pk], ps=props[pk]; if(!obj) continue;
      obj.visible = (ps.visible===undefined) ? true : !!ps.visible;   // v29.27 timed visibility (Prime: place_props)
      if(ps.held>=0 && this.roots[ps.held]){
        var key=ps.held+':'+ps.hand, hn=this._holds[key];
        // THREE.GLTFLoader SANITISES node names: 'hold.R' in the file arrives here as 'holdR' - a dot is
        // reserved for property paths in its animation bindings, so it is REMOVED. Looking only for the file's own name
        // found nothing, and the branch below then left every held prop AT ITS RESTING PLACE - the teapot
        // stayed on the table while the woman carried it, silently, in the web player only. Both spellings
        // are tried now, and a miss is recorded rather than passed over (gates/movement_check R measured
        // it at 496.7 mm against Prime).
        if(!hn){ hn=this.roots[ps.held].getObjectByName('hold.'+ps.hand)
                    || this.roots[ps.held].getObjectByName('hold'+ps.hand)
                    || this.roots[ps.held].getObjectByName('hold_'+ps.hand);
                 if(!hn){ (this.warnings||(this.warnings=[])).push('no hold node: actor '+ps.held+' hand '+ps.hand); }
                 this._holds[key]=hn||null; }
        if(hn){ this.roots[ps.held].updateMatrixWorld(true); obj.matrix.copy(hn.matrixWorld); }
      } else {
        obj.matrix.compose(new THREE.Vector3(ps.pos[0],ps.pos[1],ps.pos[2]),
                           new THREE.Quaternion(ps.quat[0],ps.quat[1],ps.quat[2],ps.quat[3]), new THREE.Vector3(1,1,1));
      }
      obj.matrixWorldNeedsUpdate=true;
    }
    // THE VIEWER'S CAMERA, APPLIED AFTER drive() AND NOWHERE ELSE.
    //
    // drive() above is untouched: it returns the AUTHORED camera, which is what the MP4 was rendered
    // from and what gate_bundle_parity compares. `this.view` - when a page has set one - lays a
    // per-viewer view over the top. With no view, or with the view still the director's, `apply()`
    // returns drive()'s camera unchanged and the picture is identical by construction.
    //
    // The rule runs BACKWARDS here on purpose: what both renderers must agree on belongs in drive()'s
    // output, so the one thing they must NOT share belongs exactly here instead. Putting the viewer's
    // camera in drive() would leave parity passing while comparing nothing.
    // v29.36: the lens this frame is shot through - the shot's own, else the scene's, else the default.
    // It is applied whether or not a viewer view is set, because it is the DIRECTOR's lens.
    var cam = fr.camera;
    var primeFov = (fr.camera.fov !== undefined && fr.camera.fov !== null) ? fr.camera.fov : this.sc.fov;
    if(this.view) cam = this.view.apply(fr.camera, primeFov);
    var wantFov = (this.view && cam.fov > 0) ? cam.fov : primeFov;
    var f3 = primeFovToThree(wantFov, this.camera.aspect);
    if(Math.abs(this.camera.fov - f3) > 1e-6){ this.camera.fov = f3; this.camera.updateProjectionMatrix(); }
    this.camera.position.set(cam.pos[0],cam.pos[1],cam.pos[2]);
    this.camera.lookAt(cam.target[0],cam.target[1],cam.target[2]);
    // Roll is the one degree of freedom no authored shot has - the player aims with lookAt and a default
    // up vector, so the horizon is always level. A viewer may tilt it; the authored camera never does.
    if(this.view && this.view.roll) this.camera.rotateZ(this.view.roll * Math.PI / 180);
    if(this.renderer) this.renderer.render(this.scene, this.camera);
  };

  // The viewer's view, or null for the director's. Set by the page; never by the scene, never by drive().
  ScenePlayer.prototype.setView = function(v){ this.view = v || null; return this; };

  global.ScenePlayer = ScenePlayer;
  // v28.3: the interpreter is reachable from the module (ScenePlayer.drive) for the component, which exposes it to no
  // one. The window hook stays for every page that has always had it (bundles, gates, our site), and is withheld only
  // when the component loaded this file for a page that did not ask for hooks (02 §10.0, BND-01).
  ScenePlayer.drive = drive;
  if (!global.__AP_NO_HOOKS) global.__drive = drive;   // exposed for tests
})(typeof window!=="undefined"?window:this);
