/* Unit 10 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short farewell message and a '
  + 'note reporting what a guest said.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 10 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What is Lina thanking the guest for?',
            model: 'For staying at the hotel.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What has she attached?',
            model: 'The receipt.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does she promise will be waiting for the guest?',
            model: 'A warm cup of coffee.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 10 · P6 B',
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. A guest is leaving. Write a short thank-you and '
  + 'farewell message (40–60 words). Report one thing the guest said, and '
  + 'invite them to return.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
