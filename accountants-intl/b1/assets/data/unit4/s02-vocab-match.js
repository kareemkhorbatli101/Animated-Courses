/* Unit 4 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Vocabulary · match',
    page: 4,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Stock Status and Quantity',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 4 · 1A',
      type: 'dragmatch',
      title: 'Terms for Stock Status and Quantity',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. A detailed check or counting of all goods and materials in stock.' },
        { id: 'm-b', label: 'b. Goods or items that are held for sale or future use.' },
        {
          id: 'm-c',
          label: 'c. The minimum quantity of an item that should be held in stock to meet demand.'
        },
        {
          id: 'm-d',
          label: 'd. Items that are used up and need frequent replacement (e.g., printer toner).'
        },
        { id: 'm-e', label: 'e. The total quantity or amount of something available.' },
        { id: 'm-f', label: 'f. The item is not available and needs to be ordered.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Consumables',
          accept: 'm-d',
          why: '<b>Consumables</b> — Items that are used up and need frequent replacement (e.g., printer toner). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Stocktaking',
          accept: 'm-a',
          why: '<b>Stocktaking</b> — A detailed check or counting of all goods and materials in stock. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Inventory',
          accept: 'm-b',
          why: '<b>Inventory</b> — Goods or items that are held for sale or future use. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Reorder Point',
          accept: 'm-c',
          why: '<b>Reorder Point</b> — The minimum quantity of an item that should be held in stock to meet demand. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Out of Stock',
          accept: 'm-f',
          why: '<b>Out of Stock</b> — The item is not available and needs to be ordered. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Level',
          accept: 'm-e',
          why: '<b>Level</b> — The total quantity or amount of something available. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Consumables',
        a: 'Items that are used up and need frequent replacement (e.g., printer toner). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'stock', caption: 'Consumables — one of the words on this list.' }
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 4 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Consumables', 'Stocktaking', 'Inventory', 'Reorder Point', 'Out of Stock', 'Level'],
      visual: { spot: 'reorder-point', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
