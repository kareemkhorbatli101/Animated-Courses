/* Unit 6 · Food, Energy and the Body — LESSON 3 · GRAMMAR
   Separable and inseparable phrasal verbs · possessive pronouns. */
(function () {
  window.PAGE = {
    id: "u06-l3", unit: "u06", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Put the object where it belongs",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review phrasal verbs", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two lab notes. Each contains one phrasal verb used correctly and shows where the object can sit.",
        text: { every: 1, blocks: [
          { h: "Bench A", lines: [
            "We warmed the sample up and left it for five minutes.",
            "Then we warmed it up again, because the bath had drifted.",
            "Our readings are in the blue book; theirs are in the green one."
          ] },
          { h: "Bench B", lines: [
            "We went over the method twice before we started.",
            "The demonstrator looked after the second water bath herself.",
            "That tray is ours. The one by the window is yours."
          ] }
        ] },
        after: "<p>Bench A splits its verbs. Bench B cannot — and the difference is not a matter of style.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review phrasal verbs", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: separable, inseparable, and possessives",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Separable:</b> warm it up · break it down · use it up · carry it out<br><b>Inseparable:</b> go over it · look after it · get over it<br><b>Possessive pronouns:</b> mine · yours · his · hers · ours · theirs — no noun follows, and no apostrophe.</p>" },
        text: "With a separable phrasal verb and a <b>pronoun</b> object, the pronoun must go ___ the verb and the particle. With an inseparable verb the object always goes ___ the whole verb. A possessive pronoun such as <i>ours</i> or <i>theirs</i> is followed by ___ , and it never takes ___ .",
        gaps: [
          { options: ["between", "after"], answer: "between", why: "<i>warm it up</i>, never <i>warm up it</i>." },
          { options: ["after", "between"], answer: "after", why: "<i>went over the method</i>, never <i>went the method over</i>." },
          { options: ["no noun", "a noun"], answer: "no noun",
            why: "<i>That tray is ours.</i> — <i>ours tray</i> is not possible." },
          { options: ["an apostrophe", "a capital letter"], answer: "an apostrophe",
            why: "<i>theirs</i>, not <i>their's</i>. <i>It's</i> is always <i>it is</i>." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "Separable, with a noun.", band: "A2",
            target: "We warmed the sample up for five minutes",
            extra: ["ups", "over"],
            why: "Separable, so the noun may sit in the middle." },
          { cue: "Separable, with a pronoun.", band: "B1",
            target: "The enzyme breaks it down almost immediately",
            extra: ["down it", "downs"],
            why: "A pronoun object must split the verb." },
          { cue: "Inseparable.", band: "B1",
            target: "We went over the method before the session",
            extra: ["the method over", "overs"],
            why: "<i>Go over</i> never splits." },
          { cue: "A possessive pronoun.", band: "B2",
            target: "Those readings are ours and the others are theirs",
            extra: ["our", "their's", "theirs'"],
            why: "<i>Ours</i> and <i>theirs</i>: no noun after, no apostrophe." },
          { cue: "Two phrasal verbs in sequence.", band: "B2",
            target: "The cell takes the glucose in and uses it up within hours",
            extra: ["up it", "ins"],
            why: "<i>Takes … in</i> split by a noun; <i>uses it up</i> split by a pronoun, because it must be." },
          { cue: "A process sentence.", band: "C1",
            target: "Once the bath has reached temperature the demonstrator carries the assay out",
            extra: ["out the assay", "carry"],
            why: "<i>Once</i> + present perfect for the condition, and <i>carry out</i> split by its noun object." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the single-word verb academic writing would prefer here.",
        items: [
          { text: "In the write-up, say the liver c___ glucose rather than <i>turns it into</i>.", answer: "converts", given: [0, 1, 2],
            why: "<i>Convert</i> is the written register; <i>turn into</i> is the spoken one." },
          { text: "Say the gut a___ nutrients rather than <i>takes them in</i>.", answer: "absorbs", given: [0, 1, 2],
            why: "<i>Absorb</i> for <i>take in</i>." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Write three sentences about an object near you using <i>mine</i>, <i>yours</i> and <i>theirs</i> — with no noun after any of them.</p>" } }
    ]
  };
})();
