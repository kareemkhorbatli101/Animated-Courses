/* Unit 6 · s19-writing-2 — Writing 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s19-writing-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Writing 2',
    page: 6,
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
      bookRef: 'Unit 6 · 6C',
      type: 'writer',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Conditionals) in the following sentences. (Only the first one is corrected).',
      paras: [
        {
          label: 'If the team will find the error, they would rectify it immediately. -> If the team finds the error, they will rectify it immediately.',
          purpose: ''
        },
        { label: 'If the mistake was public, we will lose client trust.', purpose: '' },
        { label: 'We will reverse the entry if it is an omission.', purpose: '' },
        { label: 'If I am the accountant, I would never skip reconciliation.', purpose: '' },
        { label: 'They would have more confidence if the audit is clear.', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'If the team will find the error, they would rectify it immediately. -> If the team finds the error, they will rectify it immediately.',
        'If the mistake was public, we will lose client trust.',
        'We will reverse the entry if it is an omission.',
        'If I am the accountant, I would never skip reconciliation.',
        'They would have more confidence if the audit is clear.'
      ],
      model: 'If the team finds the error, they will rectify it immediately.',
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Correct the grammar mistakes (Conditionals) in the following sentences. (Only the first one is corrected).',
          'If the team will find the error, they would rectify it immediately. -> If the team finds the error, they will rectify it immediately.',
          'If the mistake was public, we will lose client trust.',
          'We will reverse the entry if it is an omission.'
        ]
      },
      visual: { spot: 'discrepancy', caption: 'Write it the way this unit has been teaching you to.' },
      brief: 'A short piece with a fixed purpose. Match the register to the reader — a manager and a supplier are not the same audience.',
      bank: ['Reversal', 'Omission']
    },
    {
      id: 'c2',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 6 · 6D',
      type: 'study',
      source: 'book',
      title: 'Writing Task 3: Policy Proposal (Internal Memo)',
      instruction: 'Focus: Use First and Second Conditionals to justify the proposal.',
      html: '<p><b>Context.</b> Write an internal memo (80 words) proposing a new internal control to prevent fraud.</p><p>We propose adding mandatory manager sign-off for any payment over EUR 5,000. If we implement this control, we will prevent 90% of potential fraudulent invoices. Furthermore, if we had this control in place sooner, we would not have made the duplicate payment last month. This new control will significantly mitigate our financial risk."</p><ol><li>Example: "MEMORANDUM: Proposed Control Change</li></ol>',
      playable: [
        {
          t: 'We propose adding mandatory manager sign-off for any payment over EUR 5,000.',
          role: 'narrator'
        },
        {
          t: 'If we implement this control, we will prevent 90% of potential fraudulent invoices.',
          role: 'narrator'
        },
        {
          t: 'Furthermore, if we had this control in place sooner, we would not have made the duplicate payment last month.',
          role: 'narrator'
        },
        { t: 'This new control will significantly mitigate our financial risk.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'invoice',
        caption: 'Writing · Writing Task 3: Policy Proposal (Internal Memo)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 6 · 6D',
      type: 'writer',
      title: 'Writing Task 3: Policy Proposal (Internal Memo)',
      instruction: 'Focus: Use First and Second Conditionals to justify the proposal.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'MEMORANDUM: Proposed Control Change',
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Focus: Use First and Second Conditionals to justify the proposal.',
          'Example: "MEMORANDUM: Proposed Control Change'
        ]
      },
      visual: { spot: 'discrepancy', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's18-writing-1',
  prevLabel: 'Writing 1',
  next: 's20-pronunciation',
  nextLabel: 'Pronunciation'
});
