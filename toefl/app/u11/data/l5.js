/* Unit 11 · How Science Works — LESSON 5 · READING
   Reading strategy: paraphrasing; reading an infographic. Visual: bubble. */
(function () {
  var PASSAGE = {
    masthead: "A RESULT THAT WILL NOT REPEAT", every: 1,
    blocks: [
      { h: "What the projects found", lines: [
        "A result that cannot be reproduced is not yet a result, and a surprising proportion of published findings turn out to be of that kind.",
        "This was established by large <b>replication</b><sup>1</sup> projects in which hundreds of experiments were repeated by independent teams, and in several fields fewer than half the original effects were recovered."
      ] },
      { h: "What it does and does not mean", lines: [
        "The finding provoked alarm, some of it justified and some of it confused.",
        "A failed replication does not establish that the original was wrong, because the repetition may itself have been flawed, and a single study has never been meant to settle anything.",
        "What the projects did establish is that the published record had been treating individual studies as more conclusive than their methods warranted."
      ] },
      { h: "What is being done", lines: [
        "The remedies now being adopted are unglamorous and mostly procedural: analyses are registered before the data are collected, materials are shared, and negative results are published rather than quietly filed."
      ] }
    ],
    notes: ["replication: repeating a study by an independent team, to see whether the original effect appears again"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "EQUIPMENT BOOKING", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Equipment booking. Book the spectrometer online, up to two weeks ahead.",
      "Cancel at least a day before, or the slot is counted against your group.",
      "Training is required before your first booking."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "spectrometer", def: "an instrument that measures the spectrum of light", ar: "مطياف" },
    ],
    source: "Department of Chemistry"
  };

  /* The second academic passage: the first is about results that will not
     repeat, this one about why nobody tries. */
  var PASSAGE2 = {
    masthead: "NOBODY IS PAID TO CHECK", every: 1,
    blocks: [
      { h: "A gap with no villain in it", lines: [
        "The replication projects are often read as exposing carelessness, and that reading misses what they actually found.",
        "No part of the system rewards repeating somebody else's experiment, and almost every part of it rewards producing something new."
      ] },
      { h: "Where the incentives point", lines: [
        "Appointments, grants and promotions are decided on original findings; a successful replication adds nothing to a record and a failed one makes an enemy.",
        "Journals have historically declined both, on the entirely consistent ground that neither is news.",
        "A researcher who spends a year checking a published claim has therefore spent a year that counts for nothing, whatever the year establishes."
      ] },
      { h: "Why the remedies are procedural", lines: [
        "Changes that depend on individual virtue have been tried for a century and have not worked, which is why the measures now being adopted alter the procedure instead.",
        "Registering an analysis before the data exist, requiring materials to be shared, and accepting papers on the method alone each remove a decision from the point where the incentive bites."
      ] }
    ],
    notes: ["incentive: a reason to act that the rules create, whatever anybody intends — the sense Unit 7 established"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "EQUIPMENT · TRAINING", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Training must be completed before your first booking, not before your first use.",
      "Training is valid for two years.",
      "A lapsed user may book only with a trained member of the group present.",
      "Calibration records are held by the technician and released on request."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "lapsed", def: "no longer valid, because the time ran out", ar: "منتهٍ" },
    ],
    source: "Department of Chemistry"
  };

  window.PAGE = {
    id: "u11-l5", unit: "u11", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Say it back in your own words, and read a graphic",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read", "evidence"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "recovered", ar: "\u0645\u064f\u0633\u062a\u0631\u062c\u064e\u0639",
            meaning: "found again in the repetition",
            with: ["the effect was recovered", "recovered in replication", "not recovered"],
            why: "A technical use: an effect is recovered when a second study finds it too. It says nothing about whether the first study was done badly." },
          { term: "warranted", ar: "\u0645\u0628\u0631\u0651\u0631",
            meaning: "justified \u2014 what the evidence entitles you to say",
            with: ["not warranted", "a warranted conclusion", "warranted by the data"],
            why: "The quietest and most important word here. It separates what is true from what you have earned the right to assert, and most overclaiming lives in that gap." },
          { term: "procedural", ar: "\u0625\u062c\u0631\u0627\u0626\u064a",
            meaning: "to do with how things are done, not what is believed",
            with: ["a procedural problem", "procedural rather than", "procedural safeguards"],
            why: "The article\u0027s diagnosis: the trouble is procedural, in what the system rewards, not in anyone\u0027s beliefs or honesty." }
        ],
        prompt: "Three words before you begin. Say each meaning before you turn the card \u2014 the second is the article\u0027s quietest and most important word.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>recovered</span> (adj) found again in the repetition",
          "<span class='gloss'>warranted</span> (v) justified — what the evidence entitles you to say",
          "<span class='gloss'>procedural</span> (adj) to do with how things are done, not what is believed"
        ] }] },
        after: "<p>The second is the article's quietest and most important word.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read", "claim"],
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article, then paraphrase its likely argument in your head. Which paraphrase is closest?",
        note: { kind: "reader",
                body: "<p><b>Paraphrase as you read.</b> After each section, say it back in your own words without looking. If you can only repeat the author's phrasing, you have recognised the sentence rather than understood it.</p>" },
        options: [
          { text: "Many published results do not repeat; that is a problem about how studies are treated, and it is being fixed procedurally.", correct: true,
            why: "Three headings, three clauses — and crucially it does not say the original studies were wrong." },
          { text: "Most published science is fraudulent.", why: "Fraud is never mentioned, and the article explicitly resists the strong reading." },
          { text: "Replication is impossible in most fields.", why: "Replication is what the projects did." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        concepts: ["read", "comparison", "evidence"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once to paraphrase each section in one sentence.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "The record treated single studies as more conclusive than their methods justified.", correct: true,
                why: "That is what the article says the projects <i>did</i> establish, as against what people assumed." },
              { text: "Most published findings are false.", misreads: "overread", why: "The article refuses that inference explicitly." },
              { text: "Replication projects were badly designed.", misreads: "may", why: "It says a repetition <i>may</i> be flawed, not that these were." }
            ] },
          { para: 2, q: "Why does a failed replication not establish that the original was wrong?",
            options: [
              { text: "The repetition may itself have been flawed.", correct: true,
                why: "Stated directly, and paired with the reminder that one study was never meant to settle anything." },
              { text: "Because the original was peer reviewed.", misreads: "overread", why: "Peer review is not offered as a defence." },
              { text: "Because fewer than half were tested.", misreads: "recovered", why: "Fewer than half were <i>recovered</i>, which is different." }
            ] },
          { para: 2, q: "<i>More conclusive than their methods warranted</i> means the studies were:",
            options: [
              { text: "treated as settling more than their design could support.", correct: true,
                why: "<i>Warranted</i> is about entitlement: what the method licenses you to claim." },
              { text: "badly conducted.", misreads: "overread", why: "The sentence is about how they were <i>treated</i>, not how they were done." },
              { text: "too small to publish.", misreads: "overread", why: "Size is not the criterion named." }
            ] },
          { para: 3, q: "Why does the author call the remedies <i>unglamorous</i>?",
            options: [
              { text: "They are procedural rather than discoveries.", correct: true,
                why: "Registration, sharing and publishing nulls are housekeeping, and the word is doing gentle work." },
              { text: "They are unlikely to succeed.", misreads: "their", why: "No doubt about their effect is expressed." },
              { text: "They are expensive.", misreads: "absent", why: "Cost is not mentioned." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        concepts: ["read"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card beside the instrument.",
        text: NOTICE,
        items: [
          { para: 0, q: "What happens if you cancel on the day?",
            options: [
              { text: "The slot counts against your group.", correct: true, why: "Cancellation must be at least a day before." },
              { text: "Nothing.", misreads: "overread", why: "The card attaches a consequence." },
              { text: "You lose your training.", misreads: "Training", why: "Training is a separate requirement." }
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
          { stem: "A failed replication proves the original study was wrong.", answer: "F", line: 4,
            why: "Line 4 denies exactly this, and gives two reasons." },
          { stem: "Negative results are now being published rather than filed.", answer: "T", line: 6,
            why: "Line 6 lists it among the remedies being adopted." },
          { stem: "The replication projects were funded by governments.", answer: "NI", line: null,
            why: "Funding is never mentioned." }
        ] },

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read", "measurement", "cause"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is paraphrasing. The sentence worth paraphrasing is the one that would survive if you deleted everything else — and it is very rarely the sentence with the percentage in it.</p>" },
        items: [
          { prompt: "Which sentence states what the finding does NOT show?",
            text: "Fewer than half the original effects were recovered. The projects were large and the teams independent. A failed replication does not establish that the original was wrong, since the repetition may itself have been flawed. Several of the original authors have since published further data.",
            answer: "A failed replication does not establish that the original was wrong, since the repetition may itself have been flawed.",
            why: "The only sentence in the negative, and it is there because the obvious inference is the wrong one." },
          { prompt: "Which sentence gives the cause rather than the effect?",
            text: "Negative results are published far less often than positive ones. The literature therefore over-represents effects that exist. Editors have historically regarded a null finding as not news. Readers who meta-analyse the published record inherit the distortion.",
            answer: "Editors have historically regarded a null finding as not news.",
            why: "The other three describe the distortion and its consequences; only this one says where it comes from." },
          { prompt: "Which sentence describes a remedy rather than a problem?",
            text: "An analysis chosen after the data are seen can be chosen to fit them. This is not usually deliberate and is very hard to detect afterwards. Registering the analysis in advance removes the possibility entirely. The practice is now required by several journals.",
            answer: "Registering the analysis in advance removes the possibility entirely.",
            why: "The last sentence reports uptake, which is not the same as describing what the remedy does." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        carry: "4a",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "Every m___ should carry its uncertainty.", answer: "measurement", given: [0, 1, 2],
            why: "<i>measure → measurement</i>." },
          { text: "An e___ intervenes; an observation watches.", answer: "experiment", given: [0, 1, 2],
            why: "<i>Experiment</i> — and the difference decides what you may conclude." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement", "claim"],
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the infographic, then read the text beside it. An infographic is an argument with the sources left out.",
        note: { kind: "reader",
                body: "<p>An infographic is designed to be persuasive before it is understood. Read its <b>caption and source</b> first, and ask what the sizes encode — area, length or nothing at all. Area is read badly by everyone, which is why the figures here are printed inside the circles.</p>" },
        chart: {
          kind: "bubble", title: "Research funding by field",
          sub: "One national agency, one year, in millions. Figures printed because area alone is not readable.",
          source: "Illustrative, authored for this item",
          bubbles: [
            { name: "Medicine", v: 106, x: 170, y: 170, label: "106" },
            { name: "Physics",  v: 54,  x: 340, y: 130, label: "54" },
            { name: "Biology",  v: 38,  x: 455, y: 205, label: "38" },
            { name: "History",  v: 12,  x: 120, y: 268, label: "12" },
            { name: "Arts",     v: 8,   x: 553, y: 100, label: "8" }
          ],
          cols: ["Field", "Funding (m)"],
          rows: [["Medicine","106"],["Physics","54"],["Biology","38"],["History","12"],["Arts","8"]]
        },
        items: [
          { q: "Medicine's circle looks far more than twice the size of Physics'. Why?",
            options: [
              { text: "Because area grows faster than the figure does, so area exaggerates the difference.", correct: true,
                why: "106 is about twice 54, but a circle of twice the value has roughly 1.4 times the radius and twice the area — and the eye reads the width. This is why the numbers are printed inside." },
              { text: "Because medicine received about four times as much.", why: "The figures say 106 against 54." },
              { text: "Because the circles are not to scale.", why: "They are — that is precisely the problem." }
            ] }
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "measurement", "evidence"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on why the first article's problem persists. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Paraphrase each heading before you read under it. The third one promises remedies, and it is the only section that does not describe something going wrong.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "The shortage of replication follows from the incentives, not from carelessness.", correct: true,
                why: "The first section rejects the carelessness reading; the second shows where the incentives point." },
              { text: "Researchers are careless about checking their work.", misreads: "reading", why: "<i>That reading misses what they actually found</i> — the article rejects it in its second sentence." },
              { text: "Replication projects were badly designed.", misreads: "absent", why: "Their design is not criticised anywhere." }
            ] },
          { para: 2, q: "What does the article say a successful replication adds?",
            options: [
              { text: "Nothing to the researcher's record.", correct: true,
                why: "And the failed one is worse than nothing: it makes an enemy." },
              { text: "A citation and a publication.", misreads: "Journals", why: "Journals have historically declined them." },
              { text: "A claim on a grant.", misreads: "grants", why: "Grants are listed among the things decided on original findings." }
            ] },
          { para: 2, q: "Why does the article call the journals' position “entirely consistent”?",
            options: [
              { text: "Neither kind of replication is news, which is the standard they apply to everything.", correct: true,
                why: "The phrase concedes that the journals are not behaving oddly, which is what makes the problem structural." },
              { text: "Because journals always publish replications.", misreads: "historically", why: "The article says they have historically declined them." },
              { text: "Because the standard is written down.", misreads: "overread", why: "No written rule is mentioned." }
            ] },
          { para: 3, q: "Why are the remedies procedural rather than moral?",
            options: [
              { text: "Appeals to individual virtue have been tried for a century without working.", correct: true,
                why: "Stated directly, and each remedy named afterwards removes a decision from where the incentive acts." },
              { text: "Researchers cannot be trusted.", misreads: "overread", why: "The article has just finished arguing that nobody here is behaving badly." },
              { text: "Procedures are cheaper.", misreads: "absent", why: "Cost is never discussed." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "1c",
        concepts: ["read", "inference"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Two of these sentences refuse an inference the reader is about to make. A paraphrase that makes the inference anyway is not a simplification; it is the opposite of what the sentence says.</p>" },
        items: [
          { source: "A failed replication does not establish that the original was wrong, because the repetition may itself have been flawed.",
            options: [
              { text: "When a repeat fails, that does not prove the first study was mistaken: the repeat might be the faulty one.", correct: true,
                why: "Keeps the refusal and the reason for it." },
              { text: "A failed replication proves the original was wrong.", misreads: "overread",
                why: "The exact inference the sentence exists to block." },
              { text: "Replications are usually flawed.", misreads: "overread",
                why: "<i>May have been</i> is a possibility, not a tendency." },
              { text: "Neither study can be trusted.", misreads: "overread",
                why: "The sentence withholds a verdict rather than condemning both." }
            ] },
          { source: "No part of the system rewards repeating somebody else's experiment, and almost every part of it rewards producing something new.",
            options: [
              { text: "Checking other people's work earns nothing, while novelty is rewarded nearly everywhere.", correct: true,
                why: "Keeps both halves, and keeps <i>almost</i>." },
              { text: "Researchers prefer doing new work.", misreads: "overread",
                why: "Turns a fact about the rules into a fact about preferences — exactly the move the article warns against." },
              { text: "The system punishes replication.", misreads: "overread",
                why: "<i>Does not reward</i> is weaker than punishes, and the difference matters to the argument." },
              { text: "New findings are more important than replications.", misreads: "overread",
                why: "A judgement about value; the sentence is about what is rewarded." }
            ] },
          { source: "The published record had been treating individual studies as more conclusive than their methods warranted.",
            options: [
              { text: "Single studies were being read as settling more than their design could support.", correct: true,
                why: "Keeps the comparison between what was claimed and what the method could carry." },
              { text: "The published studies used poor methods.", misreads: "methods",
                why: "The methods may be fine for what they can show; the overreach is in the reading." },
              { text: "Individual studies should not be published.", misreads: "absent",
                why: "A recommendation nowhere in the sentence." },
              { text: "The record was deliberately misleading.", misreads: "overread",
                why: "Nothing in the sentence attributes intent, and the whole article argues against doing so." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the department. Read it.",
        text: NOTICE2,
        items: [
          { para: 0, q: "When must training be completed?",
            options: [
              { text: "Before you first book, not before you first use the machine.", correct: true,
                why: "Line 1 draws exactly that distinction, which is the kind a card exists to settle." },
              { text: "Before you first use the machine.", misreads: "overread", why: "Line 1 rules this out in its second half." },
              { text: "Within two years of your first booking.", misreads: "years", why: "Two years is how long training lasts, in line 2." }
            ] },
          { para: 0, q: "Your training expired last month. Can you book?",
            options: [
              { text: "Yes, if a trained member of your group is present.", correct: true,
                why: "Line 3 gives the one condition under which a lapsed user may still book." },
              { text: "No, not until you retrain.", misreads: "overread", why: "Line 3 offers a way round it." },
              { text: "Yes, with no conditions.", misreads: "overread", why: "The condition is the whole of line 3." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "Calibration records are published online.", answer: "F", line: 4,
            why: "Line 4 says they are held by the technician and released on request, which is not publication." },
          { stem: "Retraining takes a full day.", answer: "NI", line: null,
            why: "The card says training is needed and how long it lasts. How long it takes is never mentioned." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "r1", label: "The single striking result",

            detail: "Hadil reads one study with a surprising finding and treats it as established because it was peer reviewed." },

          { id: "r2", label: "The blame",

            detail: "Wael concludes that researchers must be careless or dishonest, since so many findings do not hold up." },

          { id: "r3", label: "The missing question",

            detail: "Ruba has a well-written paper in front of her and no idea whether anyone has ever tried to repeat it." }

        ],

        takeaways: [

          { text: "<b>What the projects found</b> \u2014 fewer than half the effects reappeared.", caseId: "r1",

            why: "Peer review checks whether a study was reported plausibly. Whether the result is real is a different question, and only repetition answers it." },

          { text: "<b>Why that persists</b> \u2014 nothing in the system pays anyone to check.", caseId: "r2",

            why: "A procedural diagnosis, not a moral one. Journals want novelty and careers reward it; a replication is expensive, unglamorous and nobody\u0027s job." },

          { text: "<b>What to ask of a single study</b> \u2014 has anybody else tried this, and what happened?", caseId: "r3",

            why: "One question that puts a paper in its context. A finding nobody has retested is not wrong; it is simply not yet known to be right." }

        ],
        prompt: "Two articles, one chart, one habit \u2014 in three parts. Drag each part onto the reader it would change.",
        text: { blocks: [{ lines: [
          "<b>What the projects found</b> — fewer than half the effects reappeared.",
          "<b>Why that persists</b> — nothing in the system pays anyone to check.",
          "<b>What to ask of a single study</b> — has anybody else tried this, and what happened?"
        ],
        closer: { kind: "life",
          body: "<p>Find an infographic online. Are its figures printed, or must you judge by size alone? If the latter, try reading two values off it and then check them.</p>" } }] } }
    ]
  };
})();
