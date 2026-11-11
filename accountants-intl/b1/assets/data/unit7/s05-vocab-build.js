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
        {
          t: 'Example: "Our primary goal is to generate revenue and exceed the budget.',
          role: 'narrator'
        }
      ],
      doneLabel: 'I have read this',
      brief: 'Which verb goes with which noun. English is fussy about this — you <i>post</i> a transaction and <i>file</i> a return, and swapping them is the mistake that marks you out as a learner.',
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
      type: 'cloze',
      title: 'Word Building: Adjective and Verb',
      instruction: 'Complete the table. One word per box, from the same family as the word on the left.',
      text: '<div style="font-size:16px;line-height:2.4"><ol><li>Comparative &rarr; <b>Verb</b>: [[1]]</li><li>High &rarr; <b>Noun</b>: [[2]]</li><li>Favorable &rarr; <b>Noun</b>: [[3]]</li></ol></div>',
      answers: {
        '1': ['Compare', 'compare', 'Compare'],
        '2': ['Height', 'height', 'Height'],
        '3': ['Favor', 'favor', 'Favor']
      },
      whyTitle: 'Where each answer comes from',
      why: [
        'From the author\'s own example in that row: &ldquo;"We are making a comparison with Q1."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"We need to address the height of the costs."&rdquo;',
        'From the author\'s own example in that row: &ldquo;"The auditor expressed his favor for our controls."&rdquo;'
      ],
      visual: { spot: 'month-end', caption: 'Vocabulary · Word Building: Adjective and Verb', cls: 'vis-sm' }
    }
  ],
  prev: 's04-vocab-context',
  prevLabel: 'Vocabulary · in context',
  next: 's06-grammar-rule',
  nextLabel: 'Grammar · the rule'
});
