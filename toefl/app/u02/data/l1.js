/* Unit 2 · Climate and Prediction — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u02-l1", unit: "u02", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a climate projection",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words that do specific work in this subject. Two of them are often confused, and the article in Lesson 5 turns on the difference.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 prediction</b> — a claim about what <i>will</i> happen",
          "<b>2 projection</b> — what would follow <i>if</i> a given scenario held",
          "<b>3 scenario</b> — one set of assumptions about emissions and policy",
          "<b>4 emissions</b> — the gases released, usually measured per year",
          "<b>5 trend</b> — the direction once year-to-year noise is removed",
          "<b>6 average</b> — the mean across a period, often thirty years",
          "<b>7 range</b> — the span between the lowest and highest result",
          "<b>8 uncertainty</b> — how wide that span is, stated honestly"
        ] }] },
        after: "<p>1 and 2 are the pair. A projection is conditional; a prediction is not.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A p___ says what would follow if a given scenario held.", answer: "projection", given: [0, 1, 2],
            why: "<i>Projection</i>, not prediction: it carries an <i>if</i>." },
          { text: "Each s___ makes different assumptions about policy.", answer: "scenario", given: [0, 1],
            why: "<i>Scenario</i> = one named set of assumptions." },
          { text: "Once the noisy years are removed, the t___ is clear.", answer: "trend", given: [0, 1],
            why: "<i>Trend</i> = direction over time, not any single year." },
          { text: "A wide r___ between the models is not a weakness; it is the uncertainty, stated.", answer: "range", given: [0, 1],
            why: "<i>Range</i> = lowest to highest." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -ful", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "This unit's affix. <b>-ful</b> turns a noun into an adjective meaning <i>full of</i> or <i>having</i>.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>harm → <b>harm</b>ful · power → <b>power</b>ful · meaning → <b>meaning</b>ful · doubt → <b>doubt</b>ful · use → <b>use</b>ful.<br>One <i>l</i>, always. The stress does not move.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-FUL IN ACADEMIC WRITING",
          blocks: [{ lines: [
            "A <b>meaningful</b> difference is one large enough to matter, not merely one you can measure.",
            "A <b>doubtful</b> result is one the authors themselves are not confident in.",
            "A <b>powerful</b> model is one that explains a lot with few assumptions.",
            "A <b>harmful</b> effect is one that causes damage, which is a claim, not an observation."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -ful", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the adjective. The sentence tells you which noun it is built from.",
        items: [
          { text: "The difference between the two runs was small but m___.", answer: "meaningful", given: [0, 1, 2],
            why: "<i>meaning + ful</i>: large enough to matter." },
          { text: "He called the third result d___, and said so in the paper.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i>: not confident in it." },
          { text: "A simple model that explains a great deal is a p___ one.", answer: "powerful", given: [0, 1],
            why: "<i>power + ful</i>." },
          { text: "They had to show the effect was h___ before anyone would act.", answer: "harmful", given: [0, 1],
            why: "<i>harm + ful</i>: causing damage." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Explain the difference between a prediction and a projection in one sentence each.</p>" } }
    ]
  };
})();
