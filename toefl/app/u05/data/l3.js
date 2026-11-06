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

            { id: "1c", section: 1, sectionTitle: "Review the present perfect in questions", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "When the present perfect is NOT the answer. Complete the rule.",
        heading: "Language connection: when the simple past wins",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Simple past</b> a finished time is named, or understood: <i>we lost Monday</i><br><b>Present perfect</b> the window is still open: <i>we have not lost a night since</i><br>A follow-up question about a finished occasion goes back to the simple past: <i>Have you seen it? — Yes. When did you see it?</i></p>" },
        text: "Once a sentence names a finished time, only the ___ is possible, however recent the event. If the window up to now is still open we use the ___ instead. And when a conversation opens with the present perfect and then asks for the details, the follow-up questions switch to the ___ , because by then a particular occasion is being discussed. The one word that signals an open window more reliably than any other is ___ .",
        gaps: [
          { options: ["simple past", "present perfect"], answer: "simple past",
            why: "<i>We lost Monday to cloud</i> — the night is over and so is its window." },
          { options: ["present perfect", "simple past"], answer: "present perfect",
            why: "<i>We have not lost a night since then</i> — the run is still going." },
          { options: ["simple past", "present perfect"], answer: "simple past",
            why: "<i>Have you ever been to the observatory? — Yes. When did you go?</i> The second question is about one visit." },
          { options: ["since", "already"], answer: "since",
            why: "<i>Since</i> names a point and leaves the window open to now, which is why it cannot sit with a simple past." }
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

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them must be in the simple past, whatever they feel like.",
        items: [
          { cue: "A question about a particular night.", band: "A2",
            target: "When did you last observe from the dome",
            extra: ["have", "ever", "yet"],
            why: "<i>When</i> asks for a particular occasion, which the present perfect cannot name." },
          { cue: "Say it has never happened.", band: "B1",
            target: "The instrument has never been used in daylight",
            extra: ["ever", "was", "yet"],
            why: "<i>Never</i> between the auxiliary and the participle, and it already carries the negative." },
          { cue: "A run that is still going.", band: "B1",
            target: "The probe has returned data every week since launch",
            extra: ["returned", "for", "already"],
            why: "<i>Since launch</i> leaves the window open, so the present perfect." },
          { cue: "A finished mission.", band: "B2",
            target: "The spacecraft entered the atmosphere in September and burned up",
            extra: ["has", "since", "entering"],
            why: "A named month closes the window; both verbs go into the simple past." },
          { cue: "A first time.", band: "B2",
            target: "That is the first planet anyone has imaged directly",
            extra: ["imaged", "was", "ever"],
            why: "After a superlative or <i>the first</i>, English uses the present perfect." },
          { cue: "A question and its follow-up.", band: "C1",
            target: "Have you seen the new catalogue and when did it come out",
            extra: ["has", "ever", "yet"],
            why: "The first clause asks about experience, the second about an occasion — so the tenses differ inside one sentence." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from observing logs. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "Did you ever used the larger telescope last year?",
            fixed: "Did you ever use the larger telescope last year?",
            wrong: "used", right: "use",
            why: "<i>Last year</i> closes the window, so the question is in the simple past — and after <i>did</i> the main verb goes bare." },
          { text: "The dome has been close since Monday.",
            fixed: "The dome has been closed since Monday.",
            wrong: "close", right: "closed",
            why: "A passive needs the participle. <i>Close</i> is the bare verb, and the ear does not always catch the missing <i>-d</i> before <i>since</i>." },
          { text: "Has the plan been submitted already?",
            fixed: "Has the plan been submitted yet?",
            wrong: "already", right: "yet",
            why: "In a question the word is <i>yet</i>. <i>Already</i> in a question expresses surprise, which is a different sentence." },
          { text: "The observing plan has already submitted.",
            fixed: "The observing plan has already been submitted.",
            wrong: "already", right: "already been",
            why: "The plan did not submit anything; it was submitted. A passive needs <i>been</i>, and <i>already</i> sits in front of it." },
          { text: "The probe has launched in two thousand and four.",
            fixed: "The probe was launched in two thousand and four.",
            wrong: "has", right: "was",
            why: "A named year, and a passive: <i>was launched</i>. The present perfect cannot reach a closed window." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "An u___ result is worth reading twice.", answer: "unexpected", given: [0, 1, 2],
            why: "<i>un + expected</i>." },
          { text: "Most of the outer solar system is still u___ at close range.", answer: "unexplored", given: [0, 1, 2],
            why: "<i>un + explored</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more. One negates a quality; one reverses an action.",
        items: [
          { text: "The sample proved u___ of the population it was drawn from.", answer: "unrepresentative", given: [0, 1],
            why: "<i>un + representative</i>: the quality is absent." },
          { text: "The array had to be u___ once the craft was clear of the atmosphere.", answer: "unfolded", given: [0, 1],
            why: "<i>un + folded</i>: an action being undone, which is the other job the prefix does." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a word into each gap. Two in the bank are not used, and both of them are the wrong tense.",
        extra: ["already", "did"],
        items: [
          { text: "Have you ___ observed from the larger dome?", answer: "ever",
            why: "between subject and participle, asking about any time up to now." },
          { text: "No, I have ___ used the small one.", answer: "never",
            why: "it carries the negative by itself, so there is no <i>not</i> anywhere." },
          { text: "Has the plan been submitted ___ ?", answer: "yet",
            why: "at the end, and only in questions and negatives." },
          { text: "We lost Monday, but we have not lost a night ___ .", answer: "since",
            why: "a point in time with the window still open." },
          { text: "The probe ___ in two thousand and four.", answer: "launched",
            why: "a named year closes the window, so the simple past and no auxiliary at all." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Ask yourself three <i>Have you ever…?</i> questions about your own study, and answer each with <i>never</i> or <i>already</i>.</p>" } }
    ]
  };
})();
