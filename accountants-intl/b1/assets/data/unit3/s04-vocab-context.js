/* Unit 3 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Vocabulary · in context',
    page: 3,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Petty Cash Memo',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 3 · 1C',
      type: 'study',
      source: 'book',
      title: 'Vocabulary in Context: Petty Cash Memo',
      instruction: 'Fill in the blanks with the correct word from the box:',
      html: '<p>Memo: Petty Cash Procedure Reminder</p><p>To the (1) __________: Please remember that the daily (2) __________ for a single petty cash expenditure is EUR 50, or the local equivalent. You must prepare a (3) __________ for every payment and ensure that the (4) __________ receipt is securely attached. If there is a (5) __________ during (6) __________ reconciliation, it must be reported to the Group Finance Manager immediately.</p>',
      playable: [
        { t: 'Petty Cash Procedure Reminder', role: 'narrator' },
        {
          t: 'To the (1) __________: Please remember that the daily (2) __________ for a single petty cash expenditure is EUR 50, or the local equivalent.',
          role: 'narrator'
        },
        {
          t: 'You must prepare a (3) __________ for every payment and ensure that the (4) __________ receipt is securely attached.',
          role: 'narrator'
        },
        {
          t: 'If there is a (5) __________ during (6) __________ reconciliation, it must be reported to the Group Finance Manager immediately.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reconcile', caption: 'Vocabulary · Vocabulary in Context: Petty Cash Memo' }
    },
    {
      id: 'c2',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 3 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Petty Cash Memo',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>Memo: Petty Cash Procedure Reminder</p><p>To the [[1]]: Please remember that the daily [[2]] for a single petty cash expenditure is EUR 50, or the local equivalent. You must prepare a [[3]] for every payment and ensure that the [[4]] receipt is securely attached. If there is a [[5]] during [[6]] reconciliation, it must be reported to the Group Finance Manager immediately.</p></div>',
      answers: {
        '1': ['custodian'],
        '2': ['limit'],
        '3': ['voucher'],
        '4': ['original'],
        '5': ['discrepancy'],
        '6': ['account']
      },
      bank: ['account', 'custodian', 'discrepancy', 'limit', 'original', 'voucher'],
      whyTitle: 'The completed memo',
      notes: null,
      visual: {
        spot: 'discrepancy',
        caption: 'Vocabulary · Vocabulary in Context: Petty Cash Memo',
        cls: 'vis-sm'
      }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
