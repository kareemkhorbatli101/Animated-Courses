/* Unit 6 · Calls and Handovers — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u06-l2", unit: "u06", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a handover note and a telephone message that survive being read by a stranger",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a handover note is for", letter: "A",
        concepts: ["write", "sequence"],
        kind: "annotate", task: null, n: 0,
        prompt: "A handover note. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "Written for someone who was not there",
                body: "<p>The reader has no context, is about to start an eight-hour shift, and will read this once. Anything that needs a second reading has failed.</p>" },
        jobs: [
          "Says what was finished",
          "Says what was started and not finished",
          "Says what the next shift must not do",
          "Names who is covering for whom",
          "Says what will happen in the morning"
        ],
        sentences: [
          { text: "The Amman pallets are made up and counted.",
            job: "Says what was finished",
            why: "The easy part, and the part everyone writes. <i>Counted</i> is doing real work here — made up and counted are two different states." },
          { text: "Loom three stopped twice and is off until maintenance look at it.",
            job: "Says what was started and not finished",
            why: "A fault, its frequency, and its current state. Three facts in one line." },
          { text: "Do not hand the pallets over to the driver until Fadi has counted them again.",
            job: "Says what the next shift must not do",
            why: "The line most often missing, and the only one that prevents an expensive mistake rather than describing one." },
          { text: "Marwan is covering for Ghada until Thursday.",
            job: "Names who is covering for whom",
            why: "Without it, the night shift does not know who to ask or who to blame when nobody answers." },
          { text: "I will follow up the Levant Home call in the morning.",
            job: "Says what will happen in the morning",
            why: "It closes a loop so the night shift does not open it. A handover that does not say who owns the open items creates two owners or none." }
        ],
        after: "<p>Five sentences, no adjectives, and a stranger could run the shift from it.</p>",
        explain: { terms: [
          { en: "made up", gloss: "assembled, of pallets", ar: "مُجهَّزة" },
          { en: "to be off", gloss: "not running, of a machine", ar: "متوقّف عن العمل" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a handover note is for", letter: "B",
        concepts: ["write", "deadline"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the handover. Thirty to forty words, and include the line people leave out.",
        scenarioTitle: "Day to night, Tuesday",
        scenario: "You are Fadi. The Amman pallets are made up but not counted. Loom three stopped twice and is off. The dye house van comes at ten and the driver will want a signature, which only the supervisor may give. Marwan is covering for Ghada until Thursday.",
        to: "Night shift supervisor",
        re: "Handover — Tuesday",
        placeholder: "",
        minWords: 30,
        frames: [
          "Done: …",
          "Not done: …",
          "Do not …",
          "… is covering for …"
        ],
        note: { kind: "writer", title: "Three headings beat five sentences",
                body: "<p>A handover read at six in the morning benefits from labels. <b>Done</b>, <b>not done</b>, <b>do not</b> — a reader can find the third one without reading the first two.</p>" },
        checklist: [
          "Is what was finished separated from what was not?",
          "Is there at least one <i>do not</i>?",
          "Have you said who may sign for the van?",
          "Is the cover arrangement there?"
        ],
        modelJobs: [
          "Says what was finished",
          "Says what was not",
          "Says what not to do",
          "Names the cover"
        ],
        model: "Done: Amman pallets made up, not yet counted. Not done: loom three stopped twice, off until maintenance see it. Do not sign for the dye house van at ten — supervisor only. Marwan is covering for Ghada until Thursday." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "speak"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three contain a separable phrasal verb.",
        items: [
          { cue: "Tell a caller you are connecting them.", band: "B1",
            target: "I will put you through to accounts now",
            jobs: { "I": "subject", "will": "verb", "to": "adverbial", "now": "adverbial" },
            why: "With a pronoun object the verb must split: <i>put you through</i>. <i>Put through you</i> is not possible." },
          { cue: "Tell the next shift not to release the goods.", band: "B1",
            target: "Do not hand the pallets over until Fadi has counted them",
            jobs: { "Do": "verb", "not": "verb", "until": "linker", "Fadi": "subject" },
            why: "With a noun object either order works. Here the split version reads better because <i>over</i> lands next to the condition." },
          { cue: "Promise to chase something tomorrow.", band: "B1",
            target: "I will follow it up first thing in the morning",
            jobs: { "I": "subject", "will": "verb", "first thing": "adverbial", "in": "adverbial" },
            why: "<i>Follow it up</i> — pronoun, so the split is compulsory. <i>First thing</i> is an adverbial meaning as early as possible." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "people"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These contain inseparable verbs and possessives.",
        items: [
          { cue: "Say who is doing an absent colleague's work.", band: "B1",
            target: "Marwan is covering for Ghada until Thursday",
            jobs: { "Marwan": "subject", "is": "verb", "until": "linker" },
            why: "<i>Cover for</i> is inseparable: the name cannot go between the two words." },
          { cue: "Promise a reply.", band: "B1",
            target: "I will get back to you before the end of the day",
            jobs: { "I": "subject", "will": "verb", "before": "adverbial" },
            why: "<i>Get back to</i> is three parts and none of them moves." },
          { cue: "Say whose responsibility something is.", band: "B1",
            target: "The Amman order is theirs and the Beirut one is ours",
            jobs: { "The Amman order": "subject", "is": "verb", "and": "linker", "the Beirut one": "subject" },
            why: "Possessive pronouns stand alone: <i>theirs</i>, <i>ours</i>, with no noun and no apostrophe. <i>Their's</i> does not exist." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A telephone message for a colleague who is on another call. Thirty to forty words.",
        scenarioTitle: "Message for Lina",
        scenario: "A caller from Levant Home's accounts office rang at 10:20. Her name is Maysa Taleb. She is asking about the credit note on invoice 4412. Her number is 011 442 7781. She asked Lina to call before four this afternoon.",
        to: "Lina Al-Masri, accounts",
        re: "Message — Maysa Taleb, Levant Home, 10:20",
        placeholder: "",
        minWords: 30,
        frames: [
          "… called at …",
          "About: …",
          "Number: … (read back and confirmed)",
          "She asked you to …"
        ],
        note: { kind: "writer", title: "A message has five fields",
                body: "<p>Who, when, about what, their number, and what they want. A message missing any one of them sends the reader back to the switchboard, and the commonest omission is the time.</p>" },
        checklist: [
          "Is the caller's name and company there?",
          "Is the time of the call recorded?",
          "Is the subject specific enough to act on?",
          "Is the number written out, and marked as read back?",
          "Is the deadline there?"
        ],
        modelJobs: [
          "Who and when",
          "What about",
          "Their number",
          "What they want, and by when"
        ],
        model: "Maysa Taleb, Levant Home accounts, called at 10:20. About: the credit note on invoice 4412. Number: 011 442 7781 — I read it back to her and she confirmed it. She asked if you could call her before four this afternoon." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Now write outside the company: confirming by email what was agreed on a call. Sixty to eighty words.",
        scenarioTitle: "Confirming the call",
        scenario: "You spoke to the dye house. They will deliver the dark blue on Friday afternoon and send the van registration once loaded. If it slips they will tell you the same day rather than the following morning. You want this in writing without implying you distrust them.",
        to: "Mr Ziad Haffar, Homs Dye Works",
        re: "Our call this morning — to confirm",
        placeholder: "Dear Mr Haffar,\n\n",
        minWords: 60,
        frames: [
          "Thank you for your time this morning.",
          "To put down what we agreed: …",
          "You will also …",
          "If anything changes, …",
          "If I have any of that wrong, …"
        ],
        note: { kind: "writer", title: "The sentence that makes it polite",
                body: "<p><i>If I have any of that wrong, tell me</i> turns a record into a draft. It invites correction rather than asserting a version, and it costs eight words.</p>" },
        checklist: [
          "Have you said what the email is for in the first line?",
          "Are the agreed facts listed rather than narrated?",
          "Is the van registration promise included?",
          "Is the what-if-it-slips agreement included?",
          "Have you invited correction?"
        ],
        modelJobs: [
          "Thanks and frames the email",
          "Lists what was agreed",
          "Adds the secondary promise",
          "Records the what-if",
          "Invites correction"
        ],
        model: "Dear Mr Haffar,\n\nThank you for your time this morning. To put down what we agreed, so that we are both working from the same thing:\n\nThe dark blue goes on a van on Friday afternoon. You will send me the van registration once it is loaded, so that I can stop chasing it.\n\nIf Friday slips, you will tell me the same day rather than the following morning.\n\nIf I have any of that wrong, please tell me and I will correct it.\n\nNour Haddad" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "risk"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the staff handbook explaining what a handover note must contain.",
        min: 60,
        note: { kind: "writer", title: "Write the rule as the reader will use it",
                body: "<p>A handbook paragraph is read once, in training, and then remembered badly. Give it a shape — three headings, in order — so what is remembered is a structure rather than a sentiment.</p>" },
        must: [
          "The three things a handover must say",
          "Which of the three is most often missing",
          "That it is written for someone who was not there",
          "What to do with a machine fault instead"
        ],
        model: "A handover note says three things, in this order: what was finished, what was started and not finished, and what the next shift must not do. The third is the one people leave out, and it is the only one that prevents a mistake rather than describing one. Write it for someone who was not here, who is about to start eight hours, and who will read it once. A stopped machine does not belong in a handover note at all: tell the supervisor on your own shift, because a fault left in writing waits eight hours before anyone looks at it.",
        explain: { terms: [
          { en: "handover note", gloss: "written notes passed to the next shift", ar: "مذكّرة تسليم الوردية" },
          { en: "to leave out", gloss: "to omit", ar: "يُغفل / يحذف" }
        ] } }

    ]
  };
})();
