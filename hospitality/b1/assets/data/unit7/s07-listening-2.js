/* Unit 7 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a room-service order and a '
  + 'housekeeping request, and note what each one needs.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 7 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest has a problem with the… A) bed B) towels C) television '
            + 'D) window [[1]]'
        + '<br>'
        + '2. The rest of the room is… A) dirty B) clean C) cold D) dark [[2]]'
        + '<br>'
        + '3. Salma says she will bring fresh towels… A) tomorrow B) next week '
            + 'C) right away D) never [[3]]'
        + '</div>',
      answers: {
        '1': ['F'],
        '2': ['T'],
        '3': ['F']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>F</b>',
        '2': '<b>T</b>',
        '3': '<b>F</b>'
      }
    }
  ]
});
