/* Unit 1 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a short conversation at the front '
  + 'desk and one between colleagues, and answer questions about who is '
  + 'who.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 1 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Sami is a… A) manager B) porter C) waiter D) cook [[1]]'
        + '<br>'
        + '2. Rana is the… A) receptionist B) housekeeper C) concierge D) manager [[2]]'
        + '<br>'
        + '3. The team members… A) work alone B) help each other C) never talk '
            + 'D) go home early [[3]]'
        + '</div>',
      answers: {
        '1': ['F'],
        '2': ['T'],
        '3': ['T']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>F</b>',
        '2': '<b>T</b>',
        '3': '<b>T</b>'
      }
    }
  ]
});
