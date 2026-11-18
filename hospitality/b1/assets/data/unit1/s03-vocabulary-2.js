/* Unit 1 §3 — Vocabulary and Terminology (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s03', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Vocabulary and Terminology (2)', part: '1',
          section: '3', lesson: 'Vocabulary and Terminology (2)', title: 'Vocabulary and Terminology (2)' },
  objective: 'By the end of Part 1 you can name the people who work in a hotel and '
  + 'what each one does, name the things on a front desk, and choose the '
  + 'right greeting for the time of day.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 1 · P1 D',
      type: 'quizset',
      title: 'Choose the best greeting',
      instruction: 'Choose the best greeting.',
      display: 'cards',
      items: [{
          q: 'It is 9 a.m. You say',
          options: [{
            t: 'Good morning',
            ok: true,
            why: 'The book\'s answer for this one is “Good morning”.'
          },
            {
            t: 'Good evening',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'It is 3 p.m. You say',
          options: [{
            t: 'Good night',
            ok: false,
            why: ''
          },
            {
            t: 'Good afternoon',
            ok: true,
            why: 'The book\'s answer for this one is “Good afternoon”.'
          }]
        },
      {
          q: 'It is 8 p.m. You say',
          options: [{
            t: 'Good evening',
            ok: true,
            why: 'The book\'s answer for this one is “Good evening”.'
          },
            {
            t: 'Good morning',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'A guest is leaving. You say',
          options: [{
            t: 'Welcome',
            ok: false,
            why: ''
          },
            {
            t: 'Have a nice day',
            ok: true,
            why: 'The book\'s answer for this one is “Have a nice day”.'
          }]
        }]
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 1 · P1 E',
      type: 'study',
      title: 'Classify',
      instruction: 'Classify. Write each worker in the correct department.',
      doneLabel: 'I have read this'
    }
  ]
});
