/* animated_player.js - v28.3: the lesson player as a COMPONENT any page can mount (package web_os_live_player v5).
 *
 *   var player = AnimatedPlayer.create(hostElement, {base, source, params, ui, permissions, audio, lifecycle, services});
 *   <animated-lesson base="…" course="eam-b1" video="u01v01"></animated-lesson>
 *
 * WHAT IT IS. The page our site has shipped since v27 - catalogue, stage, badge, subtitles, cards, voice, script,
 * camera, assistant - moved INSIDE a host element. The instance body below was derived from site/app.js by exact,
 * counted replacements (every page global replaced by an instance service), so the behaviour visitors know is the
 * behaviour a host gets. What the component adds is what a host needs and a page did not:
 *
 *   * every URL resolves against `base`, so the lessons come from the published site whatever page mounts it
 *   * an OPEN SHADOW ROOT: a host's stylesheet cannot break the player and the player's cannot leak (Q4, v5)
 *   * panes and strips a host can allow, withhold, open and close; toggles with tooltips; focus-scoped keys
 *   * permissions a host grants or denies (its own AI, the network, storage, the viewer's camera, selection)
 *   * a container lifecycle: load in place, deliberate suspend/resume, hidden keeps PLAYING, dispose, snapshot
 *   * one master gain per instance: audible or not is the host's policy, the mechanism is here
 *   * one command/event contract (player/vocabulary.json), selection of objects, and the customisation contract
 *
 * WHAT IT NEVER DOES. It never changes drive(), the lesson's content, or its look: the badge and the cards cannot be
 * hidden by anything here (fixtures), and every size, position and colour of lesson content still comes from the
 * spec (gates/overlay_check no_layout_in_player). Nothing reaches into the animation except through the commands
 * (A8): no scene, renderer, overlay or drive() is exposed, and window.__* hooks exist only with services.debug.
 */
(function (global) {
  'use strict';
  if (global.AnimatedPlayer) return;

  var VERSION = '28.3';
  var SELF = (document.currentScript && document.currentScript.src) || '';
  // The site root is the folder ABOVE player/, which is where this file is always published.
  var DEFAULT_BASE = (function () { try { return new URL('../', SELF).href; } catch (e) { return ''; } })();

  // ================================================================= the files the component loads itself
  // Listed ONCE. gates/site_check asserts that every name here is in engine/host.PLAYER_FILES, because a file this
  // list names and the publish omits works from a local folder and is a 404 on the live site.
  var CORE = ['three.min.js', 'GLTFLoader.js', 'meshopt_decoder.js', 'fetcher.js', 'overlay.js', 'music.js',
              'speech_audio.js', 'camera_view.js', 'scene_player.js', 'spatial.js', 'describe.js', 'transcript.js',
              'answer.js', 'selection.js', 'custom.js'];
  // The assistant's files are loaded only when an assistant is first shown - and never when the host withholds
  // it (PNE-08). agent.js and webllm_provider.js are loaded only when the component may use its OWN model.
  var AI_OWN = ['webllm_provider.js', 'agent.js'];
  var AI_PANE = ['ask_pane.js'];
  var PRESENT = {
    'three.min.js': function () { return !!global.THREE; },
    'GLTFLoader.js': function () { return !!(global.THREE && global.THREE.GLTFLoader); },
    'meshopt_decoder.js': function () { return typeof global.MeshoptDecoder !== 'undefined'; },
    'fetcher.js': function () { return !!global.Fetcher; }, 'overlay.js': function () { return !!global.Overlay; },
    'music.js': function () { return !!global.MusicBed; }, 'speech_audio.js': function () { return !!global.SpeechAudio; },
    'camera_view.js': function () { return !!global.CameraView; },
    'scene_player.js': function () { return !!global.ScenePlayer; },
    'spatial.js': function () { return !!global.Spatial; }, 'describe.js': function () { return !!global.Describe; },
    'transcript.js': function () { return !!global.Transcript; }, 'answer.js': function () { return !!global.Answer; },
    'selection.js': function () { return !!global.APSelection; }, 'custom.js': function () { return !!global.Custom; },
    'webllm_provider.js': function () { return !!global.WebLLMProvider; },
    'agent.js': function () { return !!global.Agent; }, 'ask_pane.js': function () { return !!global.AskPane; }
  };
  var LOADING = {};

  function loadScript(url, name) {
    if (PRESENT[name] && PRESENT[name]()) return Promise.resolve();
    if (LOADING[name]) return LOADING[name];
    // The module hooks (window.__drive, __err, __speechError) are for OUR site's gates. A page that has not declared
    // itself a debug page gets none of them (BND-01). Decided once, before the first module that could publish one.
    if (!global.__AP_DEBUG_PAGE && global.__AP_NO_HOOKS === undefined) global.__AP_NO_HOOKS = true;
    LOADING[name] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onload = function () { resolve(); };
      s.onerror = function () { delete LOADING[name]; reject(new Error('could not load ' + url)); };
      (document.head || document.documentElement).appendChild(s);
    });
    return LOADING[name];
  }
  // ALL AT ONCE, IN ORDER. `async = false` on an inserted script keeps execution in insertion order, so GLTFLoader
  // still runs after three.js - and every <script> this component adds to the host's document is added NOW, at load
  // time, rather than one after another as each finishes (MNT-05: a player that is mounted must touch nothing outside
  // its own host element; a chain of appends would still be arriving while it mounted).
  function loadAll(base, names) {
    return Promise.all(names.map(function (n) { return loadScript(base + 'player/' + n, n); }));
  }
  var CSS = {}, VOCAB = {};
  // The core starts loading the moment this file runs, before any player is mounted: a page's first player does not
  // wait for it, and no element is ever added to the host's document after a player exists (MNT-05). The assistant's
  // files are the exception by design - loaded when an assistant is first shown, never when it is withheld.
  if (DEFAULT_BASE) {
    loadAll(DEFAULT_BASE, CORE).catch(function () { /* reported by the first create() that needs it */ });
  }
  function loadText(url, cache) {
    if (!cache[url]) {
      cache[url] = fetch(url).then(function (r) {
        if (!r.ok) throw new Error(url + ' -> HTTP ' + r.status);
        return r.text();
      });
      cache[url].catch(function () { delete cache[url]; });
    }
    return cache[url];
  }

  // ================================================================= verified bytes, shared by every instance
  // A content address is immutable, so a blob one player verified is the same blob for the next one: a second
  // window opening a lesson of the same course re-uses it. Bounded, oldest first out.
  var SHARED = {}, SHARED_ORDER = [], SHARED_BYTES = 0, SHARED_MAX = 256 * 1024 * 1024;
  function sharedMem() {
    return {
      get: function (k) { return SHARED[k]; },
      put: function (k, buf) {
        if (SHARED[k]) return;
        SHARED[k] = buf; SHARED_ORDER.push(k); SHARED_BYTES += buf.byteLength || 0;
        while (SHARED_BYTES > SHARED_MAX && SHARED_ORDER.length > 1) {
          var old = SHARED_ORDER.shift();
          SHARED_BYTES -= (SHARED[old] && SHARED[old].byteLength) || 0;
          delete SHARED[old];
        }
      }
    };
  }

  // ================================================================= the debug adapter (our site only)
  // Our site's existing gates address the page with document.getElementById('play') and friends. Inside a shadow
  // root those return null, so a DEBUG page (services.debug, which only our site sets) gets lookups that fall back
  // to the players' shadow roots. Foreign hosts and Web OS Live never get this: their documents are untouched.
  var DEBUG_ROOTS = [];
  function installDebugLookups(root) {
    if (DEBUG_ROOTS.indexOf(root) < 0) DEBUG_ROOTS.push(root);
    if (document.__apDebugLookups) return;
    document.__apDebugLookups = true;
    var gid = document.getElementById, qs = document.querySelector, qsa = document.querySelectorAll;
    document.getElementById = function (id) {
      var e = gid.call(document, id);
      for (var i = 0; !e && i < DEBUG_ROOTS.length; i++) e = DEBUG_ROOTS[i].getElementById(id);
      return e;
    };
    document.querySelector = function (sel) {
      var e = qs.call(document, sel);
      for (var i = 0; !e && i < DEBUG_ROOTS.length; i++) e = DEBUG_ROOTS[i].querySelector(sel);
      return e;
    };
    document.querySelectorAll = function (sel) {
      var out = Array.prototype.slice.call(qsa.call(document, sel));
      DEBUG_ROOTS.forEach(function (r) { out = out.concat(Array.prototype.slice.call(r.querySelectorAll(sel))); });
      return out;
    };
    var d = Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement');
    if (d && d.get) {
      Object.defineProperty(document, 'activeElement', {configurable: true, get: function () {
        var a = d.get.call(document);
        while (a && a.shadowRoot && a.shadowRoot.activeElement) a = a.shadowRoot.activeElement;
        return a;
      }});
    }
  }

  // ================================================================= small pure helpers
  var PANES = ['nav', 'script', 'info', 'camera', 'ai'];
  var PANE_STRIP = {nav: 'play', script: 'play', info: 'play', camera: 'controls', ai: 'controls'};
  var PANE_ICON = {nav: '☰', script: '🗒', info: 'ⓘ', camera: '🎥', ai: '✦'};
  var PANE_WORDS = {nav: ['the navigation', 'courses and videos'], script: ['the script', 'the lesson text'],
                    info: ['About this lesson', 'title and description'], camera: ['the Camera controls', 'your own view'],
                    ai: ['Ask (AI)', 'the assistant']};
  var PANE_KEY = {nav: 'n', script: 's', info: 'i', camera: 'c', ai: 'a'};
  var PANE_KEYS = {n: 'nav', s: 'script', i: 'info', c: 'camera', a: 'ai'};
  var PERM_NAMES = ['ownAgent', 'modelDownload', 'localNetwork', 'storage', 'viewerCamera', 'select', 'exportPersonal'];
  var AGENT_REQUIRED = ['on', 'snapshot', 'probe', 'ask', 'stop'];

  function copy(o) { return o === undefined ? undefined : JSON.parse(JSON.stringify(o)); }
  function freeze(o) {
    if (o && typeof o === 'object' && !Object.isFrozen(o)) {
      Object.keys(o).forEach(function (k) { freeze(o[k]); });
      Object.freeze(o);
    }
    return o;
  }
  function normBase(b) { b = String(b || ''); return b && b.charAt(b.length - 1) !== '/' ? b + '/' : b; }
  function csv(s) { return String(s || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean); }

  function defaultStore() {
    // Per-origin browser storage, under this component's own prefix. A host passes services.store to choose.
    return {
      get: function (k) { try { return global.localStorage.getItem('animatedplayer:' + k); } catch (e) { return null; } },
      set: function (k, v) { try { global.localStorage.setItem('animatedplayer:' + k, v); } catch (e) { /* full or blocked */ } }
    };
  }

  // ================================================================= the instance
  function createInstance(hostEl, opts) {
    if (!hostEl || !hostEl.appendChild) throw new Error('AnimatedPlayer.create needs a host element');
    opts = opts || {};
    var BASE = normBase(opts.base || DEFAULT_BASE);
    var U = function (rel) {
      if (/^[a-z]+:/i.test(String(rel))) return String(rel);
      try { return new URL(rel, BASE).href; } catch (e) { return BASE + rel; }
    };
    var services = opts.services || {};
    var debug = !!services.debug;
    var store = services.store || defaultStore();
    var hostCb = {title: services.title || null, tally: services.tally || null};
    var disposed = false, bodyRan = false;
    var cleanups = [];
    var timers = {end: null, cue: null, time: 0};

    // ---- the mount: a child of the host, so a later player can mount into the same container
    var mountEl = document.createElement('ap-mount');
    mountEl.style.cssText = 'display:block;position:relative;width:100%;height:100%;margin:0;padding:0;border:0;' +
                            'box-sizing:border-box;overflow:hidden';
    hostEl.appendChild(mountEl);
    var root = mountEl.attachShadow({mode: 'open'});
    var styleEl = document.createElement('style');
    root.appendChild(styleEl);
    var wrapEl = document.createElement('div');
    wrapEl.className = 'ap-root';
    root.appendChild(wrapEl);
    var host = mountEl;
    var appEl = null;                 // #app, once the template is in
    if (debug) installDebugLookups(root);

    // ---- events: ONE emitter; every other subscription is a filter over it
    var subs = [];
    var lastTimeEmit = 0;
    function emit(type, subject, data, cause) {
      if (disposed && type !== 'lifecycle') return;
      var e = freeze({v: 1, type: type, t: +(currentT() || 0).toFixed(3), at: Date.now(),
                      subject: subject ? {kind: subject.kind, id: subject.id} : null,
                      data: data === undefined ? {} : copy(data), cause: cause || currentCause()});
      subs.slice().forEach(function (s) {
        try {
          if (s.type === 'event' || s.type === type) s.fn(e);
          else if (s.type === 'ui' && type === 'ui.changed') s.fn(e.data);
          else if (s.type === 'state' && type === 'lifecycle') s.fn(e.data.state);
          else if (s.type === 'lifecycle' && type === 'lifecycle') s.fn(e.data.state);
          else if (s.type === 'error' && type === 'error') s.fn(e.data);
        } catch (x) { /* a host's listener must not break the player */ }
      });
    }
    var causeStack = [];
    function currentCause() { return causeStack.length ? causeStack[causeStack.length - 1] : 'viewer'; }
    function as(cause, fn) {
      causeStack.push(cause);
      try { return fn(); } finally { causeStack.pop(); }
    }
    var currentT = function () { return 0; };

    // ---- host policy: strips, panes, size
    var UI = {strips: {play: true, controls: true}, allowed: {}, size: 'default', stageReserve: 'auto',
              selectToggle: false};
    PANES.forEach(function (p) { UI.allowed[p] = true; });
    var hostOpen = {};                 // explicit host open/close requests, applied once the viewer state exists
    function takeUi(u, fromHost) {
      u = u || {};
      if (u.strips) {
        if (u.strips.play !== undefined) UI.strips.play = !!u.strips.play;
        if (u.strips.controls !== undefined) UI.strips.controls = !!u.strips.controls;
      }
      if (u.panes) {
        PANES.forEach(function (p) {
          var x = u.panes[p];
          if (!x) return;
          if (x.allowed !== undefined) UI.allowed[p] = !!x.allowed;
          if (x.open !== undefined) hostOpen[p] = !!x.open;
        });
      }
      if (u.size !== undefined && /^(default|theatre|full)$/.test(u.size)) UI.size = u.size;
      if (u.stageReserve !== undefined) UI.stageReserve = u.stageReserve;
      if (u.selectToggle !== undefined) UI.selectToggle = !!u.selectToggle;
    }
    takeUi(opts.ui);

    // ---- permissions
    var hostAgent = null, agentProblem = null, agentProvider = services.agentProvider || null;
    if (services.agent) {
      var missing = AGENT_REQUIRED.filter(function (k) { return typeof services.agent[k] !== 'function'; });
      if (missing.length) agentProblem = 'the agent handed over is missing: ' + missing.join(', ');
      else hostAgent = services.agent;
    }
    var P = {storage: true, viewerCamera: true, select: true, exportPersonal: false, request: null};
    function takePerms(p) {
      p = p || {};
      PERM_NAMES.forEach(function (k) { if (p[k] !== undefined) P[k] = (p[k] === null ? undefined : !!p[k]); });
      if (p.request !== undefined) P.request = typeof p.request === 'function' ? p.request : null;
    }
    takePerms(opts.permissions);
    function effPerm(k) {
      // A HOST AGENT changes the default (the page answers, so the component does not go looking); a PROVIDER does
      // not - it IS the component's own agent, wrapped, and so it is governed by ownAgent like any own model.
      if (k === 'ownAgent') return P.ownAgent !== undefined ? !!P.ownAgent : !hostAgent;
      if (k === 'modelDownload') return P.modelDownload !== undefined ? !!P.modelDownload && effPerm('ownAgent') : effPerm('ownAgent');
      if (k === 'localNetwork') return P.localNetwork !== undefined ? !!P.localNetwork && effPerm('ownAgent') : effPerm('ownAgent');
      if (k === 'storage' || k === 'viewerCamera' || k === 'select') return P[k] !== false;
      if (k === 'exportPersonal') return P[k] === true;
      return false;
    }
    function effPerms() {
      var o = {};
      PERM_NAMES.forEach(function (k) { o[k] = effPerm(k); });
      o.request = !!P.request;
      return o;
    }
    var perms = {};
    PERM_NAMES.forEach(function (k) { Object.defineProperty(perms, k, {get: function () { return effPerm(k); }}); });
    function aiPossible() { return !!(hostAgent || effPerm('ownAgent') || P.request); }
    function panePermitted(p) {
      if (p === 'camera') return effPerm('viewerCamera');
      if (p === 'ai') return aiPossible();
      return true;
    }
    function paneAllowed(p) { return !!UI.allowed[p] && panePermitted(p); }

    // ---- audio: the mechanism (a master gain per instance); the policy is the host's
    var AUDIO = {audible: !(opts.audio && opts.audio.audible === false),
                 volume: (opts.audio && isFinite(opts.audio.volume)) ? Math.max(0, Math.min(1, +opts.audio.volume)) : 1};

    // ---- the body's services
    var urlState = null;
    var urlsvc = services.url || {
      read: function () {
        var q = new URLSearchParams();
        var src = opts.source || {}, prm = opts.params || {};
        if (src.course) q.set('c', src.course);
        if (src.video) q.set('v', src.video);
        if (prm.speech) q.set('speech', prm.speech);
        if (prm.subs !== undefined && prm.subs !== null) q.set('subs', (Array.isArray(prm.subs) ? prm.subs : csv(prm.subs)).join(','));
        if (prm.mode) q.set('mode', prm.mode);
        if (prm.cam) q.set('cam', prm.cam);
        return q;
      },
      write: function (q) { urlState = q; },
      href: function () { return BASE + (urlState ? '?' + urlState : ''); }
    };
    var curScene = null, curOverlay = null, catalogueReady = null;
    function hook(name, value) { if (debug) global[name] = value; }
    function DRIVE() { return (global.ScenePlayer && global.ScenePlayer.drive) || global.__drive; }
    var observers = [];
    function observeSize(el, fn) {
      if (!global.ResizeObserver || !el) return;
      var ro = new ResizeObserver(function () { if (!disposed) fn(); });
      ro.observe(el);
      observers.push(ro);
    }
    var blobUrls = [];
    function trackUrl(u) { blobUrls.push(u); return u; }

    // ---- ready
    var readyResolve, readyReject, mountedResolve, mountedReject;
    var ready = new Promise(function (res, rej) { readyResolve = res; readyReject = rej; });
    ready.catch(function () {});
    // mounted: the component's own DOM exists (its scripts and styles arrived), whether or not a lesson is open
    var mounted = new Promise(function (res, rej) { mountedResolve = res; mountedReject = rej; });
    mounted.catch(function () {});
    var lifecycle = '';
    var impl = null;
    var queue = [];
    function whenBody(fn) {
      if (disposed) return Promise.reject(new Error('disposed'));
      if (impl) return Promise.resolve().then(fn);
      return new Promise(function (res, rej) { queue.push(function () { try { res(fn()); } catch (e) { rej(e); } }); });
    }

    var cssUrl = BASE + 'player/animated_player.css';
    Promise.all([loadAll(BASE, CORE), loadText(cssUrl, CSS), loadText(BASE + 'player/vocabulary.json', VOCAB)])
      .then(function (got) {
        if (disposed) return;
        styleEl.textContent = got[1];
        vocabulary = JSON.parse(got[2]);
        wrapEl.innerHTML = TEMPLATE;
        appEl = root.getElementById('app');
        impl = runBody();
        bodyRan = true;
        var q = queue; queue = [];
        q.forEach(function (f) { f(); });
        mountedResolve(handle);
      }).catch(function (e) {
        emit('error', null, {code: 'load', message: String((e && e.message) || e)}, 'system');
        wrapEl.textContent = 'The lesson player could not start: ' + String((e && e.message) || e);
        readyReject(e);
        mountedReject(e);
      });
    var vocabulary = null;

    var TEMPLATE = '<div id="app">\n' +
    '  <aside id="browse">\n' +
    '    <div class="filters">\n' +
    '      <input id="fcourse" type="search" dir="auto" placeholder="Filter course" aria-label="Filter course">\n' +
    '      <input id="fvideo"  type="search" dir="auto" placeholder="Filter video"  aria-label="Filter video">\n' +
    '      <button class="clear" id="fclear" hidden>Clear filters</button>\n' +
    '    </div>\n' +
    '    <div id="tree"></div>\n' +
    '    <div id="railsplit" role="separator" aria-orientation="horizontal" tabindex="0"\n' +
    '         aria-label="Resize the course list and the camera controls"><i></i></div>\n' +
    '    <div id="railcam"></div>\n' +
    '  </aside>\n' +
    '  <div id="railsplitx" class="hsplit" role="separator" aria-orientation="vertical" tabindex="0"\n' +
    '       aria-label="Resize the course panel — drag, or use the left and right arrow keys"></div>\n' +
    '  <main id="main">\n' +
    '    <div id="stagewrap">\n' +
    '      <div id="poster"></div>\n' +
    '      <div id="stage"></div>\n' +
    '      <video id="vid" hidden controls preload="metadata" playsinline></video>\n' +
    '      <div id="overlay"></div>\n' +
    '      <div class="ap-slots" id="apslots"></div>\n' +
    '      <div id="campanel" class="campanel" hidden></div>\n' +
    '      <div id="load">\n' +
    '        <div class="what" id="loadwhat">Loading</div>\n' +
    '        <div class="bar" id="loadbar"><i></i></div>\n' +
    '        <div class="nums" id="loadnums"></div>\n' +
    '        <div class="stall" id="loadstall"></div>\n' +
    '        <div class="btns">\n' +
    '          <button id="loadcancel" class="ghost" hidden>Cancel download</button>\n' +
    '          <button id="loadretry" hidden>Retry</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div id="bar">\n' +
    '      <button id="play" disabled>Play</button>\n' +
    '      <input id="scrub" type="range" min="0" max="1000" value="0" step="1" aria-label="Position">\n' +
    '      <span id="time">0:00</span>\n' +
    '      <span class="ap-legacy"><button class="ghost" id="bscript" aria-pressed="false" title="Show the script (s)">Script</button></span>\n' +
    '      <span class="ap-tgls" data-ap-strip="play"></span>\n' +
    '      <span class="ap-hostslot" data-ap-slot="bar"></span>\n' +
    '    </div>\n' +
    '    <div id="axes">\n' +
    '      <div class="axis"><label for="axcat">Catalogue</label><select id="axcat"></select></div>\n' +
    '      <div class="axis"><label for="axspeech">Speech</label><select id="axspeech"></select></div>\n' +
    '      <div class="axis"><label for="axsub1">Subtitles</label><select id="axsub1"></select><select id="axsub2"></select></div>\n' +
    '      <div class="axis"><label for="axmode">Watch as</label><select id="axmode"></select></div>\n' +
    '      <div class="dlgroup">\n' +
    '        <div class="axis dlslot"><a id="dl" class="dl" hidden download>Download</a></div>\n' +
    '        <div class="axis chk ap-legacy"><label id="camonlab" for="camon">\n' +
    '          <input type="checkbox" id="camon"> Camera controls</label></div>\n' +
    '        <div class="axis chk ap-legacy"><label id="askonlab" for="askon">\n' +
    '          <input type="checkbox" id="askon"> Ask (AI)</label></div>\n' +
    '      </div>\n' +
    '      <div class="ap-tgls" data-ap-strip="controls"></div>\n' +
    '    </div>\n' +
    '    <div id="script"><h3>Script <button id="scriptcopy">Copy</button><span id="scriptnote"></span></h3><div id="scriptbody"></div></div>\n' +
    '    <div id="about"></div>\n' +
    '    <div id="note"></div>\n' +
    '  </main>\n' +
    '  <div id="asksplitx" class="hsplit" role="separator" aria-orientation="vertical" tabindex="0"\n' +
    '       aria-label="Resize the Ask panel — drag, or use the left and right arrow keys"></div>\n' +
    '  <aside id="ask" aria-label="Ask about this lesson"></aside>\n' +
    '</div>\n';

    // ============================================================= the body: site/app.js, as one instance
    function runBody() {
    // AnimatedEverything - the catalogue page. Engineered by Mohamad Khorbatli.
    //
    // This file implements what tools/frontend_checks.py specifies. The reference functions there are the
    // specification; these are the same rules in the language the page speaks. Where a name matches
    // (fold, ordered, filterTree, directionOf, resolvesTo, sizeReduce), it is deliberate: the two must agree,
    // and a disagreement is a defect in one of them rather than a difference of opinion.

      // ================================================================= the three axes, and direction
      var RTL = {ar: 1, he: 1, fa: 1, ur: 1, ps: 1, sd: 1, ug: 1, yi: 1};
      function baseLang(v) { return String(v || '').split('-')[0].toLowerCase(); }
      function directionOf(v) { return RTL[baseLang(v)] ? 'rtl' : 'ltr'; }

      // One resolution rule (v4 s5a.1). A refinement falls back to its base; a base NEVER widens to a
      // dialect, because asking for Arabic must not silently get one particular Levantine reading.
      function resolvesTo(variant, available) {
        if (available.indexOf(variant) >= 0) return variant;
        var parts = String(variant || '').split('-');
        while (parts.length > 1) {
          parts.pop();
          var cand = parts.join('-');
          if (available.indexOf(cand) >= 0) return cand;
        }
        return null;
      }

      var LANG_NAME = {en: 'English', ar: 'Arabic', fr: 'French'};
      function langName(v) { return LANG_NAME[v] || v; }

      // ================================================================= folding, for the filters
      // Arabic is typed without harakat far more often than with them, so a filter that fails on a vocalised
      // title looks broken. Both directions are checked in the spec.
      var HARAKAT = /[ً-ْٰـ]/g;
      function fold(s) {
        s = String(s == null ? '' : s);
        try { s = s.normalize('NFKD').replace(/[̀-ͯ]/g, ''); } catch (e) { /* older engines */ }
        return s.replace(HARAKAT, '')
          .replace(/[آأإٱ]/g, 'ا')
          .replace(/ى/g, 'ي').replace(/ة/g, 'ه')
          .replace(/\s+/g, ' ').trim().toLowerCase();
      }

      // ================================================================= ordering
      // Explicit order decides; absent, the authored position holds. NEVER alphabetical - it would reorder a
      // course when a lesson is retitled, and differently in each language.
      function ordered(nodes) {
        return (nodes || []).map(function (n, i) { return [n, i]; })
          .sort(function (a, b) {
            var ao = a[0].order == null ? 1e6 : a[0].order, bo = b[0].order == null ? 1e6 : b[0].order;
            return ao - bo || a[1] - b[1];
          }).map(function (p) { return p[0]; });
      }

      function titleOf(node, variant) {
        var t = node.title || {};
        if (t[variant] != null) return {text: t[variant], how: 'exact'};
        var r = resolvesTo(variant, Object.keys(t));
        if (r) return {text: t[r], how: 'resolved'};
        return {text: node.id, how: 'id-only'};   // shown, marked - never a silent blank row
      }
      function descOf(node, variant) {
        var d = node.description || {};
        if (d[variant] != null) return d[variant];
        var r = resolvesTo(variant, Object.keys(d));
        return r ? d[r] : '';
      }

      // ================================================================= the two filter boxes
      function filterTree(courses, cq, vq, variant) {
        cq = fold(cq); vq = fold(vq);
        var out = [];
        ordered(courses).forEach(function (c) {
          var ct = titleOf(c, variant).text;
          if (cq && (fold(ct) + ' ' + fold(c.id)).indexOf(cq) < 0) return;
          var vids = ordered(c.videos);
          if (vq) {
            vids = vids.filter(function (v) {
              return (fold(titleOf(v, variant).text) + ' ' + fold(v.id)).indexOf(vq) >= 0;
            });
            if (!vids.length) return;          // conjunctive: a course with no matching video is dropped
          }
          out.push({course: c, videos: vids, expanded: !!vq});
        });
        return out;
      }

      // ================================================================= the four display modes
      //
      // Two independent choices - FORMAT (mp4 | interactive) and ENCODING (exact | compressed) - and one
      // rule the owner set, which is what makes them coherent:
      //
      //   In MP4 mode the Speech and Subtitle selectors CHOOSE THE FILE. They do not stop meaning something
      //   because a finished video has its languages baked in; they select WHICH finished video. A
      //   combination nobody rendered is refused BY NAME and never replaced by a neighbouring file.
      //
      // Availability is computed the same way in both formats - ask the index, offer what exists, say why
      // the rest is missing. The interactive index simply happens to be fuller. The control shows the SIZE
      // rather than an adjective, because "Quality" would imply the exact file is better and push everyone
      // toward the slowest option.
      var MODES = [
        {id: 'interactive.exact', format: 'interactive', encoding: 'exact', label: 'Interactive'},
        {id: 'interactive.compressed', format: 'interactive', encoding: 'compressed',
         label: 'Interactive, smaller'},
        {id: 'mp4.exact', format: 'mp4', encoding: 'exact', label: 'Video'},
        {id: 'mp4.compressed', format: 'mp4', encoding: 'compressed', label: 'Video, smaller'}
      ];

      function variantKey(speech, subs) {
        var s = (subs || []).filter(Boolean).slice().sort();
        return speech + '.' + (s.length ? s.join('+') : 'none');
      }

      // The ONE resolver. Returns {rec} or {why} - never a nearest match, never a fallback to the default
      // language. Someone who asked for Arabic and silently got English would have no way to know.
      function resolveMp4(index, speech, subs, encoding) {
        if (!index || !index.combinations) return {why: 'this lesson has no video file'};
        var key = variantKey(speech, subs);
        var byKey = index.combinations[key];
        if (!byKey) {
          return {why: 'No video has been made for ' + langName(speech) + ' speech with ' +
                       ((subs && subs.length) ? subs.map(langName).join(' + ') + ' subtitles'
                                              : 'no subtitles') + '.'};
        }
        var rec = byKey[encoding];
        if (!rec) {
          return {why: 'That combination exists, but not in the smaller encoding — only ' +
                       Object.keys(byKey).join(', ') + '.'};
        }
        return {rec: rec};
      }

      function modeAvailable(m, v, mp4index) {
        if (m.format === 'interactive') {
          if (m.encoding === 'compressed') {
            return v.meshopt
              ? {ok: true}
              : {ok: false, why: 'not published in the smaller encoding yet'};
          }
          return {ok: true};
        }
        var r = resolveMp4(mp4index, S.lang.speech, S.lang.subtitles, m.encoding);
        return r.rec ? {ok: true, rec: r.rec} : {ok: false, why: r.why};
      }

      // ================================================================= size modes
      function sizeReduce(state, action) {
        if (action === 'escape') return 'default';
        if (action === 'toggle_theatre') return state === 'theatre' ? 'default' : 'theatre';
        if (action === 'toggle_full') return state === 'full' ? 'default' : 'full';
        return state;
      }

      // ================================================================= browser state: ONE versioned key
      // SVER 2 (v28): the subtitle default changed from ['en'] to "every language the lesson declares", and
      // version 1 states carry the OLD default written into storage as if a person had chosen it. Keeping them
      // would leave every earlier visitor - the owner included - on English-only subtitles indefinitely, which
      // is exactly the defect being fixed. A version-1 state is therefore discarded, as the rule below says.
      var SKEY = 'animatedeverything:state', SVER = 2;
      // subtitles: null = NOT CHOSEN - show every language this lesson declares. The owner's standing rule is
      // English speech with subtitles in BOTH languages, so both is the default and a narrower set is a choice.
      var S = {v: SVER, expanded: [], resume: {}, mode: 'interactive.exact',
               lang: {catalogue: 'en', speech: 'en', subtitles: null}};
      try {
        var raw = perms.storage ? JSON.parse(store.get(SKEY) || 'null') : null;
        // An unrecognised version is DISCARDED, not hopefully migrated. Nothing here is irreplaceable.
        if (raw && raw.v === SVER) S = raw;
      } catch (e) { /* private mode, or a corrupt value: start fresh */ }
      function save() { try { if (perms.storage) store.set(SKEY, JSON.stringify(S)); } catch (e) {} }

      // How far ahead the spoken lines are fetched before a lesson is declared ready. It is a lesson's
      // length rather than a tuning knob: the voice is what a language lesson is FOR, so all of it is
      // loaded before Play is offered. Named once because the progress denominator has to ask the same
      // question the prefetch answers.
      var VOICE_AHEAD = 45;

      // ================================================================= feedback thresholds
      // The LENGTH of the wait decides which feedback is honest (v4 s5c).
      var T_FLOW = 1000, T_ATTENTION = 10000;
      function feedbackFor(ms) { return ms < T_FLOW ? 'none' : (ms < T_ATTENTION ? 'indeterminate' : 'determinate'); }

      // ================================================================= DOM
      var $ = function (id) { return root.getElementById(id); };
      var app = $('app'), tree = $('tree'), browse = $('browse');
      var fcourse = $('fcourse'), fvideo = $('fvideo'), fclear = $('fclear');
      var axcat = $('axcat'), axspeech = $('axspeech'), axsub1 = $('axsub1'), axsub2 = $('axsub2');
      var loadEl = $('load'), loadWhat = $('loadwhat'), loadBar = $('loadbar'), loadNums = $('loadnums'),
          loadStall = $('loadstall'), loadRetry = $('loadretry'), loadCancel = $('loadcancel');
      var playBtn = $('play'), scrub = $('scrub'), timeEl = $('time'), poster = $('poster');
      var axmode = $('axmode'), dl = $('dl'), vid = $('vid');

      var CAT = null, COURSES = [], current = null, size = 'default';

      function mmss(t) { t = Math.max(0, t | 0); return (t / 60 | 0) + ':' + ('0' + (t % 60)).slice(-2); }
      function mb(b) { return (b / 1e6).toFixed(1) + ' MB'; }

      // ================================================================= sizes shown to a person
      //
      // A SIZE ON SCREEN IS A DOWNLOAD SIZE, ALWAYS. The host gzips models and JSON and does not touch
      // audio or video, so a lesson's bytes on disk are about 2.2x what the link actually carries. The MP4
      // figures were already correct - video is not compressed further - so labelling the interactive modes
      // in disk bytes put two units in one menu and made the smaller encoding look like an 8.8x saving
      // where the wire says 5.8x. It flattered the very choice it was asking a person to make.
      //
      // The disk figures are still right for what they are FOR: the content address hashes them, and the
      // progress bar divides by them because a gzipped response decodes to its disk size. Those consumers
      // deliberately keep asking for disk. This one asks for wire.
      //
      // wireOf(record, diskKey, wireKey) falls back to disk when a publish predates the wire fields, so an
      // older site degrades to the previous behaviour instead of to a blank - and says which it used.
      function wireOf(rec, diskKey, wireKey) {
        if (!rec) return {bytes: null, exact: false};
        var w = rec[wireKey];
        if (typeof w === 'number' && w > 0) return {bytes: w, exact: true};
        var d = rec[diskKey];
        return {bytes: (typeof d === 'number' ? d : null), exact: false};
      }

      // The ONE formatter every label goes through. It marks a fallback in the DOM rather than rendering a
      // disk figure that is indistinguishable from a wire one - an approximation that cannot be told from a
      // measurement is the defect this whole change is about.
      function sizeLabel(rec, diskKey, wireKey) {
        var r = wireOf(rec, diskKey, wireKey);
        if (r.bytes === null) return '';
        return (r.exact ? '' : '~') + mb(r.bytes);
      }

      // ================================================================= the tree
      function render() {
        if (!paneEffective('nav')) { tree.innerHTML = ''; return; }     // v28.3: navigation not allowed -> no tree at all
        var variant = S.lang.catalogue;
        var dir = directionOf(variant);
        browse.setAttribute('dir', dir);                 // the LAYOUT mirrors; the labels stay English
        var rows = filterTree(COURSES, fcourse.value, fvideo.value, variant);
        fclear.hidden = !(fcourse.value || fvideo.value);
        tree.innerHTML = '';

        if (!rows.length) {
          var e = document.createElement('div');
          e.className = 'empty';
          var both = fcourse.value && fvideo.value;
          e.innerHTML = both
            ? 'No course matches <b>' + esc(fcourse.value) + '</b> with a video matching <b>' +
              esc(fvideo.value) + '</b>.'
            : 'Nothing matches <b>' + esc(fcourse.value || fvideo.value) + '</b>.';
          tree.appendChild(e);
          // Zero results OFFER to widen, naming the count. One click, never automatic.
          var others = (CAT.catalogueVariants || []).filter(function (v) { return v !== variant; });
          var n = 0;
          others.forEach(function (o) { n += filterTree(COURSES, fcourse.value, fvideo.value, o).length; });
          if (n) {
            var b = document.createElement('button');
            b.className = 'widen';
            b.textContent = 'No matches in ' + langName(variant) + ' — ' + n +
              ' in other languages. Search those?';
            b.onclick = function () {
              for (var i = 0; i < others.length; i++) {
                if (filterTree(COURSES, fcourse.value, fvideo.value, others[i]).length) {
                  S.lang.catalogue = others[i]; save(); syncAxes(); render(); return;
                }
              }
            };
            tree.appendChild(b);
          }
          return;
        }

        rows.forEach(function (row) {
          var c = row.course;
          var open = row.expanded || S.expanded.indexOf(c.id) >= 0 ||
                     (current && current.courseId === c.id);
          var wrap = document.createElement('div');
          wrap.className = 'course' + (open ? ' open' : '');

          var t = titleOf(c, variant);
          var crow = document.createElement('button');
          crow.className = 'crow';
          crow.setAttribute('aria-expanded', open ? 'true' : 'false');
          crow.innerHTML = '<span class="tw">▶</span>' +
            '<span class="ctitle' + (t.how === 'id-only' ? ' idonly' : '') + '" dir="auto">' +
            esc(t.text) + '</span><span class="count">' + row.videos.length + '</span>';
          crow.onclick = function () {
            var i = S.expanded.indexOf(c.id);
            if (i >= 0) S.expanded.splice(i, 1); else S.expanded.push(c.id);
            save(); render();
          };
          wrap.appendChild(crow);

          var vs = document.createElement('div');
          vs.className = 'videos';
          function videoRow(v) {
            var vt = titleOf(v, variant);
            var vrow = document.createElement('button');
            vrow.className = 'vrow' + (current && current.video.id === v.id &&
                                       current.courseId === c.id ? ' active' : '');
            var dur = (v.duration && (v.duration[S.lang.speech] != null ? v.duration[S.lang.speech]
                                      : v.duration[Object.keys(v.duration)[0]])) || 0;
            vrow.innerHTML = '<span class="vtitle' + (vt.how === 'id-only' ? ' idonly' : '') +
              '" dir="auto">' + esc(vt.text) + '</span>' +
              // BIDI ISOLATION. '0:45 · 46.1 MB' inside an RTL tree renders as 'MB 46.1 · 0:45' without it:
              // the neutral separators take the container's direction and the run order flips. This is the
              // exact defect v4 §3.2 predicted, and it duly appeared on the first Arabic screenshot.
              '<bdi class="vmeta" dir="ltr">' + mmss(dur) + ' · ' +
              sizeLabel(v, 'bytes', 'wireBytes') + '</bdi>';
            vrow.onclick = function () { open_video(c, v); };
            return vrow;
          }
          // v28: BOOK -> UNIT -> PART -> VIDEO, when the course declares units (course/2). Each level folds, and
          // its open state is remembered under a path key ("eam-b1/u01/p1") beside the course keys. A branch
          // with no video left after filtering is not drawn - an empty "Part 3" row would be a dead end.
          var shown = {};
          row.videos.forEach(function (v) { shown[v.id] = v; });
          if (c.units && c.units.length) {
            ordered(c.units).forEach(function (u) {
              var parts = ordered(u.parts || []).map(function (p) {
                return {p: p, vids: (p.videos || []).map(function (id) { return shown[id]; })
                                                    .filter(Boolean)};
              }).filter(function (x) { return x.vids.length; });
              if (!parts.length) return;
              vs.appendChild(branch(c.id + '/' + u.id, titleOf(u, variant).text, 'urow',
                                    parts.reduce(function (a, x) { return a + x.vids.length; }, 0),
                                    function (host) {
                parts.forEach(function (x) {
                  host.appendChild(branch(c.id + '/' + u.id + '/' + x.p.id, titleOf(x.p, variant).text,
                                          'prow', x.vids.length, function (h2) {
                    x.vids.forEach(function (v) { h2.appendChild(videoRow(v)); });
                  }, x.vids));
                });
              }, [].concat.apply([], parts.map(function (x) { return x.vids; }))));
            });
          } else {
            row.videos.forEach(function (v) { vs.appendChild(videoRow(v)); });
          }
          wrap.appendChild(vs);
          tree.appendChild(wrap);

          function branch(key, label, cls, count, fillFn, vids) {
            var holds = current && current.courseId === c.id &&
                        vids.some(function (v) { return v.id === current.video.id; });
            var isOpen = row.expanded || holds || S.expanded.indexOf(key) >= 0;
            var box = document.createElement('div');
            box.className = (cls === 'urow' ? 'unit' : 'part') + (isOpen ? ' open' : '');
            var b = document.createElement('button');
            b.className = cls;
            b.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            b.innerHTML = '<span class="tw">▶</span><span class="ctitle" dir="auto">' + esc(label) +
                          '</span><span class="count">' + count + '</span>';
            b.onclick = function () {
              var i = S.expanded.indexOf(key);
              if (i >= 0) S.expanded.splice(i, 1); else S.expanded.push(key);
              save(); render();
            };
            box.appendChild(b);
            var inner = document.createElement('div');
            inner.className = 'kids';
            inner.hidden = !isOpen;
            fillFn(inner);
            box.appendChild(inner);
            return box;
          }
        });
      }

      function esc(s) {
        return String(s).replace(/[&<>"]/g, function (m) {
          return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[m];
        });
      }

      // ================================================================= the three menus
      // Three DIFFERENT lists, each built by asking the data. A variant is offered for SPEECH when any
      // lesson in the COURSE has it, and disabled on the ones that do not (v4 s3.1) - so a menu is never
      // a column of permanently greyed entries, and the author's full gap lives on a different page.
      function courseSpeechVariants(c) {
        var s = {};
        (c.videos || []).forEach(function (v) { (v.speech || []).forEach(function (x) { s[x] = 1; }); });
        return Object.keys(s).sort();
      }

      function syncAxes() {
        fill(axcat, (CAT.catalogueVariants || []).map(function (v) {
          return {value: v, label: langName(v), enabled: true};
        }), S.lang.catalogue);

        var c = current && current.course, v = current && current.video;
        var speech = c ? courseSpeechVariants(c) : ['en'];
        fill(axspeech, speech.map(function (x) {
          var has = !v || (v.speech || []).indexOf(x) >= 0;
          return {value: x, label: langName(x) + (has ? '' : ' — no audio for this lesson'),
                  enabled: has};
        }), S.lang.speech);

        var subs = v ? (v.subtitles || []) : ['en'];
        var pick = S.lang.subtitles || [];
        fill(axsub1, [{value: '', label: 'None', enabled: true}].concat(subs.map(function (x) {
          return {value: x, label: langName(x), enabled: true};
        })), pick[0] || '');
        fill(axsub2, [{value: '', label: 'None', enabled: true}].concat(subs.map(function (x) {
          return {value: x, label: langName(x), enabled: true};
        })), pick[1] || '');
      }

      function fill(sel, items, chosen) {
        sel.innerHTML = '';
        items.forEach(function (it) {
          var o = document.createElement('option');
          o.value = it.value; o.textContent = it.label; o.disabled = !it.enabled;
          if (it.value === chosen) o.selected = true;
          sel.appendChild(o);
        });
      }

      // The mode control. Every option carries its SIZE; unavailable ones are disabled and say why, which
      // is the same rule the speech menu uses - one behaviour to learn, not two.
      function syncModes() {
        var v = current && current.video;
        if (!v) { axmode.innerHTML = ''; dl.hidden = true; return; }
        axmode.innerHTML = '';
        var anyOk = false;
        MODES.forEach(function (m) {
          var a = modeAvailable(m, v, current.mp4);
          // All four options in ONE unit. The mp4 record carries its own wire field; the two interactive
          // options read the lesson's two totals.
          var size = a.rec ? sizeLabel(a.rec, 'bytes', 'wire')
            : (m.id === 'interactive.exact' ? sizeLabel(v, 'bytes', 'wireBytes')
              : (m.id === 'interactive.compressed'
                 ? sizeLabel(v, 'meshoptBytes', 'meshoptWireBytes') : ''));
          var o = document.createElement('option');
          o.value = m.id;
          o.textContent = m.label + (size ? '  —  ' + size : '  —  unavailable');
          o.disabled = !a.ok;
          if (!a.ok) o.title = a.why || '';
          if (m.id === S.mode && a.ok) { o.selected = true; anyOk = true; }
          axmode.appendChild(o);
        });
        if (!anyOk) {
          // The chosen mode is not available for THIS lesson in THIS combination. Fall back to the one mode
          // that always exists, and say so - rather than leaving a control pointing at nothing.
          S.mode = 'interactive.exact';
          save();
          Array.prototype.forEach.call(axmode.options, function (o) {
            o.selected = (o.value === S.mode);
          });
        }
        var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
        var a = modeAvailable(m, v, current.mp4);
        if (m.format === 'mp4' && a.rec) {
          dl.hidden = false;
          dl.href = U(a.rec.address);
          dl.setAttribute('download', (titleOf(v, 'en').text + '.mp4').replace(/[\\/:*?"<>|]/g, '-'));
          dl.textContent = 'Download ' + sizeLabel(a.rec, 'bytes', 'wire');
        } else {
          dl.hidden = true;
        }
      }

      function subtitleChoice() {
        var a = axsub1.value, b = axsub2.value, out = [];
        if (a) out.push(a);
        if (b && b !== a) out.push(b);
        return out;                      // [] means NONE, said explicitly - never inferred
      }

      // ================================================================= loading, with honest feedback
      // loadShown: this load has ALREADY displayed a percentage. v28 found the bar freezing: the mode is chosen
      // from max(elapsed, estimated remaining), and near the end of a load that finishes in just under ten
      // seconds the estimate collapses while elapsed is still 9 s - so a bar that had been counting up flipped
      // back to 'indeterminate', stopped being drawn, and sat at 92% through the whole voice phase. A
      // percentage the page has shown is a promise to keep counting; it may start late, never stop early.
      var loadT0 = 0, loadTimer = null, lastProgress = 0, rate = [], loadShown = false;
      function loadShow(what) {
        cancelled = false; aborter = null;
        loadT0 = Date.now(); lastProgress = Date.now(); rate = []; loadShown = false;
        loadWhat.textContent = what; loadNums.textContent = ''; loadStall.textContent = '';
        loadRetry.hidden = true; loadCancel.hidden = false; loadBar.classList.add('indet');
        loadBar.firstChild.style.width = '0%';
        loadEl.classList.add('on');
        clearInterval(loadTimer);
        loadTimer = setInterval(tick, 1000);        // updated every second, as asked
      }
      function loadHide() {
        loadEl.classList.remove('on'); clearInterval(loadTimer); loadTimer = null;
        loadCancel.hidden = true;
      }
      function loadFail(msg) {
        onLoadError(msg);
        loadBar.classList.remove('indet');
        loadWhat.innerHTML = '<span class="err">' + esc(msg) + '</span>';
        loadRetry.hidden = false; loadCancel.hidden = true; clearInterval(loadTimer);
      }
      // Cancelling is a CHOICE, not a fault. It reads as one: no red, no apology, and the same button
      // that stopped it offers to start again.
      function loadCancelled() {
        loadBar.classList.remove('indet');
        loadWhat.textContent = 'Download cancelled — ' + mb(got) +
          (total ? ' of ' + mb(total) : '') + ' had arrived.';
        loadNums.textContent = ''; loadStall.textContent = '';
        loadRetry.hidden = false; loadCancel.hidden = true; clearInterval(loadTimer);
      }

      // THE BAR IS IN DISK BYTES, AND MUST STAY THAT WAY.
      //
      // `got` counts bytes as the stream yields them, and a fetch stream yields DECODED bytes - gzip is
      // undone before the page sees a chunk. So the denominator has to be the decoded size, which is the
      // disk size in the manifest. Converting it to wire bytes to "match the labels" would divide a
      // decoded numerator by a compressed denominator and finish the bar at about 220%.
      //
      // This is the trap the address-completeness rule names: when a key gains a dimension, every consumer
      // must take up the new one DELIBERATELY, asking for the one it means. Two label consumers want wire.
      // This one wants disk. gates/surface_honesty.py fails if this line ever reads a wire field.
      var got = 0, total = 0, doneFiles = 0, totalFiles = 0, curName = '';
      function tick() {
        var el = Date.now() - loadT0;
        var mode = feedbackFor(Math.max(el, total ? estTotalMs() : 0));
        if (mode === 'determinate') loadShown = true;
        if ((mode === 'determinate' || loadShown) && total) {
          loadBar.classList.remove('indet');
          loadBar.firstChild.style.width = Math.min(100, 100 * got / total).toFixed(1) + '%';
          var parts = [mb(got) + ' of ' + mb(total),
                       doneFiles + '/' + totalFiles + ' files',
                       'elapsed ' + mmss(el / 1000)];
          var r = rollingRate();
          // No estimate until enough has arrived to make one honest.
          if (r > 0 && got > total * 0.05) parts.push('about ' + mmss((total - got) / r) + ' left');
          loadNums.textContent = parts.join('  ·  ');
        }
        // SLOW IS NOT STALLED, and the page must not confuse them.
        //
        // The first version measured progress per COMPLETED FILE. On a 4.6 MB model at the 34 KB/s this
        // connection sometimes gives, that is 134 SECONDS of silence - during which the page showed a
        // warning about a download that was working perfectly. Progress is now counted in BYTES as they
        // arrive, so "quiet" means genuinely nothing moving, not "a big file is in flight".
        var quiet = Date.now() - lastProgress;
        if (quiet > 20000) {
          loadStall.textContent = 'nothing has arrived for ' + mmss(quiet / 1000) +
            '. It may still be working — you can keep waiting, or cancel.';
        } else if (rollingRate() > 0 && rollingRate() < 60 * 1024) {
          loadStall.textContent = 'This is a slow connection. It is still downloading — ' +
            'you can wait as long as you like, or cancel.';
        } else {
          loadStall.textContent = '';
        }
      }
      function estTotalMs() { var r = rollingRate(); return r > 0 ? (total - got) / r * 1000 : 1e9; }
      function rollingRate() {          // bytes/sec over the last few seconds, not the average since start
        if (rate.length < 2) return 0;
        var a = rate[0], b = rate[rate.length - 1];
        return b[1] > a[1] ? (b[0] - a[0]) / ((b[1] - a[1]) / 1000) : 0;
      }
      function progressed(bytes, name) {
        got = bytes; curName = name || curName; lastProgress = Date.now();
        rate.push([got, Date.now()]);
        if (rate.length > 8) rate.shift();
        tick();
      }

      // ================================================================= the address bar
      //
      // THE URL DESCRIBES WHAT IS ON SCREEN NOW, not what was on screen when the lesson was opened.
      //
      // It used to be written in exactly one place - inside open_video - and the four selectors changed
      // state without touching it. So the address bar was a snapshot of one instant: choose Arabic
      // subtitles, copy the link, send it, and the recipient got English. The sender never saw it, because
      // their own stored state supplied what the URL had failed to carry. Only the RECIPIENT saw the
      // defect, which is why it survived every test run in a single browser profile.
      //
      // And `mode` was written here and never read at boot - a parameter that travelled and did nothing.
      //
      // URL_PARAMS is the shared contract between this writer and the reader at boot. The two ends are
      // compared by a check that enumerates them, so the next write-only parameter is caught by
      // construction rather than by someone remembering to look.
      // 'cam' is written and read by the same pair as every other parameter, so the symmetry check
      // that guards against a write-only parameter covers it too.
      var URL_PARAMS = ['c', 'v', 'speech', 'subs', 'mode', 'cam'];

      function urlState() {
        if (!current) return null;
        return {c: current.course.id, v: current.video.id, speech: S.lang.speech,
                subs: (S.lang.subtitles || []).join(','), mode: S.mode,
                cam: (S.cam && S.cam.on && camView) && paneEffective('camera') ? camView.encode() : ''};
      }

      function syncUrl() {
        var st = urlState();
        if (!st) return;                       // nothing open: the URL is not ours to rewrite
        var q = URL_PARAMS.map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(st[k]);
        }).join('&');
        // replaceState, never pushState: a selector change is not a place to go Back to, and four of them
        // would otherwise bury the page the person actually arrived from.
        urlsvc.write(q);
        paramsMaybeChanged();
      }

      // ================================================================= opening a video
      function open_video(c, v) {
        onLoading(c, v);
        // The PREVIOUS lesson stops being playable SYNCHRONOUSLY, with the click - not when some fetch
        // resolves. Introducing the mp4.json lookup made the load path asynchronous and quietly brought
        // back a defect already fixed once: Play stayed enabled from the lesson before, so a person could
        // press it on a lesson that was no longer loaded, and an automated wait returned instantly on a
        // stale button. Whatever else happens later, this happens now.
        teardown();
        current = {course: c, courseId: c.id, video: v};
        if (S.expanded.indexOf(c.id) < 0) S.expanded.push(c.id);
        // A speech variant this lesson lacks is never silently substituted: fall to what it HAS.
        if ((v.speech || []).indexOf(S.lang.speech) < 0) S.lang.speech = (v.speech || ['en'])[0];
        var subs = v.subtitles || [];
        var wasChosen = Array.isArray(S.lang.subtitles);
        S.lang.subtitles = (S.lang.subtitles || []).filter(function (x) { return subs.indexOf(x) >= 0; });
        // v28: never chosen -> EVERY declared language (both, for this course).
        if (!wasChosen && !S.lang.subsNone) S.lang.subtitles = subs.slice();
        // Falling back to the first available track is right when a person's chosen LANGUAGE is missing
        // here - it is wrong when they chose None on purpose. Those two arrive at this line identically
        // (an empty list), so without subsNone a deliberate "no subtitles" was silently overruled, and a
        // link carrying subs= opened with English. Same defect as the stale URL, one layer down: state the
        // page could not tell apart from a default.
        // v28: a chosen language this lesson lacks falls back to ALL of its languages, not the first - the
        // first was English, so the fallback itself was a route to English-only subtitles.
        if (!S.lang.subtitles.length && subs.length && !S.lang.subsNone) S.lang.subtitles = subs.slice();
        save(); syncAxes(); render(); describe();
        syncUrl();
        try { setScript(!!S.script); } catch (e) {}
        // The MP4 index for THIS lesson, so the mode control knows what exists before it is drawn. A lesson
        // with no MP4 at all is not an error: the index is simply absent and those modes say so.
        fetch(U(v.dir + '/mp4.json')).then(function (r) { return r.ok ? r.json() : null; })
          .catch(function () { return null; })
          .then(function (idx) {
            if (!current || current.video !== v) return;   // the person moved on while this was in flight
            current.mp4 = idx;
            applyMode();
          });
      }

      function describe() {
        var variant = S.lang.catalogue, c = current.course, v = current.video;
        var d = directionOf(variant);
        $('about').innerHTML =
          '<h2 dir="auto">' + esc(titleOf(v, variant).text) + '</h2>' +
          '<p class="desc" dir="auto">' + esc(descOf(v, variant)) + '</p>' +
          '<p class="desc" dir="auto">' + esc(titleOf(c, variant).text) + ' · ' +
          esc(descOf(c, variant)) + '</p>';
        $('about').setAttribute('dir', d);
        $('note').textContent = v.files + ' files · ' + sizeLabel(v, 'bytes', 'wireBytes') +
          ' · spoken in ' + (v.speech || []).map(langName).join(', ') +
          ' · subtitles available in ' + (v.subtitles || []).map(langName).join(', ');
      }

      var fetcher = new Fetcher({
        base: BASE,
        onConsent: function () { return true; }     // nothing optional is fetched by this page
      });

      function rec(manifest, rel) {
        var r = manifest.files[rel];
        if (!r) throw new Error('the manifest does not list ' + rel);
        // The chosen ENCODING decides which bytes are fetched. Resolution degrades TOWARDS exactness and
        // never away from it: if a compressed sibling is missing, the exact one is used, because a caller
        // who ends up with the guaranteed bytes has lost nothing. The reverse - quietly serving lossy
        // geometry to someone who asked for the exact file - is the substitution this project refuses.
        var m = MODES.filter(function (x) { return x.id === S.mode; })[0];
        if (m && m.encoding === 'compressed' && r.meshopt) {
          return {address: r.meshopt.address, sha: r.meshopt.sha, bytes: r.meshopt.bytes,
                  rel: rel, kind: rel};
        }
        return {address: r.address, sha: r.sha, bytes: r.bytes, rel: rel, kind: rel};
      }

      // ---- one file, streamed, cancellable, checksum-verified ----------------------------------------
      var cancelled = false, aborter = null;

      // The persistent store. A content address is IMMUTABLE by construction - the name is the hash of the
      // bytes - so a blob can be kept forever with no revalidation, and that is the entire reason the second
      // lesson of a course is nearly free. Relying on HTTP cache headers instead would make the property
      // depend on how the host is configured; the Cache API makes it a property of the page.
      var CACHE = 'animatedeverything/lib/2';   // the address space changed with lib/
      function cacheOpen() {
        if (!window.caches) return Promise.resolve(null);
        return caches.open(CACHE).catch(function () { return null; });
      }

      function streamOne(manifest, rel, alreadyGot) {
        var r = rec(manifest, rel);
        var url = U(r.address);
        return cacheOpen().then(function (cache) {
          if (!cache) return null;
          return cache.match(url).then(function (hit) {
            return hit ? hit.arrayBuffer() : null;
          }).catch(function () { return null; });
        }).then(function (cached) {
          if (cached) {
            // Counted as progress so the bar still moves, and named so a cached lesson is visibly cached.
            progressed(alreadyGot + cached.byteLength, curName);
            return cached;
          }
          return fetchOne(r, url, alreadyGot).then(function (buf) {
            return cacheOpen().then(function (cache) {
              if (cache) {
                try { cache.put(url, new Response(buf.slice(0))); } catch (e) { /* best effort */ }
              }
              return buf;
            });
          });
        });
      }

      function fetchOne(r, url, alreadyGot) {
        aborter = ('AbortController' in window) ? new AbortController() : null;
        return fetch(url, aborter ? {signal: aborter.signal} : {}).then(function (resp) {
          if (!resp.ok) throw new Error(rel + ' -> HTTP ' + resp.status);
          // A body without a reader (very old browsers) still works; it just cannot report mid-file.
          if (!resp.body || !resp.body.getReader) return resp.arrayBuffer();
          var reader = resp.body.getReader();
          var chunks = [], got = 0;
          return (function pump() {
            return reader.read().then(function (res) {
              if (cancelled) { try { reader.cancel(); } catch (e) {} throw new Error('__cancelled'); }
              if (res.done) {
                var out = new Uint8Array(got), at = 0;
                for (var i = 0; i < chunks.length; i++) { out.set(chunks[i], at); at += chunks[i].length; }
                return out.buffer;
              }
              chunks.push(res.value);
              got += res.value.length;
              progressed(alreadyGot + got, curName);    // <- every chunk, not every file
              return pump();
            });
          })();
        }).then(function (buf) {
          // The address is the hash, so verifying is not optional politeness - it is what makes a blob
          // safe to cache forever. It costs 0.05 s on 4.6 MB, measured.
          if (!window.crypto || !crypto.subtle) return buf;
          return crypto.subtle.digest('SHA-256', buf).then(function (d) {
            var hex = Array.prototype.map.call(new Uint8Array(d), function (b) {
              return ('0' + b.toString(16)).slice(-2);
            }).join('').slice(0, 16);
            if (r.sha && hex !== r.sha) {
              throw new Error('checksum mismatch for ' + r.address + ': got ' + hex +
                              ', manifest says ' + r.sha);
            }
            return buf;
          });
        });
      }

      // ---- MP4 mode: a finished video, played in the page and downloadable ---------------------------
      function showMp4(rec) {
        pause();
        if (part) { part = null; hook('__part', null); }
        vid.classList.add('on');
        vid.hidden = false;
        poster.style.display = 'none';
        // The video element IS the transport in this mode: it has its own clock, its own buffering and its
        // own controls. Driving it from the page's scrubber would be a second authority on time.
        playBtn.disabled = true;
        scrub.disabled = true;
        vid.src = U(rec.address);
        vid.load();
        loadShow('Loading the video…');
        vid.oncanplay = function () {
          loadHide();
          onReady();
          timeEl.textContent = '0:00 / ' + mmss(rec.dur || 0);
        };
        vid.onerror = function () {
          loadFail('the browser could not play this file (' +
                   ((vid.error && vid.error.message) || 'decode error') + ')');
        };
        vid.ontimeupdate = function () {
          timeEl.textContent = mmss(vid.currentTime) + ' / ' + mmss(vid.duration || rec.dur || 0);
          mp4SlotsSync(false);
        };
        vid.onplay = function () {
          mp4SlotsSync(true);
          setLifecycle('playing');
          emit('playback.state', null, {state: 'playing', t: +(vid.currentTime || 0).toFixed(3)});
        };
        vid.onpause = function () {
          mp4SlotsSync(false);
          if (!vid.ended) { setLifecycle('paused'); emit('playback.state', null, {state: 'paused', t: +(vid.currentTime || 0).toFixed(3)}); }
        };
        vid.onended = function () {
          mp4SlotsSync(false);
          setLifecycle('ended', 'lesson');
          emit('playback.state', null, {state: 'ended', t: +(vid.currentTime || 0).toFixed(3)}, 'lesson');
          emit('playback.ended', null, {duration: isFinite(vid.duration) ? vid.duration : 0}, 'lesson');
        };
        vid.onseeked = function () { mp4SlotsSync(false); };
        mp4LessonSlots();
      }

      // The lesson's own <slots>, for a mode that loads no scene. scene.json is the published lesson's smallest
      // artefact that carries them (27 KB, 6.5 KB on the wire against a video of several megabytes) and it is the
      // same file - and so the same definitions - the interactive mode resolves against. Fetched once per lesson.
      function mp4LessonSlots() {
        var v = current && current.video;
        if (!v || (current.mp4Slots !== undefined)) { if (current && current.mp4Slots !== undefined) { resolveSlots(); mp4SlotsSync(false); } return; }
        var want = v;
        fetch(U(v.dir + '/scene.json')).then(function (r) { return r.ok ? r.json() : null; })
          .catch(function () { return null; })
          .then(function (sc) {
            if (!current || current.video !== want) return;     // the person moved on while this was in flight
            current.mp4Slots = (sc && sc.slots) || [];
            resolveSlots();
            mp4SlotsSync(false);
          });
      }

      function hideMp4() {
        vid.classList.remove('on');
        vid.hidden = true;
        try { vid.pause(); } catch (e) {}
        vid.removeAttribute('src');
        vid.onplay = vid.onpause = vid.onended = vid.onseeked = null;
        mp4SlotsDisarm();
        mp4GreetArmed = false;
        scrub.disabled = false;
        if (customRes) slotsRender(lastT);
      }

      function applyMode() {
        var v = current && current.video;
        if (!v) return;
        var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
        var a = modeAvailable(m, v, current.mp4);
        syncModes();
        if (!a.ok) {
          hideMp4();
          loadFail(a.why || 'that combination is not available');
          return;
        }
        if (m.format === 'mp4') {
          showMp4(a.rec);
        } else {
          hideMp4();
          loadLesson(v);
        }
      }

      // Everything that must stop being true the moment another lesson, or another mode, is chosen.
      // Called synchronously from both, so no asynchronous step can leave a stale control behind.
      function teardown() {
        pause();
        playBtn.disabled = true;
        part = null;
        hook('__part', null);
        curScene = null; hook('__scene', null);
        dur = 0;
        timeEl.textContent = '0:00';
        scrub.value = 0;
      }

      // v28: the badge, the subtitles and the keyword cards, drawn BEFORE the 3D arrives.
      //
      // Measured on the live site before this: the badge <img> existed with an EMPTY src and zero height after
      // four minutes. Two causes, both here. mount() was only ever handed a pack WITHOUT a badge URL - nothing on
      // this page fetched the badge image at all - so `if (pack.badgeUrl)` was never true. And the timeline, the
      // overlay layout and the badge all waited until every model had streamed and the voice had decoded, so on
      // a slow link nothing but a progress bar was on screen for minutes. Now the small things come first.
      function earlyOverlay(manifest, scene) {
        return fetcher.json(rec(manifest, 'timeline.json')).then(function (tl) {
          var jobs = [], urls = {badge: null, cards: {}};
          function img(rel) {
            return fetcher.get(rec(manifest, rel)).then(function (buf) {
              return trackUrl(URL.createObjectURL(new Blob([buf], {type: 'image/png'})));
            });
          }
          var b = (tl.badge || {}).img;
          if (b && manifest.files[b]) jobs.push(img(b).then(function (u) { urls.badge = u; }));
          (((tl.vocab || {}).cards) || []).forEach(function (c) {
            if (!c.img || !manifest.files[c.img] || c.img in urls.cards) return;
            urls.cards[c.img] = null;
            // a card whose picture fails is not drawn; it never takes the badge or the lesson with it
            jobs.push(img(c.img).then(function (u) { urls.cards[c.img] = u; },
                                      function () { delete urls.cards[c.img]; }));
          });
          return Promise.all(jobs).then(function () {
            var ov = new Overlay($('overlay'), scene, tl);
            ov.setShow(subtitleChoice());
            var aspect = ((scene.size && scene.size[0]) || 1920) / ((scene.size && scene.size[1]) || 1080);
            var w = $('stagewrap').clientWidth, h = $('stagewrap').clientHeight;
            var ww = Math.min(w, h * aspect);
            ov.layout(Math.round(ww), Math.round(ww / aspect));
            if (urls.badge) ov.setBadgeSrc(urls.badge);
            ov.setCardSrcs(urls.cards);
            ov.render(0);
            curOverlay = ov; hook('__overlay', ov);
            placeFrame(aspect);
            return {timeline: tl, overlay: ov};
          });
        });
      }

      var earlyOv = null;
      function loadLesson(v) {
        teardown();
        loadShow('Loading ' + titleOf(v, S.lang.catalogue).text);
        got = 0; total = 0; doneFiles = 0; totalFiles = 0;
        var base = U(v.dir + '/');
        var manifest, scene, audio;
        fetch(base + 'manifest.json', {cache: 'no-store'}).then(function (r) {
          if (!r.ok) throw new Error('manifest -> HTTP ' + r.status);
          return r.json();
        }).then(function (m) {
          manifest = m;
          return fetch(base + 'scene.json').then(function (r) { return r.json(); });
        }).then(function (s) {
          scene = s;
          // THE AUDIO SPLIT, rejoined here. The published scene holds what is SHOWN; the per-variant index
          // holds what is HEARD. The player is handed the two merged and never learns they were apart.
          return fetch(base + 'audio/' + S.lang.speech + '.json').then(function (r) {
            if (!r.ok) throw new Error('no audio index for ' + S.lang.speech);
            return r.json();
          });
        }).then(function (a) {
          audio = a;
          var missing = [];
          scene.speech = (scene.speech || []).map(function (ln) {
            var e = audio.lines[ln.id];
            if (!e) { missing.push(ln.id); return ln; }
            return Object.assign({}, ln, e);
          });
          // A missing entry is a NAMED failure, never a silently closed mouth.
          if (missing.length) throw new Error('the ' + langName(audio.variant) +
            ' audio index is missing ' + missing.length + ' line(s): ' + missing.slice(0, 3).join(', '));
          // v28: THE OVERLAY FIRST - before a single byte of geometry. It is a few kilobytes, and it carries
          // the owner's name and phone number, which must be on screen whatever happens to the 3D.
          return earlyOverlay(manifest, scene);
        }).then(function (pre) {
          earlyOv = pre;

          // Fetch in SHOT order - the opening shot needs one actor and the set, not nine models.
          var rels = [];
          if (scene.set && scene.set.glb) rels.push(scene.set.glb);
          if (scene.set && scene.set.noceil_glb) rels.push(scene.set.noceil_glb);
          (scene.actors || []).forEach(function (a2) { rels.push(a2.model_glb); });
          rels = rels.filter(function (x, i, arr) { return x && arr.indexOf(x) === i; });
          // THE DENOMINATOR COUNTS EVERYTHING THE PAGE WAITS FOR, and the voice is one of those things.
          //
          // It used to count geometry only. The bar therefore reached 100%, the byte counter stopped, and
          // the page then downloaded and decoded the spoken lines - about 0.2 MB of work behind a bar that
          // said there was none left. The words underneath were honest ("Loading the voice..."); the bar
          // was not, and a full bar that is still working is the same kind of statement as a size label in
          // the wrong unit.
          // ONE predicate, shared with the prefetch below. Counting every line here while the prefetch
          // fetched only those starting inside its horizon would leave the bar permanently short of 100% -
          // a denominator and a numerator answering different questions, which is how the bar came to be
          // wrong in the first place.
          var voiceRels = (scene.speech || [])
            .filter(function (ln) { return (ln.start || 0) <= VOICE_AHEAD; })
            .map(function (ln) { return 'lines/' + ln.key + '.mp3'; })
            .filter(function (x, i, arr) { return arr.indexOf(x) === i; });
          totalFiles = rels.length + voiceRels.length;
          var weigh = function (r2) { return (manifest.files[r2] || {}).bytes || 0; };
          // Disk bytes on BOTH sides of the division - see the note on `got` above.
          total = rels.reduce(function (n, r2) { return n + weigh(r2); }, 0) +
                  voiceRels.reduce(function (n, r2) { return n + weigh(r2); }, 0);
          tick();

          // Fetched in SHOT order, one at a time, with progress counted in BYTES AS THEY ARRIVE.
          //
          // Why not fetcher.get(): it returns one promise per file and says nothing until the file is
          // complete. That is what made a 134-second download look like a hang. This streams the body and
          // reports every chunk, so the bar moves continuously even on a 34 KB/s link - and it is
          // cancellable, because a person who cannot wait should be able to stop rather than close the tab.
          var buffers = {}, acc = 0;
          var chain = Promise.resolve();
          rels.forEach(function (r2) {
            chain = chain.then(function () {
              if (cancelled) throw new Error('__cancelled');
              curName = r2.split('/').pop();
              return streamOne(manifest, r2, acc).then(function (buf) {
                buffers[r2] = buf;
                doneFiles++;
                acc += buf.byteLength;
                progressed(acc, curName);
              });
            });
          });
          return chain.then(function () { return buffers; });
        }).then(function (buffers) {
          return mount({manifest: manifest, scene: scene, buffers: buffers, timeline: earlyOv.timeline,
                        overlay: earlyOv.overlay});
        }).catch(function (e) {
          var msg = String((e && e.message) || e);
          // Cancelling is not a failure, and slowness is not an error. Only a real fault gets red text.
          if (msg === '__cancelled' || (e && e.name === 'AbortError')) {
            loadCancelled();
          } else {
            loadFail(msg);
          }
        });
      }

      // ================================================================= mounting and playing
      var renderer = null, part = null, playing = false, dur = 0, lastT = 0;
      function mount(pack) {
        loadWhat.textContent = 'Preparing…';
        var scene = pack.scene;
        var aspect = ((scene.size && scene.size[0]) || 1920) / ((scene.size && scene.size[1]) || 1080);
        if (!renderer) {
          renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
          renderer.setPixelRatio(1);
          renderer.outputEncoding = THREE.sRGBEncoding;
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 0.78;
          renderer.setClearColor(0x000000, 1);
          $('stage').appendChild(renderer.domElement);
          renderer.domElement.addEventListener('webglcontextlost', function (e) {
            if (disposed) return;
            e.preventDefault(); loadShow('The graphics context was lost; waiting for the browser…');
          }, false);
        }
        sizeCanvas(aspect);
        var player = new ScenePlayer(THREE, renderer);
        // v28: the overlay built in earlyOverlay() - badge, cards and subtitles already on screen - is kept, not
        // replaced; building a second one here would blank the badge again for the rest of the load.
        var ov = pack.overlay || new Overlay($('overlay'), scene, pack.timeline || {});
        // The overlay's own API: setShow takes the language codes to display, render(t) draws the cue.
        ov.setShow(subtitleChoice());
        // The spoken audio, per line, each verified against its own hash (P6). It reads scene.speech, which
        // is why the audio index had to be rejoined before we get here.
        var speech = null;
        if ((scene.speech || []).length && typeof SpeechAudio !== 'undefined') {
          speech = new SpeechAudio(scene.speech, fetcher, pack.manifest);
        }
        // load()'s third argument is an onReady CALLBACK, not the timeline. Passing the timeline there is
        // what made the first build draw a perfectly sized, perfectly black canvas: the models never loaded
        // and nothing in the page said so, because the failure was 'onReady is not a function' in a console
        // nobody was reading. The gate that caught it reads the PIXELS.
        return new Promise(function (resolve) {
          player.load(scene, pack.buffers, resolve);
        }).then(function () {
          // THE VOICE IS PART OF LOADING, not something that happens after it.
          //
          // Measured on the live site: at the moment Play became enabled, SpeechAudio held ZERO decoded
          // buffers. playFrom() then had to fetch them itself, so pressing Play gave 4.5 to 7.5 seconds of
          // silence - and on one lesson, none at all within fifteen. The page had declared itself ready
          // while the thing a language lesson is FOR had not been downloaded.
          //
          // It is about 0.2 MB. Waiting for it costs a moment on a load already measured in minutes, and it
          // is the difference between pressing Play and hearing the lesson.
          loadWhat.textContent = 'Loading the voice…';
          // Each line reports itself as it lands, so the bar keeps moving through this phase instead of
          // sitting at a number that claimed the work was over.
          return speech ? speech.prefetch(0, VOICE_AHEAD, function (bytes) {
            doneFiles++;
            progressed(got + bytes, 'the voice');
          }).catch(function () { return null; }) : null;
        }).then(function () {
          var ds = [renderer.domElement.width, renderer.domElement.height];
          ov.layout(ds[0], ds[1]);
          if (pack.badgeUrl) ov.setBadgeSrc(pack.badgeUrl);
          part = {player: player, overlay: ov, speech: speech};
          dur = scene.duration || (pack.timeline && pack.timeline.duration) || 0;
          hook('__part', part); curScene = scene; hook('__scene', scene);
          poster.style.display = 'none';
          loadHide();
          playBtn.disabled = false;
          // The viewer's camera, if this person asked for one. A stored view for this lesson, this
          // room or this moment is applied here, in that precedence.
          try { camRestore(); camAttach(); camRender(); camAvail(); } catch (e) {}
          try { askApply(); } catch (e) {}
          seek(0);
          onReady();
          return part;
        });
      }

      function sizeCanvas(aspect) {
        var w = $('stagewrap').clientWidth, h = $('stagewrap').clientHeight;
        // v28.3: a hidden container (0 x 0) keeps its last size. renderer.setSize(0, 0) is never called (HID-04).
        if (!w || !h) return;
        var ww = Math.min(w, h * (aspect || 16 / 9));
        if (renderer) renderer.setSize(Math.round(ww), Math.round(ww / (aspect || 16 / 9)));
        placeFrame(aspect);
      }

      function seek(t) {
        if (!part) return;
        t = Math.max(0, Math.min(dur || 0, t)); lastT = t;
        try { part.player.seek(t); } catch (e) {}
        if (part.overlay && part.overlay.render) part.overlay.render(t);
        try { markScript(t); } catch (e) {}
        timeEl.textContent = mmss(t) + ' / ' + mmss(dur);
        scrub.value = dur ? Math.round(1000 * t / dur) : 0;
        if (current) { S.resume[current.courseId + '/' + current.video.id] = t; save(); }
      }

      var raf = null, t0 = 0, base0 = 0;
      // v28.3: THE FRAME LOOP NO LONGER OWNS THE END. A hidden player draws no frames and must still end (HID-05), so the
      // clock's own timer does (armEnd). A frame is an OUTPUT of the clock: drawn when the player can be seen, skipped
      // when it cannot, and the first frame after it is seen again is drawn at the true current time (HID-02).
      function clockNow() { return playing ? Math.min(dur, base0 + (performance.now() - t0) / 1000) : lastT; }
      function loop() {
        if (!playing) return;
        var t = clockNow();
        if (viewVisible()) seek(t); else clockOnly(t);
        if (playing) raf = requestAnimationFrame(loop);
      }
      // A FINISHED VIDEO IS STILL PLAYBACK. The <video> keeps its own clock and its own controls in this mode - that
      // is the one authority on time and stays so - but the CONTRACT does not exempt it: `playback.play`, `pause`,
      // `seek` and `state()` mean the same thing in both modes (02 §"playback.play ... play()"), and a host that
      // drives a lesson cannot be told the lesson is `ready` while the picture is moving. So the verbs delegate to
      // the element rather than doing nothing.
      function mp4On() { return vid.classList.contains('on'); }
      function play() {
        if (mp4On()) { try { var p = vid.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {} return; }
        if (!part) return;
        // A LESSON WITH NO DURATION CANNOT BE PLAYED, and used to fail silently: base0 is 0, and the loop's
        // `t >= dur` is 0 >= 0 on its very first tick, so it paused before drawing anything.
        if (!dur) {
          // Named, not silent. loadstall is the element the page already uses to say why something is
          // not happening, so this joins the existing convention rather than inventing a second one.
          var n = $('loadstall');
          if (n) n.textContent = 'This lesson has no duration, so it cannot be played.';
          return;
        }
        // PLAY AT THE END REPLAYS. base0 came from the scrubber, which sits at 1000 when the lesson has
        // finished - so base0 === dur and the loop paused immediately, which is why the button appeared
        // to do nothing at all. A resume from the middle is still a resume; only the end restarts.
        var at = (scrub.value / 1000) * dur;
        if (at >= dur - 0.05) { at = 0; scrub.value = 0; seek(0); }
        playing = true; playBtn.textContent = 'Pause';
        base0 = at; t0 = performance.now();
        // THE VOICE. This page created SpeechAudio, prefetched its lines, and then never told it to play -
        // so every lesson ran silently, and nothing noticed because the checks asserted that pixels changed
        // and the clock advanced. Neither of those is sound. boot.js had it right: the spoken lines start
        // WITH the clock, each scheduled at its declared offset, so the timing is the spec's rather than an
        // accumulation of when things happened to finish decoding.
        // v28.1: handed the PICTURE clock, so every line is placed against the frame as it is when that line
        // is scheduled - the voice keeps being fetched and scheduled for as long as the lesson plays.
        if (part.speech) part.speech.playFrom(base0, function () {
          return base0 + (performance.now() - t0) / 1000;
        });
        raf = requestAnimationFrame(loop);
        onPlaying(at);
      }
      function pause() {
        if (mp4On()) { try { vid.pause(); } catch (e) {} return; }
        var was = playing;
        playing = false; playBtn.textContent = 'Play';
        if (part && part.speech) part.speech.stop();
        if (raf) cancelAnimationFrame(raf);
        disarmEnd();
        if (was) onPaused();
      }
      playBtn.onclick = function () { playing ? pause() : play(); };
      // Dragging the scrubber STOPS the voice. Without this, seeking leaves the previously scheduled lines
      // playing at their old times, so the picture jumps and the audio carries on from where it was - the
      // two drift apart and never recover.
      // v28.1: and it WARMS the voice at the new position. A line under way at the seek point used to be fetched
      // only once Play was pressed, and on a busy or slow device it could arrive after its own end - the player
      // then correctly skips it, and the first sentence after a seek was lost.
      scrub.oninput = function () {
        pause(); seek(dur * scrub.value / 1000);
        if (part && part.speech) part.speech.prefetch(dur * scrub.value / 1000, 8);
      };

      // ================================================================= size modes
      // v28.3 (component): theatre and full page are SIZE MODES OF THE HOST (our site sets them with ui.set({size})). The
      // classes are toggled, never assigned: `app.className = s` erased every pane and strip class the component keeps.
      function setSize(s) {
        size = s;
        app.classList.toggle('theatre', s === 'theatre');
        app.classList.toggle('full', s === 'full');
        setTimeout(function () { if (curScene) sizeCanvas(
          ((curScene.size || [16])[0]) / ((curScene.size || [0, 9])[1])); }, 30);
      }
      // v28.3 (component): FOCUS-SCOPED. These keys act only while focus is inside THIS player, so a host page's own
      // text boxes and a second player on the same page are never affected (MNT-09, MNT-10). The size modes (t, f,
      // Escape) are the HOST page's: our site handles them on its own document and sets ui.size.
      appEl.addEventListener('keydown', function (e) {
        if (e.target && /input|select|textarea/i.test(e.target.tagName)) {
          if (e.key === 'Escape') { e.target.value = ''; render(); }
          return;
        }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (e.key === '/') { if (paneEffective('nav')) { e.preventDefault(); fcourse.focus(); } }
        else if (e.key === ' ' && part) { e.preventDefault(); playing ? pause() : play(); }
        else if (PANE_KEYS[e.key] && viewerTogglePane(PANE_KEYS[e.key])) e.preventDefault();
      });
      // v28.3 (component): the STAGE's own size, not the window's. Browser zoom, a host resizing its box, a pane opening
      // or a strip hiding all change the stage, and every one of them re-lays the overlay over the frame (RESIDUALS X.1:
      // the site resized the canvas on window resize only and never re-laid the overlay, so the badge, cards and
      // subtitles kept the pixels of the moment they were laid out).
      observeSize($('stagewrap'), function () {
        if (curScene) sizeCanvas(((curScene.size || [16])[0]) / ((curScene.size || [0, 9])[1]));
      });

      // ================================================================= wiring
      fcourse.oninput = render;
      fvideo.oninput = render;
      fclear.onclick = function () { fcourse.value = ''; fvideo.value = ''; render(); };
      axcat.onchange = function () { S.lang.catalogue = axcat.value; save(); render(); if (current) describe(); };
      // Each of these four changes something the URL describes, so each of them ends by saying so. That is
      // the whole fix for the stale address bar: the writer is called wherever the state moves, not once
      // at the beginning.
      axspeech.onchange = function () {
        S.lang.speech = axspeech.value; save(); syncUrl();
        // In interactive mode a different spoken variant is a different audio index; in MP4 mode it is a
        // different FILE. One handler, because the selector means the same thing in both.
        if (current) applyMode();
      };
      axsub1.onchange = axsub2.onchange = function () {
        S.lang.subtitles = subtitleChoice();
        try { if (S.script) renderScript(); } catch (e) {}
        // Choosing None is a CHOICE and is remembered as one, so that opening the next lesson - or a link
        // to this one - does not helpfully put the subtitles back.
        S.lang.subsNone = S.lang.subtitles.length === 0;
        save(); syncUrl();
        var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
        if (m.format === 'mp4') {
          applyMode();               // the subtitles are IN the picture, so this selects another file
        } else if (earlyOv && earlyOv.overlay) {
          // v28.3: THE OVERLAY ON SCREEN NOW, not only the one a finished mount holds. The badge, the cards and the
          // subtitles are drawn before the 3D arrives (earlyOverlay), and this handler asked for `part` - which exists only
          // once every model has streamed and the voice has decoded. Measured on the live site: choosing None during a
          // load did nothing at all until the lesson finished, and then took effect. Same object either way (mount keeps
          // the early overlay), so this is simply the one that is certainly there.
          curOverlay.setShow(S.lang.subtitles); curOverlay.render(lastT);
          syncModes();               // ...and it changes which MP4 combinations are reachable
        }
      };
      axmode.onchange = function () {
        S.mode = axmode.value; save(); syncUrl(); applyMode();
        try { camAvail(); camRender(); } catch (e) {}
      };
      loadRetry.onclick = function () { if (current) applyMode(); };
      loadCancel.onclick = function () {
        cancelled = true;
        if (aborter) { try { aborter.abort(); } catch (e) {} }
        loadCancelled();
      };

      // ================================================================= the viewer's camera
      //
      // ONE STATE, SEVERAL VIEWS OF IT. The rail panel, the floating panel and the two tabs inside each all
      // render the same CameraView and send every edit to the same place. None of them owns the camera. That
      // is the rule that makes drive() the single interpreter and tools/wire.py the single wire model, and
      // the seam where two copies of one truth are allowed to exist is where this project keeps finding bugs.
      //
      // The authored camera is untouched: the view is applied inside ScenePlayer.seek(), strictly AFTER
      // drive(), and with no view the picture is identical to the MP4's by construction.
      var CAM_STOPS = [
        ['LR', 'Left / Right', 'across the screen, flattened to the floor'],
        ['IO', 'In / Out', 'into the screen, flattened to the floor'],
        ['LR&IO', 'Left/Right and In/Out', 'both floor directions in one stroke'],
        ['UD', 'Up / Down', 'true world-up, whatever the tilt'],
        ['Aim', 'Camera orientation', 'turn and tilt; orbit pins the subject']
      ];
      var CAM_MODES = [['director', 'Director'], ['ride', 'Ride along'], ['free', 'Free look']];
      // Tab 1's rows, in the SAME words as Tab 2's stops. Two vocabularies for one state is the same class
      // of defect as two panels showing different numbers.
      var CAM_ROWS = [
        ['WHERE IT IS', [['off0', 'Left / right', 'm', 0.1], ['off2', 'In / out', 'm', 0.1],
                         ['off1', 'Up / down', 'm', 0.1]]],
        ['WHAT IT LOOKS AT', [['yaw', 'Left / right', 'deg', 1], ['pitch', 'Up / down', 'deg', 1]]],
        ['LENS', [['zoom', 'Zoom', 'x', 0.05], ['roll', 'Roll', 'deg', 1]]]
      ];
      var camView = null, camPads = [];

      function camDefaults() {
        return {on: false, tab: 'pad', stop: 'LR&IO', behav: 'touchpad', mode: 'director',
                sens: {move: 4.0, turn: 90}, split: 300, scope: 'lesson', views: {}};
      }
      if (!S.cam) S.cam = camDefaults();
      if (!S.cam.views) S.cam.views = {};
      if (!S.cam.sens) S.cam.sens = {move: 4.0, turn: 90};

      function camSens() {
        // Stated in the unit a person cares about: one sweep across the circle = N metres, or N degrees when
        // aiming. The pad hands `drag` fractions of a diameter, so this IS the conversion.
        return {move: S.cam.sens.move, turn: S.cam.sens.turn * Math.PI / 180};
      }
      function authoredCam() {
        if (!part || !curScene || typeof DRIVE() !== 'function') return null;
        try { return DRIVE()(part.player.sc, lastT).camera; } catch (e) { return null; }
      }
      function camFov() { return (curScene && curScene.camera && curScene.camera.fov) || 38; }

      // ---- scope: which view applies here, and where a saved one is kept -----------------------------
      function shotIndexAt(t) {
        var sh = (curScene && curScene.shots) || [];
        var i = -1;
        for (var k = 0; k < sh.length; k++) { if (sh[k].at <= t + 1e-6) i = k; else break; }
        return i;
      }
      function camKeys() {
        if (!current) return {};
        var lesson = current.courseId + '/' + current.video.id;
        var room = (curScene && curScene.set && curScene.set.name) || '';
        return {shot: 'shot:' + lesson + '#' + shotIndexAt(lastT), lesson: 'lesson:' + lesson,
                room: room ? 'room:' + room : null};
      }
      function camStore() {
        // Precedence is shot > lesson > room > director, and it is applied in that order here rather than
        // being asserted somewhere and implemented differently.
        var k = camKeys(), v = S.cam.views;
        var key = (k.shot && v[k.shot]) ? k.shot :
                  ((k.lesson && v[k.lesson]) ? k.lesson : ((k.room && v[k.room]) ? k.room : null));
        return key ? {key: key, enc: v[key]} : null;
      }
      function camRemember() {
        if (!camView || !current) return;
        var k = camKeys();
        var key = S.cam.scope === 'shot' ? k.shot : (S.cam.scope === 'room' ? k.room : k.lesson);
        if (!key) return;
        var enc = camView.encode();
        if (enc) S.cam.views[key] = enc; else delete S.cam.views[key];
        save();
      }

      // A LINK WINS over a stored view, because a link is something the person just acted on. Otherwise
      // the stored scopes apply in their precedence: this moment, then this lesson, then this room.
      var camArrived = null, camArrivedUsed = false;
      try { camArrived = urlsvc.read().get('cam') || null; } catch (e) {}
      function camRestore() {
        if (typeof CameraView === 'undefined') return;
        var enc = camArrivedUsed ? null : camArrived;
        camArrivedUsed = true;
        var from = null;
        if (enc) from = CameraView.decode(enc);
        if (!from) { var st = camStore(); if (st) from = CameraView.decode(st.enc); }
        if (from) { camView = from; S.cam.mode = from.mode; S.cam.on = true; }
        else if (camView) { camView.reset(); S.cam.mode = 'director'; }
        var cb = $('camon'); if (cb) cb.checked = !!S.cam.on;
      }

      var camUndo = [], camRedo = [], CAM_UNDO_MAX = 30;
      function camPush() {
        if (!camView) return;
        var e = camView.encode();
        if (camUndo.length && camUndo[camUndo.length - 1] === e) return;
        camUndo.push(e);
        if (camUndo.length > CAM_UNDO_MAX) camUndo.shift();
        camRedo.length = 0;
      }
      function camUndoStep(stack, other) {
        if (!stack.length || !camView) return;
        other.push(camView.encode());
        var e = stack.pop();
        var v = e ? CameraView.decode(e) : new CameraView();
        camView = v || new CameraView();
        S.cam.mode = camView.mode;
        camApply(); camRender(); camRemember();
      }

      function camEnsure() {
        if (!camView && typeof CameraView !== 'undefined') camView = new CameraView();
        return camView;
      }
      function camAttach() {
        if (!part || !part.player || typeof part.player.setView !== 'function') return;
        part.player.setView((S.cam.on && paneEffective('camera')) ? camEnsure() : null);
      }
      var camFields = [];
      function camApply() {
        camAttach();
        seek(lastT);                 // re-runs drive() at the same t and re-renders: no second loop
        camSync();                   // VALUES ONLY - never structure; see camSync
      }
      // camApply must NOT rebuild the DOM. Rebuilding during a drag detaches the very canvas being dragged:
      // its getBoundingClientRect() goes to zero, the pad divides pixel deltas by 1 instead of by the
      // diameter, and the camera flies a thousand times too far. Measured: a 0.3-sweep drag produced an
      // offset of 1190 m instead of 1.2 m. A structural change rebuilds; a value change syncs.
      //
      // It also keeps every surface honest: each field in BOTH panels is refreshed from the one state, so
      // the rail panel and the floating panel cannot show different numbers.
      function camSync() {
        camFields.forEach(function (f) {
          if (root.activeElement !== f.inp) f.inp.value = f.get().toFixed(f.dp);
        });
        camPads.forEach(function (cv) { if (cv.isConnected) padDraw(cv); });
        var live = camLiveText();
        Array.prototype.forEach.call(root.querySelectorAll('.padlive'), function (e) {
          e.textContent = live;
        });
        Array.prototype.forEach.call(root.querySelectorAll('.camsay'), camSayInto);
      }
      function camLiveText() {
        if (!camEnsure()) return '';
        return (S.cam.stop === 'Aim'
          ? ('turn ' + camNum('yaw').toFixed(0) + ' deg')
          : (S.cam.stop + ' ' + camNum(S.cam.stop === 'UD' ? 'off1'
              : (S.cam.stop === 'IO' ? 'off2' : 'off0')).toFixed(2) + ' m')) + '   (live axis only)';
      }

      // ---- the pad ---------------------------------------------------------------------------------
      function padDraw(cv) {
        // THE BACKING STORE FOLLOWS THE BOX. padDraw reads cv.width - the canvas's own pixels, not its CSS
        // size - so a rail that can be dragged wider would otherwise leave a small bitmap stretched across
        // a larger circle, still reporting the old radius to every hit test.
        var want = Math.max(1, Math.round(cv.clientWidth || cv.width));
        if (cv.width !== want || cv.height !== want) { cv.width = want; cv.height = want; }
        var g = cv.getContext('2d');
        var w = cv.width, h = cv.height, R = Math.min(w, h) / 2 - 2, cx = w / 2, cy = h / 2;
        g.clearRect(0, 0, w, h);
        g.fillStyle = '#10151B'; g.beginPath(); g.arc(cx, cy, R, 0, 6.2832); g.fill();
        var stop = S.cam.stop, floor = (stop !== 'UD' && stop !== 'Aim');
        if (floor) {
          // A FAINT FLOOR GRID means floor movement. Its ABSENCE means the lift. That is what tells IO from
          // UD - both are vertical drags - and it replaced a trapezoid that meant "depth", which would now
          // mislead because UD is height.
          g.strokeStyle = '#1B2530'; g.lineWidth = 1;
          for (var o = -R; o <= R; o += Math.max(12, R / 6)) {
            var hh = Math.sqrt(Math.max(0, R * R - o * o));
            if (hh < 6) continue;
            g.beginPath(); g.moveTo(cx - hh, cy + o); g.lineTo(cx + hh, cy + o); g.stroke();
            g.beginPath(); g.moveTo(cx + o, cy - hh); g.lineTo(cx + o, cy + hh); g.stroke();
          }
        }
        g.strokeStyle = '#4A5F74'; g.lineWidth = 1.4;
        if (stop === 'LR') { g.strokeRect(cx - R + 10, cy - R * 0.3, (R - 10) * 2, R * 0.6); }
        else if (stop === 'IO') { g.strokeRect(cx - R * 0.3, cy - R + 10, R * 0.6, (R - 10) * 2); }
        else if (stop === 'UD') {
          g.beginPath(); g.moveTo(cx, cy - R + 16); g.lineTo(cx, cy + R - 16); g.stroke();
          [-1, 1].forEach(function (s) {
            g.beginPath(); g.moveTo(cx, cy + s * (R - 12));
            g.lineTo(cx - 7, cy + s * (R - 26)); g.lineTo(cx + 7, cy + s * (R - 26)); g.closePath();
            g.fillStyle = '#4A5F74'; g.fill();
          });
        } else {
          g.beginPath(); g.moveTo(cx - R + 14, cy); g.lineTo(cx + R - 14, cy); g.stroke();
          g.beginPath(); g.moveTo(cx, cy - R + 14); g.lineTo(cx, cy + R - 14); g.stroke();
          if (stop === 'Aim') {
            g.beginPath(); g.arc(cx, cy + R * 0.2, R * 0.7, 3.34, 6.08); g.stroke();
            if (S.cam.orbit) {
              g.fillStyle = '#E8B418'; g.beginPath(); g.arc(cx, cy, 5, 0, 6.2832); g.fill();
            }
          }
        }
        if (S.cam.behav === 'joystick') {
          g.strokeStyle = '#E8B418'; g.lineWidth = 1;
          g.beginPath(); g.arc(cx, cy, R - 6, 0, 6.2832); g.stroke();
          g.strokeStyle = '#2A323C'; g.beginPath(); g.arc(cx, cy, R * 0.16, 0, 6.2832); g.stroke();
        }
      }

      function padBind(cv) {
        var held = false, held0 = false, lastX = 0, lastY = 0, jx = 0, jy = 0,
            timer = null, id = null, needRebuild = false;
        function diam() { return cv.getBoundingClientRect().width || 1; }
        function pos(e) {
          var r = cv.getBoundingClientRect();
          return [e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2];
        }
        function step(dx, dy) {
          var cam = authoredCam();
          if (!cam || !camEnsure()) return;
          if (!held0) { camPush(); held0 = true; }
          if (camView.mode === 'director') { camSetMode('ride'); needRebuild = true; }
          camView.drag(S.cam.stop, dx, dy, camSens(), cam, camFov(), !!S.cam.orbit);
          camApply();
        }
        cv.addEventListener('pointerdown', function (e) {
          held = true; id = e.pointerId; cv.setPointerCapture(id);
          var p = pos(e); lastX = p[0]; lastY = p[1]; jx = p[0]; jy = p[1];
          // Fix the drag axis now, so a straight stroke stays straight instead of curving round the subject.
          var c0 = authoredCam();
          if (c0 && camEnsure()) camView.beginStroke(c0, camFov());
          if (S.cam.behav === 'joystick' && !timer) {
            // JOYSTICK: distance from centre is SPEED, and it keeps moving while held. A dead zone at the
            // centre stops a shaky hand drifting.
            timer = setInterval(function () {
              var d = diam() / 2, r = Math.sqrt(jx * jx + jy * jy) / d;
              if (r < 0.16) return;
              step((jx / d) * 0.035, (jy / d) * 0.035);
            }, 33);
          }
          e.preventDefault();
        });
        cv.addEventListener('pointermove', function (e) {
          if (!held) return;
          var p = pos(e);
          if (S.cam.behav === 'joystick') { jx = p[0]; jy = p[1]; }
          else {
            // TOUCHPAD (the default): the camera moves by the distance travelled WHILE THE BUTTON IS HELD.
            // Release and it stays exactly where it is; move the mouse back with the button up and press
            // again to carry on - the clutch, which is what lets a small circle cross a large room.
            step((p[0] - lastX) / diam(), (p[1] - lastY) / diam());
            lastX = p[0]; lastY = p[1];
          }
          e.preventDefault();
        });
        function up() {
          held = false; held0 = false;
          if (camView) camView.endStroke();
          if (timer) { clearInterval(timer); timer = null; }
          camRemember();
          syncUrl();          // the link carries the view a person just made
          // NO REBUILD MID-STROKE: the first touch switches director -> ride, and rebuilding there
          // detaches the canvas under the finger. Deferred to here.
          if (needRebuild) { needRebuild = false; camRender(); }
        }
        cv.addEventListener('pointerup', up);
        cv.addEventListener('pointercancel', up);
        cv.addEventListener('lostpointercapture', up);
        cv.tabIndex = 0;
        cv.addEventListener('keydown', function (e) {
          var k = {ArrowLeft: [-0.08, 0], ArrowRight: [0.08, 0], ArrowUp: [0, -0.08],
                   ArrowDown: [0, 0.08]}[e.key];
          if (!k) return;
          step(k[0], k[1]); camRemember(); e.preventDefault();
        });
      }

      // ---- rendering both surfaces from the one state -----------------------------------------------
      function el(tag, cls, txt) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (txt != null) e.textContent = txt;
        return e;
      }
      function camSetMode(m) {
        var cam = authoredCam();
        if (camEnsure() && cam) camView.setMode(m, cam);
        S.cam.mode = m; save();
      }
      function camNum(field) {
        if (!camEnsure()) return 0;
        if (field === 'off0') return camView.off[0];
        if (field === 'off1') return camView.off[1];
        if (field === 'off2') return camView.off[2];
        if (field === 'yaw') return camView.yaw * 180 / Math.PI;
        if (field === 'pitch') return camView.pitch * 180 / Math.PI;
        if (field === 'zoom') return camView.zoom;
        return camView.roll;
      }
      function camSet(field, v) {
        if (!camEnsure()) return;
        camPush();
        if (camView.mode === 'director') camSetMode('ride');
        if (field === 'off0') camView.off[0] = v;
        else if (field === 'off1') camView.off[1] = v;
        else if (field === 'off2') camView.off[2] = v;
        else if (field === 'yaw') camView.yaw = v * Math.PI / 180;
        else if (field === 'pitch') camView.pitch = Math.max(-83, Math.min(83, v)) * Math.PI / 180;
        else if (field === 'zoom') camView.zoom = Math.max(0.4, Math.min(3, v));
        else camView.roll = Math.max(-30, Math.min(30, v));
        camApply(); camRemember(); syncUrl();
      }

      function buildCamPanel(host, idPrefix) {
        host.innerHTML = '';
        var head = el('div', 'camhead');
        head.appendChild(el('b', null, 'Camera'));
        var rst = el('button', null, 'Reset');
        rst.onclick = function () {
          if (!camEnsure()) return;
          camPush();
          camView.reset(); S.cam.mode = 'director';
          camApply(); camRender(); camRemember();
        };
        head.appendChild(rst);
        host.appendChild(head);

        var seg = el('div', 'seg');
        CAM_MODES.forEach(function (m) {
          var b = el('button', null, m[1]);
          b.setAttribute('aria-pressed', (camEnsure() && camView.mode === m[0]) ? 'true' : 'false');
          b.onclick = function () { camSetMode(m[0]); camApply(); camRender(); camRemember(); };
          seg.appendChild(b);
        });
        host.appendChild(seg);
        host.appendChild(el('div', 'padnote', 'the camera you are driving - shared by both tabs'));

        var tabs = el('div', 'camtabs');
        [['numbers', 'Numbers'], ['pad', 'Pad']].forEach(function (t) {
          var b = el('button', null, t[1]);
          b.setAttribute('aria-selected', S.cam.tab === t[0] ? 'true' : 'false');
          b.onclick = function () { S.cam.tab = t[0]; save(); camRender(); };
          tabs.appendChild(b);
        });
        host.appendChild(tabs);

        if (S.cam.tab === 'pad') {
          var stops = el('div', 'stops');
          CAM_STOPS.forEach(function (st) {
            var b = el('button', null, st[0]);
            b.title = st[1];
            b.setAttribute('aria-pressed', S.cam.stop === st[0] ? 'true' : 'false');
            b.setAttribute('aria-label', st[1]);
            b.onclick = function () { S.cam.stop = st[0]; save(); camRender(); };
            stops.appendChild(b);
          });
          host.appendChild(stops);
          // THE CAPTION, always visible. LR and UD read instantly; IO does not - and a tooltip does not
          // exist on touch and is not reliably announced to a screen reader.
          var cur = CAM_STOPS.filter(function (x) { return x[0] === S.cam.stop; })[0] || CAM_STOPS[0];
          host.appendChild(el('div', 'padcap', cur[1]));
          host.appendChild(el('div', 'padnote', cur[2]));

          var behav = el('div', 'behav');
          if (S.cam.stop === 'Aim') {
            [['place', 'in place'], ['orbit', 'orbit']].forEach(function (o) {
              var b = el('button', null, o[1]);
              b.setAttribute('aria-pressed', ((o[0] === 'orbit') === !!S.cam.orbit) ? 'true' : 'false');
              b.onclick = function () { S.cam.orbit = (o[0] === 'orbit'); save(); camRender(); };
              behav.appendChild(b);
            });
          }
          [['touchpad', 'touchpad'], ['joystick', 'joystick']].forEach(function (o) {
            var b = el('button', null, o[1]);
            b.setAttribute('aria-pressed', S.cam.behav === o[0] ? 'true' : 'false');
            b.onclick = function () { S.cam.behav = o[0]; save(); camRender(); };
            behav.appendChild(b);
          });
          host.appendChild(behav);

          var wrap = el('div', 'padwrap');
          var cv = document.createElement('canvas');
          cv.id = idPrefix + 'pad';
          cv.width = 240; cv.height = 240;
          cv.setAttribute('role', 'application');
          cv.setAttribute('aria-label', 'Camera pad: ' + cur[1]);
          wrap.appendChild(cv);
          host.appendChild(wrap);
          padDraw(cv); padBind(cv); camPads.push(cv);

          host.appendChild(el('div', 'padnote padlive', camLiveText()));

          [['Zoom', 'zoom', 'x', 0.05], ['Roll', 'roll', 'deg', 1],
           ['Sensitivity', 'sens', S.cam.stop === 'Aim' ? 'deg/sweep' : 'm/sweep', 0.5]]
            .forEach(function (r) { host.appendChild(camRowEl(r[0], r[1], r[2], r[3])); });
          host.appendChild(el('div', 'padnote',
            S.cam.stop === 'Aim'
              ? ('one sweep across the circle = ' + S.cam.sens.turn.toFixed(0) + ' deg')
              : ('one sweep across the circle = ' + S.cam.sens.move.toFixed(1) + ' m')));
        } else {
          CAM_ROWS.forEach(function (grp) {
            var lbl = grp[0];
            if (lbl === 'WHERE IT IS' && camEnsure() && camView.mode === 'ride') lbl += '  (offset)';
            host.appendChild(el('div', 'camsect', lbl));
            grp[1].forEach(function (r) { host.appendChild(camRowEl(r[1], r[0], r[2], r[3])); });
          });
        }

        var foot = el('div', 'camfoot');
        foot.appendChild(el('span', 'padnote', 'Remember for'));
        var sel = document.createElement('select');
        [['shot', 'This moment'], ['lesson', 'This lesson'], ['room', 'This room']].forEach(function (o) {
          var op = document.createElement('option');
          op.value = o[0]; op.textContent = o[1];
          if (S.cam.scope === o[0]) op.selected = true;
          sel.appendChild(op);
        });
        sel.onchange = function () { S.cam.scope = sel.value; save(); camRemember(); };
        foot.appendChild(sel);
        var un = el('button', null, 'Undo');
        un.onclick = function () { camUndoStep(camUndo, camRedo); };
        un.disabled = !camUndo.length;
        un.setAttribute('aria-label', 'Undo the last camera change');
        foot.appendChild(un);
        var re = el('button', null, 'Redo');
        re.onclick = function () { camUndoStep(camRedo, camUndo); };
        re.disabled = !camRedo.length;
        foot.appendChild(re);
        var cp = el('button', null, 'Copy link');
        cp.onclick = function () {
          syncUrl();
          try { navigator.clipboard.writeText(urlsvc.href()); } catch (e) { /* no clipboard: the URL is there */ }
          cp.textContent = 'Copied'; setTimeout(function () { cp.textContent = 'Copy link'; }, 1200);
        };
        foot.appendChild(cp);
        host.appendChild(foot);

        var say = el('div', 'camsay', '');
        say.id = idPrefix + 'say';
        say.style.fontSize = '11.5px'; say.style.marginTop = '6px';
        camSayInto(say);
        host.appendChild(say);
      }

      // Whether this is still the director's view, written into an existing node so it can be refreshed
      // without rebuilding the panel - see camSync.
      function camSayInto(say) {
        say.innerHTML = '';
        if (camEnsure() && !camView.isDirector()) {
          say.appendChild(document.createTextNode('This is your view, not the director\'s.'));
          say.style.color = 'var(--accent)';
          var back = el('button', null, 'Back to the director');
          back.style.cssText = 'background:none;border:0;color:var(--accent);cursor:pointer;' +
                               'text-decoration:underline;font:inherit;padding:0 0 0 4px';
          back.onclick = function () {
            camPush(); camView.reset(); S.cam.mode = 'director'; camApply(); camRender(); camRemember();
          };
          say.appendChild(back);
        } else {
          say.textContent = 'The director\'s view - identical to the video.';
          say.style.color = 'var(--muted)';
        }
      }

      function camRowEl(label, field, unit, step) {
        var row = el('div', 'camrow');
        row.appendChild(el('label', null, label));
        var get = function () { return field === 'sens'
          ? (S.cam.stop === 'Aim' ? S.cam.sens.turn : S.cam.sens.move) : camNum(field); };
        var put = function (v) {
          if (field === 'sens') {
            if (S.cam.stop === 'Aim') S.cam.sens.turn = Math.max(5, Math.min(360, v));
            else S.cam.sens.move = Math.max(0.25, Math.min(20, v));
            save(); camRender();
          } else camSet(field, v);
        };
        var ro = (field !== 'sens') && camEnsure() && camView.mode === 'director';
        var minus = el('button', null, '−');
        var inp = document.createElement('input');
        var plus = el('button', null, '+');
        inp.type = 'text';
        inp.value = get().toFixed(step < 1 ? 2 : 0);
        inp.readOnly = !!ro;
        inp.setAttribute('aria-label', label + (unit ? ' in ' + unit : ''));
        minus.onclick = function () { put(get() - step); };
        plus.onclick = function () { put(get() + step); };
        minus.setAttribute('aria-label', 'decrease ' + label);
        plus.setAttribute('aria-label', 'increase ' + label);
        inp.onchange = function () {
          var v = parseFloat(inp.value);
          // A non-numeric entry is REJECTED without moving the camera, and an empty field restores what was
          // there rather than zeroing it.
          if (!isFinite(v)) { inp.value = get().toFixed(step < 1 ? 2 : 0); return; }
          put(v);
        };
        inp.onkeydown = function (e) {
          if (e.key === 'ArrowUp') { put(get() + step); e.preventDefault(); }
          else if (e.key === 'ArrowDown') { put(get() - step); e.preventDefault(); }
        };
        camFields.push({inp: inp, get: get, dp: step < 1 ? 2 : 0});
        row.appendChild(minus); row.appendChild(inp); row.appendChild(plus);
        row.appendChild(el('span', 'u', unit));
        return row;
      }

      function camRender() {
        camPads = []; camFields = [];
        var railHost = $('railcam'), floatHost = $('campanel');
        var on = !!S.cam.on && !!current && paneEffective('camera');
        var interactive = !vid.classList.contains('on');
        $('browse').classList.toggle('hascam', on && interactive);
        if (on && interactive) buildCamPanel(railHost, 'rail'); else railHost.innerHTML = '';
        if (on && interactive && (S.cam.floating || !paneEffective('nav') || size !== 'default')) {
          floatHost.hidden = false; floatHost.classList.add('on');
          buildCamPanel(floatHost, 'float');
        } else {
          floatHost.hidden = true; floatHost.classList.remove('on'); floatHost.innerHTML = '';
        }
        appEl.style.setProperty('--camh', (S.cam.split || 300) + 'px');
        emitUiIfChanged();
      }


      // ================================================================= the Ask pane (v27.38)
      //
      // The pane itself lives in player/ask_pane.js. This is only the WIRING: the checkbox, and the context
      // object that hands it MEASURED facts. Everything the model is ever told passes through here, so there
      // is exactly one place to look to see what a question can possibly carry.
      //
      // The index travels inside the bundle (scene.set.objects), so it is fetched from the lesson's own
      // folder exactly like scene.json - no second source of truth and nothing to keep in step by hand.
      var askPane = null, askIndex = null, askScene = null, askIndexFor = null;

      function askLoadIndex() {
        if (!current) return;
        var key = current.courseId + '/' + current.video.id;
        if (askIndexFor === key) return;
        askIndexFor = key; askIndex = null; askScene = null;
        // THE DECLARED PATH IS NOT THE URL. scene.set.objects says 'assets/<set>.objects.json', which is
        // what the BUNDLE contains; the published site serves every file at its content address and maps
        // the two in manifest.json. Fetching the declared path directly works perfectly from a bundle
        // folder on Live Server and is a 404 on the live site - which is precisely the defect class the
        // surface-honesty work exists to catch, so it is resolved here the way every other asset is.
        var base = U(current.video.dir + '/');
        Promise.all([
          fetch(base + 'manifest.json', {cache: 'no-store'}).then(function (r) { return r.json(); }),
          fetch(base + 'scene.json').then(function (r) { return r.json(); })
        ]).then(function (both) {
          if (askIndexFor !== key) return null;
          var man = both[0], sc = both[1];
          // THE SCENE IS KEPT, not just mined for the index. The transcript is built from it here, so
          // 'Ask about the video' no longer depends on the SCRIPT PANE having been opened - which is how
          // it came to be sending an empty script to anyone who had not opened that pane first.
          askScene = sc;
          var rel = sc && sc.set && sc.set.objects;
          // A lesson whose bundle predates the index simply has none. Say so; do not invent one.
          if (!rel) return null;
          var r = (man.files || {})[rel];
          // A content address is relative to the SITE ROOT ('lib/<sha>.json'), which is why the page's own
          // Fetcher is constructed with base:''. Only the un-published fallback - a bundle folder served
          // directly - is relative to the lesson.
          var url = (r && r.address) ? U(r.address) : (base + rel);
          return fetch(url).then(function (x) {
            if (!x.ok) throw new Error('index -> HTTP ' + x.status);
            return x.json();
          }).then(function (ix) { if (askIndexFor === key) askIndex = ix; });
        }).catch(function () { if (askIndexFor === key) askIndex = null; });
      }

      function askContext() {
        return {
          scene: function () { return curScene || null; },
          index: function () { return askIndex; },
          time: function () { return lastT; },
          // The camera the DIRECTOR chose at this instant, from the same interpreter the renderer uses -
          // never a copy, and never the viewer's own overridden view, because a question about "this shot"
          // is a question about the lesson, not about where this particular viewer has dragged the camera.
          cameraAt: function () { return authoredCam(); },
          // Built from the lesson's OWN scene, never from another pane's state.
          transcript: function () {
            try {
              return (askScene && window.Transcript) ? window.Transcript.transcriptText(askScene) : '';
            } catch (e) { return ''; }
          },
          rosterText: function () {
            try {
              return (askScene && window.Transcript) ? window.Transcript.rosterText(askScene) : '';
            } catch (e) { return ''; }
          }
        };
      }

      function askApply() {
        var app = $('app');
        var on = !!S.ask && paneEffective('ai');
        app.classList.toggle('hasask', on);
        // v28.3: the assistant's scripts are loaded only when it is first shown (PNE-08: an AI the host does not allow
        // loads nothing and contacts nothing), and the pane is built with the host's agent and permissions.
        if (on && !askPane && !window.AskPane) { ensureAi().then(function () { askApply(); }, function () {}); return; }
        if (on && !askPane && window.AskPane) {
          askPane = new window.AskPane($('ask'), askContextFull());
          // The REAL instance, not a test double and not a second one built for the gate. A harness that
          // constructs its own object proves only that the object works; it never exercises the path the
          // person actually takes, which is how a capability can vanish while every check still passes.
          hook('__askPaneRef', askPane);
        }
        if (on) askLoadIndex();
        emitUiIfChanged();
      }

      var askon = $('askon');
      if (askon) {
        askon.checked = !!S.ask;
        askon.onchange = function () {
          S.ask = askon.checked;
          save(); askApply();
        };
      }


      // ================================================================= the column handles (v27.40)
      //
      // Widths are STORED STATE, clamped in three places: on drag, on load, and on window resize. The third
      // is the one that is easy to miss - a rail dragged to 600 px on a wide monitor, stored, and reopened
      // on a 1280 px laptop would otherwise come back at 600 px and leave almost no stage.
      //
      // Dragging sets a CSS VARIABLE and nothing else. It does not rebuild either pane: the camera panel
      // already taught what rebuilding mid-drag costs, when a detached canvas reported width 0 and the
      // camera flew a thousand times too far.
      var LAY = {rail: {min: 220, max: 620, varName: '--rail', el: 'railsplitx', def: 340},
                 ask: {min: 300, max: 640, varName: '--askw', el: 'asksplitx', def: 380}};

      function layClamp(which, px) {
        var c = LAY[which];
        // The STAGE keeps a minimum whatever the two stored widths say, so no combination can crush it.
        var room = (host.clientWidth || 1400) - 360;
        return Math.max(c.min, Math.min(c.max, Math.min(px, Math.max(c.min, room))));
      }

      // REDRAW THE PADS AFTER A WIDTH CHANGE. padDraw reads cv.width - the backing store - and camSync()
      // only runs on camera changes, so a resized rail left a 271-pixel bitmap stretched across a 327-pixel
      // circle, still reporting the old radius to every hit test. Measured, immediately after a drag.
      // This is a VALUE redraw, not a structural rebuild, so it does not break the rule that cost 1190 m.
      function layRepaint() {
        try {
          if (typeof camPads !== 'undefined' && camPads && camPads.length) {
            camPads.forEach(function (cv) { if (cv.isConnected) padDraw(cv); });
          }
        } catch (e) { /* the camera panel may not be built yet */ }
      }

      function layApply() {
        if (!S.layout) S.layout = {};
        ['rail', 'ask'].forEach(function (w) {
          var c = LAY[w];
          var v = layClamp(w, S.layout[w] || c.def);
          S.layout[w] = v;
          appEl.style.setProperty(c.varName, v + 'px');
        });
        layRepaint();
      }

      function layBind(which) {
        var c = LAY[which], node = $(c.el);
        if (!node) return;
        var drag = null;
        node.addEventListener('pointerdown', function (e) {
          drag = {x: e.clientX, w: S.layout[which] || c.def};
          // Capture is an optimisation, not a requirement: it throws when there is no active pointer with
          // that id, which a synthetic event and some touch stacks both produce. The drag works without it.
          try { node.setPointerCapture(e.pointerId); } catch (x) { /* no active pointer */ }
          e.preventDefault();
        });
        node.addEventListener('pointermove', function (e) {
          if (!drag) return;
          // the ask pane grows when dragged LEFT; the rail grows when dragged right
          var dx = (e.clientX - drag.x) * (which === 'ask' ? -1 : 1);
          S.layout[which] = layClamp(which, drag.w + dx);
          appEl.style.setProperty(c.varName, S.layout[which] + 'px');
          layRepaint();
        });
        var end = function (e) {
          if (!drag) return;
          drag = null;
          try { node.releasePointerCapture(e.pointerId); } catch (x) { /* already released */ }
          save();
        };
        node.addEventListener('pointerup', end);
        node.addEventListener('pointercancel', end);
        node.addEventListener('keydown', function (e) {
          var step = e.shiftKey ? 40 : 12;
          if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
          var dir = (e.key === 'ArrowRight' ? 1 : -1) * (which === 'ask' ? -1 : 1);
          S.layout[which] = layClamp(which, (S.layout[which] || c.def) + dir * step);
          appEl.style.setProperty(c.varName, S.layout[which] + 'px');
          layRepaint();
          save();
          e.preventDefault();
        });
      }

      layApply();
      layBind('rail');
      layBind('ask');
      // RE-CLAMP ON RESIZE, not only on drag. This is the check v5 did not have.
      observeSize(host, function () { layApply(); });

      // ---- the checkbox, the splitter -----------------------------------------------------------------
      var camon = $('camon'), camonlab = $('camonlab');
      camon.checked = !!S.cam.on;
      camon.onchange = function () {
        S.cam.on = camon.checked;
        // Unchecking HIDES the panel and KEEPS the view: turning a control panel off should not move the
        // camera. Re-checking brings back what you had.
        save(); camApply(); camRender();
      };
      function camAvail() {
        var mp4 = vid.classList.contains('on');
        camonlab.setAttribute('aria-disabled', mp4 ? 'true' : 'false');
        camon.disabled = mp4;
        camonlab.title = mp4 ? 'A finished video has no camera - choose an Interactive mode' : '';
      }

      (function () {
        var sp = $('railsplit'), dragging = false;
        function setSplit(px) {
          S.cam.split = Math.max(160, Math.min((host.clientHeight || 900) - 260, px));
          appEl.style.setProperty('--camh', S.cam.split + 'px');
          save();
        }
        sp.addEventListener('pointerdown', function (e) {
          dragging = true; sp.setPointerCapture(e.pointerId); e.preventDefault();
        });
        sp.addEventListener('pointermove', function (e) {
          if (!dragging) return;
          var r = $('browse').getBoundingClientRect();
          setSplit(r.bottom - e.clientY);
        });
        sp.addEventListener('pointerup', function () { dragging = false; });
        sp.addEventListener('dblclick', function () { setSplit(300); });
        sp.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowUp') { setSplit((S.cam.split || 300) + 16); e.preventDefault(); }
          else if (e.key === 'ArrowDown') { setSplit((S.cam.split || 300) - 16); e.preventDefault(); }
        });
      })();

      // ================================================================= the script
      //
      // TRACK A STANDS ALONE, and this is the proof: the lesson's dialogue with speaker names, timings and
      // both languages, rendered from data the scene already holds. No model, no Ollama, nothing to install.
      //
      // It is also MODE-INDEPENDENT. The interactive load path fetches scene.json anyway, but the MP4 modes
      // do not - so the script fetches the lesson's own scene file itself. A student watching the video
      // gets the script too, which is the point.
      //
      // DETERMINISTIC BY CONSTRUCTION: the lines come out in time order, each rendered by one formatter, so
      // the same lesson always produces the same text. The language shown is the SUBTITLE choice already on
      // the page - one setting, not a second one to keep in step.
      var scriptLines = null, scriptFor = null, scriptNow = -1;

      function mmssShort(t) {
        var m = Math.floor(t / 60), s = Math.floor(t % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
      }
      // A presentable name, not a raw id. 'maher' is data; 'Maher' is what a person reads.
      function speakerName(id) {
        return String(id || '').split(/[_\s-]+/).filter(Boolean)
          .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
      }
      // 'en-GB-RyanNeural' -> 'en-GB'. The accent is already on every line; showing it costs nothing and
      // tells a learner which English they are hearing.
      function accentOf(voice) {
        var p = String(voice || '').split('-');
        return p.length >= 2 ? p[0] + '-' + p[1] : '';
      }

      function scriptLangs() {
        // The subtitle selectors are the language choice. If a student has turned subtitles off entirely we
        // still have to show something, so fall back to the lesson's first available language.
        var want = (S.lang.subtitles || []).slice();
        if (!want.length && current && current.video) want = (current.video.subtitles || ['en']).slice();
        return want;
      }

      function renderScript() {
        var host = $('scriptbody');
        host.innerHTML = '';
        if (!scriptLines) {
          host.appendChild(el('div', 'padnote', 'Loading the script…'));
          return;
        }
        if (!scriptLines.length) {
          host.appendChild(el('div', 'padnote', 'This lesson has no dialogue.'));
          return;
        }
        var langs = scriptLangs();
        scriptLines.forEach(function (ln, i) {
          var row = el('div', 'sline');
          row.setAttribute('role', 'button');
          row.tabIndex = 0;
          row.appendChild(el('div', 't', mmssShort(ln.start)));
          var who = el('div', 'who', speakerName(ln.actor));
          var acc = accentOf(ln.voice);
          if (acc) who.appendChild(el('i', null, acc));
          row.appendChild(who);
          var say = el('div', 'say');
          langs.forEach(function (lg, k) {
            var t = (ln.text || {})[lg];
            if (!t) return;
            var e = el('span', k ? 'alt' : null, t);
            e.setAttribute('dir', 'auto');            // Arabic reads right-to-left; let the browser decide
            say.appendChild(e);
          });
          row.appendChild(say);
          var go = function () {
            pause();
            seek(ln.start + 0.01);
            scrub.value = dur ? Math.round((ln.start / dur) * 1000) : 0;
            markScript(ln.start);
          };
          row.onclick = go;
          row.onkeydown = function (e2) {
            if (e2.key === 'Enter' || e2.key === ' ') { go(); e2.preventDefault(); }
          };
          host.appendChild(row);
        });
        $('scriptnote').textContent = '  ' + scriptLines.length + ' lines · from the lesson itself, '
          + 'no assistant involved';
        $('scriptnote').style.cssText = 'font-weight:400;font-size:11.5px;color:var(--muted)';
        markScript(lastT);
      }

      // The line under the playhead. Marked, never auto-scrolled away from a person's reading position
      // unless it has actually left the box.
      function markScript(t) {
        if (!scriptLines || !scriptLines.length) return;
        var idx = -1;
        for (var i = 0; i < scriptLines.length; i++) {
          if (scriptLines[i].start <= t + 1e-6) idx = i; else break;
        }
        if (idx === scriptNow) return;
        scriptNow = idx;
        var rows = $('scriptbody').children;
        for (var k = 0; k < rows.length; k++) rows[k].classList.toggle('now', k === idx);
        if (idx >= 0 && rows[idx]) {
          var box = $('scriptbody'), r = rows[idx];
          if (r.offsetTop < box.scrollTop || r.offsetTop + r.offsetHeight > box.scrollTop + box.clientHeight) {
            box.scrollTop = r.offsetTop - box.clientHeight / 3;
          }
        }
      }

      function loadScript() {
        if (!current) return;
        var key = current.courseId + '/' + current.video.id;
        if (scriptFor === key) { renderScript(); return; }
        scriptFor = key; scriptLines = null; scriptNow = -1;
        renderScript();
        // Its OWN fetches, so the script does not depend on the interactive player having loaded.
        //
        // TWO files, because the published bundle SPLITS them: scene.json holds what is SHOWN (actor,
        // start, text) and audio/<variant>.json holds what is HEARD (voice, duration). The accent therefore
        // follows the SPOKEN variant, which is right - an Arabic-spoken version of a lesson would carry
        // Arabic voices and the script should say so.
        var lang = S.lang.speech || 'en';
        Promise.all([
          fetch(U(current.video.dir + '/scene.json')).then(function (r) { return r.json(); }),
          fetch(U(current.video.dir + '/audio/' + lang + '.json'))
            .then(function (r) { return r.ok ? r.json() : null; })
            .catch(function () { return null; })
        ]).then(function (both) {
            var sc = both[0], au = both[1];
            if (scriptFor !== key) return;                      // the person moved on
            var voices = (au && au.lines) || {};
            scriptLines = (sc.speech || []).slice().sort(function (a, b) { return a.start - b.start; })
              .map(function (l) {
                var v = voices[l.id] || {};
                return {start: l.start, actor: l.actor, voice: v.voice || l.voice || '',
                        text: l.text || {}};
              });
            renderScript();
          })
          .catch(function (e) {
            if (scriptFor !== key) return;
            $('scriptbody').innerHTML = '';
            $('scriptbody').appendChild(el('div', 'padnote',
              'The script could not be loaded: ' + String((e && e.message) || e)));
          });
      }

      function scriptText() {
        var langs = scriptLangs();
        return (scriptLines || []).map(function (ln) {
          var t = langs.map(function (lg) { return (ln.text || {})[lg]; }).filter(Boolean).join('\n        ');
          return mmssShort(ln.start) + '  ' + speakerName(ln.actor) + ': ' + t;
        }).join('\n');
      }

      function setScript(on) {
        S.script = !!on; save();
        $('script').classList.toggle('on', S.script && paneEffective('script'));
        $('bscript').setAttribute('aria-pressed', S.script ? 'true' : 'false');
        if (S.script && paneEffective('script')) loadScript();
        emitUiIfChanged();
      }
      $('bscript').onclick = function () { setScript(!S.script); };
      $('scriptcopy').onclick = function () {
        try { navigator.clipboard.writeText(scriptText()); } catch (e) { /* no clipboard */ }
        $('scriptcopy').textContent = 'Copied';
        setTimeout(function () { $('scriptcopy').textContent = 'Copy'; }, 1200);
      };

      // ================================================================= boot
      catalogueReady = fetch(U('catalogue.json'), {cache: 'no-store'}).then(function (r) { return r.json(); })
        .then(function (cat) {
          CAT = cat;
          if (hostCb.title) hostCb.title(cat.title || 'AnimatedEverything');
          return Promise.all(ordered(cat.courses).map(function (c) {
            return fetch(U(c.dir + '/course.json')).then(function (r) { return r.json(); });
          }));
        }).then(function (courses) {
          COURSES = courses;
          var n = courses.reduce(function (a, c) { return a + (c.videos || []).length; }, 0);
          if (hostCb.tally) hostCb.tally(courses.length + ' courses · ' + n + ' videos');
          syncAxes(); render();
          // A shareable URL is the source of truth for what opens.
          var q = urlsvc.read();
          if (q.get('speech')) S.lang.speech = q.get('speech');
          if (q.get('subs') != null) {
            S.lang.subtitles = q.get('subs') ? q.get('subs').split(',') : [];
            // PRESENT-BUT-EMPTY is a statement ("no subtitles"), ABSENT is silence. The link has to be
            // able to say the first one, or a sender who turned subtitles off cannot share that.
            S.lang.subsNone = S.lang.subtitles.length === 0;
          }
          // The URL WINS over stored state when both speak, because a link is something a person just
          // acted on and storage is something they did days ago. An unknown mode is ignored here rather
          // than guessed at; a mode this lesson cannot offer falls through to the fallback syncModes
          // already performs, so that rule has one implementation and not two.
          if (q.get('mode') && MODES.some(function (m) { return m.id === q.get('mode'); })) {
            S.mode = q.get('mode');
          }
          if (q.get('cam')) S.cam.on = true;     // read here; camRestore() decodes it at mount
          var c = courses.filter(function (x) { return x.id === q.get('c'); })[0];
          var v = c && (c.videos || []).filter(function (x) { return x.id === q.get('v'); })[0];
          if (c && v) open_video(c, v);
          else { $('about').innerHTML = '<h2>Choose a lesson</h2><p class="desc">Pick a course on the ' +
                 'left, then a video inside it.</p>'; }
        }).catch(function (e) {
          $('about').innerHTML = '<h2>Could not load the catalogue</h2><p class="desc">' +
            esc(String(e && e.message || e)) + '</p>';
        });

      // ========================================================= glue: what a component adds to the page's body

      // shared verified bytes (spec §7)
      (function () {
        var mem = sharedMem(), own = fetcher._mem;
        fetcher._mem = new Proxy(own, {
          get: function (t, k) { return (k in t) ? t[k] : mem.get(k); },
          set: function (t, k, v) { t[k] = v; mem.put(k, v); return true; }
        });
      })();

      // ---- effective panes
      function paneOpenPref(p) {
        if (p === 'nav') return S.nav !== false;
        if (p === 'info') return S.info !== false;
        if (p === 'script') return !!S.script;
        if (p === 'camera') return !!(S.cam && S.cam.on);
        return !!S.ask;
      }
      function paneEffective(p) { return paneAllowed(p) && paneOpenPref(p); }

      function setPaneOpen(p, on) {
        on = !!on;
        if (p === 'nav') { S.nav = on; save(); applyPanes(); render(); }
        else if (p === 'info') { S.info = on; save(); applyPanes(); }
        else if (p === 'script') { setScript(on); applyPanes(); }
        else if (p === 'camera') {
          S.cam.on = on; save();
          var cb = $('camon'); if (cb) cb.checked = on;
          camApply(); camRender(); applyPanes();
        } else if (p === 'ai') {
          S.ask = on; save();
          if (askon) askon.checked = on;
          askApply(); applyPanes();
        }
        emitUiIfChanged();
      }
      function viewerTogglePane(p) {
        if (!paneAllowed(p)) return false;
        as('viewer', function () { setPaneOpen(p, !paneOpenPref(p)); });
        return true;
      }

      // the placement rule, written once (spec §4): a toggle lives in its default strip; if that strip is hidden it
      // moves to the other; with both hidden there are no toggles, and panes are controlled through the API only
      function placementOf(p) {
        if (!paneAllowed(p)) return 'none';
        var want = PANE_STRIP[p], other = want === 'play' ? 'controls' : 'play';
        if (UI.strips[want]) return want;
        if (UI.strips[other]) return other;
        return 'none';
      }
      var toggleShape = '';
      function renderToggles() {
        var shape = PANES.map(function (p) { return p + ':' + placementOf(p); }).join(',') +
                    '|sel:' + (UI.selectToggle && effPerm('select'));
        if (shape !== toggleShape) {
          toggleShape = shape;
          var boxes = {play: root.querySelector('[data-ap-strip=play]'), controls: root.querySelector('[data-ap-strip=controls]')};
          boxes.play.innerHTML = ''; boxes.controls.innerHTML = '';
          PANES.forEach(function (p) {
            var where = placementOf(p);
            if (where === 'none') return;
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'ap-tgl';
            b.setAttribute('data-ap-toggle', p);
            b.textContent = PANE_ICON[p];
            b.onclick = function () { viewerTogglePane(p); };
            boxes[where].appendChild(b);
          });
          if (UI.selectToggle && effPerm('select')) {
            var where = UI.strips.controls ? 'controls' : (UI.strips.play ? 'play' : null);
            if (where) {
              var s2 = document.createElement('button');
              s2.type = 'button';
              s2.className = 'ap-tgl';
              s2.setAttribute('data-ap-mode', 'select');
              s2.textContent = '⌖';
              s2.onclick = function () { as('viewer', function () { setSelecting(!selecting); }); };
              boxes[where].appendChild(s2);
            }
          }
        }
        Array.prototype.forEach.call(root.querySelectorAll('button[data-ap-toggle]'), function (b) {
          var p = b.getAttribute('data-ap-toggle'), on = paneEffective(p), w = PANE_WORDS[p];
          var tip = (on ? 'Hide ' : 'Show ') + w[0] + ' — ' + w[1] + ' (' + PANE_KEY[p] + ')';
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
          b.title = tip;
          b.setAttribute('aria-label', tip);
        });
        var sb = root.querySelector('button[data-ap-mode=select]');
        if (sb) {
          var tip2 = (selecting ? 'Stop selecting' : 'Select an object in the picture') + ' — selection mode';
          sb.setAttribute('aria-pressed', selecting ? 'true' : 'false');
          sb.title = tip2; sb.setAttribute('aria-label', tip2);
        }
      }

      function setInert(el, on) {
        if (!el) return;
        if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
        else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
      }
      function applyPanes() {
        app.classList.toggle('ap-noplay', !UI.strips.play);
        app.classList.toggle('ap-nocontrols', !UI.strips.controls);
        setInert($('bar'), !UI.strips.play);
        setInert($('axes'), !UI.strips.controls);
        app.classList.toggle('ap-nonav', !paneEffective('nav'));
        setInert($('browse'), !paneEffective('nav'));
        setInert($('railsplitx'), !paneEffective('nav'));
        if (!paneAllowed('nav') && tree.childNodes.length) tree.innerHTML = '';
        if (paneAllowed('nav') && !tree.childNodes.length && COURSES.length) render();
        app.classList.toggle('ap-noinfo', !paneEffective('info'));
        setInert($('about'), !paneEffective('info'));
        setInert($('note'), !paneEffective('info'));
        app.classList.toggle('ap-noscript', !paneAllowed('script'));
        $('script').classList.toggle('on', !!S.script && paneEffective('script'));
        setInert($('script'), !paneEffective('script'));
        if (S.script && paneEffective('script')) loadScript();
        $('bscript').setAttribute('aria-pressed', paneEffective('script') ? 'true' : 'false');
        if (!paneAllowed('ai') && askPane) { try { askPane.agent.stop(); } catch (e) {} }
        app.classList.toggle('hasask', !!S.ask && paneEffective('ai'));
        setInert($('ask'), !paneEffective('ai'));
        setInert($('asksplitx'), !paneEffective('ai'));
        try { camRender(); camAttach(); camAvail(); } catch (e) { /* no lesson yet */ }
        if (paneEffective('ai')) askApply();
        setSize(UI.size);
        reserveStage();
        renderToggles();
      }
      function reserveStage() {
        // The stage keeps room for the strips under it. Our site states its reserve (the header is its own); any
        // other host gets the heights the strips really have, so a strip that hides gives its room to the stage.
        var px = UI.stageReserve;
        if (px === 'auto' || px === undefined || px === null) {
          px = (UI.strips.play ? ($('bar').offsetHeight || 0) : 0) + (UI.strips.controls ? ($('axes').offsetHeight || 0) : 0);
        }
        appEl.style.setProperty('--ap-chrome-h', (+px || 0) + 'px');
        appEl.style.setProperty('--ap-host-h', (host.clientHeight || 0) + 'px');
      }
      observeSize(host, function () {
        reserveStage();
        var w = host.clientWidth;
        app.classList.toggle('ap-w1100', w <= 1100);
        app.classList.toggle('ap-w820', w <= 820);
        app.classList.toggle('ap-w760', w <= 760);
        viewCheck();
      });

      var lastUi = '';
      function uiState() {
        var o = {strips: {play: UI.strips.play, controls: UI.strips.controls}, panes: {}, toggles: {placement: {}},
                 size: UI.size};
        PANES.forEach(function (p) {
          var allowed = paneAllowed(p), open = allowed && paneOpenPref(p);
          var visible = open;
          if (p === 'camera') visible = open && !!current && !vid.classList.contains('on');
          o.panes[p] = {allowed: allowed, open: open, visible: visible};
          o.toggles.placement[p] = placementOf(p);
        });
        return o;
      }
      function emitUiIfChanged() {
        var st = uiState(), js = JSON.stringify(st);
        if (js === lastUi) return;
        lastUi = js;
        renderToggles();
        emit('ui.changed', null, st);
      }

      // ---- the frame: where the picture is, inside the stage (the overlay and the slots are laid over it)
      function frameRect(aspect) {
        var sw = $('stagewrap');
        // THE FRAME IS THE PICTURE AS IT IS DRAWN. While a lesson loads, the canvas exists before it has been sized
        // to the stage (mount creates the renderer, then sizes it), and the two disagreed for a moment: the overlay
        // was laid out for the stage's box and the badge sat over a picture of another size. Ask the canvas.
        var cv = renderer && renderer.domElement;
        if (cv && cv.parentNode && cv.getBoundingClientRect().width > 1) {
          var r = cv.getBoundingClientRect(), b = sw.getBoundingClientRect();
          return {x: r.left - b.left, y: r.top - b.top, w: r.width, h: r.height};
        }
        var w = sw.clientWidth, h = sw.clientHeight;
        aspect = aspect || (curScene && curScene.size ? curScene.size[0] / curScene.size[1] : 16 / 9);
        var ww = Math.min(w, h * aspect), hh = ww / aspect;
        return {x: (w - ww) / 2, y: (h - hh) / 2, w: ww, h: hh};
      }
      function placeFrame(aspect, ov) {
        var f = frameRect(aspect);
        if (!f.w || !f.h) return;
        var o = $('overlay').style;
        o.left = Math.round(f.x) + 'px'; o.top = Math.round(f.y) + 'px'; o.right = 'auto'; o.bottom = 'auto';
        o.width = Math.round(f.w) + 'px'; o.height = Math.round(f.h) + 'px';
        var target = ov || curOverlay;
        if (target) target.layout(Math.round(f.w), Math.round(f.h));
        if (slotLayer) {
          slotLayer.setFrame(Math.round(f.x), Math.round(f.y), Math.round(f.w), Math.round(f.h),
                             (curScene && curScene.size && curScene.size[1]) || 1080);
          if (target && target.box) slotLayer.setBox(target.box.style.background);
        }
      }

      // ---- visibility: hidden keeps playing, drawing is skipped (spec §9.1)
      var inViewport = true, viewHidden = false;
      function viewVisible() {
        return !viewHidden;
      }
      function viewCheck() {
        var sw = $('stagewrap');
        var zero = !host.clientWidth || !host.clientHeight || !sw.clientWidth || !sw.clientHeight;
        var tabHidden = document.visibilityState === 'hidden';
        var hidden = zero || !inViewport || tabHidden;
        if (hidden !== viewHidden) {
          viewHidden = hidden;
          emit(hidden ? 'view.hidden' : 'view.shown', null,
               {reason: zero ? 'size' : (tabHidden ? 'tab' : (!inViewport ? 'offscreen' : 'shown'))}, 'system');
          if (!hidden && part) { sizeCanvas(frameAspect()); seek(clockNow()); }
        }
      }
      function frameAspect() { return ((curScene && curScene.size && curScene.size[0]) || 16) / ((curScene && curScene.size && curScene.size[1]) || 9); }
      if (global.IntersectionObserver) {
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (e) { inViewport = e.isIntersecting; });
          viewCheck();
        });
        io.observe(mountEl);
        observers.push(io);
      }
      var onVis = function () { viewCheck(); };
      document.addEventListener('visibilitychange', onVis);
      cleanups.push(function () { document.removeEventListener('visibilitychange', onVis); });

      // ---- the clock: cues, time events, the end
      currentT = function () { return clockNow(); };
      var cueState = {line: null, card: null, shot: -2};
      function clockOnly(t) {
        lastT = t;
        cues(t);
      }
      function cues(t) {
        if (!curScene) return;
        var ov = curOverlay;
        var line = null, lines = (curScene.speech || []);
        for (var i = 0; i < lines.length; i++) {
          var l = lines[i];
          if (t >= l.start && t < l.start + (l.dur || 0)) { line = l; break; }
        }
        var lid = line ? line.id : null;
        if (lid !== cueState.line) {
          cueState.line = lid;
          if (line) emit('cue.line', {kind: 'line', id: line.id}, {start: line.start, dur: line.dur, actor: line.actor}, 'lesson');
        }
        var card = ov ? ov.cardAt(t) : null;
        var cid = card ? (card.lemma + '@' + card.at) : null;
        if (cid !== cueState.card) {
          cueState.card = cid;
          if (card) emit('cue.card', {kind: 'card', id: card.lemma}, {at: +card.at, label: card.label, ar: card.ar}, 'lesson');
        }
        var sh = shotIndexAt(t);
        if (sh !== cueState.shot) {
          cueState.shot = sh;
          if (sh >= 0) emit('cue.shot', {kind: 'shot', id: sh}, {at: (curScene.shots || [])[sh] ? curScene.shots[sh].at : 0}, 'lesson');
        }
        if (playing && Date.now() - lastTimeEmit >= 250) {
          lastTimeEmit = Date.now();
          emit('playback.time', null, {t: +t.toFixed(3), duration: dur}, 'lesson');
        }
        slotsRender(t);
      }
      var baseSeek = seek;
      seek = function (t) {
        baseSeek(t);
        if (part) { cues(lastT); armCues(); }
      };
      // THE LESSON'S CUES ARE THE CLOCK'S, NOT THE FRAME LOOP'S. Emitting them from drawing gave them the frame rate
      // (measured: 287 ms late under software rendering, against a 50 ms criterion) and stopped them altogether while
      // the tab was hidden and no frames were drawn. The next boundary - a line, a card, a shot or a slot - is timed
      // exactly, the rule the end already follows.
      function nextBoundary(t) {
        var best = null;
        function put(x) { if (x > t + 0.001 && (best === null || x < best)) best = x; }
        ((curScene && curScene.speech) || []).forEach(function (l) { put(l.start); put(l.start + (l.dur || 0)); });
        ((((curOverlay && curOverlay.timeline) || {}).vocab || {}).cards || []).forEach(function (c) {
          put(+c.at); put(+c.at + (+(c.hold === undefined ? 1.35 : c.hold)));
        });
        ((curScene && curScene.shots) || []).forEach(function (sh) { put(+sh.at); });
        Object.keys((customRes && customRes.slots) || {}).forEach(function (id) {
          var sl = customRes.slots[id];
          put(sl.at); put(sl.at + sl.dur);
        });
        return best;
      }
      function armCues() {
        disarmCues();
        if (!playing) return;
        var now = clockNow(), nx = nextBoundary(now);
        if (nx === null) return;
        timers.cue = setTimeout(function () {
          timers.cue = null;
          if (!playing) return;
          cues(clockNow());
          armCues();
        }, Math.max(4, (nx - now) * 1000));
      }
      function disarmCues() { if (timers.cue) { clearTimeout(timers.cue); timers.cue = null; } }

      function armEnd() {
        disarmEnd();
        if (!playing || !dur) return;
        var left = Math.max(0, dur - clockNow());
        timers.end = setTimeout(function onEnd() {
          timers.end = null;
          if (!playing) return;
          var t = base0 + (performance.now() - t0) / 1000;
          if (t < dur - 0.02) { timers.end = setTimeout(onEnd, Math.max(10, (dur - t) * 1000)); return; }
          // the end: no auto-replay, ever. The voice has finished; the pump is stopped with the clock.
          playing = false; playBtn.textContent = 'Play';
          if (raf) cancelAnimationFrame(raf);
          if (part && part.speech) part.speech.stop();
          lastT = dur;
          if (viewVisible()) baseSeek(dur); else clockOnly(dur);
          greetArmed = false;
          setLifecycle('ended', 'lesson');
          emit('playback.state', null, {state: 'ended', t: dur}, 'lesson');
          emit('playback.ended', null, {duration: dur}, 'lesson');
        }, left * 1000);
      }
      function disarmEnd() { if (timers.end) { clearTimeout(timers.end); timers.end = null; } }

      function setLifecycle(s, cause) {
        if (disposed) return;
        if (lifecycle === s) return;
        lifecycle = s;
        emit('lifecycle', null, {state: s}, cause);
      }
      function onPlaying(at) {
        armEnd();
        armCues();
        applyAudio();
        // a start from the beginning arms the on-play-from-start slots (the greeting)
        greetArmed = at < 0.5;
        greetShownThisStart = {};
        setLifecycle('playing');
        emit('playback.state', null, {state: 'playing', t: at});
        slotsRender(at);
      }
      function onPaused() {
        disarmCues();
        greetArmed = false;
        if (lifecycle !== 'suspended' && lifecycle !== 'ended') setLifecycle('paused');
        emit('playback.state', null, {state: 'paused', t: lastT});
        slotsRender(lastT);
      }
      var loadingSource = null, readyWaiters = [];
      function onLoading(c, v) {
        loadingSource = {course: c.id, video: v.id};
        cueState = {line: null, card: null, shot: -2};
        selectionState.last = null;
        slotLayer && slotLayer.set(null);
        customRes = null;
        setLifecycle('loading', 'system');
      }
      function onReady() {
        applyAudio();
        applyPanes();
        if (lifecycle === 'loading') setLifecycle('ready', 'system');
        readyResolve(handle);
        var w = readyWaiters; readyWaiters = [];
        w.forEach(function (f) { f.res(handle); });
        resolveSlots();
        if (pendingRestore) { var pr = pendingRestore; pendingRestore = null; restoreNow(pr); }
      }
      function onLoadError(msg) {
        emit('error', null, {code: 'load', message: msg}, 'system');
        var w = readyWaiters; readyWaiters = [];
        w.forEach(function (f) { f.rej(new Error(msg)); });
      }

      // ---- audio (spec §9.2)
      function applyAudio() {
        if (part && part.speech && part.speech.setOutputGain) part.speech.setOutputGain(AUDIO.audible ? AUDIO.volume : 0);
      }
      function setAudio(a, cause) {
        var before = JSON.stringify(AUDIO);
        if (a.audible !== undefined) AUDIO.audible = !!a.audible;
        if (a.volume !== undefined) AUDIO.volume = Math.max(0, Math.min(1, +a.volume));
        applyAudio();
        if (JSON.stringify(AUDIO) !== before) emit('audio.changed', null, {audible: AUDIO.audible, volume: AUDIO.volume}, cause);
      }

      // ---- params
      var lastParams = '';
      function paramsNow() {
        return {speech: S.lang.speech, subs: (S.lang.subtitles || []).slice(), mode: S.mode};
      }
      function paramsMaybeChanged() {
        var p = paramsNow(), js = JSON.stringify(p);
        if (js !== lastParams) {
          var first = !lastParams;
          lastParams = js;
          if (!first) emit('params.changed', null, p);
        }
        var cam = (S.cam && S.cam.on && camView && paneEffective('camera')) ? camView.encode() : '';
        if (cam !== lastCam) { lastCam = cam; emit('camera.changed', null, {view: cam, director: !cam}); }
      }
      var lastCam = '';
      function setParams(p) {
        p = p || {};
        var reload = false;
        if (p.subs !== undefined && p.subs !== null) {
          var list = (Array.isArray(p.subs) ? p.subs : csv(p.subs)).map(String);
          var have = current ? (current.video.subtitles || []) : list;
          var pick = list.filter(function (x) { return have.indexOf(x) >= 0; });
          // the page's own rule (open_video): [] is NONE; a list this lesson cannot show falls back to all of its languages
          if (!pick.length && list.length) pick = have.slice();
          S.lang.subtitles = pick;
          S.lang.subsNone = list.length === 0;
          save();
          if (current) syncAxes();
          if (part && part.overlay) { part.overlay.setShow(list.length ? pick : []); part.overlay.render(lastT); }
          else if (curOverlay) { curOverlay.setShow(list.length ? pick : []); curOverlay.render(lastT); }
          try { if (S.script) renderScript(); } catch (e) {}
          if (current) syncModes();
          var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
          if (m.format === 'mp4') reload = true;
        }
        if (p.speech && p.speech !== S.lang.speech) {
          if (current && (current.video.speech || []).indexOf(p.speech) < 0) return {ok: false, code: 'bad-args', message: 'speech: this lesson has no ' + p.speech + ' audio'};
          S.lang.speech = p.speech; save(); reload = true;
        }
        if (p.mode && p.mode !== S.mode) {
          if (!MODES.some(function (x) { return x.id === p.mode; })) return {ok: false, code: 'bad-args', message: 'mode: unknown mode ' + p.mode};
          S.mode = p.mode; save(); reload = true;
        }
        syncUrl();
        if (reload && current) { if (current) syncAxes(); applyMode(); }
        return {ok: true};
      }

      // ---- selection (spec §11)
      var selecting = false, selectionState = {last: null};
      function setSelecting(on) {
        on = !!on && effPerm('select');
        if (on === selecting) return;
        selecting = on;
        app.classList.toggle('ap-selecting', on);
        if (on) askLoadIndex();
        renderToggles();
        emit('interaction.changed', null, {select: on});
      }
      var down = null, sw = $('stagewrap');
      sw.addEventListener('pointerdown', function (e) {
        if (!selecting) return;
        if (e.target.closest && e.target.closest('#campanel, #load')) { down = null; return; }
        down = {x: e.clientX, y: e.clientY, moved: false};
      });
      sw.addEventListener('pointermove', function (e) {
        if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) down.moved = true;
      });
      sw.addEventListener('pointerup', function (e) {
        var d = down; down = null;
        if (!selecting || !d || d.moved || Math.hypot(e.clientX - d.x, e.clientY - d.y) > 5) return;
        var cv = renderer && renderer.domElement;
        if (!cv) return;
        var r = cv.getBoundingClientRect();
        var fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
        if (fx < 0 || fx > 1 || fy < 0 || fy > 1) return;
        as('viewer', function () { selectPoint(fx, fy); });
      });
      function indexReady() {
        askLoadIndex();
        var key = current ? current.courseId + '/' + current.video.id : null;
        return new Promise(function (res) {
          var t0i = Date.now();
          (function wait() {
            if (askIndex && askIndexFor === key) return res(askIndex);
            if (Date.now() - t0i > 30000 || askIndexFor !== key) return res(null);
            setTimeout(wait, 50);
          })();
        });
      }
      function renderedCamera() {
        var a = authoredCam();
        if (!a) return null;
        var fov = (curScene && curScene.camera && curScene.camera.fov) || 38;
        if (S.cam.on && paneEffective('camera') && camView && !camView.isDirector()) {
          var v = camView.apply(a, part.player.sc.fov);
          return {cam: {pos: v.pos.slice(), target: v.target.slice()}, fov: v.fov > 0 ? v.fov : fov, director: false};
        }
        return {cam: {pos: a.pos.slice(), target: a.target.slice()}, fov: fov, director: true};
      }
      function selectionCtx(extra) {
        var rc = renderedCamera() || {cam: null, fov: 38, director: true};
        return Object.assign({index: askIndex, cards: (curOverlay && curOverlay.timeline.vocab && curOverlay.timeline.vocab.cards) || [],
          course: current.courseId, video: current.video.id, t: +lastT.toFixed(3), shot: shotIndexAt(lastT),
          playing: playing, cam: rc.cam, fov: rc.fov, director: rc.director,
          aspect: frameAspect()}, extra || {});
      }
      function selectPoint(fx, fy) {
        var cause = currentCause();
        if (!part || !global.APSelection) return Promise.resolve({ok: false, code: 'not-supported', message: 'no lesson is ready'});
        return indexReady().then(function (idx) {
          if (!idx) return {ok: false, code: 'not-supported', message: 'this lesson has no world index'};
          if (viewVisible()) part.player.seek(lastT);         // the camera the picture was drawn with, now
          var r = global.APSelection.resolvePoint(global.THREE, part.player, idx, fx, fy);
          var screen = {x: +fx.toFixed(4), y: +fy.toFixed(4)};
          if (r.kind === 'actor') {
            var a = (curScene.actors || [])[r.actorIndex] || {};
            emit('scene.selected', null, {reason: 'actor-selection-reserved', actor: a.id || null, point: r.point, screen: screen}, cause);
            return {ok: false, code: 'not-supported', message: 'actor selection is reserved'};
          }
          if (r.kind === 'none') {
            emit('scene.deselected', null, {point: r.point, screen: screen}, cause);
            selectionState.last = null;
            return {ok: true, result: {selected: null}};
          }
          var data = global.APSelection.payload(r.object, selectionCtx({hit: r.point, screen: screen}));
          selectionState.last = r.object.name;
          emit('scene.selected', {kind: 'object', id: r.object.name}, data, cause);
          return {ok: true, result: {selected: r.object.name}};
        });
      }
      function selectById(id) {
        var cause = currentCause();
        if (!part) return Promise.resolve({ok: false, code: 'not-supported', message: 'no lesson is ready'});
        return indexReady().then(function (idx) {
          var o = idx && (idx.objects || []).filter(function (x) { return x.name === id; })[0];
          if (!o) return {ok: false, code: 'no-subject', message: 'no object named ' + id + ' in this lesson'};
          if (viewVisible()) part.player.seek(lastT);
          var sc = global.APSelection.project(global.THREE, part.player.camera, o.centre);
          var data = global.APSelection.payload(o, selectionCtx({screen: {x: +sc.x.toFixed(4), y: +sc.y.toFixed(4)}}));
          selectionState.last = o.name;
          emit('scene.selected', {kind: 'object', id: o.name}, data, cause);
          return {ok: true, result: {selected: o.name}};
        });
      }

      // ---- customisation (package 07)
      var slotLayer = global.Custom ? new global.Custom.Layer($('apslots')) : null;
      var customValues = {}, customEnable = [], customRes = null;
      var greetArmed = false, greetShownThisStart = {};
      function slotDefs() {
        var c = (current && current.course) || {};
        // A FINISHED VIDEO HAS NO SCENE, AND STILL HAS SLOTS (03 USR-08, CUS-17: "the greeting over the video too").
        // In MP4 mode nothing loads scene.json, so the lesson's own <slots> - which may OVERRIDE or DISABLE one the
        // course declares - would be invisible and the course's version shown in its place. mp4Slots holds what that
        // lesson published, fetched once when the mode is entered; until it has arrived no slot resolves at all,
        // rather than resolving against half the truth.
        var lesson = curScene ? (curScene.slots || []) : ((current && current.mp4Slots) || []);
        return global.Custom.merge(c.slots || [], lesson);
      }
      function resolveSlots() {
        if (!global.Custom || !current || (!curScene && !current.mp4Slots)) return null;
        customRes = global.Custom.resolve(slotDefs(), customValues, customEnable);
        slotLayer.set(customRes);
        placeFrame(frameAspect());
        slotsRender(lastT);
        return customRes;
      }
      // In MP4 mode the <video> element IS the transport and owns the clock (showMp4), so the slots read it there.
      function slotClock() {
        if (vid.classList.contains('on')) {
          return {t: vid.currentTime || 0, playing: !vid.paused && !vid.ended, armed: mp4GreetArmed};
        }
        return {t: lastT, playing: playing, armed: greetArmed};
      }
      function slotVisible(id, s) {
        var c = slotClock();
        if (!(c.t >= s.at && c.t < s.at + s.dur)) return false;
        if (s.show === 'on-play-from-start') return c.armed && c.playing;
        return true;
      }
      // THE VIDEO'S SLOT CLOCK. The interactive path times every boundary exactly (nextBoundary/armCues) instead of
      // riding the frame loop; a finished video gets the same treatment from its own clock. `timeupdate` fires about
      // four times a second - a quarter of a second of a 3.5 s greeting - so it is used only to correct drift, and
      // the on and the off are timers set to the boundary itself.
      var mp4GreetArmed = false, mp4Timer = null;
      function mp4SlotsDisarm() { if (mp4Timer) { clearTimeout(mp4Timer); mp4Timer = null; } }
      function mp4SlotsArm() {
        mp4SlotsDisarm();
        if (!customRes || !vid.classList.contains('on') || vid.paused || vid.ended) return;
        var now = vid.currentTime || 0, best = null;
        Object.keys(customRes.slots).forEach(function (id) {
          var s = customRes.slots[id];
          [s.at, s.at + s.dur].forEach(function (x) { if (x > now + 0.001 && (best === null || x < best)) best = x; });
        });
        if (best === null) return;
        mp4Timer = setTimeout(function () {
          mp4Timer = null;
          slotsRender(vid.currentTime || 0);
          mp4SlotsArm();
        }, Math.max(4, (best - now) * 1000));
      }
      function mp4SlotsSync(startingToPlay) {
        if (!vid.classList.contains('on')) return;
        if (startingToPlay) mp4GreetArmed = (vid.currentTime || 0) < 0.5;
        if (vid.paused || vid.ended) mp4GreetArmed = false;
        slotsRender(vid.currentTime || 0);
        mp4SlotsArm();
      }
      function slotsRender(t) {
        if (!slotLayer || !customRes) return;
        var on = slotLayer.render(function (id, s) { return slotVisible(id, s); });
        on.forEach(function (id) {
          var s = customRes.slots[id];
          emit('slot.shown', {kind: 'slot', id: id}, {at: s.at, duration: s.dur, show: s.show}, 'lesson');
          if (id === 'greeting') emit('greeting.shown', {kind: 'slot', id: id}, {duration: s.dur}, 'lesson');
        });
      }
      var VALUE_KEY = /^[A-Za-z_][A-Za-z0-9_]*\.[A-Za-z_][A-Za-z0-9_]*$/;
      function customSet(args) {
        args = args || {};
        var vals = args.values || {}, en = args.enable || [];
        if (typeof vals !== 'object' || Array.isArray(vals)) return {ok: false, code: 'bad-args', message: 'values: an object of {"namespace.key": text}'};
        if (!Array.isArray(en)) return {ok: false, code: 'bad-args', message: 'enable: a list of slot ids'};
        var defs = current ? slotDefs() : [];
        var ids = defs.map(function (d) { return d.id; });
        var unknown = en.filter(function (id) { return ids.indexOf(id) < 0; });
        if (current && curScene && unknown.length) return {ok: false, code: 'no-subject', message: 'no slot named ' + unknown.join(', ')};
        var copyVals = {};
        Object.keys(vals).forEach(function (k) { if (VALUE_KEY.test(k) && vals[k] !== undefined && vals[k] !== null) copyVals[k] = String(vals[k]); });
        customValues = copyVals;
        customEnable = en.slice();
        var res = resolveSlots();
        if (res) {
          // values no enabled slot used are not kept (07 §2.3)
          var keep = {};
          res.used.forEach(function (k) { keep[k] = customValues[k]; });
          // a slot that is enabled but omitted for a missing value still REQUIRES its keys: keep those so a later
          // value can complete it without the host re-sending the rest
          customValues = keep;
        }
        var result = res ? {enabled: res.enabled, ignored: res.ignored, unsupported: res.unsupported, missing: res.missing}
                         : {enabled: [], ignored: [], unsupported: [], missing: [], pending: en.slice()};
        emit('custom.changed', null, {enabled: result.enabled, unsupported: result.unsupported, missing: result.missing});
        return {ok: true, result: result};
      }
      function customClear(args) {
        var only = args && Array.isArray(args.slots) ? args.slots : null;
        customEnable = only ? customEnable.filter(function (id) { return only.indexOf(id) < 0; }) : [];
        if (!only) customValues = {};
        resolveSlots();
        emit('custom.changed', null, {enabled: customRes ? customRes.enabled : []});
        return {ok: true, result: {enabled: customRes ? customRes.enabled : []}};
      }
      function recordCtx() {
        var c = current.course || {};
        return {fingerprint: (curManifest && curManifest.fingerprint) || '', course: current.courseId, video: current.video.id,
                courseSlots: c.slots || [], lessonSlots: curScene ? (curScene.slots || []) : ((current && current.mp4Slots) || []), mergedSlots: slotDefs(),
                courseSlotsVersion: c.slotsVersion || ''};
      }
      function customRecord() {
        if (!current || !curScene || !customRes) return Promise.resolve({ok: false, code: 'not-supported', message: 'no lesson is ready'});
        var personal = Object.keys(customRes.slots).some(function (id) { return customRes.slots[id].privacy === 'personal'; });
        if (personal && !effPerm('exportPersonal')) return Promise.resolve({ok: false, code: 'denied', message: 'a record holding personal values needs permissions.exportPersonal'});
        return global.Custom.record(recordCtx(), customRes, customValues).then(function (rec) {
          return {ok: true, result: freeze(rec)};
        });
      }
      function customApply(args) {
        var rec = args && args.record;
        if (!rec || rec.schema !== 'custom/1' || !rec.base) return Promise.resolve({ok: false, code: 'bad-args', message: 'record: a custom/1 record'});
        if (!current || !curScene) return Promise.resolve({ok: false, code: 'not-supported', message: 'no lesson is ready'});
        var ctx = recordCtx();
        var C = global.Custom;
        return Promise.all([C.sha16(C.canonical(ctx.courseSlots)),
                            ctx.lessonSlots.length ? C.sha16(C.canonical(ctx.lessonSlots)) : Promise.resolve('')])
          .then(function (h) {
            var ss = rec.base.slotSet || {};
            var courseV = ctx.courseSlotsVersion || h[0];
            if (rec.base.course !== ctx.course || rec.base.video !== ctx.video || rec.base.fingerprint !== ctx.fingerprint ||
                ss.courseSlotsVersion !== courseV || ss.lessonSlotsHash !== h[1]) {
              return {ok: false, code: 'stale-record', message: 'the record was made for a different lesson or slot set'};
            }
            return customSet({values: rec.values || {}, enable: Object.keys(rec.slots || {})});
          });
      }

      // ---- the manifest the lesson was loaded from (its fingerprint binds a record)
      var curManifest = null;
      var baseMount = mount;
      mount = function (pack) { curManifest = pack.manifest; lastPack = pack; return baseMount(pack); };
      var lastPack = null;

      // ---- camera commands
      function cameraSet(a) {
        if (!effPerm('viewerCamera')) return {ok: false, code: 'denied', message: 'viewerCamera is not permitted by this page'};
        if (!paneAllowed('camera')) return {ok: false, code: 'denied', message: 'the camera is not allowed by this page'};
        if (!part) return {ok: false, code: 'not-supported', message: 'no lesson is ready'};
        a = a || {};
        var v;
        if (a.view !== undefined) {
          if (typeof a.view !== 'string') return {ok: false, code: 'bad-args', message: 'view: an encoded view string'};
          v = a.view ? global.CameraView.decode(a.view) : new global.CameraView();
          if (!v) return {ok: false, code: 'bad-args', message: 'view: not a valid view'};
        } else {
          if (a.mode !== undefined && !/^(director|ride|free)$/.test(a.mode)) return {ok: false, code: 'bad-args', message: 'mode: director, ride or free'};
          var nums = ['yaw', 'pitch', 'zoom', 'roll'];
          for (var i = 0; i < nums.length; i++) {
            if (a[nums[i]] !== undefined && !(typeof a[nums[i]] === 'number' && isFinite(a[nums[i]]))) {
              return {ok: false, code: 'bad-args', message: nums[i] + ': a number'};
            }
          }
          if (a.off !== undefined && !(Array.isArray(a.off) && a.off.length === 3 && a.off.every(function (x) { return typeof x === 'number' && isFinite(x); }))) {
            return {ok: false, code: 'bad-args', message: 'off: three numbers [left/right, up/down, in/out] in metres'};
          }
          v = camView ? global.CameraView.decode(camView.encode()) || new global.CameraView() : new global.CameraView();
          var cam = authoredCam();
          var mode = a.mode || (v.mode === 'director' ? 'ride' : v.mode);
          if (cam) v.setMode(mode, cam);
          if (mode !== 'director') {
            if (a.off) v.off = a.off.slice();
            if (a.yaw !== undefined) v.yaw = a.yaw * Math.PI / 180;
            if (a.pitch !== undefined) v.pitch = Math.max(-83, Math.min(83, a.pitch)) * Math.PI / 180;
            if (a.zoom !== undefined) v.zoom = Math.max(0.4, Math.min(3, a.zoom));
            if (a.roll !== undefined) v.roll = Math.max(-30, Math.min(30, a.roll));
          }
        }
        camPush();
        camView = v;
        S.cam.mode = v.mode;
        if (!S.cam.on) { S.cam.on = true; var cb = $('camon'); if (cb) cb.checked = true; }
        camApply(); camRender(); camRemember(); syncUrl(); applyPanes(); emitUiIfChanged();
        return {ok: true, result: {view: camView.encode()}};
      }
      function cameraReset() {
        if (!effPerm('viewerCamera')) return {ok: false, code: 'denied', message: 'viewerCamera is not permitted by this page'};
        if (!part) return {ok: false, code: 'not-supported', message: 'no lesson is ready'};
        if (camEnsure()) { camPush(); camView.reset(); S.cam.mode = 'director'; camApply(); camRender(); camRemember(); syncUrl(); }
        return {ok: true, result: {view: ''}};
      }

      // ---- suspend / resume (deliberate only) and the GPU release
      var suspended = null;
      function suspendNow() {
        if (lifecycle === 'suspended') return {ok: true};
        pause();
        var st = {t: lastT, released: false, img: null};
        if (opts.lifecycle && opts.lifecycle.releaseGpuWhenSuspended && part && renderer) {
          try {
            baseSeek(lastT);
            var img = new Image();
            img.src = renderer.domElement.toDataURL('image/png');
            img.className = 'ap-lastframe';
            img.style.cssText = 'position:absolute;pointer-events:none';
            var f = frameRect(frameAspect());
            img.style.left = f.x + 'px'; img.style.top = f.y + 'px'; img.style.width = f.w + 'px'; img.style.height = f.h + 'px';
            $('stagewrap').insertBefore(img, $('overlay'));
            st.img = img;
            releaseScene(part.player);
            renderer.domElement.style.visibility = 'hidden';
            st.released = true;
          } catch (e) { /* keep the GPU rather than lose the picture */ }
        }
        suspended = st;
        setLifecycle('suspended');
        return {ok: true};
      }
      function releaseScene(pl) {
        if (!pl || !pl.scene) return;
        pl.scene.traverse(function (o) {
          if (o.geometry) o.geometry.dispose();
          if (o.material) {
            (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) {
              Object.keys(m).forEach(function (k) { if (m[k] && m[k].isTexture) m[k].dispose(); });
              m.dispose();
            });
          }
        });
        try { renderer.renderLists.dispose(); } catch (e) {}
      }
      function resumeNow() {
        if (lifecycle !== 'suspended' || !suspended) return Promise.resolve({ok: true});
        var st = suspended;
        suspended = null;
        var done = function () {
          if (st.img && st.img.parentNode) st.img.parentNode.removeChild(st.img);
          renderer.domElement.style.visibility = '';
          lastT = st.t;
          baseSeek(st.t);
          setLifecycle('paused');
          return {ok: true};
        };
        if (!st.released || !lastPack) return Promise.resolve(done());
        var pl = new global.ScenePlayer(global.THREE, renderer);
        return new Promise(function (res) { pl.load(lastPack.scene, lastPack.buffers, res); }).then(function () {
          part.player = pl;
          camAttach();
          return done();
        });
      }

      // ---- snapshot / restore
      function snapshotNow() {
        var o = {};
        PANES.forEach(function (p) { o[p] = paneOpenPref(p); });
        return freeze({v: 1, source: current ? {course: current.courseId, video: current.video.id} : copy(opts.source || null),
          params: paramsNow(), ui: {open: o}, t: +lastT.toFixed(3),
          view: (camView && S.cam.on) ? camView.encode() : ''});
      }
      var pendingRestore = null;
      function restoreNow(snap) {
        if (!snap || snap.v !== 1) return {ok: false, code: 'bad-args', message: 'snap: a v1 snapshot'};
        var same = current && snap.source && snap.source.course === current.courseId && snap.source.video === current.video.id;
        if (snap.source && snap.source.course && !same) {
          pendingRestore = snap;
          loadSource(snap.source, snap.params);
          return {ok: true, result: {pending: true}};
        }
        if (snap.params) setParams(snap.params);
        if (snap.ui && snap.ui.open) PANES.forEach(function (p) {
          if (snap.ui.open[p] !== undefined && paneAllowed(p) && paneOpenPref(p) !== !!snap.ui.open[p]) setPaneOpen(p, !!snap.ui.open[p]);
        });
        if (snap.view !== undefined && effPerm('viewerCamera') && paneAllowed('camera') && part) {
          if (snap.view) cameraSet({view: snap.view});
          else if (camView) { camView.reset(); camApply(); camRender(); }
        }
        pause();
        seek(+snap.t || 0);
        return {ok: true};
      }

      // ---- load another lesson in the same container
      function loadSource(src, params) {
        return new Promise(function (res, rej) {
          catalogueReady.then(function () {
            if (!src || !src.course || !src.video) return rej(new Error('source: {course, video}'));
            var c = COURSES.filter(function (x) { return x.id === src.course; })[0];
            var v = c && (c.videos || []).filter(function (x) { return x.id === src.video; })[0];
            if (!c || !v) return rej(new Error('no lesson ' + src.course + '/' + src.video + ' in the catalogue'));
            readyWaiters.push({res: res, rej: rej});
            if (params) {
              if (params.speech) S.lang.speech = params.speech;
              if (params.mode && MODES.some(function (m) { return m.id === params.mode; })) S.mode = params.mode;
              if (params.subs !== undefined && params.subs !== null) {
                S.lang.subtitles = (Array.isArray(params.subs) ? params.subs : csv(params.subs)).slice();
                S.lang.subsNone = S.lang.subtitles.length === 0;
              }
            }
            // the previous lesson's voice and GPU resources go now (spec §9 load)
            var old = part;
            open_video(c, v);
            if (old && old.speech && old.speech.dispose) old.speech.dispose();
            if (old && old.player) releaseScene(old.player);
          });
        });
      }

      // ---- dispose: idempotent and total
      function disposeNow() {
        if (disposed) return;
        try { pause(); } catch (e) {}
        disarmEnd();
        disarmCues();
        disposed = true;
        try { cancelled = true; if (aborter) aborter.abort(); } catch (e) {}
        try { clearInterval(loadTimer); } catch (e) {}
        try { if (askPane && askPane.dispose) askPane.dispose(); } catch (e) {}
        try { if (part && part.speech && part.speech.dispose) part.speech.dispose(); } catch (e) {}
        try { if (part && part.player) releaseScene(part.player); } catch (e) {}
        try { if (renderer) { renderer.dispose(); renderer.forceContextLoss(); } } catch (e) {}
        observers.forEach(function (o) { try { o.disconnect(); } catch (e) {} });
        cleanups.forEach(function (f) { try { f(); } catch (e) {} });
        blobUrls.forEach(function (u) { try { URL.revokeObjectURL(u); } catch (e) {} });
        blobUrls = [];
        if (debug) {
          ['__part', '__scene', '__overlay', '__askPaneRef'].forEach(function (k) { hook(k, null); });
          var i = DEBUG_ROOTS.indexOf(root); if (i >= 0) DEBUG_ROOTS.splice(i, 1);
        }
        part = null; renderer = null; askPane = null;
      }

      // ---- initial host state
      as('host', function () {
        PANES.forEach(function (p) {
          if (hostOpen[p] !== undefined && paneAllowed(p) && paneOpenPref(p) !== hostOpen[p]) setPaneOpen(p, hostOpen[p]);
        });
        hostOpen = {};
      });
      if (services.custom) customValuesPending(services.custom);
      else if (services.user) customValuesPending(userToCustom(services.user));
      function customValuesPending(c) {
        customValues = {};
        Object.keys((c && c.values) || {}).forEach(function (k) { if (VALUE_KEY.test(k) && c.values[k] != null) customValues[k] = String(c.values[k]); });
        customEnable = ((c && c.enable) || []).slice();
      }
      if (agentProblem) emit('error', null, {code: 'bad-agent', message: agentProblem}, 'system');
      applyPanes();
      emitUiIfChanged();
      if (UI.selectToggle && opts.select) setSelecting(true);
      // A host that knows its visitors use the assistant may load its files up front (our site always did).
      if ((opts.preload || []).indexOf('ai') >= 0 && aiPossible() && UI.allowed.ai) ensureAi().catch(function () {});

      function askContextFull() {
        var ctx = askContext();
        ctx.permissions = effPerms;
        ctx.request = P.request ? function (name, details) { return P.request(name, details); } : null;
        ctx.modalRoot = wrapEl;
        if (hostAgent) { ctx.agent = hostAgent; ctx.agentLabel = (hostAgent.snapshot() || {}).label || 'this page'; }
        else if (agentProvider && global.Agent && effPerm('ownAgent')) {
          // the component's OWN agent, built from the provider the host handed over: ownAgent governs it, and
          // withdrawing that permission stops it (PRM-07)
          ctx.agent = new global.Agent._Agent(agentProvider);
          ctx.agentLabel = agentProvider.label || 'this page';
          ctx.agentIsOwn = true;
        }
        return ctx;
      }
      function ensureAi() {
        var files = (effPerm('ownAgent') || agentProvider || P.request) ? AI_OWN.concat(AI_PANE) : AI_PANE;
        return loadAll(BASE, files);
      }

      return {
        paneEffective: paneEffective, paneAllowed: paneAllowed, setPaneOpen: setPaneOpen, applyPanes: applyPanes,
        uiState: uiState, emitUiIfChanged: emitUiIfChanged,
        play: function () { play(); return {ok: true}; },
        pause: function () { pause(); return {ok: true}; },
        seek: function (t) {
          if (typeof t !== 'number' || !isFinite(t)) return {ok: false, code: 'bad-args', message: 't: a number of seconds'};
          if (mp4On()) {
            try { vid.currentTime = Math.max(0, Math.min(vid.duration || t, t)); } catch (e) {}
            mp4SlotsSync(false);
            emit('playback.state', null, {state: vid.paused ? 'paused' : 'playing', t: +(vid.currentTime || 0).toFixed(3)});
            return {ok: true};
          }
          var was = playing;
          if (was) pause();
          seek(t);
          if (part && part.speech) part.speech.prefetch(lastT, 8);
          if (was) { scrub.value = dur ? Math.round(1000 * lastT / dur) : 0; play(); }
          emit('playback.state', null, {state: playing ? 'playing' : 'paused', t: lastT});
          return {ok: true};
        },
        setParams: setParams, load: loadSource, setAudio: setAudio, audio: function () { return copy(AUDIO); },
        setSelecting: setSelecting, selecting: function () { return selecting; },
        selectPoint: selectPoint, selectById: selectById,
        cameraSet: cameraSet, cameraReset: cameraReset,
        suspend: suspendNow, resume: resumeNow, snapshot: snapshotNow,
        restore: function (s) { return restoreNow(s); },
        customSet: customSet, customClear: customClear, customRecord: customRecord, customApply: customApply,
        dispose: disposeNow,
        permissionsChanged: function () {
          toggleShape = '';
          if (askPane && askPane.permissionsChanged) askPane.permissionsChanged();
          if (!effPerm('viewerCamera')) { try { camAttach(); seek(lastT); } catch (e) {} }
          if (!effPerm('select') && selecting) setSelecting(false);
          applyPanes();
          emitUiIfChanged();
        },
        focus: function (what) { if (what === 'filter' && paneEffective('nav')) fcourse.focus(); else appEl.focus(); },
        hostSlot: function (name) { return root.querySelector('[data-ap-slot="' + name + '"]'); },
        state: function () {
          var mt = mp4On() ? (vid.currentTime || 0) : lastT;
          var mdur = mp4On() ? (isFinite(vid.duration) ? vid.duration : dur) : dur;
          return {lifecycle: lifecycle || 'loading', source: current ? {course: current.courseId, video: current.video.id} : (loadingSource || null),
                  title: current ? titleOf(current.video, S.lang.catalogue).text : null,
                  params: paramsNow(), t: +mt.toFixed(3), duration: mdur, playing: mp4On() ? (!vid.paused && !vid.ended) : playing,
                  permissions: effPerms(), audio: copy(AUDIO), select: selecting, viewHidden: viewHidden,
                  voice: {scheduleAhead: (part && part.speech && part.speech.scheduleAhead) ? part.speech.scheduleAhead() : null}};
        },
        subjects: function () {
          var sc = curScene || {};
          var cards = (curOverlay && curOverlay.timeline.vocab && curOverlay.timeline.vocab.cards) || [];
          var seen = {};
          return {actor: (sc.actors || []).map(function (a) { return a.id; }),
                  object: askIndex ? (askIndex.objects || []).map(function (o) { return o.name; }) : [],
                  line: (sc.speech || []).map(function (l) { return l.id; }),
                  card: cards.map(function (c) { return c.lemma; }).filter(function (x) { return !seen[x] && (seen[x] = 1); }),
                  shot: (sc.shots || []).map(function (s, i) { return i; }),
                  slot: current && curScene ? slotDefs().map(function (d) { return d.id; }) : []};
        },
        slotsInfo: function () {
          // the same condition resolveSlots() uses: a scene, or the lesson's slots fetched for a finished video
          if (!current || (!curScene && current.mp4Slots === undefined)) return [];
          return slotDefs().map(function (d) {
            return {id: d.id, tier: d.tier || 'overlay', kind: d.kind || 'text', requires: csv(d.requires),
                    privacy: d.privacy || 'public', show: d.show || 'timeline', supported: !!global.Custom.TIERS_SUPPORTED[d.tier || 'overlay']};
          });
        },
        indexReady: indexReady,
        contextData: function () {
          return {scene: copy(curScene || null), index: copy(askIndex || null),
                  lesson: current ? {course: current.courseId, video: current.video.id,
                                     title: titleOf(current.video, S.lang.catalogue).text} : null};
        }
      };
    }

    function userToCustom(u) {
      u = u || {};
      var user = u.user || null, values = {};
      if (user) {
        if (user.userId != null) values['user.userId'] = String(user.userId);
        if (user.firstName != null) values['user.firstName'] = String(user.firstName);
        if (user.lastName != null) values['user.lastName'] = String(user.lastName);
      }
      return {values: values, enable: (u.greet && user) ? ['greeting'] : []};
    }

    // ============================================================= the public handle: methods only (A8)
    function res(r) {
      if (r && typeof r.then === 'function') return r.then(res);
      if (!r) return {ok: true};
      if (r.ok === false) return {ok: false, error: {code: r.code || 'bad-args', message: r.message || ''}};
      return r.result !== undefined ? {ok: true, result: r.result} : {ok: true};
    }
    var VERBS = {
      'playback.play': function () { return impl.play(); },
      'playback.pause': function () { return impl.pause(); },
      'playback.seek': function (a) { return impl.seek(a && a.t); },
      'lesson.load': function (a) {
        if (!a || !a.source) return {ok: false, code: 'bad-args', message: 'source: {course, video}'};
        return impl.load(a.source, a.params).then(function () { return {ok: true}; },
          function (e) { return {ok: false, code: 'no-subject', message: String(e.message || e)}; });
      },
      'params.set': function (a) { return impl.setParams(a || {}); },
      'ui.set': function (a) { handle.ui.set(a || {}); return {ok: true, result: impl.uiState()}; },
      'permissions.set': function (a) { handle.permissions.set(a || {}); return {ok: true, result: effPerms()}; },
      'camera.set': function (a) { return impl.cameraSet(a); },
      'camera.reset': function () { return impl.cameraReset(); },
      'lifecycle.suspend': function () { return impl.suspend(); },
      'lifecycle.resume': function () { return impl.resume(); },
      'interaction.set': function (a) {
        if (!a || typeof a.select !== 'boolean') return {ok: false, code: 'bad-args', message: 'select: true or false'};
        if (a.select && !effPerm('select')) return {ok: false, code: 'denied', message: 'select is not permitted by this page'};
        impl.setSelecting(a.select);
        return {ok: true, result: {select: impl.selecting()}};
      },
      'scene.select': function (a) {
        if (!effPerm('select')) return {ok: false, code: 'denied', message: 'select is not permitted by this page'};
        a = a || {};
        if (a.subject) {
          if (a.subject.kind === 'actor') return {ok: false, code: 'not-supported', message: 'actor selection is reserved'};
          if (a.subject.kind !== 'object' || typeof a.subject.id !== 'string') return {ok: false, code: 'bad-args', message: 'subject: {kind: "object", id}'};
          return impl.selectById(a.subject.id);
        }
        if (a.point && typeof a.point.x === 'number' && typeof a.point.y === 'number') return impl.selectPoint(a.point.x, a.point.y);
        return {ok: false, code: 'bad-args', message: 'subject or point is required'};
      },
      'context.set': function (a) {
        a = a || {};
        var c = userToCustom({user: a.user, greet: a.greet});
        var r = impl.customSet(c);
        emit('context.changed', null, {user: !!a.user, greet: !!a.greet});
        return r;
      },
      'audio.set': function (a) {
        a = a || {};
        if (a.audible !== undefined && typeof a.audible !== 'boolean') return {ok: false, code: 'bad-args', message: 'audible: true or false'};
        if (a.volume !== undefined && !(typeof a.volume === 'number' && isFinite(a.volume))) return {ok: false, code: 'bad-args', message: 'volume: a number 0..1'};
        impl.setAudio(a, currentCause());
        return {ok: true, result: impl.audio()};
      },
      'custom.set': function (a) { return impl.customSet(a); },
      'custom.clear': function (a) { return impl.customClear(a); },
      'custom.record': function () { return impl.customRecord(); },
      'custom.apply': function (a) { return impl.customApply(a); }
    };

    var handle = {
      ready: ready,
      mounted: mounted,
      version: VERSION,
      play: function () { return whenBody(function () { return as('host', function () { impl.play(); }); }); },
      pause: function () { return whenBody(function () { return as('host', function () { impl.pause(); }); }); },
      seek: function (t) { return whenBody(function () { return as('host', function () { return res(impl.seek(t)); }); }); },
      setParams: function (p) { return whenBody(function () { return as('host', function () { return res(impl.setParams(p)); }); }); },
      load: function (source, params) {
        return whenBody(function () { return as('host', function () { return impl.load(source, params); }); }).then(function () { return handle; });
      },
      suspend: function () { return whenBody(function () { return as('host', function () { return res(impl.suspend()); }); }); },
      resume: function () { return whenBody(function () { return as('host', function () { return res(impl.resume()); }); }); },
      setAudible: function (b) {
        // the state changes where the event is emitted, so the method and the command report identically (ICT-02)
        return whenBody(function () { return as('host', function () { impl.setAudio({audible: !!b}, 'host'); }); });
      },
      setVolume: function (v) {
        return whenBody(function () { return as('host', function () { impl.setAudio({volume: v}, 'host'); }); });
      },
      snapshot: function () { return impl ? impl.snapshot() : freeze({v: 1, source: copy(opts.source || null), params: copy(opts.params || {}), ui: {open: {}}, t: 0, view: ''}); },
      restore: function (snap) { return whenBody(function () { return as('host', function () { return res(impl.restore(snap)); }); }); },
      state: function () {
        if (disposed) return {lifecycle: 'disposed'};
        return impl ? impl.state() : {lifecycle: lifecycle || 'loading', source: copy(opts.source || null), permissions: effPerms()};
      },
      // everything the player can say about what it is showing, as a deep frozen COPY: changing it changes nothing
      context: function () {
        var o = copy(handle.state());
        if (impl) { var c = impl.contextData(); o.scene = c.scene; o.index = c.index; o.lesson = c.lesson; }
        return freeze(o);
      },
      capabilities: function () {
        var verbs = {};
        var voc = vocabulary || {verbs: {}};
        Object.keys(voc.verbs).forEach(function (k) { verbs[k] = !!voc.verbs[k].implemented && !!VERBS[k]; });
        var subjects = impl ? impl.subjects() : {actor: [], object: [], line: [], card: [], shot: [], slot: []};
        return freeze({v: 1, vocabulary: voc.vocabulary || '1.0', player: VERSION, verbs: verbs,
          events: (voc.events || []).slice(), subjects: subjects,
          selection: {object: true, actor: false},
          context: {user: true},
          slots: impl ? impl.slotsInfo() : [],
          values: (voc.values || []).slice()});
      },
      command: function (cmd) {
        if (disposed) return Promise.resolve({ok: false, error: {code: 'disposed', message: 'this player has been disposed'}});
        if (!cmd || typeof cmd.verb !== 'string') return Promise.resolve({ok: false, error: {code: 'bad-args', message: 'verb: a string'}});
        var voc = vocabulary;
        var run = function () {
          voc = vocabulary;
          var decl = voc && voc.verbs[cmd.verb];
          if (!decl || !VERBS[cmd.verb] && decl.implemented) return {ok: false, error: {code: 'unknown-verb', message: cmd.verb}};
          if (!decl.implemented) return {ok: false, error: {code: 'not-supported', message: cmd.verb + ' is reserved in vocabulary ' + voc.vocabulary}};
          return as('host', function () { return res(VERBS[cmd.verb](cmd.args)); });
        };
        return whenBody(run).then(function (r) {
          if (cmd.id !== undefined && r && typeof r === 'object') r = Object.assign({id: cmd.id}, r);
          return r;
        }, function (e) { return {ok: false, error: {code: 'disposed', message: String(e.message || e)}}; });
      },
      on: function (type, fn) {
        if (typeof fn !== 'function') return function () {};
        var s = {type: String(type), fn: fn};
        subs.push(s);
        return function () { var i = subs.indexOf(s); if (i >= 0) subs.splice(i, 1); };
      },
      off: function (type, fn) {
        for (var i = subs.length - 1; i >= 0; i--) if (subs[i].type === type && subs[i].fn === fn) subs.splice(i, 1);
      },
      ui: {
        get: function () {
          if (impl) return impl.uiState();
          var o = {strips: copy(UI.strips), panes: {}, toggles: {placement: {}}, size: UI.size};
          PANES.forEach(function (p) { o.panes[p] = {allowed: paneAllowed(p), open: false, visible: false}; o.toggles.placement[p] = 'none'; });
          return o;
        },
        set: function (patch) {
          if (disposed) return;
          takeUi(patch, true);
          if (!impl) { if (patch && patch.panes) PANES.forEach(function (p) { if (patch.panes[p] && patch.panes[p].open !== undefined) hostOpen[p] = !!patch.panes[p].open; }); return; }
          as('host', function () {
            var opens = hostOpen; hostOpen = {};
            PANES.forEach(function (p) {
              if (opens[p] !== undefined && impl.paneAllowed(p)) impl.setPaneOpen(p, opens[p]);
            });
            impl.applyPanes();
            impl.emitUiIfChanged();
          });
        }
      },
      permissions: {
        get: function () { return effPerms(); },
        set: function (p) {
          if (disposed) return;
          takePerms(p);
          if (impl) as('host', function () { impl.permissionsChanged(); });
          emit('permissions.changed', null, effPerms(), 'host');
        }
      },
      focus: function (what) { if (impl) impl.focus(what); },
      hostSlot: function (name) { return impl ? impl.hostSlot(name) : null; },
      dispose: function () {
        if (disposed) return;
        if (impl) impl.dispose(); else disposed = true;
        disposed = true;
        try { if (mountEl.parentNode) mountEl.parentNode.removeChild(mountEl); } catch (e) {}
        try { mutObs.disconnect(); } catch (e) {}
        lifecycle = 'disposed';
        var s2 = subs.slice();
        s2.forEach(function (s) {
          try {
            var e = freeze({v: 1, type: 'lifecycle', t: 0, at: Date.now(), subject: null, data: {state: 'disposed'}, cause: currentCause()});
            if (s.type === 'event' || s.type === 'lifecycle') s.fn(s.type === 'event' ? e : 'disposed');
            else if (s.type === 'state') s.fn('disposed');
          } catch (x) {}
        });
        subs = [];
        readyReject(new Error('disposed'));
      }
    };

    // ---- auto-dispose when the mount leaves the document (a MOVE re-attaches in the same task and is not a removal)
    // A MOVE within the DOM is one synchronous task (remove + insert), so by the time this observer runs the element
    // is connected again and nothing happens (LIFE-07). A real removal is disposed at once, rather than after a grace
    // period a busy main thread can stretch well past a frame (LIFE-06).
    var mutObs = new MutationObserver(function () {
      if (disposed || mountEl.isConnected) return;
      handle.dispose();
    });
    mutObs.observe(document.documentElement, {childList: true, subtree: true});

    return handle;
  }

  // ================================================================= <animated-lesson>
  function optsFromElement(el) {
    var a = function (n) { return el.getAttribute(n); };
    var o = {base: a('base') || undefined, source: {course: a('course'), video: a('video')}, params: {}, ui: {panes: {}},
             permissions: {}, services: {}};
    if (a('speech')) o.params.speech = a('speech');
    if (a('mode')) o.params.mode = a('mode');
    if (el.hasAttribute('subs')) o.params.subs = csv(a('subs'));
    if (el.hasAttribute('strips')) { var st = csv(a('strips')); o.ui.strips = {play: st.indexOf('play') >= 0, controls: st.indexOf('controls') >= 0}; }
    var allowed = el.hasAttribute('panes') ? csv(a('panes')) : PANES;
    var open = el.hasAttribute('open') ? csv(a('open')) : null;
    PANES.forEach(function (p) {
      o.ui.panes[p] = {allowed: allowed.indexOf(p) >= 0};
      if (open) o.ui.panes[p].open = open.indexOf(p) >= 0;
    });
    csv(a('permissions')).forEach(function (t) {
      var m = /^([+-])([A-Za-z]+)$/.exec(t);
      if (m && PERM_NAMES.indexOf(m[2]) >= 0) o.permissions[m[2]] = m[1] === '+';
    });
    if (a('select') === 'on') { o.ui.selectToggle = true; o.select = true; }
    return o;
  }
  if (global.customElements && !global.customElements.get('animated-lesson')) {
    var AnimatedLesson = function () { return Reflect.construct(HTMLElement, [], AnimatedLesson); };
    AnimatedLesson.prototype = Object.create(HTMLElement.prototype);
    AnimatedLesson.prototype.constructor = AnimatedLesson;
    Object.setPrototypeOf(AnimatedLesson, HTMLElement);
    Object.defineProperty(AnimatedLesson, 'observedAttributes', {get: function () {
      return ['base', 'course', 'video', 'strips', 'panes', 'open', 'subs', 'speech', 'mode', 'permissions', 'select', 'greet', 'custom-enable'];
    }});
    AnimatedLesson.prototype.connectedCallback = function () {
      if (this._ap) return;
      if (!this.style.display) this.style.display = 'block';
      var o = optsFromElement(this);
      this._ap = createInstance(this, o);
      var self = this, p = this._ap;
      if (o.select) p.command({v: 1, verb: 'interaction.set', args: {select: true}});
      this._applyCustom();
    };
    AnimatedLesson.prototype.disconnectedCallback = function () {
      var self = this;
      setTimeout(function () { if (!self.isConnected && self._ap) { self._ap.dispose(); self._ap = null; } }, 16);
    };
    AnimatedLesson.prototype._applyCustom = function () {
      var p = this._ap;
      if (!p) return;
      var en = csv(this.getAttribute('custom-enable'));
      if (this.getAttribute('greet') === 'on' && en.indexOf('greeting') < 0) en.push('greeting');
      if (!en.length && !this.hasAttribute('greet') && !this.hasAttribute('custom-enable')) return;
      var vals = this._values || {};
      p.ready.then(function () { p.command({v: 1, verb: 'custom.set', args: {values: vals, enable: en}}); }, function () {});
    };
    AnimatedLesson.prototype.attributeChangedCallback = function (name, oldV, newV) {
      var p = this._ap;
      if (!p || oldV === newV) return;
      var o = optsFromElement(this);
      if (name === 'course' || name === 'video' || name === 'base') { p.load(o.source).catch(function () {}); return; }
      if (name === 'subs' || name === 'speech' || name === 'mode') { p.setParams(o.params); return; }
      if (name === 'permissions') { p.permissions.set(o.permissions); return; }
      if (name === 'select') { p.command({v: 1, verb: 'interaction.set', args: {select: newV === 'on'}}); return; }
      if (name === 'greet' || name === 'custom-enable') { this._applyCustom(); return; }
      p.ui.set(o.ui);
    };
    Object.defineProperty(AnimatedLesson.prototype, 'player', {get: function () { return this._ap || null; }});
    // Values are PROGRAMMATIC only - never an attribute, so a name is never in the DOM for any script to read.
    AnimatedLesson.prototype.setValues = function (values) {
      this._values = {};
      var self = this;
      Object.keys(values || {}).forEach(function (k) { self._values[k] = String(values[k]); });
      this._applyCustom();
    };
    global.customElements.define('animated-lesson', AnimatedLesson);
  }

  global.AnimatedPlayer = {
    create: createInstance,
    version: VERSION,
    base: DEFAULT_BASE
  };
})(typeof window !== 'undefined' ? window : globalThis);
