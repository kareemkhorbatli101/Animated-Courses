/* Unit 12 · Clients and Proposals — ORAL COMMUNICATION */
(function () {
  window.PAGE = {
    id: "u12-oc", unit: "u12", block: "oc", up: "../", tab: "AT WORK",
    objective: "Explain something so that somebody else can use it, and decide a tender in a room",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Explaining so it can be used", letter: "A",
        concepts: ["listen", "question"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "Nour on explaining things to colleagues. Fill in the form as you listen.",
        audio: { track: "u12-explain", label: "Explaining so it can be used",
          lines: [
            { who: "nour", text: "The last of these, and it is the one I get wrong most often myself." },
            { who: "nour", text: "When somebody asks you how something works, there are two things you can give them. You can give them the answer, or you can give them the answer and the reason behind it." },
            { who: "nour", text: "The answer alone is faster and it comes back to you. Two thousand metres minimum: he can repeat that. He cannot defend it, so the first buyer who pushes sends him to find me." },
            { who: "nour", text: "Two thousand metres, because a dye bath below that will not hold shade across the run: now he can answer a question I have not thought of." },
            { who: "nour", text: "The second thing is the test, and it is not asking whether they understood. Everybody says yes to that, including when the answer is no. The test is whether they can say it in their own words to somebody else while you listen." },
            { who: "nour", text: "Which brings me to writing. When somebody asks me to write it down for them, I say: you write it and I will check it. It sounds unhelpful and it is the opposite. Writing it is where you find out what you did not understand." },
            { who: "nour", text: "And give people the sentence for not knowing. <i>I will confirm that figure and come back to you within the hour.</i> Say it out loud a few times until it is available under pressure, because the alternative is a guess, and a guess on the telephone becomes a number on an order." },
            { who: "nour", text: "One last thing. Explain the part they need, plus one reason. Not the whole procedure. Forty minutes of the whole procedure and they keep the part they came for anyway." } ] },
        title: "Explaining so it can be used",
        lines: [
          "Give the answer and the ___ behind it",
          "Otherwise they can repeat it but cannot ___ it",
          "The test is not asking whether they understood. It is whether they can say it in their own ___ ",
          "If they ask you to write it down: you write it and I will ___ it",
          "Give people the sentence for not knowing: I will ___ that figure",
          "Explain the part they need, plus ___ reason"
        ],
        gaps: [
          { answer: "reason", why: "The whole talk. A reason is what lets somebody answer the question nobody anticipated." },
          { answer: "defend", why: "Repeating and defending are different capabilities, and only the second survives a buyer pushing back." },
          { answer: "words", why: "Not <i>did you understand</i>, which almost nobody answers truthfully." },
          { answer: "check", why: "Sounds unhelpful and is the opposite: writing it is where the gaps appear." },
          { answer: "confirm", why: "The sentence that replaces a guess, and it has to be available under pressure." },
          { answer: "one", why: "One reason, not the whole procedure. The limit is the point of the advice." }
        ],
        note: { kind: "life", title: "The reason is the portable part",
                body: "<p>An answer handles the case you were asked about. A reason handles the cases you were not. That is the entire difference between a colleague who can cover for you and one who telephones you on holiday.</p>" },
        explain: { terms: [
          { en: "to defend a figure", gloss: "to explain and justify it when questioned", ar: "يدافع عن الرقم" },
          { en: "under pressure", gloss: "when there is no time to think", ar: "تحت الضغط" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Explaining so it can be used", letter: "B",
        concepts: ["listen", "comparison"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "The meeting that decided what to put in the tender. Listen, then answer.",
        speaker: "nour",
        speakerNote: "with Samer, Lina and Fadi",
        audio: { track: "u12-tender", label: "Deciding the Barada tender",
          lines: [
            { who: "nour", text: "A hundred points. Forty price, twenty-five quality, fifteen lead time, ten references, ten additional offers. Where do we spend the next two days? Positions, please." },
            { who: "samer", text: "Price. It is the biggest number on the chart and the only one fully under our control." },
            { who: "lina", text: "I disagree, and not about the chart. Price is scored against the lowest compliant tender, proportionally. A three per cent cut costs us three per cent of revenue on every metre for twelve months and buys a sliver of forty points." },
            { who: "nour", text: "What would you do instead?" },
            { who: "lina", text: "Spend the two days on the sample length and the certification, which is the whole of the quality score. Twenty-five points, and ours is the better cloth. We should be winning that criterion by a distance and we have never once prepared a sample properly." },
            { who: "samer", text: "That is a better answer than mine and I want to test it. How do you know ours is the better cloth?" },
            { who: "lina", text: "Because Levant Home moved to us from Aleppo Weaving two years ago and the reason they gave was shade consistency. That is a fact about a buyer's decision, not an opinion about our looms." },
            { who: "fadi", text: "Can I say something about the lead time? I do not have a position, I have a constraint. If we offer four weeks for eleven months, somebody is going to take an order on the twenty-eighth of June and it will land in the July closure." },
            { who: "nour", text: "That is worth more than a position. What would prevent it?" },
            { who: "fadi", text: "A rule that any order taken after the fifteenth of June gets the July lead time, whatever the calendar says. Written in the tender, not in our heads." },
            { who: "samer", text: "Then my position changes. Price stays where it is, I will write Fadi's June rule into the lead-time section, and the two days go to the sample." },
            { who: "nour", text: "Before we agree that. Additional offers: ten points, and the document says they only score if they reduce the client's own work. Anybody?" },
            { who: "lina", text: "The inspection sheet. We already produce it. It costs us nothing and it saves a housekeeping manager working out whether a bad consignment was inspected." },
            { who: "fadi", text: "I would not offer the monthly quality report. It is three hours of my time and somebody has to read it, which is their work and not less of it." },
            { who: "nour", text: "Agreed, and that is exactly the distinction the document draws. So: Lina owns the sample and the certification, Samer owns price and the June rule, Fadi's inspection sheet is the additional offer, and the monthly report is dropped." },
            { who: "samer", text: "One thing nobody has raised. The references. Ten points, scored on being contactable and relevant." },
            { who: "nour", text: "Go on." },
            { who: "samer", text: "Ms Sayegh has agreed to take a call, and I have told her what we claimed about lead time so she answers the right question. The second reference is the hotel in Tartous, and I have not asked them yet. I will do it today, because a reference who is surprised is worse than no reference." },
            { who: "lina", text: "And can we write down why we are not cutting the price? Next year somebody will look at this file and think we were being proud." },
            { who: "nour", text: "Write it down. One line: a three per cent cut buys roughly one point and costs twelve months of margin." } ] },
        items: [
          { q: "Why does Samer want to spend the two days on price?",
            options: [
              { text: "It is the biggest criterion and the one he controls.", correct: true,
                why: "A reasonable position, and the chart invites it. The error is in the scoring formula, not in the weights." },
              { text: "Because the cheapest tender wins.", why: "He does not say that, and the invitation says the opposite." },
              { text: "Because quality cannot be improved.", why: "Nobody suggests it." } ] },
          { q: "What is Lina’s objection?",
            options: [
              { text: "A proportional price score means a discount buys very little.", correct: true,
                why: "Three per cent of revenue on every metre, against a sliver of forty points. The arithmetic is the argument." },
              { text: "That price does not matter.", why: "She leaves the price where it is." },
              { text: "That the chart is wrong.", why: "She says explicitly that she is not disagreeing about the chart." } ] },
          { q: "How does Lina support the claim that their cloth is better?",
            options: [
              { text: "A buyer moved to them from a rival, and said why.", correct: true,
                why: "A fact about somebody else's decision rather than an opinion about their own looms. The strongest kind of evidence available to a supplier." },
              { text: "Their looms are newer.", why: "Not mentioned, and it would be a claim about equipment rather than output." },
              { text: "They have never had a complaint.", why: "Untrue in this book, and she does not say it." } ] },
          { q: "What does Fadi contribute, and what does he call it?",
            options: [
              { text: "A constraint rather than a position: an order on 28 June lands in the closure.", correct: true,
                why: "The same move as Unit 10. A constraint rules out an outcome and does not need an opinion attached." },
              { text: "A position on lead time.", why: "He says in so many words that he does not have one." },
              { text: "A complaint about July.", why: "He proposes a rule in the next sentence." } ] },
          { q: "What is the June rule for?",
            options: [
              { text: "To stop a late-June order being quoted at four weeks.", correct: true,
                why: "And he insists it goes in the tender rather than in somebody's memory, which is the part that makes it work." },
              { text: "To close the workshop earlier.", why: "The dye house closure is not theirs to move." },
              { text: "To raise the July price.", why: "Nothing to do with price." } ] },
          { q: "Why is the inspection sheet offered and the monthly report not?",
            options: [
              { text: "One reduces the client’s work; the other adds to it.", correct: true,
                why: "Exactly the test the invitation publishes for additional offers, applied without anybody rereading it." },
              { text: "The report costs too much to produce.", why: "Three hours, which Fadi mentions second. His first objection is about the client's work." },
              { text: "The sheet is a requirement.", why: "Nobody asked for it, which is what makes it an additional offer." } ] },
          { q: "What does Samer realise about the second reference?",
            options: [
              { text: "He has not asked them, and a surprised reference is worse than none.", correct: true,
                why: "He raises it himself after the decision is made, which is when most people stop listing what is unfinished." },
              { text: "That references do not matter.", why: "Ten points, and he is the one who raises them." },
              { text: "That Ms Sayegh will not help.", why: "She has agreed and has been briefed." } ] },
          { q: "Why does Lina want the price decision written down?",
            options: [
              { text: "So that next year the file explains the reasoning rather than looking like pride.", correct: true,
                why: "A decision is read later by people who do not have the meeting. One line of reasoning is the difference between a record and a mystery." },
              { text: "To protect herself.", why: "She argued for the decision she is recording." },
              { text: "Because the client requires it.", why: "Nothing in the invitation asks for it." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Make somebody else able", letter: "A",
        concepts: ["speak", "question"],
        kind: "phrases", task: null, n: 0,
        prompt: "The sentences that moved knowledge from one person to another. Click each one.",
        note: { kind: "life", title: "Two days, four jobs, nobody waiting on anybody",
                body: "<p>Every line below either hands somebody a reason, or tests whether a reason landed, or admits what is not yet done. None of them is an instruction, and the meeting still ends with four owners.</p>" },
        text: "Where do we spend the next two days? Positions, please. That is a better answer than mine and I want to test it. How do you know ours is the better cloth? I do not have a position, I have a constraint. Written in the tender, not in our heads. Then my position changes. I have told her what we claimed about lead time so she answers the right question. And can we write down why we are not cutting the price?",
        phrases: [
          { text: "Where do we spend the next two days? Positions, please.",
            why: "A question with a budget in it. <i>What do you think?</i> would have produced four opinions and no decision." },
          { text: "That is a better answer than mine and I want to test it.",
            why: "Concede the whole, question a part. The second half is what makes the first half worth saying." },
          { text: "How do you know ours is the better cloth?",
            why: "The question that turns a claim into evidence. He asks it of the position he has just accepted, which is the hard case." },
          { text: "I do not have a position, I have a constraint.",
            why: "Names what kind of contribution it is before making it, so nobody waits for an opinion that is not coming." },
          { text: "Written in the tender, not in our heads.",
            why: "Seven words that decide whether the rule exists in July. Everything agreed in a meeting and not written down is agreed nowhere." },
          { text: "Then my position changes.",
            why: "Three words, for the second time in this book, and still the cheapest useful thing anybody says in a meeting." },
          { text: "I have told her what we claimed about lead time so she answers the right question.",
            why: "Briefing a reference is not coaching her. It is making sure she is answering what she will actually be asked." },
          { text: "And can we write down why we are not cutting the price?",
            why: "A decision without its reasoning reads next year as a mistake. One line prevents a year of misreading." }
        ],
        after: "<p>Six of these eight are people doing something other than stating their own view: asking, conceding, testing, naming a constraint, briefing somebody absent, and writing down a reason for a reader who is not in the room.</p>" },

      { id: "2b", section: 2, sectionTitle: "Make somebody else able", letter: "B",
        concepts: ["people", "comparison"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table.",
        caption: "An answer, and the same answer somebody can use",
        head: ["Answer alone", "What is missing", "Answer they can use"],
        rows: [
          ["Minimum order 2,000 metres", "The ___ ", "Because a dye bath below that will not hold shade"],
          ["Six weeks in July", "Which stage ___ ", "The dye house closes, so it waits for the bath"],
          ["Prices held twelve months", "From ___ ", "Twelve months from award"],
          ["We send the inspection sheet", "What it ___ ", "It shows whether the sample was spread"]
        ],
        gaps: [
          { answer: "reason", why: "The portable part. Without it the figure can be repeated and not defended." },
          { answer: "waits", why: "Naming the constraint rather than the conclusion. Samer says this is the version nobody argues with." },
          { answer: "award", why: "Not submission and not signature. A period with no start point is not a commitment." },
          { answer: "shows", why: "The purpose, which is what makes somebody send it when the procedure forgets to say so." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Make somebody else able", letter: "C",
        concepts: ["recall", "people"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people explaining things. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Samer", detail: "Tells Fadi the minimum order and nothing else, and is telephoned about it twice that week." },
          { id: "c2", label: "Rima", detail: "Asks a colleague whether he understood, hears yes, and discovers on Friday that he did not." },
          { id: "c3", label: "Ziad", detail: "Writes the explanation out himself and sends it, to save his colleague the trouble." },
          { id: "c4", label: "Hanan", detail: "Guesses a lead time on the telephone because she does not want to sound unsure." }
        ],
        takeaways: [
          { text: "Give the reason, or they can repeat it and not defend it.",
            caseId: "c1",
            why: "The figure travels; the reason is what handles the question nobody anticipated." },
          { text: "Ask them to say it in their own words to somebody else.",
            caseId: "c2",
            why: "<i>Did you understand?</i> is answered yes by almost everybody, including when the answer is no." },
          { text: "You write it and I will check it.",
            caseId: "c3",
            why: "Writing it is where the gaps appear. A note in somebody else's words is one they will ring you about." },
          { text: "<i>I will confirm that and come back within the hour</i> is always available.",
            caseId: "c4",
            why: "A guess on the telephone becomes a number on an order, and that is the only version of this that cannot be undone." }
        ],
        closer: "<p>Twelve units, and the last lesson is the one that makes the other eleven survive you leaving the room. Everything in this book that is worth keeping is something somebody else can do without you.</p>" }

    ]
  };
})();
