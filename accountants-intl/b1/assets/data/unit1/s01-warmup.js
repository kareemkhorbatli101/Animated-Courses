/* Unit 1 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u01.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u1-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 1 · Warm-up',
    page: 1,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'The Daily Checklist',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 1 · 0A',
      type: 'study',
      source: 'book',
      title: 'The Daily Checklist',
      instruction: 'Discuss in small groups:',
      html: '<p><b>Context.</b> In a busy shared service centre, organization is key.</p><p>Imagine you have just arrived at your desk at 8:30 AM in Kraków. Dublin is one hour behind you and Singapore is six hours ahead.</p>',
      playable: [
        { t: 'Imagine you have just arrived at your desk at 8:30 AM in Kraków.', role: 'narrator' },
        { t: 'Dublin is one hour behind you and Singapore is six hours ahead.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'obsolete', caption: 'Warm-Up · The Daily Checklist' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 1 · 0B',
      type: 'dragmatch',
      title: 'Tools of the Trade',
      instruction: 'Match the office tool to its primary function: Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Primary Function — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. To keep physical copies of invoices organized by date or vendor.' },
        { id: 'm-b', label: 'b. To create quick calculations and check totals manually.' },
        { id: 'm-c', label: 'c. To shred confidential financial documents.' },
        { id: 'm-d', label: 'd. To analyze data, create tables, and use formulas.' },
        { id: 'm-e', label: 'e. To record official double-entry transactions and run reports.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Spreadsheet Software',
          accept: 'm-d',
          why: '<b>Spreadsheet Software</b> — To analyze data, create tables, and use formulas. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Accounting Software (the group ERP)',
          accept: 'm-e',
          why: '<b>Accounting Software (the group ERP)</b> — To record official double-entry transactions and run reports. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Ring Binder / File',
          accept: 'm-a',
          why: '<b>Ring Binder / File</b> — To keep physical copies of invoices organized by date or vendor. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Calculator',
          accept: 'm-b',
          why: '<b>Calculator</b> — To create quick calculations and check totals manually. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Shredder',
          accept: 'm-c',
          why: '<b>Shredder</b> — To shred confidential financial documents. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Spreadsheet Software',
        a: 'To analyze data, create tables, and use formulas. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'statement', caption: 'Warm-Up · Tools of the Trade', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 1 · 0B',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: [
        'Spreadsheet Software',
        'Accounting Software (the group ERP)',
        'Ring Binder / File',
        'Calculator',
        'Shredder'
      ],
      visual: { spot: 'stock', caption: 'Warm-Up · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 1 · 0C',
      type: 'discuss',
      title: 'The "Junior" Role',
      instruction: 'Think-Pair-Share: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Think: What is the difference between a "Bookkeeper" and a "Financial Controller"?' },
        {
          q: 'Pair: Discuss with a partner: Who handles the small details (receipts) and who handles the big picture (strategy)?'
        },
        { q: 'Share: Share your ideas with the class.' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'accountant',
        caption: 'Daily routines, bookkeeping tasks, and the role of a junior accountant in a shared service centre.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Present Simple vs. Present Continuous.',
        taught: [
          'Think-Pair-Share:',
          'Think: What is the difference between a "Bookkeeper" and a "Financial Controller"?',
          'Pair: Discuss with a partner: Who handles the small details (receipts) and who handles the big picture (strategy)?',
          'Share: Share your ideas with the class.'
        ]
      },
      model: 'A bookkeeper records the transactions every day; a financial controller checks them and decides what the numbers mean. The bookkeeper enters, the controller approves — that is the difference in one line.'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
