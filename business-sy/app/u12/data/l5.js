/* Unit 12 · Clients and Proposals — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u12-l5", unit: "u12", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read what a client actually asked for, and read the pie chart that says how it is scored",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the evaluation section", letter: "A",
        concepts: ["read", "comparison"],
        kind: "cards", task: null, n: 0,
        prompt: "Six words from the scoring rules. Say what each means before you turn it over.",
        cards: [
          { term: "compliant", ar: "مطابق للشروط",
            meaning: "meeting every mandatory requirement",
            with: ["a compliant tender", "non-compliant"],
            why: "The word that decides whether anything else you wrote is read. Compliance is a gate, not a score." },
          { term: "evaluate", ar: "يقيّم",
            meaning: "to score against stated criteria",
            with: ["tenders are evaluated", "the evaluation"],
            why: "Different from <i>assess</i> in one respect that matters: an evaluation has published weights, and you can work out where to spend your effort." },
          { term: "criterion", ar: "معيار",
            meaning: "one of the things a tender is scored on",
            with: ["five criteria", "the price criterion"],
            why: "Plural <i>criteria</i>, and writing <i>criterias</i> in a tender is noticed. One criterion, several criteria." },
          { term: "weighting", ar: "وزن نسبي",
            meaning: "how many of the total points a criterion carries",
            with: ["price carries a 40% weighting"],
            why: "The most useful number in any invitation and the one most tenderers skim. It tells you what the client is actually buying." },
          { term: "additional offer", ar: "عرض إضافي",
            meaning: "something offered beyond the requirements",
            with: ["additional offers are scored"],
            why: "Only worth making when the document says it is scored, and here it says what it scores for — reducing the client's own work." },
          { term: "proportionally", ar: "بالتناسب",
            meaning: "in a fixed ratio to something else",
            with: ["scored proportionally"],
            why: "In a price formula this is the difference between losing by a little and losing by nothing. A price two per cent higher loses two per cent of forty points, not the contract." }
        ],
        explain: { terms: [
          { en: "compliant", gloss: "meeting every mandatory requirement", ar: "مطابق للشروط" },
          { en: "weighting", gloss: "how many points a criterion carries", ar: "وزن نسبي" },
          { en: "criteria", gloss: "the things a tender is scored on", ar: "معايير" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the evaluation section", letter: "B",
        concepts: ["read", "evidence"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The evaluation section of the invitation. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "BARADA HOTELS — EVALUATION",
          blocks: [
            { h: "How tenders are evaluated", lines: [
              "Tenders are scored out of one hundred. Price carries forty points, quality twenty-five, lead time fifteen, references ten and additional offers ten.",
              "A tender failing any mandatory requirement is not scored." ] },
            { h: "What the scores mean", lines: [
              "Price is scored against the lowest compliant tender, not against our budget. The lowest price receives forty; others receive proportionally less.",
              "Quality is scored from the sample length submitted with the tender and from the certification supplied.",
              "Lead time is scored against four weeks. A shorter time earns no additional points.",
              "References are scored on whether they are contactable and relevant, not on what they say.",
              "Additional offers are scored on whether they reduce our own work. We do not score offers that cost us time to administer." ] },
            { h: "Two notes", lines: [
              "Questions must be submitted in writing. Every answer is circulated to all tenderers.",
              "We may award to a tender that is not the cheapest. We are not required to explain why." ] }
          ] },
        items: [
          { q: "Where should a tenderer spend most effort?",
            options: [
              { text: "On price and quality, which carry sixty-five of the hundred points.", correct: true,
                why: "The weightings are published precisely so this can be worked out, and most tenderers never do it." },
              { text: "On the additional offers, because that is where you stand out.", why: "Ten points, and only if the offer reduces their work." },
              { text: "Evenly across all five.", why: "Which spends the same effort on ten points as on forty." } ] },
          { q: "You can deliver in three weeks. What is that worth?",
            options: [
              { text: "Nothing more than four weeks.", correct: true,
                why: "Stated outright. A hotel group needs reliability at four weeks, not speed, and the scoring says so." },
              { text: "Full marks on lead time.", why: "Four weeks already earns that." },
              { text: "It depends on the other tenders.", why: "Only the price criterion is relative." } ] },
          { q: "Your price is two per cent above the lowest compliant tender. What happens?",
            options: [
              { text: "You lose a small part of forty points, not the contract.", correct: true,
                why: "<i>Proportionally less.</i> This is the sentence that should stop a panic discount." },
              { text: "You score zero on price.", why: "That would be a lowest-price-wins rule, and this is not one." },
              { text: "You are non-compliant.", why: "Compliance is about requirements, not about being cheapest." } ] },
          { q: "What is the risk in offering a monthly quality report nobody asked for?",
            options: [
              { text: "It may score nothing, because it costs them time to read.", correct: true,
                why: "The scoring rule for additional offers is about their workload, not about generosity." },
              { text: "It is non-compliant.", why: "Additional offers are invited." },
              { text: "It reduces your quality score.", why: "Quality is scored from the sample and the certification only." } ] },
          { q: "A reference gives you a lukewarm review. How much does that cost you?",
            options: [
              { text: "Nothing — references are scored on being contactable and relevant.", correct: true,
                why: "A strange rule until you notice it removes the incentive to supply friendly references rather than real ones." },
              { text: "Up to ten points.", why: "The ten points are for contactability and relevance." },
              { text: "The whole tender.", why: "References are not a mandatory requirement here." } ] },
          { q: "What does the last line tell you about the decision?",
            options: [
              { text: "The cheapest tender may lose, with no explanation owed.", correct: true,
                why: "Which is consistent with a sixty-point weighting on everything other than price." },
              { text: "The cheapest tender always wins.", why: "The opposite of what it says." },
              { text: "The scoring is only advisory.", why: "It is the published method. The last line is about the award, not the scoring." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "What was actually asked for", letter: "A",
        concepts: ["read", "question"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts from client emails. Click the sentence that says what they are actually asking for.",
        note: { kind: "reader", title: "The request is rarely the longest sentence",
                body: "<p>A client email is mostly context. The request is usually short, often at the end, and frequently phrased as a question about something else. Answering the context instead of the request is the commonest way to lose a piece of work you had already won.</p>" },
        items: [
          { prompt: "What are they actually asking for?",
            text: "Thank you for the samples, which arrived on Tuesday. The shade is very close to what we approved last year. Our housekeeping manager has asked about shrinkage after fifty washes. Could you send whatever test data you have on that? We are not in a hurry.",
            answer: "Could you send whatever test data you have on that?",
            why: "One sentence, and it is a request for data rather than for reassurance. The three sentences before it are why the question exists." },
          { prompt: "What are they actually asking for?",
            text: "We have had your tender and the price is workable. The board meets on the eleventh. I would like to be able to tell them the July lead time will not affect the opening in Latakia. Is there any way of confirming that in writing before the eleventh?",
            answer: "Is there any way of confirming that in writing before the eleventh?",
            why: "A document, by a date. <i>The price is workable</i> is encouraging and is not the ask." },
          { prompt: "What are they actually asking for?",
            text: "Our accounts team has queried the minimum order on the pillowcase line. I understand the reason you gave about the dye bath. What we need is something I can forward to them that explains it in two or three lines.",
            answer: "What we need is something I can forward to them that explains it in two or three lines.",
            why: "Not an explanation to him — he already has one. A short forwardable text, which is a different piece of work." },
          { prompt: "What are they actually asking for?",
            text: "I notice the inspection sheet in the last consignment. Nobody here asked for it and I have to say it was useful. Does it come as standard, or was that because of the shade question in March? I ask because I need to know whether to budget for it.",
            answer: "Does it come as standard, or was that because of the shade question in March?",
            why: "A question about scope, dressed as a compliment. His last sentence tells you why the answer matters, and it is not the question." }
        ] },

      { id: "2b", section: 2, sectionTitle: "What was actually asked for", letter: "B",
        concepts: ["comparison", "cost"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "The published weightings. Read the chart, then answer.",
        note: { kind: "reader", title: "A pie chart of weights, not of money",
                body: "<p>Most pie charts divide up a quantity. This one divides up a <em>decision</em>, which is rarer and far more useful: it says where a client's attention is before you have written a word.</p>" },
        chart: {
          kind: "pie",
          title: "How 100 points are awarded",
          sub: "Barada Hotels, bed linen tender. Published in the invitation.",
          unit: "points",
          alt: "Pie chart: price 40 points, quality 25, lead time 15, references 10, additional offers 10",
          slices: [
            { name: "Price", v: 40 },
            { name: "Quality", v: 25 },
            { name: "Lead time", v: 15 },
            { name: "References", v: 10 },
            { name: "Additional offers", v: 10 }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Criterion", "Points"],
          rows: [["Price", 40], ["Quality", 25], ["Lead time", 15], ["References", 10], ["Additional offers", 10]]
        },
        items: [
          { q: "What carries more weight than price?",
            options: [
              { text: "Everything else together, at sixty points.", correct: true,
                why: "The single most important reading of this chart, and it is invisible if you only look at which slice is biggest." },
              { text: "Nothing.", why: "True of any single criterion and false of the four of them together." },
              { text: "Quality.", why: "Twenty-five against forty." } ] },
          { q: "You could cut your price by three per cent or submit a better sample. Which is worth more?",
            options: [
              { text: "The sample, because quality is a quarter of the decision.", correct: true,
                why: "Three per cent of price moves a fraction of forty points. A better sample moves a share of twenty-five." },
              { text: "The price cut, because price is the biggest slice.", why: "Biggest is not the same as most movable. The price score is proportional." },
              { text: "They are equivalent.", why: "Only if you ignore both the weighting and the scoring formula." } ] },
          { q: "What do the two ten-point slices have in common?",
            options: [
              { text: "Both are scored on something other than how good they sound.", correct: true,
                why: "References on contactability, additional offers on whether they save the client work. Both rules are in the text." },
              { text: "Both are optional.", why: "References are required." },
              { text: "Both are about price.", why: "Neither is." } ] },
          { q: "What does the chart not tell you?",
            options: [
              { text: "How each criterion is scored.", correct: true,
                why: "Weights without formulas are half the information. The passage carries the other half, and most readers stop at the picture." },
              { text: "How many points price carries.", why: "Forty, printed in the key." },
              { text: "How many criteria there are.", why: "Five, visible at a glance." } ] },
          { q: "Which slice would you most want to be bigger, as a tenderer with high quality and a mid-range price?",
            options: [
              { text: "Quality — but the weighting is the client’s to set, not yours to influence.", correct: true,
                why: "The honest answer, and the reason to read the weightings before deciding whether to tender at all." },
              { text: "Price.", why: "Which is the slice you compete worst on." },
              { text: "Additional offers, since you can add as many as you like.", why: "Capped at ten points however many you add." } ] },
          { q: "A rival tenders two per cent cheaper and scores twelve on quality. Who is likely ahead?",
            options: [
              { text: "You are, if your quality score is well above twelve.", correct: true,
                why: "Two per cent of price is worth a small fraction of forty. A thirteen-point quality gap is worth far more." },
              { text: "The rival, because price is the biggest criterion.", why: "The size of the criterion is not the size of the gap." },
              { text: "It cannot be worked out.", why: "The weightings and the price formula are both published for exactly this calculation." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the invitation said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the evaluation section in 1B.",
        carry: "1b",
        items: [
          { stem: "A non-compliant tender is scored and then rejected.", answer: "F", line: 2,
            why: "It is not scored at all, which means no part of your work is read." },
          { stem: "Price is scored against the client's budget.", answer: "F", line: 3,
            why: "Against the lowest compliant tender. The distinction decides how a discount behaves." },
          { stem: "A three-week lead time scores higher than four weeks.", answer: "F", line: 5,
            why: "A shorter time earns no additional points, stated outright." },
          { stem: "References are scored on what they say about you.", answer: "F", line: 6,
            why: "On being contactable and relevant. This is the line most tenderers misread." },
          { stem: "The client will tell you your score.", answer: "NI", line: null,
            why: "The section says how scoring works and nothing about feeding it back." },
          { stem: "An answer to one tenderer's question goes to all tenderers.", answer: "T", line: 8,
            why: "Which is why a clever clarifying question is a gift to your competitors." },
          { stem: "The cheapest compliant tender must be awarded the contract.", answer: "F", line: 9,
            why: "They may award to a tender that is not the cheapest, and owe no explanation." },
          { stem: "Quality is worth twenty-five points.", answer: "T", line: 1,
            why: "In the first line, and it is a quarter of the whole decision." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the invitation said", letter: "B",
        concepts: ["sequence", "correct"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the five steps of reading an invitation into the order that saves the most work.",
        steps: [
          { pos: 1, text: "Find the mandatory requirements and check you meet every one.",
            why: "If you fail one, nothing else you do is read. Five minutes, and it decides whether to tender at all." },
          { pos: 2, text: "Find the closing date and time, and the method of submission.",
            why: "The one requirement that cannot be fixed afterwards. Receipt governs, not sending." },
          { pos: 3, text: "Find the weightings and work out where the points are.",
            why: "This is what tells you how to spend the next two days." },
          { pos: 4, text: "Read how each criterion is actually scored.",
            why: "Weights without formulas are half the information. It is where the lead-time trap lives." },
          { pos: 5, text: "Only then write the tender.",
            why: "Everything above changes what you write. Writing first and reading afterwards produces a document about you." }
        ],
        closer: "<p>Most of this is reading, and all of it happens before a word is written. A tenderer who does steps one and two badly can write the best document in the pile and never be scored.</p>" },

      { id: "3c", section: 3, sectionTitle: "Check what the invitation said", letter: "C",
        concepts: ["people", "error"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people and one invitation. Match each takeaway to the person it describes.",
        cases: [
          { id: "c1", label: "Bassel", detail: "Cuts the price by five per cent to be sure of winning on the biggest criterion." },
          { id: "c2", label: "Noura", detail: "Offers a three-week lead time as the centrepiece of the tender." },
          { id: "c3", label: "Imad", detail: "Asks a sharp clarifying question in writing, two weeks before closing." },
          { id: "c4", label: "Dima", detail: "Writes an excellent tender and misses the azo dye certificate." }
        ],
        takeaways: [
          { text: "Price is scored proportionally, so a discount buys a fraction of forty points.",
            caseId: "c1",
            why: "He has given away five per cent of revenue on every metre for a gain he could have calculated from the published formula." },
          { text: "A shorter lead time than asked for earns nothing.",
            caseId: "c2",
            why: "The document says so in one sentence, and she has built her tender on the one criterion that cannot be exceeded." },
          { text: "Every answer is circulated to all tenderers.",
            caseId: "c3",
            why: "His question is good, which is the problem. He has handed his reading of the document to everybody bidding against him." },
          { text: "A tender failing any mandatory requirement is not scored.",
            caseId: "c4",
            why: "Not scored, not ranked, not read. The quality of the document is irrelevant to its fate." }
        ],
        closer: "<p>Three of these four read the document and drew the wrong conclusion. The fourth wrote beautifully and never got as far as the first page of the invitation.</p>" }

    ]
  };
})();
