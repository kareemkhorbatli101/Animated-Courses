/* Unit 6 · Calls and Handovers — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u06-l5", unit: "u06", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a rota and a shift report, and find what the gaps in them cost",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the rota", letter: "A",
        concepts: ["read", "time"],
        kind: "cards", task: null, n: 0,
        prompt: "Six words from a rota and a shift report. Say what each means before you turn it over.",
        cards: [
          { term: "rota", ar: "جدول المناوبات",
            meaning: "the list of who works which shift",
            with: ["on the rota", "draw up the rota", "a rota change"],
            why: "British. American English says <i>schedule</i>, which in British English is more often a timetable of events." },
          { term: "cover", ar: "تغطية الورديات",
            meaning: "someone available to do an absent person's work",
            with: ["arrange cover", "no cover for Friday"],
            why: "As a noun it is uncountable: <i>we have no cover</i>, not <i>no covers</i>." },
          { term: "back-to-back", ar: "ورديتان متتاليتان",
            meaning: "two shifts with no proper break between them",
            with: ["working back-to-back", "a back-to-back shift"],
            why: "Hyphenated before a noun. It is usually a sign that the rota has failed rather than that someone is keen." },
          { term: "handover window", ar: "فترة التسليم",
            meaning: "the overlap when both shifts are present",
            with: ["a fifteen-minute handover window"],
            why: "If it is not on the rota, it does not happen. Two shifts that never meet hand over by note only." },
          { term: "downtime", ar: "التوقّف عن الإنتاج",
            meaning: "time a machine is not running",
            with: ["unplanned downtime", "reduce downtime"],
            why: "One word. Planned downtime is maintenance; unplanned downtime is the figure that gets reported." },
          { term: "root cause", ar: "السبب الجذري",
            meaning: "the thing that actually produced a fault, not the thing that showed it",
            with: ["find the root cause", "a root cause analysis"],
            why: "<i>The loom stopped</i> is a symptom. <i>The bearing was not greased at the last service</i> is a root cause." }
        ],
        explain: { terms: [
          { en: "rota", gloss: "who works which shift", ar: "جدول المناوبات" },
          { en: "downtime", gloss: "time a machine is not running", ar: "التوقّف عن الإنتاج" },
          { en: "root cause", gloss: "what actually produced the fault", ar: "السبب الجذري" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the rota", letter: "B",
        concepts: ["read", "people"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The monthly shift report. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "SHIFT REPORT — MARCH",
          blocks: [
            { h: "Cover and absence", lines: [
              "Nine shifts were covered by someone other than the person rostered, against four in February.",
              "Seven of the nine were Ghada's, who has been absent since the ninth. Marwan covered six of those seven." ] },
            { h: "Downtime", lines: [
              "Unplanned downtime was 31 hours, of which 19 were loom three.",
              "Loom three stopped on four separate shifts before it was taken out of service. On three of those shifts it was restarted by the operator to see whether it would run.",
              "The root cause, found on the fifth day, was a bearing that had not been greased at the January service." ] },
            { h: "Handover", lines: [
              "Two of the four loom-three stoppages were not passed on at all, because they happened in the last hour of a shift and were written in the note rather than said aloud.",
              "The rota has no handover window on Tuesdays and Thursdays, which is when both of those stoppages occurred.",
              "I am proposing a fifteen-minute paid overlap on those two days. It costs about forty hours a year and would have saved nineteen in March alone." ] }
          ] },
        items: [
          { para: 1, q: "How many March shifts were worked by someone other than the person rostered?",
            options: [
              { text: "Nine.", correct: true, why: "Against four in February, which is what makes nine worth reporting." },
              { text: "Seven.", why: "Seven of the nine were Ghada's." },
              { text: "Six.", why: "Six is how many of Ghada's seven Marwan covered." } ] },
          { para: 2, q: "How much of the unplanned downtime was loom three?",
            options: [
              { text: "19 hours of the 31.", correct: true, why: "More than half, which is why the rest of the report is about one machine." },
              { text: "31 hours.", why: "That is the total across all machines." },
              { text: "Four hours.", why: "Four is the number of shifts, not hours." } ] },
          { para: 2, q: "What did operators do on three of the four stoppages?",
            options: [
              { text: "Restarted the loom to see whether it would run.", correct: true,
                why: "Stated plainly, and it is the behaviour the handover in Lesson 4 explicitly forbids." },
              { text: "Reported it to maintenance.", why: "The report does not say this happened on those shifts." },
              { text: "Took it out of service.", why: "That happened once, after the fourth stoppage." } ] },
          { para: 2, q: "What was the root cause?",
            options: [
              { text: "A bearing that was not greased at the January service.", correct: true,
                why: "The report distinguishes this from the symptom, which was the loom stopping." },
              { text: "The loom stopping four times.", why: "That is what showed the fault, not what caused it." },
              { text: "Operators restarting it.", why: "That made it worse and did not cause it." } ] },
          { para: 3, q: "Why were two stoppages never passed on?",
            options: [
              { text: "They happened at the end of a shift with no handover window.", correct: true,
                why: "Two facts that only matter together, which is the point of the paragraph." },
              { text: "The operators forgot.", why: "The report blames the rota rather than the people, and gives the evidence for it." },
              { text: "They were not serious.", why: "They were part of a nineteen-hour downtime." } ] },
          { para: 3, q: "What is the arithmetic behind the proposal?",
            options: [
              { text: "Forty hours a year of overlap against nineteen lost in March alone.", correct: true,
                why: "The report sets the cost beside the saving in one sentence, which is what makes it a proposal rather than a complaint." },
              { text: "It would cost nothing.", why: "The cost is stated: about forty hours a year." },
              { text: "It would save forty hours.", why: "It would cost forty and save, on March's evidence, considerably more." } ] }
        ],
        explain: { terms: [
          { en: "rostered", gloss: "scheduled on the rota", ar: "مُدرَج في جدول المناوبات" },
          { en: "out of service", gloss: "stopped and not to be used", ar: "خارج الخدمة" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find what the gap cost", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that connects a process to its cost.",
        note: { kind: "reader", title: "Fact, and fact plus consequence",
                body: "<p>Most lines in a report state something. One or two connect it to money or hours. Those are the lines that make a change happen, and they are usually sentences with two halves.</p>" },
        items: [
          { prompt: "Which sentence links the missing handover to the downtime?",
            text: "Loom three stopped on four shifts. Two of those stoppages were never passed on. The rota has no handover window on Tuesdays or Thursdays, which is when both of them occurred. Unplanned downtime was 31 hours.",
            answer: "The rota has no handover window on Tuesdays or Thursdays, which is when both of them occurred.",
            why: "It is the only sentence that puts the gap and the failures in the same clause. The others are facts standing alone." },
          { prompt: "Which sentence shows the cost of the proposal against its benefit?",
            text: "I am proposing a fifteen-minute paid overlap on Tuesdays and Thursdays. Both shifts are already on site. It costs about forty hours a year and would have saved nineteen in March alone. The change would start in May.",
            answer: "It costs about forty hours a year and would have saved nineteen in March alone.",
            why: "Cost and benefit in one sentence, with the comparison left implicit and obvious." },
          { prompt: "Which sentence names the real cause rather than the symptom?",
            text: "Loom three stopped repeatedly through the first week. Operators restarted it three times. It was taken out of service on the fifth day. The bearing had not been greased at the January service.",
            answer: "The bearing had not been greased at the January service.",
            why: "Everything else describes what happened. This explains why it happened, and it points at a date four months earlier." },
          { prompt: "Which sentence shows the cover arrangement was concentrated on one person?",
            text: "Nine shifts were covered by someone other than the person rostered. February had four. Marwan covered six of Ghada's seven absent shifts. Cover was arranged in every case.",
            answer: "Marwan covered six of Ghada's seven absent shifts.",
            why: "Nine covered shifts sounds like a spread. Six on one person is a single point of failure, which is Unit 3's idea in a rota." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find what the gap cost", letter: "B",
        concepts: ["comparison", "time"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "The March rota, as a table. Read it, then answer.",
        note: { kind: "reader", title: "A table is a chart you have to read twice",
                body: "<p>Nothing in a table is emphasised, so the pattern is yours to find. Read down a column before you read across a row — columns usually hold the thing that varies.</p>" },
        chart: {
          kind: "table",
          title: "March rota — week three",
          sub: "D = day shift, N = night shift, — = not on. Handover window shown in the last column.",
          cols: ["Day", "Fadi", "Ghada", "Marwan", "Nour", "Handover window"],
          rows: [
            ["Monday",    "D", "—", "N", "D", "15 min"],
            ["Tuesday",   "D", "—", "N", "—", "none"],
            ["Wednesday", "N", "—", "D", "D", "15 min"],
            ["Thursday",  "D", "—", "N", "—", "none"],
            ["Friday",    "D", "—", "N", "D", "15 min"],
            ["Saturday",  "—", "—", "D", "—", "n/a"]
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "On which days is there no handover window?",
            options: [
              { text: "Tuesday and Thursday.", correct: true, why: "The two rows showing <i>none</i>, and the two days the report says the stoppages were lost on." },
              { text: "Saturday.", why: "Saturday shows <i>n/a</i> — only one shift is on, so there is nothing to hand over." },
              { text: "There is one every day.", why: "Three of the six rows say otherwise." } ] },
          { q: "What is notable about Ghada's column?",
            options: [
              { text: "She is absent all week.", correct: true, why: "Six dashes in a row, which matches the report's statement that she has been absent since the ninth." },
              { text: "She works nights.", why: "She works nothing this week." },
              { text: "She covers for Marwan.", why: "It is the other way round, and not in this week at all." } ] },
          { q: "How many nights does Marwan work this week?",
            options: [
              { text: "Four.", correct: true, why: "Monday, Tuesday, Thursday and Friday. Reading down his column is faster than reading across six rows." },
              { text: "Five.", why: "Wednesday is a day shift and Saturday is a day shift." },
              { text: "Six.", why: "Two of his six are days." } ] },
          { q: "Which day has Fadi on nights?",
            options: [
              { text: "Wednesday.", correct: true, why: "The single N in his column, and it is the day Marwan is on days — they swap." },
              { text: "Tuesday.", why: "He is on days." },
              { text: "He never works nights.", why: "He does, once." } ] },
          { q: "What does the table suggest about why Tuesday and Thursday have no overlap?",
            options: [
              { text: "Nour is not on those days, so nobody is rostered to cover the gap.", correct: true,
                why: "Her column has dashes on exactly those two days. The table shows the correlation; it does not prove the cause." },
              { text: "Marwan is absent.", why: "He is on nights both days." },
              { text: "The looms are off.", why: "The table says nothing about machines." } ] },
          { q: "What can this table NOT tell you?",
            options: [
              { text: "Whether the handover actually happened on the days it is scheduled.", correct: true,
                why: "A rota is a plan. Whether two people stood in a room and spoke is a different record entirely." },
              { text: "Who is on nights.", why: "That is exactly what it shows." },
              { text: "Which days have no overlap.", why: "The last column states it." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the report actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the report in 1B.",
        carry: "1b",
        items: [
          { stem: "More shifts were covered in March than in February.", answer: "T", line: 1,
            why: "Nine against four." },
          { stem: "Loom three accounted for most of the unplanned downtime.", answer: "T", line: 3,
            why: "19 hours of 31." },
          { stem: "The operators who restarted the loom were disciplined.", answer: "NI", line: null,
            why: "The report records what they did. What followed is never mentioned." },
          { stem: "The bearing fault was found on the first day.", answer: "F", line: 5,
            why: "<i>Found on the fifth day.</i>" },
          { stem: "The proposed overlap would be unpaid.", answer: "F", line: 8,
            why: "<i>A fifteen-minute paid overlap.</i>" },
          { stem: "Ghada will return in April.", answer: "NI", line: null,
            why: "Her absence since the ninth is stated. Her return is not discussed." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the report actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "The list of who works which shift is the ___ .", answer: "rota", given: [0],
            why: "British. American English says schedule." },
          { text: "Time a machine is not running is ___ .", answer: "downtime", given: [0],
            why: "One word. Planned is maintenance; unplanned is what gets reported." },
          { text: "The bearing was the ___ cause, not the stopping.", answer: "root", given: [0],
            why: "What produced the fault, as against what showed it." },
          { text: "Two shifts with no break between them are ___ .", answer: "back-to-back", given: [0],
            why: "Usually a sign the rota has failed." },
          { text: "The overlap when both shifts are present is the handover ___ .", answer: "window", given: [0],
            why: "If it is not on the rota, it does not happen." },
          { text: "Somebody available to do an absent person's work is ___ .", answer: "cover", given: [0],
            why: "Uncountable as a noun: <i>we have no cover</i>." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the report actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people, four readings. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Issam", detail: "Reports that a loom stopped four times, and stops there." },
          { id: "c2", label: "Rania", detail: "Sees nine covered shifts spread across the month and concludes cover is working well." },
          { id: "c3", label: "Munir", detail: "Writes a stoppage in the handover note at the end of his shift and goes home." },
          { id: "c4", label: "Dima", detail: "Proposes a paid overlap without saying what it would cost." }
        ],
        takeaways: [
          { text: "A symptom is not a cause.", caseId: "c1",
            why: "Four stoppages is what you saw. A bearing ungreased in January is what happened, and only the second one can be fixed." },
          { text: "Nine shifts covered by one person is not nine shifts of cover.", caseId: "c2",
            why: "Six of Ghada's seven went to Marwan. The spread is in the figure, not in the rota." },
          { text: "A machine fault belongs in a conversation, not a note.", caseId: "c3",
            why: "Two of the four stoppages were lost exactly this way, on the two days with no handover window." },
          { text: "A proposal needs its cost beside its benefit.", caseId: "c4",
            why: "Forty hours a year against nineteen saved in March is a decision someone can take. <i>We should overlap</i> is a wish." }
        ],
        closer: "<p>Next: the thing the handover in Lesson 4 did that this report shows was missing — checking, out loud, that the other person has it.</p>" }

    ]
  };
})();
