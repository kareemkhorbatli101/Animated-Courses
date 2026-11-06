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

            { id: "1c", section: 1, sectionTitle: "Review the present perfect", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "The words that travel with the present perfect, and the one that blocks it. Complete the rule.",
        heading: "Language connection: ever, never, yet, already, still",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>ever / never</b> in questions and negatives about all of time up to now<br><b>yet</b> at the end of a negative or a question<br><b>already</b> inside a positive, usually before the participle<br><b>still</b> + not, when the waiting continues<br>A finished time expression — <i>in 1976</i>, <i>last year</i> — blocks the present perfect altogether.</p>" },
        text: "In a negative or a question we put ___ at the end to mean <i>up to now</i>. In a positive sentence the same idea is carried by ___ , placed before the participle. If the waiting is continuing we can say ___ instead, in front of the negative. And none of this is possible once the sentence names a ___ time.",
        gaps: [
          { options: ["yet", "already"], answer: "yet",
            why: "<i>It hasn't been published yet.</i> <i>Already</i> there would be a different claim." },
          { options: ["already", "yet"], answer: "already",
            why: "<i>It has already been re-dated twice.</i> The position before the participle is the usual one." },
          { options: ["still", "ever"], answer: "still",
            why: "<i>It still hasn't been published.</i> <i>Still</i> goes in front of the auxiliary and adds impatience." },
          { options: ["finished", "continuing"], answer: "finished",
            why: "<i>in 1976</i> closes the window, so the simple past is the only option." }
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

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Watch which of them name a finished time, because those cannot take the present perfect at all.",
        items: [
          { cue: "A question about all of time up to now.", band: "B1",
            target: "Have you ever worked on a coastal site",
            extra: ["did", "working", "since"],
            why: "<i>Ever</i> means at any point up to now, which is the present perfect's whole territory." },
          { cue: "A negative with continuing impatience.", band: "B1",
            target: "The final report still has not appeared",
            extra: ["yet", "did", "appearing"],
            why: "<i>Still</i> in front of the auxiliary. Putting <i>yet</i> at the end instead would be correct and less pointed." },
          { cue: "A finished event with a stated year.", band: "B1",
            target: "The marine correction was applied in two thousand and four",
            extra: ["has", "been", "since"],
            why: "The year closes the window, so the simple past." },
          { cue: "A count up to now.", band: "B2",
            target: "The site has been re-dated three times since the first excavation",
            extra: ["was", "for", "re-dating"],
            why: "<i>Since</i> + a point, and a count that is still open to going up." },
          { cue: "A first experience.", band: "B2",
            target: "This is the first time I have seen a trench recorded properly",
            extra: ["saw", "was", "since"],
            why: "<i>This is the first time</i> is always followed by the present perfect, which surprises most learners." },
          { cue: "Both tenses, with a cause.", band: "C1",
            target: "Because the corridor dates were revised the model has been abandoned",
            extra: ["since", "has", "was"],
            why: "Simple past in the <i>because</i> clause for the finished revision, present perfect in the main clause for the state that followed." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from a literature review. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "The team have worked on the site since three seasons.",
            fixed: "The team have worked on the site for three seasons.",
            wrong: "since", right: "for",
            why: "<i>Three seasons</i> is a length. <i>Since</i> takes a point, and a season is not one." },
          { text: "I seen that trench last summer.",
            fixed: "I saw that trench last summer.",
            wrong: "seen", right: "saw",
            why: "<i>Last summer</i> is finished, so the simple past — and the simple past of <i>see</i> is <i>saw</i>, not the participle standing alone." },
          { text: "The report hasn't appeared already.",
            fixed: "The report hasn't appeared yet.",
            wrong: "already", right: "yet",
            why: "<i>Already</i> belongs in positives. In a negative the word is <i>yet</i>." },
          { text: "This is the first time I see a site recorded this well.",
            fixed: "This is the first time I have seen a site recorded this well.",
            wrong: "see", right: "have seen",
            why: "<i>The first time</i> is counted up to now, so the clause after it takes the present perfect." },
          { text: "The corridor model has been questioned for the nineteen nineties.",
            fixed: "The corridor model has been questioned since the nineteen nineties.",
            wrong: "for", right: "since",
            why: "A decade named like this is a starting point, not a duration." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the word. Both use this unit's prefix.",
        items: [
          { text: "The team was i___, drawing on genetics and archaeology.", answer: "interdisciplinary", given: [0, 1, 2, 3, 4],
            why: "<i>inter + disciplinary</i>: between fields." },
          { text: "The i___ between the two layers is about two centuries.", answer: "interval", given: [0, 1, 2, 3, 4],
            why: "<i>inter + val</i>: the gap between." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more. One has this unit's prefix and one only looks as though it does.",
        items: [
          { text: "Two lines of evidence that i___ at nine thousand years are worth more than either alone.", answer: "intersect", given: [0, 1],
            why: "<i>inter + sect</i>, to cut between. The agreement of two independent methods is the strongest thing a date can have." },
          { text: "The two recording systems had to be i___ before the data could be merged.", answer: "integrated", given: [0, 1],
            why: "Not this unit's prefix at all: <i>integer</i>, whole. The spelling is a coincidence and a trap." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a time expression into each gap. Two in the bank are not used, and both of them are the wrong half of a pair.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>The test is mechanical. A length of time takes <i>for</i>; a point in time takes <i>since</i>; a finished time takes neither and the simple past.</p>" },
        extra: ["since three seasons", "for nineteen seventy six"],
        items: [
          { text: "The team has worked there ___ .", answer: "for three seasons",
            why: "a length, so <i>for</i>." },
          { text: "The site has been re-dated twice ___ .", answer: "since the first excavation",
            why: "a point in time, so <i>since</i>." },
          { text: "The trench was opened ___ and closed the following spring.", answer: "in nineteen seventy six",
            why: "a finished year, so neither preposition and the simple past." },
          { text: "Archaeologists have argued about it ___ .", answer: "for nearly fifty years",
            why: "a length again, and the arguing has not stopped." },
          { text: "The corridor model has been doubted ___ .", answer: "since the nineteen nineties",
            why: "a decade used as a starting point." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write two sentences about your own study: one with <i>for</i>, one with <i>since</i>.</p>" } }
    ]
  };
})();
