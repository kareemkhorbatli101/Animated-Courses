/* Unit 8 · How the Business Has Changed — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u08-tw", unit: "u08", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the bank letter and the incident report, and answer about change",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "time"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the covering letter for the five-year review. Sixty to eighty words.",
        scenarioTitle: "To the bank",
        scenario: "You are Nour. The bank has asked for a five-year review before renewing a facility. Turnover fell from 46.1m to 28.4m and has recovered to 41.2m. Two changes are structural. The figures are not adjusted for inflation. You will not reach 2019 levels before 2027.",
        to: "Mr Samir Atassi, Bank of Hama",
        re: "Five-year review — covering note",
        placeholder: "Dear Mr Atassi,\n\n",
        minWords: 60,
        frames: [
          "I attach … as you asked.",
          "In short: … fell from … to … and has recovered to …",
          "Two of the changes are structural rather than …",
          "I should say plainly that …",
          "I am happy to …"
        ],
        note: { kind: "writer", title: "Say the unflattering thing yourself",
                body: "<p>A bank will find the inflation point and the 2027 date whether or not you raise them. Raising them yourself costs nothing and changes how the rest of the document is read.</p>" },
        checklist: [
          "Is the shape of the five years given in one sentence?",
          "Have you distinguished structural from cyclical?",
          "Have you raised the inflation point yourself?",
          "Have you given the honest date for full recovery?",
          "Have you offered to discuss it?"
        ],
        modelJobs: [
          "Says what is attached",
          "Summarises in one sentence",
          "Distinguishes the kinds of change",
          "Raises the unflattering point",
          "Offers to discuss"
        ],
        model: "Dear Mr Atassi,\n\nI attach the five-year review you asked for.\n\nIn short: turnover fell from 46.1 million in 2019 to 28.4 in 2021 and has recovered to 41.2 last year, with output following the same shape more slowly.\n\nTwo of the changes are structural rather than cyclical. Our dye plant closed in 2019 and will not reopen, and the second shift ended in 2021 and has not returned.\n\nI should say plainly that none of these figures is adjusted for inflation, and that on current trends we will not reach 2019 levels before 2027.\n\nI am happy to go through any of it with you.\n\nNour Haddad" },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the incident report on the lost batch. Sixty to eighty words.",
        scenarioTitle: "Incident report — 400 metres",
        scenario: "Generator out 22 minutes on Thursday with the dark blue in the bath. 400 of 1,200 metres second quality. Fadi held the remaining 800. Four cut-outs since Monday of last week; three of them after two o'clock. Service booked; dyeing moved to mornings.",
        to: "File, copied to the owner",
        re: "Incident — batch loss, order 4417",
        placeholder: "",
        minWords: 60,
        frames: [
          "What happened: …",
          "Cost: …",
          "What was done at the time: …",
          "Pattern: …",
          "Actions: …"
        ],
        note: { kind: "writer", title: "An incident report is read a year later",
                body: "<p>Write it for someone who has forgotten everything, including who Fadi is. Headings, numbers and dates. No narrative and no blame, because both age badly.</p>" },
        checklist: [
          "Is the duration of the outage there?",
          "Is the loss quantified against the total?",
          "Is the action taken at the time recorded?",
          "Is the pattern — four cut-outs, three after two — included?",
          "Are the actions listed with their status?"
        ],
        modelJobs: [
          "What happened",
          "What it cost",
          "What was done at the time",
          "The pattern",
          "The actions"
        ],
        model: "What happened: on Thursday the generator was out for 22 minutes while the dark blue for order 4417 was in the dye bath. The temperature fell and the dye took unevenly.\n\nCost: 400 of 1,200 metres are second quality. Usable, not saleable as first.\n\nWhat was done at the time: the shift supervisor held the remaining 800 metres rather than running them into the same bath.\n\nPattern: four cut-outs since Monday of the previous week, three of them after 14:00. Generator hours have been logged since January.\n\nActions: generator service booked this week; dyeing moved to mornings until it is complete." },

      { id: "2a", section: 2, sectionTitle: "Answer about change", letter: "A",
        concepts: ["speak", "time"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How has your company changed over the last few years?",
        model: "Two things changed permanently. We used to dye our own cloth on site, and that plant closed in 2019 when power costs made it uneconomic; the dyeing has been subcontracted ever since. And we used to run two shifts, which we have not done since 2021. The third change is different — our market mix moved. Iraq used to be about a third of sales and is now under ten per cent, with Jordan taking its place. We have been rebuilding capacity since 2022 and utilisation has gone from sixty-two per cent to seventy-one." },

      { id: "2b", section: 2, sectionTitle: "Answer about change", letter: "B",
        concepts: ["speak", "escalation"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "How do you report a problem to your manager?",
        model: "Four things, always in the same order. What happened, with a number in it — four cut-outs, twenty minutes each, not <i>it keeps cutting out</i>. What it has cost so far, even when the answer is nothing, because that tells her how fast to move. What it will cost if nothing changes, which is the part most people leave out and the only part that makes anyone act. And what I have already done and what I want from her. If I bring those four she can decide in under a minute." },

      { id: "2c", section: 2, sectionTitle: "Answer about change", letter: "C",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time keeping a record helped you.",
        model: "We had a generator cutting out and nobody could say how often, so nothing happened about it. I had been logging the running hours since January, more out of habit than for any reason. When I finally looked at the log, three of the four cut-outs had been after two in the afternoon. That gave us a fix that cost nothing: move the dyeing to the mornings until the generator is serviced. Without the log it was an impression, and an impression does not change anybody's schedule." },

      { id: "2d", section: 2, sectionTitle: "Answer about change", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "How much should a company tell a customer about its own difficulties?",
        model: "The part that affects them, in plain words, and not more. If our dye plant closed and that added three days to every lead time, a buyer needs to know the three days. They do not need four paragraphs about why it closed. What I would avoid is both extremes — pretending nothing happened, which a visit to the workshop disproves, and dramatising it, which makes a buyer wonder whether we will still be here next year. Plain, dated and specific, with a number that shows the direction." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "time"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "We did not use to hold four weeks of yarn.", correct: true, why: "The <i>-d</i> is on <i>did</i>, so <i>use</i> is bare." },
              { text: "We did not used to hold four weeks of yarn.", why: "The past is marked twice." },
              { text: "We used not hold four weeks of yarn.", why: "Not a possible structure in modern English." } ] },
          { q: "What does <i>used to</i> always imply?", from: "Lesson 3", recall: true,
            options: [
              { text: "That it has stopped.", correct: true, why: "The ending is inside the words. Nothing else has to say it." },
              { text: "That it continues.", why: "That is the present perfect continuous." },
              { text: "That it happened once.", why: "That is the simple past with a date." } ] },
          { q: "Which form says something started and has not stopped?", from: "Lesson 3", recall: true,
            options: [
              { text: "We have been rebuilding capacity since 2022.", correct: true, why: "Present perfect continuous with a starting point." },
              { text: "We rebuilt capacity in 2022.", why: "Finished, in one year." },
              { text: "We used to rebuild capacity.", why: "A past habit that has ended." } ] },
          { q: "A market's share rises from 44% to 54% while the total falls. What happened in money?", from: "Lesson 5", recall: true,
            options: [
              { text: "It rose, but much less than the share suggests.", correct: true,
                why: "44% of 46.1 is 20.3; 54% of 41.2 is 22.2." },
              { text: "It rose by ten per cent.", why: "Percentage points of share are not a percentage rise in money." },
              { text: "It fell.", why: "It rose, modestly." } ] },
          { q: "What does a problem report need that most reports lack?", from: "At Work", recall: true,
            options: [
              { text: "What it will cost if nothing changes.", correct: true,
                why: "The only forward-looking part, and the one that makes someone act." },
              { text: "An apology.", why: "Nobody in this unit apologises for a power cut." },
              { text: "A longer explanation.", why: "The best report in the unit was six sentences." } ] },
          { q: "<i>We used to dye</i> — which sound is the s?", from: "Lesson 4", recall: true,
            options: [
              { text: "/s/, unvoiced.", correct: true, why: "<i>Used to</i> is one unit, and it is nearly <i>use-to</i>." },
              { text: "/z/, voiced.", why: "That is the ordinary verb: <i>we used a subcontractor</i>." },
              { text: "Either — it makes no difference.", why: "It is the difference between two sentences about different things." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "We have been rebuilding capacity since from 2022.", correct: true,
                why: "<i>Since</i> already means from that point." },
              { text: "We have been rebuilding capacity since 2022.", why: "The corrected version." },
              { text: "We have been rebuilding capacity for two years.", why: "Correct, with a length instead of a point." } ] },
          { q: "What makes a change structural rather than cyclical?", from: "Lesson 5", recall: true,
            options: [
              { text: "It will not reverse when conditions improve.", correct: true,
                why: "And calling something structural is a claim that should be argued for." },
              { text: "It is large.", why: "Size is not the test." },
              { text: "It happened recently.", why: "Nor is recency." } ] },
          { q: "Figures with no inflation adjustment are described how?", from: "Lesson 5", recall: true,
            options: [
              { text: "In nominal terms.", correct: true, why: "As recorded, which over five years matters a great deal." },
              { text: "In real terms.", why: "That is the adjusted version." },
              { text: "On a comparable basis.", why: "That signals an adjustment has been made." } ] },
          { q: "When is a decision yours to take without asking?", from: "At Work", recall: true,
            options: [
              { text: "When it costs nothing and is reversible.", correct: true,
                why: "Nour's two tests, offered as a usable rule." },
              { text: "When your manager is unavailable.", why: "Availability is not authority." },
              { text: "When you are confident.", why: "Confidence is not a test of anything." } ] },
          { q: "Two clients ask about longer payment terms in a fortnight. Worth mentioning?", from: "At Work", recall: true,
            options: [
              { text: "Yes — it is the only number anyone has, and it is early.", correct: true,
                why: "Small and early beats large and late." },
              { text: "No — two is not a pattern.", why: "It is the only evidence available, and waiting makes it worse evidence, not better." },
              { text: "Only if a third one asks.", why: "By then the trend is a month older." } ] },
          { q: "A log shows three of four faults after 14:00. What is that worth?", from: "At Work", recall: true,
            options: [
              { text: "A fix that costs nothing — move the work to the morning.", correct: true,
                why: "The log turned an impression into a free change of schedule." },
              { text: "Nothing, without more data.", why: "It produced an action the same afternoon." },
              { text: "Proof that the generator is faulty.", why: "It was known to be faulty. The log found the pattern." } ] }
        ] }

    ]
  };
})();
