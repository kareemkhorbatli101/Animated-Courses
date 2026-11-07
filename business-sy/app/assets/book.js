/* book.js — the shape of the book. Structure only; no teaching content. */
(function (root) {
  "use strict";

  /* The seven blocks of every unit, in order. Step Forward's architecture,
     unchanged from the TOEFL build: the ids are identical, so every tool,
     path and filename is identical too. Only the names differ. */
  var BLOCKS = [
    { id: "l1", n: 1, kind: "lesson", name: "Vocabulary",        pages: 2 },
    { id: "l2", n: 2, kind: "lesson", name: "Writing",           pages: 2 },
    { id: "l3", n: 3, kind: "lesson", name: "Grammar",           pages: 3 },
    { id: "l4", n: 4, kind: "lesson", name: "Meetings & Calls",  pages: 3 },
    { id: "l5", n: 5, kind: "lesson", name: "Reading at Work",   pages: 3 },
    { id: "oc", n: null, kind: "work",   name: "At Work",        pages: 1 },
    { id: "tw", n: null, kind: "review", name: "Teamwork & Language Review", pages: 2 }
  ];

  /* Items per block per unit. Totals 59, of which 53 are scored: `review`
     is retrieval practice and carries max 0.

     The TASK IDS and their CEFR bands are Cambridge's (see spec.js). This
     DISTRIBUTION is the course's own: the handbook states what a whole
     exam contains, not what one unit of a twelve-unit book should, so
     spreading it across units is an editorial decision and is labelled as
     one. Across twelve units each published task type is practised in
     proportion to its weight in the exam it came from. */
  var BUDGET = {
    l1: { "read-cloze": 6, "read-notices": 2 },
    l2: { "write-internal": 1, "write-correspondence": 1, "sentence-build": 3 },
    l3: { "sentence-build": 5, "read-proofread": 3 },
    l4: { "listen-extracts": 6, "listen-note-conversation": 4, "pronounce-pair": 4 },
    l5: { "read-match-text": 2, "read-article": 3, "read-graphic": 3 },
    oc: { "listen-note-monologue": 3, "listen-discussion": 4 },
    tw: { "write-correspondence": 1, "speak-interview": 2, "review": 6 }
  };

  /* Doubled for practice volume: 118 items, 106 scored. Same shape as the
     TOEFL build, for the same reason - one pass over a task type is not
     practice, and the exam budget is a measurement, not a dose. */
  var BUDGET2 = {
    l1: { "read-cloze": 12, "read-notices": 4 },
    l2: { "write-internal": 2, "write-correspondence": 2, "sentence-build": 6 },
    l3: { "sentence-build": 10, "read-proofread": 6 },
    l4: { "listen-extracts": 12, "listen-note-conversation": 8, "pronounce-pair": 8 },
    l5: { "read-match-text": 4, "read-article": 6, "read-graphic": 6 },
    oc: { "listen-note-monologue": 6, "listen-discussion": 8 },
    tw: { "write-correspondence": 2, "speak-interview": 4, "review": 12 }
  };

  /* The twelve units.

     The grammar, affix, pronunciation and chart spine is Step Forward's, in
     its order, and is UNCHANGED from the TOEFL build: it is proven and the
     gate locks it. Only the topic each unit hangs on has moved, and each
     was chosen because that unit's grammar is native to it - `will` for
     quoting a delivery date, comparatives for procurement, the present
     perfect for status reporting, conditionals for negotiation, the passive
     for process and reports. See ../UNIT-MAP.md.

     `domain` is a contract, not a label: a scene that would work unchanged
     in any country is a scene to rewrite. */
  var UNITS = [
    { n: 1,  id: "u01", title: "Introducing the Business", field: "SME company profile", doubled: true,
      grammar: ["present and past verb forms", "yes/no questions and answers", "adjectives and adverbs"],
      affix: "dis-", pron: "sh, ch and j", chart: "line",
      work: "show that you are following a briefing",
      strategy: { writing: "one idea to a paragraph in a company description",
                  reading: "reading with a purpose; reading a trend line more than once" } },

    { n: 2,  id: "u02", title: "Plans, Quotes and Promises", field: "quotation and order confirmation", doubled: true,
      grammar: ["be going to and will", "plans, promises and predictions", "would rather + verb"],
      affix: "-ful", pron: "j and ch", chart: "pie",
      work: "disagree politely in a planning meeting",
      strategy: { writing: "writing a quotation that commits to a date",
                  reading: "understanding the labels on a revenue split" } },

    { n: 3,  id: "u03", title: "Comparing Suppliers", field: "procurement and tender comparison", doubled: true,
      grammar: ["comparatives", "superlatives"],
      affix: "-tion", pron: "v, b and f", chart: "bar",
      work: "ask for the evidence behind a supplier's claim",
      strategy: { writing: "a subject line a buyer will open",
                  reading: "reading a price comparison bar chart" } },

    { n: 4,  id: "u04", title: "Order Status and Progress", field: "logistics and order tracking", doubled: true,
      grammar: ["the present perfect", "for and since", "contractions with the present perfect"],
      affix: "inter-", pron: "two pronunciations of th", chart: "flow",
      work: "ask for help without losing face",
      strategy: { writing: "using colons in a status update",
                  reading: "reading an order-to-delivery flow" } },

    { n: 5,  id: "u05", title: "Following Up and Payment", field: "invoices and receivables", doubled: true,
      grammar: ["yes/no questions with the present perfect", "ever, already and yet", "simple past and present perfect"],
      affix: "un-", pron: "I'm, I'd and I'll", chart: "scatter",
      work: "give a helpful suggestion in a team task",
      strategy: { writing: "what each paragraph of a payment chase is for",
                  reading: "reading a scatter plot of delay against order size" } },

    { n: 6,  id: "u06", title: "Calls and Handovers", field: "reception, scheduling and shift handover", doubled: true,
      grammar: ["separable phrasal verbs", "inseparable phrasal verbs", "possessive pronouns"],
      affix: null, pron: "linking in phrasal verbs", chart: "table",
      work: "check that you have understood",
      strategy: { writing: "sequencing a handover note",
                  reading: "annotating a rota" } },

    { n: 7,  id: "u07", title: "Terms and Negotiation", field: "contract terms and discount ladders", doubled: true,
      grammar: ["real conditionals", "questions with real conditionals", "time clauses for future events"],
      affix: "-al", pron: "linking words", chart: "pie-key",
      work: "ask a procedural question at an office",
      strategy: { writing: "using because and since to justify a term",
                  reading: "reading the key to a cost breakdown" } },

    { n: 8,  id: "u08", title: "How the Business Has Changed", field: "relocation, market shift and rebuilding", doubled: true,
      grammar: ["used to", "used to in questions and answers", "the present perfect continuous"],
      affix: "re-", pron: "z and s in use (to)", chart: "pie-pair",
      work: "report a problem to a supervisor",
      strategy: { writing: "outlining before you write the change report",
                  reading: "reading the text next to a before-and-after chart" } },

    { n: 9,  id: "u09", title: "Meetings and Minutes", field: "agendas, minutes and action points", doubled: true,
      grammar: ["time clauses to describe events", "comparing time clauses", "and...too, and...not either, but"],
      affix: "-er / -or", pron: "the schwa", chart: "compare-table",
      work: "ask for directions in an unfamiliar building",
      strategy: { writing: "what the opening of a set of minutes is for",
                  reading: "using questions to organise minutes; reading a comparison table" } },

    { n: 10, id: "u10", title: "Records and Responsibility", field: "documentation, licensing and audit", doubled: true,
      grammar: ["gerunds as subjects", "gerunds and the present continuous compared", "infinitives and gerunds"],
      affix: "-ment", pron: "stressed words in sentences", chart: "line",
      work: "take a position in a discussion",
      strategy: { writing: "connecting words that show contrast; quotation marks in a policy",
                  reading: "comparing a requirement across two documents" } },

    { n: 11, id: "u11", title: "Reports and Processes", field: "quality control and inspection reports", doubled: true,
      grammar: ["the present passive", "active and passive voice", "the passive with by", "be able to + verb"],
      affix: "-ment", pron: "rising and falling intonation", chart: "bubble",
      work: "acknowledge a colleague's contribution",
      strategy: { writing: "what to avoid in a formal report",
                  reading: "paraphrasing a finding; reading an inspection infographic" } },

    { n: 12, id: "u12", title: "Clients and Proposals", field: "proposals, pitches and tenders", doubled: true,
      grammar: ["verbs + infinitives", "verbs + gerunds or infinitives"],
      affix: "word stress in nouns and verbs", pron: "homophones", chart: "pie",
      work: "help someone else understand",
      strategy: { writing: "giving examples and details in a proposal",
                  reading: "identifying what a client actually asked for" } }
  ];

  function unit(id) {
    for (var i = 0; i < UNITS.length; i++) if (UNITS[i].id === id) return UNITS[i];
    return null;
  }
  function block(id) {
    for (var i = 0; i < BLOCKS.length; i++) if (BLOCKS[i].id === id) return BLOCKS[i];
    return null;
  }
  /* Banner text, the book's own form: "LESSON 5  READING AT WORK" / "AT WORK". */
  function banner(blockId) {
    var b = block(blockId);
    if (!b) return "";
    return (b.n ? "LESSON " + b.n + "  " : "") + b.name.toUpperCase();
  }
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
    title: "Business English — Syria"
  };
})(window);
