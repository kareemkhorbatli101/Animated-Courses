/* Unit 7 · s13-speaking-roles — Speaking · role-play
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s13-speaking-roles', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Speaking · role-play',
    page: 7,
    section: '13',
    lesson: 'Part 4 · Speaking',
    title: 'Speaking · role-play'
  },
  objective: 'Role-Play 1: Justifying the Overspend',
  cards: [
    {
      id: 'c1',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 7 · 4B',
      type: 'study',
      source: 'book',
      title: 'Role-Play 1: Justifying the Overspend',
      instruction: 'Student A (Manager): Explain why the actuals are higher than the budget (Use Comparative).',
      html: '<p><b>Context.</b> A department manager (A) is explaining an adverse variance to the Financial Controller (B).</p><p>Student B (Controller): Ask what the most expensive item was (Use Superlative). Suggest a less expensive alternative (Use Comparative).</p>',
      playable: [
        {
          t: 'Student B (Controller): Ask what the most expensive item was (Use Superlative).',
          role: 'narrator'
        },
        { t: 'Suggest a less expensive alternative (Use Comparative).', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'reporting', caption: 'Speaking · Role-Play 1: Justifying the Overspend' }
    },
    {
      id: 'c2',
      covers: ['4B'],
      ref: '4B',
      bookRef: 'Unit 7 · 4B',
      type: 'roleplay',
      title: 'Role-Play 1: Justifying the Overspend',
      instruction: 'Student A (Manager): Explain why the actuals are higher than the budget (Use Comparative).',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "The consulting fees were more expensive than the budget, because we needed extra support."'
        },
        {
          who: 'B',
          notes: 'B: "I see. But what was the single most expensive item? I think next month, we should use internal staff, which is cheaper than hiring external consultants."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Student A (Manager): Explain why the actuals are higher than the budget (Use Comparative).',
          'A: "The consulting fees were more expensive than the budget, because we needed extra support."',
          'B: "I see. But what was the single most expensive item? I think next month, we should use internal staff, which is cheaper than hiring external consultants."'
        ]
      },
      model: 'A: The consulting fees were more expensive than the budget, because we needed extra support. — B: I see. But what was the single most expensive item? I think next month, we should use internal staff, which is cheaper than hiring external consultants. — B: Ask what the most expensive item was (Use Superlative). Suggest a less expensive alternative (Use Comparative).',
      visual: { spot: 'variance', caption: 'Take each card in turn.' },
      remember: [
        'Student B (Controller): Ask what the most expensive item was (Use Superlative). Suggest a less expensive alternative (Use Comparative).'
      ]
    },
    {
      id: 'c3',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 7 · 4C',
      type: 'study',
      source: 'book',
      title: 'Role-Play 2: Analyzing the Trend',
      instruction: 'Student A: State a positive trend (Use Superlative). Ask about the weakest area.',
      html: '<p><b>Context.</b> Two analysts are comparing this year\'s sales figures to last year\'s.</p><p>Student B: State the weakest area (Use Superlative). Explain why it is worse than expected (Use Comparative).</p>',
      playable: [
        {
          t: 'State the weakest area (Use Superlative). Explain why it is worse than expected (Use Comparative).',
          role: 'spk:Student B',
          who: 'Student B'
        }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'ledger', caption: 'Speaking · Role-Play 2: Analyzing the Trend', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['4C'],
      ref: '4C',
      bookRef: 'Unit 7 · 4C',
      type: 'roleplay',
      title: 'Role-Play 2: Analyzing the Trend',
      instruction: 'Student A: State a positive trend (Use Superlative). Ask about the weakest area.',
      minWords: 30,
      roles: [
        {
          who: 'A',
          notes: 'A: "Our Q3 sales were the best in company history! But what was the weakest department?"'
        },
        {
          who: 'B',
          notes: 'B: "The new product launch had the least favorable results. It was more sluggish than our initial forecast."'
        }
      ],
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Student A: State a positive trend (Use Superlative). Ask about the weakest area.',
          'A: "Our Q3 sales were the best in company history! But what was the weakest department?"',
          'B: "The new product launch had the least favorable results. It was more sluggish than our initial forecast."'
        ]
      },
      model: 'A: Our Q3 sales were the best in company history! But what was the weakest department? — B: The new product launch had the least favorable results. It was more sluggish than our initial forecast. — B: State the weakest area (Use Superlative). Explain why it is worse than expected (Use Comparative).',
      visual: { spot: 'variance', caption: 'Take each card in turn.' },
      remember: [
        'Student B: State the weakest area (Use Superlative). Explain why it is worse than expected (Use Comparative).'
      ]
    }
  ],
  prev: 's12-speaking-phrases',
  prevLabel: 'Speaking · phrases',
  next: 's14-speaking-present',
  nextLabel: 'Speaking · present it'
});
