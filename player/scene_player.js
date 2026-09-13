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
  function jawAt(mouth,t){
    if(!mouth||!mouth.length) return 0.0;
    for(var k=0;k<mouth.length;k++){ var sg=mouth[k];
      if(sg.start<=t && t<sg.start+sg.dur){
        var env=sg.env; if(!env||!env.length) return 0.0;
        var i=Math.floor((t-sg.start)/sg.hop);
        if(i<0) i=0; if(i>=env.length) i=env.length-1;
        return JAW_GAIN*env[i];
      } }
    return 0.0;
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
      out.push({pos:pos, face:face, clip:clip, jaw:jaw, clip_t: clipT>0.0?clipT:0.0});
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
    this.mixers=[]; this.roots=[]; this.curClip=[];
    for(var i=0;i<S.actors.length;i++){ this.mixers.push(null); this.roots.push(null); this.curClip.push(null); }
    var items=[{rel:setRel, kind:'set'}];
    for(var j=0;j<S.actors.length;j++) items.push({rel:S.actors[j].model_glb, kind:'actor', idx:j});
    var loader=new THREE.GLTFLoader(), remaining=items.length;
    function done(){ if(--remaining===0){ self._finish(S); if(onReady) onReady(); } }
    items.forEach(function(item){
      var buf=buffers[item.rel];
      loader.parse(buf, '', function(g){
        if(item.kind==='set'){
          g.scene.traverse(function(o){ if(o.isMesh){ o.castShadow=shadows; o.receiveShadow=shadows; } });
          scene.add(g.scene);
        } else {
          var root=g.scene; if(shadows) root.traverse(function(o){ if(o.isMesh) o.castShadow=true; });
          scene.add(root); self.roots[item.idx]=root;
          self.mixers[item.idx]={ mixer:new THREE.AnimationMixer(root), clips:g.animations||[], cur:null };
        }
        done();
      }, function(err){ global.__err=String(err&&err.message||err); done(); });
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
    }
    this.camera.position.set(fr.camera.pos[0],fr.camera.pos[1],fr.camera.pos[2]);
    this.camera.lookAt(fr.camera.target[0],fr.camera.target[1],fr.camera.target[2]);
    if(this.renderer) this.renderer.render(this.scene, this.camera);
  };

  global.ScenePlayer = ScenePlayer;
  global.__drive = drive;   // exposed for tests
})(typeof window!=="undefined"?window:this);
