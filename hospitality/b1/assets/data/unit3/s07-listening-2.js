/* Unit 3 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a booking taken by telephone and '
  + 'note the dates, the room type and the name.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 3 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest wants a table for… A) two B) three C) four D) five [[1]]'
        + '<br>'
        + '2. The time is… A) six o\'clock B) seven o\'clock C) eight o\'clock '
            + 'D) nine o\'clock [[2]]'
        + '<br>'
        + '3. Lina offers a table… A) by the window B) near the kitchen C) '
            + 'outside D) in the lobby [[3]]'
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
