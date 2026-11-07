/* Unit 5 · Following Up and Payment — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u05-l5", unit: "u05", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read an ageing report and a scatter plot, and resist the conclusion they invite",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the ageing report", letter: "A",
        concepts: ["read", "money"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the report. Say what each means before you turn it over.",
        cards: [
          { term: "days sales outstanding", ar: "متوسّط فترة التحصيل",
            meaning: "the average number of days it takes to get paid",
            with: ["DSO of 46 days", "DSO is rising"],
            why: "Usually DSO. One figure for the whole book, which is why it hides as much as it shows." },
          { term: "ageing bucket", ar: "فئة التقادم",
            meaning: "a band grouping invoices by how late they are",
            with: ["the 60-day bucket", "move into the next bucket"],
            why: "Current, 30, 60, 90, over 90. The point is the direction of travel between them, not the figures in any one." },
          { term: "bad debt", ar: "دين معدوم",
            meaning: "money that will not be collected",
            with: ["a bad debt provision", "bad debt written off"],
            why: "It becomes a bad debt when you decide it is one. Until then it is simply very old." },
          { term: "provision", ar: "مخصّص",
            meaning: "money set aside against a loss you expect but have not had yet",
            with: ["make a provision", "a provision of 5%"],
            why: "An accounting entry, not a payment. It makes the accounts honest about a risk rather than removing it." },
          { term: "concentration", ar: "تركّز",
            meaning: "how much of what you are owed sits with a few customers",
            with: ["customer concentration", "concentration risk"],
            why: "A clean ageing report with eighty per cent of the balance on one client is not a clean report." },
          { term: "cash conversion", ar: "دورة تحويل النقد",
            meaning: "how long money is tied up between paying for materials and being paid for goods",
            with: ["the cash conversion cycle", "shorten the cycle"],
            why: "This is what a late invoice really costs: not the money, which arrives, but the weeks it was not available." }
        ],
        explain: { terms: [
          { en: "days sales outstanding", gloss: "average days taken to get paid", ar: "متوسّط فترة التحصيل" },
          { en: "provision", gloss: "money set aside against an expected loss", ar: "مخصّص" },
          { en: "concentration risk", gloss: "too much owed by too few customers", ar: "مخاطر التركّز" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the ageing report", letter: "B",
        concepts: ["read", "invoice"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "Lina's quarterly note on receivables. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "RECEIVABLES — QUARTERLY NOTE",
          blocks: [
            { h: "Where we are", lines: [
              "Total receivables stand at 11.4 million, against 9.8 million at the end of last quarter.",
              "Days sales outstanding has risen from 41 to 46, which is the fifth consecutive quarter it has risen." ] },
            { h: "What is behind the figure", lines: [
              "Almost all of the increase sits with two clients, both of whom have grown their order volume this year.",
              "Neither has moved past sixty days, and both have paid in full every quarter since we began supplying them.",
              "Nothing has moved into the over-ninety bucket, and we hold no provision against any current balance." ] },
            { h: "What I would and would not conclude", lines: [
              "A rising DSO with no ageing and no bad debt is usually a sign of growth, not of weakness, and that is what I think this is.",
              "What does concern me is concentration: those two clients are now sixty-one per cent of the book, against forty-four a year ago.",
              "I am not recommending we do anything about it this quarter. I am recommending we watch it, and that we stop treating DSO as the headline figure when it is the concentration that would actually hurt us." ] }
          ] },
        items: [
          { para: 1, q: "What has happened to DSO?",
            options: [
              { text: "It has risen for five quarters running, from 41 to 46 in this one.", correct: true,
                why: "Both facts are in the same sentence, and the second is what makes the first worth reporting." },
              { text: "It has fallen.", why: "The opposite." },
              { text: "It is unchanged.", why: "It has moved by five days." } ] },
          { para: 2, q: "Where does the increase in receivables come from?",
            options: [
              { text: "Two clients who are ordering more.", correct: true,
                why: "<i>Almost all of the increase sits with two clients, both of whom have grown their order volume.</i>" },
              { text: "Many clients paying later.", why: "The note does not say this, and the next line argues against it." },
              { text: "A bad debt.", why: "Nothing has moved past ninety days and no provision is held." } ] },
          { para: 2, q: "What is the payment record of those two clients?",
            options: [
              { text: "They have paid in full every quarter and neither is past sixty days.", correct: true,
                why: "Two separate reassurances, both specific." },
              { text: "They have never paid on time.", why: "The note says the opposite." },
              { text: "The note does not say.", why: "It says both things explicitly." } ] },
          { para: 3, q: "What does Lina conclude about the rising DSO?",
            options: [
              { text: "It is probably a sign of growth rather than of weakness.", correct: true,
                why: "She gives her reasoning first — no ageing, no bad debt — and then her conclusion, marked as a view." },
              { text: "It is a serious problem.", why: "She explicitly says it is not what concerns her." },
              { text: "It should be ignored entirely.", why: "She recommends watching it; that is not ignoring it." } ] },
          { para: 3, q: "What does concern her?",
            options: [
              { text: "That two clients are now 61% of the receivables book.", correct: true,
                why: "And she gives last year's figure beside it, which is what makes 61 mean something." },
              { text: "The over-ninety bucket.", why: "Nothing is in it." },
              { text: "The size of the provision.", why: "There is no provision." } ] },
          { para: 3, q: "What does she recommend?",
            options: [
              { text: "No action this quarter, but watch it, and change which figure is the headline.", correct: true,
                why: "Three recommendations, the last of which is about how the company reads its own report." },
              { text: "Stop supplying the two clients.", why: "Nothing like that is proposed." },
              { text: "Make a provision.", why: "She says no provision is held and does not ask for one." } ] }
        ],
        explain: { terms: [
          { en: "consecutive", gloss: "one after another with no break", ar: "متتالية" },
          { en: "the book", gloss: "the total of what is owed to you", ar: "إجمالي الذمم" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Resist the easy conclusion", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that stops the obvious conclusion being drawn.",
        note: { kind: "reader", title: "The sentence that says 'but'",
                body: "<p>In a well-written report, the sentence that prevents a misreading is usually short and sits just after the figure that invites it. It is also the one most likely to be cut for length.</p>" },
        items: [
          { prompt: "Which sentence stops you concluding that clients are paying worse?",
            text: "Days sales outstanding has risen from 41 to 46. Receivables stand at 11.4 million. Almost all of the increase sits with two clients who have grown their order volume this year. The quarter closed on the thirtieth.",
            answer: "Almost all of the increase sits with two clients who have grown their order volume this year.",
            why: "Without it, a rising DSO reads as deteriorating payment. With it, it reads as more business." },
          { prompt: "Which sentence stops you concluding the debt is at risk?",
            text: "Total receivables are up 1.6 million. Two clients account for most of it. Nothing has moved into the over-ninety bucket and we hold no provision against any current balance. DSO is 46 days.",
            answer: "Nothing has moved into the over-ninety bucket and we hold no provision against any current balance.",
            why: "Age and provision are the two tests of whether a balance is in trouble. This sentence reports both as clear." },
          { prompt: "Which sentence stops you concluding there is nothing to worry about?",
            text: "No invoice is past sixty days. Every client has paid in full each quarter. Those two clients are now sixty-one per cent of the book, against forty-four a year ago. The report is attached.",
            answer: "Those two clients are now sixty-one per cent of the book, against forty-four a year ago.",
            why: "Everything else is reassuring and this one sentence is not. Concentration is invisible to an ageing report." },
          { prompt: "Which sentence stops you acting too quickly?",
            text: "Concentration has risen sharply. This is the figure I would watch. I am not recommending we do anything about it this quarter. We should review it again in March.",
            answer: "I am not recommending we do anything about it this quarter.",
            why: "It separates noticing a risk from acting on one, which is a distinction most reports blur and most readers need." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Resist the easy conclusion", letter: "B",
        concepts: ["comparison", "invoice"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Every invoice from last year, plotted by size and by how long it took to be paid.",
        note: { kind: "reader", title: "What a scatter plot can and cannot say",
                body: "<p>A scatter shows whether two things move together. It does not show why, and it does not show which one caused the other. Both of those come from somewhere else, or from nowhere.</p>" },
        chart: {
          kind: "scatter",
          title: "Days to payment against invoice size",
          sub: "Every invoice issued last year. Each point is one invoice.",
          xlabel: "Invoice value (thousands)", ylabel: "Days to payment",
          xmax: 2400, ymax: 100,
          points: [
            { x: 120, y: 28, name: "a" }, { x: 180, y: 31, name: "b" },
            { x: 240, y: 26, name: "c" }, { x: 310, y: 35, name: "d" },
            { x: 420, y: 33, name: "e" }, { x: 560, y: 41, name: "f" },
            { x: 680, y: 38, name: "g" }, { x: 740, y: 47, name: "h" },
            { x: 900, y: 44, name: "i" }, { x: 1100, y: 52, name: "j" },
            { x: 1300, y: 49, name: "k" }, { x: 1600, y: 61, name: "l" },
            { x: 1900, y: 58, name: "m" }, { x: 2200, y: 74, name: "n" },
            { x: 480, y: 82, name: "o" }
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "What is the general pattern?",
            options: [
              { text: "Larger invoices tend to take longer to pay.", correct: true,
                why: "The points rise from left to right. <i>Tend to</i> is the honest strength of claim for a scatter." },
              { text: "Larger invoices are paid faster.", why: "The slope runs the other way." },
              { text: "There is no pattern.", why: "There is a clear one, with one point sitting off it." } ] },
          { q: "One point sits well away from the rest. What is notable about it?",
            options: [
              { text: "A medium invoice that took far longer than its size predicts.", correct: true,
                why: "About 480,000 and 82 days, where the trend suggests the high thirties. An outlier is a question, not an error." },
              { text: "It is the largest invoice.", why: "The largest is at 2,200,000 and 74 days, which is roughly where the trend puts it." },
              { text: "It was paid fastest.", why: "It was paid slowest of all." } ] },
          { q: "Does the chart show that invoice size causes slower payment?",
            options: [
              { text: "No — it shows they move together, not why.", correct: true,
                why: "Large invoices may go to bigger clients with slower approval chains. The chart cannot tell those apart." },
              { text: "Yes, clearly.", why: "A scatter can never show causation on its own." },
              { text: "Yes, because the line is steep.", why: "Steepness is about strength, not about cause." } ] },
          { q: "What would explain the trend without size causing anything?",
            options: [
              { text: "Larger invoices may need more approvals at the client's end.", correct: true,
                why: "A plausible third factor that would produce exactly this picture. The chart is consistent with it and cannot confirm it." },
              { text: "Clients prefer paying small invoices.", why: "Possible, and equally unsupported by the chart." },
              { text: "Nothing could.", why: "Several things could, which is exactly the problem." } ] },
          { q: "The ageing note says DSO rose because two large clients grew. Is that consistent with this chart?",
            options: [
              { text: "Yes — more large invoices would raise the average even with no behaviour change.", correct: true,
                why: "The two documents support each other, and together they say more than either alone." },
              { text: "No — the chart contradicts it.", why: "It does the opposite." },
              { text: "The chart cannot be compared with the note.", why: "It can, and doing so is the point of reading both." } ] },
          { q: "What should be done about the outlier?",
            options: [
              { text: "Find out what happened to that one invoice.", correct: true,
                why: "A single point off the trend is usually one story — a query, a lost invoice, a change of contact — and it is cheap to find." },
              { text: "Remove it from the chart.", why: "Removing the thing you cannot explain is how a chart stops being evidence." },
              { text: "Nothing — one point does not matter.", why: "It may be the only point on the chart with a lesson in it." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the note actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the note in 1B.",
        carry: "1b",
        items: [
          { stem: "DSO has risen for five quarters in a row.", answer: "T", line: 2,
            why: "<i>The fifth consecutive quarter it has risen.</i>" },
          { stem: "Some invoices are more than ninety days old.", answer: "F", line: 5,
            why: "<i>Nothing has moved into the over-ninety bucket.</i>" },
          { stem: "The two large clients are in financial difficulty.", answer: "NI", line: null,
            why: "The note says they have grown and paid in full. Their financial health is never discussed." },
          { stem: "Lina thinks the rising DSO is a sign of weakness.", answer: "F", line: 7,
            why: "She says it is <i>usually a sign of growth, not of weakness, and that is what I think this is.</i>" },
          { stem: "Concentration has risen by seventeen percentage points in a year.", answer: "T", line: 8,
            why: "Sixty-one against forty-four. The note gives both figures and leaves the subtraction to you." },
          { stem: "She recommends reducing the two clients' credit limits.", answer: "NI", line: null,
            why: "Credit limits are never mentioned. She recommends watching, and changing which figure is treated as the headline." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the note actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "Average days to be paid is called days sales ___ .", answer: "outstanding", given: [0],
            why: "DSO. One figure for the whole book." },
          { text: "Invoices are grouped into ageing ___ : 30, 60, 90.", answer: "buckets", given: [0],
            why: "The direction of travel between them matters more than any one figure." },
          { text: "Money set aside against an expected loss is a ___ .", answer: "provision", given: [0],
            why: "An accounting entry, not a payment." },
          { text: "Too much owed by too few clients is ___ risk.", answer: "concentration", given: [0],
            why: "Invisible to an ageing report, which is why Lina reports it separately." },
          { text: "Money that will not be collected is a ___ debt.", answer: "bad", given: [0],
            why: "It becomes one when you decide it is." },
          { text: "A point far off the trend on a scatter is an ___ .", answer: "outlier", given: [0],
            why: "A question, not an error — and usually one story." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the note actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four readers, four conclusions. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Adnan", detail: "Sees DSO up from 41 to 46 and concludes clients are paying worse." },
          { id: "c2", label: "Rasha", detail: "Sees a clean ageing report with nothing past sixty days and concludes there is no risk." },
          { id: "c3", label: "Khalil", detail: "Sees that big invoices take longer and concludes that splitting invoices will get him paid faster." },
          { id: "c4", label: "Lama", detail: "Sees one invoice far off the trend and deletes it so the chart looks cleaner." }
        ],
        takeaways: [
          { text: "A rising average can mean more business, not worse behaviour.", caseId: "c1",
            why: "Almost all of the increase is two clients ordering more. Nothing in the payment behaviour changed." },
          { text: "An ageing report cannot see concentration.", caseId: "c2",
            why: "Sixty-one per cent of the book on two names is the actual exposure, and every figure Rasha is looking at is reassuring." },
          { text: "Moving together is not causing.", caseId: "c3",
            why: "Big invoices may simply go to clients with longer approval chains. Splitting them would then change nothing except his paperwork." },
          { text: "The point you cannot explain is the one worth explaining.", caseId: "c4",
            why: "An outlier is usually one story — a query, a lost invoice — and finding it is cheap. Deleting it is how a chart stops being evidence." }
        ],
        closer: "<p>Next: offering a suggestion in a team discussion, where being right matters less than being easy to disagree with.</p>" }

    ]
  };
})();
