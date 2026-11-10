/* Unit 4 · s15-reading-1 — Reading 1
   Built by tools/build-unit.py from the author's own blocks and tools/key/u04.json.
   Book: EnglishForAccountants_International_StudentBook.docx
   sha256 82edae5cbc0819e687907c84098ea17528c06bc25aec7affe80f6337e8fed19c */
EFA.page('u4-s15-reading-1', {
  book: {
    source: 'EFA Intl',
    ref: 'Unit 4 · Reading 1',
    page: 4,
    section: '15',
    lesson: 'Part 5 · Reading',
    title: 'Reading 1'
  },
  objective: 'Pre-Reading Discussion',
  cards: [
    {
      id: 'c1',
      covers: ['5A'],
      ref: '5A',
      bookRef: 'Unit 4 · 5A',
      type: 'discuss',
      title: 'Pre-Reading Discussion',
      instruction: 'Discuss: There is no single right answer — write what you think.',
      minWords: 8,
      questions: [
        { q: 'What is the purpose of setting a reorder point?' },
        { q: 'Why is office supplies often considered an expense rather than an asset?' },
        { q: 'What are the risks of holding too much stock?' }
      ],
      okMsg: 'Good. Keep these in mind as you work through the unit.',
      visual: {
        spot: 'stock',
        caption: 'Stocktaking, counting assets, ordering office stationery, and managing consumables across the group\'s offices.'
      },
      coach: {
        title: 'What this is practising',
        target: 'Countable/Uncountable Nouns & Quantifiers',
        taught: [
          'Discuss:',
          'What is the purpose of setting a reorder point?',
          'Why is office supplies often considered an expense rather than an asset?',
          'What are the risks of holding too much stock?'
        ]
      },
      model: 'So that somebody orders before the item runs out. The reorder point is the level at which we still have a few days\' supply left, which gives the supplier time to deliver.'
    },
    {
      id: 'c2',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 4 · 5B',
      type: 'scene',
      source: 'book',
      title: 'Reading Passage 1: The Definition of Consumables',
      instruction: 'Read the internal memo on consumables.',
      playable: [
        {
          t: 'Consumables are defined as supplies that are used up quickly in the course of business operations.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'These are treated as an expense when purchased, not an asset.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'This category includes a lot of items: printer toner, a few boxes of paper clips, cleaning supplies, and general stationery.',
          role: 'narrator',
          _key: 'narr'
        },
        { t: 'We must note that equipment is not a consumable.', role: 'narrator', _key: 'narr' },
        {
          t: 'Since we use too much paper, we have set a low reorder point for it.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'Employees may request new supplies using the online form.',
          role: 'narrator',
          _key: 'narr'
        },
        {
          t: 'We cannot have too little paper or ink, or productivity will fall.',
          role: 'narrator',
          _key: 'narr'
        }
      ],
      scene: 'u4-reading-1-c2',
      passage: '<p>Consumables are defined as supplies that are used up quickly in the course of business operations. These are treated as an expense when purchased, not an asset. This category includes a lot of items: printer toner, a few boxes of paper clips, cleaning supplies, and general stationery. We must note that equipment is not a consumable. Since we use too much paper, we have set a low reorder point for it. Employees may request new supplies using the online form. We cannot have too little paper or ink, or productivity will fall.</p>',
      after: 'Play the whole scene, or one line at a time. Use <b>loop</b> on a line and <b>0.6×</b> if you need it.',
      visual: {
        spot: 'reorder-point',
        caption: 'Reading · Reading Passage 1: The Definition of Consumables',
        cls: 'vis-sm'
      }
    },
    {
      id: 'c3',
      covers: ['5B'],
      ref: '5B',
      bookRef: 'Unit 4 · 5B',
      type: 'quizset',
      title: 'Answer the questions',
      instruction: 'Every answer is decided by the passage above, not by what is usually true in an accounts office.',
      say: true,
      items: [
        {
          q: '1. What is the definition of consumables?',
          evidence: 'Consumables are defined as supplies that are used up quickly in the course of business operations.',
          options: [
            {
              t: 'Printer toner, a few boxes of paper clips, cleaning supplies and general stationery.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the definition of consumables?</i> — it answers <i>What are a few examples of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because the company uses too much paper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the definition of consumables?</i> — it answers <i>What is the reason for setting a low reorder point for paper?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The purchase of consumables — they are an expense when purchased, not an asset.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the definition of consumables?</i> — it answers <i>What is considered an expense, the purchase of consumables or equipment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Supplies that are used up quickly in the course of business operations.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Consumables are defined as supplies that are used up quickly in the course of business operations.”'
            }
          ]
        },
        {
          q: '2. What is considered an expense, the purchase of consumables or equipment?',
          evidence: 'These are treated as an expense when purchased, not an asset.',
          options: [
            {
              t: 'Because the company uses too much paper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is considered an expense, the purchase of consumables or equipment?</i> — it answers <i>What is the reason for setting a low reorder point for paper?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The purchase of consumables — they are an expense when purchased, not an asset.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “These are treated as an expense when purchased, not an asset.”'
            },
            {
              t: 'Printer toner, a few boxes of paper clips, cleaning supplies and general stationery.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is considered an expense, the purchase of consumables or equipment?</i> — it answers <i>What are a few examples of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Supplies that are used up quickly in the course of business operations.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is considered an expense, the purchase of consumables or equipment?</i> — it answers <i>What is the definition of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '3. What are a few examples of consumables?',
          evidence: 'This category includes a lot of items: printer toner, a few boxes of paper clips, cleaning supplies, and general stationery.',
          options: [
            {
              t: 'The purchase of consumables — they are an expense when purchased, not an asset.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of consumables?</i> — it answers <i>What is considered an expense, the purchase of consumables or equipment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Because the company uses too much paper.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of consumables?</i> — it answers <i>What is the reason for setting a low reorder point for paper?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Printer toner, a few boxes of paper clips, cleaning supplies and general stationery.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “This category includes a lot of items: printer toner, a few boxes of paper clips, cleaning supplies, and general stationery.”'
            },
            {
              t: 'Supplies that are used up quickly in the course of business operations.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What are a few examples of consumables?</i> — it answers <i>What is the definition of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '4. What is the reason for setting a low reorder point for paper?',
          evidence: 'Since we use too much paper, we have set a low reorder point for it.',
          options: [
            {
              t: 'Because the company uses too much paper.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “Since we use too much paper, we have set a low reorder point for it.”'
            },
            {
              t: 'Supplies that are used up quickly in the course of business operations.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the reason for setting a low reorder point for paper?</i> — it answers <i>What is the definition of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Printer toner, a few boxes of paper clips, cleaning supplies and general stationery.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the reason for setting a low reorder point for paper?</i> — it answers <i>What are a few examples of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'The purchase of consumables — they are an expense when purchased, not an asset.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What is the reason for setting a low reorder point for paper?</i> — it answers <i>What is considered an expense, the purchase of consumables or equipment?</i> Check what the question actually asks for before you look for it in the text.'
            }
          ]
        },
        {
          q: '5. What cannot the company have too little of?',
          evidence: 'We cannot have too little paper or ink, or productivity will fall.',
          options: [
            {
              t: 'The purchase of consumables — they are an expense when purchased, not an asset.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the company have too little of?</i> — it answers <i>What is considered an expense, the purchase of consumables or equipment?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Printer toner, a few boxes of paper clips, cleaning supplies and general stationery.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the company have too little of?</i> — it answers <i>What are a few examples of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Supplies that are used up quickly in the course of business operations.',
              ok: false,
              why: 'True of the passage, but it is not an answer to <i>What cannot the company have too little of?</i> — it answers <i>What is the definition of consumables?</i> Check what the question actually asks for before you look for it in the text.'
            },
            {
              t: 'Paper or ink — too little of either and productivity will fall.',
              ok: true,
              why: 'Correct. The passage says it in so many words: “We cannot have too little paper or ink, or productivity will fall.”'
            }
          ]
        }
      ],
      visual: { spot: 'source-document', caption: 'Reading · Answer the questions', cls: 'vis-sm' }
    }
  ],
  prev: 's14-speaking-present',
  prevLabel: 'Speaking · present it',
  next: 's16-reading-2',
  nextLabel: 'Reading 2'
});
