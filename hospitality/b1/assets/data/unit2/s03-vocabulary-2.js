/* Unit 2 §3 — Vocabulary and Terminology (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s03', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Vocabulary and Terminology (2)', part: '1',
          section: '3', lesson: 'Vocabulary and Terminology (2)', title: 'Vocabulary and Terminology (2)' },
  objective: 'By the end of Part 1 you can name a hotel\'s facilities and its '
  + 'floors, and say where each one is.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 2 · P1 D',
      type: 'quizset',
      title: 'Where is it?',
      instruction: 'Where is it? Choose the best answer.',
      display: 'cards',
      items: [{
          q: 'The gym is on the…',
          options: [{
            t: 'ground floor',
            ok: false,
            why: ''
          },
            {
            t: 'first floor',
            ok: true,
            why: 'The book\'s answer for this one is “first floor”.'
          }]
        },
      {
          q: 'The car park is…',
          options: [{
            t: 'under the building',
            ok: true,
            why: 'The book\'s answer for this one is “under the building”.'
          },
            {
            t: 'on the roof',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The garden is…',
          options: [{
            t: 'in front of reception',
            ok: false,
            why: ''
          },
            {
            t: 'behind the hotel',
            ok: true,
            why: 'The book\'s answer for this one is “behind the hotel”.'
          }]
        }]
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 2 · P1 E',
      type: 'study',
      title: 'Classify',
      instruction: 'Classify. Write each facility on the correct floor.',
      doneLabel: 'I have read this'
    }
  ]
});
