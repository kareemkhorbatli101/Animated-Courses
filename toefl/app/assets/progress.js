/* progress.js — per-browser progress. Namespaced, and safe when storage is off. */
(function (root) {
  "use strict";
  var KEY = "toefl.v1";
  function read() {
    try { return JSON.parse(root.localStorage.getItem(KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function write(o) {
    try { root.localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }
  root.Progress = {
    mark: function (pageId, exId) {
      var o = read();
      o.done = o.done || {};
      o.done[pageId + "/" + exId] = 1;
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
    clear: function () { write({}); }
  };
})(window);
