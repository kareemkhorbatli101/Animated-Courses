/* Unit 8 · Disease and Public Health — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u08-l1", unit: "u08", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name what a rate is a rate of",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "measurement", "sample"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "outbreak", ar: "\u062a\u0641\u0634\u0651\u064d",
            meaning: "a sudden rise in cases in one place",
            with: ["an outbreak of", "contain the outbreak", "the outbreak began"],
            why: "Local and sudden. An outbreak is defined against what is normal for that place, so the same number can be an outbreak in one city and routine in another." },
          { term: "transmission", ar: "\u0627\u0646\u062a\u0642\u0627\u0644 \u0627\u0644\u0639\u062f\u0648\u0649",
            meaning: "the passing of infection from one person to another",
            with: ["interrupt transmission", "transmission rate", "airborne transmission"],
            why: "Another <i>-tion</i> process noun. Interrupting transmission, rather than curing cases, is what ends most epidemics." },
          { term: "immunity", ar: "\u0645\u0646\u0627\u0639\u0629",
            meaning: "protection acquired by infection or vaccination",
            with: ["acquire immunity", "immunity wanes", "population immunity"],
            why: "Acquired, and often temporary. <i>Wanes</i> is the verb that goes with it, which is why reinfection is possible at all." },
          { term: "sanitation", ar: "\u0627\u0644\u0635\u0631\u0641 \u0627\u0644\u0635\u062d\u0651\u064a",
            meaning: "the removal of waste and the supply of clean water",
            with: ["improved sanitation", "basic sanitation", "sanitation and housing"],
            why: "Unglamorous and decisive. It is the main character of the Lesson 5 article, and it is not medicine." },
          { term: "mortality", ar: "\u0627\u0644\u0648\u0641\u064a\u0627\u062a",
            meaning: "death, as a measured quantity",
            with: ["infant mortality", "mortality fell", "the mortality rate"],
            why: "Always a measure, never an event: you can say mortality fell, but not that a person suffered a mortality." },
          { term: "intervention", ar: "\u062a\u062f\u062e\u0651\u0644",
            meaning: "anything deliberately done to change the course of a disease",
            with: ["a public health intervention", "the intervention worked", "intervene early"],
            why: "Deliberately is the whole word. A drug, a pipe and a law are all interventions; a good harvest is not." },
          { term: "numerator", ar: "\u0627\u0644\u0628\u0633\u0637",
            meaning: "the number on top: here, the deaths",
            with: ["the numerator counts", "a reliable numerator", "numerator and denominator"],
            why: "Usually the easier half to count, because deaths are recorded and mild cases are not." },
          { term: "denominator", ar: "\u0627\u0644\u0645\u0642\u0627\u0645",
            meaning: "the number underneath: here, the cases you know about",
            with: ["the denominator is uncertain", "a shifting denominator", "out of how many"],
            why: "The one that moves, and the one the talk is about. A fatality rate can halve with no change in the disease if the denominator doubles." }
        ],
        prompt: "Eight words. Say each meaning before you turn the card. The last two are the pair that decides whether a published rate means anything.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 outbreak</b> — a sudden rise in cases in one place",
          "<b>2 transmission</b> — the passing of infection from one person to another",
          "<b>3 immunity</b> — protection acquired by infection or vaccination",
          "<b>4 sanitation</b> — the removal of waste and the supply of clean water",
          "<b>5 mortality</b> — death, as a measured quantity",
          "<b>6 intervention</b> — anything deliberately done to change the course of a disease",
          "<b>7 numerator</b> — the number on top: here, the deaths",
          "<b>8 denominator</b> — the number underneath: here, the cases you know about"
        ] }] },
        after: "<p>A fatality rate is 7 divided by 8. The talk in On Campus is about what happens when 8 is wrong.</p>" },

            { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A district clinic during an outbreak. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A clinic with a notice board, a hand-washing station, a triage desk with a register, a waiting bench and a water tank outside the window",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "poster",  x: 90,  y: 60,  s: 2.0 },
            { p: "window",  x: 700, y: 60,  s: 2.0 },
            { p: "clock",   x: 420, y: 70,  s: 0.75 },
            { p: "counter", x: 330, y: 300, sx: 2.6, sy: 1.3 },
            { p: "book",    x: 400, y: 318, s: 0.8 },
            { p: "seated",  x: 250, y: 290, s: 1.2 },
            { p: "bench",   x: 620, y: 400, sx: 3.2, sy: 1.5 },
            { p: "flask",   x: 110, y: 330, s: 1.1 },
            { p: "plant",   x: 900, y: 320, s: 0.9 }
          ] },
        pins: [
          { id: "p-board",  x: 14, y: 46, tx: 15, ty: 24, w: 150 },
          { id: "p-wash",   x: 13, y: 90, tx: 15, ty: 68, w: 170 },
          { id: "p-triage", x: 38, y: 90, tx: 40, ty: 63, w: 150 },
          { id: "p-reg",    x: 60, y: 90, tx: 46, ty: 62, w: 150 },
          { id: "p-wait",   x: 84, y: 90, tx: 76, ty: 79, w: 150 },
          { id: "p-tank",   x: 76, y: 44, tx: 76, ty: 24, w: 150 }
        ],
        pairs: [
          { word: "notice board", pin: "p-board",
            why: "where the case numbers go up. In an outbreak it is the fastest communication channel a clinic has." },
          { word: "hand-washing station", pin: "p-wash",
            why: "hyphenated as a modifier. Lesson 5's article argues this did more than any drug." },
          { word: "triage desk", pin: "p-triage",
            why: "<i>triage</i> is sorting by urgency, not by order of arrival. It is a French word and keeps its French vowel." },
          { word: "case register", pin: "p-reg",
            why: "where the denominator comes from. Everything Lesson 5 says about rates depends on what is written here." },
          { word: "waiting area", pin: "p-wait",
            why: "and in an airborne outbreak it is also where transmission happens, which is why clinics redesign it first." },
          { word: "water tank", pin: "p-tank",
            why: "outside the window, and the thing John Snow's map was ultimately about." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        carry: "1a",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "Clean water and waste removal together are s___.", answer: "sanitation", given: [0, 1, 2],
            why: "<i>Sanitation</i> — and the article argues it mattered more than medicine." },
          { text: "An i___ is anything done deliberately to change the course of a disease.", answer: "intervention", given: [0, 1, 2],
            why: "<i>intervene → intervention</i>." },
          { text: "The d___ is the number of recorded cases, not the number infected.", answer: "denominator", given: [0, 1, 2],
            why: "<i>Denominator</i> — the bottom of the fraction, and the weak point." },
          { text: "M___ from tuberculosis fell for decades before any treatment existed.", answer: "mortality", given: [0, 1, 2],
            why: "<i>Mortality</i> = death as a measured quantity." }
        ] },

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        concepts: ["word", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the argument in Lesson 5 is conducted in.",
        items: [
          { text: "A sudden rise in cases in one place is an o___ .", answer: "outbreak", given: [0, 1],
            why: "One word. An <i>epidemic</i> is larger, a <i>pandemic</i> crosses continents, and the boundaries are matters of convention rather than of biology." },
          { text: "T___ is the passing of infection from one person to the next.", answer: "transmission", given: [0, 1],
            why: "<i>transmit → transmission</i>, and uncountable in this sense." },
          { text: "I___ may be acquired by infection or by vaccination.", answer: "immunity", given: [0, 1],
            why: "Uncountable, and note the adjective is <i>immune</i>, which takes <i>to</i>: <i>immune to the strain</i>." },
          { text: "The number on top of the fraction is the n___ .", answer: "numerator", given: [0, 1],
            why: "From <i>number</i>. The one underneath is the <i>denominator</i>, and it is the one that goes wrong." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The prefix re-", letter: "A",
        concepts: ["read"],
        kind: "build", task: null, n: 0,

        items: [

          { root: "infect", affix: "re-", answer: "reinfect",

            why: "To catch it a second time \u2014 which is what immunity is supposed to prevent, and sometimes does not." },

          { root: "currence", affix: "re-", answer: "recurrence",

            why: "The disease returning in the same patient. Two <i>r</i>s, because the root begins with one." },

          { root: "sistant", affix: "re-", answer: "resistant",

            why: "Here <i>re-</i> is <i>back</i> rather than <i>again</i>: a resistant strain stands back against the treatment." },

          { root: "cover", affix: "re-", answer: "recover",

            why: "To get better. <i>Re-cover</i>, with a hyphen, is to put a lid back on \u2014 the hyphen is the only thing separating them." },

          { root: "emerge", affix: "pre-", answer: "preemerge",

            why: "<i>pre-</i> is before, not again. Different prefix, different relation to time, and this one takes a hyphen in most writing: <i>pre-emerge</i>." },

          { root: "spread", affix: "wide-", answer: "widespread",

            why: "Not a prefix at all but the first half of a compound, which is how English builds many of its commonest adjectives in this field." }

        ],
        prompt: "<b>re-</b> means <i>again</i> or <i>back</i>, and in this subject it is everywhere, because disease is a thing that returns. Build each word \u2014 and note where the hyphen is doing real work.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>re + cover → <b>re</b>cover · re + infect → <b>re</b>infect · re + currence → <b>re</b>currence · re + sistant → <b>re</b>sistant · re + duce → <b>re</b>duce.<br>Note that <i>recover</i> and <i>re-cover</i> are different words: the hyphen keeps <i>cover again</i> apart from <i>get better</i>.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "RE- IN PUBLIC HEALTH",
          blocks: [{ lines: [
            "A <b>resistant</b> strain survives the treatment that used to clear it.",
            "A <b>recurrence</b> is the disease returning in the same patient.",
            "To <b>reinfect</b> is to catch it a second time, which immunity is supposed to prevent.",
            "To <b>recover</b> is to get better. To <b>re-cover</b> is to put a lid back on — the hyphen is doing real work."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The prefix re-", letter: "B",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the word. Each is built with this unit's prefix.",
        items: [
          { text: "A r___ strain survives the drug that once cleared it.", answer: "resistant", given: [0, 1, 2],
            why: "<i>re + sistant</i>: standing against." },
          { text: "A r___ is the same disease returning in the same patient.", answer: "recurrence", given: [0, 1, 2],
            why: "<i>re + currence</i>: running again." },
          { text: "Immunity is supposed to stop you being r___.", answer: "reinfected", given: [0, 1, 2],
            why: "<i>re + infected</i>." },
          { text: "Most patients r___ within a fortnight without treatment.", answer: "recover", given: [0, 1, 2],
            why: "<i>recover</i>, one word, no hyphen — <i>re-cover</i> would mean putting a lid back on." }
        ] },

      { id: "2c", section: 2, sectionTitle: "The prefix re-", letter: "C",
        concepts: ["word", "evidence", "sample"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more. Two of them only look as though they carry the prefix.",
        items: [
          { text: "A disease declared eliminated can still r___ if coverage falls.", answer: "reappear", given: [0, 1],
            why: "<i>re + appear</i>. Elimination is a state that has to be maintained, not an event." },
          { text: "Researchers tried to r___ the finding in a second population.", answer: "replicate", given: [0, 1],
            why: "<i>re + plicate</i>, to fold again. Here the prefix is doing real work." },
          { text: "Clean water helped to r___ mortality long before any drug existed.", answer: "reduce", given: [0, 1],
            why: "A trap: <i>reduce</i> is <i>re + duce</i>, to lead back, and it has nothing to do with doing something twice." },
          { text: "The study was later r___ by a larger trial.", answer: "refuted", given: [0, 1],
            why: "Another trap: <i>refute</i> comes whole from Latin and the <i>re-</i> is not the English prefix at all." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The prefix re-", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three mean the disease came back",
            options: [
              { text: "recurrence",  why: "the same disease returning in the same patient." },
              { text: "relapse",     why: "a return after an apparent recovery." },
              { text: "reinfection", why: "catching it again, from outside." },
              { text: "resistance", correct: true,
                why: "the odd one: resistance is the organism surviving the treatment, which is why the disease did not go away in the first place." }
            ] },
          { group: "three really carry this unit's prefix",
            options: [
              { text: "reinfect",   why: "<i>re + infect</i>: you can be infected, then infected again." },
              { text: "reappear",   why: "<i>re + appear</i>." },
              { text: "replicate",  why: "<i>re + plicate</i>, to fold again — and a study is replicated by doing it again." },
              { text: "refute", correct: true,
                why: "the odd one: it arrives whole from Latin, and nothing is being done a second time." }
            ] },
          { group: "three are parts of a rate",
            options: [
              { text: "numerator",   why: "the number on top." },
              { text: "denominator", why: "the number underneath." },
              { text: "ratio",       why: "what you get when you divide one by the other." },
              { text: "mortality", correct: true,
                why: "the odd one: mortality is the thing being counted, not a part of the arithmetic. Putting it in the wrong column is how <i>mortality rate</i> gets quoted with no denominator at all." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Which number moved", letter: "A",
        concepts: ["comparison", "measurement", "cause"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight things that would change a reported case fatality rate. Sort them by which half of the fraction they move.",
        note: { kind: "words", title: "In other words…",
                body: "<p>A case fatality rate is deaths divided by known cases. Almost everything that makes the figure move during an outbreak moves the bottom, and almost every headline about it is written as though it had moved the top.</p>" },
        bins: [
          { id: "top",    label: "Changes the deaths",      hint: "the numerator" },
          { id: "bottom", label: "Changes the known cases", hint: "the denominator" }
        ],
        items: [
          { text: "a treatment that keeps patients alive", bin: "top",
            why: "fewer deaths, same cases. The rate falls and the fall is real." },
          { text: "an outbreak reaching an older population", bin: "top",
            why: "more deaths from the same number of cases." },
          { text: "deaths recorded under another cause", bin: "top",
            why: "fewer counted deaths, and the fall is an artefact rather than a result." },
          { text: "a second wave with a deadlier strain", bin: "top",
            why: "the only card here that is about the organism rather than about the counting." },
          { text: "testing extended to people with mild symptoms", bin: "bottom",
            why: "many more known cases, same deaths. The rate drops sharply and nothing has improved." },
          { text: "a backlog of untested cases cleared at once", bin: "bottom",
            why: "the denominator jumps on one day, which produces a cliff in the published rate." },
          { text: "testing restricted to hospital admissions", bin: "bottom",
            why: "the known cases become the sickest ones, and the rate rises for that reason alone." },
          { text: "an asymptomatic infection nobody looks for", bin: "bottom",
            why: "the hardest card: it changes the true denominator without changing the recorded one, so the published rate is wrong and nothing visible has moved." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Say what a case fatality rate divides by what, and name one way the bottom number can be wrong.</p>" } }
    ]
  };
})();
