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
      var a=acts[idx], pos=a.pos.slice(), face=a.base_face, moving=false, frm=a.pos.slice();
      var moves=a.moves||[];
      for(var m=0;m<moves.length;m++){ var mv=moves[m];
        if(t>=mv.at){ var e=ease((t-mv.at)/Math.max(0.1,mv.dur)); var to=[mv.to[0],a.pos[1],mv.to[1]];
          pos=lerp3(frm,to,e); if(e<1){ moving=true; face=Math.atan2(to[0]-frm[0],to[2]-frm[2]); } frm=to; } }
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
      var vz = visemeAt(a.mouth,t);
      out.push({pos:pos, face:face, clip:clip, jaw:jaw, wide:vz[0], round:vz[1],
                clip_t: clipT>0.0?clipT:0.0});
    }
    var cp,ct;
    if(sc.camera_mode==="group"){
      var g=sc.group, f=favoredAt(sc,t);
      cp=[g.gcx+(f[0]-g.gcx)*FAVOR_POS, CAM_Y, g.front_z-CAM_D];
      ct=[g.gcx+(f[0]-g.gcx)*FAVOR_AIM, AIM_Y, g.gcz];
    } else {
      var shots=sc.shots, cur=lastLE(shots,t), ci=shots.indexOf(cur), nxt=ci+1<shots.length?shots[ci+1]:null;
      cp=[cur.px,cur.py,cur.pz]; ct=[cur.tx,cur.ty,cur.tz];
      if(nxt && !cur.cut){ var e2=ease((t-cur.at)/Math.max(0.1,nxt.at-cur.at));
        cp=lerp3(cp,[nxt.px,nxt.py,nxt.pz],e2); ct=lerp3(ct,[nxt.tx,nxt.ty,nxt.tz],e2); }
      if(spkPos!==null) ct=lerp3(ct,[spkPos[0],spkPos[1]+1.35,spkPos[2]],0.6);
    }
    return {actors:out, camera:{pos:cp, target:ct}};
  }

  function groupOf(actors){
    var n=Math.max(1,actors.length), gx=0,gz=0,fz=1e9;
    for(var i=0;i<actors.length;i++){ gx+=actors[i].pos[0]; gz+=actors[i].pos[2]; fz=Math.min(fz,actors[i].pos[2]); }
    return {gcx:gx/n, gcz:gz/n, front_z:(actors.length?fz:0)};
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
    function done(){ if(--remaining===0){ self._finish(S); if(onReady) onReady(); } }
    items.forEach(function(item){
      var buf=buffers[item.rel];
      loader.parse(buf, '', function(g){
        if(item.kind==='set'){
          g.scene.traverse(function(o){ if(o.isMesh){ o.castShadow=shadows; o.receiveShadow=shadows; } });
          scene.add(g.scene);
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
  // COMPENSATES: the browser player framed every shot wider than the MP4 of the same scene, because
  // COMPENSATES: Prime (pygfx) and THREE.js interpret `fov` differently.
  // ROOT-CAUSE: not established. The relation was fitted empirically, not derived - the original comment
  // ROOT-CAUSE: said "FOVK~0.70", and a tilde in a constant is a fudge factor admitting itself. One of
  // ROOT-CAUSE: the two renderers is applying fov to a different axis or a different convention, and
  // ROOT-CAUSE: until that is established this constant hides the disagreement rather than resolving it.
  // VERIFY: render one scene through Prime and through the player at the same fov, measure the framed
  // VERIFY: height of a known object in both; if they agree with FOVK = 1.0 the compensation is dead.
  // VERIFY: gates/gates.gate_bundle_parity already compares the two pictures structurally and would
  // VERIFY: register the change, so the measurement has somewhere to land.
  // RE-TEST-WHEN: pygfx or three.js changes its camera/projection handling, or either renderer's fov
  // RE-TEST-WHEN: convention is documented.
  // REVIEW-BY: 2026-12-01
  var FOVK = 0.70;
  function primeFovToThree(fp){ return 2*Math.atan(FOVK*Math.tan(fp*Math.PI/360))*180/Math.PI; }
  ScenePlayer.prototype._finish = function(S){
    var THREE=this.THREE;
    this.sc={ actors:S.actors.map(function(a){return {pos:a.pos, base_face:a.base_face, moves:a.moves||[], looks:a.looks||[], clips:a.clips||[], mouth:a.mouth||[]};}),
              dancers:S.dancers||[], speakers:S.speakers||[], camera_mode:S.camera.mode, shots:S.shots,
              group:groupOf(S.actors), fov:S.camera.fov };
    this.camera=new THREE.PerspectiveCamera(primeFovToThree(S.camera.fov), (S.size?S.size[0]/S.size[1]:16/9), 0.05, 500);
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
    var cam = fr.camera;
    if(this.view){
      cam = this.view.apply(fr.camera, this.sc.fov);
      var f = cam.fov > 0 ? primeFovToThree(cam.fov) : this.camera.fov;
      if(Math.abs(this.camera.fov - f) > 1e-6){ this.camera.fov = f; this.camera.updateProjectionMatrix(); }
    }
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
