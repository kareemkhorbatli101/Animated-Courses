/* Unit 11 · How Science Works — LESSON 3 · GRAMMAR
   The present passive · active and passive · the passive with by · be able to. */
(function () {
  window.PAGE = {
    id: "u11-l3", unit: "u11", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Put the method first and the people second",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review the passive", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two versions of the same method. One names the people; the other does not.",
        text: { every: 1, blocks: [
          { h: "Active", lines: [
            "We heated the samples to sixty degrees.",
            "Two of us measured the absorbance every minute."
          ] },
          { h: "Passive", lines: [
            "The samples were heated to sixty degrees.",
            "Absorbance was measured every minute.",
            "The analysis was carried out by an independent team."
          ] }
        ] },
        after: "<p>The last line keeps its agent, and should. Who did the analysis is the whole point of that sentence.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review the passive", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: the passive and be able to",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Passive:</b> be + past participle — <i>is heated · was measured · has been repeated</i><br><b>With an agent:</b> add <i>by</i> — but only when the agent matters.<br><b>be able to</b> works in every tense; <i>can</i> has no infinitive or perfect form: <i>has been able to</i>, not <i>has could</i>.</p>" },
        text: "The passive is formed with ___ plus the past participle. We add the agent with ___ , and we normally do so only when the agent ___ . Where <i>can</i> has no form available, we use ___ instead.",
        gaps: [
          { options: ["be", "have"], answer: "be", why: "<i>is heated</i>, <i>was measured</i>." },
          { options: ["by", "with"], answer: "by", why: "<i>carried out by an independent team</i>." },
          { options: ["matters", "is known"], answer: "matters",
            why: "In a methods section it usually does not, which is why the passive belongs there." },
          { options: ["be able to", "could"], answer: "be able to",
            why: "<i>has been able to</i> — <i>has could</i> does not exist." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "A present passive.", band: "A2",
            target: "The samples are heated to sixty degrees",
            extra: ["heat", "heating"],
            why: "<i>are</i> + past participle." },
          { cue: "A past passive.", band: "B1",
            target: "Absorbance was measured every minute for an hour",
            extra: ["measure", "measuring"],
            why: "<i>was</i> + past participle; no agent, because none is needed." },
          { cue: "The passive with an agent that matters.", band: "B2",
            target: "The analysis was carried out by an independent team",
            extra: ["carrying", "with"],
            why: "<i>by</i> + agent, because independence is the point of the sentence." },
          { cue: "A present perfect passive.", band: "B2",
            target: "The experiment has been repeated by three other groups",
            extra: ["was", "repeating"],
            why: "<i>has been</i> + past participle." },
          { cue: "<i>Be able to</i> in the past.", band: "B2",
            target: "The second team was not able to reproduce the effect",
            extra: ["could not able", "can"],
            why: "<i>was able to</i> — and <i>could not</i> would also work here, but not after <i>has</i>." },
          { cue: "<i>Be able to</i> where <i>can</i> has no form.", band: "C1",
            target: "No group has been able to reproduce the original finding",
            extra: ["could", "can", "was"],
            why: "<i>has been able to</i>. <i>Has could</i> does not exist — this is the reason the form is taught." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix.",
        items: [
          { text: "Every m___ carries an uncertainty, whether or not it is printed.", answer: "measurement", given: [0, 1, 2],
            why: "<i>measure → measurement</i>." },
          { text: "No i___ is finer than its calibration.", answer: "instrument", given: [0, 1, 2],
            why: "<i>Instrument</i> — not derived from a modern verb." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write three sentences of a method in the passive, then say for each whether naming the agent would add anything.</p>" } }
    ]
  };
})();
