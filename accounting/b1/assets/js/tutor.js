/* ============================================================
   tutor.js — the writing tutor on a `writer` card.

   WHAT PROBLEM THIS SOLVES. The course has writing tasks that nobody marks. A learner
   writes 120 words about a variance, presses Check answers, and is told the word count
   is sufficient. For the five tasks per unit where the book supplies a model answer
   that is enough to compare against; for the other five it is not, and the gate
   tools/check-render.py R7 names them: "a writing task with no feedback of any kind".

   WHAT IT DOES. A "Check my writing" button sends the learner's text to Gemini with
   THEIR OWN key, together with the task, the grammar point this unit teaches, who the
   piece is for, what it must contain, and the book's model answer where there is one.
   It returns feedback on four fixed axes and nothing else.

   THE RULES IT IS BUILT UNDER, and each is enforced in code below, not just promised:

   1. IT NEVER SCORES. The system prompt forbids a mark, grade, percentage, star
      rating or "x out of y", and `scrub()` removes one if the model produces it
      anyway. A number from a language model would look like a mark and would not be
      one, and a learner cannot tell the difference by looking.

   2. THE PROMPT IS PINNED TO THE TASK. The model is given the task, the grammar
      point, the reader and the must-haves, and is told to judge against those and the
      book's model answer rather than against its own idea of good English. An
      unpinned tutor rewrites a correct B1 answer into a C1 one and calls the original
      wrong.

   3. IT IS NEVER THE ONLY FEEDBACK. The model answer and the book's checklist stay on
      the card. With no key, the card works exactly as it did before and the button is
      the only thing that disappears - so the feature cannot become a dependency.

   4. THE KEY NEVER LEAVES THE BROWSER. It is held by Keyring (sessionStorage by
      default) and sent to Google in the `x-goog-api-key` HEADER by gemini.js, never
      in a URL. This course is a static site with no server of its own to send it to.

   5. IT SAYS WHAT IT IS. A line under every answer states that this is a second
      opinion from a machine that is confidently wrong often enough to check, and that
      the book's model answer is the authority. That line is not dismissible.

   WHAT IT CANNOT DO. It cannot mark. Two learners with the same answer may get
   different wording back, and the same learner asking twice may too. It is a reader,
   not an examiner.
   ============================================================ */
(function (w) {
  'use strict';
  var EAFM = w.EAFM = w.EAFM || {};
  var U = EAFM.util || {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function el(tag, cls, html) {
    var n = w.document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function words(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }

  /* The four axes, fixed. They are fixed so that the feedback is comparable between
     tasks and between learners, and so a learner knows what they are about to be told
     before they press the button. */
  var AXES = [
    { k: 'task', t: 'Did you answer the task?' },
    { k: 'grammar', t: 'Did you use this unit’s grammar?' },
    { k: 'register', t: 'Is it right for the reader?' },
    { k: 'fixes', t: 'The two or three corrections that matter most' }
  ];

  var SYSTEM =
    'You are a careful, kind writing tutor for a CEFR B1 learner of English who works ' +
    'in finance for an NGO. You are given a writing task, the grammar point the unit ' +
    'teaches, who the piece is written for, a list of things the piece must contain, ' +
    'and often the coursebook’s own model answer. Then you are given what the ' +
    'learner wrote.\n\n' +
    'Judge the learner’s writing against THOSE THINGS ONLY. Do not judge it ' +
    'against your own idea of good English, and do not rewrite B1 English into C1 ' +
    'English. If the learner has answered the task in simple, correct language, say ' +
    'so plainly.\n\n' +
    'Reply with EXACTLY these four headings, in this order, and nothing before or ' +
    'after them:\n' +
    '### Task\n### Grammar\n### Reader\n### Fixes\n\n' +
    'Under Task, say whether each required element is present, naming the ones that ' +
    'are missing. Under Grammar, say whether the unit’s grammar point is used, ' +
    'and quote one sentence of the learner’s that uses it well or badly. Under ' +
    'Reader, say in one or two sentences whether the tone and the choice of ' +
    'information suit the named reader. Under Fixes, give AT MOST THREE corrections ' +
    'as a markdown list, each one quoting the learner’s own words and then the ' +
    'correction, shortest first.\n\n' +
    'ABSOLUTE RULES. Never give a score, mark, grade, percentage, band, level, star ' +
    'rating or any "x out of y". Never say the writing is excellent, good, poor or ' +
    'bad as an overall verdict - describe what is there instead. Never invent a ' +
    'requirement that is not in the task. Never comment on the learner as a person. ' +
    'Keep the whole reply under 250 words. Write in plain English a B1 learner can ' +
    'read, and address the learner as "you".';

  /* A mark the model produced anyway. The rule is in the prompt AND here, because a
     prompt is a request and this is the guarantee. */
  function scrub(t) {
    return String(t || '')
      .replace(/\b\d{1,3}\s*(?:\/|out of)\s*\d{1,3}\b/gi, 'that part')
      .replace(/\b\d{1,3}\s?%/g, 'some')
      .replace(/\b(?:score|grade|mark|band)\s*[:=]\s*\S+/gi, '')
      .replace(/★+/g, '');
  }

  /* A very small markdown renderer: headings, bullets, bold, italics, inline code.
     Everything is escaped FIRST, so nothing the model returns can inject markup.

     It calls the stripper through EAFM.tutor._scrub rather than through the local
     `scrub` directly, so tools/check-tutor.py can replace it with the identity and
     prove that check T6 really fails when the guarantee is removed. A gate whose
     plant cannot reach the code it is testing is not a plant. */
  function render(md) {
    var out = [], list = null;
    var strip = (EAFM.tutor && EAFM.tutor._scrub) || scrub;
    strip(md).split(/\r?\n/).forEach(function (raw) {
      var line = raw.trim();
      if (!line) { if (list) { out.push('</ul>'); list = null; } return; }
      var h = /^#{2,4}\s*(.+)$/.exec(line);
      if (h) {
        if (list) { out.push('</ul>'); list = null; }
        out.push('<h5 class="tut-h">' + inline(h[1]) + '</h5>');
        return;
      }
      var b = /^[-*•]\s+(.+)$/.exec(line);
      if (b) {
        if (!list) { out.push('<ul class="tut-l">'); list = 1; }
        out.push('<li>' + inline(b[1]) + '</li>');
        return;
      }
      if (list) { out.push('</ul>'); list = null; }
      out.push('<p>' + inline(line) + '</p>');
    });
    if (list) out.push('</ul>');
    return out.join('');
  }
  function inline(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|\s)\*([^*]+)\*/g, '$1<i>$2</i>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  /* `model` falls back to the card's own `model` — the book's model answer, which
     EX.writer already prints at the top of the card. Copying it into the aiCheck
     block as well would be a second copy of the author's text to drift from the
     first, and check-book verifies the card's one against the .docx. */
  function brief(cfg, text, card) {
    var L = [];
    cfg = cfg || {};
    if (!cfg.model && card && card.model) cfg.model = card.model;
    L.push('TASK: ' + cfg.task);
    L.push('THE GRAMMAR THIS UNIT TEACHES: ' + cfg.grammar);
    if (cfg.reader) L.push('WRITTEN FOR: ' + cfg.reader);
    if (cfg.must && cfg.must.length) {
      L.push('THE PIECE MUST CONTAIN:');
      cfg.must.forEach(function (m) { L.push('  - ' + m); });
    }
    if (cfg.model) {
      L.push('');
      L.push('THE COURSEBOOK’S OWN MODEL ANSWER (the standard to compare with, ' +
             'not a text to copy):');
      L.push(cfg.model);
    }
    L.push('');
    L.push('WHAT THE LEARNER WROTE:');
    L.push(text);
    return L.join('\n');
  }

  EAFM.tutor = {

    /* The score-stripper, exposed so a gate can remove it and watch T6 fail. */
    _scrub: scrub,

    /* Mounted at the end of buildActivity(), so it survives Try again rebuilding the
       activity. `card._getText` is set by EX.writer; without it there is nothing to
       check and the panel does not appear at all. */
    mount: function (host, card) {
      var cfg = card.aiCheck;
      if (!cfg || !cfg.task) return;

      var box = el('div', 'tutor');
      var head = el('div', 'tutor-head');
      head.innerHTML = '<b>Check my writing</b>';
      box.appendChild(head);

      var note = el('p', 'wc tutor-note');
      box.appendChild(note);

      var row = el('div', 'btn-row');
      var go = el('button', 'btn btn-sm btn-primary', 'Check my writing');
      go.type = 'button';
      var keyb = el('button', 'btn btn-sm btn-ghost', 'Use my Gemini key');
      keyb.type = 'button';
      row.appendChild(go); row.appendChild(keyb);
      box.appendChild(row);

      var out = el('div', 'tutor-out');
      out.style.display = 'none';
      box.appendChild(out);

      var honest = el('p', 'wc tutor-honest');
      honest.innerHTML =
        'This is a second opinion from a language model, not a mark. It is ' +
        'confidently wrong often enough to be worth checking, and it never scores ' +
        'your work. Where the book prints a model answer, the book is the authority.';
      box.appendChild(honest);

      host.appendChild(box);

      var K = w.Keyring;
      function refresh() {
        var has = K && K.has();
        keyb.textContent = has ? ('Key: ' + K.hint()) : 'Use my Gemini key';
        go.disabled = !has;
        note.innerHTML = has
          ? 'Write your answer above, then press <b>Check my writing</b>. You will get ' +
            'feedback on four things: whether you answered the task, whether you used ' +
            'this unit’s grammar, whether it suits the reader, and the two or ' +
            'three corrections that matter most.'
          : 'This card can send what you write to Google’s Gemini for feedback, ' +
            'using <b>your own free API key</b>. Nothing is sent anywhere until you ' +
            'add one, and the key is kept in this browser only. Everything else on ' +
            'this card works without it.';
      }

      keyb.onclick = function () {
        if (!K) return;
        if (K.has() && !w.confirm('A key is already stored (' + K.hint() +
            '). Replace it?')) { return; }
        var v = w.prompt('Paste your Google AI Studio API key.\n\n' +
          'It is sent only to Google, from this browser, in a request header. ' +
          'It is not stored on any server and it is forgotten when you close this ' +
          'tab unless you have chosen to remember it elsewhere on the site.');
        if (v == null) return;
        if (!K.looksLikeAKey(v)) {
          w.alert('That does not look like a key: a key is one long run of ' +
                  'characters with no spaces in it.');
          return;
        }
        K.set(v, false);
        refresh();
      };

      go.onclick = function () {
        var text = card._getText ? card._getText() : '';
        var n = words(text);
        var min = Math.max(20, Math.round((card.minWords || 40) * 0.6));
        out.style.display = 'block';
        if (n < min) {
          out.innerHTML = '<p class="wc">Write a little more first — there are ' +
            n + ' words, and the tutor needs about ' + min +
            ' before it can say anything useful about them.</p>';
          return;
        }
        if (!w.GeminiProvider) {
          out.innerHTML = '<p class="wc">The tutor could not load on this page.</p>';
          return;
        }
        out.innerHTML = '<p class="wc">Reading your ' + n + ' words…</p>';
        go.disabled = true;

        var P = new w.GeminiProvider({ keyring: K });
        P.askWithFailover({
          system: SYSTEM,
          prompt: brief(cfg, text, card),
          maxTokens: 700,
          temperature: 0.2,
          preferred: pref()
        }).then(function (res) {
          go.disabled = false;
          remember(res.model);
          out.innerHTML = render(res.text) +
            '<p class="wc tutor-meta">' + esc(res.model) + ' · ' +
            Math.round(res.ms) + ' ms · your ' + n + ' words are not saved ' +
            'anywhere by this feature</p>';
        }, function (e) {
          go.disabled = false;
          out.innerHTML = '<p class="verdict show no">' +
            esc(String(e && e.message || e)) + '</p>';
        });
      };

      function pref() {
        try { return w.localStorage.getItem('la.gemini.model') || ''; }
        catch (err) { return ''; }
      }
      function remember(mdl) {
        try { if (mdl) w.localStorage.setItem('la.gemini.model', mdl); }
        catch (err) { /* private mode */ }
      }

      refresh();
    }
  };
}(window));
