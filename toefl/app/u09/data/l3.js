/* Unit 9 · Cities and Movement — LESSON 3 · GRAMMAR
   Time clauses · comparing them · and...too, and...not either, but. */
(function () {
  window.PAGE = {
    id: "u09-l3", unit: "u09", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Put events in order, and agree or disagree in one clause",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review time clauses", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two notes. The first orders events; the second agrees and disagrees compactly.",
        text: { every: 1, blocks: [
          { h: "The sequence", lines: [
            "Before the bypass opened, the high street carried eleven thousand vehicles a day.",
            "After it opened, the figure fell to four thousand.",
            "By the time the survey was repeated, it had climbed back to nine."
          ] },
          { h: "The comparison", lines: [
            "The bypass was busy, and the high street was too.",
            "Widening did not help, and pricing alone did not either.",
            "The road was improved, but the journey time was not."
          ] }
        ] },
        after: "<p><i>Too</i> after a positive, <i>either</i> after a negative, <i>but</i> when the second clause defeats the expectation of the first.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review time clauses", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: time clauses and too / either",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>before / after / when / by the time</b> + a clause, with a comma if it comes first.<br><b>and … too</b> after a positive · <b>and … not either</b> after a negative · <b>but</b> for a contrast.<br><i>By the time</i> usually takes the past perfect in the main clause: <i>By the time it was repeated, it had climbed back.</i></p>" },
        text: "A clause beginning <i>before</i> or <i>after</i> takes a comma only when it comes ___ . To agree with a positive statement we add ___ at the end; to agree with a negative one we add ___ instead. When the second clause defeats what the first led you to expect, we join them with ___ .",
        gaps: [
          { options: ["first", "second"], answer: "first", why: "<i>After it opened, the figure fell.</i> / <i>The figure fell after it opened.</i>" },
          { options: ["too", "either"], answer: "too", why: "<i>The bypass was busy, and the high street was too.</i>" },
          { options: ["either", "too"], answer: "either", why: "<i>Widening did not help, and pricing did not either.</i>" },
          { options: ["but", "and"], answer: "but", why: "<i>The road was improved, but the journey time was not.</i>" }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A sequence with <i>before</i>.", band: "A2",
            target: "Before the bypass opened the high street was congested",
            extra: ["will", "after"],
            why: "<i>Before</i> + past clause; the comma is implied by the order." },
          { cue: "A sequence with <i>after</i>.", band: "A2",
            target: "After the road was widened the traffic returned",
            extra: ["before", "will"],
            why: "<i>After</i> + past passive." },
          { cue: "Agree with a positive.", band: "B1",
            target: "The metro was crowded and the buses were too",
            extra: ["either", "neither"],
            why: "<i>Too</i> after a positive." },
          { cue: "Agree with a negative.", band: "B1",
            target: "Widening did not help and pricing did not either",
            extra: ["too", "also"],
            why: "<i>Either</i> after a negative." },
          { cue: "A contrast.", band: "B2",
            target: "The capacity was increased but the journey time did not fall",
            extra: ["and", "so"],
            why: "<i>But</i> — the second clause defeats the expectation." },
          { cue: "A past perfect in the main clause.", band: "C1",
            target: "By the time the survey was repeated the traffic had climbed back",
            extra: ["has", "climbing", "will"],
            why: "<i>By the time</i> + past, with the past perfect for what had already happened." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the agent noun. Mind the ending.",
        items: [
          { text: "The o___ runs the service under rules it did not write.", answer: "operator", given: [0, 1, 2],
            why: "<i>operate → operator</i> — an <i>-ate</i> verb." },
          { text: "A transport p___ models the options before anything is built.", answer: "planner", given: [0, 1, 2],
            why: "<i>plan → planner</i>, doubling the <i>n</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>and … too</i>, one with <i>and … not either</i>, and one with <i>but</i>, all about your own journey to study.</p>" } }
    ]
  };
})();
