/* Unit 4 · s21-review — Review
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s21-review', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Review',
    page: 4,
    section: '21',
    lesson: 'Part 8 · Review',
    title: 'Review'
  },
  objective: 'Vocabulary Quiz',
  cards: [
    {
      id: 'c1',
      covers: ['8A'],
      ref: '8A',
      bookRef: 'Unit 4 · 8A',
      type: 'dragmatch',
      title: 'Vocabulary Quiz',
      instruction: 'Match the term to the correct concept. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Concept — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. Reorder Point' },
        { id: 'm-b', label: 'b. Consumables' },
        { id: 'm-c', label: 'c. Obsolete' },
        { id: 'm-d', label: 'd. Variance' },
        { id: 'm-e', label: 'e. Reconciliation' },
        { id: 'm-f', label: 'f. Out of Stock' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'The items are all used up.',
          accept: 'm-f',
          why: '<b>The items are all used up.</b> — Out of Stock. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Comparing physical count to ledger.',
          accept: 'm-e',
          why: '<b>Comparing physical count to ledger.</b> — Reconciliation. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Items like paper and ink.',
          accept: 'm-b',
          why: '<b>Items like paper and ink.</b> — Consumables. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'The minimum level before ordering.',
          accept: 'm-a',
          why: '<b>The minimum level before ordering.</b> — Reorder Point. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Too old or no longer useful.',
          accept: 'm-c',
          why: '<b>Too old or no longer useful.</b> — Obsolete. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Difference between expected and actual stock.',
          accept: 'm-d',
          why: '<b>Difference between expected and actual stock.</b> — Variance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. The items are all used up.',
        a: 'Out of Stock. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'ledger', caption: 'Review · Vocabulary Quiz' }
    },
    {
      id: 'c2',
      covers: ['8B'],
      ref: '8B',
      bookRef: 'Unit 4 · 8B',
      type: 'choiceinline',
      title: 'Grammar Quiz',
      instruction: 'Choose the correct quantifier to complete the sentence. (Only the first one is done for you). One of the two is right in each line.',
      whyTitle: 'What decided each one',
      items: [
        {
          text: 'We have {{very little|very few}} information about the consumption rate.',
          answer: 0,
          why: '<b>very little</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'The company spends {{too much|too many}} money on unnecessary supplies.',
          answer: 0,
          why: '<b>too much</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'I found only {{a few|a little}} original receipts.',
          answer: 0,
          why: '<b>a few</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'Do we have {{any|some}} new computers in the storage area?',
          answer: 0,
          why: '<b>any</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        },
        {
          text: 'There is {{a lot of|many}} dust on the shelf.',
          answer: 0,
          why: '<b>a lot of</b> — the time words in the sentence decide it, not the verb. Find them first, then choose.'
        }
      ],
      visual: { spot: 'receipt', caption: 'Review · Grammar Quiz', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 4 · 8C',
      type: 'study',
      source: 'book',
      title: 'Real-Life Simulation: The Procurement Meeting',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> Discussing the high cost of office supplies and solutions.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'trial-balance',
        caption: 'Review · Real-Life Simulation: The Procurement Meeting',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['8C'],
      ref: '8C',
      bookRef: 'Unit 4 · 8C',
      type: 'roleplay',
      title: 'Real-Life Simulation: The Procurement Meeting',
      instruction: 'Take each card in turn.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'Finance Analyst (Student A): Report the high consumption rate (use too much). Suggest a control measure (Could).'
        },
        {
          who: 'B',
          notes: 'Procurement Manager (Student B): Agree with the consumption rate. Ask about the quantity of obsolete equipment (How much/many).'
        },
        {
          who: 'C',
          notes: 'Inventory Clerk (Student C): Report the obsolete items (use a few). Offer to dispose of them (Can offer).'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: []
      },
      model: 'We use too much ink and we print too many unnecessary copies. I suggest a few new printing controls, because we have very little loss from theft and the real cost is paper.',
      visual: { spot: 'stock', caption: 'Take each card in turn.' },
      remember: []
    },
    {
      id: 'c5',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 4 · 8D',
      type: 'study',
      source: 'book',
      title: 'Extension Writing: A New Ordering System',
      instruction: 'Write a short proposal (80 words) for a new ordering system that limits the use of consumables.',
      html: '<p>Style: Use formal requests and quantifiers.</p>',
      playable: [{ t: 'Use formal requests and quantifiers.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reporting',
        caption: 'Review · Extension Writing: A New Ordering System',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c6',
      covers: ['8D'],
      ref: '8D',
      bookRef: 'Unit 4 · 8D',
      type: 'writer',
      title: 'Extension Writing: A New Ordering System',
      instruction: 'Write a short proposal (80 words) for a new ordering system that limits the use of consumables.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'To reduce the excessive consumption of toner and paper, we propose a digital voucher system. Could employees limit printing to essential documents? We should not have too many copies being made. This will save a lot of money and reduce our environmental impact. Would you mind approving this trial?',
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Write a short proposal (80 words) for a new ordering system that limits the use of consumables.',
          'Example: "To reduce the excessive consumption of toner and paper, we propose a digital voucher system. Could employees limit printing to essential documents? We should not have too many copies being made. This will save a lot of money and reduce our environmental impact. Would you mind approving this trial?"'
        ]
      },
      visual: { spot: 'stock', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c7',
      covers: ['8E'],
      ref: '8E',
      bookRef: 'Unit 4 · 8E',
      type: 'checklist',
      title: 'Self-Assessment Checklist',
      instruction: 'Rate yourself (1-5):',
      selfAssess: true,
      items: [
        { t: 'I can define inventory and consumables. [ ]' },
        { t: 'I can explain the process of stocktaking and variance reporting. [ ]' },
        {
          t: 'I can distinguish between Countable and Uncountable Nouns (e.g., invoice vs. information). [ ]'
        },
        {
          t: 'I can correctly use quantifiers like much, many, a few, a little to report stock levels. [ ]'
        },
        { t: 'I can politely request an order be placed using quantifiers. [ ]' }
      ],
      visual: { spot: 'variance', caption: 'Review · Self-Assessment Checklist', cls: 'vis-sm' }
    }
  ],
  prev: 's20-pronunciation',
  prevLabel: 'Pronunciation',
  next: 's22-extension',
  nextLabel: 'Extension'
});
