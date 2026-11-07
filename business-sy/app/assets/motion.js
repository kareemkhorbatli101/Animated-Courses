/* motion.js — six animation verbs, and nothing else.
 *
 * A small vocabulary used everywhere beats bespoke animation per
 * renderer: the learner reads the same movement as the same meaning,
 * and there is one place to make it accessible.
 *
 * Every verb checks prefers-reduced-motion and degrades to the end
 * state immediately. Nothing here is load-bearing: if motion is off,
 * the exercise behaves identically and only looks less lively.
 */
(function (root, doc) {
  "use strict";
  function reduced() {
    try { return root.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    catch (e) { return false; }
  }
  function run(el, cls, ms, after) {
    if (!el) return;
    if (reduced()) { if (after) after(); return; }
    el.classList.add(cls);
    setTimeout(function () { el.classList.remove(cls); if (after) after(); }, ms);
  }

  var M = {
    /* a dropped chip seats itself */
    settle: function (el, after) { run(el, "m-settle", 260, after); },
    /* a reading cursor passes over something */
    sweep: function (el, after) { run(el, "m-sweep", 520, after); },
    /* a target asks to be looked at */
    pulse: function (el, after) { run(el, "m-pulse", 700, after); },
    /* a card turns over */
    reveal: function (el, after) { run(el, "m-reveal", 340, after); },
    /* the wrong word becomes the right one */
    swap: function (el, text, after) {
      if (!el) return;
      if (reduced()) { el.textContent = text; if (after) after(); return; }
      el.classList.add("m-swap-out");
      setTimeout(function () {
        el.textContent = text;
        el.classList.remove("m-swap-out");
        el.classList.add("m-swap-in");
        setTimeout(function () { el.classList.remove("m-swap-in"); if (after) after(); }, 220);
      }, 200);
    },
    /* a number rolls up to its value */
    count: function (el, to, ms) {
      if (!el) return;
      if (reduced()) { el.textContent = String(to); return; }
      var from = parseFloat(el.textContent) || 0, t0 = Date.now(), dur = ms || 480;
      (function step() {
        var p = Math.min(1, (Date.now() - t0) / dur);
        el.textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
        if (p < 1) root.requestAnimationFrame(step);
      })();
    },
    reduced: reduced
  };
  root.Motion = M;
})(window, document);
