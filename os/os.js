/* Web OS Live (v28.3). Plain script, no build step, no dependency beyond the published lesson player.
 *
 * STRUCTURE (06_WEB_OS_LIVE.md §3):
 *   Store        persistence: localStorage by default; an optional path-scoped cookie for the user
 *   UserService  {userId, firstName, lastName, greet}, handed to every player as services.user
 *   AgentHub     ONE assistant for the OS (the existing agent.js seam), leased per window
 *   Apps         a registry: 'empty' and 'lesson-player' today; any app = {id, title, create(body, services, args)}
 *   WM           the window manager: spawn, focus, drag, resize, minimise, maximise, close, arrange
 *   Inspector    shows what the focused window's player reported as selected (scene.selected events)
 * Every app talks to the shell only through its handle and events, never through globals.
 */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var BASE = window.OS_BASE;
  var bus = [];                                   // the shell's event log (the checks read window.__os.bus)

  // ------------------------------------------------------------------------------------------ Store
  var NS = 'weboslive:';
  var Store = {
    get: function (k, d) { try { var v = localStorage.getItem(NS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(NS + k); } catch (e) {} },
    // THE COOKIE IS PATH-SCOPED to this page's folder. A cookie is sent with every request to its path, so one
    // scoped to the site root would carry the user's name to GitHub with every lesson blob. Scoped to /os/, it
    // travels only with requests for the shell's own files (06 §5).
    cookiePath: function () { return location.pathname.replace(/[^/]*$/, ''); },
    setCookie: function (k, v) {
      document.cookie = NS.replace(':', '_') + k + '=' + encodeURIComponent(JSON.stringify(v)) +
        '; Max-Age=31536000; Path=' + Store.cookiePath() + '; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
    },
    getCookie: function (k) {
      var name = NS.replace(':', '_') + k + '=', parts = document.cookie.split('; ');
      for (var i = 0; i < parts.length; i++) if (parts[i].indexOf(name) === 0) {
        try { return JSON.parse(decodeURIComponent(parts[i].slice(name.length))); } catch (e) { return null; } }
      return null;
    },
    delCookie: function (k) { document.cookie = NS.replace(':', '_') + k + '=; Max-Age=0; Path=' + Store.cookiePath(); }
  };

  // ------------------------------------------------------------------------------------ UserService
  var UserService = {
    user: null, greet: true, listeners: [],
    load: function () {
      var u = Store.getCookie('user') || Store.get('user', null);
      this.user = u && u.userId ? u : null;
      this.greet = Store.get('greet', true);
      return this.user;
    },
    validate: function (id, first, last) {
      id = String(id || '').trim(); first = String(first || '').trim(); last = String(last || '').trim();
      if (!/^[A-Za-z0-9._-]{1,40}$/.test(id)) return {error: 'User ID: 1–40 letters, digits, dot, dash or underscore.'};
      if (!first) return {error: 'First name is required.'};
      if (first.length > 60 || last.length > 60) return {error: 'Names are limited to 60 characters.'};
      return {user: {userId: id, firstName: first, lastName: last}};
    },
    save: function (u, cookie, greet) {
      this.user = u; this.greet = !!greet;
      Store.set('greet', this.greet);
      if (cookie) { Store.setCookie('user', u); Store.del('user'); } else { Store.set('user', u); Store.delCookie('user'); }
      this.emit();
    },
    clear: function () { this.user = null; Store.del('user'); Store.delCookie('user'); this.emit(); },
    on: function (fn) { this.listeners.push(fn); },
    emit: function () { var s = this.snapshot(); this.listeners.forEach(function (f) { f(s); }); },
    // What a player receives: a COPY, never a live reference (A8: nothing reaches in either direction).
    snapshot: function () { return {user: this.user ? Object.assign({}, this.user) : null, greet: this.greet}; }
  };

  // --------------------------------------------------------------------------------------- AgentHub
  // ONE assistant for the whole OS, built on the existing seam (player/agent.js). agent.js is loaded only when
  // a provider is chosen, so opening the shell contacts nothing (WOS-06).
  var AgentHub = {
    agent: null, kind: '', allowOwn: false,
    ensureScript: function (src) {
      return new Promise(function (res, rej) {
        if (document.querySelector('script[data-src="' + src + '"]')) return res();
        var s = document.createElement('script'); s.src = BASE + src; s.dataset.src = src;
        s.onload = res; s.onerror = function () { rej(new Error('could not load ' + src)); };
        document.head.appendChild(s);
      });
    },
    choose: function (kind) {
      var self = this; this.kind = kind; this.agent = null;
      if (!kind) return Promise.resolve(null);
      var need = kind === 'webllm' ? ['player/agent.js', 'player/webllm_provider.js'] : ['player/agent.js'];
      return need.reduce(function (p, src) { return p.then(function () { return self.ensureScript(src); }); }, Promise.resolve())
        .then(function () { self.agent = window.Agent.create(kind); return self.agent.probe(); });
    },
    // A LEASE per window. Agent.stop() cancels "the" in-flight request (agent.js:273), so two windows sharing one
    // Agent would cancel each other. Each lease tracks its OWN request and forwards everything else (06 §4).
    lease: function (winId) {
      var hub = this;
      if (!hub.agent) return null;
      var mine = null, listeners = [];
      hub.agent.on(function (s) { listeners.forEach(function (f) { f(Object.assign({}, s, {provider: 'host',
        label: 'Web OS Live (' + (s.provider || hub.kind) + ')'})); }); });
      return {
        on: function (fn) { listeners.push(fn); },
        snapshot: function () { return Object.assign({}, hub.agent.snapshot(), {provider: 'host',
          label: 'Web OS Live (' + hub.kind + ')'}); },
        probe: function () { return hub.agent.probe(); },
        select: function (n) { return hub.agent.select(n); },
        connect: function () { return hub.agent.connect(); },
        ask: function (req) {
          var p = hub.agent.provider.ask(Object.assign({model: hub.agent.model}, req));
          mine = p; bus.push({t: Date.now(), win: winId, type: 'agent.ask'});
          return p.then(function (r) { if (mine === p) mine = null; return r; },
                        function (e) { if (mine === p) mine = null; throw e; });
        },
        stop: function () { if (mine && mine.cancel) mine.cancel(); mine = null; }
      };
    }
  };

  // ------------------------------------------------------------------------------------------- Apps
  var Apps = {
    empty: {
      title: 'Empty window',
      create: function (body) {
        body.innerHTML = '<div class="empty">Empty window. Close it, or spawn one with a video player.</div>';
        return {dispose: function () { body.innerHTML = ''; }, on: function () {}};
      }
    },
    'lesson-player': {
      title: 'Lesson',
      create: function (body, services, args) {
        if (!window.AnimatedPlayer) {
          body.innerHTML = '<div class="empty">The lesson player could not be loaded from ' + BASE + '.</div>';
          return {placeholder: true, dispose: function () { body.innerHTML = ''; }, on: function () {}};
        }
        var opts = {
          base: BASE, source: {course: args.course, video: args.video},
          params: {subs: args.subs || ['en', 'ar']},
          // A WINDOW OPENS ON ITS LESSON, NOT ON THE COURSE LIST. The player's own defaults open the navigation and
          // the info panes, which is right for a full page and wrong here: measured in a default 539 x 520 window,
          // the panes stack above the stage and push the picture out of the window, which clips it - a new window
          // showed the course tree and no lesson at all. The dock chooses the lesson; the window plays it. Both
          // panes stay ALLOWED, so their title-bar toggles still open them when a viewer wants them.
          ui: {panes: {nav: {open: false}, info: {open: false}}},
          // the OS owns persistence (window sessions), so a player writes nothing of its own
          permissions: {ownAgent: AgentHub.allowOwn, storage: false},
          // the customisation contract (07): the user's fields are VALUES; the greeting is a SLOT the lesson declares
          services: {custom: services.custom}
        };
        // WHO ANSWERS: the OS assistant, leased to this window (06 §4). With none chosen, a player has no assistant
        // of its own unless the dock allows it.
        if (services.agent) opts.services.agent = services.agent;
        return window.AnimatedPlayer.create(body, opts);
      }
    }
  };

  // ----------------------------------------------------------------------------------------- Window manager
  var WM = {
    wins: [], z: 10, seq: 0, active: null,
    desk: function () { return $('desk'); },
    spawn: function (appId, args, saved) {
      var app = Apps[appId], id = 'w' + (++this.seq);
      var el = $('tpl-win').content.firstElementChild.cloneNode(true);
      el.id = id;
      var n = this.wins.length, d = this.desk().getBoundingClientRect();
      var w = Math.min(760, Math.max(420, d.width * 0.55)), h = Math.min(520, Math.max(300, d.height * 0.6));
      Object.assign(el.style, {left: (24 + 28 * (n % 8)) + 'px', top: (20 + 28 * (n % 8)) + 'px',
                               width: w + 'px', height: h + 'px'});
      if (saved && saved.rect) Object.assign(el.style, saved.rect);
      // A person reads the LESSON TITLE, not its id; the id stays in the tooltip for support.
      var title = (args && args.title ? args.title : app.title) + ' #' + this.seq;
      el.querySelector('.title').textContent = title;
      el.setAttribute('aria-label', title);
      if (args && args.video) el.querySelector('.title').title = args.course + '/' + args.video;
      this.desk().appendChild(el);
      var win = {id: id, el: el, appId: appId, title: title, handle: null, selections: [], min: false, max: null};
      this.wins.push(win);
      var u = UserService.snapshot();
      var services = {agent: AgentHub.lease(id), custom: customFor(u)};
      win.args = args || {};
      win.handle = app.create(el.querySelector('.body'), services, win.args);
      if (saved && saved.snapshot && win.handle && win.handle.restore) {
        win.handle.ready.then(function () { win.handle.restore(saved.snapshot); }, function () {});
      }
      this.wire(win);
      this.focus(win);
      if (saved && saved.max) this.toggleMax(win);
      if (saved && saved.min) this.minimise(win);
      bus.push({t: Date.now(), type: 'window.spawned', win: id, app: appId});
      Taskbar.render();
      Session.save();
      return win;
    },
    wire: function (win) {
      var self = this, el = win.el, bar = el.querySelector('.bar');
      // A CLICK IN A WINDOW FOCUSES IT - except the one control whose whole purpose is a window that is NOT focused.
      // 🔈 means "keep letting this one speak while I work in another window" (Q15, audio follows focus). Raising the
      // window on that click would hand it the focus - and the audio with it - so the button could never do the only
      // thing it is for; measured, it also buried the window the viewer was actually using underneath this one.
      el.addEventListener('pointerdown', function (e) {
        if (e.target && e.target.closest && e.target.closest('.pctl [data-c="audible"]')) return;
        self.focus(win);
      });
      // DRAG by the title bar (not from its buttons). The title bar always stays reachable inside the desktop.
      bar.addEventListener('pointerdown', function (e) {
        if (e.target.closest('button,select') || win.max) return;
        var r = el.getBoundingClientRect(), d = self.desk().getBoundingClientRect(), ox = e.clientX - r.left, oy = e.clientY - r.top;
        function mv(ev) {
          var x = Math.min(Math.max(ev.clientX - d.left - ox, 80 - r.width), d.width - 80);
          var y = Math.min(Math.max(ev.clientY - d.top - oy, 0), d.height - 34);
          el.style.left = x + 'px'; el.style.top = y + 'px';
        }
        function up() { document.removeEventListener('pointermove', mv); document.removeEventListener('pointerup', up); Session.save(); }
        document.addEventListener('pointermove', mv); document.addEventListener('pointerup', up);
        e.preventDefault();
      });
      bar.addEventListener('dblclick', function (e) { if (!e.target.closest('button,select')) self.toggleMax(win); });
      // RESIZE from the corner grip; minimum 320×200 (the CSS min-size agrees).
      el.querySelector('.grip').addEventListener('pointerdown', function (e) {
        var r = el.getBoundingClientRect(), sx = e.clientX, sy = e.clientY;
        function mv(ev) { el.style.width = Math.max(320, r.width + ev.clientX - sx) + 'px';
                          el.style.height = Math.max(200, r.height + ev.clientY - sy) + 'px'; }
        function up() { document.removeEventListener('pointermove', mv); document.removeEventListener('pointerup', up); Session.save(); }
        document.addEventListener('pointermove', mv); document.addEventListener('pointerup', up);
        e.preventDefault(); e.stopPropagation();
      });
      el.querySelectorAll('[data-w]').forEach(function (b) {
        b.onclick = function (e) { e.stopPropagation(); var a = b.dataset.w;
          if (a === 'close') self.close(win); else if (a === 'min') self.minimise(win); else self.toggleMax(win); };
      });
      TitleControls.wire(win);
    },
    focus: function (win) {
      if (!win || win.min) return;
      this.wins.forEach(function (w) { w.el.classList.toggle('active', w === win); });
      win.el.style.zIndex = String(++this.z);
      this.active = win;
      Audio.apply();
      Inspector.show(win);
      Taskbar.render();
    },
    close: function (win) {
      try { if (win.handle && win.handle.dispose) win.handle.dispose(); } catch (e) {}
      win.el.remove();
      this.wins = this.wins.filter(function (w) { return w !== win; });
      if (this.active === win) { this.active = null; this.focus(this.topmost()); if (!this.active) Inspector.show(null); }
      bus.push({t: Date.now(), type: 'window.closed', win: win.id});
      Taskbar.render();
      Session.save();
    },
    // MINIMISING HIDES; IT DOES NOT PAUSE (owner, v3). A player in a minimised window keeps playing.
    minimise: function (win) { win.min = true; win.el.classList.add('min');
      if (this.active === win) { this.active = null; this.focus(this.topmost()); }
      if (!this.active) Inspector.show(null);
      Audio.apply(); Taskbar.render(); Session.save(); },
    restore: function (win) { win.min = false; win.el.classList.remove('min'); this.focus(win); Session.save(); },
    toggleMax: function (win) {
      if (win.max) { Object.assign(win.el.style, win.max); win.max = null; }
      else { win.max = {left: win.el.style.left, top: win.el.style.top, width: win.el.style.width, height: win.el.style.height};
             Object.assign(win.el.style, {left: '0px', top: '0px', width: '100%', height: '100%'}); }
      Session.save();
    },
    topmost: function () { return this.wins.filter(function (w) { return !w.min; })
      .sort(function (a, b) { return (+b.el.style.zIndex) - (+a.el.style.zIndex); })[0] || null; },
    arrange: function (how) {
      var d = this.desk().getBoundingClientRect(), vis = this.wins.filter(function (w) { return !w.min; });
      if (how === 'minAll') { this.wins.forEach(function (w) { w.min = true; w.el.classList.add('min'); }); this.active = null;
        Inspector.show(null); Audio.apply(); Taskbar.render(); Session.save(); return; }
      if (how === 'restoreAll') { this.wins.forEach(function (w) { w.min = false; w.el.classList.remove('min'); }); this.focus(this.topmost()); return; }
      var n = vis.length; if (!n) return;
      var G = 6, MINW = 320, MINH = 200;
      // A TILE NEVER GOES BELOW THE WINDOW MINIMUM. The CSS min-size would silently enlarge it and the tiles would
      // overlap (measured: 3 windows side by side on an 880 px desktop gave 285 px columns). Too many for a row or
      // a column falls back to the grid, which is named in the bus event.
      if (how === 'tileH' && (d.width - G * (n + 1)) / n < MINW) how = 'grid';
      if (how === 'tileV' && (d.height - G * (n + 1)) / n < MINH) how = 'grid';
      vis.sort(function (a, b) { return (+a.el.style.zIndex) - (+b.el.style.zIndex); });
      vis.forEach(function (w, i) {
        w.max = null;
        var box;
        if (how === 'cascade') {
          var cw = d.width * 0.62, ch = d.height * 0.62;
          box = {left: 20 + 30 * i, top: 16 + 30 * i, width: cw, height: ch};
        } else if (how === 'tileH') {
          var ww = (d.width - G * (n + 1)) / n; box = {left: G + i * (ww + G), top: G, width: ww, height: d.height - 2 * G};
        } else if (how === 'tileV') {
          var hh = (d.height - G * (n + 1)) / n; box = {left: G, top: G + i * (hh + G), width: d.width - 2 * G, height: hh};
        } else {
          var cols = Math.ceil(Math.sqrt(n)), rows = Math.ceil(n / cols);
          var gw = (d.width - G * (cols + 1)) / cols, gh = (d.height - G * (rows + 1)) / rows;
          box = {left: G + (i % cols) * (gw + G), top: G + Math.floor(i / cols) * (gh + G), width: gw, height: gh};
        }
        Object.keys(box).forEach(function (k) { w.el.style[k] = Math.round(box[k]) + 'px'; });
      });
      bus.push({t: Date.now(), type: 'windows.arranged', how: how, n: n});
      Session.save();
    }
  };

  // ------------------------------------------------------------------------------------ the session
  // A desktop is a list of windows: {app, args, rect, min, max, snapshot}. It is kept in this browser and reopened
  // next time (06 §7). A player's snapshot holds only what the player shows (lesson, languages, open panes, time,
  // view) - never the user's values, which the dock supplies afresh.
  var Session = {
    restoring: false,
    save: function () {
      if (Session.restoring) return;
      var list = WM.wins.map(function (w) {
        var snap = null;
        try { snap = (w.handle && w.handle.snapshot && !w.handle.placeholder) ? w.handle.snapshot() : null; } catch (e) {}
        return {app: w.appId, args: w.args, min: w.min, max: !!w.max,
                rect: w.max ? w.max : {left: w.el.style.left, top: w.el.style.top, width: w.el.style.width, height: w.el.style.height},
                snapshot: snap};
      });
      Store.set('session', list);
    },
    restore: function () {
      var list = Store.get('session', []);
      if (!Array.isArray(list) || !list.length) return;
      Session.restoring = true;
      try { list.forEach(function (s) { if (Apps[s.app]) WM.spawn(s.app, s.args || {}, s); }); }
      finally { Session.restoring = false; }
      bus.push({t: Date.now(), type: 'session.restored', n: list.length});
      Session.save();
    }
  };

  // ------------------------------------------------------------------------------ audio follows focus (v5)
  // RUNNING and AUDIBLE are separate (02 §9.2). The player owns the mechanism (a master gain per instance, audio.set);
  // the OS owns the policy: the active window is heard, other playing windows keep running with their speaker off, a
  // minimised window is silent, and the 🔈 button unmutes a window explicitly in addition to the active one.
  var Audio = {
    follow: Store.get('audioFollowsFocus', true),
    apply: function () {
      WM.wins.forEach(function (w) {
        var h = w.handle;
        if (!h || h.placeholder || !h.command) return;              // empty windows and placeholders have no audio
        var audible = !w.min && (!Audio.follow || w === WM.active || !!w.unmuted);
        if (w.audible !== audible) { w.audible = audible; h.command({v: 1, verb: 'audio.set', args: {audible: audible}}); }
      });
      bus.push({t: Date.now(), type: 'audio.policy', follow: Audio.follow,
                audible: WM.wins.filter(function (w) { return w.audible; }).map(function (w) { return w.id; })});
    }
  };

  // ----------------------------------------------------------------------- per-window title-bar controls
  // Visible on player windows only. Each control calls the PLAYER'S PUBLIC API and reflects its reported state.
  var TitleControls = {
    wire: function (win) {
      var h = win.handle, box = win.el.querySelector('.pctl');
      if (!h || h.placeholder || !h.ui) return;                          // empty windows and placeholders: none
      box.hidden = false;
      box.querySelectorAll('[data-t]').forEach(function (b) {
        b.onclick = function () {
          var path = b.dataset.t.split('.'), st = h.ui.get(), patch = {};
          if (path[0] === 'strips') { patch.strips = {}; patch.strips[path[1]] = !st.strips[path[1]]; }
          else { patch.panes = {}; patch.panes[path[1]] = {open: !st.panes[path[1]].open}; }
          h.ui.set(patch);
        };
      });
      box.querySelector('[data-c="play"]').onclick = function () { h.state().lifecycle === 'playing' ? h.pause() : h.play(); };
      box.querySelector('[data-c="select"]').onclick = function () {
        var on = this.getAttribute('aria-pressed') !== 'true';
        // aria-pressed follows the PLAYER's report (interaction.changed), not this button's guess
        h.command({v: 1, verb: 'interaction.set', args: {select: on}});
      };
      box.querySelector('[data-c="audible"]').onclick = function () {
        win.unmuted = !win.unmuted;
        this.setAttribute('aria-pressed', win.unmuted ? 'true' : 'false');
        Audio.apply();
      };
      box.querySelector('[data-c="subs"]').onchange = function () {
        h.setParams({subs: this.value ? this.value.split(',') : []});
      };
      function sync() {
        var st = h.ui.get();
        box.querySelectorAll('[data-t]').forEach(function (b) {
          var p = b.dataset.t.split('.');
          var on = p[0] === 'strips' ? st.strips[p[1]] : (st.panes[p[1]] && st.panes[p[1]].open);
          var allowed = p[0] === 'strips' || (st.panes[p[1]] && st.panes[p[1]].allowed);
          b.hidden = !allowed; b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      }
      h.on('event', function (e) {
        if (e.type === 'ui.changed') { sync(); Session.save(); }
        if (e.type === 'playback.state') {
          var pb = box.querySelector('[data-c="play"]');
          pb.textContent = e.data.state === 'playing' ? '⏸' : '▶';
          pb.setAttribute('aria-pressed', e.data.state === 'playing' ? 'true' : 'false');
        }
        if (e.type === 'interaction.changed') box.querySelector('[data-c="select"]').setAttribute('aria-pressed', e.data.select ? 'true' : 'false');
        if (e.type === 'params.changed') {
          var sel = box.querySelector('[data-c="subs"]'), v = (e.data.subs || []).join(',');
          if (Array.prototype.some.call(sel.options, function (o) { return o.value === v; })) sel.value = v;
          Session.save();
        }
        if (e.type === 'lifecycle' && e.data.state === 'ready') {
          var t = h.state().title;
          if (t) { win.title = t + ' #' + win.id.slice(1); win.el.querySelector('.title').textContent = win.title;
                   win.el.setAttribute('aria-label', win.title); Taskbar.render(); if (WM.active === win) Inspector.show(win); }
        }
        if (e.type === 'scene.selected' && e.subject) { win.selections.unshift(e); win.selections = win.selections.slice(0, 5);
          if (WM.active === win) Inspector.show(win); }
        if (e.type === 'audio.changed') {
          // pressed = this window is heard because it was asked to be, not because it is the active one
          box.querySelector('[data-c="audible"]').setAttribute('aria-pressed', (win.unmuted && e.data.audible) ? 'true' : 'false');
        }
        bus.push({t: Date.now(), type: 'player.' + e.type, win: win.id, cause: e.cause,
                  state: e.data && e.data.state, audible: e.data && e.data.audible});
      });
      h.ready && h.ready.then(sync, function () {});
      h.mounted && h.mounted.then(sync, function () {});
    }
  };

  // ------------------------------------------------------------------------------------------ Inspector
  var Inspector = {
    show: function (win) {
      $('i-win').textContent = win ? win.title : 'no window focused';
      var body = $('i-body');
      if (!win || !win.selections.length) {
        body.innerHTML = '<p class="note">' + (win && win.handle && !win.handle.placeholder && win.handle.ui
          ? 'Turn on selection mode (⌖) in this window\'s title bar, then click an object in the picture.'
          : 'Select an object in a lesson window. Its full description appears here.') + '</p>';
        return;
      }
      body.innerHTML = '';
      win.selections.forEach(function (e, i) {
        var d = e.data || {}, o = d.object || {}, c = d.card, box = document.createElement('div');
        box.className = 'sel';
        var h3 = document.createElement('h3'); h3.textContent = (d.noun || o.name || '(nothing)') + (i ? '' : '  (latest)');
        box.appendChild(h3);
        if (c) { var ca = document.createElement('div'); ca.className = 'card-ar'; ca.dir = 'auto';
                 ca.textContent = c.label + '  ·  ' + c.ar; box.appendChild(ca); }
        var dl = document.createElement('dl');
        [['id', e.subject && e.subject.id], ['class', o.class], ['colour', o.colourName],
         ['size (m)', o.size && o.size.map(function (x) { return x.toFixed(2); }).join(' × ')],
         ['centre', o.centre && o.centre.map(function (x) { return x.toFixed(2); }).join(', ')],
         ['in shot', d.inShot === undefined ? '' : (d.inShot ? 'yes' : 'no')],
         ['distance', d.distance ? d.distance.toFixed(2) + ' m' : ''],
         ['lesson time', d.lesson ? d.lesson.t.toFixed(2) + ' s · shot ' + d.lesson.shot : ''],
         ['by', e.cause]].forEach(function (kv) {
          if (kv[1] === undefined || kv[1] === '' || kv[1] === null) return;
          var dt = document.createElement('dt'); dt.textContent = kv[0];
          var dd = document.createElement('dd'); dd.textContent = String(kv[1]); dd.style.margin = '0';
          dl.appendChild(dt); dl.appendChild(dd);
        });
        box.appendChild(dl);
        if (d.prose) { var p = document.createElement('div'); p.className = 'prose'; p.textContent = d.prose; box.appendChild(p); }
        body.appendChild(box);
      });
    }
  };

  // ------------------------------------------------------------------------------------------ Taskbar
  var Taskbar = {
    render: function () {
      var ul = $('w-list'); ul.innerHTML = '';
      WM.wins.forEach(function (w) {
        var li = document.createElement('li');
        li.className = (WM.active === w ? 'active ' : '') + (w.min ? 'min' : '');
        var t = document.createElement('span'); t.className = 't'; t.textContent = w.title; li.appendChild(t);
        var x = document.createElement('button'); x.textContent = '✕'; x.title = 'Close ' + w.title;
        x.onclick = function (e) { e.stopPropagation(); WM.close(w); };
        li.appendChild(x);
        li.onclick = function () { if (w.min) WM.restore(w); else WM.focus(w); };
        ul.appendChild(li);
      });
    }
  };

  // --------------------------------------------------------------------------------------- wiring
  function initUser() {
    var u = UserService.load();
    $('u-greet').checked = UserService.greet;
    if (u) { $('u-id').value = u.userId; $('u-first').value = u.firstName; $('u-last').value = u.lastName;
             $('u-cookie').checked = !!Store.getCookie('user'); $('u-note').textContent = 'Hello, ' + u.firstName + '.'; }
    $('u-save').onclick = function () {
      var v = UserService.validate($('u-id').value, $('u-first').value, $('u-last').value);
      if (v.error) { $('u-note').textContent = v.error; return; }
      UserService.save(v.user, $('u-cookie').checked, $('u-greet').checked);
      $('u-note').textContent = 'Saved. New video windows will greet ' + v.user.firstName + '.';
    };
    $('u-clear').onclick = function () { UserService.clear(); ['u-id', 'u-first', 'u-last'].forEach(function (i) { $(i).value = ''; });
      $('u-note').textContent = 'Cleared.'; };
    $('u-greet').onchange = function () { UserService.greet = this.checked; Store.set('greet', this.checked); };
  }

  function initAI() {
    var prov = $('ai-prov'), model = $('ai-model'), conn = $('ai-connect'), st = $('ai-state'), dot = $('ai-dot');
    function paint(s) {
      if (!s) { dot.className = 'dot'; st.textContent = 'No assistant selected. Nothing is contacted until you choose.';
                model.disabled = true; conn.disabled = true; return; }
      dot.className = 'dot' + (s.connected ? ' ok' : s.state === 'busy' ? ' busy' : s.state === 'error' || s.state === 'absent' ? ' err' : '');
      model.innerHTML = ''; (s.models || []).forEach(function (m) { var o = document.createElement('option');
        o.value = m.name; o.textContent = m.name; if (m.name === s.model) o.selected = true; model.appendChild(o); });
      model.disabled = !(s.models || []).length; conn.disabled = !s.model;
      st.textContent = s.connected ? 'Connected: ' + s.model + '. New player windows receive this assistant.'
        : (s.reason || s.state) + (s.remote ? ' (a page from the internet cannot reach Ollama on your computer)' : '');
    }
    prov.onchange = function () {
      st.textContent = 'Loading…';
      AgentHub.choose(prov.value).then(function (s) { if (AgentHub.agent) AgentHub.agent.on(paint); paint(s); },
        function (e) { st.textContent = String(e.message || e); });
    };
    model.onchange = function () { if (AgentHub.agent) AgentHub.agent.select(model.value); };
    conn.onclick = function () { if (AgentHub.agent) AgentHub.agent.connect(); };
    $('ai-own').onchange = function () { AgentHub.allowOwn = this.checked; };
    // Q9: open players keep the assistant they were created with; this re-hands the current one. A player is
    // recreated from its own snapshot, so the lesson, languages, panes and time are exactly where they were.
    $('ai-rehand').onclick = function () {
      WM.wins.slice().forEach(function (w) {
        if (w.appId !== 'lesson-player' || !w.handle || w.handle.placeholder) return;
        var snap = w.handle.snapshot();
        try { w.handle.dispose(); } catch (e) {}
        var u = UserService.snapshot();
        w.handle = Apps['lesson-player'].create(w.el.querySelector('.body'), {agent: AgentHub.lease(w.id), custom: customFor(u)}, w.args);
        w.handle.ready.then(function () { w.handle.restore(snap); }, function () {});
        w.audible = undefined;
        TitleControls.wire(w);
      });
      Audio.apply();
      bus.push({t: Date.now(), type: 'assistant.rehanded', n: WM.wins.length});
    };
  }

  function customFor(u) {
    return {values: u.user ? {'user.userId': u.user.userId, 'user.firstName': u.user.firstName,
                              'user.lastName': u.user.lastName} : {},
            enable: u.greet && u.user ? ['greeting'] : []};
  }

  function initWindows() {
    $('w-new').onclick = function () {
      if ($('w-player').checked) { var sel = $('w-lesson');
        if (!sel.value) return;                     // the catalogue has not arrived (or failed): no lesson to open
        var p = sel.value.split('/');
        WM.spawn('lesson-player', {course: p[0], video: p[1], title: sel.options[sel.selectedIndex].textContent}); }
      else WM.spawn('empty', {});
    };
    document.querySelectorAll('[data-arr]').forEach(function (b) { b.onclick = function () { WM.arrange(b.dataset.arr); }; });
    $('w-audiofocus').checked = Audio.follow;
    $('w-audiofocus').onchange = function () { Audio.follow = this.checked; Store.set('audioFollowsFocus', this.checked); Audio.apply(); };
    $('i-toggle').onclick = function () { $('os').classList.toggle('noinsp'); };
    // The lesson list from the published catalogue (the same files the site reads).
    fetch(BASE + 'courses/eam-b1/course.json').then(function (r) { return r.json(); }).then(function (c) {
      var sel = $('w-lesson'); sel.innerHTML = '';
      (c.videos || []).forEach(function (v) { var o = document.createElement('option');
        o.value = c.id + '/' + v.id; o.textContent = (v.title && v.title.en) || v.id; sel.appendChild(o); });
    }).catch(function () {
      var sel = $('w-lesson'); sel.innerHTML = '';
      var o = document.createElement('option'); o.value = '';
      o.textContent = 'No lessons: the catalogue could not be read';    // named, not a lesson that is not there
      sel.appendChild(o);
    });
  }

  // Keyboard (06 §2): Alt+Shift+N new window, Alt+Shift+C cascade, Alt+Shift+G grid, Ctrl+F4 close the active window,
  // F6 moves focus dock -> desktop -> inspector.
  document.addEventListener('keydown', function (e) {
    if (e.altKey && e.shiftKey && (e.key === 'N' || e.key === 'n')) { $('w-new').click(); e.preventDefault(); }
    else if (e.altKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) { WM.arrange('cascade'); e.preventDefault(); }
    else if (e.altKey && e.shiftKey && (e.key === 'G' || e.key === 'g')) { WM.arrange('grid'); e.preventDefault(); }
    else if (e.ctrlKey && e.key === 'F4' && WM.active) { WM.close(WM.active); e.preventDefault(); }
    else if (e.key === 'F6') {
      var zones = [$('dock'), WM.active ? WM.active.el : $('desk'), $('inspector')];
      var at = -1;
      zones.forEach(function (z, i) { if (z && z.contains(document.activeElement)) at = i; });
      var i2 = (at + 1) % zones.length;
      var target = i2 === 0 ? $('u-id') : (i2 === 1 ? (WM.active ? WM.active.el.querySelector('.bar button') : $('w-new')) : $('i-toggle'));
      if (target) target.focus();
      e.preventDefault();
    }
  });

  initUser(); initAI(); initWindows();
  window.__os = {WM: WM, UserService: UserService, AgentHub: AgentHub, Store: Store, Apps: Apps, Audio: Audio, bus: bus,
                 Session: Session};
  Session.restore();
})();
