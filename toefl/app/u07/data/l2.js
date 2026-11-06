/* Unit 7 · Markets and Choices — LESSON 2 · WRITING
   The book's Unit 7 writing strategy: using because and since. */
(function () {
  window.PAGE = {
    id: "u07-l2", unit: "u07", block: "l2", up: "../", tab: "NAVIGATIONAL",
    objective: "Join a claim to its reason",
    next: "l3.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Prepare to write", letter: "A",
        kind: "cloze", task: null, n: 0,
        prompt: "<i>Because</i> and <i>since</i> both give reasons, but they are not interchangeable. Complete the rule.",
        heading: "Language connection: because and since",
        note: { kind: "writer",
                body: "<p><b>because</b> introduces the reason the reader does not yet know — it carries the new information, so it usually goes second.<br><b>since</b> introduces a reason the reader already accepts — it usually goes first, as a given.<br><i>Since the office closes at one, come early.</i> (you knew)<br><i>Come early, because the office closes at one.</i> (you did not)</p>" },
        text: "We use ___ when the reason is the new part of the sentence, and it normally comes after the claim. We use ___ when the reason is something the reader already knows, and it normally comes first. <i>Since</i> also has a second, unrelated meaning: a point in ___ .",
        gaps: [
          { options: ["because", "since"], answer: "because", why: "<i>Come early, because the office closes at one.</i>" },
          { options: ["since", "because"], answer: "since", why: "<i>Since the office closes at one, come early.</i>" },
          { options: ["time", "money"], answer: "time",
            why: "<i>since 1976</i> — Unit 4's use. Context separates them with no difficulty." }
        ] },

      { id: "1b", section: 1, sectionTitle: "Prepare to write", letter: "B",
        kind: "choice", task: null, n: 0,
        prompt: "Which sentence puts the reason where the reader needs it?",
        options: [
          { text: "The scheme failed because the price was set too low.", correct: true,
            why: "The failure is known; the cause is the new information, so it goes second with <i>because</i>." },
          { text: "Because the scheme failed, the price was set too low.",
            why: "Reverses cause and effect — the price was set first." },
          { text: "Since the price was set too low, the scheme failed, because the price was too low.",
            why: "Gives the same reason twice, once as given and once as news." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build the sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 4,
        prompt: "Put the words in order. This unit's grammar is the real conditional.",
        items: [
          { cue: "A first conditional.", band: "A2",
            target: "If you raise the price demand will fall",
            extra: ["would", "raised"],
            why: "Present in the <i>if</i> clause, <i>will</i> in the main clause." },
          { cue: "The same, with the clauses reversed.", band: "B1",
            target: "Demand will fall if you raise the price",
            extra: ["would", "raised"],
            why: "No comma when the <i>if</i> clause comes second." },
          { cue: "A reason the reader already accepts.", band: "B2",
            target: "Since the charge was set too low the traffic did not fall",
            extra: ["because", "so"],
            why: "<i>Since</i> first, for a given." },
          { cue: "A reason that is the new information.", band: "C1",
            target: "The scheme produced an absurd result because the measure had become the target",
            extra: ["since", "so", "therefore"],
            why: "<i>Because</i> second, carrying the news." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Write and check", letter: "A",
        kind: "discussion", task: "write-academic-discussion", cefr: "C1", n: 1,
        prompt: "A discussion question about measuring performance.",
        minWords: 100,
        posts: [
          { who: "haddad", role: "prof",
            text: "Organisations are routinely judged on a small number of published measures. Does that improve them, or distort them? Give a reason." },
          { who: "tomas", when: "5 hours ago",
            text: "It improves them. Before measurement you had nothing but assertion. A flawed measure you can argue with beats a feeling you can't." },
          { who: "priya", when: "3 hours ago",
            text: "It distorts them, and the distortion is predictable. Measure waiting times and you get shorter recorded waits, which is not the same as shorter waits." }
        ],
        checklist: [
          "I stated my position in the first paragraph.",
          "I used <i>because</i> or <i>since</i> to join a claim to its reason.",
          "I answered Priya or Tomás <b>by name</b>.",
          "I wrote 100 words or more."
        ],
        model: "<p>I think Priya describes the mechanism correctly, but Tomás is right that the alternative is worse.</p><p>Measurement does distort, because people respond to the measure as they understand it rather than to the thing it stands for. Once waiting time is the target, the cheapest route to a good number is to change when the clock starts.</p><p>But the answer is not to stop measuring, since the pre-measurement world was not neutral — it simply left the judgement with whoever spoke most confidently. The answer is to specify how a claimed result will be verified, which is the part schemes designed in a hurry always leave out.</p>",
        closer: { kind: "test", body: "<p>After this writing lesson, I can… / I need more help with…</p>" } }
    ]
  };
})();
