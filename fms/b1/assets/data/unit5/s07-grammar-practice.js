/* Unit 5 §7 — Part 2 - Grammar, practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s07', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 2 - Grammar, practice', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'Work through Part 2 - Grammar, practice of unit 5.',
  prev: 's06-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's08-grammar-speaking', nextLabel: 'Part 2 - Grammar, speaking',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2C',
      bookRef: 'Unit 5 · Part 2 · 2C',
      type: 'cloze',
      title: 'Guided Practice',
      instruction: 'Complete each sentence with the correct conditional form of the verb '
        + 'given.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. If the Ministry [[1]] (publish) the updated investment guide this '
          + 'month, Klaus\'s board will make a decision by the end of the quarter.'
        + '<br>'
        + '2. If the government [[2]] (reduce) the corporate tax rate in free zones, '
          + 'even more European companies would consider relocating their regional '
          + 'headquarters.'
        + '<br>'
        + '3. If Ms. Al-Sayed [[3]] (visit) the Awash Valley agricultural zone, she '
          + 'will see the full scale of the opportunity.'
        + '<br>'
        + '4. We [[4]] (attract) triple the investment if we had a fully functional '
          + 'one-stop-shop processing centre.'
        + '<br>'
        + '5. If the due diligence report confirms the legal framework is solid, the '
          + 'German delegation [[5]] (proceed) to the next stage.'
        + '<br>'
        + '6. If the Ministry [[6]] (partner) with UNDP on the facilitation '
          + 'framework, the process would become significantly more efficient.'
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
      bookRef: 'Unit 5 · Part 2 · 2D',
      type: 'editor',
      title: 'Error Correction',
      instruction: 'Find and correct the grammar mistake in each sentence:',
      write: true,
      items: [{ wrong: 'If the investment climate will improve, more companies will come.',
          accept: ['If the investment climate will improve, more companies will come.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'If we would restructure the incentive package, we attract more European '
            + 'investors.',
          accept: ['If we would restructure the incentive package, we attract more European '
              + 'investors.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'If Klaus submits the application, we would fast-track the review.',
          accept: ['If Klaus submits the application, we would fast-track the review.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The country would receive more investment if it sets up a dedicated '
            + 'investor services office.',
          accept: ['The country would receive more investment if it sets up a dedicated '
              + 'investor services office.'],
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
