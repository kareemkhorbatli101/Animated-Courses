/* Unit 10 · Records and Responsibility — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u10-tw", unit: "u10", block: "tw", up: "../", tab: "AT WORK",
    objective: "Write the records procedure and the licence renewal, and answer about responsibility",
    next: null,
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Write the two documents", letter: "A",
        concepts: ["write", "approval"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write the records procedure agreed in the meeting. Sixty to eighty words.",
        scenarioTitle: "The records procedure",
        scenario: "Scan everything in the export office on dispatch. Keep paper for declarations only, seven years from the consignment date. Check twenty files a year, in April, that the scans still open. Lina owns the procedure, Samer the scanner. Record what was destroyed and when.",
        to: "All export and accounts staff",
        re: "Records — procedure from 1 May",
        placeholder: "",
        minWords: 60,
        frames: [
          "Everything is scanned … , in … .",
          "Paper is kept for … only, for … .",
          "Once a year, in … , … files are opened … .",
          "… owns … . … owns … .",
          "When paper is destroyed, … ."
        ],
        note: { kind: "writer", title: "Present simple, named owners, numbers",
                body: "<p>No <em>should</em>, no <em>please</em>. Every sentence a rule, every rule with a who or a number in it. Lesson 2's register, applied to the thing the whole unit has been building.</p>" },
        checklist: [
          "Is each rule in the present simple?",
          "Is the scope of the paper rule stated?",
          "Is the yearly check given a month and a sample size?",
          "Are both owners named?",
          "Does it say what is recorded when paper is destroyed?"
        ],
        modelJobs: [
          "The scanning rule",
          "The paper rule, with scope and period",
          "The yearly control",
          "The owners",
          "The destruction record"
        ],
        model: "Every shipping document is scanned in the export office on the day of dispatch.\n\nPaper is kept for customs declarations only, for seven years from the date of the consignment. All other paper is destroyed once it has been scanned and checked.\n\nOnce a year, in April, twenty files are opened at random and checked that the scans are readable.\n\nAl-Masri owns this procedure. Khoury owns the scanner and the scanning itself.\n\nWhen paper is destroyed, what was destroyed and on what date is written in the file. No space is left unexplained." },

      { id: "1b", section: 1, sectionTitle: "Write the two documents", letter: "B",
        concepts: ["write", "evidence"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write to the licensing office with the audit outcome. Sixty to eighty words.",
        scenarioTitle: "Licence renewal",
        scenario: "The audit found two matters, both now addressed, and one observation requiring no action. You are applying to renew the export licence. The auditor's report goes to the licensing office on Monday. You want to be straightforward and not to oversell.",
        to: "The Licensing Office",
        re: "Export licence renewal — audit outcome",
        placeholder: "Dear Sir or Madam,\n\n",
        minWords: 60,
        frames: [
          "I am writing in support of …",
          "An independent sample check was carried out … . It raised …",
          "Both have been addressed: …",
          "One observation required no action: …",
          "The auditor's report reaches you …"
        ],
        note: { kind: "writer", title: "Do not claim more than the report does",
                body: "<p>The recipient will read the report on Monday. A letter that describes it accurately is believable; one that describes it generously is checked against it, and then everything else you wrote is checked too.</p>" },
        checklist: [
          "Have you said what the audit found, including the number of matters?",
          "Have you said what you did about each?",
          "Have you mentioned the observation without inflating it?",
          "Have you avoided claiming the audit was clean?",
          "Have you said when the report arrives?"
        ],
        modelJobs: [
          "Says what the letter supports",
          "States what the audit raised",
          "States the remediation",
          "States the observation",
          "Says when the report arrives"
        ],
        model: "Dear Sir or Madam,\n\nI am writing in support of our application to renew export licence 4417-B.\n\nAn independent sample check of ten consignments was carried out in March. It raised two findings: signed delivery notes missing in two cases, and reissued invoices not recording who authorised them.\n\nBoth have been addressed. A named person now chases delivery notes within thirty days, and reissued invoices carry a sign-off by name.\n\nOne observation required no action: some files were held for ten years against a stated period of seven, and personal data has now been separated.\n\nThe auditor's report reaches you on Monday.\n\nNour Haddad" },

      { id: "2a", section: 2, sectionTitle: "Answer about responsibility", letter: "A",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "Speak for about forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "Why does your company keep records?",
        model: "So that we can show how something was done, not only so that it was done. An audit trail is the chain of documents that lets somebody start at a payment and work backwards to the order that produced it, and one missing link breaks everything above it. That is why we never correct a document by hand: two versions that cannot be told apart are worse than one that is wrong, because nobody can see which was used. And if a document is missing, we write that in the file. A recorded gap can be explained; a silent one looks like concealment." },

      { id: "2b", section: 2, sectionTitle: "Answer about responsibility", letter: "B",
        concepts: ["speak", "approval"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Tell me about a time an audit or an inspection found something.",
        model: "We had a sample check last March, ten consignments out of about two hundred. It found two things: in two cases we could not produce a signed delivery note, and our reissued invoices did not record who had authorised them. We accepted both without arguing, because both were true. The useful part was the root cause on the first one — nobody owned the chase, so nothing was ever overdue to anybody. We put a name against it and a thirty-day period, and the number outstanding halved within two months." },

      { id: "2c", section: 2, sectionTitle: "Answer about responsibility", letter: "C",
        concepts: ["speak", "agreement"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "About forty seconds.",
        speaker: "nour", speakerNote: "asking",
        seconds: 40,
        question: "How do you contribute to a discussion where you have no strong opinion?",
        model: "I say so, which is rarer than it should be, and then I offer whatever I do know. In our last discussion about scanning I had no view at all on scanners, but I knew that nobody in the workshop would ever scan anything, so whoever did it had to be in the office. That ruled out half of what the room might have decided. A constraint is often worth more than an opinion, and producing an opinion just because the room has gone quiet wastes everyone's time including mine." },

      { id: "2d", section: 2, sectionTitle: "Answer about responsibility", letter: "D",
        concepts: ["speak", "risk"],
        kind: "interview", task: "speak-interview", cefr: "B1", n: 1,
        prompt: "The last one asks for an opinion. About forty seconds.",
        speaker: "rana", speakerNote: "asking",
        seconds: 40,
        question: "Is it ever right to sign something you are not sure about?",
        model: "No, and our rule says so in four words: if you are not certain, do not sign. A customs declaration is signed by name by the person who prepared it, and that signature says the figures are right, not that somebody told you they were. What makes the rule work is the second half of it — asking has to be safe. If people are blamed for delays caused by checking, they will stop checking, and then the signature means nothing. So the delay is mine to explain, not theirs." },

      { id: "3a", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "word"],
        kind: "quiz", task: null, n: 0,
        prompt: "From memory, before you look back.",
        items: [
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "The auditor recommends chasing notes within thirty days.", correct: true,
                why: "<i>Recommend</i> takes a gerund, never an infinitive." },
              { text: "The auditor recommends to chase notes within thirty days.", why: "The commonest error with this verb." },
              { text: "The auditor recommends chase notes within thirty days.", why: "Neither form." } ] },
          { q: "Which is right?", from: "Lesson 3", recall: true,
            options: [
              { text: "We have decided to name the person who signs off.", correct: true, why: "<i>Decide</i> takes an infinitive." },
              { text: "We have decided naming the person who signs off.", why: "<i>Decide</i> never takes a gerund." },
              { text: "We have decided for naming the person.", why: "A preposition would take a gerund, and <i>decide for</i> is not the pattern." } ] },
          { q: "<i>Keeping complete records ___ a condition of the licence.</i>", from: "Lesson 3", recall: true,
            options: [
              { text: "is", correct: true, why: "A gerund subject takes a singular verb, however plural the noun inside it." },
              { text: "are", why: "<i>Records</i> is not the subject; <i>keeping</i> is." },
              { text: "being", why: "Not a finite verb." } ] },
          { q: "What makes something a control rather than a result?", from: "Lesson 5", recall: true,
            options: [
              { text: "It names a person and a moment, so it can be tested.", correct: true,
                why: "<i>We are careful</i> cannot be tested next week; <i>a second person checks before dispatch</i> can." },
              { text: "It is written down.", why: "A result can be written down too." },
              { text: "It is in the procedure.", why: "Procedures contain both." } ] },
          { q: "An audit finds two failures in a sample of ten, from 214 consignments.", from: "Lesson 5", recall: true,
            options: [
              { text: "It is a rate that points at roughly forty.", correct: true,
                why: "A sample stands for the population, which is why it was chosen at random." },
              { text: "Two consignments had problems.", why: "Two in the sample. The sample is not the point of a sample." },
              { text: "The sample is too small to say anything.", why: "Ten of 214 chosen at random says a good deal." } ] },
          { q: "<i>I did not SIGN it</i> — what does the stress claim?", from: "Lesson 4", recall: true,
            options: [
              { text: "That the signing did not happen.", correct: true, why: "The neutral reading, with the stress on the verb." },
              { text: "That somebody else signed it.", why: "That would be stress on <i>I</i>." },
              { text: "That I signed something else.", why: "That would be stress on <i>it</i>." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["recall", "evidence"],
        kind: "quiz", task: null, n: 0,
        prompt: "Six more.",
        items: [
          { q: "An invoice is wrong. What is done?", from: "Lesson 1", recall: true,
            options: [
              { text: "Reissued under a new number, with the original kept.", correct: true,
                why: "Nothing is corrected by hand and nothing is destroyed." },
              { text: "Amended and initialled.", why: "Refused at the counter in Unit 7 and forbidden here." },
              { text: "Destroyed and replaced.", why: "The trail has to show the correction happened." } ] },
          { q: "You are unsure of a figure on a declaration.", from: "Lesson 1", recall: true,
            options: [
              { text: "Do not sign. Ask.", correct: true, why: "Four words, and the delay belongs to the manager rather than to you." },
              { text: "Sign and check afterwards.", why: "A declaration is a statement of fact; there is no afterwards." },
              { text: "Have someone else sign.", why: "The signature belongs to whoever prepared it." } ] },
          { q: "Which line has one word too many?", from: "Lesson 3", recall: true,
            options: [
              { text: "We were criticised for to not recording the gap.", correct: true,
                why: "After a preposition the verb takes <i>-ing</i> and nothing else." },
              { text: "We were criticised for not recording the gap.", why: "The corrected version." },
              { text: "We were criticised because we did not record the gap.", why: "Also correct, with a clause instead." } ] },
          { q: "An audit calls something an observation rather than a finding.", from: "Lesson 5", recall: true,
            options: [
              { text: "No action is required, but it is often a finding that has not happened yet.", correct: true,
                why: "Worth more attention than its status suggests." },
              { text: "It can be ignored.", why: "The personal-data point in this unit was an observation and mattered." },
              { text: "It is more serious than a finding.", why: "Less." } ] },
          { q: "What turns a view into a position?", from: "At Work", recall: true,
            options: [
              { text: "A scope, a cost, and what you would do on Monday.", correct: true,
                why: "Two views are a disagreement; two positions are a choice." },
              { text: "Saying it more firmly.", why: "Firmness is not any of the three." },
              { text: "Having evidence.", why: "Useful, and still a view until it says what to do." } ] },
          { q: "A document is missing from a file. What do you do?", from: "Lesson 1", recall: true,
            options: [
              { text: "Record the gap; do not fill it yourself.", correct: true,
                why: "A recorded gap can be explained; a silent one looks like concealment." },
              { text: "Put in a copy from your own records.", why: "Forbidden by the access notice, and it breaks the trail." },
              { text: "Say nothing until asked.", why: "The audit finding in this unit began exactly that way." } ] }
        ] }

    ]
  };
})();
