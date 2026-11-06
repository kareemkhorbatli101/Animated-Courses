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

  /* The second academic passage: the first is about a route, this one about
     what a date is actually a date OF. */
  var PASSAGE2 = {
    masthead: "WHAT A DATE IS A DATE OF", every: 1,
    blocks: [
      { h: "The measurement", lines: [
        "A radiocarbon determination measures how much carbon-14 remains in a sample, and from that it calculates when the organism that produced the sample stopped exchanging carbon with the atmosphere.",
        "That moment is the death of the organism, and it is the only thing the method measures."
      ] },
      { h: "The inference", lines: [
        "What an archaeologist wants to know is when people were present, and these two questions coincide only when the sample and the activity are genuinely contemporary.",
        "A piece of driftwood burned on a beach may have died two centuries before anybody picked it up, and a date obtained from it is therefore a correct measurement of the wrong event.",
        "The technical name for this gap is the old wood problem, and it is one of several reasons that a single determination is treated with caution."
      ] },
      { h: "Why the gap is often invisible", lines: [
        "Nothing in the number itself reveals the discrepancy, because the laboratory reports the age of the sample with its stated uncertainty and makes no claim at all about the activity.",
        "The responsibility for the inference remains with the excavator, and the clue to whether it was taken seriously lies in the record of what the sample was and where it lay, not in the date."
      ] }
    ],
    notes: ["determination: the laboratory's term for a single dating result, with its stated uncertainty"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "ARCHIVE · ORDERING BOXES", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Boxes must be ordered by four o'clock the day before.",
      "Each order needs a supervisor's name.",
      "You may hold three boxes at a time, no more.",
      "Orders placed on Friday arrive on Monday."
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
        from: "1c",
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
        from: "1c",
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

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This subject writes a great deal in the passive, which hides who did what. The sentence worth finding is often the one that puts an agent back in.</p>" },
        items: [
          { prompt: "Which sentence gives the reason, rather than the finding or the method?",
            text: "Fourteen samples were submitted from the lowest layer. Twelve returned dates within two centuries of each other. The remaining two were several thousand years older, because both were fragments of wood that had been reused as fuel. The two outliers were excluded from the published mean.",
            answer: "The remaining two were several thousand years older, because both were fragments of wood that had been reused as fuel.",
            why: "Only this sentence contains a <i>because</i>. The last sentence reports what was done about it, which is a consequence rather than a reason." },
          { prompt: "Which sentence states what the evidence cannot show?",
            text: "The coastal sites are securely dated to a period when the corridor was closed. This rules out the inland route for the people who left them. It does not establish how they travelled, since no boats have been recovered anywhere along that coast. Several teams are now surveying the submerged shoreline.",
            answer: "It does not establish how they travelled, since no boats have been recovered anywhere along that coast.",
            why: "The job is naming a limit. <i>Rules out</i> is a positive finding and the last sentence is activity." },
          { prompt: "Which sentence puts an agent back into a passive account?",
            text: "The folder was catalogued in 1974 and has not been consulted since. Its contents were described in two lines. A doctoral student found the survey photographs inside it last winter. They have now been digitised.",
            answer: "A doctoral student found the survey photographs inside it last winter.",
            why: "The only active sentence with a human subject. The other three are passives in which nobody does anything." }
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, about what a radiocarbon date actually tells you. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Read this one beside the diagram in 3A. The diagram shows the method; this article is about the one step the diagram does not contain.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The method dates the sample, and connecting that to human activity is a separate inference.", correct: true,
                why: "The three sections are the measurement, the inference, and why the gap between them is easy to miss." },
              { text: "Radiocarbon dating is unreliable.", why: "The article calls the measurement correct, which is the whole force of its argument." },
              { text: "Driftwood should never be dated.", why: "Driftwood is the example, and the article's point is about the inference rather than the material." }
            ] },
          { q: "What exactly does the method measure?",
            options: [
              { text: "When the organism stopped exchanging carbon with the atmosphere.", correct: true,
                why: "Stated twice, and the second time with the gloss <i>that moment is the death of the organism</i>." },
              { text: "When people were present at the site.", why: "That is what the archaeologist wants and what the method does not give." },
              { text: "How long the sample lay in the ground.", why: "The article never mentions burial duration." }
            ] },
          { q: "Why does the article call a driftwood date “a correct measurement of the wrong event”?",
            options: [
              { text: "The number is accurate for the wood's death, which may long precede the fire.", correct: true,
                why: "Both halves have to be held: accurate, and about something else. That is what makes the problem hard to see." },
              { text: "Driftwood cannot be dated accurately.", why: "It can; the article says the measurement is correct." },
              { text: "The laboratory applied the wrong correction.", why: "No processing error is involved — that was Lesson 4's conversation." }
            ] },
          { q: "Where does the article say the clue lies?",
            options: [
              { text: "In the record of what the sample was and where it lay.", correct: true,
                why: "The last sentence puts it there explicitly, and adds <i>not in the date</i>." },
              { text: "In the stated uncertainty on the determination.", why: "The uncertainty describes the measurement, which is not where the problem is." },
              { text: "In the number of samples submitted.", why: "Sample count is not discussed in this article." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Two of these sentences are careful about blame and one is careful about certainty. The wrong answers are the versions that stop being careful.</p>" },
        items: [
          { source: "The evidence that forced the revision was not a single spectacular discovery but an accumulation of ordinary ones, each individually arguable and collectively decisive.",
            options: [
              { text: "No one find settled it; many unremarkable finds, each disputable on its own, together did.", correct: true,
                why: "Keeps the negative half, the accumulation, and the contrast between individually arguable and collectively decisive." },
              { text: "A series of spectacular discoveries forced the revision.",
                why: "The sentence says the opposite of <i>spectacular</i> in its second half." },
              { text: "Each of the finds was decisive on its own.",
                why: "<i>Individually arguable</i> rules this out, and it is the clause that makes the sentence interesting." },
              { text: "The evidence was too ordinary to force a revision.",
                why: "Reverses the outcome. It did force one." }
            ] },
          { source: "That delay is often told as a story of stubbornness, but it is better understood as the system working slowly and correctly.",
            options: [
              { text: "People usually explain the delay as obstinacy; it makes more sense as caution doing its job.", correct: true,
                why: "Keeps <i>often told</i> as a report of how others describe it, and keeps the author's own reading as a preference rather than a proof." },
              { text: "The delay was caused by stubbornness.",
                why: "That is the account the sentence sets aside." },
              { text: "The system always works slowly and correctly.",
                why: "<i>Better understood as</i> is about this case, and it does not generalise." },
              { text: "The delay was neither stubborn nor correct.",
                why: "The sentence does choose: it prefers the second reading." }
            ] },
          { source: "Nothing in the number itself reveals the discrepancy, because the laboratory reports the age of the sample and makes no claim at all about the activity.",
            options: [
              { text: "You cannot see the problem in the date, since the lab is only reporting the sample's age, not what people were doing.", correct: true,
                why: "Keeps the invisibility, the reason, and the limited scope of the laboratory's claim." },
              { text: "The laboratory conceals the discrepancy.",
                why: "It makes no claim about the activity, which is not the same as hiding anything." },
              { text: "The number is wrong, which is why the discrepancy is invisible.",
                why: "The number is right. That is precisely why the discrepancy is invisible." },
              { text: "Laboratories should report on the activity as well.",
                why: "A recommendation the sentence does not make; the next sentence puts the responsibility elsewhere." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the archive. Read it.",
        text: NOTICE2,
        items: [
          { q: "When must a box be ordered?",
            options: [
              { text: "By four o'clock the day before.", correct: true, why: "Line 1 gives both the time and the day." },
              { text: "By four o'clock on the day.", why: "<i>The day before</i> is the part that matters." },
              { text: "A week in advance.", why: "No week is mentioned." }
            ] },
          { q: "You order a box on Friday morning. When does it arrive?",
            options: [
              { text: "Monday.", correct: true,
                why: "Line 4 states the rule for Friday orders, overriding the day-before rule in line 1." },
              { text: "Saturday.", why: "Line 4 names Monday, not the next calendar day." },
              { text: "Friday afternoon.", why: "Line 1 already rules out same-day collection." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        from: "5a",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "You may have four boxes on your desk at once.", answer: "F", line: 3,
            why: "Line 3 sets the limit at three and says <i>no more</i>, which closes the door on four." },
          { stem: "A supervisor must come with you to the archive.", answer: "NI", line: null,
            why: "Line 2 asks for a supervisor's <i>name</i> on the order. Whether they attend is not addressed anywhere on the card." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one diagram, one habit.",
        text: { blocks: [{ lines: [
          "<b>The route</b> — the corridor was shut when people were already south of it.",
          "<b>The date</b> — the laboratory dates the sample; connecting it to people is your inference.",
          "<b>The question to ask</b> — what was the sample, and where exactly did it lie?"
        ],
        closer: { kind: "life",
          body: "<p>Find a process diagram in any textbook. Which stage really takes the longest? The diagram will not tell you.</p>" } }] } }
    ]
  };
})();
