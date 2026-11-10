/* Unit 2 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Word building',
    page: 2,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Accounting Errors',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 2 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Accounting Errors',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "I tried to trace the source document, but I could only spot a recording error in the amount."</p>',
      playable: [
        {
          t: '"I tried to trace the source document, but I could only spot a recording error in the amount.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'source-document', caption: 'Vocabulary · Collocations for Accounting Errors' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 2 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Accounting Errors',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. a journal entry' },
        { id: 'm-b', label: 'b. the source document' },
        { id: 'm-c', label: 'c. a recording error' },
        { id: 'm-d', label: 'd. the bank statement' },
        { id: 'm-e', label: 'e. the closing balance' },
        { id: 'm-f', label: 'f. a missing receipt' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Locate',
          accept: 'm-f',
          why: '<b>Locate</b> — a missing receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Correct',
          accept: 'm-a',
          why: '<b>Correct</b> — a journal entry. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Trace',
          accept: 'm-b',
          why: '<b>Trace</b> — the source document. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Spot',
          accept: 'm-c',
          why: '<b>Spot</b> — a recording error. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Examine',
          accept: 'm-d',
          why: '<b>Examine</b> — the bank statement. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Verify',
          accept: 'm-e',
          why: '<b>Verify</b> — the closing balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Locate',
        a: 'a missing receipt. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'journal', caption: 'Vocabulary · Collocations for Accounting Errors', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 2 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Locate', 'Correct', 'Trace', 'Spot', 'Examine', 'Verify'],
      visual: { spot: 'payment-run', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 2 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Related Term</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Reconcile</td><td>Reconciliation</td><td>Reconciling</td><td>"Bank reconciliation is performed monthly in every office."</td></tr><tr><td>Submit</td><td>_________</td><td>Submitter</td><td>"The submission deadline passed yesterday."</td></tr><tr><td>Approve</td><td>_________</td><td>Approved</td><td>"The Financial Controller granted her approval for the payment."</td></tr><tr><td>Process</td><td>Processing</td><td>Processed</td><td>"The volume of data processing in the service centre is very high."</td></tr><tr><td>Verify</td><td>_________</td><td>Verifiable</td><td>"We must ensure the verification of all balances."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'reconcile', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
