/* Unit 7 · s01-warmup — Warm-up
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s01-warmup', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Warm-up',
    page: 7,
    section: '01',
    lesson: 'Warm-Up',
    title: 'Warm-up'
  },
  objective: 'Interpreting Financial Results',
  cards: [
    {
      id: 'c1',
      covers: ['0A'],
      ref: '0A',
      bookRef: 'Unit 7 · 0A',
      type: 'study',
      source: 'book',
      title: 'Interpreting Financial Results',
      instruction: 'Read this before you go on.',
      html: '<p><b>Context.</b> Discuss the meaning of these terms in financial reporting.</p><ol><li>Favourable Variance (F): When the actual result is better than the budget (e.g., actual revenue is higher).</li><li>Adverse Variance (A): When the actual result is worse than the budget (e.g., actual cost is higher).</li><li>Budgeting: The process of setting financial plans for future periods.</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      brief: 'A warm-up, so nothing here is marked. Answer from your own desk and your own week — the point is to put you in the situation before the unit starts teaching it.',
      visual: { spot: 'budget', caption: 'Warm-Up · Interpreting Financial Results' }
    },
    {
      id: 'c2',
      covers: ['0B'],
      ref: '0B',
      bookRef: 'Unit 7 · 0B',
      type: 'discuss',
      title: 'Comparing Key Metrics',
      instruction: 'Look at the following comparison points. Use adjectives to describe them. There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'Sales Revenue: Q4 2024 vs. Q3 2024' },
        { q: 'Rent Expense: This month vs. Budget' },
        { q: 'Net Profit: Dublin entity vs. Toronto entity' },
        { q: 'Marketing Cost: The highest cost category this year.' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'variance',
        caption: 'Variance analysis, comparing actuals vs. budget, sales figures, and trend reporting.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Look at the following comparison points. Use adjectives to describe them.',
          'Sales Revenue: Q4 2024 vs. Q3 2024',
          'Rent Expense: This month vs. Budget',
          'Net Profit: Dublin entity vs. Toronto entity'
        ]
      },
      model: 'Q4 sales were higher than Q3, and Q1 was the highest of the year.'
    },
    {
      id: 'c3',
      covers: ['0C'],
      ref: '0C',
      bookRef: 'Unit 7 · 0C',
      type: 'discuss',
      title: 'Setting Benchmarks',
      instruction: 'Why is it essential to compare current performance against: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'The budget (Planned figures)?' },
        { q: 'The previous month/quarter (Historical figures)?' },
        { q: 'Competitors (Industry standards)?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'variance',
        caption: 'Variance analysis, comparing actuals vs. budget, sales figures, and trend reporting.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Why is it essential to compare current performance against:',
          'The budget (Planned figures)?',
          'The previous month/quarter (Historical figures)?',
          'Competitors (Industry standards)?'
        ]
      },
      model: 'The budget is the planned figure and the actuals are what really happened; the variance is the difference. The most useful benchmark is the same quarter last year, because it takes the seasonal effect out.'
    }
  ],
  next: 's02-vocab-match',
  nextLabel: 'Vocabulary · match'
});
