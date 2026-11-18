/* Unit 2 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short description of a hotel\'s '
  + 'facilities for a guest to read.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 2 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'Name two facilities on the ground floor.',
            model: '(any two) restaurant, café, spa, garden.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is on the first floor?',
            model: 'A gym and a swimming pool.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the car park?',
            model: 'Under the building.',
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
      bookRef: 'Unit 2 · P6 B',
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Describe a place you know (your hotel, home, or '
  + 'school) in 40–60 words. Use there is / there are and two '
  + 'prepositions.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
