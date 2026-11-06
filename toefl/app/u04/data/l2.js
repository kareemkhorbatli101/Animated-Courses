/* Unit 4 · Migration and the Human Past — LESSON 2 · WRITING
   The book's Unit 4 writing strategy: using colons in a formal message. */
(function () {
  window.PAGE = {
    id: "u04-l2", unit: "u04", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Use a colon to introduce, not to decorate",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "cloze", task: null, n: 0,
        prompt: "The colon has one job in formal writing: what comes after it explains or lists what came before. Complete the rule.",
        heading: "Language connection: the colon",
        note: { kind: "writer",
                body: "<p>A colon needs a <b>complete sentence</b> in front of it. <i>We need three things: calipers, gloves and the box list.</i> ✓<br><i>We need: calipers, gloves and the box list.</i> ✗ — <i>We need</i> is not a sentence.</p>" },
        text: "Before a colon there must be a ___ . After it comes an explanation or a ___ . A colon is ___ used after a verb or a preposition that is still waiting for its object.",
        gaps: [
          { options: ["complete sentence", "fragment"], answer: "complete sentence",
            why: "<i>We need three things</i> stands alone; <i>We need</i> does not." },
          { options: ["list", "question"], answer: "list",
            why: "A colon introduces either an explanation or a list." },
          { options: ["never", "always"], answer: "never",
            why: "<i>consists of:</i> and <i>such as:</i> are the two commonest errors." }
        ] },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence uses the colon correctly?",
        options: [
          { text: "The delay had two causes: the corridor dates and the marine correction.", correct: true,
            why: "<i>The delay had two causes</i> is a complete sentence, and what follows explains it." },
          { text: "The delay was caused by: the corridor dates and the marine correction.",
            why: "<i>was caused by</i> is still waiting for its object, so the colon interrupts the grammar." },
          { text: "The delay had two causes, : the corridor dates and the marine correction.",
            why: "A comma and a colon cannot both introduce the same list." },
          { text: "Two causes: the delay had.",
            why: "The fragment is in front and the sentence behind — the colon is facing the wrong way." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the present perfect, so these are the sentences it is for.",
        items: [
          { cue: "Something that started in the past and still holds.", band: "B1",
            target: "Archaeologists have known about these sites since the nineteen seventies",
            extra: ["knew", "for", "did"],
            why: "<i>since</i> + a point in time, with the present perfect." },
          { cue: "A duration.", band: "B1",
            target: "The corridor has been closed for several thousand years",
            extra: ["since", "was", "closing"],
            why: "<i>for</i> + a length of time." },
          { cue: "A result that matters now.", band: "B2",
            target: "New dates have forced the discipline to revise the standard account",
            extra: ["forced", "forcing", "since"],
            why: "The present perfect because the consequence is current." },
          { cue: "Contrast a finished time with a continuing one.", band: "C1",
            target: "The site was excavated in nineteen seventy six but it has been re-dated twice since then",
            extra: ["has", "was", "for"],
            why: "Simple past for the finished event, present perfect for what has happened since." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how a field changes its mind.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "It took archaeology roughly twenty years to accept the early coastal sites. Was that delay a failure of the discipline, or a feature of how evidence should be handled?" },
          { who: "priya", when: "5 hours ago",
            text: "A failure. The dates were published and people kept finding reasons not to believe them. That is not caution, it is attachment to a theory." },
          { who: "tomas", when: "3 hours ago",
            text: "Twenty years sounds long, but a claim that overturns the whole framework should take longer to accept than one that fits. Otherwise the framework means nothing." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason, not just an opinion.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think it was mostly the system working, though Priya is identifying something real.</p><p>A single early date can be wrong in a dozen ordinary ways: contamination, a mis-recorded layer, an uncorrected marine sample. Accepting one such date immediately would make the framework worthless, because any framework can be overturned by one bad measurement.</p><p>Where Priya is right is that the burden was applied unevenly. Dates that fitted the corridor model were not examined as hard as dates that did not. The delay was defensible; the asymmetry was not.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
