/* Unit 3 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s booking language again '
  + 'without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 3 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A room with one big bed for two people is a [[1]] room.'
        + '<br>'
        + '2. The first day of the stay is [[2]].'
        + '<br>'
        + '3. The price of a room for one night is the [[3]].'
        + '</div>',
      answers: {
        '1': ['double'],
        '2': ['check-in'],
        '3': ['rate']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>double</b>',
        '2': '<b>check-in</b>',
        '3': '<b>rate</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 3 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Make the sentence polite. Use Could you / Could I / Would you like.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Spell your name. → [[1]]'
        + '<br>'
        + '2. Give me your phone number. → [[2]]'
        + '<br>'
        + '3. (offer) a sea-view room? → [[3]]'
        + '<br>'
        + '4. (offer) send a confirmation. → [[4]]'
        + '</div>',
      answers: {
        '1': ['Could you spell your name, please?'],
        '2': ['Could I have your phone number, please?'],
        '3': ['Would you like a sea-view room?'],
        '4': ['Would you like me to send a confirmation? / I\'ll send a confirmation.']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Could you spell your name, please?</b>',
        '2': '<b>Could I have your phone number, please?</b>',
        '3': '<b>Would you like a sea-view room?</b>',
        '4': '<b>Would you like me to send a confirmation? / I\'ll send a '
          + 'confirmation.</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 3 · P10 C',
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What is a deposit?',
            model: 'Money paid in advance to hold a room.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When is a deposit common? (give one example)',
            model: 'For large bookings / busy times (e.g. summer at the resort).',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What happens to the deposit when the guest arrives?',
            model: 'It becomes part of the payment for the room.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
