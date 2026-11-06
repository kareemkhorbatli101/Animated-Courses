/* Unit 11 · How Science Works — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u11-tw", unit: "u11", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and ask plainly for what you need",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "Read the situation, then write the email. This unit's strategy is what to <i>avoid</i> — no double apology, no buried request.",
        scenarioTitle: "The situation",
        scenario: "<p>You are trying to reproduce a result published by another group in your department. Their paper does not state the calibration settings for the spectrometer, and without them your figures differ by about eight per cent. You have already checked the supplementary material.</p><p><b>Write to the author.</b> Ask for the settings, say what you have already tried, and make clear you are not alleging anything is wrong.</p>",
        to: "j.mensah@university.edu", re: "Calibration settings for the 2024 spectrometer runs",
        placeholder: "Dear Dr Mensah,…",
        minWords: 70,
        note: { kind: "help",
                body: "<i>I am writing to ask whether…</i><i>I have already checked…</i><i>I am not suggesting that…</i><i>Would it be possible to…?</i>" },
        checklist: [
          "I asked for what I wanted in the first sentence.",
          "I apologised at most once — or not at all.",
          "I said what I had already tried.",
          "I made clear I was not alleging an error."
        ],
        model: "<p>Dear Dr Mensah,</p><p>I am writing to ask whether the calibration settings used for the spectrometer runs in your 2024 paper are available.</p><p>I have been attempting to reproduce the absorbance results and my figures differ from yours by about eight per cent. I have checked the supplementary material and the departmental log, and the settings do not appear in either.</p><p>I am not suggesting there is any error in the published work — the most likely explanation is that my instrument is calibrated differently.</p><p>Would it be possible to send the settings, or to point me to where they are recorded?</p><p>Kind regards,<br>Tomás Ferreira</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe how you would check whether something you read is reliable.",
        model: "<p>I would start with what kind of claim it is. If it rests on a single study, I would treat it as provisional however well the study was done, because one study was never meant to settle anything. Then I would look for whether anyone had repeated it independently, and whether the method was registered before the data were collected. And I would notice whether negative results in that area get published at all, because if they do not, the record I am reading is a selection rather than a sample.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to defend something unpopular.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Some people say scientific writing should avoid the passive voice. Do you agree?",
        model: "<p>Not in a methods section. A method is a set of instructions for reproducing something, and who held the pipette is irrelevant to that — if it were relevant, you would not have a method, you would have an anecdote. The passive removes the agent precisely because the agent should not matter. Where I would agree is that the passive can hide agency when a reader needs it. The test I would use is whether naming the person would change what a reader should do next. In a method it would not. In an apology it would.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        kind: "quiz", task: null, n: 0,
        prompt: "Interleaved across the unit.",
        items: [
          { q: "The samples ____ to sixty degrees.", from: "Lesson 3",
            options: [
              { text: "are heated", correct: true, why: "Present passive: <i>be</i> + past participle." },
              { text: "are heating", why: "Active continuous — the samples would be doing the heating." },
              { text: "heats", why: "Wrong number and wrong voice." }
            ] },
          { q: "No group ____ reproduce the finding.", from: "Lesson 3",
            options: [
              { text: "has been able to", correct: true, why: "<i>Can</i> has no perfect form, so <i>be able to</i> is required." },
              { text: "has could", why: "Not an English form." },
              { text: "has can", why: "Not an English form." }
            ] },
          { q: "Which opening is best in a formal request?", from: "Lesson 2",
            options: [
              { text: "I am writing to ask whether the calibration records are available.", correct: true,
                why: "Purpose and object in one clause." },
              { text: "Sorry to bother you, and sorry again, but I had a quick question.",
                why: "Two apologies and no content." },
              { text: "I am extremely frustrated that nobody has replied.",
                why: "Opens with feeling, which puts the reader on the defensive." }
            ] },
          { q: "The article says a failed replication does not prove the original wrong because:", from: "Lesson 5",
            options: [
              { text: "the repetition may itself have been flawed.", correct: true, why: "One of the two reasons it gives." },
              { text: "the original was peer reviewed.", why: "Peer review is not offered as a defence." },
              { text: "replication is impossible.", why: "The projects did it." }
            ] },
          { q: "Professor Haddad's test for the passive is whether:", from: "On Campus",
            options: [
              { text: "naming the agent would change what a reader should do next.", correct: true,
                why: "Her exact test, applied to a method and to an apology." },
              { text: "the sentence is shorter.", why: "Length is not her criterion." },
              { text: "the field prefers it.", why: "Convention is not her criterion either." }
            ] },
          { q: "In the bubble chart, Medicine's circle looks more than twice Physics' because:", from: "Lesson 5",
            options: [
              { text: "area exaggerates the difference the eye is reading.", correct: true,
                why: "106 against 54 is about double, but the circle's width grows far less than its area." },
              { text: "the chart is not drawn to scale.", why: "It is — that is the problem." },
              { text: "Medicine received four times as much.", why: "The printed figures say otherwise." }
            ] }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences what the replication projects did and did not establish.</p>" } }
    ]
  };
})();
