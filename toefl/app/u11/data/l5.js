/* Unit 11 · How Science Works — LESSON 5 · READING
   Reading strategy: paraphrasing; reading an infographic. Visual: bubble. */
(function () {
  var PASSAGE = {
    masthead: "A RESULT THAT WILL NOT REPEAT", every: 1,
    blocks: [
      { h: "What the projects found", lines: [
        "A result that cannot be reproduced is not yet a result, and a surprising proportion of published findings turn out to be of that kind.",
        "This was established by large <b>replication</b><sup>1</sup> projects in which hundreds of experiments were repeated by independent teams, and in several fields fewer than half the original effects were recovered."
      ] },
      { h: "What it does and does not mean", lines: [
        "The finding provoked alarm, some of it justified and some of it confused.",
        "A failed replication does not establish that the original was wrong, because the repetition may itself have been flawed, and a single study has never been meant to settle anything.",
        "What the projects did establish is that the published record had been treating individual studies as more conclusive than their methods warranted."
      ] },
      { h: "What is being done", lines: [
        "The remedies now being adopted are unglamorous and mostly procedural: analyses are registered before the data are collected, materials are shared, and negative results are published rather than quietly filed."
      ] }
    ],
    notes: ["replication: repeating a study by an independent team, to see whether the original effect appears again"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "EQUIPMENT BOOKING", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Equipment booking. Book the spectrometer online, up to two weeks ahead.",
      "Cancel at least a day before, or the slot is counted against your group.",
      "Training is required before your first booking."
    ] }],
    source: "Department of Chemistry"
  };

  window.PAGE = {
    id: "u11-l5", unit: "u11", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Say it back in your own words, and read a graphic",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>recovered</span> (adj) found again in the repetition",
          "<span class='gloss'>warranted</span> (v) justified — what the evidence entitles you to say",
          "<span class='gloss'>procedural</span> (adj) to do with how things are done, not what is believed"
        ] }] },
        after: "<p>The second is the article's quietest and most important word.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article, then paraphrase its likely argument in your head. Which paraphrase is closest?",
        note: { kind: "reader",
                body: "<p><b>Paraphrase as you read.</b> After each section, say it back in your own words without looking. If you can only repeat the author's phrasing, you have recognised the sentence rather than understood it.</p>" },
        options: [
          { text: "Many published results do not repeat; that is a problem about how studies are treated, and it is being fixed procedurally.", correct: true,
            why: "Three headings, three clauses — and crucially it does not say the original studies were wrong." },
          { text: "Most published science is fraudulent.", why: "Fraud is never mentioned, and the article explicitly resists the strong reading." },
          { text: "Replication is impossible in most fields.", why: "Replication is what the projects did." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once to paraphrase each section in one sentence.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The record treated single studies as more conclusive than their methods justified.", correct: true,
                why: "That is what the article says the projects <i>did</i> establish, as against what people assumed." },
              { text: "Most published findings are false.", why: "The article refuses that inference explicitly." },
              { text: "Replication projects were badly designed.", why: "It says a repetition <i>may</i> be flawed, not that these were." }
            ] },
          { q: "Why does a failed replication not establish that the original was wrong?",
            options: [
              { text: "The repetition may itself have been flawed.", correct: true,
                why: "Stated directly, and paired with the reminder that one study was never meant to settle anything." },
              { text: "Because the original was peer reviewed.", why: "Peer review is not offered as a defence." },
              { text: "Because fewer than half were tested.", why: "Fewer than half were <i>recovered</i>, which is different." }
            ] },
          { q: "<i>More conclusive than their methods warranted</i> means the studies were:",
            options: [
              { text: "treated as settling more than their design could support.", correct: true,
                why: "<i>Warranted</i> is about entitlement: what the method licenses you to claim." },
              { text: "badly conducted.", why: "The sentence is about how they were <i>treated</i>, not how they were done." },
              { text: "too small to publish.", why: "Size is not the criterion named." }
            ] },
          { q: "Why does the author call the remedies <i>unglamorous</i>?",
            options: [
              { text: "They are procedural rather than discoveries.", correct: true,
                why: "Registration, sharing and publishing nulls are housekeeping, and the word is doing gentle work." },
              { text: "They are unlikely to succeed.", why: "No doubt about their effect is expressed." },
              { text: "They are expensive.", why: "Cost is not mentioned." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card beside the instrument.",
        text: NOTICE,
        items: [
          { q: "What happens if you cancel on the day?",
            options: [
              { text: "The slot counts against your group.", correct: true, why: "Cancellation must be at least a day before." },
              { text: "Nothing.", why: "The card attaches a consequence." },
              { text: "You lose your training.", why: "Training is a separate requirement." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "A failed replication proves the original study was wrong.", answer: "F", line: 4,
            why: "Line 4 denies exactly this, and gives two reasons." },
          { stem: "Negative results are now being published rather than filed.", answer: "T", line: 6,
            why: "Line 6 lists it among the remedies being adopted." },
          { stem: "The replication projects were funded by governments.", answer: "NI", line: null,
            why: "Funding is never mentioned." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "Every m___ should carry its uncertainty.", answer: "measurement", given: [0, 1, 2],
            why: "<i>measure → measurement</i>." },
          { text: "An e___ intervenes; an observation watches.", answer: "experiment", given: [0, 1, 2],
            why: "<i>Experiment</i> — and the difference decides what you may conclude." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the infographic, then read the text beside it. An infographic is an argument with the sources left out.",
        note: { kind: "reader",
                body: "<p>An infographic is designed to be persuasive before it is understood. Read its <b>caption and source</b> first, and ask what the sizes encode — area, length or nothing at all. Area is read badly by everyone, which is why the figures here are printed inside the circles.</p>" },
        chart: {
          kind: "bubble", title: "Research funding by field",
          sub: "One national agency, one year, in millions. Figures printed because area alone is not readable.",
          source: "Illustrative, authored for this item",
          bubbles: [
            { name: "Medicine", v: 106, x: 170, y: 170, label: "106" },
            { name: "Physics",  v: 54,  x: 340, y: 130, label: "54" },
            { name: "Biology",  v: 38,  x: 455, y: 205, label: "38" },
            { name: "History",  v: 12,  x: 120, y: 268, label: "12" },
            { name: "Arts",     v: 8,   x: 553, y: 100, label: "8" }
          ],
          cols: ["Field", "Funding (m)"],
          rows: [["Medicine","106"],["Physics","54"],["Biology","38"],["History","12"],["Arts","8"]]
        },
        items: [
          { q: "Medicine's circle looks far more than twice the size of Physics'. Why?",
            options: [
              { text: "Because area grows faster than the figure does, so area exaggerates the difference.", correct: true,
                why: "106 is about twice 54, but a circle of twice the value has roughly 1.4 times the radius and twice the area — and the eye reads the width. This is why the numbers are printed inside." },
              { text: "Because medicine received about four times as much.", why: "The figures say 106 against 54." },
              { text: "Because the circles are not to scale.", why: "They are — that is precisely the problem." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find an infographic online. Are its figures printed, or must you judge by size alone? If the latter, try reading two values off it and then check them.</p>" } }
    ]
  };
})();
