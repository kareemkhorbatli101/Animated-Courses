/* Unit 3 · Comparing Suppliers — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u03-tw", unit: "u03", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the award and the rejection, and answer for a decision you made",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two letters", letter: "A",
        concepts: ["write", "agreement"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Award the contract. Sixty to eighty words, and everything the winner needs to start.",
        scenarioTitle: "Awarding tender 17/04",
        scenario: "Orontes has won: 4,000 metres of sheeting to spec 17/04-B, landed 1,780 a metre, four weeks. They should start on receipt of your purchase order, which follows today. A 30% deposit applies as this is a first order.",
        to: "Mr Samer Khoury, Orontes Textiles",
        re: "Tender 17/04 — award",
        placeholder: "Dear Mr Khoury,\n\n",
        minWords: 60,
        frames: [
          "I am pleased to tell you that …",
          "The order is for … at … landed.",
          "Our purchase order follows …",
          "Lead time runs from …",
          "The deposit of …"
        ],
        note: { kind: "writer", title: "An award letter is an instruction",
                body: "<p>It is good news and it is also the document that starts the clock. Quantity, specification, price, and what starts the lead time: a winner who has to write back for one of those has lost a day.</p>" },
        checklist: [
          "Does the first line say they have won?",
          "Are quantity and specification both there?",
          "Is the price stated as landed?",
          "Have you said what starts the lead time?",
          "Have you dealt with the deposit?"
        ],
        modelJobs: [
          "Gives the outcome",
          "States quantity and specification",
          "States the price and its basis",
          "Says what starts the lead time",
          "Deals with the deposit"
        ],
        model: "Dear Mr Khoury,\n\nI am pleased to tell you that we are placing tender 17/04 with Orontes Textiles.\n\nThe order is for 4,000 metres of cotton sheeting to specification 17/04-B at 1,780 Syrian pounds a metre, landed in Amman. Our purchase order follows today, and the four-week lead time runs from the date you confirm it, not from this letter.\n\nAs this is our first order with you, a deposit of thirty per cent applies. Lina in our accounts office will arrange it this week.\n\nRana Darwish" },

      { id: "1b", section: 1, sectionTitle: "Write the two letters", letter: "B",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now the harder one: the supplier who answered your questions well and still lost.",
        scenarioTitle: "Telling Aleppo",
        scenario: "Maya Seif of Aleppo Weaving quoted 1,815 landed against 1,780, and three weeks against four. She answered every question honestly, including an eleven-in-ninety-four late figure she had to go and check. Her two references never replied. You want her to quote next time.",
        to: "Ms Maya Seif, Aleppo Weaving",
        re: "Tender 17/04 — outcome",
        placeholder: "Dear Ms Seif,\n\n",
        minWords: 60,
        frames: [
          "Thank you for quoting, and for …",
          "On this occasion …",
          "The decision turned on …",
          "I want to say that …",
          "Please do quote when …"
        ],
        note: { kind: "writer", title: "Say which thing decided it",
                body: "<p>She gave you a late figure she did not have to give. If the letter does not tell her what actually lost her the order, she will assume it was the honesty, and next time you will get a vaguer supplier.</p>" },
        checklist: [
          "Have you given the outcome plainly, near the top?",
          "Have you named the real reason — price and references?",
          "Have you acknowledged the honesty about the late figure?",
          "Have you avoided implying the honesty cost him anything?",
          "Have you invited him back?"
        ],
        modelJobs: [
          "Thanks him and names what he did well",
          "Gives the outcome",
          "Gives the real reasons",
          "Separates the honesty from the decision",
          "Invites him back"
        ],
        model: "Dear Ms Seif,\n\nThank you for quoting against tender 17/04, and for the way you answered our questions.\n\nOn this occasion we have placed the order elsewhere. The decision turned on two things: landed cost, where you were thirty-five a metre higher, and the fact that neither of your references replied to us.\n\nI want to be clear that the late-delivery figure you gave us counted in your favour, not against you. A supplier who goes and checks an awkward number is easier to work with than one who does not have it.\n\nPlease do quote when we tender again in the autumn.\n\nRana Darwish" },

      { id: "2a", section: 2, sectionTitle: "Answer about a decision", letter: "A",
        concepts: ["speak", "comparison"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a decision you made between two or three options at work.",
        model: "We had three mills quoting for the same fabric. The cheapest looked ninety a metre cheaper, but two of the three had quoted ex works, so I added freight at our own rate and compared landed costs instead. Once I did that, the cheapest and the most reliable came to exactly the same figure. After that the decision was easy: same price, four weeks against seven, and three references that actually answered the phone. I recommended the more reliable one and my manager agreed." },

      { id: "2b", section: 2, sectionTitle: "Answer about a decision", letter: "B",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "How do you check whether what a supplier tells you is true?",
        model: "I try to turn whatever they say into a number I can check. If someone says their record is strong, I ask how many orders and how many were late. If they say they are the most competitive, I ask compared with whom and at what quantity. And I say why I am asking, because a supplier who feels accused tells you less, not more. The last thing I ask is what happens when it goes wrong — if one machine stops, how late is it and when do you tell me. That answer is usually the most useful one." },

      { id: "2c", section: 2, sectionTitle: "Answer about a decision", letter: "C",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds. This one asks you to describe something you got wrong.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time you compared two things badly. What did you miss?",
        model: "Early on I compared three quotations on the price at the top of each one, and recommended the cheapest. What I had missed was that two of them were ex works and one was landed, so I was comparing delivery terms rather than prices. My manager spotted it. Since then I convert everything to a landed cost before I look at it, even when it is obvious, and I write the delivery term in my notes next to every figure. It takes two minutes and it has saved me twice." },

      { id: "2d", section: 2, sectionTitle: "Answer about a decision", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Should a buyer always tell a supplier why they lost?",
        model: "I think so, with one condition: the reason has to be true. A supplier told only that they were unsuccessful quotes exactly the same way next time, so you have wasted their work and your own. If I tell them it was the lead time, they may come back with a shorter one. The condition is that I must not invent a softer reason to spare them. If I tell someone their price was fine when it was not, they will trust the rest of what I say less, and I will have to deal with them again." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "comparison"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "Their quotation is cheaper than ours.", correct: true, why: "One comparative marker, not two." },
              { text: "Their quotation is more cheaper than ours.", why: "<i>Cheaper</i> already compares. Adding <i>more</i> marks it twice." },
              { text: "Their quotation is the cheaper than ours.", why: "<i>The</i> belongs to superlatives, and <i>than</i> says this is a comparative." } ] },
          { q: "Three mills quoted. How do you say Orontes came first on delivery?", from: "Lesson 3", recall: true,
            options: [
              { text: "Orontes has the strongest record of the three.", correct: true, why: "Three or more takes a superlative, with <i>the</i> and the group after <i>of</i>." },
              { text: "Orontes has a stronger record of the three.", why: "A comparative needs two things and a <i>than</i>." },
              { text: "Orontes has the most strongest record.", why: "<i>Strongest</i> is already the superlative." } ] },
          { q: "Two quotations: 1,690 ex works and 1,780 landed. Which is cheaper?", from: "Lesson 5", recall: true,
            options: [
              { text: "You cannot tell until freight is added.", correct: true,
                why: "In this unit they turn out to be identical at 1,780. The headline gap of ninety was the freight." },
              { text: "The 1,690 one.", why: "Comparing a price that excludes freight with one that includes it." },
              { text: "The 1,780 one.", why: "Same error in the other direction." } ] },
          { q: "A supplier says <i>we usually deliver in three weeks</i>. What should you ask?", from: "At Work", recall: true,
            options: [
              { text: "How often has it been longer?", correct: true, why: "<i>Usually</i> was chosen carefully and this question collects on it." },
              { text: "Can you do two weeks?", why: "Negotiates a figure you have not established is real." },
              { text: "Is that guaranteed?", why: "Can only be answered yes or no, and tells you nothing about the record." } ] },
          { q: "Two of three mills use the same dye house. What does that mean for risk?", from: "Lesson 5", recall: true,
            options: [
              { text: "Splitting between those two does not spread the risk.", correct: true,
                why: "Two names, one point of failure." },
              { text: "It means they will be cheaper.", why: "Nothing about price follows from it." },
              { text: "It means they are the same company.", why: "They are separate companies with a shared dependency." } ] },
          { q: "Which sound is at the start of <i>verify</i>?", from: "Lesson 4", recall: true,
            options: [
              { text: "/v/ — top teeth on bottom lip, voice on.", correct: true,
                why: "And /f/ in the middle: the same mouth shape, voice off." },
              { text: "/f/ — teeth on lip, no voice.", why: "That is the middle of the word, not the start." },
              { text: "/b/ — both lips together.", why: "<i>Berify</i> is the substitution to watch for." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "What is a landed cost?", from: "Lesson 1", recall: true,
            options: [
              { text: "The price plus freight, duty and insurance.", correct: true, why: "What the goods actually cost you once everything is paid." },
              { text: "The price at the seller's gate.", why: "That is ex works, the thing landed cost is contrasted with." },
              { text: "The price before any discount.", why: "Nothing to do with discounts." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "This is the most best quotation we received.", correct: true, why: "<i>Best</i> is already the superlative of <i>good</i>." },
              { text: "This is the best quotation we received.", why: "The corrected version." },
              { text: "This is a better quotation than the last.", why: "Correct: comparative with <i>than</i>." } ] },
          { q: "A supplier's two references never reply. What have you learned?", from: "Lesson 5", recall: true,
            options: [
              { text: "Nothing about the supplier, and that the references are not evidence.", correct: true,
                why: "Supplied and useful are different. The file looks complete and contains no information." },
              { text: "That the supplier is dishonest.", why: "Referees not replying is usually about the referees." },
              { text: "That the supplier is reliable.", why: "No evidence either way, which is the point." } ] },
          { q: "What is <i>weighting</i>, and when should it be stated?", from: "Lesson 5", recall: true,
            options: [
              { text: "How much each factor counts — stated before you look at the answer.", correct: true,
                why: "A weighting written afterwards always justifies the decision already made." },
              { text: "The weight of the goods, stated on the invoice.", why: "A different word entirely." },
              { text: "How much the cheapest supplier saves you.", why: "Not what the term means." } ] },
          { q: "How do you ask a hard question without sounding accusing?", from: "At Work", recall: true,
            options: [
              { text: "Say why you are asking, then ask it.", correct: true,
                why: "<i>I am not trying to catch you out. I ask every supplier the same question.</i>" },
              { text: "Ask it twice.", why: "Pressure, not reassurance." },
              { text: "Ask someone else instead.", why: "Avoids the supplier who actually has the answer." } ] },
          { q: "Which is correct?", from: "Lesson 3", recall: true,
            options: [
              { text: "Freight costs the same as it does from Aleppo.", correct: true, why: "<i>The same as</i>, never <i>the same than</i>." },
              { text: "Freight costs the same than it does from Aleppo.", why: "<i>Than</i> belongs with comparatives, and <i>the same</i> is not one." },
              { text: "Freight costs as the same as from Aleppo.", why: "One <i>as</i> too many, and in the wrong place." } ] }
        ] }

    ]
  };
})();
