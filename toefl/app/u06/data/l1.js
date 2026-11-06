/* Unit 6 · Food, Energy and the Body — LESSON 1 · VOCABULARY
   The one unit with no affix: the source book teaches phrasal verbs here
   instead, and that gap is kept rather than filled with an invented one. */
(function () {
  window.PAGE = {
    id: "u06-l1", unit: "u06", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what the body does to food",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "break down", ar: "\u064a\u064f\u0641\u0643\u0651\u0643 / \u064a\u062d\u0644\u0651\u0644",
            meaning: "to separate into smaller parts",
            with: ["enzymes break starch down", "break it down", "broken down into glucose"],
            why: "Separable: with a pronoun the object must sit in the middle. <i>Break down it</i> is immediately audible as wrong." },
          { term: "take in", ar: "\u064a\u0645\u062a\u0635\u0651",
            meaning: "to absorb",
            with: ["the gut takes in glucose", "take it in", "taken in through the wall"],
            why: "Also separable. In the lab it means absorb; in a lecture it means understand, and context does all the work." },
          { term: "give off", ar: "\u064a\u064f\u0637\u0644\u0642 / \u064a\u0628\u0639\u062b",
            meaning: "to release",
            with: ["gives off heat", "give off a gas", "given off as vapour"],
            why: "Nearly always about something unintended or incidental \u2014 heat, light, a smell \u2014 rather than a product you wanted." },
          { term: "build up", ar: "\u064a\u062a\u0631\u0627\u0643\u0645",
            meaning: "to accumulate",
            with: ["lactate builds up", "build up slowly", "a build-up of"],
            why: "Usually intransitive here: the lactate builds up by itself. As a noun it is hyphenated: <i>a build-up</i>." },
          { term: "use up", ar: "\u064a\u0633\u062a\u0646\u0641\u062f",
            meaning: "to consume entirely",
            with: ["use up the store", "used it up", "the glucose is used up"],
            why: "<i>Up</i> adds completeness, which it does to many of these: used, and used to exhaustion." },
          { term: "carry out", ar: "\u064a\u064f\u062c\u0631\u064a",
            meaning: "to perform",
            with: ["carry out an assay", "carried out in triplicate", "carry it out"],
            why: "The standard verb for performing a procedure, and far commoner in method sections than <i>do</i> or <i>make</i>." },
          { term: "make up", ar: "\u064a\u064f\u0634\u0643\u0651\u0644",
            meaning: "to constitute",
            with: ["water makes up most of the body", "makes up 60 per cent", "made up of"],
            why: "<i>Make up</i> for constitute, <i>be made up of</i> for consist of. The passive is the form you will write most often." },
          { term: "convert", ar: "\u064a\u064f\u062d\u0648\u0651\u0644",
            meaning: "the single-word equivalent of several of the above",
            with: ["convert glucose to", "converted into", "the conversion rate"],
            why: "The one that matters for writing. The phrasal verb is for speech and the bench; the Latinate verb is for the paper." }
        ],
        prompt: "This subject runs on phrasal verbs \u2014 not casual English, but the register the process itself is described in. Say each meaning before you turn the card.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 break down</b> — to separate into smaller parts: <i>enzymes break starch down</i>",
          "<b>2 take in</b> — to absorb: <i>the gut takes in glucose</i>",
          "<b>3 give off</b> — to release: <i>the reaction gives off heat</i>",
          "<b>4 build up</b> — to accumulate: <i>lactate builds up in the muscle</i>",
          "<b>5 use up</b> — to consume entirely: <i>the cell uses up its store</i>",
          "<b>6 carry out</b> — to perform: <i>they carried out the assay</i>",
          "<b>7 make up</b> — to constitute: <i>water makes up most of the body</i>",
          "<b>8 convert</b> — the single-word equivalent of several of the above"
        ] }] },
        after: "<p>Number 8 matters. In writing you will often need the Latinate verb instead; the phrasal one is for speech and for the lab.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A teaching laboratory set up for a digestion assay. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A laboratory bench with a water bath, a rack of test tubes, a timer on the wall, a balance, a pipette and a results sheet",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "clock",   x: 100, y: 60,  s: 0.8 },
            { p: "poster",  x: 420, y: 50,  s: 2.1 },
            { p: "shelf",   x: 740, y: 60,  s: 2.2 },
            { p: "bench",   x: 90,  y: 370, sx: 7.6, sy: 1.7 },
            { p: "counter", x: 150, y: 318, sx: 1.4, sy: 0.7 },
            { p: "flask",   x: 300, y: 348, s: 0.82 },
            { p: "flask",   x: 352, y: 352, s: 0.78 },
            { p: "flask",   x: 402, y: 348, s: 0.82 },
            { p: "phone",   x: 520, y: 340, s: 0.62 },
            { p: "pen",     x: 600, y: 360, s: 0.6 },
            { p: "paper",   x: 680, y: 338, s: 0.74 }
          ] },
        pins: [
          { id: "p-timer",  x: 13, y: 36, tx: 14, ty: 18, w: 140 },
          { id: "p-bath",   x: 14, y: 90, tx: 19, ty: 63, w: 160 },
          { id: "p-rack",   x: 36, y: 90, tx: 36, ty: 68, w: 150 },
          { id: "p-balance",x: 55, y: 52, tx: 55, ty: 65, w: 150 },
          { id: "p-pipette",x: 76, y: 90, tx: 62, ty: 70, w: 150 },
          { id: "p-sheet",  x: 88, y: 52, tx: 72, ty: 66, w: 150 }
        ],
        pairs: [
          { word: "timer", pin: "p-timer",
            why: "an assay is a measurement against the clock, so this is the instrument the result actually depends on." },
          { word: "water bath", pin: "p-bath",
            why: "two words. It holds the tubes at body temperature, which is why the reaction runs at all." },
          { word: "test-tube rack", pin: "p-rack",
            why: "the rack holds the tubes; the <i>tubes</i> hold the sample. Reports name the rack because position in it is how tubes are identified." },
          { word: "balance", pin: "p-balance",
            why: "not <i>scales</i> in this register. A balance weighs; scales is the domestic word." },
          { word: "pipette", pin: "p-pipette",
            why: "for measured volumes. The verb is <i>to pipette</i>, which is why reports say <i>one millilitre was pipetted into each tube</i>." },
          { word: "results sheet", pin: "p-sheet",
            why: "filled in at the bench, not afterwards. A reading written down twenty minutes later is a memory, not a measurement." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the particle — the small word that changes the verb's meaning entirely.",
        items: [
          { text: "Enzymes break starch d___ into simple sugars.", answer: "down", given: [0],
            why: "<i>break down</i> = separate into parts. <i>Break up</i> would be something else entirely." },
          { text: "The small intestine takes the glucose i___.", answer: "in", given: [0],
            why: "<i>take in</i> = absorb." },
          { text: "The reaction gives o___ a measurable amount of heat.", answer: "off", given: [0],
            why: "<i>give off</i> = release. <i>Give out</i> can mean the same, but <i>off</i> is standard for heat and gas." },
          { text: "Lactate builds u___ faster than it can be cleared.", answer: "up", given: [0],
            why: "<i>build up</i> = accumulate." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        carry: "1a",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more particles. Each one changes the verb completely.",
        items: [
          { text: "The muscle uses the stored glycogen u___ within about ninety seconds.", answer: "up", given: [0],
            why: "<i>use up</i> = consume entirely. <i>Use</i> alone does not carry the exhaustion." },
          { text: "They carried the assay o___ three times to check the reading.", answer: "out", given: [0],
            why: "<i>carry out</i> = perform. The commonest phrasal verb in a methods section." },
          { text: "Water makes u___ about sixty per cent of body mass.", answer: "up", given: [0],
            why: "<i>make up</i> = constitute. Note that it has nothing to do with <i>use up</i> despite sharing the particle." },
          { text: "The reading had to be worked o___ from the standard curve.", answer: "out", given: [0],
            why: "<i>work out</i> = calculate. Three different verbs here take <i>out</i>, which is why the particle alone never tells you the meaning." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Separable and inseparable", letter: "A",
        concepts: ["read"],
        kind: "annotate", task: null, n: 0,

        jobs: ["Separable \u2014 the object may sit in the middle",

               "Separable \u2014 with a pronoun it MUST sit in the middle",

               "Inseparable \u2014 the object always follows the particle"],

        sentences: [

          { group: "Separable",

            text: "Enzymes break the starch down.",

            job: "Separable \u2014 the object may sit in the middle",

            why: "A noun object may go either side. Both this and <i>break down the starch</i> are correct, and neither is more formal." },

          { group: "Separable",

            text: "Enzymes break down the starch.",

            job: "Separable \u2014 the object may sit in the middle",

            why: "The same verb, the other position. The choice is rhythm: a long object tends to go to the end." },

          { group: "Separable",

            text: "Enzymes break it down.",

            job: "Separable \u2014 with a pronoun it MUST sit in the middle",

            why: "The rule hardens for pronouns. <i>Break down it</i> is the one version a native speaker will not produce." },

          { group: "Inseparable",

            text: "We went over the method.",

            job: "Inseparable \u2014 the object always follows the particle",

            why: "<i>Go over</i> never splits, with a noun or a pronoun. <i>We went the method over</i> is not an option at all." },

          { group: "Inseparable",

            text: "We went over it.",

            job: "Inseparable \u2014 the object always follows the particle",

            why: "And the pronoun changes nothing here, which is exactly the opposite of <i>break down</i>. The difference is not style, and no rule predicts it." }

        ],
        prompt: "Some phrasal verbs let the object sit in the middle and some do not, and getting it wrong is immediately audible. Click each line and say which it shows.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Separable:</b> break it down · take it in · use it up · carry it out.<br>With a <b>pronoun</b> the object <i>must</i> go in the middle: <i>break it down</i>, never <i>break down it</i>.<br><b>Inseparable:</b> look after it · go over it · get over it. The object always follows the whole verb.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "WHERE THE OBJECT GOES",
          blocks: [
            { h: "Separable — both are fine with a noun", lines: [
              "Enzymes break <b>the starch</b> down. ✓",
              "Enzymes break down <b>the starch</b>. ✓",
              "Enzymes break <b>it</b> down. ✓ — but <i>break down it</i> ✗"
            ] },
            { h: "Inseparable — only one position", lines: [
              "We went over <b>the method</b>. ✓ — <i>went the method over</i> ✗",
              "We went over <b>it</b>. ✓ — <i>went it over</i> ✗"
            ] }
          ],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Separable and inseparable", letter: "B",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. These are the single-word verbs academic writing prefers.",
        items: [
          { text: "The liver c___ excess glucose into glycogen.", answer: "converts", given: [0, 1, 2],
            why: "<i>Convert</i> is the written equivalent of <i>turn into</i>." },
          { text: "The gut a___ nutrients across the intestinal wall.", answer: "absorbs", given: [0, 1, 2],
            why: "<i>Absorb</i> for <i>take in</i>." },
          { text: "The reaction r___ energy as heat.", answer: "releases", given: [0, 1, 2],
            why: "<i>Release</i> for <i>give off</i>." },
          { text: "Water c___ about sixty per cent of body mass.", answer: "constitutes", given: [0, 1, 2],
            why: "<i>Constitute</i> for <i>make up</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Separable and inseparable", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more single-word verbs. These are the ones a written report uses in place of the phrasal verb.",
        items: [
          { text: "The muscle d___ its glycogen store within ninety seconds.", answer: "depletes", given: [0, 1],
            why: "<i>Deplete</i> for <i>use up</i>. It takes an object, unlike <i>run out</i>." },
          { text: "The team c___ the assay in triplicate.", answer: "conducted", given: [0, 1],
            why: "<i>Conduct</i> or <i>perform</i> for <i>carry out</i>. Both are commoner than <i>do</i> in this register." },
          { text: "Enzymes c___ starch into simple sugars within minutes.", answer: "catalyse", given: [0, 1],
            why: "<i>Catalyse</i> is more precise than <i>break down</i>: it names what the enzyme does rather than what happens." },
          { text: "The figures were c___ from the standard curve.", answer: "calculated", given: [0, 1],
            why: "<i>Calculate</i> for <i>work out</i>, and the passive because who did the arithmetic is not the point." }
        ] },

      { id: "2d", section: 2, sectionTitle: "Separable and inseparable", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three can be split by their object",
            options: [
              { text: "break down", why: "<i>break the starch down</i>, <i>break it down</i>." },
              { text: "use up",     why: "<i>use the store up</i>, <i>use it up</i>." },
              { text: "carry out",  why: "<i>carry the assay out</i>, <i>carry it out</i>." },
              { text: "go over", correct: true,
                why: "the odd one: inseparable. <i>Went the method over</i> is not English, with a noun or a pronoun." }
            ] },
          { group: "three mean the amount got larger",
            options: [
              { text: "build up",   why: "accumulate over time: <i>lactate builds up</i>." },
              { text: "go up",      why: "rise, of a number or a level." },
              { text: "accumulate", why: "the single-word equivalent of the first." },
              { text: "break down", correct: true,
                why: "the odd one: it is about separating into parts, and in this subject it usually means the amount of the original is going down." }
            ] },
          { group: "three are what a report would write instead of a phrasal verb",
            options: [
              { text: "absorb",     why: "for <i>take in</i>." },
              { text: "release",    why: "for <i>give off</i>." },
              { text: "constitute", why: "for <i>make up</i>." },
              { text: "take in", correct: true,
                why: "the odd one: it is the phrasal verb itself. The other three are the written forms the lesson is pairing it with." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Which register", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "The same eight meanings, in two registers. Sort them by which one a written report would use.",
        note: { kind: "words", title: "In other words…",
                body: "<p>The phrasal verb is not wrong in writing, and in this subject it is often the standard term — <i>break down</i> appears in every textbook. The rule is softer than it is usually taught: prefer the single word where one exists and means exactly the same, and keep the phrasal verb where it has become the technical name.</p>" },
        bins: [
          { id: "spoken",  label: "At the bench, out loud", hint: "phrasal" },
          { id: "written", label: "In the written report",  hint: "single word" }
        ],
        items: [
          { text: "take in",     bin: "spoken",  why: "the gut takes it in — ordinary, and perfectly clear." },
          { text: "give off",    bin: "spoken",  why: "standard for heat and gas, and still spoken register." },
          { text: "use up",      bin: "spoken",  why: "and note it cannot be made passive comfortably: <i>the store was used up</i> is awkward." },
          { text: "work out",    bin: "spoken",  why: "two meanings in speech — calculate, and exercise — which is one reason reports avoid it." },
          { text: "absorb",      bin: "written", why: "single word, and it takes a passive cleanly: <i>glucose is absorbed</i>." },
          { text: "release",     bin: "written", why: "and it can be nominalised: <i>the release of energy</i>." },
          { text: "deplete",     bin: "written", why: "and it gives <i>depletion</i>, which <i>use up</i> cannot." },
          { text: "calculate",   bin: "written", why: "unambiguous, and it gives <i>calculation</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say the digestion of a piece of bread aloud, using four phrasal verbs from 1A. Then say it again using the single-word verbs from 2B.</p>" } }
    ]
  };
})();
