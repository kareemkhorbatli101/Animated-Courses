/* Unit 1 §3 — Part 1, the matching exercise.

   The book matches six words to seven meanings and says "There is one
   meaning you do not need." The chips are therefore the MEANINGS and the
   targets are the WORDS: that way the spare meaning is a chip left in the
   pool, which is what the book asks for. The other way round, the spare
   meaning would be a target nobody could ever fill, and the page would
   never register the card as finished.

   The pool is in the book's own a-g order, and the answers run c, a, e, b,
   f, d — so it is already scattered and no gap can be filled by position.
   tools/check-order-spread.cjs measures that. */
EAFM.page('u1-s03', {
  book: { source: 'EAFM B1', ref: 'Unit 1 · Part 1', page: 1, section: '3',
          lesson: 'Part 1 · Vocabulary', title: 'Match the six words' },
  objective: 'Know the six core words of a finance office',
  prev: 's02-read', prevLabel: 'Read',
  next: 's04-vocab-mcq', nextLabel: 'Terminology',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1', bookRef: 'Unit 1 · Part 1', type: 'dragmatch',
      title: 'Match each word with its meaning',
      instruction: 'Match each word (1–6) with its meaning (a–g). <b>There is one meaning you do not need.</b> Drag a meaning onto a word — or click the meaning, then click the word. The first one is done for you.',
      poolLabel: 'Click a meaning, then click the word it belongs to — or drag it there. One meaning is left over on purpose. Double-click a word to take its meaning off again.',
      cols: 2,
      worked: {
        q: '0. cash',
        a: 'money in the form of notes and coins',
        why: 'Done for you. Notice the shape of a good definition here: it names the category ("money") and then says what makes this one different ("in the form of notes and coins").'
      },
      chips: [
        { id: 'm-a', label: 'a) the main book or file that holds all the accounts' },
        { id: 'm-b', label: 'b) a record of the money for one purpose or category' },
        { id: 'm-c', label: 'c) a person who manages money and accounts' },
        { id: 'm-d', label: 'd) to check that two records of money agree' },
        { id: 'm-e', label: 'e) a single piece of financial business, such as a payment' },
        { id: 'm-f', label: 'f) the daily work of writing down every transaction' },
        { id: 'm-g', label: 'g) one line written in the accounts' }
      ],
      whyTitle: 'What each word means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'finance officer', accept: 'm-c',
          why: 'A <b>person</b>, not a thing and not an action — that is the quickest way to find it in the list. Only (c) begins "a person".' },
        { id: 't2', num: 2, label: 'ledger', accept: 'm-a',
          why: 'The word that matters is <b>main</b>. A ledger is not just any book of accounts; it is the one that holds them all. Compare it with the journal you meet in Unit 2, which is the FIRST book.' },
        { id: 't3', num: 3, label: 'transaction', accept: 'm-e',
          why: '"A single piece of financial business." <b>Single</b> is the whole word: one payment, one receipt, one event. Not the record of it — that is the entry, which is meaning (g).' },
        { id: 't4', num: 4, label: 'account', accept: 'm-b',
          why: 'A record for <b>one purpose or category</b> — the fuel account, the cash account. An account collects many transactions that belong together.' },
        { id: 't5', num: 5, label: 'bookkeeping', accept: 'm-f',
          why: 'The <b>daily work</b>, not a thing you can hold. The text calls it "this careful work", and it is the writing-down part of the job rather than the whole of it.' },
        { id: 't6', num: 6, label: 'reconcile', accept: 'm-d',
          why: 'The only one that is a <b>verb</b> — "to check that two records of money agree". Two records, not one: that is what makes it reconciling rather than just checking.' }
      ],
      notes: [{ title: 'Why one meaning is spare',
        body: 'The spare meaning is (g) "one line written in the accounts" — an <b>entry</b>. It is in the list on purpose: entry and transaction are the pair learners most often swap. A transaction is the real event; the entry is what you write about it. Fadi uses the word in Reading A: "he checks every entry".' }]
    }
  ]
});
