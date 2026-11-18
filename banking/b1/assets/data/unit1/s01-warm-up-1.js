/* Unit 1 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s01', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can name the jobs and the services you '
  + 'find in a bank, describe what banking is like where you live, and '
  + 'talk about a recent visit to a bank.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 1 · W-A',
      visual: { spot: 'branch-plan' },
      type: 'cloze',
      title: 'Roles and Services (brainstorm)',
      instruction: 'With a partner, list job titles and services you find in a bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Job titles you know: [[1]]'
        + '<br>'
        + '2. Services you know: [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 1 · W-B',
      type: 'discuss',
      title: 'Banking where you live (discussion)',
      instruction: 'Talk about banking where you live. Useful frame: “In my city there '
  + 'are ___ banks, such as ___.”',
      questions: [{
            q: 'What kinds of banks are there in your country?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Do you or your family use any banking services? Which ones?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'W-C',
      bookRef: 'Unit 1 · W-C',
      type: 'discuss',
      title: 'My Banking Experience (pairs)',
      instruction: 'Share a recent visit to a bank (in person or online).',
      questions: [{
            q: 'Was it a good or bad experience? Why?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What was the job title of the person who helped you?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['Last week I visited my bank to pay a bill. A teller helped me, and it '
        + 'was a good experience.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
