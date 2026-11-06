/* Unit 9 · Cities and Movement — LESSON 2 · WRITING
   The book's Unit 9 writing strategy: the purpose of an introduction. */
(function () {
  window.PAGE = {
    id: "u09-l2", unit: "u09", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Write an introduction that earns the rest",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Two openings for the same essay. Read both.",
        note: { kind: "writer",
                body: "<p>An introduction has three jobs: say what question is being asked, say why it is not obvious, and say what the answer will be. A reader who finishes it should know whether to continue.</p>" },
        text: { every: 1, blocks: [
          { h: "Opening A", lines: [
            "Transport is a very important issue in modern cities. There are many different opinions about it. This essay will discuss the advantages and disadvantages of building more roads."
          ] },
          { h: "Opening B", lines: [
            "Widening a congested road usually fails to relieve the congestion, which seems to defy common sense until you notice that the traffic is not a fixed quantity. This essay argues that road capacity creates the demand it was built to meet, and that pricing is therefore the only instrument that changes a traveller's calculation."
          ] }
        ] },
        after: "<p>A says nothing a reader did not already know. B states the question, the surprise and the answer in three clauses.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "What is the single worst feature of Opening A?",
        options: [
          { text: "It announces that it will discuss something, instead of saying what it concludes.", correct: true,
            why: "<i>This essay will discuss the advantages and disadvantages</i> commits to nothing. A reader cannot disagree with it, which means there is nothing to read on for." },
          { text: "It is too short.",
            why: "Opening B is longer, but length is not the difference. A longer version of A would be no better." },
          { text: "It uses the phrase <i>modern cities</i>.",
            why: "Vague, certainly, but the structural problem is that the paragraph takes no position at all." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is time clauses and the <i>too / either</i> pair.",
        items: [
          { cue: "A time clause.", band: "A2",
            target: "After the road was widened the traffic returned within a year",
            extra: ["will", "before"],
            why: "<i>After</i> + past, for a completed sequence." },
          { cue: "Agree with a positive.", band: "B1",
            target: "The metro was crowded and the buses were too",
            extra: ["either", "neither"],
            why: "<i>Too</i> agrees with a positive statement." },
          { cue: "Agree with a negative.", band: "B1",
            target: "The bypass did not help and the widening did not either",
            extra: ["too", "also"],
            why: "<i>Either</i>, not <i>too</i>, after a negative." },
          { cue: "A contrast.", band: "C1",
            target: "The road was widened but the journey time did not fall",
            extra: ["and", "so", "because"],
            why: "<i>But</i> marks the result as contrary to expectation — which is the article's point." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how cities should respond to congestion.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "If widening roads reliably fails to reduce congestion, why do cities keep doing it? And what should they do instead?" },
          { who: "tomas", when: "4 hours ago",
            text: "Because building something is visible and pricing something is unpopular. A new lane can be opened by a politician; a charge just makes people angry at one." },
          { who: "priya", when: "2 hours ago",
            text: "That's too cynical. Charges are regressive unless you fix the alternatives first, and in most cities the alternatives are bad. Pricing a bad bus network just taxes the poor." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>Priya has identified the condition that makes Tomás's answer incomplete rather than wrong.</p><p>He is right that visibility explains the political preference: a lane opens, a charge merely exists. But her objection matters because a charge changes a traveller's calculation only if there is something to change to. Where the alternative is a bus every forty minutes, the charge does not shift the journey; it just makes it more expensive.</p><p>So I would sequence them. Build the alternative first and price afterwards — which is slower and less satisfying than either of their answers, and is probably why few cities do it.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
