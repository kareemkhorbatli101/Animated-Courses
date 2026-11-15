/* LearnActively - the shared account layer. ONE job, five calls, and a hard ceiling.
 *
 * WHAT IT MAY DO, and nothing else:
 *   LA.who()                  the signed-in name and colour, read from a cookie. NO NETWORK.
 *   LA.on(kind, data)         queue one event in this browser
 *   LA.flush()                send the queue
 *   LA.progress(k,v) / .get(k)   remember a place in a lesson, per course
 *   LA.bar()                  paint the account bar into #la-bar, if the page has one
 *
 * THREE RULES IT IS HELD TO BY GATES:
 *
 *  1. NOTHING IS FETCHED WHEN THE PAGE LOADS. The site's standing rule is that a course works
 *     from a folder with no server and no internet. Events queue in localStorage and go out on a
 *     timer, when the tab is hidden, or when something asks. `who()` reads a cookie, which is not
 *     a request.
 *
 *  2. THE PAGE MUST BE WHOLE WITHOUT THIS FILE. Every entry point is wrapped, nothing throws, and
 *     a gate loads one page per course family with this file BLOCKED and asserts the lesson still
 *     works. A shared file behind 1,549 pages that can break them is not a convenience.
 *
 *  3. 8,192 BYTES. Checked. The way a shared layer fails is by growing until nobody dares change
 *     it, so the ceiling is enforced rather than intended. Course logic belongs to the course.
 *
 * STORAGE KEYS are `la.acct.*`, `la.ev.*`, `la.prog.*`. They sit beside `la.gemini.*`, which the
 * assistant's keyring already owns - measured before choosing, not assumed.
 */
(function (root, doc) {
  'use strict';
  if (root.LA) { return; }

  var API = 'https://api.learnactively.com';
  var QUEUE = 'la.ev.queue';
  var PROG = 'la.prog.';
  var CAP = 500;               // events held offline before the oldest are dropped
  var BATCH = 100;

  function safeGet(k) { try { return root.localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { root.localStorage.setItem(k, v); return true; } catch (e) { return false; } }

  /* A private window, blocked site data, a thumbnail capture: every one of these can make storage
   * throw or come back empty, so nothing here assumes it worked. */
  function queue() {
    try { return JSON.parse(safeGet(QUEUE) || '[]') || []; } catch (e) { return []; }
  }
  function setQueue(q) { safeSet(QUEUE, JSON.stringify(q.slice(-CAP))); }

  function cookie(name) {
    try {
      var m = doc.cookie.match(new RegExp('(?:^|; *)' + name + '=([^;]*)'));
      return m ? decodeURIComponent(m[1]) : null;
    } catch (e) { return null; }
  }

  /* The course this page belongs to. Declared by the page, never guessed from the URL - a guess
   * is wrong exactly once, silently, and then every event from that page is misfiled. */
  function course() {
    try {
      var el = doc.documentElement;
      return (doc.body && doc.body.getAttribute('data-la-course'))
          || el.getAttribute('data-la-course') || null;
    } catch (e) { return null; }
  }

  function who() {
    var raw = cookie('la_who');
    if (!raw) { return null; }
    var bits = raw.split('|');
    return { username: bits[0] || '', colour: bits[1] || '#777' };
  }

  function on(kind, data) {
    try {
      if (!kind) { return false; }
      var d = data || {};
      var q = queue();
      q.push({
        kind: String(kind),
        course_id: d.course_id || course(),
        lesson_id: d.lesson_id || null,
        payload: d.payload || {},
        occurred_at: new Date().toISOString()
      });
      setQueue(q);
      return true;
    } catch (e) { return false; }
  }

  var sending = false;
  function flush() {
    if (sending) { return Promise.resolve(0); }
    var q = queue();
    /* No queue, or nobody signed in: there is nowhere for these to go and no reason to make a
     * request. They keep for the next visit; `occurred_at` is already stamped, which is what the
     * API's occurred_at/recorded_at split exists for. */
    if (!q.length || !who() || !root.fetch) { return Promise.resolve(0); }
    sending = true;
    var send = q.slice(0, BATCH);
    return root.fetch(API + '/events', {
      method: 'POST',
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ events: send })
    }).then(function (r) {
      if (r.status === 401) {
        /* The session ended somewhere else. Stop claiming to be signed in, and keep the events. */
        try { doc.cookie = 'la_who=; Max-Age=0; path=/; domain=.learnactively.com'; } catch (e) {}
        bar();
        return 0;
      }
      if (!r.ok) { return 0; }
      setQueue(queue().slice(send.length));
      return send.length;
    })['catch'](function () { return 0; })
      .then(function (n) { sending = false; return n; });
  }

  function progress(key, value) {
    var c = course() || 'site';
    if (arguments.length < 2) { return safeGet(PROG + c + '.' + key); }
    safeSet(PROG + c + '.' + key, String(value));
    return value;
  }
  function progressGet(key) { return progress(key); }

  function bar() {
    try {
      var host = doc.getElementById('la-bar');
      if (!host) { return false; }
      var u = who();
      host.textContent = '';
      var a = doc.createElement('a');
      a.className = u ? 'la-who' : 'la-who la-out';
      a.href = '/account/';
      if (u) {
        a.textContent = u.username;
        a.style.borderColor = u.colour;
        a.title = 'Signed in. Open your account';
      } else {
        a.textContent = 'Sign in';
        a.title = 'Sign in or create an account';
      }
      host.appendChild(a);
      return true;
    } catch (e) { return false; }
  }

  root.LA = {
    who: who, on: on, flush: flush,
    progress: progress, progressGet: progressGet,
    bar: bar, course: course, api: API
  };

  try {
    if (doc.readyState === 'loading') {
      doc.addEventListener('DOMContentLoaded', bar);
    } else { bar(); }
    /* Hidden, not unload: `unload` is unreliable on mobile and blocked by the back/forward cache,
     * so a lesson closed on a phone would keep losing its last events. */
    doc.addEventListener('visibilitychange', function () {
      if (doc.visibilityState === 'hidden') { flush(); }
    });
    root.setInterval(flush, 60000);
  } catch (e) { /* the page is whole without any of this */ }
}(window, document));
