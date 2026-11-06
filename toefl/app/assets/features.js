/* features.js — the engine's own declaration of what it implements.

   Many of the 52 fixes in PLAN-INTERACTIVE.md are engine behaviour, not
   per-scene content: "predict, then check" is the same mechanism on all 519
   scenes that have items, and writing `predict: true` into 519 scene objects
   would be noise that could drift out of step with the code. So the engine
   names the behaviours it actually provides here, tools/coverage.js reads this
   list, and a fix counts as done on a scene when the engine provides it AND
   the scene carries the inputs it needs.

   A name goes in this list only when the behaviour is built, benched and
   reachable by a learner. Adding a name that does nothing is the one way to
   make the coverage report lie, so it is the one thing never to do here. */
(function (root) {
  "use strict";
  root.FEATURES = [
    /* Phase 1-4, built and benched */
    "speech",        /* speech.js: speak, speakSegments, graceful failure   */
    "explainPopup",  /* explain.js: <dialog>, four panels, generated        */
    "sayable",       /* every registered kind reads itself aloud            */
    "icons",         /* icons.js: concept-keyed line art                    */
    "motion",        /* motion.js: six verbs, all reduced-motion safe       */
    "interactive6"   /* cards, build, compare, phrases, recap, annotate     */
  ];
  root.hasFeature = function (n) { return root.FEATURES.indexOf(n) >= 0; };
})(window);
