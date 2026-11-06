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

  window.PAGE = {
    id: "u05-l5", unit: "u05", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a scatter plot, and ask what is missing from it",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>displace</span> (v) to move something slightly from its position",
          "<span class='gloss'>convenient</span> (adj) easy, given the method you are using",
          "<span class='gloss'>equivalent</span> (adj) the same in value or effect"
        ] }] },
        after: "<p>The last two carry the argument between them.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
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

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's prefix, in the article's own register.",
        items: [
          { text: "An u___ sample tells you about the method.", answer: "unrepresentative", given: [0, 1, 2],
            why: "<i>un + representative</i> — the article's subject in one word." },
          { text: "The result was u___ enough to cause unease.", answer: "unexpected", given: [0, 1, 2],
            why: "<i>un + expected</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
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
        ],
        closer: { kind: "life",
          body: "<p>Find a scatter plot anywhere. Is either axis logarithmic? If the label does not say, how would you tell from the tick marks?</p>" } }
    ]
  };
})();
