/* Unit 5 · Exploring Space — LESSON 5 · READING
   Reading strategy: reading scatter plots. Data visual: scatter. */
(function () {
  var PASSAGE = {
    masthead: "THE PLANETS WE FOUND FIRST", every: 1,
    blocks: [
      { h: "A catalogue of oddities", lines: [
        "The first few hundred planets discovered outside our own system were strange enough to cause genuine unease: enormous worlds, heavier than Jupiter, completing an orbit of their star in a handful of days.",
        "Nothing in the solar system resembles them, and for a time it appeared that our own arrangement might be the unusual one."
      ] },
      { h: "The method, not the universe", lines: [
        "The explanation turned out to lie in the method rather than in the universe.",
        "A massive planet close to its star displaces that star measurably and crosses in front of it frequently, so it announces itself within a single observing season.",
        "A small planet on a wide orbit does neither, and may require years to produce a signal anyone would consider trustworthy."
      ] },
      { h: "What a catalogue is", lines: [
        "Early catalogues were therefore not a sample of what exists but a sample of what is convenient to detect, and the two are not equivalent.",
        "Astronomers have since corrected for the <b>observational bias</b><sup>1</sup>, and the resulting picture is considerably less exotic.",
        "Smaller planets are now understood to be the commonest variety, which is approximately what anyone would have predicted before the instruments began answering."
      ] }
    ],
    notes: ["observational bias: the tendency of a method to find some things far more readily than others"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "OBSERVATORY VISIT", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Observatory visit. Warm clothes: the dome is unheated.",
      "No white torches.",
      "Meet at the gate, not the car park.",
      "Sessions are cancelled if cloud cover is above sixty per cent."
    ] }],
    source: "Department of Physics and Astronomy"
  };

  /* The second academic passage: the first is about a biased catalogue, this
     one about the step after it — when does a candidate become a detection. */
  var PASSAGE2 = {
    masthead: "WHEN A CANDIDATE BECOMES A PLANET", every: 1,
    blocks: [
      { h: "Two kinds of mistake", lines: [
        "Any detection threshold must be set somewhere, and wherever it is set it produces two kinds of error that cannot be reduced at the same time.",
        "A threshold low enough to catch every real planet will also admit objects that are not planets at all; a threshold high enough to exclude those will discard real ones."
      ] },
      { h: "Which error is worse", lines: [
        "The field has generally preferred the second kind, for a reason that is sociological rather than statistical.",
        "A false detection is published, cited and eventually withdrawn, and the withdrawal reaches a small fraction of the readers the announcement reached.",
        "A real planet that was missed, by contrast, is usually found later by somebody else, and the cost falls on one team rather than on the literature."
      ] },
      { h: "Why the word matters", lines: [
        "This is why the vocabulary is policed so carefully, and why a paper distinguishes a candidate from a confirmed detection even when the authors privately believe the candidate is real.",
        "The distinction is not modesty; it is a statement about which of the two errors the authors have chosen to risk."
      ] }
    ],
    notes: ["threshold: the level of evidence a signal must reach before it is called a detection"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "DOME · NIGHT RULES", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Red torches only, from dusk onward.",
      "Sign the logbook at the start and the end of your slot.",
      "Report any cloud above sixty per cent to the operator.",
      "The last person out closes the shutter, whatever the forecast says."
    ] }],
    source: "Department of Physics and Astronomy"
  };

  window.PAGE = {
    id: "u05-l5", unit: "u05", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a scatter plot, and ask what is missing from it",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>displace</span> (v) to move something slightly from its position",
          "<span class='gloss'>convenient</span> (adj) easy, given the method you are using",
          "<span class='gloss'>equivalent</span> (adj) the same in value or effect"
        ] }] },
        after: "<p>The last two carry the argument between them.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read"],
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader", body: "<p>Read with a purpose. Decide what you want from the text before the first sentence.</p>" },
        options: [
          { text: "Early planet catalogues described the detection method more than the universe.", correct: true,
            why: "The headings run: a catalogue of oddities, the method not the universe, what a catalogue is." },
          { text: "Large planets are more common than small ones.", why: "The last heading sets up the opposite." },
          { text: "The solar system is unusual.", why: "The article says that only <i>appeared</i> to be so, for a time." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        concepts: ["read", "comparison", "measurement"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the idea, then the details, then the vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The first catalogues reflected what was easy to detect, not what is common.", correct: true,
                why: "That is the hinge sentence, and both other sections lead to or from it." },
              { text: "Early instruments were badly made.", why: "Nothing is said against the instruments; the issue is what they can see." },
              { text: "Massive planets orbit faster than small ones.", why: "A detail about detectability, not the argument." }
            ] },
          { q: "Why does a massive close-in planet announce itself quickly?",
            options: [
              { text: "It displaces its star measurably and transits often.", correct: true,
                why: "Both halves of the mechanism are given in one sentence." },
              { text: "It is brighter than other planets.", why: "Brightness is never mentioned." },
              { text: "It is nearer to Earth.", why: "Distance from <i>us</i> is not the variable; distance from its own star is." }
            ] },
          { q: "In line 6, <i>the two are not equivalent</i> refers to:",
            options: [
              { text: "a sample of what exists and a sample of what is convenient to detect", correct: true,
                why: "The two things are named in the first half of the same sentence." },
              { text: "large planets and small planets", why: "Those are compared, but not as the referents of <i>the two</i>." },
              { text: "the method and the instruments", why: "Instruments are not a party to this comparison." }
            ] },
          { q: "What does the last sentence imply about the corrected picture?",
            options: [
              { text: "It matches what people expected before the data arrived.", correct: true,
                why: "“approximately what anyone would have predicted before the instruments began answering” — gently ironic, and an inference item lives exactly there." },
              { text: "It is still surprising.", why: "<i>Considerably less exotic</i> says the opposite." },
              { text: "It proves the early catalogues were falsified.", why: "They were biased, which is not the same as false." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        concepts: ["read", "measurement"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card from the department noticeboard.",
        text: NOTICE,
        items: [
          { q: "Where should you meet?",
            options: [
              { text: "At the gate.", correct: true, why: "“at the gate, <i>not</i> the car park” — the card anticipates the mistake." },
              { text: "At the car park.", why: "Explicitly ruled out." },
              { text: "Inside the dome.", why: "Not mentioned as a meeting point." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        carry: "1c",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "A small planet on a wide orbit is harder to detect.", answer: "T", line: 5,
            why: "Line 5 says it does neither of the things that make a planet announce itself." },
          { stem: "Large planets are the commonest kind.", answer: "F", line: 8,
            why: "Line 8 says smaller planets are now understood to be the commonest." },
          { stem: "The correction was first applied in the 1990s.", answer: "NI", line: null,
            why: "No date for the correction is given." }
        ] },

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read", "inference"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This subject hedges with a particular set of words: <i>candidate</i>, <i>apparent</i>, <i>consistent with</i>, <i>suggests</i>. Spotting which sentence is hedged is usually the same as spotting which one is the actual claim.</p>" },
        items: [
          { prompt: "Which sentence reports a result rather than a method or a plan?",
            text: "The field was observed for ninety consecutive nights. Each frame was compared against a reference image taken at the start of the run. Eleven objects showed a repeated dip in brightness of the expected shape. Follow-up spectra have been requested for the four strongest.",
            answer: "Eleven objects showed a repeated dip in brightness of the expected shape.",
            why: "The first two sentences describe what was done and the last what will be done. Only this one says what came out." },
          { prompt: "Which sentence is hedged?",
            text: "The orbital period is 3.2 days. The host star is slightly cooler than the Sun. The depth of the dip is consistent with a planet somewhat larger than Neptune. The system lies about four hundred light years away.",
            answer: "The depth of the dip is consistent with a planet somewhat larger than Neptune.",
            why: "<i>Consistent with</i> and <i>somewhat</i> in one sentence. The other three are flat statements of measured quantities." },
          { prompt: "Which sentence explains why the result was unexpected?",
            text: "Small planets were long thought to be rare. The earliest surveys found almost none of them. Those surveys could only detect objects that displaced their star by several metres per second, which a small planet does not do. Later instruments reached a tenth of that.",
            answer: "Those surveys could only detect objects that displaced their star by several metres per second, which a small planet does not do.",
            why: "The only sentence giving a cause. The first two report the belief and the observation; the last reports a later improvement." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        carry: "1c",
        concepts: ["word", "cause"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's prefix, in the article's own register.",
        items: [
          { text: "An u___ sample tells you about the method.", answer: "unrepresentative", given: [0, 1, 2],
            why: "<i>un + representative</i> — the article's subject in one word." },
          { text: "The result was u___ enough to cause unease.", answer: "unexpected", given: [0, 1, 2],
            why: "<i>un + expected</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement"],
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the scatter plot. Read both axes before you look at where the points sit.",
        note: { kind: "reader",
                body: "<p>With a scatter plot, read both axis labels and their units first, and check whether either axis is logarithmic — this one is. On a log axis each step is a multiplication, not an addition, so a gap that looks small may be a factor of ten.</p>" },
        chart: {
          kind: "scatter", title: "Early detections: mass against orbital period",
          sub: "The first planets found, plotted where they fall",
          xlabel: "Orbital period (days)", ylabel: "Mass (Earths, log scale)",
          xmax: 400, ymax: 1000, ymin: 0.1, ylog: true,
          points: [
            { x: 3, y: 320, name: "a" }, { x: 4, y: 440, name: "b" },
            { x: 7, y: 280, name: "c" }, { x: 12, y: 190, name: "d" },
            { x: 110, y: 15, name: "e" }, { x: 290, y: 3, name: "f" },
            { x: 365, y: 1, name: "g" }
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "What does the plot show about the earliest detections?",
            options: [
              { text: "The heaviest planets are also the ones with the shortest periods.", correct: true,
                why: "Points a to d cluster top-left: massive and fast. That clustering is the bias the article describes, visible as a shape." },
              { text: "Mass and period are unrelated.", why: "The points fall along a clear diagonal." },
              { text: "Most early detections were Earth-sized.", why: "Only point g is, and it sits alone at the far right." }
            ] }
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "measurement", "evidence"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on the word the first one kept using. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>The first article was about which planets a method can see. This one is about where a field draws the line between seeing something and saying so.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Where the threshold is set decides which of two unavoidable errors you risk, and the field has chosen.", correct: true,
                why: "The three sections are the trade-off, the choice, and what the vocabulary is doing about it." },
              { text: "Detection thresholds should be set lower.", why: "The article explains the preference rather than arguing against it." },
              { text: "Most planet candidates turn out to be false.", why: "No rate is given anywhere in the text." }
            ] },
          { q: "Why does the article call the field's preference sociological rather than statistical?",
            options: [
              { text: "The reason concerns how announcements and withdrawals travel, not the numbers.", correct: true,
                why: "The second section is entirely about readership: the withdrawal reaches a fraction of the people the announcement did." },
              { text: "Because astronomers vote on the threshold.", why: "No decision procedure is described." },
              { text: "Because the statistics are disputed.", why: "The arithmetic is not in question in this article at all." }
            ] },
          { q: "According to the article, what happens to a real planet that is missed?",
            options: [
              { text: "Somebody else usually finds it, and the cost falls on one team.", correct: true,
                why: "Stated as the contrast with the false detection, whose cost falls on the literature." },
              { text: "It is never found.", why: "<i>Usually found later</i> says the opposite." },
              { text: "It is published as a candidate.", why: "A missed object is by definition below the threshold and not published at all." }
            ] },
          { q: "Why does a paper say <i>candidate</i> when the authors believe the object is real?",
            options: [
              { text: "To state which of the two errors they have decided to risk.", correct: true,
                why: "The last sentence says exactly this, and explicitly rules out modesty as the explanation." },
              { text: "Because they are being modest.", why: "<i>The distinction is not modesty</i> — the article rejects this reading by name." },
              { text: "Because the journal requires it.", why: "No editorial rule is mentioned." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "4a",
        concepts: ["read"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Two of these sentences are about what a method can do, and one is about what a word is doing. The wrong answers mostly turn a statement about the instrument into a statement about the universe.</p>" },
        items: [
          { source: "Early catalogues were not a sample of what exists but a sample of what is convenient to detect.",
            options: [
              { text: "The first lists described what was easy to find, not what is actually out there.", correct: true,
                why: "Keeps the <i>not … but …</i> frame and the distinction between the universe and the method." },
              { text: "Early catalogues were too small to be representative.",
                why: "Size is not the problem. A larger catalogue made the same way would be biased in the same direction." },
              { text: "Early catalogues contained errors.",
                why: "The entries were correct. What was wrong was the inference from the list to the population." },
              { text: "Convenient planets are commoner than inconvenient ones.",
                why: "Reads a fact about detection as a fact about the universe — the exact confusion the sentence prevents." }
            ] },
          { source: "A threshold low enough to catch every real planet will also admit objects that are not planets at all.",
            options: [
              { text: "Set the bar low enough to miss nothing real and some unreal things get through too.", correct: true,
                why: "Keeps the conditional and both consequences, which is what makes it a trade-off rather than a flaw." },
              { text: "A low threshold produces more real detections.",
                why: "True and incomplete: the sentence exists to name the cost that comes with them." },
              { text: "Thresholds should be set high.",
                why: "A recommendation. The sentence is describing a mechanism." },
              { text: "Every real planet can be caught without admitting anything false.",
                why: "The sentence is constructed precisely to deny this." }
            ] },
          { source: "The distinction is not modesty; it is a statement about which of the two errors the authors have chosen to risk.",
            options: [
              { text: "Calling it a candidate is not humility but a declaration of which mistake they are willing to make.", correct: true,
                why: "Keeps the rejection and the replacement, which is the whole shape of the sentence." },
              { text: "Authors use the word <i>candidate</i> to be careful.",
                why: "<i>Careful</i> collapses back into the modesty reading the semicolon rules out." },
              { text: "The distinction shows the authors doubt their own result.",
                why: "The article says they may privately believe it is real." },
              { text: "Both errors are equally serious.",
                why: "The previous section says the field prefers one, which is why the choice has to be declared." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read", "measurement"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card, this one inside the dome. Read it.",
        text: NOTICE2,
        items: [
          { q: "When do you sign the logbook?",
            options: [
              { text: "At the start and at the end of your slot.", correct: true, why: "Line 2 names both, and the <i>and</i> makes both compulsory." },
              { text: "Only at the end.", why: "Line 2 asks for two signatures." },
              { text: "Only if something goes wrong.", why: "No condition is attached." }
            ] },
          { q: "Who closes the shutter?",
            options: [
              { text: "Whoever leaves last.", correct: true,
                why: "Line 4, and the clause after the comma removes the obvious excuse." },
              { text: "The operator.", why: "The operator is told about cloud, in line 3; the shutter is not their job here." },
              { text: "Nobody, if the forecast is clear.", why: "<i>Whatever the forecast says</i> exists to rule exactly this out." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "A white torch may be used before dusk.", answer: "T", line: 1,
            why: "Line 1 restricts red torches to <i>from dusk onward</i>, which leaves the time before it unrestricted. Reading the limit as absolute is the trap." },
          { stem: "The operator decides when a session is abandoned.", answer: "NI", line: null,
            why: "Line 3 says cloud must be reported to the operator. Who then decides is not stated anywhere on the card." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read", "measurement", "sample"],
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one chart, one habit.",
        text: { blocks: [{ lines: [
          "<b>What the catalogue was</b> — a sample of the method, not of the universe.",
          "<b>What the threshold is</b> — a choice between two errors, not a measurement.",
          "<b>What to ask</b> — would this object have been in the list if it were half the size?"
        ],
        closer: { kind: "life",
          body: "<p>Find a scatter plot anywhere. Is either axis logarithmic? If the label does not say, how would you tell from the tick marks?</p>" } }] } }
    ]
  };
})();
