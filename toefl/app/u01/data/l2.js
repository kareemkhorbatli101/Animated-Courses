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
        kind: "read-only", task: null, n: 0,
        prompt: "Read the model answer. It is a reply on a class discussion board.",
        note: { kind: "writer",
                body: "<p>Give each paragraph one main idea. Here: paragraph 1 states a position, paragraph 2 gives a reason from experience, paragraph 3 answers the strongest objection.</p>" },
        text: { every: 1, blocks: [{ lines: [
          "I think groups help most when they force you to explain something.",
          "Last term I joined a study group for statistics, and the first time I had to explain a formula aloud I found I could not finish the sentence. I had read it four times and still could not say it. That hour taught me more than the four readings had.",
          "Tomás is right that groups can carry passengers, and I have been in one of those too. But the fix is to make everyone explain something, not to study alone."
        ] }] },
        after: "<p>Three paragraphs, three jobs. That is the whole technique.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
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

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. These are the sentence shapes a discussion post needs.",
        items: [
          { cue: "State a position.", band: "A2",
            target: "I usually learn more when I study with other people",
            extra: ["because", "very"],
            why: "Simple sentence with a <i>when</i> clause." },
          { cue: "Give a reason and a result.", band: "B1",
            target: "I had read the formula four times but I could not explain it",
            extra: ["so", "although", "then"],
            why: "Compound, joined by <i>but</i>." },
          { cue: "Concede, then disagree.", band: "B2",
            target: "Although Tomás makes a fair point my experience has been different",
            extra: ["because", "however", "and"],
            why: "Complex, with a concessive <i>although</i> clause in front." },
          { cue: "Say what matters most.", band: "C1",
            target: "What I find most useful is having to explain an idea to someone else",
            extra: ["happy", "because", "very", "which"],
            why: "A cleft sentence: <i>What I find most useful is…</i> puts the key idea at the end." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
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
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
