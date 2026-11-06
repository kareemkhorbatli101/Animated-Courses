/* Unit 3 · Adaptation and Diversity — LESSON 2 · WRITING
   The book's Unit 3 writing strategy: writing a title for an email. */
(function () {
  window.PAGE = {
    id: "u03-l2", unit: "u03", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write a subject line that does work",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "choice", task: null, n: 0,
        prompt: "Four subject lines for the same message: a student asking to reschedule a lab session. Which one does the most work?",
        note: { kind: "writer",
                body: "<p>A subject line should let the reader know what the message is about <i>and</i> what it asks of them, without opening it. Name the thing, then the action.</p>" },
        options: [
          { text: "<b>Lab session 12 March — request to reschedule</b>", correct: true,
            why: "Names the thing (which session), and the action (a request to move it). The reader can triage it unopened." },
          { text: "<b>Question</b>",
            why: "True of almost every email ever sent. It gives the reader nothing to act on." },
          { text: "<b>Hi!</b>",
            why: "A greeting, not a subject. It also sets a register the rest of the message will struggle to match." },
          { text: "<b>I am writing to ask whether it would be possible to move my laboratory session from the twelfth of March</b>",
            why: "Accurate, but it is the first sentence of the email, not a title. A subject line that must be read in full has failed." }
        ] },


      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "sequence", task: null, n: 0,
        prompt: "Writing a subject line is five decisions, in this order. Put them on the right rungs.",
        note: { kind: "writer",
                body: "<p>The order matters because the common failure is writing the line first and working out what the message is about afterwards. A subject line you cannot write is usually a message you have not finished thinking about.</p>" },
        steps: [
          { text: "Name the thing the message is about", pos: 1,
            why: "one noun phrase — <i>lab session 12 March</i>. If you cannot produce one, the message is about two things and should be two messages." },
          { text: "Decide what you want the reader to do", pos: 2,
            why: "request, reply, note, approve. A subject line that names only the thing makes the reader open it to find out." },
          { text: "Put the thing first and the action second", pos: 3,
            why: "readers scan the left-hand end of a subject line. The thing is what lets them decide whether to read further." },
          { text: "Cut it to fit a phone screen", pos: 4,
            why: "about forty characters survive. Everything past that is written for nobody." },
          { text: "Read it back as someone with sixty unread messages", pos: 5,
            why: "the last check, and the only one that catches a line which is accurate and useless." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is comparison, so these are the sentences comparison needs.",
        items: [
          { cue: "A simple comparison.", band: "A2",
            target: "The seeds were larger and harder than usual",
            extra: ["more", "most"],
            why: "One-syllable adjectives take <i>-er</i>, not <i>more</i>." },
          { cue: "A superlative.", band: "B1",
            target: "This is the clearest example of selection ever recorded",
            extra: ["clearer", "most"],
            why: "<i>Clear</i> is one syllable, so <i>clearest</i>, not <i>most clear</i>." },
          { cue: "A comparison with a longer adjective.", band: "B2",
            target: "Deeper beaks were more effective at cracking the hard seeds",
            extra: ["effectiver", "effectivest"],
            why: "Adjectives of three syllables take <i>more</i>, never <i>-er</i>." },
          { cue: "A measured comparison.", band: "C1",
            target: "The average beak was about half a millimetre deeper than before the drought",
            extra: ["deepest", "more", "as"],
            why: "A measure phrase goes in front of the comparative: <i>half a millimetre deeper</i>." }
        ] },


      { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more comparisons, each a shape the last four did not cover.",
        items: [
          { cue: "Compare two quantities.", band: "A2",
            target: "The hard seeds are twice as heavy as the soft ones",
            extra: ["heavier", "more", "than"],
            why: "<i>twice as … as</i> for a multiple. The comparative form cannot take a multiplier." },
          { cue: "A superlative inside a named group.", band: "B1",
            target: "That was the driest year in the whole record",
            extra: ["drier", "most", "than"],
            why: "<i>in</i>, not <i>of</i>, when the group is a place or a span of time." },
          { cue: "Two things changing together.", band: "B2",
            target: "The longer the drought lasted the deeper the average beak became",
            extra: ["longest", "more", "deepest"],
            why: "<i>The … the …</i> — two comparatives, each with <i>the</i>, and no <i>than</i> anywhere." },
          { cue: "A comparison folded into a noun phrase.", band: "C1",
            target: "Birds with deeper beaks than their parents survived the second drought",
            extra: ["deepest", "more", "as"],
            why: "The comparison modifies <i>birds</i>, so the whole phrase is the subject. The main verb is <i>survived</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five comparisons from student drafts. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "Beaks here are deeper that on the northern island.",
            wrong: "that", right: "than",
            why: "<i>Than</i> introduces the second item in a comparison; <i>that</i> introduces a clause. They sound almost identical, which is why this one survives proofreading." },
          { text: "The drought year was badder than any year before it.",
            wrong: "badder", right: "worse",
            why: "<i>Bad</i> is irregular: <i>bad, worse, worst</i>." },
          { text: "Cracking the hard seeds is difficulter for shallow beaks.",
            wrong: "difficulter", right: "more difficult",
            why: "Three syllables, so the word goes in front. There is no adjective in English that takes <i>-er</i> at that length." },
          { text: "The second island was not as dry than the first.",
            wrong: "than", right: "as",
            why: "<i>not as … as</i> is a fixed frame. Mixing it with <i>than</i> produces a sentence that is half comparison and half equality." },
          { text: "These are the smaller seeds we have ever measured.",
            wrong: "smaller", right: "smallest",
            why: "<i>Ever</i> and <i>the</i> both signal a superlative: you are singling one out of all of them, not comparing two." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how the subject is usually taught.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Textbooks often say a species <i>adapted to</i> its environment. Is that phrase useful shorthand, or does it mislead? Give a reason." },
          { who: "tomas", when: "4 hours ago",
            text: "It's harmless shorthand. Everyone knows what it means, and spelling out the mechanism every time would make a textbook unreadable." },
          { who: "priya", when: "2 hours ago",
            text: "I don't think everyone does know what it means. I spent a year thinking individual animals changed to suit their surroundings, because that is what the phrase sounds like." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I used <i>variation</i>, <i>selection</i> or <i>adaptation</i> accurately.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think the phrase misleads, and Priya's experience is the evidence.</p><p>The grammar of <i>a species adapted to its environment</i> puts the species in the subject position, doing something. That is exactly backwards: the variation was already there, and the environment decided which part of it was passed on. The sentence describes an outcome in the grammar of an action.</p><p>Tomás is right that the full mechanism cannot be repeated every time. But a textbook could write <i>became adapted</i>, which costs one word and removes the agent.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A second question, about what a display case should show.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates are arguing about the same cabinet and mean different things by <i>represent</i>. Naming that is a stronger reply than taking a side.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A museum case has room for six specimens of a species that varies widely. Should it show six typical individuals, or six that span the full range of variation? Give a reason." },
          { who: "mei", when: "5 hours ago",
            text: "Show the typical ones. A visitor who sees six extremes will leave with a picture of the species that is wrong for almost every individual in it." },
          { who: "dan", when: "2 hours ago",
            text: "Show the range. A case of six near-identical birds teaches that a species is a type, and that idea is the single hardest thing to unteach later." }
        ],
        checklist: [
          "My first paragraph says which the case should show.",
          "I used <i>variation</i>, <i>population</i> or <i>species</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I gave a reason that is about the visitor, not only about the specimens.",
          "I wrote 100 words or more."
        ],
        model: "<p>I would show the range, with the typical pair marked as typical.</p>" +
               "<p>Dan is right about the cost of the alternative. A case of six near-identical birds is a picture of a species as a type with a few errors around it, and that is exactly the idea this subject spends a year dismantling. Variation is not noise around the species; it is the material selection works on.</p>" +
               "<p>Mei is right that six extremes would mislead in the other direction. But that is an argument for labelling, not for choosing the specimens differently: if two of the six are marked as common and four as the edges, the visitor gets both facts.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
