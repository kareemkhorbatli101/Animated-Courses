/* Unit 3 · Adaptation and Diversity — LESSON 5 · READING
   Reading strategy: reading a bar graph. Data visual: bar. */
(function () {
  var PASSAGE = {
    masthead: "HALF A MILLIMETRE", every: 1,
    blocks: [
      { h: "What the drought did", lines: [
        "When a drought struck a small island in the Galápagos, the finch population there changed measurably within a single season.",
        "The seeds that remained were larger and harder than those the birds normally ate, and the individuals best able to crack them were those with deeper beaks.",
        "Within two years the average beak depth in the surviving population had increased by roughly half a millimetre."
      ] },
      { h: "Why the number is larger than it looks", lines: [
        "This is a small number, and it is easy to dismiss as unimportant, but it is the clearest demonstration of <b>selection</b><sup>1</sup> ever recorded in a vertebrate.",
        "Nothing about any individual bird changed; birds do not grow deeper beaks because conditions are hard."
      ] },
      { h: "What actually changed", lines: [
        "What changed was the composition of the population, because deeper-beaked individuals survived at a higher rate and left more offspring.",
        "The distinction matters more than it may appear, because the commonest misunderstanding of adaptation treats it as something an organism does rather than something that happens to a population."
      ] }
    ],
    notes: ["selection: the differential survival of variation that is already present"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "SPECIMEN HANDLING", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Specimen handling. Wear gloves at all times.",
      "Return every tray to its numbered slot before you leave.",
      "Do not move labels between specimens, for any reason."
    ] }],
    source: "Museum of Natural History, teaching collection"
  };

  window.PAGE = {
    id: "u03-l5", unit: "u03", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a bar graph, and read what it is a graph of",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>vertebrate</span> (n) an animal with a backbone",
          "<span class='gloss'>composition</span> (n) what a group is made up of",
          "<span class='gloss'>differential</span> (adj) different for different members of a group"
        ] }] },
        after: "<p>The third one is the key to the whole article.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings. What will it argue?",
        note: { kind: "reader", body: "<p>Read with a purpose. The headings of a well-made article are its argument in miniature.</p>" },
        options: [
          { text: "A tiny measured change is important because of what it proves about populations.", correct: true,
            why: "The headings run: what happened, why the number is larger than it looks, what actually changed." },
          { text: "Finches are unusually fast to evolve.", why: "Speed is a detail, not the argument." },
          { text: "Droughts are becoming more common.", why: "The article never discusses drought frequency." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the idea, then the details, then the vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "A half-millimetre change matters because it shows selection acting on a population.", correct: true,
                why: "The article concedes the number is small and then explains why it is nonetheless the clearest demonstration there is." },
              { text: "Finches can grow deeper beaks when food is hard.", why: "The article denies this in so many words." },
              { text: "Droughts reduce the size of seeds.", why: "The seeds that <i>remained</i> were larger, not smaller." }
            ] },
          { q: "By how much did average beak depth increase?",
            options: [
              { text: "About half a millimetre, within two years.", correct: true, why: "Both the amount and the period are stated." },
              { text: "About half a centimetre.", why: "Ten times too large." },
              { text: "The article does not say.", why: "It gives the figure twice, in effect." }
            ] },
          { q: "In line 6, <i>Nothing about any individual bird changed</i> is there to:",
            options: [
              { text: "rule out the idea that birds responded by growing.", correct: true,
                why: "The next clause makes it explicit: birds do not grow deeper beaks because conditions are hard." },
              { text: "say the measurements were unreliable.", why: "Reliability is never questioned." },
              { text: "introduce a second study.", why: "There is only one study here." }
            ] },
          { q: "What would the author say about the sentence <i>the finches adapted to the drought</i>?",
            options: [
              { text: "It describes the outcome in the grammar of an action.", correct: true,
                why: "The final sentence names exactly this error: treating adaptation as something an organism does." },
              { text: "It is a precise summary of the study.", why: "The last paragraph exists to rule that out." },
              { text: "It overstates how much the beaks changed.", why: "The author's objection is about mechanism, not size." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card on the lab door.",
        text: NOTICE,
        items: [
          { q: "What must you never do?",
            options: [
              { text: "Move a label from one specimen to another.", correct: true, why: "“for any reason” makes it the absolute rule on the card." },
              { text: "Wear gloves.", why: "Gloves are required, not forbidden." },
              { text: "Return a tray to its slot.", why: "That is required too." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "The seeds left after the drought were harder than usual.", answer: "T", line: 2,
            why: "Line 2: larger and harder than those the birds normally ate." },
          { stem: "Individual birds grew deeper beaks during the drought.", answer: "F", line: 5,
            why: "Line 5 denies exactly this." },
          { stem: "The study was funded by a museum.", answer: "NI", line: null,
            why: "Funding is never mentioned." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's own words.",
        items: [
          { text: "What changed was the c___ of the population.", answer: "composition", given: [0, 1, 2],
            why: "<i>compose → composition</i>." },
          { text: "A___ happens to a population, not to an animal.", answer: "adaptation", given: [0, 1, 2],
            why: "<i>adapt → adaptation</i> — the article's closing point." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the graph. Read the axis label before you read the bars.",
        note: { kind: "reader",
                body: "<p>With a bar graph, read the vertical axis first — what is measured, and in what units. A bar chart whose axis starts above zero exaggerates every difference on it. This one starts at zero.</p>" },
        chart: {
          kind: "bar", title: "Mean beak depth, before and after the drought",
          sub: "One island population, four seasons",
          ylabel: "mm", ymax: 12,
          groups: ["Before the drought", "After"],
          bars: [
            { name: "1976", v: 9.4, group: 0 },
            { name: "1977", v: 9.5, group: 0 },
            { name: "1978", v: 10.0, group: 1 },
            { name: "1979", v: 10.1, group: 1 }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Season", "Mean beak depth (mm)"],
          rows: [["1976","9.4"],["1977","9.5"],["1978","10.0"],["1979","10.1"]]
        },
        items: [
          { q: "What does the graph show about the change?",
            options: [
              { text: "It is small on the axis, and it happens between 1977 and 1978.", correct: true,
                why: "Both halves matter: the bars are nearly the same height, and the step falls between the two groups. That is what half a millimetre looks like." },
              { text: "Beak depth doubled.", why: "9.4 to 10.1 is a change of about 7 per cent." },
              { text: "The change happened between 1978 and 1979.", why: "Those two are almost identical; the step is earlier." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find a bar chart in any news story. Does its vertical axis start at zero? If not, redraw it in your head so that it does.</p>" } }
    ]
  };
})();
