/* ============================================================
   English for Accounting and Financial Management B1 — core.js
   Copied unchanged from the Cybersecurity B1 engine, then: the course name and
   the book chip read EAFM.COURSE, and every consumer that hardcoded `unit1`
   now derives the unit from the page id.  See tools/patch-engine.py.
   Namespace, page renderer, progress, checking, glossary, chrome.
   Loads content from .js data files (never fetch) so the whole
   site runs by double-clicking index.html.
   ============================================================ */
(function (w, d) {
  'use strict';
  var EAFM = w.EAFM = w.EAFM || {};
  EAFM.pages = EAFM.pages || {};
  EAFM.scenes = EAFM.scenes || {};
  EAFM.glossaryData = EAFM.glossaryData || {};
  EAFM.coverageData = EAFM.coverageData || {};
  EAFM.ex = EAFM.ex || {};

  var BASE = w.EAFM_BASE === undefined ? '' : w.EAFM_BASE;
  EAFM.base = BASE;

  /* WHERE THE RECORDINGS COME FROM, which is not where the pages come from.

     The 302 mp3s used to sit beside the pages inside the published site's git repository,
     along with every other course's media. Git keeps every version of every file for ever,
     so that repository reached 1,871 MB - 91% of it media that never changes once recorded -
     and pushes began to fail. The recordings now live in their own repository and are served
     from its GitHub Pages site.

     NOT jsDelivr: it refuses any repository over 50 MB, and refuses it PER FILE, so an
     over-size repository serves most of its clips and 403s the rest - measured elsewhere at
     15% of a course missing with nothing visible on the page. This course is 13 MB and would
     fit today, which is exactly the trap: it would stop fitting at some later unit and then
     fail partly rather than loudly.

     AN UNSET MEDIA BASE FALLS BACK TO THE PAGE BASE, so a checkout that still carries its own
     assets/audio plays the folder beside it exactly as before - which is what keeps this
     course working offline, from a stick, with no media host at all. */
  var MEDIA = w.EAFM_MEDIA ? w.EAFM_MEDIA : BASE;
  EAFM.media = MEDIA;

  /* ------------------------------------------------------------
     The course, and the unit a page belongs to.

     Everything that used to say "Cybersecurity B1" or `unit1` reads one of
     these instead.  The unit is DERIVED from the page id (`u2-s07` -> `unit2`)
     rather than passed alongside it, so it cannot disagree with the page being
     rendered and there is no order of operations to get wrong.
     ------------------------------------------------------------ */
  EAFM.COURSE = {
    name: 'Accounting & Finance B1',
    full: 'English for Accounting and Financial Management B1',
    book: 'EAFM B1',
    liveUnits: [1, 2],
    totalUnits: 10
  };
  EAFM.unitOf = function (pageId) {
    var m = /^u(\d+)-/.exec(String(pageId || ''));
    return m ? 'unit' + m[1] : null;
  };
  EAFM.unitNo = function (pageId) {
    var u = EAFM.unitOf(pageId);
    return u ? parseInt(u.slice(4), 10) : null;
  };
  EAFM.unitHref = function (unit) {
    return BASE + (unit || 'unit1') + '/index.html';
  };

  /* ---------- registration ---------- */
  EAFM.page = function (id, def) { def.id = id; EAFM.pages[id] = def; return def; };
  EAFM.scene = function (id, def) { def.id = id; EAFM.scenes[id] = def; return def; };
  EAFM.glossary = function (map) { for (var k in map) if (map.hasOwnProperty(k)) EAFM.glossaryData[k.toLowerCase()] = map[k]; };
  EAFM.coverage = function (unit, rows) { EAFM.coverageData[unit] = rows; };
  EAFM.voices = function (v) { EAFM.voiceMap = v; return v; };
  /* Spoken narration for the live animations, which draw themselves in
     art.js and so have no card data for export-lines.cjs to read. The
     build tool and the browser both read THIS file, so a narrated line
     is synthesised and played from one string. An animation whose
     narration is not loaded stays silent and renders exactly as before
     — that is what keeps tools/check-motion.html unaffected. */
  EAFM.narrationData = EAFM.narrationData || {};
  EAFM.narration = function (map) {
    for (var k in map) if (map.hasOwnProperty(k)) EAFM.narrationData[k] = map[k];
    return map;
  };
  /* the ordered section list behind the jump-to control */
  EAFM.unitMaps = EAFM.unitMaps || {};
  EAFM.unitMap = function (unit, rows) { EAFM.unitMaps[unit] = rows; return rows; };

  /* ------------------------------------------------------------
     Arabic scaffolding.

     Keyed by the English source text rather than by an id, so a
     translation can never be attached to the wrong sentence and
     check-arabic.cjs can tell you when an English line has been
     edited out from under its translation. The key is the plain
     text: markup stripped, whitespace collapsed, curly quotes
     normalised, so that rewrapping a sentence in the data file does
     not silently orphan it.

     This is a GUIDE for a learner who needs more scaffolding, not a
     second copy of the exercise. It carries the directions, the key
     words, and the text or conversation — never the questions and
     answers, which are the part the learner has to do in English.
     ------------------------------------------------------------ */
  EAFM.arData = EAFM.arData || {};
  function arKey(s) {
    return String(s || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
  }
  EAFM.arKey = arKey;
  EAFM.arabic = function (map) {
    for (var k in map) if (map.hasOwnProperty(k)) EAFM.arData[arKey(k)] = map[k];
    return EAFM.arData;
  };
  EAFM.ar = function (text) {
    var k = arKey(text);
    return k && EAFM.arData[k] ? EAFM.arData[k] : null;
  };

  /* ============================================================
     recorded audio
     The manifest is generated by tools/build-audio.py. Each entry
     carries the file, its real length, a level, the trim points,
     word start times and three lip-sync tracks packed one printable
     character per 40 ms sample.
     ============================================================ */
  var ALPHA = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-';
  var ALPHA_IX = {};
  for (var ai = 0; ai < ALPHA.length; ai++) ALPHA_IX[ALPHA.charAt(ai)] = ai / 63;

  EAFM.audioData = {};
  EAFM.audioHop = 0.04;
  EAFM.audio = function (hop, map, unit) {
    EAFM.audioHop = hop || 0.04;
    var u = unit || 'unit1';
    for (var k in map) if (map.hasOwnProperty(k)) { map[k]._u = u; EAFM.audioData[k] = map[k]; }
  };
  function unpack(s) {
    var out = new Float32Array(s.length);
    for (var i = 0; i < s.length; i++) { var v = ALPHA_IX[s.charAt(i)]; out[i] = v === undefined ? 0 : v; }
    return out;
  }
  /** The recording for a line, or null. Decoded tracks are cached on first use. */
  EAFM.clip = function (text, voice) {
    if (!voice) return null;
    var rec = EAFM.audioData[voice + '\u0000' + String(text).trim()];
    if (!rec) return null;
    if (!rec._d) {
      rec._d = true;
      rec.env = unpack(rec.e); rec.wide = unpack(rec.w); rec.round = unpack(rec.r);
      rec.url = MEDIA + 'assets/audio/' + (rec._u || 'unit1') + '/' + rec.f + '.mp3';
    }
    return rec;
  };
  /** The cast voice for a scene line, or a course/role voice. */
  EAFM.voiceFor = function (role, sceneId, who) {
    var V = EAFM.voiceMap;
    if (!V) return null;
    if (sceneId && who) return (V.scene[sceneId] || {})[who] || null;
    return V[role] || null;
  };

  /* ============================================================
     util
     ============================================================ */
  var U = EAFM.util = {};
  U.esc = function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  U.el = function (tag, cls, html) {
    var n = d.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  U.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  /* forgiving answer comparison */
  U.norm = function (s) {
    return String(s === undefined || s === null ? '' : s).toLowerCase()
      .replace(/[‘’“”]/g, "'")
      .replace(/[.,;:!?"()\[\]]/g, ' ')
      .replace(/\b(a|an|the)\b/g, ' ')
      .replace(/\s+/g, ' ').trim();
  };
  U.accepts = function (input, accepted) {
    var n = U.norm(input);
    if (!n) return false;
    var list = Array.isArray(accepted) ? accepted : [accepted];
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a instanceof RegExp) { if (a.test(String(input).trim())) return true; continue; }
      if (U.norm(a) === n) return true;
    }
    return false;
  };
  /* loose containment: does the answer mention the key ideas? */
  U.mentions = function (input, keys, need) {
    var n = ' ' + U.norm(input) + ' ', hit = 0;
    for (var i = 0; i < keys.length; i++) if (n.indexOf(' ' + U.norm(keys[i]) + ' ') >= 0 || n.indexOf(U.norm(keys[i])) >= 0) hit++;
    return hit >= (need || 1);
  };
  U.words = function (s) { var m = String(s || '').trim().match(/\S+/g); return m ? m.length : 0; };

  /* ---------- tense detection (heuristic, good enough for B1 self-check) ---------- */
  var IRR_PAST = {
    was: 1, were: 1, had: 1, did: 1, went: 1, came: 1, got: 1, made: 1, said: 1, saw: 1, took: 1, knew: 1,
    thought: 1, found: 1, told: 1, became: 1, left: 1, felt: 1, put: 1, brought: 1, began: 1, kept: 1,
    held: 1, wrote: 1, stood: 1, heard: 1, let: 1, meant: 1, met: 1, ran: 1, paid: 1, sat: 1, spoke: 1,
    read: 1, grew: 1, lost: 1, sent: 1, built: 1, understood: 1, drew: 1, broke: 1, spent: 1, chose: 1,
    gave: 1, taught: 1, caught: 1, bought: 1, ate: 1, drove: 1, woke: 1, slept: 1, learnt: 1
  };
  U.tense = function (s) {
    var x = ' ' + String(s || '').toLowerCase().replace(/[^a-z' ]/g, ' ').replace(/\s+/g, ' ') + ' ';
    /* the subject can sit between the auxiliary and the -ing form in a question:
       "What was Jan doing?" / "What is Myra doing?" */
    if (/ (was|were)(n't)? (?:\w+ ){0,2}\w+ing /.test(x)) return 'past-cont';
    if (/ (am|is|are|'m|'s|'re)(n't)? (?:\w+ ){0,2}\w+ing /.test(x)) return 'pres-cont';
    if (/ (i'm|he's|she's|we're|they're|you're) (?:\w+ ){0,2}\w+ing /.test(x)) return 'pres-cont';
    if (/ did(n't)? /.test(x) || / (was|were)(n't)? /.test(x)) return 'past';
    if (/ (do|does|don't|doesn't) /.test(x)) return 'present';
    var toks = x.trim().split(' ');
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i];
      if (IRR_PAST[t]) return 'past';
      if (/^[a-z]{3,}ed$/.test(t) && !/^(need|indeed|speed|exceed|succeed)$/.test(t)) return 'past';
    }
    if (/ (do|does|don't|doesn't|am|is|are|have|has) /.test(x)) return 'present';
    if (toks.length) return 'present';
    return 'unknown';
  };
  U.tenseLabel = function (k) {
    return { 'present': 'simple present', 'pres-cont': 'present continuous', 'past': 'simple past', 'past-cont': 'past continuous', 'unknown': 'unclear' }[k] || k;
  };
  U.pastVerbs = function (s) {
    var out = [], m = String(s || '').match(/\b[A-Za-z']+\b/g) || [];
    for (var i = 0; i < m.length; i++) {
      var t = m[i].toLowerCase();
      if (IRR_PAST[t] || (/^[a-z]{3,}ed$/.test(t) && !/^(need|indeed|speed|exceed|succeed)$/.test(t))) out.push(m[i]);
    }
    return out;
  };

  /* ============================================================
     progress
     ============================================================ */
  var KEY = 'csb1.progress.v1', PREF = 'csb1.prefs.v1';
  function readJSON(k, fb) { try { var v = w.localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch (e) { return fb; } }
  function writeJSON(k, v) { try { w.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }

  var P = EAFM.progress = {
    all: readJSON(KEY, {}),
    page: function (pid) { return (this.all[pid] = this.all[pid] || { cards: {} }); },
    card: function (pid, cid) { var p = this.page(pid); return (p.cards[cid] = p.cards[cid] || { attempts: 0, helped: false, score: 0, max: 0, done: false, state: null }); },
    save: function () { writeJSON(KEY, this.all); EAFM.chrome && EAFM.chrome.refresh && EAFM.chrome.refresh(); },
    pageScore: function (pid) {
      var p = this.all[pid]; if (!p) return { done: 0, total: 0 };
      var done = 0, total = 0;
      for (var k in p.cards) if (p.cards.hasOwnProperty(k)) { total++; if (p.cards[k].done) done++; }
      return { done: done, total: total };
    },
    /* Marks across the whole unit. Exercises that mark themselves are
       scored; open writing and speaking is counted as submitted, never
       scored, because the page cannot judge it and should not pretend to. */
    unitScore: function (unit) {
      var rows = EAFM.unitMaps[unit || 'unit1'] || [];   /* caller always passes it */
      var o = { score: 0, max: 0, scored: 0, open: 0, cards: 0, done: 0 };
      rows.forEach(function (r) {
        o.cards += r.n || 0;
        var p = P.all[r.id];
        if (!p) return;
        for (var k in p.cards) {
          if (!p.cards.hasOwnProperty(k)) continue;
          var c = p.cards[k];
          if (c.done) o.done++;
          if (c.open) { if (c.done) o.open++; continue; }
          if (c.max > 0) { o.score += c.score; o.max += c.max; o.scored++; }
        }
      });
      return o;
    },
    reset: function (pid) { delete this.all[pid]; this.save(); },
    exportAll: function () { return JSON.stringify({ v: 1, saved: new Date().toISOString(), progress: this.all }, null, 2); }
  };

  var PREFS = EAFM.prefs = readJSON(PREF, { theme: 'auto', subEn: true, subAr: false, speed: 1 });
  EAFM.savePrefs = function () { writeJSON(PREF, PREFS); };

  /* ============================================================
     chrome — topbar, statusbar, toast, theme
     ============================================================ */
  /* 'auto' is resolved to a real value here, so every
     [data-theme="dark"] rule in the stylesheet applies in auto mode too. */
  function applyTheme() {
    var t = PREFS.theme;
    var dark = t === 'dark' ||
      (t === 'auto' && w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches);
    d.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    d.documentElement.setAttribute('data-theme-pref', t);
  }
  if (w.matchMedia) {
    try {
      w.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (PREFS.theme === 'auto') applyTheme();
      });
    } catch (e) { }
  }
  EAFM.toggleTheme = function () {
    var order = ['auto', 'light', 'dark'];
    PREFS.theme = order[(order.indexOf(PREFS.theme) + 1) % 3];
    EAFM.savePrefs(); applyTheme(); EAFM.toast('Theme: ' + PREFS.theme);
  };

  var toastEl;
  EAFM.toast = function (msg, ms) {
    if (!toastEl) { toastEl = U.el('div', 'toast'); d.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 2000);
  };

  EAFM.confetti = function () {
    if (w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = U.el('div', 'confetti'); d.body.appendChild(box);
    var cols = ['#0b5f6b', '#b4531a', '#2f8f7e', '#c9a227', '#4a5fb5'];
    for (var i = 0; i < 48; i++) {
      var s = U.el('i');
      s.style.left = Math.random() * 100 + 'vw';
      s.style.top = '-20px';
      s.style.background = cols[i % cols.length];
      s.style.animationDuration = (1.6 + Math.random() * 1.4) + 's';
      s.style.animationDelay = (Math.random() * .4) + 's';
      box.appendChild(s);
    }
    setTimeout(function () { box.remove(); }, 3600);
  };

  function topbar(def) {
    var bar = U.el('header', 'topbar');
    var wrap = U.el('div', 'wrap');
    var brand = U.el('a', 'brand');
    brand.href = BASE + 'index.html';
    brand.innerHTML = EAFM.art.logo() + '<span>' + EAFM.COURSE.name + '</span>';
    wrap.appendChild(brand);

    if (def && def.book) {
      var cr = U.el('div', 'crumbs');
      cr.innerHTML = '<span class="sep">▸</span><a href="' + EAFM.unitHref(EAFM.unitOf(def.id)) + '">Unit ' + (EAFM.unitNo(def.id) || 1) + '</a>' +
        '<span class="sep">▸</span><span>' + U.esc(def.book.lesson || '') + '</span>' +
        '<span class="sep">▸</span><span>§' + U.esc(def.book.section) + '</span>';
      wrap.appendChild(cr);
    }
    wrap.appendChild(U.el('div', 'spacer'));

    var tools = U.el('div', 'tb-tools');
    var map = U.el('a', 'btn btn-sm btn-ghost');
    map.href = EAFM.unitHref(def && def.id ? EAFM.unitOf(def.id) : null);
    map.innerHTML = EAFM.art.icon('map', 16) + '<span class="hide-sm">Unit map</span>';
    tools.appendChild(map);

    var pr = U.el('button', 'btn btn-sm btn-ghost');
    pr.innerHTML = EAFM.art.icon('print', 16);
    pr.title = 'Print this page as a worksheet';
    pr.setAttribute('aria-label', 'Print worksheet');
    pr.onclick = function () { w.print(); };
    tools.appendChild(pr);

    var th = U.el('button', 'btn btn-sm btn-ghost');
    th.innerHTML = EAFM.art.icon('moon', 16);
    th.title = 'Light / dark theme';
    th.setAttribute('aria-label', 'Toggle theme');
    th.onclick = EAFM.toggleTheme;
    tools.appendChild(th);

    wrap.appendChild(tools);
    bar.appendChild(wrap);
    return bar;
  }

  /* ------------------------------------------------------------
     Where am I in the unit?

     Counted off the unit map, not off the prev/next chain: a section
     page loads only its OWN data file, so EAFM.pages holds exactly
     one entry and the chain cannot be walked from here. The map is
     loaded on every page and check-nav.cjs already fails the build if
     it and the prev/next chain disagree, so the two cannot drift.
     The unit index is not in the chain, so it is not counted.
     ------------------------------------------------------------ */
  EAFM.pageCount = function (pageId) {
    var rows = (EAFM.unitMaps && EAFM.unitMaps[EAFM.unitOf(pageId)]) || [];
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === pageId) return { n: i + 1, total: rows.length };
    }
    return null;
  };

  function statusbar(def) {
    var bar = U.el('div', 'statusbar no-print');
    var wrap = U.el('div', 'wrap');
    var lbl = U.el('strong', '', 'Page progress');
    lbl.style.fontSize = '13px';
    wrap.appendChild(lbl);
    var m = U.el('div', 'meter', '<i></i>');
    wrap.appendChild(m);
    var cnt = U.el('span', 'wc', '0 / 0');
    wrap.appendChild(cnt);

    var sub = U.el('div', 'tp-seg');
    sub.innerHTML =
      '<button type="button" data-sub="en" aria-pressed="' + (PREFS.subEn ? 'true' : 'false') + '">EN subs</button>' +
      '<button type="button" data-sub="ar" aria-pressed="' + (PREFS.subAr ? 'true' : 'false') + '">AR ترجمة</button>';
    sub.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-sub]'); if (!b) return;
      var k = b.getAttribute('data-sub') === 'en' ? 'subEn' : 'subAr';
      PREFS[k] = !PREFS[k]; EAFM.savePrefs();
      b.setAttribute('aria-pressed', PREFS[k] ? 'true' : 'false');
      if (EAFM.cine) EAFM.cine.applySubPrefs();
    });
    wrap.appendChild(sub);

    if (def && (def.prev || def.next)) {
      var nav = U.el('div', 'btn-row');
      nav.style.margin = '0';
      if (def.prev) { var a = U.el('a', 'btn btn-sm', '◀ Previous'); a.href = def.prev + '.html'; nav.appendChild(a); }
      var jp = EAFM.ui.jump(def.id, true);
      if (jp) nav.appendChild(jp);
      if (def.next) { var b2 = U.el('a', 'btn btn-sm btn-primary', 'Next ▶'); b2.href = def.next + '.html'; nav.appendChild(b2); }
      var pc = EAFM.pageCount(def.id);
      if (pc) nav.appendChild(U.el('span', 'pagecount', pc.n + ' of ' + pc.total));
      else { var fin = U.el('a', 'btn btn-sm btn-primary', 'Finish unit ▶'); fin.href = EAFM.unitHref(EAFM.unitOf(def.id)); nav.appendChild(fin); }
      wrap.appendChild(nav);
    }
    bar.appendChild(wrap);
    return bar;
  }

  /* ============================================================
     glossary tooltips
     ============================================================ */
  var glPop;
  function closeGl() { if (glPop) { glPop.remove(); glPop = null; } }
  d.addEventListener('click', function (ev) {
    var g = ev.target.closest && ev.target.closest('.gl');
    if (!g) { closeGl(); return; }
    ev.preventDefault();
    closeGl();
    var term = (g.getAttribute('data-term') || g.textContent).toLowerCase();
    var entry = EAFM.glossaryData[term];
    if (!entry) return;
    glPop = U.el('div', 'gl-pop');
    glPop.innerHTML = '<h5>' + U.esc(entry.term || term) + ' <small style="color:var(--text-2);font-weight:400">' + U.esc(entry.pos || '') + '</small></h5>' +
      '<div>' + U.esc(entry.en) + '</div>' +
      (entry.eg ? '<div style="margin-top:6px;font-style:italic;color:var(--text-2)">' + U.esc(entry.eg) + '</div>' : '') +
      (entry.ar ? '<span class="ar">' + U.esc(entry.ar) + '</span>' : '');
    d.body.appendChild(glPop);
    var rct = g.getBoundingClientRect();
    glPop.style.top = (w.scrollY + rct.bottom + 8) + 'px';
    glPop.style.left = Math.max(8, Math.min(w.innerWidth - 320, w.scrollX + rct.left)) + 'px';
    var sp = U.el('button', 'btn btn-sm btn-ghost', EAFM.art.icon('sound', 15));
    sp.style.marginTop = '8px';
    sp.onclick = function (e2) { e2.stopPropagation(); EAFM.say(entry.term || term, 'course'); };
    glPop.appendChild(sp);
  });

  /* auto-link glossary terms inside a container */
  EAFM.linkGlossary = function (root) {
    var terms = Object.keys(EAFM.glossaryData);
    if (!terms.length) return;
    terms.sort(function (a, b) { return b.length - a.length; });
    var rx = new RegExp('\\b(' + terms.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'gi');
    var walker = d.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var pp = n.parentElement;
        while (pp && pp !== root) {
          var tg = pp.tagName;
          if (tg === 'SCRIPT' || tg === 'STYLE' || tg === 'BUTTON' || tg === 'INPUT' || tg === 'TEXTAREA' ||
            pp.classList.contains('gl') || pp.classList.contains('no-gloss') || pp.classList.contains('sub-ar')) return NodeFilter.FILTER_REJECT;
          pp = pp.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    var seen = {};
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i], txt = node.nodeValue;
      if (!rx.test(txt)) { rx.lastIndex = 0; continue; }
      rx.lastIndex = 0;
      var frag = d.createDocumentFragment(), last = 0, m;
      while ((m = rx.exec(txt))) {
        var key = m[1].toLowerCase();
        if (seen[key]) continue;
        seen[key] = 1;
        frag.appendChild(d.createTextNode(txt.slice(last, m.index)));
        var sp2 = U.el('span', 'gl', U.esc(m[1]));
        sp2.setAttribute('data-term', key);
        sp2.setAttribute('tabindex', '0');
        sp2.setAttribute('role', 'button');
        frag.appendChild(sp2);
        last = m.index + m[1].length;
      }
      if (last) { frag.appendChild(d.createTextNode(txt.slice(last))); node.parentNode.replaceChild(frag, node); }
    }
  };

  /* ============================================================
     speech (used by glossary, read-back, and as scene fallback)
     ============================================================ */
  var voices = [];
  function loadVoices() { try { voices = w.speechSynthesis ? w.speechSynthesis.getVoices() : []; } catch (e) { voices = []; } }
  if (w.speechSynthesis) { loadVoices(); w.speechSynthesis.onvoiceschanged = loadVoices; }
  EAFM.pickVoice = function (profile) {
    if (!voices.length) loadVoices();
    var us = voices.filter(function (v) { return /en[-_]US/i.test(v.lang); });
    var pool = us.length ? us : voices.filter(function (v) { return /^en/i.test(v.lang); });
    if (!pool.length) return null;
    var fem = pool.filter(function (v) { return /zira|female|aria|jenny|samantha|susan|michelle|eva/i.test(v.name); });
    var male = pool.filter(function (v) { return /david|male|guy|mark|george|alex|tony|eric/i.test(v.name); });
    if (profile && profile.charAt(0) === 'f') return (fem[0] || pool[0]);
    if (profile && profile.charAt(0) === 'm') return (male[0] || pool[pool.length - 1]);
    return pool[0];
  };
  EAFM.speak = function (text, opts) {
    opts = opts || {};
    if (!w.speechSynthesis) { EAFM.toast('Speech is not available in this browser'); return null; }
    try { w.speechSynthesis.cancel(); } catch (e) { }
    var u = new w.SpeechSynthesisUtterance(String(text));
    var v = EAFM.pickVoice(opts.voice);
    if (v) { u.voice = v; }
    u.lang = 'en-US';
    u.rate = (opts.rate || 1) * (opts.profilePitch ? 1 : 1);
    u.pitch = opts.pitch || 1;
    if (opts.onboundary) u.onboundary = opts.onboundary;
    if (opts.onend) u.onend = opts.onend;
    if (opts.onstart) u.onstart = opts.onstart;
    try { w.speechSynthesis.speak(u); } catch (e) { }
    return u;
  };
  EAFM.stopSpeak = function () {
    try { w.speechSynthesis && w.speechSynthesis.cancel(); } catch (e) { }
    if (sayAudio) { try { sayAudio.pause(); sayAudio.currentTime = 0; } catch (e) { } }
  };

  /* ------------------------------------------------------------
     Pause is not Stop, and a long line needs both.

     Two things can be playing: a recording in `sayAudio`, or the
     browser's own synthesiser. They pause differently, so these
     three deal with whichever is actually running and report back
     so a button can say the right word.
     ------------------------------------------------------------ */
  EAFM.isSpeaking = function () {
    if (sayAudio && !sayAudio.paused && !sayAudio.ended) return 'audio';
    try { if (w.speechSynthesis && w.speechSynthesis.speaking && !w.speechSynthesis.paused) return 'tts'; } catch (e) { }
    return null;
  };
  EAFM.isPaused = function () {
    if (sayAudio && sayAudio.paused && sayAudio.currentTime > 0 && !sayAudio.ended) return 'audio';
    try { if (w.speechSynthesis && w.speechSynthesis.paused) return 'tts'; } catch (e) { }
    return null;
  };
  /** pause if playing, resume if paused. Returns true when it is now playing. */
  EAFM.togglePause = function () {
    if (EAFM.isSpeaking() === 'audio') { try { sayAudio.pause(); } catch (e) { } return false; }
    if (EAFM.isSpeaking() === 'tts') { try { w.speechSynthesis.pause(); } catch (e) { } return false; }
    if (EAFM.isPaused() === 'audio') { try { sayAudio.play(); } catch (e) { } return true; }
    if (EAFM.isPaused() === 'tts') { try { w.speechSynthesis.resume(); } catch (e) { } return true; }
    return false;
  };

  /* ============================================================
     EAFM.say — the one funnel for FIXED course text.

     A recorded line is played; anything without a recording falls
     back to the browser's own voice so nothing ever goes silent.
     A learner's own sentence has no recording by definition and
     deliberately keeps using the browser voice.
     ============================================================ */
  var sayAudio = null;
  EAFM.say = function (text, role, opts) {
    opts = opts || {};
    var voice = opts.voice || EAFM.voiceFor(role || 'course');
    var clip = EAFM.clip(text, voice);
    /* the fallback has to carry onend too, or a caller that re-enables
       its buttons when the line finishes never hears about it */
    if (!clip) return EAFM.speak(text, { voice: opts.fallback || 'f', rate: opts.rate || 1, onend: opts.onend });
    EAFM.stopSpeak();
    if (!sayAudio) { sayAudio = new w.Audio(); sayAudio.preload = 'auto'; }
    sayAudio.src = clip.url;
    sayAudio.volume = clip.v;
    sayAudio.playbackRate = opts.rate || 1;
    try { sayAudio.preservesPitch = true; sayAudio.mozPreservesPitch = true; } catch (e) { }
    sayAudio.currentTime = 0;
    var stopAt = clip.b;
    sayAudio.ontimeupdate = function () {
      if (sayAudio.currentTime >= stopAt) { sayAudio.pause(); sayAudio.ontimeupdate = null; if (opts.onend) opts.onend(); }
    };
    sayAudio.onended = function () { if (opts.onend) opts.onend(); };
    var p = sayAudio.play();
    if (p && p.catch) p.catch(function () { EAFM.speak(text, { voice: opts.fallback || 'f' }); });
    return sayAudio;
  };
  /** True when this exact line has a recording — used to label the UI honestly. */
  EAFM.hasRecording = function (text, role) {
    return !!EAFM.clip(text, EAFM.voiceFor(role || 'course'));
  };

  /* ------------------------------------------------------------
     One line of a conversation, in the best voice it can have.

     A cast member who carries a `say` block is a character with a
     real recorded voice, and their written turns play from the
     recording. A member without one — "You" — keeps the device
     voice, because a learner's own sentence is new and no recording
     of it can exist.

     That split is deliberate and audible: on playback the written
     half sounds like a person and your half sounds like your
     laptop, so you can hear which lines are yours without being
     told. The fallback still applies if a clip is ever missing.
     ------------------------------------------------------------ */
  function castOf(member) {
    if (!member || !member.say) return null;
    return (typeof EAFM.castVoice === 'function') ? EAFM.castVoice(member.say) : null;
  }
  EAFM.turnRecorded = function (member, text) {
    var v = castOf(member);
    return !!(v && EAFM.clip(String(text || '').trim(), v));
  };
  EAFM.sayTurn = function (member, text, opts) {
    member = member || {}; opts = opts || {};
    text = String(text || '').trim();
    var v = castOf(member);
    if (v && EAFM.clip(text, v)) {
      return EAFM.say(text, null, { voice: v, fallback: member.voice || 'f', onend: opts.onend });
    }
    return EAFM.speak(text, {
      voice: member.voice || 'f', pitch: member.pitch || 1, onend: opts.onend
    });
  };

  /* ============================================================
     card scaffolding + component dispatch
     ============================================================ */
  function ring(pcts) {
    var C = 2 * Math.PI * 18;
    return '<svg class="ring" viewBox="0 0 44 44"><circle class="bgc" cx="22" cy="22" r="18"/>' +
      '<circle class="fgc" cx="22" cy="22" r="18" transform="rotate(-90 22 22)" stroke-dasharray="' +
      (C * pcts).toFixed(1) + ' ' + C.toFixed(1) + '"/>' +
      '<text x="22" y="26" text-anchor="middle">' + Math.round(pcts * 100) + '</text></svg>';
  }

  /* Pull the learner's prose out of whatever shape an activity
     saves, so the coach does not need a special case per type. */
  function textOf(s) {
    if (s === null || s === undefined || typeof s === 'boolean' || typeof s === 'number') return '';
    if (typeof s === 'string') return s;
    if (Array.isArray(s)) return s.map(textOf).filter(Boolean).join('\n\n');
    if (typeof s === 'object') {
      var out = [];
      for (var k in s) if (s.hasOwnProperty(k) && k.charAt(0) !== '_') out.push(textOf(s[k]));
      return out.filter(Boolean).join('\n\n');
    }
    return '';
  }
  EAFM.textOf = textOf;

  function buildCard(pageId, card, idx) {
    var sec = U.el('section', 'card');
    sec.id = card.id;
    sec.setAttribute('data-card', card.id);

    var head = U.el('div', 'card-head');
    head.innerHTML = '<div class="card-letter">' + U.esc(card.ref || String.fromCharCode(65 + idx)) + '</div>' +
      '<div class="card-head-text"><h2>' + U.esc(card.title || '') + '</h2>' +
      (card.sub ? '<div class="sub">' + U.esc(card.sub) + '</div>' : '') + '</div>';

    /* Both heading buttons sit at the right-hand end, and ONE spacer
       pushes them there however many of them a card has. The Arabic
       guide comes first and the worked example stays last, because
       the worked example being the final element of the heading row
       is a contract integration.html holds. */
    var arPanel = EAFM.arCard(card);
    if (arPanel || card.worked) head.appendChild(U.el('div', 'grow'));

    if (arPanel) {
      var ab = U.el('button', 'btn btn-sm ar-btn no-print', 'بالعربية');
      ab.type = 'button';
      ab.lang = 'ar';
      ab.setAttribute('aria-pressed', 'false');
      ab.title = 'Show an Arabic guide to this exercise';
      ab.onclick = function () {
        var on = sec.classList.toggle('show-ar');
        ab.setAttribute('aria-pressed', on ? 'true' : 'false');
      };
      head.appendChild(ab);
    }

    /* A worked example opens from the heading, where it can be seen
       before the learner starts rather than found afterwards. */
    if (card.worked) {
      head.classList.add('has-worked');
      var wb = U.el('button', 'btn btn-sm worked-btn no-print',
        EAFM.art.icon('eye', 15) + U.esc(card.worked.label || 'See a finished example'));
      wb.type = 'button';
      wb.title = 'One learner’s finished version of this task — not an answer key';
      wb.onclick = function () { EAFM.ui.workedExample(card.worked); };
      head.appendChild(wb);
    }
    sec.appendChild(head);

    var body = U.el('div', 'card-body');
    if (arPanel) body.appendChild(arPanel);
    if (card.instruction) body.appendChild(U.el('p', 'instr', card.instruction));

    /* ----------------------------------------------------------
       Picture first, then the text, then the activity.

       Both used to be the job of whichever component happened to
       support them, so the order depended on the activity type —
       which is how this page ended up with its reading above its
       picture and no way to say otherwise. Here it is structural.
       `EX.scene` and `EX.discuss` still handle their own, so a card
       passes these at the top level only when it wants them first.
       ---------------------------------------------------------- */
    if (card.picture && card.type !== 'discuss') {
      var picw = U.el('div', 'diorama');
      picw.innerHTML = EAFM.art.diorama(card.picture);
      body.appendChild(picw);
      if (card.pictureCaption) body.appendChild(U.el('div', 'wc pic-cap', card.pictureCaption));
    }
    if (card.passage && card.type !== 'scene') body.appendChild(EAFM.passageNode(card.passage));

    /* ----------------------------------------------------------
       An exercise must not ask about something it does not show.

       `source` carries the material onto the card — the model entry
       a task is written from, a transcript, a short reminder — in a
       panel the learner can open without leaving the page. Quoting
       a card on ANOTHER page needs that page's data file in this
       shell, exactly as a coach prompt does, so check-refs looks.

       `seeAlso` is the lighter case: the material is already on this
       page, and the learner only needs a way back to it.
       ---------------------------------------------------------- */
    if (card.source) {
      try { body.appendChild(EAFM.sourcePanel(card.source)); }
      catch (e0) { if (w.console) w.console.error('source ' + card.id, e0); }
    }
    if (card.visual) body.appendChild(EAFM.renderVisual(card.visual));
    if (card.seeAlso) {
      /* authored flat — {card|sel|scene|line, label, evidence} — and
         handed to the same control the selections use */
      var s0 = card.seeAlso;
      var btn = EAFM.ui.lookAgain({
        jump: { card: s0.card, sel: s0.sel, scene: s0.scene, line: s0.line },
        evidence: s0.evidence,
        jumpLabel: s0.label || 'Look again'
      });
      if (btn) {
        var sa = U.el('div', 'btn-row no-print');
        sa.appendChild(btn);
        body.appendChild(sa);
      }
    }

    var rec = P.card(pageId, card.id);

    /* A grammar card gates its own chart: the learner completes the
       rule, and only then do the chart and the activity appear. */
    var stage = body, gate = null;
    if (card.ruleGate) {
      var rest = U.el('div', 'gated-rest');
      rest.hidden = true;
      gate = EAFM.ui.ruleGate(card.ruleGate, body, function () {
        rest.hidden = false;
        try { rest.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { }
        rec.gate = true; P.save();
      });
      body.appendChild(rest);
      stage = rest;
    }

    if (card.tables) card.tables.forEach(function (tb) { stage.appendChild(EAFM.renderTable(tb)); });
    /* An array of note objects is chrome and belongs to the card.
       A bare string belongs to the component (pairchart prints its
       own "Watch out" box), so it is left alone here — calling
       .forEach on it used to throw and kill the whole card. */
    if (Array.isArray(card.notes)) {
      card.notes.forEach(function (n) {
        stage.appendChild(U.el('div', 'note' + (n.warm ? ' warm' : ''), (n.title ? '<h4>' + U.esc(n.title) + '</h4>' : '') + n.body));
      });
    }
    sec.appendChild(body);

    var verdict = U.el('div', 'verdict');
    var foot = U.el('div', 'card-foot no-print');

    /* ----------------------------------------------------------
       The worked answers open BELOW the buttons, not above them.

       `Reasons` used to append its panel to the activity host,
       which put it inside .card-body — between the activity and
       this footer. Pressing Check then opened 600–800px of prose
       directly above the button row and shoved it that far down
       the page: measured at 851px on 1A, 670px on 1B and 1C. The
       learner pressed Check and the button they had just pressed,
       along with Try again, Hint and Show me, was now a full
       screen below their eyes.

       So the card gets a slot after the footer and the panel goes
       there. Nothing else moves, and because every activity type
       builds its panel through the one `Reasons` helper, all
       fourteen of them move together.
       ---------------------------------------------------------- */
    var reasonsSlot = U.el('div', 'card-reasons');
    sec.appendChild(reasonsSlot);

    var inst = null;
    var factory = EAFM.ex[card.type];

    var api = {
      pageId: pageId, card: card, body: stage, rec: rec,
      verdict: function (kind, msg) {
        verdict.className = 'verdict show ' + kind;
        verdict.textContent = msg;
      },
      clearVerdict: function () { verdict.className = 'verdict'; },
      save: function (state) { rec.state = state === undefined ? rec.state : state; P.save(); },
      /** record a result and update chrome */
      result: function (score, max) {
        rec.attempts++;
        rec.score = score; rec.max = max;
        var pass = max > 0 ? score >= max : score > 0;
        if (pass) {
          rec.done = true;
          if (!rec.helped && rec.attempts === 1) rec.mastered = true;
          sec.classList.add('is-ok');
          api.verdict('ok', (card.okMsg || 'Correct.') + ' ' + score + ' / ' + max + (rec.helped ? '  (completed with help)' : (rec.mastered ? '  ★ mastered' : '')));
        } else if (score > 0) {
          api.verdict('part', score + ' of ' + max + ' correct. Fix the ones that are wrong, or press Try again to start over.');
        } else {
          api.verdict('no', (card.noMsg || 'Not yet.') + ' Press Try again, or use a hint.');
        }
        P.save();
        return pass;
      },
      /** open-ended tasks: mark complete once the learner has really written something.
          `open` keeps these out of the marks total — they are submitted, not scored. */
      complete: function (msg) {
        rec.attempts++; rec.done = true; rec.score = 1; rec.max = 1; rec.open = true;
        sec.classList.add('is-ok');
        api.verdict('ok', msg || 'Saved. Well done.');
        P.save();
      },
      helped: function () { rec.helped = true; P.save(); },
      speak: EAFM.speak
    };

    /* ----------------------------------------------------------
       The activity lives in its own box so Try again can rebuild it.

       Try again used to call inst.reset(), which every component
       implements as "clear only the ones that are wrong". Measured
       across the unit, that left the answers on screen on 31 of 47
       cards and changed nothing at all on 31 of them — because after
       Show me nothing IS wrong, so nothing clears and the card can
       never be attempted again. selftest only ever checked that
       reset() did not throw, which is how it passed for so long.

       Rebuilding the component is the one fix that works for all
       forty-eight types, including the three with no reset at all.
       It is safe because a component only ever writes into the host
       it is handed: nothing reads api.body, and nothing reaches
       outside its own host.

       `stage` is the card body, or the hidden half of a rule gate —
       so a gated card hides its activity as well as its chart.
       ---------------------------------------------------------- */
    var actHost = U.el('div', 'card-activity');
    stage.appendChild(actHost);

    var unlockShow = function () { };     /* replaced once Show me exists */

    function buildActivity() {
      actHost.innerHTML = '';
      /* a rebuilt activity appends a fresh panel, so drop the old one */
      if (reasonsSlot) reasonsSlot.innerHTML = '';
      inst = null;
      if (!factory) {
        actHost.appendChild(U.el('div', 'verdict show part', 'Unknown activity type: ' + card.type));
        return;
      }
      try { inst = factory(card, actHost, api); } catch (err) {
        actHost.appendChild(U.el('div', 'verdict show no', 'This activity failed to load: ' + err.message));
        if (w.console) w.console.error(card.id, err);
      }
      /* Show me unlocks on the first attempt and must keep doing so
         after a rebuild, so the wrapping belongs here rather than
         beside the button. `unlockShow` is read when it is called,
         not when it is wrapped, so a later assignment still lands. */
      if (inst && inst.check) {
        var oc = inst.check;
        inst.check = function () { var rr = oc.apply(inst, arguments); unlockShow(); return rr; };
      }
      card._inst = inst;
    }
    buildActivity();

    /* a real start-over: the card comes back exactly as it loaded */
    function hardReset() {
      try { EAFM.stopSpeak(); } catch (e) { }
      api.clearVerdict();
      sec.classList.remove('is-ok');
      rec.state = null; rec.score = 0; rec.max = 0; rec.done = false;
      P.save();
      buildActivity();
    }

    /* ----------------------------------------------------------
       the coach — only on genuinely open-ended work.
       It reads whatever the activity holds, so one block serves
       every writing and speaking type.
       ---------------------------------------------------------- */
    if (card.coach && inst) {
      var getText = inst.coachText ? function () { return inst.coachText(); }
        : (card._getText ? function () { return card._getText(); }
          : function () { return textOf(inst.getState ? inst.getState() : ''); });
      try { EAFM.ui.coach(card.coach, stage, api, getText); }
      catch (e3) { if (w.console) w.console.error('coach ' + card.id, e3); }
    }

    body.appendChild(verdict);

    /* footer controls */
    if (inst && inst.check) {
      var bChk = U.el('button', 'btn btn-primary', EAFM.art.icon('check', 16) + 'Check answers');
      bChk.onclick = function () { inst.check(); };
      foot.appendChild(bChk);
    }
    if (inst && (inst.reset || inst.check)) {
      var bTry = U.el('button', 'btn', EAFM.art.icon('replay', 16) + 'Try again');
      bTry.onclick = function () { hardReset(); };
      bTry.title = 'Clear this exercise and start it again';
      foot.appendChild(bTry);
    }
    if (inst && inst.hint) {
      var bH = U.el('button', 'btn', EAFM.art.icon('bulb', 16) + 'Hint');
      bH.onclick = function () { api.helped(); inst.hint(); };
      foot.appendChild(bH);
    }
    if (inst && inst.show) {
      var bS = U.el('button', 'btn', EAFM.art.icon('eye', 16) + 'Show me');
      bS.disabled = rec.attempts === 0;
      bS.title = rec.attempts === 0 ? 'Make one attempt first' : 'Walk through the answer';
      unlockShow = function () { bS.disabled = false; bS.title = 'Walk through the answer'; };
      foot.appendChild(bS);
      bS.onclick = function () { api.helped(); inst.show(); };
      sec.addEventListener('csb1:attempt', unlockShow);
    }
    foot.appendChild(U.el('div', 'grow'));
    if (card.bookRef) foot.appendChild(U.el('span', 'bookchip', card.bookRef));
    /* before the slot, so the order is body → buttons → worked answers */
    sec.insertBefore(foot, reasonsSlot);

    /* restore saved work */
    if (gate && rec.gate) { try { gate.force(); } catch (e) { } }
    if (inst && inst.setState && rec.state) { try { inst.setState(rec.state); } catch (e) { } }
    if (rec.done) sec.classList.add('is-ok');

    card._inst = inst;
    return sec;
  }

  /* ------------------------------------------------------------
     The Arabic guide for one card.

     Built from the card's own data in one place, so no activity
     component has to know Arabic exists. Three sections, and a card
     gets only the ones it has something for:

       التعليمات   the directions, so a learner who cannot read the
                   instruction can still start
       الكلمات     the words this exercise asks you to place, each
                   beside its English — the vocabulary IS the task,
                   so the pairing is the scaffold
       النص        the reading or the conversation, translated, so
                   the comprehension work is not blocked by decoding

     The questions and the options are deliberately NOT here. A
     learner who can read the Arabic answer has not done the
     exercise, and a drag pool of Arabic chips is a different
     exercise altogether.
     ------------------------------------------------------------ */
  EAFM.arCard = function (card) {
    var wrap = U.el('div', 'ar-guide no-print');
    wrap.setAttribute('lang', 'ar');
    wrap.setAttribute('dir', 'rtl');
    var got = false;

    function section(title, node) {
      var h = U.el('div', 'ar-h', U.esc(title));
      wrap.appendChild(h); wrap.appendChild(node); got = true;
    }

    var nodes = [card].concat(card.quiz ? [card.quiz] : []);

    /* 1. the directions */
    var dir = [];
    nodes.forEach(function (n) {
      [n.instruction, n.poolLabel].forEach(function (s) {
        var t = s && EAFM.ar(s);
        if (t && dir.indexOf(t) < 0) dir.push(t);
      });
    });
    if (dir.length) {
      var dn = U.el('div', 'ar-body');
      dir.forEach(function (t) { dn.appendChild(U.el('p', '', t)); });
      section('التعليمات', dn);
    }

    /* 2. the words this exercise asks you to place */
    var seen = {}, pairs = [];
    nodes.forEach(function (n) {
      var pool = [].concat(n.pool || [], n.chips || [], n.tiles || [], n.bank || []);
      pool.forEach(function (p) {
        var en = (typeof p === 'string') ? p : (p && p.label);
        if (!en || seen[en]) return;
        var t = EAFM.ar(en);
        if (!t) return;
        seen[en] = 1; pairs.push([en, t]);
      });
    });
    if (pairs.length) {
      var tn = U.el('div', 'ar-words');
      pairs.forEach(function (p) {
        var r = U.el('div', 'ar-w');
        r.innerHTML = '<span class="ar-en" dir="ltr">' + U.esc(p[0]) + '</span>' +
          '<span class="ar-tr">' + U.esc(p[1]) + '</span>';
        tn.appendChild(r);
      });
      section('الكلمات الأساسية', tn);
    }

    /* 3. the text or the conversation */
    var script = [];
    nodes.forEach(function (n) {
      [n.text, n.passage && n.passage.html, typeof n.passage === 'string' ? n.passage : null]
        .forEach(function (s) { var t = s && EAFM.ar(s); if (t && script.indexOf(t) < 0) script.push(t); });
      (n.turns || []).forEach(function (tu) {
        var t = tu.say && EAFM.ar(tu.say);
        if (t && script.indexOf(t) < 0) script.push(t);
      });
    });
    if (script.length) {
      var sn = U.el('div', 'ar-body');
      script.forEach(function (t) { sn.appendChild(U.el('p', '', t)); });
      section(card.turns || (card.quiz && card.quiz.turns) ? 'المحادثة' : 'النص', sn);
    }

    return got ? wrap : null;
  };

  /* Exported for the test suites. A card's real behaviour — the rule
     gate, the coach, the footer buttons and above all what Try again
     does — lives in buildCard, not in the component, so a suite that
     only instantiates components cannot see any of it. selftest part
     1c drives real cards through this. */
  EAFM.buildCard = buildCard;

  /* ============================================================
     page renderer
     ============================================================ */
  EAFM.render = function (pageId) {
    var def = EAFM.pages[pageId];
    if (!def) { d.body.innerHTML = '<p style="padding:40px;font:600 16px system-ui">Page data not found: ' + U.esc(pageId) + '</p>'; return; }
    d.title = (def.book ? def.book.title + ' · ' : '') + EAFM.COURSE.name;
    applyTheme();

    d.body.appendChild(topbar(def));

    var main = U.el('main', 'page-main');
    var wrap = U.el('div', 'wrap');

    var head = U.el('div', 'page-head');
    head.innerHTML =
      '<div class="eyebrow"><span>' + U.esc(def.book.lesson) + ' · §' + U.esc(def.book.section) + '</span>' +
      '<span class="bookchip">' + U.esc(def.book.source || EAFM.COURSE.book) + ' · ' + U.esc(def.book.ref || ('p.' + def.book.page)) + '</span></div>' +
      '<h1>' + U.esc(def.book.title) + '</h1>' +
      '<div class="objective">' + EAFM.art.icon('shield', 18) + '<div><b>Objective:</b> ' + U.esc(def.objective) + '</div></div>';
    wrap.appendChild(head);

    if (def.intro) wrap.appendChild(U.el('p', 'instr', def.intro));

    if (def.hero) {
      var hero = U.el('div', 'diorama');
      hero.style.margin = '18px 0';
      hero.innerHTML = EAFM.art.diorama(def.hero);
      if (def.heroCaption) {
        var hc = U.el('div', 'wc');
        hc.style.padding = '8px 12px';
        hc.textContent = def.heroCaption;
        hero.appendChild(hc);
      }
      wrap.appendChild(hero);
    }

    for (var i = 0; i < def.cards.length; i++) wrap.appendChild(buildCard(pageId, def.cards[i], i));

    /* end-of-page nav */
    var endnav = U.el('div', 'btn-row no-print');
    endnav.style.margin = '34px 0 10px';
    if (def.prev) { var pa = U.el('a', 'btn', '◀ ' + (def.prevLabel || 'Previous section')); pa.href = def.prev + '.html'; endnav.appendChild(pa); }
    var jp2 = EAFM.ui.jump(def.id);
    if (jp2) endnav.appendChild(jp2);
    var hubA = U.el('a', 'btn btn-ghost', EAFM.art.icon('map', 16) + 'Unit map'); hubA.href = EAFM.unitHref(EAFM.unitOf(def.id)); endnav.appendChild(hubA);
    if (def.next) { var na = U.el('a', 'btn btn-primary', (def.nextLabel || 'Next section') + ' ▶'); na.href = def.next + '.html'; endnav.appendChild(na); }
    var pc2 = EAFM.pageCount(def.id);
    if (pc2) endnav.appendChild(U.el('span', 'pagecount', pc2.n + ' of ' + pc2.total));
    wrap.appendChild(endnav);

    main.appendChild(wrap);
    d.body.appendChild(main);
    d.body.appendChild(statusbar(def));

    /* glossary pass over reading text only */
    var readables = wrap.querySelectorAll('.reading, .instr, .note');
    for (var q = 0; q < readables.length; q++) EAFM.linkGlossary(readables[q]);

    EAFM.chrome = {
      refresh: function () {
        var sc = P.pageScore(pageId);
        var bar = d.querySelector('.statusbar .meter i');
        var cnt = d.querySelector('.statusbar .wc');
        var total = def.cards.length;
        if (bar) bar.style.width = (total ? (sc.done / total * 100) : 0) + '%';
        if (cnt) cnt.textContent = sc.done + ' / ' + total;
        if (total && sc.done === total && !P.page(pageId)._celebrated) {
          P.page(pageId)._celebrated = true;
          writeJSON(KEY, P.all);
          EAFM.confetti();
          EAFM.toast('Section complete — nice work.');
        }
      }
    };
    EAFM.chrome.refresh();

    /* keyboard help */
    d.addEventListener('keydown', function (ev) {
      if (ev.key === '?' && !/input|textarea/i.test((ev.target.tagName || ''))) {
        EAFM.toast('Space = play/pause scene · ← → = previous/next line · Tab = move · Enter = select');
      }
    });
  };

  /* ============================================================
     modal — one overlay dialog, focus-trapped
     ============================================================ */
  var openModal = null;
  EAFM.modal = function (opts) {
    if (openModal) openModal.close();
    var lastFocus = d.activeElement;
    var back = U.el('div', 'modal-back');
    var box = U.el('div', 'modal' + (opts.wide ? ' modal-wide' : ''));
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    var hid = 'md' + Math.random().toString(36).slice(2, 8);
    box.setAttribute('aria-labelledby', hid);

    var head = U.el('div', 'modal-head');
    head.innerHTML = '<h3 id="' + hid + '">' + U.esc(opts.title || '') + '</h3>';
    head.appendChild(U.el('div', 'grow'));
    /* a labelled button, not a bare ×: the icon alone made people
       hesitate over whether it closed the panel or the whole page */
    var xb = U.el('button', 'btn btn-sm modal-close', EAFM.art.icon('x', 16) + 'Close');
    xb.type = 'button';
    xb.setAttribute('aria-label', 'Close this panel');
    head.appendChild(xb);
    box.appendChild(head);

    var mbody = U.el('div', 'modal-body');
    if (opts.node) mbody.appendChild(opts.node);
    else if (opts.html !== undefined) mbody.innerHTML = opts.html;
    box.appendChild(mbody);

    var api = {
      el: box, body: mbody,
      close: function () {
        if (openModal !== api) return;
        openModal = null;
        /* whatever the panel was playing goes with it — a voice
           carrying on after the panel has gone is disorienting, and
           there is no longer any control to stop it */
        try { EAFM.stopSpeak(); } catch (e) { }
        if (opts.onClose) { try { opts.onClose(); } catch (e) { } }
        d.removeEventListener('keydown', onKey, true);
        back.remove();
        try { if (lastFocus && lastFocus.focus) lastFocus.focus(); } catch (e) { }
      }
    };
    xb.onclick = api.close;

    if (opts.actions && opts.actions.length) {
      var foot = U.el('div', 'modal-foot');
      opts.actions.forEach(function (a) {
        var b = U.el('button', 'btn ' + (a.cls || ''), a.label);
        b.type = 'button';
        b.onclick = function () { if (a.onclick) a.onclick(api); if (!a.keep) api.close(); };
        foot.appendChild(b);
      });
      box.appendChild(foot);
    }

    function focusables() {
      return box.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])');
    }
    function onKey(ev) {
      if (ev.key === 'Escape') { ev.preventDefault(); api.close(); return; }
      if (ev.key !== 'Tab') return;
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && d.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && d.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
    back.addEventListener('mousedown', function (ev) { if (ev.target === back) api.close(); });

    back.appendChild(box);
    d.body.appendChild(back);
    openModal = api;
    d.addEventListener('keydown', onKey, true);
    var ff = focusables();
    if (ff.length) { try { ff[0].focus(); } catch (e) { } }
    return api;
  };

  /* ============================================================
     clipboard — works on file:// too
     The async API needs a secure context and can be refused, so a
     hidden-textarea copy is always kept as the fallback, and the
     text stays selectable either way.
     ============================================================ */
  EAFM.copyText = function (text) {
    text = String(text === undefined ? '' : text);
    function ok() { EAFM.toast('Copied — paste it into the chatbot.'); }
    function fallback() {
      try {
        var ta = d.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '0';
        d.body.appendChild(ta);
        ta.select();
        try { ta.setSelectionRange(0, text.length); } catch (e) { }
        var done = d.execCommand && d.execCommand('copy');
        ta.remove();
        if (done) ok();
        else EAFM.toast('Select the prompt below and press Ctrl + C.', 3600);
      } catch (e2) { EAFM.toast('Select the prompt below and press Ctrl + C.', 3600); }
    }
    try {
      if (w.navigator && w.navigator.clipboard && w.navigator.clipboard.writeText) {
        w.navigator.clipboard.writeText(text).then(ok, fallback);
        return;
      }
    } catch (e) { }
    fallback();
  };

  /* ============================================================
     visuals — every card carries at least one
     ============================================================ */
  EAFM.renderVisual = function (v) {
    if (Array.isArray(v)) {
      /* a live figure carries controls, a caption and a stage, and
         half a card's width turns its labels into specks — so a row
         holding one stacks instead of sharing the width */
      var stack = v.some(function (x) { return x && x.live; });
      var many = U.el('div', 'vis-row' + (stack ? ' vis-stack' : ''));
      v.forEach(function (x) { many.appendChild(EAFM.renderVisual(x)); });
      return many;
    }
    var fig = U.el('figure', 'vis' + (v.wide ? ' vis-wide' : '') + (v.cls ? ' ' + v.cls : ''));

    /* a live figure is the one kind that cannot be a string: it owns
       elements and handlers, so it builds itself into the host and
       hands back a destroy for whoever tears the card down. If the
       name is not registered it falls back to the static drawing of
       the same name, so a page can never lose its picture. */
    if (v.live && EAFM.art.hasLive(v.live)) {
      var lh = U.el('div', 'vis-art');
      fig.appendChild(lh);
      var inst = EAFM.art.live(v.live, lh, v.arg);
      if (inst && inst.destroy) fig._destroy = inst.destroy;
      if (v.caption) fig.appendChild(U.el('figcaption', '', v.caption));
      return fig;
    }

    var inner = '';
    if (v.live) inner = EAFM.art.figure(v.live, v.arg);
    else if (v.art) inner = EAFM.art.figure(v.art, v.arg);
    else if (v.spot) inner = EAFM.art.spot(v.spot);
    else if (v.diorama) inner = EAFM.art.diorama(v.diorama, v.arg);
    else if (v.still) inner = EAFM.art.still(v.still, v.arg);
    else if (v.mouth) inner = EAFM.art.mouthDiagram(v.mouth);
    else if (v.pie) inner = EAFM.art.pie(v.pie, v.arg);
    else if (v.html) inner = v.html;
    fig.innerHTML = '<div class="vis-art">' + inner + '</div>';
    /* captions are authored content, like instructions, so light
       markup (<b>, <i>) is rendered rather than printed */
    if (v.caption) fig.appendChild(U.el('figcaption', '', v.caption));
    return fig;
  };

  /* ============================================================
     the shared criteria verifiers
     One place, so the on-page checklist and the chatbot prompt can
     never describe different criteria.
     ============================================================ */
  var AUTO = {
    words: function (c, text) {
      var n = U.words(text), need = c.min || 1;
      return { ok: n >= need, msg: n >= need ? n + ' words — long enough.' : 'Only ' + n + ' of the ' + need + ' words needed.' };
    },
    mentions: function (c, text) {
      var hit = [];
      (c.keys || []).forEach(function (k) { if (U.mentions(text, [k], 1)) hit.push(k); });
      var need = c.need || 1;
      return {
        ok: hit.length >= need,
        msg: hit.length >= need ? 'Found: ' + hit.slice(0, 6).join(', ') + '.' : (c.fail || 'The checker could not find words such as ' + (c.keys || []).slice(0, 4).join(', ') + '.')
      };
    },
    past: function (c, text) {
      var pv = U.pastVerbs(text), need = c.need || 3;
      return {
        ok: pv.length >= need,
        msg: pv.length >= need ? 'Found ' + pv.length + ' past-tense verbs: ' + pv.slice(0, 8).join(', ') + '.' : 'Only ' + pv.length + ' past-tense verbs found; a narrative needs at least ' + need + '.',
        highlight: pv
      };
    },
    tense: function (c, text) {
      var t = U.tense(text);
      return { ok: t === c.want, msg: 'The checker reads this as the ' + U.tenseLabel(t) + '; the task asks for the ' + U.tenseLabel(c.want) + '.' };
    },
    lines: function (c, text) {
      var n = String(text || '').split(/\n+/).filter(function (x) { return U.words(x) >= 2; }).length;
      var need = c.min || 2;
      return { ok: n >= need, msg: n >= need ? n + ' separate ideas found.' : 'Found ' + n + ' idea(s); write at least ' + need + ', one per line.' };
    },
    /* a raw-text test, for things U.norm would strip — a question
       mark, a capital letter, a specific punctuation shape */
    has: function (c, text) {
      var s = String(text === undefined || text === null ? '' : text);
      var ok = c.rx ? new RegExp(c.rx, c.flags || 'i').test(s) : s.indexOf(c.needle) >= 0;
      return { ok: ok, msg: ok ? (c.pass || 'Found it.') : (c.fail || 'Not there yet.') };
    },
    sentences: function (c, text) {
      var m = String(text || '').match(/[^.!?]+[.!?]+\s*|[^.!?]+$/g) || [];
      var n = m.filter(function (x) { return U.words(x) >= 3; }).length;
      var need = c.min || 2;
      return { ok: n >= need, msg: n >= need ? n + ' sentences.' : 'Found ' + n + ' sentence(s); write at least ' + need + '.' };
    }
  };
  EAFM.autoCheck = function (c, text) {
    if (typeof c.verify === 'function') return c.verify(text, U) || { ok: false, msg: '' };
    var f = AUTO[c.auto];
    if (!f) return null;
    return f(c, text || '');
  };

  /* ============================================================
     the chatbot prompt — full context, not just the learner's text

     A prompt that carries only the learner's sentences is close to
     useless: the model cannot tell whether the answer fits the
     reading, the lesson or the level. Everything the learner could
     see goes in, in a fixed order.
     ============================================================ */
  function sceneTranscript(id) {
    var sc = EAFM.scenes[id];
    if (!sc) return null;
    return (sc.lines || []).map(function (l) {
      var who = (sc.cast[l.who] && sc.cast[l.who].name) || l.who;
      return who + ': ' + l.en;
    }).join('\n');
  }
  function cardPassage(pageId, cardId) {
    var def = EAFM.pages[pageId];
    if (!def) return null;
    for (var i = 0; i < def.cards.length; i++) {
      var c = def.cards[i];
      if (cardId && c.id !== cardId) continue;
      var p = c.passage;
      if (p) {
        var bits = (p.paras || []).slice();
        if (p.title) bits.unshift(p.title);
        if (bits.length) return bits.join('\n\n');
      }
    }
    return null;
  }
  function sourceBlock(src, api) {
    if (!src) return [];
    if (Array.isArray(src)) {
      var out = [];
      src.forEach(function (s) { out = out.concat(sourceBlock(s, api)); });
      return out;
    }
    var label, text;
    if (src.text) { label = src.label || 'TEXT the learner is working from'; text = src.text; }
    else if (src.scene) { label = src.label || 'TRANSCRIPT of the recording the learner heard'; text = sceneTranscript(src.scene); }
    else if (src.passage) { label = src.label || 'READING the learner is working from'; text = cardPassage(src.page || api.pageId, src.passage === true ? null : src.passage); }
    else if (src.picture) { label = src.label || 'PICTURE the learner is looking at (described)'; text = src.picture; }
    else if (src.chart) { label = src.label || 'CHART the learner is working from'; text = src.chart; }
    if (!text) return [];
    return [label + ':\n"""\n' + text + '\n"""'];
  }

  EAFM.promptFor = function (api, cfg, text) {
    var def = EAFM.pages[api.pageId] || { book: {}, objective: '' };
    var card = api.card || {};
    var b = def.book || {};
    var L = [];

    L.push('You are an experienced ESL teacher marking a piece of work at CEFR level B1.');
    L.push('The learner is studying English through accounting and financial management, in an NGO finance office. Their first language is usually Arabic, so expect L1 interference in articles, prepositions and word order, and explain corrections simply.');
    L.push('');
    L.push('WHERE THIS SITS');
    L.push('  Course  : ' + EAFM.COURSE.full + ' (CEFR B1 English taught through NGO accounting and finance)');
    L.push('  Unit    : Unit 1 — Learning Together');
    L.push('  Lesson  : ' + (b.lesson || '—') + ', section ' + (b.section === undefined ? '—' : b.section) + ', exercise ' + (card.ref || '—'));
    L.push('  Lesson objective: ' + (def.objective || '—'));
    L.push('');

    if (cfg.taught) {
      L.push('WHAT THE LEARNER WAS TAUGHT IN THIS SECTION AND IS MEANT TO USE');
      (Array.isArray(cfg.taught) ? cfg.taught : [cfg.taught]).forEach(function (x) { L.push('  - ' + x); });
      L.push('');
    }
    if (cfg.target) { L.push('TARGET LANGUAGE: ' + cfg.target); L.push(''); }

    var src = sourceBlock(cfg.source, api);
    if (src.length) { L.push('SOURCE MATERIAL THE TASK REFERS TO'); L.push(src.join('\n\n')); L.push(''); }

    L.push('THE TASK THE LEARNER WAS GIVEN');
    L.push('  ' + String(cfg.task || card.instruction || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    if (cfg.parts) {
      (Array.isArray(cfg.parts) ? cfg.parts : [cfg.parts]).forEach(function (p) { L.push('  - ' + p); });
    }
    if (cfg.minWords) L.push('  Minimum length: ' + cfg.minWords + ' words.');
    L.push('');

    if (cfg.example) {
      var ex = Array.isArray(cfg.example) ? cfg.example.join('\n') : cfg.example;
      L.push('A WORKED EXAMPLE the learner could see. It is a reference standard, NOT a target to copy — do not penalise the learner for writing something different.');
      L.push('"""\n' + ex + '\n"""');
      L.push('');
    }

    L.push('MARK AGAINST THESE CRITERIA ONLY');
    (cfg.criteria || []).forEach(function (c, i) {
      L.push('  ' + (i + 1) + '. ' + c.t + (c.note ? ' — ' + c.note : ''));
    });
    L.push('');
    L.push('HOW TO REPLY');
    L.push('  1. For each criterion, say met / partly met / not met, with ONE short line of evidence quoted from the learner\'s own text.');
    L.push('  2. Then give exactly three specific improvements, each with a corrected example taken from their text.');
    L.push('  3. Do not rewrite the whole piece. Do not invent criteria. Do not comment on content you were not given.');
    L.push('  4. Keep the whole reply under 250 words, in English a B1 learner can read, and end with one encouraging sentence.');
    L.push('');
    L.push('THE LEARNER\'S WORK');
    L.push('"""');
    L.push(String(text === undefined || text === null ? '' : text).trim() || '(the learner has not written anything yet)');
    L.push('"""');
    return L.join('\n');
  };

  /* ============================================================
     shared small widgets used by several components
     ============================================================ */
  EAFM.ui = {
    stems: function (list, onPick) {
      var box = U.el('div', 'stems');
      list.forEach(function (s) {
        var b = U.el('button', 'stem', U.esc(s));
        b.type = 'button';
        b.onclick = function () { onPick(s); };
        box.appendChild(b);
      });
      return box;
    },
    modelBox: function (text, label) {
      var wrapB = U.el('div');
      var btn = U.el('button', 'btn btn-sm', EAFM.art.icon('eye', 15) + (label || 'Compare with a model answer'));
      btn.type = 'button';
      var box = U.el('div', 'model-box');
      box.style.display = 'none';
      box.innerHTML = typeof text === 'string' ? U.esc(text) : text.map(function (x) { return '<div style="margin-bottom:6px">• ' + U.esc(x) + '</div>'; }).join('');
      btn.onclick = function () { box.style.display = box.style.display === 'none' ? 'block' : 'none'; };
      wrapB.appendChild(btn); wrapB.appendChild(box);
      return wrapB;
    },
    speakBtn: function (getText, voice) {
      var b = U.el('button', 'btn btn-sm', EAFM.art.icon('sound', 15) + 'Listen');
      b.type = 'button';
      b.onclick = function () { EAFM.speak(getText(), { voice: voice }); };
      return b;
    },

    /* --------------------------------------------------------
       pick — a listbox that WRAPS long options.
       A native <select> cannot: the OS draws the options and
       Chrome truncates them with an ellipsis, which is useless
       for a full-sentence answer.
       -------------------------------------------------------- */
    pick: function (opts) {
      opts = opts || {};
      var items = opts.options || [];
      var value = opts.value === undefined ? null : opts.value;
      var isOpen = false, active = -1, buf = '', bufT = 0;

      var box = U.el('div', 'pick' + (opts.inline ? ' pick-inline' : '') + (opts.cls ? ' ' + opts.cls : ''));
      var btn = U.el('button', 'pick-btn');
      btn.type = 'button';
      btn.setAttribute('aria-haspopup', 'listbox');
      btn.setAttribute('aria-expanded', 'false');
      if (opts.label) btn.setAttribute('aria-label', opts.label);
      var panel = U.el('div', 'pick-panel');
      panel.setAttribute('role', 'listbox');
      if (opts.label) panel.setAttribute('aria-label', opts.label);
      panel.hidden = true;

      var optEls = [], lastGroup = null;
      items.forEach(function (it, i) {
        if (it.group && it.group !== lastGroup) {
          lastGroup = it.group;
          var gh = U.el('div', 'pick-group', U.esc(it.group));
          gh.setAttribute('role', 'presentation');
          panel.appendChild(gh);
        }
        var o = U.el('div', 'pick-opt');
        o.setAttribute('role', 'option');
        o.setAttribute('aria-selected', 'false');
        o.id = 'po' + Math.random().toString(36).slice(2, 8);
        o.innerHTML = '<span class="pick-lbl">' + U.esc(it.label) + '</span>' +
          (it.sub ? '<span class="pick-sub">' + U.esc(it.sub) + '</span>' : '');
        if (it.disabled) { o.setAttribute('aria-disabled', 'true'); o.classList.add('is-dis'); }
        o.addEventListener('mousedown', function (ev) {
          ev.preventDefault();
          if (it.disabled) return;
          choose(i);
        });
        o.addEventListener('mousemove', function () { setActive(i, false); });
        panel.appendChild(o);
        optEls.push(o);
      });

      function label() {
        for (var i = 0; i < items.length; i++) if (items[i].v === value) return items[i].label;
        return null;
      }
      function paint() {
        var lb = label();
        btn.innerHTML = '<span class="pick-cur' + (lb ? '' : ' is-ph') + '">' +
          U.esc(lb || opts.placeholder || 'Choose…') + '</span><span class="pick-caret">▾</span>';
        optEls.forEach(function (o, i) { o.setAttribute('aria-selected', items[i].v === value ? 'true' : 'false'); });
      }
      function setActive(i, scroll) {
        active = i;
        optEls.forEach(function (o, j) { o.classList.toggle('is-active', j === i); });
        if (i >= 0) {
          btn.setAttribute('aria-activedescendant', optEls[i].id);
          if (scroll !== false) try { optEls[i].scrollIntoView({ block: 'nearest' }); } catch (e) { }
        } else btn.removeAttribute('aria-activedescendant');
      }
      /* ----------------------------------------------------------
         Open upwards when there is no room below.

         This panel always opened downwards, and the control learners
         actually use — "Jump to…" — sits in a status bar pinned to
         the bottom of the window. Measured on a 700px viewport: the
         button's bottom edge at 685, the panel opening at 690 and
         running to 1020, so 320px of a 330px list were below the
         fold. The list was complete and correct the whole time; ten
         pixels of it were visible, which is why it read as empty.
         ---------------------------------------------------------- */
      function place() {
        panel.classList.remove('is-up');
        panel.style.maxHeight = '';
        var r = btn.getBoundingClientRect();
        var vh = w.innerHeight || d.documentElement.clientHeight;
        var below = vh - r.bottom - 12;
        var above = r.top - 12;
        var up = below < 180 && above > below;
        if (up) panel.classList.add('is-up');
        panel.style.maxHeight = Math.max(120, Math.min(330, up ? above : below)) + 'px';
      }
      function open() {
        if (isOpen) return;
        isOpen = true;
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        place();
        var sel = -1;
        for (var i = 0; i < items.length; i++) if (items[i].v === value) sel = i;
        setActive(sel >= 0 ? sel : firstEnabled());
        d.addEventListener('mousedown', outside, true);
      }
      function close() {
        if (!isOpen) return;
        isOpen = false;
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        setActive(-1);
        d.removeEventListener('mousedown', outside, true);
      }
      function outside(ev) { if (!box.contains(ev.target)) close(); }
      function firstEnabled() { for (var i = 0; i < items.length; i++) if (!items[i].disabled) return i; return -1; }
      function step(dir) {
        var i = active;
        for (var n = 0; n < items.length; n++) {
          i = i + dir;
          if (i < 0) i = items.length - 1;
          if (i >= items.length) i = 0;
          if (!items[i].disabled) { setActive(i); return; }
        }
      }
      function choose(i) {
        value = items[i].v;
        paint();
        close();
        btn.focus();
        if (opts.onChange) opts.onChange(value, items[i]);
      }

      btn.addEventListener('click', function () { isOpen ? close() : open(); });
      btn.addEventListener('keydown', function (ev) {
        var k = ev.key;
        if (k === 'ArrowDown' || k === 'ArrowUp') {
          ev.preventDefault();
          if (!isOpen) { open(); return; }
          step(k === 'ArrowDown' ? 1 : -1);
          return;
        }
        if (k === 'Home' || k === 'End') {
          if (!isOpen) return;
          ev.preventDefault();
          setActive(k === 'Home' ? firstEnabled() : items.length - 1);
          return;
        }
        if (k === 'Enter' || k === ' ') {
          ev.preventDefault();
          if (!isOpen) { open(); return; }
          if (active >= 0) choose(active);
          return;
        }
        if (k === 'Escape') { if (isOpen) { ev.preventDefault(); close(); } return; }
        if (k === 'Tab') { close(); return; }
        if (k.length === 1 && /\S/.test(k)) {
          var now = Date.now();
          buf = (now - bufT < 900 ? buf : '') + k.toLowerCase();
          bufT = now;
          for (var i = 0; i < items.length; i++) {
            if (!items[i].disabled && String(items[i].label).toLowerCase().indexOf(buf) === 0) {
              if (!isOpen) open();
              setActive(i);
              return;
            }
          }
        }
      });

      box.appendChild(btn);
      box.appendChild(panel);
      paint();

      return {
        el: box,
        get: function () { return value; },
        set: function (v) { value = v; paint(); },
        mark: function (kind) { box.classList.remove('is-ok', 'is-no'); if (kind) box.classList.add('is-' + kind); },
        reset: function () { value = null; paint(); box.classList.remove('is-ok', 'is-no'); },
        disable: function (on) { btn.disabled = !!on; }
      };
    },

    /* --------------------------------------------------------
       radioCards — stacked, wrapping options for long answers.
       This is the default presentation for comprehension items.
       -------------------------------------------------------- */
    radioCards: function (opts) {
      opts = opts || {};
      var items = opts.options || [];
      var value = opts.value === undefined ? null : opts.value;
      var group = U.el('div', 'rcards');
      group.setAttribute('role', 'radiogroup');
      if (opts.label) group.setAttribute('aria-label', opts.label);
      var els = [];

      items.forEach(function (it, i) {
        var o = U.el('div', 'rcard');
        o.setAttribute('role', 'radio');
        o.setAttribute('aria-checked', 'false');
        o.setAttribute('tabindex', i === 0 ? '0' : '-1');
        o.innerHTML = '<span class="rc-dot"></span><span class="rc-lbl">' + U.esc(it.label) + '</span>';
        o.addEventListener('click', function () { choose(i); });
        o.addEventListener('keydown', function (ev) {
          var k = ev.key;
          if (k === ' ' || k === 'Enter') { ev.preventDefault(); choose(i); return; }
          if (k === 'ArrowDown' || k === 'ArrowRight') { ev.preventDefault(); focusAt(i + 1); }
          if (k === 'ArrowUp' || k === 'ArrowLeft') { ev.preventDefault(); focusAt(i - 1); }
        });
        group.appendChild(o);
        els.push(o);
        var why = U.el('div', 'rc-why');
        why.hidden = true;
        group.appendChild(why);
        it._why = why;
      });

      function focusAt(i) {
        if (i < 0) i = els.length - 1;
        if (i >= els.length) i = 0;
        els.forEach(function (e, j) { e.setAttribute('tabindex', j === i ? '0' : '-1'); });
        els[i].focus();
      }
      function paint() {
        els.forEach(function (e, i) {
          var on = items[i].v === value;
          e.setAttribute('aria-checked', on ? 'true' : 'false');
          e.classList.toggle('is-sel', on);
        });
      }
      function choose(i) {
        value = items[i].v;
        focusAt(i);
        paint();
        if (opts.onChange) opts.onChange(value, items[i]);
      }

      paint();
      return {
        el: group,
        get: function () { return value; },
        set: function (v) { value = v; paint(); },
        mark: function (map) {
          els.forEach(function (e, i) {
            e.classList.remove('is-ok', 'is-no');
            var m = map && map[items[i].v];
            if (m) e.classList.add('is-' + m);
          });
        },
        showWhy: function (which) {
          items.forEach(function (it) {
            var on = which === 'all' || it.v === which;
            it._why.hidden = !(on && it.why);
            if (on && it.why) it._why.innerHTML = '<b>' + (it.ok ? 'Right' : 'Not this one') + ' — </b>' + U.esc(it.why);
          });
        },
        hideWhy: function () { items.forEach(function (it) { it._why.hidden = true; }); },
        reset: function () {
          value = null; paint();
          els.forEach(function (e) { e.classList.remove('is-ok', 'is-no'); });
          items.forEach(function (it) { it._why.hidden = true; });
        }
      };
    },

    /* --------------------------------------------------------
       ruleGate — the learner completes the rule before the chart
       and the activity appear. No grammar rule is handed over
       already finished.
       -------------------------------------------------------- */
    ruleGate: function (gate, host, onPass) {
      var boxG = U.el('div', 'rulegate');
      var done = false;
      boxG.innerHTML = '<div class="rg-head">' + EAFM.art.icon('bulb', 17) +
        '<b>' + U.esc(gate.title || 'Work out the rule first') + '</b></div>' +
        (gate.lead ? '<p class="rg-lead">' + gate.lead + '</p>' : '');
      if (gate.visual) boxG.appendChild(EAFM.renderVisual(gate.visual));

      var holder = U.el('div', 'rg-body');
      var picks = {}, ids = [];
      holder.innerHTML = String(gate.text).replace(/\[\[(\w+)\]\]/g, function (m, k) {
        ids.push(k);
        return '<span class="rg-slot" data-rg="' + k + '"></span>';
      });
      ids.forEach(function (k) {
        var bank = (gate.banks && gate.banks[k]) || gate.bank || [];
        var p = EAFM.ui.pick({
          options: bank.map(function (x) { return { v: x, label: x }; }),
          placeholder: '—',
          inline: true,
          label: 'blank ' + k
        });
        picks[k] = p;
        var slot = holder.querySelector('.rg-slot[data-rg="' + k + '"]');
        slot.appendChild(p.el);
      });
      boxG.appendChild(holder);

      var fb = U.el('div', 'rg-fb');
      fb.hidden = true;
      boxG.appendChild(fb);

      var row = U.el('div', 'btn-row');
      var bChk = U.el('button', 'btn btn-primary btn-sm', EAFM.art.icon('check', 15) + (gate.checkLabel || 'Check the rule'));
      bChk.type = 'button';
      var bShow = U.el('button', 'btn btn-sm', EAFM.art.icon('eye', 15) + 'Show me the rule');
      bShow.type = 'button';
      bShow.disabled = true;
      row.appendChild(bChk);
      row.appendChild(bShow);
      boxG.appendChild(row);

      function answersFor(k) {
        var a = gate.answers[k];
        return Array.isArray(a) ? a : [a];
      }
      function pass(shown) {
        if (done) return;
        done = true;
        boxG.classList.add('is-done');
        ids.forEach(function (k) { picks[k].disable(true); });
        bChk.disabled = true; bShow.disabled = true;
        fb.hidden = false;
        fb.className = 'rg-fb ' + (shown ? 'part' : 'ok');
        fb.innerHTML = shown
          ? 'Shown — read it once more, then carry on.'
          : '<b>That is the rule.</b> ' + (gate.after || 'The chart and the activity are below.');
        onPass(shown);
      }
      bChk.onclick = function () {
        var wrong = 0;
        ids.forEach(function (k) {
          var ok = U.accepts(picks[k].get(), answersFor(k));
          picks[k].mark(picks[k].get() === null ? null : (ok ? 'ok' : 'no'));
          if (!ok) wrong++;
        });
        bShow.disabled = false;
        if (!wrong) { pass(false); return; }
        fb.hidden = false;
        fb.className = 'rg-fb no';
        fb.textContent = wrong + ' of ' + ids.length + ' not right yet. Change the red ones and check again.';
      };
      bShow.onclick = function () {
        ids.forEach(function (k) { picks[k].set(answersFor(k)[0]); picks[k].mark('ok'); });
        pass(true);
      };

      host.appendChild(boxG);
      return {
        el: boxG,
        force: function () { ids.forEach(function (k) { picks[k].set(answersFor(k)[0]); picks[k].mark('ok'); }); pass(true); },
        passed: function () { return done; }
      };
    },

    /* --------------------------------------------------------
       coach — scaffolding for genuinely open-ended work:
       a worked example, a checklist (auto where it can be
       machine-checked, self where it cannot), and a full-context
       prompt the learner can paste into any chatbot.
       -------------------------------------------------------- */
    coach: function (cfg, host, api, getText) {
      var boxC = U.el('div', 'coach');
      boxC.innerHTML = '<div class="coach-head">' + EAFM.art.icon('shield', 16) +
        '<b>' + U.esc(cfg.title || 'Check your own work') + '</b></div>';

      if (cfg.example) {
        var exWrap = U.el('div', 'coach-ex');
        var exBtn = U.el('button', 'btn btn-sm', EAFM.art.icon('eye', 15) + (cfg.exampleLabel || 'Show a worked example'));
        exBtn.type = 'button';
        var exBox = U.el('div', 'model-box');
        exBox.hidden = true;
        exBox.innerHTML = Array.isArray(cfg.example)
          ? cfg.example.map(function (x) { return '<p>' + U.esc(x) + '</p>'; }).join('')
          : '<p>' + U.esc(cfg.example).replace(/\n/g, '<br>') + '</p>';
        if (cfg.exampleNote) exBox.appendChild(U.el('div', 'wc', cfg.exampleNote));
        exBtn.onclick = function () { exBox.hidden = !exBox.hidden; };
        exWrap.appendChild(exBtn); exWrap.appendChild(exBox);
        boxC.appendChild(exWrap);
      }

      var list = U.el('div', 'coach-list');
      var rows = [];
      (cfg.criteria || []).forEach(function (c, i) {
        var auto = !!(c.auto || c.verify);
        var r = U.el('div', 'coach-item');
        var tick = U.el('button', 'coach-tick');
        tick.type = 'button';
        tick.setAttribute('role', 'checkbox');
        tick.setAttribute('aria-checked', 'false');
        tick.innerHTML = '<span></span>';
        var txt = U.el('div', 'coach-txt');
        txt.innerHTML = '<span class="coach-kind ' + (auto ? 'is-auto' : 'is-self') + '">' +
          (auto ? 'checked for you' : 'you decide') + '</span>' + U.esc(c.t);
        var msg = U.el('div', 'coach-msg');
        msg.hidden = true;
        r.appendChild(tick); r.appendChild(txt); r.appendChild(msg);
        if (auto) {
          tick.disabled = true;
          tick.title = 'The page checks this one for you.';
        } else {
          tick.onclick = function () {
            var on = tick.getAttribute('aria-checked') === 'true';
            tick.setAttribute('aria-checked', on ? 'false' : 'true');
            r.classList.toggle('is-on', !on);
            save();
          };
          tick.addEventListener('keydown', function (ev) {
            if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); tick.click(); }
          });
        }
        list.appendChild(r);
        rows.push({ c: c, auto: auto, tick: tick, row: r, msg: msg });
      });
      boxC.appendChild(list);

      function save() {
        var st = api.rec.coach = api.rec.coach || {};
        st.self = rows.map(function (r) { return r.auto ? null : r.tick.getAttribute('aria-checked') === 'true'; });
        EAFM.progress.save();
      }

      var btnRow = U.el('div', 'btn-row');
      var bRun = U.el('button', 'btn btn-sm btn-accent', EAFM.art.icon('check', 15) + 'Check against the checklist');
      bRun.type = 'button';
      bRun.onclick = function () {
        var text = getText() || '';
        var good = 0, autoN = 0;
        rows.forEach(function (r) {
          if (!r.auto) return;
          autoN++;
          var res = EAFM.autoCheck(r.c, text) || { ok: false, msg: '' };
          r.tick.setAttribute('aria-checked', res.ok ? 'true' : 'false');
          r.row.classList.toggle('is-on', !!res.ok);
          r.row.classList.toggle('is-off', !res.ok);
          r.msg.hidden = !res.msg;
          r.msg.textContent = res.msg || '';
          if (res.ok) good++;
        });
        if (!autoN) { EAFM.toast('Tick the boxes yourself on this one.'); return; }
        EAFM.toast(good + ' of ' + autoN + ' automatic checks passed.');
      };
      btnRow.appendChild(bRun);

      if (cfg.ai !== false) {
        var bAI = U.el('button', 'btn btn-sm', EAFM.art.icon('bulb', 15) + 'Get feedback from a chatbot');
        bAI.type = 'button';
        bAI.title = 'Builds a ready-made prompt. Nothing is sent from this page — you copy it and paste it yourself.';
        bAI.onclick = function () { openPrompt(); };
        btnRow.appendChild(bAI);
      }
      boxC.appendChild(btnRow);

      function openPrompt() {
        var text = getText() || '';
        var prompt = EAFM.promptFor(api, cfg, text);
        var node = U.el('div');
        node.innerHTML =
          '<p class="coach-lead">This prompt already contains the task, the lesson objective, the reading or recording it refers to, the checklist and your own writing — a chatbot cannot mark it fairly without all of that. Copy it, paste it into any chatbot, and read the feedback against the checklist above.</p>' +
          '<p class="coach-warn">' + EAFM.art.icon('shield', 15) + ' Pasting this sends your writing to a service outside this course. Nothing leaves this page by itself.</p>';
        var ta = U.el('textarea', 'ta coach-prompt');
        ta.value = prompt;
        ta.rows = 16;
        ta.setAttribute('readonly', 'readonly');
        ta.setAttribute('aria-label', 'The prompt to copy');
        node.appendChild(ta);
        var links = U.el('div', 'btn-row');
        [['ChatGPT', 'https://chat.openai.com/'], ['Claude', 'https://claude.ai/new'], ['Gemini', 'https://gemini.google.com/app']]
          .forEach(function (p) {
            var a = U.el('a', 'btn btn-sm', p[0] + ' ↗');
            a.href = p[1];
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            links.appendChild(a);
          });
        node.appendChild(U.el('div', 'wc', 'Open a chatbot in a new tab, then paste:'));
        node.appendChild(links);

        if (U.words(text) < 3) {
          var warn = U.el('div', 'verdict show part', 'You have not written much yet. Write your answer first — the prompt rebuilds itself each time you open this.');
          node.insertBefore(warn, ta);
        }

        EAFM.modal({
          title: 'Ask a chatbot to mark this',
          node: node,
          actions: [
            { label: EAFM.art.icon('check', 15) + 'Copy the prompt', cls: 'btn-primary', keep: true, onclick: function () { EAFM.copyText(prompt); ta.select(); } },
            { label: 'Close' }
          ]
        });
      }

      /* restore self-ticks */
      var st = api.rec.coach;
      if (st && Array.isArray(st.self)) {
        st.self.forEach(function (v, i) {
          if (v && rows[i] && !rows[i].auto) {
            rows[i].tick.setAttribute('aria-checked', 'true');
            rows[i].row.classList.add('is-on');
          }
        });
      }

      host.appendChild(boxC);
      return {
        el: boxC,
        run: function () { bRun.click(); },
        /** how many of the machine-checkable criteria pass right now */
        score: function () {
          var text = getText() || '', good = 0, total = 0;
          rows.forEach(function (r) {
            if (!r.auto) return;
            total++;
            var res = EAFM.autoCheck(r.c, text);
            if (res && res.ok) good++;
          });
          return { ok: good, total: total };
        }
      };
    },

    /* --------------------------------------------------------
       convo — a conversation the learner completes and can hear.
       Turns already written are fixed; the learner builds the
       rest, and every line must follow the one before it.
       Playback is the browser's own voice: a learner's sentence
       is new, so no recording of it can exist.
       -------------------------------------------------------- */
    convoPlayer: function (turns, cast) {
      var box = U.el('div', 'btn-row convo-play');
      var bAll = U.el('button', 'btn btn-sm', EAFM.art.icon('sound', 15) + 'Play it back');
      bAll.type = 'button';
      /* Honest tooltip: say which half is recorded rather than
         claiming the whole thing is, or that none of it is. */
      var anyRec = turns.some(function (t) {
        return t.given && EAFM.turnRecorded(cast[t.who], t.text());
      });
      bAll.title = anyRec
        ? 'The written lines play from their recordings; your own lines are read in your device’s voice.'
        : DEVICE_VOICE_NOTE;
      var bStop = U.el('button', 'btn btn-sm btn-ghost', EAFM.art.icon('x', 15) + 'Stop');
      bStop.type = 'button';
      var hint = U.el('span', 'wc convo-left');
      var playing = false;
      function speakAt(i) {
        if (!playing || i >= turns.length) { playing = false; mark(-1); return; }
        var t = turns[i], txt = (t.text() || '').trim();
        if (!txt) { speakAt(i + 1); return; }
        mark(i);
        EAFM.sayTurn(cast[t.who], txt, {
          onend: function () { setTimeout(function () { speakAt(i + 1); }, 320); }
        });
      }
      function mark(i) {
        turns.forEach(function (t, j) { if (t.row) t.row.classList.toggle('is-speaking', j === i); });
      }
      /* The count lives on the button rather than in a toast AFTER
         you press it: a learner should be able to see that the
         playback is still incomplete without having to trigger it.

         "Has text" is NOT the test. A half-built turn still returns
         the words printed around its gaps — "Danny ?" — so counting
         non-empty strings reported every line filled before a single
         chip had been placed. A turn that knows whether its gaps are
         filled is asked; one that has no gaps falls back to its text. */
      function done(t) {
        return t.filled ? t.filled() : !!(t.text() || '').trim();
      }
      function sync() {
        var n = turns.filter(function (t) { return !done(t); }).length;
        hint.textContent = n
          ? (n === 1 ? '1 line still to build' : n + ' lines still to build')
          : 'every line is built — hear it through';
        bAll.disabled = turns.every(function (t) { return !(t.text() || '').trim(); });
      }
      box.sync = sync;
      bAll.onclick = function () { playing = true; speakAt(0); };
      bStop.onclick = function () { playing = false; EAFM.stopSpeak(); mark(-1); };
      box.appendChild(bAll);
      box.appendChild(bStop);
      box.appendChild(hint);
      sync();
      return box;
    },

    /* --------------------------------------------------------
       jump — go straight to any section of the unit.
       Built on pick(), because the labels are long and a native
       <select> would truncate them.
       -------------------------------------------------------- */
    jump: function (currentId, small) {
      var rows = EAFM.unitMaps[EAFM.unitOf(currentId)] || EAFM.unitMaps.unit1;
      if (!rows || !rows.length) return null;
      var opts = rows.map(function (r, i) {
        var sc = EAFM.progress.all[r.id];
        var done = 0;
        if (sc) for (var k in sc.cards) if (sc.cards.hasOwnProperty(k) && sc.cards[k].done) done++;
        var tag = r.id === currentId ? ' — you are here'
          : (r.n && done >= r.n ? ' ✓ done' : (done ? ' · ' + done + '/' + r.n : ''));
        return {
          v: r.file,
          group: r.lesson,
          /* numbered, so the list reads as a sequence and a learner can
             see where in the unit a section sits before opening it */
          label: (i + 1) + '. ' + r.label + tag,
          sub: r.page ? 'book p.' + r.page : '',
          disabled: r.id === currentId
        };
      });
      var p = EAFM.ui.pick({
        options: opts,
        placeholder: 'Jump to…',
        label: 'Jump to a section of Unit 1',
        cls: 'pick-jump' + (small ? ' pick-sm' : ''),
        onChange: function (v) { if (v) w.location.href = v + '.html'; }
      });
      return p.el;
    },

    recorder: function () {
      var box = U.el('div', 'btn-row');
      if (!(navigator.mediaDevices && w.MediaRecorder)) return box;
      var btn = U.el('button', 'btn btn-sm', EAFM.art.icon('mic', 15) + 'Record yourself');
      btn.type = 'button';
      var audio = U.el('audio');
      audio.controls = true; audio.style.display = 'none'; audio.style.maxWidth = '240px';
      var rec = null, chunks = [];
      btn.onclick = function () {
        if (rec && rec.state === 'recording') { rec.stop(); return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          chunks = []; rec = new w.MediaRecorder(stream);
          rec.ondataavailable = function (e) { chunks.push(e.data); };
          rec.onstop = function () {
            audio.src = URL.createObjectURL(new Blob(chunks));
            audio.style.display = 'inline-block';
            btn.innerHTML = EAFM.art.icon('mic', 15) + 'Record again';
            stream.getTracks().forEach(function (t) { t.stop(); });
          };
          rec.start();
          btn.innerHTML = EAFM.art.icon('x', 15) + 'Stop recording';
        }).catch(function () { EAFM.toast('Microphone not available — this step is optional.'); });
      };
      box.appendChild(btn); box.appendChild(audio);
      return box;
    }
  };

  var DEVICE_VOICE_NOTE = 'Read in your device’s own voice — the lines you build are new, so no recording of them can exist.';
  EAFM.deviceVoiceNote = DEVICE_VOICE_NOTE;

  /* fire an attempt event so "Show me" unlocks */
  EAFM.attempted = function (bodyEl) {
    var card = bodyEl.closest ? bodyEl.closest('.card') : null;
    if (card) card.dispatchEvent(new w.CustomEvent('csb1:attempt'));
  };

  applyTheme();
})(window, document);
