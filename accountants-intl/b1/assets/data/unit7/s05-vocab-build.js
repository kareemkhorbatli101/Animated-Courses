/* Unit 7 · s05-vocab-build — Word building
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s05-vocab-build', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Word building',
    page: 7,
    section: '05',
    lesson: 'Part 1 · Vocabulary',
    title: 'Word building'
  },
  objective: 'Collocations for Financial Reporting',
  cards: [
    {
      id: 'c1',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 7 · 1D',
      type: 'study',
      source: 'book',
      title: 'Collocations for Financial Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases.',
      html: '<p>Example: "Our primary goal is to generate revenue and exceed the budget."</p>',
      playable: [
        { t: '"Our primary goal is to generate revenue and exceed the budget.', role: 'narrator' }
      ],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Vocabulary · Collocations for Financial Reporting' }
    },
    {
      id: 'c2',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 7 · 1D',
      type: 'dragmatch',
      title: 'Collocations for Financial Reporting',
      instruction: 'Match the verb on the left with the noun on the right to create common phrases. Click a meaning, then click the item it belongs to — or drag it there.',
      poolLabel: 'Noun — click one, then click where it belongs',
      cols: 2,
      chips: [
        { id: 'm-a', label: 'a. the variance' },
        { id: 'm-b', label: 'b. the budget' },
        { id: 'm-c', label: 'c. the performance' },
        { id: 'm-d', label: 'd. revenue' },
        { id: 'm-e', label: 'e. actuals vs. budget' },
        { id: 'm-f', label: 'f. the target' }
      ],
      targets: [
        {
          id: 't1',
          num: 1,
          label: 'Generate',
          accept: 'm-d',
          why: '<b>Generate</b> — revenue. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't2',
          num: 2,
          label: 'Exceed',
          accept: 'm-b',
          why: '<b>Exceed</b> — the budget. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't3',
          num: 3,
          label: 'Compare',
          accept: 'm-e',
          why: '<b>Compare</b> — actuals vs. budget. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't4',
          num: 4,
          label: 'Drill down into',
          accept: 'm-a',
          why: '<b>Drill down into</b> — the variance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't5',
          num: 5,
          label: 'Analyze',
          accept: 'm-c',
          why: '<b>Analyze</b> — the performance. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        },
        {
          id: 't6',
          num: 6,
          label: 'Hit',
          accept: 'm-f',
          why: '<b>Hit</b> — the target. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.'
        }
      ],
      whyTitle: 'What each one means',
      worked: {
        q: '1. Generate',
        a: 'revenue. The first words of the meaning are what settle it: they say what KIND of thing this is, and most of the other options are a different kind.',
        why: 'Done for you. Read the meaning for its FIRST few words: they tell you what kind of thing it is — a document, a person, an action, an amount — and that alone rules out most of the list before you read any further.'
      },
      visual: { spot: 'variance', caption: 'Vocabulary · Collocations for Financial Reporting', cls: 'vis-sm' }
    },
    {
      id: 'c3',
      covers: ['1D'],
      ref: '1D',
      bookRef: 'Unit 7 · 1D',
      type: 'phrasebank',
      title: 'Hear the words',
      instruction: 'Click any word to hear it said.',
      role: 'course',
      phrases: ['Generate', 'Exceed', 'Compare', 'Drill down into', 'Analyze', 'Hit'],
      visual: { spot: 'debtor', caption: 'Vocabulary · Hear the words', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['1E'],
      ref: '1E',
      bookRef: 'Unit 7 · 1E',
      type: 'study',
      source: 'book',
      title: 'Word Building: Adjective and Verb',
      instruction: 'Complete the table.',
      html: '<table class="bt"><thead><tr><th>Adjective</th><th>Verb</th><th>Noun</th><th>Sentence Example</th></tr></thead><tbody><tr><td>Significant</td><td>Signify</td><td>Significance</td><td>"The significance of this variance is huge."</td></tr><tr><td>Comparative</td><td>_________</td><td>Comparison</td><td>"We are making a comparison with Q1."</td></tr><tr><td>Superior</td><td>_________</td><td>Superiority</td><td>"Our profit demonstrates market superiority."</td></tr><tr><td>High</td><td>Heighten</td><td>_________</td><td>"We need to address the height of the costs."</td></tr><tr><td>Favorable</td><td>Favor</td><td>_________</td><td>"The auditor expressed his favor for our controls."</td></tr></tbody></table>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'month-end', caption: 'Vocabulary · Word Building: Adjective and Verb', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
