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
          t: 'Example: "I tried to trace the source document, but I could only spot a recording error in the amount.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
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
      type: 'cloze',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Submit &rarr; <b>Noun</b>: [[1]]</li><li>Approve &rarr; <b>Noun</b>: [[2]]</li><li>Verify &rarr; <b>Noun</b>: [[3]]</li></ol></div>',
      answers: {
        '1': ['submission', 'submission', 'Submission'],
        '2': ['approval', 'approval', 'Approval'],
        '3': ['verification', 'verification', 'Verification']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"The submission deadline passed yesterday."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The Financial Controller granted her approval for the payment."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"We must ensure the verification of all balances."&rdquo;'
      ],
      visual: { spot: 'manager', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
