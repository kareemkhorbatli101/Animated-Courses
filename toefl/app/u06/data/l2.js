/* Unit 6 · Food, Energy and the Body — LESSON 2 · WRITING
   The book's Unit 6 writing strategy: sequencing. */
(function () {
  window.PAGE = {
    id: "u06-l2", unit: "u06", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Put a process in order, and say so",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the model. It describes a sequence, and every stage is marked.",
        note: { kind: "writer",
                body: "<p>When you describe a process, mark the order explicitly: <i>first · once · at this point · only then · finally</i>. A reader should never have to work out which step comes before which.</p>" },
        text: { every: 1, blocks: [{ lines: [
          "<b>First</b>, the sample is warmed to thirty-seven degrees and held there for five minutes.",
          "<b>Once</b> it has reached temperature, the enzyme is added and the timer started.",
          "<b>At this point</b> the mixture should begin to clear; if it does not, the enzyme has been denatured and the run must be abandoned.",
          "<b>Only then</b>, with a visible change under way, is the first reading taken.",
          "<b>Finally</b>, readings are taken at one-minute intervals for ten minutes and plotted against time."
        ] }] },
        after: "<p>Notice that one stage carries a condition. A sequence that cannot fail is a recipe, not a method.</p>" },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence in the model does the most to protect the reader?",
        options: [
          { text: "The one beginning <i>At this point</i> — it says what should happen and what to do if it does not.", correct: true,
            why: "A method that only describes success leaves the reader stranded the first time something goes wrong. This is the sentence that anticipates that." },
          { text: "The one beginning <i>First</i> — it establishes the starting conditions.",
            why: "Necessary, but any method has one. It does not help a reader whose run is going wrong." },
          { text: "The one beginning <i>Finally</i> — it gives the measurement schedule.",
            why: "Useful detail, but it assumes everything before it worked." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. Watch where the object goes.",
        items: [
          { cue: "A separable phrasal verb with a noun object.", band: "A2",
            target: "Enzymes break the starch down into simple sugars",
            extra: ["downs", "over"],
            why: "Separable, so the noun may sit in the middle. <i>Break down the starch</i> is equally correct." },
          { cue: "The same verb with a pronoun.", band: "B1",
            target: "The enzyme breaks it down within minutes",
            extra: ["down it", "downs"],
            why: "With a pronoun the object <b>must</b> go in the middle. <i>Breaks down it</i> is not possible." },
          { cue: "An inseparable phrasal verb.", band: "B2",
            target: "We went over the method before we started",
            extra: ["the method over", "overs"],
            why: "<i>Go over</i> is inseparable: the object never splits it." },
          { cue: "A sequence with a condition.", band: "C1",
            target: "Once the sample has reached temperature the enzyme is added",
            extra: ["after that", "then", "when will"],
            why: "<i>Once</i> + present perfect marks a stage that must be complete before the next begins." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about how nutrition is communicated.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Food packaging gives a single calorie figure. Is that figure useful to the person reading it, or misleading? Give a reason." },
          { who: "priya", when: "4 hours ago",
            text: "Useful. It's imperfect but comparable — you can hold two packets side by side and learn something. Perfect information nobody understands is worth less than rough information everybody does." },
          { who: "tomas", when: "2 hours ago",
            text: "It measures heat released by burning food in a machine. That isn't what happens in a body, and printing it in bold suggests a precision that doesn't exist." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I gave a reason or an example.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think both are right about different things, and the disagreement is really about what a number on a packet is <i>for</i>.</p><p>Tomás is correct that the figure measures combustion in a calorimeter rather than metabolism in a person, and that two foods of equal calorific value can behave quite differently once eaten.</p><p>But Priya's point is about comparison, not accuracy. A consistently wrong measure can still rank things correctly, and ranking is what most people are doing in a supermarket. What I would change is not the number but the typography: printing it in bold implies a precision the method does not have.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
