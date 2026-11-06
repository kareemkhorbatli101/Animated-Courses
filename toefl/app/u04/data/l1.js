/* Unit 4 · Migration and the Human Past — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u04-l1", unit: "u04", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a date is, and what it rests on",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "evidence", "claim"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "site", ar: "\u0645\u0648\u0642\u0639 \u0623\u062b\u0631\u064a",
            meaning: "one place where material was left and can be excavated",
            with: ["an archaeological site", "excavate a site", "the site was occupied"],
            why: "A place, not a find. Everything else in this list is either what is in a site or what you do to one." },
          { term: "excavation", ar: "\u062a\u0646\u0642\u064a\u0628",
            meaning: "the controlled removal of that material, recorded as it goes",
            with: ["a controlled excavation", "during excavation", "the excavation report"],
            why: "<i>Controlled</i> and <i>recorded</i> are the whole word: digging without recording destroys the stratigraphy, which is most of the evidence." },
          { term: "artefact", ar: "\u0642\u0637\u0639\u0629 \u0623\u062b\u0631\u064a\u0629",
            meaning: "an object made or modified by people",
            with: ["a stone artefact", "artefacts were recovered", "an artefact assemblage"],
            why: "<i>Modified</i> matters: a pebble used as a hammer is an artefact, though nobody made it. American English writes <i>artifact</i>." },
          { term: "sediment", ar: "\u0631\u0648\u0627\u0633\u0628",
            meaning: "the layers the artefacts sit in",
            with: ["sediment layers", "the sediment above it", "sediment accumulated"],
            why: "Usually uncountable. The sediment is not the find, but it is what dates the find." },
          { term: "stratigraphy", ar: "\u0639\u0644\u0645 \u0637\u0628\u0642\u0627\u062a \u0627\u0644\u0623\u0631\u0636",
            meaning: "the order of those layers, and so of time",
            with: ["read the stratigraphy", "clear stratigraphy", "stratigraphic sequence"],
            why: "Deeper is older, unless something disturbed it. The order is the argument; destroy it and the objects are just objects." },
          { term: "radiocarbon", ar: "\u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0627\u0644\u0645\u0634\u0639\u0651",
            meaning: "a dating method using the decay of carbon-14",
            with: ["a radiocarbon date", "radiocarbon dating", "calibrated radiocarbon"],
            why: "It dates the death of something organic \u2014 not the artefact beside it, and not the event you care about. That gap is Lesson 5\u0027s argument." },
          { term: "evidence", ar: "\u062f\u0644\u064a\u0644",
            meaning: "what a claim rests on",
            with: ["strong evidence", "evidence for the claim", "the evidence suggests"],
            why: "Uncountable in academic English: <i>an evidence</i> and <i>evidences</i> are both wrong. Say <i>a piece of evidence</i>." },
          { term: "assertion", ar: "\u0627\u062f\u0651\u0639\u0627\u0621",
            meaning: "a claim with the evidence left out",
            with: ["a bare assertion", "assert without evidence", "that is an assertion"],
            why: "The pair with <i>evidence</i>, and the one the talk turns on. Calling something an assertion is not calling it false \u2014 only unsupported." }
        ],
        prompt: "Eight words this subject uses precisely. Say each meaning before you turn the card. The last two are the ones students most often blur, and the On Campus talk turns on exactly that difference.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 site</b> — one place where material was left and can be excavated",
          "<b>2 excavation</b> — the controlled removal of that material, recorded as it goes",
          "<b>3 artefact</b> — an object made or modified by people",
          "<b>4 sediment</b> — the layers the artefacts sit in",
          "<b>5 stratigraphy</b> — the order of those layers, and so of time",
          "<b>6 radiocarbon</b> — a dating method using the decay of carbon-14",
          "<b>7 evidence</b> — what a claim rests on",
          "<b>8 assertion</b> — a claim with the evidence left out"
        ] }] },
        after: "<p>Keep 7 and 8 apart. The talk in On Campus turns on exactly that difference.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "An excavation, from above ground. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "An excavation: a site hut, a signpost, a spoil heap of earth, a trench with a measuring board, a tray of finds and a recording sheet",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 2.9 },
            { p: "floor", x: 0, y: 180, sx: 10, sy: 3.9 },
            { p: "building", x: 700, y: 40,  s: 2.0 },
            { p: "tree",     x: 40,  y: 55,  s: 1.5 },
            { p: "sign",     x: 560, y: 120, s: 1.1 },
            { p: "counter",  x: 120, y: 250, sx: 3.0, sy: 1.1 },
            { p: "board",    x: 180, y: 300, s: 1.1 },
            { p: "bench",    x: 560, y: 380, sx: 3.6, sy: 1.5 },
            { p: "paper",    x: 610, y: 376, s: 0.72 },
            { p: "pen",      x: 700, y: 400, s: 0.6 },
            { p: "books",    x: 790, y: 372, s: 0.8 },
            { p: "person",   x: 330, y: 300, s: 1.6 }
          ] },
        pins: [
          { id: "p-hut",    x: 80, y: 10, tx: 77, ty: 20, w: 130 },
          { id: "p-sign",   x: 58, y: 44, tx: 60, ty: 28, w: 130 },
          { id: "p-spoil",  x: 13, y: 76, tx: 20, ty: 52, w: 150 },
          { id: "p-board",  x: 29, y: 88, tx: 23, ty: 61, w: 160 },
          { id: "p-sheet",  x: 55, y: 88, tx: 64, ty: 73, w: 150 },
          { id: "p-finds",  x: 86, y: 90, tx: 82, ty: 72, w: 150 }
        ],
        pairs: [
          { word: "site hut", pin: "p-hut",
            why: "where the records and the kettle live. <i>Site</i> is the whole place; the hut is one building on it." },
          { word: "signpost", pin: "p-sign",
            why: "an excavation that the public can reach is signed, because an unmarked trench is a hole in a field." },
          { word: "spoil heap", pin: "p-spoil",
            why: "<i>spoil</i> is the earth removed. It is a noun here, and uncountable: <i>the spoil</i>, never <i>the spoils</i>." },
          { word: "measuring board", pin: "p-board",
            why: "the scale that goes in every photograph, so that a picture of an object is also a measurement of it." },
          { word: "recording sheet", pin: "p-sheet",
            why: "the context an object was found in is recorded here. Without it the object is an ornament, not evidence." },
          { word: "finds tray", pin: "p-finds",
            why: "<i>finds</i> is plural and used as a noun: <i>the finds from trench two</i>." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "The order of the layers is the s___ of the site.", answer: "stratigraphy", given: [0, 1, 2, 3],
            why: "<i>Stratigraphy</i> — layers in order, and therefore time in order." },
          { text: "Every a___ was numbered where it lay, before it was lifted.", answer: "artefact", given: [0, 1, 2],
            why: "<i>Artefact</i>: made or modified by people." },
          { text: "The e___ took four seasons and filled two hundred boxes.", answer: "excavation", given: [0, 1, 2],
            why: "<i>excavate → excavation</i>." },
          { text: "A claim with its e___ left out is not a finding.", answer: "evidence", given: [0, 1, 2],
            why: "<i>Evidence</i> — as against an <i>assertion</i>." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        concepts: ["word", "measurement", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the dating argument in Lesson 5 is built from.",
        items: [
          { text: "Each s___ of earth was lifted separately and bagged.", answer: "sediment", given: [0, 1],
            why: "Usually uncountable: <i>the sediment</i>. <i>Sediments</i> means the different kinds." },
          { text: "The r___ date came back as eleven thousand years.", answer: "radiocarbon", given: [0, 1],
            why: "One word, no hyphen. The method is named after the isotope it measures." },
          { text: "A date on its own is a measurement; saying what it means is an i___.", answer: "interpretation", given: [0, 1],
            why: "<i>interpret → interpretation</i>, which is also this unit's prefix at work." },
          { text: "Nothing may be moved before its position has been r___.", answer: "recorded", given: [0, 1],
            why: "The passive is standard in this register, because who did the recording is not the point." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The prefix inter-", letter: "A",
        concepts: ["read", "measurement"],
        kind: "build", task: null, n: 0,

        items: [

          { root: "pret", affix: "inter-", answer: "interpret",

            why: "To interpret a date is to say what it means \u2014 a step <i>between</i> the measurement and the conclusion." },

          { root: "val", affix: "inter-", answer: "interval",

            why: "The gap <i>between</i> two points in time. The root is not a word on its own, which is true of many <i>inter-</i> words." },

          { root: "disciplinary", affix: "inter-", answer: "interdisciplinary",

            why: "Methods from more than one field brought to one question \u2014 literally working <i>between</i> disciplines." },

          { root: "national", affix: "trans-", answer: "transnational",

            why: "<i>trans-</i> means <i>across</i>, not <i>between</i>: moving over a boundary rather than working in the space between two." },

          { root: "group", affix: "intra-", answer: "intragroup",

            why: "<i>intra-</i> is the one <i>inter-</i> is most often confused with: <i>within</i> a group, not <i>between</i> groups." },

          { root: "state", affix: "pre-", answer: "prestate",

            why: "<i>pre-</i> is about time, not space: before states existed. Three prefixes, three different relations." }

        ],
        prompt: "<b>inter-</b> means <i>between</i> or <i>among</i>, and it is everywhere in academic English. Build each word \u2014 the other prefixes are here to make the choice a real one.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>inter + act → <b>inter</b>act · inter + pret → <b>inter</b>pret · inter + val → <b>inter</b>val · inter + national → <b>inter</b>national · inter + disciplinary → <b>inter</b>disciplinary.<br>Do not confuse it with <i>intra-</i>, which means <i>within</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "INTER- IN ACADEMIC WRITING",
          blocks: [{ lines: [
            "To <b>interpret</b> a date is to say what it means, which is a step beyond measuring it.",
            "An <b>interval</b> is the gap between two points in time.",
            "An <b>interdisciplinary</b> team brings methods from more than one field to the same question.",
            "Two populations that <b>interbreed</b> exchange genes; two that live side by side without doing so do not."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The prefix inter-", letter: "B",
        concepts: ["word", "measurement", "evidence"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. Each one is built with this unit's prefix.",
        items: [
          { text: "Measuring a date and i___ it are two different operations.", answer: "interpreting", given: [0, 1, 2, 3, 4],
            why: "<i>inter + pret</i>, in the <i>-ing</i> form after <i>and</i>." },
          { text: "The i___ between the two layers may be a century or a day.", answer: "interval", given: [0, 1, 2, 3, 4],
            why: "<i>inter + val</i>: the gap between." },
          { text: "The project was i___, with geneticists and archaeologists on the same team.", answer: "interdisciplinary", given: [0, 1, 2, 3, 4],
            why: "<i>inter + disciplinary</i>: between fields." },
          { text: "Genetic evidence shows the two groups i___ for several thousand years.", answer: "interbred", given: [0, 1, 2, 3, 4],
            why: "<i>inter + bred</i> — the past of <i>interbreed</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The prefix inter-", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more words with <b>inter-</b>, all of them common in a methods section.",
        items: [
          { text: "The two teams had to i___ their recording systems before merging the data.", answer: "integrate", given: [0, 1],
            why: "A trap: <i>integrate</i> comes from <i>integer</i>, whole. The <i>inte-</i> is not this unit's prefix." },
          { text: "Nobody may i___ with the trench while photography is in progress.", answer: "interfere", given: [0, 1],
            why: "<i>inter + fere</i>, from a Latin verb meaning to strike. <i>Interfere with</i>, never <i>interfere to</i>." },
          { text: "The report was written for an i___ audience, not for specialists.", answer: "international", given: [0, 1],
            why: "<i>inter + national</i>: between nations." },
          { text: "The two methods give dates that i___ at about nine thousand years.", answer: "intersect", given: [0, 1],
            why: "<i>inter + sect</i>, to cut. Two lines that cross <i>intersect</i>; so do two kinds of evidence." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The prefix inter-", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three really begin with this unit's prefix",
            options: [
              { text: "interval",   why: "<i>inter + val</i>: the space between two ramparts, originally." },
              { text: "interpret",  why: "<i>inter + pret</i>: to act as a go-between." },
              { text: "interbreed", why: "<i>inter + breed</i>: between two groups." },
              { text: "integrate", correct: true,
                why: "the odd one: it comes from <i>integer</i>, whole. The letters look the same and the meaning is unrelated." }
            ] },
          { group: "three are things a site produces",
            options: [
              { text: "artefact",  why: "an object made or modified by people." },
              { text: "sediment",  why: "the layers the artefacts sit in." },
              { text: "finds",     why: "the collective noun for what comes out of a trench." },
              { text: "assertion", correct: true,
                why: "the odd one: an assertion is something an archaeologist produces, and specifically the kind with its evidence left out." }
            ] },
          { group: "three mean the gap between two things",
            options: [
              { text: "interval", why: "in time or in space." },
              { text: "gap",      why: "the everyday word for the same idea." },
              { text: "hiatus",   why: "a gap in a sequence, and in this subject a gap in deposition." },
              { text: "horizon", correct: true,
                why: "the odd one: in archaeology a horizon is a layer, not the space between two of them. Outside the subject it is a line, which is also not a gap." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "inter- or intra-", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "<b>inter-</b> means between, <b>intra-</b> means within. One letter decides which, and in this subject the two make opposite claims. Sort these eight.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><i>Intergroup</i> conflict is between groups; <i>intragroup</i> conflict is inside one. A paper that confuses them has reported the opposite of its finding, and the only difference on the page is a single vowel.</p>" },
        bins: [
          { id: "between", label: "Between two or more", hint: "inter-" },
          { id: "within",  label: "Inside one",          hint: "intra-" }
        ],
        items: [
          { text: "international",  bin: "between", why: "between nations." },
          { text: "interbreeding",  bin: "between", why: "between two populations — which is how genes move." },
          { text: "intercontinental", bin: "between", why: "between continents, which is what a migration route is." },
          { text: "interdisciplinary", bin: "between", why: "between fields." },
          { text: "intravenous",    bin: "within",  why: "within a vein. The commonest <i>intra-</i> word in English." },
          { text: "intragroup",     bin: "within",  why: "inside one group, as against <i>intergroup</i>, which is its opposite." },
          { text: "intracellular",  bin: "within",  why: "inside a cell." },
          { text: "intrapersonal",  bin: "within",  why: "within one person. <i>Interpersonal</i> is between people, and the two are routinely swapped." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain the difference between evidence and an assertion, in one sentence.</p>" } }
    ]
  };
})();
