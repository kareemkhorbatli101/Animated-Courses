/* Unit 4 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a check-in and note the room, the '
  + 'nights and what the guest was told.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 4 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The wake-up call is for… A) 5:00 B) 5:30 C) 6:00 D) 6:30 [[1]]'
        + '<br>'
        + '2. The taxi is for… A) 5:30 B) 6:00 C) 7:00 D) 8:00 [[2]]'
        + '<br>'
        + '3. The taxi is going to wait… A) at the entrance B) in the garden C) '
            + 'at the airport D) in the café [[3]]'
        + '</div>',
      answers: {
        '1': ['T'],
        '2': ['F'],
        '3': ['T']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>T</b>',
        '2': '<b>F</b>',
        '3': '<b>T</b>'
      }
    }
  ]
});
