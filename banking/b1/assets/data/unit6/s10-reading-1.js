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
      type: 'discuss',
      title: 'Common questions about transfers (FAQ)',
      instruction: 'Read the FAQ page. Notice the indirect questions.<br>Answer the questions.',
      questions: [{
            q: 'What is the most common reason a payment is delayed?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why might a Friday payment not move until Monday?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the spread, and what is it for?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the fee for a transfer of 1,500?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should a customer bring if they want to trace a payment?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
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
      type: 'discuss',
      title: 'How a transfer moves',
      instruction: 'Read the short note. Which banks touch the money?',
      questions: [{
            q: 'How many banks usually touch an international payment?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the correspondent bank do?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is a missing BIC serious?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
