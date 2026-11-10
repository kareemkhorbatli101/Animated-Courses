/* Unit 4 · s19-writing-2 — Writing 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s19-writing-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Writing 2',
    page: 4,
    section: '19',
    lesson: 'Part 6 · Writing',
    title: 'Writing 2'
  },
  objective: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
  cards: [
    {
      id: 'c1',
      covers: ['6C'],
      ref: '6C',
      bookRef: 'Unit 4 · 6C',
      type: 'study',
      source: 'book',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Countable/Uncountable Nouns and Quantifiers) in the following report draft. (Only the first one is corrected).',
      html: '<p>Subject: Inventory Variance Report</p><p>Dear Ms Vogel,</p>',
      playable: [{ t: 'Inventory Variance Report', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'variance', caption: 'Writing · Writing Task 2: Correct the Mistakes (Grammar Focus)' }
    },
    {
      id: 'c2',
      covers: ['6C'],
      ref: '6C',
      bookRef: 'Unit 4 · 6C',
      type: 'writer',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Countable/Uncountable Nouns and Quantifiers) in the following report draft. (Only the first one is corrected).',
      paras: [
        {
          label: 'We found too much files in the storage area. -> We found too many files in the storage area.',
          purpose: ''
        },
        { label: 'There is a few office supplies left.', purpose: '' },
        { label: 'How many money did we spend on toner?', purpose: '' },
        { label: 'We need less advice and more actions.', purpose: '' },
        { label: 'There are very little paper left on the shelves.', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'We found too much files in the storage area. -> We found too many files in the storage area.',
        'There is a few office supplies left.',
        'How many money did we spend on toner?',
        'We need less advice and more actions.',
        'There are very little paper left on the shelves.'
      ],
      model: 'We found too many files in the storage area.',
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Correct the grammar mistakes (Countable/Uncountable Nouns and Quantifiers) in the following report draft. (Only the first one is corrected).',
          'We found too much files in the storage area. -> We found too many files in the storage area.',
          'There is a few office supplies left.',
          'How many money did we spend on toner?'
        ]
      },
      visual: { spot: 'stock', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 4 · 6D',
      type: 'study',
      source: 'book',
      title: 'Writing Task 3: Justification for New Equipment',
      instruction: 'Focus: Use too many/much, a few/little, and a lot of.',
      html: '<p><b>Context.</b> Write a formal justification (80 words) to the Group CFO explaining why the company needs to purchase new equipment despite having some old equipment in stock.</p><ol><li>Example: "Dear Ms Vogel, I am requesting authorization to purchase new scanner equipment. Although we have a few old scanners, they are obsolete and take too much time to run. They also cause a lot of maintenance issues. The old equipment is not efficient. Would you mind reviewing this request?"</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'petty-voucher',
        caption: 'Writing · Writing Task 3: Justification for New Equipment',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 4 · 6D',
      type: 'writer',
      title: 'Writing Task 3: Justification for New Equipment',
      instruction: 'Focus: Use too many/much, a few/little, and a lot of.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'Dear Ms Vogel, I am requesting authorization to purchase new scanner equipment. Although we have a few old scanners, they are obsolete and take too much time to run. They also cause a lot of maintenance issues. The old equipment is not efficient. Would you mind reviewing this request?',
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Focus: Use too many/much, a few/little, and a lot of.',
          'Example: "Dear Ms Vogel, I am requesting authorization to purchase new scanner equipment. Although we have a few old scanners, they are obsolete and take too much time to run. They also cause a lot of maintenance issues. The old equipment is not efficient. Would you mind reviewing this request?"'
        ]
      },
      visual: { spot: 'stock', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's18-writing-1',
  prevLabel: 'Writing 1',
  next: 's20-pronunciation',
  nextLabel: 'Pronunciation'
});
