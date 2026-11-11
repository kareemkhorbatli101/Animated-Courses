/* Unit 3 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u03.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u3-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 3 · Vocabulary · match',
    page: 3,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Payment and Documentation',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 3 · 1A',
      type: 'dragmatch',
      title: 'Terms for Payment and Documentation',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The process of restoring the small cash box to its original balance.' },
        { id: 'm-b', label: 'b. Permission or formal consent to proceed with an action or payment.' },
        { id: 'm-c', label: 'c. A person or company supplying goods or services.' },
        { id: 'm-d', label: 'd. A small monetary bonus or reduction given by a supplier.' },
        {
          id: 'm-e',
          label: 'e. Paid for by the employee personally, expecting to be paid back later.'
        },
        { id: 'm-f', label: 'f. The amount of cash set aside for small daily payments.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Authorization',
          accept: 'm-b',
          why: '<b>Authorization</b> — Permission or formal consent to proceed with an action or payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Vendor',
          accept: 'm-c',
          why: '<b>Vendor</b> — A person or company supplying goods or services. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Out-of-Pocket',
          accept: 'm-e',
          why: '<b>Out-of-Pocket</b> — Paid for by the employee personally, expecting to be paid back later. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Replenishment',
          accept: 'm-a',
          why: '<b>Replenishment</b> — The process of restoring the small cash box to its original balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Discount',
          accept: 'm-d',
          why: '<b>Discount</b> — A small monetary bonus or reduction given by a supplier. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Float',
          accept: 'm-f',
          why: '<b>Float</b> — The amount of cash set aside for small daily payments. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Authorization',
        a: 'Permission or formal consent to proceed with an action or payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'petty-voucher', caption: 'Authorization — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 3 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Authorization', 'Vendor', 'Out-of-Pocket', 'Replenishment', 'Discount', 'Float'],
      visual: { spot: 'debtor', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
