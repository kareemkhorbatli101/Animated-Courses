/* Unit 11 · How Science Works — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u11-l1", unit: "u11", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what makes a result a result",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "measurement", "evidence"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "measurement", ar: "\u0642\u064a\u0627\u0633",
            meaning: "a quantity obtained by a stated procedure",
            with: ["take a measurement", "a precise measurement", "measurement error"],
            why: "Not just a number: a number plus the procedure that produced it. Report one without the other and you have reported half of it." },
          { term: "experiment", ar: "\u062a\u062c\u0631\u0628\u0629",
            meaning: "a deliberate intervention to test a claim",
            with: ["run an experiment", "a controlled experiment", "the experiment showed"],
            why: "<i>Intervention</i> is the whole word. An experiment changes something on purpose; an observation watches, and the difference decides what you may conclude." },
          { term: "instrument", ar: "\u062c\u0647\u0627\u0632 \u0642\u064a\u0627\u0633",
            meaning: "the device the measurement is taken with",
            with: ["calibrate the instrument", "instrument precision", "a sensitive instrument"],
            why: "Every instrument has a precision, and reporting a figure finer than that precision is a mistake however carefully you did the arithmetic." },
          { term: "assessment", ar: "\u062a\u0642\u064a\u064a\u0645",
            meaning: "a judgment of quality, made against criteria",
            with: ["an independent assessment", "assess against", "the assessment concluded"],
            why: "<i>Against criteria</i> is what separates it from an opinion. Stating the criteria first is what makes an assessment answerable." },
          { term: "replication", ar: "\u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u062f\u0631\u0627\u0633\u0629",
            meaning: "repeating a study to see whether it holds",
            with: ["a direct replication", "failed to replicate", "the replication crisis"],
            why: "The article\u0027s subject. Almost everyone assumes it happens routinely, and almost nothing in the system pays for it." },
          { term: "hypothesis", ar: "\u0641\u0631\u0636\u064a\u0651\u0629",
            meaning: "the claim being tested",
            with: ["test a hypothesis", "the null hypothesis", "support the hypothesis"],
            why: "Plural <i>hypotheses</i>. A hypothesis is not a guess: it is a claim stated so that evidence could go against it." },
          { term: "variable", ar: "\u0645\u062a\u063a\u064a\u0651\u0631",
            meaning: "anything that can differ between cases",
            with: ["control for a variable", "the dependent variable", "a confounding variable"],
            why: "Also an adjective, which is why it can be confusing. A variable you have not controlled for is one that may be doing the explaining." },
          { term: "peer review", ar: "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0646\u064f\u0638\u0631\u0627\u0621",
            meaning: "assessment by others in the same field, before publication",
            with: ["under peer review", "peer-reviewed journal", "survive peer review"],
            why: "Hyphenated as an adjective. It checks whether a study was reported plausibly \u2014 not whether its result is true, which only replication can do." }
        ],
        prompt: "Eight words. Say each meaning before you turn the card. The fifth is the article\u0027s subject, and it is the one most people assume happens more often than it does.",
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
        concepts: ["word", "measurement"],
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
        concepts: ["word", "evidence", "claim"],
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
        concepts: ["word", "measurement", "sample"],
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
        concepts: ["read", "measurement", "evidence"],
        kind: "build", task: null, n: 0,

        family: {

          word: "measure",

          forms: [

            { part: "verb", word: "MEA·sure" },

            { part: "noun", word: "MEA·sure·ment", note: "a number plus its procedure" },

            { part: "adjective", word: "MEA·sur·a·ble", note: "large enough to detect" },

            { part: "adverb", word: "MEA·sur·a·bly" },

          ]

        },

        items: [

          { root: "measure", affix: "-ment", answer: "measurement",

            why: "The plain case, and the <i>e</i> stays: <i>measurment</i> would lose the syllable." },

          { root: "assess", affix: "-ment", answer: "assessment",

            why: "Also plain. Two <i>s</i>s in the root, and both survive." },

          { root: "govern", affix: "-ment", answer: "government",

            why: "The <i>n</i> is easy to lose in speech and must not be lost in writing. <i>Goverment</i> is among the most frequent misspellings in English." },

          { root: "state", affix: "-ment", answer: "statement",

            why: "The <i>e</i> stays again, as it does for every root ending in a consonant plus <i>e</i> in this group." },

          { root: "replicate", affix: "-ion", answer: "replication",

            why: "A different suffix for a method noun: <i>-ate</i> verbs take <i>-ion</i>, never <i>-ment</i>. <i>Replicatement</i> is the form the pattern would wrongly predict." },

          { root: "precise", affix: "-ion", answer: "precision",

            why: "And another consonant change on the way: <i>-se</i> becomes <i>-sion</i>, as in <i>decide</i> and <i>decision</i>." }

        ],
        prompt: "The same suffix as Unit 10, in a different vocabulary. Build each one \u2014 and note which of them is not built from a modern English verb at all.",
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
        concepts: ["word", "comparison"],
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
        concepts: ["word"],
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
        concepts: ["word", "evidence"],
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
        concepts: ["comparison", "measurement"],
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
