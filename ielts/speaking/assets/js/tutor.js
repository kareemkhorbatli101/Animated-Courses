/* ============================================================
   tutor.js — the per-question IELTS tutor, on the learner's own Gemini key.

   THIS IS NOT A COPY OF accounting/b1/assets/js/tutor.js, and the difference is the whole
   point of the file. That tutor's first and loudest rule is "IT NEVER SCORES", enforced by a
   `scrub()` that strips any mark the model produces. For this course the owner overruled it,
   in his own words: "I want the feedback to give a band mark range with an appropriate
   disclaimer and full justification."

   He is right that a band is what an IELTS candidate wants and wrong that a model can supply
   one, and both of those are handled here rather than argued about:

     A RANGE, NEVER A POINT. The model is required to answer with a band RANGE spanning at
     least one whole band (5.5-6.5, not 6.0). A point band is a claim to a precision that does
     not exist, and `widen()` below turns one into a range if the model gives it anyway.

     THE DISCLAIMER IS NOT DISMISSIBLE and it is specific, not a shrug. It says who gave the
     band, what a real band comes from, and the two things this reading cannot see at all.

     THE JUSTIFICATION IS PER CRITERION, in the public band descriptors' own four names, and
     the model is told to quote the learner's own words for each. A band with no evidence is
     a number; a band with the learner's own sentence beside it is teaching.

     PRONUNCIATION IS REFUSED, NOT GUESSED. Three of the four criteria can be read off a
     transcript. The fourth cannot, and the card says so rather than inventing a figure - the
     one place this file does keep the ancestor's instinct, because a pronunciation band from
     a text is not a weak measurement, it is no measurement.

   WHAT IT SHARES WITH ITS ANCESTOR, byte for byte: assets/ask/gemini.js and
   assets/ask/keyring.js. The key is held in sessionStorage and sent to Google in the
   `x-goog-api-key` header from the learner's own browser. This is a static site with no
   server to send it to, which is the reason BYOK exists here at all.

   ONE POP-UP PER QUESTION, which is the owner's instruction: "a pop-up per question not part
   (except of course part 2 of each test, where the answer is one box)". Part 2's long turn is
   one box and one pop-up, and it is marked against the long-turn descriptors rather than the
   short-answer ones - a different brief, not the same brief with a longer input.
   ============================================================ */
(function (w) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};

  var SYSTEM = [
    'You are an experienced IELTS Speaking examiner giving feedback to a candidate in Syria',
    'who is working towards band 7. You are reading a TRANSCRIPT of one answer.',
    '',
    'ANSWER IN EXACTLY THIS SHAPE, with these headings and nothing before or after them:',
    '',
    '## Band range',
    'One range spanning at least a whole band, written like 5.5-6.5. Never a single number.',
    'Then one sentence saying what holds it down and what would lift it.',
    '',
    '## Fluency and coherence',
    '## Lexical resource',
    '## Grammatical range and accuracy',
    'Under each: two to four sentences. QUOTE the candidate\'s own words - at least one short',
    'quotation per criterion - and say what the quotation shows. Name the band features you are',
    'using (for example "develops the topic without noticeable effort", "a range of complex',
    'structures with some flexibility"). Do not give a separate number per criterion.',
    '',
    '## The three corrections that matter most',
    'A numbered list of three. For each: the candidate\'s words, then the correction, then one',
    'short clause saying why. Choose errors that cost band, not every error.',
    '',
    '## Say this instead',
    'Rewrite ONE of the candidate\'s own sentences at band 7. Keep their content and their voice.',
    '',
    'RULES.',
    '- You are reading a transcript, so you cannot hear pronunciation. Never give a band or any',
    '  comment for pronunciation, and never let it affect the range you give.',
    '- Judge against the IELTS public band descriptors for Speaking and against the model answer',
    '  if one is supplied, not against your own idea of elegant English.',
    '- This is a Syrian candidate writing in English. Do not treat Arabic-influenced word order',
    '  or a Syrian reference as an error unless it is an error.',
    '- Be specific and brief. No preamble, no encouragement that says nothing, no emoji.'
  ].join('\n');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function words(s) { return String(s || '').trim().split(/\s+/).filter(Boolean).length; }

  /* A POINT BAND BECOMES A RANGE. The model is told to give a range and usually does; when it
     does not, the honest repair is to widen it, not to print the point. A single number off a
     language model reads as a measurement and is not one. */
  function widen(md) {
    return String(md).replace(
      /(^|[^\d.])([4-9](?:\.5)?)(\s*)(?=[^\d.-]|$)/g,
      function (m, pre, n, sp, off, s) {
        /* only inside the band-range section, and only where it is not already a range */
        var head = s.lastIndexOf('## ', off);
        if (head < 0 || !/^## Band range/i.test(s.slice(head, head + 20))) return m;
        if (/-\s*$/.test(s.slice(Math.max(0, off - 2), off + pre.length))) return m;
        var v = parseFloat(n);
        return pre + (v - 0.5).toFixed(1) + '-' + (v + 0.5).toFixed(1) + sp;
      });
  }

  /* the smallest markdown the headings above can produce */
  function render(md) {
    var out = [], list = [];
    function flush() {
      if (list.length) { out.push('<ol>' + list.join('') + '</ol>'); list = []; }
    }
    String(md).split(/\r?\n/).forEach(function (ln) {
      var m;
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
      L.push('A BAND 7 MODEL ANSWER TO THE SAME QUESTION (the standard to compare against, not a');
      L.push('text the candidate was supposed to reproduce):');
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
    'rough position, and the corrections underneath it as the useful part.';

  IELTS.tutor = {
    _widen: widen,
    _system: SYSTEM,

    /** mount(host, box) — `box` is one practice question: {q, part, topic, model, bullets,
     *  _getText}. The panel renders with or without a key; with none, the button says so and
     *  the model answer below it still works. */
    mount: function (host, box) {
      var K = w.Keyring;
      var wrap = document.createElement('div');
      wrap.className = 'tutor';
      wrap.innerHTML =
        '<div class="tutor-head"><b>Mark my answer</b>' +
        '<button type="button" class="ghost tiny" data-key></button></div>' +
        '<p class="tutor-note"></p>' +
        '<button type="button" class="primary" data-go>Mark my answer</button>' +
        '<div class="tutor-out" hidden></div>';
      host.appendChild(wrap);

      var go = wrap.querySelector('[data-go]');
      var keyb = wrap.querySelector('[data-key]');
      var note = wrap.querySelector('.tutor-note');
      var out = wrap.querySelector('.tutor-out');

      function refresh() {
        var has = K && K.has();
        keyb.textContent = has ? ('Key: ' + K.hint()) : 'Use my Gemini key';
        go.disabled = !has;
        note.innerHTML = has
          ? 'Your answer is sent to Google’s Gemini with your own key and marked against the ' +
            'IELTS public band descriptors. You get a band <b>range</b>, the reasons for it in ' +
            'the examiner’s own four criteria, and the three corrections that matter most.'
          : 'This box can mark your answer against the IELTS criteria using <b>your own free ' +
            'Google AI Studio key</b>. Nothing leaves this page until you add one, and the key ' +
            'stays in this browser. The model answer below works without it.';
      }

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
        out.innerHTML = '<p class="small">Marking your ' + n + ' words…</p>';
        go.disabled = true;
        var P = new w.GeminiProvider({ keyring: K });
        P.askWithFailover({
          system: SYSTEM,
          prompt: brief(box, text),
          maxTokens: 1100,
          temperature: 0.2,
          preferred: pref()
        }).then(function (res) {
          go.disabled = false;
          remember(res.model);
          out.innerHTML =
            '<div class="band">' + render(widen(res.text)) + '</div>' +
            '<p class="tutor-honest">' + DISCLAIMER + '</p>' +
            '<p class="small tutor-meta">' + esc(res.model) + ' · ' + Math.round(res.ms) +
            ' ms · your words are not stored by this site</p>';
        }, function (e) {
          go.disabled = false;
          out.innerHTML = '<p class="bad">' + esc(String((e && e.message) || e)) + '</p>';
        });
      };

      function pref() {
        try { return w.localStorage.getItem('la.gemini.model') || ''; } catch (e) { return ''; }
      }
      function remember(m) {
        try { if (m) w.localStorage.setItem('la.gemini.model', m); } catch (e) { /* private */ }
      }
      refresh();
      return wrap;
    }
  };
}(window));
