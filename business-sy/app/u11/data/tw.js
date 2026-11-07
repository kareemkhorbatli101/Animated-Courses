/* Unit 11 · Reports and Processes — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u11-tw", unit: "u11", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the revised procedure and the client's answer, and answer about process",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "sequence"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the revision to the inspection procedure agreed in the meeting. Sixty to eighty words.",
        scenarioTitle: "Inspection procedure — revision 4",
        scenario: "A note goes under step two: if a sample looks unusually uniform, a second sample is taken. The note carries Marwan Dib's name. Once a month ten inspection sheets are read back at random and the sampling positions checked for spread. Fadi Nassar fills the position field; Lina al-Masri reads the sheets back. The revision history records that Fadi added the position field in March.",
        to: "Inspection room and export office",
        re: "Inspection procedure — revision 4, effective 1 June",
        placeholder: "",
        minWords: 60,
        frames: [
          "A note is added under step two: … .",
          "The note is recorded in the name of … .",
          "Once a month, … sheets are … and the positions … .",
          "… fills the position field. … reads the sheets back.",
          "The revision history records that … ."
        ],
        note: { kind: "writer", title: "Passive for the process, active for the people",
                body: "<p>The steps are things that happen to cloth and to paper, so they take the present passive. The ownership lines name people and take the active, because an owner in the passive is an owner nobody can find.</p>" },
        checklist: [
          "Is the new note written as a rule in the present passive?",
          "Is Marwan Dib named against the note?",
          "Does the monthly check have a number and what is checked?",
          "Are the two owners named in the active voice?",
          "Does it credit the position field to Fadi Nassar in March?"
        ],
        modelJobs: [
          "The new note under step two",
          "Whose note it is",
          "The monthly read-back",
          "The two owners, separated",
          "The revision history and the credit"
        ],
        model: "A note is added under step two. If a sample looks unusually uniform, a second sample is taken across the run.\n\nThe note is recorded in the name of Marwan Dib, who found the shade fault on batch 2219 by resampling.\n\nOnce a month ten inspection sheets are drawn at random and the sampling positions on them are checked for spread. Twenty minutes is allowed for this.\n\nFadi Nassar fills the position field. Lina al-Masri reads the sheets back. Neither does the other's part.\n\nThe revision history records that the position field was added by Fadi Nassar in March, after the audit." },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "evidence"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write to the client about the procedure change. Sixty to eighty words.",
        scenarioTitle: "Telling Levant Home",
        scenario: "Rana Sayegh asked how shade is checked. Since then the procedure has been revised. She should hear what changed, who found the gap, and what she will now see on her inspection sheet. Do not claim the change was your idea and do not claim the problem is solved.",
        to: "Rana Sayegh, Levant Home",
        re: "Inspection procedure — what has changed",
        placeholder: "Dear Ms Sayegh,\n\n",
        minWords: 60,
        frames: [
          "Further to your questions about … , the procedure has been revised.",
          "The gap was found by … , who … .",
          "Two things have changed: … and … .",
          "On your own sheets you will now see … .",
          "I am not claiming … . What I can say is … ."
        ],
        note: { kind: "writer", title: "What to avoid in a formal report",
                body: "<p>Three things: claiming a result you have not measured, using the passive to hide who did something, and describing a change as a solution. The letter is stronger if it says what has changed and declines to promise the consequence.</p>" },
        checklist: [
          "Does it say what prompted the revision?",
          "Is the person who found the gap named?",
          "Are both changes stated plainly?",
          "Does it say what she will see on her own paperwork?",
          "Does it stop short of promising no more shade faults?"
        ],
        modelJobs: [
          "What prompted the revision",
          "Who found the gap, by name",
          "The two changes",
          "What the client will see",
          "The claim that is not made"
        ],
        model: "Dear Ms Sayegh,\n\nFurther to your questions about shade, our inspection procedure has been revised.\n\nThe gap was found by Marwan Dib in our inspection room, who resampled a batch because the first sample looked unusually uniform, and found a shade fault in the second.\n\nTwo things have changed. That resampling is now written into the procedure under his name, and once a month ten sheets are read back to check that sampling really was spread across the run.\n\nOn your own sheets you will now see the position each sampled piece came from.\n\nI am not claiming that this ends shade faults. What I can say is that an unspread sample will now be found.\n\nSamer Khoury" },

      { id: "2a", section: 2, sectionTitle: "Answer about process", letter: "A",
        concepts: ["speak", "sequence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Describe a process you are responsible for.",
        model: "Woven cotton is inspected after finishing and before dispatch. The batch is booked in, the customer specification is drawn from the file, and five per cent is sampled at random across the full width and length — never from one end, because a run can drift. Each piece is measured for shade against the approved swatch, and for width, weight and weave. The results go on the inspection sheet with the position each piece came from. Anything outside tolerance is classified: shade faults for rework, weave faults for scrap. Then the supervisor signs and records the reason." },

      { id: "2b", section: 2, sectionTitle: "Answer about process", letter: "B",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "How do you know a procedure is actually being followed?",
        model: "Because something it produces can be read back. We had a step that said sample across the run, and for years nothing in the world could tell whether anybody had. Fadi Nassar added a field for the position each piece came from, and that made the step checkable for the first time. Even then the field was filled in and never looked at, which is not a control — a record nobody reads is just paper. So now ten sheets a month are drawn at random and the positions checked for spread, and the person who reads them is not the person who fills them in." },

      { id: "2c", section: 2, sectionTitle: "Answer about process", letter: "C",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a contribution a colleague made that you were able to build on.",
        model: "Marwan Dib resampled a batch because the first sample looked unusually uniform, and the second one had a shade fault in it. The procedure allowed that and did not require it, and almost nobody does it. We were able to turn it into a note under step two: if a sample looks unusually uniform, a second one is taken. It is written as a note rather than a rule, because a rule to resample whenever cloth looks even would be ignored within a month. His name is on the revision history, which is the part people actually read." },

      { id: "2d", section: 2, sectionTitle: "Answer about process", letter: "D",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Should a supplier tell a client about a fault it has already corrected?",
        model: "Yes, and our procedure makes it compulsory before the decision is reached rather than after it. The instinct is to wait until you know what you are going to do, and the cost of waiting is that the client learns you knew first. We were able to change that with one clause: above two per cent the batch is held and the customer is told the same day, whether or not a decision has been reached. It reads as a small thing. What it really does is remove the excuse that we were still looking into it." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "word"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right for a procedure?", from: "Lesson 3", recall: true,
            options: [
              { text: "Five per cent is sampled at random.", correct: true,
                why: "Present passive. The reader does not need to know who samples, and the rule holds whoever is on shift." },
              { text: "Five per cent is being sampled at random.", why: "The present continuous passive describes what is happening now, not a standing rule." },
              { text: "We are sampling five per cent at random.", why: "True of today. A procedure has to be true of every day." } ] },
          { q: "When does the passive need <i>by</i>?", from: "Lesson 3", recall: true,
            options: [
              { text: "When the agent is news.", correct: true,
                why: "<i>It was found by Marwan</i> — the whole point is who. <i>The sheet is signed by the supervisor</i> earns it too, because the role is the rule." },
              { text: "Whenever there is an agent.", why: "There is always an agent. Naming it is a choice." },
              { text: "In formal writing.", why: "Formal writing is where <i>by</i> is dropped most, which is how the passive gets its reputation for hiding people." } ] },
          { q: "<i>The gap was found by Fadi.</i> Why not the active?",
            from: "Lesson 3", recall: true,
            options: [
              { text: "Either works; the passive puts the gap first.", correct: true,
                why: "Voice is about order, not about truth. Put first whatever the sentence is about." },
              { text: "The active would be wrong.", why: "<i>Fadi found the gap</i> is correct and is often better." },
              { text: "The passive is more polite.", why: "It is not a politeness system." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "We were able to find the fault before dispatch.", correct: true,
                why: "<i>Was able to</i> for a single success in the past. <i>Could</i> would describe a general ability." },
              { text: "We could find the fault before dispatch.", why: "Reads as <i>we were in a position to</i> rather than <i>we did</i>." },
              { text: "We can able to find the fault.", why: "<i>Able</i> never follows a modal." } ] },
          { q: "Which noun is correctly formed with <i>-ment</i>?", from: "Lesson 1", recall: true,
            options: [
              { text: "measurement", correct: true,
                why: "<i>Measure</i> keeps its <i>e</i>. The suffix makes a noun of the act or the result of the verb." },
              { text: "assessment of judgement of agreement", why: "All three are real words; this is not a word." },
              { text: "inspectment", why: "<i>Inspect</i> takes <i>-ion</i>. The suffix is not a free choice." } ] },
          { q: "<i>Three pieces were found to be outside tolerance.</i> What is wrong with <i>outside of tolerance</i>?",
            from: "Lesson 3", recall: true,
            options: [
              { text: "<i>Outside</i> takes no preposition here.", correct: true,
                why: "As with <i>inside the building</i>. The extra <i>of</i> is the commonest single-word error in an inspection report." },
              { text: "Nothing — both are correct.", why: "<i>Outside of</i> exists in American speech and not in a specification." },
              { text: "<i>Tolerance</i> should be plural.", why: "A tolerance is a single limit on one measure." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "What is the difference between a step and a standard?", from: "Lesson 5", recall: true,
            options: [
              { text: "A step is done; a standard is reached, usually with a number.", correct: true,
                why: "A procedure with steps and no standards cannot fail anything." },
              { text: "A standard is more important.", why: "Neither works without the other." },
              { text: "A step is written down and a standard is not.", why: "Both are written down; that is what makes it a procedure." } ] },
          { q: "A bubble looks twice as wide as another. What is the real ratio?",
            from: "Lesson 5", recall: true,
            options: [
              { text: "About four or five times, because size is area.", correct: true,
                why: "Why every bubble in a decent chart carries its figure, and why you read the table when it does not." },
              { text: "Twice.", why: "What the eye reports and what the chart does not mean." },
              { text: "It cannot be worked out.", why: "It can, from the figures, which is the point of printing them." } ] },
          { q: "<i>The batch is ready</i> said with a rising tone. What is it?",
            from: "Lesson 4", recall: true,
            options: [
              { text: "A question, with no grammar to mark it.", correct: true,
                why: "Most checking questions in speech are formed this way. The words do not move at all." },
              { text: "A statement.", why: "That is the falling version." },
              { text: "An order.", why: "Nothing about pitch makes it one." } ] },
          { q: "A <i>wh-</i> question said with a rising tone sounds like what?",
            from: "Lesson 4", recall: true,
            options: [
              { text: "Surprise or disbelief.", correct: true,
                why: "<i>Who signed it?</i> rising is an accusation. <i>Wh-</i> questions fall." },
              { text: "A polite enquiry.", why: "The falling version is the neutral enquiry." },
              { text: "The same as falling.", why: "It is the difference between asking and challenging." } ] },
          { q: "What makes credit a record rather than a compliment?", from: "At Work", recall: true,
            options: [
              { text: "The name, the specific act, and why it mattered.", correct: true,
                why: "A compliment cannot be repeated accurately by somebody who was not in the room." },
              { text: "Saying it privately.", why: "That is the kindness. A witness is what makes it a record." },
              { text: "Writing it in an email.", why: "An email saying <i>well done everyone</i> is still a compliment." } ] },
          { q: "Someone answers your credit with <i>I only added a column</i>. What do you say?",
            from: "At Work", recall: true,
            options: [
              { text: "Name what the column made possible.", correct: true,
                why: "The deflection sounds like modesty and works like erasure. A fact is the only thing that refuses it." },
              { text: "Agree and repeat the praise.", why: "Which lets the deflection stand and ends the credit." },
              { text: "Insist that he is being modest.", why: "An argument about his character instead of about his work." } ] }
        ] }

    ]
  };
})();
