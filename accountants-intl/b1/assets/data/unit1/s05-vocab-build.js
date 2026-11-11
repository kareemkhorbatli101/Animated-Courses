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
      playable: [
        { t: 'Example: "Every Monday, I process invoices and file tax returns.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
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
      type: 'cloze',
      title: 'Word Building: Action vs. Thing',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Record &rarr; <b>Noun (The Thing/Person)</b>: [[1]]</li><li>Pay &rarr; <b>Noun (The Thing/Person)</b>: [[2]]</li><li>Audit &rarr; <b>Noun (The Thing/Person)</b>: [[3]]</li><li>Analyze &rarr; <b>Noun (The Thing/Person)</b>: [[4]]</li></ol></div>',
      answers: {
        '1': ['Record', 'record', 'Record'],
        '2': ['Payment', 'payment', 'Payment'],
        '3': ['Auditor', 'auditor', 'Auditor'],
        '4': ['Analysis', 'analysis', 'Analysis']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'The noun (the thing/person) of <i>Record</i>.',
        'The noun (the thing/person) of <i>Pay</i>.',
        'The noun (the thing/person) of <i>Audit</i>.',
        'The noun (the thing/person) of <i>Analyze</i>.'
      ],
      visual: { spot: 'manager', caption: 'Vocabulary · Word Building: Action vs. Thing', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
