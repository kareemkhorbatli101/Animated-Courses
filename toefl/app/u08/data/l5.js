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

  /* The second academic passage: the first is about what ended the
     infections, this one about the fraction everybody quotes. */
  var PASSAGE2 = {
    masthead: "THE NUMBER UNDERNEATH", every: 1,
    blocks: [
      { h: "A fraction with one reliable half", lines: [
        "A case fatality rate divides deaths by recorded cases, and of those two quantities only the first is counted with any confidence.",
        "Deaths are hard to miss; infections are missed constantly, and the proportion missed changes week by week as testing policy changes."
      ] },
      { h: "Why the figure moves without the disease moving", lines: [
        "Early in an outbreak testing is usually confined to people ill enough to attend hospital, so the recorded cases are the severe ones and the computed rate is far too high.",
        "When testing is later extended to mild cases the denominator expands abruptly and the rate collapses, although nothing whatever has changed about the organism.",
        "Both figures are accurate at the moment of publication, and neither describes what a reader takes them to describe."
      ] },
      { h: "What would make it interpretable", lines: [
        "A rate published without its denominator is uninterpretable, and the remedy costs nothing: state the two numbers rather than the quotient.",
        "<i>Fifty deaths among three hundred and thirty people tested</i> contains everything the percentage contains, and it cannot be quoted in a way that hides what it was divided by."
      ] }
    ],
    notes: ["quotient: the result of a division — here, the percentage itself"],
    source: "Written for this book"
  };

  var NOTICE2 = {
    masthead: "HEALTH CENTRE · REGISTRATION", mastColor: "blue", every: 1,
    blocks: [{ lines: [
      "You must register before you can book an appointment.",
      "Registration takes up to three working days.",
      "The walk-in clinic does not require registration.",
      "Repeat prescriptions cannot be requested by telephone."
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

            { id: "1f", section: 1, sectionTitle: "Read", letter: "F",
        kind: "selectintext", task: null, n: 0,
        prompt: "Three short paragraphs. In each one, click the single sentence that does the job named.",
        note: { kind: "reader",
                body: "<p>This unit's reading strategy is to read the text beside a chart. The sentence that matters is usually the one saying what the figures were divided by, or what they could not include.</p>" },
        items: [
          { prompt: "Which sentence states what the figures exclude?",
            text: "The district recorded four hundred confirmed cases between June and August. Testing was available at the clinic on weekdays only. Infections in people who never attended the clinic are therefore absent from the count. The weekly figures were published each Monday.",
            answer: "Infections in people who never attended the clinic are therefore absent from the count.",
            why: "The second sentence gives the cause and this one gives what follows for the data. A limit on availability is not the same statement as a limit on the figures." },
          { prompt: "Which sentence explains why two districts cannot be compared?",
            text: "District A reports a fatality rate of four per cent and District B one of eleven. Both figures are correctly calculated. District B tests only patients admitted to hospital, so its recorded cases are the severe ones. Both districts publish weekly.",
            answer: "District B tests only patients admitted to hospital, so its recorded cases are the severe ones.",
            why: "The only sentence naming a difference in method. <i>Both figures are correctly calculated</i> is there to stop you blaming the arithmetic." },
          { prompt: "Which sentence makes a recommendation?",
            text: "The weekly bulletin gives a single percentage. Readers routinely compare it with the previous week. The denominator changed in three of the last eight weeks. Publishing both numbers rather than the quotient would remove the problem entirely.",
            answer: "Publishing both numbers rather than the quotient would remove the problem entirely.",
            why: "<i>Would</i> plus a proposed action. The three before it establish the problem without proposing anything." }
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
        ] },

      /* ---------------- 4 Read a second article ---------------- */
      { id: "4a", section: 4, sectionTitle: "Read a second article", letter: "A",
        kind: "read", task: "read-academic-passage", cefr: "C1", n: 4,
        prompt: "A second article, on the fraction behind the charts in 3A. Read it, then answer.",
        text: PASSAGE2,
        note: { kind: "reader",
                body: "<p>Read this one with the pair of charts in front of you. It is an argument about the arithmetic underneath both of them.</p>" },
        items: [
          { q: "What is the main idea?",
            options: [
              { text: "A fatality rate is unreliable because its denominator is unreliable, and publishing both numbers fixes it.", correct: true,
                why: "The three sections are the weak half, how it moves, and the remedy." },
              { text: "Fatality rates are calculated incorrectly.", why: "<i>Both figures are accurate at the moment of publication</i> — the arithmetic is never in question." },
              { text: "Testing should be restricted.", why: "The article treats wider testing as what improves the denominator." }
            ] },
          { q: "Why is the rate too high early in an outbreak?",
            options: [
              { text: "Only people ill enough to attend hospital are tested.", correct: true,
                why: "The recorded cases are the severe ones, so the fraction is computed over the wrong set." },
              { text: "The disease is more severe at the start.", why: "<i>Nothing whatever has changed about the organism</i>." },
              { text: "Deaths are over-counted at first.", why: "The article says deaths are the half that is counted reliably." }
            ] },
          { q: "What happens when testing is extended to mild cases?",
            options: [
              { text: "The denominator expands and the rate collapses.", correct: true,
                why: "And the article is careful to add that nothing about the disease has changed." },
              { text: "The number of deaths falls.", why: "Deaths are unaffected by who is tested." },
              { text: "The rate becomes accurate.", why: "It becomes differently inaccurate; both versions are correct for their own denominators." }
            ] },
          { q: "Why does the article prefer “fifty deaths among three hundred and thirty tested”?",
            options: [
              { text: "The denominator is inside the sentence, so it cannot be quoted away.", correct: true,
                why: "That is exactly the reason given: it contains the same information and resists being stripped." },
              { text: "It is more precise.", why: "It carries identical precision; what differs is what survives quotation." },
              { text: "It is shorter.", why: "It is longer, which is the cost the article is accepting." }
            ] }
        ] },

      { id: "4b", section: 4, sectionTitle: "Read a second article", letter: "B",
        kind: "paraphrase", task: null, n: 0,
        prompt: "One sentence from each article, restated. Choose the version that keeps the meaning.",
        note: { kind: "reader",
                body: "<p>The first of these concedes a great deal before disagreeing. A paraphrase that leaves the concession out turns a careful historical argument into a dismissal of medicine.</p>" },
        items: [
          { source: "Both mattered enormously, but the chronology does not entirely support the attribution.",
            options: [
              { text: "Both were very important; the dates, though, do not fully bear out the credit given to them.", correct: true,
                why: "Keeps <i>enormously</i>, keeps <i>entirely</i>, and keeps the objection as one about timing." },
              { text: "Neither antibiotics nor vaccination mattered much.",
                why: "The first half of the sentence says the opposite, as loudly as it can." },
              { text: "The chronology contradicts the attribution completely.",
                why: "<i>Not entirely</i> is a partial objection, and flattening it is the commonest misreading of this article." },
              { text: "Antibiotics arrived before the decline began.",
                why: "The article's point is that the decline came first." }
            ] },
          { source: "Both figures are accurate at the moment of publication, and neither describes what a reader takes them to describe.",
            options: [
              { text: "Each number is correct when it is printed, and neither means what people think it means.", correct: true,
                why: "Keeps the accuracy and the misreading side by side, which is the whole difficulty." },
              { text: "Both figures are wrong.",
                why: "<i>Accurate</i> is the first word of the sentence's claim." },
              { text: "Readers should not be given these figures.",
                why: "The article's remedy is to give more, not less." },
              { text: "The figures become inaccurate after publication.",
                why: "Nothing happens to the figures; what changes is the denominator behind the next one." }
            ] },
          { source: "A society which invests only in treatment is neglecting the conditions that determine how many people require it.",
            options: [
              { text: "Spending on cure alone ignores what decides how many people need curing.", correct: true,
                why: "Keeps <i>only</i>, which is what stops the sentence being an attack on treatment." },
              { text: "Treatment is less important than prevention.",
                why: "A ranking the sentence does not make; it objects to investing in one alone." },
              { text: "Societies should stop funding treatment.",
                why: "Far beyond what the sentence says, and the opposite of its earlier concession." },
              { text: "Conditions have no effect on how many people need treatment.",
                why: "Reverses it." }
            ] }
        ] },

      /* ---------------- 5 Read in daily life again ---------------- */
      { id: "5a", section: 5, sectionTitle: "Read in daily life again", letter: "A",
        kind: "read", task: "read-daily-life", cefr: "A2", n: 2,
        prompt: "A second card from the health centre. Read it.",
        text: NOTICE2,
        items: [
          { q: "You need to be seen today and you have not registered. What can you do?",
            options: [
              { text: "Go to the walk-in clinic.", correct: true, why: "Line 3 makes it the one route that does not require registration." },
              { text: "Book an appointment online.", why: "Line 1 requires registration first." },
              { text: "Register and come back this afternoon.", why: "Line 2 says registration takes up to three working days." }
            ] },
          { q: "How can a repeat prescription be requested?",
            options: [
              { text: "By any route except the telephone.", correct: true,
                why: "Line 4 rules out one method and leaves the others open, which is all the card tells you." },
              { text: "Only in person.", why: "The card excludes the telephone and names no other restriction." },
              { text: "Only by telephone.", why: "That is the one method ruled out." }
            ] }
        ] },

      { id: "5b", section: 5, sectionTitle: "Read in daily life again", letter: "B",
        kind: "tfni", task: "read-daily-life", cefr: "B1", n: 2,
        prompt: "Mark each statement <i>T</i>, <i>F</i> or <i>NI</i>. For T and F, write the line of the <b>card</b>.",
        items: [
          { stem: "You must register before using the walk-in clinic.", answer: "F", line: 3,
            why: "Line 3 says the opposite, and it is there precisely because line 1 would otherwise imply it." },
          { stem: "Registration can be completed online.", answer: "NI", line: null,
            why: "Line 1 says you must register and line 2 how long it takes. How you do it is never stated." }
        ] },

      { id: "5c", section: 5, sectionTitle: "Read in daily life again", letter: "C",
        kind: "read-only", task: null, n: 0,
        prompt: "Two articles, two charts, one habit.",
        text: { blocks: [{ lines: [
          "<b>What ended the infections</b> — mostly not medicine, and the chronology is the evidence.",
          "<b>Why the rate moves</b> — the bottom of the fraction, not the disease.",
          "<b>What to ask</b> — out of how many?"
        ],
        closer: { kind: "life",
          body: "<p>Find any before-and-after chart. Are its two halves proportions or counts? If it does not say, you cannot read it.</p>" } }] } }
    ]
  };
})();
