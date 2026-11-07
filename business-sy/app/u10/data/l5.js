/* Unit 10 · Records and Responsibility — LESSON 5 · READING AT WORK */
(function () {
  window.PAGE = {
    id: "u10-l5", unit: "u10", block: "l5", up: "../", tab: "AT WORK",
    objective: "Read an audit report and a trend line, and tell a control from a result",
    next: "oc.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Read the audit report", letter: "A",
        concepts: ["read", "approval"],
        kind: "cards", task: null, n: 0,
        prompt: "Six words from the report. Say what each means before you turn it over.",
        cards: [
          { term: "control", ar: "ضابط رقابي",
            meaning: "a step designed to stop a particular error",
            with: ["a second-person check is a control"],
            why: "A control has a who and a when. <i>We are careful</i> is not a control, because nothing can be tested." },
          { term: "finding", ar: "ملاحظة جوهرية",
            meaning: "something an audit says must be fixed",
            with: ["two findings", "close a finding"],
            why: "Stronger than an observation and weaker than a breach. Findings carry a response and a date." },
          { term: "observation", ar: "ملاحظة",
            meaning: "something noted that requires no action",
            with: ["an observation only"],
            why: "Worth more attention than its status suggests. An observation is often a finding that has not happened yet." },
          { term: "sample", ar: "عيّنة",
            meaning: "the part of the records actually examined",
            with: ["a sample of ten", "sample size"],
            why: "Two failures in ten is not two failures. It is a rate, and the whole population is what it points at." },
          { term: "remediation", ar: "إجراء تصحيحي",
            meaning: "the work done to fix what an audit found",
            with: ["a remediation plan"],
            why: "What you do afterwards. An audit is judged by its remediation, not by the number of findings." },
          { term: "root cause", ar: "السبب الجذري",
            meaning: "what produced the failure, as against what showed it",
            with: ["the root cause was"],
            why: "From Unit 6. A missing delivery note is a symptom; nobody owning the chase is a root cause." }
        ],
        explain: { terms: [
          { en: "control", gloss: "a step designed to stop a particular error", ar: "ضابط رقابي" },
          { en: "finding", gloss: "something that must be fixed", ar: "ملاحظة جوهرية" },
          { en: "sample", gloss: "the part of the records examined", ar: "عيّنة" }
        ] } },

      { id: "1b", section: 1, sectionTitle: "Read the audit report", letter: "B",
        concepts: ["read", "evidence"],
        kind: "read", task: "read-article", cefr: "B1", n: 6,
        prompt: "The written report. Read it, then answer.",
        text: { every: 1, mastColor: "blue", masthead: "SAMPLE CHECK — REPORT",
          blocks: [
            { h: "Scope", lines: [
              "Ten consignments were examined from the twelve months to March, selected at random from a population of 214.",
              "The check covered the documents only. It did not examine the goods, the premises or the accounts." ] },
            { h: "Findings", lines: [
              "Finding one: in two of the ten, no signed delivery note could be produced. The root cause is that no person owned the chase, so nothing was overdue to anybody.",
              "Finding two: reissued invoices do not record who authorised the reissue. The control exists — a second person checks the figures — but it leaves no evidence that it happened." ] },
            { h: "Observation and conclusion", lines: [
              "Observation: some files are being retained for ten years against a stated period of seven. This is not a breach, though personal data within them should not be held beyond the stated period.",
              "One discrepancy of two pallets was found during the period. It was identified by the company before dispatch, corrected by reissued invoice, and documented. We regard that as the controls working rather than as a failure.",
              "The company's responses to both findings are adequate. We will re-check the delivery note process in twelve months." ] }
          ] },
        items: [
          { para: 1, q: "How were the ten consignments chosen?",
            options: [
              { text: "At random, from 214.", correct: true,
                why: "Both halves matter: random selection is what lets a sample stand for the population." },
              { text: "They were the ten with problems.", why: "That would not be a sample; it would be a list." },
              { text: "The company chose them.", why: "The report says selected at random, and does not say by whom — but not by the company's choosing." } ] },
          { para: 1, q: "What did the check not cover?",
            options: [
              { text: "The goods, the premises and the accounts.", correct: true,
                why: "A scope statement is a limitation, and it protects both sides." },
              { text: "The delivery notes.", why: "Those are finding one." },
              { text: "Nothing — it covered everything.", why: "The second line exists to say otherwise." } ] },
          { para: 2, q: "What is the root cause of the first finding?",
            options: [
              { text: "Nobody owned the chase, so nothing was overdue to anyone.", correct: true,
                why: "The report distinguishes the missing document from the reason it is missing, which is the whole value of a root cause." },
              { text: "The carrier did not return them.", why: "Not stated, and it would be a symptom rather than a cause." },
              { text: "The records were destroyed.", why: "Nothing suggests that." } ] },
          { para: 2, q: "What is unusual about the second finding?",
            options: [
              { text: "The control exists but leaves no evidence.", correct: true,
                why: "The sharpest sentence in the report: doing the check and being able to show it are different things." },
              { text: "There is no control at all.", why: "A second person checks the figures." },
              { text: "The invoices were wrong.", why: "The finding is about the record of authorisation, not about the figures." } ] },
          { para: 3, q: "Why is the two-pallet discrepancy not a finding?",
            options: [
              { text: "Because the company found it, corrected it properly and documented it.", correct: true,
                why: "<i>The controls working rather than a failure</i> — and all three conditions are named." },
              { text: "Because it was small.", why: "Size is not mentioned as a reason." },
              { text: "Because it was outside the sample.", why: "It was found during the period under review." } ] },
          { para: 3, q: "What happens in twelve months?",
            options: [
              { text: "The delivery note process will be re-checked.", correct: true,
                why: "One process, named, with a date. That is what closing a finding looks like." },
              { text: "A full audit.", why: "Only the one process is named." },
              { text: "Nothing further.", why: "The last line sets a date." } ] }
        ],
        explain: { terms: [
          { en: "population", gloss: "the whole set from which a sample is drawn", ar: "المجتمع الكلّي" },
          { en: "breach", gloss: "a failure to meet a requirement", ar: "مخالفة" }
        ] } },

      { id: "2a", section: 2, sectionTitle: "A control or a result", letter: "A",
        concepts: ["read", "evidence"],
        kind: "selectintext", task: "read-match-text", cefr: "B1", n: 4,
        prompt: "Four extracts. Click the sentence that describes a control rather than a result.",
        note: { kind: "reader", title: "A control has a who and a when",
                body: "<p>A result tells you what happened. A control tells you what is done, by whom, at which point, to stop a particular thing going wrong. Only the second can be tested.</p>" },
        items: [
          { prompt: "Which sentence describes a control?",
            text: "Our pallet counts have been correct for eleven months. We take great care over the paperwork. A second person checks the invoice against the packing list before the consignment leaves. Errors are rare.",
            answer: "A second person checks the invoice against the packing list before the consignment leaves.",
            why: "Who, what, and when. The other three describe outcomes or attitudes, and none of them could be tested next week." },
          { prompt: "Which sentence describes a control?",
            text: "Delivery notes usually come back within a month. The carrier is reliable. Al-Masri chases any note not returned within thirty days of dispatch. We have had very few problems.",
            answer: "Al-Masri chases any note not returned within thirty days of dispatch.",
            why: "A named person, a trigger and a period. <i>Usually</i> and <i>reliable</i> describe the world rather than what the company does about it." },
          { prompt: "Which sentence describes a control?",
            text: "Declarations are important. Everyone understands that. Whoever prepares a declaration signs it by name. Mistakes would be serious.",
            answer: "Whoever prepares a declaration signs it by name.",
            why: "It attaches a person to a document. The other three state the stakes, which nobody disputes and nothing follows from." },
          { prompt: "Which sentence describes a control?",
            text: "The scans have always opened when we needed them. Electronic storage is safer than paper. Once a year we open twenty files at random and check they are readable. The system is backed up.",
            answer: "Once a year we open twenty files at random and check they are readable.",
            why: "A frequency, a sample size and a test. <i>Backed up</i> is a fact about the system, not a check that it worked." }
        ] },

      { id: "2b", section: 2, sectionTitle: "A control or a result", letter: "B",
        concepts: ["comparison", "evidence"],
        kind: "chartread", task: "read-graphic", cefr: "B1", n: 6,
        prompt: "Missing delivery notes by month. Read the chart, then answer.",
        note: { kind: "reader", title: "A line with a vertical event on it",
                body: "<p>When a chart shows a change of behaviour, the useful question is what happened at the point where the line turns, and whether anything else could explain it.</p>" },
        chart: {
          kind: "line",
          title: "Delivery notes outstanding after 30 days",
          sub: "Per month, out of roughly 18 consignments. The chase procedure started in April.",
          unit: "notes",
          xlabel: "Month",
          ymax: 8,
          x: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          series: [
            { name: "outstanding at 30 days", v: [5, 6, 5, 4, 2, 1, 2, 1, 1] }
          ],
          source: "Illustrative, authored for this item",
          cols: ["Month", "Outstanding"],
          rows: [[1,5],[2,6],[3,5],[4,4],[5,2],[6,1],[7,2],[8,1],[9,1]]
        },
        items: [
          { q: "What happens to the line after April?",
            options: [
              { text: "It falls and then stays low.", correct: true,
                why: "From four to two to one, and it does not return to the earlier level." },
              { text: "It rises.", why: "The opposite direction." },
              { text: "It stays the same.", why: "It more than halves." } ] },
          { q: "What does the subtitle let you connect to the fall?",
            options: [
              { text: "The chase procedure, which started in April.", correct: true,
                why: "The chart puts the event in the subtitle precisely so the reader can make the connection." },
              { text: "A change of carrier.", why: "Not mentioned anywhere." },
              { text: "Fewer consignments.", why: "The subtitle says roughly eighteen a month throughout." } ] },
          { q: "Does the chart prove the procedure caused the fall?",
            options: [
              { text: "No — it is consistent with it, which is not the same.", correct: true,
                why: "Unit 5's lesson about scatter plots, applied to a line. Timing is evidence and not proof." },
              { text: "Yes, clearly.", why: "A single before-and-after cannot rule out anything else that changed in April." },
              { text: "No, because the fall is too small.", why: "The fall is large; the problem is attribution, not size." } ] },
          { q: "What would make the case stronger?",
            options: [
              { text: "Knowing that nothing else changed in April.", correct: true,
                why: "The one piece of information that would turn consistency into something closer to cause." },
              { text: "More months of data after April.", why: "Helpful, and it would still not rule out another April change." },
              { text: "A larger sample each month.", why: "The sample is the whole month's consignments already." } ] },
          { q: "Month seven rises from one to two. What does that mean?",
            options: [
              { text: "Very little — one note out of eighteen.", correct: true,
                why: "Reading a single month's movement on a small denominator is how people invent trends." },
              { text: "The procedure has stopped working.", why: "Months eight and nine return to one." },
              { text: "There was a second failure.", why: "There was one more outstanding note, which may be nothing." } ] },
          { q: "What does the chart not show?",
            options: [
              { text: "Whether the notes eventually arrived.", correct: true,
                why: "It measures outstanding at thirty days. A note arriving on day forty is counted here and is not lost." },
              { text: "The monthly figures.", why: "That is all it shows." },
              { text: "When the procedure began.", why: "The subtitle states it." } ] }
        ] },

      { id: "3a", section: 3, sectionTitle: "Check what the report said", letter: "A",
        concepts: ["read", "evidence"],
        kind: "tfni", task: null, cefr: "B1", n: 0,
        prompt: "Right, Wrong, or Doesn't say? Use the report in 1B.",
        carry: "1b",
        items: [
          { stem: "The auditor examined the company's accounts.", answer: "F", line: 2,
            why: "<i>It did not examine the goods, the premises or the accounts.</i>" },
          { stem: "Two hundred and fourteen consignments were checked.", answer: "F", line: 1,
            why: "Ten were checked, from a population of 214." },
          { stem: "There is no control over invoice accuracy.", answer: "F", line: 4,
            why: "<i>The control exists — a second person checks the figures</i> — but it leaves no evidence." },
          { stem: "Keeping files for ten years is a breach.", answer: "F", line: 5,
            why: "<i>This is not a breach</i>, though personal data should not be held beyond seven years." },
          { stem: "The company will be re-audited in full next year.", answer: "F", line: 7,
            why: "One process will be re-checked, not the whole company." },
          { stem: "The auditor found the company cooperative.", answer: "NI", line: null,
            why: "The report assesses documents and responses. It says nothing about conduct." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Check what the report said", letter: "B",
        concepts: ["word", "recall"],
        kind: "letterbox", task: null, cefr: "B1", n: 0,
        prompt: "Complete the words from this lesson. The first letter is given.",
        recall: true,
        items: [
          { text: "A step designed to stop a particular error is a ___ .", answer: "control", given: [0],
            why: "It has a who and a when, or it is not one." },
          { text: "Something an audit says must be fixed is a ___ .", answer: "finding", given: [0],
            why: "Stronger than an observation, weaker than a breach." },
          { text: "The part of the records actually examined is the ___ .", answer: "sample", given: [0],
            why: "Two failures in ten is a rate, not a count." },
          { text: "The work done afterwards to fix it is ___ .", answer: "remediation", given: [0],
            why: "An audit is judged by this, not by the number of findings." },
          { text: "Nobody owning the chase was the ___ cause.", answer: "root", given: [0],
            why: "As against the missing note, which was the symptom." },
          { text: "Keeping files too long is not a ___ , only an observation.", answer: "breach", given: [0],
            why: "A failure to meet a requirement. This one was not." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Check what the report said", letter: "C",
        concepts: ["recall", "approval"],
        kind: "recap", task: null, n: 0,
        prompt: "Four responses to an audit. Match each lesson to the person who needed it.",
        cases: [
          { id: "c1", label: "Yusuf", detail: "Tells the auditor that his team is very careful about the paperwork." },
          { id: "c2", label: "Amira", detail: "Hides a two-pallet discrepancy her own warehouse found and corrected." },
          { id: "c3", label: "Fuad", detail: "Reads <i>two of ten</i> and tells the owner that two consignments had problems." },
          { id: "c4", label: "Dalia", detail: "Fixes the missing delivery notes and does not ask why nobody was chasing them." }
        ],
        takeaways: [
          { text: "Care is not a control.", caseId: "c1",
            why: "A control names a person and a moment, and can be tested next week. <i>We are careful</i> cannot be." },
          { text: "A documented error is evidence that the controls work.", caseId: "c2",
            why: "The auditor said so explicitly. Hiding it would have converted a success into a finding." },
          { text: "A sample is a rate, not a count.", caseId: "c3",
            why: "Two in ten out of 214 consignments points at roughly forty, which is a different conversation." },
          { text: "Fix the root cause, not the symptom.", caseId: "c4",
            why: "The missing notes were the symptom. Nobody owning the chase was the reason, and only that can be fixed once." }
        ],
        closer: "<p>Next: taking a position in a discussion, where saying what you would do is harder than saying what you think.</p>" }

    ]
  };
})();
