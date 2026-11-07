/* Unit 7 · Terms and Negotiation — AT WORK
   Ask a procedural question at an office. */
(function () {
  window.PAGE = {
    id: "u07-oc", unit: "u07", block: "oc", up: "../", tab: "AT WORK",
    objective: "Get a procedure explained by someone whose job is not to explain it",
    next: "tw.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "At the counter", letter: "A",
        concepts: ["listen", "approval"],
        kind: "notes", task: "listen-note-monologue", cefr: "B1", n: 6,
        prompt: "A clerk explains what is needed for an export certificate. Fill in the form as you listen.",
        audio: { track: "u07-counter", label: "At the export office",
          lines: [
            { who: "ziad", text: "Right. For a certificate of origin you need four things, and people usually arrive with three." },
            { who: "ziad", text: "The commercial invoice, stamped by you. Not a copy — stamped." },
            { who: "ziad", text: "The packing list, and the pallet count on it has to match the invoice exactly. If they differ by one pallet I cannot accept it, and that is the commonest reason I send people away." },
            { who: "ziad", text: "A copy of your commercial registration. Any copy is fine, it does not need stamping." },
            { who: "ziad", text: "And form 4B, which you fill in here, not at home. I have them at this window." },
            { who: "ziad", text: "The fee is paid at window three, not here, and you bring me the receipt. Window three closes at one, this window closes at two, so if you leave the fee until half past one you will not finish today." },
            { who: "ziad", text: "Processing is two working days. Thursday counts, Friday does not." } ] },
        title: "Certificate of origin — what is needed",
        lines: [
          "Commercial invoice, ___ by you",
          "Packing list — pallet count must ___ the invoice",
          "Copy of commercial registration — no ___ needed",
          "Form 4B, filled in ___ ",
          "Fee paid at window ___ , bring the receipt",
          "Processing takes ___ working days"
        ],
        gaps: [
          { answer: "stamped", why: "He says it twice, and the second time he rules out the alternative: not a copy." },
          { answer: "match", why: "<i>Exactly</i>, and he adds that it is the commonest reason people are turned away." },
          { answer: "stamping", why: "A detail worth having: knowing which documents do <i>not</i> need stamping saves a trip." },
          { answer: "here", why: "<i>Here, not at home</i> — and he adds that he has the forms at this window." },
          { answer: "three", why: "A different window, which is the kind of thing nobody writes down and everybody gets wrong." },
          { answer: "two", why: "And the qualification that follows is what makes it usable: Thursday counts, Friday does not." }
        ],
        note: { kind: "life", title: "He gives you the failure modes",
                body: "<p>A good clerk tells you how people get it wrong: a copy instead of a stamped original, a pallet count out by one, the fee left until half past one. Those sentences are worth more than the list itself.</p>" },
        explain: { terms: [
          { en: "certificate of origin", gloss: "a document stating where goods were made", ar: "شهادة منشأ" },
          { en: "commercial registration", gloss: "the document proving a company is registered", ar: "السجل التجاري" },
          { en: "working days", gloss: "days the office is open", ar: "أيام عمل" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "At the counter", letter: "B",
        concepts: ["listen", "people"],
        kind: "talk", task: "listen-discussion", cefr: "B1", n: 8,
        prompt: "Two people asking the same clerk the same thing. Listen, then answer.",
        speaker: "ziad",
        speakerNote: "with Samer and Marwan",
        audio: { track: "u07-asking", label: "Two ways to ask",
          lines: [
            { who: "marwan", text: "Excuse me, I need a certificate of origin." },
            { who: "ziad", text: "Invoice, packing list, registration copy, form 4B, fee receipt from window three." },
            { who: "marwan", text: "Sorry — which window?" },
            { who: "ziad", text: "Three." },
            { who: "marwan", text: "And the invoice, is a copy all right?" },
            { who: "ziad", text: "Stamped original." },
            { who: "marwan", text: "Right. Thank you." },
            { who: "ziad", text: "Next." },
            { who: "samer", text: "Good morning. Certificate of origin, and I have been sent away twice this year, so may I check the whole list with you before I start?" },
            { who: "ziad", text: "Go on." },
            { who: "samer", text: "Stamped commercial invoice, packing list with the pallet count matching, a copy of the registration, form 4B, and a fee receipt from window three. Is that all of it?" },
            { who: "ziad", text: "That is all of it. The pallet count is the one that catches people." },
            { who: "samer", text: "Matching exactly, or within a pallet?" },
            { who: "ziad", text: "Exactly. One out and I cannot take it." },
            { who: "samer", text: "And if I find the counts differ, what do I do — amend the invoice or the packing list?" },
            { who: "ziad", text: "Whichever is wrong. But they must be reissued, not corrected by hand. A pen mark on either and I cannot accept them." },
            { who: "samer", text: "That is the thing I did not know. Last time I crossed out a figure and initialled it." },
            { who: "ziad", text: "Then that is why you were sent away. Nobody tells you, because you do not ask." },
            { who: "samer", text: "One more. Window three closes at one. If I am here at twelve, is two days still two days?" },
            { who: "ziad", text: "Yes. Lodged before two counts as today. After two it counts as tomorrow, and Friday counts as nothing." },
            { who: "samer", text: "Can I lodge for two consignments at once, or is it one application each?" },
            { who: "ziad", text: "One each. People try to put two invoice numbers on one form and I have to refuse it, which wastes their morning and mine." },
            { who: "samer", text: "Understood. And can somebody else collect it, or does it have to be me?" },
            { who: "ziad", text: "Anyone with a letter from your company and their own identity card. The letter must name the person and the certificate number." },
            { who: "samer", text: "The certificate number, which I will not have until it is issued." },
            { who: "ziad", text: "You will have it on the receipt I give you when you lodge. That is the number that goes on the letter." },
            { who: "samer", text: "Then I will write the letter here, after I have the receipt, rather than bringing one from the office." },
            { who: "ziad", text: "That is what the people who manage it in one visit do. You are nearly one of them." } ] },
        items: [
          { q: "What does Marwan get from the clerk?",
            options: [
              { text: "The list, and two details he thought to ask about.", correct: true,
                why: "He asks about the window and the copy, and stops. Everything else he will find out by being turned away." },
              { text: "The complete procedure.", why: "He never learns the pallet count rule or the no-pen-marks rule." },
              { text: "Nothing useful.", why: "He gets the list, which is most of it." } ] },
          { q: "How does Samer open?",
            options: [
              { text: "By saying he has been sent away twice and asking to check the whole list.", correct: true,
                why: "It tells the clerk why the questions are coming and makes helping him worth the time." },
              { text: "By asking which window.", why: "That was Marwan." },
              { text: "By complaining.", why: "He states the fact without blaming anyone for it." } ] },
          { q: "What does Samer do that Marwan does not?",
            options: [
              { text: "He reads the whole list back and asks whether it is complete.", correct: true,
                why: "Unit 6's habit, used on a stranger. It produces a confirmation and an extra warning." },
              { text: "He writes it down.", why: "Neither of them is described as writing." },
              { text: "He asks for a form.", why: "Both need form 4B." } ] },
          { q: "What does the clerk volunteer after the read-back?",
            options: [
              { text: "That the pallet count is the thing that catches people.", correct: true,
                why: "Unprompted, and it leads to the two most useful exchanges in the scene." },
              { text: "The fee amount.", why: "Never mentioned." },
              { text: "The opening hours.", why: "Those come later, and in answer to a question." } ] },
          { q: "What is the rule about correcting a mismatch?",
            options: [
              { text: "The wrong document must be reissued, not corrected by hand.", correct: true,
                why: "<i>A pen mark on either and I cannot accept them.</i>" },
              { text: "Cross it out and initial it.", why: "Exactly what got Samer sent away last time." },
              { text: "Either document may be amended.", why: "Whichever is wrong — but reissued, which is the part that matters." } ] },
          { q: "Why did Samer not know that rule before?",
            options: [
              { text: "Because nobody volunteers it unless asked.", correct: true,
                why: "The clerk says so plainly, and without resentment: <i>nobody tells you, because you do not ask</i>." },
              { text: "Because it is new.", why: "Nothing suggests it changed." },
              { text: "Because the clerk forgot.", why: "He tells Samer as soon as the question is asked." } ] },
          { q: "What is the answer about timing?",
            options: [
              { text: "Lodged before two counts as today; after two it counts as tomorrow.", correct: true,
                why: "And Friday counts as nothing, which he adds without being asked a second time." },
              { text: "Any time on the day counts as that day.", why: "Two o'clock is the cut-off." },
              { text: "It always takes three days.", why: "Two working days, with Friday excluded." } ] },
          { q: "What is the difference in outcome between the two conversations?",
            options: [
              { text: "Samer leaves able to succeed first time; Marwan does not.", correct: true,
                why: "Marwan has the list and none of the rules that decide whether the list is accepted." },
              { text: "Samer gets faster processing.", why: "The timetable is the same for both." },
              { text: "There is no difference.", why: "Two rules and a cut-off separate them." } ] }
        ],
        explain: { terms: [
          { en: "to lodge", gloss: "to submit officially", ar: "يُقدِّم / يودِع" },
          { en: "to send someone away", gloss: "to refuse to deal with them that day", ar: "يردّه خائبًا" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "Ask so the answer is complete", letter: "A",
        concepts: ["speak", "approval"],
        kind: "phrases", task: null, n: 0,
        prompt: "The phrases that got Samer the complete procedure. Click each one.",
        note: { kind: "life", title: "The clerk is not withholding anything",
                body: "<p>He answers every question fully and volunteers almost nothing. That is not obstruction; it is what happens when someone has explained the same thing four hundred times. The questions are yours to bring.</p>" },
        text: "I have been sent away twice this year, so may I check the whole list with you before I start? Is that all of it? Matching exactly, or within a pallet? And if I find the counts differ, what do I do? That is the thing I did not know. If I am here at twelve, is two days still two days?",
        phrases: [
          { text: "I have been sent away twice this year, so may I check the whole list with you?",
            why: "Gives the clerk a reason to spend time, and signals that the questions are not idle." },
          { text: "Is that all of it?",
            why: "Four words, asked after reading the list back. It is the question that lets the clerk add the thing you did not know to ask about." },
          { text: "Matching exactly, or within a pallet?",
            why: "Offers two specific readings of a word. Far better than <i>what do you mean by matching</i>, which asks the clerk to guess what you do not understand." },
          { text: "And if I find the counts differ, what do I do?",
            why: "Asks about the failure case. This is where the no-pen-marks rule lives, and nothing else would have reached it." },
          { text: "If I am here at twelve, is two days still two days?",
            why: "A concrete scenario rather than an abstract question about opening hours. It gets a precise answer because it asks a precise thing." }
        ],
        after: "<p>Five questions, about ninety seconds, and the difference between succeeding first time and a third wasted morning.</p>" },

      { id: "2b", section: 2, sectionTitle: "Ask so the answer is complete", letter: "B",
        concepts: ["approval", "sequence"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table of questions worth asking at any counter.",
        caption: "Five questions, and what each one finds",
        head: ["Question", "What it finds", "Why it is missed"],
        rows: [
          ["Is that all of it?", "The item nobody thought to ___ ", "It feels like the list is finished"],
          ["Exactly, or approximately?", "How much ___ there is", "The word sounded clear"],
          ["What do I do if it is ___ ?", "The rule about corrections", "You expect to get it right"],
          ["If I come at twelve, does it still count as ___ ?", "The real cut-off", "Opening hours are not cut-offs"]
        ],
        gaps: [
          { answer: "mention", why: "The pallet count rule arrived only because Samer asked whether the list was complete." },
          { answer: "tolerance", why: "<i>Matching</i> could have meant within one. It did not, and one pallet would have cost a day." },
          { answer: "wrong", why: "The failure case is where the expensive rules hide, and almost nobody asks about it." },
          { answer: "today", why: "The window closes at two; whether two o'clock is the deadline for lodging is a separate fact." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Ask so the answer is complete", letter: "C",
        concepts: ["recall", "approval"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people at counters. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Marwan", detail: "Takes the list, asks two follow-ups, and leaves." },
          { id: "c2", label: "Rania", detail: "Is told the counts must match and assumes one pallet either way is fine." },
          { id: "c3", label: "Jamil", detail: "Finds an error on his packing list and corrects it neatly in pen." },
          { id: "c4", label: "Dana", detail: "Arrives at half past one and expects to finish that day." }
        ],
        takeaways: [
          { text: "Ask whether the list is complete.", caseId: "c1",
            why: "Four words would have got him the pallet count rule, which is the one that sends most people away." },
          { text: "Offer two readings of an ambiguous word.", caseId: "c2",
            why: "<i>Exactly, or within a pallet?</i> The clerk answers precisely because the question was precise." },
          { text: "Ask what to do when it is wrong.", caseId: "c3",
            why: "A pen mark voids the document. The rule exists, and only the failure-case question reaches it." },
          { text: "A closing time and a cut-off are different facts.", caseId: "c4",
            why: "Window three closes at one and this one at two, and lodging before two is what counts as today." }
        ],
        closer: "<p>Next unit: how the business has changed, where <i>used to</i> and the present perfect continuous do the work.</p>" }

    ]
  };
})();
