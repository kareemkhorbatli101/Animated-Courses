/* Unit 4 · Migration and the Human Past — LESSON 2 · WRITING
   The book's Unit 4 writing strategy: using colons in a formal message. */
(function () {
  window.PAGE = {
    id: "u04-l2", unit: "u04", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Use a colon to introduce, not to decorate",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["word"],
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
        concepts: ["claim"],
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

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "evidence"],
        kind: "sequence", task: null, n: 0,
        prompt: "A message that reports a problem and proposes a fix has a fixed order. Put the five moves on the right rungs.",
        note: { kind: "writer",
                body: "<p>The temptation is to begin with the evidence, because that is the order you discovered it in. The reader has the opposite need: they want to know what you are telling them before they can judge whether the evidence supports it.</p>" },
        steps: [
          { text: "Say what you are reporting, in one sentence", pos: 1,
            why: "the reader cannot weigh evidence for a claim they have not yet been given." },
          { text: "Give the evidence, with the colon doing the listing", pos: 2,
            why: "<i>The discrepancy has two sources: the marine correction and the layer number.</i> A complete sentence, then the list." },
          { text: "Say what you think it means", pos: 3,
            why: "the interpretation is separated from the evidence, so the reader can accept one without the other." },
          { text: "Propose what should happen", pos: 4,
            why: "a report with no proposal leaves the whole decision with the reader, which is usually not what you want." },
          { text: "Say what you will do if you hear nothing", pos: 5,
            why: "last, and it is the sentence that stops the message sitting unanswered for a fortnight." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
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

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them use the colon this lesson is about.",
        items: [
          { cue: "Introduce a list with a colon.", band: "B1",
            target: "The delay had two causes: the marine correction and the layer number",
            extra: ["because", "which", "was"],
            why: "<i>The delay had two causes</i> is a complete sentence, so the colon is free to introduce the list." },
          { cue: "Introduce an explanation with a colon.", band: "B2",
            target: "The result is easy to state: the corridor was closed when people were already south of it",
            extra: ["because", "and", "so"],
            why: "What follows a colon may also be a whole sentence, when it explains the one before." },
          { cue: "A continuing situation with a negative.", band: "B2",
            target: "The excavation has not been fully published for nearly fifty years",
            extra: ["since", "was", "did"],
            why: "<i>for</i> with a length of time, and the present perfect because the non-publication is current." },
          { cue: "Two time frames in one sentence.", band: "C1",
            target: "The dates were obtained in the nineteen nineties but they have only recently been accepted",
            extra: ["since", "have", "for"],
            why: "Simple past for the finished measuring, present perfect for the acceptance, which arrived late and still holds." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "claim"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from report drafts. One word in each is wrong. Click it, then type the correction.",
        note: { kind: "writer",
                body: "<p>Three of these are the present perfect meeting a finished time, which is the single most common error in writing about a discipline's history.</p>" },
        items: [
          { text: "The trench has opened in nineteen seventy six.",
            fixed: "The trench was opened in nineteen seventy six.",
            wrong: "has", right: "was",
            why: "A stated finished year blocks the present perfect. The event is over and so is its time." },
          { text: "Archaeologists have argued about the site since nearly fifty years.",
            fixed: "Archaeologists have argued about the site for nearly fifty years.",
            wrong: "since", right: "for",
            why: "<i>Fifty years</i> is a length, so <i>for</i>. <i>Since</i> needs a point: <i>since 1976</i>." },
          { text: "The site hasn't been published already.",
            fixed: "The site hasn't been published yet.",
            wrong: "already", right: "yet",
            why: "<i>Yet</i> goes with negatives and questions; <i>already</i> goes with positives." },
          { text: "The report have been delayed twice since the funder asked for it.",
            fixed: "The report has been delayed twice since the funder asked for it.",
            wrong: "have", right: "has",
            why: "<i>Report</i> is singular. The plural <i>dates</i> two lines earlier in most drafts is what pulls a writer into this." },
          { text: "New dates has forced the discipline to revise its account.",
            fixed: "New dates have forced the discipline to revise its account.",
            wrong: "has", right: "have",
            why: "<i>Dates</i> is plural. The singular <i>evidence</i> on the next line of most drafts is what pulls the writer into this." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
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
        model: "<p>I think it was mostly the system working, though Priya is identifying something real.</p><p>A single early date can be wrong in a dozen ordinary ways: contamination, a mis-recorded layer, an uncorrected marine sample. Accepting one such date immediately would make the framework worthless, because any framework can be overturned by one bad measurement.</p><p>Where Priya is right is that the burden was applied unevenly. Dates that fitted the corridor model were not examined as hard as dates that did not. The delay was defensible; the asymmetry was not.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write", "claim"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A second question, about who the past belongs to.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Neither classmate below is arguing about the archaeology. They are arguing about who decides, and a reply that re-argues the dates has answered a different question.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "Human remains excavated a century ago sit in university collections across the world. Descendant communities increasingly ask for them back, and researchers point out that new methods can still extract new information from them. How should that be resolved?" },
          { who: "mei", when: "6 hours ago",
            text: "Return them. The information argument has no end point: there will always be a method that has not been invented yet, so the remains would never go back." },
          { who: "dan", when: "2 hours ago",
            text: "Much of what we know about early migration came from exactly these collections. Emptying them is not a neutral act either; it decides that certain questions will not be answered." }
        ],
        checklist: [
          "My first paragraph says how it should be resolved.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about who decides, not only about what can be learnt.",
          "I used the present perfect at least once, correctly.",
          "I wrote 100 words or more."
        ],
        model: "<p>The decision should sit with the descendant community, with research possible by agreement rather than by default.</p>" +
               "<p>Mei has found the weak point in the research argument. <i>A future method might learn more</i> is true of every object that has ever existed, so it cannot by itself settle anything; used as a reason to retain, it is a reason to retain forever.</p>" +
               "<p>Dan is right that returning is not costless, and I would not pretend otherwise. But the cost falls on a question, and the alternative cost falls on people. Where a community has agreed to study, as several have, the work has gone ahead and has been better for being agreed.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
