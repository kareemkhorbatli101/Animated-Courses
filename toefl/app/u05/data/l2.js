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
        concepts: ["read", "time"],
        kind: "annotate", task: null, n: 0,
        jobs: ["Why I am writing", "What happened", "What I propose", "What I need from you"],
        sentences: [
          { text: "I am writing about the observing slot our group was given for Tuesday.",
            job: "Why I am writing",
            why: "One sentence, and the reader knows what the message is about before any detail arrives. Everything after this is support." },
          { text: "The dome was rebooked after Monday\u0027s session was clouded out, and the two bookings now overlap. We only found out this morning, when both groups arrived.",
            job: "What happened",
            why: "Facts, with nothing asked for yet. Mixing the request in here is the commonest fault, and it makes the reader hunt for what you want." },
          { text: "Rather than split the night, we would like to take the second half and let the other group start. Our targets rise after midnight, so the later slot suits us better in any case.",
            job: "What I propose",
            why: "A proposal with its reason attached. Note that it gives the other group the earlier slot \u2014 a proposal that costs the writer something is far harder to refuse." },
          { text: "Could you confirm that this is acceptable, and let us know by Monday afternoon so that both groups can plan?",
            job: "What I need from you",
            why: "One request, one deadline, one reason for the deadline, in one place. The reader knows exactly what to do and by when." }
        ],
        prompt: "The model, four paragraphs. Click each one and name its job \u2014 you should be able to, and if you cannot, the paragraph is doing two things at once.",
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
        concepts: ["claim"],
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

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence"],
        kind: "sequence", task: null, n: 0,
        prompt: "The four jobs of the model, plus the one that comes before writing anything. Put them in order.",
        note: { kind: "writer",
                body: "<p>Step one is not on the page, which is why it is the step people skip. A message written before the writer knows what they want usually asks for sympathy and gets it.</p>" },
        steps: [
          { text: "Work out what you want to happen next", pos: 1,
            why: "before a word is written. Everything else is arranged around this, and a message with no answer here cannot be fixed by better paragraphs." },
          { text: "Say why you are writing", pos: 2,
            why: "one sentence of orientation, so the reader knows which of their problems this is." },
          { text: "Say what happened", pos: 3,
            why: "the background, which the reader who already knows it can skip — and will." },
          { text: "Say what you propose", pos: 4,
            why: "your solution, kept separate from the problem so that it can be accepted or replaced on its own." },
          { text: "Say what you need, and by when", pos: 5,
            why: "last, in one place, with a date. This is the paragraph a busy reader is looking for." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
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

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word", "time"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. These are the sentences a proposal needs once the problem has been stated.",
        items: [
          { cue: "Propose, without demanding.", band: "B1",
            target: "Rather than split the night we would like to take the second half",
            extra: ["splitting", "will", "than"],
            why: "<i>Rather than</i> + bare infinitive, which sets the rejected option in front of the chosen one." },
          { cue: "Give a reason the reader can check.", band: "B2",
            target: "Our targets rise after midnight so the later slot suits us better",
            extra: ["rising", "because", "and"],
            why: "<i>So</i> joins a fact to a consequence. The fact is checkable, which is what makes the proposal easy to accept." },
          { cue: "Ask for a decision with a deadline.", band: "B2",
            target: "Could you let us know by Monday afternoon so that both groups can plan",
            extra: ["can", "knowing", "for"],
            why: "<i>So that</i> gives the reason for the deadline, which stops it reading as pressure." },
          { cue: "Report a change and its consequence.", band: "C1",
            target: "The dome was rebooked after Monday was clouded out and the two bookings now overlap",
            extra: ["has", "since", "booking"],
            why: "Two passives and an active in one sentence: the rebooking and the cloud are events, the overlap is the state they left behind." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "time"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from messages to an observatory office. One word in each is wrong. Click it, then type the correction.",
        items: [
          { text: "I am writing about the observing slot which was give to our group.",
            fixed: "I am writing about the observing slot which was given to our group.",
            wrong: "give", right: "given",
            why: "A passive takes the participle. <i>Give</i> is the bare form, and the missing <i>-n</i> is easy to lose in speech." },
          { text: "We would like take the second half of the night.",
            fixed: "We would like to take the second half of the night.",
            wrong: "like", right: "like to",
            why: "<i>Would like</i> needs <i>to</i>. Only <i>would rather</i> takes the bare form, which is what makes these two cross." },
          { text: "Could you confirm this and letting us know by Monday?",
            fixed: "Could you confirm this and let us know by Monday?",
            wrong: "letting", right: "let",
            why: "<i>Could you</i> governs both verbs, so the second one keeps the same bare form as the first." },
          { text: "Both groups was told that the dome was free.",
            fixed: "Both groups were told that the dome was free.",
            wrong: "was", right: "were",
            why: "<i>Both groups</i> is plural. The second <i>was</i> in the sentence is correct, which is what makes the first one hard to see." },
          { text: "We only find out this morning, when both groups arrived.",
            fixed: "We only found out this morning, when both groups arrived.",
            wrong: "find", right: "found",
            why: "<i>This morning</i> is finished and <i>arrived</i> is past, so the first verb has to move back with it." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "Have you ever ___?",

            why: "<i>Ever</i> between the auxiliary and the participle, in a question." },

          { frame: "I have already ___, and ___.",

            why: "<i>Already</i> in the same position, in a statement." },

          { frame: "One option would be to ___, though ___.",

            why: "Offer an option and name its weakness yourself. Far more persuasive than waiting for someone else to." },

        ],
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
        model: "<p>I think Priya has found the limit of Tomás's argument without quite saying so.</p><p>The record of uncrewed missions is overwhelming, but it is a record of one kind of task: travelling far, waiting long, and measuring steadily. Those are exactly the things machines are better at, so the evidence is not neutral between the two methods.</p><p>Where people have an advantage is judgement on the spot — noticing that a rock is odd and deciding to turn it over. Tomás is right about cost and risk. He is wrong that the question is closed, because it has only been tested where machines were always going to win.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "Have you ever ___?",

            why: "<i>Ever</i> between the auxiliary and the participle, in a question." },

          { frame: "I have already ___, and ___.",

            why: "<i>Already</i> in the same position, in a statement." },

          { frame: "One option would be to ___, though ___.",

            why: "Offer an option and name its weakness yourself. Far more persuasive than waiting for someone else to." },

        ],
        prompt: "A second question, about what a catalogue is a catalogue of.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates accept the same facts. They differ on whether a known bias is a problem or a solved problem, and a reply that re-states the facts has not engaged either of them.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "The early planet catalogues were dominated by large planets in short orbits, because those are the easiest to detect. Does a known bias of that kind undermine the catalogue, or is knowing about it enough?" },
          { who: "mei", when: "7 hours ago",
            text: "Knowing about it is enough. Every instrument has a selection function, and once you can write it down you can correct for it. That is ordinary science, not a flaw." },
          { who: "dan", when: "3 hours ago",
            text: "You can correct for the bias you know about. The early catalogues also shaped which questions people thought worth asking, and no correction reaches that." }
        ],
        checklist: [
          "My first paragraph says whether the bias undermines the catalogue.",
          "I used <i>sample</i>, <i>bias</i> or <i>catalogue</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about what can and cannot be corrected, not only about the data.",
          "I wrote 100 words or more."
        ],
        model: "<p>The catalogue stands, but Dan has identified a cost that Mei's answer does not reach.</p>" +
               "<p>Mei is right about the arithmetic. A selection function that can be written down can be divided out, and the corrected distribution is a real result rather than a guess. That part of the problem is solved in the ordinary way.</p>" +
               "<p>What is not solved is the part that happened before anyone wrote anything down. For a decade the textbook picture of a planetary system was built from the planets that happened to be easy to see, and the questions people took to the next instrument were shaped by that picture. You can correct a distribution. You cannot correct a question nobody asked.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
