/* Unit 7 §3 — Vocabulary and Terminology (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s03', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Vocabulary and Terminology (2)', part: '1',
          section: '3', lesson: 'Vocabulary and Terminology (2)', title: 'Vocabulary and Terminology (2)' },
  objective: 'By the end of Part 1 you can name the items in a room and on a '
  + 'trolley, and the words for cleaning and supplying a room.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 7 · P1 D',
      visual: { img: '../assets/figures/fig-7.2.png', caption: 'A room-service breakfast tray.' },
      type: 'quizset',
      title: 'Look at Figure 7.2',
      instruction: 'Look at Figure 7.2. What is on the tray? Choose the best answer.',
      display: 'cards',
      items: [{
          q: 'The hot drink is…',
          options: [{
            t: 'coffee',
            ok: true,
            why: 'The book\'s answer for this one is “coffee”.'
          },
            {
            t: 'juice',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The cold drink is…',
          options: [{
            t: 'tea',
            ok: false,
            why: ''
          },
            {
            t: 'orange juice',
            ok: true,
            why: 'The book\'s answer for this one is “orange juice”.'
          }]
        },
      {
          q: 'On the plate there is…',
          options: [{
            t: 'an egg and bread',
            ok: true,
            why: 'The book\'s answer for this one is “an egg and bread”.'
          },
            {
            t: 'soup',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 7 · P1 E',
      type: 'study',
      title: 'Classify',
      instruction: 'Classify. Where does each task belong? Write it in the correct column.',
      doneLabel: 'I have read this'
    }
  ]
});
