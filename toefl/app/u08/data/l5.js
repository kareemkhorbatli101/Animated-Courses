/* Unit 8 · Disease and Public Health — LESSON 5 · READING
   Reading strategy: reading text near a chart. Data visual: paired pies. */
(function () {
  var PASSAGE = {
    masthead: "WHAT ENDED THE INFECTIONS", every: 1,
    blocks: [
      { h: "A reversal within living memory", lines: [
        "For most of recorded history the leading causes of death were infectious, and they killed the young disproportionately.",
        "That pattern has been reversed in wealthy countries within living memory, and the reversal is frequently attributed to antibiotics and vaccination."
      ] },
      { h: "What the chronology shows", lines: [
        "Both mattered enormously, but the chronology does not entirely support the attribution.",
        "Mortality from tuberculosis, for instance, had been falling steeply for decades before an effective treatment existed, and the decline tracks improvements in housing, nutrition and <b>sanitation</b><sup>1</sup> more closely than it tracks any medical intervention."
      ] },
      { h: "The uncomfortable implication", lines: [
        "The uncomfortable implication is that the most consequential public health measures of the last two centuries were largely not medical, and that a society which invests only in treatment is neglecting the conditions that determine how many people require it."
      ] }
    ],
    notes: ["sanitation: the supply of clean water and the removal of waste"],
    source: "Written for this book"
  };
  var NOTICE = {
    masthead: "HEALTH CENTRE", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "Health centre. Walk-in clinic nine to eleven, mornings only.",
      "Appointments can be booked online or by phone.",
      "Bring your registration number.",
      "Repeat prescriptions take two working days."
    ] }],
    source: "University Health Service"
  };

  window.PAGE = {
    id: "u08-l5", unit: "u08", block: "l5", up: "../", tab: "ACADEMIC",
    objective: "Read the text beside a chart before trusting the chart",
    next: "oc.html",
    scenes: [
      { id: "1a", section: 1, sectionTitle: "Read", letter: "A",
        kind: "read-only", task: null, n: 0,
        prompt: "Read the definitions before you begin.",
        text: { every: 1, blocks: [{ lines: [
          "<span class='gloss'>disproportionately</span> (adv) more than their share would lead you to expect",
          "<span class='gloss'>attribute to</span> (v) to name as the cause",
          "<span class='gloss'>consequential</span> (adj) having large effects"
        ] }] },
        after: "<p>The second is the one the article quarrels with.</p>" },

      { id: "1b", section: 1, sectionTitle: "Read", letter: "B",
        kind: "choice", task: "read-academic-passage", cefr: "B1", n: 0,
        prompt: "Preview the article. Look at the title and the three headings.",
        note: { kind: "reader", body: "<p>Read with a purpose. A heading containing the word <i>uncomfortable</i> is telling you where the argument lands.</p>" },
        options: [
          { text: "Medicine was not the main cause of the fall in infectious death.", correct: true,
            why: "The headings move from the reversal, to the chronology that complicates it, to the implication." },
          { text: "Antibiotics and vaccination were unimportant.", why: "The article says both mattered enormously." },
          { text: "Infectious disease is returning.", why: "No return is discussed." }
        ] },

      { id: "1c", section: 1, sectionTitle: "Read", letter: "C",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "Read the article, then answer. The text stays on screen.",
        text: PASSAGE,
        note: { kind: "reader", body: "<p>Read it twice: once for the argument, once for the sentence that does the damage.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "The decline in infectious death owed more to living conditions than to medicine.", correct: true,
                why: "The second section gives the evidence and the third draws the implication." },
              { text: "Antibiotics arrived too late to matter.", why: "The article says they mattered enormously." },
              { text: "Tuberculosis was the leading cause of death.", why: "It is an example, not a ranking." }
            ] },
          { q: "What does the tuberculosis example show?",
            options: [
              { text: "Mortality was already falling steeply before any treatment existed.", correct: true,
                why: "That is why the chronology is said not to support the attribution." },
              { text: "Treatment caused the decline.", why: "The decline preceded the treatment." },
              { text: "The disease has been eliminated.", why: "Elimination is never claimed." }
            ] },
          { q: "The phrase <i>does not entirely support</i> is doing what?",
            options: [
              { text: "Conceding that medicine mattered while denying it was the main cause.", correct: true,
                why: "<i>Entirely</i> is the hedge: the author is not making the stronger claim, and noticing that is a C1 reading skill." },
              { text: "Rejecting the role of medicine completely.", why: "<i>Entirely</i> would be unnecessary if so." },
              { text: "Expressing uncertainty about the data.", why: "The data are not in doubt; the attribution is." }
            ] },
          { q: "What does the author imply about a health system that invests only in treatment?",
            options: [
              { text: "It is leaving the causes of demand unaddressed.", correct: true,
                why: "“neglecting the conditions that determine how many people require it”." },
              { text: "It will reduce costs over time.", why: "Costs are not discussed." },
              { text: "It is behaving as every system has.", why: "No comparison between systems is made." }
            ] }
        ] },

      { id: "1d", section: 1, sectionTitle: "Read", letter: "D",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 1,
        prompt: "A short everyday text. Read the card at the health centre.",
        text: NOTICE,
        items: [
          { q: "When is the walk-in clinic open?",
            options: [
              { text: "Nine to eleven, mornings only.", correct: true, why: "Both the hours and the restriction are given." },
              { text: "All day.", why: "<i>Mornings only</i> rules that out." },
              { text: "By appointment only.", why: "Appointments are the <i>other</i> route." }
            ] }
        ] },

      { id: "1e", section: 1, sectionTitle: "Read", letter: "E",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 3,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>article</b>.",
        note: { kind: "reader",
                body: "<p><b>NI</b> is not a weak <b>F</b>. If the article neither states it nor rules it out, NI is the honest mark.</p>" },
        items: [
          { stem: "Infectious disease once killed the young more than other age groups.", answer: "T", line: 1,
            why: "Line 1: they killed the young disproportionately." },
          { stem: "The author says antibiotics made no difference.", answer: "F", line: 3,
            why: "Line 3 says both mattered enormously." },
          { stem: "Tuberculosis mortality is still falling today.", answer: "NI", line: null,
            why: "The article describes the historical decline and says nothing about the present." }
        ] },

      { id: "2a", section: 2, sectionTitle: "Word study", letter: "A",
        kind: "letterbox", task: "complete-the-words", cefr: "B2", n: 0,
        prompt: "This unit's prefix, in the article's register.",
        items: [
          { text: "A r___ strain survives the drug that once cleared it.", answer: "resistant", given: [0, 1, 2],
            why: "<i>re + sistant</i>." },
          { text: "Most patients r___ without any treatment at all.", answer: "recover", given: [0, 1, 2],
            why: "<i>recover</i>, no hyphen." }
        ] },

      { id: "3a", section: 3, sectionTitle: "Talk it over", letter: "A",
        kind: "chartread", task: "read-academic-passage", cefr: "B2", n: 0,
        prompt: "Look at the two charts, then read the note beside them. The note is not decoration.",
        note: { kind: "reader",
                body: "<p><b>Read the text near a chart before you read the chart.</b> These are proportions, not counts. A slice that halves may represent more deaths than before if the population has doubled — the chart cannot tell you, and only the surrounding text can.</p>" },
        chart: {
          kind: "pie-pair", title: "Leading causes of death, then and now",
          sub: "Same six categories, same colours in both halves, so they can be compared",
          source: "Illustrative, authored for this item",
          categories: ["Infectious disease", "Heart and circulatory", "Cancer", "Injury", "Respiratory", "Other"],
          left:  { label: "1900",  values: { "Infectious disease": 44, "Heart and circulatory": 14, "Cancer": 4, "Injury": 9, "Respiratory": 12, "Other": 17 } },
          right: { label: "Today", values: { "Infectious disease": 5, "Heart and circulatory": 31, "Cancer": 27, "Injury": 6, "Respiratory": 13, "Other": 18 } },
          cols: ["Cause", "1900", "Today"],
          rows: [["Infectious disease","44%","5%"],["Heart and circulatory","14%","31%"],["Cancer","4%","27%"],
                 ["Injury","9%","6%"],["Respiratory","12%","13%"],["Other","17%","18%"]]
        },
        items: [
          { q: "Cancer rises from 4% to 27%. What does that <i>not</i> tell you?",
            options: [
              { text: "Whether more people are getting cancer.", correct: true,
                why: "These are shares of deaths. If infectious disease stops killing the young, more people live long enough to die of cancer — the share can rise with no change in risk at all. Only the text beside the chart can settle it." },
              { text: "Whether cancer's share of deaths rose.", why: "That is exactly what it does tell you." },
              { text: "Which category was largest in 1900.", why: "The key and the labels give that directly." }
            ] }
        ],
        closer: { kind: "life",
          body: "<p>Find any before-and-after chart. Are its two halves proportions or counts? If it does not say, you cannot read it.</p>" } }
    ]
  };
})();
