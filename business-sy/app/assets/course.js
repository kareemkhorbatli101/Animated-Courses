/* course.js — which course this is.
 *
 * Everything else in assets/ is engine: it works the same whatever the
 * subject matter. This file is the one place that says which course the
 * engine is running, and it exists for one concrete reason.
 *
 * Ten places in the engine keep state in localStorage: the theme, the
 * spaced-review schedule, flashcard boxes, saved drafts, the chosen voice,
 * the interface language, reading notes. They were keyed on a literal
 * "toefl." prefix. Two courses served from one origin would therefore share
 * all of it, and a learner's progress in one would overwrite the other.
 *
 * `ns` is that prefix. Nothing else in the engine may hard-code one.
 */
(function (root) {
  "use strict";
  root.COURSE = {
    id: "bes-sy",
    ns: "bes.",
    title: "Business English — Syria",
    /* The course's own level range, in CEFR bands. Used by the gate to
       reject a scene whose declared band falls outside what this course
       claims to teach. See research/baseline.md for where the per-task
       bands come from. */
    cefr: ["B1", "B2"]
  };
})(window);
