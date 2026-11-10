/* Unit 1 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Vocabulary · match',
    page: 1,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Defining the Basics',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 1 · 1A',
      type: 'dragmatch',
      title: 'Defining the Basics',
      instruction: 'Match the accounting terms to their definitions. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. A book or digital file where accounts and transactions are recorded.' },
        { id: 'm-b', label: 'b. An entry that increases an asset or expense account.' },
        { id: 'm-c', label: 'c. A document sent by a seller to a buyer requesting payment.' },
        { id: 'm-d', label: 'd. Something valuable that a business owns (e.g., cash, computer).' },
        { id: 'm-e', label: 'e. An entry that increases a liability or equity account.' },
        { id: 'm-f', label: 'f. Any business event that has a monetary impact (e.g., buying paper).' },
        {
          id: 'm-g',
          label: 'g. A written acknowledgment that a specified article or sum of money has been received.'
        },
        {
          id: 'm-h',
          label: 'h. A debt or financial obligation the company owes (e.g., unpaid bills).'
        }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Invoice',
          accept: 'm-c',
          why: '<b>Invoice</b> — A document sent by a seller to a buyer requesting payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Receipt',
          accept: 'm-g',
          why: '<b>Receipt</b> — A written acknowledgment that a specified article or sum of money has been received. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Ledger',
          accept: 'm-a',
          why: '<b>Ledger</b> — A book or digital file where accounts and transactions are recorded. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Transaction',
          accept: 'm-f',
          why: '<b>Transaction</b> — Any business event that has a monetary impact (e.g., buying paper). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Asset',
          accept: 'm-d',
          why: '<b>Asset</b> — Something valuable that a business owns (e.g., cash, computer). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Liability',
          accept: 'm-h',
          why: '<b>Liability</b> — A debt or financial obligation the company owes (e.g., unpaid bills). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't7',
          num: 7,
          label: 'Debit',
          accept: 'm-b',
          why: '<b>Debit</b> — An entry that increases an asset or expense account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't8',
          num: 8,
          label: 'Credit',
          accept: 'm-e',
          why: '<b>Credit</b> — An entry that increases a liability or equity account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Invoice',
        a: 'A document sent by a seller to a buyer requesting payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'invoice', caption: 'Invoice — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 1 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Invoice', 'Receipt', 'Ledger', 'Transaction', 'Asset', 'Liability', 'Debit', 'Credit'],
      visual: { spot: 'receipt', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
