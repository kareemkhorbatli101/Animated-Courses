/* Unit 11 · How Science Works — TEAMWORK & LANGUAGE REVIEW */
(function () {
  window.PAGE = {
    id: "u11-tw", unit: "u11", block: "tw", up: "../", tab: "NAVIGATIONAL",
    objective: "Review the unit, and ask plainly for what you need",
    next: "index.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Problem solving", letter: "A",
        concepts: ["write"],
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

            { id: "a2", section: 1, sectionTitle: "Problem solving", letter: "B",
        concepts: ["write"],
        kind: "write-email", task: "write-an-email", cefr: "C1", n: 1,
        prompt: "A second situation. This one asks you to give credit back after it has already gone to you.",
        scenarioTitle: "The situation",
        scenario: "<p>Your group's poster won the departmental prize. The abstract names you as the person who identified the systematic offset in the readings. It was Priya who noticed it, three weeks ago, in a meeting you both attended. The abstract has already been circulated and the prize announced.</p><p><b>Write to the module leader, copying your group.</b> Correct the attribution, say what Priya actually did, and ask for the record to be amended.</p>",
        to: "a.haddad@university.edu", re: "Poster abstract — attribution of the offset finding",
        placeholder: "Dear Professor Haddad,…",
        minWords: 70,
        note: { kind: "help",
                body: "<p>Two things make this message work. Copy the group, so the correction happens where the credit was lost rather than in private. And be specific about what she did, because <i>Priya helped</i> is the kind of sentence that gets remembered as politeness.</p><i>I need to correct something in…</i><i>It was Priya who…</i><i>Could the abstract be amended to…?</i>" },
        checklist: [
          "My first sentence says I am correcting something, not thanking anyone.",
          "I named Priya and said specifically what she did.",
          "I copied the group rather than writing privately.",
          "I asked for a specific amendment.",
          "I used a passive at least once, with the agent kept because it matters."
        ],
        model: "<p>Dear Professor Haddad,</p>" +
               "<p>I need to correct an attribution in our poster abstract, which I have only noticed now that it has been circulated.</p>" +
               "<p>The abstract says that I identified the systematic offset in the readings. I did not. It was Priya who pointed out, in the meeting of the eleventh, that our figures were low by the same amount in every run rather than scattered, and that a constant offset meant the calibration rather than the instrument. I wrote it up; the finding was hers.</p>" +
               "<p>Could the abstract be amended to name her, and the correction sent to the same list the announcement went to? I have copied the group so that this is on the record where the original claim was made.</p>" +
               "<p>Kind regards,<br>Mei Lin</p>" },

      { id: "b", section: 2, sectionTitle: "Take an interview", letter: "A",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "One question, one pass, forty-five seconds.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe how you would check whether something you read is reliable.",
        model: "<p>I would start with what kind of claim it is. If it rests on a single study, I would treat it as provisional however well the study was done, because one study was never meant to settle anything. Then I would look for whether anyone had repeated it independently, and whether the method was registered before the data were collected. And I would notice whether negative results in that area get published at all, because if they do not, the record I am reading is a selection rather than a sample.</p>" },

      { id: "c", section: 2, sectionTitle: "Take an interview", letter: "B",
        concepts: ["speak"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A second question, asking you to defend something unpopular.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Some people say scientific writing should avoid the passive voice. Do you agree?",
        model: "<p>Not in a methods section. A method is a set of instructions for reproducing something, and who held the pipette is irrelevant to that — if it were relevant, you would not have a method, you would have an anecdote. The passive removes the agent precisely because the agent should not matter. Where I would agree is that the passive can hide agency when a reader needs it. The test I would use is whether naming the person would change what a reader should do next. In a method it would not. In an apology it would.</p>" },

            { id: "c2", section: 2, sectionTitle: "Take an interview", letter: "C",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A third question, about a disagreement with evidence in it.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "Describe a time you disagreed with a published claim. What did you do about it?",
        model: "<p>We were trying to reproduce a result from another group in the department and came out eight per cent low on every single run. The temptation was to assume they had got it wrong, and the thing that stopped me was that the discrepancy was the same every time: random error scatters, and a constant offset points at the procedure. Their method did not give the calibration settings and the supplementary material did not either. So I wrote and asked for them, framed as a question about the method rather than as an accusation, and it turned out to be exactly that.</p>" },

      { id: "c3", section: 2, sectionTitle: "Take an interview", letter: "D",
        concepts: ["speak", "evidence"],
        kind: "interview", task: "take-an-interview", cefr: "C1", n: 1,
        prompt: "A fourth question, asking you to judge a reform.",
        speaker: "dan", speakerNote: "interviewer", seconds: 45,
        question: "If you could change one thing about how research is published, what would it be, and what would it cost?",
        model: "<p>I would have journals accept papers on the method alone, before the results exist. The reason is that every other reform depends on people behaving well, and this one does not: if acceptance is decided before anyone knows what was found, the result stops being the thing the work is aimed at. The cost is real and I would not pretend otherwise. Editors judging a method blind will be cautious, and the literature would fill up with careful studies of safe questions. I still think that is a better failure than the one we have.</p>" },

      { id: "d", section: 3, sectionTitle: "Language review", letter: "A",
        concepts: ["recall", "evidence"],
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
            ] },
          { q: "Which pair of words sits at opposite ends of the same sentence?", from: "Lesson 4",
            options: [
              { text: "imply and infer", correct: true, why: "The writer implies; the reader infers. Nobody can do both to the same sentence." },
              { text: "accept and except", why: "A verb and a preposition, unrelated in meaning." },
              { text: "elicit and illicit", why: "A verb and an adjective, also unrelated." }
            ] },
          { q: "No group ____ reproduce the original finding.", from: "Lesson 3",
            options: [
              { text: "has been able to", correct: true, why: "<i>Can</i> has no perfect form, which is why <i>be able to</i> exists." },
              { text: "has could", why: "Not a possible form in English." },
              { text: "can have", why: "Means something different: a speculation about the past." }
            ] },
          { q: "A result described as <i>significant</i> in a paper means:", from: "Lesson 1",
            options: [
              { text: "unlikely to have arisen by chance alone.", correct: true,
                why: "And it says nothing whatever about how large or how important the effect is." },
              { text: "large and important.", why: "The everyday sense, which the technical one quietly contradicts." },
              { text: "confirmed by replication.", why: "A different matter entirely, and the subject of Lesson 5." }
            ] },
          { q: "According to Lesson 5's second article, a successful replication:", from: "Lesson 5",
            options: [
              { text: "adds nothing to the replicator's record.", correct: true,
                why: "And the failed one is worse: it adds nothing and makes an enemy." },
              { text: "is rewarded with a publication.", why: "Journals have historically declined both kinds." },
              { text: "counts towards promotion.", why: "Promotion panels count original findings." }
            ] },
          { q: "Professor Haddad's test for whether the passive is being abused is:", from: "On Campus",
            options: [
              { text: "would naming the agent change what a reader should do next?", correct: true,
                why: "In a methods section it would not; in an apology it would." },
              { text: "is the sentence shorter in the active?", why: "Length is not her criterion." },
              { text: "does the sentence sound formal?", why: "Formality is what makes the passive attractive and tells you nothing about whether it is honest." }
            ] },
          { q: "The analysis was carried out ____ an independent team.", from: "Lesson 2",
            options: [
              { text: "by", correct: true, why: "The agent of a passive takes <i>by</i>." },
              { text: "from", why: "Would make the team a source rather than a doer." },
              { text: "with", why: "Would make the team an instrument, which is a different and slightly insulting claim." }
            ] }
        ] },

      { id: "e", section: 3, sectionTitle: "Language review", letter: "B",
        concepts: ["comparison", "measurement"],
        kind: "sort", task: null, n: 0,
        prompt: "Eight passive sentences. Sort them by whether dropping the agent is honest or evasive.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>The test from On Campus: would naming the doer change what a competent reader should do next? If not, the passive is doing its job. If so, it is doing somebody a favour.</p>" },
        bins: [
          { id: "honest", label: "The agent is genuinely irrelevant", hint: "nothing changes if you name them" },
          { id: "evasive", label: "The agent is being hidden",         hint: "the reader needs to know" }
        ],
        items: [
          { text: "The samples were heated to sixty degrees", bin: "honest",
            why: "if the result depends on who held the pipette, you have not described a method." },
          { text: "Absorbance was measured every minute", bin: "honest",
            why: "a routine reading; naming the reader would add a word and no information." },
          { text: "Each instrument is calibrated twice a year", bin: "honest",
            why: "a standing arrangement. The technician's name changes nothing for anyone following it." },
          { text: "The protocol was registered before data collection", bin: "honest",
            why: "the timing is the claim; who filed the form is not." },
          { text: "Mistakes were made in the handling of the samples", bin: "evasive",
            why: "the standard example. A reader needs to know whose mistakes, and the sentence is built to prevent that." },
          { text: "The decision was taken not to publish the null result", bin: "evasive",
            why: "somebody decided, and whether it was the authors or the journal changes what should happen next." },
          { text: "It was felt that further work was not warranted", bin: "evasive",
            why: "<i>It was felt</i> has no agent at all, and a judgement with no judge cannot be questioned." },
          { text: "The figures were revised after the first submission", bin: "evasive",
            why: "the hardest card: it sounds procedural. But revised by whom, and on whose instruction, is exactly what a reader of a correction needs." }
        ],
        closer: { kind: "test",
          body: "<p>Close the page. Say in two sentences what the replication projects did and did not establish.</p>" } }
    ]
  };
})();
