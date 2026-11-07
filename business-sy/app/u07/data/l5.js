/* Unit 7 · Terms and Negotiation — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u07-l5", unit: "u07", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a terms page and a cost breakdown, and find the clause that decides it",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the agreement", letter: "A",
        concepts: ["read", "agreement"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the signed page. Say what each means before you turn it over.",
        cards: [
          { term: "entire agreement", ar: "الاتفاق الكامل",
            meaning: "a clause saying this document replaces everything said before it",
            with: ["an entire agreement clause"],
            why: "It kills every promise made on the telephone. If something matters, it has to be in the document." },
          { term: "order of precedence", ar: "ترتيب الأولوية",
            meaning: "which document wins when two disagree",
            with: ["the order of precedence is"],
            why: "Quotation, purchase order, standard terms — and whichever is listed first wins. One line, and it decides every later argument." },
          { term: "material breach", ar: "إخلال جوهري",
            meaning: "a failure serious enough to end the agreement",
            with: ["a material breach", "remedy the breach"],
            why: "<i>Material</i> is the whole fight. A day late is a breach; whether it is material is what the lawyers argue about." },
          { term: "remedy period", ar: "مهلة التصحيح",
            meaning: "time given to fix a breach before anything happens",
            with: ["a thirty-day remedy period"],
            why: "Without one, any breach is instantly terminal. With one, most problems get solved." },
          { term: "assignment", ar: "التنازل عن العقد",
            meaning: "passing your side of the agreement to someone else",
            with: ["no assignment without consent"],
            why: "Check whether they can assign to a competitor of yours. Many standard terms allow it." },
          { term: "survival", ar: "البنود الباقية",
            meaning: "which clauses continue after the agreement ends",
            with: ["clauses 9 and 12 survive termination"],
            why: "Confidentiality and liability usually survive. If they do not, the protection ends the day the business does." }
        ],
        explain: { terms: [
          { en: "entire agreement", gloss: "this document replaces everything said before", ar: "الاتفاق الكامل" },
          { en: "order of precedence", gloss: "which document wins when two disagree", ar: "ترتيب الأولوية" },
          { en: "remedy period", gloss: "time to fix a breach before action", ar: "مهلة التصحيح" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the agreement", letter: "B",
        concepts: ["read", "risk"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "Nour's note on the client's standard terms, which arrived after the deal was agreed. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "NOTE — LEVANT HOME STANDARD TERMS",
          blocks: [
            { h: "What matches", lines: [
              "Price, volume target, payment terms and the sixty-day notice are all as we agreed on the telephone.",
              "The liability cap at order value is there, in clause 11, and is worded exactly as ours is." ] },
            { h: "What does not", lines: [
              "Clause 2 sets an order of precedence in which their standard terms rank above any quotation. Ours says the opposite.",
              "Clause 7 allows them to assign the agreement without our consent. That would let a competitor of ours acquire the contract and we could not object.",
              "There is no remedy period anywhere. A single late delivery is drafted as a material breach, which would let them terminate on one failure." ] },
            { h: "What I would do", lines: [
              "I would sign nothing until clause 2 is reversed, because every other disagreement is decided by it.",
              "On clause 7 I would ask for consent not to be unreasonably withheld, which is the normal formula and which they will probably accept.",
              "On the remedy period I would ask for thirty days. If they refuse, I would still sign, because our delivery record is good and the alternative is losing the account." ] }
          ] },
        items: [
          { para: 1, q: "What does the note say about the commercial terms?",
            options: [
              { text: "They match what was agreed on the telephone.", correct: true,
                why: "Four items listed, all as agreed — which is what makes the rest of the note about the legal clauses." },
              { text: "The price is different.", why: "Price is named as matching." },
              { text: "There is no liability cap.", why: "There is, in clause 11, worded as ours." } ] },
          { para: 2, q: "Why does clause 2 matter more than the others?",
            options: [
              { text: "Because it decides which document wins every other disagreement.", correct: true,
                why: "The note says so in the third paragraph, and it is why she would sign nothing until it is reversed." },
              { text: "Because it changes the price.", why: "Price is unaffected." },
              { text: "Because it is first in the contract.", why: "Position is not the reason; function is." } ] },
          { para: 2, q: "What is the risk in clause 7?",
            options: [
              { text: "A competitor could acquire the contract and Orontes could not object.", correct: true,
                why: "The note spells out the consequence rather than just naming the clause." },
              { text: "They could cancel the order.", why: "That is the breach clause, in the next sentence." },
              { text: "They could change the price.", why: "Assignment is about who holds the agreement, not what it says." } ] },
          { para: 2, q: "What is missing from the client's terms?",
            options: [
              { text: "Any period to fix a breach before termination.", correct: true,
                why: "<i>There is no remedy period anywhere</i> — and the consequence is given in the same sentence." },
              { text: "A liability cap.", why: "That is present and matches." },
              { text: "The notice period.", why: "Sixty days, as agreed." } ] },
          { para: 3, q: "Which change does she treat as non-negotiable?",
            options: [
              { text: "Reversing the order of precedence in clause 2.", correct: true,
                why: "<i>I would sign nothing until</i> — the only absolute in the note." },
              { text: "The remedy period.", why: "She says she would sign without it." },
              { text: "The assignment clause.", why: "She would ask, and expects them to accept." } ] },
          { para: 3, q: "What is her reasoning on the remedy period?",
            options: [
              { text: "Worth asking for, but not worth losing the account over.", correct: true,
                why: "She gives the reason: a good delivery record makes the risk small relative to the alternative." },
              { text: "It does not matter at all.", why: "She asks for thirty days." },
              { text: "She would refuse to sign without it.", why: "She says explicitly that she would still sign." } ] }
        ],
        explain: { terms: [
          { en: "to rank above", gloss: "to take priority over", ar: "يعلو على" },
          { en: "not unreasonably withheld", gloss: "consent that cannot be refused without good reason", ar: "لا تُحجب دون سبب معقول" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find the clause that decides it", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that decides what happens.",
        note: { kind: "reader", title: "The deciding clause is often procedural",
                body: "<p>The clause that settles a dispute is rarely the one about the subject of the dispute. It is usually the one about which document, which law, or which timetable applies.</p>" },
        items: [
          { prompt: "Which sentence decides whose terms apply?",
            text: "Our quotation was sent on the second. Their purchase order arrived on the ninth. Their standard terms were attached to it. Clause 2 of those terms provides that they rank above any quotation.",
            answer: "Clause 2 of those terms provides that they rank above any quotation.",
            why: "The dates establish the sequence; the clause establishes the outcome, and only one of those is arguable." },
          { prompt: "Which sentence means one late delivery could end the agreement?",
            text: "Delivery dates are stated in each purchase order. Time is of the essence. There is no remedy period. Any failure to deliver on the stated date is a material breach.",
            answer: "Any failure to deliver on the stated date is a material breach.",
            why: "<i>Time is of the essence</i> points the same way, but this sentence is the one that names the consequence." },
          { prompt: "Which sentence protects you after the contract ends?",
            text: "This agreement runs for twelve months. Either party may terminate on sixty days' notice. Clauses 9 and 12 survive termination. The agreement may be renewed by written agreement.",
            answer: "Clauses 9 and 12 survive termination.",
            why: "Without it, confidentiality and the liability cap would end the day the business did." },
          { prompt: "Which sentence would let a competitor take over the contract?",
            text: "This agreement is personal to the parties. Either party may assign it to any third party. Notice of assignment shall be given in writing. Assignment does not affect accrued rights.",
            answer: "Either party may assign it to any third party.",
            why: "The first sentence sounds like protection and the second cancels it. The last two describe the mechanics of something already permitted." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find the clause that decides it", letter: "B",
        concepts: ["comparison", "cost"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Where the 1,780 a metre actually goes. Read the chart, then answer.",
        note: { kind: "reader", title: "Read the key before the slices",
                body: "<p>A cost breakdown is only useful if you know what is inside each name. <i>Overheads</i> and <i>margin</i> look similar on a chart and are completely different things.</p>" },
        chart: {
          kind: "pie",
          title: "Where 1,780 a metre goes",
          sub: "Cost breakdown on a 6,000-metre run, landed in Amman",
          unit: "%",
          slices: [
            { name: "Raw cotton", v: 38 },
            { name: "Dyeing (subcontracted)", v: 17 },
            { name: "Labour", v: 15 },
            { name: "Freight and insurance", v: 11 },
            { name: "Overheads", v: 10 },
            { name: "Margin", v: 9 }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Element", "Share"],
          rows: [["Raw cotton", 38], ["Dyeing (subcontracted)", 17], ["Labour", 15],
                 ["Freight and insurance", 11], ["Overheads", 10], ["Margin", 9]]
        },
        items: [
          { q: "What is the largest single element?",
            options: [
              { text: "Raw cotton, at 38%.", correct: true, why: "More than twice any other item, which is why a cotton price move reopens the whole agreement." },
              { text: "Labour.", why: "15%, less than half of cotton." },
              { text: "Margin.", why: "9%, the smallest slice on the chart." } ] },
          { q: "A buyer asks for a 10% discount. What would that do to the margin?",
            options: [
              { text: "It would wipe it out and more — margin is only 9%.", correct: true,
                why: "A discount comes entirely out of margin unless a cost falls, and there is less margin than discount." },
              { text: "It would roughly halve it.", why: "That would be a 4 or 5 per cent discount." },
              { text: "It would not affect it.", why: "Nothing else in the chart changes because the buyer asked." } ] },
          { q: "Cotton rises 14%. By how much does the total cost rise, roughly?",
            options: [
              { text: "About 5% — 14% of the 38% share.", correct: true,
                why: "A rise in one element moves the total by its share of it. This is the arithmetic behind Unit 2's eight per cent." },
              { text: "14%.", why: "That would be true only if cotton were the whole cost." },
              { text: "38%.", why: "That is the share, not the rise." } ] },
          { q: "Which element could the company remove entirely by investing?",
            options: [
              { text: "The subcontracted dyeing, at 17%.", correct: true,
                why: "It is the only outsourced item on the chart, and Unit 1 recorded that they have twice considered buying a dye plant." },
              { text: "Raw cotton.", why: "It must be bought from somewhere." },
              { text: "Freight.", why: "Goods have to travel, and the term only decides who pays." } ] },
          { q: "Why does freight appear at all in a price the terms call ex works?",
            options: [
              { text: "Because this chart is for the landed price, as the subtitle says.", correct: true,
                why: "The subtitle is doing the work. The same company's ex works chart would have no freight slice at all." },
              { text: "Because the terms are wrong.", why: "The chart and the terms describe different prices." },
              { text: "Because freight is always included.", why: "Unit 3 is built on it not being." } ] },
          { q: "What does this chart not tell you?",
            options: [
              { text: "Whether 9% is a good margin for this industry.", correct: true,
                why: "It shows the split of one price. Whether that split is healthy needs a comparison the chart does not contain." },
              { text: "The share taken by labour.", why: "15%, stated." },
              { text: "Which element is largest.", why: "Cotton, clearly." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the note actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the note in 1B.",
        carry: "1b",
        items: [
          { stem: "The client's terms match what was agreed on price.", answer: "T", line: 1,
            why: "Price is the first of four items listed as matching." },
          { stem: "The client's terms contain no liability cap.", answer: "F", line: 2,
            why: "Clause 11, worded exactly as ours." },
          { stem: "Nour would sign before clause 2 is changed.", answer: "F", line: 6,
            why: "<i>I would sign nothing until clause 2 is reversed.</i>" },
          { stem: "The client has refused to change clause 7.", answer: "NI", line: null,
            why: "She expects them to accept the usual formula. What they have actually said is not recorded." },
          { stem: "A single late delivery could end the agreement as drafted.", answer: "T", line: 5,
            why: "No remedy period, and one failure drafted as a material breach." },
          { stem: "Orontes has a poor delivery record.", answer: "F", line: 8,
            why: "<i>Our delivery record is good</i> — and it is the reason she would sign without a remedy period." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the note actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "The clause saying which document wins is the order of ___ .", answer: "precedence", given: [0],
            why: "One line, and it decides every later argument." },
          { text: "Time to fix a breach before anything happens is a ___ period.", answer: "remedy", given: [0],
            why: "Without one, any breach is instantly terminal." },
          { text: "Passing your side of a contract to someone else is ___ .", answer: "assignment", given: [0],
            why: "Check whether they can assign to a competitor of yours." },
          { text: "A failure serious enough to end the agreement is a ___ breach.", answer: "material", given: [0],
            why: "<i>Material</i> is the word the argument is about." },
          { text: "Clauses that continue after the end are said to ___ .", answer: "survive", given: [0],
            why: "Confidentiality and liability usually do." },
          { text: "A clause killing earlier promises is the ___ agreement clause.", answer: "entire", given: [0],
            why: "If it matters, it has to be in the document." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the note actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four readers, four decisions. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Faris", detail: "Checks that price, volume and terms all match, and signs." },
          { id: "c2", label: "Hala", detail: "Relies on a promise about exclusivity made on the telephone." },
          { id: "c3", label: "Omar", detail: "Reads a clause saying the agreement is personal to the parties and feels protected." },
          { id: "c4", label: "Nada", detail: "Refuses to sign until every clause she dislikes is changed." }
        ],
        takeaways: [
          { text: "The commercial terms are the easy part.", caseId: "c1",
            why: "All four matched here, and three clauses underneath them did not. Faris has checked the part that was never in doubt." },
          { text: "An entire agreement clause kills what was said on the telephone.", caseId: "c2",
            why: "If it matters, it goes in the document. Hala is relying on a sentence the contract explicitly cancels." },
          { text: "Read the next sentence before you feel protected.", caseId: "c3",
            why: "<i>Personal to the parties</i> sounds absolute, and the sentence after it permits assignment to anyone." },
          { text: "Decide which one clause you will not sign without.", caseId: "c4",
            why: "Nour named exactly one, asked for a second, and conceded the third with a reason. Nada will lose the account over clause ordering." }
        ],
        closer: "<p>Next: asking a procedural question at an office, where the answer you need is usually about which form, which window and which day.</p>" }

    ]
  };
})();
