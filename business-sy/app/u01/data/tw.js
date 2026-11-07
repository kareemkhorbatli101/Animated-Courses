/* Unit 1 · Introducing the Business — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u01-tw", unit: "u01", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the two emails this unit has been building towards, and answer questions about your own work",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two emails", letter: "A",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Bad news with a plan attached. Nour's rule from the briefing: being late and having a plan are two different emails, and you are writing the second one.",
        scenarioTitle: "Tell the client before she finds out",
        scenario: "You are Samer. The dyer's tank is down, so the Amman order will dispatch on Monday rather than the fourteenth — four days late. Fadi will know on Thursday morning whether a part delivery is possible. Rana Darwish does not know yet.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Order 4417 — revised dispatch date",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing about order 4417, which …",
          "Our dyer has … , so the dispatch date moves to …",
          "We are … to limit the delay.",
          "I will confirm on Thursday whether …",
          "I am sorry for …"
        ],
        note: { kind: "writer", title: "The order of the four things",
                body: "<p>Name the order. Say what changed and when. Say what you are doing. Say when you will know more. The apology can go first or last; the facts cannot move.</p>" },
        checklist: [
          "Is the order number in the first line?",
          "Have you given the new date, not just said 'delayed'?",
          "Have you said what is being done about it?",
          "Have you said when she will hear from you again?",
          "Have you avoided promising the part delivery before Fadi has seen the yarn?"
        ],
        modelJobs: [
          "Names the order",
          "Says what changed, and the new date",
          "Says what is being done about it",
          "Says when the next news comes",
          "Apologises"
        ],
        model: "Dear Ms Darwish,\n\nI am writing about order 4417, the 2,000 metres of medium weight in dark blue.\n\nOur dyeing subcontractor has had to stop for maintenance this week. As a result the dispatch date moves from the fourteenth to Monday the eighteenth. We have moved the order to the front of the queue and added staff on Thursday to limit the delay.\n\nI will confirm on Thursday morning whether we can send part of the order earlier. I am sorry for the change, and I wanted you to hear it from us rather than from the delivery.\n\nSamer Khoury",
        explain: { terms: [
          { en: "revised", gloss: "changed from what was agreed before", ar: "مُعدَّل" },
          { en: "limit the delay", gloss: "make the delay as short as possible", ar: "تقليص التأخير" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Write the two emails", letter: "B",
        concepts: ["write", "cost"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "The opposite kind of email: a first quotation to someone who has just visited.",
        scenarioTitle: "After the visit",
        scenario: "The buyer who visited on Thursday has asked for a price on 1,200 metres of the light weight. The price is 1,650 a metre and holds for thirty days. Lead time is four weeks. You may offer a free sample.",
        to: "Ms Hiba Nasser, Cedar Linens, Beirut",
        re: "Quotation — light weight cotton, 1,200 m",
        placeholder: "Dear Ms Nasser,\n\n",
        minWords: 60,
        frames: [
          "Thank you for visiting …",
          "I am pleased to quote …",
          "This price holds for …",
          "Our lead time is …",
          "I look forward to …"
        ],
        note: { kind: "writer", title: "A quotation is a promise with an expiry date",
                body: "<p>Three numbers make a quotation: the price, how long it holds, and the lead time. Leave one out and the reader has to write back — which is a week lost on both sides.</p>" },
        checklist: [
          "Is the price there, per metre?",
          "Have you said how long the price holds?",
          "Is the lead time there?",
          "Have you referred to the visit, so she knows who you are?",
          "Is there a sign-off with your name?"
        ],
        modelJobs: [
          "Refers to the visit",
          "Gives the price",
          "Says how long the price holds",
          "Gives the lead time",
          "Closes and invites a reply"
        ],
        model: "Dear Ms Nasser,\n\nThank you for visiting the workshop on Thursday. It was a pleasure to show you the finishing room.\n\nI am pleased to quote 1,650 Syrian pounds a metre for 1,200 metres of the light weight. This price holds for thirty days from today. Our lead time is four weeks from the order date.\n\nIf it would help, I can send a sample of the exact weight at no charge.\n\nI look forward to hearing from you.\n\nSamer Khoury" },

      { id: "2a", section: 2, sectionTitle: "Answer about your own work", letter: "A",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The first thing any examiner, interviewer or new client asks. Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about the company you work for. What does it make, and who does it sell to?",
        model: "I work for a textile firm near Hama. We weave and finish cotton fabric, mostly for home textiles — sheeting and curtain fabric. We are about forty people in one workshop, with a small sales office in Damascus. A little over half of what we make is sold inside the country, to wholesalers in Damascus and Aleppo, and the rest is exported, almost all of it to Jordan. I work on the export side, so I deal with the buyers there." },

      { id: "2b", section: 2, sectionTitle: "Answer about your own work", letter: "B",
        concepts: ["speak", "sequence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Now a question about process rather than facts. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "What happens between a client placing an order and the goods arriving?",
        model: "First we confirm the order in writing — the quantity, the price and the date — because an order is not an order until those three are agreed. Then the yarn goes to our dyer, who is a subcontractor, and that is usually the slowest step. When it comes back we weave and finish it, which takes a few days. The warehouse makes it up into pallets, and a courier takes it from the border. We raise the invoice on the day we dispatch, and the client pays thirty days from that date." },

      { id: "2c", section: 2, sectionTitle: "Answer about your own work", letter: "C",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "A harder one: it asks you to talk about something going wrong. About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time something was delayed. What did you do?",
        model: "Last month our dyer had to stop for maintenance, which put a Jordanian order four days late. I told the client the same day rather than waiting, because if she hears it from us she can plan, and if she hears it from the delivery she cannot. I gave her the new date and said what we were doing about it — we moved the order to the front of the queue and put extra staff on. I also told her when I would know more, and I kept to that. She was not pleased, but she was not surprised either." },

      { id: "2d", section: 2, sectionTitle: "Answer about your own work", letter: "D",
        concepts: ["speak", "cost"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion, not a fact. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it better to be the cheapest supplier or the most reliable one? Why?",
        model: "I think reliable, in our market. A cheap supplier who is two weeks late costs the buyer more than the discount, because they have shops waiting for the fabric. We are not the cheapest and we say so. What we promise is that the date we give is the date, and if it changes we tell the buyer before they ask. That is why our clients come back, and a client who comes back is worth more than one good price. But I would say the price still has to be close. Reliable and expensive is not a business either." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "word"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back. Six from this unit.",
        items: [
          { q: "A company sells you raw cotton. What is it to you?", from: "Lesson 1",
            recall: true,
            options: [
              { text: "A supplier.", correct: true, why: "It sells to you. A client is the one who buys from you." },
              { text: "A client.", why: "The other direction — the commonest mix-up in a first business email." },
              { text: "A wholesaler.", why: "A wholesaler buys from a maker and sells on to shops. It is a kind of client, not a supplier." } ] },
          { q: "What three things must be agreed before an enquiry becomes an order?", from: "Lesson 1",
            recall: true,
            options: [
              { text: "Quantity, price and date.", correct: true, why: "Miss one and it is still a conversation." },
              { text: "Price, colour and address.", why: "Colour and address matter, but neither turns an enquiry into an order." },
              { text: "Quantity, colour and weight.", why: "A specification, not a commitment. No price and no date." } ] },
          { q: "Capacity is 9,000 metres a week and output was 6,400. What does that tell you?", from: "Lesson 5",
            recall: true,
            options: [
              { text: "The workshop could have made more than it did.", correct: true,
                why: "Capacity is what you could make; output is what you did. The gap is spare capacity." },
              { text: "The workshop made more than it should have.", why: "The figures are the other way round." },
              { text: "The workshop was at full capacity.", why: "It would have to reach 9,000 for that." } ] },
          { q: "Which sentence is right?", from: "Lesson 3",
            recall: true,
            options: [
              { text: "Did they send the sample last week?", correct: true,
                why: "<i>Did</i> carries the past, so the main verb goes back to its base form." },
              { text: "Did they sent the sample last week?", why: "The past is in the sentence twice." },
              { text: "Do they sent the sample last week?", why: "Present auxiliary with a past time expression, and a past main verb as well." } ] },
          { q: "An invoice is dated the 22nd and the terms are thirty days. When is payment due?", from: "Lesson 4",
            recall: true,
            options: [
              { text: "Thirty days from the 22nd.", correct: true,
                why: "The invoice date starts the clock — not the order date and not the delivery date." },
              { text: "Thirty days from delivery.", why: "A common assumption, and the one Lina corrects in the briefing." },
              { text: "On the 22nd.", why: "That is when the clock starts, not when it stops." } ] },
          { q: "Which of these is the odd one out: dispatch, ship, export, disclose?", from: "Lesson 1",
            recall: true,
            options: [
              { text: "disclose", correct: true, why: "To disclose is to tell. The other three move goods." },
              { text: "export", why: "Goods leaving the country — physical movement, like the other two." },
              { text: "dispatch", why: "To send goods out. The most ordinary of the three." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more. These are the ones learners most often get wrong a week later.",
        items: [
          { q: "A profile does not mention selling to the public. A colleague asks whether the firm does. What do you say?", from: "Lesson 5",
            recall: true,
            options: [
              { text: "The profile does not say.", correct: true,
                why: "Silence is not denial. <i>Doesn't say</i> is an answer, and treating it as <i>no</i> is how a rumour starts." },
              { text: "No, it doesn't.", why: "That claims knowledge the text does not give." },
              { text: "Yes, probably.", why: "Same problem, in the other direction." } ] },
          { q: "Which is correct?", from: "Lesson 3",
            recall: true,
            options: [
              { text: "They always deliver on time.", correct: true,
                why: "<i>Always</i> before the main verb; <i>on time</i> after it. Two adverbials, two different places." },
              { text: "They deliver always on time.", why: "Frequency adverbs do not sit between the verb and what follows it." },
              { text: "Always they deliver on time.", why: "Possible for emphasis in speech, wrong in a business email." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3",
            recall: true,
            options: [
              { text: "Please could you to check the stock.", correct: true,
                why: "After a modal the verb goes bare. <i>To</i> has nothing to do there." },
              { text: "Please could you check the stock.", why: "This is the corrected version." },
              { text: "Could you check the stock, please.", why: "Also correct, just a different order." } ] },
          { q: "You hear /tʃ/ at the end of a word in the warehouse. Which is it likely to be?", from: "Lesson 4",
            recall: true,
            options: [
              { text: "batch", correct: true, why: "/tʃ/ — a quantity made at one time. <i>Badge</i> is the voiced one." },
              { text: "badge", why: "/dʒ/ — voiced. Put your fingers on your throat and the difference is obvious." },
              { text: "bash", why: "/ʃ/ — one continuous hiss, no stop in front of it." } ] },
          { q: "Nour says four things and then counts them. What should you do with your notes?", from: "At Work",
            recall: true,
            options: [
              { text: "Leave four spaces before she starts.", correct: true,
                why: "A speaker who numbers their points has told you how many gaps you need." },
              { text: "Write continuously and tidy up later.", why: "Possible, but it is the slowest way and the easiest to lose the fourth point in." },
              { text: "Write only the last point, which is usually the important one.", why: "She flags the important one herself — and it is the fourth, which you would only catch by listening throughout." } ] },
          { q: "A client will be angry about a delay. What goes in the email besides the apology?", from: "Teamwork",
            recall: true,
            options: [
              { text: "The new date, what is being done, and when you will know more.", correct: true,
                why: "Nour's rule: being late and having a plan are two different emails." },
              { text: "A detailed explanation of whose fault it was.", why: "Rarely useful to the reader, and it reads as an excuse." },
              { text: "A discount, offered immediately.", why: "Perhaps later. It does not answer the question the client actually has, which is when the goods arrive." } ] }
        ] }

    ]
  };
})();
