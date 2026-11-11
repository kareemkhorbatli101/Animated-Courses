/* Unit 8 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Vocabulary · match',
    page: 8,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for the Closing Process',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 8 · 1A',
      type: 'dragmatch',
      title: 'Terms for the Closing Process',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. An internal list of all debit and credit balances.' },
        { id: 'm-b', label: 'b. To formally record a transaction in the books.' },
        { id: 'm-c', label: 'c. A summary of all the transactions for a specific account.' },
        { id: 'm-d', label: 'd. The final reports that summarize a company\'s performance.' },
        {
          id: 'm-e',
          label: 'e. Entries made at the end of the period to ensure revenue and expenses are recorded in the correct period.'
        },
        {
          id: 'm-f',
          label: 'f. The process of finalizing all temporary accounts and preparing for the next period.'
        }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Ledger',
          accept: 'm-c',
          why: '<b>Ledger</b> — A summary of all the transactions for a specific account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Trial Balance',
          accept: 'm-a',
          why: '<b>Trial Balance</b> — An internal list of all debit and credit balances. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Adjusting Entries',
          accept: 'm-e',
          why: '<b>Adjusting Entries</b> — Entries made at the end of the period to ensure revenue and expenses are recorded in the correct period. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Post',
          accept: 'm-b',
          why: '<b>Post</b> — To formally record a transaction in the books. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Closing the Books',
          accept: 'm-f',
          why: '<b>Closing the Books</b> — The process of finalizing all temporary accounts and preparing for the next period. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Financial Statements',
          accept: 'm-d',
          why: '<b>Financial Statements</b> — The final reports that summarize a company\'s performance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Ledger',
        a: 'A summary of all the transactions for a specific account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'ledger', caption: 'Ledger — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 8 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Ledger', 'Trial Balance', 'Adjusting Entries', 'Post', 'Closing the Books', 'Financial Statements'],
      visual: { spot: 'trial-balance', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
