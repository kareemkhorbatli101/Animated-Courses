/* Unit 10 · Records and Responsibility — LESSON 4 · MEETINGS & CALLS */
(function () {
  window.PAGE = {
    id: "u10-l4", unit: "u10", block: "l4", up: "../", tab: "AT WORK",
    objective: "Answer an auditor on the telephone, and put the stress where the meaning is",
    next: "l5.html",
    scenes: [

      { id: "1a", section: 1, sectionTitle: "Answering an auditor", letter: "A",
        concepts: ["listen", "evidence"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six questions from an auditor. Choose the answer that is accurate and offers the evidence.",
        note: { kind: "life", title: "An auditor is not an opponent",
                body: "<p>They are checking whether you can show what you did. The useful answer is the one that points at a document, and <em>I do not know, I will find out</em> is a perfectly good answer.</p>" },
        items: [
          { who: "ziad", say: "How long do you keep shipping records?",
            options: [
              { text: "Seven years from the consignment date. It is in our procedure.", correct: true,
                why: "The figure, the start point, and where it is written down." },
              { text: "A long time.", why: "The question is about a period, and the period is a number." },
              { text: "As long as we need them.", why: "Unenforceable, and it reads as though nobody has decided." } ] },
          { who: "ziad", say: "Who signs a customs declaration here?",
            options: [
              { text: "Whoever prepared it, by name.", correct: true,
                why: "<i>By name</i> is the part that answers the real question, which is about accountability." },
              { text: "Someone in export.", why: "A department cannot be accountable for a signature." },
              { text: "It depends.", why: "If it depends, the auditor's next question is what it depends on." } ] },
          { who: "ziad", say: "This invoice was reissued. Who authorised that?",
            options: [
              { text: "It does not say, and from this month it will.", correct: true,
                why: "Admits the gap and names the change. Pretending it says something it does not is the one unrecoverable answer." },
              { text: "Nour would have.", why: "A guess, offered as a fact, about a document in front of both of you." },
              { text: "It is a routine reissue.", why: "Describes the category instead of answering the question." } ] },
          { who: "ziad", say: "May I see the original invoice as well?",
            options: [
              { text: "Yes — both are in the file, which is why we reissue rather than amend.", correct: true,
                why: "Answers and explains the practice in one sentence, which is exactly what an auditor wants to record." },
              { text: "It was replaced.", why: "Suggests it was destroyed, which would be a finding." },
              { text: "I would have to look.", why: "True perhaps, and the file is the thing under discussion." } ] },
          { who: "ziad", say: "Two delivery notes are missing. Why?",
            options: [
              { text: "I do not know. I can tell you when they were chased.", correct: true,
                why: "Does not invent a reason, and offers the one thing that is actually in the record." },
              { text: "The carrier never returns them.", why: "Possibly true and offered as an excuse without evidence." },
              { text: "That is unusual.", why: "Two out of ten is the finding, so it is not." } ] },
          { who: "ziad", say: "Does anyone check that the invoice matches the packing list?",
            options: [
              { text: "Yes, a second person, before the consignment leaves.", correct: true,
                why: "Names the control and when it happens. A control with no point in time is not a control." },
              { text: "We are very careful about that.", why: "Care is not a control, and it cannot be tested." },
              { text: "It is always correct.", why: "The audit has just found a case where it was not." } ] }
        ] },

      { id: "1b", section: 1, sectionTitle: "Answering an auditor", letter: "B",
        concepts: ["listen", "people"],
        kind: "respond", task: "listen-extracts", cefr: "B1", n: 6,
        prompt: "Six more, this time taking a position in a discussion.",
        items: [
          { who: "nour", say: "Should we keep paper copies as well as electronic?",
            options: [
              { text: "I think so, for declarations only — they are the ones that get asked for.", correct: true,
                why: "A position, a scope, and a reason. All three in one sentence." },
              { text: "Whatever everyone else thinks.", why: "Declines the question that was asked." },
              { text: "Paper is old-fashioned.", why: "A view about paper rather than about the records." } ] },
          { who: "lina", say: "Seven years of paper is a lot of cupboards.",
            options: [
              { text: "It is. That is why I would limit it to declarations.", correct: true,
                why: "Concedes the objection and shows it is already answered by the scope." },
              { text: "Space is not the issue.", why: "It is an issue, and dismissing it loses the person raising it." },
              { text: "We will find room.", why: "Answers the practical point and not the principle." } ] },
          { who: "samer", say: "I disagree — scanning everything is safer.",
            options: [
              { text: "It may be. What happens if the file is corrupted?", correct: true,
                why: "Accepts the possibility and tests it with the failure case, which is Unit 7's technique." },
              { text: "No it is not.", why: "A flat contradiction, which produces a defence rather than a discussion." },
              { text: "You may be right.", why: "Concedes without testing, and the question remains unanswered." } ] },
          { who: "samer", say: "Then we keep both, which costs twice as much.",
            options: [
              { text: "For declarations only, so it is a small twice.", correct: true,
                why: "Keeps the scope in front of the room. Most disagreements in this scene are about scope, not principle." },
              { text: "Cost is not important.", why: "It is, and saying otherwise ends your credibility on the next question." },
              { text: "Fine, electronic only.", why: "Abandons a position that had not been defeated." } ] },
          { who: "nour", say: "Lina, you have not said what you would do.",
            options: [
              { text: "Electronic for everything, paper for declarations, and a yearly check that the scans open.", correct: true,
                why: "A full position, including the control that makes the electronic half trustworthy." },
              { text: "I can see both sides.", why: "She was asked for a position, not a summary." },
              { text: "Whatever is cheapest.", why: "A criterion rather than a decision, and a weak one for records." } ] },
          { who: "nour", say: "So are we agreed?",
            options: [
              { text: "Agreed. Who owns the yearly check?", correct: true,
                why: "Confirms and immediately asks the question that turns a decision into an action point." },
              { text: "I think so.", why: "<i>I think so</i> at the close of an item is how things get minuted as agreed and then not done." },
              { text: "Let us see how it goes.", why: "There is nothing to see until somebody does something." } ] }
        ] },

      { id: "2a", section: 2, sectionTitle: "Take notes from an audit call", letter: "A",
        concepts: ["listen", "write"],
        kind: "notes", task: "listen-note-conversation", cefr: "B1", n: 8,
        prompt: "The auditor calls to close the sample check. Fill in the form as you listen.",
        audio: { track: "u10-audit-call", label: "Call: the auditor and Nour",
          lines: [
            { who: "ziad", text: "I am closing the sample check. Two findings, both of which you have accepted, and one observation." },
            { who: "nour", text: "Go ahead." },
            { who: "ziad", text: "Finding one: signed delivery notes missing in two of ten consignments. Your response is a thirty-day chase with a named owner, and a sixty-day record of the gap. I have accepted that as adequate." },
            { who: "nour", text: "Al-Masri owns it." },
            { who: "ziad", text: "Finding two: reissued invoices do not name who authorised them. From this month they will. Also accepted." },
            { who: "nour", text: "And the observation?" },
            { who: "ziad", text: "Not a finding, so nothing is required. Your retention period is seven years and you are keeping some files for ten. That is not wrong, but personal data in them should not be kept beyond seven." },
            { who: "nour", text: "That had not occurred to me. We kept them because nobody told us to stop." },
            { who: "ziad", text: "That is the usual reason. I would separate the personal data rather than destroy the file." },
            { who: "nour", text: "Can I ask what you would have made of the two-pallet discrepancy if we had not found it ourselves?" },
            { who: "ziad", text: "A finding, probably. What changed it was that the correction was documented and the original invoice was still there. Finding an error is not a failure. Being unable to show how it was corrected is." },
            { who: "nour", text: "Then I will put that sentence in our handbook." },
            { who: "ziad", text: "You may. The report goes to you on Thursday and to the licensing office on the following Monday." } ] },
        title: "Audit close — notes",
        lines: [
          "Findings: ___ , both accepted",
          "Finding one: delivery notes missing in ___ of ten",
          "Our response: ___ -day chase, sixty-day record of the gap",
          "Owner: ___ ",
          "Finding two: reissued invoices did not name the ___ ",
          "Observation: personal data should not be kept beyond ___ years",
          "Report to us on ___ ",
          "To the licensing office the following ___ "
        ],
        gaps: [
          { answer: "two", why: "He states the shape of the call before the content, as every good report does." },
          { answer: "two", why: "Two of ten, which is the sample proportion rather than a count of all consignments." },
          { answer: "thirty", why: "The chase period, with the sixty-day fallback already printed on the form." },
          { answer: "Al-Masri", why: "Nour supplies the name unprompted, which is the whole point of the response." },
          { answer: "authoriser", why: "Who authorised the reissue — the gap the sign-off rule now closes." },
          { answer: "seven", why: "Not a finding, and worth more than either finding to a company that had not thought about it." },
          { answer: "Thursday", why: "Dates for the two recipients, given separately and both worth writing down." },
          { answer: "Monday", why: "The second date, and the one that matters to anyone outside the company." }
        ],
        note: { kind: "life", title: "The sentence worth keeping",
                body: "<p><em>Finding an error is not a failure. Being unable to show how it was corrected is.</em> That is the whole of this unit in two sentences, and it came from the auditor rather than from the company.</p>" },
        explain: { terms: [
          { en: "an observation", gloss: "something noted that is not a formal finding", ar: "ملاحظة" },
          { en: "adequate", gloss: "good enough for the purpose", ar: "كافٍ" }
        ] } },

      { id: "2b", section: 2, sectionTitle: "Hear the difference", letter: "B",
        concepts: ["sound", "speak"],
        kind: "minimal-pairs", task: "pronounce-pair", n: 4,
        focus: "<p>English puts one strong stress in each short phrase, and moving it changes what the sentence is claiming. The words do not change at all.</p><p><em><b>I</b> did not sign it</em> — somebody else did.<br><em>I did not <b>sign</b> it</em> — I did something else with it.<br><em>I did not sign <b>it</b></em> — I signed something else.</p><p>Arabic marks this contrast with word order; English marks it with loudness and pitch, and a flat delivery loses it entirely.</p>",
        items: [
          { say: "I did not SIGN it", options: [
            { text: "I did not SIGN it", correct: true, why: "Stress on the verb: the signing is what did not happen. This is the neutral reading of the sentence." },
            { text: "I did not sign IT", why: "Stress on the object: you signed something, just not this. A different and much narrower claim." } ] },
          { say: "we keep them for SEVEN years", options: [
            { text: "we keep them for SEVEN years", correct: true, why: "Stress on the number, because the number is the information." },
            { text: "WE keep them for seven years", why: "Stress on the subject: somebody else does not. True perhaps, and not what was asked." } ] },
          { say: "the ORIGINAL is still in the file", options: [
            { text: "the ORIGINAL is still in the file", correct: true, why: "Stress on what makes it worth saying: the original, not just the reissue." },
            { text: "the original is still in the FILE", why: "Stress on location, which nobody doubted." } ] },
          { say: "that is not a FINDING", options: [
            { text: "that is not a FINDING", correct: true, why: "Stress on the category word, which is the whole point: it is an observation instead." },
            { text: "THAT is not a finding", why: "Implies something else is, which may be true and is a different sentence." } ] }
        ] },

      { id: "2c", section: 2, sectionTitle: "Hear the difference", letter: "C",
        concepts: ["speak", "sound"],
        kind: "repeat", task: "pronounce-pair", cefr: "B1", n: 4,
        prompt: "Say each line with the stress on the capitalised word, then try moving it and hear what changes.",
        speaker: "nour",
        lines: [
          "We keep shipping records for SEVEN years.",
          "The ORIGINAL invoice is still in the file.",
          "That is an observation, not a FINDING.",
          "Whoever PREPARED it signs it, by name."
        ] },

      { id: "3a", section: 3, sectionTitle: "Say it yourself", letter: "A",
        concepts: ["listen", "write"],
        kind: "dictation", task: null, n: 0,
        prompt: "Listen and type what you hear. All from the call in 2A.",
        items: [
          { answer: "Signed delivery notes were missing in two of ten.",
            why: "The proportion, not a raw count. An audit samples, so the denominator is part of the finding." },
          { answer: "Reissued invoices do not name who authorised them.",
            why: "A gerund-free sentence that this unit's grammar could easily have complicated." },
          { answer: "Personal data should not be kept beyond seven years.",
            why: "<i>Beyond</i> rather than <i>after</i>, which is the register of a rule." },
          { answer: "Finding an error is not a failure.",
            why: "A gerund subject, and the sentence Nour says she will put in the handbook." },
          { answer: "Being unable to show how it was corrected is.",
            why: "A second gerund subject, with the verb left to the end. Both halves of the pair in two short sentences." }
        ],
        closer: "<p>The last two sentences are this unit's grammar doing real work. Both subjects are activities rather than people, which is what lets a rule describe conduct without accusing anybody.</p>" }

    ]
  };
})();
