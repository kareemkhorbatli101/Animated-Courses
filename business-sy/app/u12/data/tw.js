/* Unit 12 · Clients and Proposals — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u12-tw", unit: "u12", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the covering letter and the handover note, and answer about winning work",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "agreement"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the covering letter for the tender. Sixty to eighty words.",
        scenarioTitle: "Covering letter — Barada tender",
        scenario: "The tender is complete: four weeks lead time with the June rule, six in July, 3.40 and 3.90 a metre held for twelve months, minimum order 2,000 metres a line, two references, azo dye certification, a sample length, and the inspection sheet as the additional offer. You have not cut the price. A covering letter is read in under a minute.",
        to: "Barada Hotels, Tendering Office",
        re: "Tender for bed linen — Orontes Textiles",
        placeholder: "Dear Sir or Madam,\n\n",
        minWords: 60,
        frames: [
          "We enclose our tender for … .",
          "All four mandatory requirements are met: … .",
          "Our additional offer is … , because … .",
          "One thing we want to state rather than leave you to find: … .",
          "Both references have agreed to … ."
        ],
        note: { kind: "writer", title: "A covering letter is a map, not a summary",
                body: "<p>It is read by somebody checking compliance before scoring. Its job is to let that person tick four boxes in thirty seconds and to flag the one thing you would rather they heard from you.</p>" },
        checklist: [
          "Does it name what is enclosed?",
          "Does it list the mandatory requirements as met?",
          "Does it state the additional offer with its reason?",
          "Does it volunteer the July exception rather than burying it?",
          "Does it say the references have been asked?"
        ],
        modelJobs: [
          "What is enclosed",
          "The four requirements, ticked",
          "The additional offer and its reason",
          "The exception, volunteered",
          "The references, already asked"
        ],
        model: "Dear Sir or Madam,\n\nWe enclose our tender for bed linen across your six hotels.\n\nAll four mandatory requirements are met: two trade references, azo dye certification, prices held for twelve months, and submission before noon on 14 July.\n\nOur additional offer is the inspection sheet with every consignment, because it lets your housekeeping manager see whether a sample was spread across the run.\n\nOne thing we want to state rather than leave you to find: our lead time is four weeks, and six weeks for any order placed after 15 June, because our dye house closes for ten days in July.\n\nBoth references have agreed to take a call.\n\nSamer Khoury" },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the handover note for Fadi, so he can answer the telephone. Sixty to eighty words.",
        scenarioTitle: "Handover — while Samer is away",
        scenario: "Four things with one reason each: price 3.40 and 3.90, held twelve months from award; minimum 2,000 metres a line because a dye bath below that will not hold shade; four weeks lead time, six in July and for anything ordered after 15 June, because the dye house closes; the inspection sheet goes with every consignment. And what to say when he does not know.",
        to: "Fadi Nassar",
        re: "While I am away — the four things and the sentence",
        placeholder: "",
        minWords: 60,
        frames: [
          "Price: … , held … .",
          "Minimum order: … , because … .",
          "Lead time: … , except … , because … .",
          "The inspection sheet goes … , and it is for … .",
          "If you do not know: … ."
        ],
        note: { kind: "writer", title: "Every figure with its reason",
                body: "<p>This is the whole lesson of the unit in one document. A note of four figures lets him repeat them. A note of four figures and four reasons lets him handle the call you did not foresee.</p>" },
        checklist: [
          "Does every figure come with its reason?",
          "Is the price hold given a start point?",
          "Is the 15 June rule included, not just July?",
          "Does it say what the inspection sheet is for?",
          "Does it give him the sentence for not knowing?"
        ],
        modelJobs: [
          "Price and the hold",
          "Minimum order and why",
          "Lead time, the exception and why",
          "The inspection sheet and its purpose",
          "The sentence for not knowing"
        ],
        model: "Price: 3.40 a metre for sheeting, 3.90 for pillowcase cloth, held for twelve months from award.\n\nMinimum order: 2,000 metres a line, because a dye bath below that will not hold shade across the run. If somebody wants less, offer a sample run at a surcharge rather than saying no.\n\nLead time: four weeks, except July and anything ordered after 15 June, which is six. The dye house closes for ten days, so the order waits for the bath and not for the loom.\n\nThe inspection sheet goes with every consignment, and it is for showing that the sample was spread across the run.\n\nIf you do not know: say you will confirm the figure and come back within the hour. Never guess at a number." },

      { id: "2a", section: 2, sectionTitle: "Answer about winning work", letter: "A",
        concepts: ["speak", "comparison"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you decide whether to tender for something?",
        model: "I read two things before anything else. First the mandatory requirements, because a tender that fails one of them is not scored at all — not ranked, not read. Second the weightings, because they tell me what the client is actually buying. On the Barada tender price carried forty points and everything else sixty, which meant a discount was close to worthless and our sample length was worth two days of work. If the weights are all on price and we are not the cheapest workshop in the country, I would rather decline early and say why." },

      { id: "2b", section: 2, sectionTitle: "Answer about winning work", letter: "B",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a proposal you were involved in.",
        model: "We tendered for bed linen for a six-hotel group this summer. My part was the lead-time section, and the useful thing in it was not the four weeks — it was the sentence saying we could not hold four weeks through July, and proposing six. A colleague found the real trap: an order taken on the twenty-eighth of June would land in the closure, so we wrote a rule that anything after the fifteenth gets the July figure. We put that in the tender rather than in our heads. I would rather be believed in eleven months than admired in one." },

      { id: "2c", section: 2, sectionTitle: "Answer about winning work", letter: "C",
        concepts: ["speak", "question"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you explain something to a colleague so that they can use it?",
        model: "I give the figure and one reason, and nothing else. Two thousand metres minimum is repeatable; two thousand metres because a dye bath below that will not hold shade is defensible, and the second one survives a buyer pushing back. Then I test it, and not by asking whether they understood — everybody says yes to that. I ask them to say it to somebody else while I listen. If they ask me to write it down, I say: you write it and I will check it. Writing it is where you find out what you did not understand." },

      { id: "2d", section: 2, sectionTitle: "Answer about winning work", letter: "D",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last question of the book asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it ever worth telling a client something that weakens your own proposal?",
        model: "Almost always, if they would find it out anyway. Our July closure was going to be discovered either by us in the tender or by them in July, and the second version costs a contract rather than a point. Saying it also makes the other eleven months believable, which is the part nobody expects. What I would not do is volunteer a weakness nobody will ever meet, because that is not honesty, it is just a worse document. The test I use is simple: will this reach them later? If yes, it goes in now, in my words." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "word"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "We recommend ordering the stock in May.", correct: true,
                why: "<i>Recommend</i> takes a gerund, with no object and no <i>to</i>." },
              { text: "We recommend to order the stock in May.", why: "The commonest error of the two forms in business writing." },
              { text: "We recommend us to order the stock in May.", why: "<i>Recommend</i> does not take an object before the verb." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "The invitation requires us to hold our prices.", correct: true,
                why: "<i>Require somebody to do</i>. After an object, an infinitive." },
              { text: "The invitation requires us holding our prices.", why: "No verb in this group takes a gerund after an object." },
              { text: "The invitation requires that we holding our prices.", why: "A clause would need a finite verb: <i>that we hold</i>." } ] },
          { q: "<i>We stopped sending paper copies.</i> What happened?", from: "Lesson 3", recall: true,
            options: [
              { text: "The sending ended.", correct: true, why: "<i>Stop doing</i> ends the activity." },
              { text: "We paused in order to send them.", why: "That is <i>stopped to send</i>, which describes a different event." },
              { text: "We tried to send them and failed.", why: "Neither form means that." } ] },
          { q: "<i>We look forward to ___ your decision.</i>", from: "Lesson 3", recall: true,
            options: [
              { text: "hearing", correct: true,
                why: "The <i>to</i> in <i>look forward to</i> is a preposition, so the verb takes <i>-ing</i>." },
              { text: "hear", why: "The error that appears in more business letters than any other." },
              { text: "heard", why: "No form of the perfect fits after a preposition." } ] },
          { q: "<i>We export mostly to Jordan.</i> Where is the stress?", from: "Lesson 1", recall: true,
            options: [
              { text: "exPORT — second syllable, because it is a verb.", correct: true,
                why: "The noun EXport takes the first. Nothing but stress separates them." },
              { text: "EXport — first syllable.", why: "That is the noun: <i>our exports went up</i>." },
              { text: "Both are equally stressed.", why: "English does not do this; one syllable always wins." } ] },
          { q: "Which is the right spelling?", from: "Lesson 4", recall: true,
            options: [
              { text: "The dyeing takes two hours.", correct: true,
                why: "<i>Dyeing</i> keeps its <i>e</i> so that it can be told from <i>dying</i> on the page. They sound identical." },
              { text: "The dying takes two hours.", why: "From <i>die</i>. The spelling is the only safeguard." },
              { text: "The dieing takes two hours.", why: "Not a word in either sense." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more, and they reach back beyond this unit.",
        items: [
          { q: "A tender fails one mandatory requirement. What happens to it?", from: "Lesson 5", recall: true,
            options: [
              { text: "It is not scored at all.", correct: true,
                why: "Not ranked, not read. The quality of the document is irrelevant to its fate." },
              { text: "It is scored and then marked down.", why: "That would be a scoring rule. Compliance is a gate." },
              { text: "It is scored if the price is lowest.", why: "Price is a criterion, not an exemption." } ] },
          { q: "Price carries forty of a hundred points, scored proportionally. What does a 3% discount buy?",
            from: "Lesson 5", recall: true,
            options: [
              { text: "About a point, against twelve months of lost margin.", correct: true,
                why: "The arithmetic that stopped the discount in the meeting, and the reason it was written into the file." },
              { text: "Forty points.", why: "Only the lowest compliant tender takes the full forty." },
              { text: "Nothing at all.", why: "It buys a little, which is exactly why the calculation matters." } ] },
          { q: "What makes an additional offer worth making, in this invitation?",
            from: "Lesson 5", recall: true,
            options: [
              { text: "That it reduces the client's own work.", correct: true,
                why: "Published in the scoring rules. The monthly report was dropped on exactly this test." },
              { text: "That it is generous.", why: "A report that costs them three hours to read scores nothing." },
              { text: "That nobody else offers it.", why: "Novelty is not one of the criteria." } ] },
          { q: "Which is the difference between a defect and a non-conformance?", from: "Unit 11", recall: true,
            options: [
              { text: "A defect is in the goods; a non-conformance is in what we did.", correct: true,
                why: "One is fixed by rework or scrap; the other by changing what people do." },
              { text: "A non-conformance is more serious.", why: "Often less serious and almost always more expensive to leave." },
              { text: "A defect is found by the client.", why: "Who finds it does not change what it is." } ] },
          { q: "A colleague says <i>I only added a column</i>. What is the right answer?", from: "Unit 11", recall: true,
            options: [
              { text: "Name what the column made possible.", correct: true,
                why: "The deflection sounds like modesty and works like erasure. Only a fact refuses it." },
              { text: "Agree, and thank him anyway.", why: "Which ends the credit and leaves nothing on the record." },
              { text: "Tell him he is too modest.", why: "An argument about his character instead of about his work." } ] },
          { q: "What is the sentence for not knowing a figure on the telephone?", from: "At Work", recall: true,
            options: [
              { text: "I will confirm that and come back to you within the hour.", correct: true,
                why: "Always available, always acceptable, and it is the alternative to a guess becoming a number on an order." },
              { text: "I think it is about four weeks.", why: "A guess, and a buyer may write it down." },
              { text: "You would have to ask my colleague.", why: "True and it moves the work to somebody who is not on the call." } ] }
        ] }

    ]
  };
})();
