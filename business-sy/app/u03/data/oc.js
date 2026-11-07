/* Unit 3 · Comparing Suppliers — AT WORK
   Ask for the evidence behind a supplier's claim. */
(function () {
  window.PAGE = {
    id: "u03-oc", unit: "u03", block: "oc", up: "../", tab: "AT WORK",
    objective: "Ask a supplier to back up a claim without sounding as though you doubt them",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "A supplier presents", letter: "A",
        concepts: ["listen", "supplier"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "The Aleppo mill presents to the buying team. Fill in the form as you listen.",
        audio: { track: "u03-pitch", label: "Supplier presentation — Aleppo Weaving",
          lines: [
            { who: "maya", text: "Thank you for seeing us. I will be brief, because I know you have two other mills to see today." },
            { who: "maya", text: "Aleppo Weaving has been running since 2008. We have sixty staff and six looms, and we work almost entirely in cotton sheeting and shirting." },
            { who: "maya", text: "Our quoted price on this tender is 1,725 a metre, ex works. Freight to Amman adds ninety, so landed you are at 1,815." },
            { who: "maya", text: "What I want to talk about is speed. We quoted three weeks, which is the shortest of the three mills you are seeing, and I know that because two of them subcontract their dyeing and we do not." },
            { who: "maya", text: "We have our own dye house on the same site. That is the whole of our advantage and it is worth more than the price difference." },
            { who: "maya", text: "Last year we delivered ninety-four orders. I do not have the late figure in front of me, but it is low." },
            { who: "maya", text: "We have supplied two references with the quotation. I will leave you my direct number as well." } ] },
        title: "Supplier presentation — notes",
        lines: [
          "Running since ___",
          "Staff: ___",
          "Quoted price: 1,725 a metre, ex ___",
          "Landed in Amman: ___ a metre",
          "Quoted lead time: ___ weeks",
          "Orders delivered last year: ___"
        ],
        gaps: [
          { answer: "2008", why: "Given in the first line of the substance, as most supplier presentations do." },
          { answer: "sixty", why: "Sixty staff and six looms. Both figures are worth having, and only one is asked for." },
          { answer: "works", why: "He says it himself, which is to his credit — and then converts it for you." },
          { answer: "1815", why: "1,725 plus 90. He does the arithmetic rather than leaving you to find it." },
          { answer: "three", why: "The claim the whole presentation is built on." },
          { answer: "ninety-four", why: "And then the sentence that should make you sit up: he has the total and not the late figure." }
        ],
        note: { kind: "life", title: "Listen for the number that is missing",
                body: "<p>He gives you five figures and one gap. The gap is the one that matters: ninety-four orders delivered, and no count of how many were late. A speaker who has one half of a ratio usually has the other half too.</p>" },
        explain: { terms: [
          { en: "shirting", gloss: "fabric made for shirts", ar: "قماش قمصان" },
          { en: "on the same site", gloss: "in the same place, not somewhere else", ar: "في الموقع نفسه" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "A supplier presents", letter: "B",
        concepts: ["listen", "evidence"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The questions afterwards. Listen, then answer.",
        speaker: "rana",
        speakerNote: "with Maya Seif of Aleppo Weaving, and Nour",
        audio: { track: "u03-questions", label: "Questions to the supplier",
          lines: [
            { who: "rana", text: "Thank you. Can I start with the figure you did not give us? Ninety-four orders delivered. How many were late?" },
            { who: "maya", text: "I would have to check." },
            { who: "rana", text: "I am not trying to catch you out. I ask every supplier the same question, and the answer I like least is the one I cannot get." },
            { who: "maya", text: "That is fair. From memory it is around eleven. I will confirm it in writing this afternoon." },
            { who: "rana", text: "Eleven out of ninety-four. Thank you. Were they all the same cause?" },
            { who: "maya", text: "Mostly yarn, not dyeing. Which is awkward for me, because I have just told you our dye house is the advantage." },
            { who: "nour", text: "It is still an advantage. It just is not the thing that went wrong." },
            { who: "rana", text: "Second question. You said three weeks is the shortest of the three mills, and that you know this because two of them subcontract. How do you know what the others quoted?" },
            { who: "maya", text: "I do not. I know their dyeing arrangements because the trade is small. I should have said three weeks is short because we dye in house, and left the comparison out of it." },
            { who: "rana", text: "I appreciate that. Third. Your two references — we wrote on the second and telephoned on the seventh, and neither has replied." },
            { who: "maya", text: "I did not know that. I will call them both today and ask them to reply to you, whatever they intend to say." },
            { who: "rana", text: "Whatever they intend to say is the right way to put it." },
            { who: "nour", text: "Can I ask something different? If we placed four thousand metres with you, what else would you be running at the same time?" },
            { who: "maya", text: "Two orders, about three thousand metres between them. We would be at roughly eighty per cent of capacity for those three weeks." },
            { who: "nour", text: "And if one loom stopped?" },
            { who: "maya", text: "Then three weeks becomes four. I would tell you within a day." },
            { who: "rana", text: "That is the most useful thing you have said." },
            { who: "nour", text: "One more. Your quotation is ex works. If we place the order, would you hold the price if freight goes up between now and dispatch?" },
            { who: "maya", text: "Freight is not mine to hold. What I can do is quote you landed instead, and carry that risk myself for the thirty days. The number would be a little higher, because I would have to allow for it." },
            { who: "nour", text: "So we would pay for the certainty." },
            { who: "maya", text: "Yes. Some buyers want that and some would rather take the risk themselves. I would rather you chose than have me choose for you." },
            { who: "rana", text: "Send us both. One ex works and one landed, side by side, with the validity on each." },
            { who: "maya", text: "You will have them tomorrow morning. Thank you for the questions \u2014 I will go back and get the late figure confirmed first." } ] },
        items: [
          { q: "What does Rana ask about first?",
            options: [
              { text: "The figure he did not give — how many were late.", correct: true,
                why: "She noticed the gap during the presentation and opens with it." },
              { text: "The price.", why: "Price never comes up in the questions at all." },
              { text: "The references.", why: "Third, not first." } ] },
          { q: "How does she handle his <i>I would have to check</i>?",
            options: [
              { text: "She explains why she is asking, and he then gives a figure.", correct: true,
                why: "<i>I am not trying to catch you out</i> changes the temperature, and the number arrives immediately afterwards." },
              { text: "She accepts it and moves on.", why: "She does not move on until she has something." },
              { text: "She accuses him of hiding it.", why: "The opposite — she removes the suggestion of an accusation." } ] },
          { q: "What is awkward about the cause of the late deliveries?",
            options: [
              { text: "They were caused by yarn, not by the thing he claimed as his advantage.", correct: true,
                why: "He says so himself, which is why the room believes the rest of what he says." },
              { text: "They were caused by his dye house.", why: "He says the opposite: mostly yarn, not dyeing." },
              { text: "He does not know the cause.", why: "He names it without being pushed." } ] },
          { q: "What does Nour add after that admission?",
            options: [
              { text: "That the dye house is still an advantage, just not the thing that failed.", correct: true,
                why: "She separates two claims he had merged. It is a correction that helps him." },
              { text: "That he has misled them.", why: "Nobody says that." },
              { text: "Nothing — she asks about capacity instead.", why: "That comes later." } ] },
          { q: "What was wrong with his claim about being the shortest of the three?",
            options: [
              { text: "He knew their dyeing arrangements, not their quoted lead times.", correct: true,
                why: "He concedes the distinction himself and restates the claim in the form he could support." },
              { text: "Three weeks was not really his lead time.", why: "Three weeks is not challenged." },
              { text: "He had seen the other quotations.", why: "He says plainly that he had not." } ] },
          { q: "What does he undertake to do about the references?",
            options: [
              { text: "Ask them to reply whatever they intend to say.", correct: true,
                why: "The phrase Rana singles out, because it offers no filtering of the answer." },
              { text: "Supply two different references.", why: "He does not offer to change them." },
              { text: "Explain why they did not reply.", why: "He says he did not know they had not." } ] },
          { q: "Why does Nour ask what else he would be running at the same time?",
            options: [
              { text: "To find out how much spare capacity is behind the three weeks.", correct: true,
                why: "A lead time quoted at eighty per cent utilisation is a different promise from the same lead time at forty." },
              { text: "To find out how big the mill is.", why: "Size was given in the presentation. This is about load." },
              { text: "To compare him with the other mills.", why: "She asks only about his own position." } ] },
          { q: "Why is his answer about the loom the most useful thing he says?",
            options: [
              { text: "He names what would go wrong, by how much, and when he would tell them.", correct: true,
                why: "Three weeks becomes four, and within a day. That is a promise about bad news, which is the only kind worth having." },
              { text: "He guarantees it will not happen.", why: "He does not, and a guarantee would have been worth less." },
              { text: "He offers a discount.", why: "No money is discussed." } ] }
        ],
        explain: { terms: [
          { en: "to catch someone out", gloss: "to trap them in a mistake", ar: "إيقاعه في الخطأ" },
          { en: "in house", gloss: "done by your own staff, not a subcontractor", ar: "داخليًا" },
          { en: "utilisation", gloss: "how much of your capacity is being used", ar: "نسبة التشغيل" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Ask without accusing", letter: "A",
        concepts: ["speak", "evidence"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that kept that from becoming an interrogation. Click each one.",
        note: { kind: "life", title: "Why the framing matters",
                body: "<p>A supplier who feels accused starts defending, and a defending supplier gives you less information, not more. Every phrase below buys honesty by making it safe.</p>" },
        text: "Can I start with the figure you did not give us? I am not trying to catch you out. I ask every supplier the same question, and the answer I like least is the one I cannot get. That is fair. I should have said three weeks is short because we dye in house, and left the comparison out of it. I did not know that. Whatever they intend to say is the right way to put it. And if one loom stopped? That is the most useful thing you have said.",
        phrases: [
          { text: "I am not trying to catch you out.",
            why: "Names the fear directly and removes it. It costs six words and it produced a number he had just refused to give." },
          { text: "I ask every supplier the same question, and the answer I like least is the one I cannot get.",
            why: "Tells him the question is procedure rather than suspicion, and tells him what a non-answer will cost him." },
          { text: "That is fair.",
            why: "His concession, not hers — and the same two words from Unit 2. It appears here in a supplier's mouth, which is where you will most often hear it." },
          { text: "I should have said three weeks is short because we dye in house, and left the comparison out of it.",
            why: "A supplier correcting his own claim. He loses the comparison and keeps his credibility, which is the better trade." },
          { text: "And if one loom stopped?",
            why: "Four words. It asks for the failure case, which is the fastest way to find out whether a promise has anything behind it." },
          { text: "That is the most useful thing you have said.",
            why: "Rewards the answer she wanted, out loud. The next supplier he talks to will get the same answer sooner." }
        ],
        after: "<p>She got a late-delivery ratio, a withdrawn claim, a reference chased and a failure plan — and never once said she doubted him.</p>" },

      { id: "2b", section: 2, sectionTitle: "Ask without accusing", letter: "B",
        concepts: ["evidence", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table of claims and the question that tests each one.",
        caption: "Four claims, and what to ask",
        head: ["What the supplier says", "What to ask", "Why"],
        rows: [
          ["We have a strong record", "How many orders, and how many were ___ ?", "Turns an adjective into a ratio"],
          ["We are the most competitive", "Compared with whom, and at what ___ ?", "A superlative needs a group"],
          ["We usually deliver in three weeks", "How often has it been ___ ?", "<i>Usually</i> was chosen carefully"],
          ["We have plenty of capacity", "What are you running at now, as a ___ ?", "A feeling becomes a figure"]
        ],
        gaps: [
          { answer: "late", why: "Eleven out of ninety-four means something. <i>Strong</i> does not." },
          { answer: "quantity", why: "A price is only competitive at a stated volume, which is why the question has two halves." },
          { answer: "longer", why: "The word <i>usually</i> is an admission in disguise, and this question collects on it." },
          { answer: "percentage", why: "Eighty per cent utilisation and forty per cent utilisation produce the same lead time and completely different risk." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Ask without accusing", letter: "C",
        concepts: ["recall", "evidence"],
        kind: "recap", task: null, n: 0,
        prompt: "Four buyers in meetings. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Lama", detail: "Hears <i>our record is excellent</i> and writes <i>good record</i> in her notes." },
          { id: "c2", label: "Hadi", detail: "Asks a supplier a hard question and is told <i>I would have to check</i>. He moves on." },
          { id: "c3", label: "Joud", detail: "Wants to test a supplier's claim and opens with <i>are you sure about that?</i>" },
          { id: "c4", label: "Nabil", detail: "Accepts a three-week lead time without asking what else the mill is running." }
        ],
        takeaways: [
          { text: "Turn the adjective into a ratio.", caseId: "c1",
            why: "<i>Excellent</i> survives into her notes and then into her recommendation. Eleven out of ninety-four would not have." },
          { text: "Say why you are asking, and ask again.", caseId: "c2",
            why: "<i>I am not trying to catch you out</i> produced the number Hadi gave up on. The non-answer was not a refusal; it was discomfort." },
          { text: "Ask for the evidence, not for reassurance.", caseId: "c3",
            why: "<i>Are you sure?</i> can only be answered <i>yes</i>. It invites a defence and collects no information." },
          { text: "Ask what happens when it goes wrong.", caseId: "c4",
            why: "<i>And if one loom stopped?</i> turned a lead time into a plan, with a figure and a notice period attached." }
        ],
        closer: "<p>Next unit: the order has been placed, and the question becomes where it has got to.</p>" }

    ]
  };
})();
