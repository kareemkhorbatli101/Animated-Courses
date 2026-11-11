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

  var SYSTEM = [
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

  var state = { brief: null, model: '', busy: false, el: null };

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
    inp.placeholder = 'AIza…';
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
        err.textContent = 'That does not look like a key. It is one long line of letters ' +
                          'and numbers, copied whole from AI Studio.';
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

  // ---- choosing a model ----------------------------------------------------------------
  function pickModel(provider) {
    var remembered = '';
    try { remembered = root.localStorage.getItem(LS_MODEL) || ''; } catch (e) { remembered = ''; }
    if (remembered) { provider.select(remembered); return Promise.resolve(remembered); }
    return provider.models().then(function (list) {
      if (!list.length) throw new Error('This key cannot use any model that answers questions.');
      var name = list[0].name;
      try { root.localStorage.setItem(LS_MODEL, name); } catch (e) { /* fine */ }
      provider.select(name);
      return name;
    });
  }

  // ---- the question --------------------------------------------------------------------
  function askPane() {
    var K = root.Keyring;
    if (!K || !K.has()) return keyPane(true);

    var box = shell('Ask about this website',
                    'Answered from this site\'s own briefing, using your Gemini key.');

    var lab = E('label', null, 'Your question');
    var ta = E('textarea');
    ta.placeholder = 'What is on this site? Which course suits an accountant? Does it work offline?';
    box.appendChild(lab);
    box.appendChild(ta);

    var row = E('div', 'askrow');
    var go = E('button', 'askbtn', 'Ask');
    var shown = E('button', 'askghost', 'What was I told?');
    var keybtn = E('button', 'askghost', 'Key (' + K.hint() + ')');
    var closeb = E('button', 'askghost', 'Close');
    row.appendChild(go); row.appendChild(shown); row.appendChild(keybtn); row.appendChild(closeb);
    box.appendChild(row);

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
      state.busy = true;
      go.disabled = true;
      go.textContent = 'Asking…';

      var provider = new root.GeminiProvider({ keyring: K });
      loadBrief()
        .then(function (brief) {
          return pickModel(provider).then(function () {
            return provider.ask({
              system: SYSTEM + '\n\n--- BRIEFING ABOUT THE SITE ---\n' + brief,
              prompt: q,
              maxTokens: 700,
              temperature: 0.2
            });
          });
        })
        .then(function (res) {
          out.textContent = res.text;
          note.textContent = 'Answered by ' + (res.model || 'Gemini') + ' in ' +
            Math.round(res.ms) + ' ms, from this site\'s briefing only.';
        })
        .catch(function (e) {
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

    go.addEventListener('click', run);
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run();
    });
    ta.focus();
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
