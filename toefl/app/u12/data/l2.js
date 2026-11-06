/* Unit 12 · Art, Audience and Culture — LESSON 2 · WRITING
   The book's Unit 12 writing strategy: providing examples and details. */
(function () {
  window.PAGE = {
    id: "u12-l2", unit: "u12", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Support a claim with something checkable",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        concepts: ["read", "claim"],
        kind: "annotate", task: null, n: 0,
        jobs: ["An assertion \u2014 nothing a reader could check",
               "An observation \u2014 something a reader could verify by watching",
               "An interpretation \u2014 a claim built on what was shown"],
        sentences: [
          { group: "Without detail",
            text: "The film is very unconventional and challenges the audience in many ways.",
            job: "An assertion \u2014 nothing a reader could check",
            why: "<i>Unconventional</i>, <i>challenges</i>, <i>many ways</i> \u2014 three claims and no way to test any of them. The reader is asked to believe rather than to look." },
          { group: "Without detail",
            text: "It does not follow the usual rules of its genre, which makes it a very interesting and thought-provoking work.",
            job: "An assertion \u2014 nothing a reader could check",
            why: "Which rules, and where? <i>Interesting</i> and <i>thought-provoking</i> describe the writer\u0027s experience, not the film." },
          { group: "With detail",
            text: "The film withholds the confrontation its genre promises.",
            job: "An interpretation \u2014 a claim built on what was shown",
            why: "A real claim, and the sentences after it are the evidence. Put first, it tells the reader what the detail is for." },
          { group: "With detail",
            text: "The two brothers are in the same room three times, and on each occasion the camera stays with the one who is not speaking.",
            job: "An observation \u2014 something a reader could verify by watching",
            why: "Countable and checkable: three occasions, one camera decision. Anyone who disagrees can go and disagree with the film." },
          { group: "With detail",
            text: "The scene the whole structure has been building towards never arrives, and the final shot is of an empty corridor.",
            job: "An observation \u2014 something a reader could verify by watching",
            why: "The empty corridor is simply there on the screen. An example is not decoration: it is the part of the argument a reader can check." }
        ],
        prompt: "Two versions of the same paragraph. One asserts; the other shows. Click each sentence and say whether a reader could check it.",
        note: { kind: "writer",
                body: "<p>An example is not decoration. It is the part of your argument a reader can check, and a paragraph with none asks to be believed rather than read.</p>" },
        text: { every: 1, blocks: [
          { h: "Without detail", lines: [
            "The film is very unconventional and challenges the audience in many ways. It does not follow the usual rules of its genre, which makes it a very interesting and thought-provoking work."
          ] },
          { h: "With detail", lines: [
            "The film withholds the confrontation its genre promises. The two brothers are in the same room three times, and on each occasion the camera stays with the one who is not speaking. The scene the whole structure has been building towards never arrives, and the final shot is of an empty corridor."
          ] }
        ] },
        after: "<p>The second version makes three claims a reader could verify by watching. The first makes none.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        concepts: ["claim"],
        kind: "choice", task: null, n: 0,
        prompt: "What exactly is wrong with the first version?",
        options: [
          { text: "Every one of its claims is an evaluation, so none of them can be checked.", correct: true,
            why: "<i>Unconventional</i>, <i>challenges</i>, <i>interesting</i>, <i>thought-provoking</i> are all judgments. A reader who disagreed would have nothing to disagree <i>with</i>." },
          { text: "It is too short.",
            why: "It is nearly as long. Length is not the difference — a longer version of it would be no better." },
          { text: "It uses the word <i>film</i> twice.",
            why: "Repetition is a style point. The structural problem is that nothing in it is checkable." }
        ] },

            { id: "1c", section: 1, sectionTitle: "Prepare to write", letter: "C",
        concepts: ["sequence", "claim"],
        kind: "sequence", task: null, n: 0,
        prompt: "Turning an assertion into something a reader can check has an order. Put the five steps on the right rungs.",
        note: { kind: "writer",
                body: "<p>The order matters because step two is where most paragraphs fail. A writer who moves from the claim straight to the next claim has written a position; a writer who stops to supply the detail has written an argument.</p>" },
        steps: [
          { text: "State the claim in one sentence", pos: 1,
            why: "so the reader knows what the detail is going to be evidence for." },
          { text: "Give the detail anybody could check", pos: 2,
            why: "the four silent minutes, the camera position, the date. This is the step that gets skipped." },
          { text: "Say what the detail shows", pos: 3,
            why: "the join between the two, and the sentence a careless essay leaves to the reader." },
          { text: "Name the best objection", pos: 4,
            why: "before the reader thinks of it, which is the only time naming it helps you." },
          { text: "Say what would count against you", pos: 5,
            why: "last, and it is what turns a reading into an argument somebody could answer." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        concepts: ["word"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the verb pattern: infinitive, gerund, or either.",
        items: [
          { cue: "A verb taking an infinitive.", band: "B1",
            target: "The director chose to end the film in silence",
            extra: ["ending", "end"], extraWhy: { "ending": "Nothing in this sentence needs <i>ending</i>. A word you cannot name a job for is the spare one.", "end": "Nothing in this sentence needs <i>end</i>. A word you cannot name a job for is the spare one." },
            why: "<i>Choose</i> takes <i>to</i> + infinitive." },
          { cue: "A verb taking a gerund.", band: "B1",
            target: "Audiences enjoy watching a story they already know",
            extra: ["to watch", "watch"], extraWhy: { "to watch": "Nothing in this sentence needs <i>to watch</i>. A word you cannot name a job for is the spare one.", "watch": "The sentence uses <b>watching</b>. <i>watch</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Enjoy</i> is always followed by <i>-ing</i>." },
          { cue: "A verb taking either, with no change of meaning.", band: "B2",
            target: "Critics began to notice the pattern only later",
            extra: ["noticing was", "noticed"], extraWhy: { "noticing was": "The sentence uses <b>notice</b>. <i>noticing was</i> is the same word in another form, and only one of them fits this slot.", "noticed": "The sentence uses <b>notice</b>. <i>noticed</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Begin</i> takes either form here; <i>began noticing</i> would be equally correct." },
          { cue: "A verb taking either, with a change of meaning.", band: "C1",
            target: "He remembered seeing the film but forgot to mention it",
            extra: ["to see", "mentioning"], extraWhy: { "to see": "Nothing in this sentence needs <i>to see</i>. A word you cannot name a job for is the spare one.", "mentioning": "The sentence uses <b>mention</b>. <i>mentioning</i> is the same word in another form, and only one of them fits this slot." },
            why: "<i>Remember seeing</i> = the memory of the event; <i>forget to mention</i> = the mention never happened." }
        ] },

            { id: "2b", section: 2, sectionTitle: "Build the sentences", letter: "B",
        concepts: ["word", "claim"],
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Four more. Two of them attach a detail to a claim, which is this unit's whole writing lesson.",
        items: [
          { cue: "A verb that insists on a gerund.", band: "B1",
            target: "The editor suggested cutting the final scene altogether",
            extra: ["to cut", "cut"], extraWhy: { "to cut": "Nothing in this sentence needs <i>to cut</i>. A word you cannot name a job for is the spare one.", "cut": "Nothing in this sentence needs <i>cut</i>. A word you cannot name a job for is the spare one." },
            why: "<i>Suggest</i> never takes an infinitive, whatever the meaning seems to invite." },
          { cue: "Attach the checkable detail.", band: "B2",
            target: "The ending runs for four minutes without a word of dialogue",
            extra: ["running", "which", "and"], extraWhy: { "running": "Nothing in this sentence needs <i>running</i>. A word you cannot name a job for is the spare one.", "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "A plain declarative with a number in it. Nothing here is a judgement, which is what makes it evidence." },
          { cue: "Say what the detail shows.", band: "B2",
            target: "That silence is what leaves the ending unresolved",
            extra: ["which", "being", "and"], extraWhy: { "which": "<i>which</i> opens a relative clause — and nothing in this sentence needs that done.", "being": "<i>being</i> is the <i>-ing</i> form of <i>be</i> — and nothing in this sentence needs that done.", "and": "<i>and</i> joins two things of the same kind — and nothing in this sentence needs that done." },
            why: "A cleft sentence, putting the silence in the position of a cause." },
          { cue: "Name what would count against you.", band: "C1",
            target: "If the novel ends the same way the adaptation deserves no credit for it",
            extra: ["would", "will end", "although"], extraWhy: { "would": "<i>would</i> marks a hypothetical or a polite request — and nothing in this sentence needs that done.", "will end": "Nothing in this sentence needs <i>will end</i>. A word you cannot name a job for is the spare one.", "although": "<i>although</i> concedes before the main clause — and nothing in this sentence needs that done." },
            why: "A real conditional naming the evidence that would defeat the claim — Unit 7's construction, used here on an argument about art." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build the sentences", letter: "C",
        concepts: ["correct"],
        kind: "errorfix", task: null, n: 0,
        prompt: "Five lines from essays about film. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "The editor suggested cut the final scene.",
            fixed: "The editor suggested cutting the final scene.",
            wrong: "cut", right: "cutting",
            why: "<i>Suggest</i> takes a gerund, so the bare verb cannot stand there." },
          { text: "Audiences enjoy watch a story they already know.",
            fixed: "Audiences enjoy watching a story they already know.",
            wrong: "watch", right: "watching",
            why: "<i>Enjoy</i> also takes a gerund, and for the same reason: there is no rule, only the verb." },
          { text: "The director chose ending the film in silence.",
            fixed: "The director chose to end the film in silence.",
            wrong: "ending", right: "to end",
            why: "<i>Choose</i> takes an infinitive, which is the opposite pattern from the two above it." },
          { text: "Its lost its ending somewhere in the second act.",
            fixed: "It's lost its ending somewhere in the second act.",
            wrong: "Its", right: "It's",
            why: "<i>It's</i> is <i>it has</i> here. The second <i>its</i> in the sentence is correct, which is what makes the first one hard to see." },
          { text: "The critic who's review you read disagreed.",
            fixed: "The critic whose review you read disagreed.",
            wrong: "who's", right: "whose",
            why: "<i>Who's</i> is <i>who is</i>. Possession takes <i>whose</i>, with no apostrophe — the same rule as <i>its</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ decided to ___.",

            why: "<i>Decide</i> takes the infinitive only. <i>Decided leaving</i> is not English." },

          { frame: "___ avoided ___ing ___.",

            why: "<i>Avoid</i> takes the gerund only, and no meaning rule explains why." },

          { frame: "The ___ is ___, and on each occasion ___.",

            why: "A checkable observation: countable, and verifiable by going back to the work." },

        ],
        prompt: "A discussion question about what an audience contributes.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Does an audience complete the meaning of a work, or merely receive it? Defend your answer with an example." },
          { who: "priya", when: "4 hours ago",
            text: "Completes it. A joke that nobody laughs at has not happened. Meaning isn't stored in the object; it occurs between the object and whoever is in front of it." },
          { who: "tomas", when: "2 hours ago",
            text: "That proves too much. If every audience completes a different work, we can't disagree about a film — we'd each be describing something else. There has to be one thing we're arguing about." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a <b>specific, checkable</b> example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>Tomás has found the place where Priya's argument proves too much, and the way out is to separate two claims she is running together.</p><p>The weak claim is that a work's <i>effect</i> depends on its audience. That is plainly true: a film watched by someone who knows nothing of its tradition is a different experience from the same film watched by a critic.</p><p>The strong claim is that it is therefore a different <i>work</i>. That cannot be right, because as Tomás says we could then never disagree about one. When two people argue about an ending, they are arguing about the same sequence of shots — which is exactly what makes the disagreement possible.</p>" },

      { id: "4a", section: 4, sectionTitle: "Write a second reply", letter: "A",
        concepts: ["write"],
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,

        frames: [

          { frame: "___ decided to ___.",

            why: "<i>Decide</i> takes the infinitive only. <i>Decided leaving</i> is not English." },

          { frame: "___ avoided ___ing ___.",

            why: "<i>Avoid</i> takes the gerund only, and no meaning rule explains why." },

          { frame: "The ___ is ___, and on each occasion ___.",

            why: "A checkable observation: countable, and verifiable by going back to the work." },

        ],
        prompt: "A second question, about what a label should say.",
        minWords: 100,
        note: { kind: "writer",
                body: "<p>Both classmates are arguing about the same small card, and they mean different things by <i>let the work speak</i>. Naming that is a stronger reply than taking a side.</p>" },
        posts: [
          { who: "haddad", role: "prof",
            text: "A gallery label has room for about forty words. Some galleries give only title, date and medium; others use the space to tell you how to look at the work. Which serves the visitor better?" },
          { who: "mei", when: "4 hours ago",
            text: "Title, date and medium. A label that tells you what to see decides your reaction before you have had one, and you cannot unread it." },
          { who: "dan", when: "2 hours ago",
            text: "Nothing on a wall is neutral. The bare label is also a choice, and it quietly favours visitors who already have the context the sparse version assumes." }
        ],
        checklist: [
          "My first paragraph says which kind of label serves the visitor better.",
          "I used <i>convention</i>, <i>reception</i> or <i>interpretation</i> accurately.",
          "I answered Mei or Dan <b>by name</b> and conceded something fair.",
          "I gave at least one detail somebody could check.",
          "I wrote 100 words or more."
        ],
        model: "<p>The fuller label, with the interpretation marked as one.</p>" +
               "<p>Mei is right about the cost, and it is a real one: a sentence telling you the figure is turning away arrives before you have looked, and you cannot look again for the first time. But Dan has identified what the bare label hides. A card reading <i>Oil on canvas, 1887</i> is perfectly informative to somebody who already knows what that meant in 1887, and tells everybody else nothing at all.</p>" +
               "<p>What I would change is the grammar rather than the length. <i>The figure is turning away</i> and <i>critics have read the turned figure as a refusal</i> take almost the same number of words, and only the second lets the visitor disagree.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } },
    ]
  };
})();
