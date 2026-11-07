/* Unit 4 · Order Status and Progress — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u04-tw", unit: "u04", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the escalation and the apology, and answer for a delay you did not cause",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two messages", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Escalate to the supplier's manager. Sixty to eighty words, and no anger in it.",
        scenarioTitle: "Over Ziad's head",
        scenario: "You are Nour. Fadi has called the Homs dye house three times since Monday and been told tomorrow each time. You have now called Ziad yourself and had the same answer. You are writing to his manager. You want the yarn released this week, and you want to keep working with them afterwards.",
        to: "Mr Hisham Daoud, Homs Dye Works",
        re: "Order 4417 — dark blue yarn, now nine days",
        placeholder: "Dear Mr Daoud,\n\n",
        minWords: 60,
        frames: [
          "I am writing about … , which has been with you since …",
          "We have called … times, and on each occasion …",
          "I am not writing to complain about …",
          "What I need is …",
          "We have worked together since …"
        ],
        note: { kind: "writer", title: "Escalating without burning it",
                body: "<p>You will deal with these people again next month. Name the facts, name what you need, and say plainly that you are not attacking the person you went over. All three, or the next order is worse rather than better.</p>" },
        checklist: [
          "Is the length of the delay given as a number?",
          "Have you said how many times you called, rather than saying 'repeatedly'?",
          "Have you asked for one specific thing with a date?",
          "Have you protected Ziad rather than blaming him?",
          "Have you referred to the relationship continuing?"
        ],
        modelJobs: [
          "Names the order and how long",
          "Gives the facts, with numbers",
          "Says what this message is not",
          "Asks for one specific thing",
          "Protects the relationship"
        ],
        model: "Dear Mr Daoud,\n\nI am writing about the dark blue yarn for our order 4417, which has been with you since the sixth — nine days.\n\nWe have called four times since Monday, and on each occasion we have been told it would be released the following day. I am not writing to complain about Ziad, who has been straight with us about the tank being down for maintenance.\n\nWhat I need is the yarn on a van this week, and a realistic day if that is not possible. Nothing else on the order can move until it reaches us.\n\nWe have worked together since 2021 and I would like that to continue.\n\nNour Haddad" },

      { id: "1b", section: 1, sectionTitle: "Write the two messages", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now apologise to the client for a delay you did not cause. Sixty to eighty words.",
        scenarioTitle: "The date has moved again",
        scenario: "Order 4417 was promised for the fifteenth, then the eighteenth. It is now going to be the twenty-second. You told the client about the first slip; you have not yet told her about this one. The cause is the dye house, but that is your problem, not hers.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Order 4417 — revised date",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing before you ask, which is …",
          "The date moves from … to …",
          "The cause is … , and that is ours to manage, not yours.",
          "What we are doing about it is …",
          "I will write again on …"
        ],
        note: { kind: "writer", title: "Do not make the supply chain her problem",
                body: "<p>She bought fabric from you, not from the dye house. Name the cause in one clause so she knows you know it, then take responsibility for it in the same sentence. A long explanation reads as a request to be let off.</p>" },
        checklist: [
          "Have you given both dates, old and new?",
          "Is the cause named briefly, in one clause?",
          "Have you taken responsibility rather than distributing it?",
          "Have you said what is being done?",
          "Have you promised another update on a stated day?"
        ],
        modelJobs: [
          "Says you are writing first",
          "Moves the date, naming both",
          "Names the cause and owns it",
          "Says what is being done",
          "Promises the next update"
        ],
        model: "Dear Ms Darwish,\n\nI am writing before you ask, which is how this should have gone the first time.\n\nThe dispatch date for 4417 moves from the eighteenth to the twenty-second. The cause is our dye house, which has been down for maintenance; that is ours to manage and not yours to absorb.\n\nWe have escalated it above our usual contact and the yarn is now scheduled to reach us on Friday. The first thousand metres are finished and could go earlier as a part delivery if that helps your shop.\n\nI will write again on Friday, whether or not it has arrived.\n\nSamer Khoury" },

      { id: "2a", section: 2, sectionTitle: "Answer about progress", letter: "A",
        concepts: ["speak", "delivery"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a project you are working on at the moment. How far has it got?",
        model: "We are in the middle of an export order for a client in Amman — four thousand metres of cotton sheeting. The first thousand have been woven, finished and packed, and the second thousand is on the loom now. We have been waiting for dyed yarn for about nine days, which is the only thing holding it up. Everything else is ready. The dispatch date has moved twice, which I am not happy about, but the client has known about both moves on the day they happened." },

      { id: "2b", section: 2, sectionTitle: "Answer about progress", letter: "B",
        concepts: ["speak", "escalation"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "When do you ask a colleague for help, and how do you ask?",
        model: "My rule is that if I have tried the same thing twice and it has not worked, I stop and ask. The third attempt is almost never the one that works. When I ask, I bring three things: what I have already done, what it produced, and the one thing I want the other person to do. That usually takes three sentences. What I try not to do is apologise first or explain the whole history, because both of those make the person listen less by the time I get to the actual question." },

      { id: "2c", section: 2, sectionTitle: "Answer about progress", letter: "C",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds. This one is about bad news.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you tell a client that something is going to be late?",
        model: "As soon as I know, not when I know the new date. That is the part people get wrong, including me once. If I wait until I am certain, the old date has usually already passed and the client finds out from their own calendar. So I write the day it slips, give both dates, say in one clause what caused it, and say what we are doing about it. And I promise another update on a particular day whether or not there is news, because a client who only hears from me when things are good learns to be frightened of silence." },

      { id: "2d", section: 2, sectionTitle: "Answer about progress", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "When something goes wrong, is it better to explain why or just to fix it?",
        model: "Both, but in the right proportion and the right order. The fix comes first, because that is what the other person actually wants. The explanation should be one clause, not a paragraph — enough that they know you understand the cause, short enough that it does not read as an excuse. I have noticed that the longer the explanation, the less people believe it. And I would never make a supplier problem the client's problem. They bought from us; who we buy from is ours to manage." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "We dispatched the first pallet on Friday.", correct: true,
                why: "<i>On Friday</i> closes the event, so the simple past." },
              { text: "We have dispatched the first pallet on Friday.", why: "A finished time expression shuts the present perfect out completely." },
              { text: "We have been dispatching the first pallet on Friday.", why: "Continuous, and with a closed date, which is worse still." } ] },
          { q: "Nine days. Which word?", from: "Lesson 3", recall: true,
            options: [
              { text: "for nine days", correct: true, why: "<i>For</i> takes a length." },
              { text: "since nine days", why: "<i>Since</i> needs a starting point: <i>since the sixth</i>." },
              { text: "during nine days", why: "<i>During</i> takes a named period, not a count." } ] },
          { q: "What is a landed cost compared with an ex works price?", from: "Unit 3", recall: true,
            options: [
              { text: "It includes freight, insurance and duty.", correct: true,
                why: "A unit from last unit, here because it decides whether 4417 was ever cheap." },
              { text: "It excludes freight.", why: "That is ex works." },
              { text: "It is the price before discount.", why: "Nothing to do with discounts." } ] },
          { q: "An order was eleven days late. What is the useful way to report it?", from: "Lesson 5", recall: true,
            options: [
              { text: "Split it: four production, four border, two transport, and say which were avoidable.", correct: true,
                why: "Eleven days is a complaint. The breakdown is a list of things you can change." },
              { text: "Say the carrier was slow.", why: "The transport took the normal two days." },
              { text: "Say it was eleven days late and apologise.", why: "Gives the client no reason to expect next time to differ." } ] },
          { q: "A supplier says <i>it should be with you soon</i>. What do you ask?", from: "Lesson 4", recall: true,
            options: [
              { text: "What has to happen before it leaves you?", correct: true,
                why: "Asks for the next step, which can be checked. <i>Soon</i> cannot." },
              { text: "How soon?", why: "Invites a vaguer version of the same guess." },
              { text: "Are you sure?", why: "Can only be answered yes." } ] },
          { q: "Which th is voiced?", from: "Lesson 4", recall: true,
            options: [
              { text: "the <i>th</i> in <i>they</i>", correct: true,
                why: "/ð/ — almost every common grammar word with <i>th</i> is voiced." },
              { text: "the <i>th</i> in <i>thirty</i>", why: "/θ/ — numbers almost always take the unvoiced one." },
              { text: "the <i>th</i> in <i>month</i>", why: "/θ/ at the end, unvoiced." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "escalation"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "You have tried the same thing twice and it has not worked. What now?", from: "At Work", recall: true,
            options: [
              { text: "Escalate, bringing what you tried, what it produced and what you want.", correct: true,
                why: "Nour's rule and Nour's three things, in one answer." },
              { text: "Try a third time.", why: "The attempt that is least likely to work and costs the most time." },
              { text: "Wait and see.", why: "Converts a problem into a surprise." } ] },
          { q: "What is wrong with opening <i>sorry, this is probably nothing</i>?", from: "At Work", recall: true,
            options: [
              { text: "It tells the listener to pay less attention before you ask.", correct: true,
                why: "<i>The apology was the part that wasted it.</i>" },
              { text: "It is too short.", why: "Length is not the problem." },
              { text: "It is impolite.", why: "It is over-polite, which is the actual fault." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "Nothing has not left the workshop yet.", correct: true,
                why: "<i>Nothing</i> is already negative; adding <i>not</i> reverses the meaning." },
              { text: "Nothing has left the workshop yet.", why: "The corrected version." },
              { text: "The pallets have not left the workshop yet.", why: "Correct — a positive subject needs the <i>not</i>." } ] },
          { q: "What does a flow diagram not show?", from: "Lesson 5", recall: true,
            options: [
              { text: "How long each stage takes.", correct: true, why: "Every box is the same size whatever the stage costs in days." },
              { text: "The order of the stages.", why: "That is all it shows." },
              { text: "What must happen before what.", why: "The same thing, stated differently." } ] },
          { q: "Two pallets are missing. When do you record it?", from: "Lesson 1", recall: true,
            options: [
              { text: "On the delivery note, before signing it.", correct: true,
                why: "A clean signature says everything arrived, and an email afterwards is one person's word against a document." },
              { text: "In an email the same day.", why: "Better than nothing and far weaker than the note." },
              { text: "When the invoice arrives.", why: "By then the chain of custody has closed." } ] },
          { q: "A client will be angry about a second delay. When do you write?", from: "Teamwork", recall: true,
            options: [
              { text: "The day it slips, even without a new date.", correct: true,
                why: "Waiting for certainty means the old date passes first and they find out from the calendar." },
              { text: "When you are sure of the new date.", why: "The mistake the file note in Lesson 5 exists to correct." },
              { text: "When they ask.", why: "By then the relationship has already paid for it." } ] }
        ] }

    ]
  };
})();
