// v27.25 (P4) - boot a hosted lesson: fetch what the manifest names, play it on ONE clock.
//
// The page holds no lesson content of its own. Everything comes from the manifest, and everything the
// manifest names is fetched by content address through the one Fetcher - so what this file does is
// resolve names to records and hand them over. No layout, no timing decisions, no view about what a
// lesson looks like; those are in the spec (`no_layout_in_player`, P3).
//
// A lesson may be several bundles. There is ONE renderer for all of them - one WebGLRenderer per part
// would exhaust the browser's context budget, which is exactly how P1's blank canvas happened - and ONE
// clock, engine/playlist's arithmetic, so the scrubber drawn before anything is fetched and the time
// running afterwards cannot disagree.
(function () {
  'use strict';
  var boot = window.__BOOT || {};
  var statusEl = document.getElementById('status');
  var stage = document.getElementById('stage');
  var playBtn = document.getElementById('play');
  var scrub = document.getElementById('scrub');
  var timeEl = document.getElementById('time');
  var langSel = document.getElementById('langs');

  function global_SpeechAudio() { return typeof SpeechAudio !== 'undefined'; }
  function status(s) { if (statusEl) statusEl.textContent = s; }
  function mmss(t) {
    t = Math.max(0, t | 0);
    return (t / 60 | 0) + ':' + ('0' + (t % 60)).slice(-2);
  }

  var fetcher = new Fetcher({
    base: '',
    onConsent: function (info) {
      // The person using the page decides, and is told the size before deciding. Nothing large is ever
      // pulled in the background on their connection.
      return window.confirm('This lesson wants to download ' +
        (info.kind || 'an optional asset') + ' of ' +
        (info.bytes / 1e6).toFixed(1) + ' MB.\n\nDownload it now?');
    }
  });
  window.__fetcher = fetcher;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* the page works without it */ });
  }

  function recOf(manifest, rel) {
    var r = manifest.files[rel];
    if (!r) throw new Error('the manifest does not list ' + rel);
    return {address: r.address, sha: r.sha, bytes: r.bytes, rel: rel, kind: rel};
  }

  function loadBundle(manifestUrl) {
    return fetch(manifestUrl, {cache: 'no-store'}).then(function (r) {
      if (!r.ok) throw new Error('manifest ' + manifestUrl + ' -> HTTP ' + r.status);
      return r.json();
    }).then(function (manifest) {
      window.__manifest = manifest;
      return fetcher.json(recOf(manifest, 'scene.json')).then(function (scene) {
        var rels = [];
        if (scene.set && scene.set.glb) rels.push(scene.set.glb);
        if (scene.set && scene.set.noceil_glb) rels.push(scene.set.noceil_glb);
        scene.actors.forEach(function (a) { rels.push(a.model_glb); });
        rels = rels.filter(function (v, i, a) { return a.indexOf(v) === i; });
        status('fetching ' + rels.length + ' model(s)…');
        return fetcher.getMany(rels.map(function (rel) { return recOf(manifest, rel); }))
          .then(function (buffers) {
            return fetcher.json(recOf(manifest, 'timeline.json')).then(function (timeline) {
              var pack = {manifest: manifest, scene: scene, buffers: buffers, timeline: timeline};
              var bimg = (timeline.badge || {}).img;
              if (!bimg || !manifest.files[bimg]) return pack;
              return fetcher.get(recOf(manifest, bimg)).then(function (buf) {
                pack.badgeUrl = URL.createObjectURL(new Blob([buf], {type: 'image/png'}));
                return pack;
              });
            });
          });
      });
    });
  }

  // ---- ONE renderer, shared by every part ------------------------------------------------------
  var renderer = null, rAspect = 1920 / 1080;

  function displaySize() {
    var w = Math.max(160, Math.min(stage.clientWidth || window.innerWidth || 960, 1920));
    return [Math.round(w), Math.round(w / rAspect)];
  }

  function ensureRenderer(aspect) {
    rAspect = aspect || rAspect;
    if (renderer) { var d = displaySize(); renderer.setSize(d[0], d[1]); return renderer; }
    var ds = displaySize();
    // preserveDrawingBuffer so the frame can still be READ after it is drawn - screenshots, and the
    // gates' pixel checks. Without it a screenshot returns a cleared buffer and a perfectly good render
    // measures as black.
    renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
    renderer.setSize(ds[0], ds[1]);
    renderer.setPixelRatio(1);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.78;
    renderer.setClearColor(0x0a0c10, 1);
    stage.appendChild(renderer.domElement);
    // A browser may take the GL context away at any time - a backgrounded tab, a driver reset, memory
    // pressure on a phone. Without this the page keeps running, keeps seeking, and shows a blank canvas
    // with no error, which is indistinguishable from a lesson that renders nothing.
    renderer.domElement.addEventListener('webglcontextlost', function (e) {
      e.preventDefault();
      window.__contextLost = true;
      status('the graphics context was lost; waiting for the browser to restore it…');
    }, false);
    renderer.domElement.addEventListener('webglcontextrestored', function () {
      window.__contextLost = false;
      status('graphics restored');
      if (window.__part) window.__part.seek(window.__lastLocalT || 0);
    }, false);
    return renderer;
  }

  // ---- one PART of a lesson: its scene, its overlay, its seek ----------------------------------
  function mount(pack) {
    var scene = pack.scene;
    var aspect = ((scene.size && scene.size[0]) || 1920) / ((scene.size && scene.size[1]) || 1080);
    var r = ensureRenderer(aspect);
    var ds = displaySize();
    var player = new ScenePlayer(THREE, r);
    var ov = new Overlay(document.getElementById('overlay'), scene, pack.timeline || {});
    // Apply the viewer's language choice IMMEDIATELY, not when the 3D finishes loading. Doing it in the
    // load callback meant a new part showed its own default languages for as long as its models took to
    // arrive - a second or more on a slow connection - and then flipped. The choice belongs to the
    // person, so it applies the moment there is an overlay to apply it to.
    if (chosenLangs) ov.setShow(chosenLangs);
    var ready = false;
    var part = {
      scene: scene, player: player, overlay: ov, duration: scene.duration,
      seek: function (t) {
        window.__lastLocalT = t;
        if (!ready) return;
        player.seek(t);
        ov.render(t);
      },
      teardown: function () { ov.host.innerHTML = ''; }
    };
    // v27.26 (P5): the music bed, from the declared NOTES and ducked by the declared speech windows.
    var au = scene.audio || {};
    if (au.music && au.music.enabled && (au.music.events || []).length) {
      part.music = new MusicBed(au.music).setDuck(au.duck || []);
      window.__music = part.music;
    }
    // v27.27 (P6): the spoken lines, per line, each verified against its own hash.
    if ((scene.speech || []).length && global_SpeechAudio()) {
      part.speech = new SpeechAudio(scene.speech, fetcher, pack.manifest);
      window.__speech = part.speech;
      part.speech.prefetch(0, 25);
    }
    player.load(scene, pack.buffers, function () {
      ready = true;
      ov.layout(ds[0], ds[1]);
      if (pack.badgeUrl) ov.setBadgeSrc(pack.badgeUrl);
      // the language selector belongs to the PAGE, not to a part, so it keeps the viewer's choice
      // across a join instead of resetting at every new bundle
      wireLangs(ov);
      part.seek(window.__lastLocalT || 0);
    });
    window.__player = player;
    window.__overlay = ov;
    window.__part = part;
    return part;
  }

  var chosenLangs = null;
  function wireLangs(ov) {
    if (!langSel) return;
    if (langSel.dataset.wired === '1') return;
    langSel.innerHTML = '';
    ov.langs.forEach(function (code) {
      var o = document.createElement('option');
      o.value = code; o.textContent = code;
      langSel.appendChild(o);
    });
    var all = document.createElement('option');
    all.value = ov.langs.join(','); all.textContent = ov.langs.join(' + ');
    langSel.appendChild(all);
    langSel.value = ov.show.join(',');
    langSel.onchange = function () {
      chosenLangs = langSel.value;
      if (window.__overlay) window.__overlay.setShow(chosenLangs);
    };
    langSel.dataset.wired = '1';
  }

  // ---- the transport: play, scrub, clock -------------------------------------------------------
  function transport(duration, seekFn, onResize) {
    var playing = false, t0 = 0, started = 0;
    window.__seek = function (t) { return seekFn(t); };
    function frame() {
      if (!playing) return;
      var t = t0 + (performance.now() - started) / 1000;
      if (t >= duration) { t = duration; playing = false; playBtn.textContent = 'Replay'; }
      window.__globalT = t;
      seekFn(t);
      scrub.value = String(Math.round(t / duration * 1000));
      timeEl.textContent = mmss(t) + ' / ' + mmss(duration);
      if (playing) requestAnimationFrame(frame);
    }
    playBtn.onclick = function () {
      if (playing) {
        playing = false; playBtn.textContent = 'Play';
        t0 = t0 + (performance.now() - started) / 1000;
        if (window.__speech) window.__speech.stop();
        return;
      }
      if (parseInt(scrub.value, 10) >= 1000) { t0 = 0; scrub.value = '0'; }
      else { t0 = parseInt(scrub.value, 10) / 1000 * duration; }
      started = performance.now(); playing = true; playBtn.textContent = 'Pause';
      // v27.27 (P6): the spoken lines start with the clock, scheduled at their declared offsets.
      if (window.__speech) window.__speech.playFrom(t0);
      requestAnimationFrame(frame);
    };
    scrub.oninput = function () {
      var t = parseInt(scrub.value, 10) / 1000 * duration;
      t0 = t; started = performance.now();
      window.__globalT = t;
      seekFn(t);
      timeEl.textContent = mmss(t) + ' / ' + mmss(duration);
    };
    timeEl.textContent = mmss(0) + ' / ' + mmss(duration);
    playBtn.disabled = false;
    // Re-size with the window. The camera's aspect comes from the SCENE, not the window, so the framing
    // a lesson was composed with is preserved and the page letterboxes rather than re-framing shots.
    window.addEventListener('resize', function () {
      var d2 = displaySize();
      if (renderer) renderer.setSize(d2[0], d2[1]);
      if (window.__overlay) window.__overlay.layout(d2[0], d2[1]);
      if (onResize) onResize();
      seekFn(window.__globalT || 0);
    });
  }

  // ---- a single bundle -------------------------------------------------------------------------
  function startBundle(pack) {
    var part = mount(pack);
    window.__ready = true;
    status('ready · ' + (fetcher.bytes / 1e6).toFixed(2) + ' MB fetched, ' +
           (fetcher.fromCache / 1e6).toFixed(2) + ' MB from cache');
    transport(pack.scene.duration, function (t) { part.seek(t); });
  }

  // ---- a playlist, on one clock ----------------------------------------------------------------
  // Parts load LAZILY and are kept. The first part starts as soon as it has arrived rather than the page
  // waiting for the whole lesson, and the clock stays authoritative throughout - so scrubbing into a part
  // that has not arrived fetches it and lands at the right moment INSIDE it, not at its beginning.
  function startPlaylist(doc) {
    var clock = new PlaylistClock(doc.items);
    window.__clock = clock;
    var packs = {}, loading = {}, active = -1, current = null;

    function ensure(i) {
      if (packs[i]) return Promise.resolve(packs[i]);
      if (loading[i]) return loading[i];
      loading[i] = loadBundle(clock.items[i].manifest).then(function (p) { packs[i] = p; return p; });
      return loading[i];
    }

    function show(i, localT) {
      return ensure(i).then(function (p) {
        if (active !== i) {
          active = i;
          window.__activeIndex = i;
          if (current) current.teardown();
          current = mount(p);
        }
        current.seek(localT);
        return current;
      });
    }

    var dur = clock.duration;
    status(doc.items.length + ' part(s), ' + mmss(dur) + ' total');
    ensure(0).then(function () {
      return show(0, 0);
    }).then(function () {
      window.__ready = true;
      status('ready · ' + doc.items.length + ' part(s) · ' +
             (fetcher.bytes / 1e6).toFixed(2) + ' MB fetched so far');
      transport(dur, function (t) {
        var a = clock.at(t);
        window.__globalT = t;
        return show(a.item.index, a.local);
      });
      if (clock.items.length > 1) ensure(1);    // prefetch, so a join does not stall
    }).catch(function (e) {
      window.__err = String(e && e.stack || e); window.__ready = true; status('error: ' + e.message);
    });
  }

  if (boot.playlist) {
    fetch(boot.playlist, {cache: 'no-store'}).then(function (r) { return r.json(); })
      .then(function (doc) { window.__playlist = doc; startPlaylist(doc); })
      .catch(function (e) {
        window.__err = String(e && e.stack || e); window.__ready = true; status('error: ' + e.message);
      });
  } else {
    loadBundle(boot.manifest).then(startBundle).catch(function (e) {
      window.__err = String(e && e.stack || e); window.__ready = true; status('error: ' + e.message);
    });
  }
})();
