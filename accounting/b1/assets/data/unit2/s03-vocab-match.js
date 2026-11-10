/* Unit 2 §3 — Part 1, the matching exercise.

   Six words, seven meanings, one spare. The chips are the MEANINGS and the
   targets are the WORDS, so the spare meaning is a chip left in the pool,
   which is what the book asks for; the other way round it would be a slot
   nobody could ever fill and the card would never register as finished.

   The book's own answers run c, a, e, b, f, d against a pool in a-g order,
   so the pool is already scattered and no gap can be filled by position. */
EAFM.page('u2-s03', {
  book: { source: 'EAFM B1', ref: 'Unit 2 · Part 1', page: 2, section: '3',
          lesson: 'Part 1 · Vocabulary', title: 'Match the six words' },
  objective: 'Know the six words a transaction passes through',
  prev: 's02-read', prevLabel: 'Read',
  next: 's04-vocab-mcq', nextLabel: 'Terminology',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1', bookRef: 'Unit 2 · Part 1', type: 'dragmatch',
      title: 'Match each word with its meaning',
      instruction: 'Match each word (1–6) with its meaning (a–g). <b>There is one meaning you do not need.</b> Drag a meaning onto a word — or click the meaning, then click the word. The first one is done for you.',
      poolLabel: 'Click a meaning, then click the word it belongs to — or drag it there. One meaning is left over on purpose. Double-click a word to take its meaning off again.',
      cols: 2,
      worked: {
        q: '0. month-end',
        a: 'the time when we close and check the accounts for the month',
        why: 'Done for you. Note what kind of thing it is: not a book and not a document, but a <i>time</i> — which is why none of the other six can take this meaning.'
      },
      chips: [
        { id: 'v-a', label: 'a) an entry on the left side of an account' },
        { id: 'v-b', label: 'b) money that the organisation spends' },
        { id: 'v-c', label: 'c) the first book where we write each transaction, in date order' },
        { id: 'v-d', label: 'd) a document that supports and approves a payment' },
        { id: 'v-e', label: 'e) an entry on the right side of an account' },
        { id: 'v-f', label: 'f) money that the organisation receives' },
        { id: 'v-g', label: 'g) a paper that proves a payment took place' }
      ],
      whyTitle: 'What each word means, and what it is not',
      targets: [
        { id: 'w1', num: 1, label: 'journal', accept: 'v-c',
          why: 'The word that decides it is <b>first</b>. The journal is where an entry is born; the ledger, which you met in Unit 1, is where it ends up. "In date order" is the second half of the definition and is what makes a journal different from any other list.' },
        { id: 'w2', num: 2, label: 'debit', accept: 'v-a',
          why: '<b>Left.</b> That is the whole definition — not "money going out", not "a cost". A debit is a position on the page, and nothing else.' },
        { id: 'w3', num: 3, label: 'credit', accept: 'v-e',
          why: '<b>Right</b> — the exact mirror of debit, and deliberately worded the same way. Every entry in this unit has one of each.' },
        { id: 'w4', num: 4, label: 'expense', accept: 'v-b',
          why: 'Money the organisation <b>spends</b>. Compare it with <i>income</i>, which is the same sentence with one verb changed.' },
        { id: 'w5', num: 5, label: 'income', accept: 'v-f',
          why: 'Money the organisation <b>receives</b>. These two are the pair the statement in §15 adds up.' },
        { id: 'w6', num: 6, label: 'voucher', accept: 'v-d',
          why: 'The word doing the work is <b>approves</b>. A receipt proves a payment happened; a voucher proves somebody with authority agreed to it. Reading B uses both in the same paragraph, which is the clearest place to see the difference.' }
      ],
      notes: [{ title: 'Why one meaning is spare',
        body: '(g) "a paper that proves a payment took place" is a <b>receipt</b> — a real and important word in this unit, and the thing Karim brings to the office in Reading B. It is left over here on purpose, because receipt and voucher are the pair learners most often swap: the receipt is evidence that money moved, the voucher is evidence that it was allowed to.' }]
    }
  ]
});
