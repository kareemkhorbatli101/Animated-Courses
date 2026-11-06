/* Unit 4 · Migration and the Human Past — LESSON 5 · READING
   Reading strategy: reading insets and organisational charts. Visual: flow. */
(function () {
  var PASSAGE = {
    masthead: "THE CORRIDOR THAT WAS SHUT", every: 1,
    blocks: [
      { h: "The expectation", lines: [
        "For most of the twentieth century the peopling of the Americas was explained by a single corridor that opened between two ice sheets, and the earliest sites were expected to lie along it.",
        "The expectation was reasonable and it turned out to be wrong."
      ] },
      { h: "What the dates showed", lines: [
        "Sites in southern Chile and along the Pacific coast have since been dated to periods when that corridor was still closed, which means the people who left them cannot have walked through it.",
        "The evidence that forced the revision was not a single spectacular discovery but an accumulation of ordinary ones, each individually arguable and collectively decisive."
      ] },
      { h: "Why it took twenty years", lines: [
        "Archaeologists have known about some of these sites since the nineteen seventies, and for two decades the discipline argued about them rather than accepting them.",
        "That delay is often told as a story of stubbornness, but it is better understood as the system working slowly and correctly, since a claim that overturns a settled framework ought to be examined harder than one that confirms it."
      ] }
    ],
    notes: ["corridor: the ice-free passage once thought to be the only route south"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "ARCHIVE READING ROOM", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Archive reading room. Pencils only.",
      "Bags in the lockers.",
      "One box at a time, and keep the order of the folders inside it."
    ] }],
    source: "University Special Collections"
  };

  window.PAGE = {
    id: "u04-l5", unit: "u04", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a process diagram, and read what it leaves out",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>accumulation</span> (n) a gradual build-up of many small things",
          "<span class='gloss'>decisive</span> (adj) enough to settle the matter",
          "<span class='gloss'>framework</span> (n) the set of assumptions a field currently works within"
        ] }] },
        after: "<p>The article's argument depends on the first two being held together.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader", body: "<p>Read with a purpose. Decide what you want from the text before you start.</p>" },
        options: [
          { text: "An accepted account was overturned slowly, and the slowness was defensible.", correct: true,
            why: "The headings run: the expectation, what the dates showed, why it took twenty years." },
          { text: "Archaeologists ignored evidence out of stubbornness.", why: "The third heading sets up the opposite reading." },
          { text: "The ice-free corridor never existed.", why: "The article says it opened — just later than the sites." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the idea, then the details, then the vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "An accumulation of ordinary findings overturned the corridor account, and the field's caution was reasonable.", correct: true,
                why: "Both halves are the article: what changed, and why the change took as long as it did." },
              { text: "One spectacular discovery changed the field.", why: "The article denies this explicitly." },
              { text: "Radiocarbon dating is unreliable near coasts.", why: "Not raised in this passage at all." }
            ] },
          { q: "Why can the people at those sites not have used the corridor?",
            options: [
              { text: "The sites date to periods when it was still closed.", correct: true,
                why: "Stated directly, and the logic is the article's hinge." },
              { text: "The corridor was too narrow.", why: "Width is never mentioned." },
              { text: "The sites are on the wrong continent.", why: "They are in the Americas, which is the point." }
            ] },
          { q: "In line 4, <i>each individually arguable and collectively decisive</i> means that:",
            options: [
              { text: "no single finding settles it, but together they do.", correct: true,
                why: "The two adjectives are deliberately opposed, which is why the sentence is built that way." },
              { text: "the findings contradict one another.", why: "<i>Collectively decisive</i> rules that out." },
              { text: "the findings were all disputed and remain so.", why: "<i>Decisive</i> says the dispute was settled." }
            ] },
          { q: "What would the author say about a field that accepted a framework-overturning claim immediately?",
            options: [
              { text: "It would not be applying the standard such a claim deserves.", correct: true,
                why: "The last clause says a claim that overturns ought to be examined harder than one that confirms." },
              { text: "It would be admirably open-minded.", why: "The article defends the slowness." },
              { text: "It would be behaving as archaeology did.", why: "Archaeology took twenty years." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the reading-room door.",
        text: NOTICE,
        items: [
          { q: "How many boxes may you have out at once?",
            options: [
              { text: "One.", correct: true, why: "“One box at a time”." },
              { text: "As many as you need.", why: "The card limits it." },
              { text: "It does not say.", why: "It says exactly." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "The corridor account was once reasonable.", answer: "T", line: 2,
            why: "Line 2: “The expectation was reasonable and it turned out to be wrong.”" },
          { stem: "One major discovery overturned the corridor account.", answer: "F", line: 4,
            why: "Line 4 says it was an accumulation of ordinary ones, not a single discovery." },
          { stem: "The Chilean sites were excavated by an international team.", answer: "NI", line: null,
            why: "Who excavated them is never stated." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's prefix, in the article's own register.",
        items: [
          { text: "Measuring a date and i___ it are different operations.", answer: "interpreting", given: [0, 1, 2, 3, 4],
            why: "<i>inter + pret</i>." },
          { text: "The project was i___, with geneticists on the team.", answer: "interdisciplinary", given: [0, 1, 2, 3, 4],
            why: "<i>inter + disciplinary</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Read the process diagram. Then ask what it does <i>not</i> show.",
        note: { kind: "reader",
                body: "<p>A process diagram shows order, not duration. Each arrow may stand for an hour or a decade, and the boxes are the same size whatever they cost. Read the caption for what the arrows actually mean.</p>" },
        chart: {
          kind: "flow", title: "How a published date is produced",
          sub: "Five stages. The diagram shows their order, not how long any of them takes.",
          steps: [
            { label: "Sample recovered in situ" },
            { label: "Context and layer recorded" },
            { label: "Laboratory measurement" },
            { label: "Correction applied and stated" },
            { label: "Published with its context" }
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "What does the diagram <i>not</i> tell you?",
            options: [
              { text: "How long each stage takes.", correct: true,
                why: "That is the point of the caption, and it is the standard limitation of a flow chart: equal boxes, unequal costs." },
              { text: "The order of the stages.", why: "Order is exactly what it does show." },
              { text: "That a correction is applied.", why: "Stage four states it." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find a process diagram in any textbook. Which stage really takes the longest? The diagram will not tell you.</p>" } }
    ]
  };
})();
