/* Unit 8 · Disease and Public Health — LESSON 2 · WRITING
   The book's Unit 8 writing strategy: writing an outline. */
(function () {
  window.PAGE = {
    id: "u08-l2", unit: "u08", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Outline before you write",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the outline, then the paragraph it produced. The outline is four lines; the paragraph is one.",
        note: { kind: "writer",
                body: "<p>An outline is not a summary written in advance. It is a list of the <b>jobs</b> each part must do. Write the jobs first, then fill them — and if you cannot name a job, that part does not belong.</p>" },
        text: { every: 1, blocks: [
          { h: "The outline", lines: [
            "1. Claim — the decline was mostly not medical",
            "2. Evidence — TB mortality fell before treatment existed",
            "3. Alternative cause — housing, nutrition, sanitation",
            "4. So what — investing only in treatment misses the cause"
          ] },
          { h: "The paragraph it produced", lines: [
            "The great decline in infectious mortality was largely not a medical achievement. Deaths from tuberculosis had been falling steeply for decades before any effective treatment existed, and the curve tracks housing, nutrition and sanitation far more closely than it tracks any drug. A health system that invests only in treatment is therefore addressing the smaller half of its own problem."
          ] }
        ] },
        after: "<p>Four jobs, three sentences. Line 1 and line 4 of the outline became the first and last sentence — which is where a reader looks.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "What does line 4 of the outline do that lines 1 to 3 do not?",
        options: [
          { text: "It says why the reader should care — the consequence of the claim being true.", correct: true,
            why: "Claim, evidence and cause describe the world. Only the fourth line tells the reader what follows for them, and a paragraph without it reads as trivia." },
          { text: "It summarises the first three.",
            why: "It introduces something new: an implication for how a health system spends." },
          { text: "It gives the strongest evidence.",
            why: "The evidence is line 2. Line 4 is not evidence at all." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is <i>used to</i> and the present perfect continuous.",
        items: [
          { cue: "A past habit that has stopped.", band: "B1",
            target: "People used to die of infections that are now treatable",
            extra: ["use", "using", "are used"],
            why: "<i>used to</i> + bare infinitive, for a state or habit no longer true." },
          { cue: "An activity still going on.", band: "B1",
            target: "Researchers have been tracking the decline since the nineteenth century",
            extra: ["track", "tracked", "are tracking"],
            why: "Present perfect continuous: started in the past, still running." },
          { cue: "A question about a past habit.", band: "B2",
            target: "Did people use to live closer together in cities",
            extra: ["used", "do", "using"],
            why: "After <i>did</i> the form is <i>use to</i>, with no <i>d</i>." },
          { cue: "Claim and consequence in one sentence.", band: "C1",
            target: "A system that invests only in treatment is addressing the smaller half of its problem",
            extra: ["invest", "investing", "which"],
            why: "A relative clause inside the subject, which is how the model paragraph ends." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about where health money should go.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "If the historical decline in infectious mortality owed more to sanitation than to medicine, what follows for how health budgets should be set today?" },
          { who: "priya", when: "4 hours ago",
            text: "It follows that we're spending in the wrong place. Housing and water infrastructure are health spending, and calling them something else lets them lose every budget argument." },
          { who: "tomas", when: "1 hour ago",
            text: "That reasoning works for 1880. Today's big killers are heart disease and cancer, and no amount of sanitation touches those. The history doesn't transfer." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>Tomás has identified the real limit of the argument, but I think he draws the wrong conclusion from it.</p><p>He is right that sanitation does not touch heart disease. But the general lesson was never about drains specifically — it was that the conditions people live in determine how many of them need treating. For today's diseases those conditions are different: diet, air quality, how walkable a city is, how much people work.</p><p>So I would agree with Priya's principle and update her examples. The error is not spending on treatment; it is classifying everything upstream of treatment as somebody else's budget.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
