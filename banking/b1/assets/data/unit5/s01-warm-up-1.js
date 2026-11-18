/* Unit 5 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s01', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can describe how people bank online '
  + 'where you live, and say what stops some customers from using an app.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 5 · W-A',
      visual: { spot: 'atm' },
      type: 'discuss',
      title: 'Digital banking (discussion)',
      instruction: 'In small groups, talk about how you use banking on a phone or computer.',
      questions: [{
            q: 'What do you do on the app, and what do you still do at the branch?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What do your customers find hardest about the app?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['I check my balance on the app every morning. I pay my bills online, '
        + 'but I still go to the branch for cash.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 5 · W-B',
      type: 'discuss',
      title: 'Quick survey',
      instruction: 'Ask three classmates and note their answers. Two minutes '
  + 'only.<br>Useful words: Use the words log in, password, code, app and '
  + 'transfer in your answers.',
      questions: [{
            q: 'Do you use the app every day, every week, or rarely?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the one thing you wish the app could do?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
