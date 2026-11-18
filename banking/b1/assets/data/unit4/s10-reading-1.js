/* Unit 4 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s10', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a product sheet for its rates, fees '
  + 'and conditions, find the comparisons it makes, and say which customer '
  + 'it is for.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 4 · 5A',
      visual: { spot: 'bank-card' },
      type: 'discuss',
      title: 'Our products, compared',
      instruction: 'Read the product page. Notice the comparatives and '
  + 'superlatives.<br>Answer the questions.',
      questions: [{
            q: 'Which account is the most flexible, and why does it pay less?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How many withdrawals a year does the Step Saver allow?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What happens if you take money out of the Fixed 12 early?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is the rate not the same in every country?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the page suggest if a customer is not sure?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 4 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the product page. Find two comparatives and two '
  + 'superlatives.<br>Now complete these sentences about the accounts.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Comparatives: [[1]] , [[1]]'
        + '<br>'
        + '2. Superlatives: [[2]] , [[2]]'
        + '<br>'
        + '3. The Fixed 12 pays a [[3]] (high) rate than the Step Saver.'
        + '<br>'
        + '4. The Everyday Saver is the [[4]] (flexible) of the three.'
        + '<br>'
        + '5. The Step Saver is [[5]] (good) than the Everyday Saver for '
            + 'two-year savings.'
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
      bookRef: 'Unit 4 · 5C',
      type: 'discuss',
      title: 'Meet a customer',
      instruction: 'Read the short customer profile. Which account would you recommend?',
      questions: [{
            q: 'What does Rafael do, and where?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does he keep two thousand separate?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does Rafael think would suit him better than one account?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
