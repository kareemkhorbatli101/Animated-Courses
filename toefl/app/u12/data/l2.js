/* Unit 12 · Art, Audience and Culture — LESSON 2 · WRITING
   The book's Unit 12 writing strategy: providing examples and details. */
(function () {
  window.PAGE = {
    id: "u12-l2", unit: "u12", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Support a claim with something checkable",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Two versions of the same paragraph. One asserts; the other shows.",
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

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the verb pattern: infinitive, gerund, or either.",
        items: [
          { cue: "A verb taking an infinitive.", band: "B1",
            target: "The director chose to end the film in silence",
            extra: ["ending", "end"],
            why: "<i>Choose</i> takes <i>to</i> + infinitive." },
          { cue: "A verb taking a gerund.", band: "B1",
            target: "Audiences enjoy watching a story they already know",
            extra: ["to watch", "watch"],
            why: "<i>Enjoy</i> is always followed by <i>-ing</i>." },
          { cue: "A verb taking either, with no change of meaning.", band: "B2",
            target: "Critics began to notice the pattern only later",
            extra: ["noticing was", "noticed"],
            why: "<i>Begin</i> takes either form here; <i>began noticing</i> would be equally correct." },
          { cue: "A verb taking either, with a change of meaning.", band: "C1",
            target: "He remembered seeing the film but forgot to mention it",
            extra: ["to see", "mentioning"],
            why: "<i>Remember seeing</i> = the memory of the event; <i>forget to mention</i> = the mention never happened." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
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
        model: "<p>Tomás has found the place where Priya's argument proves too much, and the way out is to separate two claims she is running together.</p><p>The weak claim is that a work's <i>effect</i> depends on its audience. That is plainly true: a film watched by someone who knows nothing of its tradition is a different experience from the same film watched by a critic.</p><p>The strong claim is that it is therefore a different <i>work</i>. That cannot be right, because as Tomás says we could then never disagree about one. When two people argue about an ending, they are arguing about the same sequence of shots — which is exactly what makes the disagreement possible.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
