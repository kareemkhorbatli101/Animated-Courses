/* Unit 7 · Markets and Choices — LESSON 5 · READING
   Reading strategy: reading the key to a pie chart. Visual: pie with key. */
(function () {
  var PASSAGE = {
    masthead: "WHEN THE MEASURE BECOMES THE TARGET", every: 1,
    blocks: [
      { h: "What an incentive is", lines: [
        "An <b>incentive</b><sup>1</sup> is simply a reason to act, and economics is largely the study of what happens when a great many people respond to one at the same time.",
        "The complication is that people respond to the incentive as they understand it, not as it was intended."
      ] },
      { h: "How a good measure goes wrong", lines: [
        "A hospital assessed on waiting times will reduce waiting times, and if the easiest route to that result is to delay entering patients into the system, some hospitals will discover that route.",
        "Nobody need be dishonest for this to happen; the measure simply becomes the target, and the thing it was supposed to represent quietly detaches from it."
      ] },
      { h: "What a good scheme specifies", lines: [
        "This is why a well designed scheme specifies not only what will be rewarded but how the reward will be verified, and why schemes designed in a hurry so often produce results that are technically correct and substantively absurd."
      ] }
    ],
    notes: ["incentive: a reason to act that is created by the rules themselves, rather than by anyone's intention"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "BURSAR'S OFFICE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Bursar office. Opening hours ten to four, closed one to two.",
      "Bring photo identification and your student number.",
      "Payment plans must be arranged before the first instalment is due."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "bursar", def: "the officer who deals with fees and payments", ar: "أمين الصندوق" },
      { term: "instalment", def: "one of several payments spread over time", ar: "قسط" },
    ],
    source: "Student Finance"
  };

  /* The second academic passage: the first is about measures becoming
     targets, this one about who a rule falls on. */
  var PASSAGE2 = {
    masthead: "WHO A FLAT CHARGE FALLS ON", every: 1,
    blocks: [
      { h: "The same sum, two meanings", lines: [
        "A charge of five pounds is identical for every driver who pays it, and it is not remotely the same thing for all of them.",
        "For a household with little spare income it functions as a prohibition; for one with a great deal it functions as a parking fee."
      ] },
      { h: "Where the reduction comes from", lines: [
        "It follows that the fall in traffic a scheme reports is drawn almost entirely from the first group, since the second has not materially changed its behaviour at all.",
        "The policy therefore achieves its stated objective by means it does not usually state, and the benefit — cleaner, quieter streets — accrues disproportionately to those who continue to drive."
      ] },
      { h: "A remedy that keeps the incentive", lines: [
        "The design problem is separable from the instrument, and the standard remedy is to return the revenue as an equal payment to every resident.",
        "The charge is unaltered, so the reason to drive less is unaltered; the payment reaches those who gave up driving as well as those who did not, which reverses the distribution without weakening the incentive."
      ] }
    ],
    notes: ["regressive: falling more heavily, as a share of income, on those who have less of it"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "STUDENT FINANCE · PAYMENT PLANS", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "A plan must be arranged before the first instalment falls due.",
      "Plans are recorded against your student number, not your name.",
      "Late fees are reversed only on written evidence.",
      "The office does not take payments after half past three."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "falls due", def: "becomes the date by which it must be paid", ar: "يحلّ موعده" },
      { term: "reversed", def: "cancelled after it was applied", ar: "يُلغى" },
    ],
    source: "Student Finance"
  };

  window.PAGE = {
    id: "u07-l5", unit: "u07", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a key before you read a chart",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read", "claim"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "detach", ar: "\u064a\u0646\u0641\u0635\u0644 / \u064a\u0641\u0635\u0644",
            meaning: "to come away from something it was joined to",
            with: ["detach from", "become detached", "a detached measure"],
            why: "In this article a measure detaches from the thing it was meant to track \u2014 still being collected, no longer about anything." },
          { term: "verify", ar: "\u064a\u062a\u062d\u0642\u0651\u0642 \u0645\u0646",
            meaning: "to check that a claim is actually true",
            with: ["verify independently", "difficult to verify", "verify the figure"],
            why: "The hinge of the argument: a rule that cannot be verified cheaply will be met in letter rather than in substance." },
          { term: "substantively", ar: "\u062c\u0648\u0647\u0631\u064a\u064b\u0627",
            meaning: "in terms of what really matters, as against the letter",
            with: ["substantively different", "comply substantively", "substantively the same"],
            why: "The heavy lifting in the final sentence. Complying with the letter and complying substantively are the two halves of this unit." }
        ],
        prompt: "Three words before you begin. Say each meaning before you turn the card \u2014 the last is doing the heavy lifting in the final sentence.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>detach</span> (v) to come away from something it was joined to",
          "<span class='gloss'>verify</span> (v) to check that a claim is actually true",
          "<span class='gloss'>substantively</span> (adv) in terms of what really matters, as against the letter"
        ] }] },
        after: "<p>The last one is doing the heavy lifting in the final sentence.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read", "claim"],
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader", body: "<p>Read with a purpose. The title is already an argument — decide what you expect the article to prove.</p>" },
        options: [
          { text: "Rewarding a measure changes behaviour towards the measure, not the thing.", correct: true,
            why: "The title states it and the headings move from definition, to mechanism, to remedy." },
          { text: "Hospitals are dishonest about waiting times.", why: "The article says nobody need be dishonest." },
          { text: "Measurement should be abandoned.", why: "The last heading is about designing it better." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        concepts: ["read", "measurement", "evidence"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the sentence you would quote.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "When a measure is rewarded it becomes a target and detaches from what it represented.", correct: true,
                why: "That is the second section's claim, and the first and third exist to set it up and answer it." },
              { text: "People respond to incentives dishonestly.", why: "“Nobody need be dishonest for this to happen.”" },
              { text: "Waiting times are the wrong thing to measure.", why: "Waiting times are the example, not the argument." }
            ] },
          { para: 2, q: "Why does the author say nobody need be dishonest?",
            options: [
              { text: "The drift happens through ordinary responses to the rules as written.", correct: true,
                why: "The sentence is there to block the easy reading that this is a story about bad actors." },
              { text: "Because hospitals are closely supervised.", why: "Supervision is not mentioned." },
              { text: "Because the measure is usually accurate.", why: "Accuracy is not the problem; relevance is." }
            ] },
          { para: 3, q: "What does a well designed scheme specify, according to the article?",
            options: [
              { text: "Both what is rewarded and how the result will be verified.", correct: true,
                why: "Stated as a pair, and <i>not only … but</i> marks the second half as the one usually missing." },
              { text: "Only what will be rewarded.", why: "That is the hurried scheme." },
              { text: "Who will be punished for failure.", why: "Punishment is never discussed." }
            ] },
          { para: 3, q: "<i>Technically correct and substantively absurd</i> describes a result that:",
            options: [
              { text: "satisfies the written rule while defeating its purpose.", correct: true,
                why: "The two adverbs are deliberately opposed — the letter against what actually matters." },
              { text: "is simply miscalculated.", why: "<i>Technically correct</i> rules out an arithmetic error." },
              { text: "nobody can measure.", why: "It is measured; that is the trouble." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        concepts: ["read", "time"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the office window.",
        text: NOTICE,
        items: [
          { para: 0, q: "When is the office closed?",
            options: [
              { text: "Between one and two.", correct: true, why: "Stated in the opening-hours line." },
              { text: "All afternoon.", why: "It reopens at two and runs to four." },
              { text: "Before ten only.", why: "That is before it opens, which the card does not call a closure." }
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
          { stem: "People respond to an incentive as it was intended.", answer: "F", line: 2,
            why: "Line 2 says precisely the opposite: as they understand it, not as it was intended." },
          { stem: "A scheme should say how a reward will be checked.", answer: "T", line: 5,
            why: "Line 5 names verification as what a well designed scheme specifies." },
          { stem: "Most hospitals delay entering patients into the system.", answer: "NI", line: null,
            why: "The article says <i>some</i> will discover the route; it gives no proportion." }
        ] },

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read", "inference", "claim"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>Economics writing hides its claims inside conditionals and inside the word <i>therefore</i>. The sentence that matters is usually the one doing the inferring, not the one reporting the figures.</p>" },
        items: [
          { prompt: "Which sentence draws a conclusion rather than reporting a fact?",
            text: "Traffic entering the zone fell by nineteen per cent in the first year. Fuel prices were flat across the same period. No comparable city recorded a fall of that size. The charge therefore accounts for most of the reduction.",
            answer: "The charge therefore accounts for most of the reduction.",
            why: "<i>Therefore</i> plus a causal claim. The first three sentences are the evidence it is drawn from." },
          { prompt: "Which sentence states a condition on the claim?",
            text: "Raising the charge reduces traffic further. The relationship is not linear, and above about eight pounds each additional pound buys very little. This holds only where a usable alternative exists. In cities with no rapid transit the charge simply redistributes who drives.",
            answer: "This holds only where a usable alternative exists.",
            why: "<i>Only where</i> is a condition. The sentence after it illustrates what happens when the condition fails, which is not the same as stating it." },
          { prompt: "Which sentence concedes a cost of the author's own proposal?",
            text: "Returning the revenue as an equal payment reverses who bears the charge. The incentive to drive less is untouched, since the charge itself does not change. Administering a universal payment is not free, and in small schemes it can absorb a tenth of the revenue. On balance the redistribution is still worth making.",
            answer: "Administering a universal payment is not free, and in small schemes it can absorb a tenth of the revenue.",
            why: "The author is arguing for the payment, so this is the sentence that costs them something. The last sentence weighs the concession rather than making it." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        carry: "4a",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix, in the article's register.",
        items: [
          { text: "The problem is i___ rather than personal.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i> — which is what <i>nobody need be dishonest</i> means." },
          { text: "The m___ case is the one the scheme actually changes.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement"],
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart. Read the key before you read a single section.",
        note: { kind: "reader",
                body: "<p>Match each section to the <b>key</b> first. Then read the labels. Only then look at the shape — a shape without labels tells you nothing at all, and a pie is the easiest chart in the world to misread at a glance.</p>" },
        chart: {
          kind: "pie-key", title: "Where a university's income comes from",
          sub: "One institution, one year",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "Tuition fees", v: 41 },
            { name: "Research grants", v: 24 },
            { name: "Government block grant", v: 17 },
            { name: "Accommodation and catering", v: 9 },
            { name: "Donations and endowment", v: 6 },
            { name: "Other", v: 3 }
          ],
          cols: ["Source", "Share"],
          rows: [["Tuition fees","41%"],["Research grants","24%"],["Government block grant","17%"],
                 ["Accommodation and catering","9%"],["Donations and endowment","6%"],["Other","3%"]]
        },
        items: [
          { q: "If the government block grant were withdrawn entirely, what share would have to be replaced?",
            options: [
              { text: "17%", correct: true,
                why: "Reading one section off the key. The temptation is to add it to research grants, because both sound like public money — but the key names them separately." },
              { text: "41%", why: "That is tuition fees." },
              { text: "24%", why: "That is research grants, which are a different line in the key." }
            ] }
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "inference"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on who pays for the result the first one described. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>The first article asked whether a scheme produces the number it promised. This one grants that it does, and asks a different question about the same scheme.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "A flat charge works by changing the behaviour of those least able to pay it, and the revenue can be used to reverse that.", correct: true,
                why: "The three sections are the uneven effect, where the reduction comes from, and the remedy that leaves the incentive intact." },
              { text: "Congestion charges do not reduce traffic.", why: "The article accepts the reduction throughout; its question is who produced it." },
              { text: "Charges should be set according to income.", why: "The remedy it proposes keeps the charge identical and changes what happens to the money." }
            ] },
          { para: 2, q: "Why does the article say the reduction comes from one group?",
            options: [
              { text: "Because the wealthier group has not materially changed its behaviour.", correct: true,
                why: "<i>Since the second has not materially changed its behaviour at all</i> — the inference follows directly from the first section." },
              { text: "Because the wealthier group drives less to begin with.", why: "No claim about baseline driving is made." },
              { text: "Because only one group pays the charge.", why: "Both pay it; that is what makes the effect uneven rather than selective." }
            ] },
          { para: 2, q: "Who does the article say the benefit accrues to?",
            options: [
              { text: "Disproportionately to those who continue to drive.", correct: true,
                why: "The cleaner, quieter streets are enjoyed most by the people whose behaviour did not change." },
              { text: "Equally to all residents.", why: "<i>Disproportionately</i> is the word the sentence turns on." },
              { text: "To the people who gave up driving.", why: "They bear the cost of the change and share least in the result." }
            ] },
          { para: 3, q: "Why does the remedy not weaken the incentive?",
            options: [
              { text: "The charge itself is unchanged, so the reason to drive less is unchanged.", correct: true,
                why: "The payment is separate from the charge, and it goes to everyone whether they drive or not." },
              { text: "The payment is given only to those who stop driving.", why: "That would weaken it: the payment is universal, which is what makes it neutral." },
              { text: "The revenue is too small to matter.", why: "The article treats the revenue as substantial enough to redistribute." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        carry: "3a",
        concepts: ["read"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Watch what happens to <i>nobody need be dishonest</i> and to <i>disproportionately</i>. Both are doing careful work, and both are easy to flatten into an accusation.</p>" },
        items: [
          { source: "Nobody need be dishonest for this to happen; the measure simply becomes the target, and the thing it was supposed to represent quietly detaches from it.",
            options: [
              { text: "No deception is required: people start aiming at the number, and the number drifts away from what it stood for.", correct: true,
                why: "Keeps the explicit refusal to allege dishonesty, which is the sentence's main point." },
              { text: "People cheat in order to hit the target.",
                why: "The sentence exists to rule this reading out, and it is the reading most readers arrive with." },
              { text: "The measure was badly chosen from the start.",
                why: "It may have been a good measure; that is what makes the mechanism worth describing." },
              { text: "Targets should not be used at all.",
                why: "A recommendation. The sentence is describing a process." }
            ] },
          { source: "The benefit accrues disproportionately to those who continue to drive.",
            options: [
              { text: "The people still driving get more of the gain than their share.", correct: true,
                why: "Keeps <i>disproportionately</i>, which says uneven rather than exclusive." },
              { text: "Only drivers benefit from the scheme.",
                why: "<i>Disproportionately</i> is not <i>only</i>; everyone breathes the cleaner air." },
              { text: "Drivers pay more than they gain.",
                why: "The sentence is about who gains, and it says the opposite about this group." },
              { text: "The benefit is shared evenly.",
                why: "The word in the middle of the sentence denies precisely this." }
            ] },
          { source: "A charge of five pounds is identical for every driver who pays it, and it is not remotely the same thing for all of them.",
            options: [
              { text: "The sum is the same for everyone and what it means is not.", correct: true,
                why: "Keeps the apparent contradiction, which is the whole figure of the sentence." },
              { text: "The charge is unfair because it is the same for everyone.",
                why: "<i>Unfair</i> is a judgement the sentence has not yet made; it is making an observation first." },
              { text: "Different drivers pay different amounts.",
                why: "They pay the same amount. That is the first half of the sentence." },
              { text: "Five pounds means nothing to most drivers.",
                why: "The sentence distinguishes two groups rather than generalising about most." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read", "evidence"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the same office. Read it.",
        text: NOTICE2,
        items: [
          { para: 0, q: "What is a payment plan recorded against?",
            options: [
              { text: "Your student number.", correct: true, why: "Line 2, and it says explicitly that it is not your name." },
              { text: "Your name.", why: "Line 2 rules this out, which is why the error in Lesson 4 happened." },
              { text: "Your email address.", why: "Not mentioned." }
            ] },
          { para: 0, q: "You arrive at twenty to four to pay. What happens?",
            options: [
              { text: "You are too late; payments stop at half past three.", correct: true,
                why: "Line 4. The office is open until four, which is the trap." },
              { text: "You can pay — the office is open until four.", why: "Open and taking payments are two different things here." },
              { text: "You must arrange a plan instead.", why: "The card does not offer that as an alternative." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "A late fee can be reversed on the basis of a telephone call.", answer: "F", line: 3,
            why: "Line 3 says written evidence, and <i>only</i> closes off every other route." },
          { stem: "A plan arranged on the day the instalment falls due is accepted.", answer: "F", line: 1,
            why: "Line 1 says <i>before</i>. On the day is not before it, which is the kind of boundary this sort of card is written to settle." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read", "comparison", "measurement"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "t1", label: "The waiting-time target",

            detail: "A hospital is measured on how many patients are seen within four hours. Nobody falsifies anything, and the four-hour figure improves every year." },

          { id: "t2", label: "The flat charge",

            detail: "A five-pound charge applies to every driver entering the centre. The council reports that it has been applied equally." },

          { id: "t3", label: "The rule nobody explains",

            detail: "Samir is told a form must be countersigned and cannot find out why, so he cannot tell which parts of it matter." }

        ],

        takeaways: [

          { text: "<b>What goes wrong</b> \u2014 the measure becomes the target, and nobody has to lie.", caseId: "t1",

            why: "Everything reported is true. Attention moves to the patients near the four-hour line, and the ones far from it get less of it. The number improves and the thing it stood for does not." },

          { text: "<b>Who pays</b> \u2014 the same sum is a prohibition for one household and a fee for another.", caseId: "t2",

            why: "Applied equally is not experienced equally. A flat charge is a different instrument at different incomes, and reporting the sum hides that entirely." },

          { text: "<b>What to ask</b> \u2014 who set this rule, and what were they trying to achieve?", caseId: "t3",

            why: "The question that turns a rule back into a purpose. Knowing what it was for tells you which parts are load-bearing and which are habit." }

        ],
        prompt: "Two articles, one chart, one habit \u2014 in three parts. Drag each part onto the person it would change.",
        text: { blocks: [{ lines: [
          "<b>What goes wrong</b> — the measure becomes the target, and nobody has to lie.",
          "<b>Who pays</b> — the same sum is a prohibition for one household and a fee for another.",
          "<b>What to ask</b> — who set this rule, and what were they trying to achieve?"
        ],
        closer: { kind: "life",
          body: "<p>Find a pie chart in a news story. Can you tell which section is which without the key? If not, the chart is doing less work than it appears to.</p>" } }] } }
    ]
  };
})();
