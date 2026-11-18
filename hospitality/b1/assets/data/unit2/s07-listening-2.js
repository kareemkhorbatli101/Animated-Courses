/* Unit 2 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a guest asking where something '
  + 'is, and answer with the floor and the direction.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 2 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The resort is… A) in the mountains B) on the beach C) in the city '
            + 'D) in the desert [[1]]'
        + '<br>'
        + '2. At the resort there are… A) two restaurants B) six restaurants C) '
            + 'no restaurants D) one restaurant [[2]]'
        + '<br>'
        + '3. The sea-view rooms are popular in… A) winter B) autumn C) summer '
            + 'D) spring [[3]]'
        + '</div>',
      answers: {
        '1': ['T'],
        '2': ['T'],
        '3': ['F']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>T</b>',
        '2': '<b>T</b>',
        '3': '<b>F</b>'
      }
    }
  ]
});
