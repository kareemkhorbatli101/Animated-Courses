/* Unit 2 · Climate and Prediction — LESSON 5 · READING
   Reading strategy: understanding chart labels and text. Data visual: pie. */
(function () {
  var PASSAGE = {
    masthead: "WHY THERE IS NEVER ONE NUMBER", every: 1,
    blocks: [
      { h: "The missing single figure", lines: [
        "A climate report almost never offers a single number, and readers who want one often take the absence of certainty as an absence of knowledge.",
        "The reasoning behind the range is worth understanding."
      ] },
      { h: "Where the width comes from", lines: [
        "A <b>projection</b><sup>1</sup> is not a forecast of what will happen; it is a statement of what would follow if a particular set of assumptions held.",
        "Those assumptions concern how much is emitted over the coming decades, which depends on decisions that have not yet been taken.",
        "Each scenario therefore produces its own curve, and the published range spans them.",
        "A second source of width is the models themselves, which represent clouds and ocean circulation somewhat differently and consequently disagree even when given identical assumptions.",
        "Narrowing that disagreement is slow work, and progress is measured in fractions of a degree."
      ] },
      { h: "What a range is not", lines: [
        "What the range does not mean is that any value within it is equally likely.",
        "The central estimates cluster, and the extremes require conditions that most researchers regard as improbable."
      ] }
    ],
    notes: ["projection: what would follow under stated assumptions, as against a prediction, which claims what will happen"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "FIELD TRIP · ESTUARY", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Field trip to the estuary.",
      "Meet at the main gate at 7:30 on Friday.",
      "Bring waterproofs and lunch. Boots are provided.",
      "Sign the list outside the lab by Wednesday."
    ] }],
    source: "Department of Earth Sciences"
  };

  window.PAGE = {
    id: "u02-l5", unit: "u02", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a range, and read the labels before the shape",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>projection</span> (n) what would follow if stated assumptions held",
          "<span class='gloss'>scenario</span> (n) one named set of assumptions",
          "<span class='gloss'>improbable</span> (adj) unlikely, though not impossible"
        ] }] },
        after: "<p>The article turns on the first of these.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three bold headings. What is it going to argue?",
        note: { kind: "reader", body: "<p>Read with a purpose. Decide what you want from the text before the first sentence.</p>" },
        options: [
          { text: "A range is a statement of knowledge, not a confession of ignorance.", correct: true,
            why: "The headings move from the missing number, to where the width comes from, to what a range is not." },
          { text: "Climate models are unreliable.",
            why: "The third heading points the other way." },
          { text: "Single numbers are easier to understand.",
            why: "Nothing in the headings is about ease of understanding." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the general idea, then for details, then for the difficult vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The range reflects real, identifiable sources of uncertainty rather than a failure to decide.", correct: true,
                why: "The article names two sources — scenarios and model differences — and then limits what a range implies." },
              { text: "Climate models should be made simpler.", why: "Simplicity is never discussed." },
              { text: "Emissions decisions have already been taken.", why: "The article says the opposite: they have not yet been taken." }
            ] },
          { q: "What is the second source of width?",
            options: [
              { text: "Models differ in how they represent clouds and ocean circulation.", correct: true,
                why: "Stated directly — and the giveaway is that they disagree <i>even when given identical assumptions</i>." },
              { text: "Different countries report differently.", why: "Reporting is not mentioned." },
              { text: "The measurements are imprecise.", why: "The article is about projection, not measurement." }
            ] },
          { q: "In line 8, <i>that disagreement</i> refers to:",
            options: [
              { text: "the difference between models given the same assumptions", correct: true,
                why: "The nearest preceding idea is the models disagreeing on identical assumptions — not the scenario range, which is a separate source." },
              { text: "the disagreement between researchers and readers",
                why: "No such disagreement is described." },
              { text: "the gap between the central estimate and the extremes",
                why: "That comes later, in the final section." }
            ] },
          { q: "What would the author say about someone who quotes the top of the range as the expected outcome?",
            options: [
              { text: "They are treating an improbable case as a likely one.", correct: true,
                why: "The last sentence says the extremes require conditions most researchers regard as improbable." },
              { text: "They are reading the report correctly.", why: "The final paragraph exists to rule this out." },
              { text: "They should use a single number instead.", why: "The whole article argues against single numbers." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card from the department noticeboard.",
        text: NOTICE,
        items: [
          { q: "What do you need to bring?",
            options: [
              { text: "Waterproofs and lunch.", correct: true, why: "Boots are provided, so they are not on your list." },
              { text: "Boots and lunch.", why: "Boots are provided." },
              { text: "Nothing — everything is provided.", why: "Two things are asked for." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p>An <b>NI</b> is not a weak <b>F</b>. If the text neither states it nor rules it out, NI is the honest mark — and the habit protects you against a distractor built on something the passage never said.</p>" },
        items: [
          { stem: "A projection depends on assumptions that are not yet settled.", answer: "T", line: 4,
            why: "Line 4: the assumptions depend on decisions that have not yet been taken." },
          { stem: "All values inside the published range are equally likely.", answer: "F", line: 8,
            why: "Line 8 says exactly the opposite." },
          { stem: "The author has worked on a climate model.", answer: "NI", line: null,
            why: "The article says nothing about the author." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix again, in the article's own register.",
        items: [
          { text: "The difference between two models can still be m___.", answer: "meaningful", given: [0, 1, 2],
            why: "<i>meaning + ful</i>: large enough to matter." },
          { text: "Most researchers are d___ about the highest figure.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i> — which is the article's own position." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart and read its key before you read anything off it.",
        note: { kind: "reader",
                body: "<p>Match each section to the key first. Then read the labels. Only then look at the shape — a shape without labels tells you nothing.</p>" },
        chart: {
          kind: "pie-key", title: "Where the emissions come from",
          sub: "One country, one year, by sector",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "Electricity and heat", v: 31 },
            { name: "Transport", v: 22 },
            { name: "Industry", v: 19 },
            { name: "Buildings", v: 12 },
            { name: "Agriculture", v: 10 },
            { name: "Waste", v: 4 },
            { name: "Other", v: 2 }
          ],
          cols: ["Sector", "Share"],
          rows: [["Electricity and heat","31%"],["Transport","22%"],["Industry","19%"],
                 ["Buildings","12%"],["Agriculture","10%"],["Waste","4%"],["Other","2%"]]
        },
        items: [
          { q: "Transport and buildings together account for:",
            options: [
              { text: "34%", correct: true, why: "22 + 12. Reading two sections and adding them is the commonest chart item on this task." },
              { text: "22%", why: "That is transport alone." },
              { text: "53%", why: "That would be electricity plus transport." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find one news article that gives a climate figure. Does it quote a range or a single number? If a single number, which end of the range is it?</p>" } }
    ]
  };
})();
