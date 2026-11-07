/* Unit 12 · Clients and Proposals — LESSON 2 · WRITING */
(function () {
  window.PAGE = {
    id: "u12-l2", unit: "u12", block: "l2", up: "../", tab: "AT WORK",
    objective: "Write a proposal that gives examples, and choose between an infinitive and a gerund",
    next: "l3.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Giving examples and details", letter: "A",
        concepts: ["write", "evidence"],
        kind: "annotate", task: null, n: 0,
        prompt: "Five lines from a proposal. Click each one and say what job it is doing.",
        note: { kind: "writer", title: "A claim, then the thing that makes it believable",
                body: "<p>A proposal is a sequence of claims, and a claim with nothing after it is an adjective. What follows it can be an example, a figure, a named reference or a limit — and the limit is often the most persuasive of the four.</p>" },
        jobs: [
          "A claim",
          "An example that makes the claim concrete",
          "A figure that makes it checkable",
          "A named reference the client can telephone",
          "A limit the client did not ask for"
        ],
        sentences: [
          { text: "We are reliable on lead time.",
            job: "A claim",
            why: "On its own it is worth nothing, because every tenderer writes it. It needs the three lines below it." },
          { text: "For example, the twelve consignments to Levant Home in the year to March all left within the four weeks quoted.",
            job: "An example that makes the claim concrete",
            why: "One named customer, one period, one promise kept. An example is a claim you can argue with, which is why it persuades." },
          { text: "Our average was 24 days against a 28-day quotation, with one consignment at 27.",
            job: "A figure that makes it checkable",
            why: "The worst case is included. A proposal that gives only the average is giving half a figure." },
          { text: "Ms Rana Sayegh at Levant Home has agreed to take a call about this.",
            job: "A named reference the client can telephone",
            why: "<i>Agree</i> takes an infinitive. And note that permission was obtained before the name was used." },
          { text: "We are not able to hold four weeks through July, and we propose six.",
            job: "A limit the client did not ask for",
            why: "Volunteering a limit costs one sentence and buys the rest of the document. It is the line a buyer remembers." }
        ],
        after: "<p>Four of the five lines exist to support the first. A proposal where every sentence is line one reads as confident and tells the reader nothing.</p>",
        explain: { terms: [
          { en: "to hold a lead time", gloss: "to keep to the delivery time promised", ar: "يلتزم بمدة التسليم" },
          { en: "a limit", gloss: "something you state you cannot do", ar: "قيد مُعلَن" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Giving examples and details", letter: "B",
        concepts: ["write", "deliverable"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the lead-time section of the tender. Sixty to eighty words.",
        scenarioTitle: "Lead time — Barada tender",
        scenario: "Twelve consignments went to Levant Home in the year to March, all inside the four weeks quoted; the average was 24 days and the slowest was 27. July is different: the dye house closes for ten days and four weeks cannot be held. You want to propose four weeks for eleven months and six for July.",
        to: "Draft section for the Barada tender",
        re: "Lead time",
        placeholder: "",
        minWords: 60,
        frames: [
          "We offer a lead time of … from order.",
          "In the year to March, … consignments … .",
          "The average was … , and the slowest … .",
          "We are not able to hold this in July, because … .",
          "For July we propose … ."
        ],
        note: { kind: "writer", title: "Put the exception in, not in a footnote",
                body: "<p>The July problem will be discovered either by you now or by the buyer in July. Writing it into the section it belongs in costs you nothing a competitor will not also have to admit, and it makes the other eleven months believable.</p>" },
        checklist: [
          "Is the offer stated as a number of weeks from order?",
          "Is there an example with a named customer and a count?",
          "Does it give the average and the worst case?",
          "Is the July exception stated with its reason?",
          "Does it propose something for July rather than only warning about it?"
        ],
        modelJobs: [
          "The offer",
          "The example, with a name and a count",
          "The figures, including the worst case",
          "The exception and its reason",
          "What is proposed instead"
        ],
        model: "We offer a lead time of four weeks from order.\n\nIn the year to March, twelve consignments were delivered to Levant Home in Amman, all of them within the four weeks quoted.\n\nThe average was 24 days and the slowest was 27. We prefer to give the slowest figure as well as the average, because the slowest is the one that affects a hotel opening.\n\nWe are not able to hold four weeks in July, because our dye house closes for ten days.\n\nFor July we propose six weeks, stated now rather than explained later." },

      { id: "2a", section: 2, sectionTitle: "Build the sentence", letter: "A",
        concepts: ["write", "agreement"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Put the words in order. All three take an infinitive.",
        items: [
          { cue: "Say what the company has decided.", band: "B1",
            target: "We have decided to tender for the whole contract",
            jobs: { "We": "subject", "have": "verb", "for": "adverbial" },
            why: "<i>Decide</i> takes an infinitive and never a gerund. So do <i>agree</i>, <i>offer</i>, <i>promise</i>, <i>refuse</i> and <i>arrange</i>." },
          { cue: "Say what somebody has agreed to do.", band: "B1",
            target: "Ms Sayegh has agreed to take a call from the buyer",
            jobs: { "Ms Sayegh": "subject", "has": "verb", "from": "adverbial" },
            why: "<i>Agree to do</i>. Note <i>agree with</i> for a person or an opinion, which takes no verb at all." },
          { cue: "Say what you could not manage.", band: "B1",
            target: "We failed to send the certificate with the first submission",
            jobs: { "We": "subject", "failed": "verb", "with": "adverbial" },
            why: "<i>Fail to do</i>. It is the plainest way to admit something in a proposal, and plainness is the point." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Build the sentence", letter: "B",
        concepts: ["write", "comparison"],
        kind: "orderset", task: "sentence-build", cefr: "B1", n: 3,
        prompt: "Three more. These take a gerund, or change meaning with each.",
        items: [
          { cue: "Make a recommendation.", band: "B1",
            target: "We recommend ordering the July stock in May",
            jobs: { "We": "subject", "recommend": "verb", "in": "adverbial" },
            why: "<i>Recommend</i> takes a gerund. <i>Suggest</i>, <i>consider</i>, <i>avoid</i> and <i>involve</i> behave the same way." },
          { cue: "Say you tried something and it did not work.", band: "B1",
            target: "We tried dyeing in two smaller baths and the shade varied",
            jobs: { "We": "subject", "tried": "verb", "and": "linker", "the shade": "subject" },
            why: "<i>Try doing</i> means you experimented. <i>Try to do</i> would mean you attempted and may have failed — a different claim." },
          { cue: "Say an obligation ended.", band: "B1",
            target: "We stopped sending paper copies when the client asked us to",
            jobs: { "We": "subject", "stopped": "verb", "when": "linker", "the client": "subject" },
            why: "<i>Stop doing</i> ends the activity. <i>Stop to do</i> would mean you paused in order to do it, which is a different event." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write it yourself", letter: "A",
        concepts: ["write", "cost"],
        kind: "write-email", task: "write-internal", cefr: "B1", n: 1,
        prompt: "Write the price section. Sixty to eighty words.",
        scenarioTitle: "Price — Barada tender",
        scenario: "3.40 dollars a metre for sheeting, 3.90 for pillowcase cloth, held for twelve months as required. Minimum order 2,000 metres a line. Cotton is bought in March and September, so a twelve-month hold carries real risk; you want to say you accept it rather than pretend it is nothing. Lina recommends stating the minimum order in the same paragraph as the price.",
        to: "Draft section for the Barada tender",
        re: "Price and minimum order",
        placeholder: "",
        minWords: 60,
        frames: [
          "Our unit prices are … and … .",
          "These are held for … , as required.",
          "The minimum order is … a line, because … .",
          "We have agreed to … the twelve-month hold, and we want to say why it is not trivial: … .",
          "We would rather … than … ."
        ],
        note: { kind: "writer", title: "A price with its condition attached",
                body: "<p>A unit price on its own invites a comparison the buyer cannot make fairly. Putting the minimum order in the same paragraph is not a concession; it stops a cheaper tender with a 10,000-metre minimum looking cheaper than it is.</p>" },
        checklist: [
          "Are both unit prices stated?",
          "Is the twelve-month hold acknowledged as the requirement it is?",
          "Is the minimum order in the same paragraph, with a reason?",
          "Does it say honestly why a twelve-month hold is a real risk?",
          "Does it say what you would rather do than revise the price?"
        ],
        modelJobs: [
          "The two unit prices",
          "The price hold, as required",
          "The minimum order and its reason",
          "The honest statement of the risk",
          "What you would rather do"
        ],
        model: "Our unit prices are 3.40 dollars a metre for sheeting and 3.90 for pillowcase cloth.\n\nThese are held for twelve months, as the invitation requires.\n\nThe minimum order is 2,000 metres a line, because a dye bath below that volume cannot hold shade across the run.\n\nWe have agreed to the twelve-month hold and we would rather say why it is not trivial. We buy cotton in March and September, so one of those purchases falls inside the period at a price we cannot yet see.\n\nWe would rather carry that risk than ask to reopen the price in month seven." },

      { id: "3b", section: 3, sectionTitle: "Write it yourself", letter: "B",
        concepts: ["write", "people"],
        kind: "write-email", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "Ask Rana Sayegh for permission to name her. Sixty to eighty words.",
        scenarioTitle: "Asking before you name somebody",
        scenario: "You want to give Levant Home as a trade reference in the Barada tender. The buyer may telephone. Rana Sayegh has never been asked before and you have never given her as a reference. Tell her what you are claiming about your lead time, so that she is not surprised by the question.",
        to: "Rana Sayegh, Levant Home",
        re: "A reference for a tender — may we name you?",
        placeholder: "Dear Ms Sayegh,\n\n",
        minWords: 60,
        frames: [
          "We have decided to tender for … , and the invitation requires … .",
          "May we name you … ?",
          "If you agree, the buyer may … .",
          "So that nothing surprises you, what we have claimed is … .",
          "If you would rather not, … ."
        ],
        note: { kind: "writer", title: "Tell her what you claimed",
                body: "<p>The reason to send this email is not politeness. A reference who does not know what you promised answers the wrong question, and a buyer hears hesitation as doubt. Two sentences of the claim make her answer useful.</p>" },
        checklist: [
          "Does it say what the tender is and why a reference is needed?",
          "Does it actually ask?",
          "Does it say she may be telephoned?",
          "Does it state the claim she will be asked to confirm, with figures?",
          "Does it make refusing easy?"
        ],
        modelJobs: [
          "What the tender is",
          "The request",
          "What it would involve",
          "The claim, with figures",
          "The way out"
        ],
        model: "Dear Ms Sayegh,\n\nWe have decided to tender for bed linen for Barada Hotels, and the invitation requires two trade references.\n\nMay we name Levant Home as one of them?\n\nIf you agree, their buyer may telephone you. He is likely to ask one question: whether we keep to the lead time we quote.\n\nSo that nothing surprises you, what we have claimed is this: twelve consignments in the year to March, all inside the four weeks quoted, averaging 24 days with the slowest at 27.\n\nIf you would rather not, please say so plainly. It will not be mentioned again.\n\nSamer Khoury" },

      { id: "3c", section: 3, sectionTitle: "Write it yourself", letter: "C",
        concepts: ["write", "deliverable"],
        kind: "paragraph", task: "write-correspondence", cefr: "B1", n: 1,
        prompt: "One paragraph for the proposal, offering something that was not asked for.",
        min: 60,
        note: { kind: "writer", title: "An unasked-for offer needs a reason",
                body: "<p>An extra on its own looks like padding. Say what worry it answers, and it becomes an argument. Inspection sheets are a good example: nobody requests them, and every buyer who has been sent bad cloth wants them.</p>" },
        must: [
          "What is being offered",
          "What worry it answers",
          "What the client will actually see",
          "What is not being claimed"
        ],
        model: "We propose to supply the inspection sheet with every consignment, although the invitation does not ask for it. The worry it answers is the one no tender document states: that a buyer who receives a faulty batch has no way of telling whether it was inspected at all. The sheet carries the batch number, the sample size and the position each sampled piece was taken from, so a spread sample can be distinguished from a convenient one. We are not claiming that this prevents faults. We are claiming that it lets you see, in two minutes, whether our procedure was followed on your cloth.",
        explain: { terms: [
          { en: "padding", gloss: "material added to make a document look fuller", ar: "حشو" },
          { en: "an extra", gloss: "something offered beyond what was requested", ar: "إضافة تطوّعية" }
        ] } }

    ]
  };
})();
