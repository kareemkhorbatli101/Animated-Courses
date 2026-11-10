/* Unit 2 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Vocabulary · match',
    page: 2,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Recording',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 2 · 1A',
      type: 'dragmatch',
      title: 'Terms for Recording',
      instruction: 'Match the recording term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The action of making an official entry in an accounting book.' },
        { id: 'm-b', label: 'b. The systematic arrangement and classification of accounts.' },
        { id: 'm-c', label: 'c. The book of final entry where transactions are permanently recorded.' },
        { id: 'm-d', label: 'd. A mistake found during the review or reconciliation process.' },
        {
          id: 'm-e',
          label: 'e. The initial book of entry where transactions are recorded chronologically.'
        },
        {
          id: 'm-f',
          label: 'f. The activity of recording the daily financial transactions of a business.'
        }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Ledger',
          accept: 'm-c',
          why: '<b>Ledger</b> — The book of final entry where transactions are permanently recorded. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Journal',
          accept: 'm-e',
          why: '<b>Journal</b> — The initial book of entry where transactions are recorded chronologically. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Entry',
          accept: 'm-a',
          why: '<b>Entry</b> — The action of making an official entry in an accounting book. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Chart of Accounts',
          accept: 'm-b',
          why: '<b>Chart of Accounts</b> — The systematic arrangement and classification of accounts. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Bookkeeping',
          accept: 'm-f',
          why: '<b>Bookkeeping</b> — The activity of recording the daily financial transactions of a business. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Discrepancy',
          accept: 'm-d',
          why: '<b>Discrepancy</b> — A mistake found during the review or reconciliation process. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Ledger',
        a: 'The book of final entry where transactions are permanently recorded. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'ledger', caption: 'Ledger — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 2 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Ledger', 'Journal', 'Entry', 'Chart of Accounts', 'Bookkeeping', 'Discrepancy'],
      visual: { spot: 'journal', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
