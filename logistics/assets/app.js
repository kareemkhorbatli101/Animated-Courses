/* Al-Hasan Logistics — offline course engine.
   Runs from file:// — no modules, no fetch. Audio uses the browser's own
   speechSynthesis, i.e. the voices installed on the operating system. */
var AHL = (function () {
  'use strict';

  var LESSONS = [];
  var BY_ID = {};
  var KEY = 'ahl.v1.';

  function lesson(o) { LESSONS.push(o); BY_ID[o.id] = o; }

  /* ---------------------------------------------------------------- utils */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function norm(s) {
    return String(s || '').toLowerCase().replace(/[’']/g, "'")
      .replace(/[.,!?;:"“”()]/g, '').replace(/\s+/g, ' ').trim();
  }
  function shuffle(a, seed) {
    var r = seed || 7, i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      r = (r * 1103515245 + 12345) & 0x7fffffff;
      j = r % (i + 1); t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sentences(t) {
    var out = String(t).match(/[^.!?]+[.!?]*["”']?\s*/g) || [String(t)];
    return out.map(function (s) { return s.trim(); }).filter(Boolean);
  }

  /* ---------------------------------------------------------------- store */
  function load(id) {
    try { return JSON.parse(localStorage.getItem(KEY + id)) || {}; }
    catch (e) { return {}; }
  }
  function save(id, st) {
    try { localStorage.setItem(KEY + id, JSON.stringify(st)); } catch (e) {}
  }
  function blank() { return { ans: {}, got: {}, seen: {}, done: false }; }
  function stateOf(id) {
    var s = load(id);
    if (!s.ans) s = blank();
    return s;
  }
  function totalOf(L) {
    var n = 0;
    ['pre', 'comp', 'words', 'post'].forEach(function (k) {
      (L[k] || []).forEach(function (x) { if (x.t !== 'note') n++; });
    });
    return n;
  }
  function scoreOf(L) {
    var st = stateOf(L.id), got = 0, k;
    for (k in st.got) if (st.got[k]) got++;
    return { got: got, total: totalOf(L), answered: Object.keys(st.got).length };
  }

  /* ------------------------------------------------------------------ TTS */
  var TTS = {
    ok: typeof window !== 'undefined' && 'speechSynthesis' in window,
    voices: [], vA: null, vB: null, rate: 0.9,
    queue: [], idx: -1, playing: false, paused: false, tick: null,
    onItem: null, onDone: null, label: '',

    init: function () {
      var self = this;
      if (!this.ok) { this.fill(); return; }
      var last = -1;
      function grab() {
        var v = [];
        try { v = window.speechSynthesis.getVoices() || []; } catch (e) {}
        var en = v.filter(function (x) { return /^en/i.test(x.lang || ''); });
        self.voices = en.length ? en : v;
        if (self.voices.length !== last) { last = self.voices.length; self.fill(); }
      }
      grab();
      window.speechSynthesis.onvoiceschanged = grab;
      setTimeout(grab, 400); setTimeout(grab, 1500); setTimeout(grab, 3000);
    },

    fill: function () {
      var a = $('#pl-voice-a'), b = $('#pl-voice-b'), self = this;
      if (!a || !b) return;
      var saved = { a: localStorage.getItem('ahl.voiceA'), b: localStorage.getItem('ahl.voiceB') };
      [a, b].forEach(function (sel) { sel.innerHTML = ''; });
      this.voices.forEach(function (v, i) {
        var t = v.name + (v.lang ? ' · ' + v.lang : '');
        a.appendChild(el('<option value="' + esc(v.name) + '">' + esc(t) + '</option>'));
        b.appendChild(el('<option value="' + esc(v.name) + '">' + esc(t) + '</option>'));
      });
      var pick = function (want, fallbackIdx) {
        var i = self.voices.findIndex(function (v) { return v.name === want; });
        return i >= 0 ? i : Math.min(fallbackIdx, self.voices.length - 1);
      };
      a.selectedIndex = pick(saved.a, 0);
      b.selectedIndex = pick(saved.b, self.voices.length > 1 ? 1 : 0);
      this.vA = this.voices[a.selectedIndex] || null;
      this.vB = this.voices[b.selectedIndex] || null;
      var warn = $('#pl-warn');
      if (!this.ok) {
        warn.hidden = false;
        warn.textContent = 'This browser cannot speak text. Everything else works, and every text and transcript is on the page.';
      } else if (!this.voices.length) {
        warn.hidden = false;
        warn.textContent = 'No speech voices are installed on this computer, so the audio buttons will stay silent. ' +
          'Install a voice in your system settings (Windows: Time & language → Speech; macOS: Spoken Content; ' +
          'Linux: speech-dispatcher) and reload. Every text and transcript is on the page meanwhile.';
      } else { warn.hidden = true; }
    },

    speak: function (items, label, onItem, onDone) {
      if (!this.ok || !this.voices.length) { if (onDone) onDone(); return; }
      this.stop();
      this.queue = items; this.idx = -1; this.label = label || 'Audio';
      this.onItem = onItem || null; this.onDone = onDone || null;
      this.playing = true; this.paused = false;
      showPlayer(true);
      this.next();
      this.guard();
    },

    next: function () {
      var self = this;
      if (this.onItem) this.onItem(-1, this.idx);
      this.idx++;
      if (this.idx >= this.queue.length) { this.finish(); return; }
      var it = this.queue[this.idx];
      if (this.onItem) this.onItem(this.idx, -1);
      setPos((this.idx + 1) + ' / ' + this.queue.length);
      var u = new SpeechSynthesisUtterance(it.text);
      u.rate = this.rate;
      u.pitch = it.v === 'b' ? 1.06 : 1;
      u.voice = (it.v === 'b' ? this.vB : this.vA) || this.vA || null;
      if (u.voice) u.lang = u.voice.lang;
      u.onend = function () { if (self.playing) setTimeout(function () { self.next(); }, it.gap || 120); };
      u.onerror = function () { if (self.playing) setTimeout(function () { self.next(); }, 60); };
      try { window.speechSynthesis.speak(u); } catch (e) { this.finish(); }
    },

    guard: function () {                       /* Chrome stops after ~15s */
      var self = this;
      clearInterval(this.tick);
      this.tick = setInterval(function () {
        if (!self.playing || self.paused) return;
        try { window.speechSynthesis.pause(); window.speechSynthesis.resume(); } catch (e) {}
      }, 9000);
    },

    toggle: function () {
      if (!this.playing) return;
      try {
        if (this.paused) { window.speechSynthesis.resume(); this.paused = false; }
        else { window.speechSynthesis.pause(); this.paused = true; }
      } catch (e) {}
      setPlayIcon(this.paused ? '▶' : '❚❚');
    },

    finish: function () {
      this.playing = false; this.paused = false;
      clearInterval(this.tick);
      if (this.onItem) this.onItem(-1, this.idx);
      setPlayIcon('▶'); setPos('');
      if (this.onDone) this.onDone();
    },

    stop: function () {
      this.playing = false; this.paused = false;
      clearInterval(this.tick);
      try { window.speechSynthesis.cancel(); } catch (e) {}
      if (this.onItem) this.onItem(-1, this.idx);
      setPlayIcon('▶'); setPos('');
    }
  };

  var CURRENT_PLAY = null;
  function showPlayer(on) { var p = $('#player'); if (p) p.hidden = !on; }
  function setPos(t) { var e = $('#pl-pos'); if (e) e.textContent = t; }
  function setPlayIcon(t) { var e = $('#pl-play'); if (e) e.textContent = t; }
  function setPlayTitle(t) { var e = $('#pl-title'); if (e) e.textContent = t; }

  /* ------------------------------------------------------------ exercises */
  var TYPE_LABEL = {
    mcq: 'Choose one', multi: 'Choose all that are right', tf: 'True or false',
    gap: 'Complete the gaps', match: 'Match', order: 'Put in order',
    short: 'Answer in your own words', write: 'Write'
  };

  function renderEx(L, step, i, x, st) {
    var id = step + '.' + i;
    var wrap = el('<div class="ex" data-id="' + id + '"></div>');
    if (x.t === 'note') {
      wrap.innerHTML = '<p class="muted">' + x.text + '</p>';
      return wrap;
    }
    var num = '<span class="num">' + (i + 1) + '</span>';
    wrap.appendChild(el('<p class="q">' + num + esc(x.q) + '</p>'));
    var body = el('<div class="body"></div>');
    wrap.appendChild(body);
    var prev = st.ans[id];

    if (x.t === 'mcq' || x.t === 'multi' || x.t === 'tf') {
      var opts = x.t === 'tf' ? ['True', 'False'] : x.opts;
      var kind = x.t === 'multi' ? 'checkbox' : 'radio';
      var box = el('<div class="opts"></div>');
      opts.forEach(function (o, k) {
        var on = x.t === 'multi' ? (prev || []).indexOf(k) >= 0 : prev === k;
        var lab = el('<label class="opt"><input type="' + kind + '" name="' + id + '" value="' + k + '"' +
          (on ? ' checked' : '') + '><span>' + esc(o) + '</span></label>');
        box.appendChild(lab);
      });
      body.appendChild(box);
    } else if (x.t === 'gap') {
      var parts = x.q2 ? x.q2 : x.gaps;
      var line = el('<div class="gapline"></div>');
      parts.forEach(function (seg, k) {
        line.appendChild(document.createTextNode(seg.before || ''));
        var inp = el('<input type="text" class="gapin" data-k="' + k + '" autocomplete="off" ' +
          'aria-label="gap ' + (k + 1) + '" value="' + esc((prev || [])[k] || '') + '">');
        line.appendChild(inp);
        if (seg.after) line.appendChild(document.createTextNode(seg.after));
        line.appendChild(el('<span> </span>'));
      });
      body.appendChild(line);
      if (x.bank) body.appendChild(el('<p class="muted" style="margin-top:.5em">Word bank: ' +
        esc(x.bank.join('  ·  ')) + '</p>'));
    } else if (x.t === 'match') {
      var rights = x.pairs.map(function (p) { return p[1]; });
      var sorted = shuffle(rights.slice(), x.pairs.length * 13 + i);
      x.pairs.forEach(function (p, k) {
        var row = el('<div class="matchrow"><span class="l">' + esc(p[0]) + '</span></div>');
        var sel = el('<select class="sel" data-k="' + k + '"><option value="">— choose —</option></select>');
        sorted.forEach(function (r, ri) {
          var o = el('<option value="' + ri + '">' + esc(r) + '</option>');
          if (prev && prev[k] === String(ri)) o.selected = true;
          sel.appendChild(o);
        });
        sel.dataset.correct = sorted.indexOf(p[1]);
        row.appendChild(sel);
        body.appendChild(row);
      });
    } else if (x.t === 'order') {
      var order = prev ? prev.slice() : shuffle(x.items.map(function (_, k) { return k; }), 31 + i * 7);
      var ul = el('<ul class="orderlist"></ul>');
      function paint() {
        ul.innerHTML = '';
        order.forEach(function (oi, pos) {
          var li = el('<li><button class="mv" type="button" data-d="-1" aria-label="up">▲</button>' +
            '<button class="mv" type="button" data-d="1" aria-label="down">▼</button>' +
            '<span>' + esc(x.items[oi]) + '</span></li>');
          $$('.mv', li).forEach(function (b) {
            b.onclick = function () {
              var d = +b.dataset.d, t = pos + d;
              if (t < 0 || t >= order.length) return;
              var tmp = order[pos]; order[pos] = order[t]; order[t] = tmp;
              paint();
            };
          });
          ul.appendChild(li);
        });
      }
      paint();
      body.appendChild(ul);
      wrap._order = function () { return order; };
    } else if (x.t === 'short' || x.t === 'write') {
      body.appendChild(el('<textarea class="write" rows="' + (x.t === 'write' ? 6 : 3) +
        '" placeholder="Write your answer here…">' + esc(prev || '') + '</textarea>'));
    }

    var row = el('<div class="row"></div>');
    var btn = el('<button class="btn" type="button">' +
      (x.t === 'short' || x.t === 'write' ? 'Show a model answer' : 'Check') + '</button>');
    row.appendChild(btn);
    if (x.t !== 'short' && x.t !== 'write') {
      var again = el('<button class="btn alt" type="button">Try again</button>');
      again.onclick = function () {
        delete st.ans[id]; delete st.got[id]; save(L.id, st);
        var fresh = renderEx(L, step, i, x, st);
        wrap.parentNode.replaceChild(fresh, wrap);
      };
      row.appendChild(again);
    }
    wrap.appendChild(row);
    var fb = el('<div class="fb"></div>');
    wrap.appendChild(fb);

    btn.onclick = function () { check(L, step, i, x, st, wrap, fb, btn); };
    if (st.got[id] !== undefined && prev !== undefined) {
      check(L, step, i, x, st, wrap, fb, btn, true);
    }
    return wrap;
  }

  function check(L, step, i, x, st, wrap, fb, btn, silent) {
    var id = step + '.' + i, ok = false, given;

    if (x.t === 'mcq' || x.t === 'tf') {
      var sel = $('input:checked', wrap);
      if (!sel && !silent) { flash(fb, 'no', 'Choose an answer first.'); return; }
      given = sel ? +sel.value : (st.ans[id]);
      var want = x.t === 'tf' ? (x.a ? 0 : 1) : x.a;
      ok = given === want;
      $$('.opt', wrap).forEach(function (o, k) {
        o.classList.remove('right', 'wrong');
        if (k === want) o.classList.add('right');
        else if (k === given) o.classList.add('wrong');
      });
    } else if (x.t === 'multi') {
      var picks = $$('input:checked', wrap).map(function (n) { return +n.value; });
      if (!picks.length && !silent) { flash(fb, 'no', 'Choose at least one.'); return; }
      given = picks;
      ok = picks.length === x.a.length && picks.every(function (p) { return x.a.indexOf(p) >= 0; });
      $$('.opt', wrap).forEach(function (o, k) {
        o.classList.remove('right', 'wrong');
        if (x.a.indexOf(k) >= 0) o.classList.add('right');
        else if (picks.indexOf(k) >= 0) o.classList.add('wrong');
      });
    } else if (x.t === 'gap') {
      var ins = $$('.gapin', wrap);
      given = ins.map(function (n) { return n.value; });
      ok = true;
      ins.forEach(function (n, k) {
        var acc = x.gaps[k].a.map(norm);
        var good = acc.indexOf(norm(n.value)) >= 0;
        n.classList.toggle('right', good); n.classList.toggle('wrong', !good);
        if (!good) { ok = false; n.title = 'Answer: ' + x.gaps[k].a[0]; }
      });
    } else if (x.t === 'match') {
      var sels = $$('.sel', wrap);
      given = sels.map(function (n) { return n.value; });
      ok = true;
      sels.forEach(function (n) {
        var good = n.value !== '' && n.value === n.dataset.correct;
        n.classList.toggle('right', good); n.classList.toggle('wrong', !good);
        if (!good) ok = false;
      });
    } else if (x.t === 'order') {
      var ord = wrap._order ? wrap._order() : (st.ans[id] || []);
      given = ord;
      ok = ord.every(function (v, k) { return v === k; });
      $$('.orderlist li', wrap).forEach(function (li, pos) {
        var good = ord[pos] === pos;
        li.classList.toggle('right', good); li.classList.toggle('wrong', !good);
      });
    } else if (x.t === 'short' || x.t === 'write') {
      var ta = $('textarea', wrap);
      given = ta ? ta.value : '';
      st.ans[id] = given; save(L.id, st);
      fb.className = 'fb model show';
      fb.innerHTML = '<b>A model answer</b>' + esc(x.model) +
        '<div class="row"><button class="btn" type="button" data-v="1">I had that</button>' +
        '<button class="btn alt" type="button" data-v="0">Not yet</button></div>';
      $$('button', fb).forEach(function (b) {
        b.onclick = function () {
          st.got[id] = b.dataset.v === '1'; save(L.id, st);
          flash(fb, st.got[id] ? 'ok' : 'no',
            (st.got[id] ? 'Marked as correct. ' : 'Marked as not yet. ') + 'Model: ' + x.model);
          paintScore(L);
        };
      });
      if (btn) btn.disabled = true;
      return;
    }

    st.ans[id] = given; st.got[id] = ok; save(L.id, st);
    if (!silent) {
      flash(fb, ok ? 'ok' : 'no',
        (ok ? 'Correct. ' : 'Not quite. ') + (x.why || answerText(x)));
    } else if (st.ans[id] !== undefined) {
      flash(fb, ok ? 'ok' : 'no', (ok ? 'Correct. ' : 'Not quite. ') + (x.why || answerText(x)));
    }
    paintScore(L);
  }

  function answerText(x) {
    if (x.t === 'tf') return 'The answer is ' + (x.a ? 'true' : 'false') + '.';
    if (x.t === 'mcq') return 'The answer is: ' + x.opts[x.a] + '.';
    if (x.t === 'multi') return 'The answers are: ' + x.a.map(function (k) { return x.opts[k]; }).join('; ') + '.';
    if (x.t === 'gap') return 'Answers: ' + x.gaps.map(function (g) { return g.a[0]; }).join(' · ');
    if (x.t === 'match') return 'The correct pairs are shown in green.';
    if (x.t === 'order') return 'The correct order is shown when every line is green.';
    return '';
  }
  function flash(fb, cls, msg) {
    fb.className = 'fb ' + cls + ' show';
    fb.textContent = msg;
  }

  /* ----------------------------------------------------------- rendering */
  function stepBlock(L, key, n, title, hint, st) {
    var list = L[key] || [];
    if (!list.length) return null;
    var sec = el('<section class="step"><h2><span class="k">' + n + '</span>' + esc(title) +
      (hint ? '<span class="hint">' + esc(hint) + '</span>' : '') + '</h2></section>');
    list.forEach(function (x, i) { sec.appendChild(renderEx(L, key, i, x, st)); });
    return sec;
  }

  function paintScore(L) {
    var s = scoreOf(L), bar = $('#score-bar i'), txt = $('#score-txt');
    if (!bar) return;
    bar.style.width = (s.total ? Math.round(100 * s.got / s.total) : 0) + '%';
    txt.textContent = s.got + ' / ' + s.total + ' correct';
  }

  function renderLesson(id) {
    var L = BY_ID[id];
    if (!L) { location.hash = '#/'; return; }
    var st = stateOf(id);
    var v = $('#view');
    v.innerHTML = '';
    TTS.stop();

    var ix = LESSONS.indexOf(L);
    v.appendChild(el('<div class="crumb"><a href="#/">← All lessons</a>' +
      '<span class="muted">' + (L.kind === 'reading' ? 'Reading' : 'Listening') +
      ' ' + L.n + ' of 6</span></div>'));

    v.appendChild(el('<div class="lesson-head"><div class="n">' +
      (L.kind === 'reading' ? 'Reading ' : 'Listening ') + L.n + ' · ' + esc(L.tags.join(' · ')) +
      '</div><h1>' + esc(L.title) + '</h1><p>' + esc(L.strap) + '</p></div>'));

    /* 1 — before */
    var pre = stepBlock(L, 'pre', '1', 'Before you ' + (L.kind === 'reading' ? 'read' : 'listen'),
      'warm up, and meet the words', st);
    if (pre) v.appendChild(pre);

    /* 2 — the text or the dialogue */
    var main = el('<section class="step"><h2><span class="k">2</span>' +
      (L.kind === 'reading' ? 'The text' : 'The conversation') +
      '<span class="hint">press play, or a dot to hear one line</span></h2></section>');

    if (L.kind === 'reading') {
      var read = el('<div class="read"></div>');
      L.paras.forEach(function (p, pi) {
        var row = el('<div class="para"><button class="say" type="button" title="Read this paragraph" aria-label="Read paragraph ' +
          (pi + 1) + '">▶</button><div class="txt"></div></div>');
        var txt = $('.txt', row);
        sentences(p).forEach(function (s, si) {
          txt.appendChild(el('<span class="sent" data-p="' + pi + '" data-s="' + si + '">' + esc(s) + ' </span>'));
        });
        $('.say', row).onclick = function () { playFrom(L, pi); };
        read.appendChild(row);
      });
      main.appendChild(read);
      var pall = el('<div class="row"><button class="btn" type="button">▶ Play the whole text</button>' +
        '<button class="btn alt" type="button">Stop</button></div>');
      $$('button', pall)[0].onclick = function () { playFrom(L, 0); };
      $$('button', pall)[1].onclick = function () { TTS.stop(); };
      main.insertBefore(pall, read);
    } else {
      main.appendChild(el('<p class="setting">' + esc(L.setting) + '</p>'));
      var ctrl = el('<div class="row">' +
        '<button class="btn" type="button">▶ Play the conversation</button>' +
        '<button class="btn alt" type="button">Stop</button>' +
        '<button class="btn alt" id="show-tr" type="button">Show the transcript</button></div>');
      main.appendChild(ctrl);
      var veil = el('<div class="veil" id="veil"><p><strong>Listen first.</strong></p>' +
        '<p>The transcript is hidden. Play the conversation, answer the questions, ' +
        'and reveal the words afterwards to check.</p></div>');
      main.appendChild(veil);
      var tr = el('<div class="read" id="transcript" hidden></div>');
      L.turns.forEach(function (t, ti) {
        tr.appendChild(el('<div class="turn" data-i="' + ti + '"><span class="sp">' +
          esc(t[0]) + '</span><span class="txt">' + esc(t[1]) + '</span></div>'));
      });
      main.appendChild(tr);
      $$('button', ctrl)[0].onclick = function () { playDialogue(L); };
      $$('button', ctrl)[1].onclick = function () { TTS.stop(); };
      $$('button', ctrl)[2].onclick = function () {
        var on = tr.hidden;
        tr.hidden = !on; veil.hidden = on;
        this.textContent = on ? 'Hide the transcript' : 'Show the transcript';
        st.seen.transcript = true; save(L.id, st);
      };
      if (st.seen.transcript) { tr.hidden = false; veil.hidden = true; $$('button', ctrl)[2].textContent = 'Hide the transcript'; }
    }

    if (L.gloss && L.gloss.length) {
      var g = el('<div class="gloss"><h3>Words you will meet</h3><dl></dl></div>');
      var dl = $('dl', g);
      L.gloss.forEach(function (p) {
        dl.appendChild(el('<dt>' + esc(p[0]) + '</dt>'));
        dl.appendChild(el('<dd>' + esc(p[1]) + '</dd>'));
      });
      main.appendChild(g);
    }
    v.appendChild(main);

    var comp = stepBlock(L, 'comp', '3', 'Comprehension', 'check what you understood', st);
    if (comp) v.appendChild(comp);
    var words = stepBlock(L, 'words', '4', 'The words', 'use them, do not just recognise them', st);
    if (words) v.appendChild(words);
    var post = stepBlock(L, 'post', '5', 'After you ' + (L.kind === 'reading' ? 'read' : 'listen'),
      'use it for something', st);
    if (post) v.appendChild(post);

    var s = scoreOf(L);
    var sb = el('<div class="scorebar"><span class="big" id="score-txt">' + s.got + ' / ' + s.total +
      ' correct</span><span class="bar" id="score-bar"><i></i></span>' +
      '<button class="btn alt" id="reset-lesson" type="button">Reset this lesson</button></div>');
    v.appendChild(sb);
    $('#reset-lesson').onclick = function () {
      if (!confirm('Clear your answers for this lesson?')) return;
      save(L.id, blank()); renderLesson(L.id);
    };

    var nav = el('<div class="navrow"></div>');
    if (ix > 0) nav.appendChild(el('<a class="btn alt" href="#/l/' + LESSONS[ix - 1].id + '">← ' +
      esc(LESSONS[ix - 1].title) + '</a>'));
    else nav.appendChild(el('<span></span>'));
    if (ix < LESSONS.length - 1) nav.appendChild(el('<a class="btn" href="#/l/' + LESSONS[ix + 1].id + '">' +
      esc(LESSONS[ix + 1].title) + ' →</a>'));
    else nav.appendChild(el('<a class="btn" href="#/">Back to all lessons</a>'));
    v.appendChild(nav);

    paintScore(L);
    CURRENT_PLAY = (L.kind === 'reading')
      ? function () { playFrom(L, 0); }
      : function () { playDialogue(L); };
    setPlayTitle(L.title);
    $('#pl-field-b').style.display = L.kind === 'reading' ? 'none' : '';
    showPlayer(true);
    v.focus();
    window.scrollTo(0, 0);
  }

  function playFrom(L, startPara) {
    var items = [];
    L.paras.forEach(function (p, pi) {
      if (pi < startPara) return;
      sentences(p).forEach(function (s, si) { items.push({ text: s, v: 'a', p: pi, s: si }); });
      items.push({ text: ' ', v: 'a', p: -1, s: -1, gap: 350 });
    });
    var nodes = $$('.sent');
    TTS.speak(items, L.title, function (on, off) {
      if (off >= 0 && items[off]) mark(nodes, items[off], false);
      if (on >= 0 && items[on]) mark(nodes, items[on], true);
    });
  }
  function mark(nodes, it, on) {
    if (it.p < 0) return;
    nodes.forEach(function (n) {
      if (+n.dataset.p === it.p && +n.dataset.s === it.s) {
        n.classList.toggle('on', on);
        if (on) n.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    });
  }

  function playDialogue(L) {
    var items = L.turns.map(function (t, i) {
      return { text: t[1], v: t[2] || (i % 2 ? 'b' : 'a'), i: i, gap: 260 };
    });
    var rows = $$('.turn');
    TTS.speak(items, L.title, function (on, off) {
      if (off >= 0 && rows[off]) rows[off].classList.remove('on');
      if (on >= 0 && rows[on]) {
        rows[on].classList.add('on');
        if (!$('#transcript').hidden) rows[on].scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    });
  }

  /* ------------------------------------------------------------ the home */
  function renderHome() {
    TTS.stop(); showPlayer(false); CURRENT_PLAY = null;
    var v = $('#view');
    var done = 0, got = 0, tot = 0;
    LESSONS.forEach(function (L) {
      var s = scoreOf(L); got += s.got; tot += s.total;
      if (s.answered >= s.total && s.total) done++;
    });
    v.innerHTML = '';
    v.appendChild(el('<div class="hero"><div class="eyebrow">Logistics · supplement to Student Book 2</div>' +
      '<h1>When shipping and receiving go wrong</h1>' +
      '<p>Twelve things that go wrong between a supplier’s gate and your own: six to read and six to ' +
      'listen to, each with work before and after. Every text and every line of dialogue can be read ' +
      'aloud by this computer’s own voices.</p>' +
      '<div class="stats"><div class="stat"><b>12</b><span>lessons</span></div>' +
      '<div class="stat"><b>' + done + ' / 12</b><span>finished</span></div>' +
      '<div class="stat"><b>' + got + ' / ' + tot + '</b><span>correct</span></div>' +
      '<div class="stat"><b>B1</b><span>level</span></div></div></div>'));

    [['reading', 'Six readings', 'read'], ['listening', 'Six listenings', 'listen']].forEach(function (grp) {
      v.appendChild(el('<div class="sec-head"><h2>' + grp[1] + '</h2><span class="tag">' + grp[2] + '</span></div>'));
      var g = el('<div class="grid"></div>');
      LESSONS.filter(function (L) { return L.kind === grp[0]; }).forEach(function (L) {
        var s = scoreOf(L), pc = s.total ? Math.round(100 * s.got / s.total) : 0;
        var full = s.answered >= s.total && s.total;
        var c = el('<a class="card" href="#/l/' + L.id + '">' +
          (full ? '<span class="done-flag">done</span>' : '') +
          '<span class="n">' + (L.kind === 'reading' ? 'Reading ' : 'Listening ') + L.n + '</span>' +
          '<h3>' + esc(L.title) + '</h3>' +
          '<p class="sub">' + esc(L.strap) + '</p>' +
          '<div class="chips">' + L.tags.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' +
          '<div class="state"><span class="bar"><i style="width:' + pc + '%"></i></span>' +
          '<span>' + s.got + '/' + s.total + '</span></div></a>');
        g.appendChild(c);
      });
      v.appendChild(g);
    });

    v.appendChild(el('<div class="sec-head"><h2>How to use it</h2></div>'));
    v.appendChild(el('<section class="step"><h2><span class="k">i</span>In class, or on your own</h2>' +
      '<p><strong>Readings</strong> — do step 1 with the text covered, play the audio once while you ' +
      'follow, then read it again on your own before the questions.</p>' +
      '<p><strong>Listenings</strong> — the transcript starts hidden on purpose. Play it twice, answer ' +
      'what you can, play once more, and only then reveal the words.</p>' +
      '<p><strong>The voice</strong> — the player at the bottom uses the voices installed on this ' +
      'computer. Choose any two in <em>Voice A</em> and <em>Voice B</em>; in a conversation the two ' +
      'speakers take one each. Slow it to 0.7× the first time.</p>' +
      '<p><strong>Your answers</strong> are kept in this browser, on this device. Nothing is sent anywhere.</p>' +
      '</section>'));
    window.scrollTo(0, 0);
  }

  /* -------------------------------------------------------------- router */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    if (h.indexOf('l/') === 0) renderLesson(h.slice(2));
    else renderHome();
  }

  function start() {
    LESSONS.sort(function (a, b) {
      if (a.kind !== b.kind) return a.kind === 'reading' ? -1 : 1;
      return a.n - b.n;
    });
    TTS.init();
    $('#pl-play').onclick = function () {
      if (TTS.playing) TTS.toggle();
      else if (CURRENT_PLAY) CURRENT_PLAY();
    };
    $('#pl-stop').onclick = function () { TTS.stop(); };
    $('#pl-rate').onchange = function () { TTS.rate = +this.value; };
    TTS.rate = +$('#pl-rate').value;
    $('#pl-voice-a').onchange = function () {
      TTS.vA = TTS.voices[this.selectedIndex]; localStorage.setItem('ahl.voiceA', this.value);
    };
    $('#pl-voice-b').onchange = function () {
      TTS.vB = TTS.voices[this.selectedIndex]; localStorage.setItem('ahl.voiceB', this.value);
    };
    $('#btn-reset-all').onclick = function () {
      if (!confirm('Clear your answers for all twelve lessons?')) return;
      LESSONS.forEach(function (L) { save(L.id, blank()); });
      route();
    };
    window.addEventListener('hashchange', route);
    window.addEventListener('beforeunload', function () { try { speechSynthesis.cancel(); } catch (e) {} });
    route();
  }

  return { lesson: lesson, start: start, _lessons: LESSONS, _tts: TTS };
})();
