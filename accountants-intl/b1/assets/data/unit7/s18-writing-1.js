/* Unit 7 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u07.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u7-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 7 · Writing 1',
    page: 7,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Comparatives)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 7 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Comparatives)',
      instruction: 'Paraphrase the following statements using the Comparative form in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. Last month\'s variance was EUR 20k, this month\'s is EUR 5k. (small) -> This month\'s variance is [[2]] last month\'s.<br>3. The marketing department spent EUR 12k, and the HR department spent EUR 15k. (expensive) -> The HR department was [[3]] the marketing department.</div>',
      answers: { '2': ['smaller than'], '3': ['more expensive than the marketing department'] },
      bank: ['smaller than'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>smaller than</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>more expensive than the marketing department</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> Last month\'s variance was EUR 20k, this month\'s is EUR 5k. (small) -> This month\'s variance is <u>smaller than</u> last month\'s.',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Comparatives)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 7 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Comparatives)',
      instruction: 'Paraphrase the following statements using the Comparative form in parentheses. (Only the first one is done for you).',
      paras: [
        {
          label: 'Budgeted sales were EUR 100k, actual sales were EUR 110k. (high) -> Actual sales were higher than budgeted sales.',
          purpose: ''
        },
        {
          label: 'Last month\'s variance was EUR 20k, this month\'s is EUR 5k. (small) -> This month\'s variance is ____________________ last month\'s.',
          purpose: ''
        },
        {
          label: 'The marketing department spent EUR 12k, and the HR department spent EUR 15k. (expensive) -> The HR department was ____________________ the marketing department.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'Budgeted sales were EUR 100k, actual sales were EUR 110k. (high) -> Actual sales were higher than budgeted sales.',
        'Last month\'s variance was EUR 20k, this month\'s is EUR 5k. (small) -> This month\'s variance is ____________________ last month\'s.',
        'The marketing department spent EUR 12k, and the HR department spent EUR 15k. (expensive) -> The HR department was ____________________ the marketing department.'
      ],
      model: 'Actual sales were higher than budgeted sales.',
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Paraphrase the following statements using the Comparative form in parentheses. (Only the first one is done for you).',
          'Budgeted sales were EUR 100k, actual sales were EUR 110k. (high) -> Actual sales were higher than budgeted sales.',
          'Last month\'s variance was EUR 20k, this month\'s is EUR 5k. (small) -> This month\'s variance is ____________________ last month\'s.',
          'The marketing department spent EUR 12k, and the HR department spent EUR 15k. (expensive) -> The HR department was ____________________ the marketing department.'
        ]
      },
      visual: { spot: 'variance', caption: 'Write it the way this unit has been teaching you to.' },
      bank: ['Variance', 'Actuals', 'Budget']
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 7 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: The Performance Email',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short email (50–60 words) to a department head explaining that their costs are higher than budget.</p><ol><li>Use a Comparative to state the increase.</li><li>Use a Superlative to identify the largest cost driver.</li><li>Ask for an explanation.</li><li>Example: "Dear Daniel, I am reviewing your monthly performance. I note that your total operating cost is 15% higher than your budgeted amount. The most significant driver of this variance was the travel expense. Could you please provide an explanation for this overspend?"</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: { spot: 'budget', caption: 'Writing · Writing Task 1: The Performance Email', cls: 'vis-sm' }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 7 · 6B',
      type: 'writer',
      title: 'Writing Task 1: The Performance Email',
      instruction: 'Include:',
      paras: [
        { label: 'Use a Comparative to state the increase.', purpose: '' },
        { label: 'Use a Superlative to identify the largest cost driver.', purpose: '' },
        { label: 'Ask for an explanation.', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'Use a Comparative to state the increase.',
        'Use a Superlative to identify the largest cost driver.',
        'Ask for an explanation.'
      ],
      model: 'Dear Daniel, I am reviewing your monthly performance. I note that your total operating cost is 15% higher than your budgeted amount. The most significant driver of this variance was the travel expense. Could you please provide an explanation for this overspend?',
      coach: {
        title: 'What this is practising',
        target: 'Adjectives',
        taught: [
          'Include:',
          'Use a Comparative to state the increase.',
          'Use a Superlative to identify the largest cost driver.',
          'Ask for an explanation.'
        ]
      },
      visual: { spot: 'variance', caption: 'Write it the way this unit has been teaching you to.' }
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
