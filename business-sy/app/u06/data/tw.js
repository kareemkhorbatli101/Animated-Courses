/* Unit 6 · Calls and Handovers — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u06-tw", unit: "u06", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the shift proposal and the apology for a lost message, and answer for how you check",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two messages", letter: "A",
        concepts: ["write", "deadline"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Propose the handover window. Sixty to eighty words, and put the cost beside the benefit.",
        scenarioTitle: "Fifteen minutes on Tuesdays and Thursdays",
        scenario: "You are Nour, writing to the owner. The rota has no handover overlap on Tuesdays or Thursdays. Two loom-three stoppages were lost on exactly those days, contributing to nineteen hours of downtime in March. A fifteen-minute paid overlap on two days costs about forty hours a year.",
        to: "Mr Haddad, owner",
        re: "Proposal — paid handover overlap, Tuesdays and Thursdays",
        placeholder: "Dear Father,\n\n",
        minWords: 60,
        frames: [
          "I am proposing …",
          "The reason is that …",
          "In March, …",
          "The cost is about … a year, against …",
          "I would start it from …"
        ],
        note: { kind: "writer", title: "A proposal is an arithmetic problem",
                body: "<p>Name the change, give the evidence, put the cost beside the benefit, give a start date. Everything else is decoration, and an owner reading twenty messages will find the numbers whether you make it easy or not.</p>" },
        checklist: [
          "Is the proposal itself in the first line?",
          "Is the evidence specific — which days, which stoppages?",
          "Is the cost stated as a number?",
          "Is the benefit stated as a number beside it?",
          "Is there a start date?"
        ],
        modelJobs: [
          "States the proposal",
          "Gives the reason",
          "Gives the evidence",
          "Sets cost against benefit",
          "Gives a start date"
        ],
        model: "Dear Father,\n\nI am proposing a fifteen-minute paid overlap between shifts on Tuesdays and Thursdays.\n\nThe reason is that those are the only two days with no handover window. In March, loom three stopped on four shifts and two of those stoppages were never passed on — both on days with no overlap. The loom accounted for nineteen of our thirty-one hours of unplanned downtime.\n\nThe cost is about forty hours a year, against nineteen hours lost in March alone.\n\nI would start it from the first of May.\n\nNour" },

      { id: "1b", section: 1, sectionTitle: "Write the two messages", letter: "B",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "A message you took was wrong and it cost the client a day. Sixty to eighty words.",
        scenarioTitle: "The message that was the wrong way round",
        scenario: "You took a telephone instruction to hold a credit note until the quantity was confirmed. You wrote it down as issue it once the quantity was confirmed, and it went out. The client has now been credited twice. You did not read the instruction back.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Credit note 0318 — our error",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing about … , which was our error.",
          "What happened is that …",
          "The effect on your account is …",
          "What we are doing …",
          "What we have changed …"
        ],
        note: { kind: "writer", title: "Say what you changed, not that you are sorry",
                body: "<p>An apology with no change behind it invites the same apology next quarter. One sentence saying what is now different is worth three sentences of regret, and it is the part a client remembers.</p>" },
        checklist: [
          "Have you said it was your error in the first line?",
          "Have you explained what actually happened, briefly?",
          "Have you said what it means for their account?",
          "Have you said what you are doing to correct it?",
          "Have you said what you have changed so it does not recur?"
        ],
        modelJobs: [
          "Says what it is about and whose fault",
          "Explains briefly",
          "States the effect",
          "Says what is being done",
          "Says what has changed"
        ],
        model: "Dear Ms Darwish,\n\nI am writing about credit note 0318, which was issued in error and is ours, not yours, to put right.\n\nWhat happened is that an instruction given to me by telephone was to hold the credit note until the quantity was confirmed, and I recorded it as the opposite. I did not read it back.\n\nThe effect is that your account has been credited twice. We are reversing the second credit today and I will send you the corrected statement.\n\nWe now read every telephone instruction back before acting on it.\n\nLina Al-Masri" },

      { id: "2a", section: 2, sectionTitle: "Answer about handovers", letter: "A",
        concepts: ["speak", "sequence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you hand work over to someone else?",
        model: "Three things, and I say how many before I start, so they know how many to hold on to. What was finished, what was started and not finished, and what they must not do. The third is the one people leave out and it is the only one that prevents a mistake rather than describing one. Then I ask them to say it back. It takes about eight seconds and it is the only way to find out whether the message landed, because understanding and following feel the same from the inside." },

      { id: "2b", section: 2, sectionTitle: "Answer about handovers", letter: "B",
        concepts: ["speak", "people"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time a message went wrong at work.",
        model: "A colleague took a telephone instruction to hold a credit note until a quantity was confirmed, and wrote it down as issue it once the quantity was confirmed. At speaking speed those two sound almost identical and they mean opposite things. She had written it down carefully, which is what made her confident, and writing it down is not the same as checking it. The client was credited twice. If she had read the sentence back, it would have been stopped in two words." },

      { id: "2c", section: 2, sectionTitle: "Answer about handovers", letter: "C",
        concepts: ["speak", "escalation"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Have you ever proposed a change at work? What happened?",
        model: "Yes. Our rota had no overlap between shifts on two days of the week, and both of the stoppages we failed to pass on last month happened on exactly those days. So I proposed a fifteen-minute paid overlap on Tuesdays and Thursdays. What I think made it work was putting the cost next to the benefit in one sentence: about forty hours a year against nineteen lost in a single month. Without that it would have read as a complaint about the rota." },

      { id: "2d", section: 2, sectionTitle: "Answer about handovers", letter: "D",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it better to give instructions in writing or in person?",
        model: "Both, and for different reasons. Writing survives the shift and can be read at four in the morning by someone who was not there. Speaking is the only version where anything gets checked, because the other person can say it back and you can hear what they did not get. The mistake is thinking that writing it down is checking it. It captures the sound of the sentence, not the meaning, and the one time I have seen a message come out backwards, it was carefully written down." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "word"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is correct?", from: "Lesson 3", recall: true,
            options: [
              { text: "I'll put you through.", correct: true, why: "A pronoun object splits a separable phrasal verb, always." },
              { text: "I'll put through you.", why: "Not possible with a pronoun." },
              { text: "I'll put through to you.", why: "Adds a preposition the verb does not take." } ] },
          { q: "Which is correct?", from: "Lesson 3", recall: true,
            options: [
              { text: "Marwan is covering for Ghada.", correct: true, why: "<i>Cover for</i> is inseparable." },
              { text: "Marwan is covering Ghada for.", why: "The preposition belongs to the verb, not to the object." },
              { text: "Marwan is covering for to Ghada.", why: "One preposition too many." } ] },
          { q: "Which is correct?", from: "Lesson 3", recall: true,
            options: [
              { text: "That invoice is theirs, not ours.", correct: true, why: "Possessive pronouns never take an apostrophe." },
              { text: "That invoice is their's, not our's.", why: "Neither word exists in English." },
              { text: "That invoice is theirs, not our.", why: "<i>Our</i> needs a noun after it; <i>ours</i> stands alone." } ] },
          { q: "What are the three parts of a handover note?", from: "Lesson 2", recall: true,
            options: [
              { text: "What was finished, what was not, and what not to do.", correct: true,
                why: "And the third is the one most often missing." },
              { text: "What was finished, who did it, and when.", why: "A record rather than a handover." },
              { text: "Problems, causes and solutions.", why: "A report, not a handover." } ] },
          { q: "A stopped machine at the end of your shift. What do you do?", from: "Lesson 1", recall: true,
            options: [
              { text: "Tell the supervisor on your own shift.", correct: true,
                why: "A fault left in a note waits eight hours before anyone looks at it." },
              { text: "Write it in the handover note.", why: "Exactly how two of March's four stoppages were lost." },
              { text: "Restart it to see whether it runs.", why: "Done on three of four shifts, and it made the fault worse." } ] },
          { q: "How does <i>hand it over</i> actually sound?", from: "Lesson 4", recall: true,
            options: [
              { text: "Joined: han-di-tover.", correct: true, why: "Both consonants move right onto the following vowel." },
              { text: "Three separate words with gaps.", why: "You will be understood, and you will not understand others." },
              { text: "hand over it", why: "A word order that is not possible with a pronoun." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "people"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "Why read an instruction back?", from: "At Work", recall: true,
            options: [
              { text: "Because understanding and following feel identical from the inside.", correct: true,
                why: "Saying it back is the only cheap way to tell them apart." },
              { text: "To be polite.", why: "Nour says explicitly that this is not the reason." },
              { text: "To make the other person repeat it.", why: "The opposite — you produce it, not them." } ] },
          { q: "You have three of four items. What do you say?", from: "At Work", recall: true,
            options: [
              { text: "I have three of the four — which one have I lost?", correct: true,
                why: "Faster than hearing all four, and it shows you were counting." },
              { text: "Could you repeat all of that?", why: "Works, and wastes the three you already have." },
              { text: "Nothing — you will probably remember it.", why: "This is precisely how the fourth item disappears." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "Could you hold on it for a moment?", correct: true, why: "<i>Hold on</i> takes no object at all." },
              { text: "Could you hold on for a moment?", why: "The corrected version." },
              { text: "Could you hold the line?", why: "Correct — a different verb which does take an object." } ] },
          { q: "What is a root cause, as against a symptom?", from: "Lesson 5", recall: true,
            options: [
              { text: "The bearing not greased in January, not the loom stopping in March.", correct: true,
                why: "Only one of the two can be fixed, and it is not the one you saw." },
              { text: "The most recent event.", why: "Usually the symptom." },
              { text: "Whatever the operator says.", why: "Operators restarted the loom three times, which was a symptom of the missing handover." } ] },
          { q: "Nine covered shifts, six of them by one person. What does that tell you?", from: "Lesson 5", recall: true,
            options: [
              { text: "The cover is concentrated, not spread.", correct: true,
                why: "Unit 3's single point of failure, appearing in a rota instead of a supply chain." },
              { text: "Cover is working well.", why: "The headline number says so and the distribution does not." },
              { text: "Nothing useful.", why: "It is the most useful line in that paragraph." } ] },
          { q: "What does writing an instruction down test?", from: "At Work", recall: true,
            options: [
              { text: "That you captured the sound of the sentence.", correct: true,
                why: "Not its meaning — which is how <i>hold it until</i> was recorded as <i>issue it once</i>." },
              { text: "That you understood it.", why: "Lina wrote four notes carefully and inverted one of them." },
              { text: "Both.", why: "The scene exists to separate them." } ] }
        ] }

    ]
  };
})();
