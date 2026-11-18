/* Unit 6 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s10', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a transfer instruction for its '
  + 'parties, its reference and its charges, find the indirect questions '
  + 'in it, and say what is still missing.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 6 · 5A',
      visual: { spot: 'rate-board' },
      type: 'shortanswer',
      title: 'Common questions about transfers (FAQ)',
      instruction: 'Read the FAQ page. Notice the indirect questions.<br>Answer the questions.',
      items: [{ q: '1. What is the most common reason a payment is delayed?',
          accept: ['What is the most common reason a payment is delayed?'],
          keys: ['common',
              'reason'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why might a Friday payment not move until Monday?',
          accept: ['Why might a Friday payment not move until Monday?'],
          keys: ['might',
              'friday'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is the spread, and what is it for?',
          accept: ['What is the spread, and what is it for?'],
          keys: ['spread'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What is the fee for a transfer of 1,500?',
          accept: ['What is the fee for a transfer of 1,500?'],
          keys: ['transfer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. What should a customer bring if they want to trace a payment?',
          accept: ['What should a customer bring if they want to trace a payment?'],
          keys: ['should',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 6 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the FAQ. Find three indirect questions.<br>Now rewrite '
  + 'these direct questions as the FAQ would write them.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Indirect question 1: [[1]]'
        + '<br>'
        + '2. Indirect question 2: [[2]]'
        + '<br>'
        + '3. Indirect question 3: [[3]]'
        + '<br>'
        + '4. How much is the fee? → [[4]]'
        + '<br>'
        + '5. Where is my money? → [[5]]'
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
      bookRef: 'Unit 6 · 5C',
      type: 'shortanswer',
      title: 'How a transfer moves',
      instruction: 'Read the short note. Which banks touch the money?',
      items: [{ q: '1. How many banks usually touch an international payment?',
          accept: ['How many banks usually touch an international payment?'],
          keys: ['banks',
              'usually'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does the correspondent bank do?',
          accept: ['What does the correspondent bank do?'],
          keys: ['correspondent'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Why is a missing BIC serious?',
          accept: ['Why is a missing BIC serious?'],
          keys: ['missing',
              'serious'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
