/* eam.js - the course runtime. THE ONLY BACKEND WIRING A SCREEN EVER CARRIES.
 *
 * A screen is three script tags and two attributes on <body>. Everything else on the page is
 * AUTHORED CONTENT in its own data file:
 *
 *     <body data-la-course="eam-web" data-la-root="../../">
 *     <span id="la-bar" class="la-float"></span>
 *     <main id="app"></main>
 *     <script src="../../assets/la/account.js"></script>   <- identity and events, site-wide
 *     <script src="../assets/js/eam.js"></script>          <- this file: render, mark, record
 *     <script src="../data/u01/s02-vocabulary.js"></script><- the authored screen
 *
 * That is the whole contract. Writing a new course means writing data files; it never means
 * touching the plumbing, and the plumbing lives in one place so it can be changed once.
 *
 * IT RUNS IN THE BROWSER, WITH OR WITHOUT A SERVER. The site's standing rule is that a course page
 * works from a folder with no connection, and this keeps it:
 *
 *   * marking is LOCAL - the key travels with the page, so a learner working offline is marked
 *     immediately and correctly
 *   * progress and unfinished work go to localStorage FIRST, always
 *   * attempts are queued and sent later, through the shared layer, only if somebody is signed in
 *   * nothing here fetches at load, and every entry point is wrapped: if account.js is missing or
 *     throws, the lesson still teaches
 *
 * EIGHT SCORING KINDS, NOT FORTY-EIGHT TYPES. Every exercise this course can set reduces to one of
 * eight ways of being marked - choice, set, pairs, ordered, text, numeric, rubric, unmarked - which
 * is what lets a new book add a presentation without adding a marker. A type names its kind; the
 * kind does the marking.
 */
(function (root, doc) {
  'use strict';

  var API = (root.LA && root.LA.api) || 'https://api.learnactively.com';
  var COURSE = 'eam-web';
  var PROG = 'la.prog.';      // write-through cache of progress
  var WORK = 'la.work.';      // the learner's unsubmitted answers - never evicted
  var SCHEMA = 1;

  // ---------------------------------------------------------------- storage, defensively
  function get(k) { try { return root.localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { root.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function getJSON(k, d) { try { return JSON.parse(get(k) || '') || d; } catch (e) { return d; } }
  function setJSON(k, v) { return set(k, JSON.stringify(v)); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function el(tag, cls, text) {
    var e = doc.createElement(tag);
    if (cls) { e.className = cls; }
    if (text != null) { e.textContent = text; }
    return e;
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFKC')
      .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
      .replace(/[^\w\s'-]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  // ------------------------------------------------------------------- the eight markers
  //
  // Each takes the learner's response and the item's key, and returns
  //   {verdict, earned, possible, detail}
  // - the same four things the server stores. The browser and the server therefore agree on the
  // SHAPE of a mark even though the server re-marks anything consequential itself.
  var MARK = {
    choice: function (resp, key, item) {
      var ok = resp.picked != null && String(resp.picked) === String(key.answer);
      return { verdict: ok ? 'correct' : 'incorrect', earned: ok ? 1 : 0, possible: 1,
               detail: { picked: resp.picked, expected: key.answer } };
    },
    set: function (resp, key, item) {
      var want = (key.answer || []).map(String).sort();
      var got = (resp.picked || []).map(String).sort();
      var hit = got.filter(function (x) { return want.indexOf(x) >= 0; }).length;
      var wrong = got.length - hit;
      var earned = Math.max(0, hit - wrong);
      return { verdict: earned === want.length ? 'correct' : (earned > 0 ? 'partial' : 'incorrect'),
               earned: earned, possible: want.length, detail: { hit: hit, wrong: wrong } };
    },
    // MARKED PER ITEM, like every other kind. The first version treated `pairs` as a card-level
    // mark and iterated `key.answer` as a map - but by the time a marker runs, each prompt carries
    // its OWN expected letter, so iterating a one-letter string walked its characters instead.
    // Every pair came back wrong, including the ones that were right, and the feedback cheerfully
    // printed the answer the learner had just given.
    pairs: function (resp, key, item) {
      var given = (resp.pairs || {})[item.id];
      var ok = given != null && String(given) === String(key.answer);
      return { verdict: ok ? 'correct' : 'incorrect', earned: ok ? 1 : 0, possible: 1,
               detail: { given: given, expected: key.answer } };
    },
    ordered: function (resp, key, item) {
      // The learner numbers each line; the key is the correct sequence of item ids.
      var want = (key.answer || []).map(String).indexOf(String(item.id));
      var got = (resp.order || []).map(String).indexOf(String(item.id));
      var ok = want >= 0 && want === got;
      return { verdict: ok ? 'correct' : 'incorrect', earned: ok ? 1 : 0, possible: 1,
               detail: { placed: got + 1, expected: want + 1 } };
    },
    text: function (resp, key, item) {
      // ACCEPTS A SET, not a string. The params carry the synonyms the book allows, so widening
      // what counts as right is DATA - a new book never needs a new marker for it.
      var accept = key.accept || [key.answer];
      var got = norm(resp.text);
      var ok = accept.some(function (a) { return norm(a) === got; });
      return { verdict: ok ? 'correct' : 'incorrect', earned: ok ? 1 : 0, possible: 1,
               detail: { given: resp.text, accepted: accept } };
    },
    numeric: function (resp, key, item) {
      var tol = key.tolerance == null ? 0 : Number(key.tolerance);
      var ok = Math.abs(Number(resp.value) - Number(key.answer)) <= tol;
      return { verdict: ok ? 'correct' : 'incorrect', earned: ok ? 1 : 0, possible: 1,
               detail: { given: resp.value, tolerance: tol } };
    },
    rubric: function (resp, key, item) {
      // NOT MARKABLE HERE, and saying so is the honest outcome. A writing task waits for a human
      // or for the tutor; it is recorded as work done, with no score invented for it.
      return { verdict: 'pending', earned: null, possible: (key.criteria || []).length || null,
               detail: { words: String(resp.text || '').split(/\s+/).filter(Boolean).length } };
    },
    unmarked: function () {
      return { verdict: 'unmarked', earned: null, possible: null, detail: {} };
    }
  };

  // ------------------------------------------------------------------ the eight renderers
  function mkChoice(card, item, state) {
    var box = el('div', 'opts');
    (item.options || []).forEach(function (o) {
      var b = el('button', 'opt');
      b.type = 'button';
      b.textContent = o.letter ? (o.letter + '. ' + o.text) : o.text;
      b.setAttribute('aria-pressed', 'false');
      b.onclick = function () {
        box.querySelectorAll('.opt').forEach(function (x) {
          x.setAttribute('aria-pressed', 'false'); x.classList.remove('sel');
        });
        b.setAttribute('aria-pressed', 'true'); b.classList.add('sel');
        state.resp = { picked: o.letter || o.text };
        state.touch();
      };
      if (state.resp && String(state.resp.picked) === String(o.letter || o.text)) {
        b.setAttribute('aria-pressed', 'true'); b.classList.add('sel');
      }
      box.appendChild(b);
    });
    return box;
  }

  function mkText(card, item, state) {
    var wrap = el('div', 'fill');
    var inp = doc.createElement('input');
    inp.type = 'text';
    inp.className = 'ans';
    inp.setAttribute('aria-label', item.text || 'your answer');
    inp.value = (state.resp && state.resp.text) || '';
    inp.oninput = function () { state.resp = { text: inp.value }; state.touch(); };
    wrap.appendChild(inp);
    return wrap;
  }

  function mkPairs(card, item, state) {
    var wrap = el('div', 'pair');
    var sel = doc.createElement('select');
    sel.className = 'ans';
    sel.setAttribute('aria-label', item.text);
    sel.appendChild(new Option('—', ''));
    (card.bank || []).forEach(function (o) {
      sel.appendChild(new Option(o.letter + ') ' + o.text, o.letter));
    });
    state.resp = state.resp || { pairs: {} };
    sel.value = (state.resp.pairs && state.resp.pairs[item.id]) || '';
    sel.onchange = function () {
      state.resp.pairs = state.resp.pairs || {};
      state.resp.pairs[item.id] = sel.value;
      state.touch();
    };
    wrap.appendChild(sel);
    return wrap;
  }

  function mkSet(card, item, state) {
    var box = el('div', 'opts');
    state.resp = state.resp || { picked: [] };
    (item.options || card.options || []).forEach(function (o) {
      var id = o.letter || o.text;
      var b = el('button', 'opt');
      b.type = 'button';
      b.textContent = o.text;
      var on = state.resp.picked.indexOf(id) >= 0;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) { b.classList.add('sel'); }
      b.onclick = function () {
        var i = state.resp.picked.indexOf(id);
        if (i >= 0) { state.resp.picked.splice(i, 1); b.classList.remove('sel'); b.setAttribute('aria-pressed', 'false'); }
        else { state.resp.picked.push(id); b.classList.add('sel'); b.setAttribute('aria-pressed', 'true'); }
        state.touch();
      };
      box.appendChild(b);
    });
    return box;
  }

  function mkOrdered(card, item, state) {
    var wrap = el('div', 'pair');
    var sel = doc.createElement('select');
    sel.className = 'ans';
    sel.setAttribute('aria-label', 'position of: ' + item.text);
    sel.appendChild(new Option('—', ''));
    for (var i = 1; i <= (card.items || []).length; i += 1) { sel.appendChild(new Option(i, i)); }
    state.resp = state.resp || { order: [] };
    sel.onchange = function () {
      var pos = parseInt(sel.value, 10);
      if (pos) { state.resp.order[pos - 1] = item.id; }
      state.touch();
    };
    wrap.appendChild(sel);
    return wrap;
  }

  function mkRubric(card, item, state) {
    var wrap = el('div', 'fill');
    var ta = doc.createElement('textarea');
    ta.className = 'ans long';
    ta.rows = 6;
    ta.setAttribute('aria-label', item.text || card.title);
    ta.value = (state.resp && state.resp.text) || '';
    ta.oninput = function () { state.resp = { text: ta.value }; state.touch(); };
    wrap.appendChild(ta);
    var n = el('p', 'hint', '');
    function count() {
      n.textContent = ta.value.split(/\s+/).filter(Boolean).length + ' words';
    }
    ta.addEventListener('input', count); count();
    wrap.appendChild(n);
    return wrap;
  }

  var RENDER = { choice: mkChoice, set: mkSet, pairs: mkPairs, ordered: mkOrdered,
                 text: mkText, numeric: mkText, rubric: mkRubric,
                 unmarked: function () { return el('div', ''); } };

  // -------------------------------------------------------------------------- the page
  var EAM = { version: SCHEMA, kinds: Object.keys(MARK) };

  EAM.page = function (pageId, spec) {
    try { render(pageId, spec); } catch (e) {
      // A SCREEN THAT CANNOT SCRIPT MUST STILL READ. Whatever failed, the book text is shown.
      var host = doc.getElementById('app');
      if (host) {
        host.appendChild(el('h1', '', spec && spec.title || 'Lesson'));
        (spec && spec.cards || []).forEach(function (c) {
          host.appendChild(el('h2', '', c.title || ''));
          (c.items || []).forEach(function (i) { host.appendChild(el('p', '', i.text || '')); });
        });
      }
      if (root.console) { root.console.error('eam: falling back to plain text', e); }
    }
  };

  function render(pageId, spec) {
    var host = doc.getElementById('app');
    if (!host) { return; }
    var unit = spec.unit, screen = spec.screen;
    var workKey = WORK + COURSE + '.' + pageId;
    var saved = getJSON(workKey, {});

    host.appendChild(crumb(spec));
    var h = el('h1', '', spec.title);
    host.appendChild(h);
    if (spec.objective) { host.appendChild(el('p', 'lede', spec.objective)); }
    if (spec.objective_ar) {
      var ar = el('p', 'ar', spec.objective_ar); ar.lang = 'ar'; ar.dir = 'rtl';
      host.appendChild(ar);
    }
    if (spec.video) { host.appendChild(videoBlock(spec)); }

    var states = [];
    (spec.cards || []).forEach(function (card) {
      host.appendChild(cardBlock(card, saved, states, workKey, pageId, spec));
    });
    host.appendChild(nav(spec));

    // Opening a screen is a discrete fact worth keeping; progress is not written until work is.
    say('lesson_open', { course_id: COURSE, lesson_id: pageId,
                         payload: { unit: unit, screen: screen, video: spec.video || null } });
  }

  function crumb(spec) {
    var c = el('p', 'crumb', '');
    c.appendChild(el('span', '', 'Unit ' + spec.unit));
    c.appendChild(el('span', 'sep', ' · '));
    c.appendChild(el('span', '', spec.slot || ''));
    if (spec.book && spec.book.ref) {
      c.appendChild(el('span', 'sep', ' · '));
      c.appendChild(el('span', 'ref', spec.book.ref));
    }
    return c;
  }

  function videoBlock(spec) {
    // THE ACTED LESSON, COLLAPSED. The page is the course; the 3D lesson is the alternative way
    // to meet the same material, and it costs nothing until somebody asks for it.
    var d = doc.createElement('details');
    d.className = 'video';
    var s = doc.createElement('summary');
    s.textContent = 'Watch this part acted out';
    d.appendChild(s);
    var mounted = false;
    d.addEventListener('toggle', function () {
      if (!d.open || mounted) { return; }
      mounted = true;
      var holder = el('div', 'player');
      holder.appendChild(el('p', 'hint', 'Loading the acted lesson…'));
      d.appendChild(holder);
      var base = (root.LA && root.LA.root && root.LA.root()) || '/';
      // THE PLAYER IS FETCHED ON THE FIRST CLICK, NEVER AT LOAD. It is a large file and most
      // learners will work through the page without ever opening it - and the site's rule is that
      // a screen fetches nothing when it opens. Same arrangement the site assistant uses.
      load(base + 'player/animated_player.js', function (ok) {
        holder.textContent = '';
        if (!ok) {
          holder.appendChild(el('p', 'hint',
            'The acted lesson needs a connection. Everything else on this page works without one.'));
          return;
        }
        var tag = doc.createElement('animated-lesson');
        tag.setAttribute('base', base);
        tag.setAttribute('course', spec.video_course || 'eam-b1');
        tag.setAttribute('video', spec.video);
        holder.appendChild(tag);
      });
      say('card_open', { course_id: COURSE, lesson_id: spec.id,
                         payload: { opened: 'video', video: spec.video } });
    });
    return d;
  }

  function cardBlock(card, saved, states, workKey, pageId, spec) {
    var sec = el('section', 'card');
    sec.appendChild(el('h2', '', card.title || ''));
    if (card.instruction) { sec.appendChild(el('p', 'instr', card.instruction)); }
    if (card.instruction_ar) {
      var a = el('p', 'ar', card.instruction_ar); a.lang = 'ar'; a.dir = 'rtl';
      sec.appendChild(a);
    }

    var kind = card.kind || 'unmarked';
    var list = el('ol', 'items');
    var itemStates = [];

    (card.items || []).forEach(function (item) {
      var li = el('li', 'item');
      if (item.example) { li.className += ' example'; }
      li.appendChild(el('p', 'q', item.text || ''));
      var st = {
        item: item, kind: kind,
        resp: (saved[card.id] && saved[card.id][item.id]) || null,
        touch: function () {
          saved[card.id] = saved[card.id] || {};
          saved[card.id][item.id] = st.resp;
          setJSON(workKey, saved);           // the draft survives a reload, always, offline
        }
      };
      if (!item.example) {
        li.appendChild((RENDER[kind] || RENDER.unmarked)(card, item, st));
        li.appendChild(el('p', 'why'));
        itemStates.push(st);
        st.li = li;
      } else {
        li.appendChild(el('p', 'why', item.answer ? ('Example: ' + item.answer) : ''));
      }
      list.appendChild(li);
    });
    sec.appendChild(list);

    if (kind !== 'unmarked' && itemStates.length) {
      var bar = el('p', 'actions');
      var check = el('button', 'primary', card.kind === 'rubric' ? 'Save my work' : 'Check my answers');
      check.type = 'button';
      var score = el('span', 'score', '');
      check.onclick = function () { submit(card, itemStates, score, pageId, spec); };
      bar.appendChild(check); bar.appendChild(score);
      sec.appendChild(bar);
    }
    states.push({ card: card, items: itemStates });
    return sec;
  }

  function submit(card, itemStates, scoreEl, pageId, spec) {
    var earned = 0, possible = 0, items = [], pending = 0;
    itemStates.forEach(function (st) {
      var key = (st.item.key) || {};
      var marker = MARK[st.kind] || MARK.unmarked;
      var m = marker(st.resp || {}, key, st.item);
      if (m.earned != null) { earned += m.earned; possible += m.possible || 0; }
      if (m.verdict === 'pending') { pending += 1; }
      paint(st, m, key);
      items.push({
        item_id: st.item.item_id || st.item.id,
        response: st.resp || {},
        response_schema: st.kind + '/1',
        verdict: m.verdict, earned: m.earned, possible: m.possible, detail: m.detail
      });
    });
    scoreEl.textContent = pending
      ? 'Saved — ' + pending + ' to be marked'
      : (possible ? earned + ' of ' + possible : 'Saved');

    var ratio = possible ? (earned / possible) : null;
    var pk = PROG + COURSE + '.' + pageId;
    var prog = getJSON(pk, { earned: 0, possible: 0, cards: {} });
    prog.cards[card.id] = { earned: earned, possible: possible, at: new Date().toISOString() };
    prog.earned = 0; prog.possible = 0;
    for (var c in prog.cards) {
      if (Object.prototype.hasOwnProperty.call(prog.cards, c)) {
        prog.earned += prog.cards[c].earned || 0;
        prog.possible += prog.cards[c].possible || 0;
      }
    }
    setJSON(pk, prog);

    // ONE PLACE WHERE WORK LEAVES THE PAGE. Queued locally first, sent only if signed in, and the
    // id is minted HERE so a retry cannot become a second attempt.
    say('answer', {
      course_id: COURSE, lesson_id: pageId,
      payload: { card_id: card.id, kind: card.kind, earned: earned, possible: possible,
                 pending: pending, client_event_id: uuid(), items: items,
                 unit: spec.unit, screen: spec.screen }
    });
    if (possible && earned === possible) {
      say('lesson_milestone', { course_id: COURSE, lesson_id: pageId,
                                payload: { card_id: card.id, ratio: 1 } });
    }
  }

  function paint(st, m, key) {
    var why = st.li && st.li.querySelector('.why');
    st.li.classList.remove('ok', 'no', 'part');
    if (m.verdict === 'correct') { st.li.classList.add('ok'); }
    else if (m.verdict === 'partial') { st.li.classList.add('part'); }
    else if (m.verdict === 'incorrect') { st.li.classList.add('no'); }
    if (!why) { return; }
    // THE FEEDBACK IS THE TEACHING. A wrong answer says why it is wrong, in the book's own terms,
    // and falls back to naming the right answer rather than saying nothing.
    var picked = st.resp && (st.resp.picked || st.resp.text);
    var opt = (st.item.options || []).filter(function (o) {
      return String(o.letter || o.text) === String(picked);
    })[0];
    if (m.verdict === 'pending') { why.textContent = 'Saved. This one is marked by a person.'; }
    else if (opt && opt.why) { why.textContent = opt.why; }
    else if (m.verdict === 'correct') { why.textContent = key.why || 'Correct.'; }
    else if (key.answer != null) {
      why.textContent = (key.why ? key.why + ' ' : '')
        + 'The answer is: ' + (Array.isArray(key.answer) ? key.answer.join(', ') : key.answer);
    } else { why.textContent = ''; }
  }

  function nav(spec) {
    var p = el('p', 'nav');
    if (spec.prev) {
      var a = el('a', 'prev', '← ' + (spec.prevLabel || 'Back'));
      a.href = spec.prev + '.html'; p.appendChild(a);
    }
    if (spec.next) {
      var b = el('a', 'next', (spec.nextLabel || 'Next') + ' →');
      b.href = spec.next + '.html'; p.appendChild(b);
    }
    return p;
  }

  var loaded = {};
  function load(src, done) {
    if (loaded[src]) { done(loaded[src] === 'ok'); return; }
    var s = doc.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = function () { loaded[src] = 'ok'; done(true); };
    s.onerror = function () { loaded[src] = 'bad'; done(false); };
    doc.head.appendChild(s);
  }

  function uuid() {
    try { return root.crypto.randomUUID(); } catch (e) {
      return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
    }
  }

  /* THE ONE DOOR TO THE BACK END. Nothing else in this file talks to the network, and if the
   * shared layer is absent the page simply keeps its work locally and carries on teaching. */
  function say(kind, data) {
    try { if (root.LA && root.LA.on) { root.LA.on(kind, data); } } catch (e) { /* offline is fine */ }
  }

  EAM.say = say;
  root.EAM = EAM;
}(window, document));
