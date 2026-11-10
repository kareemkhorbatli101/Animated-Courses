/* Unit 5 · s19-writing-2 — Writing 2
   Built by tools/build-unit.py from the author's own blocks and tools/key/u05.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u5-s19-writing-2', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 5 · Writing 2',
    page: 5,
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
      bookRef: 'Unit 5 · 6C',
      type: 'study',
      source: 'book',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Future Forms) in the following email draft. (Only the first one is corrected).',
      html: '<p>Subject: Payment Run Schedule</p><p>Dear Team,</p>',
      playable: [{ t: 'Payment Run Schedule', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'invoice', caption: 'Writing · Writing Task 2: Correct the Mistakes (Grammar Focus)' }
    },
    {
      id: 'c2',
      covers: ['6C'],
      ref: '6C',
      bookRef: 'Unit 5 · 6C',
      type: 'writer',
      title: 'Writing Task 2: Correct the Mistakes (Grammar Focus)',
      instruction: 'Correct the grammar mistakes (Future Forms) in the following email draft. (Only the first one is corrected).',
      paras: [
        {
          label: 'I think we are going run the payment run late tomorrow. -> I think we will run the payment run late tomorrow.',
          purpose: ''
        },
        { label: 'We will having a meeting on Friday to review the past due invoices.', purpose: '' },
        { label: 'The AP Manager is going discuss the new credit terms.', purpose: '' },
        { label: 'The client promises they are sending the settlement next week.', purpose: '' },
        { label: 'What you will do with the 90-day outstanding debtor?', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'I think we are going run the payment run late tomorrow. -> I think we will run the payment run late tomorrow.',
        'We will having a meeting on Friday to review the past due invoices.',
        'The AP Manager is going discuss the new credit terms.',
        'The client promises they are sending the settlement next week.',
        'What you will do with the 90-day outstanding debtor?'
      ],
      model: 'I think we will run the payment run late tomorrow.',
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Correct the grammar mistakes (Future Forms) in the following email draft. (Only the first one is corrected).',
          'I think we are going run the payment run late tomorrow. -> I think we will run the payment run late tomorrow.',
          'We will having a meeting on Friday to review the past due invoices.',
          'The AP Manager is going discuss the new credit terms.'
        ]
      },
      visual: { spot: 'payment-run', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 5 · 6D',
      type: 'study',
      source: 'book',
      title: 'Writing Task 3: Planning the Cash Flow (Internal Memo)',
      instruction: 'Focus: Use Will for predictions and Present Continuous for fixed payments/receipts.',
      html: '<p><b>Context.</b> Write an internal memo (80 words) to the Group CFO forecasting the cash flow for the next two months.</p><p>The forecast shows cash inflow will increase significantly in June. We are receiving the large client settlement on June 5th. I think Accounts Payable will remain stable. We are clearing the three major supplier payments on July 1st. This will ensure we have adequate working capital for the quarter."</p>',
      playable: [
        { t: 'The forecast shows cash inflow will increase significantly in June.', role: 'narrator' },
        { t: 'We are receiving the large client settlement on June 5th.', role: 'narrator' },
        { t: 'I think Accounts Payable will remain stable.', role: 'narrator' },
        { t: 'We are clearing the three major supplier payments on July 1st.', role: 'narrator' },
        { t: 'This will ensure we have adequate working capital for the quarter.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: {
        spot: 'forecast',
        caption: 'Writing · Writing Task 3: Planning the Cash Flow (Internal Memo)',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6D'],
      ref: '6D',
      bookRef: 'Unit 5 · 6D',
      type: 'writer',
      title: 'Writing Task 3: Planning the Cash Flow (Internal Memo)',
      instruction: 'Focus: Use Will for predictions and Present Continuous for fixed payments/receipts.',
      paras: [{ label: 'Your answer', purpose: '' }],
      minWords: 60,
      stems: [],
      model: 'MEMORANDUM: Cash Flow Forecast (Next 60 Days)',
      coach: {
        title: 'What this is practising',
        target: 'Future Forms',
        taught: [
          'Focus: Use Will for predictions and Present Continuous for fixed payments/receipts.',
          'Example: "MEMORANDUM: Cash Flow Forecast (Next 60 Days)'
        ]
      },
      visual: { spot: 'payment-run', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's18-writing-1',
  prevLabel: 'Writing 1',
  next: 's20-pronunciation',
  nextLabel: 'Pronunciation'
});
