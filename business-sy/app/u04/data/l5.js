/* Unit 4 · Order Status and Progress — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u04-l5", unit: "u04", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a shipping file and a process diagram, and find where the days actually go",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read a shipping file", letter: "A",
        concepts: ["read", "delivery"],
        kind: "cards", task: null, n: 0,
        prompt: "Six phrases from the file. Say what each means before you turn it over.",
        cards: [
          { term: "lead time variance", ar: "انحراف مدة التوريد",
            meaning: "the gap between the lead time quoted and the one achieved",
            with: ["average variance", "variance of four days"],
            why: "A supplier with a four-week lead time and a six-day variance is really a five-week supplier." },
          { term: "dwell time", ar: "مدة الانتظار",
            meaning: "how long goods sit somewhere without moving",
            with: ["dwell time at the border", "reduce dwell time"],
            why: "The most invisible delay in any chain, because nobody is working on the goods and nobody is reporting on them." },
          { term: "demurrage", ar: "غرامة التأخير",
            meaning: "a charge for keeping a container or vehicle longer than agreed",
            with: ["incur demurrage", "demurrage charges"],
            why: "The cost of dwell time, charged by whoever owns the box. It accrues daily and it is nobody's job until the invoice arrives." },
          { term: "short shipment", ar: "نقص في الشحنة",
            meaning: "fewer goods arrived than the paperwork says",
            with: ["a short shipment", "shipped short by two pallets"],
            why: "Different from damage and handled differently. Record the count on the delivery note, not in an email afterwards." },
          { term: "to expedite", ar: "تسريع",
            meaning: "to make something happen faster than the normal process",
            with: ["expedite the clearance", "an expedited shipment"],
            why: "Usually costs money and always costs goodwill, so it is worth asking what it actually buys in days before agreeing to it." },
          { term: "chain of custody", ar: "سلسلة العهدة",
            meaning: "the record of who held the goods at each stage",
            with: ["break the chain of custody", "document the chain"],
            why: "When something is missing, the chain tells you between which two signatures it went missing." }
        ],
        explain: { terms: [
          { en: "dwell time", gloss: "time goods spend not moving", ar: "مدة الانتظار" },
          { en: "demurrage", gloss: "a daily charge for holding a container too long", ar: "غرامة التأخير" },
          { en: "to expedite", gloss: "to speed something up, usually for a fee", ar: "تسريع" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read a shipping file", letter: "B",
        concepts: ["read", "sequence"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The file note written after order 4412 arrived late. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "ORDER 4412 — FILE NOTE",
          blocks: [
            { h: "What was promised", lines: [
              "The order was confirmed on 2 February with a four-week lead time, giving a dispatch date of 2 March.",
              "The goods were dispatched on 6 March and reached the client's warehouse in Amman on 13 March." ] },
            { h: "Where the days went", lines: [
              "Four days were lost in production, waiting for yarn from the dye house.",
              "The consignment then spent four days at the border. Two of those were a public holiday; the other two were because the commercial invoice showed eleven pallets and the packing list showed twelve.",
              "Transport itself took two days, which is normal and was never the problem." ] },
            { h: "What it cost, and what to change", lines: [
              "The carrier charged two days of demurrage, which we have absorbed rather than passed on.",
              "The client was told on 4 March, two days after the promised dispatch date had already passed.",
              "Two changes follow. The invoice and the packing list will be checked against each other by a second person before any consignment leaves. And the client will be told the day a date slips, not the day we are sure of the new one." ] }
          ] },
        items: [
          { para: 1, q: "By how many days was dispatch late?",
            options: [
              { text: "Four.", correct: true, why: "2 March promised, 6 March actual. The arithmetic is left to the reader throughout this note." },
              { text: "Eleven.", why: "That is confirmation to arrival, which was never the promise." },
              { text: "Seven.", why: "That is dispatch to arrival." } ] },
          { para: 2, q: "What caused the longer of the two border delays?",
            options: [
              { text: "The invoice and the packing list disagreed about the pallet count.", correct: true,
                why: "Two of the four days. The other two were a holiday, which nobody could have prevented." },
              { text: "A public holiday.", why: "Two days, and the note treats it as unavoidable rather than as the cause." },
              { text: "An inspection.", why: "No inspection is mentioned." } ] },
          { para: 2, q: "What does the note say about the transport itself?",
            options: [
              { text: "It took the normal two days and was not a problem.", correct: true,
                why: "The note rules it out explicitly, which is what stops the reader blaming the carrier." },
              { text: "It took four days.", why: "Four days was production, and four days was the border." },
              { text: "It caused the demurrage.", why: "Demurrage comes from waiting, not from moving." } ] },
          { para: 3, q: "Who paid the demurrage?",
            options: [
              { text: "Orontes absorbed it.", correct: true,
                why: "<i>Absorbed rather than passed on</i> — a decision, stated as one." },
              { text: "The client.", why: "The note says the opposite." },
              { text: "The carrier.", why: "The carrier charged it." } ] },
          { para: 3, q: "What was wrong with when the client was told?",
            options: [
              { text: "They were told after the promised date had already gone past.", correct: true,
                why: "4 March, against a promised dispatch of 2 March. The client found out from the calendar." },
              { text: "They were told too early.", why: "The note's complaint is the opposite." },
              { text: "They were never told.", why: "They were told, on 4 March." } ] },
          { para: 3, q: "What is the second change the note commits to?",
            options: [
              { text: "Telling the client the day a date slips, not when the new one is certain.", correct: true,
                why: "The harder of the two changes, because it means delivering bad news while it is still vague." },
              { text: "Checking the paperwork twice.", why: "That is the first change." },
              { text: "Changing carrier.", why: "The carrier is specifically cleared of blame." } ] }
        ],
        explain: { terms: [
          { en: "to absorb a cost", gloss: "to pay it yourself rather than pass it on", ar: "تحمّل التكلفة" },
          { en: "to pass on a cost", gloss: "to charge it to someone else", ar: "تحميل التكلفة للآخر" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Find where the days go", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the one sentence that identifies the avoidable delay.",
        note: { kind: "reader", title: "Avoidable and unavoidable",
                body: "<p>Every delay report mixes the two. A public holiday is not a failure; a paperwork mismatch is. Separating them is what turns a complaint into a change.</p>" },
        items: [
          { prompt: "Which sentence names the delay that could have been prevented?",
            text: "The consignment reached the border on 8 March. Two days were lost to a public holiday. The invoice showed eleven pallets and the packing list showed twelve, which took a further two days to resolve. The goods cleared on 12 March.",
            answer: "The invoice showed eleven pallets and the packing list showed twelve, which took a further two days to resolve.",
            why: "A holiday is a fact about the calendar. A document that contradicts another document is a fact about us." },
          { prompt: "Which sentence shows the client was told too late?",
            text: "The promised dispatch date was 2 March. Production finished on 5 March. The client was informed on 4 March. The goods were dispatched on 6 March.",
            answer: "The client was informed on 4 March.",
            why: "Two days after the promise had already failed. The dates around it are what make the sentence damning." },
          { prompt: "Which sentence rules out the carrier?",
            text: "The carrier collected on 6 March. Transport took two days, which is normal for this route. Demurrage of two days was charged at the border. The consignment arrived on 13 March.",
            answer: "Transport took two days, which is normal for this route.",
            why: "It establishes a baseline and shows this leg met it. The demurrage sentence is about waiting, not carrying." },
          { prompt: "Which sentence commits to a change rather than describing the past?",
            text: "The pallet counts did not match. This has happened twice this year. It cost two days at the border. The invoice and the packing list will be checked against each other by a second person before any consignment leaves.",
            answer: "The invoice and the packing list will be checked against each other by a second person before any consignment leaves.",
            why: "The only sentence in the future tense, and the only one that would change anything." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Find where the days go", letter: "B",
        concepts: ["sequence", "deadline"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "The order-to-delivery process, drawn. Read it, then answer.",
        note: { kind: "reader", title: "A flow shows order, not duration",
                body: "<p>The boxes are the same size whatever the stage takes. The diagram tells you what must happen before what; it cannot tell you where the time goes. That is what the file note is for.</p>" },
        chart: {
          kind: "flow",
          title: "Order to delivery, export consignment",
          sub: "Six stages. The diagram shows their order, not how long any of them takes.",
          steps: [
            { label: "Order confirmed in writing" },
            { label: "Deposit received" },
            { label: "Production" },
            { label: "Packed, loaded, bill of lading raised" },
            { label: "Customs clearance" },
            { label: "Delivery note signed" }
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "Which stage starts the lead time?",
            options: [
              { text: "Order confirmed in writing.", correct: true,
                why: "The first box, and the Orontes terms say so explicitly: from confirmation, not from enquiry." },
              { text: "Deposit received.", why: "That gates production, not the lead time." },
              { text: "Production.", why: "By then the clock has already been running." } ] },
          { q: "A client pays their deposit a week late. What does the diagram predict?",
            options: [
              { text: "Everything after it moves by a week.", correct: true,
                why: "Each stage can only start when the one before has finished. That is the whole content of a flow diagram." },
              { text: "Nothing changes.", why: "Production cannot start before the deposit." },
              { text: "Only customs is affected.", why: "Customs is affected, and so is everything between." } ] },
          { q: "Where in this chain does demurrage accrue?",
            options: [
              { text: "At customs clearance, while the goods wait.", correct: true,
                why: "Demurrage is the cost of not moving, and the border is where goods stop." },
              { text: "During production.", why: "Nothing is hired and waiting at that stage." },
              { text: "At order confirmation.", why: "No goods exist yet." } ] },
          { q: "What can this diagram NOT tell you?",
            options: [
              { text: "How many days each stage takes.", correct: true,
                why: "The note says so in its own subtitle, which is itself worth noticing." },
              { text: "What happens before customs.", why: "That is exactly what it shows." },
              { text: "Whether the bill of lading comes before clearance.", why: "It does, and the diagram shows it." } ] },
          { q: "On order 4412 the yarn was late. Which box does that sit in?",
            options: [
              { text: "Production.", correct: true, why: "Four of the eleven lost days. The yarn is an input to production, not a separate stage." },
              { text: "Packed and loaded.", why: "Nothing could be packed until production finished." },
              { text: "Customs clearance.", why: "That was the other four days, for a different reason." } ] },
          { q: "What would the two changes in the file note affect?",
            options: [
              { text: "The loading stage and the point where the client is told.", correct: true,
                why: "The paperwork check happens before the consignment leaves, and telling the client is not a stage on this diagram at all — which is part of why it was forgotten." },
              { text: "Production.", why: "Neither change touches the workshop." },
              { text: "Nothing on this diagram.", why: "The paperwork check sits squarely in the fourth box." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the file actually said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the file note in 1B.",
        carry: "1b",
        items: [
          { stem: "The goods were dispatched four days after the promised date.", answer: "T", line: 2,
            why: "2 March promised, 6 March actual." },
          { stem: "The carrier was at fault for part of the delay.", answer: "F", line: 5,
            why: "<i>Transport itself took two days, which is normal and was never the problem.</i>" },
          { stem: "The client asked for compensation.", answer: "NI", line: null,
            why: "The note records that demurrage was absorbed. Whether the client asked for anything is never mentioned." },
          { stem: "A public holiday accounted for all of the border delay.", answer: "F", line: 4,
            why: "Two of the four days. The other two were the pallet count." },
          { stem: "The pallet mismatch had happened before.", answer: "NI", line: null,
            why: "The file note does not say. One of the extracts in 2A says it happened twice this year, but that is a different document." },
          { stem: "In future the client will be told before the new date is known.", answer: "T", line: 8,
            why: "<i>The day a date slips, not the day we are sure of the new one.</i>" }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the file actually said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "Goods sitting at a border are accruing ___ time.", answer: "dwell", given: [0],
            why: "Time spent not moving." },
          { text: "The carrier charged two days of ___ .", answer: "demurrage", given: [0],
            why: "The daily cost of holding a vehicle or container too long." },
          { text: "Two pallets missing is a short ___ .", answer: "shipment", given: [0],
            why: "Fewer goods than the paperwork says — not the same as damage." },
          { text: "We paid a fee to ___ the clearance.", answer: "expedite", given: [0],
            why: "To make something happen faster than the normal process." },
          { text: "The signed notes together are the chain of ___ .", answer: "custody", given: [0],
            why: "The record of who held the goods at each stage." },
          { text: "Quoted four weeks, achieved five: a lead time ___ of a week.", answer: "variance", given: [0],
            why: "The gap between what was promised and what happened." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the file actually said", letter: "C",
        concepts: ["recall", "risk"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people, four readings. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Salma", detail: "Reports that an order was eleven days late, without saying where the days went." },
          { id: "c2", label: "Tarek", detail: "Waits until he knows the new date before telling the client the old one has gone." },
          { id: "c3", label: "Hana", detail: "Signs a delivery note and then emails to say two pallets were missing." },
          { id: "c4", label: "Majd", detail: "Reads a flow diagram and concludes that customs is the longest stage." }
        ],
        takeaways: [
          { text: "Split the delay into avoidable and unavoidable.", caseId: "c1",
            why: "Eleven days is a complaint. Four production, four border of which two were a holiday, two transport — that is a list you can act on." },
          { text: "Tell them the day it slips, not the day you are sure.", caseId: "c2",
            why: "The client otherwise finds out from their own calendar, and then learns that silence from you means bad news." },
          { text: "Write it on the note before you sign it.", caseId: "c3",
            why: "A clean signature says everything arrived. An email afterwards is one person's word against a document." },
          { text: "A flow shows order, not duration.", caseId: "c4",
            why: "Every box is the same size. Majd has read a claim about time off a diagram that contains none." }
        ],
        closer: "<p>Next: asking for help on all of this without it sounding like an admission of failure.</p>" }

    ]
  };
})();
