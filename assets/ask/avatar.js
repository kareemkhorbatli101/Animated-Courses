/* The front door's face: a still that becomes a character who moves his mouth while the answer
 * is read out, inside the same box the question is typed into.
 *
 * NOTHING HERE LOADS UNTIL SOMEBODY ASKS FOR A VOICE. The home page's rule is that it fetches
 * nothing by script when it opens, so that it still works from a folder on a USB stick with no
 * server and no internet. The poster is a 113 KB picture and costs one request; the character is
 * 4.5 MB of glTF and three.js, and it is fetched only when the speaker toggle goes on - which is
 * also the browser's own rule, since autoplay policy forbids sound before an interaction anyway.
 * One decision satisfies both.
 *
 * THE PICTURE FOLLOWS THE SPEECH. IT NEVER PREDICTS IT. The Web Speech API reports no duration,
 * no envelope and no audio stream - only that a voice started, reached a word, and ended. So this
 * file does not estimate how long an answer takes and then animate for that long: it starts the
 * mouth on `onstart`, nudges it on every `onboundary`, and stops it on `onend`. An answer that
 * overruns its word cap costs time and nothing else, which is exactly why the cap can be ASKED of
 * the model instead of cut out of its reply.
 *
 * THE MOUTH ITSELF IS NOT IN THIS FILE, deliberately. It lives in player/scene_player.js beside
 * the measured mouth a lesson uses, because a second implementation of the one thing this feature
 * is about is the thing most certain to drift from the first. This file supplies the three facts
 * the voice reports and the player does the rest.
 *
 * THE CHARACTER IS GENERIC AND SO IS THE VOICE. He is not the owner, nobody's likeness is cloned,
 * and the voice is whichever one the visitor's own device already has. That decision is what
 * removed the entire licensing and disclosure question from this feature.
 */
(function (root, doc) {
  'use strict';

  var BASE = 'assets/frontdoor/';
  var POSTER = BASE + 'poster.png';
  // the order matters: GLTFLoader and scene_player both expect a global THREE to exist already
  var LIBS = ['player/three.min.js', 'player/GLTFLoader.js', 'player/scene_player.js'];

  // The scene is a six-second idle and the clip loops, so wall-clock time modulo its duration is
  // a continuous, seamless idle for as long as the box is open.
  var FPS = 30;

  function script(src) {
    return new Promise(function (ok, bad) {
      var s = doc.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = ok;
      s.onerror = function () { bad(new Error('could not load ' + src)); };
      doc.head.appendChild(s);
    });
  }

  function libs() {
    if (root.ScenePlayer && root.THREE && root.THREE.GLTFLoader) return Promise.resolve();
    return LIBS.reduce(function (chain, s) {
      return chain.then(function () {
        // already present (a page that also runs the lesson player) - do not load it twice
        if (s.indexOf('three.min') >= 0 && root.THREE) return;
        if (s.indexOf('GLTFLoader') >= 0 && root.THREE && root.THREE.GLTFLoader) return;
        if (s.indexOf('scene_player') >= 0 && root.ScenePlayer) return;
        return script(s);
      });
    }, Promise.resolve());
  }

  function bytes(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ' (HTTP ' + r.status + ')');
      return r.arrayBuffer();
    });
  }

  function css() {
    if (doc.getElementById('askavatar-css')) return;
    var s = doc.createElement('style');
    s.id = 'askavatar-css';
    s.textContent = [
      // A BUST, NOT A FULL FRAME. The render is 16:9 and the box shows the top of it: a front door
      // is a head and shoulders, and the frame below the collar is chair and table that say nothing.
      // max-height, because a dialog on a laptop in landscape has about 360 px to spend in total
      // and a face that takes 280 of them pushes the question box off the screen. The crop below
      // keeps the head in view as the box gets shorter.
      '.askface{position:relative;width:100%;aspect-ratio:16/7.4;max-height:26vh;',
      'overflow:hidden;border-radius:10px;',
      'background:var(--surface2,#1F262E);border:1px solid var(--border,#5B677A);margin:0 0 14px}',
      '.askface>img,.askface>canvas{position:absolute;inset:0;width:100%;height:100%;',
      'object-fit:cover;object-position:50% 12%;display:block}',
      '.askface>canvas{opacity:0;transition:opacity .35s}',
      '.askface.live>canvas{opacity:1}',
      '.askface.live>img{opacity:0;transition:opacity .35s}',
      // the caption sits ON the picture, bottom left, the way a name badge would
      '.askfacecap{position:absolute;left:10px;right:10px;bottom:8px;margin:0;z-index:2;',
      'font:400 12px/1.45 system-ui,sans-serif;color:#EAF0F6;text-shadow:0 1px 3px rgba(0,0,0,.75)}',
      '.askfacecap b{font-weight:600}'
    ].join('');
    doc.head.appendChild(s);
  }

  /* ONE PANEL PER DIALOG. `wake()` is idempotent and returns the same promise however many times
   * it is called, so turning the speaker on and off repeatedly does not start three downloads. */
  function panel(caption) {
    css();
    var el = doc.createElement('div');
    el.className = 'askface';

    var img = doc.createElement('img');
    img.src = POSTER;
    img.alt = 'A person sitting in a room, waiting to be asked something.';
    el.appendChild(img);

    var cap = doc.createElement('p');
    cap.className = 'askfacecap';
    cap.innerHTML = '';
    cap.appendChild(doc.createTextNode(caption || ''));
    el.appendChild(cap);

    var cv = doc.createElement('canvas');
    el.appendChild(cv);

    var st = {player: null, raf: 0, waking: null, dead: false, t0: Date.now() / 1000, dur: 6};

    function frame() {
      if (st.dead || !st.player) return;
      st.raf = root.requestAnimationFrame(frame);
      var t = (Date.now() / 1000 - st.t0) % st.dur;
      try { st.player.seek(t); } catch (e) { /* one bad frame must not stop the loop */ }
    }

    function sizeTo() {
      var r = el.getBoundingClientRect();
      if (!r.width) return false;
      // The render is 16:9 and the box crops it, so the CANVAS is 16:9 too - sizing it to the
      // visible box instead would squash the picture and leave the crop doing nothing.
      var w = Math.max(240, Math.round(r.width));
      var dpr = Math.min(2, root.devicePixelRatio || 1);
      st.player.renderer.setPixelRatio(dpr);
      st.player.renderer.setSize(w, Math.round(w * 9 / 16), false);
      return true;
    }

    function wake() {
      if (st.waking) return st.waking;
      st.waking = libs().then(function () {
        return fetch(BASE + 'scene.json').then(function (r) {
          if (!r.ok) throw new Error('scene.json (HTTP ' + r.status + ')');
          return r.json();
        });
      }).then(function (S) {
        st.dur = S.duration || 6;
        var THREE = root.THREE;
        // FETCH ONLY WHAT THE PLAYER WILL ACTUALLY OPEN. scene_player picks the no-ceiling bake
        // whenever shadows are on, because the key light is above the room and a roof blocks it.
        // The rule is written out the same way here, so the page never downloads a megabyte of
        // room that is then never parsed.
        var shadows = !!(S.lighting && S.lighting.shadows);
        var setRel = (shadows && S.set.noceil_glb) ? S.set.noceil_glb
                                                   : (S.set.glb || S.set.noceil_glb);
        var need = [setRel];
        (S.actors || []).forEach(function (a) { need.push(a.model_glb); });
        return Promise.all(need.map(function (rel) { return bytes(BASE + rel); }))
          .then(function (bufs) {
            var buffers = {};
            need.forEach(function (rel, i) { buffers[rel] = bufs[i]; });
            // preserveDrawingBuffer, as the lesson player has it: without it the canvas is empty
            // to anything that reads it after the frame, and a mouth that cannot be MEASURED can
            // only be eyeballed - which is how a mouth that never moves passes a review.
            var renderer = new THREE.WebGLRenderer({canvas: cv, antialias: true,
                                                    preserveDrawingBuffer: true});
            /* THE EXPOSURE IS MEASURED AGAINST THE STILL IT REPLACES, not chosen by eye.
             *
             * This panel does the one thing nothing else on the site does: it swaps a picture the
             * PYTHON renderer drew for a picture THREE.js draws, in the same rectangle, while
             * somebody is looking at it. Any difference in grade shows up as a flash. The lesson
             * player's own 0.78 gave mean luminance 174.5 against the poster's 105.9 - sixty-five
             * per cent too bright, which is not a nuance, it is a different room.
             *
             * It is not a bug in either renderer. scene_player.addLights is tuned for THREE as a
             * whole, speaking_room's own baking rig asks for different light levels again, and
             * pygfx and THREE do not agree on what an intensity means. So the number was SOLVED:
             * six exposures rendered and measured against the poster over the whole frame, giving
             * 0.24 -> 101.8 and 0.28 -> 111.7, and 0.257 by interpolation between them.
             *
             * It is specific to this panel and nothing else reads it. If the poster is ever
             * re-rendered, this number has to be re-measured, and gates/site_ask fails if the two
             * frames' mean luminance drifts apart by more than a few per cent. */
            if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
            if (THREE.ACESFilmicToneMapping) renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 0.257;
            renderer.setClearColor(0x000000, 1);
            st.player = new root.ScenePlayer(THREE, renderer);
            return new Promise(function (ok) {
              st.player.load(S, buffers, function () {
                if (st.dead) return ok(false);
                sizeTo();
                el.classList.add('live');
                st.t0 = Date.now() / 1000;
                frame();
                ok(true);
              });
            });
          });
      })['catch'](function (e) {
        // A FAILED FACE IS NOT A FAILED ANSWER. The still stays, the voice still speaks, and the
        // caption says what happened rather than leaving a picture that silently never moves.
        st.waking = null;
        cap.textContent = 'The moving picture could not load, so this is a still. ' +
                          'The answer is unaffected.';
        throw e;
      });
      return st.waking;
    }

    return {
      el: el,
      live: function () { return !!st.player && !st.dead; },
      caption: function (s) { cap.textContent = s; },
      wake: wake,
      // the three facts a speaking voice reports, passed straight through to the player's mouth
      start: function () { if (st.player) st.player.sayStart(0); },
      word: function () { if (st.player) st.player.sayWord(); },
      stop: function () { if (st.player) st.player.sayStop(); },
      destroy: function () {
        st.dead = true;
        if (st.raf) root.cancelAnimationFrame(st.raf);
        st.raf = 0;
        try { if (st.player && st.player.renderer) st.player.renderer.dispose(); } catch (e) {}
        st.player = null;
      }
    };
  }

  root.SiteAvatar = {panel: panel, POSTER: POSTER};
})(window, document);
