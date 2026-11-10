/* Unit 7 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Vocabulary · in context',
    page: 7,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Monthly Report Summary',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 7 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: Monthly Report Summary',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>The monthly (1) ________ showed that sales revenue was (2) ________ the (3) ________ by 15%. This resulted in a (4) ________ variance. However, the expense report indicated that R&amp;D costs (5) ________ their budget by 20%. We need to examine this (6) ________ to determine if it is a one-off issue.</p>',
      playable: [
        { t: 'This resulted in a (4) ________ variance.', role: 'narrator' },
        {
          t: 'However, the expense report indicated that R&D costs (5) ________ their budget by 20%.',
          role: 'narrator'
        },
        {
          t: 'We need to examine this (6) ________ to determine if it is a one-off issue.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'variance', caption: 'Vocabulary · Vocabulary in Context: Monthly Report Summary' }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 7 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Monthly Report Summary',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>The monthly [[1]] showed that sales revenue was [[2]] the [[3]] by 15%. This resulted in a [[4]] variance. However, the expense report indicated that R&amp;D costs [[5]] their budget by 20%. We need to examine this [[6]] to determine if it is a one-off issue.</p></div>',
      answers: {
        '1': ['analysis'],
        '2': ['exceeding'],
        '3': ['target'],
        '4': ['favourable'],
        '5': ['underperformed'],
        '6': ['trend']
      },
      bank: ['analysis', 'exceeding', 'favourable', 'target', 'trend', 'underperformed'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'debit',
        caption: 'Vocabulary · Vocabulary in Context: Monthly Report Summary',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
