/* Unit 11 · Reports and Processes — LESSON 1 · VOCABULARY */
(function () {
  window.PAGE = {
    id: "u11-l1", unit: "u11", block: "l1", up: "../", tab: "AT WORK",
    objective: "Use the words of quality control, and say what each measurement is for",
    next: "l2.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "The words of quality", letter: "A",
        concepts: ["evidence", "correct"],
        kind: "cards", task: null, n: 0,
        prompt: "Nine words from the inspection bench. Say what each is for before you turn it over.",
        cards: [
          { term: "specification", ar: "مواصفة",
            meaning: "what the fabric is supposed to be",
            with: ["to specification", "within spec", "out of spec"],
            why: "From Unit 3. Quality is not a feeling; it is agreement with a document, and the document comes first." },
          { term: "tolerance", ar: "حدود السماح",
            meaning: "how far from the specification is still acceptable",
            with: ["within tolerance", "a tolerance of 2%"],
            why: "Nothing is made exactly to specification. A spec with no tolerance means every piece fails, which is why the number matters more than the target." },
          { term: "defect", ar: "عيب",
            meaning: "a fault in the goods themselves",
            with: ["a visible defect", "defect rate"],
            why: "A defect is in the cloth. A non-conformance is in the paperwork or the process. Auditors keep them apart and so should you." },
          { term: "batch", ar: "دفعة",
            meaning: "the quantity made in one run, treated as one unit for testing",
            with: ["batch number", "reject the batch"],
            why: "From Unit 1's sound pairs. Testing works by batch because that is the level at which a cause is shared." },
          { term: "sample", ar: "عيّنة",
            meaning: "the part of a batch actually examined",
            with: ["a 5% sample", "sampled at random"],
            why: "From Unit 10. The sample size and the acceptance number together decide how strict a check really is." },
          { term: "rework", ar: "إعادة المعالجة",
            meaning: "putting right something already made",
            with: ["sent for rework", "rework costs"],
            why: "One word, noun and verb. Cheaper than scrap and always more expensive than making it right first time." },
          { term: "scrap", ar: "تالف",
            meaning: "material that cannot be used or sold",
            with: ["scrap rate", "scrapped"],
            why: "The end of the line for a defect. Scrap is counted in metres and in money, and the two tell different stories." },
          { term: "traceability", ar: "إمكانية التتبّع",
            meaning: "being able to say which batch a piece came from",
            with: ["full traceability", "trace it back"],
            why: "What makes a recall possible. Without it, one bad batch means recalling everything." },
          { term: "non-conformance", ar: "عدم مطابقة",
            meaning: "a departure from the agreed process or specification",
            with: ["raise a non-conformance", "an NCR"],
            why: "Often abbreviated NCR, for non-conformance report. Raising one is not an accusation; it is how a process gets fixed." }
        ],
        explain: { terms: [
          { en: "tolerance", gloss: "how far from the specification is still acceptable", ar: "حدود السماح" },
          { en: "defect", gloss: "a fault in the goods themselves", ar: "عيب" },
          { en: "rework", gloss: "putting right something already made", ar: "إعادة المعالجة" },
          { en: "traceability", gloss: "being able to say which batch something came from", ar: "إمكانية التتبّع" }
        ] },
        after: "<p>The pair to keep apart is <b>defect</b> and <b>non-conformance</b>. The first is in the cloth and the second is in what we did, and a report that confuses them sends the wrong people to fix it.</p>" },

      { id: "1b", section: 1, sectionTitle: "The words of quality", letter: "B",
        concepts: ["sort", "evidence"],
        kind: "sort", task: null, n: 0,
        prompt: "Sort each item by whether it is a fault in the goods or a fault in the process.",
        note: { kind: "words", title: "Why the distinction decides what happens",
                body: "<p>A defect is fixed by rework or scrap. A non-conformance is fixed by changing what people do. Treating the second as the first means scrapping cloth every month and never finding out why.</p>" },
        bins: [
          { id: "goods",   label: "A defect — in the goods" },
          { id: "process", label: "A non-conformance — in what we did" }
        ],
        items: [
          { text: "uneven dye across a width",      bin: "goods",   why: "visible in the cloth itself." },
          { text: "a loose weave outside tolerance", bin: "goods",   why: "measurable against the specification." },
          { text: "a stain from the finishing bath", bin: "goods",   why: "a mark on the product." },
          { text: "the wrong shade against the swatch", bin: "goods", why: "the cloth does not match what was agreed." },
          { text: "the batch number was not recorded", bin: "process", why: "the cloth may be perfect and cannot be traced." },
          { text: "the sample was taken from one end only", bin: "process", why: "a sampling rule not followed; the cloth is not the problem." },
          { text: "the inspection was signed before it was done", bin: "process", why: "the record is wrong, whatever the cloth is like." },
          { text: "the tolerance used was last year's",  bin: "process", why: "measured correctly against the wrong number." }
        ],
        closer: "<p>Three of the four process failures leave perfectly good cloth behind them. That is what makes them easy to ignore and expensive to leave.</p>" },

      { id: "2a", section: 2, sectionTitle: "Complete the inspection report", letter: "A",
        concepts: ["write", "evidence"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "An inspection report on one batch. Choose the word for each gap.",
        heading: "Inspection — batch 4417-C",
        note: { kind: "words", title: "Before you start",
                body: "<p>An inspection report is written almost entirely in the passive. Nobody is interested in who held the ruler, and naming them would make the report about a person rather than a batch.</p>" },
        text: "Batch 4417-C was ___ on Tuesday. A five per cent ___ was taken at random across the full width and length. Three pieces were found to be outside ___ on shade. No defect was found in the weave. The batch was ___ for rework rather than scrapped, because the shade can be corrected in a second bath. One ___ was raised: the batch number had not been recorded on the dye sheet, so ___ depended on a handwritten note.",
        gaps: [
          { options: ["inspected", "looked"], answer: "inspected",
            why: "The formal verb, and the one that implies a method rather than a glance." },
          { options: ["sample", "piece"], answer: "sample",
            why: "<i>A five per cent sample</i> — the part examined, taken at random." },
          { options: ["tolerance", "specification"], answer: "tolerance",
            why: "<i>Outside tolerance</i> is the fixed phrase. The specification is the target; the tolerance is the allowance around it." },
          { options: ["sent", "found"], answer: "sent",
            why: "<i>Sent for rework</i> — the decision taken about the batch." },
          { options: ["non-conformance", "defect"], answer: "non-conformance",
            why: "A missing batch number is a process failure, not a fault in the cloth." },
          { options: ["traceability", "tolerance"], answer: "traceability",
            why: "Being able to say which batch a piece came from, which a handwritten note makes fragile." }
        ] },

      { id: "2b", section: 2, sectionTitle: "Complete the inspection report", letter: "B",
        concepts: ["risk", "write"],
        kind: "cloze", task: "read-cloze", cefr: "B1", n: 6,
        prompt: "Nour's note on the report. Choose the word for each gap.",
        heading: "Comment on 4417-C",
        text: "This is a good report and I want to say why, because the last three were not. It separates the ___ from the non-conformance, so I know that two different people have to act. It gives the sample size, which means the three failures ___ be read as a rate rather than a count. It says what was done with the batch and ___ , which is the sentence most reports leave out. One thing to change: <i>three pieces were found to be outside tolerance</i> is ___ , and that is right, but somewhere the report should say who is ___ to correct the shade and by when. The passive is for the findings. The actions are ___ by people, and the people should be named.",
        gaps: [
          { options: ["defect", "sample"], answer: "defect",
            why: "The distinction from Lesson 1B, and the reason two different people act." },
          { options: ["can", "must"], answer: "can",
            why: "<i>Can be read as a rate</i> — the sample size makes the interpretation possible." },
          { options: ["why", "when"], answer: "why",
            why: "<i>Sent for rework rather than scrapped, because the shade can be corrected</i> — the reason is the useful part." },
          { options: ["passive", "active"], answer: "passive",
            why: "No agent named, which is correct for a finding." },
          { options: ["able", "going"], answer: "able",
            why: "<i>Who is able to correct the shade</i> — this unit's structure, and a real question about capability." },
          { options: ["taken", "made"], answer: "taken",
            why: "<i>Actions are taken by people</i> — and the passive with <i>by</i> is exactly the form that names them." }
        ],
        explain: { terms: [
          { en: "to be read as", gloss: "to be understood as", ar: "يُفهَم على أنه" },
          { en: "agent", gloss: "the person or thing doing the action", ar: "الفاعل" }
        ] } },

      { id: "3a", section: 3, sectionTitle: "Read four short notices", letter: "A",
        concepts: ["read", "notice"],
        kind: "read", task: "read-notices", cefr: "B1", n: 4,
        prompt: "Four notices from the inspection bench. Choose what each one means.",
        text: { every: 1, mastColor: "blue", masthead: "NOTICES",
          blocks: [
            { h: "Sampling", lines: [
              "Samples are taken across the full width and length, never from one end.",
              "A sample from one end tests the start of the run and nothing else." ] },
            { h: "Batch numbers", lines: [
              "The batch number is written on the dye sheet before the cloth leaves the bath.",
              "A batch that cannot be traced is treated as a non-conformance even if the cloth is perfect." ] },
            { h: "Rework and scrap", lines: [
              "Shade faults go for rework. Weave faults are scrapped.",
              "A weave fault cannot be corrected and reworking one wastes a second bath." ] },
            { h: "Signing", lines: [
              "An inspection is signed after it is done, by the person who did it.",
              "Signing in advance to save time is a non-conformance and will be reported as one." ] }
          ] },
        items: [
          { para: 1, q: "Why is a sample not taken from one end?",
            options: [
              { text: "Because it tests only the start of the run.", correct: true,
                why: "The notice gives the reason as well as the rule, which is what makes it stick." },
              { text: "Because it is harder.", why: "Nothing about difficulty." },
              { text: "Because the ends are always faulty.", why: "The notice makes no such claim." } ] },
          { para: 2, q: "The cloth is perfect but the batch number was never written down.",
            options: [
              { text: "It is a non-conformance.", correct: true,
                why: "<i>Even if the cloth is perfect</i> — the notice anticipates the objection." },
              { text: "Nothing happens.", why: "Traceability is the point of the number." },
              { text: "It is a defect.", why: "A defect is in the goods, and the goods are fine." } ] },
          { para: 3, q: "A batch has a weave fault. What happens?",
            options: [
              { text: "It is scrapped — a weave fault cannot be corrected.", correct: true,
                why: "And the second line says why reworking it would waste a bath as well." },
              { text: "It goes for rework.", why: "Shade faults do; weave faults do not." },
              { text: "It is sold as second quality.", why: "Not an option this notice offers." } ] },
          { para: 4, q: "An inspector signs the sheet before starting, to save time later.",
            options: [
              { text: "That is a non-conformance and will be reported.", correct: true,
                why: "The notice names the excuse and rejects it in the same sentence." },
              { text: "It is acceptable if the inspection is then done.", why: "The notice rules this out explicitly." },
              { text: "It is a defect.", why: "Nothing is wrong with the cloth." } ] }
        ] },

      { id: "3b", section: 3, sectionTitle: "Read four short notices", letter: "B",
        concepts: ["word", "evidence"],
        kind: "build", task: null, n: 0,
        prompt: "The suffix <b>-ion</b> and the suffix <b>-ure</b>. Drag each root into the box for the suffix it takes.",
        note: { kind: "words", title: "Word building: two ways to make a process noun",
                body: "<p>Both turn a verb into the name of a process or its result.<br><em>inspect → inspection</em> · <em>fail → failure</em><br>There is no <em>inspecture</em> and no <em>failion</em>. The pairs have to be learned as pairs.</p>" },
        family: { word: "inspect", forms: [
          { part: "verb", word: "in·SPECT" },
          { part: "noun, process", word: "in·SPEC·tion" },
          { part: "noun, person", word: "in·SPEC·tor" },
          { part: "adjective", word: "—", note: "no ordinary adjective" } ] },
        text: { every: 1, mastColor: "green", masthead: "IN USE",
          blocks: [ { lines: [
            "The <b>inspection</b> found three pieces outside tolerance and no weave <b>failure</b>.",
            "Our <b>procedure</b> requires a five per cent sample and full <b>traceability</b>.",
            "<b>Production</b> stopped for an hour under <b>pressure</b> from the dye house.",
            "The <b>correction</b> was a second bath, and the <b>measure</b> of success is the shade." ] } ] },
        items: [
          { root: "inspect",  affix: "-ion", answer: "inspection",  why: "the process. The person is an <i>inspector</i>." },
          { root: "produce",  affix: "-ion", answer: "production",  why: "the root changes shape as well as taking the suffix." },
          { root: "correct",  affix: "-ion", answer: "correction",  why: "and note the verb and adjective are the same word." },
          { root: "fail",     affix: "-ure", answer: "failure",     why: "no <i>failion</i>. One of the commonest <i>-ure</i> nouns in English." },
          { root: "proceed",  affix: "-ure", answer: "procedure",   why: "the spelling changes: <i>proceed</i> loses an <i>e</i>." },
          { root: "press",    affix: "-ure", answer: "pressure",    why: "the double <i>s</i> stays and the sound becomes /ʃ/." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Read four short notices", letter: "C",
        concepts: ["comparison", "correct"],
        kind: "oddone", task: null, n: 0,
        prompt: "Three in each row belong together. Choose the one that does not.",
        items: [
          { group: "faults in the goods", options: [
            { text: "uneven shade", why: "visible in the cloth." },
            { text: "loose weave", why: "measurable against the spec." },
            { text: "a stain", why: "a mark on the product." },
            { text: "a missing batch number", correct: true, why: "The cloth may be perfect. This is a process failure." } ] },
          { group: "what happens to faulty cloth", options: [
            { text: "rework", why: "put right and used." },
            { text: "scrap", why: "cannot be used or sold." },
            { text: "downgrade", why: "sold as second quality." },
            { text: "traceability", correct: true, why: "Traceability is a property of the records, not a destination for cloth." } ] },
          { group: "things a sample size affects", options: [
            { text: "how strict the check is", why: "a bigger sample catches more." },
            { text: "how long it takes", why: "directly." },
            { text: "whether a failure is a rate", why: "three in a sample of sixty means something; three alone does not." },
            { text: "the tolerance", correct: true, why: "The tolerance is set by the specification and does not change with how much you look at." } ] },
          { group: "neutral words for a problem", options: [
            { text: "non-conformance", why: "a departure from the process." },
            { text: "finding", why: "what an audit produces." },
            { text: "defect", why: "names the fault without naming a cause." },
            { text: "carelessness", correct: true, why: "A judgement about a person. The other three describe the thing found." } ] }
        ] }

    ]
  };
})();
