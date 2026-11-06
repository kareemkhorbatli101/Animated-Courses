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

  /* The second academic passage: the first is about a road that filled
     itself, this one about the measure that keeps recommending more road. */
  var PASSAGE2 = {
    masthead: "WHAT THE JOURNEY TIME LEAVES OUT", every: 1,
    blocks: [
      { h: "A measure with a bias in it", lines: [
        "Transport schemes are assessed overwhelmingly on the time they save, and the time is counted for people already making the journey.",
        "A measure of that shape can only ever recommend making existing journeys quicker, because the people who do not travel at all contribute nothing to it."
      ] },
      { h: "Who is counted", lines: [
        "A resident who cannot cross a dual carriageway on foot registers no journey time, since no journey is recorded.",
        "A child not permitted to walk to school likewise appears nowhere in the arithmetic, and the absence is read as satisfaction rather than as exclusion.",
        "The effect is systematic rather than accidental: the measure counts the journeys the existing network makes possible, which is precisely the set of journeys least in need of improvement."
      ] },
      { h: "What would have to change", lines: [
        "Correcting this does not require abandoning the measure, only supplementing it with something that counts suppressed movement.",
        "Several administrations now record access — how many destinations are reachable within a given time without a car — and the schemes it recommends are markedly different from the ones time-saving recommends."
      ] }
    ],
    notes: ["access: how much of a city a person can reach in a given time, counted whether or not they currently travel there"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "SHUTTLE · WINTER TIMETABLE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "From November the shuttle runs every ten minutes until seven.",
      "After seven there is one bus an hour, on the hour.",
      "The north gate stop is closed while the path is resurfaced.",
      "Use the library stop instead; it is five minutes further on foot."
    ] }],
    source: "Estates and Transport"
  };

  window.PAGE = {
    id: "u09-l5", unit: "u09", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Turn a text into questions, and read a table by its columns",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>suppressed</span> (adj) held back, and able to reappear if the obstacle goes",
          "<span class='gloss'>instrument</span> (n) a tool of policy — a price, a rule, a service",
          "<span class='gloss'>calculation</span> (n) the weighing-up a person does before acting"
        ] }] },
        after: "<p>The first one is the hinge of the mechanism.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read"],
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
        concepts: ["read"],
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
        concepts: ["read", "place"],
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
        carry: "1c",
        concepts: ["read"],
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

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is to turn headings into questions. The sentence that answers the question is rarely the first one in the paragraph, and it is almost never the one with the biggest number in it.</p>" },
        items: [
          { prompt: "Which sentence states the mechanism rather than the result?",
            text: "The dual carriageway was widened from four lanes to six in 2011. Peak journey times fell by eleven minutes in the first year. Journeys that had been made at other hours moved back into the peak, and some that had not been made at all began to be made. By 2014 the peak journey time had returned to its earlier level.",
            answer: "Journeys that had been made at other hours moved back into the peak, and some that had not been made at all began to be made.",
            why: "The others report what was built and what was measured. Only this one says how the measurement came to move back." },
          { prompt: "Which sentence names who is left out of a count?",
            text: "The appraisal counted forty thousand journeys a day across the corridor. Time savings were valued at the standard rate. Residents who do not cross the corridor at all contributed nothing to the total. The scheme scored well against the department's threshold.",
            answer: "Residents who do not cross the corridor at all contributed nothing to the total.",
            why: "A statement about the denominator of the appraisal, which is the thing the second article is about." },
          { prompt: "Which sentence proposes a change?",
            text: "Time saved is the dominant measure in scheme appraisal. It is easy to compute and easy to compare between places. It cannot register a journey that nobody makes. Counting reachable destinations alongside it would capture what the present measure cannot.",
            answer: "Counting reachable destinations alongside it would capture what the present measure cannot.",
            why: "<i>Would</i> plus an action. The sentence before it states the limitation without proposing anything." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        carry: "1c",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffixes, in the article's register.",
        items: [
          { text: "An unpleasant road is itself a d___.", answer: "deterrent", given: [0, 1, 2],
            why: "<i>deter → deterrent</i>, with <i>-ent</i> — a third pattern." },
          { text: "A t___ weighs cost against time before deciding.", answer: "traveller", given: [0, 1, 2],
            why: "<i>travel → traveller</i>, doubling the <i>l</i> in British spelling." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement", "comparison"],
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "comparison", "measurement"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on the measure behind the comparison in 3A. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Turn each heading into a question before you read the paragraph under it. The third one is the only heading that promises a proposal, which tells you where the article is going.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "A measure built from existing journeys can only recommend improving existing journeys.", correct: true,
                why: "The three sections are the shape of the measure, who it excludes, and what would have to be added." },
              { text: "Journey times are measured inaccurately.", why: "The article never disputes the measurement, only what it can see." },
              { text: "Transport schemes save less time than claimed.", why: "No claim about the size of the savings is made." }
            ] },
          { q: "Why does a resident who cannot cross a dual carriageway register nothing?",
            options: [
              { text: "No journey is recorded, so there is no journey time to count.", correct: true,
                why: "The measure counts time saved on journeys made, and an impossible journey is not a slow one." },
              { text: "They are counted under a different scheme.", why: "No other scheme appears in the article." },
              { text: "Their journey is too short to matter.", why: "The journey is not short; it does not happen." }
            ] },
          { q: "Why does the article call the effect “systematic rather than accidental”?",
            options: [
              { text: "The measure counts exactly the journeys the network already makes possible.", correct: true,
                why: "That is the definition of the measure, so the exclusion follows from its design rather than from an error." },
              { text: "The data are collected carelessly.", why: "Collection is not criticised anywhere." },
              { text: "The same mistake is made in every country.", why: "<i>Systematic</i> here means built in, not widespread." }
            ] },
          { q: "What does the article propose?",
            options: [
              { text: "Adding a measure of access alongside the existing one.", correct: true,
                why: "<i>Not abandoning the measure, only supplementing it</i> — and it names administrations that already do." },
              { text: "Replacing time saving with access.", why: "The sentence explicitly refuses to abandon the first measure." },
              { text: "Valuing time savings at a higher rate.", why: "The rate is not what the article is about." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "4a",
        concepts: ["read", "measurement", "claim"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Two of these sentences are about what a quantity does to another quantity. The wrong answers mostly turn an argument about a measure into an argument about the thing measured.</p>" },
        items: [
          { source: "Road capacity cannot be treated as a fixed quantity to be matched against a fixed demand, because the quantity supplied alters the demand it was built to satisfy.",
            options: [
              { text: "You cannot size a road against a set level of traffic, because building it changes how much traffic there is.", correct: true,
                why: "Keeps both quantities and the direction of the effect between them." },
              { text: "Demand for road space is fixed and capacity should match it.",
                why: "Exactly the view the sentence is written to reject." },
              { text: "Roads should not be widened.",
                why: "A recommendation. The sentence is describing why the usual calculation fails." },
              { text: "Traffic increases on its own over time.",
                why: "The article's claim is that the capacity causes the increase, not that it happens anyway." }
            ] },
          { source: "The measure counts the journeys the existing network makes possible, which is precisely the set of journeys least in need of improvement.",
            options: [
              { text: "It counts the trips people can already make, and those are the ones that need help least.", correct: true,
                why: "Keeps the circularity, which is the whole complaint." },
              { text: "The measure counts too few journeys.",
                why: "The number is not the problem; which journeys are counted is." },
              { text: "The existing network is adequate for most journeys.",
                why: "Takes the measure's blind spot as a finding about the city." },
              { text: "Journeys that are already easy should be improved first.",
                why: "The sentence says this is what the measure recommends, not what should happen." }
            ] },
          { source: "The absence is read as satisfaction rather than as exclusion.",
            options: [
              { text: "Nobody travelling that way is taken to mean nobody wants to, instead of nobody can.", correct: true,
                why: "Keeps both readings of the same absence, which is where the sentence does its work." },
              { text: "People are satisfied with the network.",
                why: "Reports the misreading as if it were true." },
              { text: "Excluded people are counted separately.",
                why: "They are counted nowhere, which is the point." },
              { text: "Absence of data makes the measure unreliable.",
                why: "The data are complete for what they measure; the problem is what is not a datum at all." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read", "time", "place"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second shuttle card. Read it.",
        text: NOTICE2,
        items: [
          { q: "It is half past eight in the evening. How long might you wait?",
            options: [
              { text: "Up to an hour.", correct: true, why: "Line 2: one an hour after seven, on the hour, so the next is at nine." },
              { text: "Up to ten minutes.", why: "That frequency applies only until seven." },
              { text: "There is no service.", why: "Line 2 says there is one an hour." }
            ] },
          { q: "Where should you get off for the north gate?",
            options: [
              { text: "The library, and walk five minutes further.", correct: true,
                why: "Lines 3 and 4 together: the stop is closed and the card names the substitute and its cost." },
              { text: "The north gate — it is still open.", why: "Line 3 says it is closed while the path is resurfaced." },
              { text: "The science building.", why: "Not mentioned on this card." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "The shuttle is more frequent in winter than before.", answer: "T", line: 1,
            why: "Line 1 gives every ten minutes from November; the earlier card said every fifteen. Comparing two cards is the skill being tested." },
          { stem: "The north gate stop will reopen when the path is finished.", answer: "NI", line: null,
            why: "Line 3 gives the reason for the closure but never promises a reopening. A reason is not a commitment." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read", "comparison", "measurement"],
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one comparison table, one habit.",
        text: { blocks: [{ lines: [
          "<b>Why the road filled</b> — removing the deterrent released the journeys it was deterring.",
          "<b>Why the measure keeps recommending roads</b> — it counts only journeys that already happen.",
          "<b>What to ask</b> — who is not in this number, and why not?"
        ],
        closer: { kind: "life",
          body: "<p>Work out the same four columns for your own regular journey. Which column decides it for you, and is that the one you would defend?</p>" } }] } }
    ]
  };
})();
