/* Unit 4 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Speaking · role-play',
    page: 4,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: The Ordering Request',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 4 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: The Ordering Request',
      instruction: 'Student A (Clerk): Report the stock status (use little and few). Request the order be placed (Could).',
      html: '<p><b>Context.</b> Ask the Inventory Manager to place an order for low-stock consumables.</p><p>Student B (Manager): Ask about the quantities needed (How much/How many). Confirm the order (Can).</p>',
      playable: [
        {
          t: 'Student B (Manager): Ask about the quantities needed (How much/How many).',
          role: 'narrator'
        },
        { t: 'Confirm the order (Can).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 1: The Ordering Request' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 4 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: The Ordering Request',
      instruction: 'Student A (Clerk): Report the stock status (use little and few). Request the order be placed (Could).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "We have very little ink and only a few pens left. Could we place an order today?"'
        },
        {
          who: 'B',
          notes: 'B: "How much ink do you need? I can place the order for a lot of paper now."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Student A (Clerk): Report the stock status (use little and few). Request the order be placed (Could).',
          'A: "We have very little ink and only a few pens left. Could we place an order today?"',
          'B: "How much ink do you need? I can place the order for a lot of paper now."'
        ]
      },
      model: 'A: We have very little ink and only a few pens left. Could we place an order today? — B: How much ink do you need? I can place the order for a lot of paper now. — B: Ask about the quantities needed (How much/How many). Confirm the order (Can).',
      visual: { spot: 'stock', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Manager): Ask about the quantities needed (How much/How many). Confirm the order (Can).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 4 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Stocktaking Discrepancy',
      instruction: 'Student A (Accountant): Report the variance politely (Could). State the difference (use a lot of or too much/many).',
      html: '<p><b>Context.</b> You have found a variance between the physical count and the ledger record.</p><p>Student B (Clerk): Explain the likely cause (e.g., forgotten paperwork). Offer to perform a re-count (Can offer).</p>',
      playable: [
        { t: 'Student B (Clerk): Explain the likely cause (e.', role: 'narrator' },
        { t: ', forgotten paperwork).', role: 'narrator' },
        { t: 'Offer to perform a re-count (Can offer).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'variance', caption: 'Speaking · Role-Play 2: Stocktaking Discrepancy', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 4 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Stocktaking Discrepancy',
      instruction: 'Student A (Accountant): Report the variance politely (Could). State the difference (use a lot of or too much/many).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "Could you explain this variance? The physical count shows too many monitors compared to the ledger.'
        },
        {
          who: 'B',
          notes: 'B: "I can offer to re-count the monitors. Maybe a few were not recorded when they were received."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Student A (Accountant): Report the variance politely (Could). State the difference (use a lot of or too much/many).',
          'A: "Could you explain this variance? The physical count shows too many monitors compared to the ledger.',
          'B: "I can offer to re-count the monitors. Maybe a few were not recorded when they were received."'
        ]
      },
      model: 'A: Could you explain this variance? The physical count shows too many monitors compared to the ledger. — B: I can offer to re-count the monitors. Maybe a few were not recorded when they were received. — B: Explain the likely cause (e.g., forgotten paperwork). Offer to perform a re-count (Can offer).',
      visual: { spot: 'stock', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Clerk): Explain the likely cause (e.g., forgotten paperwork). Offer to perform a re-count (Can offer).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
