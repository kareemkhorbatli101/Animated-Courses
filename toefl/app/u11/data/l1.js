/* Unit 11 · How Science Works — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u11-l1", unit: "u11", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what makes a result a result",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Four take <b>-ment</b> again, as in Unit 10 — but here they belong to method rather than to law.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 measurement</b> — a quantity obtained by a stated procedure",
          "<b>2 experiment</b> — a deliberate intervention to test a claim",
          "<b>3 instrument</b> — the device the measurement is taken with",
          "<b>4 assessment</b> — a judgment of quality, made against criteria",
          "<b>5 replication</b> — repeating a study to see whether it holds",
          "<b>6 hypothesis</b> — the claim being tested",
          "<b>7 variable</b> — anything that can differ between cases",
          "<b>8 peer review</b> — assessment by others in the same field, before publication"
        ] }] },
        after: "<p>Number 5 is the article's subject, and it is the one most people assume happens more often than it does.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "match", task: null, n: 0,
        prompt: "A bench set up to measure one thing carefully. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A bench with a balance under a window, a calibration certificate on the wall, a sample rack, a stopwatch, a logbook and a laptop",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "poster",  x: 90,  y: 55,  s: 2.0 },
            { p: "window",  x: 620, y: 50,  s: 2.2 },
            { p: "clock",   x: 880, y: 60,  s: 0.72 },
            { p: "bench",   x: 90,  y: 370, sx: 7.8, sy: 1.7 },
            { p: "counter", x: 150, y: 310, sx: 1.5, sy: 0.9 },
            { p: "flask",   x: 330, y: 352, s: 0.8 },
            { p: "flask",   x: 382, y: 356, s: 0.76 },
            { p: "book",    x: 500, y: 372, s: 0.76 },
            { p: "laptop",  x: 620, y: 344, s: 0.95 },
            { p: "phone",   x: 760, y: 348, s: 0.6 }
          ] },
        pins: [
          { id: "p-cert",   x: 14, y: 42, tx: 14, ty: 22, w: 160 },
          { id: "p-balance",x: 14, y: 90, tx: 20, ty: 62, w: 150 },
          { id: "p-rack",   x: 36, y: 90, tx: 37, ty: 69, w: 150 },
          { id: "p-log",    x: 58, y: 90, tx: 53, ty: 73, w: 150 },
          { id: "p-laptop", x: 84, y: 90, tx: 66, ty: 70, w: 150 },
          { id: "p-timer",  x: 86, y: 40, tx: 90, ty: 19, w: 150 }
        ],
        pairs: [
          { word: "calibration certificate", pin: "p-cert",
            why: "what makes a reading a measurement rather than a number. No instrument is more precise than the certificate on the wall behind it." },
          { word: "balance", pin: "p-balance",
            why: "not <i>scales</i> in this register, as Unit 6 noted. A balance states its precision; scales do not." },
          { word: "sample rack", pin: "p-rack",
            why: "position in the rack is how samples are identified, which is why the rack is named in a method and the tubes usually are not." },
          { word: "logbook", pin: "p-log",
            why: "the running record, written at the bench. A reading entered twenty minutes later is a memory." },
          { word: "laptop", pin: "p-laptop",
            why: "where the logbook ends up. The order matters: paper first, because a transcription error is recoverable and a lost reading is not." },
          { word: "timer", pin: "p-timer",
            why: "the instrument a rate measurement actually depends on, and the one nobody thinks to calibrate." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A result that survives r___ is worth more than one that has not been tried.", answer: "replication", given: [0, 1, 2],
            why: "<i>replicate → replication</i>." },
          { text: "The h___ is the claim the experiment was designed to test.", answer: "hypothesis", given: [0, 1, 2],
            why: "<i>Hypothesis</i> — plural <i>hypotheses</i>." },
          { text: "Any v___ that is not controlled may explain the result instead.", answer: "variable", given: [0, 1, 2],
            why: "<i>Variable</i> — anything that can differ between cases." },
          { text: "P___ review happens before publication, not after.", answer: "peer", given: [0, 1],
            why: "<i>Peer</i> = someone of equal standing in the field." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        carry: "1a",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the article in Lesson 5 is built from.",
        items: [
          { text: "A c___ group receives no treatment and is otherwise identical.", answer: "control", given: [0, 1],
            why: "In this sense a <i>control</i> is a comparison group. The same word means a knob, and the ambiguity is genuinely confusing in writing." },
          { text: "A result that could have arisen by chance alone is not s___ .", answer: "significant", given: [0, 1],
            why: "A technical word with a misleading everyday twin: <i>significant</i> here says nothing about how large or how important the effect is." },
          { text: "The sample was drawn at r___ from the whole register.", answer: "random", given: [0, 1],
            why: "<i>At random</i> is a fixed phrase. <i>Randomly selected</i> is the adverb doing the same job." },
          { text: "A p___ states in advance what will be done and measured.", answer: "protocol", given: [0, 1],
            why: "Writing it down beforehand is what stops the analysis being chosen after the data are seen." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffix -ment, in method", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "The same suffix as Unit 10, a different vocabulary. Note how precise these four are.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>measure → measure<b>ment</b> · experiment · instru<b>ment</b> · assess → assess<b>ment</b>.<br><i>Instrument</i> is not built from a modern English verb, which is why you cannot work it out — it simply has to be learned.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "-MENT IN METHOD",
          blocks: [{ lines: [
            "A <b>measurement</b> is not just a number: it is a number plus the procedure that produced it.",
            "An <b>experiment</b> intervenes. An observation does not, and the difference decides what you may conclude.",
            "An <b>instrument</b> has a precision, and reporting a figure finer than that precision is a mistake.",
            "An <b>assessment</b> is made against stated criteria, which is what separates it from an opinion."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffix -ment, in method", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the noun.",
        items: [
          { text: "Every m___ should be reported with its uncertainty.", answer: "measurement", given: [0, 1, 2],
            why: "<i>measure → measurement</i>." },
          { text: "An e___ intervenes; an observation only watches.", answer: "experiment", given: [0, 1, 2],
            why: "<i>Experiment</i> — and the distinction decides what can be concluded." },
          { text: "No i___ is more precise than its calibration.", answer: "instrument", given: [0, 1, 2],
            why: "<i>Instrument</i> — learned, not derived." },
          { text: "The a___ was made against four stated criteria.", answer: "assessment", given: [0, 1, 2],
            why: "<i>assess → assessment</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffix -ment, in method", letter: "C",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more nouns from this unit's register. Only two of them take <b>-ment</b>.",
        items: [
          { text: "The two sets of readings showed close a___ .", answer: "agreement", given: [0, 1],
            why: "<i>agree → agreement</i>, and in method it means the numbers match, not that anyone was persuaded." },
          { text: "The a___ of samples to groups was done by computer.", answer: "assignment", given: [0, 1],
            why: "<i>assign → assignment</i>, and doing it by computer is what makes it random rather than convenient." },
          { text: "The c___ of the instrument is checked every six months.", answer: "calibration", given: [0, 1],
            why: "<i>calibrate → calibration</i>: this one takes <i>-ation</i>, not <i>-ment</i>." },
          { text: "No conclusion survives without r___ by another group.", answer: "replication", given: [0, 1],
            why: "<i>replicate → replication</i>, also <i>-ation</i>. The suffix is not predictable from the meaning." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffix -ment, in method", letter: "D",
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three are parts of a study's design",
            options: [
              { text: "control",   why: "the comparison group." },
              { text: "protocol",  why: "what was planned, written in advance." },
              { text: "variable",  why: "what is allowed to differ, and what is held fixed." },
              { text: "instrument", correct: true,
                why: "the odd one: an instrument is equipment. A study can be redesigned without touching it." }
            ] },
          { group: "three mean the study was done again",
            options: [
              { text: "replication", why: "an independent repeat." },
              { text: "repetition",  why: "doing it again, though often by the same group." },
              { text: "reproduction", why: "obtaining the same result from the same data or method." },
              { text: "review", correct: true,
                why: "the odd one: peer review reads the study. Nobody does it again, which is the whole gap Lesson 5 is about." }
            ] },
          { group: "three describe a result that may be chance",
            options: [
              { text: "non-significant", why: "the technical term: consistent with chance alone." },
              { text: "inconclusive",    why: "it did not settle the question either way." },
              { text: "underpowered",    why: "the study was too small to detect the effect it was looking for." },
              { text: "insignificant", correct: true,
                why: "the odd one, and the trap: it means unimportant. A statistically significant result can be insignificant, and vice versa." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Technical or everyday", letter: "A",
        kind: "sort", task: null, n: 0,
        prompt: "Eight words that mean one thing in this subject and something else outside it. Sort them by which meaning the sentence on each card is using.",
        note: { kind: "words", title: "In other words…",
                body: "<p>These are the hardest words in academic English, because nothing marks them as technical. A reader who knows the everyday sense will understand the sentence, understand it wrongly, and have no reason to look anything up.</p>" },
        bins: [
          { id: "tech",     label: "The technical sense", hint: "as the field uses it" },
          { id: "everyday", label: "The everyday sense",  hint: "as anyone else would" }
        ],
        items: [
          { text: "the difference was significant at the five per cent level", bin: "tech",
            why: "unlikely to have arisen by chance. It says nothing at all about size or importance." },
          { text: "samples were assigned at random", bin: "tech",
            why: "by a defined chance procedure, not haphazardly." },
          { text: "the control received no treatment", bin: "tech",
            why: "a comparison group." },
          { text: "the theory predicts a shift of two degrees", bin: "tech",
            why: "a tested framework with standing, not a guess." },
          { text: "it made a significant difference to my week", bin: "everyday",
            why: "important or large, which is the sense the technical one quietly contradicts." },
          { text: "she picked a book at random from the shelf", bin: "everyday",
            why: "without thinking about it — almost the opposite of a defined procedure." },
          { text: "he lost control of the car", bin: "everyday",
            why: "command over something, with no comparison group in sight." },
          { text: "that is only a theory", bin: "everyday",
            why: "the hardest card: in ordinary speech it means a guess, and the technical sense means roughly the reverse." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say in one sentence why a measurement is more than a number.</p>" } }
    ]
  };
})();
