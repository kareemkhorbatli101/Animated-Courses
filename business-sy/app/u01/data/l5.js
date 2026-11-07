/* Unit 1 · Introducing the Business — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u01-l5", unit: "u01", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a company profile and a sales chart, and find the line that answers a question",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read a company profile", letter: "A",
        concepts: ["read", "margin"],
        kind: "cards", task: null, n: 0,
        prompt: "Six words the profile uses. Say what each one means before you turn it over.",
        cards: [
          { term: "founded", ar: "تأسّست",
            meaning: "started, of a company",
            with: ["founded in 1998", "the founder", "a family-founded firm"],
            why: "Used of companies and institutions, not of objects. A company is founded; a house is built." },
          { term: "domestic market", ar: "السوق المحلّية",
            meaning: "customers inside your own country",
            with: ["the domestic market", "domestic demand", "sell domestically"],
            why: "The opposite of <i>export market</i>. <i>Domestic</i> also means household, which is why a textile firm can sell domestic textiles abroad." },
          { term: "capacity", ar: "الطاقة الإنتاجية",
            meaning: "the most a workshop can produce in a given time",
            with: ["at full capacity", "spare capacity", "increase capacity"],
            why: "Not the same as output. Capacity is what you could make; output is what you did make." },
          { term: "subcontract", ar: "التعاقد من الباطن",
            meaning: "to pay another workshop to do part of the job",
            with: ["subcontract the dyeing", "a subcontractor", "subcontracted work"],
            why: "The work still belongs to you in the client's eyes. If the subcontractor is late, you are late." },
          { term: "overheads", ar: "النفقات العامة",
            meaning: "the costs you pay whether you produce anything or not",
            with: ["keep overheads low", "fixed overheads", "overheads rose"],
            why: "Rent, power, salaries. Always plural in British English." },
          { term: "margin", ar: "هامش الربح",
            meaning: "what is left of the price after the cost of making it",
            with: ["a thin margin", "improve the margin", "margins are under pressure"],
            why: "A big order at a thin margin can earn less than a small one at a good margin. The number everyone watches." }
        ],
        explain: { terms: [
          { en: "capacity", gloss: "the most you could produce", ar: "الطاقة الإنتاجية" },
          { en: "overheads", gloss: "costs you pay even when idle", ar: "النفقات العامة" },
          { en: "margin", gloss: "price minus cost", ar: "هامش الربح" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read a company profile", letter: "B",
        concepts: ["read", "supplier"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "A profile written for a trade directory. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "ORONTES TEXTILES — COMPANY PROFILE",
          blocks: [
            { h: "Who we are", lines: [
              "Orontes Textiles was founded in 1998 by the Haddad family and is still owned by them.",
              "The company weaves and finishes cotton fabric for home textiles: sheeting, curtain fabric and light upholstery.",
              "It employs forty staff at a single workshop outside Hama, with a sales office of four people in Damascus." ] },
            { h: "What we make", lines: [
              "Capacity is about 9,000 metres a week across three looms.",
              "Actual output last year averaged 6,400 metres, because the dyeing is subcontracted and the subcontractor sets the pace.",
              "The company has twice looked at buying its own dyeing plant, and twice decided the overheads would be too high for its order book." ] },
            { h: "Where we sell", lines: [
              "Rather more than half of what the company makes is sold on the domestic market, mostly to wholesalers in Damascus and Aleppo.",
              "The rest is exported, and almost all of the export volume goes to Jordan.",
              "Margins on export orders are better, but the orders are larger and the lead times longer, which ties up cash for longer." ] }
          ] },
        items: [
          { para: 1, q: "What is the relationship between the Haddad family and the company today?",
            options: [
              { text: "They founded it and still own it.", correct: true,
                why: "<i>Founded in 1998 by the Haddad family and is still owned by them</i> — both facts in one sentence." },
              { text: "They founded it but have since sold it.", why: "<i>Still owned by them</i> rules this out." },
              { text: "They bought it from its founders.", why: "They are the founders; nobody else is mentioned." } ] },
          { para: 1, q: "How many people does the company employ in total?",
            options: [
              { text: "Forty-four.", correct: true,
                why: "Forty at the workshop plus four in the Damascus office. The text gives the two numbers separately and expects you to add them." },
              { text: "Forty.", why: "That is the workshop alone. The sales office is in the same sentence." },
              { text: "Four.", why: "That is the Damascus office alone." } ] },
          { para: 2, q: "Why is output lower than capacity?",
            options: [
              { text: "Because the dyeing is done by another firm, which sets the pace.", correct: true,
                why: "The text gives the reason with <i>because</i>, which is the easiest kind of answer to find and the easiest to skim past." },
              { text: "Because there are only three looms.", why: "Three looms is how the capacity of 9,000 is reached, not why output falls below it." },
              { text: "Because there are not enough orders.", why: "The order book is mentioned, but as a reason for not buying a dyeing plant — not as a limit on output." } ] },
          { para: 2, q: "What has the company decided about its own dyeing plant?",
            options: [
              { text: "It has considered one twice and said no both times.", correct: true,
                why: "<i>Twice looked at… and twice decided</i>. The repetition is the point: the same answer, reached twice." },
              { text: "It has decided to buy one.", why: "The opposite of what the sentence says." },
              { text: "It has never considered one.", why: "It considered one twice." } ] },
          { para: 3, q: "Where does most of the company's output go?",
            options: [
              { text: "To buyers inside Syria.", correct: true,
                why: "<i>Rather more than half… on the domestic market</i>. More than half is most." },
              { text: "To Jordan.", why: "Jordan takes almost all of the <i>export</i> share, and exports are the smaller half." },
              { text: "It is split evenly.", why: "<i>Rather more than half</i> is deliberately not even." } ] },
          { para: 3, q: "What is the drawback of export orders, according to the profile?",
            options: [
              { text: "The money is tied up for longer.", correct: true,
                why: "The sentence concedes the better margin and then gives the cost of it: longer lead times tie up cash." },
              { text: "The margins are worse.", why: "The text says the opposite — margins on export orders are better." },
              { text: "The orders are too small.", why: "They are larger, which is part of why the cash is tied up." } ] }
        ],
        explain: { terms: [
          { en: "wholesaler", gloss: "a buyer who sells on to shops rather than to the public", ar: "تاجر جملة" },
          { en: "order book", gloss: "all the orders a company currently has", ar: "دفتر الطلبيات" },
          { en: "tie up cash", gloss: "money you cannot use because it is in unsold goods", ar: "تجميد السيولة" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find the line that answers it", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four questions, four short texts. Click the one sentence that answers each question.",
        note: { kind: "reader", title: "How this is done quickly",
                body: "<p>Read the question first and decide what <i>kind</i> of answer it needs — a number, a reason, a date, a name. Then look only for that. Reading the whole text first is slower and no more accurate.</p>" },
        items: [
          { prompt: "Which sentence gives the reason for the delay?",
            text: "The Amman order was due to leave on Thursday. The truck was booked and the paperwork was ready. The dark blue yarn did not arrive from the supplier until Friday morning. We have told the client and offered a part delivery next week.",
            answer: "The dark blue yarn did not arrive from the supplier until Friday morning.",
            why: "The other three sentences describe the plan, the state of the paperwork and what was done afterwards. Only this one says what went wrong." },
          { prompt: "Which sentence states the payment terms?",
            text: "Thank you for your order of 2,000 metres. We will dispatch on the fourteenth. Our invoice is payable thirty days from its date. Please confirm the delivery address for the courier.",
            answer: "Our invoice is payable thirty days from its date.",
            why: "<i>Payable thirty days from</i> is the term. The dispatch date is a different promise, and a common thing to confuse it with." },
          { prompt: "Which sentence says what the reader must do?",
            text: "The meeting has moved to 09:00 on Thursday. It will be held in the office. Fadi will be on shift and will be told in person. Everyone else should reply to this message to confirm they can attend.",
            answer: "Everyone else should reply to this message to confirm they can attend.",
            why: "Three statements of fact, then one instruction. <i>Should</i> is the word that changes the job of the sentence." },
          { prompt: "Which sentence gives the condition on the price?",
            text: "We can supply the medium weight at 1,800 a metre. That figure holds for thirty days from today. Above 2,000 metres the lead time rises to six weeks. Samples are sent at no charge.",
            answer: "That figure holds for thirty days from today.",
            why: "The condition is on the <i>price</i>. The six-week sentence is a condition too, but on the lead time — which is exactly the trap." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find the line that answers it", letter: "B",
        concepts: ["comparison", "evidence"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "The company's monthly output last year. Read the chart, then answer.",
        note: { kind: "reader", title: "Read the axes first",
                body: "<p>Before you look at the shape of a line, read what the two axes measure and in what unit. Half of all chart mistakes are made in the first three seconds, by assuming.</p>" },
        chart: {
          kind: "line",
          title: "Output and capacity, last year",
          sub: "Metres of finished fabric per week, averaged by month",
          unit: "m",
          xlabel: "Month",
          ymax: 10000,
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          series: [
            { name: "capacity", v: [9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000] },
            { name: "output",   v: [6200, 6400, 7100, 7400, 6900, 5200, 4800, 5600, 7200, 7600, 7300, 7100] }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Month", "Capacity", "Output"],
          rows: [[1,9000,6200],[2,9000,6400],[3,9000,7100],[4,9000,7400],[5,9000,6900],[6,9000,5200],
                 [7,9000,4800],[8,9000,5600],[9,9000,7200],[10,9000,7600],[11,9000,7300],[12,9000,7100]]
        },
        items: [
          { q: "What does the flat line at 9,000 represent?",
            options: [
              { text: "The most the workshop could produce each week.", correct: true,
                why: "It is capacity, and capacity does not change month to month — which is why it is drawn flat." },
              { text: "The amount the company actually produced.", why: "That is the other line, and it never reaches 9,000." },
              { text: "The amount the company sold.", why: "The chart measures what was finished, not what was sold. Nothing here is about sales." } ] },
          { q: "In which month was output lowest?",
            options: [
              { text: "July.", correct: true, why: "4,800 metres, the lowest point on the output line." },
              { text: "June.", why: "5,200 — low, and the start of the fall, but not the lowest." },
              { text: "January.", why: "6,200. The line starts low-ish but goes lower later." } ] },
          { q: "Roughly how far below capacity was output in its best month?",
            options: [
              { text: "About 1,400 metres.", correct: true,
                why: "The best month is October at 7,600, and 9,000 minus 7,600 is 1,400. Even the best month leaves spare capacity." },
              { text: "There was no gap in the best month.", why: "The two lines never touch anywhere on this chart." },
              { text: "About 4,200 metres.", why: "That is the gap in the <i>worst</i> month, July." } ] },
          { q: "What happened between May and July?",
            options: [
              { text: "Output fell for two months running.", correct: true,
                why: "6,900, then 5,200, then 4,800. Two consecutive falls." },
              { text: "Output rose steadily.", why: "The line goes down across those months, not up." },
              { text: "Capacity was reduced.", why: "Capacity is flat all year. Only output moves." } ] },
          { q: "Which statement does the chart support?",
            options: [
              { text: "The workshop never worked at full capacity last year.", correct: true,
                why: "The output line stays below the capacity line in all twelve months — a claim you can check at every point." },
              { text: "The workshop was at full capacity in the autumn.", why: "October is the peak at 7,600, still 1,400 short." },
              { text: "Capacity rose in the second half of the year.", why: "The capacity line is flat. Nothing about it changes." } ] },
          { q: "The profile said average output was 6,400 metres. Is that consistent with this chart?",
            options: [
              { text: "Yes — the months above and below roughly balance out.", correct: true,
                why: "Highs near 7,600 and lows near 4,800 around a middle of about 6,400. An average is not a typical month; it is the balance point." },
              { text: "No — most months are above 6,400.", why: "Seven months are above and five below, but the five below are further below than the seven are above." },
              { text: "The chart cannot say.", why: "The chart gives every month, so the average can be checked directly." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the text actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the profile in 1B. <i>Doesn't say</i> is not a wrong answer — it is the right one whenever the text is silent.",
        carry: "1b",
        note: { kind: "reader", title: "The third option is the hard one",
                body: "<p><b>Wrong</b> means the text says something different. <b>Doesn't say</b> means the text says nothing either way. Most learners pick <i>Wrong</i> when the honest answer is <i>Doesn't say</i>, because a statement that sounds unlikely feels false.</p>" },
        items: [
          { stem: "The company has been owned by the same family since it started.", answer: "T", line: 1,
            why: "<i>Founded in 1998 by the Haddad family and is still owned by them.</i>" },
          { stem: "The company does its own dyeing.", answer: "F", line: 5,
            why: "<i>The dyeing is subcontracted</i> — the text says the opposite." },
          { stem: "The company plans to open a second workshop.", answer: "NI", line: null,
            why: "A dyeing plant is discussed and rejected. A second workshop is never mentioned, so the text is silent." },
          { stem: "Export orders earn a better margin than domestic ones.", answer: "T", line: 9,
            why: "<i>Margins on export orders are better.</i> Stated plainly, then qualified — the qualification does not cancel it." },
          { stem: "The company sells directly to the public.", answer: "NI", line: null,
            why: "Wholesalers and export buyers are named. Whether it also sells to the public is simply not addressed." },
          { stem: "The Damascus office has more staff than the workshop.", answer: "F", line: 3,
            why: "Forty at the workshop, four in Damascus. The text gives both numbers." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the text actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "The ___ of the workshop is 9,000 metres a week.", answer: "capacity", given: [0],
            why: "What you <i>could</i> make. Output is what you did make." },
          { text: "Rent and power are ___ : you pay them in a quiet month too.", answer: "overheads", given: [0],
            why: "Rent, power, salaries. Plural." },
          { text: "A big order at a thin ___ can earn less than a small one.", answer: "margin", given: [0],
            why: "The figure a thin order and a fat order are judged by." },
          { text: "Over half of what we make is sold on the ___ market.", answer: "domestic", given: [0],
            why: "<i>Domestic market</i>, as against export." },
          { text: "We ___ the dyeing to a workshop in Homs.", answer: "subcontract", given: [0],
            why: "The work is still yours as far as the client is concerned." },
          { text: "A ___ buys from us and sells on to the shops.", answer: "wholesaler", given: [0],
            why: "Between the maker and the shop." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the text actually said", letter: "C",
        concepts: ["recall", "evidence"],
        kind: "recap", task: null, n: 0,
        prompt: "Four situations. Decide what the reading in this lesson tells you to do.",
        cases: [
          { id: "c1", label: "Hiba",
            detail: "A client asks how much the workshop can make in a week. She gives them last year's average output and calls it the capacity." },
          { id: "c2", label: "Omar",
            detail: "He reads a company profile that never mentions selling to the public, and tells a colleague the firm does not sell to the public." },
          { id: "c3", label: "Yara",
            detail: "An email promises dispatch on the 14th and payment thirty days from the invoice date. She writes the 14th in her diary as the day the money arrives." },
          { id: "c4", label: "Khalid",
            detail: "He looks at a chart where the two lines never meet, and says the workshop never reached full capacity all year." }
        ],
        takeaways: [
          { text: "Capacity is what you <b>could</b> make. Output is what you <b>did</b>.",
            caseId: "c1",
            why: "Hiba has answered a capacity question with an output figure. The client will plan against a number the workshop can actually beat, which sounds harmless until they ask for a rush order." },
          { text: "<i>Doesn't say</i> is an answer, not a failure to find one.",
            caseId: "c2",
            why: "Silence is not denial. Omar has turned an absence of information into a fact, and the colleague will repeat it as one." },
          { text: "A dispatch date and an invoice date are different clocks.",
            caseId: "c3",
            why: "The thirty days starts when the invoice is raised, which is the dispatch day at the earliest. Yara's diary is a month out before anything has gone wrong." },
          { text: "A chart can be checked at every point, so read what it actually plots.",
            caseId: "c4",
            why: "Khalid is right, and right for the right reason: the output line stays under the capacity line in all twelve months, and that is something you can verify rather than infer." }
        ],
        closer: "<p>Everything in this lesson came off two pages: a profile and a chart. That is what most reading at work looks like.</p>" }

    ]
  };
})();
