/* "Ask about this website" - the pop-up, the key box, and the one source the model gets.
 *
 * LOADED ON A CLICK, NEVER AT LOAD. The home page's rule is that it must work from a folder
 * on a USB stick with no server and no internet, and it kept that rule by having no script
 * at all. This file is fetched by a few lines of inline bootstrap the first time the button
 * is pressed, so the page still fetches nothing by script when it opens and still works
 * with no connection - the button is simply the one thing that says it needs one. It is the
 * same arrangement player/ask_pane.js already uses for the lesson assistant: "the agent
 * module is read when it is USED, not when this file loads".
 *
 * THE MODEL IS GIVEN ONE DOCUMENT AND TOLD TO STAY IN IT. ask/site-brief.md is generated
 * from the home page by tools/site_brief.py, so its facts are the home page's facts and the
 * home page's numbers are recomputed from the published tree by gates/site_check. The model
 * inherits that verification. It is told to answer only from the brief and to say so when
 * the brief does not cover something, because the alternative - a confident paragraph about
 * prices, certificates or enrolment that nobody offers - would be published on the owner's
 * own domain in his own voice.
 *
 * THE GROUNDING IS SHOWN, not hidden. The brief is not on screen by default, because a
 * visitor asking a question does not want a document; but "what was I told?" opens it in
 * full. That is deliberate and it is the rule the lesson pane already states: "an assistant
 * that cites facts nobody can inspect is the thing this whole design is trying not to be."
 * It is also how the owner debugs a wrong answer: the first question is always what the
 * model actually received.
 *
 * THE KEY IS THE VISITOR'S. It goes to Google and nowhere else; this site has no server to
 * send it to. See assets/ask/keyring.js for where it is kept and why that default.
 */
(function (root, doc) {
  'use strict';

  var BRIEF_URL = 'ask/site-brief.md';
  var LS_MODEL = 'la.gemini.model';
  var LS_SPEAK = 'la.ask.speak';

  /* THE LENGTH OF A SPOKEN ANSWER. ONE NUMBER, TWO CONSUMERS.
   *
   * It is asked of the model (SYSTEM_SPOKEN) and promised to the visitor (the line beside the
   * speaker toggle). Those must never disagree: a label that says one number while the prompt
   * asks for another is a promise nobody is keeping, and it is the ordinary way this kind of
   * thing goes stale - somebody tunes the prompt and the sentence on screen is left behind.
   * Both read CAP, and gates/site_ask.py fails if either hard-codes a number instead. */
  var CAP = 50;

  /* WHAT THE MODEL IS ALWAYS TOLD. The sentences that matter most are the ones about refusing
   * to invent, so they come FIRST and the style rules are appended after them - a prompt is not
   * a priority list, and more words about commas can dilute fewer words about honesty. */
  var SYSTEM_BASE = [
    'You answer questions about one website, learnactively.com, for a visitor who is',
    'looking at it now.',
    '',
    'The only thing you know about the site is the briefing document below. Answer from it',
    'and from nothing else.',
    '',
    'If the briefing does not answer the question, say plainly that the site does not say,',
    'and suggest what the visitor could look at instead. Never guess at prices, payment,',
    'certificates, enrolment, timetables, accounts, or anything about a learner\'s own',
    'progress: the site does not offer them, and inventing them would mislead someone.',
    '',
    'Do not invent course names, unit counts or numbers. If you give a number, it must',
    'appear in the briefing.',
    '',
    'Be brief and plain. Two or three sentences is usually enough. Use the visitor\'s',
    'language: answer in Arabic if they wrote in Arabic.'
  ].join('\n');

  /* ...AND WHAT IT IS TOLD ONLY WHEN THE ANSWER WILL BE SPOKEN ALOUD.
   *
   * This block is appended ONLY when the speaker toggle is on, and that is a decision with a
   * cost the owner accepted: the toggle is therefore part of the REQUEST, not of playback, and
   * has to be set before asking. The reason to keep it conditional is that the written
   * assistant has been live for a while at full length, and a cap that leaked into it would
   * silently shorten something nobody asked to change.
   *
   * THE CAP IS ASKED FOR, NEVER CUT. Nothing in this file truncates an answer: a truncation
   * severs a sentence, the voice reads the fragment, the text pane shows the same fragment, and
   * the tokens were spent generating the whole thing anyway. If the model overruns, the only
   * cost is time - the picture follows the speech rather than predicting it.
   *
   * Every rule here earns its place by helping the TEXT as well as the voice. That is the test:
   * banning markdown fixes a real defect in this pane, which prints the answer verbatim and so
   * shows asterisks to the visitor; a slash is read aloud as the word "slash"; a bare URL is
   * read out character by character. A rule that only helped the voice would be a speech
   * setting and would not belong in the prompt at all. */
  function systemSpoken() {
    return [
      '',
      'THIS ANSWER WILL BE READ ALOUD BY A SPEECH VOICE, and shown on screen as text at the',
      'same time. Write one answer that works for both.',
      '',
      'Use at most ' + CAP + ' words, and finish on a complete sentence rather than stopping',
      'part-way. Put the thing that answers the question first.',
      '',
      'Write ordinary sentences with commas at the natural breaks, because a speech voice',
      'pauses at punctuation and runs clauses together without it.',
      '',
      'Do not use markdown: no asterisks, no bullet points, no headings, no backticks.',
      'Do not use slashes between words, bare web addresses, or bracketed asides.',
      'Write numbers, symbols and names the way they are said out loud.'
    ].join('\n');
  }

  // what the GUI promises, built from the same number the prompt is given
  function capPromise() {
    return 'Spoken answers are kept to about ' + CAP + ' words. Turn this off for a full ' +
           'written answer.';
  }

  // what the face says about itself, on the picture, before anyone has asked anything
  var FACE_CAPTION = 'Ask about this site. Turn the speaker on and he will read the answer out.';

  var state = {
    brief: null, model: '', busy: false, el: null,
    speak: false,          // the speaker toggle; CHANGES THE PROMPT, so it is read before asking
    answerWasSpokenStyle: false,  // was the answer now on screen produced under the cap?
    face: null             // the avatar panel while a dialog is open; destroyed with it
  };

  // ---- the smallest possible DOM helpers ------------------------------------------------
  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function style() {
    if (doc.getElementById('ask-css')) return;
    var s = E('style');
    s.id = 'ask-css';
    // Inherits the home page's tokens, so this looks like the site and not like a widget.
    s.textContent = [
      '.askwrap{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;',
      'justify-content:center;background:rgba(0,0,0,.6);padding:16px}',
      '.askbox{background:var(--surface,#161B22);color:var(--text,#E6EDF3);',
      'border:1px solid var(--border,#5B677A);border-radius:12px;max-width:640px;width:100%;',
      'max-height:86vh;overflow:auto;padding:20px;font:400 15px/1.55 system-ui,sans-serif}',
      '.askbox h2{margin:0 0 4px;font-size:19px}',
      '.askbox .sub{color:var(--muted,#A9B4C0);font-size:13px;margin:0 0 14px}',
      '.askbox label{display:block;font-size:13px;color:var(--muted,#A9B4C0);margin:10px 0 4px}',
      '.askbox input[type=text],.askbox input[type=password],.askbox textarea{width:100%;',
      'box-sizing:border-box;background:var(--surface2,#1F262E);color:var(--text,#E6EDF3);',
      'border:1px solid var(--border,#5B677A);border-radius:8px;padding:9px 10px;font:inherit}',
      '.askbox textarea{min-height:68px;resize:vertical}',
      '.askrow{display:flex;gap:8px;align-items:center;margin-top:14px;flex-wrap:wrap}',
      '.askbtn{background:var(--accent,#E8B418);color:var(--onAccent,#1A1200);border:0;',
      'border-radius:8px;padding:10px 16px;font:600 15px system-ui;cursor:pointer}',
      '.askbtn[disabled]{opacity:.55;cursor:default}',
      '.askghost{background:transparent;color:var(--text,#E6EDF3);',
      'border:1px solid var(--border,#5B677A);border-radius:8px;padding:9px 13px;cursor:pointer;',
      'font:400 14px system-ui}',
      // the two icon controls, told apart at a glance and showing their pressed state
      '.askicon{font-size:16px;line-height:1;padding:9px 11px}',
      '.askghost.on{background:var(--accent,#E8B418);color:var(--onAccent,#1A1200);',
      'border-color:var(--accent,#E8B418)}',
      // THE CAP PROMISE. Always present so it can be read BEFORE asking; it brightens rather
      // than appears when the toggle is on, because a line that appears is a line that was not
      // there when the visitor was deciding.
      '.askcap{color:var(--muted,#A9B4C0);font-size:12px;margin:8px 0 0;',
      'border-left:2px solid var(--border,#5B677A);padding-left:8px}',
      '.askcap.live{color:var(--text,#E6EDF3);border-left-color:var(--accent,#E8B418)}',
      '.askreask{margin-top:10px;font-size:13px;color:var(--muted,#A9B4C0)}',
      '.askreask button{margin-left:6px}',
      '.askout{margin-top:16px;white-space:pre-wrap}',
      '.asknote{color:var(--muted,#A9B4C0);font-size:12px;margin-top:14px}',
      '.askerr{color:#FF7B72;margin-top:12px}',
      '.askpre{background:var(--surface2,#1F262E);border:1px solid var(--border,#5B677A);',
      'border-radius:8px;padding:12px;white-space:pre-wrap;font:12px/1.5 ui-monospace,monospace;',
      'max-height:40vh;overflow:auto;margin-top:10px}'
    ].join('');
    doc.head.appendChild(s);
  }

  function close() {
    if (state.el) { state.el.remove(); state.el = null; }
    // THE FACE IS TORN DOWN WITH THE BOX. It holds a WebGL context and an animation frame loop,
    // and a browser allows only a handful of contexts at once - leaking one per open would make
    // the fourth or fifth time somebody opened this box the time it silently stopped working.
    if (state.face) { state.face.destroy(); state.face = null; }
    if (root.speechSynthesis) root.speechSynthesis.cancel();
    doc.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) { if (e.key === 'Escape') close(); }

  function shell(title, subtitle) {
    style();
    close();
    var wrap = E('div', 'askwrap');
    var box = E('div', 'askbox');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', title);
    box.appendChild(E('h2', null, title));
    if (subtitle) box.appendChild(E('p', 'sub', subtitle));
    wrap.appendChild(box);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    doc.addEventListener('keydown', onEsc);
    doc.body.appendChild(wrap);
    state.el = wrap;
    return box;
  }

  // ---- the key -------------------------------------------------------------------------
  function keyPane(thenAsk) {
    var K = root.Keyring;
    var box = shell('Your Gemini key',
                    'The assistant runs on your own key, so it costs the site nothing - and ' +
                    'the key is sent to Google only, never to this website.');

    var lab = E('label', null, 'Paste your key from Google AI Studio');
    var inp = E('input');
    inp.type = 'password';
    inp.autocomplete = 'off';
    inp.spellcheck = false;
    // AI Studio issues more than one shape - older keys begin AIza..., newer ones AQ....
    // Naming only the one I had seen is what made the first validator reject a real key.
    inp.placeholder = 'AQ.… or AIza…';
    box.appendChild(lab);
    box.appendChild(inp);

    var remember = E('label');
    var cb = E('input');
    cb.type = 'checkbox';
    remember.appendChild(cb);
    remember.appendChild(doc.createTextNode(
      ' Remember on this device. Leave this unticked on a shared or public computer - the ' +
      'key is then forgotten when you close the tab.'));
    box.appendChild(remember);

    var err = E('div', 'askerr');
    err.style.display = 'none';
    box.appendChild(err);

    var row = E('div', 'askrow');
    var save = E('button', 'askbtn', 'Save and ask');
    var cancel = E('button', 'askghost', 'Cancel');
    row.appendChild(save);
    row.appendChild(cancel);
    if (K.has()) {
      var forget = E('button', 'askghost', 'Forget the stored key (' + K.hint() + ')');
      forget.addEventListener('click', function () { K.forget(); close(); });
      row.appendChild(forget);
    }
    box.appendChild(row);

    box.appendChild(E('p', 'asknote',
      'Your question and this site\'s briefing are sent to Google to be answered. On a free ' +
      'key Google may use them to improve its models, so do not type anything private.'));

    cancel.addEventListener('click', close);
    save.addEventListener('click', function () {
      var v = inp.value;
      if (!K.looksLikeAKey(v)) {
        err.textContent = 'That does not look like a key. It is one long line with no ' +
                          'spaces, copied whole from AI Studio - use its "Copy key" button.';
        err.style.display = '';
        return;
      }
      K.set(v, cb.checked);
      if (thenAsk) askPane();
      else close();
    });
    inp.focus();
  }

  // ---- the brief -----------------------------------------------------------------------
  function loadBrief() {
    if (state.brief != null) return Promise.resolve(state.brief);
    return fetch(BRIEF_URL, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('the briefing could not be loaded (HTTP ' + r.status + ')');
      return r.text();
    }).then(function (t) { state.brief = t; return t; });
  }

  /* ---- voice, both directions ------------------------------------------------------------
   *
   * Both are the BROWSER's: no audio leaves this page and no voice model is downloaded by it.
   * The same shape the lesson pane (player/ask_pane.js) has had for a while, carried across
   * rather than reinvented - a second implementation of listening and speaking would be the
   * one part of this feature most likely to drift from the one that already works.
   *
   * AVAILABILITY IS REPORTED, NOT ASSUMED. Recognition is Chrome and Edge; Firefox has none.
   * A button that silently does nothing is worse than one that says why it cannot. */
  function recogniser() {
    return root.SpeechRecognition || root.webkitSpeechRecognition || null;
  }

  /* ONE UTTERANCE, AND THE PICTURE HANGS OFF IT.
   *
   * `face` is the avatar panel, or null when there is not one. The three handlers below are the
   * only three facts the Web Speech API ever reports - it started, it reached a word, it ended -
   * and they are passed straight to the character's mouth. There is no timer here and no estimate
   * of how long the answer will take to say, because every such estimate is wrong by a second or
   * two and a mouth still moving after the voice has stopped is what makes a talking head look
   * broken. onerror stops the mouth as firmly as onend: a voice that fails silently must not
   * leave a character mouthing at the visitor for ever. */
  function speakAloud(text, face) {
    if (!root.speechSynthesis || !text) return;
    var u = new root.SpeechSynthesisUtterance(String(text));
    // the brief answers in the visitor's language, so the voice has to follow the text
    u.lang = /[؀-ۿ]/.test(text) ? 'ar' : 'en-GB';
    var vs = root.speechSynthesis.getVoices() || [];
    var exact = vs.filter(function (v) { return v.lang === u.lang; });
    var loose = vs.filter(function (v) {
      return (v.lang || '').slice(0, 2) === u.lang.slice(0, 2);
    });
    if (exact.length) u.voice = exact[0];
    else if (loose.length) u.voice = loose[0];
    if (face) {
      u.onstart = function () { face.start(); };
      u.onboundary = function () { face.word(); };
      u.onend = function () { face.stop(); };
      u.onerror = function () { face.stop(); };
    }
    root.speechSynthesis.cancel();
    root.speechSynthesis.speak(u);
    return u;
  }

  function rememberSpeak(on) {
    try { root.localStorage.setItem(LS_SPEAK, on ? '1' : '0'); } catch (e) { /* fine */ }
  }

  function recallSpeak() {
    try { return root.localStorage.getItem(LS_SPEAK) === '1'; } catch (e) { return false; }
  }

  // ---- which model ----------------------------------------------------------------------
  //
  // THIS NO LONGER CHOOSES ONE MODEL AND HOPES. Gemini's free allowances are per model and
  // several models have none at all, so the first choice can answer 429 on a key that has
  // never been used - which is exactly what happened. The provider now walks its ranked
  // list until one answers, and only a model that actually WORKED is remembered.
  function remembered() {
    try { return root.localStorage.getItem(LS_MODEL) || ''; } catch (e) { return ''; }
  }

  function rememberWorking(name) {
    try { root.localStorage.setItem(LS_MODEL, name); } catch (e) { /* fine */ }
  }

  function forgetModel() {
    try { root.localStorage.removeItem(LS_MODEL); } catch (e) { /* fine */ }
  }

  // ---- the question --------------------------------------------------------------------
  function askPane() {
    var K = root.Keyring;
    if (!K || !K.has()) return keyPane(true);

    var box = shell('Ask about this website',
                    'Answered from this site\'s own briefing, using your Gemini key.');

    /* THE FACE, AT THE TOP OF THE SAME BOX THE QUESTION IS TYPED INTO.
     *
     * The owner asked how the two ways of getting an answer - reading it and being told it -
     * could be ONE gui element rather than two modes. This is the answer in its visual form: not
     * a separate "video assistant" page with its own question box, which would mean two code
     * paths that can disagree about what the site says, but one box with a picture at the top of
     * it. The picture is a still until somebody wants a voice, and the text answer appears below
     * either way. Nothing about the written assistant changes for a visitor who never turns the
     * speaker on - they see a photograph, and the box behaves exactly as it did yesterday. */
    var face = root.SiteAvatar ? root.SiteAvatar.panel(FACE_CAPTION) : null;
    state.face = face;
    if (face) box.appendChild(face.el);

    var lab = E('label', null, 'Your question');
    var ta = E('textarea');
    ta.placeholder = 'What is on this site? Which course suits an accountant? Does it work offline?';
    box.appendChild(lab);
    box.appendChild(ta);

    /* TWO WAYS IN AND TWO WAYS OUT, IN ONE ROW.
     *
     * The microphone fills the field above rather than sending: recognition is wrong often
     * enough that sending it straight would spend a stranger's quota on a question they did not
     * ask, and leave them no way to see what went wrong. One glance is the price of staying in
     * charge of your own question.
     *
     * The speaker is a TOGGLE, and - unlike the lesson pane's - it changes the prompt rather
     * than only playback, because a spoken answer is capped and a written one is not. So it is
     * read when the question is sent, and the line underneath says so in words. */
    var row = E('div', 'askrow');
    var go = E('button', 'askbtn', 'Ask');

    var mic = E('button', 'askghost askicon', '🎤');
    mic.type = 'button';
    mic.title = 'Speak your question instead of typing';
    mic.setAttribute('aria-label', 'Speak your question instead of typing');
    mic.setAttribute('aria-pressed', 'false');

    var spk = E('button', 'askghost askicon', '🔊');
    spk.type = 'button';
    spk.id = 'ask-speak-toggle';
    spk.title = 'Read the answer aloud';
    spk.setAttribute('aria-label', 'Read the answer aloud');
    spk.setAttribute('aria-describedby', 'ask-cap-note');
    spk.setAttribute('aria-pressed', 'false');

    var shown = E('button', 'askghost', 'What was I told?');
    var keybtn = E('button', 'askghost', 'Key (' + K.hint() + ')');
    var closeb = E('button', 'askghost', 'Close');
    row.appendChild(go); row.appendChild(mic); row.appendChild(spk);
    row.appendChild(shown); row.appendChild(keybtn); row.appendChild(closeb);
    box.appendChild(row);

    /* THE FLAG THE OWNER ASKED FOR: the visitor is told, before asking, that turning the
     * speaker on shortens the answer. It is PLAIN TEXT in the row and not a tooltip, because a
     * tooltip is invisible on a touch screen, invisible to anyone who does not hover, and
     * invisible at the one moment it matters - before the question is sent. It is tied to the
     * toggle with aria-describedby so a screen reader announces it with the control. Its number
     * comes from CAP, the same constant the prompt is built from. */
    var capNote = E('p', 'askcap', capPromise());
    capNote.id = 'ask-cap-note';
    box.appendChild(capNote);

    /* WAKING THE CHARACTER IS THE ONE HEAVY THING THIS PAGE EVER DOES, so it happens only when a
     * voice has actually been asked for - 4.5 MB of glTF and a 3D library against a 113 KB still.
     * It is called at the two moments that mean "I want to be spoken to": pressing the speaker
     * on, and sending a question with it already on (a returning visitor's toggle is remembered,
     * and downloading megabytes merely because they opened the box would be a rude surprise).
     * wake() is idempotent, so calling it at both is free. */
    function wakeFace() {
      if (!face) return;
      face.wake()['catch'](function () { /* the caption says so; the voice still works */ });
    }

    function syncSpeak() {
      spk.classList.toggle('on', state.speak);
      spk.setAttribute('aria-pressed', state.speak ? 'true' : 'false');
      capNote.classList.toggle('live', state.speak);
    }
    state.speak = recallSpeak();
    syncSpeak();

    var out = E('div', 'askout');
    var err = E('div', 'askerr');
    err.style.display = 'none';
    box.appendChild(err);
    box.appendChild(out);

    var note = E('p', 'asknote',
      'Sent to Google with your own key. Answers come from the site\'s briefing only, so the ' +
      'assistant will say when something is not covered.');
    box.appendChild(note);

    closeb.addEventListener('click', close);
    keybtn.addEventListener('click', function () { keyPane(true); });

    shown.addEventListener('click', function () {
      loadBrief().then(function (t) {
        var pre = box.querySelector('.askpre');
        if (pre) { pre.remove(); return; }
        var p = E('pre', 'askpre', t);
        box.appendChild(p);
      }).catch(function (e) {
        err.textContent = String(e.message || e); err.style.display = '';
      });
    });

    function run() {
      var q = (ta.value || '').trim();
      if (!q || state.busy) return;
      err.style.display = 'none';
      out.textContent = '';
      // a new question supersedes whatever is being said and whatever was offered about the last
      if (root.speechSynthesis) root.speechSynthesis.cancel();
      if (face) face.stop();
      var old = box.querySelector('.askreask');
      if (old) old.remove();
      state.busy = true;
      go.disabled = true;
      go.textContent = 'Asking…';

      // READ ONCE, HERE. The toggle is part of the request, so the answer is produced under
      // whichever rule was in force when Ask was pressed - not whichever is in force when it
      // comes back. answerWasSpokenStyle records which, so the toggle cannot later imply that
      // a full-length answer was written to be heard.
      var spokenStyle = state.speak;
      if (spokenStyle) wakeFace();     // it has the length of one Gemini call to be ready in
      var provider = new root.GeminiProvider({ keyring: K });
      loadBrief()
        .then(function (brief) {
          var system = SYSTEM_BASE + (spokenStyle ? '\n' + systemSpoken() : '');
          return provider.askWithFailover({
            preferred: remembered(),
            system: system + '\n\n--- BRIEFING ABOUT THE SITE ---\n' + brief,
            prompt: q,
            maxTokens: 700,
            temperature: 0.2
          });
        })
        .then(function (res) {
          // ONE ANSWER, TWO RENDERERS. The text is shown unconditionally and verbatim - nothing
          // here slices, trims or truncates it - and the SAME string is then spoken if the
          // visitor asked to be read to. Speech is a second renderer over one answer, never an
          // alternative path that could return something different.
          out.textContent = res.text;
          state.answerWasSpokenStyle = spokenStyle;
          if (spokenStyle) speakAloud(res.text, face);
          rememberWorking(res.model);
          var also = (res.tried && res.tried.length > 1)
            ? ' (after ' + (res.tried.length - 1) + ' model(s) with no free quota)' : '';
          note.textContent = 'Answered by ' + (res.model || 'Gemini') + ' in ' +
            Math.round(res.ms) + ' ms' + also + ', from this site\'s briefing only.' +
            (spokenStyle ? ' Written to be read aloud, so it is short.' : '');
        })
        .catch(function (e) {
          // a remembered model that stopped working must not be tried for ever
          forgetModel();
          err.textContent = String(e.message || e);
          err.style.display = '';
          // a refused key is the one failure worth offering to fix on the spot
          if (/refused|not valid|restricted/i.test(String(e.message || e))) {
            var again = E('button', 'askghost', 'Enter a different key');
            again.addEventListener('click', function () { keyPane(true); });
            err.appendChild(doc.createElement('br'));
            err.appendChild(again);
          }
        })
        .then(function () {
          state.busy = false;
          go.disabled = false;
          go.textContent = 'Ask';
        });
    }

    /* THE SPEAKER TOGGLE, AND THE ONE CASE THAT HAD TO BE DECIDED RATHER THAN LEFT TO HAPPEN.
     *
     * If a visitor reads a full-length written answer and only then presses the speaker, the
     * words on screen were produced WITHOUT the cap. Reading them out would break the promise
     * the line above has just made, and three hundred words spoken at someone is the version of
     * this feature that gets turned off and never turned on again. So the page offers an honest
     * second request instead of pretending the answer it has was written to be heard. */
    spk.addEventListener('click', function () {
      state.speak = !state.speak;
      rememberSpeak(state.speak);
      syncSpeak();
      var stale = box.querySelector('.askreask');
      if (stale) stale.remove();
      if (!state.speak) {
        if (root.speechSynthesis) root.speechSynthesis.cancel();
        if (face) face.stop();                 // and the mouth closes with the voice
        return;
      }
      wakeFace();
      if (!out.textContent) return;            // nothing answered yet: it simply applies next
      if (state.answerWasSpokenStyle) { speakAloud(out.textContent, face); return; }
      var again = E('div', 'askreask');
      again.appendChild(E('span', null,
        'The answer above was written to be read, not heard, so it is longer than ' + CAP +
        ' words. '));
      var b = E('button', 'askghost', 'Ask again, shortened');
      b.type = 'button';
      b.addEventListener('click', function () { again.remove(); run(); });
      again.appendChild(b);
      out.parentNode.insertBefore(again, out.nextSibling);
    });

    /* THE MICROPHONE fills the field; it does not send. */
    var rec = null;
    mic.addEventListener('click', function () {
      var SR = recogniser();
      if (!SR) {
        err.textContent = 'This browser cannot listen. Chrome and Edge can; Firefox cannot. ' +
                          'You can still type your question.';
        err.style.display = '';
        return;
      }
      if (rec) { rec.stop(); return; }
      var r = new SR();
      r.lang = 'en-GB';
      r.interimResults = true;
      r.continuous = false;
      r.onresult = function (e) {
        var s = '';
        for (var i = e.resultIndex; i < e.results.length; i++) s += e.results[i][0].transcript;
        ta.value = s;                       // into the field, so it can be read and corrected
      };
      r.onend = function () {
        rec = null;
        mic.classList.remove('on');
        mic.setAttribute('aria-pressed', 'false');
      };
      r.onerror = function (e) {
        err.textContent = 'Could not listen: ' + ((e && e.error) || 'unknown') +
                          '. You can still type your question.';
        err.style.display = '';
      };
      rec = r;
      mic.classList.add('on');
      mic.setAttribute('aria-pressed', 'true');
      err.style.display = 'none';
      r.start();
    });

    go.addEventListener('click', run);
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run();
    });
    /* preventScroll, AND IT IS NOT A NICETY. The box is scrollable (max-height 86vh) and the face
     * is the first thing in it, so an ordinary focus() scrolls the textarea into view and takes
     * the character's head off the top of the dialog - on a laptop it opened showing a collar.
     * The box must open at the top; the cursor can be below the fold. */
    try { ta.focus({preventScroll: true}); } catch (e) { ta.focus(); }
  }

  root.SiteAsk = {
    open: function () {
      if (!root.navigator || root.navigator.onLine === false) {
        var box = shell('Ask about this website', null);
        box.appendChild(E('p', null,
          'This needs an internet connection: the question is answered by Google using your ' +
          'own key. Everything else on this site works offline, including every course.'));
        var r = E('div', 'askrow');
        var c = E('button', 'askghost', 'Close');
        c.addEventListener('click', close);
        r.appendChild(c);
        box.appendChild(r);
        return;
      }
      askPane();
    },
    keys: function () { keyPane(false); },
    close: close
  };
})(window, document);
