/* THE TRANSPORT — the cybersecurity player's controls, on the IELTS stage.
 *
 * A PORT, NOT A DESIGN. cybersecurity/b1/assets/js/scene.js has eight transport buttons, three
 * speeds, a scrub with one tick per line, a drop-down transcript and two subtitle switches, and
 * every one of them earns its place in a speaking course too. What is NOT ported is its scene
 * graph: that player draws rigged actors on a CSS-3D stage from its own art module, and this one
 * already has a drawing, a camera and a cast. Copying the parts we do not need is how a course
 * ends up holding a second system to fix twice.
 *
 * THE BEST THING IN IT IS SHADOW MODE, and it is the reason this was worth doing. After each line
 * the stage goes quiet for exactly as long as that line took, and the learner says it into the
 * gap. A speaking test is the one place where a silence of a measured length is a feature.
 *
 * THE WORD-BY-WORD HIGHLIGHT COSTS NOTHING. Every clip was measured after the fact - loudness,
 * trim points and word onsets derived from the mp3 that already existed, by the method
 * cybersecurity's build-audio.py uses and for the reason its own comment gives. So the subtitle
 * can follow the voice without a syllable being re-recorded.
 *
 * TWO SWITCHES, NOT ONE. English and Arabic subtitles are independent and both are remembered,
 * which is what was asked for and also what the other course already does.
 */
(function (w, d) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};

  var TIM = null, HOP = 0.04;
  IELTS.timings = function (hop, recs) { HOP = hop; TIM = recs; };

  var ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-';
  function unpack(s) {
    var out = [], i;
    for (i = 0; i < (s || '').length; i++) out.push(ALPHABET.indexOf(s.charAt(i)) / 63);
    return out;
  }
  IELTS.clipInfo = function (text, voice) {
    if (!TIM) return null;
    var r = TIM[voice + '\u0000' + text];
    if (!r) return null;
    return { d: r.d, a: r.a, b: r.b, wd: r.wd || [],
             env: unpack(r.e), wide: unpack(r.w), round: unpack(r.r), hop: HOP };
  };

  /* ---------------------------------------------------------------- preferences */
  var PK = 'la.ielts.prefs';
  var PREFS = (function () {
    var dflt = { subEn: true, subAr: true, speed: 1 };
    try {
      var raw = w.localStorage.getItem(PK);
      return raw ? Object.assign(dflt, JSON.parse(raw)) : dflt;
    } catch (e) { return dflt; }      /* private mode: the defaults still work */
  }());
  function savePrefs() {
    try { w.localStorage.setItem(PK, JSON.stringify(PREFS)); } catch (e) { /* private mode */ }
  }
  IELTS.prefs = PREFS;

  function el(tag, cls, html) {
    var n = d.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* The icons are drawn here for the same reason everything else in this course is: no icon
     font, no emoji, nothing bought in. */
  var ICON = {
    play: 'M5 3l11 7-11 7z',
    pause: 'M5 3h4v14H5zm7 0h4v14h-4z',
    replay: 'M10 4V1L5 5l5 4V6a5 5 0 1 1-5 5H3a7 7 0 1 0 7-7z',
    prev: 'M6 3h2v14H6zm10 0v14l-8-7z',
    next: 'M14 3h2v14h-2zM4 3l8 7-8 7z',
    loop: 'M4 7h9V4l4 4-4 4V9H6v4h8v2H4z',
    /* close-up: the four corners of a frame pulling inward. A circle with a bar through it filled
       as a solid blob at 16px, which is what a stroke-only path does when it is given a fill. */
    close: 'M3 3h5v2H5v3H3V3zm9 0h5v5h-2V5h-3V3zM3 12h2v3h3v2H3v-5zm12 0h2v5h-5v-2h3v-3z',
    mask: 'M10 3a5 5 0 0 1 5 5v2H5V8a5 5 0 0 1 5-5zm-6 9h12v5H4z',
    book: 'M3 4h6a2 2 0 0 1 2 2v10a3 3 0 0 0-2-1H3zm14 0h-6a2 2 0 0 0-2 2v10a3 3 0 0 1 2-1h6z'
  };
  function icon(name) {
    return '<svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16">'
      + '<path d="' + ICON[name] + '" fill="currentColor"/></svg>';
  }

  /** mount(host, stage, script, opts) -> the transport, wired to a stage built by IELTS.stage.
   *  `host` is where the bar goes; `opts.root` is the page it governs, which is a different element
   *  and matters twice: the transcript toggle hides a section outside the bar, and the space bar
   *  must only act while the focus is somewhere on this page. */
  IELTS.transport = function (host, stage, script, opts) {
    opts = opts || {};
    var root = opts.root || host;
    var tp = el('div', 'transport');
    var state = { playing: false, idx: -1, loop: false, shadow: false, close: false };

    function btn(iconName, title, fn, toggle) {
      var b = el('button', 'tp-btn', icon(iconName));
      b.type = 'button';
      b.title = title;
      b.setAttribute('aria-label', title);
      if (toggle) b.setAttribute('aria-pressed', 'false');
      b.onclick = function () {
        if (toggle) {
          var on = b.getAttribute('aria-pressed') === 'true';
          b.setAttribute('aria-pressed', on ? 'false' : 'true');
          fn(!on, b);
        } else { fn(b); }
      };
      tp.appendChild(b);
      return b;
    }

    var bPlay = btn('play', 'Play / pause  (space)', function () {
      if (state.playing) { pause(); } else { play(); }
    });
    btn('replay', 'Play the whole part again', function () { state.idx = -1; play(); });
    btn('prev', 'The line before', function () { go(Math.max(0, state.idx - 1)); });
    btn('next', 'The line after', function () { go(Math.min(script.length - 1, state.idx + 1)); });
    btn('loop', 'Say this line over and over', function (on) { state.loop = on; }, true);
    btn('close', 'Close up on whoever is speaking', function (on) {
      state.close = on;
      stage.setClose(on);
    }, true);
    btn('mask', 'Your turn — a silence after each line, as long as the line, for you to '
        + 'repeat it', function (on) { state.shadow = on; }, true);

    /* ---- speed. The pitch is held, or 0.6x turns an examiner into a cartoon. */
    var seg = el('div', 'tp-seg');
    [0.6, 0.75, 1].forEach(function (rate) {
      var b = el('button', '', rate === 1 ? '1×' : rate + '×');
      b.type = 'button';
      b.setAttribute('aria-pressed', rate === PREFS.speed ? 'true' : 'false');
      b.onclick = function () {
        PREFS.speed = rate;
        savePrefs();
        stage.setRate(rate);
        seg.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-pressed', 'false');
        });
        b.setAttribute('aria-pressed', 'true');
      };
      seg.appendChild(b);
    });
    tp.appendChild(seg);

    /* ---- the two subtitle switches, independent and remembered */
    var subs = el('div', 'tp-seg');
    subs.innerHTML =
      '<button type="button" data-sub="en" aria-pressed="' + (PREFS.subEn ? 'true' : 'false')
      + '">EN</button>'
      + '<button type="button" data-sub="ar" aria-pressed="' + (PREFS.subAr ? 'true' : 'false')
      + '">عربي</button>';
    subs.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-sub]');
      if (!b) return;
      var k = b.getAttribute('data-sub') === 'en' ? 'subEn' : 'subAr';
      PREFS[k] = !PREFS[k];
      savePrefs();
      b.setAttribute('aria-pressed', PREFS[k] ? 'true' : 'false');
      stage.applySubPrefs();
    });
    tp.appendChild(subs);

    /* ---- the scrub, one tick per line */
    var scrub = el('div', 'scrub');
    scrub.innerHTML = '<div class="track"></div><div class="fill"></div>';
    script.forEach(function (_l, i) {
      var t = el('div', 'tick');
      t.style.left = (i / script.length * 100) + '%';
      t.title = 'Line ' + (i + 1);
      scrub.appendChild(t);
    });
    scrub.addEventListener('click', function (ev) {
      var rect = scrub.getBoundingClientRect();
      var f = (ev.clientX - rect.left) / rect.width;
      go(Math.max(0, Math.min(script.length - 1, Math.floor(f * script.length))));
    });
    tp.appendChild(scrub);

    var bTrans = el('button', 'tp-btn', icon('book'));
    bTrans.type = 'button';
    bTrans.title = 'Show or hide what was said';
    bTrans.setAttribute('aria-pressed', 'true');
    tp.appendChild(bTrans);
    host.appendChild(tp);

    /* ---- playing */
    function mark(i) {
      state.idx = i;
      var pct = script.length ? ((i + 1) / script.length * 100) : 0;
      scrub.querySelector('.fill').style.width = pct + '%';
      if (stage.onLine) stage.onLine(i);
    }
    function setIcon() {
      bPlay.innerHTML = icon(state.playing ? 'pause' : 'play');
    }
    function go(i) {
      stage.stop();
      mark(i);
      state.playing = true;
      setIcon();
      step();
    }
    function play() {
      if (state.idx < 0) state.idx = 0;
      state.playing = true;
      setIcon();
      mark(state.idx);
      step();
    }
    function pause() {
      state.playing = false;
      setIcon();
      stage.stop();
    }
    function step() {
      if (!state.playing) return;
      var l = script[state.idx];
      if (!l) { state.playing = false; setIcon(); return; }
      stage.playLine(l, function (spokenMs) {                      /* idx: which line's pictures */
        if (!state.playing) return;
        /* SHADOW MODE. The gap is the length of the line that was just spoken, plus a breath -
           not a fixed two seconds, which would be an age after "Yes" and nothing after a long
           turn. The measured duration is what makes this honest. */
        var gap = state.shadow ? (spokenMs || 1500) + 350 : 220;
        if (state.shadow) stage.sayTurn('Your turn — say it');
        w.setTimeout(function () {
          if (!state.playing) return;
          stage.sayTurn('');
          if (state.loop) { step(); return; }
          if (state.idx + 1 >= script.length) { state.playing = false; setIcon(); return; }
          mark(state.idx + 1);
          step();
        }, gap);
      }, state.idx);
    }

    bTrans.onclick = function () {
      var on = bTrans.getAttribute('aria-pressed') === 'true';
      bTrans.setAttribute('aria-pressed', on ? 'false' : 'true');
      root.classList.toggle('no-transcript', on);
    };

    /* THE SPACE BAR, AND NOT WHEN SOMEBODY IS TYPING. A page with a textarea under every question
       must not steal the space bar from it; that would be a shortcut that breaks the main thing
       the page is for. */
    d.addEventListener('keydown', function (ev) {
      if (ev.key !== ' ' && ev.code !== 'Space') return;
      var t = ev.target;
      if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT' || t.isContentEditable)) return;
      if (t && t.closest && t.closest('dialog')) return;
      if (!root.contains(d.activeElement) && d.activeElement !== d.body) return;
      ev.preventDefault();
      if (state.playing) { pause(); } else { play(); }
    });

    stage.setRate(PREFS.speed);
    stage.applySubPrefs();
    return { play: play, pause: pause, go: go, state: state };
  };
}(window, document));
