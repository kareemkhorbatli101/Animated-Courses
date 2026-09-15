/* TRACK B - a model the VIEWER downloads into the browser. The second provider behind the same seam.
 *
 * WHY THIS EXISTS. RESIDUALS K.1, measured: a page served from https://...github.io may not reach a
 * server on the viewer's own machine unless that server sends Access-Control-Allow-Private-Network.
 * Ollama's preflight returns 204 without it. It is their server, on the user's machine, and we cannot
 * add a header to it - so the Ask pane works from localhost and NOT from the published URL.
 *
 * A model running INSIDE the page has no server, no port and no private-network rule. It works from the
 * published URL by construction. That is the whole reason to accept a weaker model.
 *
 * NOTHING IS DOWNLOADED WITHOUT A CLICK. The weights come from a public CDN because the viewer pressed
 * a button, never quietly from us - the same standing rule the voice packs follow (v27.29). The
 * catalogue states each model's SIZE and LICENCE before anything is fetched.
 *
 * TWO MEASUREMENTS SHAPE THIS FILE, both taken rather than assumed:
 *
 *   STORAGE. navigator.storage.estimate() reported a quota of 0.85 GB under SwiftShader and 1.07 GB on
 *   the default GPU path. A 1 GB model does not fit in 0.85 GB, so the catalogue compares each model
 *   against the ACTUAL measured quota and says which will not fit, with both numbers. Reporting only
 *   "download failed" afterwards would treat the symptom.
 *
 *   WEBGPU. navigator.gpu EXISTED in both probes and requestAdapter() returned NULL in both. Presence
 *   of the object is not availability of a device, and a check that stops at `!!navigator.gpu` reports
 *   "available" and then fails at load. Availability here means an ADAPTER came back.
 */
(function (root) {
  'use strict';

  // The CDN the weights and the runtime come from. Public, versioned, and named here so there is one
  // place to look - not scattered through the code.
  var RUNTIME = 'https://esm.run/@mlc-ai/web-llm';

  // SIZES ARE THE DOWNLOAD, not the file on disk, and are stated before anything is fetched. The last
  // entry is deliberately larger than the measured quota on this machine: a catalogue that only ever
  // lists things that fit never exercises the refusal, and the refusal is the part that matters.
  // EVERY MODEL IS LISTED TWICE, in an f32 build and an f16 build, and this is not padding.
  //
  // MEASURED, on the owner's own Chrome: the adapter is present, and its feature set does NOT include
  // 'shader-f16' (Intel Gen-9 integrated). Every q4f16 model therefore refuses to load with "requires
  // WebGPU extension shader-f16". A catalogue of f16 builds alone would have failed on this machine and
  // on every Intel iGPU like it - which is most laptops.
  //
  // So f32 builds lead. They are larger for the same model, which is the price of running anywhere.
  // ORDER IS THE DEFAULT, and it is decided by measurement. Qwen 0.5B scores what Llama 1B scores on
  // the same questions while being half the download, so it leads. Scores are from tools/webllm_live.py
  // against answers that are true by construction - the same set the local models are scored on.
  var CATALOGUE = [
    {id: 'Qwen2.5-0.5B-Instruct-q4f32_1-MLC', label: 'Qwen2.5 0.5B', f16: false,
     bytes: 540e6, licence: 'Apache-2.0', score: '3 of 4',
     note: 'best value here - matches a model twice its size'},
    {id: 'Llama-3.2-1B-Instruct-q4f32_1-MLC', label: 'Llama 3.2 1B', f16: false,
     bytes: 1130e6, licence: 'Llama 3.2 Community License', score: '3 of 4',
     note: 'same score, twice the download; better English'},
    {id: 'SmolLM2-360M-Instruct-q4f32_1-MLC', label: 'SmolLM2 360M', f16: false,
     bytes: 380e6, licence: 'Apache-2.0', score: '0 of 4',
     note: 'smallest, but its context is too small for a full lesson - it errors part-way'},
    {id: 'SmolLM2-360M-Instruct-q4f16_1-MLC', label: 'SmolLM2 360M (f16)', f16: true,
     bytes: 280e6, licence: 'Apache-2.0', note: 'smaller, but needs shader-f16 support'},
    {id: 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC', label: 'Qwen2.5 0.5B (f16)', f16: true,
     bytes: 380e6, licence: 'Apache-2.0', note: 'smaller, but needs shader-f16 support'},
    {id: 'Llama-3.2-1B-Instruct-q4f16_1-MLC', label: 'Llama 3.2 1B (f16)', f16: true,
     bytes: 710e6, licence: 'Llama 3.2 Community License', note: 'smaller, but needs shader-f16'}
  ];

  // Measured on this project's own network during the speech work: 94 KB/s to 1147 KB/s. A range, not
  // an average, because the difference between them is the difference between four minutes and an hour
  // - and SIZE IN BYTES IS NOT THE NUMBER THAT DECIDES WHETHER ANYONE FINISHES THE DOWNLOAD.
  var SLOW_BPS = 94 * 1024, FAST_BPS = 1147 * 1024;

  function human(bytes) {
    return bytes >= 1e9 ? (bytes / 1e9).toFixed(2) + ' GB' : Math.round(bytes / 1e6) + ' MB';
  }

  function duration(sec) {
    if (sec < 90) return Math.round(sec) + ' s';
    if (sec < 5400) return Math.round(sec / 60) + ' min';
    return (sec / 3600).toFixed(1) + ' hours';
  }

  function eta(bytes) {
    return duration(bytes / FAST_BPS) + ' to ' + duration(bytes / SLOW_BPS);
  }

  function WebLLMProvider(opts) {
    this.name = 'webllm';
    this.label = 'In this browser (no install)';
    // NEVER 'remote'. That flag exists for Ollama, which a page served from the internet cannot reach
    // (K.1). A model inside the page has no server and no origin problem, so inheriting the flag would
    // show 'the AI needs the page opened from your own computer' about the one provider for which that
    // is false - measured on the live site, where exactly that happened.
    this.remote = false;
    this.runtimeUrl = (opts && opts.runtime) || RUNTIME;
    this.engines = {};                 // model id -> a loaded engine
    this.installed = {};               // model id -> true once it has answered
    this.setup = {
      site: 'https://webgpu.org',
      why: 'The model runs inside this page on your own device. Nothing is installed, nothing listens '
         + 'on a port, and no data leaves your browser. The weights are downloaded once, from a public '
         + 'CDN, only when you ask for them.',
      steps: ['Use Chrome or Edge 113 or newer (WebGPU is required)',
              'Choose a model below and press Download',
              'The download happens once per device and is then cached']
    };
  }

  /* What this browser can actually do. Every field is MEASURED, and the WebGPU one asks for an adapter
   * rather than trusting that navigator.gpu exists. */
  WebLLMProvider.prototype.capabilities = function () {
    var out = {gpuObject: !!root.navigator && !!root.navigator.gpu, adapter: false,
               f16: false, quota: null, usage: null, reason: ''};
    var p = Promise.resolve();
    if (out.gpuObject) {
      p = root.navigator.gpu.requestAdapter().then(function (a) {
        out.adapter = !!a;
        // AN ADAPTER IS NOT A CAPABILITY EITHER. Measured on the owner's Chrome: adapter present,
        // shader-f16 absent, and every f16 model refused to load. The feature is asked for by name.
        out.f16 = !!(a && a.features && a.features.has && a.features.has('shader-f16'));
        if (!a) out.reason = 'This browser has the WebGPU interface but no usable graphics adapter.';
      }, function (e) { out.reason = String((e && e.message) || e); });
    } else {
      out.reason = 'This browser does not support WebGPU. Chrome and Edge 113 or newer do.';
    }
    return p.then(function () {
      if (root.navigator && root.navigator.storage && root.navigator.storage.estimate) {
        return root.navigator.storage.estimate().then(function (e) {
          out.quota = e.quota || null;
          out.usage = e.usage || 0;
          return out;
        }, function () { return out; });
      }
      return out;
    });
  };

  /* The catalogue, with each model judged against THIS browser's measured quota. */
  WebLLMProvider.prototype.models = function () {
    var self = this;
    return this.capabilities().then(function (cap) {
      var free = cap.quota == null ? null : (cap.quota - (cap.usage || 0));
      return CATALOGUE.map(function (m) {
        var fits = (free == null) ? null : (m.bytes < free * 0.95);
        var needsF16 = !!m.f16 && !cap.f16;
        return {
          name: m.id, label: m.label, bytes: m.bytes, licence: m.licence, note: m.note,
          // THE SCORE IS LABELLED, NEVER USED TO WITHHOLD. Every catalogued model is offered whatever
          // it scored; a person choosing one is told how it did on questions whose answers are known.
          score: m.score || null,
          size: human(m.bytes), eta: eta(m.bytes),
          installed: !!self.installed[m.id],
          usable: !needsF16 && fits !== false,
          fits: needsF16 ? false : fits,
          // BOTH NUMBERS, always. "It will not fit" without saying what the limit is leaves a person
          // with nothing to act on.
          why: needsF16
            ? 'This graphics adapter does not support shader-f16, which this build needs. Use the '
              + 'plain build of the same model.'
            : (fits === false
               ? ('Needs ' + human(m.bytes) + ' but this browser allows about '
                  + human(free) + ' of storage.')
               : (cap.adapter ? '' : cap.reason))
        };
      });
    });
  };

  /* Load a model. THIS is the download, and it happens only from here - never from models() or from
   * probing. onProgress receives {loaded, total, text} so the pane can show bytes against the size
   * that was promised. */
  WebLLMProvider.prototype.load = function (id, onProgress) {
    var self = this;
    if (this.engines[id]) return Promise.resolve(this.engines[id]);
    return this.capabilities().then(function (cap) {
      if (!cap.adapter) throw new Error(cap.reason || 'WebGPU is not available in this browser.');
      var entry = CATALOGUE.filter(function (m) { return m.id === id; })[0];
      if (entry && entry.f16 && !cap.f16) {
        // REFUSE BEFORE THE DOWNLOAD, not after. Finding out at load time costs the viewer the whole
        // transfer first, which on a slow link is most of an hour.
        throw new Error('This graphics adapter does not support shader-f16. Choose the plain build.');
      }
      var free = cap.quota == null ? null : (cap.quota - (cap.usage || 0));
      if (entry && free != null && entry.bytes >= free * 0.95) {
        throw new Error('Needs ' + human(entry.bytes) + ' but this browser allows about '
                        + human(free) + '.');
      }
      return import(/* webpackIgnore: true */ self.runtimeUrl);
    }).then(function (webllm) {
      return webllm.CreateMLCEngine(id, {
        initProgressCallback: function (r) {
          if (onProgress) {
            onProgress({text: r.text || '', progress: r.progress || 0,
                        loaded: r.loaded || 0, total: r.total || 0});
          }
        }
      });
    }).then(function (engine) {
      // A HALF-DOWNLOAD MUST NOT CLAIM TO BE USABLE. `installed` is set only once the engine exists.
      self.engines[id] = engine;
      self.installed[id] = true;
      return engine;
    });
  };

  WebLLMProvider.prototype.ask = function (req) {
    var self = this;
    var stopped = false;
    var started = (root.performance && root.performance.now) ? root.performance.now() : Date.now();
    var text = '';
    var p = this.load(req.model, req.onProgress).then(function (engine) {
      var msgs = [];
      if (req.system) msgs.push({role: 'system', content: req.system});
      msgs.push({role: 'user', content: req.prompt});
      return engine.chat.completions.create({
        messages: msgs, stream: true,
        temperature: req.temperature == null ? 0 : req.temperature,
        max_tokens: req.maxTokens || 512
      }).then(function (stream) {
        return (async function () {
          for await (var chunk of stream) {
            if (stopped) break;
            var d = chunk.choices && chunk.choices[0] && chunk.choices[0].delta;
            var piece = d && d.content;
            if (piece) {
              text += piece;
              if (req.onToken) req.onToken(piece);
            }
          }
          var now = (root.performance && root.performance.now) ? root.performance.now() : Date.now();
          return {text: text, ms: now - started, firstMs: now - started};
        })();
      });
    });
    p.cancel = function () { stopped = true; };
    return p;
  };

  root.WebLLMProvider = WebLLMProvider;
  root.WebLLMProvider.CATALOGUE = CATALOGUE;
  root.WebLLMProvider.human = human;
  root.WebLLMProvider.eta = eta;
  root.WebLLMProvider.RUNTIME = RUNTIME;
})(typeof window !== 'undefined' ? window : globalThis);
