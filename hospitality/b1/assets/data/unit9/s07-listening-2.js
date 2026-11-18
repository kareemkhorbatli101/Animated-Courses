/* Unit 9 §7 — Listening and Dialogue (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s07', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Listening and Dialogue (2)', part: '3',
          section: '7', lesson: 'Listening and Dialogue (2)', title: 'Listening and Dialogue (2)' },
  objective: 'By the end of Part 3 you can follow a complaint and note the problem, '
  + 'the guest\'s feeling and what was promised.',
  cards: [
    {
      id: 'c1',
      ref: 'B',
      bookRef: 'Unit 9 · P3 B',
      type: 'cloze',
      title: 'Listen again and choose the best answer (A–D)',
      instruction: 'Listen again and choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The problem is a charge for a… A) room B) taxi C) dinner D) phone '
            + 'call [[1]]'
        + '<br>'
        + '2. The charge was really for… A) another room B) the guest C) '
            + 'breakfast D) the spa [[2]]'
        + '<br>'
        + '3. Lina says she will… A) keep the charge B) remove the charge C) add '
            + 'a charge D) call the police [[3]]'
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
