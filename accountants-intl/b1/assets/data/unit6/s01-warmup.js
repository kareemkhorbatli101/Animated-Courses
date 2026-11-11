/* Unit 6 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u06.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u6-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 6 · Warm-up',
    page: 6,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'The Consequences of Errors',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 6 · 0A',
      type: 'study',
      source: 'book',
      title: 'The Consequences of Errors',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> In finance, a small mistake can have large consequences. Discuss the potential impact of these common accounting errors.</p><ol><li>Misclassifying a large capital expense as a revenue expense.</li><li>Failing to reconcile the bank statement for two months.</li><li>Making a duplicate payment to a major supplier.</li><li>Understating tax liabilities in one of the group\'s six jurisdictions.</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'cash', caption: 'Warm-Up · The Consequences of Errors' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 6 · 0B',
      type: 'study',
      source: 'book',
      title: 'Internal Controls',
      instruction: 'Internal controls are rules and procedures designed to protect assets and ensure the reliability of financial data.',
      html: '<p>Read the controls below and discuss why each is important.</p><ol><li>Segregation of Duties: Two different people must handle the receipt of cash and the recording of the transaction.</li><li>Physical Controls: Keeping valuable assets (like inventory or cash) in a secure, locked location.</li><li>Reconciliation: Comparing two independent records (like the bank balance and the ledger balance) to check for discrepancies.</li></ol>',
      playable: [{ t: 'Read the controls below and discuss why each is important.', role: 'narrator' }],
      doneLabel: 'I have read this',
      visual: { spot: 'transaction', caption: 'Warm-Up · Internal Controls', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 6 · 0C',
      type: 'discuss',
      title: 'Dealing with Discovery',
      instruction: 'Imagine you discover a significant error. How will you handle the situation? There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        {
          q: 'What is the first person you will inform? (Use First Conditional: If I find a mistake, I will inform the Senior Accountant.)'
        },
        {
          q: 'What is the worst possible outcome? (Use Second Conditional: If the mistake were public, we would lose client trust.)'
        },
        { q: 'What is the best advice you can give to prevent it from happening again?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'discrepancy',
        caption: 'Bank reconciliation, spotting mistakes, internal controls, and fraud prevention.'
      },
      coach: {
        title: 'What this is practising',
        target: 'First and Second Conditionals',
        taught: [
          'Imagine you discover a significant error. How will you handle the situation?',
          'What is the first person you will inform? (Use First Conditional: If I find a mistake, I will inform the Senior Accountant.)',
          'What is the worst possible outcome? (Use Second Conditional: If the mistake were public, we would lose client trust.)',
          'What is the best advice you can give to prevent it from happening again?'
        ]
      },
      model: 'If I find a mistake, I will tell my line manager first, because they decide whether it goes to the controller. If the amount were over EUR 1,000, I would tell the controller the same day.'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
