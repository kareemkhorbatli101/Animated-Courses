/* Unit 8 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short message passing a special '
  + 'request to another department.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 8 · P6 A',
      visual: { img: '../assets/figures/fig-8.5.png', caption: 'A guest-request log: room, request, action, done.' },
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What have the staff already done for the baby?',
            model: 'Put a cot in the room.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What will Lina send up this evening?',
            model: 'An adapter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is the taxi?',
            model: 'Eight o\'clock (tomorrow morning).',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 8 · P6 B',
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. A guest has made two requests and has one special '
  + 'need. Write a short note (40–60 words) confirming what you have done '
  + 'and what you will do. Use will at least twice.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
