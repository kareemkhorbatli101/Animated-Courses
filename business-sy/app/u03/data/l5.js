/* Unit 3 · Comparing Suppliers — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u03-l5", unit: "u03", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a tender report and a price comparison, and see what the cheapest column hides",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read a tender report", letter: "A",
        concepts: ["read", "evidence"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the report. Say what each means before you turn it over.",
        cards: [
          { term: "like for like", ar: "مقارنة متكافئة",
            meaning: "comparing things that really are the same",
            with: ["a like-for-like comparison", "not like for like"],
            why: "Hyphenated before a noun, open after a verb. The phrase buyers reach for when someone has compared two different things." },
          { term: "all-in price", ar: "السعر الشامل",
            meaning: "one figure covering everything",
            with: ["an all-in price", "quote all-in"],
            why: "Less formal than <i>landed cost</i> and used in speech. Ask what the <i>all</i> actually includes." },
          { term: "variance", ar: "الفارق",
            meaning: "the difference between what was expected and what happened",
            with: ["price variance", "explain the variance", "within variance"],
            why: "Finance uses it constantly. If someone asks you to <i>explain the variance</i>, they want the reason, not the number." },
          { term: "weighting", ar: "وزن نسبي",
            meaning: "how much each factor counts in the decision",
            with: ["the weighting", "weighted 60/40", "price is weighted heavily"],
            why: "Saying the weighting before you compare stops the argument afterwards about whether price mattered most." },
          { term: "due diligence", ar: "العناية الواجبة",
            meaning: "the checking you do before committing",
            with: ["carry out due diligence", "basic due diligence"],
            why: "Taking up references is due diligence. Asking for them and never calling is not." },
          { term: "single point of failure", ar: "نقطة إخفاق وحيدة",
            meaning: "one thing whose failure stops everything",
            with: ["a single point of failure", "avoid a single point of failure"],
            why: "Three mills all using the same dye house are not three suppliers. They are one, wearing three names." }
        ],
        explain: { terms: [
          { en: "like for like", gloss: "comparing things that really are the same", ar: "مقارنة متكافئة" },
          { en: "weighting", gloss: "how much each factor counts", ar: "وزن نسبي" },
          { en: "due diligence", gloss: "checking done before committing", ar: "العناية الواجبة" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read a tender report", letter: "B",
        concepts: ["read", "comparison"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The report Rana put to her manager. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "TENDER 17/04 — REPORT AND RECOMMENDATION",
          blocks: [
            { h: "What was compared", lines: [
              "Three mills quoted against specification 17/04-B for 4,000 metres of cotton sheeting.",
              "All three quotations were compliant and arrived before the closing time.",
              "Prices below are landed costs to Amman. Two of the three quoted ex works, and freight has been added at our own rate so that the comparison is like for like." ] },
            { h: "The figures", lines: [
              "Homs Spinning: 1,780 a metre landed, seven weeks, one reference supplied and one promised.",
              "Orontes Textiles: 1,780 a metre landed, four weeks, three references supplied and taken up.",
              "Aleppo Weaving: 1,815 a metre landed, three weeks, two references supplied, neither of which replied." ] },
            { h: "What the figures do not show", lines: [
              "Homs and Aleppo both use the same dye house. A delay there would affect both, so choosing one of them does not spread the risk.",
              "Orontes dyes through a subcontractor in Homs as well, but holds four weeks of yarn, which the other two do not.",
              "On a weighting of sixty per cent price and forty per cent delivery, Orontes and Homs tie on price and Orontes wins on delivery. I recommend Orontes." ] }
          ] },
        items: [
          { para: 1, q: "Why were freight costs added to two of the quotations?",
            options: [
              { text: "So that all three could be compared on the same basis.", correct: true,
                why: "<i>So that the comparison is like for like</i> — the report gives its own reason in the same sentence." },
              { text: "Because those two suppliers were more expensive.", why: "Freight was added because of the delivery term, not the price level." },
              { text: "Because the buyer pays freight on all orders.", why: "One of the three quoted landed, so not all." } ] },
          { para: 2, q: "Which two suppliers cost the same, landed?",
            options: [
              { text: "Homs and Orontes, both at 1,780.", correct: true,
                why: "The figure that makes the whole report interesting: the cheap one and the reliable one arrive at the same number once freight is in." },
              { text: "Orontes and Aleppo.", why: "Aleppo is 1,815, which is 35 higher." },
              { text: "None of them — all three differ.", why: "Two are identical, which is exactly what the ex works conversion revealed." } ] },
          { para: 2, q: "What is different about Aleppo's references?",
            options: [
              { text: "They were given but did not reply.", correct: true,
                why: "<i>Neither of which replied</i>. Supplied and useful are not the same thing." },
              { text: "None were given.", why: "Two were given." },
              { text: "They were taken up successfully.", why: "That is Orontes, whose three were taken up." } ] },
          { para: 3, q: "Why does choosing Homs instead of Aleppo not reduce risk?",
            options: [
              { text: "Both depend on the same dye house.", correct: true,
                why: "The sentence the whole third section exists for: two names, one point of failure." },
              { text: "Both quoted the same price.", why: "They did not — and price is not what the paragraph is about." },
              { text: "Both are in the same city.", why: "Not stated, and it would not be the reason even if it were." } ] },
          { para: 3, q: "What does Orontes have that the other two do not?",
            options: [
              { text: "Four weeks of yarn held in stock.", correct: true,
                why: "The report concedes that Orontes uses a Homs subcontractor too, then names the thing that makes the risk different." },
              { text: "Its own dye house.", why: "The report says the opposite — it subcontracts in Homs as well." },
              { text: "The lowest price.", why: "It ties on price. That is why delivery decides it." } ] },
          { para: 3, q: "What role does the weighting play in the recommendation?",
            options: [
              { text: "It is stated before the conclusion, so the reasoning can be checked.", correct: true,
                why: "Sixty/forty is declared, and the reader can disagree with the weighting rather than with the writer." },
              { text: "It makes price the only factor.", why: "Price is sixty per cent, not everything — and the two leaders tie on it anyway." },
              { text: "It was chosen after the winner was known.", why: "Nothing in the report suggests that, and stating it before the conclusion is what guards against it." } ] }
        ],
        explain: { terms: [
          { en: "to tie", gloss: "to be equal in a comparison", ar: "يتعادل" },
          { en: "to spread the risk", gloss: "to avoid depending on one thing", ar: "توزيع المخاطر" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find the line that decides it", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that actually decides the question.",
        note: { kind: "reader", title: "The deciding line is rarely the loudest",
                body: "<p>In a report the sentence that settles something is often quiet and in the middle. The dramatic sentences tend to be the ones setting up the problem.</p>" },
        items: [
          { prompt: "Which sentence shows the two cheapest quotations are not really different?",
            text: "Homs quoted 1,690 and Orontes quoted 1,780. On the face of it Homs is ninety a metre cheaper. Homs quoted ex works, and freight to Amman is ninety a metre. Both suppliers have long experience in sheeting.",
            answer: "Homs quoted ex works, and freight to Amman is ninety a metre.",
            why: "It supplies the two facts that cancel the apparent gap. The sentence before it states the gap; this one dissolves it." },
          { prompt: "Which sentence shows the references were not useful?",
            text: "Aleppo supplied two trade references. Both are established buyers in Jordan. We wrote to both on 2 March and telephoned on 7 March. Neither has replied.",
            answer: "Neither has replied.",
            why: "Four sentences build the expectation that the references were checked. The last one says what the check produced, which is nothing." },
          { prompt: "Which sentence shows the risk is not spread?",
            text: "We have three quotations from three separate companies. Each has its own workshop and its own staff. Homs and Aleppo both send their cloth to the same dye house. All three are compliant on paperwork.",
            answer: "Homs and Aleppo both send their cloth to the same dye house.",
            why: "Three separate companies, one shared dependency. The surrounding sentences are all true and all reassuring." },
          { prompt: "Which sentence states how the decision will be made?",
            text: "All three quotations are now in. The specification was identical in each case. Price will count for sixty per cent and delivery for forty. We expect to decide this week.",
            answer: "Price will count for sixty per cent and delivery for forty.",
            why: "The weighting is the rule. Everything else describes the process rather than the basis of the judgement." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find the line that decides it", letter: "B",
        concepts: ["comparison", "cost"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "The same three quotations, drawn twice. Read the chart, then answer.",
        note: { kind: "reader", title: "Read what the bars measure",
                body: "<p>Two charts of the same three suppliers can put them in a different order, and neither is wrong. The question is always which figure the bar is drawing.</p>" },
        chart: {
          kind: "bar",
          title: "Three quotations: unit price and landed cost",
          sub: "Syrian pounds per metre, 4,000 metres of sheeting to specification 17/04-B",
          unit: "SYP/m",
          ymax: 2000,
          bars: [
            { name: "Homs — unit", v: 1690, group: 0 },
            { name: "Orontes — unit", v: 1780, group: 0 },
            { name: "Aleppo — unit", v: 1725, group: 0 },
            { name: "Homs — landed", v: 1780, group: 1 },
            { name: "Orontes — landed", v: 1780, group: 1 },
            { name: "Aleppo — landed", v: 1815, group: 1 }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Supplier", "Unit price", "Landed cost"],
          rows: [["Homs", 1690, 1780], ["Orontes", 1780, 1780], ["Aleppo", 1725, 1815]]
        },
        items: [
          { q: "On unit price alone, who is cheapest?",
            options: [
              { text: "Homs, at 1,690.", correct: true, why: "The lowest bar in the first group, and the figure that would win a careless comparison." },
              { text: "Orontes, at 1,780.", why: "The highest of the three unit prices." },
              { text: "Aleppo, at 1,725.", why: "In the middle on unit price." } ] },
          { q: "On landed cost, who is cheapest?",
            options: [
              { text: "Homs and Orontes together, both at 1,780.", correct: true,
                why: "The two bars are the same height in the second group. Freight closed a gap of ninety." },
              { text: "Homs alone.", why: "Homs loses its advantage entirely once freight is added." },
              { text: "Aleppo.", why: "Aleppo is highest on landed cost, at 1,815." } ] },
          { q: "Which supplier's position changes most between the two groups?",
            options: [
              { text: "Homs — cheapest on one measure, joint cheapest on the other.", correct: true,
                why: "Its bar rises by ninety; the others rise by nothing and thirty-five." },
              { text: "Orontes — it rises the most.", why: "Orontes quoted landed already, so its two bars are identical." },
              { text: "Aleppo — it falls.", why: "No bar falls. Freight can only add." } ] },
          { q: "Why does Orontes have two bars of the same height?",
            options: [
              { text: "It quoted a landed price, so there was nothing to add.", correct: true,
                why: "A supplier who quotes landed looks expensive on the first chart and competitive on the second." },
              { text: "Its freight is free.", why: "Its freight is inside the quoted figure, which is not the same as free." },
              { text: "It is a charting error.", why: "The identical bars are the most informative thing on the chart." } ] },
          { q: "A manager sees only the first group and says Homs is 90 cheaper. What is wrong?",
            options: [
              { text: "The first group is not like for like.", correct: true,
                why: "Two of the three quoted ex works. Comparing them with a landed quotation measures delivery terms, not price." },
              { text: "Nothing — 1,690 is lower than 1,780.", why: "True and misleading, which is the most dangerous combination in a comparison." },
              { text: "The figures are wrong.", why: "The figures are right. The basis of comparison is the problem." } ] },
          { q: "What can this chart not tell you about which mill to choose?",
            options: [
              { text: "Anything about lead time or references.", correct: true,
                why: "It plots money. Delivery was forty per cent of the decision and appears nowhere on it." },
              { text: "Which is cheapest landed.", why: "That is precisely what the second group shows." },
              { text: "How much freight costs.", why: "It can be read as the gap between a supplier's two bars." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the report actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the report in 1B.",
        carry: "1b",
        items: [
          { stem: "All three quotations met the specification.", answer: "T", line: 2,
            why: "<i>All three quotations were compliant and arrived before the closing time.</i>" },
          { stem: "Orontes quoted the lowest unit price.", answer: "NI", line: null,
            why: "The report gives landed costs only. Unit prices appear in the chart, not in the report — and the report never claims one." },
          { stem: "Aleppo supplied no references.", answer: "F", line: 6,
            why: "Two were supplied. Neither replied, which is a different failure." },
          { stem: "Homs and Aleppo share a dye house.", answer: "T", line: 7,
            why: "Stated plainly, and it is the reason the section exists." },
          { stem: "Orontes does all its own dyeing.", answer: "F", line: 8,
            why: "<i>Orontes dyes through a subcontractor in Homs as well</i> — the report concedes it before giving the mitigating fact." },
          { stem: "The weighting was agreed with the supplier beforehand.", answer: "NI", line: null,
            why: "The weighting is stated. Who agreed it, and when, is never addressed." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the report actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "Freight was added so the comparison would be like for ___ .", answer: "like", given: [0],
            why: "The phrase for comparing things that really are the same." },
          { text: "Price counted sixty per cent: that is the ___ .", answer: "weighting", given: [0],
            why: "How much each factor counts, stated before the conclusion." },
          { text: "Taking up references is basic due ___ .", answer: "diligence", given: [0],
            why: "The checking done before committing." },
          { text: "One dye house for two mills is a single point of ___ .", answer: "failure", given: [0],
            why: "One thing whose failure stops everything." },
          { text: "The ___ between quoted and landed was ninety a metre.", answer: "variance", given: [0],
            why: "The difference between what was expected and what it turned out to be." },
          { text: "An ___ price is one figure covering everything.", answer: "all-in", given: [0],
            why: "Less formal than landed cost, and worth asking what the <i>all</i> covers." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the report actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four buyers, four mistakes. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Yasmin", detail: "Compares three quotations on the price written at the top of each one." },
          { id: "c2", label: "Omar", detail: "Asks all three suppliers for references, files them, and never telephones anyone." },
          { id: "c3", label: "Ghada", detail: "Splits an order between two mills to reduce risk, without asking who dyes their cloth." },
          { id: "c4", label: "Samir", detail: "Decides on price, then writes a report explaining why delivery mattered less." }
        ],
        takeaways: [
          { text: "Compare landed costs, or you are comparing delivery terms.", caseId: "c1",
            why: "Two of the three quoted ex works. On the headline figures Homs looks ninety cheaper and is not cheaper at all." },
          { text: "A reference you did not call is not evidence.", caseId: "c2",
            why: "Aleppo's two references never replied. Omar would have filed them as supplied and learned exactly as much." },
          { text: "Two suppliers with one dependency are one supplier.", caseId: "c3",
            why: "Homs and Aleppo share a dye house. Ghada has bought the appearance of spread risk and none of the substance." },
          { text: "State the weighting before you look at the answer.", caseId: "c4",
            why: "A weighting written afterwards always justifies the decision already made, and a reader can usually tell." }
        ],
        closer: "<p>Next: asking a supplier for the evidence behind a claim, out loud, without sounding as though you do not believe them.</p>" }

    ]
  };
})();
