/* course.js — which course this is. See business-sy/app/assets/course.js for
 * why this file exists: ten engine sites keep state in localStorage, and two
 * courses on one origin would otherwise share theme, progress, flashcards,
 * drafts and the chosen voice.
 *
 * `ns` keeps this course's existing prefix, so no learner's stored progress
 * is orphaned by the change.
 */
(function (root) {
  "use strict";
  root.COURSE = {
    id: "toefl-2026",
    ns: "toefl.",
    title: "TOEFL iBT 2026",
    cefr: ["A1", "C2"]
  };
})(window);
