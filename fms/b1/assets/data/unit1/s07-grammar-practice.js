/* Unit 1 §7 — Part 2 - Grammar, practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s07', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 2 - Grammar, practice', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 1.',
  prev: 's06-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's08-grammar-speaking', nextLabel: 'Part 2 - Grammar, speaking',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2C',
      bookRef: 'Unit 1 · Part 2 · 2C',
      type: 'cloze',
      title: 'Guided Practice',
      instruction: 'Complete each sentence with the correct form of the verb: Present Simple '
        + 'or Present Continuous.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. She [[1]] (work) at the Consular Section of the Ministry of Foreign '
          + 'Affairs.'
        + '<br>'
        + '2. We [[2]] (prepare) for the arrival of the Italian delegation this week.'
        + '<br>'
        + '3. He usually [[3]] (handle) the morning appointment log before nine '
          + 'o\'clock.'
        + '<br>'
        + '4. I [[4]] (review) the visitor security clearance list right now — please '
          + 'give me one moment.'
        + '<br>'
        + '5. They [[5]] (represent) Viet Nam at the UN Human Rights Council every '
          + 'year.'
        + '<br>'
        + '6. Right now, I [[6]] (coordinate) the Japanese trade delegation\'s visit '
          + 'with the Economic Affairs Office.'
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
      bookRef: 'Unit 1 · Part 2 · 2D',
      type: 'editor',
      title: 'Error Correction',
      instruction: 'Find and correct the grammar mistake in each sentence:',
      write: true,
      items: [{ wrong: 'She working in the Protocol Department this month.',
          accept: ['She working in the Protocol Department this month.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'We prepares visitor badges every morning.',
          accept: ['We prepares visitor badges every morning.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'I am coordinate the press accreditation right now.',
          accept: ['I am coordinate the press accreditation right now.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'They is managing the German delegation\'s schedule this week.',
          accept: ['They is managing the German delegation\'s schedule this week.'],
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
