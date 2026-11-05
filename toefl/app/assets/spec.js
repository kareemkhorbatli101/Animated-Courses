/* spec.js — the ETS TOEFL iBT 2026 blueprint, as data.
 *
 * Source: ETS, "TOEFL iBT Test Blueprint and Specifications Document" (2026),
 * and ets.org/toefl/test-takers/ibt/about/content.html. Figures are the
 * published ones; see ../research/baseline.md for the verbatim extracts.
 *
 * The QA gate reads this. Nothing here is a guess: if a field is unknown it is
 * null, not invented.
 */
(function (root) {
  "use strict";

  var TASKS = {
    /* ---- Reading: 50 items, 18-21 min, 1 pt each ---- */
    "complete-the-words": {
      section: "reading", name: "Complete the Words",
      cefr: ["B1", "C1+"], items: [30, 30], context: ["academic"], max: 1, ai: false
    },
    "read-daily-life": {
      section: "reading", name: "Read in Daily Life",
      cefr: ["A1", "C1"], items: [5, 15], context: ["social"], max: 1, ai: false
    },
    "read-academic-passage": {
      section: "reading", name: "Read an Academic Passage",
      cefr: ["B1", "C2"], items: [5, 15], context: ["academic"], max: 1, ai: false
    },

    /* ---- Listening: 47 items, 7 min lower / 11 min upper, 1 pt each ---- */
    "listen-choose-response": {
      section: "listening", name: "Listen and Choose a Response",
      cefr: ["A1", "B2"], items: [15, 19], context: ["social"], max: 1, ai: false
    },
    "listen-conversation": {
      section: "listening", name: "Listen to a Conversation",
      cefr: ["A2", "C1"], items: [10, 10], context: ["social"], max: 1, ai: false
    },
    "listen-announcement": {
      section: "listening", name: "Listen to an Announcement",
      cefr: ["A2", "C1"], items: [6, 10], context: ["navigational"], max: 1, ai: false
    },
    "listen-academic-talk": {
      section: "listening", name: "Listen to an Academic Talk",
      cefr: ["A2", "C2"], items: [8, 16], context: ["academic"], max: 1, ai: false
    },

    /* ---- Writing: 12 items, 23 min ---- */
    "build-a-sentence": {
      section: "writing", name: "Build a Sentence",
      cefr: ["A1", "C2"], items: [10, 10], context: ["social"], max: 1, ai: false
    },
    "write-an-email": {
      section: "writing", name: "Write an Email",
      cefr: ["B1", "C2"], items: [1, 1], context: ["navigational"], max: 5, ai: true
    },
    "write-academic-discussion": {
      section: "writing", name: "Write for an Academic Discussion",
      cefr: ["B1", "C2"], items: [1, 1], context: ["academic"], max: 5, ai: true
    },

    /* ---- Speaking: 11 items, 8 min ---- */
    "listen-and-repeat": {
      section: "speaking", name: "Listen and Repeat",
      cefr: ["A1", "C2"], items: [7, 7], context: ["navigational"], max: 5, ai: true
    },
    "take-an-interview": {
      section: "speaking", name: "Take an Interview",
      cefr: ["A1", "C2"], items: [4, 4], context: ["navigational"], max: 5, ai: true
    }
  };

  var SECTIONS = {
    reading:   { name: "Reading",   items: 50, minutes: [18, 21] },
    listening: { name: "Listening", items: 47, minutes: [7, 18] },
    writing:   { name: "Writing",   items: 12, minutes: [23, 23] },
    speaking:  { name: "Speaking",  items: 11, minutes: [8, 8] }
  };

  var BANDS = ["A1", "A2", "B1", "B2", "C1", "C1+", "C2"];

  /* Limits the spec states, which bound authoring. */
  var LIMITS = {
    readingWordsEasy:    [15, 50],    /* "Easier texts typically contain 15-50 words" */
    readingWordsComplex: [0, 200],    /* "more complex texts may extend to 200 words" */
    fkMedium:            [7.4, 10.5],
    fkHigh:              [10.5, 20.0],
    audioBriefSyllables: 6,           /* "no longer than six stressed syllables" */
    audioIntermediate:   [35, 100],
    audioExtendedMax:    250,
    emailWordsMin:       null,        /* ETS publishes no minimum */
    discussionWordsMin:  100          /* widely advised; ours, not ETS's */
  };

  /* Scoring, verbatim from ETS. */
  var SCORING = {
    scale: [1, 6],
    overall: "average of all four sections, rounded to the nearest half band",
    transition: "a comparable overall score on the 0-120 scale for two years after January 2026"
  };

  function task(id) { return TASKS[id] || null; }

  function bandIndex(b) { return BANDS.indexOf(b); }

  /* Is `cefr` inside the published range for this task? */
  function bandOk(taskId, cefr) {
    var t = TASKS[taskId];
    if (!t) return false;
    var lo = bandIndex(t.cefr[0]), hi = bandIndex(t.cefr[1]), i = bandIndex(cefr);
    return i >= 0 && lo >= 0 && hi >= 0 && i >= lo && i <= hi;
  }

  /* Flesch-Kincaid grade level. Used to hold passages inside ETS's bands. */
  function syllables(word) {
    var w = String(word).toLowerCase().replace(/[^a-z]/g, "");
    if (!w) return 0;
    if (w.length <= 3) return 1;
    w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
    var m = w.match(/[aeiouy]{1,2}/g);
    return m ? m.length : 1;
  }
  function readability(text) {
    var t = String(text).replace(/\s+/g, " ").trim();
    if (!t) return null;
    var sent = t.split(/[.!?]+(?:\s|$)/).filter(function (x) { return x.trim().length; });
    var words = t.split(/\s+/).filter(function (x) { return /[a-z]/i.test(x); });
    if (!sent.length || !words.length) return null;
    var syl = words.reduce(function (a, w) { return a + syllables(w); }, 0);
    return {
      words: words.length,
      sentences: sent.length,
      fk: 0.39 * (words.length / sent.length) + 11.8 * (syl / words.length) - 15.59
    };
  }

  root.SPEC = {
    TASKS: TASKS, SECTIONS: SECTIONS, BANDS: BANDS, LIMITS: LIMITS, SCORING: SCORING,
    task: task, bandOk: bandOk, readability: readability, syllables: syllables
  };
})(window);
