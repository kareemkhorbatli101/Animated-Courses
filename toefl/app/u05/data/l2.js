/* Unit 5 · Exploring Space — LESSON 2 · WRITING
   The book's Unit 5 writing strategy: the purpose of each paragraph in a
   multi-paragraph message. */
(function () {
  window.PAGE = {
    id: "u05-l2", unit: "u05", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Give every paragraph one job",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the model. Four paragraphs, four jobs — and you should be able to name each one.",
        note: { kind: "writer",
                body: "<p>In a message of more than two paragraphs, give each one a single job: <b>why I am writing</b>, <b>what happened</b>, <b>what I propose</b>, <b>what I need from you</b>. A reader should be able to skip to the paragraph they care about.</p>" },
        text: { every: 1, blocks: [{ lines: [
          "I am writing about the observing slot our group was given for Tuesday.",
          "The dome was rebooked after Monday's session was clouded out, and the two bookings now overlap. We only found out this morning, when both groups arrived.",
          "Rather than split the night, we would like to take the second half and let the other group start. Our targets rise after midnight, so the later slot suits us better in any case.",
          "Could you confirm that this is acceptable, and let us know by Monday afternoon so that both groups can plan?"
        ] }] },
        after: "<p>Nothing in paragraph three belongs in paragraph two, and the request is in one place only. That is the whole technique.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which paragraph of the model does the most work for a busy reader?",
        options: [
          { text: "The fourth — it is the only one that asks for anything, and it gives a deadline.", correct: true,
            why: "A reader scanning for what they must <i>do</i> finds it in one place, with a date attached. That is why the request is kept out of paragraphs two and three." },
          { text: "The first — it sets the subject.",
            why: "Useful, but a subject line does that too. The first paragraph is orientation, not work." },
          { text: "The second — it explains the problem.",
            why: "Necessary background, but a reader who already knows the problem can skip it entirely." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the present perfect in questions, so these are the sentences it is for.",
        items: [
          { cue: "Ask about experience.", band: "B1",
            target: "Have you ever used the larger telescope",
            extra: ["did", "never", "yet"],
            why: "<i>Have you ever…?</i> — <i>ever</i> sits between subject and participle." },
          { cue: "Ask whether something is done.", band: "B1",
            target: "Has the observing plan been submitted yet",
            extra: ["already", "was", "did"],
            why: "<i>yet</i> goes at the end of a question or a negative." },
          { cue: "Say something is done, sooner than expected.", band: "B2",
            target: "We have already rebooked the dome for Tuesday",
            extra: ["yet", "did", "ever"],
            why: "<i>already</i> sits before the participle in a positive statement." },
          { cue: "Contrast a finished night with the record since.", band: "C1",
            target: "The session was clouded out on Monday but we have not lost a night since then",
            extra: ["did", "already", "ever"],
            why: "Simple past for the finished night, present perfect for the record running up to now." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how exploration should be done.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Almost everything we know about the outer solar system came from uncrewed probes. Does that settle the question of how exploration should be done, or not?" },
          { who: "tomas", when: "6 hours ago",
            text: "It settles it. Probes last longer, carry more instruments and nobody dies when one fails. Sending people is expensive theatre." },
          { who: "priya", when: "2 hours ago",
            text: "It settles the question for the outer solar system, which is the only place we've really tried. A geologist on a surface can do in an afternoon what a rover hasn't managed in ten years." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think Priya has found the limit of Tomás's argument without quite saying so.</p><p>The record of uncrewed missions is overwhelming, but it is a record of one kind of task: travelling far, waiting long, and measuring steadily. Those are exactly the things machines are better at, so the evidence is not neutral between the two methods.</p><p>Where people have an advantage is judgement on the spot — noticing that a rock is odd and deciding to turn it over. Tomás is right about cost and risk. He is wrong that the question is closed, because it has only been tested where machines were always going to win.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
