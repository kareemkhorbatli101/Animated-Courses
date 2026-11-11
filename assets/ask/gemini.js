/* A Gemini provider, written to the interface player/agent.js already defines.
 *
 * WHY THIS SHAPE. agent.js says of itself: "ONE interface, any provider. Today the only
 * provider is a local Ollama; the point of the seam is that the pane never learns that."
 * This is the second provider that seam was built for, so it answers the same calls -
 * models() and ask({model, system, prompt, onToken}) resolving {text, ms, firstMs} - and
 * the panes above it need learn nothing new.
 *
 * It also fixes the limitation that made the first provider useless on the web: Ollama
 * lives at localhost:11434, which no visitor can reach. This one is the visitor's own key
 * talking to Google from their own browser.
 *
 * THE KEY GOES IN A HEADER, NOT THE URL. `?key=` is the documented alternative and it is
 * the worse one: a key in a query string lands in history, in anything that copies the
 * link, and in any logging the browser or an extension does. `x-goog-api-key` forces a
 * CORS preflight, which was tested from https://learnactively.com before this was written:
 * POST with Content-Type and x-goog-api-key reaches the API and its JSON error is readable
 * by script, so the preflight passes.
 *
 * NO MODEL NAME IS HARD-CODED. Model ids come and go, and a page that names one will one
 * day ask for a model that no longer exists and report it as the user's fault. So the
 * provider LISTS the models the key can see, keeps those that support generateContent, and
 * prefers the cheapest sensible one. The list is also what proves the key works, which is
 * why probing is a real request and not a guess.
 */
(function (root) {
  'use strict';

  var API = 'https://generativelanguage.googleapis.com/v1beta';

  function now() {
    return (root.performance && root.performance.now) ? root.performance.now() : Date.now();
  }

  /* Google's errors are JSON and say something useful; a generic "something went wrong"
   * throws that away. 400 is usually a bad key, 429 a spent quota, 403 a restricted key -
   * three different actions for the person reading it, so three different sentences. */
  function describe(status, body) {
    var msg = (body && body.error && body.error.message) || '';
    if (status === 400 && /API key not valid/i.test(msg)) {
      return 'That key was refused. Check it was copied whole, from Google AI Studio.';
    }
    if (status === 429) {
      return 'Your key is over its rate limit for the moment. Wait a little and ask again.';
    }
    if (status === 403) {
      return 'Google refused this key for this site. If you restricted it to certain ' +
             'websites, learnactively.com has to be one of them.';
    }
    if (status === 404) {
      return 'That model is not available to this key.';
    }
    return msg || ('The request failed with HTTP ' + status + '.');
  }

  function GeminiProvider(opts) {
    this.base = (opts && opts.base) || API;
    this.keyring = (opts && opts.keyring) || root.Keyring;
    this._model = '';
  }

  GeminiProvider.prototype.id = 'gemini';
  GeminiProvider.prototype.label = 'Gemini (your own key)';

  GeminiProvider.prototype._headers = function (json) {
    var k = this.keyring && this.keyring.get();
    if (!k) throw new Error('no key');
    var h = { 'x-goog-api-key': k };
    if (json) h['Content-Type'] = 'application/json';
    return h;
  };

  /* The models this key may use, newest-looking first. Same shape as the Ollama provider's
   * so a pane can list either without caring: {name, bytes, family}. */
  GeminiProvider.prototype.models = function () {
    var self = this;
    return fetch(this.base + '/models?pageSize=200', { headers: this._headers(false) })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok) throw new Error(describe(r.status, j));
          var list = (j.models || []).filter(function (m) {
            var ok = m.supportedGenerationMethods || [];
            return ok.indexOf('generateContent') >= 0;
          }).map(function (m) {
            return {
              name: String(m.name || '').replace(/^models\//, ''),
              bytes: 0,
              family: m.displayName || ''
            };
          });
          // prefer a "flash"-class model: this is a short question against a 3 KB brief,
          // and the cheapest model that can read is the right one to spend a stranger's
          // quota on.
          list.sort(function (a, b) {
            var af = /flash/i.test(a.name) ? 0 : 1, bf = /flash/i.test(b.name) ? 0 : 1;
            if (af !== bf) return af - bf;
            return a.name < b.name ? 1 : (a.name > b.name ? -1 : 0);   // later names first
          });
          self._available = list;
          return list;
        });
      });
  };

  GeminiProvider.prototype.select = function (name) { this._model = name || ''; };

  /* Ask. Non-streaming on purpose: the answer is a paragraph against a 3 KB brief, so it
   * arrives in a second or two, and streamed server-sent events would add a parser and a
   * second failure mode for no gain a reader would notice. onToken is still called once so
   * callers written for the streaming provider work unchanged. */
  GeminiProvider.prototype.ask = function (req) {
    var self = this;
    var ctl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var started = now();
    var model = req.model || this._model;

    var body = {
      contents: [{ role: 'user', parts: [{ text: req.prompt }] }],
      generationConfig: {
        temperature: req.temperature == null ? 0.2 : req.temperature,
        maxOutputTokens: req.maxTokens || 700
      }
    };
    if (req.system) body.systemInstruction = { parts: [{ text: req.system }] };

    var p = fetch(this.base + '/models/' + encodeURIComponent(model) + ':generateContent', {
      method: 'POST',
      headers: this._headers(true),
      body: JSON.stringify(body),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) throw new Error(describe(r.status, j));
        var cand = (j.candidates || [])[0] || {};
        var parts = (cand.content && cand.content.parts) || [];
        var text = parts.map(function (x) { return x.text || ''; }).join('');
        if (!text) {
          // a refusal or a safety stop is not an empty answer, and must not look like one
          var why = cand.finishReason || (j.promptFeedback && j.promptFeedback.blockReason);
          throw new Error(why
            ? ('The model stopped without answering (' + why + ').')
            : 'The model returned nothing.');
        }
        if (req.onToken) req.onToken(text);
        return { text: text, ms: now() - started, firstMs: now() - started,
                 model: model, usage: j.usageMetadata || null };
      });
    });
    p.cancel = function () { if (ctl) ctl.abort(); };
    return p;
  };

  GeminiProvider.prototype.stop = function () { /* per-request; see ask().cancel */ };

  root.GeminiProvider = GeminiProvider;
})(window);
