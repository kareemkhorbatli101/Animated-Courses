/* ============================================================
   tutor.js — the per-question IELTS tutor, on the learner's own Gemini key.

   REWRITTEN 2026-11-12, after the owner ran the first version with his own key and read what came
   back. It worked and it was not what he wanted, which is the only kind of feedback worth having
   about a feature like this. Six things were wrong with it and each is fixed below by a named
   change rather than by a longer prompt.

   1. IT WAS TOLD TO USE THE BAND DESCRIPTORS AND NOT GIVEN THEM. "Judge against the IELTS public
      band descriptors" asks a model to apply a document it has not seen, so it applies its
      impression of one. The descriptors now go IN, as data this course owns (descriptors.js), and
      only the criterion being judged — forty lines, not four hundred, because a model handed the
      whole rubric starts quoting the rubric instead of the candidate.

   2. IT MARKED EVERY CANDIDATE AGAINST THE BEST ONE. The book is a deliberate spread from 6.5 to
      8.0, and the model answer on the page is at the band of ITS test. Comparing a 6.5 answer
      with a band 8 model is how a tutor becomes harsh for no reason anybody can see. The model
      answer now travels with its own band.

   3. IT DID NOT KNOW WHO IT WAS TALKING TO. The learner is an Arabic speaker. There is a short
      list of interference patterns worth naming — and a longer list of things that must NOT be
      marked, which matters more: an Arabic-influenced word order that is still correct English, a
      Syrian reference, a British spelling. A tutor that "corrects" correct English teaches a
      learner to distrust their own ear.

   4. IT MARKED PERFECTION RATHER THAN THE GAP. The learner says what band they are aiming at and
      the feedback is pitched at the distance between here and there.

   5. IT DESCRIBED AND DID NOT TEACH. Every marking now ends in one drill: sixty seconds, today,
      aimed at the single biggest loss. "Your range is narrow" is a diagnosis. "Say these three
      answers again and start each with a different word" is a lesson.

   6. IT ANSWERED IN ENGLISH ONLY. The explanations are now available in Arabic behind a switch.
      The CORRECTIONS AND QUOTATIONS STAY IN ENGLISH, always: they are the English being taught,
      and translating the evidence destroys the thing it is evidence of.

   AND IT COULD NOT BE ASKED A FOLLOW-UP. It can now. See CHAT below.

   WHAT HAS NOT CHANGED, because the owner settled it already: a band RANGE and never a point; a
   disclaimer that is not dismissible; and no pronunciation band, because this is reading a
   transcript and the one thing worse than no pronunciation band is a confident one.
   ============================================================ */
(function (w) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};

  /* ------------------------------------------------------------------ who is speaking */
  var CANDIDATE =
    'THE CANDIDATE. A Syrian adult whose first language is Arabic, preparing for IELTS Speaking '
    + 'in Damascus. English is their third or fourth skill, not their weakest and not their '
    + 'first.\n'
    + '\n'
    + 'PATTERNS WORTH NAMING when you see them, because they cost band and are fixable:\n'
    + '  - the articles: a/an/the dropped or added, because Arabic has no indefinite article\n'
    + '  - the present-tense "to be" dropped: "he very tired", "the room big"\n'
    + '  - /p/ and /b/ exchanged in writing of speech ("bark" for "park") - note it, do not dwell\n'
    + '  - a relative clause with a resumptive pronoun: "the man that I saw him"\n'
    + '  - "since" and "for" exchanged with the present perfect\n'
    + '  - an adjective after the noun, from Arabic order\n'
    + '\n'
    + 'DO NOT MARK ANY OF THESE AS ERRORS. This matters more than the list above, because a tutor '
    + 'that corrects correct English teaches a learner to distrust their own ear:\n'
    + '  - a sentence whose word order is Arabic-influenced but which is correct English\n'
    + '  - a Syrian or Arabic reference, place, dish or custom, named without explanation\n'
    + '  - British spelling and British idiom\n'
    + '  - starting a sentence with "and", "but" or "so" in SPEECH\n'
    + '  - a contraction, a filler, a false start or a self-correction: these are speech, and the '
    + 'descriptors expect them\n'
    + '  - formality that is higher than a native speaker would use. It is a style, not a fault.';

  /* ------------------------------------------------------------------ the output shape */
  function systemFor(box, target, arabic) {
    var crit = (w.IELTS.descriptors && w.IELTS.descriptors.forPrompt) || function () { return ''; };
    var L = [];
    L.push('You are an experienced IELTS Speaking examiner marking ONE answer and then teaching '
           + 'from it. You are reading a TRANSCRIPT.');
    L.push('');
    L.push(CANDIDATE);
    L.push('');
    L.push('THEY ARE AIMING AT BAND ' + target.toFixed(1) + '. Pitch everything at the distance '
           + 'between what they did and that, not at perfection. If they are already there, say '
           + 'so and show them what the next half band would need.');
    L.push('');
    L.push('THE STANDARD YOU ARE APPLYING, for each criterion in turn:');
    L.push('');
    ['fc', 'lr', 'gra'].forEach(function (k) { L.push(crit(k, target)); L.push(''); });
    L.push('ANSWER IN EXACTLY THIS SHAPE, with these headings and nothing before or after them:');
    L.push('');
    L.push('## Band range');
    L.push('One range spanning at least a whole band, written like 5.5-6.5. NEVER a single number.');
    L.push('Then one sentence saying what holds it down and one saying what would lift it.');
    L.push('If the answer is too short to judge - under about twenty words for a Part 1 answer, '
           + 'or seventy for a Part 2 long turn - write exactly "Not enough to judge" instead of '
           + 'a range, say how much more you need, and stop. Do not invent a band from nine words.');
    L.push('');
    L.push('## Fluency and coherence');
    L.push('## Lexical resource');
    L.push('## Grammatical range and accuracy');
    L.push('Under each: two to four sentences. QUOTE the candidate\'s own words - at least one '
           + 'short quotation per criterion - and name the band feature the quotation shows, using '
           + 'the wording of the standard above. Say which band the feature belongs to. Do not '
           + 'give a separate number per criterion.');
    L.push('');
    L.push('## The three corrections that matter most');
    L.push('A numbered list of three. For each: the candidate\'s words, then the correction, then '
           + 'one short clause saying which criterion it costs. Choose errors that cost BAND, not '
           + 'every error you can see. If there are fewer than three worth making, give fewer and '
           + 'say so.');
    L.push('');
    L.push('## Say this instead');
    L.push('Rewrite ONE of the candidate\'s own sentences at the band they are aiming for. Keep '
           + 'their content, their opinion and their voice. Changing what they said is not an '
           + 'improvement, it is a different answer.');
    L.push('');
    L.push('## Your drill');
    L.push('ONE exercise, doable in sixty seconds, today, alone, out loud. It must target the '
           + 'single biggest loss you identified above and nothing else. Name what to do, not what '
           + 'to understand. "Answer this question three times and begin each one with a different '
           + 'word" is a drill. "Work on your range" is not.');
    L.push('');
    L.push('RULES.');
    L.push('- You are reading a transcript, so you cannot hear pronunciation. Never give a band or '
           + 'any judgement for pronunciation, and never let it affect the range you give.');
    L.push('- Judge against the standard above and against the model answer supplied, not against '
           + 'your own idea of elegant English.');
    L.push('- Be specific and brief. No preamble, no encouragement that says nothing, no emoji.');
    if (arabic) {
      L.push('');
      L.push('ARABIC. After each paragraph of explanation, add a line beginning "AR: " carrying '
             + 'the same explanation in Modern Standard Arabic, in a register a Syrian university '
             + 'student reads comfortably. Keep EVERY English quotation, every correction and '
             + 'every rewritten sentence in ENGLISH inside the Arabic line - they are the English '
             + 'being taught, and translating them destroys what they are evidence of. Do not add '
             + 'an AR line to a heading.');
    }
    return L.join('\n');
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function words(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }

  /* A POINT BAND BECOMES A RANGE. The model is told to give a range and usually does; when it
     does not, the honest repair is to widen it, not to print the point. A single number off a
     language model reads as a measurement and is not one. */
  /* A band is 4 to 9, with at most .0 or .5, and NOT part of a longer number. The trailing
     negative lookaheads are two, not one: "(?![\d.])" rejected "7.0." as well, because the full
     stop that ends the sentence looked like part of the number — which is how the commonest way
     a model writes a band sailed straight through the repair meant to catch it. */
  var BANDNUM = /(?:^|[^\d.])([4-9](?:\.[05])?)(?!\d)(?!\.\d)/g;

  function widen(md) {
    /* IF THE SECTION ALREADY NAMES TWO BANDS, IT IS ALREADY A RANGE.
     *
     * Counting is the rule, and it took three tries to get here. The first two chased the SHAPE
     * of a range with lookarounds and lost: "6.5-7.5" was handled, then "6.5 to 7.5" came back
     * as "6.0-7.0 to 7.0-8.0", then an en dash with spaces broke it again, then "Between 6 and
     * 7". There is no end to the ways a sentence can hold two numbers. There is exactly one way
     * to tell a range from a point: count them. One number is a point band and gets widened;
     * two or more is a range already, whatever punctuation sits between them. */
    var s = String(md);
    var i = s.indexOf('## Band range');
    if (i < 0) return s;
    var j = s.indexOf('\n## ', i + 3);
    if (j < 0) j = s.length;
    var sec = s.slice(i, j);
    BANDNUM.lastIndex = 0;
    var found = [], m;
    while ((m = BANDNUM.exec(sec)) !== null) found.push(m[1]);
    if (found.length !== 1) return s;
    var v = parseFloat(found[0]);
    var once = false;
    var fixed = sec.replace(BANDNUM, function (whole, n) {
      if (once) return whole;
      once = true;
      return whole.replace(n, (v - 0.5).toFixed(1) + '-' + (v + 0.5).toFixed(1));
    });
    return s.slice(0, i) + fixed + s.slice(j);
  }

  /* the smallest markdown the headings above can produce, plus the AR lines */
  function render(md) {
    var out = [], list = [];
    function flush() {
      if (list.length) { out.push('<ol>' + list.join('') + '</ol>'); list = []; }
    }
    String(md).split(/\r?\n/).forEach(function (ln) {
      var m;
      if ((m = ln.match(/^\s*AR:\s*(.*)$/))) {
        flush();
        if (m[1].trim()) {
          out.push('<p class="ar" dir="rtl" lang="ar">' + inline(m[1]) + '</p>');
        }
        return;
      }
      if ((m = ln.match(/^##\s+(.*)$/))) { flush(); out.push('<h4>' + inline(m[1]) + '</h4>'); return; }
      if ((m = ln.match(/^\s*\d+[.)]\s+(.*)$/))) { list.push('<li>' + inline(m[1]) + '</li>'); return; }
      if ((m = ln.match(/^\s*[-*]\s+(.*)$/))) { list.push('<li>' + inline(m[1]) + '</li>'); return; }
      flush();
      if (ln.trim()) out.push('<p>' + inline(ln) + '</p>');
    });
    flush();
    return out.join('');
  }
  function inline(s) {
    return esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
                 .replace(/(?:^|[^*])\*([^*]+)\*/g, function (m, t) {
                   return m.charAt(0) === '*' ? m : m.charAt(0) + '<i>' + t + '</i>';
                 })
                 .replace(/`([^`]+)`/g, '<code>$1</code>')
                 .replace(/&quot;([^&]{1,120})&quot;/g, '<q>$1</q>');
  }

  function brief(box, text) {
    var L = [];
    L.push('PART: ' + (box.part === 2 ? '2 (the long turn, up to two minutes, from a cue card)'
                                      : String(box.part)));
    L.push('THE EXAMINER ASKED: ' + box.q);
    if (box.bullets && box.bullets.length) {
      L.push('THE CUE CARD ALSO SAID:');
      box.bullets.forEach(function (b) { L.push('  - ' + b); });
    }
    if (box.topic) L.push('THE TOPIC OF THIS SET OF QUESTIONS: ' + box.topic);
    if (box.model) {
      L.push('');
      /* THE MODEL ANSWER TRAVELS WITH ITS OWN BAND. Without this the model marks a 6.5 candidate
         against a band 8 model and cannot say why it was so hard on them. */
      L.push('THE COURSE’S MODEL ANSWER TO THE SAME QUESTION, which is written at band '
             + (box.modelBand ? Number(box.modelBand).toFixed(1) : '7.0') + '. It is the standard '
             + 'to compare against at THAT band, not a text the candidate was supposed to '
             + 'reproduce, and not automatically better than what they said:');
      L.push(box.model);
    }
    L.push('');
    L.push('THE CANDIDATE SAID (' + words(text) + ' words, transcribed):');
    L.push(text);
    return L.join('\n');
  }

  var DISCLAIMER =
    'This band range came from a language model reading a transcript, not from an examiner. ' +
    'A real band comes from a trained examiner listening to you speak, and it takes your ' +
    '<b>pronunciation</b> into account — which nothing here can hear. Treat the range as a ' +
    'rough position, and the corrections and the drill underneath it as the useful part.';

  IELTS.tutor = {
    _widen: widen,
    _system: systemFor,
    _candidate: CANDIDATE,

    /** mount(host, box) — `box` is one practice question: {q, part, topic, model, modelBand,
     *  bullets, _getText}. The panel renders with or without a key. */
    mount: function (host, box) {
      var K = w.Keyring;
      var wrap = document.createElement('div');
      wrap.className = 'tutor';
      wrap.innerHTML =
        '<div class="tutor-head"><b>Mark my answer</b>' +
        '<span class="tutor-opts">' +
        '<label class="tiny">Aiming at ' +
        '<select data-target>' +
        '<option value="6.5">6.5</option>' +
        '<option value="7" selected>7.0</option>' +
        '<option value="7.5">7.5</option>' +
        '<option value="8">8.0</option></select></label>' +
        '<button type="button" class="ghost tiny" data-ar aria-pressed="true">عربي</button>' +
        '<button type="button" class="ghost tiny" data-key></button>' +
        '</span></div>' +
        '<p class="tutor-note"></p>' +
        '<button type="button" class="primary" data-go>Mark my answer</button>' +
        '<div class="tutor-out" hidden></div>' +
        '<div class="chat" hidden></div>';
      host.appendChild(wrap);

      var go = wrap.querySelector('[data-go]');
      var keyb = wrap.querySelector('[data-key]');
      var arb = wrap.querySelector('[data-ar]');
      var tgt = wrap.querySelector('[data-target]');
      var note = wrap.querySelector('.tutor-note');
      var out = wrap.querySelector('.tutor-out');
      var chatBox = wrap.querySelector('.chat');

      /* ---------------------------------------------------------------- THE CONVERSATION
       *
       * It lives here, in a variable belonging to this mount, and it dies with the dialog. The
       * owner was specific: a new pop-up, or the same pop-up opened again, starts fresh. That is
       * not a limitation to work around - it is what keeps the tutor pinned to one question
       * instead of drifting into a general chatbot halfway down somebody's afternoon.
       *
       * NOTHING IS STORED. Not the answer, not the questions, not the replies. There is no
       * localStorage, no sessionStorage and no server of ours in the path; closing the dialog is
       * the only delete there needs to be.
       */
      var turns = [];
      var MAX_ASKS = 8;
      var asks = 0;
      var arabic = true;

      function refresh() {
        var has = K && K.has();
        keyb.textContent = has ? ('Key: ' + K.hint()) : 'Use my Gemini key';
        go.disabled = !has;
        note.innerHTML = has
          ? 'Your answer is marked against the band descriptors for the band you are aiming at. ' +
            'You get a band <b>range</b>, the reasons in the examiner’s own criteria, the ' +
            'three corrections that cost you the most, and one drill to do today. Then you can ' +
            'ask about any of it.'
          : 'This box can mark your answer against the IELTS criteria using <b>your own free ' +
            'Google AI Studio key</b>. Nothing leaves this page until you add one, and the key ' +
            'stays in this browser. The model answer below works without it.';
      }

      arb.onclick = function () {
        arabic = !arabic;
        arb.setAttribute('aria-pressed', arabic ? 'true' : 'false');
        wrap.classList.toggle('no-ar', !arabic);
      };

      keyb.onclick = function () {
        if (!K) return;
        if (K.has() && !w.confirm('A key is already stored (' + K.hint() + '). Replace it?')) return;
        var v = w.prompt('Paste your Google AI Studio API key.\n\n' +
          'It is sent only to Google, from this browser, in a request header. No server of this ' +
          'site ever sees it, and it is forgotten when you close this tab.');
        if (v == null) return;
        if (!K.looksLikeAKey(v)) {
          w.alert('That does not look like a key: a key is one long run of characters with no ' +
                  'spaces in it.');
          return;
        }
        K.set(v, false);
        refresh();
      };

      function provider() { return new w.GeminiProvider({ keyring: K }); }
      function pref() {
        try { return w.localStorage.getItem('la.gemini.model') || ''; } catch (e) { return ''; }
      }
      function remember(m) {
        try { if (m) w.localStorage.setItem('la.gemini.model', m); } catch (e) { /* private */ }
      }

      go.onclick = function () {
        var text = box._getText ? box._getText() : '';
        var n = words(text);
        var min = box.part === 2 ? 70 : 18;
        out.hidden = false;
        if (n < min) {
          out.innerHTML = '<p class="small">There are ' + n + ' words here, and an IELTS ' +
            (box.part === 2 ? 'long turn' : 'answer') + ' needs about ' + min +
            ' before a band means anything. Say more, then try again.</p>';
          return;
        }
        if (!w.GeminiProvider) {
          out.innerHTML = '<p class="small">The tutor could not load on this page.</p>';
          return;
        }
        var target = parseFloat(tgt.value);
        out.innerHTML = '<p class="small">Marking your ' + n + ' words against band ' +
                        target.toFixed(1) + '…</p>';
        go.disabled = true;
        turns = [];
        asks = 0;
        var sys = systemFor(box, target, arabic);
        var first = brief(box, text);
        provider().askWithFailover({
          system: sys, prompt: first, maxTokens: 1500, temperature: 0.2, preferred: pref()
        }).then(function (res) {
          go.disabled = false;
          remember(res.model);
          turns.push({ role: 'user', text: first });
          turns.push({ role: 'model', text: res.text });
          out.innerHTML =
            '<div class="band">' + render(widen(res.text)) + '</div>' +
            '<p class="tutor-honest">' + DISCLAIMER + '</p>' +
            '<p class="small tutor-meta">' + esc(res.model) + ' · ' + Math.round(res.ms) +
            ' ms · your words are not stored by this site</p>';
          openChat(sys);
        }, function (e) {
          go.disabled = false;
          out.innerHTML = '<p class="bad">' + esc(String((e && e.message) || e)) + '</p>';
        });
      };

      /* ---------------------------------------------------------------- the chat UI */
      function openChat(sys) {
        chatBox.hidden = false;
        chatBox.innerHTML =
          '<h4 class="chat-h">Ask about this</h4>' +
          '<div class="chat-log"></div>' +
          '<div class="chat-row">' +
          '<textarea rows="2" data-q placeholder="Why is that wrong? What is a better word? '
          + 'Ask in English or in Arabic."></textarea>' +
          '<button type="button" class="primary" data-send>Ask</button>' +
          '</div>' +
          '<p class="small chat-note"><span data-left></span> · this conversation is not ' +
          'saved anywhere and disappears when you close this box.</p>';
        var log = chatBox.querySelector('.chat-log');
        var q = chatBox.querySelector('[data-q]');
        var send = chatBox.querySelector('[data-send]');
        var left = chatBox.querySelector('[data-left]');

        function count() {
          left.textContent = (MAX_ASKS - asks) + ' of ' + MAX_ASKS + ' questions left';
          send.disabled = asks >= MAX_ASKS;
          q.disabled = asks >= MAX_ASKS;
        }
        count();

        send.onclick = function () {
          var text = (q.value || '').trim();
          if (!text || asks >= MAX_ASKS) return;
          asks++;
          q.value = '';
          log.insertAdjacentHTML('beforeend',
            '<div class="me">' + esc(text) + '</div><div class="them wait">…</div>');
          var pending = log.querySelector('.them.wait');
          count();
          /* THE WHOLE EXCHANGE GOES, with its roles. gemini.js carries `turns` straight into
             contents, so the model can tell its own previous words from the learner's. Re-sending
             it all as one prompt would work and would throw that away. */
          turns.push({ role: 'user', text: text });
          provider().askWithFailover({
            system: sys + '\n\nYOU ARE NOW ANSWERING A FOLLOW-UP QUESTION about the marking you '
              + 'just gave. Stay on THIS question and THIS answer. Keep it short - a few '
              + 'sentences. If they ask you to write their answer for them, decline and give them '
              + 'a way to write it themselves instead. If they ask about something else entirely, '
              + 'say so and point them back to the question. Answer in the language they asked '
              + 'in. The headings above do not apply to a follow-up: just answer.',
            turns: turns, maxTokens: 700, temperature: 0.3, preferred: pref()
          }).then(function (res) {
            turns.push({ role: 'model', text: res.text });
            pending.classList.remove('wait');
            pending.innerHTML = render(res.text);
          }, function (e) {
            turns.pop();
            asks--;
            count();
            pending.classList.remove('wait');
            pending.innerHTML = '<span class="bad">' + esc(String((e && e.message) || e)) +
                                '</span>';
          });
        };
        q.addEventListener('keydown', function (ev) {
          if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); send.click(); }
        });
      }

      refresh();
      return wrap;
    }
  };
}(window));
