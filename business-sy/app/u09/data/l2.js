/* Unit 9 · Meetings and Minutes — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u09-l2", unit: "u09", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write minutes that settle things, and an agenda that controls a meeting",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "What a minute does", letter: "A",
        concepts: ["write", "sequence"],
        kind: "annotate", task: null, n: 0,
        prompt: "Five lines from a set of minutes. Click each one and say what job it does.",
        note: { kind: "writer", title: "Minutes are read twice",
                body: "<p>Once this week, to check they are right, and once in six months by somebody looking for what was decided. Write for the second reader.</p>" },
        jobs: [
          "Records who was there and who was not",
          "Records a decision",
          "Records an action, with a name and a date",
          "Records that nothing was decided",
          "Records a disagreement without naming it as one"
        ],
        sentences: [
          { text: "Present: Haddad, Khoury, Al-Masri, Barakat. Apologies: Darwish.",
            job: "Records who was there and who was not",
            why: "Names only. The reason for an absence is nobody's business six months later." },
          { text: "It was agreed that dyeing would move to mornings until the generator service is complete.",
            job: "Records a decision",
            why: "The passive is deliberate: it records that the room agreed, not who argued for it." },
          { text: "Barakat to book the generator service by Wednesday.",
            job: "Records an action, with a name and a date",
            why: "No verb, no sentence — minutes use this telegraphic form so an action is impossible to miss when scanning." },
          { text: "The question of a second dye supplier was discussed and no decision was taken.",
            job: "Records that nothing was decided",
            why: "Writing it down stops the item reappearing as though it had been settled, and stops anyone claiming it was." },
          { text: "Two views were expressed on the payment terms and the item was carried forward.",
            job: "Records a disagreement without naming it as one",
            why: "<i>Two views were expressed</i> is accurate and leaves nobody's position on a document they cannot amend." }
        ],
        after: "<p>Not one of these says who said what. That restraint is what makes minutes safe to write and safe to be in.</p>",
        explain: { terms: [
          { en: "carried forward", gloss: "moved to the next meeting", ar: "مُرحَّل" },
          { en: "telegraphic", gloss: "very short, with words left out", ar: "مختصر جدًّا" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "What a minute does", letter: "B",
        concepts: ["write", "deadline"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the minutes of one item. Thirty to forty words.",
        scenarioTitle: "The generator item",
        scenario: "Khoury proposed moving dyeing to mornings until the generator is serviced; this was agreed. Barakat will book the service by Wednesday. Al-Masri asked whether a second dyer should be found; this was discussed and nothing was decided.",
        to: "File",
        re: "Minutes — item 4, generator",
        placeholder: "",
        minWords: 30,
        frames: [
          "… proposed that … . This was agreed.",
          "ACTION: … to … by … .",
          "… raised … . This was discussed and … ."
        ],
        note: { kind: "writer", title: "Three shapes",
                body: "<p>A decision in the passive, an action in telegraphic form with a name and a date, and a non-decision recorded as one. Almost every minute you will ever write is one of those three.</p>" },
        checklist: [
          "Is the decision recorded without naming who argued for it?",
          "Does the action have a name and a date?",
          "Is the undecided item recorded as undecided?",
          "Is it under forty words?"
        ],
        modelJobs: [
          "Records the proposal and the decision",
          "Records the action, with name and date",
          "Records the item that was not decided"
        ],
        model: "Khoury proposed that dyeing move to mornings until the generator service is complete. This was agreed.\n\nACTION: Barakat to book the service by Wednesday.\n\nAl-Masri raised the question of a second dye supplier. This was discussed and no decision was taken." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "time"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three put two events in a time relation.",
        items: [
          { cue: "Say one thing happened before another.", band: "B1",
            target: "Before the meeting started the agenda had already been circulated",
            jobs: { "Before": "linker", "the meeting": "subject", "started": "verb", "the agenda": "subject", "had": "verb" },
            why: "<i>Had been circulated</i> — the past perfect for the earlier of two past events." },
          { cue: "Say two things happened at the same time.", band: "B1",
            target: "While Barakat was booking the service the dyers called back",
            jobs: { "While": "linker", "Barakat": "subject", "was": "verb", "the dyers": "subject", "called": "verb" },
            why: "<i>While</i> plus the past continuous for the longer action, and the simple past for the one that cuts into it." },
          { cue: "Say nothing happened until something else did.", band: "B1",
            target: "Nothing was decided until the figures arrived",
            jobs: { "Nothing": "subject", "was": "verb", "until": "linker", "the figures": "subject" },
            why: "<i>Until</i> with two past events: the second one releases the first." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "comparison"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These add one statement to another.",
        items: [
          { cue: "Add a second person who agrees.", band: "B1",
            target: "Khoury supported the change and Al-Masri did too",
            jobs: { "Khoury": "subject", "supported": "verb", "and": "linker", "Al-Masri": "subject", "did": "verb" },
            why: "<i>And … did too</i> after a positive statement. <i>Did</i> stands in for the whole verb phrase." },
          { cue: "Add a second person who also did not.", band: "B1",
            target: "Barakat did not object and Darwish did not either",
            jobs: { "Barakat": "subject", "did": "verb", "not": "verb", "and": "linker", "Darwish": "subject" },
            why: "After a negative, <i>did not either</i>, never <i>did not too</i>. This is the pair learners most often swap." },
          { cue: "Contrast two people.", band: "B1",
            target: "Khoury supported the change but Al-Masri did not",
            jobs: { "Khoury": "subject", "supported": "verb", "but": "linker", "Al-Masri": "subject", "did": "verb" },
            why: "<i>But</i> plus the auxiliary alone. The contrast is complete without repeating the verb." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the agenda for next week's meeting. Thirty to forty words.",
        scenarioTitle: "An agenda that controls the meeting",
        scenario: "You are Nour. Three items: the generator service (carried forward), the Levant Home annual terms for signature, and the question of a second dye supplier, which has now been raised twice. The meeting is one hour.",
        to: "Khoury, Al-Masri, Barakat",
        re: "Agenda — operations, Monday 09:00",
        placeholder: "",
        minWords: 30,
        frames: [
          "1. Apologies",
          "2. Minutes and matters arising — including …",
          "3. … (decision needed)",
          "4. … (discussion; decision if possible)",
          "5. AOB — … minutes"
        ],
        note: { kind: "writer", title: "Say what each item is for",
                body: "<p>Marking an item <em>decision needed</em> or <em>for information</em> changes how people prepare and how long they talk. It is the cheapest way to make a meeting finish on time.</p>" },
        checklist: [
          "Are the standard items in the usual order?",
          "Is the carried-forward item under matters arising?",
          "Is each main item marked with what is expected of it?",
          "Is AOB given a time limit?"
        ],
        modelJobs: [
          "Standard opening items",
          "Matters arising, with the carried item named",
          "The decision item",
          "The discussion item",
          "AOB, limited"
        ],
        model: "1. Apologies.\n2. Minutes and matters arising — including the generator service, carried forward.\n3. Levant Home annual terms, for signature (decision needed).\n4. A second dye supplier (discussion; decision if possible).\n5. AOB — five minutes.\n6. Date of next meeting." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write to someone outside the company confirming what a meeting agreed. Sixty to eighty words.",
        scenarioTitle: "Confirming to the client",
        scenario: "You met Rana Darwish. Agreed: the annual terms as drafted, with the order of precedence reversed; a second dye supplier will be sought and she will be told who it is before it is used; the review meeting is in April. She is to send the signature copy this week.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Our meeting — what we agreed",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "Thank you for your time on …",
          "We agreed: …",
          "You will … and I will …",
          "We will review …",
          "If I have any of that wrong, …"
        ],
        note: { kind: "writer", title: "Separate what each side will do",
                body: "<p>A confirmation that lists agreements without saying who does what produces two people waiting for each other. Name both sides' actions explicitly.</p>" },
        checklist: [
          "Are the agreements listed rather than narrated?",
          "Is the precedence change recorded?",
          "Is the undertaking about the dye supplier included?",
          "Are both sides' actions named?",
          "Have you invited correction?"
        ],
        modelJobs: [
          "Thanks and frames",
          "Lists what was agreed",
          "Separates the two sides' actions",
          "Records the review date",
          "Invites correction"
        ],
        model: "Dear Ms Darwish,\n\nThank you for your time on Tuesday. To put down what we agreed.\n\nThe annual terms stand as drafted, with clause 2 reversed so that the quotation takes precedence. We will look for a second dye supplier, and I undertake to tell you who it is before any of your cloth goes to them.\n\nYou will send the signature copy this week and I will return it the day it arrives. We will review the arrangement in April.\n\nIf I have any of that wrong, please tell me.\n\nNour Haddad" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "evidence"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the handbook on what minutes are for.",
        min: 60,
        note: { kind: "writer", title: "Write the rule the way it will be used",
                body: "<p>People do not remember a principle; they remember a shape. Give them the three shapes a minute can take and they will produce usable minutes without understanding why.</p>" },
        must: [
          "That minutes record decisions, not discussion",
          "The three shapes: decision, action, non-decision",
          "That an action needs a name and a date",
          "The two-day circulation rule and its reason"
        ],
        model: "Minutes record what was decided, not what was said. Nobody will ever read a transcript, and a decision with no record is a decision that will be taken again. Almost every minute is one of three shapes: a decision, written in the passive so that it belongs to the room rather than to whoever argued for it; an action, written telegraphically with a name and a date, because an action with neither is a wish; or a note that an item was discussed and nothing was decided, which stops it reappearing later as though it had been settled. Circulate them within two days, while everyone can still remember whether they agreed.",
        explain: { terms: [
          { en: "in the passive", gloss: "without naming who did it", ar: "بصيغة المبني للمجهول" },
          { en: "to belong to the room", gloss: "to be the group's decision, not one person's", ar: "قرار جماعي" }
        ] } }

    ]
  };
})();
