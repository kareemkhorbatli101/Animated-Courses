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
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "belongings", def: "the things you have with you", ar: "متعلّقات" },
      { term: "unattended", def: "left with nobody watching them", ar: "متروك دون مراقبة" },
    ],
    source: "University Library"
  };

  /* The second academic passage: the first is about two accurate reports,
     this one about the line between protest and evasion. */
  var PASSAGE2 = {
    masthead: "THE PENALTY IS PART OF THE ARGUMENT", every: 1,
    blocks: [
      { h: "Two people, one rule", lines: [
        "Consider two people who break the same rule for the same reason and differ only in what they do afterwards.",
        "The first announces the act, names herself and accepts whatever follows; the second conceals it and hopes to be overlooked."
      ] },
      { h: "Why the difference is not about sincerity", lines: [
        "It is tempting to locate the distinction in motive, and the attempt does not survive examination: both may be equally convinced, and neither can be inspected.",
        "What distinguishes them is observable rather than internal, and it consists in whether the act is addressed to anybody.",
        "An act performed where no one can see it makes no claim, enters no argument and leaves the rule exactly as it found it."
      ] },
      { h: "What acceptance buys", lines: [
        "Accepting the penalty is therefore not a moral ornament but the mechanism by which the act becomes legible as an argument.",
        "Remove it and an observer has no way to distinguish a protest from a convenience, which means the act can no longer do the work it was undertaken to do."
      ] }
    ],
    notes: ["legible: able to be read as what it is, by someone who was not told"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "LIBRARY · GROUP ROOMS", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Group rooms are released ten minutes after the booking starts if unoccupied.",
      "A room may be booked twice in one day, but not consecutively.",
      "Food is not permitted in the group rooms.",
      "Bookings cannot be transferred to another student."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "unoccupied", def: "with nobody in it", ar: "شاغر" },
      { term: "consecutively", def: "one straight after the other", ar: "على التوالي" },
    ],
    source: "University Library"
  };

  window.PAGE = {
    id: "u10-l5", unit: "u10", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Compare two sources without calling either a liar",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "incompatible", ar: "\u063a\u064a\u0631 \u0645\u062a\u0648\u0627\u0641\u0642",
            meaning: "unable to be true together",
            with: ["incompatible with", "mutually incompatible", "logically incompatible"],
            why: "The article applies it to the impressions two reports leave, not to their facts \u2014 which is the distinction the whole piece rests on." },
          { term: "discrepancy", ar: "\u062a\u0628\u0627\u064a\u0646 / \u0627\u062e\u062a\u0644\u0627\u0641",
            meaning: "a difference between two accounts",
            with: ["a discrepancy between", "explain the discrepancy", "minor discrepancies"],
            why: "Neutral as to blame. Reporting a discrepancy says two accounts differ, not that either is false." },
          { term: "materially", ar: "\u0628\u0635\u0648\u0631\u0629 \u062c\u0648\u0647\u0631\u064a\u0629",
            meaning: "in a way that actually matters",
            with: ["materially different", "materially affect", "not materially"],
            why: "A legal borrowing, and not about matter. Two accounts can differ in a hundred details without differing materially in one." }
        ],
        prompt: "Three words before you begin. Say each meaning before you turn the card \u2014 and notice that the article uses the first of the impressions, not of the facts.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>incompatible</span> (adj) unable to be true together",
          "<span class='gloss'>discrepancy</span> (n) a difference between two accounts",
          "<span class='gloss'>materially</span> (adv) in a way that actually matters"
        ] }] },
        after: "<p>Notice that the article uses <i>incompatible</i> of the impressions, not of the facts.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read", "evidence"],
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
        concepts: ["read", "inference", "claim"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the two levers it names.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "Accurate accounts can differ because of what is selected and how it is ordered.", correct: true,
                why: "Both levers are named in the second section, and the third draws the practical conclusion." },
              { text: "One of the two newspapers must be lying.", misreads: "overread", why: "The article exists to rule that inference out." },
              { text: "Headlines should be banned.", misreads: "overread", why: "No recommendation of that kind appears." }
            ] },
          { para: 2, q: "What are the two levers the article names?",
            options: [
              { text: "The order of presentation and the choice of verb.", correct: true,
                why: "<i>ordering</i> first, then <i>the selection of the verb</i> — a detail worth marking." },
              { text: "The headline and the photograph.", misreads: "absent", why: "Photographs are never mentioned." },
              { text: "The length and the placement in the paper.", misreads: "Neither", why: "Neither is discussed." }
            ] },
          { para: 2, q: "<i>Clashed with police</i> and <i>were dispersed by them</i> differ because:",
            options: [
              { text: "one makes the protesters the agents and the other makes them the object.", correct: true,
                why: "That is what <i>materially different</i> is pointing at, and it prepares Unit 11's work on the passive." },
              { text: "one is true and one is false.", misreads: "afternoon", why: "The article says the same afternoon is being described." },
              { text: "one is longer.", misreads: "overread", why: "Length is irrelevant to the distinction." }
            ] },
          { para: 3, q: "What does the article say reading across two sources requires?",
            options: [
              { text: "Asking which statements were selected, and in what order.", correct: true,
                why: "Its closing sentence, and the only instruction it gives." },
              { text: "Deciding which source is more trustworthy.", misreads: "overread", why: "It offers no test of trustworthiness." },
              { text: "Finding a third source.", misreads: "overread", why: "A third source is never suggested." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        concepts: ["read", "place"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the notice in the library.",
        text: NOTICE,
        items: [
          { para: 0, q: "What happens to a bag left alone for an hour?",
            options: [
              { text: "It is taken to the front desk.", correct: true, why: "After thirty minutes — so an hour is well past the limit." },
              { text: "It reserves the seat.", misreads: "overread", why: "The notice denies exactly this." },
              { text: "Nothing, if the room is booked.", misreads: "Unattended", why: "The rule is about unattended items, not bookings." }
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
          { stem: "One of the two newspapers invented something.", answer: "F", line: 3,
            why: "Line 3 says neither publication invented anything." },
          { stem: "The order in which facts are given affects what a reader takes to be the point.", answer: "T", line: 4,
            why: "Line 4 calls ordering one of the most powerful instruments available." },
          { stem: "The demonstration took place in a capital city.", answer: "NI", line: null,
            why: "No location is ever given." }
        ] },

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read", "claim"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is comparing sources. The sentence worth marking is usually the one that would have to be true for the rest of the paragraph to follow — the assumption rather than the claim.</p>" },
        items: [
          { prompt: "Which sentence states an assumption the rest depends on?",
            text: "The motion asks whether unjust laws should be broken. Every speaker so far has argued about the breaking. Whether the laws in question are unjust has been taken as settled throughout. That question is the one the motion was presumably meant to raise.",
            answer: "Whether the laws in question are unjust has been taken as settled throughout.",
            why: "The others describe the motion and the debate. Only this one names what everybody is assuming without saying so." },
          { prompt: "Which sentence rejects a possible reading of the argument?",
            text: "Accepting the penalty makes an act legible as a protest. It is not a demonstration of sincerity, and nothing here turns on how strongly anyone feels. Sincerity cannot be inspected from outside in any case. What can be observed is whether the act was addressed to anyone.",
            answer: "It is not a demonstration of sincerity, and nothing here turns on how strongly anyone feels.",
            why: "The only sentence in the negative, and it is there to head off the reading most people arrive with." },
          { prompt: "Which sentence gives the consequence rather than the principle?",
            text: "An act nobody can see makes no claim on anybody. It enters no argument and changes no rule. The person who performs it may be entirely sincere. So the observer cannot tell a protest from a convenience, and the act loses the power it was meant to have.",
            answer: "So the observer cannot tell a protest from a convenience, and the act loses the power it was meant to have.",
            why: "<i>So</i> plus a result. The three sentences before it set the principle out." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "Her j___ was that both reports were accurate.", answer: "judgment", given: [0, 1, 2],
            why: "<i>judge → judgment</i>." },
          { text: "The a___ rests on two levers, not on dishonesty.", answer: "argument", given: [0, 1, 2],
            why: "<i>argue → argument</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement"],
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "inference", "claim"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on the distinction Lesson 1 opened with. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Read the second section first if you like. It contains the move the whole article depends on: refusing to locate the difference in motive.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "Accepting the penalty is what makes rule-breaking readable as an argument.", correct: true,
                why: "The three sections set up the pair, rule out motive, and then say what acceptance does." },
              { text: "Breaking rules is justified when the rule is unjust.", misreads: "people", why: "Both people in the example believe the rule is unjust; that is held constant on purpose." },
              { text: "Sincere protesters should not be punished.", misreads: "makes", why: "The article argues that the punishment is part of what makes the protest work." }
            ] },
          { para: 2, q: "Why does the article reject motive as the distinction?",
            options: [
              { text: "Both people may be equally sincere, and sincerity cannot be inspected.", correct: true,
                why: "Two reasons in one sentence: it does not separate them, and it could not be checked if it did." },
              { text: "Motive is always dishonest.", misreads: "overread", why: "Nothing of the kind is suggested about either person." },
              { text: "Motives cannot be described in words.", misreads: "overread", why: "The objection is about inspection from outside, not about description." }
            ] },
          { para: 2, q: "What does the article say an unseen act does?",
            options: [
              { text: "Makes no claim, enters no argument and leaves the rule as it was.", correct: true,
                why: "Three consequences in one sentence, and they are what the final section builds on." },
              { text: "Changes the rule more slowly.", misreads: "leaves", why: "It leaves the rule exactly as it found it — not slower, but not at all." },
              { text: "Is morally worse than an open act.", misreads: "overread", why: "The article avoids ranking them morally; it says one of them cannot be read." }
            ] },
          { para: 3, q: "What does the article mean by calling acceptance “not a moral ornament”?",
            options: [
              { text: "It does something, rather than merely looking admirable.", correct: true,
                why: "The sentence replaces the decorative reading with a functional one: it is the mechanism." },
              { text: "It is not required.", misreads: "overread", why: "The article treats it as the thing without which the act fails." },
              { text: "It is unrelated to morality.", misreads: "moral", why: "The point is that its role is practical as well as moral, not that morality is absent." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "4a",
        concepts: ["read"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>In this unit the wrong paraphrase usually adds a moral judgement the sentence was careful not to make. Watch for an answer that is more certain, or more condemning, than its source.</p>" },
        items: [
          { source: "Two newspapers reporting the same demonstration can both be entirely accurate and still leave their readers with incompatible impressions of it.",
            options: [
              { text: "Two papers can get every fact right about one event and still send readers away believing different things.", correct: true,
                why: "Keeps the accuracy of both and the incompatibility of the impressions." },
              { text: "One of the two papers must be inaccurate.", misreads: "overread",
                why: "The sentence is constructed precisely to deny this." },
              { text: "Readers draw different conclusions because they read carelessly.", misreads: "overread",
                why: "The cause offered by the article is arrangement, not the reader." },
              { text: "Newspapers should agree on how to report an event.", misreads: "overread",
                why: "A recommendation; the sentence is making an observation." }
            ] },
          { source: "What distinguishes them is observable rather than internal, and it consists in whether the act is addressed to anybody.",
            options: [
              { text: "The difference can be seen from outside: is the act aimed at someone or not?", correct: true,
                why: "Keeps both halves — observable, and the specific criterion." },
              { text: "The difference lies in how strongly each person believes.", misreads: "internal",
                why: "That is the internal account the sentence rejects." },
              { text: "The difference is that one act is legal.", misreads: "overread",
                why: "Both break the same rule, which is given at the start." },
              { text: "Only acts with an audience are sincere.", misreads: "overread",
                why: "Sincerity is explicitly not the criterion." }
            ] },
          { source: "Accepting the penalty is not a moral ornament but the mechanism by which the act becomes legible as an argument.",
            options: [
              { text: "Taking the punishment is not decoration: it is what lets the act be read as a case being made.", correct: true,
                why: "Keeps the <i>not … but …</i> frame and the functional claim inside it." },
              { text: "Protesters who accept punishment are more admirable.", misreads: "Not a moral ornament",
                why: "<i>Not a moral ornament</i> is there to rule this reading out." },
              { text: "The penalty makes the protest more effective.", misreads: "legible",
                why: "Close, and it drops <i>legible</i>: the claim is about being understood, not about force." },
              { text: "Any act becomes an argument once it is punished.", misreads: "overread",
                why: "Reverses the direction: acceptance is the protester's move, not the state's." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read", "time", "place"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the library. Read it.",
        text: NOTICE2,
        items: [
          { para: 0, q: "You book a room for two o'clock and arrive at ten past. What may have happened?",
            options: [
              { text: "The room has been released to someone else.", correct: true,
                why: "Line 1: ten minutes after the booking starts, if nobody is in it." },
              { text: "Nothing — the booking lasts two hours.", misreads: "overread", why: "Line 1 applies before the two hours do." },
              { text: "The booking has been transferred.", misreads: "Bookings", why: "Line 4 says bookings cannot be transferred." }
            ] },
          { para: 0, q: "Can you book the same room for two o'clock and four o'clock on one day?",
            options: [
              { text: "Yes — two bookings are allowed, as long as they are not back to back.", correct: true,
                why: "Line 2 permits two and forbids consecutive ones, and two till four then four till six would be consecutive." },
              { text: "No — only one booking a day is allowed.", misreads: "overread", why: "Line 2 allows two." },
              { text: "Yes, and they may be consecutive.", misreads: "overread", why: "That is the one thing line 2 rules out." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "A friend may use your booking if you cannot come.", answer: "F", line: 4,
            why: "Line 4 forbids transfer outright, with no exception offered." },
          { stem: "Drinks are permitted in the group rooms.", answer: "NI", line: null,
            why: "Line 3 names food only. Whether a drink counts as food is exactly the sort of thing the card does not settle, and guessing is not reading." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "x1", label: "The two true reports",

            detail: "Rawan has two accounts of the same meeting that leave opposite impressions. She assumes one of them must contain a falsehood." },

          { id: "x2", label: "The quiet breach",

            detail: "Jamal treats a company hiding a breach and a group announcing one as the same kind of act, since both broke the same rule." },

          { id: "x3", label: "The reliable source",

            detail: "Basma checks that each fact in a report is accurate and stops there, satisfied." }

        ],

        takeaways: [

          { text: "<b>Why two true reports differ</b> \u2014 what was placed first, and which verb was chosen.", caseId: "x1",

            why: "Neither has to be false. Order and verb choice carry an argument that survives every individual sentence being accurate." },

          { text: "<b>What separates protest from evasion</b> \u2014 whether the act is addressed to anybody.", caseId: "x2",

            why: "Civil disobedience is a public argument that accepts its penalty. Evasion is the same breach with the audience and the cost removed, and the two are not morally alike." },

          { text: "<b>What to ask of a source</b> \u2014 not only is this true, but why is it here, and first?", caseId: "x3",

            why: "Accuracy is the easy test and the weak one. Selection and placement are where a true report does its persuading." }

        ],
        prompt: "Two articles, one chart, one habit \u2014 in three parts. Drag each part onto the reader it would change.",
        text: { blocks: [{ lines: [
          "<b>Why two true reports differ</b> — what was placed first, and which verb was chosen.",
          "<b>What separates protest from evasion</b> — whether the act is addressed to anybody.",
          "<b>What to ask of a source</b> — not only is this true, but why is it here, and first?"
        ],
        closer: { kind: "life",
          body: "<p>Find one news story reported by two outlets. What does each put in its first sentence? Neither needs to be wrong for them to differ.</p>" } }] } }
    ]
  };
})();
