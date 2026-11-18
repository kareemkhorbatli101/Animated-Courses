/* Unit 6 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a guest asking for a '
  + 'recommendation and note what they actually want.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 6 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Palmyra is more famous for its… A) beaches B) ancient ruins C) '
            + 'shops D) hotels [[1]]'
        + '<br>'
        + '2. Aleppo has the biggest… A) beach B) mosque C) citadel D) desert [[2]]'
        + '<br>'
        + '3. For two days, Rana recommends… A) Palmyra B) Aleppo C) Latakia D) '
            + 'staying at the hotel [[3]]'
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
