/* Unit 8 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u08.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u8-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 8 · Word building',
    page: 8,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Documentation',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 8 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Documentation',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "First, the transactions are journalized, and then we prepare the statements."</p>',
      playable: [
        {
          t: 'Example: "First, the transactions are journalized, and then we prepare the statements.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
      visual: { spot: 'transaction', caption: 'Vocabulary · Collocations for Documentation' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 8 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Documentation',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. entries' },
        { id: 'm-b', label: 'b. the books' },
        { id: 'm-c', label: 'c. the statements' },
        { id: 'm-d', label: 'd. the audit' },
        { id: 'm-e', label: 'e. the balance' },
        { id: 'm-f', label: 'f. the report' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Prepare',
          accept: 'm-e',
          why: '<b>Prepare</b> — the balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Approve',
          accept: 'm-f',
          why: '<b>Approve</b> — the report. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Close',
          accept: 'm-b',
          why: '<b>Close</b> — the books. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Draft',
          accept: 'm-c',
          why: '<b>Draft</b> — the statements. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Journalize',
          accept: 'm-a',
          why: '<b>Journalize</b> — entries. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Finalize',
          accept: 'm-d',
          why: '<b>Finalize</b> — the audit. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Prepare',
        a: 'the balance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'closing', caption: 'Vocabulary · Collocations for Documentation', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 8 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Prepare', 'Approve', 'Close', 'Draft', 'Journalize', 'Finalize'],
      visual: { spot: 'month-end', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 8 · 1E',
      type: 'cloze',
      title: 'Word Building: Noun and Adjective',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Preparation &rarr; <b>Verb</b>: [[1]]</li><li>Finalization &rarr; <b>Verb</b>: [[2]]</li><li>Derivation &rarr; <b>Adjective</b>: [[3]]</li><li>Reconciliation &rarr; <b>Adjective</b>: [[4]]</li></ol></div>',
      answers: {
        '1': ['Prepare', 'prepare', 'Prepare'],
        '2': ['Finalize', 'finalize', 'Finalize'],
        '3': ['derived', 'derived', 'Derived'],
        '4': ['reconcilable', 'reconcilable', 'Reconcilable']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"The preparatory work must be done first."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The final figures are now ready."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The derived value is calculated daily."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The reconcilable difference was found."&rdquo;'
      ],
      visual: { spot: 't-accounts', caption: 'Vocabulary · Word Building: Noun and Adjective', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
