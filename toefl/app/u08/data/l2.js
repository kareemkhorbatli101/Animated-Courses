/* Unit 8 · Disease and Public Health — LESSON 2 · WRITING
   The book's Unit 8 writing strategy: writing an outline. */
(function () {
  window.PAGE = {
    id: "u08-l2", unit: "u08", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Outline before you write",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read", "comparison", "evidence"],
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
        concepts: ["claim", "evidence"],
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

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "evidence", "claim"],
        kind: "sequence", task: null, n: 0,
        prompt: "This unit's strategy is the outline. Put the five steps of building one in order.",
        note: { kind: "writer",
                body: "<p>An outline is not a plan of what to say; it is a test of whether you have anything to say. The order below is designed so that the test comes before the writing, which is the only arrangement that saves time.</p>" },
        steps: [
          { text: "Write the claim as one sentence", pos: 1,
            why: "if it will not fit in one sentence, the paragraph has two claims and should be two paragraphs." },
          { text: "List the reasons, one line each", pos: 2,
            why: "one line forces each reason to be separable from the others. Reasons that collapse into one line were one reason." },
          { text: "Put the strongest objection beneath them", pos: 3,
            why: "before any prose exists, while it is still cheap to discover that the objection defeats you." },
          { text: "Mark which line each piece of evidence belongs to", pos: 4,
            why: "evidence attached to no line is evidence you wanted to use rather than evidence you need." },
          { text: "Read the lines in order and see whether they argue", pos: 5,
            why: "the whole point of the exercise: an outline that does not argue will not become a paragraph that does." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        carry: "1a",
        concepts: ["word"],
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

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word", "claim"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them separate a closed past from a trend that is still running.",
        items: [
          { cue: "A past state that has ended.", band: "B1",
            target: "Cities used to be more dangerous places to live than the countryside",
            extra: ["use", "using", "are used"],
            why: "<i>Used to</i> + bare infinitive, and it is a state rather than a habit, which the construction also covers." },
          { cue: "A trend still running.", band: "B1",
            target: "Mortality from infection has been falling steadily for over a century",
            extra: ["fell", "falls", "is fallen"],
            why: "Present perfect continuous for a change that began in the past and has not stopped." },
          { cue: "Accustomed to, not formerly.", band: "B2",
            target: "Clinicians are used to working from an incomplete case register",
            extra: ["use", "work", "worked"],
            why: "<i>Be used to</i> + <i>-ing</i>. The same three letters, a completely different meaning." },
          { cue: "A claim with its qualification attached.", band: "C1",
            target: "The decline began before any effective treatment existed which is the fact the standard account has to explain",
            extra: ["that", "existing", "has"],
            why: "A non-defining relative clause commenting on the whole statement before it, which is what <i>which</i> can do and <i>that</i> cannot." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "evidence"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from essay drafts. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "People did not used to boil their drinking water.",
            fixed: "People did not use to boil their drinking water.",
            wrong: "used", right: "use",
            why: "<i>Did</i> already carries the past, so the <i>d</i> comes off." },
          { text: "Did doctors used to think it travelled through the air?",
            fixed: "Did doctors use to think it travelled through the air?",
            wrong: "used", right: "use",
            why: "The same rule in a question. The <i>d</i> survives only in the plain positive form." },
          { text: "Researchers have been studied the decline for over a century.",
            fixed: "Researchers have been studying the decline for over a century.",
            wrong: "studied", right: "studying",
            why: "<i>Have been</i> takes the <i>-ing</i> form. <i>Have studied</i> would also be possible, with a different emphasis." },
          { text: "Hospital staff are used to work through the night.",
            fixed: "Hospital staff are used to working through the night.",
            wrong: "work", right: "working",
            why: "<i>Be used to</i> ends in a preposition, so the verb takes <i>-ing</i>. This is the construction meaning <i>accustomed</i>." },
          { text: "Mortality has been falling since over a century.",
            fixed: "Mortality has been falling for over a century.",
            wrong: "since", right: "for",
            why: "<i>A century</i> is a length, so <i>for</i>. <i>Since</i> would need a point: <i>since 1850</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
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
        model: "<p>Tomás has identified the real limit of the argument, but I think he draws the wrong conclusion from it.</p><p>He is right that sanitation does not touch heart disease. But the general lesson was never about drains specifically — it was that the conditions people live in determine how many of them need treating. For today's diseases those conditions are different: diet, air quality, how walkable a city is, how much people work.</p><p>So I would agree with Priya's principle and update her examples. The error is not spending on treatment; it is classifying everything upstream of treatment as somebody else's budget.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write", "measurement"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A second question, about a number that was true and misleading at the same time.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates agree the figure was accurate. They disagree about whether publishing an accurate figure that will be misread is the right thing to do, which is the question.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "Early in an outbreak the published case fatality rate is almost always far too high, because only the sickest people have been tested. The figure is correct for the cases known at the time. Should it be published anyway?" },
          { who: "mei", when: "5 hours ago",
            text: "Publish it, with the caveat. Withholding figures because the public might misread them is how an agency loses the standing it needs in the second month." },
          { who: "dan", when: "2 hours ago",
            text: "The caveat never travels with the number. Publishing a figure you know will be quoted without its denominator is not honesty, it is honesty-shaped." },
        ],
        checklist: [
          "My first paragraph says whether the figure should be published.",
          "I used <i>numerator</i>, <i>denominator</i> or <i>rate</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about what happens to the figure after publication, not only about whether it is correct.",
          "I wrote 100 words or more."
        ],
        model: "<p>Publish, and publish the denominator in the same breath as the rate.</p>" +
               "<p>Dan is right that the caveat does not travel. A sentence of explanation beneath a number is read by a fraction of the people who read the number, and planning otherwise is wishful. But his conclusion does not follow, because the alternative is not silence: it is somebody else's figure, with no caveat at all.</p>" +
               "<p>Mei has the stronger position if the format changes. <i>Thirty deaths among two hundred tested</i> is the same information as <i>fifteen per cent</i> and it is much harder to quote badly, because the denominator is inside the sentence rather than beneath it.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
