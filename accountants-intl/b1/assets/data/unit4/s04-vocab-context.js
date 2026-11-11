/* Unit 4 · s04-vocab-context — Vocabulary · in context
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s04-vocab-context', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Vocabulary · in context',
    page: 4,
    section: '04',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in context'
  },
  objective: 'Vocabulary in Context: Stock Check Memo',
  cards: [
    {
      id: 'c1',
      covers: ['1C'],
      ref: '1C',
      bookRef: 'Unit 4 · 1C',
      type: 'cloze',
      title: 'Vocabulary in Context: Stock Check Memo',
      instruction: 'Fill in the blanks with the correct word from the box: Every word you need is in the bank below.',
      text: '<div style="font-size:16px;line-height:2.2"><p>Memo: Quarterly Stock Check</p><p>The physical [[1]] of office supplies showed a significant [[2]] when compared to the [[3]] record. We have found that the [[4]] of printer toner is below the [[5]], meaning we need to order more immediately. Furthermore, the old fax machines are considered [[6]] and should be removed from the assets list.</p></div>',
      answers: {
        '1': ['quantity'],
        '2': ['variance'],
        '3': ['ledger'],
        '4': ['supplies'],
        '5': ['reorder point'],
        '6': ['obsolete']
      },
      bank: ['ledger', 'obsolete', 'quantity', 'reorder point', 'supplies', 'variance'],
      whyTitle: 'The completed memo',
      notes: null,
      brief: 'The same words inside a real document. The gaps are not a memory test: read the whole message first and let the sentence tell you which word fits.',
      visual: { spot: 'ledger', caption: 'Vocabulary · Vocabulary in Context: Stock Check Memo' }
    }
  ],
  prev: 's03-vocab-gaps',
  prevLabel: 'Vocabulary · in use',
  next: 's05-vocab-build',
  nextLabel: 'Word building'
});
