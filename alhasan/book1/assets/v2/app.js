/* The Al-Hasan lesson renderer, v2.

   WHAT CHANGED, AND WHY. v1 had seven widget types and graded a whole exercise as one right-or-wrong.
   The book has fifteen kinds of question and 236 numbered items, so v1 could only show a flattened
   version of it - which is how a True/False exercise, an odd-one-out and an error-correction became
   multiple-choice. This renders the items, marks each one, and shows the book's own answer when a
   learner gets it wrong.

   Six defects of v1 are fixed here and each is noted at the line that fixes it:
     1. a second gap in a sentence was never rendered  (String.replace with a string hits once)
     2. matching was a free pass                       (the right option was always on the same row)
     3. word order was graded by token id              (a repeated word marked a correct answer wrong)
     4. Check was bypassed on multiple choice          (the answer appeared on click)
     5. writing passed on a single character
     6. a clip whose speaker had no face failed silently
*/
(function () {
  var A = window.AHB, esc = A.esc;
  var body = document.body;
  var UNIT = Number(body.dataset.unit);
  var slug = body.dataset.slug;
  var D = A.units[UNIT];
  var AUD = (A.audioData[UNIT] || {});
  var root = document.getElementById('app');
  if (!D || !root) return;

  var KEY = 'alhasan-u' + UNIT + '-progress';
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { state = {}; }
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { } };

  var idx = D.sections.findIndex(function (s) { return s[0] === slug; });
  var section = D.sections[idx];
  var page = D.pages[slug];

  function label(i) { return i === 0 ? 'Warm Up' : 'Part ' + String(i).padStart(2, '0'); }

  function nav() {
    return '<nav class="nav"><a href="index.html">Unit ' + UNIT + ' home</a>' +
      D.sections.map(function (s, i) {
        return '<a class="' + (s[0] === slug ? 'active' : '') + '" href="' + s[0] + '.html">' + label(i) + '</a>';
      }).join('') + '</nav>';
  }

  /* ---------------------------------------------------------------- the unit home */
  if (slug === 'unit-home') {
    var totalItems = 0, doneItems = 0;
    D.sections.forEach(function (s) {
      (D.pages[s[0]].exercises || []).forEach(function (e, j) {
        var n = (e.items || []).length || e.gaps || (e.order || []).length;
        totalItems += n;
        var rec = state[s[0] + '/' + j];
        if (rec && rec.correct) doneItems += Math.min(rec.correct, n);
      });
    });
    var pct = Math.round(doneItems / Math.max(1, totalItems) * 100);
    root.innerHTML =
      '<header class="hero"><div class="eyebrow">Al-Hasan International</div>' +
      '<h1>' + esc(D.title) + '</h1>' +
      '<p>Twelve sections, ' + totalItems + ' questions, every one of them from the book.</p>' +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<p class="small">' + doneItems + ' of ' + totalItems + ' answered correctly on this device.</p>' +
      '</header><div class="grid">' +
      D.sections.map(function (s, i) {
        var p = D.pages[s[0]], nex = (p.exercises || []).length;
        var vids = (p.videos || []).length;
        return '<article class="card"><div class="eyebrow">' + label(i) + '</div>' +
          '<h2>' + esc(s[1]) + '</h2><p>' + esc(s[2]) + '</p>' +
          '<p class="small">' + nex + ' activities' + (vids ? ' · ' + vids + ' video' + (vids > 1 ? 's' : '') : '') + '</p>' +
          '<a class="button" href="' + s[0] + '.html">Open section</a></article>';
      }).join('') + '</div>';
    return;
  }
  if (!page) return;

  /* ---------------------------------------------------------------- the story stage */
  function stage() {
    var groups = AUD[slug] || [];
    if (!groups.length) return '';          /* no recordings bundled for this page: draw no stage at all */
    var names = {};
    groups.forEach(function (g) { g.clips.forEach(function (c) { names[c.speaker] = 1; }); });
    /* FIX 6: a speaker with no drawing is reported, not skipped. v1 looked the person up with .find()
       and carried on with undefined when it missed, so the clip played against a motionless stage and
       nothing said why. */
    var people = Object.keys(names).map(function (n) {
      var c = A.castData[n];
      if (!c) return '<div class="person missing" data-name="' + esc(n) + '">' +
        '<div class="nofacewarn">no drawing for ' + esc(n) + '</div></div>';
      return '<div class="person" data-name="' + esc(n) + '">' + c.svg +
        '<div class="who">' + esc(n) + '</div></div>';
    }).join('');

    var hasAr = groups.some(function (g) { return g.clips.some(function (c) { return c.ar; }); });
    return '<section class="story">' +
      '<div class="eyebrow">Read and listen</div>' +
      '<div class="stage" id="stage">' + people + '</div>' +
      '<div class="controls">' +
      '<button type="button" data-play>▶ Play</button>' +
      '<button type="button" class="secondary" data-pause>‖ Pause</button>' +
      '<button type="button" class="secondary" data-stop>■ Stop</button>' +
      '<label class="small">Speed <select data-rate>' +
      ['0.75', '0.9', '1', '1.1', '1.25'].map(function (v) {
        return '<option value="' + v + '"' + (v === '1' ? ' selected' : '') + '>' + v + '×</option>';
      }).join('') + '</select></label>' +
      (groups.length > 1 ? '<label class="small">Track <select data-set>' + groups.map(function (g, i) {
        return '<option value="' + i + '">' + esc(g.title) + '</option>';
      }).join('') + '</select></label>' : '') +
      (hasAr ? '<button type="button" class="secondary" data-ar aria-pressed="false">عربي</button>' : '') +
      '</div><audio data-audio preload="none"></audio>' +
      '<div class="transcript" data-transcript>' + groups.map(function (g, gi) {
        /* A passage read by one narrator does not need their name on all forty lines; a dialogue does. */
        var solo = g.clips.every(function (c) { return c.speaker === g.clips[0].speaker; });
        return '<div class="track" data-track="' + gi + '"' + (gi ? ' hidden' : '') + '>' +
          g.clips.map(function (c, ci) {
            return '<p class="line' + (solo ? ' solo' : '') + '" data-line="' + ci + '" tabindex="0" role="button">' +
              '<span class="sp"' + (solo ? ' hidden' : '') + '>' + esc(c.speaker) + '</span>' +
              '<span class="tx">' + esc(c.text) + '</span>' +
              (c.ar ? '<span class="ar" dir="rtl" lang="ar" hidden>' + esc(c.ar) + '</span>' : '') +
              '</p>';
          }).join('') + '</div>';
      }).join('') + '</div>' +
      '<p class="small">Click any line to hear just that line. The recordings are in this folder, so ' +
      'playback works offline.</p></section>';
  }

  /* ---------------------------------------------------------------- the widgets */
  var INSTR = {
    'truefalse': 'Decide whether each sentence is true or false.',
    'find-word': 'Find the word in the passage that matches each meaning.',
    'odd-one-out': 'In each row, choose the word that does not belong.',
    'error-correct': 'Each sentence has one mistake. Write the whole sentence correctly.',
    'sentence-order': 'Put the words in order. Click a word to add it, click it again to take it back.',
    'message-order': 'Put the message in order. Click a line to add it, click it again to take it back.',
    'match': 'Choose the matching answer for each one. There may be more answers than you need.',
    'mcq': 'Choose one answer, then press Check.',
    'wordbank-cloze': 'Write one word in each gap.',
    'gap-fill': 'Write the missing word or words.',
    'listen-gap': 'Listen, then write the missing word.',
    'short-answer': 'Answer in your own words, then compare with the book’s answer.',
    'open-writing': 'Write your answer. It is saved on this device.',
    'roleplay-case': 'This one is for speaking. Use the notes box to plan what you will say.',
    'checklist': 'Tick each one when it is true.'
  };

  function itemHead(it) { return '<span class="num">' + it.n + '</span>'; }

  function slotInput(it, extra) {
    return '<input class="slot" data-in="' + it.n + '" aria-label="Answer ' + it.n + '"' +
      (extra || '') + ' autocomplete="off" autocapitalize="off" spellcheck="false">';
  }

  function chips(list, cls) {
    return '<ul class="bank ' + (cls || '') + '">' + list.map(function (w) {
      return '<li>' + esc(w) + '</li>';
    }).join('') + '</ul>';
  }

  function pick(it, opts, dataset) {
    /* One row of mutually exclusive choices. They are real <button>s, so they are reachable by Tab and
       operable by Enter or Space without a line of extra keyboard code. */
    return '<div class="opts" role="group" aria-label="Answer ' + it.n + '">' + opts.map(function (o) {
      return '<button type="button" class="opt" data-item="' + it.n + '" data-' + dataset + '="' +
        esc(o.v) + '" aria-pressed="false">' + esc(o.t) + '</button>';
    }).join('') + '</div>';
  }

  function tokenBuilder(it, tokens) {
    var shuffled = A.shuffle(tokens.map(function (t, i) { return { t: t, i: i }; }));
    return '<div class="tokens" data-item="' + it.n + '">' +
      '<ul class="bank tok" data-bank="' + it.n + '">' + shuffled.map(function (x) {
        return '<li><button type="button" class="chip" data-tok="' + esc(x.t) + '">' + esc(x.t) + '</button></li>';
      }).join('') + '</ul>' +
      '<ol class="target" data-target="' + it.n + '" aria-label="Your answer for ' + it.n + '"></ol></div>';
  }

  function renderExercise(e, i) {
    var b = '';
    var items = e.items || [];

    if (e.type === 'truefalse') {
      b = items.map(function (it) {
        return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          pick(it, [{ v: 'T', t: 'True' }, { v: 'F', t: 'False' }], 'val') +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'mcq') {
      b = items.map(function (it) {
        var keys = Object.keys(it.options || {});
        /* "A) port" when the book labels its options with letters, but just "on" when the choice is
           inline - "We ship it (on / in) Monday" - where the option is its own label and "on) on"
           would be nonsense. */
        var opts = keys.map(function (k) {
          return { v: k, t: (k === it.options[k]) ? it.options[k] : (k + ') ' + it.options[k]) };
        });
        var q = esc(it.prompt).replace(/␣/g, '<span class="gapmark">&nbsp;&nbsp;&nbsp;</span>');
        return '<div class="row col">' + itemHead(it) + '<span class="q">' + q + '</span>' +
          pick(it, opts, 'val') + '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'odd-one-out') {
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) +
          pick(it, (it.options || []).map(function (o) { return { v: o, t: o }; }), 'val') +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'match') {
      /* FIX 2: the options are SHUFFLED, and the pool is the exercise's whole option list - which for
         "there is one you do not need" is longer than the number of rows. v1 compared the chosen index
         with the row index, so the answer was always the option printed on the same line. */
      var pool = A.shuffle(Object.keys(e.pool || {}));
      b = items.map(function (it) {
        return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          '<select data-in="' + it.n + '" aria-label="Match for ' + esc(it.prompt) + '">' +
          '<option value="">Choose…</option>' + pool.map(function (k) {
            return '<option value="' + esc(k) + '">' + esc(k) + ') ' + esc(e.pool[k]) + '</option>';
          }).join('') + '</select><span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'gap-fill' || e.type === 'listen-gap') {
      /* FIX 1: every gap is replaced, not the first. The generator marks each one with U+2423, and this
         splits on all of them; v1 called String.replace with a string pattern, which replaces once, so
         the second gap of a sentence was never drawn at all. */
      b = (e.bank ? chips(e.bank, 'hint') : '') + items.map(function (it) {
        var parts = String(it.prompt).split('␣');
        var html = esc(parts[0]);
        for (var k = 1; k < parts.length; k++) html += slotInput(it) + esc(parts[k]);
        return '<div class="row">' + itemHead(it) + '<span class="q">' + html + '</span>' +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'wordbank-cloze') {
      var n = 0;
      var text = esc(e.text || '').replace(/\(\s*(\d+)\s*\)\s*_{3,}/g, function (_m, g) {
        n++;
        return '<input class="slot" data-in="' + g + '" aria-label="Gap ' + g + '" autocomplete="off">';
      });
      b = (e.bank ? chips(e.bank, 'hint') : '') + '<p class="cloze">' + text + '</p>' +
        '<div class="marks">' + Object.keys(e.answers || {}).map(function (k) {
          return '<span class="mark" data-mark="' + k + '">' + k + '</span>';
        }).join('') + '</div>';

    } else if (e.type === 'find-word') {
      b = items.map(function (it) {
        return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          (it.hint ? '<span class="hintletter">' + esc(it.hint) + '…</span>' : '') +
          slotInput(it) + (it.tail ? '<span class="q">' + esc(it.tail) + '</span>' : '') +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'error-correct') {
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) +
          '<span class="q wrong">' + esc(it.wrong) + '</span>' +
          slotInput(it, ' class="slot wide"') +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'sentence-order') {
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) + tokenBuilder(it, it.tokens || []) +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'message-order') {
      b = '<div class="row col">' + tokenBuilder({ n: 1 }, e.lines || []) +
        '<span class="mark" data-mark="1"></span></div>';

    } else if (e.type === 'short-answer') {
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          '<textarea class="short" data-in="' + it.n + '" rows="2" aria-label="Answer ' + it.n + '"></textarea>' +
          (it.model ? '<button type="button" class="secondary tiny" data-model="' + it.n + '">Show the book’s answer</button>' +
            '<p class="model" data-modeltext="' + it.n + '" hidden>' + esc(it.model) + '</p>' : '') +
          '</div>';
      }).join('');

    } else if (e.type === 'checklist') {
      b = items.map(function (it) {
        return '<label class="row check"><input type="checkbox" data-check="' + it.n + '"> ' +
          esc(it.text) + '</label>';
      }).join('');

    } else {                                   /* open-writing, roleplay-case */
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          '<textarea class="long" data-in="' + it.n + '" rows="3" aria-label="Answer ' + it.n + '"></textarea>' +
          '</div>';
      }).join('') +
        (e.model ? '<button type="button" class="secondary tiny" data-model="all">Show the book’s notes</button>' +
          '<p class="model" data-modeltext="all" hidden>' + esc(e.model) + '</p>' : '');
    }

    var marked = GRADED[e.type] ? '<button type="button" data-check-answer>Check</button>' : '';
    return '<section class="exercise" data-ex="' + i + '" data-type="' + e.type + '">' +
      '<div class="exhead"><span class="tag">' + esc(e.name) + '</span>' +
      '<span class="small">book block ' + e.block + '</span></div>' +
      '<h2>' + esc(e.heading) + '</h2>' +
      '<p class="small instr">' + esc(INSTR[e.type] || '') + '</p>' +
      (e.example ? '<p class="example"><strong>Example:</strong> ' + esc(e.example.text) + '</p>' : '') +
      b +
      '<div class="controls">' + marked +
      '<button type="button" class="secondary" data-reset>Reset</button></div>' +
      '<div class="feedback" aria-live="polite" hidden></div></section>';
  }

  var GRADED = {
    'truefalse': 1, 'mcq': 1, 'odd-one-out': 1, 'match': 1, 'gap-fill': 1, 'listen-gap': 1,
    'wordbank-cloze': 1, 'find-word': 1, 'error-correct': 1, 'sentence-order': 1, 'message-order': 1
  };

  /* ---------------------------------------------------------------- marking */
  function chosen(ex, n) {
    var b = ex.querySelector('.opt.selected[data-item="' + n + '"]');
    return b ? b.dataset.val : '';
  }
  function typed(ex, n) {
    var el = ex.querySelector('[data-in="' + n + '"]');
    return el ? el.value : '';
  }
  function tokensOf(ex, n) {
    return [].slice.call(ex.querySelectorAll('[data-target="' + n + '"] .chip'))
      .map(function (c) { return c.dataset.tok; });
  }

  function grade(e, ex) {
    var res = [];
    if (e.type === 'wordbank-cloze') {
      Object.keys(e.answers || {}).forEach(function (k) {
        res.push({ n: k, ok: A.matches(typed(ex, k), e.answers[k]), want: e.answers[k] });
      });
    } else if (e.type === 'message-order') {
      /* FIX 3: compared by TEXT, not by the id a token was created with. Two identical lines or two
         identical words then both count, which is what a reader sees. */
      var got = tokensOf(ex, 1), want = e.order || [];
      var ok = got.length === want.length && got.every(function (t, i) { return A.norm(t) === A.norm(want[i]); });
      res.push({ n: 1, ok: ok, want: want.join('  →  ') });
    } else {
      (e.items || []).forEach(function (it) {
        var ok = false, want = it.answer;
        if (e.type === 'truefalse' || e.type === 'mcq' || e.type === 'odd-one-out') {
          ok = A.matches(chosen(ex, it.n), it.answer);
        } else if (e.type === 'match') {
          ok = String(typed(ex, it.n)).toLowerCase() === String(it.answer).toLowerCase();
          want = (it.answer + ') ' + (e.pool || {})[it.answer]);
        } else if (e.type === 'sentence-order') {
          var got2 = tokensOf(ex, it.n).join(' ');
          ok = A.norm(got2) === A.norm(it.answer);
        } else {
          ok = A.matches(typed(ex, it.n), it.answer);
        }
        res.push({ n: it.n, ok: ok, want: want });
      });
    }
    return res;
  }

  function show(ex, e, res) {
    var right = 0;
    res.forEach(function (r) {
      if (r.ok) right++;
      var m = ex.querySelector('[data-mark="' + r.n + '"]');
      if (m) {
        m.className = 'mark ' + (r.ok ? 'ok' : 'no');
        m.setAttribute('title', r.ok ? 'Correct' : 'The book says: ' + r.want);
      }
    });
    var fb = ex.querySelector('.feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (right === res.length ? 'good' : (right ? '' : 'bad'));
    var wrong = res.filter(function (r) { return !r.ok; });
    fb.innerHTML = '<strong>' + right + ' of ' + res.length + ' correct.</strong>' +
      (wrong.length ? '<ul class="answers">' + wrong.map(function (r) {
        return '<li><span class="num">' + r.n + '</span> ' + esc(r.want) + '</li>';
      }).join('') + '</ul>' : ' Every one of them matches the book.');
    var i = ex.dataset.ex;
    state[slug + '/' + i] = { correct: right, of: res.length };
    save();
  }

  /* ---------------------------------------------------------------- the page */
  var videos = (page.videos || []).length ? '<section class="videos"><div class="eyebrow">Watch</div>' +
    '<p class="small">This part is also taught as a video lesson.</p><ul>' +
    page.videos.map(function (v) {
      return '<li><span class="vid">' + esc(v.id) + '</span> ' + esc(v.title) + '</li>';
    }).join('') + '</ul></section>' : '';

  root.innerHTML =
    '<header class="hero"><div class="eyebrow">Unit ' + UNIT + ' · ' + esc(D.title.split(':').pop().trim()) + '</div>' +
    '<h1>' + esc(page.title) + '</h1><p>' + esc(page.intro) + '</p></header>' +
    nav() + videos + stage() +
    (page.exercises || []).map(renderExercise).join('') +
    '<div class="controls"><a class="button secondary" href="' +
    (idx > 0 ? D.sections[idx - 1][0] + '.html' : 'index.html') + '">← Previous</a>' +
    '<a class="button" href="' + (idx < D.sections.length - 1 ? D.sections[idx + 1][0] + '.html' : 'index.html') +
    '">Next →</a></div>' + nav();

  /* restore drafts */
  root.querySelectorAll('textarea[data-in]').forEach(function (t) {
    var ex = t.closest('[data-ex]');
    var k = 'draft/' + slug + '/' + ex.dataset.ex + '/' + t.dataset.in;
    if (state[k]) t.value = state[k];
    t.addEventListener('input', function () { state[k] = t.value; save(); });
  });

  root.addEventListener('click', function (ev) {
    var t = ev.target;
    var ex = t.closest('[data-ex]');

    if (t.matches('.chip')) {                                   /* move a token in or out */
      var box = t.closest('.tokens');
      var n = box.dataset.item;
      var inBank = !!t.closest('[data-bank]');
      var dest = box.querySelector(inBank ? '[data-target="' + n + '"]' : '[data-bank="' + n + '"]');
      var li = document.createElement('li');
      li.appendChild(t);
      dest.appendChild(li);
      t.focus();
      return;
    }
    if (!ex) return;
    var i = Number(ex.dataset.ex), e = page.exercises[i];

    if (t.matches('.opt')) {
      /* FIX 4: choosing is not marking. v1 revealed the verdict on click, so the first touch ended the
         question; here the choice is recorded and nothing is told until Check. */
      ex.querySelectorAll('.opt[data-item="' + t.dataset.item + '"]').forEach(function (o) {
        o.classList.remove('selected'); o.setAttribute('aria-pressed', 'false');
      });
      t.classList.add('selected'); t.setAttribute('aria-pressed', 'true');
      return;
    }
    if (t.matches('[data-model]')) {
      var p = ex.querySelector('[data-modeltext="' + t.dataset.model + '"]');
      if (p) { p.hidden = !p.hidden; t.textContent = p.hidden ? 'Show the book’s answer' : 'Hide the answer'; }
      return;
    }
    if (t.matches('[data-reset]')) {
      ex.querySelectorAll('input,textarea,select').forEach(function (x) {
        if (x.type === 'checkbox') x.checked = false; else if (x.tagName === 'SELECT') x.selectedIndex = 0; else x.value = '';
      });
      ex.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('selected'); o.setAttribute('aria-pressed', 'false'); });
      ex.querySelectorAll('.mark').forEach(function (m) { m.className = 'mark'; m.removeAttribute('title'); });
      ex.querySelectorAll('.target .chip').forEach(function (c) {
        var box = c.closest('.tokens'), li = document.createElement('li');
        li.appendChild(c); box.querySelector('[data-bank]').appendChild(li);
      });
      ex.querySelector('.feedback').hidden = true;
      return;
    }
    if (t.matches('[data-check-answer]')) show(ex, e, grade(e, ex));
  });

  /* ---------------------------------------------------------------- audio */
  (function () {
    var groups = AUD[slug] || [];
    if (!groups.length) return;
    var audio = root.querySelector('[data-audio]');
    var stageEl = root.querySelector('#stage');
    var rate = root.querySelector('[data-rate]');
    var setSel = root.querySelector('[data-set]');
    var arBtn = root.querySelector('[data-ar]');
    var gi = 0, li = 0, playing = false;

    function lines() { return root.querySelectorAll('.track[data-track="' + gi + '"] .line'); }
    function quiet() {
      stageEl && stageEl.querySelectorAll('.person').forEach(function (p) { p.classList.remove('talk'); });
      root.querySelectorAll('.line.active').forEach(function (p) { p.classList.remove('active'); });
    }
    function play(n) {
      var g = groups[gi];
      if (!g || n >= g.clips.length) { playing = false; quiet(); return; }
      li = n;
      var c = g.clips[n];
      audio.src = c.src;
      audio.playbackRate = Number(rate.value) || 1;
      quiet();
      var p = stageEl && [].slice.call(stageEl.querySelectorAll('.person')).filter(function (x) {
        return x.dataset.name === c.speaker;
      })[0];
      if (p) p.classList.add('talk');
      var el = lines()[n];
      if (el) { el.classList.add('active'); el.scrollIntoView({ block: 'nearest' }); }
      playing = true;
      var q = audio.play();
      if (q && q.catch) q.catch(function () { playing = false; quiet(); });
    }
    audio.addEventListener('ended', function () { if (playing) play(li + 1); });
    audio.addEventListener('pause', function () { if (!audio.ended) { playing = false; quiet(); } });
    root.querySelector('[data-play]').onclick = function () { play(li >= (groups[gi].clips.length) ? 0 : li); };
    root.querySelector('[data-pause]').onclick = function () {
      if (audio.paused && audio.src) { playing = true; audio.play().catch(function () { }); } else audio.pause();
    };
    root.querySelector('[data-stop]').onclick = function () { audio.pause(); audio.currentTime = 0; li = 0; playing = false; quiet(); };
    rate.addEventListener('change', function () { audio.playbackRate = Number(rate.value) || 1; });
    if (setSel) setSel.addEventListener('change', function () {
      audio.pause(); playing = false; quiet();
      gi = Number(setSel.value) || 0; li = 0;
      root.querySelectorAll('.track').forEach(function (t, i) { t.hidden = (i !== gi); });
    });
    if (arBtn) arBtn.addEventListener('click', function () {
      var on = arBtn.getAttribute('aria-pressed') === 'true';
      arBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
      root.querySelectorAll('.line .ar').forEach(function (s) { s.hidden = on; });
    });
    root.addEventListener('click', function (ev) {
      var p = ev.target.closest('.line');
      if (!p) return;
      playing = false;                       /* one line, on its own, and then stop */
      play(Number(p.dataset.line));
      playing = false;
    });
    root.addEventListener('keydown', function (ev) {
      var p = ev.target.closest && ev.target.closest('.line');
      if (p && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); playing = false; play(Number(p.dataset.line)); playing = false; }
    });
  })();
})();
