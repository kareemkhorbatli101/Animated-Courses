/* Unit 1 · How We Learn — LESSON 2 · WRITING
   The book's five-step writing lesson, unchanged in shape.
   Unit 1's writing strategy: focusing on the main idea in different paragraphs. */
(function () {
  window.PAGE = {
    id: "u01-l2", unit: "u01", block: "l2", up: "../", tab: "ACADEMIC",
    objective: "Write a paragraph that gives each idea its own place",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read", "measurement"],
        kind: "annotate", task: null, n: 0,
        prompt: "A model answer from a class discussion board. Click each sentence and say what job it is doing \u2014 the three jobs are what you will reuse, not the words.",
        jobs: ["States a position", "Gives a reason from experience",
               "Concedes a point", "Answers the objection"],
        sentences: [
          { text: "I think groups help most when they force you to explain something.",
            job: "States a position",
            why: "It answers the question in one sentence, before any evidence. A reader knows where you stand by the end of the first line." },
          { text: "Last term I joined a study group for statistics, and the first time I had to explain a formula aloud I found I could not finish the sentence.",
            job: "Gives a reason from experience",
            why: "A specific thing that happened, with a date and a subject. That is what makes it evidence rather than assertion." },
          { text: "I had read it four times and still could not say it. That hour taught me more than the four readings had.",
            job: "Gives a reason from experience",
            why: "The same move, finished: the experience is only evidence once you say what it showed." },
          { text: "Tom\u00e1s is right that groups can carry passengers, and I have been in one of those too.",
            job: "Concedes a point",
            why: "It grants the strongest thing the other side has, by name. Conceding first is what makes the next sentence land." },
          { text: "But the fix is to make everyone explain something, not to study alone.",
            job: "Answers the objection",
            why: "It accepts the problem and refuses the conclusion drawn from it. That is the difference between conceding and agreeing." }
        ],
        note: { kind: "writer",
                body: "<p>Give each paragraph one main idea. Here: paragraph 1 states a position, paragraph 2 gives a reason from experience, paragraph 3 answers the strongest objection.</p>" },
        text: { every: 1, blocks: [{ lines: [
          "I think groups help most when they force you to explain something.",
          "Last term I joined a study group for statistics, and the first time I had to explain a formula aloud I found I could not finish the sentence. I had read it four times and still could not say it. That hour taught me more than the four readings had.",
          "Tomás is right that groups can carry passengers, and I have been in one of those too. But the fix is to make everyone explain something, not to study alone."
        ] }] },
        after: "<p>Three paragraphs, three jobs. That is the whole technique.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["claim"],
        carry: "1a",
        kind: "choice", task: "write-academic-discussion", cefr: "B2", n: 0,
        prompt: "Study the model. What does its third paragraph do that the first two do not?",
        options: [
          { text: "It answers a named classmate and still holds its position.", correct: true,
            why: "That is the move the top band rewards: engage someone by name, concede what is fair, then say why you still disagree." },
          { text: "It introduces a new example.",
            why: "The example is in paragraph 2. Paragraph 3 does something else." },
          { text: "It repeats the question.",
            why: "It never restates the question — which is exactly what a weaker answer does." }
        ] },


      { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "claim"],
        kind: "sequence", task: null, n: 0,
        prompt: "The strategy itself, in order. Put the five steps of a discussion reply on the right rung.",
        note: { kind: "writer",
                body: "<p>Most weak replies fail at step 2, not step 5. A post that begins before its writer has decided what to argue spends its first paragraph deciding, and the reader never gets a position.</p>" },
        steps: [
          { text: "Read the question and both classmates' posts", pos: 1,
            why: "you cannot answer someone by name before you know what they said." },
          { text: "Decide your position in one sentence", pos: 2,
            why: "if you cannot say it in one sentence you do not have it yet, and the first paragraph will wander." },
          { text: "Find one thing from your own experience", pos: 3,
            why: "the reason comes after the position, because it is chosen to support it." },
          { text: "Choose the classmate you have to answer", pos: 4,
            why: "pick the one whose point is strongest against you, not the one who agrees." },
          { text: "Check the paragraph breaks and the length", pos: 5,
            why: "last, and quickly. Checking first is how a draft never gets written." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word", "claim"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. These are the sentence shapes a discussion post needs.",
        items: [
          { cue: "State a position.", band: "A2",
            target: "I usually learn more when I study with other people",
            extra: ["because", "very"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done." },
            why: "Simple sentence with a <i>when</i> clause." },
          { cue: "Give a reason and a result.", band: "B1",
            target: "I had read the formula four times but I could not explain it",
            extra: ["so", "although", "then"], extraWhy: { "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "although": "<i>although</i> concedes before the main clause — and nothing in this sentence needs that done.", "then": "<i>then</i> marks the next step — and nothing in this sentence needs that done." },
            why: "Compound, joined by <i>but</i>." },
          { cue: "Concede, then disagree.", band: "B2",
            target: "Although Tomás makes a fair point my experience has been different",
            extra: ["because", "however", "and"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "however": "<i>however</i> contrasts with what came before — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "Complex, with a concessive <i>although</i> clause in front." },
          { cue: "Say what matters most.", band: "C1",
            target: "What I find most useful is having to explain an idea to someone else",
            extra: ["happy", "because", "very", "which"], extraWhy: { "happy": "Nothing in this sentence needs <i>happy</i>. A word you cannot name a job for is the spare one.", "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done.", "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done." },
            why: "A cleft sentence: <i>What I find most useful is…</i> puts the key idea at the end." }
        ] },


      { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more shapes. These are the ones a reply needs once it has to answer somebody.",
        items: [
          { cue: "Contrast what you did with what you got.", band: "B1",
            target: "My notes were full of colour but I could not say what the chapter argued",
            extra: ["so", "because", "then"], extraWhy: { "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done.", "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "then": "<i>then</i> marks the next step — and nothing in this sentence needs that done." },
            why: "Compound, joined by <i>but</i>. The contrast carries the point: effort on the left, nothing on the right." },
          { cue: "Report what a classmate said.", band: "B2",
            target: "Priya says explaining is the moment when a gap becomes visible",
            extra: ["which", "and", "very"], extraWhy: { "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done." },
            why: "Reported speech with <i>says</i> and no <i>that</i>, which is the commoner form in a discussion post." },
          { cue: "Set a condition.", band: "B2",
            target: "If everyone in the group has to explain something nobody can sit quietly",
            extra: ["although", "because", "so"], extraWhy: { "although": "<i>although</i> concedes before the main clause — and nothing in this sentence needs that done.", "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "so": "<i>so</i> introduces a result — and nothing in this sentence needs that done." },
            why: "A first conditional: <i>If</i> + present, then present. It proposes a rule rather than describing one." },
          { cue: "Compare two amounts of effort.", band: "C1",
            target: "Explaining the formula aloud taught me more than reading it four times had",
            extra: ["because", "very", "although", "which"], extraWhy: { "because": "<i>because</i> introduces a reason clause — and nothing in this sentence needs that done.", "very": "<i>very</i> intensifies an adjective or adverb — and nothing in this sentence needs that done.", "although": "<i>although</i> concedes before the main clause — and nothing in this sentence needs that done.", "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done." },
            why: "A gerund subject (<i>Explaining…</i>) with a comparative and an auxiliary at the end: <i>…than reading it four times had</i>." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct", "claim"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from real drafts. One word in each is wrong. Click it, then type the correction.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Every error here is one of this unit's three points: a past form where the sentence has a past time marker, a question form after <i>do</i>, or an adverb where the writer reached for an adjective.</p>" },
        items: [
          { text: "Last week she explain the formula to the whole group.",
            fixed: "Last week she explained the formula to the whole group.",
            wrong: "explain", right: "explained",
            why: "<i>Last week</i> fixes the time as past, so the verb must be past too." },
          { text: "She read the chapter four times and still cannot say what it argued.",
            fixed: "She read the chapter four times and still could not say what it argued.",
            wrong: "cannot", right: "could not",
            why: "The first verb is past, so the second has to move back with it." },
          { text: "The group worked quick and understood almost nothing.",
            fixed: "The group worked quickly and understood almost nothing.",
            wrong: "quick", right: "quickly",
            why: "<i>Worked</i> is a verb, so it takes an adverb. <i>Quick</i> can only describe a noun." },
          { text: "Do you explained it aloud before the exam?",
            fixed: "Do you explain it aloud before the exam?",
            wrong: "explained", right: "explain",
            why: "<i>Do</i> already carries the tense, so the main verb goes back to its base form." },
          { text: "Testing yourself feels bad but works good.",
            fixed: "Testing yourself feels bad but works well.",
            wrong: "good", right: "well",
            why: "<i>Works</i> is a verb. <i>Feels</i> takes <i>bad</i> because it is a linking verb; <i>works</i> is not." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "I ___ every ___, and I usually ___.",

            why: "Simple present for a habit of your own — the form Lesson 3 contrasts with the past." },

          { frame: "Last ___ I ___, and I found that ___.",

            why: "Simple past for one finished occasion, which is what turns a claim into evidence." },

          { frame: "___ is right that ___, but ___.",

            why: "Concede by name, then answer. The present tense keeps the concession a standing fact." },

        ],
        prompt: "Now write your own reply. The professor's question and both classmates stay on screen.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Some students say they learn more in a group than alone. Others say a group slows them down. Which is closer to your experience, and why?" },
          { who: "priya", when: "2 hours ago",
            text: "A group makes me explain things, and explaining is when I find out what I don't actually know." },
          { who: "tomas", when: "1 hour ago",
            text: "Every group I've been in had two people working and four watching. I get more done in an hour alone than in three with other people." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason from my own experience.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think a group helps most when it forces you to explain something out loud.</p><p>Last term I could not finish a sentence explaining a formula I had read four times. That hour taught me more than the readings had.</p><p>Tomás is right that groups carry passengers — I have been in one. But the answer is to make everyone explain something, not to work alone.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "I ___ every ___, and I usually ___.",

            why: "Simple present for a habit of your own — the form Lesson 3 contrasts with the past." },

          { frame: "Last ___ I ___, and I found that ___.",

            why: "Simple past for one finished occasion, which is what turns a claim into evidence." },

          { frame: "___ is right that ___, but ___.",

            why: "Concede by name, then answer. The present tense keeps the concession a standing fact." },

        ],
        prompt: "A different question, and two classmates who disagree about it. Same three jobs, three paragraphs.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>This prompt has a trap in it. Both classmates are describing what <i>they</i> do, and neither is describing what the recording <i>does</i>. A reply that only adds a third habit has not answered the question.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "Many universities now record every lecture and post it the same day. Some staff argue this teaches students that attending is optional. Does recording a lecture help learning or harm it?" },
          { who: "mei", when: "3 hours ago",
            text: "I rewatch the hard five minutes three or four times until it holds. I could never do that in the room." },
          { who: "dan", when: "40 minutes ago",
            text: "I stopped going to the Tuesday lecture in week three. The recording was always going to be there, so watching it was never urgent, and I never did." }
        ],
        checklist: [
          "My first paragraph says whether recording helps or harms, not both.",
          "My second paragraph gives one thing that actually happened to me.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I wrote about the recording, not only about my own habits.",
          "I wrote 100 words or more."
        ],
        model: "<p>Recording helps, but only for the students who were already going to attend.</p>" +
               "<p>I used the recordings of a statistics course to replay a two-minute derivation about eight times, and I understood it on the seventh. Nothing in the room would have let me do that, because the lecturer could not stop for me.</p>" +
               "<p>Dan is right that a recording removes the urgency, and I have lost a Tuesday the same way. But that is an argument about deadlines, not about recordings: the same student misses the same lecture when the slides go up instead.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
