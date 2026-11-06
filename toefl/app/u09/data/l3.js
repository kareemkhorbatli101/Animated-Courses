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

            { id: "1c", section: 1, sectionTitle: "Review time clauses", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "The other half of agreeing and disagreeing in one clause. Complete the rule.",
        heading: "Language connection: so, neither, and the short reply",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>So did I</b> · <b>So was the metro</b> — agreeing with a positive, with the verb before the subject<br><b>Neither did I</b> · <b>Nor was the metro</b> — agreeing with a negative<br><b>I did too</b> · <b>I didn't either</b> — the same meanings in ordinary word order<br>Both halves of the pair use whatever auxiliary the first clause used.</p>" },
        text: "To agree with a positive statement in a short reply we can say ___ followed by the auxiliary and then the subject. To agree with a negative one we use ___ in the same position. The auxiliary we repeat is always the one from the ___ clause. And both of these put the verb ___ the subject, which ordinary English sentences do not.",
        gaps: [
          { options: ["so", "too"], answer: "so",
            why: "<i>The metro was crowded. — So were the buses.</i>" },
          { options: ["neither", "either"], answer: "neither",
            why: "<i>Widening did not help. — Neither did pricing.</i>" },
          { options: ["first", "second"], answer: "first",
            why: "<i>was</i> answers <i>was</i>; <i>did</i> answers <i>did</i>. The reply borrows whatever the statement used." },
          { options: ["before", "after"], answer: "before",
            why: "<i>So were the buses</i>, not <i>So the buses were</i>. The inversion is obligatory in this pattern." }
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

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them invert the verb and the subject, which English does only in a few places.",
        items: [
          { cue: "A short reply agreeing with a positive.", band: "A2",
            target: "The metro was crowded and so were the buses",
            extra: ["too", "neither", "either"],
            why: "<i>So</i> + auxiliary + subject. The auxiliary is borrowed from the first clause." },
          { cue: "A short reply agreeing with a negative.", band: "B1",
            target: "Widening did not help and neither did pricing",
            extra: ["either", "too", "so"],
            why: "<i>Neither</i> already carries the negative, so <i>did</i> is positive in form." },
          { cue: "A time clause at the end.", band: "B1",
            target: "The high street stayed quiet until the bypass closed for repairs",
            extra: ["before", "will", "closing"],
            why: "No comma when the time clause comes second." },
          { cue: "Two events in the wrong order on the page.", band: "B2",
            target: "The traffic had already returned by the time the second survey was taken",
            extra: ["has", "returning", "will"],
            why: "The past perfect marks which event came first, which lets the sentence report them in either order." },
          { cue: "A contrast inside one clause.", band: "B2",
            target: "The road was wider but no faster than it had been",
            extra: ["and", "so", "either"],
            why: "<i>But</i> joining two adjectives rather than two clauses, with the second one negated." },
          { cue: "A sequence with three stages.", band: "C1",
            target: "Before the bypass opened the high street carried eleven thousand vehicles a day",
            extra: ["after", "will", "opening"],
            why: "<i>Before</i> + past, with a figure in the main clause. The comma is implied by the order on the page." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from reports. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The trains were crowded and so was the buses.",
            fixed: "The trains were crowded and so were the buses.",
            wrong: "was", right: "were",
            why: "The inversion puts the subject at the end, where it is easy to lose sight of — and <i>buses</i> is plural." },
          { text: "Widening did not help and neither does pricing.",
            fixed: "Widening did not help and neither did pricing.",
            wrong: "does", right: "did",
            why: "The short reply borrows its auxiliary from the first clause, and that clause is in the past." },
          { text: "By the time the survey was repeated, the traffic has climbed back.",
            fixed: "By the time the survey was repeated, the traffic had climbed back.",
            wrong: "has", right: "had",
            why: "The main clause is in the past, so the earlier event takes the past perfect." },
          { text: "The road was improved, and the journey time was not.",
            fixed: "The road was improved, but the journey time was not.",
            wrong: "and", right: "but",
            why: "The second clause defeats what the first led the reader to expect." },
          { text: "After the bypass open, the high street should empty.",
            fixed: "After the bypass opens, the high street should empty.",
            wrong: "open", right: "opens",
            why: "A time clause about the future takes a present form, exactly as an <i>if</i> clause does — and it needs its third-person <i>-s</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the agent noun. Mind the ending.",
        items: [
          { text: "The o___ runs the service under rules it did not write.", answer: "operator", given: [0, 1, 2],
            why: "<i>operate → operator</i> — an <i>-ate</i> verb." },
          { text: "A transport p___ models the options before anything is built.", answer: "planner", given: [0, 1, 2],
            why: "<i>plan → planner</i>, doubling the <i>n</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more agent nouns. One takes <i>-er</i> and one takes <i>-ent</i>.",
        items: [
          { text: "The city employs a transport p___ to model each option before it is built.", answer: "planner", given: [0, 1],
            why: "<i>plan → planner</i>, doubling the <i>n</i> because the vowel before it is short and stressed." },
          { text: "A hill, a queue or a charge can all act as a d___ .", answer: "deterrent", given: [0, 1],
            why: "<i>deter → deterrent</i>, a third pattern that simply has to be learnt — and it is the mechanism Lesson 5 turns on." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a word into each gap. Two in the bank are not used.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><i>Too</i> and <i>either</i> go at the end in ordinary word order. <i>So</i> and <i>neither</i> go at the front and put the verb before the subject. The four say the same two things in two shapes.</p>" },
        extra: ["also", "nor was"],
        items: [
          { text: "The metro was crowded and the buses were ___ .", answer: "too",
            why: "end position, positive statement." },
          { text: "Widening did not help and pricing did not ___ .", answer: "either",
            why: "end position, negative statement." },
          { text: "The metro was crowded and ___ the buses.", answer: "so were",
            why: "front position, so the auxiliary jumps in front of the subject — and it is plural." },
          { text: "Widening did not help and ___ pricing.", answer: "neither did",
            why: "front position again, and <i>neither</i> carries the negative so <i>did</i> stays positive." },
          { text: "The road was widened ___ the journey time did not fall.", answer: "but",
            why: "the second clause defeats the expectation the first creates." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one sentence with <i>and … too</i>, one with <i>and … not either</i>, and one with <i>but</i>, all about your own journey to study.</p>" } }
    ]
  };
})();
