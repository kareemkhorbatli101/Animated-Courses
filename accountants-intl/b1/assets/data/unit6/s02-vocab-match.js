/* Unit 6 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Vocabulary · match',
    page: 6,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Mistakes and Discrepancies',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 6 · 1A',
      type: 'dragmatch',
      title: 'Terms for Mistakes and Discrepancies',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Mistake made by recording a transaction more than once.' },
        { id: 'm-b', label: 'b. A financial asset that cannot be collected (a bad debt).' },
        { id: 'm-c', label: 'c. A lack of agreement or difference between two sets of data.' },
        { id: 'm-d', label: 'd. An intentional deception to secure unfair or unlawful gain.' },
        { id: 'm-e', label: 'e. An accounting entry that cancels or undoes a previous entry.' },
        { id: 'm-f', label: 'f. An item that should have been included but was left out.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Discrepancy',
          accept: 'm-c',
          why: '<b>Discrepancy</b> — A lack of agreement or difference between two sets of data. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Reversal',
          accept: 'm-e',
          why: '<b>Reversal</b> — An accounting entry that cancels or undoes a previous entry. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Fraud',
          accept: 'm-d',
          why: '<b>Fraud</b> — An intentional deception to secure unfair or unlawful gain. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Duplicate Payment',
          accept: 'm-a',
          why: '<b>Duplicate Payment</b> — Mistake made by recording a transaction more than once. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Uncollectible Debt',
          accept: 'm-b',
          why: '<b>Uncollectible Debt</b> — A financial asset that cannot be collected (a bad debt). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Omission',
          accept: 'm-f',
          why: '<b>Omission</b> — An item that should have been included but was left out. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Discrepancy',
        a: 'A lack of agreement or difference between two sets of data. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'discrepancy', caption: 'Discrepancy — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 6 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Discrepancy', 'Reversal', 'Fraud', 'Duplicate Payment', 'Uncollectible Debt', 'Omission'],
      visual: { spot: 'credit-note', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
