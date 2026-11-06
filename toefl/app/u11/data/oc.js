/* Unit 11 · How Science Works — ON CAMPUS
   Function: acknowledge a classmate's contribution. */
(function () {
  window.PAGE = {
    id: "u11-oc", unit: "u11", block: "oc", up: "../", tab: "NAVIGATIONAL",
    objective: "Acknowledge a classmate's contribution",
    next: "tw.html",
    scenes: [
      { id: "a", section: 1, sectionTitle: "Listen to an announcement", letter: "A",
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

      { id: "b", section: 2, sectionTitle: "Listen to an academic talk", letter: "A",
        kind: "talk", task: "listen-academic-talk", cefr: "C1", n: 4,
        prompt: "Professor Haddad defending a sentence you have been told to avoid. A notepad opens beside the player.",
        speaker: "haddad", speakerNote: "lecturer",
        audio: { track: "11-12", label: "In defence of the passive", lines: [{ who: "haddad", text:
          "I am going to defend a sentence that students are often told to avoid, which is the passive. You will have been advised to write the researchers heated the sample rather than the sample was heated, on the grounds that the active is clearer. In most writing that advice is sound. In a methods section it is wrong, and for a reason worth understanding. A methods section is a set of instructions for reproducing what was done. Who did it is, for that purpose, irrelevant. If the result depends on which person held the pipette, you have not described a method; you have described an anecdote. The passive removes the agent precisely because the agent should not matter, and the sentence is honest about that. Now, the passive is also used to hide agency when agency is exactly what a reader needs, and that is a real abuse. Mistakes were made is the famous example. The test is simple enough: ask whether naming the agent would change what a competent reader should do next. In a methods section it would not. In an apology it would." }] },
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

      { id: "c", section: 3, sectionTitle: "Acknowledge a contribution", letter: "A",
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
        after: "<p>The third instruction is the one that matters. Credit given privately corrects your conscience; credit given publicly corrects the record.</p>",
        closer: { kind: "life",
          body: "<p>Next time you repeat someone else's idea in a group, name them as you do it. Note what it costs you.</p>" } }
    ]
  };
})();
