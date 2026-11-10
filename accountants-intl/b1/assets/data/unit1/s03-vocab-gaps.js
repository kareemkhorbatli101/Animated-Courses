/* Unit 1 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Vocabulary · in use',
    page: 1,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Professional Roles in the Office',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 1 · 1B',
      type: 'study',
      source: 'book',
      title: 'Professional Roles in the Office',
      instruction: 'Read the descriptions and identify the job title.',
      html: '<p>"I calculate wages and ensure everyone gets their salary on time, in five different payroll systems." ____________________</p><p>"I enter daily data, record receipts, and reconcile the bank accounts." ____________________</p><p>"I process invoices coming in from suppliers and schedule payments." ____________________</p><p>"I check the company\'s financial records to ensure they are accurate and follow the rules." ____________________</p><p>"I prepare the government returns and calculate how much tax each company owes." ____________________</p>',
      playable: [
        {
          t: '"I calculate wages and ensure everyone gets their salary on time, in five different payroll systems.',
          role: 'narrator'
        },
        {
          t: '"I enter daily data, record receipts, and reconcile the bank accounts.',
          role: 'narrator'
        },
        { t: '"I process invoices coming in from suppliers and schedule payments.', role: 'narrator' },
        {
          t: '"I check the company\'s financial records to ensure they are accurate and follow the rules.',
          role: 'narrator'
        },
        {
          t: '"I prepare the government returns and calculate how much tax each company owes.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'receipt', caption: 'Vocabulary · Professional Roles in the Office' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
