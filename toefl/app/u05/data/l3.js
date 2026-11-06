/* Unit 5 · Exploring Space — LESSON 3 · GRAMMAR
   yes/no questions with the present perfect · ever, already, yet ·
   simple past against present perfect. */
(function () {
  window.PAGE = {
    id: "u05-l3", unit: "u05", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Ask what has been done, and what never has",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the present perfect in questions", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the exchange at the start of an observing session. Watch where <i>ever</i>, <i>already</i> and <i>yet</i> sit.",
        text: { every: 1, blocks: [
          { h: "Before the dome opens", lines: [
            "Have you ever used the larger telescope?",
            "No, never. I have only worked on the small one.",
            "Has the plan been submitted yet?",
            "Yes — I have already sent it."
          ] },
          { h: "Afterwards", lines: [
            "We lost Monday to cloud.",
            "But we haven't lost a night since then."
          ] }
        ] },
        after: "<p><i>Ever</i> and <i>already</i> go before the participle. <i>Yet</i> goes at the end, and only in questions and negatives.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the present perfect in questions", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: ever, already and yet",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Have you ever…?</b> at any time up to now<br><b>I have already…</b> sooner than expected<br><b>… yet?</b> / <b>not … yet</b> questions and negatives only<br><b>never</b> = not at any time: <i>I have never seen it.</i></p>" },
        text: "We put ___ between the subject and the participle when we ask about any time up to now. We put ___ in the same position to say that something happened sooner than expected. We put ___ at the end, and only in a question or a negative. For a finished moment with a stated time we use the ___ instead.",
        gaps: [
          { options: ["ever", "yet"], answer: "ever", why: "<i>Have you ever used it?</i>" },
          { options: ["already", "yet"], answer: "already", why: "<i>I have already sent it.</i>" },
          { options: ["yet", "already"], answer: "yet", why: "<i>Has it been submitted yet?</i> / <i>It hasn't arrived yet.</i>" },
          { options: ["simple past", "present perfect"], answer: "simple past",
            why: "<i>We lost Monday to cloud</i> — a finished night." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "Ask about experience.", band: "A2",
            target: "Have you ever seen a transit",
            extra: ["did", "yet", "never"],
            why: "<i>ever</i> between subject and participle." },
          { cue: "Answer in the negative.", band: "A2",
            target: "No I have never seen one",
            extra: ["ever", "yet", "didn't"],
            why: "<i>never</i> replaces <i>not … ever</i>; you do not use both." },
          { cue: "Ask whether a task is complete.", band: "B1",
            target: "Has the observing plan been submitted yet",
            extra: ["already", "was", "ever"],
            why: "<i>yet</i> at the end of a question." },
          { cue: "Say it is done, sooner than expected.", band: "B1",
            target: "We have already booked the dome for Tuesday",
            extra: ["yet", "ever", "did"],
            why: "<i>already</i> before the participle, in a positive statement." },
          { cue: "A finished night.", band: "B2",
            target: "We lost Monday to cloud cover",
            extra: ["have", "lost", "since"],
            why: "A stated finished occasion takes the simple past." },
          { cue: "Both tenses in one sentence.", band: "C1",
            target: "The probe launched in two thousand and four and has been returning data ever since",
            extra: ["has", "was", "already"],
            why: "Simple past for the launch, present perfect continuous for the record up to now." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "An u___ result is worth reading twice.", answer: "unexpected", given: [0, 1, 2],
            why: "<i>un + expected</i>." },
          { text: "Most of the outer solar system is still u___ at close range.", answer: "unexplored", given: [0, 1, 2],
            why: "<i>un + explored</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Ask yourself three <i>Have you ever…?</i> questions about your own study, and answer each with <i>never</i> or <i>already</i>.</p>" } }
    ]
  };
})();
