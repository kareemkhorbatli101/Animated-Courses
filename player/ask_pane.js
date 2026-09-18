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

  // v28.3: the agent module is read when it is USED, not when this file loads: a host that hands over its own
  // assistant never loads agent.js at all (PNE-08, AI-03).
  var D = root.Describe;

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

  function mmss(sec) {
    var m = Math.floor(sec / 60), x = Math.floor(sec % 60);
    return m + 'm ' + (x < 10 ? '0' : '') + x + 's';
  }

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

  // v28.3 (component): WHO ANSWERS is the host's call. ctx may carry
  //   agent        an object implementing the Agent seam (the host's own assistant, or a provider it wrapped)
  //   agentLabel   how to name it: "Provided by <label>"
  //   permissions  function -> {ownAgent, modelDownload, localNetwork}: may this pane use its OWN models?
  //   request      function(name, details) -> Promise<bool>: ask the host at the moment of need
  //   modalRoot    where the answer dialog is attached (a shadow root's container, not the document)
  // With none of these (our site before v28.3, and any page that builds the pane directly) it behaves exactly as it did.
  function AskPane(host, ctx) {
    this.host = host;
    this.ctx = ctx;                      // { scene(), index(), cameraAt(t), time(), transcript(), rosterText() }
    this.hostAgent = (ctx && ctx.agent) || null;
    this.hostLabel = (ctx && ctx.agentLabel) || 'this page';
    var kinds = this.ownKinds();
    this.provider = this.hostAgent ? 'host' : ((ctx && ctx.provider) || kinds[0] || 'ollama');
    this.agent = this.hostAgent ? this.hostAgent : root.Agent.create(this.provider);
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

  AskPane.prototype.perms = function () {
    var p = (this.ctx && typeof this.ctx.permissions === 'function') ? this.ctx.permissions() : null;
    return p || {ownAgent: true, modelDownload: true, localNetwork: true};
  };
  // The page's own models this pane may offer: none without ownAgent (unless the host can be ASKED at the moment of
  // need), no Ollama without localNetwork.
  AskPane.prototype.ownKinds = function () {
    var p = this.perms(), ask = !!(this.ctx && this.ctx.request);
    if (!p.ownAgent && !ask) return [];
    var out = [];
    if (p.localNetwork || (ask && !p.ownAgent)) out.push('ollama');
    out.push('webllm');
    return out;
  };
  AskPane.prototype.fillProviders = function () {
    var self = this, sel = this.provSel;
    sel.innerHTML = '';
    if (this.hostAgent) {
      var o = el('option', null, 'Provided by ' + this.hostLabel);
      o.value = 'host';
      sel.appendChild(o);
    }
    var names = {ollama: 'On this computer', webllm: 'In this browser'};
    this.ownKinds().forEach(function (k) {
      var o2 = el('option', null, names[k]);
      o2.value = k;
      sel.appendChild(o2);
    });
    sel.value = this.provider;
    // one choice is not a choice: a pane that can only use the host's assistant says so, and cannot be switched
    sel.disabled = sel.options.length < 2;
    sel.title = this.hostAgent && sel.options.length < 2 ? ('Answers come from ' + this.hostLabel)
                                                        : 'Where the model runs';
  };

  AskPane.prototype.build = function () {
    var self = this, h = this.host;
    h.innerHTML = '';

    // THREE CHILDREN, THREE ROWS. Everything above the log lives in one block, so the pane's
    // children and its grid rows can never drift apart again - which is what put the composer in an
    // implicit seventh row and left the 1fr with the wrong element.
    var top = el('div', 'asktop');
    var head = el('div', 'askhead');
    this.dot = el('i', 'dot');
    head.appendChild(this.dot);
    // WHERE THE MODEL RUNS. Two providers, one seam. Ollama is faster and bigger but cannot be reached
    // from the published URL (RESIDUALS K.1); a model in the browser is weaker but works everywhere,
    // because there is no server for the browser to refuse to talk to.
    this.provSel = el('select', 'langsel prov');
    this.provSel.title = 'Where the model runs';
    this.fillProviders();
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
    // v28.3: with modelDownload withheld by the host, the button never exists (PRM-04).
    this.dlBtn = this.perms().modelDownload ? el('button', 'ibtn dlmodel') : null;
    if (this.dlBtn) {
    // A tooltip from the start, not only once it is shown: a control with no title fails the pane's
    // own English-tooltip rule the moment it exists, whether or not anyone can see it yet.
    this.dlBtn.title = 'Download the selected model into this browser, once, from a public CDN';
    this.dlBtn.textContent = 'Download model';
    this.dlBtn.style.display = 'none';
    this.dlBtn.onclick = function () { self.downloadModel(); };
    }
    top.appendChild(head);

    this.stateLine = el('div', 'askstate');
    top.appendChild(this.stateLine);

    this.setupBox = el('div', 'setup');
    this.setupBox.style.display = 'none';
    top.appendChild(this.setupBox);

    var acts = el('div', 'askacts');
    this.actBtns = {};
    ACTIONS.forEach(function (a) {
      var b = iconBtn(a.icon, a.tip);
      b.appendChild(el('span', null, a.label));
      b.onclick = function () { self.setAction(a.id); };
      acts.appendChild(b);
      self.actBtns[a.id] = b;
    });
    if (this.dlBtn) top.appendChild(this.dlBtn);
    top.appendChild(acts);
    h.appendChild(top);

    this.log = el('div', 'asklog');
    // FINDABLE WHEN EMPTY, which is exactly when a person needs to find it. Removed by the first
    // answer rather than left behind it.
    this.empty = el('div', 'logempty', 'Answers will appear here.');
    this.log.appendChild(this.empty);
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
    // TWO DIFFERENT CONTROLS, TOLD APART AT A GLANCE. They were two identical grey boxes whose
    // only difference was a tooltip. A microphone for what you SPEAK, a speaker for what it ANSWERS
    // in, plus a legend in words underneath - the icons alone would still be a guess.
    row.appendChild(el('i', 'lgicon', '\uD83C\uDFA4'));
    this.askLangSel = this.langSelect(ASK_LANGS, this.askLang, 'The language YOU will speak in');
    this.askLangSel.onchange = function () { self.askLang = self.askLangSel.value; };
    row.appendChild(this.askLangSel);

    row.appendChild(el('span', 'grow'));

    // The answer's language is chosen BEFORE sending, because it changes the prompt, not just playback.
    this.speakBtn = iconBtn('🔊', 'Read the answer aloud (choose the answer language first)');
    this.speakBtn.onclick = function () { self.speakBack = !self.speakBack; self.syncSpeak(); };
    row.appendChild(this.speakBtn);
    row.appendChild(el('i', 'lgicon', '\uD83D\uDD0A'));
    this.sayLangSel = this.langSelect(SAY_LANGS, this.sayLang,
                                      'The language and accent the ANSWER is given in');
    this.sayLangSel.onchange = function () { self.sayLang = self.sayLangSel.value; };
    row.appendChild(this.sayLangSel);

    // SEND FULL DETAIL. Unticked, the frame prompt carries only what is in the picture and a count
    // of what is not; ticked, it carries every object with its coordinates and the whole conversation.
    // It is opt-in because small browser models degrade as the prompt grows, and small browser models
    // are the ones that answered both of the questions that produced this control wrongly.
    var dwrap = el('label', 'askdetail');
    this.detailBox = el('input');
    this.detailBox.type = 'checkbox';
    dwrap.title = 'Ask about the current frame: also send every object in the room with its '
                + 'coordinates, not only the ones in shot. A longer prompt - small models answer '
                + 'shorter prompts better.';
    dwrap.appendChild(this.detailBox);
    this.detailLabel = el('span', null, 'full detail');
    dwrap.appendChild(this.detailLabel);
    this.detailWrap = dwrap;
    row.appendChild(dwrap);

    this.sendBtn = iconBtn('➤', 'Send the question (Ctrl+Enter)', 'primary');
    this.sendBtn.onclick = function () { self.send(); };
    row.appendChild(this.sendBtn);
    this.stopBtn = iconBtn('■', 'Stop the answer');
    this.stopBtn.disabled = true;
    this.stopBtn.onclick = function () { self.agent.stop(); };
    row.appendChild(this.stopBtn);
    form.appendChild(row);
    var leg = el('div', 'langleg');
    var l1 = el('span', null, ' what you speak');
    l1.insertBefore(el('i', null, '\uD83C\uDFA4'), l1.firstChild);
    var l2 = el('span', null, ' what it answers in');
    l2.insertBefore(el('i', null, '\uD83D\uDD0A'), l2.firstChild);
    leg.appendChild(l1);
    leg.appendChild(l2);
    form.appendChild(leg);
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
    // THE DETAIL TOGGLE BELONGS TO THE FRAME. It adds the objects that are NOT in shot, which is a
    // question only frame mode can be asked - "Ask about the video" already describes the whole room
    // and carries the whole conversation. A control that is present and silently does nothing is
    // worse than one that says which mode it is for, so it is disabled and says so.
    if (this.detailWrap) {
      var on = (id === 'frame');
      this.detailBox.disabled = !on;
      this.detailWrap.classList.toggle('off', !on);
      this.detailWrap.title = on
        ? ('Also send every object in the room with its coordinates, not only the ones in shot. '
           + 'A longer prompt - small models answer shorter prompts better.')
        : 'Only used by “Ask about the current frame”. This mode already sends the whole '
          + 'room and the whole conversation.';
    }
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
  AskPane.prototype.setProvider = function (kind, noAsk) {
    var self = this;
    if (kind === this.provider) return;
    // v28.3: an OWN model is used only with the host's permission - asked at this moment when the host can be asked.
    if (kind !== 'host' && !noAsk && this.ctx && this.ctx.request) {
      var prev = this.provider;
      Promise.resolve(this.ctx.request('ownAgent', {provider: kind})).then(function (ok) {
        if (ok) self.setProvider(kind, true);
        else { self.provSel.value = prev; self.stateLine.textContent = 'Not permitted by this page'; }
      }, function () { self.provSel.value = prev; self.stateLine.textContent = 'Not permitted by this page'; });
      return;
    }
    try {
      this.agent.stop();
    } catch (e) { /* nothing in flight */ }
    this.provider = kind;
    try {
      this.agent = kind === 'host' ? this.hostAgent : root.Agent.create(kind);
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
  // v28.3: the host may withdraw permission at any time; an own model's answer in flight is stopped.
  AskPane.prototype.permissionsChanged = function () {
    // an agent built from a provider the host handed over is the component's OWN: withdrawing ownAgent stops it,
    // in flight and for the future (PRM-07)
    if (this.ctx && this.ctx.agentIsOwn && !this.perms().ownAgent) {
      try { this.agent.stop(); } catch (e) { /* nothing in flight */ }
      this.hostAgent = null;
      this.stateLine.textContent = 'Not permitted by this page';
      this.fillProviders();
      return;
    }
    if (this.provider !== 'host' && this.ownKinds().indexOf(this.provider) < 0) {
      try { this.agent.stop(); } catch (e) { /* nothing in flight */ }
      if (this.hostAgent) this.setProvider('host', true);
      else this.stateLine.textContent = 'Not permitted by this page';
    }
    if (!this.perms().modelDownload && this.dlBtn) {
      if (this.dlBtn.parentNode) this.dlBtn.parentNode.removeChild(this.dlBtn);
      this.dlBtn = null;
    }
    this.fillProviders();
  };

  AskPane.prototype.dispose = function () {
    try { this.agent.stop(); } catch (e) { /* nothing in flight */ }
    if (this._tick) { clearInterval(this._tick); this._tick = null; }
    if (this._rec) { try { this._rec.stop(); } catch (e) {} this._rec = null; }
    if (this._modal) { try { this._modal.close(); } catch (e) {} }
    this.host.innerHTML = '';
  };

  AskPane.prototype.downloadModel = function () {
    var self = this;
    var id = this.modelSel.value;
    if (!id || !this.dlBtn) return;
    if (this.ctx && this.ctx.request && !this._dlAsked) {
      var entry0 = (this.list || []).filter(function (m) { return m.name === id; })[0] || {};
      Promise.resolve(this.ctx.request('modelDownload', {model: id, bytes: entry0.bytes || 0})).then(function (ok) {
        if (!ok) { self.stateLine.textContent = 'Not permitted by this page'; return; }
        self._dlAsked = true;
        try { self.downloadModel(); } finally { self._dlAsked = false; }
      });
      return;
    }
    this.dlBtn.disabled = true;
    var entry = (this.list || []).filter(function (m) { return m.name === id; })[0] || {};
    this.stateLine.textContent = 'Downloading ' + (entry.label || id) + ' (' + (entry.size || '?') + ')…';
    // MEGABYTES HAVE TO BE DERIVED. WebLLM's progress report carries {progress, timeElapsed, text}
    // and NO byte fields on this version, so `pr.loaded` is always 0 and a byte readout would sit at
    // zero for ever. They come from the size the CATALOGUE promised before the click, and are labelled
    // approximate, because presenting a derived number as a reported one is the same dishonesty as the
    // disk-versus-wire byte labels in v27.36.
    var t0 = Date.now(), prog = 0, done = false;
    var paint = function () {
      if (done) return;
      var secs = (Date.now() - t0) / 1000;
      var total = entry.bytes || 0;
      var got = total * prog;
      var rate = secs > 1 ? got / secs : 0;
      self.stateLine.textContent =
        'Downloading ' + (entry.label || id) + ' — ~' + Math.round(got / 1e6) + ' of '
        + Math.round(total / 1e6) + ' MB · ' + Math.round(prog * 100) + '% · '
        + mmss(secs) + (rate > 0 ? ' · ' + (rate / 1e6).toFixed(1) + ' MB/s' : '');
    };
    // A ONE-SECOND TICKER, independent of the callbacks: chunks arrive seconds apart and a frozen
    // readout during a nine-minute download is indistinguishable from a hang.
    this._tick = setInterval(paint, 1000);
    var stopTick = function () {
      done = true;
      if (self._tick) { clearInterval(self._tick); self._tick = null; }
    };
    paint();
    this.agent.provider.load(id, function (pr) {
      prog = pr.progress || prog;
      paint();
    }).then(function () {
      stopTick();
      self.dlBtn.disabled = false;
      self.stateLine.textContent = (entry.label || id) + ' is ready on this device.';
      self.refresh();
    }, function (e) {
      // A FAILED DOWNLOAD LEAVES NO HALF-MODEL CLAIMING TO BE USABLE - the provider only records a
      // model as installed once an engine exists - and the ticker STOPS, because a counter still
      // climbing against a dead transfer is worse than no counter.
      stopTick();
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
                     && sel.fits !== false && !sel.needsF16 && !!this.dlBtn;
    if (this.dlBtn) this.dlBtn.style.display = needsDownload ? '' : 'none';
    if (needsDownload) {
      this.dlBtn.textContent = 'Download ' + (sel.label || sel.name) + ' (' + sel.size + ')';
      this.dlBtn.title = sel.licence + ' — about ' + sel.eta + ' on this connection. '
                       + 'Downloaded once and kept on this device.';
    }
    if (sel && sel.why && !s.connected) this.stateLine.textContent = sel.why;
    // SEND IS NOT GATED ON A MODEL ANY MORE. The router answers counts, positions and "can I see"
    // from the index alone, so a page with no model loaded is still useful - and Send greyed out was
    // previously the only thing the pane could say about that.
    this.sendBtn.disabled = this.busy;
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
    var detail = !!(this.detailBox && this.detailBox.checked);
    if (this.action === 'frame') {
      var t = this.ctx.time ? this.ctx.time() : 0;
      var cam = this.ctx.cameraAt ? this.ctx.cameraAt(t) : null;
      var fov = (scene && scene.camera && scene.camera.fov) || 38.0;
      parts.push(D.scopeLine(true));
      // THE FRAME, SEPARATED FROM THE ROOM. This used to be a timestamp, one shot sentence and then
      // the WHOLE ROOM appended unmarked - measured, the shot line was 5% of the prompt and the room
      // 85%, with eleven of fifteen objects not in the picture described in the same confident voice.
      // A model asked "can I see a car" answered no while a car filled the centre of the frame, which
      // was a fair reading of what it was sent.
      if (idx && cam) {
        parts.push(D.frameBlock(idx, scene, cam, fov, t, 16.0 / 9.0, detail));
      } else if (idx) {
        parts.push(D.worldProse(idx));
      }
    } else {
      // WHAT THESE FACTS COVER, said rather than left to be inferred. The first wrong answer was to
      // a question about "the first frame" asked here, where there is no frame, no camera and no
      // clock - and the model answered it instead of saying so.
      parts.push(D.scopeLine(false));
      // v28.3: WHICH LESSON, said. A question about "this lesson" was answered from facts that never named it - so a
      // host's assistant, which may serve many lessons, could not tell which one it was being asked about.
      if (scene && scene.title) parts.push('This lesson is titled "' + scene.title + '".');
      if (idx) parts.push(D.worldProse(idx));
      // WHO SAYS WHAT, IN ORDER - the thing that makes "reconstruct the conversation" answerable. It
      // is built from the lesson's OWN scene, so it no longer depends on the Script pane having been
      // opened; that dependency is exactly how an empty script came to be sent with nothing saying so.
      if (this.ctx.rosterText) {
        var ros = this.ctx.rosterText();
        if (ros) parts.push(ros);
      }
      // THE TRANSCRIPT STAYS, ALWAYS. v27.42 briefly put it behind the detail toggle, because it is
      // a third of this prompt and mentions "car" twice in eight turns - bulk competing with the room
      // facts on a counting question. That reasoning is sound about SIZE and wrong about the PRODUCT:
      // "Ask about the video" exists so a learner can ask about what was said and reconstruct the
      // conversation, and a mode that answers "tick a box first" does not do that. gates/
      // transcript_check.py encodes the requirement and caught the removal. Size is not a reason to
      // withdraw a feature; if this prompt must shrink, it shrinks somewhere the learner did not ask
      // for. See RESIDUALS R.1c.
      if (this.ctx.transcript) {
        var tr = this.ctx.transcript();
        if (tr) parts.push('\n\n' + tr);
      }
    }
    return parts.filter(Boolean).join(' ');
  };

  /* ---------------------------------------------------------------- the deterministic router
   * ASK THE INDEX BEFORE ASKING THE MODEL. Both questions that produced this were lookups: a count
   * over in_view() and a membership test on in_shot(). Answering them here is exact, instant and
   * works with no model loaded at all - and a 0.5B model got both wrong.
   * Returns a string, or null when the question is not one the index can settle.
   */
  AskPane.prototype.routed = function (q) {
    if (this.action === 'general') return null;
    if (!root.Answer) return null;
    var idx = this.ctx.index && this.ctx.index();
    var scene = this.ctx.scene && this.ctx.scene();
    if (!idx) return null;
    var t = this.ctx.time ? this.ctx.time() : 0;
    var cam = (this.action === 'frame' && this.ctx.cameraAt) ? this.ctx.cameraAt(t) : null;
    // World mode still gets the camera, because a question can ASK about the frame from either mode
    // - "how many cars does the first frame have" was typed here - and Answer.scopeOf() decides.
    if (!cam && this.ctx.cameraAt) cam = this.ctx.cameraAt(t);
    var fov = (scene && scene.camera && scene.camera.fov) || 38.0;
    try {
      var pair = root.Answer.answer(q, idx, scene, cam, fov, t,
                                    this.action === 'frame' ? 'frame' : 'room');
      return pair && pair[0] ? pair[0] : null;
    } catch (e) { return null; }
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

    // THE ROUTER FIRST. A question the index can settle is settled here, exactly, in under a
    // millisecond, whether or not a model is loaded - and the model is never asked. The two questions
    // this was built for were both of that kind, and both were answered wrongly by a model that had
    // the right facts in front of it.
    var direct = this.routed(q);
    if (direct) {
      this.addTurn('you', q);
      var dbub = this.addTurn('ai', '');
      // THE FACTS ARE STILL SHOWN. A routed answer has no prompt, because no model was asked - but it
      // is not fact-free, and this pane's whole point is that the measurements behind an answer are
      // one click away. Shipping the router without this quietly made the MOST trustworthy answers
      // the only uninspectable ones, which is precisely backwards. Caught by ask_pane_check.
      var dground = this.grounding();
      this.lastGrounding = dground;
      if (dground) this.addGroundingToggle(dbub, dground, true);
      var dbody = el('div', 'body', direct);
      dbub.appendChild(dbody);
      // SAY WHERE THE ANSWER CAME FROM. An answer with no model behind it is a stronger claim, not a
      // weaker one, and the person is entitled to know which kind they are reading.
      var mark = el('div', 'measured', 'Measured from the lesson - answered without the model.');
      dbub.appendChild(mark);
      var dexp = iconBtn('⤢', 'Open this answer in a larger window, with a copy button');
      dexp.className = 'ibtn expand';
      dexp.onclick = function () { self.openModal(dbody.textContent, dexp); };
      dbub.appendChild(dexp);
      this.busy = false;
      this.sendBtn.disabled = false;
      this.stopBtn.disabled = true;
      this.follow(true);
      if (this.speakBack) this.say(direct);
      return;
    }

    // NO MODEL CHOSEN. The agent's own snapshot is the authority - there is no ready() on the seam,
    // and inventing one here would be a second answer to a question the agent already answers.
    var snap = (this.agent && this.agent.snapshot) ? this.agent.snapshot() : null;
    if (!snap || !snap.model) {
      this.addTurn('you', q);
      var nb = this.addTurn('ai', '');
      nb.appendChild(el('div', 'body',
        'That question needs the language model, and none is loaded yet. Questions about how many '
        + 'things there are, where they are, what colour they are and who is on screen are answered '
        + 'from the lesson itself and need no model - try one of those, or choose a model above.'));
      this.busy = false;
      this.sendBtn.disabled = false;
      this.stopBtn.disabled = true;
      this.follow(true);
      return;
    }

    var ground = this.grounding();
    this.lastGrounding = ground;
    var prompt = ground ? ('FACTS:\n' + ground + '\n\nQUESTION: ' + q) : q;
    // v28.3: an assistant that does not honour the system prompt still gets the facts; its answers say so.
    var hostIgnoresSystem = this.provider === 'host' && snap && snap.honoursSystem === false;

    this.addTurn('you', q);
    var bubble = this.addTurn('ai', '');
    if (ground) this.addGroundingToggle(bubble, ground);
    var body = el('div', 'body');
    bubble.appendChild(body);
    var exp = iconBtn('⤢', 'Open this answer in a larger window, with a copy button');
    exp.className = 'ibtn expand';
    exp.onclick = function () { self.openModal(body.textContent, exp); };
    bubble.appendChild(exp);
    if (hostIgnoresSystem) bubble.appendChild(el('div', 'measured', 'Host assistant, facts supplied'));

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

    // v28.3: inside a component the dialog belongs to the component's own root, so its styles apply and nothing is
    // added to the host page's document (MNT-05); focus is read where it really is.
    var rootNode = this.host.getRootNode ? this.host.getRootNode() : document;
    var inShadow = !!(rootNode && rootNode !== document && rootNode.host);
    var keys = inShadow ? rootNode : document;
    var mountAt = inShadow ? ((this.ctx && this.ctx.modalRoot) || rootNode) : document.body;
    var active = function () { return inShadow ? rootNode.activeElement : document.activeElement; };
    function shut() {
      keys.removeEventListener('keydown', onKey, true);
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
      if (e.shiftKey && active() === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && active() === last) { first.focus(); e.preventDefault(); }
    }
    close.onclick = shut;
    back.onclick = function (e) { if (e.target === back) shut(); };
    keys.addEventListener('keydown', onKey, true);
    mountAt.appendChild(back);
    copy.focus();
    this._modal = {back: back, text: text, close: shut};
    return back;
  };

  AskPane.prototype.copyFallback = function (text, done) {
    // navigator.clipboard needs a secure context; a plain http:// page is not one.
    // v28.3: THE KEYBOARD IS NOT LEFT STRANDED. Selecting a hidden textarea moves focus out of the dialog, and
    // removing it left focus on the body - so the next Escape went nowhere and the dialog could only be closed with
    // the mouse. Focus goes back where it was.
    var rootNode = this.host.getRootNode ? this.host.getRootNode() : document;
    var prev = (rootNode && rootNode.activeElement) || document.activeElement;
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px';
      var at = (this._modal && this._modal.back && this._modal.back.parentNode) || document.body;
      at.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      at.removeChild(ta);
      if (prev && prev.focus) prev.focus();
      done();
    } catch (e) { /* nothing more we can offer; the text is on screen to select */ }
  };

  AskPane.prototype.addTurn = function (who, text) {
    var wasAtBottom = this.atBottom();
    if (this.empty && this.empty.parentNode) this.empty.parentNode.removeChild(this.empty);
    var t = el('div', 'turn ' + who);
    if (text) t.appendChild(el('div', 'body', text));
    this.log.appendChild(t);
    this.follow(wasAtBottom);
    return t;
  };

  AskPane.prototype.addGroundingToggle = function (bubble, ground, routed) {
    // THE LABEL MUST BE TRUE OF THIS ANSWER. "what the model was told" is a lie on a routed answer,
    // where no model was told anything - and a caption that misdescribes its own contents is the
    // same class of defect as a grounding that misdescribes the room.
    var b = el('button', 'ghost', routed ? 'the facts this was measured from'
                                         : 'what the model was told');
    b.title = routed ? 'Show the measured facts this answer was computed from'
                     : 'Show the measured facts sent with this question';
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
