/* Unit 11 · How Science Works — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u11-l1", unit: "u11", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what makes a result a result",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Four take <b>-ment</b> again, as in Unit 10 — but here they belong to method rather than to law.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 measurement</b> — a quantity obtained by a stated procedure",
          "<b>2 experiment</b> — a deliberate intervention to test a claim",
          "<b>3 instrument</b> — the device the measurement is taken with",
          "<b>4 assessment</b> — a judgment of quality, made against criteria",
          "<b>5 replication</b> — repeating a study to see whether it holds",
          "<b>6 hypothesis</b> — the claim being tested",
          "<b>7 variable</b> — anything that can differ between cases",
          "<b>8 peer review</b> — assessment by others in the same field, before publication"
        ] }] },
        after: "<p>Number 5 is the article's subject, and it is the one most people assume happens more often than it does.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A result that survives r___ is worth more than one that has not been tried.", answer: "replication", given: [0, 1, 2],
            why: "<i>replicate → replication</i>." },
          { text: "The h___ is the claim the experiment was designed to test.", answer: "hypothesis", given: [0, 1, 2],
            why: "<i>Hypothesis</i> — plural <i>hypotheses</i>." },
          { text: "Any v___ that is not controlled may explain the result instead.", answer: "variable", given: [0, 1, 2],
            why: "<i>Variable</i> — anything that can differ between cases." },
          { text: "P___ review happens before publication, not after.", answer: "peer", given: [0, 1],
            why: "<i>Peer</i> = someone of equal standing in the field." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -ment, in method", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "The same suffix as Unit 10, a different vocabulary. Note how precise these four are.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>measure → measure<b>ment</b> · experiment · instru<b>ment</b> · assess → assess<b>ment</b>.<br><i>Instrument</i> is not built from a modern English verb, which is why you cannot work it out — it simply has to be learned.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-MENT IN METHOD",
          blocks: [{ lines: [
            "A <b>measurement</b> is not just a number: it is a number plus the procedure that produced it.",
            "An <b>experiment</b> intervenes. An observation does not, and the difference decides what you may conclude.",
            "An <b>instrument</b> has a precision, and reporting a figure finer than that precision is a mistake.",
            "An <b>assessment</b> is made against stated criteria, which is what separates it from an opinion."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -ment, in method", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the noun.",
        items: [
          { text: "Every m___ should be reported with its uncertainty.", answer: "measurement", given: [0, 1, 2],
            why: "<i>measure → measurement</i>." },
          { text: "An e___ intervenes; an observation only watches.", answer: "experiment", given: [0, 1, 2],
            why: "<i>Experiment</i> — and the distinction decides what can be concluded." },
          { text: "No i___ is more precise than its calibration.", answer: "instrument", given: [0, 1, 2],
            why: "<i>Instrument</i> — learned, not derived." },
          { text: "The a___ was made against four stated criteria.", answer: "assessment", given: [0, 1, 2],
            why: "<i>assess → assessment</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence why a measurement is more than a number.</p>" } }
    ]
  };
})();
