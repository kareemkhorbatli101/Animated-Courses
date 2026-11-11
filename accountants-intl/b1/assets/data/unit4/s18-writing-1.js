/* Unit 4 · s18-writing-1 — Writing 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s18-writing-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Writing 1',
    page: 4,
    section: '18',
    lesson: 'Part 6 · Writing',
    title: 'Writing 1'
  },
  objective: 'Guided Writing: Paraphrasing (Quantifiers)',
  cards: [
    {
      id: 'c1',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 4 · 6A',
      type: 'cloze',
      title: 'Guided Writing: Paraphrasing (Quantifiers)',
      instruction: 'Paraphrase the following statements using the quantifier in parentheses. (Only the first one is done for you).',
      text: '<div style="font-size:16px;line-height:2.4">2. We only have three boxes of folders remaining. (A FEW) -> We only have [[2]] of folders remaining.<br>3. The consumption rate is too high. We use a lot of ink. (TOO MUCH) -> The consumption rate is high. We use [[3]] ink.</div>',
      answers: { '2': ['a few boxes'], '3': ['too much ink'] },
      bank: ['a few boxes', 'too much ink'],
      whyTitle: 'What decided each one',
      why: {
        '2': '<b>a few boxes</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.',
        '3': '<b>too much ink</b> — the sentence decides it: read what comes immediately before and after the gap, not the whole line.'
      },
      before: '<b>Done for you — 2.</b> We only have three boxes of folders remaining. (A FEW) -> We only have <u>a few boxes</u> of folders remaining.',
      brief: 'A writing task with a frame: the shape is given and the words are yours. Use the unit\'s grammar on purpose — that is what a reader of your email will notice first.',
      visual: { spot: 'invoice', caption: 'Writing · Guided Writing: Paraphrasing (Quantifiers)' }
    },
    {
      id: 'c2',
      covers: ['6A'],
      ref: '6A',
      bookRef: 'Unit 4 · 6A',
      type: 'writer',
      title: 'Guided Writing: Paraphrasing (Quantifiers)',
      instruction: 'Paraphrase the following statements using the quantifier in parentheses. (Only the first one is done for you).',
      paras: [
        {
          label: 'We have very little money left for equipment. (NOT MUCH) -> We do not have much money left for equipment.',
          purpose: ''
        },
        {
          label: 'We only have three boxes of folders remaining. (A FEW) -> We only have ____________________ of folders remaining.',
          purpose: ''
        },
        {
          label: 'The consumption rate is too high. We use a lot of ink. (TOO MUCH) -> The consumption rate is high. We use ____________________ ink.',
          purpose: ''
        }
      ],
      minWords: 60,
      stems: [
        'We have very little money left for equipment. (NOT MUCH) -> We do not have much money left for equipment.',
        'We only have three boxes of folders remaining. (A FEW) -> We only have ____________________ of folders remaining.',
        'The consumption rate is too high. We use a lot of ink. (TOO MUCH) -> The consumption rate is high. We use ____________________ ink.'
      ],
      model: 'We do not have much money left for equipment.',
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Paraphrase the following statements using the quantifier in parentheses. (Only the first one is done for you).',
          'We have very little money left for equipment. (NOT MUCH) -> We do not have much money left for equipment.',
          'We only have three boxes of folders remaining. (A FEW) -> We only have ____________________ of folders remaining.',
          'The consumption rate is too high. We use a lot of ink. (TOO MUCH) -> The consumption rate is high. We use ____________________ ink.'
        ]
      },
      visual: { spot: 'stock', caption: 'Write it the way this unit has been teaching you to.' }
    },
    {
      id: 'c3',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 4 · 6B',
      type: 'study',
      source: 'book',
      title: 'Writing Task 1: The Low-Stock Report',
      instruction: 'Include:',
      html: '<p><b>Context.</b> Write a short email (50–60 words) to the Purchasing Manager reporting low stock levels.</p><ol><li>State that the reorder point has been reached for two items.</li><li>Use very little for uncountable supplies (e.g., cleaning supplies).</li><li>Use only a few for countable items (e.g., keyboards).</li><li>Example: "Hi Priya, The stocktaking shows we have reached the reorder point for several consumables. We have very little cleaning supplies left, and only a few spare keyboards. Could you please place an urgent order? We cannot afford to be out of stock of any item."</li></ol>',
      playable: [],
      doneLabel: 'I have read this',
      visual: {
        spot: 'reorder-point',
        caption: 'Writing · Writing Task 1: The Low-Stock Report',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c4',
      covers: ['6B'],
      ref: '6B',
      bookRef: 'Unit 4 · 6B',
      type: 'writer',
      title: 'Writing Task 1: The Low-Stock Report',
      instruction: 'Include:',
      paras: [
        { label: 'State that the reorder point has been reached for two items.', purpose: '' },
        { label: 'Use very little for uncountable supplies (e.g., cleaning supplies).', purpose: '' },
        { label: 'Use only a few for countable items (e.g., keyboards).', purpose: '' }
      ],
      minWords: 60,
      stems: [
        'State that the reorder point has been reached for two items.',
        'Use very little for uncountable supplies (e.g., cleaning supplies).',
        'Use only a few for countable items (e.g., keyboards).'
      ],
      model: 'Hi Priya, The stocktaking shows we have reached the reorder point for several consumables. We have very little cleaning supplies left, and only a few spare keyboards. Could you please place an urgent order? We cannot afford to be out of stock of any item.',
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Include:',
          'State that the reorder point has been reached for two items.',
          'Use very little for uncountable supplies (e.g., cleaning supplies).',
          'Use only a few for countable items (e.g., keyboards).'
        ]
      },
      visual: { spot: 'stock', caption: 'Write it the way this unit has been teaching you to.' },
      bank: ['Reorder Point', 'Stocktaking']
    }
  ],
  prev: 's17-reading-3',
  prevLabel: 'Reading 3',
  next: 's19-writing-2',
  nextLabel: 'Writing 2'
});
