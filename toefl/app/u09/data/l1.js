/* Unit 9 · Cities and Movement — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u09-l1", unit: "u09", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a journey and the people who make it",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Eight words. Several end in <b>-er</b> or <b>-or</b>, which is this unit's suffix and no accident: this subject is full of agents.",
        text: { every: 1, blocks: [{ lines: [
          "<b>1 commuter</b> — someone who travels regularly to work or study",
          "<b>2 corridor</b> — a route along which movement concentrates",
          "<b>3 capacity</b> — how much a road or line can carry",
          "<b>4 congestion</b> — what happens when demand exceeds it",
          "<b>5 deterrent</b> — something that puts people off making a journey",
          "<b>6 indicator</b> — a measure used to stand for something larger",
          "<b>7 regulator</b> — the body that sets the rules",
          "<b>8 induced demand</b> — travel that appears because the capacity did"
        ] }] },
        after: "<p>Number 8 is the article's subject, and it undoes the common sense of number 3.</p>" },

      { id: "1b", section: 1, sectionTitle: "Identify the vocabulary", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Complete the words.",
        items: [
          { text: "A c___ travels the same route most days.", answer: "commuter", given: [0, 1, 2],
            why: "<i>commute → commuter</i>." },
          { text: "C___ is what happens when demand exceeds capacity.", answer: "congestion", given: [0, 1, 2],
            why: "<i>congest → congestion</i>." },
          { text: "An unpleasant road acts as a d___ to some journeys.", answer: "deterrent", given: [0, 1, 2],
            why: "<i>deter → deterrent</i>, and the article's mechanism turns on it." },
          { text: "The r___ sets the rules the operators work within.", answer: "regulator", given: [0, 1, 2],
            why: "<i>regulate → regulator</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffixes -er and -or", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "<b>-er</b> and <b>-or</b> both make an agent noun — the one who or the thing which. There is no rule; the spelling is simply learned.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>-er</b> commute → commut<b>er</b> · plan → plann<b>er</b> · employ → employ<b>er</b><br><b>-or</b> regulate → regulat<b>or</b> · indicate → indicat<b>or</b> · operate → operat<b>or</b><br>Verbs ending <i>-ate</i> almost always take <b>-or</b>. That is the nearest thing to a rule there is.</p>" },
        text: { every: 1, mastColor: "blue", masthead: "AGENTS, HUMAN AND OTHERWISE",
          blocks: [{ lines: [
            "A <b>planner</b> is a person. An <b>indicator</b> is not — the suffix does not care.",
            "An <b>operator</b> runs the service; the <b>regulator</b> sets the rules it runs under.",
            "A <b>deterrent</b> takes <i>-ent</i>, which is a third pattern and simply has to be remembered.",
            "Watch <b>adviser</b> and <b>advisor</b>: both are correct, which is unusual and worth knowing."
          ] }],
          source: "Written for this book" } },

      { id: "2b", section: 2, sectionTitle: "The suffixes -er and -or", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Complete the agent noun. The verb it comes from decides the ending.",
        items: [
          { text: "The city employs a transport p___ to model the options.", answer: "planner", given: [0, 1, 2],
            why: "<i>plan → planner</i>, doubling the <i>n</i>." },
          { text: "Journey time is used as an i___ of how well the network performs.", answer: "indicator", given: [0, 1, 2],
            why: "<i>indicate → indicator</i> — <i>-ate</i> verbs take <i>-or</i>." },
          { text: "The o___ runs the buses; it does not set the fares.", answer: "operator", given: [0, 1, 2],
            why: "<i>operate → operator</i>." },
          { text: "Every e___ in the district was surveyed about staff travel.", answer: "employer", given: [0, 1, 2],
            why: "<i>employ → employer</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Name three agent nouns ending <i>-or</i> and three ending <i>-er</i>, and say what verb each comes from.</p>" } }
    ]
  };
})();
