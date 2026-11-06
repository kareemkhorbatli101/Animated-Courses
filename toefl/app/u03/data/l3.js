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

      { id: "3a", section: 3, sectionTitle: "Word building", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 2,
        prompt: "Complete the noun. Both use this unit's suffix, and both move the stress.",
        items: [
          { text: "The v___ in beak depth was there before the drought.", answer: "variation", given: [0, 1, 2],
            why: "<i>vary → variation</i>." },
          { text: "Their o___ ran for thirty years without a break.", answer: "observation", given: [0, 1, 2],
            why: "<i>observe → observation</i>, stress on the fourth syllable." }
        ],
        closer: { kind: "test", body: "<p>Close the page. Compare two things you can see right now — once with a short adjective, once with a long one.</p>" } }
    ]
  };
})();
