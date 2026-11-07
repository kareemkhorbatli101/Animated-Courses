/* Unit 2 · Plans, Quotes and Promises — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u02-tw", unit: "u02", block: "tw", up: "../", tab: "AT WORK",
    objective: "Announce a price increase, hold a price under pressure, and answer for both",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two letters", letter: "A",
        concepts: ["write", "cost"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "The letter the whole unit has been building towards. Sixty to eighty words.",
        scenarioTitle: "Announce the increase",
        scenario: "You are Nour. Prices rise eight per cent from 1 April for export clients. Raw cotton has risen about fourteen per cent since September and the company has absorbed all of it until now. Any quotation already issued is honoured at the old price for its full validity.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Price revision from 1 April",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing to let you know that …",
          "Raw cotton has risen by … since … , and until now we have …",
          "Any quotation already issued …",
          "I wanted you to hear this from …"
        ],
        note: { kind: "writer", title: "Why the reason goes second, not first",
                body: "<p>Give the news, then the reason. A letter that explains for three sentences before saying what is happening reads as evasion, and the client skips to the number anyway.</p>" },
        checklist: [
          "Is the figure and the date in the first two lines?",
          "Have you given the reason, with its own number?",
          "Have you said that you absorbed the rise until now?",
          "Have you protected quotations already issued?",
          "Have you avoided apologising so much that it sounds negotiable?"
        ],
        modelJobs: [
          "Says what is changing, and when",
          "Gives the reason, with evidence",
          "Says what the company has already absorbed",
          "Protects existing quotations",
          "Closes"
        ],
        model: "Dear Ms Darwish,\n\nI am writing to let you know that our prices to export clients will rise by eight per cent from 1 April.\n\nRaw cotton has risen by around fourteen per cent since September. We have absorbed that increase in full until now, and we can no longer do so without cutting the quality of the finish, which we are not prepared to do.\n\nAny quotation we have already issued is honoured at the old price for the whole of its validity, so nothing you are currently considering is affected.\n\nI wanted you to hear this from me rather than from an invoice.\n\nNour Haddad" },

      { id: "1b", section: 1, sectionTitle: "Write the two letters", letter: "B",
        concepts: ["write", "agreement"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "The harder letter: holding your price when the buyer has a cheaper quotation.",
        scenarioTitle: "You cannot match it",
        scenario: "Cedar Linens has a competing quote at 1,500 a metre for 1,200 metres. Yours is 1,650. You cannot match it at that quantity. At 2,000 metres you could review the price. You do not want to lose the client.",
        to: "Ms Hiba Nasser, Cedar Linens, Beirut",
        re: "Quotation 2041 — your enquiry about price",
        placeholder: "Dear Ms Nasser,\n\n",
        minWords: 60,
        frames: [
          "Thank you for telling me …",
          "I am not able to match … at this quantity, because …",
          "At 2,000 metres I could …",
          "What our price does include is …",
          "The quotation remains valid until …"
        ],
        note: { kind: "writer", title: "Say no, then say what yes would need",
                body: "<p>A refusal with nothing after it ends the conversation. A refusal followed by a condition keeps it open and tells the buyer exactly what to do if they want the lower number.</p>" },
        checklist: [
          "Have you thanked her for telling you, rather than ignoring it?",
          "Have you refused clearly at this quantity?",
          "Have you given a reason that is about your costs, not about the competitor?",
          "Have you said what quantity would change the answer?",
          "Have you avoided criticising the other supplier?",
          "Is the validity restated so she knows how long she has?"
        ],
        modelJobs: [
          "Thanks her for the information",
          "Refuses at this quantity, with a reason",
          "Names the condition that would change it",
          "States what the price includes",
          "Restates the validity"
        ],
        model: "Dear Ms Nasser,\n\nThank you for telling me about the other quotation. It is more useful to me than silence.\n\nI am not able to match 1,500 a metre at 1,200 metres. Below about 1,600 we would be selling the light weight at under our finishing cost, and I would rather tell you that than quote a figure and then find reasons to change it.\n\nAt 2,000 metres I could review the price, because the set-up cost is spread over more fabric. If that quantity is not right for this season, I understand.\n\nOur quotation remains valid until the thirtieth.\n\nSamer Khoury" },

      { id: "2a", section: 2, sectionTitle: "Answer about plans and prices", letter: "A",
        concepts: ["speak", "deadline"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "What are your plans for the next few months at work?",
        model: "We are going to raise our export prices by eight per cent from the first of April. That is decided — raw cotton has gone up about fourteen per cent and we have absorbed all of it so far. Before that, I am going to write to every regular client in February, because I would rather they heard it from me than from an invoice. We may also look at buying our own dyeing plant, but that is only a possibility. Nothing has been agreed on it yet." },

      { id: "2b", section: 2, sectionTitle: "Answer about plans and prices", letter: "B",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds. The question asks you to predict, not to promise.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "What do you think will happen to prices in your industry this year?",
        model: "I think they are going to keep rising, at least until the summer. The reason is the cotton price, which has gone up for five months running, and nothing I can see is going to reverse that before the next crop. Transport has become more expensive as well. What I am less sure about is whether buyers will accept it. Some will absorb it and some will look for a cheaper supplier. I would expect the market to divide rather than simply follow." },

      { id: "2c", section: 2, sectionTitle: "Answer about plans and prices", letter: "C",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds. This one is about disagreeing.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time you disagreed with a decision at work. What did you do?",
        model: "My manager proposed raising prices from the first of March, and I thought the increase was right but the date was wrong. So I said that first — that I was disagreeing with the timing and not the increase — because most of her plan was fine and I did not want to argue about all of it. Then I explained that our Jordanian clients buy in February, so a March date would pull orders forward and leave us empty afterwards. She accepted it. We went to April for export clients and kept March at home." },

      { id: "2d", section: 2, sectionTitle: "Answer about plans and prices", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it better to promise a date you might miss, or to refuse to give one?",
        model: "Neither, if you can avoid it. What I would rather do is give the date with its condition attached — four weeks if the yarn arrives Thursday, and I will tell you on Thursday either way. The buyer gets something to plan with and I have not promised what I cannot control. A flat refusal loses orders, because somebody else will give her a number. And a date you miss costs more than the order, because the next time you give one she will not believe it." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "You decided yesterday to raise prices. How do you say it?", from: "Lesson 3", recall: true,
            options: [
              { text: "We are going to raise our prices.", correct: true,
                why: "A decision made before this conversation takes <i>going to</i>." },
              { text: "We will raise our prices.", why: "Correct English, but it suggests you decided as you spoke." },
              { text: "We raise our prices.", why: "The simple present is a timetable, not a plan." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "I would rather wait until Thursday.", correct: true,
                why: "<i>Would rather</i> takes a bare verb." },
              { text: "I would rather to wait until Thursday.", why: "The commonest error with this structure." },
              { text: "I would rather waiting until Thursday.", why: "No <i>-ing</i> either. Just the bare verb." } ] },
          { q: "Which sentence is correct?", from: "Lesson 3", recall: true,
            options: [
              { text: "I will write as soon as I hear from Homs.", correct: true,
                why: "<i>Will</i> in the main clause, present after <i>as soon as</i>. Both halves are about the future." },
              { text: "I will write as soon as I will hear from Homs.", why: "<i>Will</i> twice. Only the main clause takes it." },
              { text: "I write as soon as I will hear from Homs.", why: "The two clauses have swapped jobs." } ] },
          { q: "A quotation says <i>ex works Hama</i>. Who pays for transport to Beirut?", from: "Lesson 5", recall: true,
            options: [
              { text: "The buyer.", correct: true, why: "<i>Ex works</i> means the price covers the goods at the seller's gate and nothing beyond." },
              { text: "The seller.", why: "That would be a delivered price, which is a different term." },
              { text: "They share it.", why: "Nothing in the term suggests a split." } ] },
          { q: "What is the difference between a quotation and an estimate?", from: "Lesson 1", recall: true,
            options: [
              { text: "A quotation binds you; an estimate does not.", correct: true,
                why: "This is the whole of the difference, and it is where the risk lives." },
              { text: "A quotation is longer.", why: "Length has nothing to do with it." },
              { text: "An estimate is for regular clients.", why: "Invented. Neither is tied to a type of client." } ] },
          { q: "A pie chart shows Iraq at 6% of revenue. What can you conclude about dropping that market?", from: "Lesson 5", recall: true,
            options: [
              { text: "Nothing about profit — the chart shows share, not margin.", correct: true,
                why: "Six per cent at a good margin can be worth more than thirty at a thin one." },
              { text: "That it would cost little.", why: "That is a profit claim from a revenue chart." },
              { text: "That the market is shrinking.", why: "A single pie shows one moment. Change needs two." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "people"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more, from the parts people forget first.",
        items: [
          { q: "You agree with most of a plan but not one date. How do you open?", from: "At Work", recall: true,
            options: [
              { text: "Can I disagree with the date rather than the plan?", correct: true,
                why: "Names the size of the disagreement first, so nine points of the plan are not defended unnecessarily." },
              { text: "I don't think this works.", why: "Sounds like a rejection of everything, and invites a defence of everything." },
              { text: "Say nothing and raise it afterwards.", why: "Silence in the room reads as agreement, and the decision is already made by then." } ] },
          { q: "A decision will double your workload. You will do it anyway. What do you say?", from: "At Work", recall: true,
            options: [
              { text: "I am not objecting, I am telling you what it costs me.", correct: true,
                why: "Separates information from opposition, and gives the manager something to plan with." },
              { text: "Nothing — it would look uncooperative.", why: "The cost stays invisible until it causes a failure nobody budgeted for." },
              { text: "I can't do that.", why: "An objection you do not actually hold, which you will then have to climb down from." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "This price is valid for during thirty days.", correct: true,
                why: "<i>For</i> takes a length; <i>during</i> takes a named period. Only one can introduce the phrase." },
              { text: "This price is valid for thirty days.", why: "The corrected version." },
              { text: "This price is valid during March.", why: "Also correct — <i>during</i> with a named period." } ] },
          { q: "You hear /dʒ/ at the end of a word in a meeting about money. Which is it likely to be?", from: "Lesson 4", recall: true,
            options: [
              { text: "wage", correct: true, why: "/dʒ/ is voiced. <i>Which</i> ends unvoiced." },
              { text: "which", why: "/tʃ/ — no buzz in the throat." },
              { text: "wash", why: "/ʃ/ — a continuous hiss with no stop in front of it." } ] },
          { q: "A buyer tells you a competitor is cheaper. What is the best first move?", from: "Teamwork", recall: true,
            options: [
              { text: "Ask at what quantity.", correct: true,
                why: "A price with no quantity cannot be compared, and the question is not aggressive — it is the only way to answer honestly." },
              { text: "Match it immediately.", why: "Given away before you know what the other quotation covers." },
              { text: "Say their fabric is worse.", why: "Attacks a competitor the buyer may know better than you do." } ] },
          { q: "When does a lead time start, under the Orontes terms?", from: "Lesson 5", recall: true,
            options: [
              { text: "When the order is confirmed in writing.", correct: true,
                why: "<i>From the date we confirm the order, not from the date of enquiry.</i>" },
              { text: "When the enquiry arrives.", why: "Explicitly excluded by the same sentence." },
              { text: "When the deposit is received.", why: "That governs when production begins, which is a different clause." } ] }
        ] }

    ]
  };
})();
