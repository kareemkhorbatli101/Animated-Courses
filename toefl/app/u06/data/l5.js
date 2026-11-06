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
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "raw", def: "not yet cooked", ar: "نيِء" },
    ],
    source: "Hall of Residence"
  };

  /* The second academic passage: the first is about what a calorie measures,
     this one about why the arithmetic built on it does not behave. */
  var PASSAGE2 = {
    masthead: "THE BODY IS NOT A LEDGER", every: 1,
    blocks: [
      { h: "The arithmetic as usually stated", lines: [
        "Weight change is commonly presented as a subtraction: energy taken in, minus energy spent, with the remainder deposited or withdrawn.",
        "The equation is not wrong, and it is almost useless, because both of its terms move when either one is altered."
      ] },
      { h: "Why the terms are not independent", lines: [
        "A sustained reduction in intake is followed by a measurable reduction in expenditure, achieved through mechanisms that are neither deliberate nor perceptible: a slightly lower core temperature, a reduction in spontaneous movement, a hundred small economies distributed across the day.",
        "Expenditure also falls simply because a lighter body costs less to move, so part of the reduction is arithmetic rather than regulatory."
      ] },
      { h: "What follows for advice", lines: [
        "Predictions derived from the static equation therefore overstate the loss that a given reduction will produce, typically by a wide margin over periods of months.",
        "This is not an argument that intake is irrelevant; it is an argument that an equation whose terms are coupled cannot be solved as though they were not."
      ] }
    ],
    notes: ["expenditure: the total energy the body uses in a day, most of it on processes that are not optional"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "SHARED KITCHEN · FRIDGE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Anything unlabelled is cleared on Fridays.",
      "Cooked food goes on the top two shelves.",
      "The freezer is defrosted on the first of the month.",
      "Do not store anything in the oven, for any reason."
    ] }],
    /* F7/F18 — the words a reader stops on in an everyday notice. */
    glossary: [
      { term: "unlabelled", def: "with no name or date written on it", ar: "غير معنون" },
      { term: "defrosted", def: "emptied of ice and allowed to warm", ar: "يُزال عنه الجليد" },
    ],
    source: "Hall of Residence"
  };

  window.PAGE = {
    id: "u06-l5", unit: "u06", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Annotate a text, and read a table by its columns",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        concepts: ["read"],
        kind: "cards", task: null, n: 0,
        cards: [
          { term: "conversion", ar: "\u062a\u062d\u0648\u064a\u0644",
            meaning: "a change from one form into another",
            with: ["energy conversion", "the conversion of glucose", "conversion efficiency"],
            why: "The noun of <i>convert</i>, and the formal alternative to several of Lesson 1\u0027s phrasal verbs at once." },
          { term: "bond", ar: "\u0631\u0627\u0628\u0637\u0629",
            meaning: "the link holding two atoms together",
            with: ["a chemical bond", "break a bond", "bond energy"],
            why: "Breaking a bond costs energy and making one releases it, which is the opposite of what most people assume on first meeting the word." },
          { term: "fate", ar: "\u0645\u0622\u0644",
            meaning: "what eventually becomes of something",
            with: ["the fate of the carbon", "metabolic fate", "trace its fate"],
            why: "Doing unusual work here. In ordinary English it is dramatic; in this subject it is a neutral technical term for where an atom ends up." }
        ],
        prompt: "Three words before you begin. Say each meaning before you turn the card \u2014 the third is doing unusual work in this article.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>conversion</span> (n) a change from one form into another",
          "<span class='gloss'>bond</span> (n) the link holding two atoms together",
          "<span class='gloss'>fate</span> (n) what eventually becomes of something"
        ] }] },
        after: "<p>The third is doing unusual work in this article. Watch for it.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        carry: "1c",
        concepts: ["read"],
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
        concepts: ["read", "measurement", "claim"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the words you would have to look up.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "A calorie figure measures combustion in a laboratory, not metabolism in a body.", correct: true,
                why: "That is the third heading's content, and the first two exist to prepare it." },
              { text: "Energy can be stored and extracted like a substance.", misreads: "overread", why: "The article denies this in its second sentence." },
              { text: "All meals of equal calories feel the same.", misreads: "overread", why: "It says the opposite, and gives the reason." }
            ] },
          { para: 2, q: "Why can two meals of equal calorific value feel different?",
            options: [
              { text: "The three nutrient classes enter and travel through the sequence differently.", correct: true,
                why: "Stated as the reason, with <i>which is why</i> marking it explicitly." },
              { text: "One contains more energy than the other.", misreads: "calorific", why: "<i>Equal calorific value</i> rules that out." },
              { text: "The laboratory measurement is inaccurate.", misreads: "overread", why: "Accuracy is not the issue; relevance is." }
            ] },
          { para: 3, q: "In the last section, <i>the fate of the molecules</i> contrasts with:",
            options: [
              { text: "the heat released when food is burned.", correct: true,
                why: "The sentence is built as a contrast between the two, with <i>not</i> hinging it." },
              { text: "the weight printed on the packet.", misreads: "absent", why: "Weight is not mentioned." },
              { text: "the reader's own experience of the meal.", misreads: "overread", why: "That belongs to the previous section." }
            ] },
          { para: 3, q: "What does the author imply about most nutritional confusion?",
            options: [
              { text: "Much of it comes from treating a combustion figure as a biological one.", correct: true,
                why: "“accounts for a surprising proportion of the confusion” sits immediately after that distinction." },
              { text: "It comes from people not reading packaging.", misreads: "overread", why: "The problem is reading it as something it is not." },
              { text: "It is caused by disagreement among scientists.", misreads: "described", why: "No disagreement is described." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        concepts: ["read"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card on the kitchen door.",
        text: NOTICE,
        items: [
          { para: 0, q: "Where must raw meat go?",
            options: [
              { text: "On the bottom shelf.", correct: true, why: "“bottom shelf <i>only</i>” — the word makes it a rule, not a preference." },
              { text: "Anywhere, if it is labelled.", misreads: "overread", why: "Labelling is a separate rule." },
              { text: "Not in the fridge.", misreads: "fridge", why: "The card assumes it goes in the fridge." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        carry: "1c",
        concepts: ["read"],
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

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        concepts: ["read", "evidence", "claim"],
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is annotating. The sentences worth marking are not the ones with the facts in them: they are the ones that tell you what the facts are being used for.</p>" },
        items: [
          { prompt: "Which sentence states what the study could not determine?",
            text: "Thirty volunteers followed the same reduced intake for twelve weeks. Weight loss varied from two to eleven kilograms. Whether the variation reflects differences in adherence or in expenditure could not be established, since intake was self-reported. Resting expenditure was measured directly at the start and the end.",
            answer: "Whether the variation reflects differences in adherence or in expenditure could not be established, since intake was self-reported.",
            why: "The only sentence naming a limit, and it gives the reason for the limit in the same breath." },
          { prompt: "Which sentence qualifies the claim before it?",
            text: "Protein produces a larger rise in expenditure after a meal than carbohydrate or fat. This is sometimes presented as a reason to prefer it. The effect is real but small, amounting to perhaps a tenth of the energy in the meal. Over a year that is not nothing, and it is far less than the way it is usually described.",
            answer: "The effect is real but small, amounting to perhaps a tenth of the energy in the meal.",
            why: "<i>Real but small</i> concedes the finding and limits it in six words. The last sentence then extends the qualification rather than introducing it." },
          { prompt: "Which sentence describes the mechanism rather than the result?",
            text: "Participants on the reduced intake moved less by the sixth week. Step counts fell by about fifteen per cent. The reduction was not reported by any participant and was not deliberate. Spontaneous movement falls automatically when intake drops, which is one of the ways expenditure is brought down.",
            answer: "Spontaneous movement falls automatically when intake drops, which is one of the ways expenditure is brought down.",
            why: "The first three report what was observed; only the last says how it comes about." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        carry: "1c",
        concepts: ["word"],
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "The written register of this unit's phrasal verbs.",
        items: [
          { text: "Large molecules are broken down, or more formally d___.", answer: "decomposed", given: [0, 1, 2],
            why: "<i>Decompose</i> for <i>break down</i>, in a chemical context." },
          { text: "The bonds are r___ rather than destroyed.", answer: "reorganised", given: [0, 1, 2],
            why: "The article's own word, and the point of its second section." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        concepts: ["measurement"],
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        concepts: ["read", "inference", "measurement"],
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on the arithmetic built from the number in the first. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Annotate this one as you read: mark the sentence that states the equation, the sentence that says why it fails, and the sentence that says what it is still good for. Those three carry the article.</p>" },
        items: [
          { para: 0, q: "What is the main idea?",
            options: [
              { text: "The energy equation is correct but cannot be solved, because its two terms move together.", correct: true,
                why: "The article concedes the equation in its second sentence and spends the rest explaining the coupling." },
              { text: "Energy intake does not affect weight.", misreads: "overread", why: "The final sentence rules out this reading by name." },
              { text: "Expenditure cannot be measured.", misreads: "expenditure", why: "Resting expenditure is measured directly in the examples around this article." }
            ] },
          { para: 2, q: "What two causes does the article give for expenditure falling?",
            options: [
              { text: "Regulatory economies the body makes, and the lower cost of moving a lighter body.", correct: true,
                why: "The second section names both and separates them: one is regulation, the other is arithmetic." },
              { text: "Deliberate reductions in activity and in food intake.", misreads: "Neither deliberate nor perceptible", why: "<i>Neither deliberate nor perceptible</i> rules the first of those out." },
              { text: "Lower core temperature alone.", misreads: "mechanisms", why: "That is one of several mechanisms listed inside the first cause." }
            ] },
          { para: 2, q: "Why does the article say part of the reduction is “arithmetic rather than regulatory”?",
            options: [
              { text: "A lighter body costs less to move, whatever the body does about it.", correct: true,
                why: "The distinction separates what the body actively does from what simply follows from mass." },
              { text: "The equation has been calculated wrongly.", misreads: "overread", why: "No calculation error is claimed anywhere." },
              { text: "The reduction is too small to measure.", misreads: "overread", why: "Size is not the issue; cause is." }
            ] },
          { para: 3, q: "What does the article say its argument is NOT?",
            options: [
              { text: "An argument that intake does not matter.", correct: true,
                why: "The last sentence names the misreading and rejects it, which is a move worth noticing in itself." },
              { text: "An argument about public advice.", misreads: "overread", why: "The third section is explicitly about what follows for advice." },
              { text: "An argument about measurement.", misreads: "absent", why: "It does not discuss measurement error at all, so it has no need to disclaim it." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        concepts: ["read", "comparison", "claim"],
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Two of these sentences concede something before making their point. A paraphrase that drops the concession has made the writer sound far more certain than they were.</p>" },
        items: [
          { source: "The equation is not wrong, and it is almost useless, because both of its terms move when either one is altered.",
            options: [
              { text: "The equation is true but barely usable, since changing one side changes the other.", correct: true,
                why: "Keeps the concession, the complaint and the reason, in that order." },
              { text: "The equation is wrong because its terms are coupled.", misreads: "Not wrong",
                why: "<i>Not wrong</i> is the first thing the sentence says." },
              { text: "The equation is useful once both terms are measured.", misreads: "overread",
                why: "Measuring them does not uncouple them, and the sentence does not offer this escape." },
              { text: "Both terms of the equation are constant.", misreads: "overread",
                why: "Exactly the assumption the sentence is written to deny." }
            ] },
          { source: "The number printed on a packet measures the heat released when the food is burned in a laboratory, not the fate of the molecules inside a living body.",
            options: [
              { text: "The packet figure comes from burning the food in a machine, not from what a body does with it.", correct: true,
                why: "Keeps both halves of the <i>not</i>, which is where the whole point sits." },
              { text: "The packet figure is inaccurate.", misreads: "overread",
                why: "It is an accurate measurement of something else, which is a different and more interesting claim." },
              { text: "Burning food in a laboratory is how the body uses it.", misreads: "overread",
                why: "Reverses the sentence." },
              { text: "Packets should print a different number.", misreads: "overread",
                why: "A recommendation the sentence does not make." }
            ] },
          { source: "Predictions derived from the static equation overstate the loss that a given reduction will produce, typically by a wide margin over periods of months.",
            options: [
              { text: "Working from the fixed equation predicts more loss than actually happens, usually by a lot over several months.", correct: true,
                why: "Keeps the direction of the error, the hedge <i>typically</i> and the timescale." },
              { text: "The static equation underestimates how much weight is lost.", misreads: "Overstate",
                why: "<i>Overstate</i> points the other way." },
              { text: "Predictions from the equation are accurate in the short term.", misreads: "periods",
                why: "The sentence says nothing about short periods; adding that claim is not paraphrasing." },
              { text: "The equation always overstates the loss by a wide margin.", misreads: "Typically",
                why: "<i>Typically</i> is doing real work, and dropping it turns a tendency into a law." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        concepts: ["read"],
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card, this one on the fridge door. Read it.",
        text: NOTICE2,
        items: [
          { para: 0, q: "What happens to food with no label?",
            options: [
              { text: "It is thrown out on Fridays.", correct: true, why: "Line 1, and the day is part of the rule." },
              { text: "It is moved to the bottom shelf.", misreads: "shelves", why: "The shelves rule is about cooked food, in line 2." },
              { text: "Nothing, unless it is old.", misreads: "overread", why: "The rule has no condition about age." }
            ] },
          { para: 0, q: "Where does cooked food go?",
            options: [
              { text: "On the top two shelves.", correct: true, why: "Line 2 names both the food and the place." },
              { text: "On the bottom shelf.", misreads: "absent", why: "The card does not say, and the previous card put raw meat there." },
              { text: "In the freezer.", misreads: "freezer", why: "The freezer appears in line 3, about defrosting." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        carry: "5a",
        concepts: ["read"],
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "You may keep a pan in the oven overnight.", answer: "F", line: 4,
            why: "Line 4 forbids storing anything there, and <i>for any reason</i> closes the exception you were about to look for." },
          { stem: "The fridge is cleaned at the same time as the freezer is defrosted.", answer: "NI", line: null,
            why: "Line 1 gives a Friday clear-out and line 3 a monthly defrost. Whether they coincide is never said." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        concepts: ["read", "measurement"],
        kind: "recap", task: null, n: 0,

        cases: [

          { id: "m1", label: "The calorie",

            detail: "Khalid reads that a food contains 240 kilocalories and concludes that his body will obtain 240 kilocalories from it." },

          { id: "m2", label: "The suspicious sum",

            detail: "Mona finds that two measurements in a table always rise and fall together and treats their total as an independent check." },

          { id: "m3", label: "The flat highlighter",

            detail: "Ziad has highlighted every fact in the article and cannot say what any of them is there to show." }

        ],

        takeaways: [

          { text: "<b>What the number is</b> \u2014 heat from a machine, not the fate of a molecule.", caseId: "m1",

            why: "A calorimeter burns the food completely. A body does not, and what it absorbs depends on the food, the cooking and the gut. The number is real and it is not the same number." },

          { text: "<b>Why the sum misbehaves</b> \u2014 the two sides of it move together.", caseId: "m2",

            why: "If two quantities are not independent, adding them does not give an independent check: the errors move together and the total looks steadier than it is." },

          { text: "<b>What to annotate</b> \u2014 not the facts, but the sentence that says what they are for.", caseId: "m3",

            why: "Ziad has marked the content and lost the argument. The sentence that says why the facts are there is the one you will want again." }

        ],
        prompt: "Two articles, one table, one habit \u2014 in three parts. Drag each part onto the reader it would stop from going wrong.",
        text: { blocks: [{ lines: [
          "<b>What the number is</b> — heat from a machine, not the fate of a molecule.",
          "<b>Why the sum misbehaves</b> — the two sides of it move together.",
          "<b>What to annotate</b> — not the facts, but the sentence that says what they are for."
        ],
        closer: { kind: "life",
          body: "<p>Take any packaged food in your kitchen. Work out from the table roughly how much of its energy comes from fat. Then check the label.</p>" } }] } }
    ]
  };
})();
