/* Unit 8 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s10', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a procedure note for what is '
  + 'mandatory and what is not, find the obligation language that carries '
  + 'it, and say what happens if a step is missed.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 8 · 5A',
      visual: { spot: 'kyc-check' },
      type: 'shortanswer',
      title: 'A staff compliance guide',
      instruction: 'Read the staff guide. Notice must, mustn’t and don’t have '
  + 'to.<br>Answer the questions.',
      items: [{ q: '1. What must you do if an international rule and a local rule differ?',
          accept: ['What must you do if an international rule and a local rule differ?'],
          keys: ['international',
              'local'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What two things must be done before an account is opened?',
          accept: ['What two things must be done before an account is opened?'],
          keys: ['things',
              'before'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. When don’t you have to ask for a second document?',
          accept: ['When don’t you have to ask for a second document?'],
          keys: ['second',
              'document'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What must you do if you are unsure whether something is unusual?',
          accept: ['What must you do if you are unsure whether something is unusual?'],
          keys: ['unsure',
              'whether'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. Why mustn’t staff tell a customer that a report has been made?',
          accept: ['Why mustn’t staff tell a customer that a report has been made?'],
          keys: ['mustn',
              'staff'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 8 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the guide. Find one example of each form.<br>Now '
  + 'complete these sentences about the rules.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. must: [[1]]'
        + '<br>'
        + '2. mustn’t: [[2]]'
        + '<br>'
        + '3. don’t have to: [[3]]'
        + '<br>'
        + '4. You [[4]] keep the records for at least five years.'
        + '<br>'
        + '5. You [[5]] decide alone; you can escalate.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 8 · 5C',
      type: 'shortanswer',
      title: 'Why the rules protect you',
      instruction: 'Read the short note. Who do the rules protect?',
      items: [{ q: '1. Who do new staff think the rules protect?',
          accept: ['Who do new staff think the rules protect?'],
          keys: ['staff',
              'think'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What happens if you escalate something that turns out to be nothing?',
          accept: ['What happens if you escalate something that turns out to be nothing?'],
          keys: ['happens',
              'escalate'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. How do the rules protect staff from pressure?',
          accept: ['How do the rules protect staff from pressure?'],
          keys: ['rules',
              'protect'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
