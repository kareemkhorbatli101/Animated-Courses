/* Unit 9 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s01', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say why people save, and what stops them.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 9 · W-A',
      visual: { spot: 'savings-goal' },
      type: 'discuss',
      title: 'Why we save (discussion)',
      instruction: 'In small groups, talk about why people save money.',
      questions: [{
            q: 'What do people in your country save for most often?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What stops people from saving?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Some people save for something they want, like a car. Others save '
        + 'because they are worried about losing their job. Both are good '
        + 'reasons, but they need different accounts.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 9 · W-B',
      type: 'discuss',
      title: 'A saving goal (think–pair)',
      instruction: 'Think of one goal, then tell your partner three things about '
  + 'it.<br>Useful words: Use the words goal, amount, monthly and interest '
  + 'in your answers.',
      questions: [{
            q: 'How much is the goal, and when do you want to reach it?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How much would you need to put aside each month?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
