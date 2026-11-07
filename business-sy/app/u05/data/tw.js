/* Unit 5 · Following Up and Payment — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u05-tw", unit: "u05", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the credit note letter and the proposal, and answer for how you chase",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two letters", letter: "A",
        concepts: ["write", "invoice"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "You were wrong. Write the letter that says so. Sixty to eighty words.",
        scenarioTitle: "The two hundred metres were ours",
        scenario: "You checked the delivery note against the loading record. Levant Home are right: 3,800 metres went out, not 4,000. Invoice 4412 overcharged them by 200 metres. You are issuing a credit note. The query was raised on the twentieth and never reached you.",
        to: "Accounts, Levant Home, Amman",
        re: "Invoice 4412 — credit note enclosed",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "Thank you for raising …",
          "I have checked … and you are right: …",
          "I am issuing a credit note for …",
          "Your query was raised on … and did not reach me, which is …",
          "The remaining balance …"
        ],
        note: { kind: "writer", title: "Concede completely or not at all",
                body: "<p>A half-admission — <i>it appears there may have been a discrepancy</i> — costs you the credit you would have earned by saying <i>you are right</i>. The money is the same either way.</p>" },
        checklist: [
          "Have you thanked them for raising it?",
          "Have you said plainly that they were right?",
          "Is the credit note amount and reason stated?",
          "Have you addressed why their query never reached you?",
          "Have you said what is now due?"
        ],
        modelJobs: [
          "Thanks them for raising it",
          "Concedes plainly",
          "States the credit note",
          "Deals with the lost query",
          "States what is now owed"
        ],
        model: "Dear Ms Darwish,\n\nThank you for raising the quantity query on invoice 4412.\n\nI have checked our delivery note against the loading record and you are right: 3,800 metres were dispatched, not 4,000. I am issuing a credit note for the 200 metres, which reduces the invoice to 6,764,000.\n\nYour query was raised on the twentieth and did not reach our accounts office, which is our failure and not yours. I am finding out where it went so that it does not happen again.\n\nThe remaining balance is now due on our usual terms.\n\nLina Al-Masri" },

      { id: "1b", section: 1, sectionTitle: "Write the two letters", letter: "B",
        concepts: ["write", "agreement"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now propose the deposit, framed as capacity booking. Sixty to eighty words.",
        scenarioTitle: "A deposit that is not a credit check",
        scenario: "You are Samer. For orders above 2,000 metres you want a 20% deposit, which reserves production time. The client is a large, reliable, long-standing one. Nothing about their payment record has prompted this. You must not make it sound as though it has.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Reserving capacity on larger orders",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing about how we schedule …",
          "From next month, orders above … will reserve …",
          "This is not about … , and I want to say that plainly.",
          "What it buys you is …",
          "It would apply from …"
        ],
        note: { kind: "writer", title: "Name what it is not",
                body: "<p>The reader's first thought will be <i>do they not trust us?</i> Answer it before they think it. Saying <i>this is not a comment on your account</i> costs one sentence and saves the relationship.</p>" },
        checklist: [
          "Is the threshold and the percentage stated?",
          "Is it framed as reserving capacity rather than as credit?",
          "Have you said explicitly what it is not about?",
          "Have you said what the client gets for it?",
          "Is there a start date?"
        ],
        modelJobs: [
          "Says what the letter is about",
          "States the rule",
          "Says what it is not",
          "Says what the client gains",
          "Gives a start date"
        ],
        model: "Dear Ms Darwish,\n\nI am writing about how we schedule larger runs.\n\nFrom the first of next month, orders above 2,000 metres will reserve production time with a twenty per cent deposit, credited against the final invoice. This is not a comment on your account, and I want to say that plainly — you have paid every invoice in full since we began working together.\n\nWhat it buys you is a fixed place in the schedule rather than a provisional one, which on a large order is worth more than the cash it ties up.\n\nIt would apply to orders placed from the first.\n\nSamer Khoury" },

      { id: "2a", section: 2, sectionTitle: "Answer about chasing", letter: "A",
        concepts: ["speak", "money"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you go about chasing a late payment?",
        model: "I start by assuming it is a process problem rather than a decision, because it usually is. The first reminder is neutral — it names the invoice, offers an innocent explanation, and asks one question. I do not use the word overdue until the second one. If two letters produce nothing, I telephone, because a letter cannot find out that there is a query nobody told us about. That is what happened on our last difficult invoice: two written reminders got silence and one phone call found a two-hundred-metre discrepancy raised three weeks earlier." },

      { id: "2b", section: 2, sectionTitle: "Answer about chasing", letter: "B",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Have you ever had to tell a client they were right and you were wrong?",
        model: "Yes, last month. They said we had invoiced two hundred metres more than we delivered, and I checked the delivery note against the loading record and they were right. I wrote the same day and said so without hedging, because a half-admission would have cost me the credit I got for conceding properly and the money would have been the same. I also told them their query had been raised three weeks earlier and had never reached me, which was our failure. They paid the rest that week." },

      { id: "2c", section: 2, sectionTitle: "Answer about chasing", letter: "C",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds. This one is about meetings.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you put an idea to a group of colleagues?",
        model: "As a question, usually — <i>could we</i> or <i>what if we</i> — because an idea offered as a question can be turned down without anyone having lost an argument. I try to name the obvious weakness in my own idea before somebody else does, which costs a clause and buys more credibility than the idea itself. And if somebody else has a better one, I say so and say why. Backing another person's suggestion is rarer than making your own, and in a meeting it is worth more." },

      { id: "2d", section: 2, sectionTitle: "Answer about chasing", letter: "D",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it ever worth losing a customer over a late payment?",
        model: "Rarely over one invoice, and sometimes over a pattern. One late payment is almost always a process failure somewhere, and the cost of finding out is a phone call. A client who is consistently sixty days against thirty-day terms is different — they are using us as a bank, and they have not asked. What I would do is say that out loud and agree new terms, rather than chase every invoice forever. Losing them should be the end of a conversation, not the result of never having one." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "The invoice was issued on the twelfth.", correct: true, why: "A closed date forces the simple past." },
              { text: "The invoice has been issued on the twelfth.", why: "A date and a present perfect cannot share a clause." },
              { text: "The invoice has issued on the twelfth.", why: "Two problems: the date, and an active verb where a passive is needed." } ] },
          { q: "You expect the answer to be no. Which word?", from: "Lesson 3", recall: true,
            options: [
              { text: "Has it arrived yet?", correct: true, why: "<i>Yet</i> at the end, carrying a mild expectation of no." },
              { text: "Has it arrived already?", why: "<i>Already</i> expects yes, and carries surprise." },
              { text: "Has it ever arrived?", why: "Asks about any time at all, which is a different question." } ] },
          { q: "Which word belongs in a first reminder?", from: "Lesson 1", recall: true,
            options: [
              { text: "outstanding", correct: true, why: "Says the money has not come and nothing about whose fault it is." },
              { text: "overdue", why: "Accurate, and it starts the message with a fault. Save it for the second reminder." },
              { text: "unpaid", why: "Fine in your own records, blunt in a letter." } ] },
          { q: "A payment arrives with no remittance advice. What is the consequence?", from: "Lesson 1", recall: true,
            options: [
              { text: "It cannot be allocated, so the invoice stays open.", correct: true,
                why: "Money received and an invoice still showing unpaid, at the same time." },
              { text: "The payment is returned.", why: "It sits on the account." },
              { text: "Nothing — it is matched automatically.", why: "There is nothing to match it with." } ] },
          { q: "Larger invoices take longer to be paid. What does a scatter plot show?", from: "Lesson 5", recall: true,
            options: [
              { text: "That they move together, not that one causes the other.", correct: true,
                why: "Larger invoices may go to clients with longer approval chains." },
              { text: "That size causes delay.", why: "No scatter can show causation on its own." },
              { text: "That splitting invoices would speed payment.", why: "A decision built on a cause the chart never established." } ] },
          { q: "What does <i>I'd rather write</i> mean?", from: "Lesson 4", recall: true,
            options: [
              { text: "I would prefer to write.", correct: true, why: "<i>I'd</i> is <i>I would</i>, and <i>would rather</i> is the preference structure from Unit 2." },
              { text: "I had written.", why: "<i>I'd</i> can be <i>I had</i>, but not in front of <i>rather</i>." },
              { text: "I write.", why: "Dropping the contraction removes the preference altogether." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "people"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "An accounts clerk says <i>it is with our manager for approval</i>. What do you ask?", from: "Lesson 4", recall: true,
            options: [
              { text: "Roughly how long does that usually take?", correct: true,
                why: "Turns a stage into a date, and asks something they can actually answer." },
              { text: "Can you hurry them up?", why: "Asks them to pressure their own manager for you." },
              { text: "When will it be paid?", why: "They have just said they do not control that." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "They have already paid yet two of the three.", correct: true,
                why: "<i>Already</i> says it happened; <i>yet</i> says it has not. They cannot share a clause." },
              { text: "They have already paid two of the three.", why: "The corrected version." },
              { text: "They have not paid two of the three yet.", why: "Correct — <i>yet</i> with a negative." } ] },
          { q: "A rising DSO with nothing past ninety days usually means what?", from: "Lesson 5", recall: true,
            options: [
              { text: "More business, not worse payment behaviour.", correct: true,
                why: "Larger invoices raise the average without anybody changing how they pay." },
              { text: "Clients are paying worse.", why: "The ageing buckets would show it if they were." },
              { text: "A bad debt is coming.", why: "Nothing is old and no provision is held." } ] },
          { q: "What is concentration risk?", from: "Lesson 5", recall: true,
            options: [
              { text: "Too much of what you are owed sitting with too few clients.", correct: true,
                why: "Invisible to an ageing report, which is why it has to be reported separately." },
              { text: "Invoices clustered at the end of the month.", why: "Not what the term means." },
              { text: "A high DSO.", why: "A different measure entirely, and the one the note argues is less important." } ] },
          { q: "How do you put an idea to a group so it is easy to reject?", from: "At Work", recall: true,
            options: [
              { text: "As a question — <i>could we</i> or <i>what if we</i>.", correct: true,
                why: "A question can be declined. A conclusion has to be defeated." },
              { text: "As a firm recommendation.", why: "Forces the room into agreeing or fighting." },
              { text: "With an apology in front of it.", why: "The thing Nour tells Fadi to stop doing." } ] },
          { q: "A colleague junior to you has a better idea than yours. What is worth doing?", from: "At Work", recall: true,
            options: [
              { text: "Say so out loud, and say why.", correct: true,
                why: "<i>Actually that one is better than mine</i> — four words that kept the idea alive long enough to be adopted." },
              { text: "Say nothing and let it stand or fall.", why: "In most rooms it falls, and the next one is never offered." },
              { text: "Adopt it as your own later.", why: "Works once, and the person stops bringing you ideas." } ] }
        ] }

    ]
  };
})();
