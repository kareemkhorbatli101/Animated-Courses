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
    "interactive6",  /* cards, build, compare, phrases, recap, annotate     */

    /* Phase 5, reading and listening (rl.js) */
    "paceBand",      /* F8  the ETS pace for this passage, filling as you read */
    "notepad",       /* F15 note-taking on every listening scene, persisted  */
    "transcriptAfter",/* F12 transcript built from audio.lines, on review only */
    "slowReplay",    /* F13 0.8x, unlocked by an attempt                     */
    "portraits",     /* F14 the speaking portrait lights as their line plays */
    "lineCite",      /* F6  every line numbered and clickable where cited    */
    "evidenceFirst", /* F9  True and False wait for a citation; NI does not  */
    "dictationDiff", /* F17 word-aligned comparison, shown in place          */
    "shadow",        /* F16 speak along with the model; record where allowed */
    "glossaryRail",  /* F7  the gloss opens where the word is, inline        */

    /* Phase 6, writing and speaking (ws.js) */
    "sideBySide",    /* F28 the model's sentences, each job named            */
    "checklistPoints",/* F29 a tick must find the sentence that earns it     */
    "wordRing",      /* F30 word count as a ring, read at a glance           */
    "frames",        /* F31 sentence shapes inserted at the cursor           */
    "bandRing",      /* F32 countdown with what a good answer is doing now   */
    "modelAudio",    /* F33 the model answer spoken, not only written        */
    "lengthCheck",   /* F34 your length against the model's                  */

    /* Phase 6, grammar (gram.js) */
    "animateFix",    /* F25 the correction lands in the sentence, and is said */
    "ruleBuilds",    /* F24 the rule assembled from your own right answers   */
    "functionColour",/* F23 tiles coloured by the job they do                */
    "tileWhy",       /* F27 a spare tile explains itself when you reach for it */
    "stressMarks",   /* F21 which syllable carries the stress, shown         */

    /* Phase 7, the cross-cutting learning layer (learn.js) */
    "hints",         /* F35 three levels, none of them the answer            */
    "predict",       /* F42 your guess beside your score                     */
    "selfExplain",   /* F44 your words for why the right answer is right     */
    "mistakeLog",    /* F37 the item kept, not the topic                     */
    "resurfaceItem", /* F51 and brought back as itself                       */
    "calibration",   /* F52 where you were confident and wrong               */
    "worked",        /* F40 the first item done, with the thinking shown     */
    "fade",          /* F43 and withdrawn as the unit goes on                */
    "askWhy",        /* F45 asked before the rationales are handed over      */
    "audioFiles",    /* F39 a recording is looked up by the line it speaks   */
    "arabicUI",      /* F36 chrome in Arabic; the English taught stays English */
    "segments",      /* F49 a long talk offered in parts, as well as whole   */
    "signalOnReview",/* F47 where the answer came from, marked after only    */
    "triage",        /* F22 a card you did not have comes back two cards later */
    "paraSpine",     /* F10 which paragraph each question draws on           */
    "autopsy"        /* F11 the word in the passage a wrong option misreads   */
  ];
  root.hasFeature = function (n) { return root.FEATURES.indexOf(n) >= 0; };
})(window);
