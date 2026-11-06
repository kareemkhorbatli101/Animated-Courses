/* Unit 7 · Markets and Choices — LESSON 5 · READING
   Reading strategy: reading the key to a pie chart. Visual: pie with key. */
(function () {
  var PASSAGE = {
    masthead: "WHEN THE MEASURE BECOMES THE TARGET", every: 1,
    blocks: [
      { h: "What an incentive is", lines: [
        "An <b>incentive</b><sup>1</sup> is simply a reason to act, and economics is largely the study of what happens when a great many people respond to one at the same time.",
        "The complication is that people respond to the incentive as they understand it, not as it was intended."
      ] },
      { h: "How a good measure goes wrong", lines: [
        "A hospital assessed on waiting times will reduce waiting times, and if the easiest route to that result is to delay entering patients into the system, some hospitals will discover that route.",
        "Nobody need be dishonest for this to happen; the measure simply becomes the target, and the thing it was supposed to represent quietly detaches from it."
      ] },
      { h: "What a good scheme specifies", lines: [
        "This is why a well designed scheme specifies not only what will be rewarded but how the reward will be verified, and why schemes designed in a hurry so often produce results that are technically correct and substantively absurd."
      ] }
    ],
    notes: ["incentive: a reason to act that is created by the rules themselves, rather than by anyone's intention"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "BURSAR'S OFFICE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Bursar office. Opening hours ten to four, closed one to two.",
      "Bring photo identification and your student number.",
      "Payment plans must be arranged before the first instalment is due."
    ] }],
    source: "Student Finance"
  };

  window.PAGE = {
    id: "u07-l5", unit: "u07", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a key before you read a chart",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>detach</span> (v) to come away from something it was joined to",
          "<span class='gloss'>verify</span> (v) to check that a claim is actually true",
          "<span class='gloss'>substantively</span> (adv) in terms of what really matters, as against the letter"
        ] }] },
        after: "<p>The last one is doing the heavy lifting in the final sentence.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader", body: "<p>Read with a purpose. The title is already an argument — decide what you expect the article to prove.</p>" },
        options: [
          { text: "Rewarding a measure changes behaviour towards the measure, not the thing.", correct: true,
            why: "The title states it and the headings move from definition, to mechanism, to remedy." },
          { text: "Hospitals are dishonest about waiting times.", why: "The article says nobody need be dishonest." },
          { text: "Measurement should be abandoned.", why: "The last heading is about designing it better." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the sentence you would quote.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "When a measure is rewarded it becomes a target and detaches from what it represented.", correct: true,
                why: "That is the second section's claim, and the first and third exist to set it up and answer it." },
              { text: "People respond to incentives dishonestly.", why: "“Nobody need be dishonest for this to happen.”" },
              { text: "Waiting times are the wrong thing to measure.", why: "Waiting times are the example, not the argument." }
            ] },
          { q: "Why does the author say nobody need be dishonest?",
            options: [
              { text: "The drift happens through ordinary responses to the rules as written.", correct: true,
                why: "The sentence is there to block the easy reading that this is a story about bad actors." },
              { text: "Because hospitals are closely supervised.", why: "Supervision is not mentioned." },
              { text: "Because the measure is usually accurate.", why: "Accuracy is not the problem; relevance is." }
            ] },
          { q: "What does a well designed scheme specify, according to the article?",
            options: [
              { text: "Both what is rewarded and how the result will be verified.", correct: true,
                why: "Stated as a pair, and <i>not only … but</i> marks the second half as the one usually missing." },
              { text: "Only what will be rewarded.", why: "That is the hurried scheme." },
              { text: "Who will be punished for failure.", why: "Punishment is never discussed." }
            ] },
          { q: "<i>Technically correct and substantively absurd</i> describes a result that:",
            options: [
              { text: "satisfies the written rule while defeating its purpose.", correct: true,
                why: "The two adverbs are deliberately opposed — the letter against what actually matters." },
              { text: "is simply miscalculated.", why: "<i>Technically correct</i> rules out an arithmetic error." },
              { text: "nobody can measure.", why: "It is measured; that is the trouble." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the office window.",
        text: NOTICE,
        items: [
          { q: "When is the office closed?",
            options: [
              { text: "Between one and two.", correct: true, why: "Stated in the opening-hours line." },
              { text: "All afternoon.", why: "It reopens at two and runs to four." },
              { text: "Before ten only.", why: "That is before it opens, which the card does not call a closure." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "People respond to an incentive as it was intended.", answer: "F", line: 2,
            why: "Line 2 says precisely the opposite: as they understand it, not as it was intended." },
          { stem: "A scheme should say how a reward will be checked.", answer: "T", line: 5,
            why: "Line 5 names verification as what a well designed scheme specifies." },
          { stem: "Most hospitals delay entering patients into the system.", answer: "NI", line: null,
            why: "The article says <i>some</i> will discover the route; it gives no proportion." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "The problem is i___ rather than personal.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i> — which is what <i>nobody need be dishonest</i> means." },
          { text: "The m___ case is the one the scheme actually changes.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart. Read the key before you read a single section.",
        note: { kind: "reader",
                body: "<p>Match each section to the <b>key</b> first. Then read the labels. Only then look at the shape — a shape without labels tells you nothing at all, and a pie is the easiest chart in the world to misread at a glance.</p>" },
        chart: {
          kind: "pie-key", title: "Where a university's income comes from",
          sub: "One institution, one year",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "Tuition fees", v: 41 },
            { name: "Research grants", v: 24 },
            { name: "Government block grant", v: 17 },
            { name: "Accommodation and catering", v: 9 },
            { name: "Donations and endowment", v: 6 },
            { name: "Other", v: 3 }
          ],
          cols: ["Source", "Share"],
          rows: [["Tuition fees","41%"],["Research grants","24%"],["Government block grant","17%"],
                 ["Accommodation and catering","9%"],["Donations and endowment","6%"],["Other","3%"]]
        },
        items: [
          { q: "If the government block grant were withdrawn entirely, what share would have to be replaced?",
            options: [
              { text: "17%", correct: true,
                why: "Reading one section off the key. The temptation is to add it to research grants, because both sound like public money — but the key names them separately." },
              { text: "41%", why: "That is tuition fees." },
              { text: "24%", why: "That is research grants, which are a different line in the key." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find a pie chart in a news story. Can you tell which section is which without the key? If not, the chart is doing less work than it appears to.</p>" } }
    ]
  };
})();
