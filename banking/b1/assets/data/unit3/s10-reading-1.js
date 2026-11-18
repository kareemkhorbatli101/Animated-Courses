/* Unit 3 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s10', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a bank\'s counter guidelines, find '
  + 'the quantifier that carries each rule, and compare the limits with '
  + 'those where you work.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 3 · 5A',
      visual: { spot: 'bank-counter' },
      type: 'discuss',
      title: 'Teller guidelines',
      instruction: 'Read the counter guidelines. Notice the quantifiers (much, many, a '
  + 'few, a little).<br>Answer the questions.',
      questions: [{
            q: 'What should you do if the amount is large?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How many times should you count notes?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why do some customers want large notes?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'When do most mistakes happen?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should you say if you feel rushed?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Who do these guidelines apply to?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 3 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the guidelines. Find one example of each '
  + 'quantifier.<br>Now complete these sentences about the counter.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. much: [[1]]'
        + '<br>'
        + '2. many: [[2]]'
        + '<br>'
        + '3. a few: [[3]]'
        + '<br>'
        + '4. a little: [[4]]'
        + '<br>'
        + '5. There isn’t [[5]] time when the queue is long.'
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
      bookRef: 'Unit 3 · 5C',
      type: 'discuss',
      title: 'A customer’s bank statement',
      instruction: 'Read the short statement note. What does each line show?',
      questions: [{
            q: 'What four things does each line of a statement show?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does DD mean?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why did the customer call the branch?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How should you explain a line to a customer?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
