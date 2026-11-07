/* spec.js — the specification this course is measured against, as data.
 *
 * Source: Cambridge Assessment English, "Business English Certificates
 * Handbook for teachers", Copyright (c) UCLES 2019, ref CER/3515/V1/APR19.
 * See ../research/baseline.md for the figures extracted verbatim.
 *
 * READ THIS BEFORE TRUSTING A NUMBER HERE.
 *
 * The Business English Certificates are WITHDRAWN - final sessions were
 * reported as December 2023 (computer-based) and June 2024 (paper-based),
 * and Cambridge's own format pages for them now sit under "old-business-*".
 * The handbook is therefore used as a STRUCTURAL and PEDAGOGICAL reference
 * for task types, item counts and text lengths. It is not a live standard
 * and this course does not prepare a learner for an exam they can sit.
 *
 * Every field carries its provenance:
 *
 *   source: "bec-2019"  the handbook publishes this figure
 *   source: "course"    this course's own decision, published by nobody
 *
 * The QA gate reads this file. Nothing here is a guess: if a figure is
 * unknown it is null, not invented. Where Cambridge publishes no figure
 * that ETS did publish - readability bands above all - the gate rule
 * becomes relative-consistency rather than an invented absolute. A number
 * with source "course" is never reported as an external requirement.
 */
(function (root) {
  "use strict";

  /* ------------------------------------------------------------ tasks ---
     The task inventory is Cambridge's, with the handbook's own part
     numbers recorded so any figure here can be traced back. `items` is
     the published question count for that part. Where B1 and B2 both run
     a task type, `items` spans both levels' counts.                     */
  var TASKS = {

    /* ---- Reading ---- */
    "read-notices": {
      section: "reading", name: "Short notices and messages",
      part: "B1 Reading Part 1", cefr: ["A2", "B1"], items: [5, 5],
      format: "five short texts, each with a 3-option multiple-choice question",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-match-text": {
      section: "reading", name: "Match questions to parts of a text",
      part: "B1 Reading Part 2 / B2 Reading Part 1", cefr: ["B1", "B2"], items: [5, 7],
      format: "a text in sections, or short informational texts, with a matching task",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-graphic": {
      section: "reading", name: "Interpreting visual information",
      part: "B1 Reading Part 3", cefr: ["A2", "B1"], items: [5, 5],
      format: "a graphic followed by questions matched to parts of it",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-rwds": {
      section: "reading", name: "Right, Wrong or Doesn't say",
      part: "B1 Reading Part 4", cefr: ["A2", "B1"], items: [7, 7],
      format: "a single text with Right / Wrong / Doesn't say responses",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-article": {
      section: "reading", name: "Read an article or report",
      part: "B1 Reading Part 5 / B2 Reading Part 3", cefr: ["B1", "B2"], items: [6, 6],
      format: "a single text with 3- or 4-option multiple-choice questions",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-missing-sentences": {
      section: "reading", name: "Put the missing sentences back",
      part: "B2 Reading Part 2", cefr: ["B2", "B2"], items: [5, 5],
      format: "a single text with sentence-length gaps",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-cloze": {
      section: "reading", name: "Choose the word for the gap",
      part: "B1 Reading Part 6 / B2 Reading Part 4", cefr: ["B1", "B2"], items: [12, 15],
      format: "a gapped text with a multiple choice for each gap",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-proofread": {
      section: "reading", name: "Find the unnecessary word",
      part: "B2 Reading Part 5", cefr: ["B2", "B2"], items: [12, 12],
      format: "a short text in which some lines carry one word too many",
      max: 1, ai: false, source: "bec-2019"
    },
    "read-note-transfer": {
      section: "reading", name: "Transfer information to a form",
      part: "B1 Reading Part 7", cefr: ["A2", "B1"], items: [5, 5],
      format: "two short input texts, e.g. an email and a memo, then a form to complete",
      max: 1, ai: false, source: "bec-2019"
    },

    /* ---- Writing ---- */
    "write-internal": {
      section: "writing", name: "Write an internal message",
      part: "B1 Writing Part 1 / B2 Writing Part 1", cefr: ["B1", "B2"], items: [1, 1],
      format: "a note, message, memo or email, from a rubric only",
      words: { B1: [30, 40], B2: [40, 50] },
      max: 5, ai: true, source: "bec-2019"
    },
    "write-correspondence": {
      section: "writing", name: "Write correspondence, a report or a proposal",
      part: "B1 Writing Part 2 / B2 Writing Part 2", cefr: ["B1", "B2"], items: [1, 1],
      format: "business correspondence from an input text and content points; at B2 also a short report or proposal",
      words: { B1: [60, 80], B2: [120, 140] },
      max: 5, ai: true, source: "bec-2019"
    },

    /* ---- Listening ---- */
    "listen-extracts": {
      section: "listening", name: "Short extracts",
      part: "B1 Listening Part 1", cefr: ["A2", "B1"], items: [8, 8],
      format: "eight short conversations or monologues, not linked, each heard twice",
      seconds: [15, 30], max: 1, ai: false, source: "bec-2019"
    },
    "listen-note-conversation": {
      section: "listening", name: "Note completion from a conversation",
      part: "B1 Listening Part 2", cefr: ["B1", "B1"], items: [7, 7],
      format: "a conversation, heard twice",
      seconds: [90, 90], max: 1, ai: false, source: "bec-2019"
    },
    "listen-note-monologue": {
      section: "listening", name: "Note completion from a monologue",
      part: "B1 Listening Part 3 / B2 Listening Part 1", cefr: ["B1", "B2"], items: [7, 12],
      format: "a monologue, or three short monologues or dialogues, heard twice",
      seconds: [60, 150], max: 1, ai: false, source: "bec-2019"
    },
    "listen-match-monologues": {
      section: "listening", name: "Match each speaker to topic or purpose",
      part: "B2 Listening Part 2", cefr: ["B2", "B2"], items: [10, 10],
      format: "two sections of five short monologues, each section heard twice",
      seconds: null, max: 1, ai: false, source: "bec-2019"
    },
    "listen-discussion": {
      section: "listening", name: "A meeting, interview or discussion",
      part: "B1 Listening Part 4 / B2 Listening Part 3", cefr: ["B1", "B2"], items: [8, 8],
      format: "two or more interacting speakers, heard twice",
      seconds: [180, 240], max: 1, ai: false, source: "bec-2019"
    },

    /* ---- Speaking ---- */
    "speak-interview": {
      section: "speaking", name: "Answer the interlocutor",
      part: "B1 Speaking Part 1 / B2 Speaking Part 1", cefr: ["A2", "B2"], items: [1, 1],
      format: "conversation with the examiner about yourself and your work",
      seconds: [120, 180], max: 5, ai: true, source: "bec-2019"
    },
    "speak-presentation": {
      section: "speaking", name: "Give a mini-presentation",
      part: "B1 Speaking Part 2 / B2 Speaking Part 2", cefr: ["B1", "B2"], items: [1, 1],
      format: "a short talk on a business theme from prompts, with a one-minute long turn",
      seconds: [60, 60], max: 5, ai: true, source: "bec-2019"
    },
    "speak-collaborate": {
      section: "speaking", name: "Collaborative task",
      part: "B1 Speaking Part 3 / B2 Speaking Part 3", cefr: ["B1", "B2"], items: [1, 1],
      format: "two candidates reach a decision together, then answer follow-up prompts",
      seconds: [300, 300], max: 5, ai: true, source: "bec-2019"
    },

    /* ---- This course's own practice tasks ----
       Cambridge assesses all three of these, but publishes no discrete task
       for them, so nothing below may be reported as an external
       requirement. They exist because the renderers that teach sentence
       assembly, sound contrast and spaced retrieval need a budget line.  */
    "sentence-build": {
      section: "writing", name: "Build the sentence",
      part: null, cefr: ["B1", "B2"], items: null,
      format: "assemble a sentence from its parts; grammar practice below task level",
      max: 1, ai: false, source: "course"
    },
    "pronounce-pair": {
      section: "speaking", name: "Hear and say the difference",
      part: null, cefr: ["A2", "B2"], items: null,
      format: "a minimal pair, or two words a business letter confuses",
      max: 1, ai: false, source: "course"
    },
    "review": {
      section: "reading", name: "Retrieval review",
      part: null, cefr: ["B1", "B2"], items: null,
      format: "spaced retrieval of this unit and earlier units; not a scored item",
      max: 0, ai: false, source: "course"
    }
  };

  /* --------------------------------------------------------- sections ---
     Published per level. This course spans B1-B2, so both are recorded
     rather than averaged into a figure neither exam states.             */
  var SECTIONS = {
    reading:   { name: "Reading",
                 B1: { parts: 7, items: 45, minutes: [90, 90] },   /* with Writing */
                 B2: { parts: 5, items: 45, minutes: [60, 60] } },
    writing:   { name: "Writing",
                 B1: { parts: 2, items: 2,  minutes: null },        /* inside the 90 */
                 B2: { parts: 2, items: 2,  minutes: [45, 45] } },
    listening: { name: "Listening",
                 B1: { parts: 4, items: 30, minutes: null },
                 B2: { parts: 3, items: 30, minutes: null } },
    speaking:  { name: "Speaking",
                 B1: { parts: 3, items: 3,  minutes: [12, 12] },
                 B2: { parts: 3, items: 3,  minutes: [14, 14] } }
  };

  var BANDS = ["A1", "A2", "B1", "B2", "C1", "C2"];

  /* ----------------------------------------------------------- limits ---
     Each entry says who published it. A null is a figure nobody
     published, and the gate must skip the rule rather than invent one.  */
  var LIMITS = {
    /* Reading text lengths. B2 Vantage states these per part; B1 Business
       Preliminary states none, which is why `readingWordsShort` is the
       only band a short B1 text can be measured against.                */
    readingWordsShort:   [250, 350],   /* bec-2019, B2 Reading Part 1, total */
    readingWordsLong:    [450, 550],   /* bec-2019, B2 Reading Parts 2 and 3 */
    readingWordsCloze:   [200, 300],   /* bec-2019, B2 Reading Part 4, incl. gapped words */
    readingWordsProof:   [150, 200],   /* bec-2019, B2 Reading Part 5 */
    readingWordsCeiling: 550,          /* bec-2019, the longest published length */

    /* Readability. Cambridge publishes NO readability measure or band for
       any text at any level. ETS did; Cambridge does not. These stay null
       and check.js falls back to a relative-consistency rule: no passage
       may exceed the longest in its own unit by more than a stated
       margin. An invented Flesch-Kincaid band would be the one thing this
       file exists to prevent.                                           */
    fkMedium:            null,
    fkHigh:              null,

    /* Audio. The handbook gives DURATIONS, in seconds. It gives no word
       counts and no speech rate, so turning a duration into an authorable
       word count needs an assumption, and the assumption is ours: see
       `wordsPerMinuteSpoken`. The seconds are Cambridge's; any word count
       derived from them is this course's.                               */
    audioSecondsShort:   [15, 30],     /* bec-2019, B1 Listening Part 1 */
    audioSecondsMedium:  [60, 150],    /* bec-2019, B1 L2/L3 and B2 L1 */
    audioSecondsLong:    [180, 240],   /* bec-2019, B1 L4 and B2 L3 */
    audioSecondsMax:     240,          /* bec-2019, the longest published */

    /* Writing lengths, published per level and per part. */
    writeInternalWords:      { B1: [30, 40],  B2: [40, 50] },      /* bec-2019 */
    writeCorrespondenceWords:{ B1: [60, 80],  B2: [120, 140] },    /* bec-2019 */

    /* ---- this course's own, published by nobody ---- */
    wordsPerMinuteSpoken: 150,   /* course: to convert published seconds to words */
    wordsPerMinuteRead:   180,   /* course: the pace band in rl.js. Cambridge
                                    publishes no reading speed; ETS's 200 wpm
                                    was for academic prose and does not
                                    transfer to business correspondence. */
    relativeLengthMargin: 0.60   /* course: a passage may not exceed the
                                    longest in its own unit by more than
                                    60%. This replaces the readability band
                                    Cambridge does not publish. */
  };

  /* --------------------------------------------------------- scoring ---
     Published on the Cambridge English Scale for the withdrawn exams.
     Recorded for traceability; this course reports no exam score.       */
  var SCORING = {
    scale: [120, 190],
    bands: { A2: [120, 139], B1: [140, 159], B2: [160, 179], "B2+": [180, 190] },
    note: "Cambridge English Scale ranges as printed in the 2019 handbook for " +
          "the now-withdrawn Business English Certificates. This course does " +
          "not award or predict a score."
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

  /* Is this task one the handbook publishes, or one of ours? The gate
     reports the two separately so nothing of ours is ever presented as an
     external requirement. */
  function published(taskId) {
    var t = TASKS[taskId];
    return !!t && t.source === "bec-2019";
  }

  /* Words a passage of `seconds` spoken audio needs, at this course's own
     assumed rate. Returns a band, because the published durations are
     bands. */
  function wordsForSeconds(lo, hi) {
    var r = LIMITS.wordsPerMinuteSpoken / 60;
    return [Math.round(lo * r), Math.round(hi * r)];
  }

  /* Flesch-Kincaid grade level. Kept because it is a useful relative
     measure and the engine already reports it, but NOT bound to a band:
     Cambridge publishes none, so check.js uses it only to compare texts
     within a unit against each other. */
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
    task: task, bandOk: bandOk, published: published,
    wordsForSeconds: wordsForSeconds, readability: readability, syllables: syllables,
    AUTHORITY: {
      name: "Cambridge Business English Certificates Handbook for teachers",
      edition: "UCLES 2019, CER/3515/V1/APR19",
      status: "withdrawn: final sessions Dec 2023 (computer) / Jun 2024 (paper)",
      use: "structural and pedagogical reference for task types, item counts and text lengths"
    }
  };
})(window);
