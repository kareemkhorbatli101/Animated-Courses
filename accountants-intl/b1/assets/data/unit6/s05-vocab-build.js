/* Unit 6 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Word building',
    page: 6,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Financial Reporting',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 6 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Financial Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "If we detect a fraud, we must immediately reverse a journal entry."</p>',
      playable: [
        { t: '"If we detect a fraud, we must immediately reverse a journal entry.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'journal', caption: 'Vocabulary · Collocations for Financial Reporting' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 6 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Financial Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a fraud' },
        { id: 'm-b', label: 'b. a balance' },
        { id: 'm-c', label: 'c. the ledgers' },
        { id: 'm-d', label: 'd. a human error' },
        { id: 'm-e', label: 'e. the source of the error' },
        { id: 'm-f', label: 'f. a journal entry' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Identify',
          accept: 'm-e',
          why: '<b>Identify</b> — the source of the error. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Correct',
          accept: 'm-d',
          why: '<b>Correct</b> — a human error. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Detect',
          accept: 'm-a',
          why: '<b>Detect</b> — a fraud. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Zero out',
          accept: 'm-b',
          why: '<b>Zero out</b> — a balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Balance',
          accept: 'm-c',
          why: '<b>Balance</b> — the ledgers. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Reverse',
          accept: 'm-f',
          why: '<b>Reverse</b> — a journal entry. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Identify',
        a: 'the source of the error. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: {
        spot: 'discrepancy',
        caption: 'Vocabulary · Collocations for Financial Reporting',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 6 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Identify', 'Correct', 'Detect', 'Zero out', 'Balance', 'Reverse'],
      visual: { spot: 'closing', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 6 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Related Term</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Investigate</td><td>Investigation</td><td>Investigative</td><td>"The investigation is ongoing."</td></tr><tr><td>Reconcile</td><td>_________</td><td>Reconcilable</td><td>"The reconciliation is due by Friday."</td></tr><tr><td>Adjust</td><td>_________</td><td>Adjustable</td><td>"We need to make an adjustment to the figures."</td></tr><tr><td>Authorize</td><td>Authorization</td><td>_________</td><td>"Do you have the necessary authorization?"</td></tr><tr><td>Correct</td><td>Correction</td><td>_________</td><td>"The correction was made this morning."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'petty-voucher', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
