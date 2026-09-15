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
    this.ctx = ctx;                      // { scene(), index(), cameraAt(t), time(), scriptText() }
    this.agent = A.create('ollama');
    this.action = 'video';
    this.askLang = 'en-GB';
    this.sayLang = 'en-GB';
    this.speakBack = false;
    this.lastGrounding = '';
    this.busy = false;
    this.build();
    var self = this;
    this.agent.on(function (s) { self.renderState(s); });
    this.refresh();
  }

  AskPane.prototype.build = function () {
    var self = this, h = this.host;
    h.innerHTML = '';

    var head = el('div', 'askhead');
    this.dot = el('i', 'dot');
    head.appendChild(this.dot);
    this.modelSel = el('select', 'modelsel');
    this.modelSel.title = 'Choose which local model answers';
    this.modelSel.onchange = function () {
      // Selecting is an INTENTION, not a connection - the dot must go out until this model answers.
      self.agent.select(self.modelSel.value);
      self.agent.connect();
    };
    head.appendChild(this.modelSel);
    var re = iconBtn('⟳', 'Look again for local models');
    re.onclick = function () { self.refresh(); };
    head.appendChild(re);
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

  AskPane.prototype.refresh = function () { return this.agent.probe(); };

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
        var o = el('option', null, m.name + (m.bytes ? '  (' + (m.bytes / 1e9).toFixed(1) + ' GB)' : ''));
        o.value = m.name;
        self.modelSel.appendChild(o);
      });
    }
    if (s.model) this.modelSel.value = s.model;
    this.modelSel.disabled = !s.models.length;

    var msg = s.connected ? ('Ready — ' + s.model + (s.reason ? ' · ' + s.reason : ''))
      : s.state === 'busy' ? (s.reason || 'Working…')
      : s.state === 'error' ? ('Could not use this model: ' + s.reason)
      : s.state === 'listed' ? 'Choose a model to connect'
      : 'No model running on this computer';
    this.stateLine.textContent = msg;

    var needSetup = (s.state === 'absent');
    this.setupBox.style.display = needSetup ? '' : 'none';
    if (needSetup && !this.setupBox.childElementCount) {
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
    this.sendBtn.disabled = !s.connected || this.busy;
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
    if (!idx) return '';
    var parts = [];
    if (this.action === 'frame') {
      var t = this.ctx.time ? this.ctx.time() : 0;
      var cam = this.ctx.cameraAt ? this.ctx.cameraAt(t) : null;
      parts.push('At ' + t.toFixed(2) + ' seconds into the lesson:');
      if (cam) {
        parts.push(D.shotLine(idx, cam, (scene && scene.camera && scene.camera.fov) || 38.0));
        if (scene) parts.push(D.actorsLine(scene, idx, cam));
      }
      parts.push(D.worldProse(idx));
    } else {
      parts.push(D.worldProse(idx));
      if (this.ctx.scriptText) {
        var sc = this.ctx.scriptText();
        if (sc) parts.push('\n\nThe lesson\'s script:\n' + sc);
      }
    }
    return parts.filter(Boolean).join(' ');
  };

  AskPane.prototype.system = function () {
    var say = this.sayLang;
    var lang = say.indexOf('ar') === 0 ? 'Arabic' : (say.indexOf('fr') === 0 ? 'French' : 'English');
    return [
      'You answer questions about a 3D language-lesson video.',
      this.action === 'general' ? 'No lesson facts are attached to this question.'
        : 'FACTS below are measured from the lesson itself and are true. Use them and nothing else for '
          + 'anything about the room, the objects, their sizes, colours, positions or who is where. '
          + 'If the FACTS do not answer the question, say so plainly rather than guessing.',
      'Answer in ' + lang + '.',
      'Be brief: a few sentences unless asked for more.'
    ].join(' ');
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

    this.agent.ask({
      prompt: prompt, system: this.system(),
      onToken: function (tk) { body.textContent += tk; self.log.scrollTop = self.log.scrollHeight; }
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

  AskPane.prototype.addTurn = function (who, text) {
    var t = el('div', 'turn ' + who);
    if (text) t.appendChild(el('div', 'body', text));
    this.log.appendChild(t);
    this.log.scrollTop = this.log.scrollHeight;
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

  AskPane.prototype.say = function (text) {
    if (!root.speechSynthesis || !text) return;
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
