/* Unit 11 · Reports and Processes — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u11-l5", unit: "u11", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read a written procedure and a bubble chart, and tell a step from a standard",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the procedure", letter: "A",
        concepts: ["read", "sequence"],
        kind: "cards", task: null, n: 0,
        prompt: "Six words from a written procedure. Say what each means before you turn it over.",
        cards: [
          { term: "procedure", ar: "إجراء",
            meaning: "the written order of steps for one piece of work",
            with: ["follow the procedure", "a written procedure"],
            why: "A procedure is the steps. A standard is what the result must reach. Confusing the two is how a workshop passes every step and fails the order." },
          { term: "tolerance", ar: "حدود السماح",
            meaning: "how far from the target a result may be and still pass",
            with: ["within tolerance", "outside tolerance"],
            why: "Takes no preposition after <i>outside</i>, and it is a number. A tolerance nobody has written down is an opinion held by whoever is on shift." },
          { term: "specification", ar: "مواصفة",
            meaning: "the full written description of what is to be made",
            with: ["to specification", "the spec sheet"],
            why: "Often shortened to <i>spec</i> in speech and never in a contract. It carries the target and the tolerance together." },
          { term: "rework", ar: "إعادة المعالجة",
            meaning: "work done again to bring a piece inside tolerance",
            with: ["sent for rework", "a rework rate"],
            why: "Both noun and verb, and the noun takes no article in a rate: <i>our rework was four per cent</i>." },
          { term: "scrap", ar: "تالف",
            meaning: "material that cannot be corrected and is written off",
            with: ["scrapped", "scrap rate"],
            why: "The line between rework and scrap is not quality but reversibility. A shade can be redyed; a broken warp cannot be rewoven." },
          { term: "sign-off", ar: "اعتماد",
            meaning: "the recorded approval that lets work move on",
            with: ["waiting for sign-off"],
            why: "Hyphenated as a noun, two words as a verb: <i>she signed off the batch</i>. A step with no sign-off leaves no evidence that it happened." }
        ],
        explain: { terms: [
          { en: "tolerance", gloss: "how far from the target a result may be and still pass", ar: "حدود السماح" },
          { en: "rework", gloss: "work done again to correct a piece", ar: "إعادة المعالجة" },
          { en: "sign-off", gloss: "recorded approval to move on", ar: "اعتماد" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the procedure", letter: "B",
        concepts: ["read", "sequence"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The procedure as it is written on the wall of the inspection room. Read it, then answer.",
        text: { every: 1, mastColor: "green", masthead: "INSPECTION PROCEDURE \u2014 WOVEN COTTON",
          blocks: [
            { h: "Purpose and scope", lines: [
              "This procedure covers woven cotton after finishing and before dispatch. It does not cover yarn or made-up goods.",
              "It establishes whether a batch meets the specification, not why a batch failed; that is a separate procedure." ] },
            { h: "Steps", lines: [
              "One. The batch is booked in and the specification drawn from the file.",
              "Two. Five per cent is sampled at random across the full width and length. Sampling one end only is not permitted.",
              "Three. Each piece is measured for shade against the approved swatch, and for width, weight and weave.",
              "Four. Results go on the inspection sheet, with the batch number, the sample size and each piece\u2019s position.",
              "Five. Pieces outside tolerance are classified: shade faults for rework, weave faults for scrap.",
              "Six. The supervisor signs and records the reason for each classification." ] },
            { h: "Standards and limits", lines: [
              "Shade passes at a grey scale rating of four or better. Width may vary one centimetre either way.",
              "A batch is released when no more than two per cent of the sample is outside tolerance.",
              "Above that it is held and the customer told the same day, whether or not a decision has been reached.",
              "The sheet is kept for seven years and given to the customer on request." ] }
          ] },
        items: [
          { q: "What is this procedure for?",
            options: [
              { text: "Deciding whether a batch meets the specification.", correct: true,
                why: "Stated in the purpose, and the sentence after it rules out the thing readers assume." },
              { text: "Finding out why a batch failed.", why: "Explicitly excluded and sent to another procedure." },
              { text: "Agreeing the specification with the customer.", why: "The spec is drawn from the file in step one, so it is agreed before this begins." } ] },
          { q: "What is wrong with sampling from the end of a run?",
            options: [
              { text: "It only tests one part of what was made.", correct: true,
                why: "A run can drift. The whole point of <i>across the full width and length</i> is to catch drift." },
              { text: "The end is always worse.", why: "The procedure does not say so, and if it did the rule would be to sample the end." },
              { text: "It is slower.", why: "It is faster, which is why the ban is written down." } ] },
          { q: "Which step produces the evidence that the rest of the procedure happened?",
            options: [
              { text: "Step four, the inspection sheet.", correct: true,
                why: "It records the batch, the sample size and the positions — everything the earlier steps claim." },
              { text: "Step two, the sampling.", why: "Sampling leaves no trace unless step four writes it down." },
              { text: "Step six, the signature.", why: "The signature authorises the record. The record is step four." } ] },
          { q: "A piece is 1.5 cm wider than the specification. What is it?",
            options: [
              { text: "Outside tolerance.", correct: true,
                why: "The limit is one centimetre either way, so 1.5 is outside it." },
              { text: "Within tolerance.", why: "Only up to one centimetre." },
              { text: "Not covered.", why: "Width is one of the four measures in step three and has a stated limit." } ] },
          { q: "Three per cent of a sample is outside tolerance on shade. What happens?",
            options: [
              { text: "The batch is held and the customer is told today.", correct: true,
                why: "Above two per cent, and the telling does not wait for the decision." },
              { text: "It goes for rework and the customer is told when it is done.", why: "Rework may well follow, and the notification is not allowed to wait for it." },
              { text: "It is released, because shade can be reworked.", why: "Reworkable is not the same as releasable." } ] },
          { q: "Why does the procedure say the customer is told “whether or not a decision has been reached”?",
            options: [
              { text: "So that waiting for a decision cannot become a reason for silence.", correct: true,
                why: "The clause exists because the natural instinct is to tell the customer once you know what you will do." },
              { text: "Because the customer decides.", why: "The customer is told; the supervisor classifies." },
              { text: "Because the decision takes more than a day.", why: "It often does not, and the rule holds either way." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "A step or a standard", letter: "A",
        concepts: ["read", "comparison"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the sentence that gives a standard rather than a step.",
        note: { kind: "reader", title: "A step is done; a standard is reached",
                body: "<p>A step says what somebody does. A standard says what the result must be, usually with a number. A procedure needs both, and a procedure with steps and no standards cannot fail anything.</p>" },
        items: [
          { prompt: "Which sentence gives a standard?",
            text: "A sample is taken across the run. Shade is rated against the approved swatch. A rating of four or better passes. The supervisor signs the sheet.",
            answer: "A rating of four or better passes.",
            why: "A threshold and an outcome. The other three are things people do, and none of them says what counts as good." },
          { prompt: "Which sentence gives a standard?",
            text: "Width is measured at three points. The reading is entered on the sheet. Variation of more than one centimetre is outside tolerance. Al-Masri files the sheet by batch number.",
            answer: "Variation of more than one centimetre is outside tolerance.",
            why: "It says where the line is. Measuring at three points tells you nothing about whether a reading passes." },
          { prompt: "Which sentence gives a standard?",
            text: "The batch is booked in on arrival. The specification is drawn from the file. No batch may be released with more than two per cent outside tolerance. The sheet goes to the supervisor.",
            answer: "No batch may be released with more than two per cent outside tolerance.",
            why: "A limit on the whole batch rather than on one piece, which is the standard the release decision turns on." },
          { prompt: "Which sentence gives a standard?",
            text: "Faults are classified by type. Shade faults go for rework. The customer is informed the same day where a batch is held. Weave faults are scrapped.",
            answer: "The customer is informed the same day where a batch is held.",
            why: "The one sentence with a measurable requirement on it. The others describe what is done to the cloth, which is procedure, not standard." }
        ] },

      { id: "2b", section: 2, sectionTitle: "A step or a standard", letter: "B",
        concepts: ["comparison", "error"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Faults found at inspection last year, by cause. Read the chart, then answer.",
        note: { kind: "reader", title: "Area, not width",
                body: "<p>A bubble chart shows size by area, and the eye reads area badly — a bubble twice as wide is four times the size. This is why every bubble here carries its figure. If a bubble chart in a report does not, read the table instead.</p>" },
        chart: {
          kind: "bubble",
          title: "Faults at inspection, by cause",
          sub: "All faults recorded in the year to March. 412 faults in total, from 214 batches.",
          unit: "per cent of faults",
          alt: "Bubble chart: shade 46 per cent, weave 23, width 18, stains 9, other 4",
          bubbles: [
            { name: "Shade",  v: 46, label: "46%", x: 90,  y: 165, g: 0 },
            { name: "Weave",  v: 23, label: "23%", x: 232, y: 165, g: 1 },
            { name: "Width",  v: 18, label: "18%", x: 360, y: 165, g: 2 },
            { name: "Stains", v: 9,  label: "9%",  x: 470, y: 165, g: 0 },
            { name: "Other",  v: 4,  label: "4%",  x: 560, y: 165, g: 1 }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Cause", "Per cent of faults"],
          rows: [["Shade", 46], ["Weave", 23], ["Width", 18], ["Stains", 9], ["Other", 4]]
        },
        items: [
          { q: "Which cause accounts for most faults?",
            options: [
              { text: "Shade, at 46 per cent.", correct: true,
                why: "Nearly half, and more than weave and width together." },
              { text: "Weave.", why: "23 per cent, half of shade." },
              { text: "The chart does not say.", why: "Every bubble carries its figure, which is the point of the note above." } ] },
          { q: "The shade bubble looks about twice as wide as the stains bubble. What is the real ratio?",
            options: [
              { text: "About five to one.", correct: true,
                why: "46 to 9. Area goes with the square of the width, so twice the width is roughly five times the value here." },
              { text: "About two to one.", why: "What the eye reports, and why bubble charts mislead without figures." },
              { text: "About ten to one.", why: "That would need stains at under five per cent." } ] },
          { q: "What does the chart tell you about how many batches had a fault?",
            options: [
              { text: "Nothing — it divides up faults, not batches.", correct: true,
                why: "412 faults could come from forty batches or from two hundred. The chart cannot distinguish them." },
              { text: "214, the number of batches.", why: "That is the population, not the number with faults." },
              { text: "Just under half of them.", why: "Reading the largest slice as a proportion of batches. Different denominator." } ] },
          { q: "Shade is nearly half the faults. Which procedure step does that point at?",
            options: [
              { text: "Nothing in this procedure — it points at dyeing.", correct: true,
                why: "Inspection finds shade faults; it does not cause them. The fault investigation procedure is where this leads." },
              { text: "Step two, the sampling.", why: "Sampling determines how many faults you find, not which causes dominate." },
              { text: "Step five, the classification.", why: "Classification sorts faults that already exist." } ] },
          { q: "Which figure would make this chart far more useful to a manager?",
            options: [
              { text: "The cost of each cause, not just the count.", correct: true,
                why: "Four per cent of faults can be most of the money if each one scraps a roll. Unit 8's lesson, applied to a chart." },
              { text: "The month each fault was found.", why: "Useful for trend, and it would not change which cause matters most." },
              { text: "The name of the inspector.", why: "Which would tell you about the finding, not about the fault." } ] },
          { q: "What is the honest limit of the “other” bubble?",
            options: [
              { text: "It hides whatever was too rare to name.", correct: true,
                why: "An <i>other</i> category is a decision about what not to show, and four per cent of 412 is sixteen faults." },
              { text: "It is too small to matter.", why: "Sixteen faults of unknown kind is exactly the sort of thing that turns out to matter." },
              { text: "It is an error in the chart.", why: "It is a normal and necessary category, and a reader should still ask what is in it." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the procedure said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the procedure in 1B.",
        carry: "1b",
        items: [
          { stem: "This procedure applies to yarn as well as to woven cotton.", answer: "F", line: 1,
            why: "The scope excludes yarn and made-up goods by name." },
          { stem: "Five per cent of each batch is sampled.", answer: "T", line: 4,
            why: "Step two, with the method of taking it attached to the figure." },
          { stem: "Pieces are measured for colour fastness.", answer: "NI", line: null,
            why: "Step three lists shade, width, weight and weave. Fastness is a real test and is not in this list." },
          { stem: "Weave faults can be sent for rework.", answer: "F", line: 7,
            why: "Step five sends shade for rework and scraps weave. The asymmetry is the rule." },
          { stem: "A batch with three per cent outside tolerance is released.", answer: "F", line: 10,
            why: "The release limit is two per cent, so this one is held." },
          { stem: "The customer always receives the inspection sheet.", answer: "F", line: 12,
            why: "On request only. <i>Always</i> is stronger than the text." },
          { stem: "The inspection sheet is kept for seven years.", answer: "T", line: 12,
            why: "Stated, and it matches the retention period in Unit 10." },
          { stem: "Most faults last year were shade faults.", answer: "NI", line: null,
            why: "True from the chart in 2B and absent from the procedure, which is the distinction this exercise is testing." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the procedure said", letter: "B",
        concepts: ["sequence", "correct"],
        kind: "sequence", task: null, n: 0,
        prompt: "Put the six steps back in the order the procedure gives them.",
        steps: [
          { pos: 1, text: "Book the batch in and draw the customer specification from the file.",
            why: "You cannot inspect against a standard you have not fetched." },
          { pos: 2, text: "Take five per cent at random across the full width and length.",
            why: "Before measuring, because what you measure is decided by what you took." },
          { pos: 3, text: "Measure each piece for shade, width, weight and weave.",
            why: "The measurement itself, against the swatch and the specification." },
          { pos: 4, text: "Enter the results on the inspection sheet.",
            why: "The record, and the only step that survives the day." },
          { pos: 5, text: "Classify anything outside tolerance as rework or scrap.",
            why: "A decision, and it needs the results to be written down first." },
          { pos: 6, text: "The supervisor signs and records the reason for each classification.",
            why: "Authorisation last, because a signature on an incomplete sheet authorises nothing." }
        ],
        closer: "<p>Notice that the record comes before the decision. A procedure written the other way round — decide, then write it up — produces sheets that agree with the decision rather than with the cloth.</p>" },

      { id: "3c", section: 3, sectionTitle: "Check what the procedure said", letter: "C",
        concepts: ["people", "error"],
        kind: "recap", task: null, n: 0,
        prompt: "Four people and the procedure. Match each takeaway to the person it describes.",
        cases: [
          { id: "c1", label: "Hiba", detail: "Finds 2.4 per cent outside tolerance, decides it is close enough, and releases the batch." },
          { id: "c2", label: "Tarek", detail: "Holds a batch at three per cent and waits two days to tell the customer, until he knows what the plan is." },
          { id: "c3", label: "Rasha", detail: "Samples the last twenty metres of the run because the roll is already on the bench." },
          { id: "c4", label: "Omar", detail: "Reads the bubble chart, sees shade at 46 per cent, and asks the inspection room to inspect shade more carefully." }
        ],
        takeaways: [
          { text: "A standard with a number is not a suggestion, and 2.4 is above two.", caseId: "c1",
            why: "The whole value of a written threshold is that it decides cases nobody wants to decide." },
          { text: "Telling the customer was never conditional on having an answer.", caseId: "c2",
            why: "The procedure says <i>whether or not a decision has been reached</i>, and this is the behaviour that clause was written against." },
          { text: "Convenience is how sampling stops representing the run.", caseId: "c3",
            why: "Step two bans end-only sampling precisely because the bench makes it the easy choice." },
          { text: "The chart counts faults found; it does not say the finding was poor.", caseId: "c4",
            why: "He has read a chart about dyeing as a chart about inspection. More careful inspection would raise the count, not lower it." }
        ] }

    ]
  };
})();
