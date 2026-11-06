/* Unit 1 · How We Learn — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u01-l1", unit: "u01", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Identify the methods memory research distinguishes",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify ways of studying", letter: "A",
        concepts: ["word", "recall"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine things students do when they study. Say what each one means <i>before</i> you turn it over \u2014 that is the method this whole unit argues for, and you are using it on the unit's own vocabulary.",
        cards: [
          { term: "re-read", ar: "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629",
            meaning: "go through the same notes again",
            with: ["re-read the chapter", "re-read my notes", "re-read it twice"],
            why: "One of the two the research keeps finding against. It feels like progress because each pass is easier." },
          { term: "highlight", ar: "\u062a\u0638\u0644\u064a\u0644 \u0627\u0644\u0646\u0635",
            meaning: "mark the important lines in colour",
            with: ["highlight a passage", "highlight in yellow", "highlight the key point"],
            why: "The other one. Choosing what to mark is the useful part, and most of us mark almost everything." },
          { term: "test yourself", ar: "\u0627\u062e\u062a\u0628\u0631 \u0646\u0641\u0633\u0643",
            meaning: "close the book and try to recall",
            with: ["test yourself on it", "test yourself from memory", "test yourself before you check"],
            why: "The finding the whole unit rests on. Harder than re-reading, and that is why it works." },
          { term: "space your sessions", ar: "\u0648\u0632\u0651\u0639 \u062c\u0644\u0633\u0627\u062a\u0643",
            meaning: "spread the same hours over more days",
            with: ["space them out", "spaced practice", "space your revision"],
            why: "The same hours, moved apart, are worth more than the same hours together." },
          { term: "summarise from memory", ar: "\u0644\u062e\u0651\u0635 \u0645\u0646 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
            meaning: "write what you remember, then check",
            with: ["summarise it briefly", "summarise the argument", "a written summary"],
            why: "Testing yourself with a pen. What you cannot write down, you did not have." },
          { term: "explain it aloud", ar: "\u0627\u0634\u0631\u062d\u0647 \u0628\u0635\u0648\u062a \u0639\u0627\u0644\u064d",
            meaning: "say it to someone who does not know it",
            with: ["explain it to someone", "explain it in your own words", "explain the reasoning"],
            why: "The fastest way to find the sentence you cannot finish \u2014 which is the part you do not yet know." },
          { term: "interleave", ar: "\u0627\u0644\u062a\u0646\u0627\u0648\u0628 \u0628\u064a\u0646 \u0627\u0644\u0645\u0648\u0636\u0648\u0639\u0627\u062a",
            meaning: "alternate two subjects instead of blocking one",
            with: ["interleave two topics", "interleaved practice", "interleave rather than block"],
            why: "Mixing forces you to choose the method each time, instead of applying the one just demonstrated." },
          { term: "take a break", ar: "\u062e\u0630 \u0627\u0633\u062a\u0631\u0627\u062d\u0629",
            meaning: "stop before the point of no return",
            with: ["take a short break", "take a break from it", "a ten-minute break"],
            why: "Stopping while it is still going well is what lets you start again tomorrow." },
          { term: "check what you got wrong", ar: "\u0631\u0627\u062c\u0650\u0639 \u0623\u062e\u0637\u0627\u0621\u0643",
            meaning: "go back to the errors, not the whole chapter",
            with: ["check your answers", "go back over the mistakes", "check what you missed"],
            why: "Re-reading the whole chapter spends most of the time on what you already knew." }
        ],
        after: "<p>Keep <b>re-read</b> and <b>highlight</b> in mind. They are the two the research keeps finding against \u2014 and the two most students name first.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify ways of studying", letter: "B",
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A place to study, and the things in it. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A desk against a wall, with a bookshelf, a window, a wall clock, an open laptop, a stack of books, loose pages and a pen",
          parts: [
            { p: "wall",  x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor", x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "shelf",   x: 60,  y: 50,  s: 2.4 },
            { p: "window",  x: 600, y: 55,  s: 2.2 },
            { p: "clock",   x: 880, y: 58,  s: 0.7 },
            { p: "desk",    x: 180, y: 330, sx: 6.4, sy: 2.0 },
            { p: "books",   x: 250, y: 316, s: 0.85 },
            { p: "laptop",  x: 420, y: 322, s: 1.0 },
            { p: "paper",   x: 560, y: 330, s: 0.75 },
            { p: "pen",     x: 650, y: 352, s: 0.6 },
            { p: "plant",   x: 862, y: 300, s: 1.0 }
          ] },
        pins: [
          { id: "p-shelf",  x: 14, y: 62, tx: 18, ty: 30, w: 140 },
          { id: "p-clock",  x: 88, y: 36, tx: 91, ty: 17, w: 120 },
          { id: "p-book",   x: 18, y: 86, tx: 28, ty: 68, w: 150 },
          { id: "p-laptop", x: 40, y: 86, tx: 47, ty: 66, w: 150 },
          { id: "p-notes",  x: 62, y: 86, tx: 58, ty: 66, w: 140 },
          { id: "p-pen",    x: 86, y: 78, tx: 67, ty: 69, w: 150 }
        ],
        pairs: [
          { word: "bookshelf",   pin: "p-shelf",
            why: "one word, no space: the shelf you keep books on." },
          { word: "clock",       pin: "p-clock",
            why: "the one on the wall. A session you do not time tends to become a session you do not finish." },
          { word: "textbook",    pin: "p-book",
            why: "the set book for a course, as against any book you happen to read." },
          { word: "laptop",      pin: "p-laptop",
            why: "a portable computer. <i>Notebook</i> also means this, which is why the paper kind is usually <i>notes</i>." },
          { word: "notes",       pin: "p-notes",
            why: "plural and uncountable in this sense: <i>my notes</i>, never <i>a note</i> for a page of them." },
          { word: "highlighter", pin: "p-pen",
            why: "the pen in exercise 1A, method 2 — the one the evidence keeps finding against." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify ways of studying", letter: "C",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words. The first letters are given.",
        items: [
          { text: "Close the book and t___ yourself on what you have just read.", answer: "test", given: [0],
            why: "<i>test yourself</i> — the method this unit argues for." },
          { text: "Spread the same four hours over a week: s___ your sessions.", answer: "space", given: [0, 1],
            why: "<i>space</i> as a verb: spread out over time." },
          { text: "Trying to r___ something is harder than reading it again, and that is the point.", answer: "recall", given: [0, 1],
            why: "<i>recall</i> = bring back from memory without looking." },
          { text: "It helps to e___ an idea aloud to someone who does not know it.", answer: "explain", given: [0, 1],
            why: "<i>explain</i> forces you to find the gaps in what you know." }
        ] },

      { id: "1d", section: 1, sectionTitle: "Identify ways of studying", letter: "D",
        carry: "1a",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. Each one names something in the list you read in 1A.",
        items: [
          { text: "Alternating two subjects instead of finishing one is called i___.", answer: "interleaving", given: [0, 1],
            why: "<i>interleave</i> is the verb; the method itself is <i>interleaving</i>. Think of shuffling two decks together." },
          { text: "Marking lines in colour, or h___, leaves the page changed and the memory untouched.", answer: "highlighting", given: [0, 1],
            why: "The <i>-ing</i> form is doing duty as a noun after <i>or</i>, matching <i>marking</i> before it." },
          { text: "She wrote a s___ of the chapter from memory first, then opened the book to check it.", answer: "summary", given: [0],
            why: "A countable noun: <i>a summary</i>. The verb is <i>summarise</i>." },
          { text: "Leaving a g___ between two sessions is what makes the second one work.", answer: "gap", given: [0],
            why: "<i>gap</i> is the ordinary word for what the research calls <i>the spacing interval</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Learn what the evidence says", letter: "A",
        concepts: ["read", "evidence", "sample"],
        kind: "build", task: null, n: 0,

        family: {

          word: "improve",

          forms: [

            { part: "verb", word: "im·PROVE" },

            { part: "noun", word: "im·PROVE·ment", note: "the result, not the effort" },

            { part: "adjective", word: "im·PROVED", note: "used of the thing changed" },

            { part: "adverb", word: "—", note: "no adverb exists" },

          ]

        },
        prompt: "The card below uses five academic words. Four of them are built from a smaller word and a piece on the front or the end. Drag the right piece onto each root.",
        note: { kind: "words", title: "Academic language",
                body: "<i>research</i><i>revise</i><i>accurately</i><i>challenge</i><i>improvement</i>" },
        items: [
          { root: "improve", affix: "-ment", answer: "improvement",
            why: "<i>-ment</i> turns a verb into the name of its result. You improve; the improvement is what you get." },
          { root: "accurate", affix: "-ly", answer: "accurately",
            why: "<i>-ly</i> turns an adjective into how something is done. An accurate prediction is predicted accurately." },
          { root: "search", affix: "re-", answer: "research",
            why: "<i>re-</i> here is not \u201cagain\u201d but \u201cthoroughly, over and over\u201d \u2014 searching that keeps going." },
          { root: "comfort", affix: "un-", answer: "uncomfortable",
            why: "<i>un-</i> negates. The card calls the finding uncomfortable: it is not a finding anyone enjoys." },
          { root: "predict", affix: "-ion", answer: "prediction",
            why: "<i>-ion</i> turns a verb into the thing done. Students predict; the prediction is what they said." },
          { root: "agree", affix: "dis-", answer: "disagree",
            why: "<i>dis-</i> reverses. Decades of research <i>agree</i>; one study that did not would disagree." }
        ],
        text: { every: 1, mastColor: "blue", masthead: "WHAT THE RESEARCH FINDS",
          blocks: [{ lines: [
            "Decades of <b>research</b> agree on one uncomfortable finding.",
            "The methods that feel easiest produce the smallest <b>improvement</b>.",
            "Students who <b>revise</b> by re-reading predict their own scores badly; students who test themselves predict them <b>accurately</b>.",
            "The <b>challenge</b> is that the better method feels worse while you are doing it."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Learn what the evidence says", letter: "B",
        concepts: ["word", "evidence", "sample"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the academic words. Watch the word form — the sentence tells you whether you need a noun, a verb or an adverb.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>These five words change form: <i>research → researcher</i>, <i>revise → revision</i>, <i>accurate → accurately</i>, <i>improve → improvement</i>. The 2026 test's reading items test exactly this.</p>" },
        items: [
          { text: "She spent the summer doing r___ on how people forget.", answer: "research", given: [0, 1],
            why: "A noun here — <i>doing research</i>, not <i>doing researcher</i>." },
          { text: "Read your draft again tomorrow and r___ it.", answer: "revise", given: [0, 1],
            why: "A verb after <i>and</i>: <i>revise</i>, not <i>revision</i>." },
          { text: "Students who test themselves judge their own knowledge a___.", answer: "accurately", given: [0, 1, 2],
            why: "An adverb modifying <i>judge</i>: <i>accurate → accurately</i>." },
          { text: "Attending every week produced a steady i___ in her marks.", answer: "improvement", given: [0, 1, 2],
            why: "<i>a steady ___</i> needs a noun: <i>improve → improvement</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Learn what the evidence says", letter: "C",
        concepts: ["word", "comparison", "evidence"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more academic words. Again the sentence, not the meaning, tells you which form to write.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Noun from verb: <i>predict → prediction</i>, <i>retain → retention</i>. Adjective from noun: <i>evidence → evident</i>. The endings <i>-tion</i> and <i>-sion</i> make nouns out of verbs more often than any other ending in academic English.</p>" },
        items: [
          { text: "The e___ for this effect comes from more than a hundred separate experiments.", answer: "evidence", given: [0, 1],
            why: "Uncountable: <i>the evidence</i>, never <i>an evidence</i> or <i>evidences</i>." },
          { text: "Across ages and subjects the result is remarkably c___.", answer: "consistent", given: [0, 1],
            why: "An adjective after <i>is</i>. The noun is <i>consistency</i>." },
          { text: "The re-readers made a confident p___ about their own scores and were wrong.", answer: "prediction", given: [0, 1],
            why: "<i>a confident ___</i> needs a countable noun: <i>predict → prediction</i>." },
          { text: "A week later the testing group showed far better r___ of the material.", answer: "retention", given: [0, 1],
            why: "<i>retain → retention</i>. <i>Retention</i> is what is kept; <i>recall</i> is the act of getting it back." }
        ] },

      { id: "2d", section: 2, sectionTitle: "Learn what the evidence says", letter: "D",
        concepts: ["word", "evidence"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not, and read why.",
        items: [
          { group: "three happen with the book shut",
            options: [
              { text: "recall",   why: "done from memory, with nothing in front of you." },
              { text: "recite",   why: "said aloud from memory." },
              { text: "retrieve", why: "the research word for bringing something back out of memory." },
              { text: "review", correct: true,
                why: "the odd one: reviewing means looking at the material again, so the book is open. That is the whole distinction this unit turns on." }
            ] },
          { group: "three name a piece of research",
            options: [
              { text: "experiment", why: "a controlled comparison between conditions." },
              { text: "trial",      why: "one run of an experiment, or a study in medicine." },
              { text: "study",      why: "as a countable noun it means a piece of research: <i>a 2006 study</i>." },
              { text: "syllabus", correct: true,
                why: "the odd one: a syllabus is a course document. Note that <i>study</i> here is a noun, not the verb you do at a desk." }
            ] },
          { group: "three say an effect is small",
            options: [
              { text: "modest",   why: "small but real — the usual hedge in a results section." },
              { text: "slight",   why: "small enough to be easy to miss." },
              { text: "marginal", why: "barely large enough to matter." },
              { text: "substantial", correct: true,
                why: "the odd one: substantial means large. Writers use these four to size a finding, so reading them wrongly reverses the claim." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Build words with dis-", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "The prefix <i>dis-</i> does two different jobs. Sort these eight words by which job it is doing.",
        note: { kind: "words", title: "In other words…",
                body: "<p>On a noun or an adjective, <i>dis-</i> usually makes an opposite quality. On a verb it usually undoes the action. Knowing which you are looking at tells you the word class before you know the word.</p>" },
        bins: [
          { id: "quality", label: "The opposite quality", hint: "nouns and adjectives" },
          { id: "undo",    label: "Undo the action",      hint: "verbs" }
        ],
        items: [
          { text: "dishonest",     bin: "quality", why: "adjective: not honest." },
          { text: "disorganised",  bin: "quality", why: "adjective: not organised. A disorganised desk, a disorganised argument." },
          { text: "disadvantage",  bin: "quality", why: "noun: the opposite of an advantage." },
          { text: "disbelief",     bin: "quality", why: "noun: the opposite of belief, and uncountable." },
          { text: "disconnect",    bin: "undo",    why: "verb: undo a connection that was there." },
          { text: "discontinue",   bin: "undo",    why: "verb: stop something that was running." },
          { text: "disprove",      bin: "undo",    why: "verb: undo a proof by showing it false. Not the same as <i>fail to prove</i>." },
          { text: "disregard",     bin: "undo",    why: "verb: set aside something you had been taking into account." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write down the nine methods from 1A. Which two did the card argue against, and why?</p>" } }
    ]
  };
})();
