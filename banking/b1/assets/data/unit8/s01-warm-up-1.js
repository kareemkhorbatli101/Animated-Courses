/* Unit 8 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s01', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say which bank rules customers '
  + 'find hardest to accept, and why the rules exist.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 8 · W-A',
      visual: { spot: 'kyc-check' },
      type: 'discuss',
      title: 'Rules at the bank (discussion)',
      instruction: 'In small groups, list the rules a bank asks its customers to follow.',
      questions: [{
            q: 'Which rule do customers find hardest to accept?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which rule protects the customer rather than the bank?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['You must show ID to open an account. You must not let anyone else use '
        + 'your card. You do not have to come to the branch for a small '
        + 'transfer.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 8 · W-B',
      type: 'cloze',
      title: 'Must or mustn’t? (quick sort)',
      instruction: 'In pairs, decide whether each line is must or mustn’t. One minute '
  + 'only.<br>Useful words: Use must, mustn’t and don’t have to in your '
  + 'answers.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Check the ID before a large deposit: [[1]]'
        + '<br>'
        + '2. Tell a customer that they have been reported: [[2]]'
        + '<br>'
        + '3. Keep the records for the full period: [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    }
  ]
});
