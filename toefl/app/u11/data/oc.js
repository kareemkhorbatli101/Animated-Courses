/* Unit 11 · How Science Works — ON CAMPUS
   Function: acknowledge a classmate's contribution. */
(function () {

  /* Two exercises use this talk: the comprehension items, and the outline
     filled in while it plays. */
  var TALK1 = { track: "11-12", label: "In defence of the passive", lines: [{ who: "haddad", text:
          "I am going to defend a sentence that students are often told to avoid, which is the passive. You will have been advised to write the researchers heated the sample rather than the sample was heated, on the grounds that the active is clearer. In most writing that advice is sound. In a methods section it is wrong, and for a reason worth understanding. A methods section is a set of instructions for reproducing what was done. Who did it is, for that purpose, irrelevant. If the result depends on which person held the pipette, you have not described a method; you have described an anecdote. The passive removes the agent precisely because the agent should not matter, and the sentence is honest about that. Now, the passive is also used to hide agency when agency is exactly what a reader needs, and that is a real abuse. Mistakes were made is the famous example. The test is simple enough: ask whether naming the agent would change what a competent reader should do next. In a methods section it would not. In an apology it would." }] };

  window.PAGE = {
    id: "u11-oc", unit: "u11", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Acknowledge a classmate's contribution",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A notice about the methods workshop. It plays once.",
        speaker: "dan", speakerNote: "course administrator",
        audio: { track: "11-11", label: "About the workshop", lines: [{ who: "dan", text:
          "About the methods workshop. It has been moved to the larger seminar room because twice as many people registered as we expected. The time is unchanged. Bring a dataset of your own if you have one, since the second half is a hands-on session and working on real data is more useful than the example." }] },
        items: [
          { q: "Why has the room changed?",
            options: [
              { text: "Twice as many people registered as expected.", correct: true, why: "Given as the reason, with <i>because</i>." },
              { text: "The original room was double-booked.", why: "No clash is mentioned." },
              { text: "The time has changed.", why: "The time is explicitly unchanged." }
            ] },
          { q: "What should people bring?",
            options: [
              { text: "A dataset of their own, if they have one.", correct: true, why: "Conditional — <i>if you have one</i> — so it is not compulsory." },
              { text: "Nothing.", why: "A request is made." },
              { text: "A laptop and the example data.", why: "Neither is mentioned." }
            ] },
          { q: "Why is a dataset of your own preferred?",
            options: [
              { text: "The second half is hands-on and real data is more useful.", correct: true,
                why: "<i>since</i> introduces the reason, and the comparison is explicit." },
              { text: "The example data has been lost.", why: "The example still exists." },
              { text: "There is not enough time for the example.", why: "Time is not the reason given." }
            ] }
        ] },

            { id: "a2", section: 1, sectionTitle: "Listen to an announcement", letter: "B",
        concepts: ["listen"],
        kind: "listen", task: "listen-announcement", cefr: "B1", n: 3,
        prompt: "A second notice, read out in the laboratory. It plays once.",
        speaker: "dan", speakerNote: "technician",
        audio: { track: "11-13", label: "About the spectrometer", lines: [{ who: "dan", text:
          "Three things about the spectrometer. Training has to be done before you book, not before you use it, and people get caught by that every term because the form will let you book without it. Second, the calibration records are kept by me, not in the shared drive. Anyone can have a copy by asking, and you do not need a reason. Third, if your readings are consistently off rather than scattered, do not adjust anything. Come and tell me: a steady offset is nearly always the settings and almost never the machine." }] },
        items: [
          { q: "Why do people get caught by the training rule?",
            options: [
              { text: "The booking form does not stop an untrained user.", correct: true,
                why: "The rule and the system disagree, which is exactly when a rule needs announcing." },
              { text: "Training takes longer than expected.", why: "Its length is not mentioned." },
              { text: "The rule changed this term.", why: "He says people are caught every term, implying it has not." }
            ] },
          { q: "How can you get the calibration records?",
            options: [
              { text: "Ask him; no reason is needed.", correct: true,
                why: "He says both halves — anyone may ask, and he will not ask why." },
              { text: "Download them from the shared drive.", why: "He says explicitly that they are not there." },
              { text: "Request them through your supervisor.", why: "No intermediary is mentioned." }
            ] },
          { q: "What should you do about a consistent offset?",
            options: [
              { text: "Tell him, and change nothing.", correct: true,
                why: "And he gives the reason: a steady offset points at the settings rather than the instrument." },
              { text: "Recalibrate the instrument.", why: "<i>Do not adjust anything</i> is the instruction." },
              { text: "Repeat the run until it scatters.", why: "Scatter would be a different problem entirely." }
            ] }
        ] },

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        concepts: ["listen"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad defending a sentence you have been told to avoid. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: TALK1,
        transcript: "<p>Ask whether naming the agent would change what a competent reader should do next. In a methods section it would not. In an apology it would.</p>",
        items: [
          { q: "What is the speaker's main claim?",
            options: [
              { text: "The passive is right in a methods section because the agent genuinely does not matter.", correct: true,
                why: "She concedes the general advice and then carves out the exception, with a reason." },
              { text: "The passive should always be preferred.", why: "She calls the usual advice sound in most writing." },
              { text: "The active voice is never appropriate.", why: "She never says that." }
            ] },
          { q: "What does she say a method is?",
            options: [
              { text: "A set of instructions for reproducing what was done.", correct: true,
                why: "Her definition, and the whole argument rests on it." },
              { text: "A record of who did what.", why: "That is what she says it is not." },
              { text: "An account of why the study was undertaken.", why: "Motivation is not discussed." }
            ] },
          { q: "What does she call a real abuse of the passive?",
            options: [
              { text: "Hiding agency when the reader needs it.", correct: true,
                why: "<i>Mistakes were made</i> is the example she gives." },
              { text: "Using it in a methods section.", why: "That is the use she is defending." },
              { text: "Using it in the past tense.", why: "Tense is not the issue." }
            ] },
          { q: "What is her test?",
            options: [
              { text: "Whether naming the agent would change what a reader should do next.", correct: true,
                why: "Stated as a test and then applied to both cases — the thing to write on the pad." },
              { text: "Whether the sentence is shorter.", why: "Length is not mentioned." },
              { text: "Whether the field prefers it.", why: "Convention is not her criterion." }
            ] }
        ] },

            { id: "b2", section: 2, sectionTitle: "Listen to an academic talk", letter: "B",
        concepts: ["listen", "inference", "evidence"],
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "The same lecturer, on why so little gets checked.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "11-14", label: "Nobody is paid to check", lines: [{ who: "haddad", text:
          "You have all read that a large proportion of published findings do not replicate, and the usual reaction is to conclude that researchers are careless. I want to persuade you that this is the least interesting explanation available, and almost certainly wrong. Ask instead who is paid to check. Appointments are made on original findings. Grants are awarded for new questions. Promotion panels count papers, and a replication is either not a paper at all, because the journal declined it, or it is a paper that adds nothing to your record and makes an enemy of somebody in your field. Now, none of that requires anybody to behave badly. A researcher who spends a year carefully checking somebody else's claim has spent a year that counts for nothing, whichever way the check comes out. That is not carelessness. That is a system doing exactly what it is arranged to do. And it tells you why the remedies being adopted are procedural rather than moral: registering analyses in advance, requiring materials to be shared, accepting papers on the method before the results exist. Each of those takes a decision away from the moment where the incentive is strongest. Exhortation has been tried for about a century, and the record is not encouraging." }] },
        transcript: "<p>Nobody is paid to check. A year spent replicating counts for nothing whichever way it comes out — which is a system working as arranged, not carelessness, and why the remedies are procedural.</p>",
        items: [
          { q: "What is the speaker's main point?",
            options: [
              { text: "The shortage of replication follows from incentives rather than from carelessness.", correct: true,
                why: "She names carelessness as the least interesting explanation and spends the talk on the alternative." },
              { text: "Researchers are less careful than they used to be.", why: "She rejects carelessness as the explanation altogether." },
              { text: "Journals should publish everything submitted.", why: "No such proposal appears." }
            ] },
          { q: "What does she say happens to a researcher who spends a year replicating?",
            options: [
              { text: "The year counts for nothing, whichever way it comes out.", correct: true,
                why: "<i>Whichever way</i> is the crucial part: even a success is worthless to them." },
              { text: "They gain a publication but no citations.", why: "She says the journal may well decline it entirely." },
              { text: "They are penalised by their department.", why: "She describes an absence of reward, not a punishment." }
            ] },
          { q: "Why does she emphasise that nobody has to behave badly?",
            options: [
              { text: "To show the problem is structural rather than moral.", correct: true,
                why: "The same move Unit 7 made about incentives, and the reason her remedies take the shape they do." },
              { text: "To defend her own field.", why: "She makes no distinction between fields." },
              { text: "To argue that no remedy is needed.", why: "She lists three." }
            ] },
          { q: "Why are the remedies procedural?",
            options: [
              { text: "Each takes a decision away from the moment the incentive is strongest.", correct: true,
                why: "And she adds the empirical point: exhortation has been tried for a century." },
              { text: "Procedures are easier to enforce.", why: "Enforcement is not her argument." },
              { text: "Researchers resist moral arguments.", why: "She says the arguments fail, not that they are resented." }
            ] }
        ] },

      { id: "b3", section: 2, sectionTitle: "Listen to an academic talk", letter: "C",
        concepts: ["listen", "claim"],
        kind: "notes", task: null, n: 0,
        prompt: "Play the first talk again and complete the outline while it runs.",
        audio: TALK1,
        title: "Lecture — in defence of the passive",
        note: { kind: "reader",
                body: "<p>She defends a thing you were told to avoid, gives the reason, concedes the real abuse, and then supplies a test. The test is the line to keep.</p>" },
        lines: [
          "Claim: in a methods section the usual advice against the ___ is wrong",
          "- Reason: a method is instructions for reproducing it, so who did it is ___",
          "- The real abuse: hiding ___ where the reader needs it",
          "- The test: would naming the agent change what a reader should do ___ ?"
        ],
        gaps: [
          { answer: "passive", why: "the construction the whole talk is defending." },
          { answer: "irrelevant", why: "her word, and the reason the passive is honest there rather than evasive." },
          { answer: "agency", why: "<i>mistakes were made</i> is the example she reaches for." },
          { answer: "next", why: "the test in four words, and the only part of the talk worth memorising." }
        ] },

      { id: "c", section: 3, sectionTitle: "Acknowledge a contribution", letter: "A",
        concepts: ["read", "sample"],
        kind: "read-only", task: null, n: 0,
        prompt: "Read the chart. Credit is cheap to give and expensive to withhold.",
        note: { kind: "speak",
                body: "<i>Building on what Mei said…</i><i>That was Priya's point originally.</i><i>Credit where it's due — Tomás spotted it.</i>" },
        text: { every: 1, mastColor: "blue", masthead: "WHEN YOU WANT TO ACKNOWLEDGE SOMEONE",
          blocks: [
            { h: "Do this", lines: [
              "Name the person, not “someone”.",
              "Say what they contributed, specifically.",
              "Do it in the room where the credit was lost."
            ] },
            { h: "Say this", lines: [
              "Building on what Mei said last week about the denominator…",
              "That was Priya's point originally — I'm just repeating it.",
              "Credit where it's due: Tomás spotted the drift, not me."
            ] }
          ] },
        after: "<p>The third instruction is the one that matters. Credit given privately corrects your conscience; credit given publicly corrects the record.</p>" },

      { id: "c2", section: 3, sectionTitle: "Acknowledge a contribution", letter: "B",
        concepts: ["measurement"],
        kind: "table", task: null, n: 0,
        prompt: "Complete the table from the chart in 3A. The right-hand column says what each move actually achieves.",
        caption: "Four moves, and what each one achieves",
        head: ["Move", "What you say", "What it achieves"],
        rows: [
          ["Name the person",   "Building on what ___ said last week…", "the credit attaches to somebody, not to <i>someone</i>"],
          ["Name the contribution", "…about the ___ ", "it cannot later be remembered as a general remark"],
          ["Correct the record", "That was Priya's point ___ ", "the version that circulates afterwards is the right one"],
          ["Do it publicly",    "Credit where it's due: Tomás ___ the drift, not me", "the record is corrected where it was ___ "]
        ],
        gaps: [
          { answer: "Mei", why: "a name rather than <i>somebody</i>, which is the whole difference between credit and politeness." },
          { answer: "denominator", why: "naming the specific contribution is what makes it unforgettable." },
          { answer: "originally", why: "one word, and it reassigns priority without any ceremony." },
          { answer: "spotted", why: "a specific verb for a specific act." },
          { answer: "lost", why: "credit given privately corrects your conscience; credit given in the room corrects the record." }
        ] },

      { id: "c3", section: 3, sectionTitle: "Acknowledge a contribution", letter: "C",
        concepts: ["read"],
        kind: "read-only", task: null, n: 0,
        prompt: "One sentence to leave with.",
        text: { blocks: [{ lines: [
          "Credit given in private settles your conscience. Only credit given in the room where it was lost settles the record."
        ],
        closer: { kind: "life",
          body: "<p>Next time you repeat someone else's idea in a group, name them as you do it. Note what it costs you.</p>" } }] } }
    ]
  };
})();
