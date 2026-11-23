/* ============================================================
   English for Accounting and Financial Management B1 — scene.js  ("CineScene")
   Copied unchanged from the Cybersecurity B1 engine (namespace renamed only).
   2D rigged characters on a CSS-3D stage: moving lips, facial
   expression, cue cards, EN + AR subtitles, full transport.
   Plays from file:// with no server. Uses a pre-rendered MP3 and
   baked timings when one exists, and the browser's en-US speech
   synthesiser otherwise, so every scene works today.
   ============================================================ */
(function (w, d) {
  'use strict';
  var FMS = w.FMS, U = FMS.util, art = FMS.art;
  var el = U.el, esc = U.esc;

  var Cine = FMS.cine = {};
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
    /* WHICH ARRANGEMENT OF THIS ROOM. See the patch note in
       tools/course_engine.py. Derived from the id when the scene does
       not say, so it is stable across reloads rather than random. */
    var arr = scene.arr;
    if (arr === undefined || arr === null) {
      var hsh = 0, sid = String(scene.id || '');
      for (var hi = 0; hi < sid.length; hi++) {
        hsh = (hsh * 31 + sid.charCodeAt(hi)) % 9973;
      }
      arr = hsh % 3;
    }
    var back = el('div', 'layer l-back', set.back(arr));
    var mid = el('div', 'layer l-mid', set.mid(arr));
    var actLayer = el('div', 'layer l-act');
    var fore = el('div', 'layer l-fore', set.fore(arr));
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
        art.actor(scene.id + '-' + key, cst.rig, cst) + '</svg>';
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
    var scene = FMS.scenes[sceneId];
    if (!scene) {
      /* ANNOUNCED, like every other verdict. This one is written after the card
         has been built, from a setTimeout, so buildCard's own pass over the card's
         verdicts has already run and cannot reach it. 29 cards in
         accountants-intl/b1 show this message and a screen reader was told nothing.
         RESIDUALS FM-31. */
      var sceneErr = el('div', 'verdict show no', 'Scene not found: ' + esc(sceneId));
      sceneErr.setAttribute('role', 'status');
      sceneErr.setAttribute('aria-live', 'polite');
      holder.appendChild(sceneErr);
      return null;
    }
    hooks = hooks || {};
    var S = mkStage(holder, scene);
    var lines = scene.lines;
    var idx = -1, playing = false, loopLine = false, rate = FMS.prefs.speed || 1;
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
    /* REPLAY IS A LISTENING PASS. See the patch note in
       tools/course_engine.py. */
    var wasEn = null;
    var bWords = null;
    function restoreSubs() {
      if (wasEn === null) return;
      FMS.prefs.subEn = wasEn;
      wasEn = null;
      applySubPrefs();
      if (bWords) bWords.style.display = 'none';
    }
    /* ONLY WHERE THE COURSE ASKED FOR IT - see the patch note for
       a-course-declares-its-own-features. Off, this is the plain
       Replay every course has always had. */
    var plainReplay = !!(FMS.features || {}).replayPlain;
    tpBtn('replay', plainReplay
          ? 'Replay with the words hidden - a listening pass'
          : 'Replay the whole scene',
          function () {
      if (plainReplay) {
        if (wasEn === null) wasEn = !!FMS.prefs.subEn;
        FMS.prefs.subEn = false;
        applySubPrefs();
        if (bWords) bWords.style.display = '';
      }
      idx = -1; play();
    });
    if (plainReplay) {
      bWords = tpBtn('book', 'Show the words again', function () {
        restoreSubs();
      });
      bWords.style.display = 'none';
      bWords.classList.add('tp-words');
    }
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
        rate = r; FMS.prefs.speed = r; FMS.savePrefs();
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

    /* A LINE'S ARABIC IS A LOOKUP ON ITS ENGLISH, not a second copy of
       it. An authored `ar` wins; otherwise the engine's own normalised
       table answers, and answers nothing when nothing was written. */
    function arOf(ln) {
      if (!ln) return '';
      if (ln.ar) return ln.ar;
      return (FMS.ar && ln.en && FMS.ar(ln.en)) || '';
    }
    var transcript = el('div', 'lines-list no-print');
    transcript.style.display = 'none';
    lines.forEach(function (ln, i) {
      var b = el('button', '');
      b.type = 'button';
      var lnAr = arOf(ln);
      b.innerHTML = '<span class="nm">' + esc(nameOf(ln.who)) + '</span>' + esc(ln.en) +
        (lnAr ? '<span class="ar">' + esc(lnAr) + '</span>' : '');
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
      S.subs.classList.toggle('hide-en', !FMS.prefs.subEn);
      S.subs.classList.toggle('hide-ar', !FMS.prefs.subAr);
    }
    applySubPrefs();
    Cine.applySubPrefs = function () { mounted.forEach(function (m) { m.applySubPrefs(); }); };

    function setSubs(line) {
      var en = S.subs.querySelector('.sub-en'), ar = S.subs.querySelector('.sub-ar');
      if (!line) { en.innerHTML = ''; ar.textContent = ''; return; }
      /* ⚠ A HIDDEN LINE MUST HIDE ITS ARABIC TOO. This is the easiest thing in
         the whole feature to get wrong: mask the English, leave the subtitle,
         and the exercise is over for exactly the learners the Arabic is there
         for. Both are blanked together, here, in the one place that writes
         them. gates/course_takepart.py asserts it. */
      var mask = hooks.maskLine ? hooks.maskLine(line) : null;
      if (mask) {
        en.innerHTML = mask;
        ar.textContent = '';
        return;
      }
      en.innerHTML = line.en.split(/\s+/).map(function (wd, i) {
        return '<span class="w" data-wi="' + i + '">' + esc(wd) + '</span>';
      }).join(' ');
      /* THE ARABIC FOLLOWS BY CLAUSE, not word for word. See the patch
         note in tools/course_engine.py. */
      var arTxt = arOf(line);
      var arCl = String(arTxt).split(/(?<=[\u060c\u061b\u061f.!?])\s+/)
        .filter(function (x) { return x.trim(); });
      if (arCl.length < 2) { ar.textContent = arTxt; }
      else {
        ar.innerHTML = arCl.map(function (cl, i) {
          return '<span class="c" data-ci="' + i + '">'
               + esc(cl) + '</span>';
        }).join(' ');
      }
    }
    function markWord(i) {
      var ws = S.subs.querySelectorAll('.sub-en .w');
      for (var z = 0; z < ws.length; z++) ws[z].classList.toggle('on', z === i);
      /* THE ARABIC CLAUSE HOLDING THE SAME SHARE OF THE LINE lifts
         with it - see the patch note in tools/course_engine.py */
      var cls = S.subs.querySelectorAll('.sub-ar .c');
      if (cls.length > 1) {
        var ci = i < 0 ? -1
          : Math.min(cls.length - 1,
                     Math.floor(i / Math.max(1, ws.length)
                                * cls.length));
        for (var y = 0; y < cls.length; y++) {
          cls[y].classList.toggle('on', y === ci);
        }
      }
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
        (arOf(cc) ? '<div class="cap-ar" dir="rtl">' + esc(arOf(cc)) + '</div>' : '');
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
        /* ⚠ WHO DECIDES HOW LONG THE LEARNER'S TURN IS.
           The original behaviour holds a silent gap the length of the recorded
           line and moves on. That is right for the roleplay card, where the
           learner has their lines in front of them and is keeping time with
           the scene. It is wrong for Take a part, where the words are hidden
           and the learner may need four presses of Show more before they can
           say anything at all - a fixed gap would run out mid-thought.
           So when something has claimed the turn, it owns the gap, and the
           scene does not advance until it says so. With no claimant the old
           countdown runs exactly as before, which is what keeps roleplay and
           every other course unchanged. */
        if (hooks.onMyLine) {
          S.who.textContent = nameOf(ln.who) + ' — your line';
          mouthRest();
          utter = null;
          var advanced = false;
          hooks.onMyLine(idx, ln, function () {
            if (advanced) return;          /* done() twice must not skip a line */
            advanced = true;
            afterLine();
          });
          return;
        }
        /* learner speaks this part: hold a silent gap the length of the line */
        S.who.textContent = nameOf(ln.who) + ' — your line';
        mouthRest();
        var mclip = FMS.clip(ln.en, FMS.voiceFor(null, scene.id, ln.who));
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
      var voice = FMS.voiceFor(null, scene.id, ln.who);
      var clip = FMS.clip(ln.en, voice);
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

      var hop = FMS.audioHop, env = clip.env, wd = clip.wide, rd = clip.round;
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
      utter = FMS.speak(ln.en, {
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
      var clip = FMS.clip(ln.en, FMS.voiceFor(null, scene.id, ln.who));
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
      FMS.stopSpeak();
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

    /* ============================================================
       TAKE A PART - the learner says one of the roles, with the words
       of their own line revealed a few at a time.  (2026-11-23)

       WHY IT LIVES HERE AND NOT IN A CARD. Every listening screen in this
       course already mounts a scene, and twelve of the site's fifteen courses
       do too. Putting the feature in the player means no card data changes, no
       new component for an author to remember, and it arrives on all 20 of this
       course's listening and dialogue screens at once. The `roleplay` card is
       untouched: it mutes a part as well, but it PRINTS the learner's lines in
       full underneath, which is the opposite exercise.

       WHAT IT STANDS ON. `setMute` and the silent gap were already here. The
       only new thing the player needed was for the gap to end when the LEARNER
       says it does rather than after a fixed count - see `hooks.onMyLine`.

       THE REVEAL IS CHUNKED, NOT WORD BY WORD. Four presses to the whole line;
       never more than eight words in a press, so a forty-word line takes more
       presses rather than bigger leaps; a boundary moves to the nearest phrase
       break within two words, so a chunk never ends mid-phrase; and a line of
       four words or fewer is shown whole, because a two-word line does not
       deserve a four-step pantomime.
       ============================================================ */
    var TP = null;                       /* the live session, or null */
    var tpTurn = el('div', 'tp-turn');
    tpTurn.style.display = 'none';
    S.shell.appendChild(tpTurn);
    var tpRec = null, tpHeard = '';

    function tpKey() { return (FMS.progressKey || 'course') + '.takepart.v1'; }
    function tpAll() {
      try { return JSON.parse(w.localStorage.getItem(tpKey()) || '{}') || {}; }
      catch (e) { return {}; }
    }
    function tpSave() {
      if (!TP) return;
      try {
        var all = tpAll();
        all[scene.id] = { who: TP.who, at: idx, reveal: TP.reveal,
                          mic: TP.mic, helped: TP.helped };
        w.localStorage.setItem(tpKey(), JSON.stringify(all));
      } catch (e) { /* private mode refuses the store; the session still runs */ }
    }

    /** the words of a line with markup resolved - never a blank for `<i>` */
    function tpWords(ln) {
      return String((ln && ln.en) || '').replace(/<[^>]+>/g, '')
        .replace(/\*/g, '').split(/\s+/)
        .filter(function (x) { return x; });
    }
    /** the index after each press, so ends.length is the number of presses */
    function tpChunks(words) {
      var n = words.length;
      if (n <= 4) return [n];
      /* ⚠ THE PHRASE BOUNDARY IS A PREFERENCE; THE TWO PROMISES ARE NOT.
         Moving a boundary BACK to a comma makes that chunk shorter, and a
         run of shortened chunks costs an extra press - gates/course_takepart,
         once it ran over all 194 lines instead of one per screen, found
         twenty-word lines taking five. So the adjusted list is used only if
         it still honours "four presses up to 32 words"; otherwise the plain
         quarters are used, which always do. */
      var ends = tpChunkRun(words, true);
      if (n <= 32 && ends.length > 4) ends = tpChunkRun(words, false);
      return ends;
    }
    function tpChunkRun(words, snap) {
      var n = words.length;
      var want = Math.min(8, Math.ceil(n / 4));
      var ends = [], at = 0;
      while (at < n) {
        var end = Math.min(n, at + want);
        if (end < n && snap) {
          /* ⚠ THE PHRASE-BOUNDARY NUDGE USED TO BREAK THE EIGHT-WORD CAP.
             Moving the boundary FORWARD to the next comma can add two words
             to a chunk that was already at the cap, and gates/course_takepart
             caught presses of 9 and 10 words on five screens. The cap is the
             promise; the boundary is the preference. So a forward move is
             allowed only while it stays inside the cap, and otherwise the
             boundary moves back instead. */
          var cap = at + Math.min(8, want);
          for (var d = 1; d <= 2; d++) {
            if (end - d > at && /[,;:—–-]$/.test(words[end - d - 1])) {
              end -= d; break;
            }
            if (end + d < n && end + d <= cap
                && /[,;:—–-]$/.test(words[end + d - 1])) {
              end += d; break;
            }
          }
          if (end > cap) end = cap;
        }
        ends.push(end);
        at = end;
      }
      return ends;
    }
    function tpBlank(word) {
      var n = Math.max(2, word.replace(/[^0-9A-Za-zÀ-ɏ']/g, '').length);
      return new Array(n + 1).join('▁');
    }
    /** the masked subtitle for a line the learner owns, or null */
    function tpMask(ln) {
      if (!TP || !ln || ln.who !== TP.who) return null;
      var li = lines.indexOf(ln);
      var words = tpWords(ln), ends = tpChunks(words);
      var step = TP.reveal[li] || 0;
      var upto = step > 0 ? ends[Math.min(step, ends.length) - 1] : 0;
      var out = [];
      for (var i = 0; i < words.length; i++) {
        out.push(i < upto
          ? '<span class="w">' + esc(words[i]) + '</span>'
          : '<span class="w tp-blank">' + tpBlank(words[i]) + '</span>');
      }
      var left = words.length - upto;
      return out.join(' ') + ' <span class="tp-count">'
        + (left ? left + ' word' + (left === 1 ? '' : 's') + ' still to say'
                : 'the whole line is shown') + '</span>';
    }
    hooks.maskLine = tpMask;

    /* ---------- what the microphone heard, and what it may say ---------- */
    var TP_NUM = { zero: '0', one: '1', two: '2', three: '3', four: '4',
                   five: '5', six: '6', seven: '7', eight: '8', nine: '9',
                   ten: '10', eleven: '11', twelve: '12', thirteen: '13',
                   fourteen: '14', fifteen: '15', sixteen: '16',
                   seventeen: '17', eighteen: '18', nineteen: '19',
                   twenty: '20', thirty: '30', forty: '40', fifty: '50',
                   hundred: '100', thousand: '1000' };
    var TP_SKIP = { a: 1, an: 1, the: 1, is: 1, are: 1, was: 1, were: 1,
                    to: 1, of: 1, and: 1, or: 1, in: 1, on: 1, at: 1,
                    it: 1, that: 1, this: 1, i: 1, you: 1, we: 1 };
    function tpTok(s) {
      return String(s).toLowerCase().replace(/[’]/g, "'")
        .replace(/[^a-z0-9'\s]/g, ' ').replace(/\s+/g, ' ').trim()
        .split(' ').filter(function (x) { return x; })
        .map(function (x) { return TP_NUM[x] || x; });
    }
    /** a word the recogniser was never going to get right is not a failure */
    function tpProper(words) {
      var set = {};
      for (var i = 1; i < words.length; i++) {
        if (/^[A-Z][a-zÀ-ɏ]{2,}/.test(words[i])) {
          set[tpTok(words[i])[0]] = 1;
        }
      }
      return set;
    }
    function tpCompare(ln, heard) {
      var words = tpWords(ln);
      var proper = tpProper(words);
      var want = tpTok(words.join(' '));
      var got = tpTok(heard);
      if (got.length > want.length * 3) return { wild: true };
      var pool = got.slice(), missing = [], total = 0, hit = 0;
      for (var i = 0; i < want.length; i++) {
        var wd = want[i];
        if (TP_SKIP[wd] || proper[wd]) continue;
        total++;
        var at = pool.indexOf(wd);
        if (at >= 0) { hit++; pool.splice(at, 1); }
        else missing.push(wd);
      }
      return { total: total, hit: hit, missing: missing };
    }
    /* the recogniser itself lives in core.js FMS.ui.listen - one copy, so the
       permission-withdrawn path is handled in one place for both features */
    function tpStopMic() {
      if (tpRec) { try { tpRec(); } catch (e) { } tpRec = null; }
    }
    function tpStartMic(onInterim) {
      if (!TP || !TP.mic || !FMS.ui.listen) return false;
      tpStopMic();
      tpHeard = '';
      tpRec = FMS.ui.listen({
        onHear: function (s) { tpHeard = s; if (onInterim) onInterim(s); },
        onDenied: function () { TP.mic = false; tpSave(); },
        onEnd: function (s) { tpHeard = s || tpHeard; tpRec = null; }
      });
      return !!tpRec;
    }

    /* ---------- the learner's turn ---------- */
    function tpMyLine(i, ln, done) {
      var words = tpWords(ln), ends = tpChunks(words);
      if (TP.reveal[i] === undefined) TP.reveal[i] = 0;
      tpSave();
      tpTurn.style.display = '';
      tpTurn.setAttribute('role', 'status');
      tpTurn.setAttribute('aria-live', 'polite');
      var heardBox = null;

      function draw() {
        var step = TP.reveal[i] || 0, left = ends.length - step;
        tpTurn.innerHTML = '';
        tpTurn.appendChild(el('div', 'tp-head',
          'Your line as ' + nameOf(ln.who) + '. Say it out loud.'));
        var row = el('div', 'btn-row');

        var more = el('button', 'btn btn-sm');
        more.type = 'button';
        more.innerHTML = art.icon('book', 15) + (words.length <= 4
          ? 'Show the line'
          : (left > 0 ? 'Show more (' + left + ')' : 'The whole line is shown'));
        more.disabled = left <= 0;
        more.onclick = function () {
          TP.reveal[i] = Math.min(ends.length, (TP.reveal[i] || 0) + 1);
          TP.helped = true;
          tpSave();
          setSubs(ln);
          draw();
        };
        row.appendChild(more);

        var said = el('button', 'btn btn-sm btn-accent');
        said.type = 'button';
        said.innerHTML = art.icon('check', 15) + 'I have said it';
        said.onclick = function () {
          var heard = tpHeard;
          tpStopMic();
          if (TP.mic && heard) {
            TP.heard[i] = heard;
            tpSave();
            showHeard(heard);
            said.innerHTML = art.icon('play', 15) + 'Next line';
            said.onclick = function () { tpTurn.style.display = 'none'; done(); };
            return;
          }
          tpTurn.style.display = 'none';
          done();
        };
        row.appendChild(said);

        var fromHere = el('button', 'btn btn-sm btn-ghost');
        fromHere.type = 'button';
        fromHere.innerHTML = art.icon('replay', 15) + 'From this line';
        fromHere.onclick = function () {
          tpStopMic();
          tpReHide(i);
          tpTurn.style.display = 'none';
          go(i);
        };
        row.appendChild(fromHere);

        var fromTop = el('button', 'btn btn-sm btn-ghost');
        fromTop.type = 'button';
        fromTop.innerHTML = art.icon('replay', 15) + 'From the start';
        fromTop.onclick = function () {
          tpStopMic();
          tpReHide(0);
          tpTurn.style.display = 'none';
          go(0);
        };
        row.appendChild(fromTop);

        tpTurn.appendChild(row);
        if (TP.mic) {
          heardBox = el('div', 'tp-heard wc', 'Listening…');
          tpTurn.appendChild(heardBox);
        }
      }

      function showHeard(heard) {
        var r = tpCompare(ln, heard);
        var box = el('div', 'tp-readout');
        box.appendChild(el('div', 'tp-h', 'What I heard'));
        box.appendChild(el('div', 'tp-said', '“' + heard + '”'));
        if (r.wild) {
          box.appendChild(el('div', '', 'That does not look like this line — '
            + 'it may have picked up the room.'));
        } else if (!r.total) {
          box.appendChild(el('div', '', 'This line is too short to compare.'));
        } else {
          box.appendChild(el('div', '', r.hit + ' of ' + r.total
            + ' words came through'
            + (r.missing.length
               ? '. Not heard: ' + r.missing.slice(0, 5).join(', ') : '.')));
        }
        var clip = FMS.clip(ln.en, FMS.voiceFor(null, scene.id, ln.who));
        if (clip) {
          box.appendChild(el('div', 'wc', 'The recording of this line takes '
            + (clip.b - clip.a).toFixed(1) + 's.'));
        }
        box.appendChild(el('div', 'wc tp-note',
          'This is what a browser’s recogniser heard, not a judgement of '
          + 'your pronunciation. It mishears names, numbers and accents it has '
          + 'not met.'));
        tpTurn.appendChild(box);
      }

      draw();
      setSubs(ln);
      if (TP.mic) {
        tpStartMic(function (s) {
          if (heardBox) heardBox.textContent = s ? '“' + s + '”' : 'Listening…';
        });
      }
    }

    function tpReHide(from) {
      if (!TP) return;
      Object.keys(TP.reveal).forEach(function (k) {
        if (+k >= from) TP.reveal[k] = 0;
      });
      Object.keys(TP.heard).forEach(function (k) {
        if (+k >= from) delete TP.heard[k];
      });
      tpSave();
    }

    /* ---------- the invitation ---------- */
    function tpSpeakers() {
      var count = {};
      lines.forEach(function (ln) {
        if (ln && ln.who && ln.en) count[ln.who] = (count[ln.who] || 0) + 1;
      });
      return Object.keys(count).map(function (k) {
        return { who: k, name: nameOf(k), n: count[k] };
      });
    }
    function tpStart(who, mic) {
      TP = { who: who, reveal: {}, heard: {}, mic: !!mic, helped: false };
      hooks.onMyLine = tpMyLine;
      muted = who;
      tpSave();
      stop();
      idx = -1;
      tpTurn.style.display = 'none';
      play();
    }
    function tpStop() {
      TP = null;
      hooks.onMyLine = null;
      muted = null;
      tpStopMic();
      tpTurn.style.display = 'none';
      stop();
      setSubs(lines[idx] || null);
    }
    function tpOpen() {
      var people = tpSpeakers();
      var pnl = null;                 /* set below; Start closes it */
      var body = el('div', 'tp-chooser');
      if (!people.length) {
        body.appendChild(el('p', '', 'Nobody speaks in this scene.'));
      } else {
        body.appendChild(el('p', '',
          'You have heard it. Now say one of them yourself — the engine '
          + 'plays everybody else and waits for you.'));
        if (people.length === 1) {
          body.appendChild(el('p', 'wc',
            'This one is a monologue, so taking the part means reading it '
            + 'aloud against the recording.'));
        }
        var list = el('div', 'tp-people');
        var chosen = people[0].who;
        people.forEach(function (p, i) {
          var b = el('button', 'tp-person');
          b.type = 'button';
          b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
          b.innerHTML = (art.portrait ? art.portrait(
              (scene.cast[p.who] || {}).rig || 'm-30s-a', 46) : '')
            + '<span class="tp-name">' + esc(p.name) + '</span>'
            + '<span class="wc">' + p.n + ' line' + (p.n === 1 ? '' : 's') + '</span>';
          b.onclick = function () {
            chosen = p.who;
            var bs = list.querySelectorAll('.tp-person');
            for (var z = 0; z < bs.length; z++) {
              bs[z].setAttribute('aria-pressed', bs[z] === b ? 'true' : 'false');
            }
          };
          list.appendChild(b);
        });
        body.appendChild(list);

        var SR = w.SpeechRecognition || w.webkitSpeechRecognition;
        var micWrap = el('label', 'tp-mic');
        var cb = d.createElement('input');
        cb.type = 'checkbox';
        micWrap.appendChild(cb);
        if (SR) {
          micWrap.appendChild(d.createTextNode(
            ' Use my microphone, and show me what it hears'));
        } else {
          cb.disabled = true;
          micWrap.appendChild(d.createTextNode(
            ' This browser has no speech recogniser — everything else works.'));
        }
        body.appendChild(micWrap);
        body.appendChild(el('p', 'wc',
          'Your lines are hidden while you say them. Press Show more if you '
          + 'need the words, and nothing is marked wrong.'));

        var go2 = el('button', 'btn btn-accent');
        go2.type = 'button';
        go2.innerHTML = art.icon('play', 16) + 'Start';
        go2.onclick = function () {
          if (pnl && pnl.close) { try { pnl.close(); } catch (e) { } }
          tpStart(chosen, cb.checked);
        };
        body.appendChild(go2);
      }
      if (FMS.panel) {
        pnl = FMS.panel({ title: 'Take a part', node: body, key: 'takepart' });
      } else {
        holder.appendChild(body);
      }
    }

    tpBtn('mic', 'Take a part — say one of these people yourself', function () {
      if (TP) { tpStop(); FMS.toast('You are listening again.'); return; }
      tpOpen();
    });
    Cine.takePartOpen = tpOpen;
    /* ⚠ A TEST SEAM, AND IT EARNS ITS KEEP. Driving the feature through the
       page exercises ONE line per screen - the first turn of the part the
       gate takes - so the eight-word cap and the "four words are shown whole"
       rule were being checked against a sample of about twenty lines out of
       194, and the four-word rule against none of them, because no first turn
       happens to be that short. gates/course_takepart runs the chunker over
       EVERY line of every scene through this. It returns data and changes
       nothing. */
    Cine.chunksForTest = function (text) {
      return tpChunks(tpWords({ en: text }));
    };

    var ctl = {
      play: play, pause: pause, stop: stop, go: go,
      takePart: tpOpen,
      takePartState: function () { return TP; },
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
  w.addEventListener('pagehide', function () { FMS.stopSpeak(); });

})(window, document);
