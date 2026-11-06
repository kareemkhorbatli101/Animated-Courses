/* Unit 3 · Adaptation and Diversity — LESSON 3 · GRAMMAR
   Comparatives and superlatives. */
(function () {
  window.PAGE = {
    id: "u03-l3", unit: "u03", block: "l3", up: "../", tab: "ACADEMIC",
    objective: "Compare two things, and single one out",
    next: "l4.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Review comparison", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the two field notes. The comparisons in them follow a rule you can state.",
        text: { every: 1, blocks: [
          { h: "Before the drought", lines: [
            "Beaks on this island are slightly deeper than on the island to the north.",
            "The seeds here are smaller and softer than the ones we measured last year."
          ] },
          { h: "After", lines: [
            "The surviving birds have the deepest beaks we have recorded anywhere.",
            "Cracking these seeds is far more difficult than cracking last year's."
          ] }
        ] },
        after: "<p>Short adjectives take an ending. Long ones take a word in front. The dividing line is syllables.</p>" },

      { id: "1b", section: 1, sectionTitle: "Review comparison", letter: "B",
        kind: "cloze", task: null, n: 0,
        prompt: "Complete the rule in your own words.",
        heading: "Language connection: comparatives and superlatives",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>One syllable: deep → deep<b>er</b> → the deep<b>est</b><br>Two, ending in <i>-y</i>: heavy → heav<b>ier</b> → the heav<b>iest</b><br>Three or more: difficult → <b>more</b> difficult → the <b>most</b> difficult<br>Irregular: good → better → best · bad → worse → worst</p>" },
        text: "With a short adjective we add ___ to compare two things. With a long adjective we put ___ in front of it instead. To single one out from all the others we use ___ with a short adjective, and we never combine the two methods — ___ is wrong.",
        gaps: [
          { options: ["-er", "more"], answer: "-er", why: "<i>deeper</i>, not <i>more deep</i>." },
          { options: ["more", "-er"], answer: "more", why: "<i>more difficult</i>, not <i>difficulter</i>." },
          { options: ["the -est", "the most"], answer: "the -est", why: "<i>the deepest</i>." },
          { options: ["more deeper", "deeper"], answer: "more deeper",
            why: "A double comparative. Use one method or the other, never both." }
        ] },


      { id: "1c", section: 1, sectionTitle: "Review comparison", letter: "C",
        kind: "cloze", task: null, n: 0,
        prompt: "The shapes comparison takes once you are past <i>-er</i> and <i>more</i>. Complete the rule.",
        heading: "Language connection: equality, multiples and degree",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p><b>Equal</b> as deep as · <b>Not equal</b> not as deep as<br><b>Multiple</b> twice as heavy as · three times as long as<br><b>Measured</b> half a millimetre deeper<br><b>Changing together</b> the longer it lasted, the deeper they became</p>" },
        text: "To say two things are the same we put the adjective between ___ . To say one is twice the other we put the multiplier ___ that frame. To say exactly how much bigger, the measurement goes ___ the comparative. And to say that two things changed together, we use ___ in front of both comparatives.",
        gaps: [
          { options: ["as and as", "more and than"], answer: "as and as",
            why: "<i>as deep as</i>. The adjective keeps its plain form inside the frame." },
          { options: ["in front of", "after"], answer: "in front of",
            why: "<i>twice as heavy as</i>, not <i>as heavy twice as</i>." },
          { options: ["in front of", "after"], answer: "in front of",
            why: "<i>half a millimetre deeper</i>, not <i>deeper by half a millimetre</i> — though that is also possible, with <i>by</i>." },
          { options: ["the", "more"], answer: "the",
            why: "<i>The longer … the deeper …</i> Both comparatives take <i>the</i>, and there is no <i>than</i> anywhere in the sentence." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Build sentences", letter: "A",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Put the words in order.",
        items: [
          { cue: "Compare two islands.", band: "A2",
            target: "Beaks here are deeper than on the northern island",
            extra: ["more", "deepest"],
            why: "One syllable, so <i>-er</i>, and <i>than</i> introduces the second item." },
          { cue: "A superlative.", band: "A2",
            target: "These are the smallest seeds we have measured",
            extra: ["smaller", "most"],
            why: "<i>the smallest</i> — singling one out needs <i>the</i>." },
          { cue: "A long adjective.", band: "B1",
            target: "Cracking the hard seeds is more difficult for shallow beaks",
            extra: ["difficulter", "most"],
            why: "Three syllables, so <i>more</i> in front." },
          { cue: "An irregular form.", band: "B1",
            target: "The drought year was worse than any year before it",
            extra: ["badder", "worst"],
            why: "<i>bad → worse → worst</i>, and comparing two takes <i>worse</i>." },
          { cue: "Say two things are equal.", band: "B2",
            target: "The second island was not as dry as the first",
            extra: ["drier", "than", "more"],
            why: "<i>not as … as</i> for equality, with no comparative ending." },
          { cue: "A measured comparison.", band: "C1",
            target: "The average beak became about half a millimetre deeper within two years",
            extra: ["deepest", "more", "as"],
            why: "The measure phrase sits in front of the comparative." }
        ] },


      { id: "2b", section: 2, sectionTitle: "Build sentences", letter: "B",
        kind: "orderset", task: "build-a-sentence", cefr: "C1", n: 6,
        prompt: "Six more. Three of them compare without using a comparative at all.",
        items: [
          { cue: "Two things are the same.", band: "A2",
            target: "This beak is as deep as the one measured yesterday",
            extra: ["deeper", "than", "more"],
            why: "Inside the <i>as … as</i> frame the adjective stays in its plain form." },
          { cue: "A multiple.", band: "A2",
            target: "The hard seeds weigh three times as much as the soft ones",
            extra: ["more", "than", "heavier"],
            why: "The multiplier goes in front of the whole frame." },
          { cue: "A comparison with a measurement.", band: "B1",
            target: "Beak depth rose by half a millimetre in a single generation",
            extra: ["deeper", "more", "than"],
            why: "<i>Rise by</i> plus an amount. This is the other way to measure a change, alongside <i>half a millimetre deeper</i>." },
          { cue: "Rank three things.", band: "B1",
            target: "The northern island is wetter than this one but drier than the third",
            extra: ["wettest", "driest", "as"],
            why: "Two comparatives joined by <i>but</i>, which places the subject in the middle of three." },
          { cue: "A superlative with a limit.", band: "B2",
            target: "These are the deepest beaks recorded on any of the islands",
            extra: ["deeper", "more", "than"],
            why: "<i>Any of</i> states the group the superlative is drawn from, which a superlative always needs even when it is left unsaid." },
          { cue: "A comparison that denies a difference.", band: "C1",
            target: "The second drought was no worse than the first despite lasting longer",
            extra: ["not", "worst", "as"],
            why: "<i>No worse than</i> is stronger than <i>not worse than</i>: it says the difference is absent, not merely unproven." }
        ] },

      { id: "2c", section: 2, sectionTitle: "Build sentences", letter: "C",
        kind: "errorfix", task: null, n: 0,
        prompt: "Five sentences from lab reports. One word in each is wrong. Click it, then type the correction.",
        note: { kind: "gram", title: "Grammar Notes",
                body: "<p>Three of these are about countability, which this subject runs into constantly: <i>population</i> and <i>data</i> behave differently from <i>seeds</i> and <i>birds</i>.</p>" },
        items: [
          { text: "Their observe of the island ran for thirty years.",
            wrong: "observe", right: "observation",
            why: "After <i>their</i> the slot needs a noun. The verb cannot sit there however much the sentence means the activity." },
          { text: "Selection create nothing new; it chooses among what exists.",
            wrong: "create", right: "creates",
            why: "<i>Selection</i> is singular, and the second verb <i>chooses</i> in the same sentence shows what the first one should look like." },
          { text: "The population were counted every year without fail.",
            wrong: "were", right: "was",
            why: "<i>Population</i> is a single countable thing here. <i>Were</i> would mean the individuals, which is exactly the confusion this unit is trying to prevent." },
          { text: "An adaptation is a outcome, not an effort.",
            wrong: "a", right: "an",
            why: "<i>An</i> before a vowel sound. The sentence already does it correctly twice, which makes the slip easier to see." },
          { text: "There were less seeds on the ground after the drought.",
            wrong: "less", right: "fewer",
            why: "<i>Fewer</i> with things you can count, <i>less</i> with quantities you cannot: <i>fewer seeds</i>, <i>less rain</i>." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix, and both move the stress.",
        items: [
          { text: "The v___ in beak depth was there before the drought.", answer: "variation", given: [0, 1, 2],
            why: "<i>vary → variation</i>." },
          { text: "Their o___ ran for thirty years without a break.", answer: "observation", given: [0, 1, 2],
            why: "<i>observe → observation</i>, stress on the fourth syllable." }
        ] },

      { id: "3b", section: 3, sectionTitle: "Word building", letter: "B",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Two more. One takes <i>-tion</i> and one takes <i>-sion</i>.",
        items: [
          { text: "Their c___ rests on thirty years of continuous measurement.", answer: "conclusion", given: [0, 1],
            why: "<i>conclude → conclusion</i>: a verb ending in <i>-de</i> takes <i>-sion</i>." },
          { text: "A single g___ was long enough for the change to appear.", answer: "generation", given: [0, 1],
            why: "<i>generate → generation</i>, with the stress on the third syllable." }
        ] },

      { id: "3c", section: 3, sectionTitle: "Word building", letter: "C",
        kind: "wordbank", task: null, n: 0,
        prompt: "Drag a noun into each gap. The two words left in the bank are verbs, and no gap will take one.",
        extra: ["select", "observe"],
        items: [
          { text: "What we call ___ acts on differences that are already present.", answer: "selection",
            why: "after <i>call</i> the slot takes a noun." },
          { text: "The ___ in beak depth was measurable before the drought began.", answer: "variation",
            why: "after <i>the</i>, so a noun; and the sense is the spread, not one difference." },
          { text: "Their ___ of the island lasted three decades.", answer: "observation",
            why: "after a possessive, so a noun. <i>Their observe</i> is the error Lesson 3 corrected." },
          { text: "Regular ___ between the islands keeps the two populations mixed.", answer: "migration",
            why: "after an adjective, so a noun." },
          { text: "The ___ of the drought was eighteen months.", answer: "duration",
            why: "the only one of the five with no matching verb in modern English." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Compare two things you can see right now — once with a short adjective, once with a long one, once with <i>as … as</i>.</p>" } }
    ]
  };
})();
