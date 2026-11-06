/* Unit 3 · Adaptation and Diversity — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u03-l1", unit: "u03", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what varies, and what is selected",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Four of them end in <b>-tion</b>, which is this unit's suffix and no accident: this subject names processes.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 variation</b> — the differences already present in a population",
          "<b>2 selection</b> — the differential survival of some of that variation",
          "<b>3 adaptation</b> — the outcome, after selection has acted",
          "<b>4 population</b> — the group selection acts on, never the individual",
          "<b>5 trait</b> — one measurable feature, such as beak depth",
          "<b>6 heritable</b> — passed from parent to offspring",
          "<b>7 offspring</b> — the next generation",
          "<b>8 species</b> — a group that breeds within itself"
        ] }] },
        after: "<p>Hold 1, 2 and 3 apart. They are three stages of one story, and most confusion comes from treating them as one word.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "Selection acts on a p___, never on one individual.", answer: "population", given: [0, 1, 2],
            why: "<i>Population</i> — the unit this whole subject works in." },
          { text: "A t___ such as beak depth can be measured in millimetres.", answer: "trait", given: [0, 1],
            why: "<i>Trait</i> = one measurable feature." },
          { text: "A difference only matters to selection if it is h___.", answer: "heritable", given: [0, 1, 2],
            why: "<i>Heritable</i> = passed to offspring. Without that, selection has nothing to build on." },
          { text: "The survivors bred, and their o___ had deeper beaks on average.", answer: "offspring", given: [0, 1, 2],
            why: "<i>Offspring</i> is the same in singular and plural." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -tion", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-tion</b> turns a verb into a noun naming the process or its result.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>adapt → adapt<b>ation</b> · vary → vari<b>ation</b> · select → selec<b>tion</b> · populate → popula<b>tion</b> · observe → observa<b>tion</b>.<br><b>The stress moves to the syllable before -tion.</b> <i>ADapt → adapTAtion.</i> That shift is itself tested on the reading section.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-TION AND THE STRESS SHIFT",
          blocks: [{ lines: [
            "They <b>ob</b>serve the birds every morning. → The <b>ob</b>ser<b>va</b>tion took three years.",
            "Beak depth <b>va</b>ries across the island. → The <b>va</b>ri<b>a</b>tion was present before the drought.",
            "They se<b>lect</b> for deeper beaks. → Se<b>lec</b>tion acted within one season.",
            "The species a<b>dapt</b>ed. → The a<b>dap</b>ta<b>tion</b> is an outcome, not an effort."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -tion", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the noun. The sentence tells you the verb it comes from.",
        items: [
          { text: "The v___ was already present before the drought began.", answer: "variation", given: [0, 1, 2],
            why: "<i>vary → variation</i>. The <i>y</i> becomes <i>i</i>." },
          { text: "S___ does not create anything new; it chooses among what exists.", answer: "selection", given: [0, 1],
            why: "<i>select → selection</i>." },
          { text: "A___ is best read as an outcome, not an effort.", answer: "adaptation", given: [0, 1, 2],
            why: "<i>adapt → adaptation</i>, with the stress on the third syllable." },
          { text: "Their o___ of the island lasted three decades.", answer: "observation", given: [0, 1, 2],
            why: "<i>observe → observation</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say the three-stage story aloud using <i>variation</i>, <i>selection</i> and <i>adaptation</i>, in that order.</p>" } }
    ]
  };
})();
