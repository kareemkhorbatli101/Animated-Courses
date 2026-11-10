/* Unit 1 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Word building',
    page: 1,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Daily Tasks',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 1 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Daily Tasks',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "Every Monday, I process invoices and file tax returns."</p>',
      playable: [{ t: '"Every Monday, I process invoices and file tax returns.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Vocabulary · Collocations for Daily Tasks' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 1 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Daily Tasks',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a discrepancy / an error' },
        { id: 'm-b', label: 'b. a report / a financial statement' },
        { id: 'm-c', label: 'c. a transaction to the ledger' },
        { id: 'm-d', label: 'd. an invoice for payment' },
        { id: 'm-e', label: 'e. a tax return / a document' },
        { id: 'm-f', label: 'f. a bank account' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Post',
          accept: 'm-c',
          why: '<b>Post</b> — a transaction to the ledger. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Reconcile',
          accept: 'm-f',
          why: '<b>Reconcile</b> — a bank account. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Process',
          accept: 'm-d',
          why: '<b>Process</b> — an invoice for payment. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'File',
          accept: 'm-e',
          why: '<b>File</b> — a tax return / a document. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Prepare',
          accept: 'm-b',
          why: '<b>Prepare</b> — a report / a financial statement. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Spot',
          accept: 'm-a',
          why: '<b>Spot</b> — a discrepancy / an error. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Post',
        a: 'a transaction to the ledger. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'posting', caption: 'Post — one of the words on this list.' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 1 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Post', 'Reconcile', 'Process', 'File', 'Prepare', 'Spot'],
      visual: { spot: 'accountant', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 1 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Action vs. Thing',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb (The Action)</th><th>Noun (The Thing/Person)</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Calculate</td><td>Calculator / Calculation</td><td>"I used a calculator for this math."</td></tr><tr><td>Record</td><td>_________</td><td>"Keep a _________ of every expense."</td></tr><tr><td>Pay</td><td>_________</td><td>"The _________ is due tomorrow."</td></tr><tr><td>Audit</td><td>_________</td><td>"The _________ is checking our books."</td></tr><tr><td>Analyze</td><td>_________</td><td>"The _________ showed a profit."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'manager', caption: 'Vocabulary · Word Building: Action vs. Thing', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
