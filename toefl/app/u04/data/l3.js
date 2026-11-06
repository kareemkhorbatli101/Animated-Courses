/* Unit 4 · Migration and the Human Past — LESSON 3 · GRAMMAR
   The present perfect · for and since · contractions. */
(function () {
  window.PAGE = {
    id: "u04-l3", unit: "u04", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Connect the past to now",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the present perfect", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two entries. One is a finished event; the other is a situation that still holds.",
        text: { every: 1, blocks: [
          { h: "Site record", lines: [
            "The trench was opened in 1976 and closed the following spring.",
            "Three hundred artefacts were recovered that season."
          ] },
          { h: "Current status", lines: [
            "The site has been re-dated twice since then.",
            "Archaeologists have argued about it for nearly fifty years.",
            "It hasn't been fully published."
          ] }
        ] },
        after: "<p>A finished time takes the simple past. A line running from the past to now takes the present perfect — and that is what <i>for</i> and <i>since</i> mark.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the present perfect", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: for, since, and the present perfect",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>have/has + past participle: <i>I have seen · she has gone</i><br><b>for</b> + a length of time: <i>for fifty years</i><br><b>since</b> + a point in time: <i>since 1976</i><br>Contractions: <i>I've · she's · they've · hasn't · haven't</i></p>" },
        text: "We use the present perfect for something that began in the past and is still true. We put ___ before a length of time, and ___ before the point where it started. For an event that finished at a stated time we use the ___ instead: <i>the trench was opened in 1976</i>.",
        gaps: [
          { options: ["for", "since"], answer: "for", why: "<i>for nearly fifty years</i> — a duration." },
          { options: ["since", "for"], answer: "since", why: "<i>since 1976</i> — a starting point." },
          { options: ["simple past", "present perfect"], answer: "simple past",
            why: "A finished time expression blocks the present perfect." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A duration up to now.", band: "B1",
            target: "They have worked on the site for three seasons",
            extra: ["since", "worked", "are"],
            why: "<i>for</i> + a length of time." },
          { cue: "A starting point.", band: "B1",
            target: "The corridor model has been questioned since the nineteen nineties",
            extra: ["for", "was", "questioning"],
            why: "<i>since</i> + a point in time." },
          { cue: "A negative, contracted.", band: "B1",
            target: "The excavation hasn't been fully published yet",
            extra: ["didn't", "isn't", "already"],
            why: "<i>hasn't</i> + past participle, and <i>yet</i> sits at the end of a negative." },
          { cue: "A finished event.", band: "B2",
            target: "The trench was opened in nineteen seventy six",
            extra: ["has", "been", "since"],
            why: "A stated finished time takes the simple past, not the present perfect." },
          { cue: "A result that still matters.", band: "B2",
            target: "New dates have forced archaeologists to revise the standard account",
            extra: ["forced", "since", "were"],
            why: "The present perfect because the revision is the current state of the field." },
          { cue: "Both tenses in one sentence.", band: "C1",
            target: "The site was excavated in the seventies but it has been re-dated twice since then",
            extra: ["has", "was", "for"],
            why: "Simple past for the dig, present perfect for everything after it." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "The team was i___, drawing on genetics and archaeology.", answer: "interdisciplinary", given: [0, 1, 2, 3, 4],
            why: "<i>inter + disciplinary</i>: between fields." },
          { text: "The i___ between the two layers is about two centuries.", answer: "interval", given: [0, 1, 2, 3, 4],
            why: "<i>inter + val</i>: the gap between." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write two sentences about your own study: one with <i>for</i>, one with <i>since</i>.</p>" } }
    ]
  };
})();
