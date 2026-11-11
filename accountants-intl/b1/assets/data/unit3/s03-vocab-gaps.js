/* Unit 3 · s03-vocab-gaps — Vocabulary · in use
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s03-vocab-gaps', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Vocabulary · in use',
    page: 3,
    section: '03',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · in use'
  },
  objective: 'Transaction Verbs',
  cards: [
    {
      id: 'c1',
      covers: ['1B'],
      ref: '1B',
      bookRef: 'Unit 3 · 1B',
      type: 'cloze',
      title: 'Transaction Verbs',
      instruction: 'Complete the sentences using the correct word from the box.',
      text: '<div style="font-size:16px;line-height:2.4">1. We need the Financial Controller to [[1]] the purchase order immediately.<br>2. The custodian will [[2]] cash from the general cashier.<br>3. We must [[3]] every expense, even the small ones.<br>4. The accounts payable department will [[4]] the payment to the supplier next week.<br>5. I must [[5]] for these stationery items from my own wallet first.<br>6. It is the custodian\'s duty to [[6]] the fund weekly.</div>',
      answers: {
        '1': ['approve'],
        '2': ['request'],
        '3': ['document'],
        '4': ['issue'],
        '5': ['pay'],
        '6': ['reconcile']
      },
      bank: ['approve', 'document', 'issue', 'pay', 'reconcile', 'request'],
      whyTitle: 'What decided each one',
      why: {
        '1': '<b>approve</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '2': '<b>request</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>document</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '4': '<b>issue</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '5': '<b>pay</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '6': '<b>reconcile</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 1.</b> We need the Financial Controller to <u>approve</u> the purchase order immediately.',
      brief: 'The people and the roles. Match them by what each one DOES, not by which word looks similar.',
      visual: { spot: 'transaction', caption: 'Vocabulary · Transaction Verbs' }
    }
  ],
  prev: 's02-vocab-match',
  prevLabel: 'Vocabulary · match',
  next: 's04-vocab-context',
  nextLabel: 'Vocabulary · in context'
});
