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

  /* The second academic passage: the first is about what changed, this one
     about what a graph of the change leaves out. */
  var PASSAGE2 = {
    masthead: "THE MEAN IS NOT THE POPULATION", every: 1,
    blocks: [
      { h: "What a bar conceals", lines: [
        "A bar graph of mean beak depth before and after a drought presents two numbers and conceals several thousand.",
        "Each bar is an average computed across every individual that was measured, and an average is entirely indifferent to how those individuals were arranged around it."
      ] },
      { h: "Two populations, one bar", lines: [
        "A population in which every bird has a beak of nine millimetres, and a population in which half have eight and half have ten, produce bars of identical height.",
        "They are nevertheless quite different populations, and only the second contains the variation on which selection depends.",
        "A reader who takes the bar as a description of the birds has therefore been told the one thing about them that this subject does not need."
      ] },
      { h: "What to ask of a graph", lines: [
        "The question to put to any bar is not how tall it is but what distribution it was computed from.",
        "Published work answers this with an error bar, or better by plotting the individuals themselves; a textbook figure frequently does not answer it at all."
      ] }
    ],
    notes: ["distribution: how the individual values are spread out around the average"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "MEASURING SESSION · RULES", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Calipers are now kept in the grey cabinet, not the drawer.",
      "Record every measurement in millimetres to one decimal place.",
      "Two people per tray: one measures, one writes.",
      "Return all trays before five; the room is locked at five fifteen."
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
        from: "1c",
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
        from: "1c",
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

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>In this subject the sentence that matters is usually the one that names who or what is doing the acting. Watch for a population in the subject position where an individual ought to be, and the reverse.</p>" },
        items: [
          { prompt: "Which sentence describes the mechanism rather than the outcome?",
            text: "After the drought the average beak on the island was deeper than before. No individual bird altered the shape of its own beak at any point. Birds that already had deeper beaks cracked the remaining seeds and left more offspring. The change was therefore visible within two breeding seasons.",
            answer: "Birds that already had deeper beaks cracked the remaining seeds and left more offspring.",
            why: "The other three report what was observed or what did not happen. Only this one says how the observation came about." },
          { prompt: "Which sentence states a limit on the finding?",
            text: "The beak measurements have been repeated every year since 1973. The same pattern appears after each dry season on this island. Whether it would appear on a larger island with more varied food is not known. Several teams have since looked for it elsewhere.",
            answer: "Whether it would appear on a larger island with more varied food is not known.",
            why: "<i>Is not known</i> plus a condition the study did not test. The last sentence reports activity, which is not the same as a limit." },
          { prompt: "Which sentence corrects a likely misreading?",
            text: "Textbooks often say that a species adapts to its surroundings. The phrase is compact and it is used everywhere. It puts the species in the position of something that acts, when in fact it is the thing acted upon. Replacing it costs one word: became adapted.",
            answer: "It puts the species in the position of something that acts, when in fact it is the thing acted upon.",
            why: "The first two sentences describe the phrase, the last proposes a fix. Only the third says what is wrong with it." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        from: "1c",
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, about the graph you read in 3A. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Read this one with 3A's bar graph beside you. It argues that the graph is honest about the wrong thing.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "A mean says nothing about the spread, and the spread is what this subject needs.", correct: true,
                why: "The whole article is one argument with one example: identical bars, different populations." },
              { text: "Bar graphs should not be used in biology.", why: "It asks what the bar was computed from, and recommends error bars, which is not abolition." },
              { text: "The beak measurements were inaccurate.", why: "Accuracy is never in question; the article accepts the numbers." }
            ] },
          { q: "What do the two populations in the second section have in common?",
            options: [
              { text: "Their mean beak depth, and therefore the height of their bars.", correct: true,
                why: "Nine, against half at eight and half at ten — both average nine. That identity is the article's entire demonstration." },
              { text: "The number of birds in them.", why: "No sizes are given; they could differ." },
              { text: "The amount of variation they contain.", why: "That is the one thing deliberately made different." }
            ] },
          { q: "Why does the article say only the second population matters to selection?",
            options: [
              { text: "Selection needs differences already present, and the first population has none.", correct: true,
                why: "<i>Only the second contains the variation on which selection depends</i> — and Lesson 1 made variation stage one of three." },
              { text: "The second population is larger.", why: "Size is not mentioned, and would not be the reason if it were." },
              { text: "Deeper beaks are better.", why: "Better at one thing, under one condition. The article is not making that claim." }
            ] },
          { q: "What would the author accept as a good figure?",
            options: [
              { text: "One that shows the individuals, or at least an error bar.", correct: true,
                why: "Stated at the end as the better and the acceptable answer, in that order." },
              { text: "A bar graph with the means clearly labelled.", why: "Labelling the mean more clearly does not address what the mean leaves out." },
              { text: "A table of the two means.", why: "A table of means has exactly the same problem as a bar of means." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        from: "3a",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>In this unit the wrong paraphrase is almost always the one that moves the acting from the population to the individual. It is also the one that sounds most natural, which is the problem.</p>" },
        items: [
          { source: "What changed was the composition of the population, because deeper-beaked individuals survived at a higher rate and left more offspring.",
            options: [
              { text: "The population ended up made of different birds, because the deeper-beaked ones were likelier to survive and breed.", correct: true,
                why: "Keeps the population as the thing that changed and the individuals as the thing that was selected." },
              { text: "The birds developed deeper beaks in order to survive.",
                why: "Moves the change into the individual and adds a purpose. Both are the error the article exists to correct." },
              { text: "Deeper-beaked birds became more common because the population changed.",
                why: "Reverses cause and effect: the commonness <i>is</i> the change, not its result." },
              { text: "All the birds in the population survived at a higher rate.",
                why: "<i>Differential</i> means they did not, which is the whole mechanism." }
            ] },
          { source: "A population in which every bird has a beak of nine millimetres, and a population in which half have eight and half have ten, produce bars of identical height.",
            options: [
              { text: "A uniform population and a split one can give exactly the same average, and so the same bar.", correct: true,
                why: "Keeps both populations, the identity of the average and the consequence for the graph." },
              { text: "Two populations with the same bar must contain the same birds.",
                why: "Exactly what the sentence is constructed to disprove." },
              { text: "A split population gives a taller bar than a uniform one.",
                why: "<i>Identical height</i> rules this out in two words." },
              { text: "Bars are an unreliable way to show averages.",
                why: "The bar shows the average perfectly well. The complaint is about what else the reader takes from it." }
            ] },
          { source: "The question to put to any bar is not how tall it is but what distribution it was computed from.",
            options: [
              { text: "Ask what spread of values produced the bar, rather than reading its height.", correct: true,
                why: "Keeps the <i>not … but …</i> frame, which is where the instruction lives." },
              { text: "The height of a bar is unimportant.",
                why: "The sentence redirects attention; it does not say the height means nothing." },
              { text: "Readers should calculate the distribution themselves.",
                why: "It says what to ask, not who should do the arithmetic." },
              { text: "A bar should always be replaced by a distribution.",
                why: "That is the next article's recommendation, not what this sentence says." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second notice from the teaching collection. Read it.",
        text: NOTICE2,
        items: [
          { q: "Where are the calipers kept now?",
            options: [
              { text: "In the grey cabinet.", correct: true, why: "Line 1 gives the new place and the old one, in that order." },
              { text: "In the drawer.", why: "That is where they are no longer kept." },
              { text: "On the bench.", why: "The bench is not mentioned." }
            ] },
          { q: "How should a tray be worked on?",
            options: [
              { text: "By two people, one measuring and one writing.", correct: true,
                why: "Line 3. The division of labour is the instruction, not just the number of people." },
              { text: "By one person, who measures and writes.", why: "Line 3 asks for two." },
              { text: "By as many people as are free.", why: "The rule is exactly two per tray." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        from: "5a",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>notice</b>.",
        items: [
          { stem: "Measurements should be written to the nearest whole millimetre.", answer: "F", line: 2,
            why: "Line 2 asks for one decimal place, which is finer than the nearest whole number." },
          { stem: "The room is locked fifteen minutes after the trays are due back.", answer: "T", line: 4,
            why: "Line 4 gives both times, and the fifteen minutes is the gap between them." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one graph, one habit.",
        text: { blocks: [{ lines: [
          "<b>What changed</b> — the population, not any bird in it.",
          "<b>What the bar shows</b> — the average, which two quite different populations can share.",
          "<b>What to ask</b> — what distribution was this computed from?"
        ],
        closer: { kind: "life",
          body: "<p>Find a bar chart in any news story. Does its vertical axis start at zero? If not, redraw it in your head so that it does.</p>" } }] } }
    ]
  };
})();
