/* progress.js — per-browser progress and the spaced-review schedule.
 *
 * Namespaced, and safe when storage is off: every read and write is wrapped,
 * and the book works identically when nothing can be stored (a private window,
 * blocked site data, a thumbnail capture). Nothing here is required to answer
 * an exercise; it only decides what to offer next.
 *
 * The schedule is deliberately simple, because an intricate one cannot be
 * explained to the learner, and an unexplained schedule gets ignored. Each
 * exercise you finish is due again after 1, then 3, then 7, then 16, then 35
 * days. Getting it right the first time moves it on; coming back to it after
 * failing resets it to the first interval. Those are the intervals in the
 * spacing literature the book's own Unit 1 teaches, rounded to whole days.
 */
(function (root) {
  "use strict";
  var KEY = "toefl.v1";
  var DAY = 86400000;
  var LADDER = [1, 3, 7, 16, 35];

  function read() {
    try { return JSON.parse(root.localStorage.getItem(KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function write(o) {
    try { root.localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }
  function today() { return Math.floor(Date.now() / DAY); }

  root.Progress = {
    mark: function (pageId, exId) {
      var o = read(), k = pageId + "/" + exId;
      o.done = o.done || {};
      o.done[k] = 1;
      o.sched = o.sched || {};
      var s = o.sched[k] || { step: -1 };
      s.step = Math.min(s.step + 1, LADDER.length - 1);
      s.last = today();
      s.due = s.last + LADDER[s.step];
      o.sched[k] = s;
      write(o);
    },

    /* Called when an exercise is checked and found wrong. Not a punishment:
       the point is that the item comes back tomorrow rather than in a month. */
    miss: function (pageId, exId) {
      var o = read(), k = pageId + "/" + exId;
      o.sched = o.sched || {};
      o.sched[k] = { step: 0, last: today(), due: today() + LADDER[0] };
      write(o);
    },

    isDone: function (pageId, exId) {
      var o = read();
      return !!(o.done && o.done[pageId + "/" + exId]);
    },

    countFor: function (pageId) {
      var o = read(), n = 0, k;
      if (!o.done) return 0;
      for (k in o.done) if (o.done.hasOwnProperty(k) && k.indexOf(pageId + "/") === 0) n++;
      return n;
    },

    /* Everything whose interval has elapsed, oldest first. */
    due: function () {
      var o = read(), t = today(), out = [], k;
      if (!o.sched) return out;
      for (k in o.sched) if (o.sched.hasOwnProperty(k)) {
        var s = o.sched[k];
        if (s.due !== undefined && s.due <= t) out.push({ key: k, due: s.due, step: s.step });
      }
      out.sort(function (a, b) { return a.due - b.due; });
      return out;
    },

    /* How many items are due in each unit, for the contents page. */
    dueByUnit: function () {
      var map = {};
      root.Progress.due().forEach(function (d) {
        var u = d.key.split("-")[0];            /* "u03-l5/2b" -> "u03" */
        map[u] = (map[u] || 0) + 1;
      });
      return map;
    },

    /* Plain words for the learner, because a date is not a reason. */
    nextFor: function (pageId, exId) {
      var o = read(), s = o.sched && o.sched[pageId + "/" + exId];
      if (!s || s.due === undefined) return null;
      var d = s.due - today();
      if (d <= 0) return "due now";
      if (d === 1) return "again tomorrow";
      return "again in " + d + " days";
    },

    clear: function () { write({}); }
  };
})(window);
