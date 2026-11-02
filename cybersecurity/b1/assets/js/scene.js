/* ============================================================
   Cybersecurity B1 — scene.js  ("CineScene")
   2D rigged characters on a CSS-3D stage: moving lips, facial
   expression, cue cards, EN + AR subtitles, full transport.
   Plays from file:// with no server. Uses a pre-rendered MP3 and
   baked timings when one exists, and the browser's en-US speech
   synthesiser otherwise, so every scene works today.
   ============================================================ */
(function (w, d) {
  'use strict';
  var CSB1 = w.CSB1, U = CSB1.util, art = CSB1.art;
  var el = U.el, esc = U.esc;

  var Cine = CSB1.cine = {};
  var mounted = [];

  var EXPR = {
    neutral: { brow: 'translateY(0) rotate(0deg)', lidScale: 0 },
    warm: { brow: 'translateY(-3px)', lidScale: 0.18 },
    worried: { brow: 'translateY(2px) rotate(-7deg)', lidScale: 0.1 },
    surprised: { brow: 'translateY(-7px)', lidScale: 0 },
    thinking: { brow: 'translateY(-1px) rotate(6deg)', lidScale: 0.3 }
  };

  function mkStage(holder, scene) {
    var shell = el('div');
    var outer = el('div', 'stage-outer');
    var stage = el('div', 'stage');

    var set = art.set(scene.set);
    var back = el('div', 'layer l-back', set.back());
    var mid = el('div', 'layer l-mid', set.mid());
    var actLayer = el('div', 'layer l-act');
    var fore = el('div', 'layer l-fore', set.fore());
    stage.appendChild(back); stage.appendChild(mid); stage.appendChild(actLayer); stage.appendChild(fore);

    /* actors */
    var actors = {};
    Object.keys(scene.cast).forEach(function (key) {
      var cst = scene.cast[key];
      var box = el('div', 'actor off');
      box.style.left = (cst.at[0] * 100) + '%';
      box.style.width = (cst.scale ? cst.scale * 26 : 26) + '%';
      box.style.bottom = (cst.bottom === undefined ? -4 : cst.bottom) + '%';
      box.style.transform = 'translateX(-50%)';
      box.innerHTML = '<svg viewBox="0 0 200 300" style="width:100%;display:block;overflow:visible">' +
        art.actor(scene.id + '-' + key, cst.rig) + '</svg>';
      actLayer.appendChild(box);
      actors[key] = {
        box: box,
        head: box.querySelector('#' + cssId(scene.id + '-' + key + '-head')),
        brows: box.querySelector('#' + cssId(scene.id + '-' + key + '-brows')),
        mouth: box.querySelector('#' + cssId(scene.id + '-' + key + '-mouth')),
        lidL: box.querySelector('#' + cssId(scene.id + '-' + key + '-lidL')),
        lidR: box.querySelector('#' + cssId(scene.id + '-' + key + '-lidR')),
        armL: box.querySelector('#' + cssId(scene.id + '-' + key + '-armL')),
        armR: box.querySelector('#' + cssId(scene.id + '-' + key + '-armR')),
        cfg: cst
      };
    });

    var card = el('div', 'cuecard');
    var who = el('div', 'who-tag');
    who.style.display = 'none';
    var subs = el('div', 'subs');
    subs.innerHTML = '<div class="sub-en"></div><div class="sub-ar" dir="rtl"></div>';

    outer.appendChild(stage); outer.appendChild(card); outer.appendChild(who); outer.appendChild(subs);
    shell.appendChild(outer);
    holder.appendChild(shell);

    return { shell: shell, outer: outer, stage: stage, actors: actors, card: card, who: who, subs: subs };
  }
  function cssId(s) { return s.replace(/[^A-Za-z0-9_-]/g, '-'); }

  Cine.mount = function (holder, sceneId, hooks) {
    var scene = CSB1.scenes[sceneId];
    if (!scene) {
      holder.appendChild(el('div', 'verdict show no', 'Scene not found: ' + esc(sceneId)));
      return null;
    }
    hooks = hooks || {};
    var S = mkStage(holder, scene);
    var lines = scene.lines;
    var idx = -1, playing = false, loopLine = false, rate = CSB1.prefs.speed || 1;
    var muted = null, shadow = false, mouthCam = false, utter = null;
    var visTimer = null, blinkTimer = null, idleTimer = null;
    var audioEl = null, rafId = 0;

    /* ---------- transport ---------- */
    var tp = el('div', 'transport no-print');
    function tpBtn(icon, title, fn, toggle) {
      var b = el('button', 'tp-btn', art.icon(icon, 17));
      b.type = 'button'; b.title = title; b.setAttribute('aria-label', title);
      b.onclick = function () {
        if (toggle) { var on = b.getAttribute('aria-pressed') === 'true'; b.setAttribute('aria-pressed', on ? 'false' : 'true'); fn(!on, b); }
        else fn(b);
      };
      if (toggle) b.setAttribute('aria-pressed', 'false');
      tp.appendChild(b);
      return b;
    }
    var bPlay = tpBtn('play', 'Play / pause  (space)', function () { playing ? pause() : play(); });
    tpBtn('replay', 'Replay the whole scene', function () { idx = -1; play(); });
    tpBtn('prev', 'Previous line', function () { go(Math.max(0, idx - 1)); });
    tpBtn('next', 'Next line', function () { go(Math.min(lines.length - 1, idx + 1)); });
    tpBtn('loop', 'Loop this line', function (on) { loopLine = on; }, true);
    tpBtn('face', 'Mouth-cam close-up', function (on) { mouthCam = on; applyCam(); }, true);
    tpBtn('mask', 'Shadow mode — a silent gap after each line for you to repeat', function (on) { shadow = on; }, true);

    var seg = el('div', 'tp-seg');
    [0.6, 0.75, 1].forEach(function (r) {
      var b = el('button', '', r === 1 ? '1×' : r + '×');
      b.type = 'button';
      b.setAttribute('aria-pressed', r === rate ? 'true' : 'false');
      b.onclick = function () {
        rate = r; CSB1.prefs.speed = r; CSB1.savePrefs();
        if (audioEl) audioEl.playbackRate = r;     /* takes effect mid-line */
        var bs = seg.querySelectorAll('button');
        for (var z = 0; z < bs.length; z++) bs[z].setAttribute('aria-pressed', 'false');
        b.setAttribute('aria-pressed', 'true');
      };
      seg.appendChild(b);
    });
    tp.appendChild(seg);

    var scrub = el('div', 'scrub');
    scrub.innerHTML = '<div class="track"></div><div class="fill"></div>';
    lines.forEach(function (ln, i) {
      var t = el('div', 'tick');
      t.style.left = (i / lines.length * 100) + '%';
      scrub.appendChild(t);
    });
    scrub.addEventListener('click', function (ev) {
      var rct = scrub.getBoundingClientRect();
      var f = (ev.clientX - rct.left) / rct.width;
      go(Math.max(0, Math.min(lines.length - 1, Math.floor(f * lines.length))));
    });
    tp.appendChild(scrub);

    var bTrans = el('button', 'tp-btn', art.icon('book', 17));
    bTrans.type = 'button'; bTrans.title = 'Show / hide the transcript';
    bTrans.setAttribute('aria-pressed', 'false');
    tp.appendChild(bTrans);
    S.shell.appendChild(tp);

    var transcript = el('div', 'lines-list no-print');
    transcript.style.display = 'none';
    lines.forEach(function (ln, i) {
      var b = el('button', '');
      b.type = 'button';
      b.innerHTML = '<span class="nm">' + esc(nameOf(ln.who)) + '</span>' + esc(ln.en) +
        (ln.ar ? '<span class="ar">' + esc(ln.ar) + '</span>' : '');
      b.onclick = function () { go(i); };
      transcript.appendChild(b);
    });
    bTrans.onclick = function () {
      var on = bTrans.getAttribute('aria-pressed') === 'true';
      bTrans.setAttribute('aria-pressed', on ? 'false' : 'true');
      transcript.style.display = on ? 'none' : 'block';
    };
    S.shell.appendChild(transcript);

    function nameOf(k) { return (scene.cast[k] && scene.cast[k].name) || k; }

    /* ---------- subtitles ---------- */
    function applySubPrefs() {
      S.subs.classList.toggle('hide-en', !CSB1.prefs.subEn);
      S.subs.classList.toggle('hide-ar', !CSB1.prefs.subAr);
    }
    applySubPrefs();
    Cine.applySubPrefs = function () { mounted.forEach(function (m) { m.applySubPrefs(); }); };

    function setSubs(line) {
      var en = S.subs.querySelector('.sub-en'), ar = S.subs.querySelector('.sub-ar');
      if (!line) { en.innerHTML = ''; ar.textContent = ''; return; }
      en.innerHTML = line.en.split(/\s+/).map(function (wd, i) {
        return '<span class="w" data-wi="' + i + '">' + esc(wd) + '</span>';
      }).join(' ');
      ar.textContent = line.ar || '';
    }
    function markWord(i) {
      var ws = S.subs.querySelectorAll('.sub-en .w');
      for (var z = 0; z < ws.length; z++) ws[z].classList.toggle('on', z === i);
    }

    /* ---------- faces ---------- */
    function setExpr(a, name) {
      var e2 = EXPR[name] || EXPR.neutral;
      if (a.brows) { a.brows.style.transition = 'transform .2s'; a.brows.style.transform = e2.brow; }
      [a.lidL, a.lidR].forEach(function (l) { if (l) { l.style.transition = 'transform .2s'; l.style.transform = 'scaleY(' + e2.lidScale + ')'; } });
    }
    function blink(a) {
      if (!a.lidL) return;
      var base = a.lidL.style.transform || 'scaleY(0)';
      [a.lidL, a.lidR].forEach(function (l) { l.style.transition = 'transform .09s'; l.style.transform = 'scaleY(1)'; });
      setTimeout(function () { [a.lidL, a.lidR].forEach(function (l) { l.style.transform = base; }); }, 95);
    }
    function startIdle() {
      stopIdle();
      blinkTimer = setInterval(function () {
        Object.keys(S.actors).forEach(function (k) { if (Math.random() < .55) blink(S.actors[k]); });
      }, 3400);
      var phase = 0;
      idleTimer = setInterval(function () {
        phase += 0.14;
        Object.keys(S.actors).forEach(function (k, n) {
          var a = S.actors[k];
          a.box.style.transform = 'translateX(-50%) translateY(' + (Math.sin(phase + n) * 1.4).toFixed(2) + 'px) scaleY(' + (1 + Math.sin(phase * 1.3 + n) * 0.004).toFixed(4) + ')';
        });
      }, 90);
    }
    function stopIdle() { clearInterval(blinkTimer); clearInterval(idleTimer); }

    function setViseme(a, v) { if (a && a.mouth) a.mouth.setAttribute('d', art.viseme(v)); }
    /* the measured path: loudness opens the jaw, and gates the other two shut in a pause */
    function setMouth(a, open, wide, round) {
      if (!a || !a.mouth) return;
      if (open < 0.07) { a.mouth.setAttribute('d', art.mouthPath(0, 0.45, 0.35)); return; }
      a.mouth.setAttribute('d', art.mouthPath(open, wide, round));
    }
    function mouthRest() { Object.keys(S.actors).forEach(function (k) { setViseme(S.actors[k], 'rest'); }); }

    /* drive the mouth for one spoken word */
    function speakWord(a, word) {
      clearInterval(visTimer);
      var seq = art.wordToVisemes(word);
      var i = 0;
      var step = Math.max(55, Math.min(130, (word.length * 62) / Math.max(1, seq.length))) / rate;
      setViseme(a, seq[0]);
      visTimer = setInterval(function () {
        i++;
        if (i >= seq.length) { clearInterval(visTimer); setViseme(a, 'MBP'); return; }
        setViseme(a, seq[i]);
      }, step);
    }
    /* generic chatter when word boundaries are unavailable */
    function chatter(a) {
      clearInterval(visTimer);
      var pool = ['AA', 'EE', 'OH', 'MBP', 'L', 'OO', 'rest'];
      visTimer = setInterval(function () { setViseme(a, pool[Math.floor(Math.random() * pool.length)]); }, 115 / rate);
    }

    /* ---------- camera ---------- */
    function applyCam(line) {
      S.stage.classList.remove('cu', 'mid', 'dim');
      var ln = line || lines[idx];
      if (!ln) return;
      var a = S.actors[ln.who];
      if (a) {
        var x = (a.cfg.at[0] - 0.5) * -100;
        S.stage.style.setProperty('--cux', x + '%');
      }
      if (scene.audioOnlyFirst && hooks.audioOnly) { S.stage.classList.add('dim'); return; }
      if (mouthCam) { S.stage.classList.add('cu'); return; }
      var shot = ln.cam && ln.cam.shot;
      if (shot === 'cu') S.stage.classList.add('cu');
      else if (shot === 'mid') S.stage.classList.add('mid');
    }

    /* ---------- cue cards ---------- */
    var cardTimer = null;
    function showCard(cc) {
      clearTimeout(cardTimer);
      if (!cc) { S.card.classList.remove('in'); return; }
      S.card.innerHTML = (art.hasSpot(cc.img) ? art.spot(cc.img) : art.spot('take-notes')) +
        '<div class="cap">' + esc(cc.en) + '</div>' +
        (cc.ar ? '<div class="cap-ar" dir="rtl">' + esc(cc.ar) + '</div>' : '');
      S.card.classList.add('in');
      cardTimer = setTimeout(function () { S.card.classList.remove('in'); }, (cc.hold || 3800) / rate);
    }

    /* ---------- playback ---------- */
    function highlightActor(whoKey) {
      Object.keys(S.actors).forEach(function (k) {
        S.actors[k].box.classList.toggle('off', k !== whoKey);
        S.actors[k].box.classList.toggle('talk', k === whoKey);
      });
      S.who.style.display = 'block';
      S.who.textContent = nameOf(whoKey);
    }

    function go(i) {
      stop();
      idx = i;
      renderLine();
      play();
    }
    function renderLine() {
      var ln = lines[idx];
      if (!ln) return;
      setSubs(ln);
      highlightActor(ln.who);
      applyCam(ln);
      Object.keys(S.actors).forEach(function (k) { setExpr(S.actors[k], k === ln.who ? (ln.face || 'neutral') : 'neutral'); });
      var bs = transcript.querySelectorAll('button');
      for (var z = 0; z < bs.length; z++) bs[z].classList.toggle('on', z === idx);
      scrub.querySelector('.fill').style.width = ((idx + 1) / lines.length * 100) + '%';
      if (hooks.onLine) hooks.onLine(idx, ln);
    }

    function play() {
      if (idx < 0) idx = 0;
      playing = true;
      bPlay.innerHTML = art.icon('pause', 17);
      if (hooks.onPlay) hooks.onPlay();
      startIdle();
      speakLine();
    }
    function speakLine() {
      var ln = lines[idx];
      if (!ln) { finish(); return; }
      renderLine();
      if (ln.card) setTimeout(function () { showCard(ln.card); }, (ln.card.at || 0.8) * 1000 / rate);

      var a = S.actors[ln.who];
      var isMuted = muted && muted === ln.who;

      if (isMuted) {
        /* learner speaks this part: hold a silent gap the length of the line */
        S.who.textContent = nameOf(ln.who) + ' — your line';
        mouthRest();
        var mclip = CSB1.clip(ln.en, CSB1.voiceFor(null, scene.id, ln.who));
        var ms = (mclip ? (mclip.b - mclip.a) * 1000 + 400 : Math.max(1800, ln.en.length * 62)) / rate;
        var left = Math.ceil(ms / 1000);
        var cd = setInterval(function () {
          left--;
          S.who.textContent = nameOf(ln.who) + ' — your line (' + Math.max(0, left) + ')';
          if (left <= 0) clearInterval(cd);
        }, 1000);
        utter = null;
        setTimeout(function () { clearInterval(cd); afterLine(); }, ms);
        return;
      }

      /* a recorded line is played; anything without one keeps the browser voice */
      var voice = CSB1.voiceFor(null, scene.id, ln.who);
      var clip = CSB1.clip(ln.en, voice);
      if (clip) { playClip(ln, a, clip); return; }
      ttsLine(ln, a);
    }

    /* ---------- recorded playback, driven by the measured tracks ---------- */
    function playClip(ln, a, clip) {
      if (!audioEl) { audioEl = new w.Audio(); audioEl.preload = 'auto'; }
      cancelAnimationFrame(rafId);
      audioEl.onended = null; audioEl.onerror = null;
      audioEl.src = clip.url;
      audioEl.volume = clip.v;
      audioEl.playbackRate = rate;
      try { audioEl.preservesPitch = true; audioEl.mozPreservesPitch = true; } catch (e) { }

      var hop = CSB1.audioHop, env = clip.env, wd = clip.wide, rd = clip.round;
      var times = clip.wd || [], stopAt = clip.b, ended = false;

      function finishClip() {
        if (ended) return;
        ended = true;
        cancelAnimationFrame(rafId);
        try { audioEl.pause(); } catch (e) { }
        clearInterval(visTimer);
        setViseme(a, 'rest');
        markWord(-1);
        afterLine();
      }
      function frame() {
        if (!playing || ended) return;
        var t = audioEl.currentTime;
        var i = (t / hop) | 0;
        if (i >= 0 && i < env.length) setMouth(a, env[i], wd[i], rd[i]);
        var wi = -1;
        for (var z = 0; z < times.length; z++) { if (t >= times[z]) wi = z; else break; }
        markWord(wi);
        if (t >= stopAt) { finishClip(); return; }
        rafId = requestAnimationFrame(frame);
      }
      audioEl.onended = finishClip;
      audioEl.onerror = function () { if (!ended) { ended = true; ttsLine(ln, a); } };

      function start() {
        try { audioEl.currentTime = clip.a; } catch (e) { }
        var p = audioEl.play();
        if (p && p.catch) p.catch(function () { if (!ended) { ended = true; ttsLine(ln, a); } });
        rafId = requestAnimationFrame(frame);
      }
      if (audioEl.readyState >= 1) start();
      else audioEl.onloadedmetadata = start;
    }

    /* ---------- browser-voice fallback (unchanged behaviour) ---------- */
    function ttsLine(ln, a) {
      var cfg = scene.cast[ln.who] || {};
      utter = CSB1.speak(ln.en, {
        voice: cfg.voice || 'f',
        rate: rate * (cfg.rate || 1),
        pitch: cfg.pitch || 1,
        onstart: function () { chatter(a); },
        onboundary: function (ev) {
          if (ev.name && ev.name !== 'word') return;
          var txt = ln.en, ci = ev.charIndex || 0;
          var before = txt.slice(0, ci);
          var wi = (before.match(/\S+/g) || []).length;
          var word = (txt.slice(ci).match(/^\S+/) || [''])[0];
          markWord(wi);
          if (word) speakWord(a, word);
        },
        onend: function () {
          clearInterval(visTimer);
          setViseme(a, 'rest');
          markWord(-1);
          afterLine();
        }
      });
      if (!utter) {
        /* no speech support at all — still advance so the scene is usable */
        chatter(a);
        setTimeout(function () { clearInterval(visTimer); setViseme(a, 'rest'); afterLine(); }, Math.max(1600, ln.en.length * 58) / rate);
      }
    }
    function afterLine() {
      if (!playing) return;
      var ln = lines[idx];
      /* in shadow mode the silent gap matches the real spoken length */
      var clip = CSB1.clip(ln.en, CSB1.voiceFor(null, scene.id, ln.who));
      var spoken = clip ? (clip.b - clip.a) * 1000 : Math.max(1400, ln.en.length * 58);
      var gap = shadow ? spoken / rate + 250 : (ln.pause || 320);
      if (shadow) S.who.textContent = 'your turn — repeat it';
      setTimeout(function () {
        if (!playing) return;
        if (loopLine) { speakLine(); return; }
        if (idx >= lines.length - 1) { finish(); return; }
        idx++;
        speakLine();
      }, gap);
    }
    function finish() {
      stop();
      S.who.style.display = 'none';
      setSubs(null);
      scrub.querySelector('.fill').style.width = '100%';
      if (hooks.onEnd) hooks.onEnd();
    }
    function pause() { stop(); }
    function stop() {
      playing = false;
      bPlay.innerHTML = art.icon('play', 17);
      CSB1.stopSpeak();
      cancelAnimationFrame(rafId);
      if (audioEl) { audioEl.onended = null; audioEl.onerror = null; try { audioEl.pause(); } catch (e) { } }
      clearInterval(visTimer);
      mouthRest();
      stopIdle();
      Object.keys(S.actors).forEach(function (k) { S.actors[k].box.style.transform = 'translateX(-50%)'; });
      if (hooks.onStop) hooks.onStop();
    }

    /* keyboard */
    S.outer.setAttribute('tabindex', '0');
    S.outer.addEventListener('keydown', function (ev) {
      if (ev.key === ' ') { ev.preventDefault(); playing ? pause() : play(); }
      else if (ev.key === 'ArrowLeft') { ev.preventDefault(); go(Math.max(0, idx - 1)); }
      else if (ev.key === 'ArrowRight') { ev.preventDefault(); go(Math.min(lines.length - 1, idx + 1)); }
    });
    S.outer.addEventListener('click', function (ev) {
      if (ev.target.closest('.hs')) return;
      playing ? pause() : play();
    });

    /* initial frame — a wide establishing shot, no close-up until it plays */
    idx = 0;
    renderLine();
    S.stage.classList.remove('cu', 'mid', 'dim');
    setSubs(null);
    S.who.style.display = 'none';
    mouthRest();
    Object.keys(S.actors).forEach(function (k) { S.actors[k].box.classList.remove('off'); });

    var ctl = {
      play: play, pause: pause, stop: stop, go: go,
      setMute: function (whoKey) { muted = whoKey; },
      setShadow: function (v) { shadow = v; },
      applySubPrefs: applySubPrefs,
      scene: scene,
      outerEl: S.outer
    };
    mounted.push(ctl);
    return ctl;
  };

  /* Find a mounted player for a scene, so a comprehension item can
     send the learner back to the exact line the answer is in. */
  Cine.find = function (sceneId) {
    for (var i = 0; i < mounted.length; i++) if (mounted[i].scene.id === sceneId) return mounted[i];
    return null;
  };
  /* Cue a scene to one line and play it. */
  Cine.cue = function (sceneId, lineIx) {
    var m = Cine.find(sceneId);
    if (!m) return false;
    m.stop();
    m.go(Math.max(0, lineIx || 0));
    try { m.outerEl.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { }
    m.play();
    return true;
  };

  /* stop every scene when the page is hidden or unloaded */
  d.addEventListener('visibilitychange', function () { if (d.hidden) mounted.forEach(function (m) { m.stop(); }); });
  w.addEventListener('pagehide', function () { CSB1.stopSpeak(); });

})(window, document);
