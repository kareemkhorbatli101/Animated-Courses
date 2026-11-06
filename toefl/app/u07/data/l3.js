/* Unit 7 · Markets and Choices — LESSON 3 · GRAMMAR
   Real conditionals · questions with real conditionals · future time clauses. */
(function () {
  window.PAGE = {
    id: "u07-l3", unit: "u07", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Say what follows from what",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the real conditional", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two notes. Both describe the future, and neither uses <i>will</i> where you might expect it.",
        text: { every: 1, blocks: [
          { h: "The scheme as designed", lines: [
            "If the charge is set above five pounds, traffic will fall by about a fifth.",
            "If it is set below three, almost nothing happens."
          ] },
          { h: "The timetable", lines: [
            "When the scheme starts in April, the first figures will be published in June.",
            "We will not know whether it has worked until a full year has passed."
          ] }
        ] },
        after: "<p>Neither the <i>if</i> clause nor the <i>when</i> clause takes <i>will</i>. The future is carried by the main clause only, and English does not repeat it.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the real conditional", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: real conditionals and time clauses",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>If</b> + present, <b>will</b> + infinitive: <i>If you raise the price, demand will fall.</i><br><b>When / until / before / as soon as</b> + present, for the future: <i>When the scheme starts, we will see.</i><br>Comma only when the <i>if</i> or time clause comes first.</p>" },
        text: "In a real conditional the <i>if</i> clause takes the ___ tense, even though it is about the future. The main clause takes ___ . A clause beginning <i>when</i>, <i>until</i> or <i>as soon as</i> follows the ___ rule. We write a comma only when that clause comes ___ .",
        gaps: [
          { options: ["present", "future"], answer: "present", why: "<i>If you raise the price…</i>, not <i>if you will raise</i>." },
          { options: ["will", "would"], answer: "will", why: "<i>… demand will fall.</i> <i>Would</i> belongs to unreal conditionals." },
          { options: ["same", "opposite"], answer: "same", why: "<i>When the scheme starts</i>, not <i>when the scheme will start</i>." },
          { options: ["first", "second"], answer: "first", why: "<i>If you raise the price, demand will fall.</i> / <i>Demand will fall if you raise the price.</i>" }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A first conditional.", band: "A2",
            target: "If the price rises demand will fall",
            extra: ["would", "will rise"],
            why: "Present in the <i>if</i> clause; the future lives in the main clause only." },
          { cue: "A question with a real conditional.", band: "B1",
            target: "What will happen if the charge is set too low",
            extra: ["would", "will be"],
            why: "The question is in the main clause; the <i>if</i> clause stays present." },
          { cue: "A future time clause.", band: "B1",
            target: "When the scheme starts in April we will see the first figures",
            extra: ["will start", "would"],
            why: "<i>When</i> + present for the future." },
          { cue: "A negative time clause.", band: "B2",
            target: "We will not know whether it worked until a full year has passed",
            extra: ["will pass", "would"],
            why: "<i>Until</i> + present perfect, for a point that must be reached first." },
          { cue: "A reason the reader already accepts.", band: "B2",
            target: "Since the measure had become the target the number improved and the service did not",
            extra: ["because", "so"],
            why: "<i>Since</i> first, for a given." },
          { cue: "A reason that is the news.", band: "C1",
            target: "The scheme produced an absurd outcome because nobody specified how the result would be verified",
            extra: ["since", "therefore", "so"],
            why: "<i>Because</i> second, carrying the new information — and this is the article's whole thesis." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the adjective. Both use this unit's suffix.",
        items: [
          { text: "The m___ effect of the next pound is what the model estimates.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>." },
          { text: "The failure was i___ rather than personal.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write two real conditionals about your own week, one with the <i>if</i> clause first and one with it second. Mind the comma.</p>" } }
    ]
  };
})();
