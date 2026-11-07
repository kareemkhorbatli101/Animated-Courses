/* Unit 2 · Plans, Quotes and Promises — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u02-l5", unit: "u02", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read terms of sale and a revenue split, and find the line that commits you",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the terms of sale", letter: "A",
        concepts: ["read", "agreement"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the small print. Say what each one means before you turn it over.",
        cards: [
          { term: "subject to availability", ar: "حسب توفّر الكمية",
            meaning: "we will supply it if we have it",
            with: ["prices are subject to availability", "subject to stock"],
            why: "Looks like a courtesy; is a get-out. It means no quantity has actually been reserved for you." },
          { term: "firm offer", ar: "عرض ملزم",
            meaning: "a price the seller is bound by for a stated period",
            with: ["a firm offer", "firm for thirty days", "firm until Friday"],
            why: "The opposite of an indication. If a buyer asks <i>is that firm?</i>, they are asking whether they can rely on it." },
          { term: "ex works", ar: "تسليم المصنع",
            meaning: "the price covers the goods at our gate and nothing beyond it",
            with: ["ex works Hama", "the price is ex works"],
            why: "One of the standard delivery terms. It decides who pays for transport, and buyers who miss it are surprised by the freight bill." },
          { term: "pro forma invoice", ar: "فاتورة أوّلية",
            meaning: "a bill sent before the goods, so the buyer can arrange payment",
            with: ["issue a pro forma", "against a pro forma invoice"],
            why: "Not a demand for money owed. It is a document that lets a bank or a ministry process a payment in advance." },
          { term: "force majeure", ar: "قوة قاهرة",
            meaning: "events outside anyone's control that excuse a missed date",
            with: ["a force majeure clause", "delays due to force majeure"],
            why: "French, used in English contracts unchanged. Read what your own contracts count as force majeure before you need it." },
          { term: "without prejudice", ar: "دون المساس بالحقوق",
            meaning: "said while negotiating, and not usable against you later",
            with: ["without prejudice to our rights", "a without-prejudice offer"],
            why: "Marks an offer made to settle something. Saying it does not make it true by itself, but its absence is noticed." }
        ],
        explain: { terms: [
          { en: "firm offer", gloss: "a price the seller is bound by", ar: "عرض ملزم" },
          { en: "ex works", gloss: "price covers the goods at the seller's gate only", ar: "تسليم المصنع" },
          { en: "pro forma invoice", gloss: "a bill issued before the goods, to arrange payment", ar: "فاتورة أوّلية" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the terms of sale", letter: "B",
        concepts: ["read", "agreement"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The terms printed on the back of every Orontes quotation. Read them, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "ORONTES TEXTILES — TERMS OF SALE",
          blocks: [
            { h: "1. Prices and validity", lines: [
              "All prices are quoted per metre, ex works Hama, and exclude transport and insurance.",
              "A quotation is a firm offer for thirty days from its date unless a shorter period is stated on it.",
              "Prices shown in our general price list are an indication only and are not a firm offer." ] },
            { h: "2. Orders and deposits", lines: [
              "An order is accepted only when we confirm it in writing, naming quantity, price and dispatch date.",
              "First orders require a deposit of thirty per cent, which is credited against the final invoice.",
              "Where a deposit is required, production does not begin until it has been received." ] },
            { h: "3. Delivery and delay", lines: [
              "Lead times run from the date we confirm the order, not from the date of enquiry.",
              "We will inform the buyer as soon as we know a date will be missed, and will state the revised date.",
              "We do not accept penalties for delay caused by force majeure, which this contract limits to events outside the reasonable control of either party." ] }
          ] },
        items: [
          { para: 1, q: "A buyer in Beirut is quoted 1,650 a metre. What does that figure cover?",
            options: [
              { text: "The fabric at the Hama gate, with transport paid separately.", correct: true,
                why: "<i>Ex works Hama, and exclude transport and insurance</i> — two exclusions in one line." },
              { text: "The fabric delivered to Beirut.", why: "<i>Ex works</i> rules that out. This is the mistake the term exists to prevent." },
              { text: "The fabric and insurance, but not transport.", why: "Both are excluded, not one." } ] },
          { para: 1, q: "What is the difference between the price list and a quotation?",
            options: [
              { text: "A quotation binds the company; the price list does not.", correct: true,
                why: "<i>A firm offer for thirty days</i> against <i>an indication only and not a firm offer</i>." },
              { text: "The price list is more accurate.", why: "Nothing about accuracy. The difference is whether it binds." },
              { text: "There is no difference.", why: "The last line of the section exists precisely to state one." } ] },
          { para: 2, q: "When does an order become an order?",
            options: [
              { text: "When Orontes confirms it in writing with the three details.", correct: true,
                why: "<i>Accepted only when we confirm it in writing, naming quantity, price and dispatch date.</i>" },
              { text: "When the buyer sends a purchase order.", why: "The buyer's document starts the process; the terms say the seller's confirmation completes it." },
              { text: "When the deposit arrives.", why: "The deposit governs when production starts, not when the order exists." } ] },
          { para: 2, q: "A first-order buyer asks whether the deposit is an extra charge. What do the terms say?",
            options: [
              { text: "It is credited against the final invoice.", correct: true,
                why: "<i>Credited against</i> means it comes off what is owed, so the total is unchanged." },
              { text: "It is a separate fee.", why: "The word <i>credited</i> rules this out." },
              { text: "The terms do not say.", why: "They say it in the same sentence that sets the figure." } ] },
          { para: 3, q: "An enquiry arrives on 1 March and the order is confirmed on 8 March. When does a four-week lead time end?",
            options: [
              { text: "Four weeks from 8 March.", correct: true,
                why: "<i>From the date we confirm the order, not from the date of enquiry</i> — the terms name the wrong assumption and block it." },
              { text: "Four weeks from 1 March.", why: "That is the enquiry date, which the clause explicitly excludes." },
              { text: "It depends on the deposit.", why: "The deposit governs the start of production, not the measurement of the lead time." } ] },
          { para: 3, q: "What does the company undertake to do if a date will be missed?",
            options: [
              { text: "Tell the buyer as soon as it knows, and give the new date.", correct: true,
                why: "Two obligations in one line, and the second is the one most suppliers leave out." },
              { text: "Pay a penalty.", why: "Penalties are mentioned only to limit them, and only for force majeure." },
              { text: "Deliver part of the order.", why: "Part delivery is not mentioned in these terms at all." } ] }
        ],
        explain: { terms: [
          { en: "exclude", gloss: "not to be included in the price", ar: "لا يشمل" },
          { en: "credited against", gloss: "taken off what is owed", ar: "يُخصم من" },
          { en: "revised date", gloss: "the new date, replacing the one agreed", ar: "التاريخ المعدّل" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find the line that commits you", letter: "A",
        concepts: ["read", "agreement"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four short extracts. Click the one sentence that actually binds the writer.",
        note: { kind: "reader", title: "Binding or not",
                body: "<p>Look for a verb of commitment — <i>we will</i>, <i>we undertake</i>, <i>we guarantee</i> — attached to something measurable. A sentence that is warm but names no number or date almost never binds anyone.</p>" },
        items: [
          { prompt: "Which sentence binds the seller to a date?",
            text: "Thank you for your order. We are delighted to be working with you. Our team will do everything possible to get your fabric to you quickly. We will dispatch on or before 14 May.",
            answer: "We will dispatch on or before 14 May.",
            why: "<i>On or before</i> plus a date. The sentence about doing everything possible sounds stronger and commits to nothing." },
          { prompt: "Which sentence binds the seller to a price?",
            text: "Our prices are among the most competitive in the region. The figures in our general list are an indication only. We are pleased to confirm 1,650 a metre, firm for thirty days. We review prices every quarter.",
            answer: "We are pleased to confirm 1,650 a metre, firm for thirty days.",
            why: "<i>Firm for thirty days</i> is the commitment. <i>Among the most competitive</i> is a claim no buyer can hold you to." },
          { prompt: "Which sentence places an obligation on the buyer?",
            text: "We look forward to a long relationship. Production will begin once the deposit has been received. Our workshop is at your disposal. Please do not hesitate to contact me.",
            answer: "Production will begin once the deposit has been received.",
            why: "It binds the buyer by making their payment the condition of the seller starting. The other three are courtesies." },
          { prompt: "Which sentence limits the seller's liability?",
            text: "We take delivery dates seriously. We will tell you immediately if a date is at risk. We do not accept penalties for delay caused by events outside our reasonable control. Our record on delivery is strong.",
            answer: "We do not accept penalties for delay caused by events outside our reasonable control.",
            why: "The only sentence that takes something away. Limits of liability are usually surrounded by reassurance, which is what makes them easy to skim past." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find the line that commits you", letter: "B",
        concepts: ["comparison", "margin"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Where last year's revenue came from. Read the chart, then answer.",
        note: { kind: "reader", title: "A pie chart answers one question",
                body: "<p>A pie shows how a whole divides. It cannot show change over time, and it cannot show whether the whole got bigger. If a question needs either of those, a pie chart is not the place to look.</p>" },
        chart: {
          kind: "pie",
          title: "Revenue by market, last year",
          sub: "Share of total turnover of 41.2 million Syrian pounds",
          unit: "%",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "Domestic wholesale", v: 54 },
            { name: "Jordan", v: 31 },
            { name: "Lebanon", v: 9 },
            { name: "Iraq", v: 6 }
          ],
          cols: ["Market", "Share"],
          rows: [["Domestic wholesale", 54], ["Jordan", 31], ["Lebanon", 9], ["Iraq", 6]]
        },
        items: [
          { q: "Which market is the largest single source of revenue?",
            options: [
              { text: "Domestic wholesale, at 54%.", correct: true, why: "Larger than all three export markets added together, which come to 46%." },
              { text: "Jordan, at 31%.", why: "The largest export market, but not the largest market." },
              { text: "The chart does not say.", why: "A pie chart is exactly the chart that does say this." } ] },
          { q: "What share of revenue came from exports?",
            options: [
              { text: "46%.", correct: true, why: "31 plus 9 plus 6. The chart does not add them for you, which is the point of the question." },
              { text: "31%.", why: "Jordan alone. Lebanon and Iraq are exports too." },
              { text: "54%.", why: "That is the domestic share — the other half of the same pie." } ] },
          { q: "Roughly how much revenue did Jordan produce, in money?",
            options: [
              { text: "About 12.8 million.", correct: true, why: "31% of 41.2 million. The total is in the subtitle, which is where a pie chart usually hides it." },
              { text: "31 million.", why: "Reading a percentage as a figure in millions. The commonest pie chart error there is." },
              { text: "The chart cannot say.", why: "It can, because the subtitle gives the whole." } ] },
          { q: "Does the chart show whether exports are growing?",
            options: [
              { text: "No — it shows one year only.", correct: true,
                why: "A pie is a snapshot. Growth needs at least two of them, or a line chart." },
              { text: "Yes, exports are growing.", why: "Nothing in a single pie can support a claim about change." },
              { text: "Yes, exports are shrinking.", why: "Same problem in the other direction." } ] },
          { q: "Lebanon and Iraq together make up what share?",
            options: [
              { text: "15%.", correct: true, why: "9 plus 6. Together they are still half of Jordan." },
              { text: "9%.", why: "Lebanon alone." },
              { text: "46%.", why: "That is all three export markets, including Jordan." } ] },
          { q: "A manager says: <i>we should drop Iraq, it is only 6%</i>. What does the chart alone tell you about that?",
            options: [
              { text: "Only the share. It says nothing about the margin on those orders.", correct: true,
                why: "Six per cent of revenue at a good margin can be worth more than thirty per cent at a thin one, and this chart does not plot margin at all." },
              { text: "That dropping Iraq would cost little.", why: "That conclusion needs margin data the chart does not contain." },
              { text: "That Iraq is unprofitable.", why: "Share is not profit. The chart measures revenue only." } ] }
        ],
        explain: { terms: [
          { en: "share", gloss: "the part of a whole, usually as a percentage", ar: "حصّة" },
          { en: "turnover", gloss: "total sales in a period", ar: "حجم الأعمال" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Check what the terms actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the terms of sale in 1B.",
        carry: "1b",
        note: { kind: "reader", title: "Contracts reward the third option",
                body: "<p>A contract is silent on far more than it covers. <i>Doesn't say</i> is often the commercially important answer, because it tells you what still has to be negotiated.</p>" },
        items: [
          { stem: "The quoted price includes delivery to the buyer.", answer: "F", line: 1,
            why: "<i>Ex works Hama, and exclude transport and insurance.</i>" },
          { stem: "A quotation binds the company for thirty days unless it says otherwise.", answer: "T", line: 2,
            why: "<i>A firm offer for thirty days from its date unless a shorter period is stated.</i>" },
          { stem: "The deposit is returned if the buyer cancels.", answer: "NI", line: null,
            why: "The terms say the deposit is credited against the invoice. What happens on cancellation is simply not addressed — which is worth knowing before you sign." },
          { stem: "Lead times are measured from the date of enquiry.", answer: "F", line: 7,
            why: "<i>From the date we confirm the order, not from the date of enquiry.</i>" },
          { stem: "The company will pay compensation for any late delivery.", answer: "F", line: 9,
            why: "It declines penalties for force majeure. It says nothing about paying for other delays, so <i>any</i> makes the statement false." },
          { stem: "Orders above 2,000 metres get a lower price.", answer: "NI", line: null,
            why: "Discussed on the phone in Lesson 4, and absent from the written terms. A thing said is not a thing agreed." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the terms actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "A quotation is a ___ offer for thirty days.", answer: "firm", given: [0],
            why: "The opposite of an indication." },
          { text: "The price is ex ___ Hama, so transport is extra.", answer: "works", given: [0],
            why: "The standard term for <i>at our gate</i>." },
          { text: "The deposit is ___ against the final invoice.", answer: "credited", given: [0],
            why: "It comes off what is owed; it is not an extra charge." },
          { text: "Delays caused by force ___ carry no penalty.", answer: "majeure", given: [0],
            why: "French, used unchanged in English contracts." },
          { text: "A pro ___ invoice is issued before the goods go.", answer: "forma", given: [0],
            why: "So the buyer can arrange payment in advance." },
          { text: "Our general price list is an ___ only.", answer: "indication", given: [0],
            why: "Not binding, which is the whole reason the word is there." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the terms actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people, four readings. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Hiba", detail: "Budgets 1,650 a metre as her landed cost in Beirut, and is surprised by a freight bill." },
          { id: "c2", label: "Rami", detail: "Reads a pie chart showing Iraq at 6% and proposes dropping the market." },
          { id: "c3", label: "Noor", detail: "Counts her four-week lead time from the day she sent the enquiry." },
          { id: "c4", label: "Jad", detail: "Is reassured by <i>our team will do everything possible to get your fabric to you quickly</i>." }
        ],
        takeaways: [
          { text: "<b>Ex works</b> means at the seller's gate. Transport is yours.", caseId: "c1",
            why: "The three words that decide who pays the freight, printed once and easy to pass over." },
          { text: "A pie shows share, not margin and not change.", caseId: "c2",
            why: "Rami is drawing a profitability conclusion from a revenue chart. Six per cent at a good margin can be worth more than thirty at a thin one." },
          { text: "A lead time runs from order confirmation, not from enquiry.", caseId: "c3",
            why: "The terms say so explicitly, and name the wrong assumption while doing it. Noor is a week out before anything has gone wrong." },
          { text: "Warmth is not commitment. Look for a number or a date.", caseId: "c4",
            why: "<i>Everything possible</i> binds nobody. <i>On or before 14 May</i> does, and it is the shorter sentence." }
        ],
        closer: "<p>Everything in this lesson came off two sides of one sheet of paper: the terms and the chart. Reading at work is mostly short documents read carefully, not long ones read fast.</p>" }

    ]
  };
})();
