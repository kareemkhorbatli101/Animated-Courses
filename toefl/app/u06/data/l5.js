/* Unit 6 · Food, Energy and the Body — LESSON 5 · READING
   Reading strategy: annotating a text. Data visual: table. */
(function () {
  var PASSAGE = {
    masthead: "WHAT A CALORIE MEASURES", every: 1,
    blocks: [
      { h: "A convenient description", lines: [
        "Digestion is frequently described as the body breaking food down into energy, which is convenient and slightly misleading.",
        "Energy is not a substance that can be extracted and stored in a tin."
      ] },
      { h: "What actually happens", lines: [
        "What actually happens is a long sequence of chemical conversions in which large molecules are taken apart and the bonds holding them together are reorganised.",
        "Carbohydrate, protein and fat each enter that sequence at a different point and travel through it at a different rate, which is why two meals of identical <b>calorific value</b><sup>1</sup> can affect how you feel for entirely different lengths of time."
      ] },
      { h: "What the number on the packet is", lines: [
        "The number printed on a packet measures the heat released when the food is burned in a laboratory, not the fate of the molecules inside a living body.",
        "That distinction is routinely ignored, and it accounts for a surprising proportion of the confusion surrounding nutrition."
      ] }
    ],
    notes: ["calorific value: the heat released when a sample is burned completely in a calorimeter"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "KITCHEN RULES", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Kitchen rules. Wash hands before handling food.",
      "Raw meat on the bottom shelf only.",
      "Label everything you put in the fridge with the date.",
      "Clear up as you go."
    ] }],
    source: "Hall of Residence"
  };

  window.PAGE = {
    id: "u06-l5", unit: "u06", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Annotate a text, and read a table by its columns",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>conversion</span> (n) a change from one form into another",
          "<span class='gloss'>bond</span> (n) the link holding two atoms together",
          "<span class='gloss'>fate</span> (n) what eventually becomes of something"
        ] }] },
        after: "<p>The third is doing unusual work in this article. Watch for it.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader",
                body: "<p><b>Annotate as you read.</b> Mark each paragraph with one word in the margin: <i>claim</i>, <i>mechanism</i>, <i>consequence</i>. If you cannot name a paragraph in one word, you have not understood it yet.</p>" },
        options: [
          { text: "The figure on a packet measures something other than what happens in a body.", correct: true,
            why: "The headings run: a convenient description, what actually happens, what the number is." },
          { text: "Calories should not be printed on packaging.", why: "The article never says that." },
          { text: "Fat is harder to digest than carbohydrate.", why: "Rates differ, but that is a detail inside the mechanism." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the words you would have to look up.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "A calorie figure measures combustion in a laboratory, not metabolism in a body.", correct: true,
                why: "That is the third heading's content, and the first two exist to prepare it." },
              { text: "Energy can be stored and extracted like a substance.", why: "The article denies this in its second sentence." },
              { text: "All meals of equal calories feel the same.", why: "It says the opposite, and gives the reason." }
            ] },
          { q: "Why can two meals of equal calorific value feel different?",
            options: [
              { text: "The three nutrient classes enter and travel through the sequence differently.", correct: true,
                why: "Stated as the reason, with <i>which is why</i> marking it explicitly." },
              { text: "One contains more energy than the other.", why: "<i>Equal calorific value</i> rules that out." },
              { text: "The laboratory measurement is inaccurate.", why: "Accuracy is not the issue; relevance is." }
            ] },
          { q: "In the last section, <i>the fate of the molecules</i> contrasts with:",
            options: [
              { text: "the heat released when food is burned.", correct: true,
                why: "The sentence is built as a contrast between the two, with <i>not</i> hinging it." },
              { text: "the weight printed on the packet.", why: "Weight is not mentioned." },
              { text: "the reader's own experience of the meal.", why: "That belongs to the previous section." }
            ] },
          { q: "What does the author imply about most nutritional confusion?",
            options: [
              { text: "Much of it comes from treating a combustion figure as a biological one.", correct: true,
                why: "“accounts for a surprising proportion of the confusion” sits immediately after that distinction." },
              { text: "It comes from people not reading packaging.", why: "The problem is reading it as something it is not." },
              { text: "It is caused by disagreement among scientists.", why: "No disagreement is described." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card on the kitchen door.",
        text: NOTICE,
        items: [
          { q: "Where must raw meat go?",
            options: [
              { text: "On the bottom shelf.", correct: true, why: "“bottom shelf <i>only</i>” — the word makes it a rule, not a preference." },
              { text: "Anywhere, if it is labelled.", why: "Labelling is a separate rule." },
              { text: "Not in the fridge.", why: "The card assumes it goes in the fridge." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "Energy can be extracted from food and stored as a substance.", answer: "F", line: 2,
            why: "Line 2 says energy is not a substance that can be stored in a tin." },
          { stem: "Different nutrients move through the sequence at different rates.", answer: "T", line: 4,
            why: "Line 4 states it, and makes it the reason two meals can differ." },
          { stem: "The calorie was first defined in the nineteenth century.", answer: "NI", line: null,
            why: "The article gives no history of the unit." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "The written register of this unit's phrasal verbs.",
        items: [
          { text: "Large molecules are broken down, or more formally d___.", answer: "decomposed", given: [0, 1, 2],
            why: "<i>Decompose</i> for <i>break down</i>, in a chemical context." },
          { text: "The bonds are r___ rather than destroyed.", answer: "reorganised", given: [0, 1, 2],
            why: "The article's own word, and the point of its second section." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Read the table. With a table, read the column headings before any row.",
        note: { kind: "reader",
                body: "<p>A table rewards reading <b>down</b> a column before reading <b>across</b> a row. Reading across tells you about one item; reading down tells you what the table is actually comparing.</p>" },
        chart: {
          kind: "table", title: "The three nutrient classes compared",
          caption: "Per gram, and through the sequence",
          cols: ["Class", "kJ per gram", "Enters the sequence", "Typical rate"],
          rows: [
            ["Carbohydrate", "17", "early, as glucose", "fast"],
            ["Protein", "17", "mid, after deamination", "moderate"],
            ["Fat", "37", "late, as fatty acids", "slow"]
          ],
          source: "Illustrative, authored for this item"
        },
        items: [
          { q: "Reading <i>down</i> the first number column, what does the table show?",
            options: [
              { text: "Fat carries roughly twice the energy per gram of the other two, which are equal.", correct: true,
                why: "17, 17, 37. Reading down the column is what makes the pattern visible; reading across one row would hide it." },
              { text: "All three are about the same.", why: "Fat is more than double." },
              { text: "Protein carries the most.", why: "Protein and carbohydrate are equal at 17." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Take any packaged food in your kitchen. Work out from the table roughly how much of its energy comes from fat. Then check the label.</p>" } }
    ]
  };
})();
