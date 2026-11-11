/* Unit 7 · s02-vocab-match — Vocabulary · match
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s02-vocab-match', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Vocabulary · match',
    page: 7,
    section: '02',
    lesson: 'Part 1 · Vocabulary',
    title: 'Vocabulary · match'
  },
  objective: 'Terms for Performance Comparison',
  cards: [
    {
      id: 'c1',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 7 · 1A',
      type: 'dragmatch',
      title: 'Terms for Performance Comparison',
      instruction: 'Match the term to its definition. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Definition — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. The numerical difference between the actual and budgeted amount.' },
        {
          id: 'm-b',
          label: 'b. Exceeded the budget (usually positive for revenue, negative for costs).'
        },
        { id: 'm-c', label: 'c. The money the company expected to spend or earn.' },
        { id: 'm-d', label: 'd. The results that actually happened in the period.' },
        { id: 'm-e', label: 'e. To predict future sales or expenditure.' },
        { id: 'm-f', label: 'f. Achieved less than the budgeted target.' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Actuals',
          accept: 'm-d',
          why: '<b>Actuals</b> — The results that actually happened in the period. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Forecast',
          accept: 'm-e',
          why: '<b>Forecast</b> — To predict future sales or expenditure. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Variance',
          accept: 'm-a',
          why: '<b>Variance</b> — The numerical difference between the actual and budgeted amount. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Budget',
          accept: 'm-c',
          why: '<b>Budget</b> — The money the company expected to spend or earn. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Underperformed',
          accept: 'm-f',
          why: '<b>Underperformed</b> — Achieved less than the budgeted target. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Overspent',
          accept: 'm-b',
          why: '<b>Overspent</b> — Exceeded the budget (usually positive for revenue, negative for costs). The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Actuals',
        a: 'The results that actually happened in the period. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'variance', caption: 'Actuals — one of the words on this list.' },
      brief: 'The unit\'s core terms, matched to their definitions. Get these wrong now rather than in the reading — every later screen assumes them.'
    },
    {
      id: 'c2',
      covers: ['1A'],
      ref: '1A',
      bookRef: 'Unit 7 · 1A',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Actuals', 'Forecast', 'Variance', 'Budget', 'Underperformed', 'Overspent'],
      visual: { spot: 'forecast', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    }
  ],
  prev: 's01-warmup',
  prevLabel: 'Warm-up',
  next: 's03-vocab-gaps',
  nextLabel: 'Vocabulary · in use'
});
