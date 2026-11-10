/* Unit 8 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Vocabulary · in context',
    page: 8,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: The Accounting Cycle Steps',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 8 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: The Accounting Cycle Steps',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>The accounting (1) ________ begins with recording transactions in the (2) ________. At the end of the period, the accounts are closed. This involves transferring the (3) ________ account balances (revenue and expenses) to the (4) ________ earnings account. A (5) ________ is often used to help prepare the adjusted trial (6) ________.</p>',
      playable: [
        {
          t: 'The accounting (1) ________ begins with recording transactions in the (2) ________.',
          role: 'narrator'
        },
        { t: 'At the end of the period, the accounts are closed.', role: 'narrator' },
        {
          t: 'This involves transferring the (3) ________ account balances (revenue and expenses) to the (4) ________ earnings account.',
          role: 'narrator'
        },
        {
          t: 'A (5) ________ is often used to help prepare the adjusted trial (6) ________.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'transaction',
        caption: 'Vocabulary · Vocabulary in Context: The Accounting Cycle Steps'
      }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 8 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: The Accounting Cycle Steps',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>The accounting [[1]] begins with recording transactions in the [[2]]. At the end of the period, the accounts are closed. This involves transferring the [[3]] account balances (revenue and expenses) to the [[4]] earnings account. A [[5]] is often used to help prepare the adjusted trial [[6]].</p></div>',
      answers: {
        '1': ['cycle'],
        '2': ['journals'],
        '3': ['nominal'],
        '4': ['retained'],
        '5': ['worksheet'],
        '6': ['balance']
      },
      bank: ['Balance', 'cycle', 'journals', 'nominal', 'retained', 'worksheet'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'journal',
        caption: 'Vocabulary · Vocabulary in Context: The Accounting Cycle Steps',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
