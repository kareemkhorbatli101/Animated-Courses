/* book.js — the shape of the book. Structure only; no teaching content. */
(function (root) {
  "use strict";

  /* The seven blocks of every unit, in order. Step Forward's architecture. */
  var BLOCKS = [
    { id: "l1", n: 1, kind: "lesson", name: "Vocabulary",            pages: 2 },
    { id: "l2", n: 2, kind: "lesson", name: "Writing",               pages: 2 },
    { id: "l3", n: 3, kind: "lesson", name: "Grammar",               pages: 3 },
    { id: "l4", n: 4, kind: "lesson", name: "Everyday Conversation", pages: 3 },
    { id: "l5", n: 5, kind: "lesson", name: "Reading",               pages: 3 },
    { id: "oc", n: null, kind: "campus", name: "On Campus",          pages: 1 },
    { id: "tw", n: null, kind: "review", name: "Teamwork & Language Review", pages: 2 }
  ];

  /* Items per block per unit. Totals 59; Writing lands on the live test's 12. */
  var BUDGET = {
    l1: { "complete-the-words": 8 },
    l2: { "write-academic-discussion": 1, "build-a-sentence": 4 },
    l3: { "build-a-sentence": 6, "complete-the-words": 2 },
    l4: { "listen-choose-response": 6, "listen-conversation": 4, "listen-and-repeat": 4 },
    l5: { "read-daily-life": 4, "read-academic-passage": 4 },
    oc: { "listen-announcement": 3, "listen-academic-talk": 4 },
    tw: { "write-an-email": 1, "take-an-interview": 2, "review": 6 }
  };

  /* The twelve units. Grammar, affix, pronunciation and chart form are Step
     Forward's, in its order. Topics are TOEFL academic subjects, each chosen
     because that unit's grammar is native to it. See ../UNIT-MAP.md. */
  var UNITS = [
    { n: 1,  id: "u01", title: "How We Learn",                field: "cognitive psychology", doubled: true,
      grammar: ["present and past verb forms", "yes/no questions and answers", "adjectives and adverbs"],
      affix: "dis-", pron: "sh, ch and j", chart: "line",
      campus: "show that you are following a lecture",
      strategy: { writing: "focusing on the main idea in different paragraphs",
                  reading: "reading with a purpose; reading complex charts more than once" } },
    { n: 2,  id: "u02", title: "Climate and Prediction",      field: "earth science", doubled: true,
      grammar: ["be going to and will", "plans, promises and predictions", "would rather + verb"],
      affix: "-ful", pron: "j and ch", chart: "pie",
      campus: "disagree politely in a seminar",
      strategy: { writing: "writing a business email", reading: "understanding chart labels and text" } },
    { n: 3,  id: "u03", title: "Adaptation and Diversity",    field: "evolutionary biology", doubled: true,
      grammar: ["comparatives", "superlatives"],
      affix: "-tion", pron: "v, b and f", chart: "bar",
      campus: "ask for the evidence behind a claim",
      strategy: { writing: "writing a title for an email", reading: "reading a bar graph" } },
    { n: 4,  id: "u04", title: "Migration and the Human Past", field: "archaeology", doubled: true,
      grammar: ["the present perfect", "for and since", "contractions with the present perfect"],
      affix: "inter-", pron: "two pronunciations of th", chart: "flow",
      campus: "ask for help without losing face",
      strategy: { writing: "using colons in a formal message", reading: "reading insets and organisational charts" } },
    { n: 5,  id: "u05", title: "Exploring Space",             field: "astronomy", doubled: true,
      grammar: ["yes/no questions with the present perfect", "ever, already and yet", "simple past and present perfect"],
      affix: "un-", pron: "I'm, I'd and I'll", chart: "scatter",
      campus: "give a helpful suggestion in a group project",
      strategy: { writing: "the purpose of each paragraph in a multi-paragraph message",
                  reading: "reading scatter plots" } },
    { n: 6,  id: "u06", title: "Food, Energy and the Body",   field: "nutrition and metabolism", doubled: true,
      grammar: ["separable phrasal verbs", "inseparable phrasal verbs", "possessive pronouns"],
      affix: null, pron: "linking in phrasal verbs", chart: "table",
      campus: "check that you have understood",
      strategy: { writing: "sequencing", reading: "annotating a text" } },
    { n: 7,  id: "u07", title: "Markets and Choices",         field: "economics", doubled: true,
      grammar: ["real conditionals", "questions with real conditionals", "time clauses for future events"],
      affix: "-al", pron: "linking words", chart: "pie-key",
      campus: "ask a procedural question at an office",
      strategy: { writing: "using because and since", reading: "reading the key to a pie chart" } },
    { n: 8,  id: "u08", title: "Disease and Public Health",   field: "epidemiology", doubled: true,
      grammar: ["used to", "used to in questions and answers", "the present perfect continuous"],
      affix: "re-", pron: "z and s in use (to)", chart: "pie-pair",
      campus: "report a problem to a supervisor",
      strategy: { writing: "writing an outline", reading: "reading text near a chart" } },
    { n: 9,  id: "u09", title: "Cities and Movement",         field: "urban geography", doubled: true,
      grammar: ["time clauses to describe events", "comparing time clauses", "and...too, and...not either, but"],
      affix: "-er / -or", pron: "the schwa", chart: "compare-table",
      campus: "ask for directions on an unfamiliar campus",
      strategy: { writing: "the purpose of an introduction", reading: "using questions to organise a text; reading tables" } },
    { n: 10, id: "u10", title: "Rules, Rights and Ethics",    field: "law and philosophy", doubled: true,
      grammar: ["gerunds as subjects", "gerunds and the present continuous compared", "infinitives and gerunds"],
      affix: "-ment", pron: "stressed words in sentences", chart: "line",
      campus: "take a position in a debate",
      strategy: { writing: "connecting words that show contrast; quotation marks",
                  reading: "comparing information from more than one source" } },
    { n: 11, id: "u11", title: "How Science Works",           field: "scientific method",
      grammar: ["the present passive", "active and passive voice", "the passive with by", "be able to + verb"],
      affix: "-ment", pron: "rising and falling intonation", chart: "bubble",
      campus: "acknowledge a classmate's contribution",
      strategy: { writing: "what to avoid in formal messages", reading: "paraphrasing; reading an infographic" } },
    { n: 12, id: "u12", title: "Art, Audience and Culture",   field: "humanities and media",
      grammar: ["verbs + infinitives", "verbs + gerunds or infinitives"],
      affix: "word stress in nouns and verbs", pron: "homophones", chart: "pie",
      campus: "help someone else understand",
      strategy: { writing: "providing examples and details", reading: "identifying an author's opinion; reading sources" } }
  ];

  function unit(id) {
    for (var i = 0; i < UNITS.length; i++) if (UNITS[i].id === id) return UNITS[i];
    return null;
  }
  function block(id) {
    for (var i = 0; i < BLOCKS.length; i++) if (BLOCKS[i].id === id) return BLOCKS[i];
    return null;
  }
  /* Banner text, the book's own form: "LESSON 5  READING" / "ON CAMPUS". */
  function banner(blockId) {
    var b = block(blockId);
    if (!b) return "";
    return b.n ? "LESSON " + b.n + " " + b.name.toUpperCase() : b.name.toUpperCase();
  }
  /* The doubled budget. Every ETS task count is exactly twice the original,
     so a unit still mirrors the live test's section proportions: Reading 36,
     Listening 34, Writing 24, Speaking 12, plus 12 review. A unit is measured
     against this table once it carries `doubled: true`, and against the
     original until then, so the gate stays meaningful while the work is in
     progress rather than reporting eleven false failures. */
  var BUDGET2 = {
    l1: { "complete-the-words": 16 },
    l2: { "write-academic-discussion": 2, "build-a-sentence": 8 },
    l3: { "build-a-sentence": 12, "complete-the-words": 4 },
    l4: { "listen-choose-response": 12, "listen-conversation": 8, "listen-and-repeat": 8 },
    l5: { "read-daily-life": 8, "read-academic-passage": 8 },
    oc: { "listen-announcement": 6, "listen-academic-talk": 8 },
    tw: { "write-an-email": 2, "take-an-interview": 4, "review": 12 }
  };

  function budgetFor(unitId) {
    var u = unit(unitId);
    return (u && u.doubled) ? BUDGET2 : BUDGET;
  }
  function budgetTotal(blockId, unitId) {
    var m = (unitId ? budgetFor(unitId) : BUDGET)[blockId], t = 0;
    for (var k in m) if (m.hasOwnProperty(k)) t += m[k];
    return t;
  }
  function unitTotal(unitId) {
    return BLOCKS.reduce(function (a, b) { return a + budgetTotal(b.id, unitId); }, 0);
  }

  root.BOOK = {
    BLOCKS: BLOCKS, BUDGET: BUDGET, BUDGET2: BUDGET2, UNITS: UNITS,
    unit: unit, block: block, banner: banner, budgetFor: budgetFor,
    budgetTotal: budgetTotal, unitTotal: unitTotal,
    title: "TOEFL iBT 2026"
  };
})(window);
