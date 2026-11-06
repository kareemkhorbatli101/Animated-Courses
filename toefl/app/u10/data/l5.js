/* Unit 10 · Rules, Rights and Ethics — LESSON 5 · READING
   Reading strategy: comparing information from more than one source.
   Data visual: line. */
(function () {
  var PASSAGE = {
    masthead: "TWO ACCURATE REPORTS", every: 1,
    blocks: [
      { h: "The same afternoon, twice", lines: [
        "Two newspapers reporting the same demonstration can both be entirely accurate and still leave their readers with incompatible impressions of it.",
        "One opens with the number of arrests; the other opens with the number of participants, and the discrepancy lies wholly in the arrangement.",
        "Neither publication has invented anything, and a reader comparing only the two headlines may reasonably conclude that one of them is being dishonest."
      ] },
      { h: "Two levers", lines: [
        "What has actually occurred is a decision about what to place first, and <b>ordering</b><sup>1</sup> remains one of the most powerful instruments available to anyone who reports.",
        "A second lever is the selection of the verb. Protesters who clashed with police have done something materially different from protesters who were dispersed by them, although the same afternoon is being described."
      ] },
      { h: "What reading across means", lines: [
        "Reading across two sources therefore means asking not only whether each statement is true, but which statements were selected and in which order they were arranged."
      ] }
    ],
    notes: ["ordering: the sequence in which facts are presented, which shapes what a reader takes to be the point"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "LIBRARY RULES", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Library rules. Group study rooms can be booked for two hours.",
      "Leaving belongings does not reserve a seat.",
      "Unattended items are taken to the front desk after thirty minutes."
    ] }],
    source: "University Library"
  };

  window.PAGE = {
    id: "u10-l5", unit: "u10", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Compare two sources without calling either a liar",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>incompatible</span> (adj) unable to be true together",
          "<span class='gloss'>discrepancy</span> (n) a difference between two accounts",
          "<span class='gloss'>materially</span> (adv) in a way that actually matters"
        ] }] },
        after: "<p>Notice that the article uses <i>incompatible</i> of the impressions, not of the facts.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader",
                body: "<p><b>Reading across sources</b> means holding two accounts beside each other and asking what each chose to put first. A difference of impression is not by itself evidence that anyone lied.</p>" },
        options: [
          { text: "Two true accounts can differ because of selection and ordering.", correct: true,
            why: "The headings run: the same afternoon twice, two levers, what reading across means." },
          { text: "Newspapers routinely invent facts.", why: "The article says neither invented anything." },
          { text: "Protests are badly reported.", why: "It makes no claim about quality of reporting generally." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the two levers it names.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Accurate accounts can differ because of what is selected and how it is ordered.", correct: true,
                why: "Both levers are named in the second section, and the third draws the practical conclusion." },
              { text: "One of the two newspapers must be lying.", why: "The article exists to rule that inference out." },
              { text: "Headlines should be banned.", why: "No recommendation of that kind appears." }
            ] },
          { q: "What are the two levers the article names?",
            options: [
              { text: "The order of presentation and the choice of verb.", correct: true,
                why: "<i>ordering</i> first, then <i>the selection of the verb</i> — a detail worth marking." },
              { text: "The headline and the photograph.", why: "Photographs are never mentioned." },
              { text: "The length and the placement in the paper.", why: "Neither is discussed." }
            ] },
          { q: "<i>Clashed with police</i> and <i>were dispersed by them</i> differ because:",
            options: [
              { text: "one makes the protesters the agents and the other makes them the object.", correct: true,
                why: "That is what <i>materially different</i> is pointing at, and it prepares Unit 11's work on the passive." },
              { text: "one is true and one is false.", why: "The article says the same afternoon is being described." },
              { text: "one is longer.", why: "Length is irrelevant to the distinction." }
            ] },
          { q: "What does the article say reading across two sources requires?",
            options: [
              { text: "Asking which statements were selected, and in what order.", correct: true,
                why: "Its closing sentence, and the only instruction it gives." },
              { text: "Deciding which source is more trustworthy.", why: "It offers no test of trustworthiness." },
              { text: "Finding a third source.", why: "A third source is never suggested." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the notice in the library.",
        text: NOTICE,
        items: [
          { q: "What happens to a bag left alone for an hour?",
            options: [
              { text: "It is taken to the front desk.", correct: true, why: "After thirty minutes — so an hour is well past the limit." },
              { text: "It reserves the seat.", why: "The notice denies exactly this." },
              { text: "Nothing, if the room is booked.", why: "The rule is about unattended items, not bookings." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "One of the two newspapers invented something.", answer: "F", line: 3,
            why: "Line 3 says neither publication invented anything." },
          { stem: "The order in which facts are given affects what a reader takes to be the point.", answer: "T", line: 4,
            why: "Line 4 calls ordering one of the most powerful instruments available." },
          { stem: "The demonstration took place in a capital city.", answer: "NI", line: null,
            why: "No location is ever given." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "Her j___ was that both reports were accurate.", answer: "judgment", given: [0, 1, 2],
            why: "<i>judge → judgment</i>." },
          { text: "The a___ rests on two levers, not on dishonesty.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart. Both lines are accurate. Ask what each one counts.",
        note: { kind: "reader",
                body: "<p>Two series can both be true and support opposite headlines. Before comparing their shapes, read what each one actually counts — and whether it counts the same thing across the whole period.</p>" },
        chart: {
          kind: "line", title: "Offences recorded and offences prosecuted",
          sub: "One police area, ten years, indexed to 100 in year one",
          unit: "", xlabel: "Year", ymax: 160,
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          series: [
            { name: "recorded", v: [100, 108, 119, 127, 134, 139, 145, 148, 152, 155] },
            { name: "prosecuted", v: [100, 97, 94, 90, 86, 81, 78, 74, 71, 68] }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Year", "Recorded", "Prosecuted"],
          rows: [[1,100,100],[2,108,97],[3,119,94],[4,127,90],[5,134,86],
                 [6,139,81],[7,145,78],[8,148,74],[9,152,71],[10,155,68]]
        },
        items: [
          { q: "Which headline does this chart support?",
            options: [
              { text: "Both — “crime up 55%” and “prosecutions down a third” are each true of it.", correct: true,
                why: "That is the unit's whole point made in a picture: two accurate series, two incompatible impressions, and the choice of which to lead with is editorial, not factual." },
              { text: "Only “crime up 55%”.", why: "The second line is equally present and equally real." },
              { text: "Neither — the chart is inconclusive.", why: "Both figures read straight off it." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find one news story reported by two outlets. What does each put in its first sentence? Neither needs to be wrong for them to differ.</p>" } }
    ]
  };
})();
