/* Unit 2 · Climate and Prediction — LESSON 3 · GRAMMAR
   be going to and will · plans, promises and predictions · would rather. */
(function () {
  window.PAGE = {
    id: "u02-l3", unit: "u02", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Talk about what will happen, and how sure you are",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the future forms", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two notes. Both are about the same afternoon, and they use different futures for a reason.",
        text: { every: 1, blocks: [
          { h: "The plan, made last week", lines: [
            "We are going to collect samples from the three sites on Thursday.",
            "I am going to bring the cold box."
          ] },
          { h: "What the forecast says", lines: [
            "It will probably rain on Thursday afternoon.",
            "The river will be high by then, so site three may not be safe."
          ] }
        ] },
        after: "<p><i>Going to</i> for a decision already made. <i>Will</i> for what the evidence leads you to expect. That split is the whole lesson.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the future forms", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: will and going to",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>be going to</b> a plan already made · evidence you can see now<br><b>will</b> a prediction · a promise · a decision made as you speak<br><b>would rather</b> + bare infinitive, for a preference: <i>I'd rather go on Friday.</i></p>" },
        text: "We use ___ for something we have already decided to do. We use ___ for what we expect to happen, and also for a promise. When we are choosing between two options we can say ___ followed by the plain form of the verb.",
        gaps: [
          { options: ["be going to", "will"], answer: "be going to",
            why: "<i>We are going to collect samples</i> — decided last week." },
          { options: ["will", "be going to"], answer: "will",
            why: "<i>It will probably rain</i> — an expectation, not a plan." },
          { options: ["would rather", "would like"], answer: "would rather",
            why: "<i>would rather</i> + bare infinitive. <i>would like</i> takes <i>to</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A plan already made.", band: "A2",
            target: "We are going to visit the three sites on Thursday",
            extra: ["will", "visiting"],
            why: "<i>be going to</i> for a decision taken earlier." },
          { cue: "A prediction from evidence.", band: "A2",
            target: "It will probably rain in the afternoon",
            extra: ["is", "going"],
            why: "<i>will</i> + adverb of probability." },
          { cue: "A preference.", band: "B1",
            target: "I would rather go on Friday than on Thursday",
            extra: ["to", "like", "prefer"],
            why: "<i>would rather</i> + bare infinitive, with <i>than</i> for the alternative." },
          { cue: "A promise.", band: "B1",
            target: "I will bring the cold box and the spare batteries",
            extra: ["am", "going", "brought"],
            why: "<i>will</i> for an undertaking made to someone." },
          { cue: "A conditional expectation.", band: "B2",
            target: "If the river is high we will not be able to reach site three",
            extra: ["would", "was", "won't"],
            why: "First conditional: present in the <i>if</i> clause, <i>will</i> in the main clause." },
          { cue: "A hedged projection.", band: "C1",
            target: "Under this scenario the average is projected to rise by about two degrees",
            extra: ["will", "predicting", "rises"],
            why: "<i>is projected to</i> keeps the claim conditional — the distinction Lesson 1 drew." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both are built with this unit's suffix.",
        items: [
          { text: "The spare batteries turned out to be very u___.", answer: "useful", given: [0, 1],
            why: "<i>use + ful</i>." },
          { text: "She was d___ that the weather would hold.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i>: not confident." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one plan, one prediction, one promise and one preference about your own next week.</p>" } }
    ]
  };
})();
