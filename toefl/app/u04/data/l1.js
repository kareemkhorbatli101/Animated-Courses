/* Unit 4 · Migration and the Human Past — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u04-l1", unit: "u04", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a date is, and what it rests on",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words this subject uses precisely. The last two are the ones students most often blur.",
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

      { id: "2a", section: 2, sectionTitle: "The prefix inter-", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>inter-</b> means <i>between</i> or <i>among</i>. It is everywhere in academic English.",
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
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain the difference between evidence and an assertion, in one sentence.</p>" } }
    ]
  };
})();
