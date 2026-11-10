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
          t: '"First, the transactions are journalized, and then we prepare the statements.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
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
      type: 'study',
      source: 'book',
      title: 'Word Building: Noun and Adjective',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Noun</th><th>Verb</th><th>Adjective</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Adjustment</td><td>Adjust</td><td>Adjustable</td><td>"The adjustable rate is tied to the market."</td></tr><tr><td>Preparation</td><td>_________</td><td>Preparatory</td><td>"The preparatory work must be done first."</td></tr><tr><td>Finalization</td><td>_________</td><td>Final</td><td>"The final figures are now ready."</td></tr><tr><td>Derivation</td><td>Derive</td><td>_________</td><td>"The derived value is calculated daily."</td></tr><tr><td>Reconciliation</td><td>Reconcile</td><td>_________</td><td>"The reconcilable difference was found."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'reconcile', caption: 'Vocabulary · Word Building: Noun and Adjective', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
