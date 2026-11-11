/* Unit 2 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Vocabulary · in context',
    page: 2,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: A Review Email',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 2 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: A Review Email',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>Email: Yesterday\'s Entries</p><p>Hi Daniel,</p><p>Please ensure you [[1]] the petty cash by the end of the day, Nairobi time. We have three [[2]] receipts from the travel department, which is causing an [[3]] discrepancy in the records. I need you to check the [[4]] on all invoices [[5]] yesterday. Remember that all claims over EUR 500 require management [[6]] before [[7]] processing.</p></div>',
      answers: {
        '1': ['reconcile'],
        '2': ['missing'],
        '3': ['outstanding'],
        '4': ['date'],
        '5': ['processed'],
        '6': ['approval'],
        '7': ['batch']
      },
      bank: ['approval', 'batch', 'batches', 'date', 'missing', 'outstanding', 'processed', 'reconcile'],
      whyTitle: 'The completed memo',
      notes: [
        {
          title: 'Seven gaps, six words',
          body: 'The box in the book offers six words for seven gaps, and gap 7 wants the singular <i>batch</i> rather than <i>batches</i>. The bank below has been completed so the exercise can be finished. This is recorded in the errata sent to the author.'
        }
      ],
      brief: 'The same words inside a real document. The gaps are not a memory test: read the whole message first and let the sentence tell you which word fits.',
      visual: { spot: 'debtor', caption: 'Vocabulary · Vocabulary in Context: A Review Email' }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
