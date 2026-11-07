/* Unit 7 · Terms and Negotiation — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u07-tw", unit: "u07", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the counter-proposal and the procedure note, and answer for how you negotiate",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "agreement"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Ask for three clause changes without unsettling the deal. Sixty to eighty words.",
        scenarioTitle: "Three changes before we sign",
        scenario: "You are Nour. Their clause 2 puts their terms above the quotation and must be reversed. Clause 7 lets them assign without consent; you want consent not unreasonably withheld. There is no remedy period; you want thirty days but will sign without it. Everything commercial is agreed.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Agreement — three points before signature",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "Everything we agreed on the telephone is …",
          "Three points in the drafting, in order of …",
          "First, clause 2 … . This one we cannot …",
          "Second, clause 7 … . The usual formula is …",
          "Third, … . We would like … , though we would not …"
        ],
        note: { kind: "writer", title: "Rank them, and say you have",
                good: true,
                body: "<p>Three requests of equal weight invite three arguments. Three requests ranked — one immovable, one standard, one preference — usually produce one discussion and two acceptances.</p>" },
        checklist: [
          "Have you confirmed the commercial terms are agreed?",
          "Are the three points ranked, and is the ranking stated?",
          "Is clause 2 marked as the one you cannot sign without?",
          "Is clause 7 framed using the normal formula?",
          "Have you said you would sign without the remedy period?"
        ],
        modelJobs: [
          "Confirms what is settled",
          "Says there are three, and that they are ranked",
          "The immovable one",
          "The standard one",
          "The preference"
        ],
        model: "Dear Ms Darwish,\n\nEverything we agreed on the telephone is reflected correctly in your draft, and I am grateful for how quickly it came.\n\nThere are three points in the drafting, and I have put them in order of importance to us.\n\nFirst, clause 2 ranks your standard terms above the quotation. We cannot sign that, because it reverses what we have just negotiated.\n\nSecond, clause 7 allows assignment without consent. The usual formula is consent not unreasonably withheld, and we would be glad to use it.\n\nThird, there is no remedy period. We would like thirty days, though we would not hold up signature for it.\n\nNour Haddad" },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "approval"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the procedure note for whoever goes to the export office next. Sixty to eighty words.",
        scenarioTitle: "So nobody is sent away again",
        scenario: "Four documents, form 4B filled in at the window, fee at window three with the receipt brought back. Pallet counts must match exactly. A corrected document must be reissued, never amended in pen. Lodge before two for it to count as today. Two working days, Friday excluded.",
        to: "All export staff",
        re: "Certificate of origin — what is actually required",
        placeholder: "",
        minWords: 60,
        frames: [
          "Four documents, and two rules that decide whether they are accepted.",
          "Documents: …",
          "Rule one: …",
          "Rule two: …",
          "Timing: …"
        ],
        note: { kind: "writer", title: "Separate the list from the rules",
                body: "<p>Everyone copies the list and nobody remembers the rules, which is why people are sent away holding a complete set of documents. Give the rules their own heading.</p>" },
        checklist: [
          "Are the four documents listed?",
          "Is the stamped-original requirement clear?",
          "Is the pallet-count rule given its own line?",
          "Is the no-pen-marks rule there?",
          "Is the two o'clock cut-off there, and Friday?"
        ],
        modelJobs: [
          "Says how many documents and how many rules",
          "Lists the documents",
          "Gives the first rule",
          "Gives the second rule",
          "Gives the timing"
        ],
        model: "Four documents, and two rules that decide whether they are accepted.\n\nDocuments: stamped commercial invoice (not a copy), packing list, a copy of the commercial registration, and form 4B, which is filled in at the window and not brought from here. The fee is paid at window three and the receipt comes back with you.\n\nRule one: the pallet count on the packing list must match the invoice exactly. One out and it is refused.\n\nRule two: if either is wrong it must be reissued. A pen correction voids it.\n\nTiming: lodged before two counts as that day. Two working days, and Friday does not count." },

      { id: "2a", section: 2, sectionTitle: "Answer about negotiating", letter: "A",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you approach a negotiation about price?",
        model: "I try never to concede anything without it buying something. If a buyer asks for a lower price, the answer is not yes or no — it is <i>yes, if you commit to this volume</i>. The shape is always the same and using it every time trains the other side to expect it. I also decide in advance which single thing I will not move on, and I say that one plainly. In my experience if you declare exactly one immovable clause, nobody argues about it. If you declare four, everything is negotiable." },

      { id: "2b", section: 2, sectionTitle: "Answer about negotiating", letter: "B",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "What do you look for when you read a contract?",
        model: "Not the commercial terms, usually — those were agreed before the document arrived and they are easy to check. I look for three procedural clauses. Which document wins if two disagree, because that decides every later argument. Whether they can hand the contract to somebody else without asking me, because that could be a competitor. And whether there is any time to fix a problem before it becomes terminal. A contract with no remedy period makes one late delivery enough to end the relationship." },

      { id: "2c", section: 2, sectionTitle: "Answer about negotiating", letter: "C",
        concepts: ["speak", "approval"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you find out a procedure you do not know?",
        model: "I ask the person at the counter, and I ask differently from most people. I say why I am asking — that I have been sent away before — so it is worth their time. Then I read the whole list back and ask whether that is all of it, which is where they add the thing nobody thinks to ask about. And I always ask what happens if something is wrong, because the expensive rules live in the failure case. The last time I did that I learned that a pen correction voids a document." },

      { id: "2d", section: 2, sectionTitle: "Answer about negotiating", letter: "D",
        concepts: ["speak", "comparison"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it better to agree things on the telephone or in writing?",
        model: "Agree on the telephone, confirm in writing, and never rely on the telephone afterwards. Most contracts contain an entire agreement clause, which says the document replaces everything said before it, so a promise made on a call is worth nothing once that is signed. The call is where the trading happens, because you can hear hesitation and you cannot in an email. But if it is not in the document, it does not exist, and I write the summary the same day while both of us still remember it the same way." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "If you commit to six thousand, we will hold the price.", correct: true,
                why: "Present in the <i>if</i> clause, future in the main clause." },
              { text: "If you will commit to six thousand, we will hold the price.", why: "The future is written twice." },
              { text: "If you commit to six thousand, we hold the price will.", why: "Not a possible word order." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "Production starts as soon as the deposit arrives.", correct: true,
                why: "<i>As soon as</i> behaves like <i>if</i>: present inside the clause." },
              { text: "Production starts as soon as the deposit will arrive.", why: "The same error with a different linker." },
              { text: "Production will starts as soon as the deposit arrives.", why: "A modal in front of a finite verb." } ] },
          { q: "<i>Unless</i> means what?", from: "Lesson 3", recall: true,
            options: [
              { text: "If not.", correct: true, why: "Which is why <i>unless if</i> stacks two conditionals on one clause." },
              { text: "Although.", why: "A concession, not a condition." },
              { text: "Until.", why: "A time boundary." } ] },
          { q: "Which clause decides whose terms apply?", from: "Lesson 5", recall: true,
            options: [
              { text: "The order of precedence.", correct: true, why: "One line, and it decides every later disagreement." },
              { text: "The entire agreement clause.", why: "That kills earlier promises, which is a different job." },
              { text: "The liability cap.", why: "That limits what you can be made to pay." } ] },
          { q: "Margin is 9% of the price. What does a 10% discount do?", from: "Lesson 5", recall: true,
            options: [
              { text: "Wipes out the margin and more.", correct: true, why: "A discount comes out of margin unless a cost falls." },
              { text: "Halves the margin.", why: "That would be about four or five per cent." },
              { text: "Nothing — costs absorb it.", why: "Costs do not change because a buyer asked." } ] },
          { q: "What is the single most useful question at a counter?", from: "At Work", recall: true,
            options: [
              { text: "Is that all of it?", correct: true, why: "It is where the clerk adds the thing nobody thinks to ask about." },
              { text: "How long will it take?", why: "Useful, and it does not find the rules that get you refused." },
              { text: "Can you help me?", why: "They are already helping you." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "agreement"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "A buyer asks for ninety-day terms. What is the shape of a good answer?", from: "Lesson 4", recall: true,
            options: [
              { text: "Offer sixty, conditional on something.", correct: true,
                why: "Move halfway and attach a condition. Neither half is safe alone." },
              { text: "Say thirty is standard.", why: "Restates a position instead of answering." },
              { text: "Agree to ninety.", why: "Three months of cash for nothing." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "We cannot offer exclusivity unless if the term is three years.", correct: true,
                why: "<i>Unless</i> already means <i>if not</i>." },
              { text: "We cannot offer exclusivity unless the term is three years.", why: "The corrected version." },
              { text: "We cannot offer exclusivity if the term is one year.", why: "Correct, and it says something slightly different." } ] },
          { q: "What does an entire agreement clause do?", from: "Lesson 5", recall: true,
            options: [
              { text: "Cancels everything promised before the document.", correct: true,
                why: "Which is why a telephone promise has to be written into it." },
              { text: "Makes the agreement longer.", why: "Not what <i>entire</i> refers to." },
              { text: "Covers the whole group of companies.", why: "That would be a different clause altogether." } ] },
          { q: "A clause says the agreement is personal to the parties, and the next permits assignment to anyone. Which wins?", from: "Lesson 5", recall: true,
            options: [
              { text: "The one that permits assignment — read the next sentence.", correct: true,
                why: "The first sounds like protection and the second cancels it." },
              { text: "The first.", why: "It is a description, not a prohibition." },
              { text: "Neither — they cancel out.", why: "Contracts are read together, and the specific permission governs." } ] },
          { q: "<i>The price is held</i> — how does it sound?", from: "Lesson 4", recall: true,
            options: [
              { text: "Joined: prye-siz-held.", correct: true, why: "The <i>s</i> of <i>price</i> runs onto <i>is</i>." },
              { text: "Three separate words.", why: "You will be understood and will miss what is said to you." },
              { text: "The prices held.", why: "A different sentence, told apart only by stress." } ] },
          { q: "How many clauses should you declare immovable?", from: "Teamwork", recall: true,
            options: [
              { text: "One.", correct: true, why: "Declare one and nobody argues; declare four and everything is negotiable." },
              { text: "All of them.", why: "Then none of them is credible." },
              { text: "None.", why: "Then everything is in play, including the one that matters." } ] }
        ] }

    ]
  };
})();
