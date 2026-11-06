/* Unit 2 · Climate and Prediction — LESSON 5 · READING
   Reading strategy: understanding chart labels and text. Data visual: pie. */
(function () {
  var PASSAGE = {
    masthead: "WHY THERE IS NEVER ONE NUMBER", every: 1,
    blocks: [
      { h: "The missing single figure", lines: [
        "A climate report almost never offers a single number, and readers who want one often take the absence of certainty as an absence of knowledge.",
        "The reasoning behind the range is worth understanding."
      ] },
      { h: "Where the width comes from", lines: [
        "A <b>projection</b><sup>1</sup> is not a forecast of what will happen; it is a statement of what would follow if a particular set of assumptions held.",
        "Those assumptions concern how much is emitted over the coming decades, which depends on decisions that have not yet been taken.",
        "Each scenario therefore produces its own curve, and the published range spans them.",
        "A second source of width is the models themselves, which represent clouds and ocean circulation somewhat differently and consequently disagree even when given identical assumptions.",
        "Narrowing that disagreement is slow work, and progress is measured in fractions of a degree."
      ] },
      { h: "What a range is not", lines: [
        "What the range does not mean is that any value within it is equally likely.",
        "The central estimates cluster, and the extremes require conditions that most researchers regard as improbable."
      ] }
    ],
    notes: ["projection: what would follow under stated assumptions, as against a prediction, which claims what will happen"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "FIELD TRIP · ESTUARY", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Field trip to the estuary.",
      "Meet at the main gate at 7:30 on Friday.",
      "Bring waterproofs and lunch. Boots are provided.",
      "Sign the list outside the lab by Wednesday."
    ] }],
    source: "Department of Earth Sciences"
  };


  /* The second academic passage: the first is about why a range exists,
     this one about why the biggest number is not the first problem. */
  var PASSAGE2 = {
    masthead: "THE LARGEST SLICE IS NOT THE FIRST PROBLEM", every: 1,
    blocks: [
      { h: "Shares and quantities", lines: [
        "A chart of emissions by sector invites an obvious inference: begin with the largest slice.",
        "That inference is sound only if the sectors are equally easy to change, and they are not."
      ] },
      { h: "Difficulty is not drawn", lines: [
        "Electricity generation is the largest contributor in most industrialised countries, and it is also among the most tractable, because the technologies that would replace it already exist at scale.",
        "Agriculture is a considerably smaller share and a considerably harder one, since its emissions arise from biological processes rather than from a choice of fuel.",
        "A chart that orders sectors by magnitude therefore ranks them by a quantity nobody disputes, while remaining entirely silent about the quantity that determines what should be attempted first."
      ] },
      { h: "Reading what is not drawn", lines: [
        "The useful figure is the share divided by the difficulty of changing it, and no conventional chart displays such a thing.",
        "Readers who want it must assemble it for themselves, from the text surrounding the chart rather than from the chart itself."
      ] }
    ],
    notes: ["tractable: able to be dealt with, as against intractable, which is the usual word for agriculture here"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "FIELD TRIP · FRIDAY UPDATE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "The minibus now leaves at 7:15, not 7:30.",
      "Site three is still closed, so we will do sites one and two.",
      "Afternoon group: check your email tonight.",
      "Boots are provided. Bring waterproofs and lunch."
    ] }],
    source: "Department of Earth Sciences"
  };

  window.PAGE = {
    id: "u02-l5", unit: "u02", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read a range, and read the labels before the shape",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>projection</span> (n) what would follow if stated assumptions held",
          "<span class='gloss'>scenario</span> (n) one named set of assumptions",
          "<span class='gloss'>improbable</span> (adj) unlikely, though not impossible"
        ] }] },
        after: "<p>The article turns on the first of these.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three bold headings. What is it going to argue?",
        note: { kind: "reader", body: "<p>Read with a purpose. Decide what you want from the text before the first sentence.</p>" },
        options: [
          { text: "A range is a statement of knowledge, not a confession of ignorance.", correct: true,
            why: "The headings move from the missing number, to where the width comes from, to what a range is not." },
          { text: "Climate models are unreliable.",
            why: "The third heading points the other way." },
          { text: "Single numbers are easier to understand.",
            why: "Nothing in the headings is about ease of understanding." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read a complex text more than once: first for the general idea, then for details, then for the difficult vocabulary.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The range reflects real, identifiable sources of uncertainty rather than a failure to decide.", correct: true,
                why: "The article names two sources — scenarios and model differences — and then limits what a range implies." },
              { text: "Climate models should be made simpler.", why: "Simplicity is never discussed." },
              { text: "Emissions decisions have already been taken.", why: "The article says the opposite: they have not yet been taken." }
            ] },
          { q: "What is the second source of width?",
            options: [
              { text: "Models differ in how they represent clouds and ocean circulation.", correct: true,
                why: "Stated directly — and the giveaway is that they disagree <i>even when given identical assumptions</i>." },
              { text: "Different countries report differently.", why: "Reporting is not mentioned." },
              { text: "The measurements are imprecise.", why: "The article is about projection, not measurement." }
            ] },
          { q: "In line 8, <i>that disagreement</i> refers to:",
            options: [
              { text: "the difference between models given the same assumptions", correct: true,
                why: "The nearest preceding idea is the models disagreeing on identical assumptions — not the scenario range, which is a separate source." },
              { text: "the disagreement between researchers and readers",
                why: "No such disagreement is described." },
              { text: "the gap between the central estimate and the extremes",
                why: "That comes later, in the final section." }
            ] },
          { q: "What would the author say about someone who quotes the top of the range as the expected outcome?",
            options: [
              { text: "They are treating an improbable case as a likely one.", correct: true,
                why: "The last sentence says the extremes require conditions most researchers regard as improbable." },
              { text: "They are reading the report correctly.", why: "The final paragraph exists to rule this out." },
              { text: "They should use a single number instead.", why: "The whole article argues against single numbers." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card from the department noticeboard.",
        text: NOTICE,
        items: [
          { q: "What do you need to bring?",
            options: [
              { text: "Waterproofs and lunch.", correct: true, why: "Boots are provided, so they are not on your list." },
              { text: "Boots and lunch.", why: "Boots are provided." },
              { text: "Nothing — everything is provided.", why: "Two things are asked for." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p>An <b>NI</b> is not a weak <b>F</b>. If the text neither states it nor rules it out, NI is the honest mark — and the habit protects you against a distractor built on something the passage never said.</p>" },
        items: [
          { stem: "A projection depends on assumptions that are not yet settled.", answer: "T", line: 4,
            why: "Line 4: the assumptions depend on decisions that have not yet been taken." },
          { stem: "All values inside the published range are equally likely.", answer: "F", line: 8,
            why: "Line 8 says exactly the opposite." },
          { stem: "The author has worked on a climate model.", answer: "NI", line: null,
            why: "The article says nothing about the author." }
        ] },


      { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>In this subject the hedges are doing most of the work. A sentence that looks like a claim and contains <i>under this scenario</i>, <i>is projected to</i> or <i>most researchers regard</i> is a conditional claim, and reading it as a flat one is how a report gets misquoted.</p>" },
        items: [
          { prompt: "Which sentence states a conditional claim rather than a fact?",
            text: "Average surface temperature has risen by about one degree since the late nineteenth century. The warming is not evenly distributed, and the Arctic has warmed roughly three times as fast. Under the highest-emission scenario the global figure is projected to rise by a further three degrees by 2100. Measurements before 1880 are too sparse to support a global average.",
            answer: "Under the highest-emission scenario the global figure is projected to rise by a further three degrees by 2100.",
            why: "<i>Under … scenario</i> plus <i>is projected to</i>. The other three are statements about what has been measured." },
          { prompt: "Which sentence gives a reason rather than a result?",
            text: "Models still disagree about how much the atmosphere will warm for a given quantity of carbon dioxide. Clouds are represented differently from one model to the next, because they are smaller than the boxes the models divide the atmosphere into. The resulting spread has narrowed only slowly over thirty years. Narrowing it further is among the field's central problems.",
            answer: "Clouds are represented differently from one model to the next, because they are smaller than the boxes the models divide the atmosphere into.",
            why: "It is the only sentence containing a <i>because</i> clause, and the only one explaining rather than reporting." },
          { prompt: "Which sentence qualifies the claim made just before it?",
            text: "Renewable generation is now the cheapest source of new electricity in most of the world. This has already changed what is built. The saving applies to new capacity, however, and says nothing about the cost of replacing plant that is still working. Retiring an asset early is a different calculation altogether.",
            answer: "The saving applies to new capacity, however, and says nothing about the cost of replacing plant that is still working.",
            why: "<i>However</i> plus a narrowing of scope: the claim is true, and true of less than it appears to be." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's suffix again, in the article's own register.",
        items: [
          { text: "The difference between two models can still be m___.", answer: "meaningful", given: [0, 1, 2],
            why: "<i>meaning + ful</i>: large enough to matter." },
          { text: "Most researchers are d___ about the highest figure.", answer: "doubtful", given: [0, 1],
            why: "<i>doubt + ful</i> — which is the article's own position." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the chart and read its key before you read anything off it.",
        note: { kind: "reader",
                body: "<p>Match each section to the key first. Then read the labels. Only then look at the shape — a shape without labels tells you nothing.</p>" },
        chart: {
          kind: "pie-key", title: "Where the emissions come from",
          sub: "One country, one year, by sector",
          source: "Illustrative, authored for this item",
          slices: [
            { name: "Electricity and heat", v: 31 },
            { name: "Transport", v: 22 },
            { name: "Industry", v: 19 },
            { name: "Buildings", v: 12 },
            { name: "Agriculture", v: 10 },
            { name: "Waste", v: 4 },
            { name: "Other", v: 2 }
          ],
          cols: ["Sector", "Share"],
          rows: [["Electricity and heat","31%"],["Transport","22%"],["Industry","19%"],
                 ["Buildings","12%"],["Agriculture","10%"],["Waste","4%"],["Other","2%"]]
        },
        items: [
          { q: "Transport and buildings together account for:",
            options: [
              { text: "34%", correct: true, why: "22 + 12. Reading two sections and adding them is the commonest chart item on this task." },
              { text: "22%", why: "That is transport alone." },
              { text: "53%", why: "That would be electricity plus transport." }
            ] }
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, about the chart you looked at in 3A. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>This article is an argument about a chart, so read it with 3A's pie in front of you. It claims the chart answers a question nobody was asking.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "Ranking sectors by size does not tell you which one to tackle first.", correct: true,
                why: "The article accepts the sizes and argues that they rank the wrong quantity." },
              { text: "Emissions charts use the wrong figures.", why: "It never disputes the numbers; it disputes what they are used for." },
              { text: "Agriculture produces more emissions than electricity.", why: "The article says the opposite, and uses that as its example." }
            ] },
          { q: "Why does the article call agriculture harder than electricity?",
            options: [
              { text: "Its emissions come from biological processes rather than from a choice of fuel.", correct: true,
                why: "Stated directly, and it is the reason the replacement technologies do not transfer." },
              { text: "Agriculture is a larger share.", why: "It is a <i>considerably smaller</i> share, which is the point." },
              { text: "Farmers are less willing to change.", why: "No claim about willingness appears anywhere in the text." }
            ] },
          { q: "In the first section, <i>that inference</i> refers to:",
            options: [
              { text: "the idea that you should begin with the largest slice", correct: true,
                why: "The colon in the sentence before introduces exactly that idea, and nothing else in the paragraph is an inference." },
              { text: "the chart of emissions by sector",
                why: "The chart is what invites the inference; it is not itself one." },
              { text: "the claim that sectors are equally easy to change",
                why: "That is the assumption the inference needs, introduced after the pronoun." }
            ] },
          { q: "What would this author say about a policy that starts with the largest sector?",
            options: [
              { text: "It may be right, but the chart is not what makes it right.", correct: true,
                why: "The article argues the chart is silent on the deciding quantity — not that the biggest sector is the wrong place to start." },
              { text: "It is certainly mistaken.", why: "Electricity happens to be both largest and most tractable, so the policy may well be correct." },
              { text: "It should start with agriculture instead.", why: "Agriculture is the article's example of the hard case, not its recommendation." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>Watch the hedges. In this subject a paraphrase that drops <i>under this scenario</i>, <i>projected</i> or <i>most researchers regard</i> has not simplified the sentence: it has changed what the sentence claims.</p>" },
        items: [
          { source: "The extremes require conditions that most researchers regard as improbable.",
            options: [
              { text: "To reach either end of the range, things would have to happen that the field mostly considers unlikely.", correct: true,
                why: "Keeps <i>most</i>, keeps <i>improbable</i>, and keeps the conditions as the thing being judged." },
              { text: "The extremes are impossible.",
                why: "<i>Improbable</i> is not <i>impossible</i>, and <i>most researchers</i> is not everyone. Two hedges gone in four words." },
              { text: "Most researchers disagree about the extremes.",
                why: "They agree the extremes are unlikely. Disagreement is a different claim." },
              { text: "Researchers regard the extremes as the most likely outcomes.",
                why: "Reverses it." }
            ] },
          { source: "A chart that orders sectors by magnitude ranks them by a quantity nobody disputes, while remaining silent about the quantity that determines what should be attempted first.",
            options: [
              { text: "Sorting sectors by size uses an agreed measure but leaves out the one that decides where to start.", correct: true,
                why: "Keeps both halves: the agreement on size, and the silence on difficulty." },
              { text: "Charts that order sectors by size use figures that are disputed.",
                why: "The article says the opposite: nobody disputes them." },
              { text: "Sorting sectors by size shows which should be attempted first.",
                why: "That is the inference the whole article exists to block." },
              { text: "Charts should display difficulty instead of magnitude.",
                why: "Closer, but it is a recommendation the sentence does not make; it reports what the chart does not do." }
            ] },
          { source: "A projection is not a forecast of what will happen; it is a statement of what would follow if a particular set of assumptions held.",
            options: [
              { text: "A projection says what a given set of assumptions would lead to, not what is going to occur.", correct: true,
                why: "Keeps the negative half and the conditional half, which is the whole distinction." },
              { text: "A projection is a forecast based on assumptions.",
                why: "Calling it a forecast is the exact error the sentence is written to prevent." },
              { text: "A projection describes what will happen under current policy.",
                why: "Names one scenario and then drops the conditionality anyway." },
              { text: "A projection and a forecast are the same thing stated differently.",
                why: "The semicolon is separating them, not equating them." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "The trip card from 1D has been updated. Read it.",
        text: NOTICE2,
        items: [
          { q: "When does the minibus leave now?",
            options: [
              { text: "At 7:15.", correct: true, why: "Line 1 gives the new time and the old one, in that order." },
              { text: "At 7:30.", why: "That is the time it has moved away from." },
              { text: "The card does not say.", why: "Both times are in the first line." }
            ] },
          { q: "What do you still need to bring?",
            options: [
              { text: "Waterproofs and lunch.", correct: true, why: "Line 4. Boots are provided, so they are not your responsibility." },
              { text: "Boots and waterproofs.", why: "Boots are provided." },
              { text: "Nothing.", why: "Two items are asked for in the last line." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "The trip will visit all three sites.", answer: "F", line: 2,
            why: "Line 2: site three is still closed, so only sites one and two." },
          { stem: "Everyone on the trip must check their email tonight.", answer: "F", line: 3,
            why: "Line 3 names the afternoon group only. A statement that widens a conditional is false, not NI, because the card does say who." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, one chart, one habit.",
        text: { blocks: [{ lines: [
          "<b>Why a range</b> — scenarios differ, and so do the models given the same scenario.",
          "<b>Why not the biggest slice</b> — size is agreed; difficulty is what decides, and it is not drawn.",
          "<b>What to do</b> — read the key, then the labels, then the text around the chart. The shape last."
        ] }] },
        closer: { kind: "life",
          body: "<p>Find one news article that gives a climate figure. Does it quote a range or a single number? If a single number, which end of the range is it — and does the article say?</p>" } }
    ]
  };
})();
