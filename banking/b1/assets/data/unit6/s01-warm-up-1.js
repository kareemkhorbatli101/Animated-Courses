/* Unit 6 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s01', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say why people send money abroad, '
  + 'and describe how it is usually sent where you live.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 6 · W-A',
      visual: { spot: 'rate-board' },
      type: 'discuss',
      title: 'Changing and sending money (discussion)',
      instruction: 'In small groups, talk about moving money between countries.',
      questions: [{
            q: 'Who in your country receives money from abroad, and why?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What do people worry about most: the rate, the fee, or the time?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['My cousin works abroad and sends money home every month. He uses the '
        + 'bank because it is safer, even though it is a little slower.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 6 · W-B',
      type: 'discuss',
      title: 'Polite questions (think–pair)',
      instruction: 'Think for one minute, then compare with a partner.<br>Useful words: '
  + 'Use the words rate, fee, transfer and exchange in your answers.',
      questions: [{
            q: 'Which sounds better to a customer: “What is the rate?” or “Could you '
              + 'tell me what the rate is?”',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does a bank use longer, politer questions?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
