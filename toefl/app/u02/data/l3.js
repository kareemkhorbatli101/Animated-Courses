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


      { id: "1c", section: 1, sectionTitle: "Review the future forms", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "The same forms, sorted by what the speaker is <i>doing</i> rather than when it happens. Complete the rule.",
        heading: "Language connection: plans, promises and predictions",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Plan</b> decided before now · <b>Promise</b> an undertaking to someone · <b>Prediction</b> what you expect · <b>Timetable</b> a fixed arrangement, which takes the present simple: <i>the report comes out on Tuesday</i>.</p>" },
        text: "A plan made before this conversation takes ___. A promise made in this conversation takes ___. Something you expect from the evidence in front of you takes ___. And something fixed by a timetable takes neither: it takes the ___.",
        gaps: [
          { options: ["be going to", "will"], answer: "be going to",
            why: "The decision already exists; you are reporting it, not making it." },
          { options: ["will", "be going to"], answer: "will",
            why: "<i>I'll send it tonight</i> — the undertaking is created by saying it." },
          { options: ["be going to", "would rather"], answer: "be going to",
            why: "Evidence you can see now: <i>look at those clouds, we are going to get wet</i>. English uses <i>going to</i> here, not <i>will</i>." },
          { options: ["present simple", "present continuous"], answer: "present simple",
            why: "<i>The train leaves at nine.</i> A timetable is treated as a present fact, however far away it is." }
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


      { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them are the cases where the obvious form is the wrong one.",
        items: [
          { cue: "A decision made as you speak.", band: "A2",
            target: "I will check the forecast before we leave",
            extra: ["am", "going", "checked"],
            why: "The decision is being made now, so <i>will</i>. <i>Going to</i> would claim you had decided earlier." },
          { cue: "Evidence you can see this minute.", band: "A2",
            target: "Look at those clouds we are going to get wet",
            extra: ["will", "got"],
            why: "English uses <i>going to</i> when the evidence is present, even though nothing was planned." },
          { cue: "A refusal by a machine.", band: "B1",
            target: "The sensor will not start in this temperature",
            extra: ["is", "going", "started"],
            why: "<i>Will not</i> with an object means it refuses to work — a use of <i>will</i> that has nothing to do with the future." },
          { cue: "A preference between two things.", band: "B1",
            target: "She would rather wait for the second model run",
            extra: ["to", "likes", "prefers"],
            why: "<i>Would rather</i> + bare infinitive. <i>Would like</i> and <i>prefer</i> both need <i>to</i>." },
          { cue: "A timetabled event.", band: "B2",
            target: "The report comes out at nine on Tuesday morning",
            extra: ["will", "coming", "is"],
            why: "A fixed arrangement takes the present simple, however far ahead it is." },
          { cue: "A hedged future in academic prose.", band: "C1",
            target: "Emissions are expected to peak before the end of the decade",
            extra: ["will", "expecting", "peaked"],
            why: "<i>Are expected to</i> moves the claim off the writer and onto the field — which is why it is everywhere in this subject." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from fieldwork emails. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "It will rains all Thursday afternoon.",
            fixed: "It will rain all Thursday afternoon.",
            wrong: "rains", right: "rain",
            why: "<i>Will</i> is a modal, and a modal is always followed by the bare form." },
          { text: "She is going to bringing the cold box.",
            fixed: "She is going to bring the cold box.",
            wrong: "bringing", right: "bring",
            why: "<i>Going to</i> ends in <i>to</i>, so the infinitive follows: <i>going to bring</i>." },
          { text: "I would prefer wait for the next model run.",
            fixed: "I would prefer to wait for the next model run.",
            wrong: "prefer", right: "prefer to",
            why: "<i>Prefer</i> needs <i>to</i>. Only <i>would rather</i> takes the bare form, which is what makes the two easy to cross." },
          { text: "If it rain overnight, site three is unreachable.",
            fixed: "If it rains overnight, site three is unreachable.",
            wrong: "rain", right: "rains",
            why: "An <i>if</i> clause about the future takes a present form, never <i>will</i> — and the present form here needs its third-person <i>-s</i>." },
          { text: "I would rather going on Friday.",
            fixed: "I would rather go on Friday.",
            wrong: "going", right: "go",
            why: "<i>Would rather</i> + bare infinitive, every time." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both are built with this unit's suffix.",
        items: [
          { text: "The spare batteries turned out to be very u___.", answer: "useful", given: [0, 1],
            why: "<i>use + ful</i>." },
          { text: "She was d___ that the weather would hold.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i>: not confident." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more, again with this unit's suffix.",
        items: [
          { text: "The cold box proved s___ at keeping the samples viable.", answer: "successful", given: [0, 1],
            why: "<i>success + ful</i>, with one <i>l</i>. The adverb doubles it: <i>successfully</i>." },
          { text: "A t___ account of the uncertainty is worth more than a confident one.", answer: "truthful", given: [0, 1],
            why: "<i>truth + ful</i>. <i>Truthful</i> describes the teller; <i>true</i> describes the claim." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a future form into each gap. Two forms in the bank are not used.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Ask what the speaker is doing, not when the event is. Reporting a decision, making one, reading the evidence, stating a preference, quoting a timetable — each has its own form, and the timetable one is the surprise.</p>" },
        extra: ["will be", "would like"],
        items: [
          { text: "Look at that sky — it ___ rain within the hour.", answer: "is going to",
            why: "the evidence is in front of you, so <i>going to</i>, not <i>will</i>." },
          { text: "I promise I ___ send the figures tonight.", answer: "will",
            why: "a promise is created by saying it, so <i>will</i>." },
          { text: "We ___ visit the three sites on Thursday; that was agreed last week.", answer: "are going to",
            why: "the decision existed before this sentence." },
          { text: "I ___ wait for the second run than publish this one.", answer: "would rather",
            why: "a preference between two named options, with <i>than</i>." },
          { text: "The shuttle to the field station ___ at nine fourteen.", answer: "leaves",
            why: "a timetable, so the present simple. <i>Will leave</i> is not wrong here, but it sounds like a guess." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write one plan, one prediction, one promise and one preference about your own next week.</p>" } }
    ]
  };
})();
