/* Unit 5 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow an order being taken and note '
  + 'what each guest asked for.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 5 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest thought the meal was… A) bad B) delicious C) cold D) '
            + 'small [[1]]'
        + '<br>'
        + '2. The guest wanted… A) a dessert B) a coffee C) the bill D) more food [[2]]'
        + '<br>'
        + '3. The waiter asked the guest to… A) pay more B) come again C) wait '
            + 'D) leave quickly [[3]]'
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
