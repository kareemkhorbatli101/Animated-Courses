/* Unit 6 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Vocabulary · in context',
    page: 6,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Internal Audit Report',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 6 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: Internal Audit Report',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>The internal (1) ________ found a significant (2) ________ between the general ledger and the bank statement. This was partially due to an (3) ________ of a large vendor payment. The (4) ________ procedure failed to catch it last month. We must implement stronger internal (5) ________ to prevent this from happening again. The amount has been placed in the (6) ________ account while the cause is being investigated.</p>',
      playable: [
        {
          t: 'The internal (1) ________ found a significant (2) ________ between the general ledger and the bank statement.',
          role: 'narrator'
        },
        { t: 'This was partially due to an (3) ________ of a large vendor payment.', role: 'narrator' },
        { t: 'The (4) ________ procedure failed to catch it last month.', role: 'narrator' },
        {
          t: 'We must implement stronger internal (5) ________ to prevent this from happening again.',
          role: 'narrator'
        },
        {
          t: 'The amount has been placed in the (6) ________ account while the cause is being investigated.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'ledger', caption: 'Vocabulary · Vocabulary in Context: Internal Audit Report' }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 6 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Internal Audit Report',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>The internal [[1]] found a significant [[2]] between the general ledger and the bank statement. This was partially due to an [[3]] of a large vendor payment. The [[4]] procedure failed to catch it last month. We must implement stronger internal [[5]] to prevent this from happening again. The amount has been placed in the [[6]] account while the cause is being investigated.</p></div>',
      answers: {
        '1': ['audit'],
        '2': ['discrepancy'],
        '3': ['omission'],
        '4': ['reconciliation'],
        '5': ['controls'],
        '6': ['suspense']
      },
      bank: ['audit', 'controls', 'discrepancy', 'omission', 'reconciliation', 'suspense'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'discrepancy',
        caption: 'Vocabulary · Vocabulary in Context: Internal Audit Report',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
