/* Unit 11 · Reports and Processes — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u11-l2", unit: "u11", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a report in the passive, and know where to switch back",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Where the passive belongs", letter: "A",
        concepts: ["write", "evidence"],
        kind: "annotate", task: null, n: 0,
        prompt: "Five lines from an inspection report. Click each one and say what the voice is doing.",
        note: { kind: "writer", title: "Passive for findings, active for actions",
                body: "<p>A finding is about the batch and the agent is irrelevant. An action is about a person and the agent is the whole point. Reports that use one voice throughout fail at one end or the other.</p>" },
        jobs: [
          "Passive — the agent does not matter",
          "Passive with <i>by</i> — the agent does matter",
          "Active — an action with an owner",
          "Passive — avoiding an accusation",
          "Active — a recommendation"
        ],
        sentences: [
          { text: "Batch 4417-C was inspected on Tuesday.",
            job: "Passive — the agent does not matter",
            why: "Nobody is interested in who held the ruler, and naming them would make the report about a person." },
          { text: "The sample was taken by the shift supervisor rather than by the operator.",
            job: "Passive with <i>by</i> — the agent does matter",
            why: "Here the agent is the finding. The <i>by</i> phrase exists for exactly this case and is wasted otherwise." },
          { text: "Barakat will reset the dye bath before the next run.",
            job: "Active — an action with an owner",
            why: "Actions are taken by people. A passive here would produce <i>the bath will be reset</i>, which nobody owns." },
          { text: "The batch number had not been recorded on the dye sheet.",
            job: "Passive — avoiding an accusation",
            why: "True, neutral, and it does not say who failed to write it. The fix is a process change, not a reprimand." },
          { text: "I recommend moving the sampling point to the middle of the run.",
            job: "Active — a recommendation",
            why: "A recommendation belongs to whoever makes it. <i>It is recommended that</i> hides the person who should defend it." }
        ],
        after: "<p>Three passives and two actives, and each one is chosen rather than habitual. A report written entirely in one voice is a report that has not been thought about.</p>",
        explain: { terms: [
          { en: "agent", gloss: "the person or thing doing the action", ar: "الفاعل" },
          { en: "reprimand", gloss: "a formal telling-off", ar: "توبيخ" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Where the passive belongs", letter: "B",
        concepts: ["write", "correct"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the findings section of an inspection. Thirty to forty words, mostly passive.",
        scenarioTitle: "Batch 4417-C",
        scenario: "Inspected Tuesday. Five per cent sample, taken across the full width. Three pieces outside tolerance on shade. No weave defect. Batch number missing from the dye sheet.",
        to: "Quality file",
        re: "Inspection — 4417-C",
        placeholder: "",
        minWords: 30,
        frames: [
          "… was inspected on … .",
          "A … sample was taken … .",
          "… pieces were found … .",
          "… had not been recorded … ."
        ],
        note: { kind: "writer", title: "No names in the findings",
                body: "<p>Four sentences, four passives, no agent anywhere. The actions come next and they will be active — but the findings must be readable by somebody who does not know the team.</p>" },
        checklist: [
          "Is every sentence passive?",
          "Is the sample size and method given?",
          "Is the number of failures given, not just that there were some?",
          "Is the missing batch number stated without blaming anyone?"
        ],
        modelJobs: [
          "What was inspected and when",
          "How it was sampled",
          "What was found",
          "What was missing"
        ],
        model: "Batch 4417-C was inspected on Tuesday. A five per cent sample was taken at random across the full width and length. Three pieces were found to be outside tolerance on shade, and no defect was found in the weave. The batch number had not been recorded on the dye sheet." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "evidence"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three are passive.",
        items: [
          { cue: "Report an inspection, with no agent.", band: "B1",
            target: "The batch was inspected on Tuesday morning",
            jobs: { "The batch": "subject", "was": "verb", "on": "adverbial" },
            why: "<i>Was</i> plus the past participle. The thing inspected becomes the subject." },
          { cue: "Report a finding in the present.", band: "B1",
            target: "Every consignment is checked against the packing list",
            jobs: { "Every consignment": "subject", "is": "verb", "against": "adverbial" },
            why: "The present passive for a standing practice. This is how procedures describe controls." },
          { cue: "Name the agent, because it matters.", band: "B1",
            target: "The sample was taken by the supervisor not by the operator",
            jobs: { "The sample": "subject", "was": "verb", "by": "adverbial" },
            why: "<i>By</i> names the agent, and here it is the point of the sentence rather than decoration." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "approval"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These are about what somebody can do.",
        items: [
          { cue: "Say somebody has the capability.", band: "B1",
            target: "The dye house is able to correct the shade in one bath",
            jobs: { "The dye house": "subject", "is": "verb", "in": "adverbial" },
            why: "<i>Be able to</i> for capability. <i>Can</i> would be shorter and loses the sense of a tested ability." },
          { cue: "Say somebody was not able to, in the past.", band: "B1",
            target: "We were not able to trace the batch from the dye sheet",
            jobs: { "We": "subject", "were": "verb", "not": "verb", "from": "adverbial" },
            why: "<i>Were not able to</i> for a single past occasion. <i>Could not</i> would suggest a general inability." },
          { cue: "Say what will be possible once something changes.", band: "B1",
            target: "We will be able to trace every piece once the numbers are printed",
            jobs: { "We": "subject", "will": "verb", "once": "linker", "the numbers": "subject" },
            why: "<i>Will be able to</i> — <i>can</i> has no future form, which is the reason the whole structure exists." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "escalation"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Now write the actions section. Thirty to forty words, mostly active.",
        scenarioTitle: "What happens next",
        scenario: "Barakat resets the dye bath before the next run. The three pieces go for rework, not scrap, because shade can be corrected. Al-Masri adds the batch number to the dye sheet template. You recommend moving the sampling point to the middle of the run.",
        to: "Quality file",
        re: "4417-C — actions",
        placeholder: "",
        minWords: 30,
        frames: [
          "… will … before … .",
          "The three pieces go for … , not … , because … .",
          "… will add … .",
          "I recommend … ."
        ],
        note: { kind: "writer", title: "Names, and a reason for the decision",
                body: "<p>Every action here has a person in front of it. And the rework decision carries its reason, because the next reader will otherwise assume somebody was being lenient.</p>" },
        checklist: [
          "Does every action name a person?",
          "Is the rework decision given with its reason?",
          "Is the recommendation in the first person?",
          "Have you avoided the passive in this section?"
        ],
        modelJobs: [
          "First action, with owner",
          "The decision about the goods, with its reason",
          "Second action, with owner",
          "The recommendation"
        ],
        model: "Barakat will reset the dye bath before the next run. The three pieces go for rework rather than scrap, because shade can be corrected in a second bath and weave cannot. Al-Masri will add a batch number field to the dye sheet template. I recommend moving the sampling point to the middle of the run." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "client"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Write to the client about a batch that failed inspection. Sixty to eighty words.",
        scenarioTitle: "Telling them before they open it",
        scenario: "Three pieces of their order were outside tolerance on shade and have gone for rework. The delivery slips by four days. The weave was perfect. You found it yourselves at inspection, before dispatch.",
        to: "Ms Rana Darwish, Levant Home, Amman",
        re: "Order 4417 — four days",
        placeholder: "Dear Ms Darwish,\n\n",
        minWords: 60,
        frames: [
          "I am writing before … rather than after.",
          "At inspection, … were found … .",
          "They have gone for … , which … .",
          "The effect on your delivery is … .",
          "I would rather … ."
        ],
        note: { kind: "writer", title: "Finding it yourself is the good news",
                body: "<p>A client told about a batch caught at inspection learns that your inspection works. The same client discovering it on the shelf learns the opposite. Say which it was.</p>" },
        checklist: [
          "Have you said you are writing before dispatch?",
          "Is the finding described in the passive, without blame?",
          "Have you said what was <i>not</i> wrong?",
          "Is the delay given as a number of days?",
          "Have you made the point that it was caught before it left?"
        ],
        modelJobs: [
          "Says you are writing first",
          "States the finding",
          "States the decision and why",
          "Gives the delay",
          "Makes the point about inspection"
        ],
        model: "Dear Ms Darwish,\n\nI am writing before this consignment leaves us rather than after it reaches you.\n\nAt inspection on Tuesday, three pieces were found to be outside our shade tolerance. The weave was checked and is sound.\n\nThey have gone for rework rather than being sent as they are, because shade can be corrected in a second bath. The effect on your delivery is four days: the twenty-second rather than the eighteenth.\n\nI would rather tell you about a batch we caught than have you find it on a shelf.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "sequence"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the handbook describing the inspection process.",
        min: 60,
        note: { kind: "writer", title: "A process description is all present passive",
                body: "<p>Nobody is named because the process does not change when the people do. Switch to the active only at the point where a decision is taken, and then name the role rather than the person.</p>" },
        must: [
          "When inspection happens",
          "How the sample is taken",
          "What is done with shade faults and with weave faults",
          "Who decides, by role"
        ],
        model: "Every batch is inspected before it leaves the finishing room. A five per cent sample is taken at random across the full width and length of the run, never from one end. Pieces are measured against the specification and anything outside tolerance is recorded with its batch number. Shade faults are sent for rework, because shade can be corrected in a second bath; weave faults are scrapped, because they cannot. The shift supervisor decides between rework and scrap, and records the reason on the inspection sheet.",
        explain: { terms: [
          { en: "sound", gloss: "in good condition, with no fault", ar: "سليم" },
          { en: "by role", gloss: "naming the job rather than the person", ar: "حسب الوظيفة" }
        ] } }

    ]
  };
})();
