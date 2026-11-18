/* Unit 4 §7 — Part 2 - Grammar, practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s07', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 2 - Grammar, practice', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'By the end of Part 2 you can choose the right future form for a ministry '
        + 'plan - a decision, an arrangement, an intention or a prediction - give the '
        + 'ministry example for each, correct future-form errors in a planning memo, '
        + 'and speak about commitments with the degree of certainty you actually '
        + 'mean.',
  prev: 's06-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's08-grammar-speaking', nextLabel: 'Part 2 - Grammar, speaking',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2C',
      bookRef: 'Unit 4 · Part 2 · 2C',
      type: 'cloze',
      title: 'Guided Practice',
      instruction: 'Complete each sentence with the most appropriate future form from the '
        + 'choices given.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The signing of this cooperation framework [[1]] (represent) a milestone '
          + 'in Kazakhstan\'s bilateral relationship with Japan and open new pathways '
          + 'for economic partnership.'
        + '<br>'
        + '2. The Kazakh and Italian delegations [[2]] (meet) next Tuesday at the '
          + 'ministry to review the first phase of the Cultural Cooperation Protocol '
          + 'implementation — it is already in the diary.'
        + '<br>'
        + '3. The diaspora services program [[3]] (expand) significantly over the '
          + 'next six months — the additional processing capacity has already been '
          + 'approved.'
        + '<br>'
        + '4. If the investment conference is well-organized, it [[4]] (help) attract '
          + 'a wider range of international partners than we have seen so far.'
        + '<br>'
        + '5. The Ministry of Foreign Affairs [[5]] (issue) a joint communiqué at the '
          + 'conclusion of the bilateral summit — this has been confirmed at the '
          + 'highest level.'
        + '<br>'
        + '6. I [[6]] (attend) the France–Kazakhstan Academic Committee inaugural '
          + 'session on Friday — it is in my confirmed schedule.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      whyTitle: 'How each gap was decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '2': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '3': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '4': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '5': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.',
        '6': 'The book prints this sentence for you to complete from the unit\'s own '
          + 'vocabulary; check it against the word list on the vocabulary screen.'
      }
    },
    {
      id: 'c2',
      covers: ['Part 2'],
      ref: '2D',
      bookRef: 'Unit 4 · Part 2 · 2D',
      type: 'editor',
      title: 'Error Correction',
      instruction: 'Find and correct the future form error in each sentence:',
      write: true,
      items: [{ wrong: 'The ministry will announces the conference dates next week.',
          accept: ['The Foreign Minister shall open the bilateral summit with a formal '
              + 'statement.'],
          why: 'The repaired sentence is “The Foreign Minister shall open the bilateral '
            + 'summit with a formal statement.”. The fault is the one this unit\'s focus '
            + 'box names — compare the two sentences word by word and the changed word is '
            + 'the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'We will host the German delegation at the ministry on Wednesday — it is '
            + 'confirmed.',
          accept: ['We will host the German delegation at the ministry on Wednesday — it is '
              + 'confirmed.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'Kazakhstan is going to signs a new cooperation protocol with Japan at the '
            + 'upcoming forum.',
          accept: ['Kazakhstan is going to signs a new cooperation protocol with Japan at the '
              + 'upcoming forum.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The Foreign Minister shall opens the bilateral summit with a formal '
            + 'statement on Kazakhstan\'s diplomatic priorities.',
          accept: ['The Foreign Minister shall opens the bilateral summit with a formal '
              + 'statement on Kazakhstan\'s diplomatic priorities.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
