/* Unit 2 · s19-writing-2 — Writing 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u02.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u2-s19-writing-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 2 · Writing 2',
    page: 2,
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
      bookRef: 'Unit 2 · 6C',
      type: 'writer',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Past Simple / Past Continuous) in the following email draft. (Only the first one is corrected).',
      paras: [
        {
          label: 'I was locating the receipt you left yesterday. -> I located the receipt you left yesterday.',
          purpose: ''
        },
        { label: 'While I checked the journal, I found the incorrect entry.', purpose: '' },
        { label: 'The posting was incomplete because the power was cutting out.', purpose: '' },
        {
          label: 'She did not know the correct account because she was not filing the documents before.',
          purpose: ''
        },
        {
          label: 'The accountant finished the reconciliation at 3 PM and then was starting the variance analysis.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'I was locating the receipt you left yesterday. -> I located the receipt you left yesterday.',
        'While I checked the journal, I found the incorrect entry.',
        'The posting was incomplete because the power was cutting out.',
        'She did not know the correct account because she was not filing the documents before.',
        'The accountant finished the reconciliation at 3 PM and then was starting the variance analysis.'
      ],
      model: 'I located the receipt you left yesterday.',
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Correct the grammar mistakes (Past Simple / Past Continuous) in the following email draft. (Only the first one is corrected).',
          'I was locating the receipt you left yesterday. -> I located the receipt you left yesterday.',
          'While I checked the journal, I found the incorrect entry.',
          'The posting was incomplete because the power was cutting out.'
        ]
      },
      visual: { spot: 'journal', caption: 'Write it the way this unit has been teaching you to.' },
      brief: 'A short piece with a fixed purpose. Match the register to the reader — a manager and a supplier are not the same audience.',
      bank: ['Reconciliation', 'Posting', 'Receipt', 'Journal', 'Entry']
    },
    {
      id: 'c2',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 2 · 6D',
      type: 'study',
      source: 'book',
      title: 'Writing Task 3: Formal Memo (Discrepancy Report)',
      instruction: 'Focus: Use both Past Simple (completed actions) and Past Continuous (ongoing review).',
      html: '<p><b>Context.</b> Write a formal memo (80 words) reporting a discrepancy found during a review of last month\'s records. Explain how you found it and what you did to correct it.</p>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'discrepancy',
        caption: 'Writing · Writing Task 3: Formal Memo (Discrepancy Report)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 2 · 6D',
      type: 'writer',
      title: 'Writing Task 3: Formal Memo (Discrepancy Report)',
      instruction: 'Focus: Use both Past Simple (completed actions) and Past Continuous (ongoing review).',
      paras: [
        {
          label: 'Include: While I was reviewing... I found... The team was posting... We corrected...',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: ['Include: While I was reviewing... I found... The team was posting... We corrected...'],
      model: 'To: Head of Accounting, From: Review Team. Subject: Reporting a Discrepancy. While I was reviewing the expense batches from last month, I found a EUR 700 discrepancy. We traced the error back to a time when the intern was posting the invoices; he accidentally entered a negative amount. We corrected the journal entry immediately, and the accounts are now fully reconciled.',
      coach: {
        title: 'What this is practising',
        target: 'Past Simple vs. Past Continuous',
        taught: [
          'Focus: Use both Past Simple (completed actions) and Past Continuous (ongoing review).',
          'Include: While I was reviewing... I found... The team was posting... We corrected...',
          'Example: "To: Head of Accounting, From: Review Team. Subject: Reporting a Discrepancy. While I was reviewing the expense batches from last month, I found a EUR 700 discrepancy. We traced the error back to a time when the intern was posting the invoices; he accidentally entered a negative amount. We corrected the journal entry immediately, and the accounts are now fully reconciled."'
        ]
      },
      visual: { spot: 'journal', caption: 'Write it the way this unit has been teaching you to.' },
      bank: ['Discrepancy', 'Posting']
    }
  ],
  prev: 's18-writing-1',
  prevLabel: 'Writing 1',
  next: 's20-pronunciation',
  nextLabel: 'Pronunciation'
});
