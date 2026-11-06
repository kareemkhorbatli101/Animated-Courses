/* lab-data.js — one scene per NEW exercise kind, with deliberately awkward
   data: an option that contains another option, a distractor in the word bank,
   a sentence with the target word repeated, a five-row table. If the kind
   survives this page it will survive the book. */
(function () {
  window.PAGE = {
    id: "lab", unit: "u01", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Engine bench for the new exercise kinds",
    scenes: [

      { id: "match", section: 1, sectionTitle: "Match to a picture", letter: "A",
        kind: "match", n: 6,
        prompt: "Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560, alt: "A lecture room with a whiteboard, a projector screen, a lectern, a clock and two rows of desks",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 5.4 },
            { p: "floor", x: 0, y: 335, sx: 10, sy: 2.3 },
            { p: "board",   x: 70,  y: 70,  s: 2.4 },
            { p: "screen",  x: 600, y: 30,  s: 2.6 },
            { p: "clock",   x: 892, y: 48,  s: 0.72 },
            { p: "podium",  x: 462, y: 196, s: 1.35 },
            { p: "teacher", x: 322, y: 178, s: 1.5 },
            { p: "longdesk", x: 70,  y: 398, sx: 3.3, sy: 1.5 },
            { p: "longdesk", x: 600, y: 398, sx: 3.3, sy: 1.5 },
            { p: "seated",  x: 148, y: 318, s: 1.2 },
            { p: "seated",  x: 686, y: 318, s: 1.2 },
            { p: "plant",   x: 20,  y: 300, s: 0.9 }
          ] },
        pins: [
          { id: "p-board",   x: 15, y: 52, tx: 19,   ty: 40 },
          { id: "p-screen",  x: 73, y: 52, tx: 73,   ty: 41 },
          { id: "p-clock",   x: 88, y: 31, tx: 92.5, ty: 19, w: 104 },
          { id: "p-lectern", x: 42, y: 64, tx: 52,   ty: 56 },
          { id: "p-row",     x: 16, y: 92, tx: 25,   ty: 81 },
          { id: "p-aisle",   x: 54, y: 78, tx: 50,   ty: 88, w: 118 }
        ],
        pairs: [
          { word: "whiteboard", pin: "p-board", why: "the writing surface at the front" },
          { word: "projector screen", pin: "p-screen", why: "what the slides land on" },
          { word: "lectern", pin: "p-lectern", why: "the stand a lecturer reads from" },
          { word: "row", pin: "p-row", why: "one line of seats" },
          { word: "clock", pin: "p-clock", why: "what everyone checks at minute fifty" },
          { word: "aisle", pin: "p-aisle", why: "the gap you walk down" }
        ] },

      { id: "match2", section: 1, sectionTitle: "Match to a picture", letter: "B",
        kind: "match", n: 4,
        prompt: "No picture: the same renderer as rows of meanings.",
        pairs: [
          { word: "recall", pin: "r1", label: "bring something back without looking at it", why: "the effort is the point" },
          { word: "review", pin: "r2", label: "look at the same material again", why: "feels like learning, often is not" },
          { word: "revise", pin: "r3", label: "change a draft after reading it", why: "British English also uses it for 'study'" },
          { word: "retain", pin: "r4", label: "keep something in memory over time", why: "the outcome, not the activity" }
        ] },

      { id: "sort", section: 2, sectionTitle: "Sort", letter: "A",
        kind: "sort", n: 6,
        prompt: "Which of these is the learner doing, and which is the learner only watching?",
        bins: [
          { id: "active", label: "Active recall", hint: "the material is closed" },
          { id: "passive", label: "Passive review", hint: "the material is open" }
        ],
        items: [
          { text: "covering the page and reciting", bin: "active", why: "the page is shut, so retrieval is forced" },
          { text: "highlighting a paragraph", bin: "passive", why: "the eye moves; memory is not asked for anything" },
          { text: "writing an answer from memory", bin: "active", why: "production, not recognition" },
          { text: "re-reading a chapter", bin: "passive", why: "familiarity is mistaken for knowledge" },
          { text: "explaining it to someone", bin: "active", why: "you find the gaps as you speak" },
          { text: "copying out the notes", bin: "passive", why: "the hand works, the memory does not" }
        ] },

      { id: "bank", section: 2, sectionTitle: "Word bank", letter: "B",
        kind: "wordbank", n: 5,
        extra: ["retain", "rehearse"],
        items: [
          { text: "Students who ___ themselves remember more a week later.", answer: "test", why: "the verb the research uses" },
          { text: "Spacing the sessions out ___ the forgetting curve.", answer: "flattens", why: "the metaphor is a curve, so it flattens" },
          { text: "A short ___ before sleep is worth a long one at midnight.", answer: "session", why: "a countable noun here" },
          { text: "Highlighting gives a false sense of ___ .", answer: "mastery", why: "the article-free abstract noun" },
          { text: "The effect is strongest when the ___ is difficult.", answer: "retrieval", why: "the noun from 'retrieve'" }
        ] },

      { id: "seq", section: 3, sectionTitle: "Sequence", letter: "A",
        kind: "sequence", n: 5,
        prompt: "The SQ3R reading method. Put its stages in order.",
        steps: [
          { text: "Survey the headings", pos: 1, why: "you need the shape before the detail" },
          { text: "Turn each heading into a question", pos: 2, why: "a question gives the reading a target" },
          { text: "Read one section", pos: 3, why: "reading comes after the question, not before" },
          { text: "Recite the answer without looking", pos: 4, why: "the retrieval step is what makes it work" },
          { text: "Review the whole chapter", pos: 5, why: "last, and briefly" }
        ] },

      { id: "efx", section: 3, sectionTitle: "Error correction", letter: "B",
        kind: "errorfix", n: 4,
        items: [
          { text: "Research show that spacing helps.", wrong: "show", right: "shows", why: "'research' is uncountable, so the verb is singular" },
          { text: "She has been studying since three hours.", wrong: "since", right: "for", why: "'for' with a length of time, 'since' with a point in time" },
          { text: "Most of student prefer the morning session.", wrong: "student", right: "students", why: "'most of' takes a plural noun" },
          { text: "He explained me the method.", wrong: "explained", right: "explained to", why: "'explain' needs 'to' before the person" }
        ] },

      { id: "sit", section: 4, sectionTitle: "Locate in text", letter: "A",
        kind: "selectintext", n: 3,
        prompt: "Click the one sentence in each paragraph that does the job described.",
        items: [
          { prompt: "Which sentence states the finding, rather than the method?",
            text: "Roediger and Karpicke gave two groups the same passage. One group re-read it four times; the other read it once and then recalled it three times. A week later the recall group remembered half again as much. The re-reading group had been confident they would do better.",
            answer: "A week later the recall group remembered half again as much.",
            why: "a finding reports a result; the sentences around it report procedure and attitude" },
          { prompt: "Which sentence concedes a limitation?",
            text: "Spaced practice beats massed practice in almost every study. The effect holds across ages and subjects. It is smaller, however, when the test comes within a day of the learning. Teachers who see only short-term gains may therefore underrate it.",
            answer: "It is smaller, however, when the test comes within a day of the learning.",
            why: "'however' plus a narrowed condition is the concession" },
          { prompt: "Which sentence gives the author's recommendation?",
            text: "Highlighting is the most popular study technique and one of the least effective. It marks what looks important without asking anything of memory. Students should replace it with a question in the margin. The habit is hard to break because it feels like work.",
            answer: "Students should replace it with a question in the margin.",
            why: "'should' plus an action is a recommendation, not a description" }
        ] },

      { id: "tbl", section: 4, sectionTitle: "Complete the table", letter: "B",
        kind: "table", n: 5,
        prompt: "Complete the table from the lecture.",
        caption: "Two study methods compared",
        head: ["", "Re-reading", "Self-testing"],
        rows: [
          ["What the learner does", "looks at the ___ again", "closes it and ___"],
          ["How it feels", "___", "difficult"],
          ["Recall after a week", "about 40%", "about ___%"]
        ],
        gaps: [
          { answer: "material", why: "the lecturer's word for what is read" },
          { answer: "recalls", why: "third person, following 'closes'" },
          { answer: "easy", why: "the contrast with 'difficult' in the next cell" },
          { answer: "60", why: "half again as much as 40" }
        ] },

      { id: "notes", section: 5, sectionTitle: "Complete the notes", letter: "A",
        kind: "notes", n: 4,
        prompt: "Complete these notes from the talk.",
        title: "Lecture 3 — why testing works",
        lines: [
          "Main claim: retrieval ___ memory, it does not just measure it",
          "- Evidence: Roediger & ___ , 2006",
          "- Size of effect: ___ % more retained at one week",
          "- Caveat: effect shrinks when the test is ___"
        ],
        gaps: [
          { answer: "changes", why: "the claim is causal, not diagnostic" },
          { answer: "Karpicke", why: "the second author's name, spelled from the slide" },
          { answer: "50", why: "half again as much" },
          { answer: "immediate", why: "the opposite of delayed" }
        ] },

      { id: "dict", section: 5, sectionTitle: "Dictation", letter: "B",
        kind: "dictation", n: 3,
        items: [
          { answer: "The effect is largest when recall is difficult", why: "listen for the comparative 'largest'" },
          { answer: "She has been revising for three weeks", why: "'for' plus a length of time" },
          { answer: "Most students underestimate how much they forget", why: "'how much' introduces the clause" }
        ] },

      { id: "mp", section: 6, sectionTitle: "Minimal pairs", letter: "A",
        kind: "minimal-pairs", n: 4,
        focus: "<p>Two vowels English keeps apart that many languages merge. The first is long and tense; the second is short and relaxed. " +
               "Length is not the whole difference — for /iː/ the tongue is higher and further forward, and the lips are spread.</p>" +
               "<i>/iː/ — seat · least · feel</i><i>/ɪ/ — sit · list · fill</i>",
        items: [
          { say: "seat", options: [{ text: "seat", correct: true, why: "long /iː/" }, { text: "sit" }] },
          { say: "fill", options: [{ text: "feel" }, { text: "fill", correct: true, why: "short /ɪ/" }] },
          { say: "least", options: [{ text: "least", correct: true, why: "long /iː/ before /st/" }, { text: "list" }] },
          { say: "it", options: [{ text: "eat" }, { text: "it", correct: true, why: "short /ɪ/, unstressed" }] }
        ] },

      { id: "para", section: 6, sectionTitle: "Paraphrase", letter: "B",
        kind: "paraphrase", n: 3,
        items: [
          { source: "Although highlighting is popular, it does little for recall.",
            options: [
              { text: "Highlighting is widely used but has almost no effect on memory.", correct: true, why: "keeps the concession and the weak effect" },
              { text: "Highlighting is unpopular because it does little for recall." },
              { text: "Because highlighting helps recall, it is popular." },
              { text: "Highlighting is popular and improves recall a little." }
            ] },
          { source: "The advantage of spacing disappears if the test follows immediately.",
            options: [
              { text: "Spacing stops helping when the test comes straight away.", correct: true, why: "condition and loss of advantage both survive" },
              { text: "Spacing helps most when the test comes straight away." },
              { text: "The test should follow immediately so that spacing helps." },
              { text: "Spacing has no advantage at any point." }
            ] },
          { source: "Students who tested themselves retained half again as much as those who re-read.",
            options: [
              { text: "Self-testers remembered about 50% more than re-readers.", correct: true, why: "'half again as much' is +50%" },
              { text: "Self-testers remembered about half as much as re-readers." },
              { text: "Re-readers remembered 50% more than self-testers." },
              { text: "Both groups remembered roughly the same amount." }
            ] }
        ] },

      { id: "odd", section: 7, sectionTitle: "Odd one out", letter: "A",
        kind: "oddone", n: 3,
        items: [
          { group: "three are kinds of assessment", options: [
            { text: "quiz" }, { text: "midterm" }, { text: "syllabus", correct: true, why: "a syllabus is a document, not an assessment" }, { text: "final" } ] },
          { group: "three describe effort", options: [
            { text: "diligent" }, { text: "conscientious" }, { text: "assiduous" }, { text: "articulate", correct: true, why: "'articulate' describes expression, not effort" } ] },
          { group: "three are verbs of citation", options: [
            { text: "cite" }, { text: "quote" }, { text: "paraphrase" }, { text: "plagiarise", correct: true, why: "the others credit a source; this one hides it" } ] }
        ] },

      { id: "pgraph", section: 7, sectionTitle: "Write a paragraph", letter: "B",
        kind: "paragraph", n: 0, min: 70,
        task: "Write one paragraph answering: which study method would you change first, and why?",
        note: "A paragraph in academic English makes its claim in the first sentence and spends the rest of the sentences earning it.",
        model: "<p>The habit I would change first is highlighting. For two years I marked every page I read and felt that I had worked, " +
               "because the page looked different afterwards. What I had actually done was recognise the sentences, not recall them. " +
               "The first time I closed the book and tried to write the argument out, I could produce two sentences of four. " +
               "I now put a question in the margin instead, and answer it from memory before I turn the page.</p>",
        must: [
          "My first sentence states which method I would change.",
          "I give at least one reason, not only a preference.",
          "At least one sentence reports something that actually happened to me.",
          "I say what I would do instead, not only what I would stop."
        ] }
    ]
  };
})();
