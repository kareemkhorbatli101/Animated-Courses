/* TRACK B - the insulated agent interface.
 *
 * ONE interface, any provider. Today the only provider is a local Ollama; the point of the seam is that
 * the pane never learns that. Everything above this file speaks probe/models/select/ask/stop, so pointing
 * the same pane at a different agent later is a new provider object and nothing else - the arrangement
 * the owner asked for after doing it once already in his book-reader app.
 *
 * TWO RULES THIS FILE EXISTS TO ENFORCE:
 *
 *   1. A MODEL IS NOT "CONNECTED" UNTIL IT HAS ANSWERED. The previous pane lit a green dot on the
 *      SERVER being reachable, so choosing a different model from the list left the dot green even
 *      though nothing had ever spoken to that model - it might not be pulled, might not fit in VRAM,
 *      might not exist. State is therefore held per MODEL NAME, and selecting a model clears it.
 *
 *   2. NOTHING IS DOWNLOADED WITHOUT BEING ASKED. This file never pulls a model. It reports that one is
 *      missing and says what the person can run themselves - the same standing rule the voice packs
 *      follow (v27.29): the bytes must move because the user asked, from a public source, not from us.
 */
(function (root) {
  'use strict';

  // ---------------------------------------------------------------- the states, named once
  // 'unknown'   nothing tried yet
  // 'absent'    no provider is reachable at all (Ollama not installed / not running)
  // 'listed'    the provider answered and gave a model list, but THIS model has not spoken yet
  // 'ready'     THIS model has answered a real request
  // 'busy'      a request is in flight
  // 'error'     the last attempt failed, with a reason
  var STATES = ['unknown', 'absent', 'listed', 'ready', 'busy', 'error'];

  function now() { return (root.performance && root.performance.now) ? root.performance.now() : Date.now(); }

  // ---------------------------------------------------------------- provider: Ollama (local)
  function OllamaProvider(opts) {
    this.base = (opts && opts.base) || 'http://localhost:11434';
    this.name = 'ollama';
    this.label = 'Ollama (on this computer)';
    // Said in one place so the pane and the gate cannot describe the setup differently.
    this.setup = {
      site: 'https://ollama.com/download',
      why: 'The AI answers are produced by a model running on your own computer. Nothing is sent to us '
         + 'or to anyone else, and this page never downloads a model on your behalf.',
      steps: ['Install Ollama from ollama.com/download',
              'Open a terminal and run:  ollama pull llama3.2:3b',
              'Reload this page']
    };
    // A PAGE SERVED FROM THE INTERNET CANNOT REACH YOUR OWN COMPUTER, and the reason is the browser,
    // not this project. Chrome's Private Network Access rules require the local server to answer with
    // 'Access-Control-Allow-Private-Network: true' before a public origin may talk to localhost.
    // Ollama does not send that header and we cannot make it - it is their server, on the user's
    // machine. Measured: the preflight returns 204 with 'Access-Control-Allow-Origin: *' and no
    // private-network header, and the fetch fails anyway.
    //
    // This must be SAID, not swallowed into a generic "no model found". Someone who has installed
    // Ollama and opened the published link would otherwise conclude the feature is broken, when in
    // fact it works perfectly from a local copy of the same page.
    this.remote = !this._isLocal();
  }

  OllamaProvider.prototype._isLocal = function () {
    var h = (root.location && root.location.hostname) || '';
    var p = (root.location && root.location.protocol) || '';
    return p === 'file:' || h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h === '';
  }

  OllamaProvider.prototype._json = function (path, init, timeoutMs) {
    var ctl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var t = setTimeout(function () { if (ctl) ctl.abort(); }, timeoutMs || 8000);
    var o = Object.assign({ signal: ctl ? ctl.signal : undefined }, init || {});
    return fetch(this.base + path, o).then(function (r) {
      clearTimeout(t);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }, function (e) { clearTimeout(t); throw e; });
  };

  OllamaProvider.prototype.models = function () {
    return this._json('/api/tags', { method: 'GET' }).then(function (d) {
      return (d.models || []).map(function (m) {
        return { name: m.name, bytes: m.size || 0, family: (m.details && m.details.family) || '' };
      }).sort(function (a, b) { return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0); });
    });
  };

  /* Ask, streaming. onToken(text) is called as the answer arrives, so a slow local model shows progress
   * instead of looking hung - which on a 6 GB card is the normal case, not the exceptional one. */
  OllamaProvider.prototype.ask = function (req) {
    var self = this;
    var ctl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var body = {
      model: req.model,
      prompt: req.prompt,
      system: req.system || undefined,
      stream: true,
      options: { temperature: req.temperature == null ? 0.2 : req.temperature,
                 num_predict: req.maxTokens || 512 }
    };
    var started = now(), first = null, text = '';
    var p = fetch(this.base + '/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' from ' + self.base);
      if (!r.body || !r.body.getReader) {            // no streaming support: fall back to one lump
        return r.text().then(function (t) {
          t.split('\n').forEach(function (line) {
            if (!line.trim()) return;
            try { var j = JSON.parse(line); if (j.response) { text += j.response; } } catch (e) { /* partial */ }
          });
          if (req.onToken) req.onToken(text);
          return { text: text, ms: now() - started, firstMs: now() - started };
        });
      }
      var reader = r.body.getReader(), dec = new TextDecoder(), buf = '';
      function pump() {
        return reader.read().then(function (res) {
          if (res.done) return { text: text, ms: now() - started, firstMs: (first || now()) - started };
          buf += dec.decode(res.value, { stream: true });
          var lines = buf.split('\n');
          buf = lines.pop();
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (!line) continue;
            var j;
            try { j = JSON.parse(line); } catch (e) { continue; }
            if (j.error) throw new Error(j.error);
            if (j.response) {
              if (first === null) first = now();
              text += j.response;
              if (req.onToken) req.onToken(j.response);
            }
          }
          return pump();
        });
      }
      return pump();
    });
    p.cancel = function () { if (ctl) ctl.abort(); };
    return p;
  };

  // ---------------------------------------------------------------- the seam the pane talks to
  function Agent(provider) {
    this.provider = provider;
    this.model = null;
    this.state = 'unknown';
    this.reason = '';
    this.list = [];
    // RULE 1 lives here: readiness is remembered against a model NAME, never against the provider.
    this._readyModel = null;
    this._inflight = null;
    this._listeners = [];
  }

  Agent.prototype.on = function (fn) { this._listeners.push(fn); };
  Agent.prototype._emit = function () {
    var s = this.snapshot();
    this._listeners.forEach(function (f) { try { f(s); } catch (e) { /* a listener must not break state */ } });
  };
  Agent.prototype._set = function (state, reason) {
    this.state = state; this.reason = reason || '';
    this._emit();
  };

  Agent.prototype.snapshot = function () {
    return {
      provider: this.provider.name, state: this.state, reason: this.reason,
      model: this.model, models: this.list.slice(),
      // The ONLY thing the indicator may use. It is a function of the SELECTED model, so switching
      // models cannot leave a stale green behind.
      connected: this.state === 'ready' && !!this.model && this._readyModel === this.model,
      setup: this.provider.setup,
      // true when the page came from the internet, so a failure to reach localhost is EXPECTED and
      // must be explained as such rather than blamed on the person's setup.
      remote: !!this.provider.remote
    };
  };

  Agent.prototype.probe = function () {
    var self = this;
    return this.provider.models().then(function (ms) {
      self.list = ms;
      if (!ms.length) {
        self._set('absent', 'Ollama is running but has no models installed.');
        return self.snapshot();
      }
      // Keep a previously chosen model only if it is still installed.
      if (self.model && !ms.some(function (m) { return m.name === self.model; })) {
        self.model = null; self._readyModel = null;
      }
      // PICK A DEFAULT, from measurement rather than from taste (tools/model_bench.py). Both candidates
      // answer 8/8 in English on questions whose answers are true by construction. They differ where it
      // matters for a bilingual lesson: asked in Arabic, qwen2.5 stays close to the facts while
      // llama3.2 produced incoherent Arabic. llama3.2 is the faster of the two (about 2.6 s an answer
      // against 4.7 s, and a far shorter first load on a 6 GB card), so it is the fallback rather than
      // the first choice. Anything else installed is used in preference to nothing.
      if (!self.model) {
        var order = ['qwen2.5:7b-instruct', 'qwen2.5:7b', 'llama3.2:3b'];
        for (var i = 0; i < order.length && !self.model; i++) {
          if (ms.some(function (m) { return m.name === order[i]; })) self.model = order[i];
        }
        if (!self.model) self.model = ms[0].name;
      }
      self._set(self._readyModel === self.model && self.model ? 'ready' : 'listed');
      return self.snapshot();
    }, function (e) {
      self.list = [];
      self._readyModel = null;
      self._set('absent', String((e && e.message) || e));
      return self.snapshot();
    });
  };

  /* Selecting a model DISCONNECTS. This is the bug the owner caught: the dot stayed green when the new
   * model had never been contacted. A selection is an intention, not a connection. */
  Agent.prototype.select = function (name) {
    if (this.model === name) return;
    this.model = name || null;
    if (this._readyModel !== this.model) this._set('listed', '');
    else this._set('ready', '');
  };

  /* Verify by ASKING. Not by pinging the server, not by finding the name in a list - a model can be
   * listed and still fail to load because it does not fit in VRAM, which is the realistic failure on a
   * 6 GB card and is invisible to every cheaper check. */
  Agent.prototype.connect = function () {
    var self = this;
    if (!this.model) return Promise.resolve(this.snapshot());
    this._set('busy', 'contacting ' + this.model);
    return this.provider.ask({ model: this.model, prompt: 'Reply with the single word: ready.',
                               maxTokens: 8, temperature: 0 })
      .then(function (r) {
        self._readyModel = self.model;
        self._set('ready', 'answered in ' + Math.round(r.ms) + ' ms');
        return self.snapshot();
      }, function (e) {
        self._readyModel = null;
        self._set('error', String((e && e.message) || e));
        return self.snapshot();
      });
  };

  Agent.prototype.ask = function (req) {
    var self = this;
    if (!this.model) return Promise.reject(new Error('No model selected.'));
    this._set('busy', '');
    var p = this.provider.ask(Object.assign({ model: this.model }, req));
    this._inflight = p;
    return p.then(function (r) {
      self._readyModel = self.model;          // a real answer is the strongest possible proof
      self._inflight = null;
      self._set('ready', Math.round(r.ms) + ' ms');
      return r;
    }, function (e) {
      self._inflight = null;
      var msg = String((e && e.message) || e);
      self._set(msg.indexOf('abort') >= 0 ? 'ready' : 'error', msg);
      throw e;
    });
  };

  Agent.prototype.stop = function () { if (this._inflight && this._inflight.cancel) this._inflight.cancel(); };

  root.Agent = {
    STATES: STATES,
    create: function (kind, opts) {
      if (kind && kind !== 'ollama') throw new Error('Unknown provider: ' + kind);
      return new Agent(new OllamaProvider(opts));
    },
    _Ollama: OllamaProvider, _Agent: Agent
  };
})(typeof window !== 'undefined' ? window : globalThis);
