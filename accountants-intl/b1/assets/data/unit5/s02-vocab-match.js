/* Unit 5 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Vocabulary · match',
    page: 5,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Payment Status',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 5 · 1A',
      type: 'dragmatch',
      title: 'Terms for Payment Status',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. An invoice that has not been paid by the due date.' },
        { id: 'm-b', label: 'b. A person or company that owes money.' },
        { id: 'm-c', label: 'c. The official date on which a payment is required.' },
        {
          id: 'm-d',
          label: 'd. A scheduled process, usually weekly, where the company sends out payments to suppliers.'
        },
        {
          id: 'm-e',
          label: 'e. A document issued to a customer to cancel or reduce the amount of a sales invoice.'
        },
        { id: 'm-f', label: 'f. An amount of money that is owed (synonym for unpaid).' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Payment Run',
          accept: 'm-d',
          why: '<b>Payment Run</b> — A scheduled process, usually weekly, where the company sends out payments to suppliers. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Debtor',
          accept: 'm-b',
          why: '<b>Debtor</b> — A person or company that owes money. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Past Due',
          accept: 'm-a',
          why: '<b>Past Due</b> — An invoice that has not been paid by the due date. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Due Date',
          accept: 'm-c',
          why: '<b>Due Date</b> — The official date on which a payment is required. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Credit Note',
          accept: 'm-e',
          why: '<b>Credit Note</b> — A document issued to a customer to cancel or reduce the amount of a sales invoice. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Outstanding',
          accept: 'm-f',
          why: '<b>Outstanding</b> — An amount of money that is owed (synonym for unpaid). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Payment Run',
        a: 'A scheduled process, usually weekly, where the company sends out payments to suppliers. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'payment-run', caption: 'Payment Run — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 5 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Payment Run', 'Debtor', 'Past Due', 'Due Date', 'Credit Note', 'Outstanding'],
      visual: { spot: 'debtor', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
