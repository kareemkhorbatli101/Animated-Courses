/* Unit 7 · Markets and Choices — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u07-l1", unit: "u07", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name an incentive, and what it does to people",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. The last two are the pair this unit is really about.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 incentive</b> — a reason to act, built into the rules",
          "<b>2 trade-off</b> — what you give up to get something else",
          "<b>3 demand</b> — how much people will buy at a given price",
          "<b>4 supply</b> — how much will be offered at that price",
          "<b>5 scheme</b> — a designed set of rules and rewards",
          "<b>6 verify</b> — to check that a claimed result is real",
          "<b>7 measure</b> — the number you collect",
          "<b>8 target</b> — the number you are rewarded for hitting"
        ] }] },
        after: "<p>When 7 becomes 8, people start optimising the number instead of the thing. The article in Lesson 5 is about exactly that.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "An i___ is a reason to act that the rules create.", answer: "incentive", given: [0, 1, 2],
            why: "<i>Incentive</i> — the central idea of the unit." },
          { text: "Every choice has a t___: something given up for something gained.", answer: "trade", given: [0, 1],
            why: "<i>Trade-off</i>. Here only the first element is needed." },
          { text: "A good scheme says how the result will be v___.", answer: "verified", given: [0, 1],
            why: "<i>Verify</i> — and the article makes this the test of a well designed scheme." },
          { text: "Once a measure becomes a t___, people optimise the number.", answer: "target", given: [0, 1],
            why: "<i>Target</i> — the second half of the pair." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -al", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-al</b> turns a noun into an adjective. It is everywhere in economics writing.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>margin → margin<b>al</b> · season → season<b>al</b> · capital · finance → financi<b>al</b> · institution → institution<b>al</b> · nation → nation<b>al</b>.<br>Watch the spelling: <i>finance</i> drops the <i>e</i> and gains an <i>i</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-AL IN ECONOMICS WRITING",
          blocks: [{ lines: [
            "A <b>marginal</b> change is the effect of one more unit — not the total, and the two are constantly confused.",
            "A <b>seasonal</b> pattern repeats each year and must be removed before any trend is read.",
            "An <b>institutional</b> incentive belongs to the organisation, not to the individuals inside it.",
            "A <b>financial</b> cost is one measured in money, which is only one kind of cost."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -al", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the adjective. The sentence tells you which noun it is built from.",
        items: [
          { text: "The m___ cost of the next unit is what matters, not the average.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>: the effect of one more." },
          { text: "The s___ rise every December has to be removed first.", answer: "seasonal", given: [0, 1, 2],
            why: "<i>season + al</i>." },
          { text: "The problem is i___, not a matter of individual honesty.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i> — the article's own distinction." },
          { text: "A f___ cost is measured in money; others are not.", answer: "financial", given: [0, 1, 2],
            why: "<i>finance → financial</i>: the <i>e</i> goes, an <i>i</i> arrives." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence what happens when a measure becomes a target.</p>" } }
    ]
  };
})();
