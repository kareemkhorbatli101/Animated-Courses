/* Unit 9 · Cities and Movement — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u09-l1", unit: "u09", block: "l1", up: "../", tab: "ACADEMIC",
    objective: "Name the parts of a journey and the people who make it",
    next: "l2.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Identify the vocabulary", letter: "A",
        concepts: ["read", "measurement"],
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
        concepts: ["word"],
        kind: "match", task: null, n: 0,
        prompt: "A junction where three ways of travelling meet. Drag each word onto the thing it names.",
        scene: { w: 1000, h: 560,
          alt: "A street junction with a pedestrian crossing, a cycle lane, a bus stop and shelter, a signal, a footbridge sign and a row of shops",
          parts: [
            { p: "wall",  x: 0, y: 0,   sx: 10, sy: 2.7 },
            { p: "floor", x: 0, y: 168, sx: 10, sy: 4.2 },
            { p: "building", x: 40,  y: 20,  s: 2.4 },
            { p: "building", x: 290, y: 36,  s: 2.0 },
            { p: "tree",     x: 520, y: 44,  s: 1.5 },
            { p: "sign",     x: 660, y: 96,  s: 1.3 },
            { p: "sign",     x: 850, y: 78,  s: 1.0 },
            { p: "path",     x: 90,  y: 210, sx: 6.2, sy: 3.1 },
            { p: "counter",  x: 700, y: 250, sx: 1.9, sy: 1.1 },
            { p: "bench",    x: 720, y: 330, sx: 2.2, sy: 1.2 },
            { p: "person",   x: 360, y: 300, s: 1.5 },
            { p: "pair",     x: 540, y: 330, s: 1.3 }
          ] },
        pins: [
          { id: "p-signal",  x: 88, y: 36, tx: 88, ty: 20, w: 130 },
          { id: "p-junction",x: 68, y: 14, tx: 68, ty: 26, w: 150 },
          { id: "p-shelter", x: 86, y: 60, tx: 76, ty: 50, w: 150 },
          { id: "p-cycle",   x: 18, y: 92, tx: 24, ty: 72, w: 150 },
          { id: "p-cross",   x: 44, y: 92, tx: 40, ty: 80, w: 170 },
          { id: "p-shop",    x: 14, y: 14, tx: 11, ty: 28, w: 150 }
        ],
        pairs: [
          { word: "signal", pin: "p-signal",
            why: "British English for a traffic light at a junction. <i>Lights</i> is the everyday word and <i>signal</i> the technical one." },
          { word: "junction", pin: "p-junction",
            why: "where two or more roads meet. American English usually says <i>intersection</i>, and both appear in the literature." },
          { word: "bus shelter", pin: "p-shelter",
            why: "the structure; the <i>stop</i> is the place. A stop can exist without a shelter, which matters more than it sounds in a city with rain." },
          { word: "cycle lane", pin: "p-cycle",
            why: "<i>lane</i> within the carriageway; a <i>cycle track</i> is physically separated from it. The distinction decides who will use it." },
          { word: "pedestrian crossing", pin: "p-cross",
            why: "named after the person on foot, which tells you who it was designed for — and the design is contested exactly there." },
          { word: "shop front", pin: "p-shop",
            why: "the businesses whose trade depends on who walks past, and who object first to any change at a junction." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Identify the vocabulary", letter: "C",
        carry: "1a",
        concepts: ["word"],
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

            { id: "1d", section: 1, sectionTitle: "Identify the vocabulary", letter: "D",
        carry: "1a",
        concepts: ["word", "measurement", "claim"],
        kind: "letterbox", task: "complete-the-words", cefr: "B1", n: 4,
        prompt: "Four more. These are the words the article in Lesson 5 is argued with.",
        items: [
          { text: "A c___ is the route along which most of the movement concentrates.", answer: "corridor", given: [0, 1],
            why: "Two <i>r</i>s in the middle and one at the end. The same word means a passage inside a building, and Unit 4 used it for an ice-free route." },
          { text: "C___ is how much a road or a line can carry.", answer: "capacity", given: [0, 1],
            why: "Uncountable in this sense. The article's whole argument is that it is not a fixed quantity." },
          { text: "Journey time is used as an i___ of how the network is performing.", answer: "indicator", given: [0, 1],
            why: "<i>indicate → indicator</i>, and Unit 7's warning applies: an indicator that becomes a target stops indicating." },
          { text: "A road that is unpleasant to use acts as a d___ .", answer: "deterrent", given: [0, 1],
            why: "<i>deter → deterrent</i>, with <i>-ent</i> rather than this unit's two suffixes. Removing it is what induces the demand." }
        ] },

      { id: "2a", section: 2, sectionTitle: "The suffixes -er and -or", letter: "A",
        concepts: ["read"],
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
        concepts: ["word"],
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
        ] },

      { id: "2c", section: 2, sectionTitle: "The suffixes -er and -or", letter: "C",
        concepts: ["word", "measurement"],
        kind: "letterbox", task: "complete-the-words", cefr: "C1", n: 4,
        prompt: "Four more agent nouns. Two name people and two name things, and the suffix does not distinguish them.",
        items: [
          { text: "The c___ carries the bus fares to the depot each evening.", answer: "conductor", given: [0, 1],
            why: "<i>conduct → conductor</i>, and the same word names a person on a bus, a person in front of an orchestra and a metal that carries current." },
          { text: "A roundabout acts as a flow r___ at a junction.", answer: "regulator", given: [0, 1],
            why: "<i>regulate → regulator</i>. The suffix is quite happy to name a thing rather than a person." },
          { text: "Each bus o___ bids for the route separately.", answer: "operator", given: [0, 1],
            why: "<i>operate → operator</i>. <i>-ate</i> verbs take <i>-or</i>, which is the nearest thing to a rule here." },
          { text: "The s___ asked every household how many journeys they made.", answer: "surveyor", given: [0, 1],
            why: "<i>survey → surveyor</i>, which breaks the pattern: it does not end in <i>-ate</i> and still takes <i>-or</i>." }
        ] },

      { id: "2d", section: 2, sectionTitle: "The suffixes -er and -or", letter: "D",
        concepts: ["word"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three words in each row belong together. Choose the one that does not.",
        items: [
          { group: "three are agent nouns from verbs",
            options: [
              { text: "commuter",  why: "<i>commute</i> + <i>-er</i>." },
              { text: "regulator", why: "<i>regulate</i> + <i>-or</i>." },
              { text: "operator",  why: "<i>operate</i> + <i>-or</i>." },
              { text: "corridor", correct: true,
                why: "the odd one: there is no verb <i>to corrid</i>. It comes from a Latin word for running, and the ending is a coincidence." }
            ] },
          { group: "three take -or",
            options: [
              { text: "indicate",  why: "<i>indicator</i>." },
              { text: "operate",   why: "<i>operator</i>." },
              { text: "regulate",  why: "<i>regulator</i>. All three end in <i>-ate</i>, which is the pattern." },
              { text: "plan", correct: true,
                why: "the odd one: <i>planner</i>, with <i>-er</i> and a doubled <i>n</i>." }
            ] },
          { group: "three describe traffic that was not there before",
            options: [
              { text: "induced demand", why: "journeys that appear because the capacity appeared." },
              { text: "suppressed journeys", why: "journeys not made while the road is unpleasant — the same traffic, before it appears." },
              { text: "latent demand",     why: "demand waiting for a reason to become visible." },
              { text: "through traffic", correct: true,
                why: "the odd one: through traffic is simply traffic passing rather than stopping. It exists whatever the capacity is." }
            ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Person or thing", letter: "A",
        concepts: ["comparison"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight agent nouns. Sort them by whether the agent is a person or a thing. The suffix will not help you.",
        note: { kind: "words", title: "In other words…",
                body: "<p>English makes agent nouns with <i>-er</i>, <i>-or</i> and <i>-ent</i>, and none of the three tells you whether the agent breathes. That is why a sentence like <i>the regulator decided</i> is genuinely ambiguous until you know the field.</p>" },
        bins: [
          { id: "person", label: "A person", hint: "or an organisation of them" },
          { id: "thing",  label: "A thing",  hint: "no one is doing it" }
        ],
        items: [
          { text: "commuter",  bin: "person", why: "someone who makes the same journey most days." },
          { text: "planner",   bin: "person", why: "the person who models the options." },
          { text: "surveyor",  bin: "person", why: "the person who asks the households." },
          { text: "conductor", bin: "person", why: "on a bus, at least. The same word names a metal, which is the point of this exercise." },
          { text: "indicator", bin: "thing",  why: "a measure, not a measurer." },
          { text: "deterrent", bin: "thing",  why: "whatever puts the journey off — a hill, a queue, a charge." },
          { text: "escalator", bin: "thing",  why: "and it was a trade name before it was a word." },
          { text: "regulator", bin: "thing",  why: "the hardest card, because in transport it is usually a body of people. As a mechanical part it is a thing, and nothing in the word tells you which." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Name three agent nouns ending <i>-or</i> and three ending <i>-er</i>, and say what verb each comes from.</p>" } }
    ]
  };
})();
