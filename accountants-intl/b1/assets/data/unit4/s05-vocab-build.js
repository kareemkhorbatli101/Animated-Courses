/* Unit 4 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Word building',
    page: 4,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Inventory Management',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 4 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Inventory Management',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "We must perform a physical count before we record inventory value in the ledger."</p>',
      playable: [
        {
          t: '"We must perform a physical count before we record inventory value in the ledger.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'stock', caption: 'Vocabulary · Collocations for Inventory Management' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 4 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Inventory Management',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. stock levels' },
        { id: 'm-b', label: 'b. a physical count' },
        { id: 'm-c', label: 'c. stocktaking' },
        { id: 'm-d', label: 'd. an order' },
        { id: 'm-e', label: 'e. inventory value' },
        { id: 'm-f', label: 'f. control procedures' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Take',
          accept: 'm-b',
          why: '<b>Take</b> — a physical count. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Place',
          accept: 'm-d',
          why: '<b>Place</b> — an order. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Record',
          accept: 'm-e',
          why: '<b>Record</b> — inventory value. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Maintain',
          accept: 'm-a',
          why: '<b>Maintain</b> — stock levels. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Perform',
          accept: 'm-c',
          why: '<b>Perform</b> — stocktaking. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Review',
          accept: 'm-f',
          why: '<b>Review</b> — control procedures. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Take',
        a: 'a physical count. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: {
        spot: 'accountant',
        caption: 'Vocabulary · Collocations for Inventory Management',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 4 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Take', 'Place', 'Record', 'Maintain', 'Perform', 'Review'],
      visual: { spot: 'expense', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 4 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Verb and Noun',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Verb</th><th>Noun</th><th>Related Term</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Count</td><td>Count</td><td>Countable</td><td>"We need an exact count of the folders."</td></tr><tr><td>Estimate</td><td>_________</td><td>Estimated</td><td>"The estimate was slightly too low."</td></tr><tr><td>Consume</td><td>_________</td><td>Consumables</td><td>"The consumption rate is too high."</td></tr><tr><td>Supply</td><td>Supplier</td><td>_________</td><td>"We need a new supply of paper clips."</td></tr><tr><td>Manage</td><td>Manager</td><td>_________</td><td>"Inventory management requires daily checks."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'source-document', caption: 'Vocabulary · Word Building: Verb and Noun', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
