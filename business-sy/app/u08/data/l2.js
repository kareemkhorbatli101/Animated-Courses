/* Unit 8 · How the Business Has Changed — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u08-l2", unit: "u08", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write about a difficult period plainly, and report a problem upwards",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Writing about a hard period", letter: "A",
        concepts: ["write", "time"],
        kind: "annotate", task: null, n: 0,
        prompt: "A paragraph from the updated profile. Click each sentence and say what job it does.",
        note: { kind: "writer", title: "Plainly, and with numbers",
                body: "<p>A buyer reading about a difficult period wants to know three things: what changed, whether it is over, and what you learned. Vagueness about any of them reads as concealment.</p>" },
        jobs: [
          "Says what used to be true",
          "Says what ended it, in one clause",
          "Says what replaced it",
          "Says what is still going on",
          "Gives the number that proves it"
        ],
        sentences: [
          { text: "The company used to dye its own cloth on the same site.",
            job: "Says what used to be true",
            why: "<i>Used to</i> tells the reader immediately that this is history, so nobody wonders whether it is still the case." },
          { text: "That plant became uneconomic when power costs rose, and it closed in 2019.",
            job: "Says what ended it, in one clause",
            why: "One clause for the cause, and a date. A paragraph of explanation here would read as an excuse." },
          { text: "Dyeing has been subcontracted to a workshop in Homs since then.",
            job: "Says what replaced it",
            why: "Without this the reader is left with a hole where a capability used to be." },
          { text: "We have been rebuilding capacity since 2022.",
            job: "Says what is still going on",
            why: "The present perfect continuous: started, not finished, and the reader now knows which direction things are moving." },
          { text: "Utilisation was sixty-two per cent then and is seventy-one now.",
            job: "Gives the number that proves it",
            why: "Nour's rule. A sentence about rebuilding with no figure in it reads as hope rather than as a report." }
        ],
        after: "<p>Five sentences, two dates and two percentages. Nothing is hidden and nothing is dramatised.</p>",
        explain: { terms: [
          { en: "uneconomic", gloss: "costing more than it earns", ar: "غير مُجدٍ اقتصاديًا" },
          { en: "to rebuild capacity", gloss: "to get back to producing what you once could", ar: "إعادة بناء الطاقة الإنتاجية" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Writing about a hard period", letter: "B",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Report a problem upwards. Thirty to forty words.",
        scenarioTitle: "The generator",
        scenario: "You are Fadi. The generator has cut out three times this week, each time for about twenty minutes. The looms restart without damage but the batch in the dye bath would not. Nour needs to know before the dark blue goes in on Thursday.",
        to: "Nour Haddad, operations",
        re: "Generator — three cut-outs this week",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "The generator has cut out … times this week, each time for about …",
          "The looms are fine, but …",
          "The dark blue goes in on …",
          "Do you want me to … ?"
        ],
        note: { kind: "writer", title: "Report the risk, not the incident",
                body: "<p>Three cut-outs is the fact. The reason to write is Thursday: a batch in a dye bath when the power goes is the thing that cannot be restarted. Lead with the fact and make sure the risk is in the message.</p>" },
        checklist: [
          "Is the frequency and duration given as numbers?",
          "Have you said what is <i>not</i> affected?",
          "Is the risk — Thursday's batch — explicit?",
          "Have you offered one decision rather than describing a worry?"
        ],
        modelJobs: [
          "States the facts with numbers",
          "Says what is unaffected",
          "Names the risk",
          "Asks for a decision"
        ],
        model: "Nour,\n\nThe generator has cut out three times this week, each time for about twenty minutes. The looms restart without damage, so nothing has been lost yet. The dark blue goes into the bath on Thursday and a cut-out then would cost us the batch. Do you want me to hold it until the generator has been looked at?" },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "time"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three are about a past that has ended.",
        items: [
          { cue: "Say what the company once did.", band: "B1",
            target: "We used to dye our own cloth on this site",
            jobs: { "We": "subject", "used": "verb", "on": "adverbial" },
            why: "<i>Used to</i> plus the bare verb. It always means the thing has stopped." },
          { cue: "Say what the company did not do then.", band: "B1",
            target: "We did not use to hold four weeks of yarn",
            jobs: { "We": "subject", "did": "verb", "not": "verb", "use": "verb" },
            why: "In the negative the <i>d</i> moves onto <i>did</i>: <i>did not use to</i>, never <i>did not used to</i>." },
          { cue: "Ask about a past habit.", band: "B1",
            target: "Did you use to sell much to Iraq",
            jobs: { "Did": "verb", "you": "subject", "to": "adverbial" },
            why: "Same rule in questions: <i>did you use to</i>. The <i>-d</i> belongs to the auxiliary." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "escalation"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These are about something that started and has not stopped.",
        items: [
          { cue: "Say what has been going on since a date.", band: "B1",
            target: "We have been rebuilding capacity since 2022",
            jobs: { "We": "subject", "have": "verb", "since": "linker" },
            why: "Present perfect continuous with <i>since</i> and a point in time." },
          { cue: "Report a repeated fault with numbers.", band: "B1",
            target: "The generator has cut out three times this week",
            jobs: { "The generator": "subject", "has": "verb", "three times": "adverbial", "this week": "adverbial" },
            why: "Present perfect simple for a countable number of completed events inside an unfinished period." },
          { cue: "Name the risk that follows.", band: "B1",
            target: "A cut-out on Thursday would cost us the whole batch",
            jobs: { "A cut-out": "subject", "would": "verb", "on": "adverbial" },
            why: "<i>Would</i> for a consequence that has not happened. It makes the sentence a warning rather than a report." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "risk"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "A second internal note: the problem has got worse. Thirty to forty words.",
        scenarioTitle: "It cut out during the batch",
        scenario: "You are Fadi. The generator cut out on Thursday with the dark blue in the bath. The batch is uneven and cannot be sold as first quality. There are 400 metres affected. You held the rest. Nour is with a client until four.",
        to: "Nour Haddad, operations",
        re: "Thursday — we lost part of the dark blue",
        placeholder: "Nour,\n\n",
        minWords: 30,
        frames: [
          "It happened. The generator cut out …",
          "… metres are affected and cannot go out as first quality.",
          "I held …",
          "Nothing needs deciding before … , but …"
        ],
        note: { kind: "writer", title: "Bad news, and the three facts that go with it",
                body: "<p>What happened, how much it cost, and what you already did about it. A message with only the first makes the reader ask the other two from a meeting.</p>" },
        checklist: [
          "Is the loss quantified?",
          "Have you said what you did without being asked?",
          "Have you said what does not need deciding yet?",
          "Have you avoided apologising for a power cut?"
        ],
        modelJobs: [
          "Says what happened",
          "Quantifies the loss",
          "Says what you already did",
          "Says what can wait"
        ],
        model: "Nour,\n\nIt happened. The generator cut out on Thursday with the dark blue in the bath. Four hundred metres are uneven and cannot go out as first quality. I held the remaining eight hundred rather than run them. Nothing needs deciding before four, but we should talk before I tell Samer." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Tell the client. Sixty to eighty words.",
        scenarioTitle: "Four hundred metres short",
        scenario: "400 of the 1,200 metres are second quality after the power failure. You can deliver 800 on time and the balance ten days later, or all 1,200 ten days late. The second-quality fabric is usable but visibly uneven. You do not want to send it as first quality.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Order 4417 — a problem with part of the batch",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing about … before …",
          "A power failure during dyeing has left … metres …",
          "We will not send it as first quality, because …",
          "You have two options: … or …",
          "Could you let me know by … ?"
        ],
        note: { kind: "writer", title: "Two options beat one apology",
                body: "<p>A client who is given a choice is a client making a decision rather than receiving a disappointment. Give both options with their costs, and a date for the answer.</p>" },
        checklist: [
          "Have you said what happened without a long explanation?",
          "Is the quantity affected stated?",
          "Have you said plainly that you will not pass it off as first quality?",
          "Are both options given, with their consequences?",
          "Is there a date for the decision?"
        ],
        modelJobs: [
          "Opens before being asked",
          "States what happened and how much",
          "States the decision you have already taken",
          "Gives two options",
          "Asks for an answer by a date"
        ],
        model: "Dear Ms Darwish,\n\nI am writing about order 4417 before the delivery date rather than after it.\n\nA power failure during dyeing has left four hundred of the twelve hundred metres visibly uneven. We will not send those as first quality, because you would find it on the shelf and I would rather you heard it from me.\n\nYou have two options. We deliver eight hundred metres on the eighteenth as planned and the balance ten days later, or we hold the whole order and send all twelve hundred on the twenty-eighth.\n\nCould you let me know by Tuesday?\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "evidence"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the profile, describing the last four years to a buyer who has not met you.",
        min: 60,
        note: { kind: "writer", title: "The register to aim for",
                body: "<p>Plain, dated, and specific. No adjectives about how hard it was, and no claim that it was easy. A buyer can tell the difference between a company that has had a difficult period and one that is pretending it has not.</p>" },
        must: [
          "One thing that used to be true and is not",
          "What replaced it",
          "What has been happening since, with a date",
          "A number that proves the direction"
        ],
        model: "The company used to dye its own cloth on the same site. That plant became uneconomic when power costs rose and it closed in 2019, since when dyeing has been subcontracted to a workshop in Homs. The change added about three days to every lead time and we now quote accordingly. We have been rebuilding capacity since 2022: utilisation was sixty-two per cent that year and is seventy-one now, and we have been running a single shift rather than two since 2021. Staff retention has improved every year since the change.",
        explain: { terms: [
          { en: "accordingly", gloss: "in a way that fits the new situation", ar: "تبعًا لذلك" },
          { en: "since when", gloss: "and from that time onwards", ar: "ومنذ ذلك الحين" }
        ] } }

    ]
  };
})();
