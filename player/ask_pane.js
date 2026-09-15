/* TRACK B - the Ask pane: a right rail that mirrors the left one.
 *
 * WHAT MAKES THIS DIFFERENT FROM A CHAT BOX: the model is never asked to look at the video. It is handed
 * SENTENCES BUILT FROM MEASUREMENTS - the room's objects with their sizes, colours and positions, what is
 * in the current shot, where the people are standing, and the lesson's own script - all produced by
 * player/describe.js, which gates/prose_parity.py holds character-for-character identical to the engine's
 * own prose. So an answer can be wrong in its English, but it cannot be wrong about the room.
 *
 * The grounding is also SHOWN. A person can open "what the model was told" and read exactly the text that
 * was sent, because an assistant that cites facts nobody can inspect is the thing this whole design is
 * trying not to be.
 */
(function (root) {
  'use strict';

  var D = root.Describe, A = root.Agent;

  // ---- the three actions. A dropdown was removed on purpose: three buttons, visible, no hunting.
  var ACTIONS = [
    { id: 'video', icon: '🎬', label: 'Ask about the video',
      tip: 'Ask about this lesson: the room, the people, what they say' },
    { id: 'frame', icon: '🖼', label: 'Ask about the current frame',
      tip: 'Ask about the exact moment on screen: what is in shot, and where' },
    { id: 'general', icon: '💬', label: 'Ask a general question',
      tip: 'Ask anything - the lesson is not attached to the question' }
  ];

  // ---- speech. Language for LISTENING and language for SPEAKING are separate on purpose: a learner
  // may ask in Arabic and want the answer in English, which is the common case in these lessons.
  var ASK_LANGS = [
    { id: 'en-GB', label: 'English (UK)' }, { id: 'en-US', label: 'English (US)' },
    { id: 'ar-SY', label: 'Arabic (Syria)' }, { id: 'ar-SA', label: 'Arabic (Gulf)' },
    { id: 'fr-FR', label: 'French' }
  ];
  var SAY_LANGS = [
    { id: 'en-GB', label: 'English (UK)' }, { id: 'en-US', label: 'English (US)' },
    { id: 'en-AU', label: 'English (Australia)' }, { id: 'en-IN', label: 'English (India)' },
    { id: 'ar-SY', label: 'Arabic (Syria)' }, { id: 'ar-EG', label: 'Arabic (Egypt)' },
    { id: 'fr-FR', label: 'French' }
  ];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function iconBtn(icon, tip, cls) {
    var b = el('button', 'ibtn' + (cls ? ' ' + cls : ''), icon);
    b.title = tip;                       // English tooltips throughout, as asked
    b.setAttribute('aria-label', tip);
    return b;
  }

  function AskPane(host, ctx) {
    this.host = host;
    this.ctx = ctx;                      // { scene(), index(), cameraAt(t), time(), transcript(), rosterText() }
    this.provider = (ctx && ctx.provider) || 'ollama';
    this.agent = A.create(this.provider);
    this.action = 'video';
    this.askLang = 'en-GB';
    this.sayLang = 'en-GB';
    this.speakBack = false;
    this.lastGrounding = '';
    this.busy = false;
    this.build();
    var self = this;
    var first = this.agent;
    this.agent.on(function (s) { if (self.agent === first) self.renderState(s); });
    this.refresh();
  }

  AskPane.prototype.build = function () {
    var self = this, h = this.host;
    h.innerHTML = '';

    var head = el('div', 'askhead');
    this.dot = el('i', 'dot');
    head.appendChild(this.dot);
    // WHERE THE MODEL RUNS. Two providers, one seam. Ollama is faster and bigger but cannot be reached
    // from the published URL (RESIDUALS K.1); a model in the browser is weaker but works everywhere,
    // because there is no server for the browser to refuse to talk to.
    this.provSel = el('select', 'langsel prov');
    this.provSel.title = 'Where the model runs';
    [['ollama', 'On this computer'], ['webllm', 'In this browser']].forEach(function (pr) {
      var o = el('option', null, pr[1]);
      o.value = pr[0];
      self.provSel.appendChild(o);
    });
    this.provSel.value = this.provider;
    this.provSel.onchange = function () { self.setProvider(self.provSel.value); };
    head.appendChild(this.provSel);
    this.modelSel = el('select', 'modelsel');
    this.modelSel.title = 'Choose which local model answers';
    this.modelSel.onchange = function () {
      // Selecting is an INTENTION, not a connection - the dot must go out until this model answers.
      self.agent.select(self.modelSel.value);
      self.agent.connect();
    };
    head.appendChild(this.modelSel);
    var re = iconBtn('⟳', 'Look again for models');
    re.onclick = function () { self.refresh(); };
    head.appendChild(re);
    // NOTHING DOWNLOADS WITHOUT THIS BEING PRESSED. It appears only when the selected model is not
    // already on this device, and its label carries the SIZE so the cost is visible before the click.
    this.dlBtn = el('button', 'ibtn dlmodel');
    // A tooltip from the start, not only once it is shown: a control with no title fails the pane's
    // own English-tooltip rule the moment it exists, whether or not anyone can see it yet.
    this.dlBtn.title = 'Download the selected model into this browser, once, from a public CDN';
    this.dlBtn.textContent = 'Download model';
    this.dlBtn.style.display = 'none';
    this.dlBtn.onclick = function () { self.downloadModel(); };
    h.appendChild(this.dlBtn);
    h.appendChild(head);

    this.stateLine = el('div', 'askstate');
    h.appendChild(this.stateLine);

    this.setupBox = el('div', 'setup');
    this.setupBox.style.display = 'none';
    h.appendChild(this.setupBox);

    var acts = el('div', 'askacts');
    this.actBtns = {};
    ACTIONS.forEach(function (a) {
      var b = iconBtn(a.icon, a.tip);
      b.appendChild(el('span', null, a.label));
      b.onclick = function () { self.setAction(a.id); };
      acts.appendChild(b);
      self.actBtns[a.id] = b;
    });
    h.appendChild(acts);

    this.log = el('div', 'asklog');
    h.appendChild(this.log);

    var form = el('div', 'askform');
    this.input = el('textarea', 'askinput');
    this.input.rows = 3;
    this.input.placeholder = 'Ask about this lesson…';
    this.input.onkeydown = function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { self.send(); e.preventDefault(); }
    };
    form.appendChild(this.input);

    var row = el('div', 'askrow');
    this.micBtn = iconBtn('🎤', 'Speak your question instead of typing');
    this.micBtn.onclick = function () { self.toggleMic(); };
    row.appendChild(this.micBtn);
    this.askLangSel = this.langSelect(ASK_LANGS, this.askLang, 'Language you will speak in');
    this.askLangSel.onchange = function () { self.askLang = self.askLangSel.value; };
    row.appendChild(this.askLangSel);

    row.appendChild(el('span', 'grow'));

    // The answer's language is chosen BEFORE sending, because it changes the prompt, not just playback.
    this.speakBtn = iconBtn('🔊', 'Read the answer aloud (choose the answer language first)');
    this.speakBtn.onclick = function () { self.speakBack = !self.speakBack; self.syncSpeak(); };
    row.appendChild(this.speakBtn);
    this.sayLangSel = this.langSelect(SAY_LANGS, this.sayLang, 'Language and accent of the spoken answer');
    this.sayLangSel.onchange = function () { self.sayLang = self.sayLangSel.value; };
    row.appendChild(this.sayLangSel);

    this.sendBtn = iconBtn('➤', 'Send the question (Ctrl+Enter)', 'primary');
    this.sendBtn.onclick = function () { self.send(); };
    row.appendChild(this.sendBtn);
    this.stopBtn = iconBtn('■', 'Stop the answer');
    this.stopBtn.disabled = true;
    this.stopBtn.onclick = function () { self.agent.stop(); };
    row.appendChild(this.stopBtn);
    form.appendChild(row);
    h.appendChild(form);

    this.setAction('video');
    this.syncSpeak();
  };

  AskPane.prototype.langSelect = function (langs, current, tip) {
    var s = el('select', 'langsel');
    s.title = tip;
    s.setAttribute('aria-label', tip);
    langs.forEach(function (l) {
      var o = el('option', null, l.label);
      o.value = l.id;
      if (l.id === current) o.selected = true;
      s.appendChild(o);
    });
    return s;
  };

  AskPane.prototype.setAction = function (id) {
    this.action = id;
    var self = this;
    ACTIONS.forEach(function (a) { self.actBtns[a.id].classList.toggle('on', a.id === id); });
    this.input.placeholder = id === 'frame' ? 'Ask about what is on screen right now…'
      : (id === 'general' ? 'Ask anything…' : 'Ask about this lesson…');
  };

  AskPane.prototype.syncSpeak = function () {
    this.speakBtn.classList.toggle('on', this.speakBack);
    this.speakBtn.setAttribute('aria-pressed', this.speakBack ? 'true' : 'false');
  };

  // CONNECT ON OPENING, not only when the dropdown changes. The first version connected from
  // modelSel.onchange alone, so a pane opened normally listed the models, selected one, and then sat
  // there grey for ever - and Send was disabled until connected, which made it a deadlock with no way
  // out except picking a DIFFERENT model. The gate had not caught it because the harness called
  // select() and connect() by hand and so never took the path a person takes.
  /* Switching provider is a fresh agent: a model list, a readiness state and a connection all belong to
   * the provider that produced them, and carrying any of them across would be the same class of defect
   * as the green dot that survived a model change. */
  AskPane.prototype.setProvider = function (kind) {
    var self = this;
    if (kind === this.provider) return;
    try {
      this.agent.stop();
    } catch (e) { /* nothing in flight */ }
    this.provider = kind;
    try {
      this.agent = A.create(kind);
    } catch (e) {
      this.stateLine.textContent = String((e && e.message) || e);
      return;
    }
    // A SNAPSHOT FROM A PROVIDER WE HAVE LEFT MUST NOT PAINT THE PANE. The old agent's listener is
    // still attached to it and still fires - measured on the live site, where switching to the browser
    // model showed 'no local model' and Ollama's own message, because Ollama emitted last.
    var mine = this.agent;
    this.agent.on(function (st) { if (self.agent === mine) self.renderState(st); });
    this._want = null;                       // force the model list to be rebuilt for the new provider
    this.refresh();
  };

  /* The download. Progress is shown in bytes against the size that was promised, because a percentage
   * with no denominator tells a person nothing about whether to wait. */
  AskPane.prototype.downloadModel = function () {
    var self = this;
    var id = this.modelSel.value;
    if (!id) return;
    this.dlBtn.disabled = true;
    var entry = (this.list || []).filter(function (m) { return m.name === id; })[0] || {};
    this.stateLine.textContent = 'Downloading ' + (entry.label || id) + ' (' + (entry.size || '?') + ')…';
    this.agent.provider.load(id, function (pr) {
      var pct = Math.round((pr.progress || 0) * 100);
      var got = pr.loaded ? (Math.round(pr.loaded / 1e6) + ' of ' + Math.round((pr.total || 0) / 1e6)
                             + ' MB') : (pr.text || '');
      self.stateLine.textContent = 'Downloading ' + (entry.label || id) + ' — ' + pct + '% ' + got;
    }).then(function () {
      self.dlBtn.disabled = false;
      self.stateLine.textContent = (entry.label || id) + ' is ready on this device.';
      self.refresh();
    }, function (e) {
      // A FAILED DOWNLOAD LEAVES NO HALF-MODEL CLAIMING TO BE USABLE - the provider only records a
      // model as installed once an engine exists.
      self.dlBtn.disabled = false;
      self.stateLine.textContent = 'Could not load it: ' + String((e && e.message) || e);
    });
  };

  AskPane.prototype.refresh = function () {
    var self = this;
    return this.agent.probe().then(function (s) {
      if (s.model && !s.connected) return self.agent.connect();
      return s;
    });
  };

  AskPane.prototype.renderState = function (s) {
    var self = this;
    this.dot.className = 'dot ' + (s.connected ? 'ok' : (s.state === 'busy' ? 'wait'
                          : (s.state === 'error' ? 'bad' : 'off')));
    // Rebuild the option list only when it actually changed, so the select does not close mid-choice.
    var want = s.models.map(function (m) { return m.name; }).join('');
    if (this._want !== want) {
      this._want = want;
      this.modelSel.innerHTML = '';
      if (!s.models.length) {
        var o = el('option', null, 'no local model');
        o.value = '';
        this.modelSel.appendChild(o);
      }
      s.models.forEach(function (m) {
        // THE COST IS IN THE LABEL, before anything is fetched: size, and how long it may take. A
        // model that cannot fit this browser's storage says so here rather than failing later.
        var bits = [m.label || m.name];
        if (m.size) bits.push(m.size);
        else if (m.bytes) bits.push((m.bytes / 1e9).toFixed(1) + ' GB');
        if (m.installed) bits.push('ready');
        else if (m.eta) bits.push('~' + m.eta);
        if (m.score) bits.push('scores ' + m.score);
        if (m.needsF16) bits.push('NEEDS shader-f16');
        else if (m.fits === false) bits.push('TOO BIG FOR THIS BROWSER');
        var o = el('option', null, bits.join(' · '));
        o.value = m.name;
        if (m.fits === false || m.needsF16) o.disabled = true;
        self.modelSel.appendChild(o);
      });
    }
    if (s.model) this.modelSel.value = s.model;
    this.modelSel.disabled = !s.models.length;

    var msg = s.connected ? ('Ready — ' + s.model + (s.reason ? ' · ' + s.reason : ''))
      : s.state === 'busy' ? (s.reason || 'Working…')
      : s.state === 'error' ? ('Could not use this model: ' + s.reason)
      : s.state === 'listed' ? 'Choose a model to connect'
      : (s.remote ? 'The AI needs the page to be opened from your own computer'
                  : 'No model running on this computer');
    this.stateLine.textContent = msg;

    var needSetup = (s.state === 'absent');
    this.setupBox.style.display = needSetup ? '' : 'none';
    if (needSetup && !this.setupBox.childElementCount) {
      if (s.remote) {
        // THE HONEST MESSAGE. This page was served from the internet, and the browser forbids it from
        // reaching a server on the viewer's own machine. Telling them to install Ollama would be a lie
        // by omission: they can install it and it still will not work from this address.
        this.setupBox.appendChild(el('p', null,
          'This page was opened from the internet, and your browser does not allow a web page served '
          + 'this way to talk to a program running on your own computer. That is a browser rule, not a '
          + 'setting you have got wrong.'));
        this.setupBox.appendChild(el('p', null,
          'The AI works when the same page is opened from a copy on your machine - for example through '
          + 'a local web server, or the Download button below. Everything else on this page works '
          + 'normally here.'));
      } else {
        this.setupBox.appendChild(el('p', null, s.setup.why));
        var ol = el('ol');
        s.setup.steps.forEach(function (t) { ol.appendChild(el('li', null, t)); });
        this.setupBox.appendChild(ol);
        var a = el('a', null, 'Get Ollama (free, ollama.com)');
        a.href = s.setup.site;
        a.target = '_blank';
        a.rel = 'noopener';
        this.setupBox.appendChild(a);
      }
    }
    // A SELECTED MODEL IS ENOUGH TO TRY. Asking is itself the proof of a working model, so gating Send
    // on a prior successful connection only removes the one action that could recover from a failure.
    var sel = (s.models || []).filter(function (m) { return m.name === s.model; })[0];
    var needsDownload = this.provider === 'webllm' && sel && !sel.installed
                     && sel.fits !== false && !sel.needsF16;
    this.dlBtn.style.display = needsDownload ? '' : 'none';
    if (needsDownload) {
      this.dlBtn.textContent = 'Download ' + (sel.label || sel.name) + ' (' + sel.size + ')';
      this.dlBtn.title = sel.licence + ' — about ' + sel.eta + ' on this connection. '
                       + 'Downloaded once and kept on this device.';
    }
    if (sel && sel.why && !s.connected) this.stateLine.textContent = sel.why;
    this.sendBtn.disabled = !s.model || this.busy;
    this.stopBtn.disabled = !this.busy;
  };

  /* ---------------------------------------------------------------- grounding
   * Everything below is MEASURED. Nothing here is a summary, an impression or a guess, and the whole
   * block is shown to the person on request.
   */
  AskPane.prototype.grounding = function () {
    if (this.action === 'general') return '';
    var idx = this.ctx.index && this.ctx.index();
    var scene = this.ctx.scene && this.ctx.scene();
    // THE ROOM AND THE CONVERSATION ARE INDEPENDENT FACTS. An early `if (!idx) return ''` meant a
    // lesson whose index had not arrived - or whose bundle predates the index entirely - sent NOTHING,
    // transcript included. Measured: the grounding came back empty with a perfectly good transcript
    // sitting in memory. Each source is added if it is there; only having none of them is empty.
    var parts = [];
    if (this.action === 'frame') {
      var t = this.ctx.time ? this.ctx.time() : 0;
      var cam = this.ctx.cameraAt ? this.ctx.cameraAt(t) : null;
      parts.push('At ' + t.toFixed(2) + ' seconds into the lesson:');
      if (idx && cam) {
        parts.push(D.shotLine(idx, cam, (scene && scene.camera && scene.camera.fov) || 38.0));
        if (scene) parts.push(D.actorsLine(scene, idx, cam));
      }
      if (idx) parts.push(D.worldProse(idx));
    } else {
      if (idx) parts.push(D.worldProse(idx));
      // WHO SAYS WHAT, IN ORDER - the thing that makes "reconstruct the conversation" answerable. It
      // is built from the lesson's own scene, so it no longer depends on the Script pane having been
      // opened; that dependency is exactly how an empty script came to be sent with nothing saying so.
      if (this.ctx.rosterText) {
        var ros = this.ctx.rosterText();
        if (ros) parts.push(ros);
      }
      if (this.ctx.transcript) {
        var tr = this.ctx.transcript();
        if (tr) parts.push('\n\n' + tr);
      }
    }
    return parts.filter(Boolean).join(' ');
  };

  AskPane.prototype.system = function () {
    var say = this.sayLang;
    var lang = say.indexOf('ar') === 0 ? 'Arabic' : (say.indexOf('fr') === 0 ? 'French' : 'English');
    var parts = [
      'You answer questions about a 3D language-lesson video.',
      this.action === 'general' ? 'No lesson facts are attached to this question.'
        : 'FACTS below are measured from the lesson itself and are true. Use them and nothing else for '
          + 'anything about the room, the objects, their sizes, colours, positions or who is where. '
          + 'If the FACTS do not answer the question, say so plainly rather than guessing.'
    ];
    // ANSWERING IN A SECOND LANGUAGE COSTS ACCURACY, and it is not a small effect. Measured on
    // qwen2.5:7b with the same facts and the same question: in English it said the cabinets are red and
    // there are four cars, both right; asked for Arabic it said grey and five - fluent, confident and
    // wrong on both. A wrong answer that reads well is worse for a learner than one that reads badly.
    //
    // Making it settle the answer in English FIRST and then translate only that fixed the count and
    // stopped it changing the colour. So the instruction differs by language on purpose.
    if (lang === 'English') {
      parts.push('Answer in English.');
    } else {
      // The models reliably show their working here rather than suppressing it, so the format is
      // SPECIFIED instead of fought. It is also the better answer for a language lesson: the learner
      // sees both, and the read-aloud speaks only the half they chose (see say()).
      parts.push('FIRST work out the answer in English from the FACTS. THEN translate it. '
                 + 'Reply with exactly two lines and no other text:\n'
                 + 'EN: <the English answer>\n'
                 + lang.toUpperCase() + ': <the same answer in ' + lang + '>\n'
                 + 'Do not change any number, colour, measurement or name while translating.');
    }
    parts.push('Be brief: a few sentences unless asked for more.');
    return parts.join(' ');
  };

  AskPane.prototype.send = function () {
    var self = this;
    var q = (this.input.value || '').trim();
    if (!q || this.busy) return;
    this.busy = true;
    this.sendBtn.disabled = true;
    this.stopBtn.disabled = false;
    this.input.value = '';

    var ground = this.grounding();
    this.lastGrounding = ground;
    var prompt = ground ? ('FACTS:\n' + ground + '\n\nQUESTION: ' + q) : q;

    this.addTurn('you', q);
    var bubble = this.addTurn('ai', '');
    if (ground) this.addGroundingToggle(bubble, ground);
    var body = el('div', 'body');
    bubble.appendChild(body);
    var exp = iconBtn('⤢', 'Open this answer in a larger window, with a copy button');
    exp.className = 'ibtn expand';
    exp.onclick = function () { self.openModal(body.textContent, exp); };
    bubble.appendChild(exp);

    this.agent.ask({
      prompt: prompt, system: this.system(),
      onToken: function (tk) {
        var wasAtBottom = self.atBottom();
        body.textContent += tk;
        self.follow(wasAtBottom);       // resumes on its own once the reader returns to the bottom
      }
    }).then(function (r) {
      self.busy = false;
      self.sendBtn.disabled = false;
      self.stopBtn.disabled = true;
      if (self.speakBack) self.say(r.text);
    }, function (e) {
      self.busy = false;
      self.sendBtn.disabled = false;
      self.stopBtn.disabled = true;
      body.textContent = (body.textContent || '') + '\n[stopped: ' + ((e && e.message) || e) + ']';
    });
  };

  // ---------------------------------------------------------------- the log follows, it does not yank
  // STICK TO THE BOTTOM ONLY IF ALREADY THERE. A log that scrolls itself down while someone is reading
  // an older answer is fighting them, and the reader loses every time because the model keeps writing.
  var STICK_PX = 40;                     // how close to the bottom still counts as "at the bottom"

  AskPane.prototype.atBottom = function () {
    var l = this.log;
    return (l.scrollHeight - l.scrollTop - l.clientHeight) <= STICK_PX;
  };

  AskPane.prototype.follow = function (wasAtBottom) {
    if (wasAtBottom) this.log.scrollTop = this.log.scrollHeight;
  };

  // ---------------------------------------------------------------- expand into a modal
  AskPane.prototype.openModal = function (text, opener) {
    var self = this;
    var back = el('div', 'modalback');
    var box = el('div', 'modal');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'The full answer');
    box.appendChild(el('h4', null, 'Answer'));
    var body = el('div', 'mbody', text);
    box.appendChild(body);
    var foot = el('div', 'mfoot');
    var copy = el('button', 'ibtn', 'Copy');
    copy.title = 'Copy this answer to the clipboard';
    copy.onclick = function () {
      var done = function () {
        copy.textContent = 'Copied';
        setTimeout(function () { copy.textContent = 'Copy'; }, 1400);
      };
      try {
        navigator.clipboard.writeText(text).then(done, function () { self.copyFallback(text, done); });
      } catch (e) { self.copyFallback(text, done); }
    };
    var close = el('button', 'ibtn', 'Close');
    close.title = 'Close (Escape)';
    foot.appendChild(copy);
    foot.appendChild(close);
    box.appendChild(foot);
    back.appendChild(box);

    function shut() {
      document.removeEventListener('keydown', onKey, true);
      if (back.parentNode) back.parentNode.removeChild(back);
      // The keyboard must not be stranded: focus goes back to the control that opened this.
      if (opener && opener.focus) opener.focus();
    }
    function onKey(e) {
      if (e.key === 'Escape') { shut(); e.preventDefault(); return; }
      if (e.key !== 'Tab') return;
      // Tab stays inside. A modal that lets focus wander behind it is a defect even when it looks right.
      var f = box.querySelectorAll('button, [href], textarea, select, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
    close.onclick = shut;
    back.onclick = function (e) { if (e.target === back) shut(); };
    document.addEventListener('keydown', onKey, true);
    document.body.appendChild(back);
    copy.focus();
    this._modal = {back: back, text: text, close: shut};
    return back;
  };

  AskPane.prototype.copyFallback = function (text, done) {
    // navigator.clipboard needs a secure context; a plain http:// page is not one.
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch (e) { /* nothing more we can offer; the text is on screen to select */ }
  };

  AskPane.prototype.addTurn = function (who, text) {
    var wasAtBottom = this.atBottom();
    var t = el('div', 'turn ' + who);
    if (text) t.appendChild(el('div', 'body', text));
    this.log.appendChild(t);
    this.follow(wasAtBottom);
    return t;
  };

  AskPane.prototype.addGroundingToggle = function (bubble, ground) {
    var b = el('button', 'ghost', 'what the model was told');
    b.title = 'Show the measured facts sent with this question';
    var pre = el('pre', 'ground', ground);
    pre.style.display = 'none';
    b.onclick = function () { pre.style.display = pre.style.display === 'none' ? '' : 'none'; };
    bubble.appendChild(b);
    bubble.appendChild(pre);
  };

  /* ---------------------------------------------------------------- voice
   * Both directions are the BROWSER's, not ours: no audio is uploaded by this page, and no voice model
   * is downloaded by it. Recognition is a browser service and its availability is reported honestly
   * rather than assumed - Chrome has it, Firefox does not.
   */
  AskPane.prototype.toggleMic = function () {
    var SR = root.SpeechRecognition || root.webkitSpeechRecognition;
    if (!SR) {
      this.stateLine.textContent = 'This browser cannot listen. Chrome and Edge can; Firefox cannot.';
      return;
    }
    var self = this;
    if (this._rec) { this._rec.stop(); this._rec = null; this.micBtn.classList.remove('on'); return; }
    var r = new SR();
    r.lang = this.askLang;
    r.interimResults = true;
    r.continuous = false;
    r.onresult = function (e) {
      var s = '';
      for (var i = e.resultIndex; i < e.results.length; i++) s += e.results[i][0].transcript;
      self.input.value = s;
    };
    r.onend = function () { self._rec = null; self.micBtn.classList.remove('on'); };
    r.onerror = function (e) {
      self.stateLine.textContent = 'Could not listen: ' + (e.error || 'unknown');
    };
    this._rec = r;
    this.micBtn.classList.add('on');
    r.start();
  };

  // Only the chosen language is spoken. A bilingual answer is shown in full because a learner benefits
  // from seeing both, but reading the English aloud to someone who asked for Arabic would defeat the
  // point of choosing.
  AskPane.prototype.spoken = function (text) {
    var say = this.sayLang;
    var lang = say.indexOf('ar') === 0 ? 'ARABIC' : (say.indexOf('fr') === 0 ? 'FRENCH' : 'ENGLISH');
    var lines = String(text || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var m = lines[i].match(/^\s*([A-Z]+)\s*:\s*(.*)$/);
      if (m && m[1] === lang) return m[2].trim();
      if (m && lang === 'ENGLISH' && m[1] === 'EN') return m[2].trim();
    }
    return String(text || '').trim();
  };

  AskPane.prototype.say = function (text) {
    if (!root.speechSynthesis || !text) return;
    text = this.spoken(text);
    var u = new SpeechSynthesisUtterance(text);
    u.lang = this.sayLang;
    // Prefer a voice that actually matches the chosen accent; fall back to the language, then to
    // whatever the browser has. getVoices() can legitimately return an empty list.
    var vs = root.speechSynthesis.getVoices() || [];
    var exact = vs.filter(function (v) { return v.lang === u.lang; });
    var loose = vs.filter(function (v) { return (v.lang || '').slice(0, 2) === u.lang.slice(0, 2); });
    if (exact.length) u.voice = exact[0];
    else if (loose.length) u.voice = loose[0];
    root.speechSynthesis.cancel();
    root.speechSynthesis.speak(u);
  };

  root.AskPane = AskPane;
})(typeof window !== 'undefined' ? window : globalThis);
