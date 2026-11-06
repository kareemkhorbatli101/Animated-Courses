/* Unit 1 · How We Learn — LESSON 3 · GRAMMAR
   Present and past verb forms · yes/no questions · adjectives and adverbs.
   The book's sequence: realia -> paradigm chart -> Language connection ->
   build -> error correction. */
(function () {
  window.PAGE = {
    id: "u01-l3", unit: "u01", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Use present and past forms to describe habits and findings",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review present and past forms", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the student's note and the lab record beside it. Notice which tense each one uses, and why.",
        text: { every: 1, blocks: [
          { h: "What I do", lines: [
            "I test myself every evening, and I usually get about half of it wrong the first time.",
            "Right now I am working through last week's chapter."
          ] },
          { h: "What the study found", lines: [
            "Forty students read a passage twice.",
            "Forty more read it once and then wrote down what they remembered.",
            "A week later the second group was still ahead."
          ] }
        ] },
        after: "<p>Habits and standing facts take the present. A completed study takes the past. The whole unit sits on that contrast.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review present and past forms", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Look back at 1A, then complete the rule in your own words.",
        heading: "Language connection: present and past",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Simple present</b> I test · he tests<br><b>Present continuous</b> I am working<br><b>Simple past</b> they read · she wrote<br><b>Past continuous</b> they were reading</p>" },
        text: "We use the ___ to talk about something that happens regularly, and the ___ for something happening at the moment we are speaking. We use the ___ for a study that is finished, and the ___ to say what was going on at a particular time.",
        gaps: [
          { options: ["simple present", "simple past"], answer: "simple present",
            why: "<i>I test myself every evening</i> — a habit." },
          { options: ["present continuous", "simple past"], answer: "present continuous",
            why: "<i>Right now I am working</i> — happening as we speak." },
          { options: ["simple past", "simple present"], answer: "simple past",
            why: "<i>Forty students read a passage</i> — finished." },
          { options: ["past continuous", "simple present"], answer: "past continuous",
            why: "<i>what was going on at a particular time</i> is the past continuous's job." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order. There are always more words than places.",
        items: [
          { cue: "A habit.", band: "A2",
            target: "I test myself every evening",
            extra: ["am", "yesterday"],
            why: "Simple present for a routine." },
          { cue: "Happening now.", band: "A2",
            target: "She is working through last week's chapter",
            extra: ["works", "was"],
            why: "Present continuous for something in progress." },
          { cue: "A finished study.", band: "B1",
            target: "Forty students read the passage twice last week",
            extra: ["are", "reading"],
            why: "Simple past with a finished time expression." },
          { cue: "A yes/no question in the past.", band: "B1",
            target: "Did the second group remember more a week later",
            extra: ["does", "remembered", "was"],
            why: "<i>Did</i> + bare infinitive. The past is already in <i>did</i>." },
          { cue: "Two tenses in one sentence.", band: "B2",
            target: "While the first group was re-reading the second group was testing itself",
            extra: ["reads", "tested", "and"],
            why: "Two past continuous clauses: both actions in progress at the same time." },
          { cue: "An adverb of manner.", band: "C1",
            target: "Students who test themselves judge their own knowledge accurately",
            extra: ["accurate", "very", "is"],
            why: "<i>Judge</i> is a verb, so it takes the adverb <i>accurately</i>, not the adjective." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Adjectives and adverbs", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Decide first whether it describes a noun or a verb.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Adjectives describe nouns: <i>a <b>quick</b> learner</i>. Adverbs describe verbs: <i>she learns <b>quickly</b></i>. Some are irregular: <i>good → well</i>; some do not change: <i>hard → hard</i>.</p>" },
        items: [
          { text: "She answered every question c___.", answer: "correctly", given: [0, 1],
            why: "It describes <i>answered</i>, a verb, so the adverb." },
          { text: "He is a c___ worker who checks everything twice.", answer: "careful", given: [0, 1],
            why: "It describes <i>worker</i>, a noun, so the adjective — not <i>carefully</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write four sentences about your own week — one in each of the four tenses in 1B.</p>" } }
    ]
  };
})();
