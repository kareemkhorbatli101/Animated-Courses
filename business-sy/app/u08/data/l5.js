/* Unit 8 · How the Business Has Changed — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u08-l5", unit: "u08", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a five-year review and a before-and-after chart, and tell a shift from a decline",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the five-year review", letter: "A",
        concepts: ["read", "time"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the review. Say what each means before you turn it over.",
        cards: [
          { term: "baseline", ar: "خط الأساس",
            meaning: "the figure everything else is measured against",
            with: ["against the 2019 baseline"],
            why: "Whoever chooses the baseline decides what the story looks like. A good review says which year it is using and why." },
          { term: "like for like", ar: "مقارنة متكافئة",
            meaning: "comparing the same thing with the same thing",
            with: ["on a like-for-like basis"],
            why: "From Unit 3. Comparing a year with two shifts against a year with one is not like for like unless you say so." },
          { term: "structural", ar: "هيكلي",
            meaning: "belonging to how the business is built, not to this year",
            with: ["a structural change", "structurally lower"],
            why: "A structural change does not reverse when conditions improve. Calling something structural is a claim, and it should be argued for." },
          { term: "headwind", ar: "رياح معاكسة",
            meaning: "a condition making progress harder",
            with: ["currency headwinds", "despite headwinds"],
            why: "Business English borrows it from flying. Useful once in a document and tiresome twice." },
          { term: "mix", ar: "تركيبة المبيعات",
            meaning: "the proportions of what you sell, or where",
            with: ["a change in mix", "mix effect"],
            why: "Revenue can fall while every price rises, if the mix moves to cheaper products. Mix explains more surprises than price does." },
          { term: "on a comparable basis", ar: "على أساس قابل للمقارنة",
            meaning: "adjusted so two periods can be set side by side",
            with: ["on a comparable basis", "comparable sales"],
            why: "The phrase that tells you an adjustment has been made. Always worth asking what was adjusted." }
        ],
        explain: { terms: [
          { en: "baseline", gloss: "the figure everything is measured against", ar: "خط الأساس" },
          { en: "structural", gloss: "belonging to how the business is built", ar: "هيكلي" },
          { en: "mix", gloss: "the proportions of what you sell", ar: "تركيبة المبيعات" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the five-year review", letter: "B",
        concepts: ["read", "comparison"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The five-year review written for the bank. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "FIVE-YEAR REVIEW — FOR THE BANK",
          blocks: [
            { h: "What the figures show", lines: [
              "Turnover in 2019 was 46.1 million. It fell to 28.4 in 2021 and was 41.2 last year.",
              "Output over the same period fell from 8,100 metres a week to 4,900 and has recovered to 6,400." ] },
            { h: "What is behind them", lines: [
              "Two changes are structural rather than cyclical. The dye plant closed in 2019 and will not reopen, and the second shift ended in 2021 and has not returned.",
              "One is a change of mix: Iraq was about a third of sales in 2019 and is under ten per cent now, with Jordan taking its place. Jordanian orders are larger and carry a better margin, so revenue has recovered faster than output.",
              "The recovery in output has been continuous since 2022, at between four and seven per cent a year." ] },
            { h: "What I would not claim", lines: [
              "We are not back to 2019 and on current trends will not be before 2027.",
              "The 2019 baseline flatters us, because it was the best year in a decade. Against the five-year average the gap is smaller.",
              "I have not adjusted any of these figures for inflation, and over this period that matters a great deal. Everything above is in nominal terms." ] }
          ] },
        items: [
          { para: 1, q: "What happened to turnover between 2019 and last year?",
            options: [
              { text: "It fell by about 38% and then recovered to within 5 million of 2019.", correct: true,
                why: "46.1 to 28.4 to 41.2. The review gives three figures and expects the reader to do the arithmetic." },
              { text: "It rose throughout.", why: "It fell for two years first." },
              { text: "It has recovered fully.", why: "41.2 against 46.1 is not full recovery, and the review says so later." } ] },
          { para: 2, q: "Which two changes are described as structural?",
            options: [
              { text: "The dye plant closing and the second shift ending.", correct: true,
                why: "Both are said not to be coming back, which is what <i>structural</i> claims." },
              { text: "The fall in turnover and the fall in output.", why: "Those are the figures, not the causes." },
              { text: "The Iraq and Jordan change.", why: "That is explicitly called a change of mix." } ] },
          { para: 2, q: "Why has revenue recovered faster than output?",
            options: [
              { text: "The mix moved to larger Jordanian orders with better margins.", correct: true,
                why: "The review gives the mechanism, which is the only way the two different recovery rates make sense." },
              { text: "Prices rose.", why: "Not mentioned as the cause, and the last paragraph warns against reading these figures as real." },
              { text: "Output figures are wrong.", why: "Nothing suggests that." } ] },
          { para: 3, q: "What does the review say about the 2019 baseline?",
            options: [
              { text: "It flatters the company, because 2019 was unusually good.", correct: true,
                why: "A writer undermining their own best comparison is the most trustworthy sentence in the document." },
              { text: "It is the fairest comparison.", why: "The review argues the opposite." },
              { text: "It understates the recovery.", why: "It overstates the decline." } ] },
          { para: 3, q: "What important adjustment has not been made?",
            options: [
              { text: "None of the figures is adjusted for inflation.", correct: true,
                why: "And the review says it matters a great deal over this period, which is a warning not a footnote." },
              { text: "Output has not been adjusted for shifts.", why: "Not mentioned as an adjustment." },
              { text: "Margin has not been included.", why: "Margin is discussed, not adjusted." } ] },
          { para: 3, q: "What does <i>nominal terms</i> mean here?",
            options: [
              { text: "The figures are as recorded, with no allowance for inflation.", correct: true,
                why: "The last sentence defines it by contrast with the adjustment that was not made." },
              { text: "The figures are estimates.", why: "They are actuals." },
              { text: "The figures are in another currency.", why: "Nothing about currency conversion." } ] }
        ],
        explain: { terms: [
          { en: "nominal terms", gloss: "as recorded, without adjusting for inflation", ar: "بالقيمة الاسمية" },
          { en: "to flatter", gloss: "to make something look better than it is", ar: "يُجمِّل الصورة" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Tell a shift from a decline", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that stops a wrong conclusion.",
        note: { kind: "reader", title: "The honest sentence",
                body: "<p>In a document written to persuade, the sentence that argues against the writer's own case is the one that tells you how much to trust the rest.</p>" },
        items: [
          { prompt: "Which sentence stops you reading the recovery as complete?",
            text: "Turnover has recovered to 41.2 million. Output is up for the third year running. Utilisation is at seventy-one per cent. We are not back to 2019 and on current trends will not be before 2027.",
            answer: "We are not back to 2019 and on current trends will not be before 2027.",
            why: "Three encouraging facts and one that places them. It is also the only sentence with a date in the future." },
          { prompt: "Which sentence warns that the comparison is generous?",
            text: "Turnover in 2019 was 46.1 million. It fell to 28.4 in 2021. It was 41.2 last year. The 2019 baseline flatters us, because it was the best year in a decade.",
            answer: "The 2019 baseline flatters us, because it was the best year in a decade.",
            why: "Everything before it is arithmetic. This one is a judgement about the arithmetic, and it costs the writer something." },
          { prompt: "Which sentence explains two figures moving at different speeds?",
            text: "Revenue has recovered to within five million of 2019. Output remains well below it. Jordanian orders are larger and carry a better margin. The second shift has not returned.",
            answer: "Jordanian orders are larger and carry a better margin.",
            why: "Without it, revenue recovering faster than output looks like an error in one of the two figures." },
          { prompt: "Which sentence makes all the others less impressive?",
            text: "Output has risen for three years. Utilisation is at seventy-one per cent. Retention has improved every year. I have not adjusted any of these figures for inflation.",
            answer: "I have not adjusted any of these figures for inflation.",
            why: "It applies to everything above it, which is why it is placed last and why a careless reader misses it." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Tell a shift from a decline", letter: "B",
        concepts: ["comparison", "margin"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Sales by market, 2019 and last year. Read the chart, then answer.",
        note: { kind: "reader", title: "Two pies show shares, not sizes",
                body: "<p>A pair of pie charts compares proportions. Unless the subtitle gives both totals, a slice that has grown as a share may have shrunk in money.</p>" },
        chart: {
          kind: "piePair",
          title: "Sales by market: 2019 and last year",
          sub: "Totals: 46.1 million in 2019, 41.2 million last year",
          categories: ["Domestic", "Jordan", "Lebanon", "Iraq"],
          left:  { label: "2019",      values: { Domestic: 44, Jordan: 17, Lebanon: 7, Iraq: 32 } },
          right: { label: "Last year", values: { Domestic: 54, Jordan: 31, Lebanon: 9, Iraq: 6 } },
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "Which market has fallen most as a share?",
            options: [
              { text: "Iraq, from 32% to 6%.", correct: true, why: "A fall of twenty-six points, far larger than any other movement on the chart." },
              { text: "Domestic.", why: "Domestic has risen, from 44 to 54." },
              { text: "Lebanon.", why: "Lebanon has risen slightly, from 7 to 9." } ] },
          { q: "Jordan has risen from 17% to 31%. By how much has it risen in money?",
            options: [
              { text: "From about 7.8 million to about 12.8 million.", correct: true,
                why: "17% of 46.1 and 31% of 41.2. The subtitle gives both totals, which is what makes this answerable." },
              { text: "It has not risen in money, only as a share.", why: "It has risen on both measures — which is not true of every slice here." },
              { text: "The chart cannot say.", why: "It can, because the totals are given." } ] },
          { q: "Domestic has risen from 44% to 54%. What has happened in money?",
            options: [
              { text: "It has risen only slightly — about 20.3 to 22.2 million.", correct: true,
                why: "A ten-point rise in share on a smaller total. This is the question the whole chart exists for." },
              { text: "It has risen by ten per cent.", why: "Ten percentage points of share is not a ten per cent rise in money." },
              { text: "It has fallen.", why: "It has risen, but far less than the share suggests." } ] },
          { q: "What has happened to Iraq in money?",
            options: [
              { text: "From about 14.8 million to about 2.5 million.", correct: true,
                why: "32% of 46.1 against 6% of 41.2. Most of the fall in total turnover is this one slice." },
              { text: "It has stayed roughly flat.", why: "It has fallen by more than twelve million." },
              { text: "The chart does not show money.", why: "It shows shares, and the subtitle supplies the totals." } ] },
          { q: "The review calls this a change of mix. What supports that?",
            options: [
              { text: "One market collapsed and another took its place, with the total falling less.", correct: true,
                why: "A mix change is a movement between categories rather than a uniform fall, and that is what the pair shows." },
              { text: "Every market fell.", why: "Three of the four rose as a share and two rose in money." },
              { text: "The total is unchanged.", why: "It fell from 46.1 to 41.2." } ] },
          { q: "What can this pair of charts not tell you?",
            options: [
              { text: "Whether margins differ between the markets.", correct: true,
                why: "The review says Jordanian orders carry a better margin, and nothing on the chart shows it." },
              { text: "Which market is largest.", why: "Domestic, in both years." },
              { text: "How the shares changed.", why: "That is exactly what it shows." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the review actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the review in 1B.",
        carry: "1b",
        items: [
          { stem: "Turnover is higher now than in 2019.", answer: "F", line: 1,
            why: "41.2 against 46.1." },
          { stem: "The dye plant may reopen.", answer: "F", line: 3,
            why: "<i>Closed in 2019 and will not reopen.</i>" },
          { stem: "Jordanian orders carry a better margin than Iraqi ones did.", answer: "T", line: 4,
            why: "Stated, and it is the reason revenue recovered faster than output." },
          { stem: "The company expects to reach 2019 levels in 2025.", answer: "F", line: 6,
            why: "<i>Will not be before 2027</i> on current trends." },
          { stem: "The bank asked for the review.", answer: "NI", line: null,
            why: "The masthead says it is for the bank. Who asked for it is not stated." },
          { stem: "The figures allow for inflation.", answer: "F", line: 8,
            why: "<i>I have not adjusted any of these figures for inflation.</i>" }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the review actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "The year everything is measured against is the ___ .", answer: "baseline", given: [0],
            why: "Whoever chooses it decides what the story looks like." },
          { text: "A change that will not reverse is ___ .", answer: "structural", given: [0],
            why: "A claim, and one that should be argued for." },
          { text: "Revenue can fall while prices rise if the ___ changes.", answer: "mix", given: [0],
            why: "The proportions of what you sell, or where." },
          { text: "Figures with no inflation adjustment are in ___ terms.", answer: "nominal", given: [0],
            why: "As recorded, which over this period matters a great deal." },
          { text: "Comparing the same thing with the same thing is like for ___ .", answer: "like", given: [0],
            why: "From Unit 3, and it applies to years as well as to quotations." },
          { text: "A condition making progress harder is a ___ .", answer: "headwind", given: [0],
            why: "Borrowed from flying. Useful once in a document." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the review actually said", letter: "C",
        concepts: ["recall", "evidence"],
        kind: "recap", task: null, n: 0,
        prompt: "Four readers, four conclusions. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Bilal", detail: "Sees domestic sales rise from 44% to 54% and reports strong growth at home." },
          { id: "c2", label: "Suha", detail: "Compares last year with 2019 and concludes the business is in long-term decline." },
          { id: "c3", label: "Karim", detail: "Reads that output has risen for three years and treats the recovery as complete." },
          { id: "c4", label: "Lara", detail: "Quotes all the turnover figures in a report without mentioning inflation." }
        ],
        takeaways: [
          { text: "A rising share on a falling total is not growth.", caseId: "c1",
            why: "Forty-four per cent of 46.1 is 20.3 million; fifty-four per cent of 41.2 is 22.2. Real, and a fraction of what the share suggests." },
          { text: "Ask whether the baseline was a normal year.", caseId: "c2",
            why: "The review says 2019 was the best in a decade. Against the five-year average the gap is much smaller." },
          { text: "Three years of rises is a direction, not an arrival.", caseId: "c3",
            why: "The review puts full recovery at 2027 on current trends, and says so in its own least flattering sentence." },
          { text: "Nominal figures over a long period are not comparable.", caseId: "c4",
            why: "The warning is the last line of the document, which is where a careless reader stops." }
        ],
        closer: "<p>Next: reporting a problem to a supervisor, which is what Fadi did well and what this whole unit's language is for.</p>" }

    ]
  };
})();
