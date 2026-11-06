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

            { id: "1c", section: 1, sectionTitle: "Review the real conditional", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "Real against unreal, and what <i>unless</i> is doing. Complete the rule.",
        heading: "Language connection: real, unreal, and unless",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Real</b> If the charge rises, demand falls. — a live possibility<br><b>Unreal</b> If the charge rose, demand would fall. — imagined, or contrary to fact<br><b>unless</b> = if not: <i>Unless the charge rises, nothing changes.</i><br><b>even if</b> concedes: <i>Even if the charge rises, nothing changes.</i></p>" },
        text: "A conditional about something that might really happen takes a ___ tense in the <i>if</i> clause. To mark the possibility as imagined we move that clause one step ___ , and the main clause takes <i>would</i>. The word <i>unless</i> means ___ . And <i>even if</i> says the result holds ___ the condition.",
        gaps: [
          { options: ["present", "past"], answer: "present",
            why: "<i>If the charge rises…</i> — present form, future meaning." },
          { options: ["back", "forward"], answer: "back",
            why: "<i>If the charge rose…</i> The past form is doing distance, not time." },
          { options: ["if not", "only if"], answer: "if not",
            why: "<i>Unless it rises</i> = <i>if it does not rise</i>. Note that it is not the same as <i>only if</i>." },
          { options: ["despite", "because of"], answer: "despite",
            why: "<i>Even if</i> concedes the condition and denies the usual consequence." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        from: "1a",
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

            { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them put the condition in a word other than <i>if</i>.",
        items: [
          { cue: "A condition stated as a negative.", band: "A2",
            target: "Unless the charge rises the traffic will not fall",
            extra: ["if", "would", "rises not"],
            why: "<i>Unless</i> already contains the negative, so the clause after it is positive." },
          { cue: "Concede the condition and deny the result.", band: "B1",
            target: "Even if the charge doubles some drivers will not change",
            extra: ["unless", "would", "doubled"],
            why: "<i>Even if</i> grants the condition and then refuses the expected consequence." },
          { cue: "An unreal conditional.", band: "B1",
            target: "If the revenue were returned to residents the poorest would gain",
            extra: ["is", "will", "unless"],
            why: "Past form for distance, <i>would</i> in the main clause. The revenue is not in fact returned." },
          { cue: "Two conditions at once.", band: "B2",
            target: "The scheme works only if the charge is high and the alternative is good",
            extra: ["unless", "will be", "would"],
            why: "<i>Only if</i> makes the condition necessary rather than merely sufficient, which is a stronger claim than <i>if</i>." },
          { cue: "A time clause with a deadline.", band: "B2",
            target: "As soon as the first figures appear the argument will start again",
            extra: ["will appear", "would", "until"],
            why: "<i>As soon as</i> + present, for a future point." },
          { cue: "A condition that would defeat the claim.", band: "C1",
            target: "If a comparable city without a charge shows the same fall the scheme deserves no credit",
            extra: ["would show", "unless", "will"],
            why: "Naming the evidence that would refute you, in a real conditional because it is a live possibility." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from essays. One word in each is wrong — a wrong word, not a wrong order. Click it, then type the correction.",
        items: [
          { text: "If the charge rise, demand would fall.",
            fixed: "If the charge rose, demand would fall.",
            wrong: "rise", right: "rose",
            why: "<i>Would</i> belongs in the main clause only. An unreal <i>if</i> clause takes the past form." },
          { text: "Unless the charge raises, nothing will change.",
            fixed: "Unless the charge rises, nothing will change.",
            wrong: "raises", right: "rises",
            why: "<i>Rise</i> happens by itself; <i>raise</i> needs somebody to do it to something. Here the charge has no object, so it rises." },
          { text: "As soon as the figures appears, the argument starts again.",
            fixed: "As soon as the figures appear, the argument starts again.",
            wrong: "appears", right: "appear",
            why: "<i>Figures</i> is plural, so no <i>-s</i> on the verb — the reverse of the mistake most writers expect to be making." },
          { text: "Even if the charge doubles, some drivers would not change.",
            fixed: "Even if the charge doubles, some drivers will not change.",
            wrong: "would", right: "will",
            why: "The <i>if</i> clause is in a present form, so the conditional is real, and a real conditional takes <i>will</i>." },
          { text: "The scheme works only when the alternative are good.",
            fixed: "The scheme works only when the alternative is good.",
            wrong: "are", right: "is",
            why: "<i>Alternative</i> is singular here. The plural <i>drivers</i> earlier in most drafts is what pulls a writer into this." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the adjective. Both use this unit's suffix.",
        items: [
          { text: "The m___ effect of the next pound is what the model estimates.", answer: "marginal", given: [0, 1, 2],
            why: "<i>margin + al</i>." },
          { text: "The failure was i___ rather than personal.", answer: "institutional", given: [0, 1, 2],
            why: "<i>institution + al</i>." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more adjectives, both built with this unit's suffix.",
        items: [
          { text: "The rise every December is s___ and must be removed before any trend is read.", answer: "seasonal", given: [0, 1],
            why: "<i>season + al</i>, and removing it is the first step in reading any monthly series." },
          { text: "A f___ cost is measured in money; the others in this unit are not.", answer: "financial", given: [0, 1],
            why: "<i>finance → financial</i>: the <i>e</i> goes and an <i>i</i> arrives." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a conjunction into each gap. Two in the bank are not used.",
        note: { kind: "writer",
                body: "<p>The choice is about what the reader already accepts. A given goes in front with <i>since</i>; the news goes at the end with <i>because</i>; a consequence you are drawing takes <i>so</i>.</p>" },
        extra: ["although", "therefore"],
        items: [
          { text: "___ the charge applies only on weekdays, the weekend figures are unaffected.", answer: "Since",
            why: "a given, placed in front where the reader can accept it and move on." },
          { text: "The weekday figures fell ___ driving into the zone became more expensive.", answer: "because",
            why: "the new information, placed at the end where the weight falls." },
          { text: "Fuel prices were flat all year, ___ the fall cannot be explained that way.", answer: "so",
            why: "a consequence the writer is drawing from the fact before it." },
          { text: "___ the charge rises, nothing will change.", answer: "Unless",
            why: "<i>if not</i>, in one word, with no negative anywhere after it." },
          { text: "___ the charge doubles, some drivers will not change.", answer: "Even if",
            why: "grants the condition and refuses the expected result." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write two real conditionals about your own week, one with the <i>if</i> clause first and one with it second. Mind the comma.</p>" } }
    ]
  };
})();
