/* The Al-Hasan lesson renderer, v3.

   WHAT IT PUTS ON A PAGE, and why each part is there.

   THE BOOK'S OWN EXERCISE, item by item, marked against the book's own answer key. Eighteen widget types,
   because the book has eighteen kinds of question; the first version of this site had seven, and the
   difference is why nearly half of it had turned into multiple choice.

   A PICTURE ON EVERY EXERCISE, composed from drawings of the things the book talks about. Not decoration:
   the object is chosen because its own name occurs in that exercise's text, and gates/ah_site_art refuses
   a picture that cannot be traced to the words beside it.

   ARABIC ON A BUTTON. The instruction, the worked example and the model answer, translated by hand. The
   content stays in English, because the content is what the learner came for; the instruction is the door
   they have to get through first.

   TWO KINDS OF SOUND. The readings and dialogues are pre-recorded Piper mp3s - the lesson itself, the same
   for everybody, offline. Everything a learner might want to HEAR rather than read - a revealed answer, a
   prompt, a sample conversation, the Arabic - is spoken by the device through assets/v2/speak.js. Nothing
   crosses that seam: gates/ah_site_speech fails the page if Check ever plays an mp3, or if a reading is
   ever read by the device.

   SCAFFOLDING, because a learner alone has no teacher. Every exercise carries a line on how to do it;
   every speaking task a worked conversation it can perform; every discussion prompt a model answer; every
   writing task a sample that types itself out beside their own attempt.

   Six defects of v1 are fixed and each is marked at the line that fixes it.  */
(function () {
  var A = window.AHB, esc = A.esc;
  var body = document.body;
  var UNIT = Number(body.dataset.unit);
  var slug = body.dataset.slug;
  var D = A.units[UNIT];
  var AUD = (A.audioData[UNIT] || {});
  var root = document.getElementById('app');
  if (!D || !root) return;

  /* The object sprite is injected once, so every picture below is a same-document <use href="#o-...">.
     An external reference would not resolve from a file:// URL, and these pages must run from a stick. */
  if (A.spriteSVG && !document.getElementById('ahb-sprite')) {
    var holder = document.createElement('div');
    holder.id = 'ahb-sprite';
    holder.style.display = 'none';
    holder.innerHTML = A.spriteSVG;
    document.body.insertBefore(holder, document.body.firstChild);
  }

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
      '<p>Twelve sections and ' + totalItems + ' questions, every one of them from the book.</p>' +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<p class="small">' + doneItems + ' of ' + totalItems + ' answered correctly on this device.</p>' +
      '</header><div class="grid">' +
      D.sections.map(function (s, i) {
        var p = D.pages[s[0]];
        var vids = (p.videos || []).length;
        return '<article class="card"><div class="eyebrow">' + label(i) + '</div>' +
          '<h2>' + esc(s[1]) + '</h2><p>' + esc(s[2]) + '</p>' +
          '<p class="small">' + (p.exercises || []).length + ' activities' +
          (vids ? ' · ' + vids + ' video' + (vids > 1 ? 's' : '') : '') + '</p>' +
          '<a class="button" href="' + s[0] + '.html">Open section</a></article>';
      }).join('') + '</div>';
    return;
  }
  if (!page) return;

  /* ---------------------------------------------------------------- the story stage */
  function stage() {
    var groups = AUD[slug] || [];
    if (!groups.length) return '';
    var names = {};
    groups.forEach(function (g) { g.clips.forEach(function (c) { names[c.speaker] = 1; }); });
    /* FIX 6: a speaker with no drawing is reported, not skipped. v1 looked the person up and carried on
       with undefined, so the clip played against a motionless stage and nothing said why. */
    var people = Object.keys(names).map(function (n) {
      var c = A.castData[n];
      if (!c) return '<div class="person missing" data-name="' + esc(n) + '">' +
        '<div class="nofacewarn">no drawing for ' + esc(n) + '</div></div>';
      return '<div class="person" data-name="' + esc(n) + '">' + c.svg +
        '<div class="who">' + esc(n) + '</div></div>';
    }).join('');
    var hasAr = groups.some(function (g) { return g.clips.some(function (c) { return c.ar; }); });
    return '<section class="story"><div class="eyebrow">Read and listen</div>' +
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
      '<p class="small">Click any line to hear just that line. These are recordings, and they work offline.</p>' +
      '</section>';
  }

  /* ---------------------------------------------------------------- pieces of an exercise */
  function picture(e) {
    if (!e.scene || !e.scene.length) return '';
    return '<div class="scene" aria-hidden="true">' + e.scene.map(function (s) {
      return '<svg viewBox="0 0 100 100" class="obj"><use href="#o-' + esc(s.obj) + '"/></svg>';
    }).join('') + '</div>';
  }

  function speakBtn(text, cls, lang) {
    return '<button type="button" class="hear ' + (cls || '') + '" data-hear="' + esc(text) + '"' +
      (lang ? ' data-hearlang="' + lang + '"' : '') + ' title="Read this aloud" aria-label="Read aloud">' +
      '▶︎</button>';
  }

  function itemHead(it) { return '<span class="num">' + it.n + '</span>'; }
  function slotInput(it) {
    return '<input class="slot" data-in="' + it.n + '" aria-label="Answer ' + it.n +
      '" autocomplete="off" autocapitalize="off" spellcheck="false">';
  }
  function chips(list, cls) {
    return '<ul class="bank ' + (cls || '') + '">' + list.map(function (w) {
      return '<li>' + esc(w) + '</li>';
    }).join('') + '</ul>';
  }
  function pick(it, opts) {
    return '<div class="opts" role="group" aria-label="Answer ' + it.n + '">' + opts.map(function (o) {
      return '<button type="button" class="opt" data-item="' + it.n + '" data-val="' + esc(o.v) +
        '" aria-pressed="false">' + esc(o.t) + '</button>';
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

  var GRADED = {
    'truefalse': 1, 'two-label': 1, 'mcq': 1, 'odd-one-out': 1, 'match': 1, 'gap-fill': 1,
    'listen-gap': 1, 'wordbank-cloze': 1, 'find-word': 1, 'error-correct': 1, 'transform': 1,
    'sentence-order': 1, 'message-order': 1, 'classify-columns': 1
  };

  function renderExercise(e, i) {
    var b = '', items = e.items || [];

    if (e.type === 'truefalse' || e.type === 'two-label') {
      var L = e.labels || [{ v: 'T', t: 'True' }, { v: 'F', t: 'False' }];
      b = items.map(function (it) {
        return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          speakBtn(it.prompt) + pick(it, L) +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'mcq') {
      b = items.map(function (it) {
        var keys = Object.keys(it.options || {});
        var opts = keys.map(function (k) {
          return { v: k, t: (k === it.options[k]) ? it.options[k] : (k + ') ' + it.options[k]) };
        });
        var q = esc(it.prompt).replace(/␣/g, '<span class="gapmark">&nbsp;&nbsp;&nbsp;</span>');
        return '<div class="row col">' + itemHead(it) + '<span class="q">' + q + '</span>' +
          pick(it, opts) + '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'odd-one-out') {
      b = items.map(function (it) {
        return '<div class="row col">' + itemHead(it) +
          pick(it, (it.options || []).map(function (o) { return { v: o, t: o }; })) +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'match') {
      /* FIX 2: the options are shuffled, and the pool is the whole option list - longer than the number
         of rows when the book says "there is one you do not need". v1 compared the chosen index with the
         row index, so the answer was always the option printed on the same line. */
      var pool = A.shuffle(Object.keys(e.pool || {}));
      b = items.map(function (it) {
        return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.prompt) + '</span>' +
          '<select data-in="' + it.n + '" aria-label="Match for ' + esc(it.prompt) + '">' +
          '<option value="">Choose…</option>' + pool.map(function (k) {
            return '<option value="' + esc(k) + '">' + esc(k) + ') ' + esc(e.pool[k]) + '</option>';
          }).join('') + '</select><span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'classify-columns') {
      var cols = e.columns || [];
      b = '<p class="small">Columns: ' + cols.map(esc).join(' · ') + '</p>' +
        items.map(function (it) {
          return '<div class="row">' + itemHead(it) + '<span class="q">' + esc(it.word) + '</span>' +
            '<select data-in="' + it.n + '" aria-label="Column for ' + esc(it.word) + '">' +
            '<option value="">Choose a column…</option>' + cols.map(function (c) {
              return '<option value="' + esc(c) + '">' + esc(c) + '</option>';
            }).join('') + '</select><span class="mark" data-mark="' + it.n + '"></span></div>';
        }).join('');

    } else if (e.type === 'gap-fill' || e.type === 'listen-gap') {
      /* FIX 1: every gap is replaced, not the first. v1 called String.replace with a string pattern,
         which replaces once, so a sentence's second gap was never drawn at all. */
      b = (e.bank ? chips(e.bank, 'hint') : '') + items.map(function (it) {
        var parts = String(it.prompt).split('␣');
        var html = esc(parts[0]);
        for (var k = 1; k < parts.length; k++) html += slotInput(it) + esc(parts[k]);
        return '<div class="row">' + itemHead(it) + '<span class="q">' + html + '</span>' +
          '<span class="mark" data-mark="' + it.n + '"></span></div>';
      }).join('');

    } else if (e.type === 'wordbank-cloze') {
      var text = esc(e.text || '').replace(/\(\s*(\d+)\s*\)\s*_{3,}/g, function (_m, gnum) {
        return '<input class="slot" data-in="' + gnum + '" aria-label="Gap ' + gnum + '" autocomplete="off">';
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

    } else if (e.type === 'error-correct' || e.type === 'transform') {
      b = items.map(function (it) {
        var src = (e.type === 'error-correct') ? it.wrong : it.prompt;
        return '<div class="row col">' + itemHead(it) +
          '<span class="q' + (e.type === 'error-correct' ? ' wrong' : '') + '">' + esc(src) + '</span>' +
          (it.cue ? '<span class="cue">(' + esc(it.cue) + ')</span>' : '') +
          speakBtn(src) +
          '<input class="slot wide" data-in="' + it.n + '" aria-label="Your sentence ' + it.n +
          '" autocomplete="off">' +
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
          speakBtn(it.prompt) +
          '<textarea class="short" data-in="' + it.n + '" rows="2" aria-label="Answer ' + it.n + '"></textarea>' +
          (it.model ? '<button type="button" class="secondary tiny" data-model="' + it.n + '">' +
            'Show the book’s answer</button>' +
            '<p class="model" data-modeltext="' + it.n + '" hidden><span class="mt">' + esc(it.model) +
            '</span>' + speakBtn(it.model) + '</p>' : '') +
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
          speakBtn(it.prompt) +
          '<textarea class="long" data-in="' + it.n + '" rows="3" aria-label="Answer ' + it.n + '"></textarea>' +
          '</div>';
      }).join('');
    }

    /* ---- the scaffolding every exercise carries ---- */
    var extra = '';
    if (e.script && e.script.length) {
      extra += '<div class="scaff"><button type="button" class="tiny" data-theatre>' +
        '▶ Watch the sample conversation</button>' +
        '<span class="small">' + e.script.length + ' lines, played by ' +
        esc([].concat.apply([], e.script.map(function (l) { return l.who; }))
          .filter(function (v, k, a) { return a.indexOf(v) === k; }).join(' and ')) +
        '</span></div>';
    }
    if (e.responses && e.responses.length) {
      extra += '<div class="scaff"><button type="button" class="secondary tiny" data-resp>' +
        'Show model answers</button><ul class="model" data-resptext hidden>' +
        e.responses.map(function (r) {
          return '<li>' + esc(r) + speakBtn(r) + '</li>';
        }).join('') + '</ul></div>';
    }
    if (e.sample) {
      extra += '<div class="scaff"><button type="button" class="secondary tiny" data-sample>' +
        'Show a sample answer</button>' +
        '<div class="sampleBox" data-sampletext hidden><pre class="sample"></pre>' +
        speakBtn(e.sample) + '</div>' +
        '<script type="application/json" data-sampleraw>' + JSON.stringify(e.sample) + '<\/script></div>';
    }
    if ((D.frames || []).length && (e.type === 'open-writing' || e.type === 'roleplay-case' ||
      e.type === 'short-answer' || e.type === 'transform')) {
      extra += '<details class="frames"><summary>Sentence frames you can use</summary><ul>' +
        D.frames.map(function (f) { return '<li>' + esc(f) + speakBtn(f) + '</li>'; }).join('') +
        '</ul></details>';
    }

    var marked = GRADED[e.type] ? '<button type="button" data-check-answer>Check</button>' : '';
    var arbtn = e.ar ? '<button type="button" class="secondary tiny tr" data-tr aria-pressed="false">' +
      'عربي Translate</button>' : '';
    return '<section class="exercise" data-ex="' + i + '" data-type="' + e.type + '">' +
      '<div class="exhead"><span class="tag">' + esc(e.name) + '</span>' + arbtn +
      '<span class="small">book block ' + e.block + '</span></div>' +
      picture(e) +
      '<h2>' + esc(e.heading) + '</h2>' +
      (e.ar ? '<p class="arline" dir="rtl" lang="ar" hidden>' + esc(e.ar.heading) +
        speakBtn(e.ar.heading, 'arhear', 'ar') + '</p>' : '') +
      (e.hint ? '<p class="small instr">' + esc(e.hint) + '</p>' : '') +
      (e.example ? '<p class="example"><strong>Example:</strong> ' + esc(e.example.text) +
        speakBtn(e.example.text) + '</p>' : '') +
      b + extra +
      '<div class="controls">' + marked +
      '<button type="button" class="secondary" data-reset>Reset</button></div>' +
      '<div class="feedback" aria-live="polite" hidden></div></section>';
  }

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
      /* FIX 3: compared by TEXT, not by the id a token was created with, so two identical lines or two
         identical words both count - which is what a reader sees. */
      var got = tokensOf(ex, 1), want = e.order || [];
      var ok = got.length === want.length && got.every(function (t, i) { return A.norm(t) === A.norm(want[i]); });
      res.push({ n: 1, ok: ok, want: want.join('  →  ') });
    } else {
      (e.items || []).forEach(function (it) {
        var ok = false, want = it.answer;
        if (e.type === 'truefalse' || e.type === 'two-label' || e.type === 'mcq' || e.type === 'odd-one-out') {
          ok = A.matches(chosen(ex, it.n), it.answer);
        } else if (e.type === 'match') {
          ok = String(typed(ex, it.n)).toLowerCase() === String(it.answer).toLowerCase();
          want = (it.answer + ') ' + (e.pool || {})[it.answer]);
        } else if (e.type === 'classify-columns') {
          ok = A.norm(typed(ex, it.n)) === A.norm(it.answer);
        } else if (e.type === 'sentence-order') {
          ok = A.norm(tokensOf(ex, it.n).join(' ')) === A.norm(it.answer);
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
    /* THE ANSWERS CAN BE HEARD, AND BY THE DEVICE - never from an mp3. A revealed answer is text that
       did not exist when the page was built; recording all 2,345 of them would be pointless weight. */
    fb.innerHTML = '<strong>' + right + ' of ' + res.length + ' correct.</strong>' +
      (wrong.length
        ? '<ul class="answers">' + wrong.map(function (r) {
          return '<li><span class="num">' + r.n + '</span><span class="aw">' + esc(r.want) + '</span>' +
            speakBtn(r.want, 'ansHear') + '</li>';
        }).join('') + '</ul>' +
        '<button type="button" class="secondary tiny" data-sayall>▶ Read the answers aloud</button>'
        : ' Every one of them matches the book.');
    state[slug + '/' + ex.dataset.ex] = { correct: right, of: res.length };
    save();
  }

  /* ---------------------------------------------------------------- the page */
  var videos = (page.videos || []).length ? '<section class="videos"><div class="eyebrow">Watch</div>' +
    '<p class="small">This part is also taught as a video lesson.</p><ul>' +
    page.videos.map(function (v) {
      return '<li><span class="vid">' + esc(v.id) + '</span> ' + esc(v.title) + '</li>';
    }).join('') + '</ul></section>' : '';

  root.innerHTML =
    '<header class="hero"><div class="eyebrow">Unit ' + UNIT + ' · ' +
    esc(D.title.split(':').pop().trim()) + '</div>' +
    '<h1>' + esc(page.title) + '</h1><p>' + esc(page.intro) + '</p></header>' +
    nav() + videos + stage() +
    (page.exercises || []).map(renderExercise).join('') +
    '<div class="controls"><a class="button secondary" href="' +
    (idx > 0 ? D.sections[idx - 1][0] + '.html' : 'index.html') + '">← Previous</a>' +
    '<a class="button" href="' + (idx < D.sections.length - 1 ? D.sections[idx + 1][0] + '.html' : 'index.html') +
    '">Next →</a></div>' + nav();

  root.querySelectorAll('textarea[data-in]').forEach(function (t) {
    var ex = t.closest('[data-ex]');
    var k = 'draft/' + slug + '/' + ex.dataset.ex + '/' + t.dataset.in;
    if (state[k]) t.value = state[k];
    t.addEventListener('input', function () { state[k] = t.value; save(); });
  });

  /* A sample that simply appears is read as wallpaper. One that writes itself out is watched, and the
     learner sees it being built a phrase at a time - which is the thing being taught. */
  function typeOut(pre, text) {
    pre.textContent = '';
    var i = 0, step = Math.max(1, Math.round(text.length / 160));
    (function tick() {
      if (i >= text.length) return;
      i = Math.min(text.length, i + step);
      pre.textContent = text.slice(0, i);
      setTimeout(tick, 16);
    })();
  }

  root.addEventListener('click', function (ev) {
    var t = ev.target.closest('button') || ev.target;

    if (t.matches && t.matches('.hear')) {
      var lang = t.dataset.hearlang || 'en';
      if (!A.say.speak(t.dataset.hear, { lang: lang })) {
        var why = A.say.why();
        if (why) { t.title = why; t.classList.add('mute'); }
      }
      return;
    }
    var ex = t.closest && t.closest('[data-ex]');
    if (!ex) return;
    var i = Number(ex.dataset.ex), e = page.exercises[i];

    if (t.matches('[data-tr]')) {
      var on = t.getAttribute('aria-pressed') === 'true';
      t.setAttribute('aria-pressed', on ? 'false' : 'true');
      ex.querySelectorAll('.arline').forEach(function (p) { p.hidden = on; });
      return;
    }
    if (t.matches('[data-theatre]')) { A.theatre(ex, e.script, e.heading); return; }
    if (t.matches('[data-resp]')) {
      var ul = ex.querySelector('[data-resptext]');
      ul.hidden = !ul.hidden;
      t.textContent = ul.hidden ? 'Show model answers' : 'Hide model answers';
      return;
    }
    if (t.matches('[data-sample]')) {
      var boxEl = ex.querySelector('[data-sampletext]');
      var pre = boxEl.querySelector('.sample');
      boxEl.hidden = !boxEl.hidden;
      t.textContent = boxEl.hidden ? 'Show a sample answer' : 'Hide the sample';
      if (!boxEl.hidden) typeOut(pre, e.sample);
      return;
    }
    if (t.matches('[data-sayall]')) {
      var lines = [].slice.call(ex.querySelectorAll('.answers .ansHear'))
        .map(function (bn) { return { text: bn.dataset.hear, lang: 'en' }; });
      A.say.sequence(lines);
      return;
    }
    if (t.matches('.chip')) {
      var boxT = t.closest('.tokens'), n = boxT.dataset.item;
      var inBank = !!t.closest('[data-bank]');
      var dest = boxT.querySelector(inBank ? '[data-target="' + n + '"]' : '[data-bank="' + n + '"]');
      var li = document.createElement('li');
      li.appendChild(t); dest.appendChild(li); t.focus();
      return;
    }
    if (t.matches('.opt')) {
      /* FIX 4: choosing is not marking. v1 revealed the verdict on click, so the first touch ended the
         question; here the choice is recorded and nothing is said until Check. */
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
        if (x.type === 'checkbox') x.checked = false;
        else if (x.tagName === 'SELECT') x.selectedIndex = 0;
        else x.value = '';
      });
      ex.querySelectorAll('.opt').forEach(function (o) {
        o.classList.remove('selected'); o.setAttribute('aria-pressed', 'false');
      });
      ex.querySelectorAll('.mark').forEach(function (m) { m.className = 'mark'; m.removeAttribute('title'); });
      ex.querySelectorAll('.target .chip').forEach(function (c) {
        var bx = c.closest('.tokens'), li2 = document.createElement('li');
        li2.appendChild(c); bx.querySelector('[data-bank]').appendChild(li2);
      });
      ex.querySelector('.feedback').hidden = true;
      return;
    }
    if (t.matches('[data-check-answer]')) show(ex, e, grade(e, ex));
  });

  /* ---------------------------------------------------------------- audio (recordings) */
  (function () {
    var groups = AUD[slug] || [];
    if (!groups.length) return;
    var audio = root.querySelector('[data-audio]');
    var stageEl = root.querySelector('#stage');
    var rate = root.querySelector('[data-rate]');
    var setSel = root.querySelector('[data-set]');
    var arBtn = root.querySelector('.story [data-ar]');
    var gi = 0, li = 0, playing = false;

    function lines() { return root.querySelectorAll('.track[data-track="' + gi + '"] .line'); }
    function quiet() {
      if (stageEl) stageEl.querySelectorAll('.person').forEach(function (p) { p.classList.remove('talk'); });
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
    root.querySelector('[data-play]').onclick = function () {
      play(li >= groups[gi].clips.length ? 0 : li);
    };
    root.querySelector('[data-pause]').onclick = function () {
      if (audio.paused && audio.src) { playing = true; audio.play().catch(function () { }); } else audio.pause();
    };
    root.querySelector('[data-stop]').onclick = function () {
      audio.pause(); audio.currentTime = 0; li = 0; playing = false; quiet();
    };
    rate.addEventListener('change', function () { audio.playbackRate = Number(rate.value) || 1; });
    if (setSel) setSel.addEventListener('change', function () {
      audio.pause(); playing = false; quiet();
      gi = Number(setSel.value) || 0; li = 0;
      root.querySelectorAll('.track').forEach(function (tk, k) { tk.hidden = (k !== gi); });
    });
    if (arBtn) arBtn.addEventListener('click', function () {
      var on = arBtn.getAttribute('aria-pressed') === 'true';
      arBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
      root.querySelectorAll('.line .ar').forEach(function (s) { s.hidden = on; });
    });
    root.addEventListener('click', function (ev) {
      var p = ev.target.closest('.line');
      if (!p) return;
      playing = false; play(Number(p.dataset.line)); playing = false;
    });
    root.addEventListener('keydown', function (ev) {
      var p = ev.target.closest && ev.target.closest('.line');
      if (p && (ev.key === 'Enter' || ev.key === ' ')) {
        ev.preventDefault(); playing = false; play(Number(p.dataset.line)); playing = false;
      }
    });
  })();
})();
