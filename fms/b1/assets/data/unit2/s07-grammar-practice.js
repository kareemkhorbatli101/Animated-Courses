/* Unit 2 §7 — Part 2 - Grammar, practice.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s07', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 2 - Grammar, practice', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, practice', title: 'Part 2 - Grammar, practice' },
  objective: 'By the end of Part 2 you can choose the right modal verb for an '
        + 'obligation, a recommendation, a possibility and a polite request, give the '
        + 'ministry example for each, correct modal errors in coordination writing, '
        + 'and make a request of a counterpart at the level of politeness the '
        + 'situation needs.',
  prev: 's06-grammar-notice', prevLabel: 'Part 2 - Grammar, notice',
  next: 's08-grammar-speaking', nextLabel: 'Part 2 - Grammar, speaking',
  cards: [
    {
      id: 'c1',
      covers: ['Part 2'],
      ref: '2C',
      bookRef: 'Unit 2 · Part 2 · 2C',
      type: 'cloze',
      title: 'Guided Practice',
      instruction: 'Complete each sentence with the correct modal verb from the choices given.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. All foreign participants [[1]] (must) obtain security clearance before '
          + 'entering the ministry building for the bilateral session.'
        + '<br>'
        + '2. The liaison officer [[2]] (should) circulate the final agenda to both '
          + 'sides at least 48 hours before the meeting — this is professional best '
          + 'practice.'
        + '<br>'
        + '3. The visiting delegation [[3]] (may) use the side entrance if the main '
          + 'entrance is being prepared for another ceremony.'
        + '<br>'
        + '4. If a participant needs interpretation, they [[4]] (can) request it '
          + 'directly from the Language Services Unit during the session.'
        + '<br>'
        + '5. We [[5]] (need to) finalize the seating arrangement today — the '
          + 'visiting delegation has specific protocol requirements regarding '
          + 'seniority.'
        + '<br>'
        + '6. The joint communiqué [[6]] (shall) be signed by both delegation leads '
          + 'at the conclusion of the working group session.'
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
      bookRef: 'Unit 2 · Part 2 · 2D',
      type: 'editor',
      title: 'Error Correction',
      instruction: 'Find and correct the modal verb error in each sentence:',
      write: true,
      items: [{ wrong: 'All participants musts present a valid government ID at the entrance.',
          accept: ['All participants musts present a valid government ID at the entrance.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The delegation lead should receives the protocol brief by this afternoon.',
          accept: ['The delegation lead should receives the protocol brief by this afternoon.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'You can to contact the interpretation unit if you need assistance during '
            + 'the meeting.',
          accept: ['You can to contact the interpretation unit if you need assistance during '
              + 'the meeting.'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: '_',
          accept: ['_'],
          why: 'The fault is the one this unit\'s focus box names — compare the two '
            + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The minister shall opens the bilateral session with a formal statement at '
            + 'ten o\'clock.',
          accept: ['The minister shall opens the bilateral session with a formal statement at '
              + 'ten o\'clock.'],
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
