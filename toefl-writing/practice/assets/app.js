/* TOEFL Writing Practice - offline interaction engine.
 *
 * No network, no framework, no fetch (file:// forbids it). Each page
 * declares window.ITEM before loading this script; the index declares
 * window.CATALOGUE instead.
 *
 * Checking is deliberately tiered, and the UI says which tier it is in:
 *   - word tiles and the mechanical gates are marked by the machine;
 *   - every preview and follow-up question reveals an authored key and is
 *     marked by the student;
 *   - the composition itself is not graded, because it cannot honestly be
 *     graded offline. It is compared against the band-5 model.
 */
(function () {
  'use strict';

  var NS = 'toefl-v1:';
  var INTERVAL = { miss: 1, part: 3, got: 10 };   // days until review

  /* ------------------------------------------------------- storage */
  function load(slug) {
    try { return JSON.parse(localStorage.getItem(NS + slug)) || {}; }
    catch (e) { return {}; }
  }
  function save(slug, rec) {
    rec.ts = Date.now();
    try { localStorage.setItem(NS + slug, JSON.stringify(rec)); } catch (e) {}
  }
  function allRecords() {
    var out = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k.indexOf(NS) === 0) {
          try { out[k.slice(NS.length)] = JSON.parse(localStorage.getItem(k)); }
          catch (e) {}
        }
      }
    } catch (e) {}
    return out;
  }

  /* ------------------------------------------------------- dom */
  function h(tag, attrs) {
    var e = document.createElement(tag), i, k;
    if (attrs) for (k in attrs) {
      if (k === 'html') e.innerHTML = attrs[k];
      else if (k === 'text') e.textContent = attrs[k];
      else if (k === 'on') for (var ev in attrs[k]) e.addEventListener(ev, attrs[k][ev]);
      else if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    }
    for (i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) e.appendChild(x); });
      else e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return e;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  /* ------------------------------------------------------- words
   * Identical to validate.words() in the book build, so a word count
   * shown here is the word count the book was validated against.      */
  function countWords(s) {
    var m = String(s).match(/[A-Za-z0-9’'-]+/g);
    return m ? m.length : 0;
  }
  function debounce(fn, ms) {
    var t; return function () {
      var a = arguments, self = this;
      clearTimeout(t); t = setTimeout(function () { fn.apply(self, a); }, ms);
    };
  }

  /* ------------------------------------------------------- theme */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(NS + '@theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    var btn = $('#theme');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : cur === 'light' ? '' : 'dark';
      if (next) document.documentElement.setAttribute('data-theme', next);
      else document.documentElement.removeAttribute('data-theme');
      try {
        if (next) localStorage.setItem(NS + '@theme', next);
        else localStorage.removeItem(NS + '@theme');
      } catch (e) {}
      btn.title = next ? next + ' mode' : 'follow system';
    });
  }

  /* ======================================================= question card
   * Tier B: the student answers, then the authored key appears beside
   * their answer and they mark themselves. Retry re-hides the key.     */
  function questionCard(q, keyHtml, rec, slug, cls, onChange) {
    var draft = (rec.drafts || {})[q.tag] || '';
    var mark = (rec.marks || {})[q.tag];

    var ta = h('textarea', { rows: 3, 'aria-label': 'Your answer to ' + q.tag,
      placeholder: 'Write your answer first — the key is hidden until you check.' });
    ta.value = draft;
    ta.addEventListener('input', debounce(function () {
      rec.drafts = rec.drafts || {};
      rec.drafts[q.tag] = ta.value;
      save(slug, rec);
      onChange && onChange();
    }, 350));

    var keyBox = h('div', { class: 'box key', hidden: 'hidden' },
      h('h3', { text: 'Answer key · ' + q.tag }),
      h('div', { html: keyHtml || '<p>No key.</p>' }));

    var marks = h('div', { class: 'selfmark', hidden: 'hidden' });
    marks.appendChild(h('span', { text: 'How did you do?' }));
    ['got', 'part', 'miss'].forEach(function (m) {
      var label = { got: 'Got it', part: 'Partly', miss: 'Missed it' }[m];
      var b = h('button', { class: 'quiet', type: 'button',
        'aria-pressed': mark === m ? 'true' : 'false', text: label });
      b.addEventListener('click', function () {
        rec.marks = rec.marks || {};
        rec.marks[q.tag] = m;
        rec.due = rec.due || {};
        rec.due[q.tag] = Date.now() + INTERVAL[m] * 864e5;
        save(slug, rec);
        Array.prototype.forEach.call(marks.querySelectorAll('button'), function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        onChange && onChange();
      });
      marks.appendChild(b);
    });

    var check = h('button', { type: 'button', text: 'Check answer' });
    var retry = h('button', { class: 'quiet', type: 'button', text: 'Retry' });
    function reveal() {
      keyBox.removeAttribute('hidden');
      marks.removeAttribute('hidden');
      check.disabled = true;
    }
    check.addEventListener('click', reveal);
    retry.addEventListener('click', function () {
      ta.value = '';
      rec.drafts = rec.drafts || {}; rec.drafts[q.tag] = '';
      if (rec.marks) delete rec.marks[q.tag];
      save(slug, rec);
      keyBox.setAttribute('hidden', 'hidden');
      marks.setAttribute('hidden', 'hidden');
      Array.prototype.forEach.call(marks.querySelectorAll('button'), function (x) {
        x.setAttribute('aria-pressed', 'false');
      });
      check.disabled = false;
      ta.focus();
      onChange && onChange();
    });

    var card = h('div', { class: 'box ' + cls },
      h('h3', null, h('span', { class: 'tag', text: q.tag }), q.title),
      h('div', { html: q.html }),
      ta,
      h('div', { class: 'row' }, check, retry),
      keyBox, marks);
    if (mark) reveal();
    return card;
  }

  function questionSection(title, list, item, rec, cls, onChange) {
    var wrap = h('section', null, h('h2', { text: title }));
    list.forEach(function (q) {
      wrap.appendChild(questionCard(q, item.keys[q.tag], rec, item.slug, cls, onChange));
    });
    return wrap;
  }

  /* ======================================================= payload */
  function payloadBox(item, open, label) {
    var p = item.payload, rows = [];
    ['Strategy', 'Grammar', 'Vocabulary', 'Convention'].forEach(function (k) {
      if (p[k]) rows.push(h('li', null, h('b', { text: k + ': ' }), p[k]));
    });
    var d = h('details', open ? { open: 'open' } : null,
      h('summary', { text: label || 'What this exercise was teaching' }),
      h('div', { class: 'box pay' }, h('ul', null, rows)));
    return d;
  }

  /* ======================================================= tier A: tiles */
  function renderBas(item, rec) {
    var main = $('#page');
    var placed = [];           // indices into item.chips

    main.appendChild(h('p', { class: 'eyebrow',
      text: item.task_label + ' · ' + item.function }));
    main.appendChild(h('h1', { text: item.id }));
    main.appendChild(h('p', { class: 'sub' },
      h('a', { href: item.family_slug + '.html', text: item.family_function }),
      ' · the rule, the preview and the follow-up questions are on the family page'));
    main.appendChild(h('hr', { class: 'rule' }));

    main.appendChild(h('div', { class: 'box task' },
      h('h3', { text: 'The sentence you are answering' }),
      h('p', { text: item.cue }),
      h('p', { class: 'note',
        text: 'Build the reply from the words below. Every word is used once.' })));

    var slots = h('div', { class: 'slots', id: 'slots' });
    var tiles = h('div', { class: 'tiles', id: 'tiles' });
    var built = h('p', { class: 'built', id: 'built' });
    var verdict = h('div', { class: 'verdict', id: 'verdict', hidden: 'hidden' });
    var noteBox = h('div', { class: 'box key', id: 'note', hidden: 'hidden' },
      h('h3', { text: 'Why' }), h('p', { text: item.note }));

    function paint() {
      slots.innerHTML = '';
      placed.forEach(function (ci, pos) {
        var t = h('button', { class: 'tile', type: 'button',
          text: item.chips[ci].text, title: 'Remove' });
        t.addEventListener('click', function () {
          placed.splice(pos, 1); paint();
        });
        slots.appendChild(t);
      });
      Array.prototype.forEach.call(tiles.querySelectorAll('.tile'), function (b, i) {
        b.setAttribute('aria-pressed', placed.indexOf(i) >= 0 ? 'true' : 'false');
      });
      var words = placed.map(function (ci) { return item.chips[ci].text; });
      built.textContent = words.length
        ? words.join(' ') + ' ' + item.tail
        : '';
      verdict.setAttribute('hidden', 'hidden');
    }

    item.chips.forEach(function (c, i) {
      var b = h('button', { class: 'tile', type: 'button', 'aria-pressed': 'false' },
        h('span', { class: 'kbd', text: String(i + 1) }), c.text);
      b.addEventListener('click', function () {
        if (placed.indexOf(i) >= 0) return;
        placed.push(i); paint();
      });
      tiles.appendChild(b);
    });

    function tokensPlaced() {
      var toks = [], map = [];
      placed.forEach(function (ci, pos) {
        item.chips[ci].tokens.forEach(function (t) { toks.push(t); map.push(pos); });
      });
      item.tail_tokens.forEach(function (t) { toks.push(t); map.push(-1); });
      return { toks: toks, map: map };
    }

    function check() {
      var got = tokensPlaced(), want = item.answer_tokens;
      rec.attempts = (rec.attempts || 0) + 1;
      verdict.removeAttribute('hidden');
      Array.prototype.forEach.call(slots.querySelectorAll('.tile'), function (t) {
        t.classList.remove('bad');
      });
      if (placed.length < item.chips.length) {
        verdict.className = 'verdict part';
        verdict.innerHTML = 'Not finished — ' +
          (item.chips.length - placed.length) + ' word' +
          (item.chips.length - placed.length === 1 ? '' : 's') + ' still unused.';
        save(item.slug, rec);
        return;
      }
      var same = got.toks.length === want.length &&
        got.toks.every(function (t, i) { return t === want[i]; });
      if (same) {
        verdict.className = 'verdict ok';
        verdict.innerHTML = 'Correct.';
        noteBox.removeAttribute('hidden');
        rec.solved = true; rec.done = true;
        save(item.slug, rec);
        return;
      }
      var at = 0;
      while (at < got.toks.length && at < want.length && got.toks[at] === want[at]) at++;
      var slotPos = got.map[Math.min(at, got.map.length - 1)];
      if (slotPos >= 0) {
        var el = slots.querySelectorAll('.tile')[slotPos];
        if (el) el.classList.add('bad');
      }
      verdict.className = 'verdict no';
      verdict.innerHTML = 'Not yet.';
      verdict.appendChild(h('p', { text: slotPos >= 0
        ? 'The first word out of place is in the marked tile. Everything before it is right.'
        : 'The order of the tiles is wrong before the fixed ending.' }));
      rec.solved = false;
      save(item.slug, rec);
    }

    var checkBtn = h('button', { type: 'button', text: 'Check answer' });
    var retryBtn = h('button', { class: 'quiet', type: 'button', text: 'Retry' });
    var showBtn = h('button', { class: 'ghost', type: 'button', text: 'Show answer' });
    checkBtn.addEventListener('click', check);
    retryBtn.addEventListener('click', function () {
      placed = []; paint(); noteBox.setAttribute('hidden', 'hidden');
    });
    showBtn.addEventListener('click', function () {
      verdict.removeAttribute('hidden');
      verdict.className = 'verdict part';
      verdict.innerHTML = '';
      verdict.appendChild(h('p', { text: item.answer }));
      noteBox.removeAttribute('hidden');
      rec.shown = true; save(item.slug, rec);
    });

    main.appendChild(h('div', { class: 'box' },
      h('h3', { text: 'Your sentence' }), slots, built,
      h('h3', { text: 'The words', style: 'margin-top:14px' }), tiles,
      h('p', { class: 'note', text: 'Tap a word to place it, tap it again in the line above to take it back. Keys 1–9 place, Backspace removes the last, Enter checks.' }),
      h('div', { class: 'row' }, checkBtn, retryBtn, showBtn),
      verdict));
    main.appendChild(noteBox);
    main.appendChild(payloadBox(item, false));

    document.addEventListener('keydown', function (ev) {
      if (/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
      if (ev.key >= '1' && ev.key <= '9') {
        var i = +ev.key - 1;
        if (i < item.chips.length && placed.indexOf(i) < 0) { placed.push(i); paint(); }
      } else if (ev.key === 'Backspace') {
        ev.preventDefault(); placed.pop(); paint();
      } else if (ev.key === 'Enter') {
        ev.preventDefault(); check();
      }
    });

    paint();
  }

  /* ======================================================= tier C: writing */
  function composeSection(item, rec, onChange) {
    var sec = h('section', null, h('h2', { text: 'Write your response' }));

    /* --- bullets / instructions as a checklist the student ticks ----- */
    var reqs = item.task === 'em' ? item.bullets : item.instructions;
    var ticks = rec.ticks || {};
    var list = h('div');
    reqs.forEach(function (b, i) {
      var cb = h('input', { type: 'checkbox', id: 'req' + i });
      cb.checked = !!ticks[i];
      cb.addEventListener('change', function () {
        ticks[i] = cb.checked; rec.ticks = ticks; save(item.slug, rec);
        onChange && onChange();
      });
      list.appendChild(h('label', { class: 'opt' }, cb, h('div', { text: b })));
    });

    /* --- timer ------------------------------------------------------ */
    var left = item.seconds, tick = null;
    var clock = h('span', { class: 'timer', text: fmt(item.seconds) });
    function fmt(s) {
      var m = Math.floor(Math.abs(s) / 60), r = Math.abs(s) % 60;
      return (s < 0 ? '-' : '') + m + ':' + (r < 10 ? '0' : '') + r;
    }
    var startBtn = h('button', { class: 'quiet', type: 'button', text: 'Start timer' });
    startBtn.addEventListener('click', function () {
      if (tick) {
        clearInterval(tick); tick = null; startBtn.textContent = 'Resume';
        return;
      }
      startBtn.textContent = 'Pause';
      tick = setInterval(function () {
        left--; clock.textContent = fmt(left);
        if (left <= 0) clock.classList.add('out');
      }, 1000);
    });
    var resetBtn = h('button', { class: 'quiet', type: 'button', text: 'Reset' });
    resetBtn.addEventListener('click', function () {
      clearInterval(tick); tick = null; left = item.seconds;
      clock.textContent = fmt(left); clock.classList.remove('out');
      startBtn.textContent = 'Start timer';
    });

    /* --- the draft -------------------------------------------------- */
    var ta = h('textarea', { rows: 14, 'aria-label': 'Your response',
      placeholder: item.task === 'em'
        ? 'Dear ...'
        : 'Your contribution to the discussion ...' });
    ta.value = rec.comp || '';
    var counter = h('span', { class: 'counter' });
    function recount() {
      var n = countWords(ta.value);
      counter.innerHTML = '';
      counter.appendChild(h('b', { text: String(n) }));
      counter.appendChild(document.createTextNode(
        ' words · target ' + item.min_words + '–' + item.max_words));
      counter.className = 'counter' + (n && n < item.min_words ? ' under'
        : n > item.max_words ? ' over' : '');
    }
    ta.addEventListener('input', function () { recount(); });
    ta.addEventListener('input', debounce(function () {
      rec.comp = ta.value; save(item.slug, rec); onChange && onChange();
    }, 400));
    recount();

    /* --- the mechanical gates -------------------------------------- */
    var checks = h('ul', { class: 'checks', hidden: 'hidden' });
    function runChecks() {
      var text = ta.value, n = countWords(text);
      var lines = text.split(/\n+/).map(function (l) { return l.trim(); })
        .filter(function (l) { return l; });
      var out = [];

      out.push(n >= item.min_words
        ? ['pass', 'Long enough', n + ' words, against a ' + item.min_words + '-word floor.']
        : ['fail', 'Too short', n + ' words. The task needs at least ' + item.min_words + '.']);
      if (n > item.max_words) {
        out.push(['soft', 'Longer than the models',
          'The band-5 model is ' + item.model_words + ' words. Length is not scored, but nothing here needs ' + n + '.']);
      }

      if (item.task === 'em') {
        out.push(/^(dear|hi|hello)\b/i.test(lines[0] || '')
          ? ['pass', 'Opens with a greeting', lines[0]]
          : ['fail', 'No greeting', 'An email with no salutation loses a convention mark.']);
        var sign = lines.slice(-2).join(' ');
        out.push(/\b(yours|regards|best wishes|best|thanks|with thanks|sincerely)\b/i.test(sign)
          ? ['pass', 'Signs off', lines[lines.length - 2] || lines[lines.length - 1]]
          : ['fail', 'No sign-off', 'Close it, and sign it.']);
      } else {
        var missing = item.students.filter(function (s) {
          return text.toLowerCase().indexOf(s[0].toLowerCase()) < 0;
        }).map(function (s) { return s[0]; });
        out.push(missing.length === 0
          ? ['pass', 'Engages both classmates', 'Both ' + item.students.map(function (s) { return s[0]; }).join(' and ') + ' are named.']
          : ['fail', 'Does not engage ' + missing.join(' or '),
            'The task asks for a contribution to a discussion. This is the same check the book’s own build applies to every model answer.']);
      }

      out.push(lines.length >= 3
        ? ['pass', 'Has structure', lines.length + ' paragraphs.']
        : ['soft', 'One block of text',
          'Not an error, but every model in the book breaks into at least three parts.']);

      var unticked = reqs.length - reqs.filter(function (_, i) { return ticks[i]; }).length;
      out.push(unticked === 0
        ? ['pass', 'You have ticked every required point', 'Only you can judge this one.']
        : ['soft', unticked + ' required point' + (unticked === 1 ? '' : 's') + ' not ticked',
          'Tick them above once your draft covers them.']);

      checks.innerHTML = '';
      out.forEach(function (c) {
        checks.appendChild(h('li', { class: c[0] },
          h('span', { class: 'mark', text: c[0] === 'pass' ? '✓' : c[0] === 'fail' ? '✗' : '•' }),
          h('div', null, h('b', { text: c[1] }), h('small', { text: c[2] }))));
      });
      checks.removeAttribute('hidden');
      rec.checked = true; save(item.slug, rec); onChange && onChange();
    }

    var checkBtn = h('button', { type: 'button', text: 'Check what can be checked' });
    checkBtn.addEventListener('click', runChecks);
    var clearBtn = h('button', { class: 'quiet', type: 'button', text: 'Retry' });
    clearBtn.addEventListener('click', function () {
      if (ta.value && !confirm('Clear your draft and start again?')) return;
      ta.value = ''; rec.comp = ''; save(item.slug, rec);
      recount(); checks.setAttribute('hidden', 'hidden');
      resetBtn.click(); ta.focus(); onChange && onChange();
    });

    sec.appendChild(h('div', { class: 'box task' },
      h('h3', { text: item.task === 'em' ? 'Your email must do all three' : 'The task' }),
      list,
      h('div', { class: 'row' }, startBtn, resetBtn, clock,
        h('span', { class: 'counter', text: item.time }))));
    sec.appendChild(ta);
    sec.appendChild(h('div', { class: 'row' }, checkBtn, clearBtn, counter));
    sec.appendChild(checks);
    sec.appendChild(h('details', null,
      h('summary', { text: 'Compare with the band-' + item.model_band + ' model' }),
      h('div', { class: 'box model' },
        h('h3', null, 'Model answer ',
          h('span', { class: 'band b5', text: 'Band ' + item.model_band })),
        h('div', { html: item.model_html }),
        h('p', { class: 'note', text: item.model_words + ' words.' }))));
    return sec;
  }

  /* ======================================================= tier D: faults */
  function faultSection(item, rec, onChange) {
    var sec = h('section', null, h('h2', { text: 'What holds this one at band ' + item.degraded_band + '?' }));
    sec.appendChild(h('div', { class: 'box degr' },
      h('h3', null, 'The weaker version ',
        h('span', { class: 'band b3', text: 'Band ' + item.degraded_band })),
      h('div', { html: item.degraded_html })));

    if (!item.faultset) return sec;

    var opts = item.faultset.options;
    var chosen = rec.faults || [];
    var boxes = [];
    var wrap = h('div');
    wrap.appendChild(h('p', { class: 'note',
      text: 'Three of these six faults are true of the version above. The other three are faults of a different task. Choose three.' }));
    opts.forEach(function (o, i) {
      var cb = h('input', { type: 'checkbox' });
      cb.checked = chosen.indexOf(i) >= 0;
      var label = h('label', { class: 'opt' }, cb, h('div', { text: o.text }));
      boxes.push({ cb: cb, label: label, o: o });
      wrap.appendChild(label);
    });

    var verdict = h('div', { class: 'verdict', hidden: 'hidden' });
    var keyBox = h('div', { class: 'box key', hidden: 'hidden' },
      h('h3', { text: 'The full fault list' }),
      h('div', { html: item.keys[item.faultset.key_html] || '' }));

    var checkBtn = h('button', { type: 'button', text: 'Check answer' });
    checkBtn.addEventListener('click', function () {
      var right = 0, wrongPicked = 0;
      boxes.forEach(function (b) {
        b.label.classList.remove('right', 'wrong');
        var why = $('.why', b.label);
        if (why) why.remove();
        if (!b.cb.checked) return;
        if (b.o.correct) { right++; b.label.classList.add('right'); }
        else { wrongPicked++; b.label.classList.add('wrong'); }
        b.label.appendChild(h('span', { class: 'why',
          text: b.o.correct ? 'yes' : 'not this one' }));
      });
      verdict.removeAttribute('hidden');
      if (right === 3 && wrongPicked === 0) {
        verdict.className = 'verdict ok';
        verdict.innerHTML = 'All three, and nothing that does not belong.';
        rec.faultDone = true;
      } else {
        verdict.className = 'verdict ' + (right ? 'part' : 'no');
        verdict.innerHTML = right + ' of 3 right' +
          (wrongPicked ? ', and ' + wrongPicked + ' that belong to another task.' : '.');
        rec.faultDone = false;
      }
      rec.faults = boxes.map(function (b, i) { return b.cb.checked ? i : -1; })
        .filter(function (i) { return i >= 0; });
      save(item.slug, rec); onChange && onChange();
    });
    var retryBtn = h('button', { class: 'quiet', type: 'button', text: 'Retry' });
    retryBtn.addEventListener('click', function () {
      boxes.forEach(function (b) {
        b.cb.checked = false;
        b.label.classList.remove('right', 'wrong');
        var why = $('.why', b.label); if (why) why.remove();
      });
      verdict.setAttribute('hidden', 'hidden');
      keyBox.setAttribute('hidden', 'hidden');
      rec.faults = []; rec.faultDone = false; save(item.slug, rec); onChange && onChange();
    });
    var showBtn = h('button', { class: 'ghost', type: 'button', text: 'Show the fault list' });
    showBtn.addEventListener('click', function () { keyBox.removeAttribute('hidden'); });

    wrap.appendChild(h('div', { class: 'row' }, checkBtn, retryBtn, showBtn));
    wrap.appendChild(verdict);
    wrap.appendChild(keyBox);
    sec.appendChild(wrap);
    return sec;
  }

  /* ======================================================= writing page */
  function renderWriting(item, rec) {
    var main = $('#page');
    var progress = h('div', { class: 'bar' }, h('i'));

    function recompute() {
      var qs = item.preview.concat(item.followup);
      var marked = qs.filter(function (q) { return (rec.marks || {})[q.tag]; }).length;
      var n = countWords(rec.comp || '');
      var parts = marked / qs.length * 0.6 +
        (n >= item.min_words ? 0.3 : 0) + (rec.faultDone ? 0.1 : 0);
      $('i', progress).style.width = Math.round(parts * 100) + '%';
      rec.done = marked === qs.length && n >= item.min_words;
      save(item.slug, rec);
    }

    main.appendChild(h('p', { class: 'eyebrow',
      text: item.task_label + ' · ' + item.time }));
    main.appendChild(h('h1', { text: item.id }));
    main.appendChild(h('p', { class: 'sub', text: item.function }));
    main.appendChild(progress);
    main.appendChild(h('hr', { class: 'rule' }));

    if (item.task === 'em') {
      main.appendChild(h('div', { class: 'box task' },
        h('h3', { text: 'The task' }),
        h('div', { html: item.scenario }),
        h('div', null, item.header.map(function (hh) {
          return h('p', { class: 'hdr' }, h('b', { text: hh[0] }), hh[1]);
        }))));
    } else {
      main.appendChild(h('div', { class: 'box task' },
        h('h3', { text: item.prof_name }),
        h('div', { html: item.professor })));
      item.students.forEach(function (s) {
        main.appendChild(h('div', { class: 'box' },
          h('h3', { text: s[0] }), h('p', { text: s[1] })));
      });
    }

    main.appendChild(questionSection('Before you write', item.preview, item, rec, 'prev', recompute));
    main.appendChild(composeSection(item, rec, recompute));
    main.appendChild(questionSection('After you write', item.followup, item, rec, 'follow', recompute));
    main.appendChild(faultSection(item, rec, recompute));
    main.appendChild(payloadBox(item, false));
    recompute();
  }

  /* ======================================================= family page */
  function renderFamily(item, rec) {
    var main = $('#page');
    main.appendChild(h('p', { class: 'eyebrow',
      text: item.task_label + ' · ' + item.time }));
    main.appendChild(h('h1', { text: item.id }));
    main.appendChild(h('p', { class: 'sub', text: item.function }));
    main.appendChild(h('hr', { class: 'rule' }));
    main.appendChild(h('div', { class: 'box task' }, h('div', { html: item.intro })));
    main.appendChild(payloadBox(item, true,
      'What these ten sentences teach'));
    main.appendChild(questionSection('Before you start', item.preview, item, rec, 'prev'));

    var ul = h('ul', { class: 'sentlist' });
    item.rows.forEach(function (n) {
      var slug = 'bas-' + ('00' + n).slice(-3);
      var r = load(slug);
      ul.appendChild(h('li', null,
        h('a', { href: slug + '.html', text: 'BAS ' + ('00' + n).slice(-3) }),
        h('span', { class: 'lab', text: r.label || '' }),
        h('span', { class: 'tick', text: r.solved ? '✓ solved' : r.shown ? 'shown' : '' })));
    });
    main.appendChild(h('section', null, h('h2', { text: 'The ten sentences' }), ul));
    main.appendChild(questionSection('After the ten', item.followup, item, rec, 'follow'));
  }

  /* ======================================================= index */
  function renderIndex() {
    var cat = window.CATALOGUE, recs = allRecords();
    var main = $('#page');
    var state = { task: 'all', q: '', only: false };

    var counts = { bas: 0, em: 0, ad: 0 }, done = { bas: 0, em: 0, ad: 0 };
    cat.forEach(function (c) {
      if (c.kind !== 'exercise') return;
      counts[c.task]++;
      if ((recs[c.slug] || {}).done) done[c.task]++;
    });
    var total = counts.bas + counts.em + counts.ad;
    var totalDone = done.bas + done.em + done.ad;

    var due = 0, dueFirst = null, dueAt = Infinity;
    Object.keys(recs).forEach(function (k) {
      var d = recs[k].due || {};
      Object.keys(d).forEach(function (t) {
        if (d[t] > Date.now()) return;
        due++;
        if (d[t] < dueAt) { dueAt = d[t]; dueFirst = k; }
      });
    });

    var stats = h('div', { class: 'stats' },
      h('div', null, h('b', { text: totalDone + '/' + total }), 'exercises finished'),
      h('div', null, h('b', { text: done.bas + '/' + counts.bas }), 'Build a Sentence'),
      h('div', null, h('b', { text: done.em + '/' + counts.em }), 'Write an Email'),
      h('div', null, h('b', { text: done.ad + '/' + counts.ad }), 'Academic Discussion'),
      h('div', null, h('b', { text: String(due) }), 'questions due for review'));

    var tabs = h('div', { class: 'tabs' });
    [['all', 'Everything'], ['bas', 'Build a Sentence'], ['em', 'Write an Email'],
     ['ad', 'Academic Discussion'], ['family', 'Sentence families']].forEach(function (t) {
      var b = h('button', { type: 'button', text: t[1],
        'aria-pressed': state.task === t[0] ? 'true' : 'false' });
      b.addEventListener('click', function () {
        state.task = t[0];
        Array.prototype.forEach.call(tabs.querySelectorAll('button'), function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        paint();
      });
      tabs.appendChild(b);
    });

    var search = h('input', { type: 'search',
      placeholder: 'Search an id, a function, or anything in the hidden syllabus — "subjunctive", "concede", "register" …' });
    search.addEventListener('input', debounce(function () {
      state.q = search.value.toLowerCase(); paint();
    }, 180));

    var onlyBtn = h('button', { class: 'quiet', type: 'button', text: 'Only unfinished',
      'aria-pressed': 'false' });
    onlyBtn.addEventListener('click', function () {
      state.only = !state.only;
      onlyBtn.setAttribute('aria-pressed', state.only ? 'true' : 'false');
      paint();
    });

    var reviewBtn = h('button', { type: 'button',
      text: due ? 'Review ' + due + ' due' : 'Nothing due',
      disabled: due ? null : 'disabled',
      title: 'Questions you marked Missed come back after a day, Partly after three, Got it after ten.' });
    reviewBtn.addEventListener('click', function () {
      if (dueFirst) location.href = 'items/' + dueFirst + '.html';
    });

    var randomBtn = h('button', { class: 'ghost', type: 'button', text: 'Random unfinished' });
    randomBtn.addEventListener('click', function () {
      var pool = cat.filter(function (c) {
        return c.kind === 'exercise' && !(recs[c.slug] || {}).done &&
          (state.task === 'all' || c.task === state.task);
      });
      if (!pool.length) { alert('Every exercise in this set is finished.'); return; }
      location.href = 'items/' + pool[Math.floor(Math.random() * pool.length)].slug + '.html';
    });

    var exportBtn = h('button', { class: 'quiet', type: 'button', text: 'Export progress' });
    exportBtn.addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(allRecords(), null, 1)],
        { type: 'application/json' });
      var a = h('a', { href: URL.createObjectURL(blob),
        download: 'toefl-progress.json' });
      document.body.appendChild(a); a.click(); a.remove();
    });
    var importInput = h('input', { type: 'file', accept: '.json', hidden: 'hidden' });
    var importBtn = h('button', { class: 'quiet', type: 'button', text: 'Import progress' });
    importBtn.addEventListener('click', function () { importInput.click(); });
    importInput.addEventListener('change', function () {
      var f = importInput.files[0]; if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try {
          var data = JSON.parse(fr.result);
          Object.keys(data).forEach(function (k) {
            localStorage.setItem(NS + k, JSON.stringify(data[k]));
          });
          location.reload();
        } catch (e) { alert('That file could not be read.'); }
      };
      fr.readAsText(f);
    });

    var grid = h('div', { class: 'cards' });
    var found = h('p', { class: 'sub' });

    function paint() {
      grid.innerHTML = '';
      var shown = 0;
      cat.forEach(function (c) {
        if (state.task === 'family' ? c.kind !== 'family'
          : state.task === 'all' ? c.kind !== 'exercise'
          : (c.kind !== 'exercise' || c.task !== state.task)) return;
        var rec = recs[c.slug] || {};
        if (state.only && rec.done) return;
        if (state.q && c.hay.indexOf(state.q) < 0) return;
        shown++;
        grid.appendChild(h('a', {
          class: 'card ' + c.task + (rec.done ? ' done' : ''),
          href: 'items/' + c.slug + '.html' },
          h('span', { class: 'state', text: rec.done ? '✓' : '' }),
          h('div', { class: 'cid', text: c.id }),
          h('div', { class: 'cfn', text: c.function }),
          c.pay ? h('div', { class: 'cpl', text: c.pay }) : null));
      });
      found.textContent = shown + ' page' + (shown === 1 ? '' : 's');
    }

    main.appendChild(h('p', { class: 'eyebrow', text: 'Offline practice' }));
    main.appendChild(h('h1', { text: 'TOEFL Writing — 300 exercises' }));
    main.appendChild(h('p', { class: 'sub',
      text: 'The updated test, from 21 January 2026: three tasks, twelve items, about twenty-three minutes. One page per exercise, with a key for every question.' }));
    main.appendChild(h('hr', { class: 'rule' }));
    main.appendChild(stats);
    main.appendChild(h('div', { class: 'bar' },
      h('i', { style: 'width:' + Math.round(totalDone / total * 100) + '%' })));
    main.appendChild(h('h2', { text: 'Find an exercise' }));
    main.appendChild(search);
    main.appendChild(tabs);
    main.appendChild(h('div', { class: 'row' }, reviewBtn, randomBtn, onlyBtn,
      exportBtn, importBtn, importInput));
    main.appendChild(found);
    main.appendChild(grid);
    main.appendChild(h('details', null,
      h('summary', { text: 'How the checking works, and what it cannot do' }),
      h('div', { class: 'box' },
        h('p', { html: '<b>Word tiles are marked by the machine.</b> A sentence is compared with the answer word by word, using the same normaliser the book was validated with. The first word out of place is shown to you.' }),
        h('p', { html: '<b>Every preview and follow-up question has a written key.</b> You answer first; the key appears when you check; you mark yourself. That is 1,355 questions and 1,355 keys \u2014 about 2,200 prompts once the lettered parts are counted, every one of them answered.' }),
        h('p', { html: '<b>Your own email or discussion response is not graded.</b> Nothing offline can judge an argument, and pretending otherwise would teach you the wrong thing. What is checked is mechanical: length, whether you greeted and signed off, and — for a discussion — whether you actually engaged both classmates, which is the same gate the book applies to its own model answers. Then you compare your draft with the band-5 model.' }),
        h('p', { html: '<b>Then you find the faults.</b> Six statements, three of which are true of the band-3 version in front of you. That one is marked by the machine too.' }),
        h('p', { class: 'note', text: 'Progress is stored in this browser only. Export it if you want to keep it or move it.' }))));
    paint();
  }

  /* ======================================================= boot */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    if (window.CATALOGUE) { renderIndex(); return; }
    var item = window.ITEM;
    if (!item) return;
    var rec = load(item.slug);
    rec.seen = true;
    if (item.kind === 'family') renderFamily(item, rec);
    else if (item.task === 'bas') renderBas(item, rec);
    else renderWriting(item, rec);
    save(item.slug, rec);
  });
})();
