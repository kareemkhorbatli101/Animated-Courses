/* Unit 11 · Reports and Processes — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u11-l4", unit: "u11", block: "l4", up: "../", tab: "AT WORK",
    objective: "Explain a process on the telephone, and hear whether a sentence is asking or telling",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Explaining a process", letter: "A",
        concepts: ["listen", "evidence"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six questions about how you work. Choose the answer that describes a process rather than an intention.",
        note: { kind: "life", title: "Describe what happens, not what should",
                body: "<p>A client asking how you inspect wants the present passive: what <i>is</i> done, every time. <i>We try to</i> and <i>we always aim to</i> describe an intention, and an intention cannot be relied on.</p>" },
        items: [
          { who: "rana", say: "How do you check the shade?",
            options: [
              { text: "Every batch is sampled at five per cent and measured against the swatch.", correct: true,
                why: "Present passive, a number, and the standard it is measured against." },
              { text: "We are very careful with shade.", why: "An attitude. Nothing in it can be checked or repeated." },
              { text: "Our dyers are experienced.", why: "True perhaps, and it is not a process." } ] },
          { who: "rana", say: "What happens if a piece is outside tolerance?",
            options: [
              { text: "Shade faults go for rework; weave faults are scrapped.", correct: true,
                why: "Two outcomes, two causes, and the rule is stated rather than described case by case." },
              { text: "We would look at it.", why: "A conditional about one occasion where a rule exists." },
              { text: "It depends how bad it is.", why: "Which may be true and is the answer that makes a buyer ask for your procedure." } ] },
          { who: "rana", say: "Who decides between rework and scrap?",
            options: [
              { text: "The shift supervisor, and the reason is recorded.", correct: true,
                why: "A role rather than a name, which survives staff changes, plus the record that makes it checkable." },
              { text: "It is a team decision.", why: "A decision everyone owns is a decision nobody made." },
              { text: "Whoever is there.", why: "Honest and alarming." } ] },
          { who: "rana", say: "Could you send me the inspection sheet for my batch?",
            options: [
              { text: "Yes — it has the batch number and the sample size on it.", correct: true,
                why: "Agrees and says what she will see, so there are no surprises when it arrives." },
              { text: "They are internal.", why: "Possibly, and refusing without a reason reads as concealment." },
              { text: "I will see if we still have it.", why: "Suggests records may not exist, which is worse than the request." } ] },
          { who: "rana", say: "Has this ever happened before?",
            options: [
              { text: "Twice this year, both shade, both reworked.", correct: true,
                why: "A count, a cause and an outcome. From Unit 3: a number beats an adjective." },
              { text: "Very rarely.", why: "The word a buyer has learned to translate as <i>more often than I will say</i>." },
              { text: "Never.", why: "Easily disproved by the inspection sheets she has just been offered." } ] },
          { who: "rana", say: "How do I know the sample was really taken across the run?",
            options: [
              { text: "The sheet records where each piece came from.", correct: true,
                why: "Points at the evidence rather than asserting the practice." },
              { text: "You have my word.", why: "Which she will accept and will not be able to use." },
              { text: "That is how we always do it.", why: "The claim she is testing." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Explaining a process", letter: "B",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more. Here the right answer gives credit where it is due.",
        items: [
          { who: "nour", say: "The shade problem was caught before dispatch. Well done.",
            options: [
              { text: "It was Marwan who caught it — he resampled when the first set looked even.", correct: true,
                why: "Names the person and says what they actually did, which is what makes credit mean something." },
              { text: "Thank you.", why: "Accepts credit for somebody else's work, usually without meaning to." },
              { text: "It was just the process working.", why: "True and it erases the person who made the process work." } ] },
          { who: "fadi", say: "I only did what the procedure says.",
            options: [
              { text: "The procedure says resample if in doubt, and most people do not.", correct: true,
                why: "Refuses the deflection with a specific observation rather than with a compliment." },
              { text: "Still, well done.", why: "Polite, and it lets the deflection stand." },
              { text: "That is what it is for.", why: "Agrees that he did nothing notable." } ] },
          { who: "lina", say: "The report was much clearer this month.",
            options: [
              { text: "That was Fadi's change — he split the defects from the non-conformances.", correct: true,
                why: "Credit, with the specific change named. Anybody can check whether it was a good one." },
              { text: "Thanks, I rewrote it.", why: "If it was Fadi's change, this is the sentence that stops him making the next one." },
              { text: "It is the same template.", why: "Untrue, and it hides an improvement worth keeping." } ] },
          { who: "samer", say: "Who should I thank for getting the sheet to me so quickly?",
            options: [
              { text: "Al-Masri — she keeps them filed by batch number rather than by date.", correct: true,
                why: "A name and the reason it was quick, which also teaches the asker something." },
              { text: "The office.", why: "Nobody can be thanked by department." },
              { text: "It was no trouble.", why: "Answers a different question and keeps the credit." } ] },
          { who: "nour", say: "Whose idea was the batch number field?",
            options: [
              { text: "Al-Masri's, after the audit finding.", correct: true,
                why: "Short, and it connects the idea to what prompted it, which is usually the interesting part." },
              { text: "It came out of the meeting.", why: "Meetings do not have ideas; people in them do." },
              { text: "I am not sure.", why: "It was two weeks ago and is in the minutes." } ] },
          { who: "fadi", say: "You did not have to say that in front of everyone.",
            options: [
              { text: "I did — nobody knows what you fixed unless I say so.", correct: true,
                why: "Credit given privately is a kindness; credit given publicly is a record." },
              { text: "Sorry.", why: "Apologises for the one thing worth doing." },
              { text: "It is nothing.", why: "Confirms his suspicion that it was." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from a process call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "Samer explains the inspection process to the client. Fill in the form as you listen.",
        audio: { track: "u11-process", label: "Call: explaining the inspection",
          lines: [
            { who: "rana", text: "Walk me through what happens between the cloth coming off the loom and leaving you." },
            { who: "samer", text: "It goes to finishing first, then to the inspection bench. Every batch is inspected; none goes out unchecked." },
            { who: "rana", text: "What is sampled?" },
            { who: "samer", text: "Five per cent, taken at random across the full width and length. Never from one end, because that would test only the start of the run." },
            { who: "rana", text: "And what is it measured against?" },
            { who: "samer", text: "The specification, with the tolerance on it. For shade that is measured against the swatch you approved." },
            { who: "rana", text: "If something fails?" },
            { who: "samer", text: "Shade faults go for rework, because a second bath can correct them. Weave faults are scrapped, because they cannot be corrected and reworking one wastes a bath." },
            { who: "rana", text: "Who decides?" },
            { who: "samer", text: "The shift supervisor, and the reason is written on the inspection sheet. That sheet carries the batch number, the sample size and where each piece came from." },
            { who: "rana", text: "Can I see the sheet for my batch?" },
            { who: "samer", text: "Yes. I will send it with the dispatch note. One thing I should say: the shade fault on your last batch was found by Marwan, who resampled when the first set looked even. The procedure allows that and most people do not do it." },
            { who: "rana", text: "That is the most useful thing you have told me today." } ] },
        title: "Inspection process — notes",
        lines: [
          "Order: loom, then ___ , then the inspection bench",
          "Sample: ___ per cent, taken at random",
          "Taken across the full ___ and length, never from one end",
          "Measured against the specification and, for shade, the ___ ",
          "Shade faults: ___ ",
          "Weave faults: ___ ",
          "Decided by the shift ___ , with the reason written down",
          "The sheet carries the batch number, the sample size and where each ___ came from"
        ],
        gaps: [
          { answer: "finishing", why: "The stage between the loom and the bench, and the one where the dye is applied." },
          { answer: "five", why: "A figure rather than <i>a sample</i>, which is what makes the answer checkable." },
          { answer: "width", why: "Width and length both, and he gives the reason for ruling out one end." },
          { answer: "swatch", why: "The specific standard for shade, and one the client herself approved." },
          { answer: "rework", why: "Because a second bath can correct them — the reason comes with the rule." },
          { answer: "scrapped", why: "Because they cannot be corrected. The asymmetry is the whole of the rule." },
          { answer: "supervisor", why: "A role, not a name, which survives a change of staff." },
          { answer: "piece", why: "The detail that answers her unasked question about whether the sampling really was across the run." }
        ],
        note: { kind: "life", title: "He named Marwan",
                body: "<p>The last thing he says is the thing she calls most useful, and it is not about the process at all. It is that a named person did something the procedure allows and most people skip.</p>" },
        explain: { terms: [
          { en: "swatch", gloss: "a small sample of fabric used as the colour standard", ar: "عيّنة لونية" },
          { en: "to walk someone through", gloss: "to explain step by step", ar: "يشرح خطوة بخطوة" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English tells you whether a sentence is a question by where the pitch goes at the end, and the words often do not change at all.</p><p><b>Falling</b> at the end means telling, or a <i>wh-</i> question. <b>Rising</b> means asking, or checking.</p><p><i>The batch is ready.</i> — falling, a statement.<br><i>The batch is ready?</i> — rising, and now it is a question with no grammar to mark it.</p>",
        items: [
          { say: "The batch is ready ↓", options: [
            { text: "The batch is ready ↓", correct: true, why: "Falling. A statement, and the listener is being told." },
            { text: "The batch is ready ↑", why: "Rising. The same five words asking whether it is, which is how most checking questions are formed in speech." } ] },
          { say: "Who signed the sheet ↓", options: [
            { text: "Who signed the sheet ↓", correct: true, why: "A <i>wh-</i> question falls at the end. Rising here would sound incredulous rather than enquiring." },
            { text: "Who signed the sheet ↑", why: "Rising on a <i>wh-</i> question reads as surprise or disbelief: <i>who signed it?</i>" } ] },
          { say: "Is the sample taken across the run ↑", options: [
            { text: "Is the sample taken across the run ↑", correct: true, why: "A yes/no question rises. The grammar is already inverted and the pitch agrees with it." },
            { text: "Is the sample taken across the run ↓", why: "Falling on a yes/no question sounds like a challenge rather than a question." } ] },
          { say: "You resampled it ↑", options: [
            { text: "You resampled it ↑", correct: true, why: "Rising turns a statement into a check. No auxiliary, no inversion, and it is still a question." },
            { text: "You resampled it ↓", why: "Falling makes it a statement of fact, which is a different thing to say to somebody." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line twice: once falling, once rising. Hear how much changes without a word moving.",
        speaker: "samer",
        lines: [
          "Every batch is inspected before it leaves.",
          "The sample is taken across the full run.",
          "Marwan resampled when the first set looked even.",
          "You would like the inspection sheet as well."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the call in 2A.",
        items: [
          { answer: "Every batch is inspected and none goes out unchecked.",
            why: "Present passive and then an active negative. Both halves say the same thing differently." },
          { answer: "Five per cent is taken at random across the run.",
            why: "The figure first, which is where a listener expects it." },
          { answer: "Shade faults go for rework and weave faults are scrapped.",
            why: "Active and passive in one sentence, chosen rather than habitual." },
          { answer: "The reason is written on the inspection sheet.",
            why: "Passive, because who wrote it does not matter." },
          { answer: "It was found by Marwan who resampled the batch.",
            why: "The one <i>by</i> phrase in the whole call, and the only place it earns its keep." }
        ],
        closer: "<p>Four of those five are passive and the fifth names a person. That is the shape of a good process explanation: the system in the passive, the people in the active.</p>" }

    ]
  };
})();
