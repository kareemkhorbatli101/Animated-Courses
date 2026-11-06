/* Unit 9 · Cities and Movement — LESSON 5 · READING
   Reading strategy: using questions to organise a text; reading tables.
   Data visual: comparison table. */
(function () {
  var PASSAGE = {
    masthead: "THE ROAD THAT FILLED ITSELF", every: 1,
    blocks: [
      { h: "A familiar disappointment", lines: [
        "A city that widens a congested road usually finds the congestion returns, and often within a year or two.",
        "The phenomenon is well enough documented to have a name, <b>induced demand</b><sup>1</sup>, and the mechanism is not mysterious."
      ] },
      { h: "Where the extra traffic comes from", lines: [
        "Some journeys are not made at all while a road is unpleasant, and some are made at other times or by other means.",
        "Widening the road removes the deterrent, those suppressed journeys reappear, and the additional capacity fills with traffic that did not previously exist."
      ] },
      { h: "Why this changes the problem", lines: [
        "The uncomfortable consequence is that road capacity cannot be treated as a fixed quantity to be matched against a fixed demand, because the quantity supplied alters the demand it was built to satisfy.",
        "Planners who grasp this tend to reach for pricing or for alternatives rather than for concrete, since those are the only instruments that change the calculation a traveller makes."
      ] }
    ],
    notes: ["induced demand: travel that appears because the capacity to carry it appeared"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "CAMPUS SHUTTLE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Campus shuttle. Every fifteen minutes, seven to seven.",
      "Does not run on Sundays.",
      "Stops at the library, the science building and the north gate only."
    ] }],
    source: "Estates and Transport"
  };

  window.PAGE = {
    id: "u09-l5", unit: "u09", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Turn a text into questions, and read a table by its columns",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>suppressed</span> (adj) held back, and able to reappear if the obstacle goes",
          "<span class='gloss'>instrument</span> (n) a tool of policy — a price, a rule, a service",
          "<span class='gloss'>calculation</span> (n) the weighing-up a person does before acting"
        ] }] },
        after: "<p>The first one is the hinge of the mechanism.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article by turning its headings into questions. Which set would you be reading to answer?",
        note: { kind: "reader",
                body: "<p><b>Turn each heading into a question before you read.</b> You then read to answer something, instead of reading to the end. It is the cheapest comprehension technique there is.</p>" },
        options: [
          { text: "What disappoints? Where does the traffic come from? Why does that change the problem?", correct: true,
            why: "Each heading converts directly, and the three questions are the article's structure." },
          { text: "How wide should a road be? Who pays? When was it built?",
            why: "None of these is raised by the headings." },
          { text: "Is congestion bad? Do people like driving?",
            why: "Neither is a question the article sets out to answer." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once to answer your three questions, once for the vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Extra road capacity creates traffic, so capacity cannot be matched against a fixed demand.", correct: true,
                why: "The third section states the consequence, and the first two establish it." },
              { text: "Congestion is caused by poor driving.", why: "Behaviour of that kind is never mentioned." },
              { text: "Roads should never be widened.", why: "The article recommends other instruments, not a prohibition." }
            ] },
          { q: "Where does the new traffic come from?",
            options: [
              { text: "Journeys that were suppressed, or made at other times or by other means.", correct: true,
                why: "All three sources are listed in one sentence." },
              { text: "Population growth.", why: "Growth is not part of the mechanism described." },
              { text: "Freight diverted from other roads.", why: "Freight is not mentioned." }
            ] },
          { q: "Why do planners who understand this reach for pricing?",
            options: [
              { text: "Because pricing changes the calculation a traveller makes.", correct: true,
                why: "The final clause gives exactly this reason — and <i>only instruments</i> marks it as the whole argument." },
              { text: "Because it raises money.", why: "Revenue is never mentioned." },
              { text: "Because concrete is expensive.", why: "Cost is not the stated objection." }
            ] },
          { q: "What would the author say about a city planning a third lane to fix congestion?",
            options: [
              { text: "It is likely to be disappointed within a year or two.", correct: true,
                why: "One step from the opening sentence, applied to a new case." },
              { text: "It will succeed if the lane is wide enough.", why: "Width is not the variable." },
              { text: "It should widen two roads at once.", why: "Nothing in the article suggests scale helps." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the shuttle stop.",
        text: NOTICE,
        items: [
          { q: "Where does the shuttle stop?",
            options: [
              { text: "The library, the science building and the north gate.", correct: true, why: "<i>only</i> makes the list exhaustive." },
              { text: "Anywhere you ask.", why: "The card names three stops and says <i>only</i>." },
              { text: "The library alone.", why: "Three stops are listed." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "Congestion often returns within a year or two of a widening.", answer: "T", line: 1,
            why: "Line 1 says exactly this." },
          { stem: "Road capacity is a fixed quantity matched against fixed demand.", answer: "F", line: 5,
            why: "Line 5 denies it, and calls the consequence uncomfortable." },
          { stem: "Most cities have introduced congestion pricing.", answer: "NI", line: null,
            why: "The article says planners <i>tend to reach for</i> it; it gives no count of cities." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffixes, in the article's register.",
        items: [
          { text: "An unpleasant road is itself a d___.", answer: "deterrent", given: [0, 1, 2],
            why: "<i>deter → deterrent</i>, with <i>-ent</i> — a third pattern." },
          { text: "A t___ weighs cost against time before deciding.", answer: "traveller", given: [0, 1, 2],
            why: "<i>travel → traveller</i>, doubling the <i>l</i> in British spelling." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Read the table. Check each column's heading — including which direction counts as better.",
        note: { kind: "reader",
                body: "<p>In a comparison table, read the <b>column headings and their units</b> first, and notice which way is better. A table that marks the winner in each column is doing arithmetic for you; one that does not is leaving it to you, and most readers skip it.</p>" },
        chart: {
          kind: "compare-table", title: "Four ways across the city",
          sub: "One journey, compared on what actually differs",
          caption: "Peak hour, six kilometres, city centre to campus",
          cols: ["Mode", "Cost", "Time (min)", "Capacity", "CO2 (g/km)"],
          better: [null, "low", "low", "high", "low"],
          rows: [
            ["Metro", "2.40", "22", "1200", "41"],
            ["Bus", "1.80", "41", "80", "68"],
            ["Bicycle", "0.00", "34", "1", "0"],
            ["Car", "6.10", "29", "4", "192"]
          ],
          note: "Capacity is per vehicle, which is why the bicycle wins three columns and loses one badly.",
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "The bicycle wins three columns. Why is it still not the obvious answer for everyone?",
            options: [
              { text: "Its capacity is one, so it cannot carry a city's worth of journeys.", correct: true,
                why: "The note under the table says so, and it is the column where the bicycle loses by three orders of magnitude. A table read row by row would hide that." },
              { text: "It is the slowest option.", why: "The bus is slower, at 41 minutes." },
              { text: "It is the most expensive.", why: "It is free; the car costs most." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Work out the same four columns for your own regular journey. Which column decides it for you, and is that the one you would defend?</p>" } }
    ]
  };
})();
