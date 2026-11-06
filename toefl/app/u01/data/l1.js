/* Unit 1 · How We Learn — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u01-l1", unit: "u01", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Identify the methods memory research distinguishes",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify ways of studying", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Nine things students do when they study. Two of them feel productive and are not — the rest of this unit is about which.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 re-read</b> — go through the same notes again",
          "<b>2 highlight</b> — mark the important lines in colour",
          "<b>3 test yourself</b> — close the book and try to recall",
          "<b>4 space your sessions</b> — spread the same hours over more days",
          "<b>5 summarise from memory</b> — write what you remember, then check",
          "<b>6 explain it aloud</b> — say it to someone who does not know it",
          "<b>7 interleave</b> — alternate two subjects instead of blocking one",
          "<b>8 take a break</b> — stop before the point of no return",
          "<b>9 check what you got wrong</b> — go back to the errors, not the whole chapter"
        ] }] },
        after: "<p>Keep 1 and 2 in mind. They are the two the research keeps finding against.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify ways of studying", letter: "B",
        kind: "match", task: null, n: 0,
        prompt: "A place to study, and the things in it. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A desk against a wall, with a bookshelf, a window, a wall clock, an open laptop, a stack of books, loose pages and a pen",
          parts: [
            { p: "wall",  x: 0,   y: 0,   sx: 10,  sy: 5.4 },
            { p: "floor", x: 0,   y: 335, sx: 10,  sy: 2.3 },
            { p: "shelf",   x: 60,  y: 50,  s: 2.4 },
            { p: "window",  x: 640, y: 55,  s: 2.2 },
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
          { id: "p-clock",  x: 86, y: 33, tx: 91, ty: 17, w: 120 },
          { id: "p-book",   x: 18, y: 86, tx: 28, ty: 68, w: 150 },
          { id: "p-laptop", x: 40, y: 86, tx: 47, ty: 66, w: 150 },
          { id: "p-notes",  x: 62, y: 86, tx: 58, ty: 66, w: 140 },
          { id: "p-pen",    x: 82, y: 62, tx: 67, ty: 69, w: 150 }
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
        kind: "read-only", task: null, n: 0,
        prompt: "Read the summary card. It uses the academic vocabulary this unit teaches.",
        note: { kind: "words", title: "Academic language",
                body: "<i>research</i><i>revise</i><i>accurately</i><i>challenge</i><i>improvement</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHAT THE RESEARCH FINDS",
          blocks: [{ lines: [
            "Decades of <b>research</b> agree on one uncomfortable finding.",
            "The methods that feel easiest produce the smallest <b>improvement</b>.",
            "Students who <b>revise</b> by re-reading predict their own scores badly; students who test themselves predict them <b>accurately</b>.",
            "The <b>challenge</b> is that the better method feels worse while you are doing it."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "Learn what the evidence says", letter: "B",
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
