/* Unit 4 §16 — Global Case Study — Launching a Product Worldwide.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s16', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 8 · Global Case Study — Launching a Product Worldwide', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — Launching a Product Worldwide', title: 'Part 8 · Global Case Study — Launching a Product Worldwide' },
  objective: 'By the end of Part 8 you can read how a product is launched across '
  + 'countries, take its vocabulary, and give your own view on what must '
  + 'be adapted locally.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 4 · 8A',
      visual: { spot: 'bank-card' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What did the bank offer in exchange for fewer withdrawals?',
          accept: ['What did the bank offer in exchange for fewer withdrawals?'],
          keys: ['offer',
              'exchange'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why did the account fail in three countries?',
          accept: ['Why did the account fail in three countries?'],
          keys: ['account',
              'three'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What one change did the bank make?',
          accept: ['What one change did the bank make?'],
          keys: ['change'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What is the lesson of the case?',
          accept: ['What is the lesson of the case?'],
          keys: ['lesson'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 4 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the customers in one country or area' },
      { id: 'm-b', label: 'b) to start selling a new product' },
      { id: 'm-c', label: 'c) the situation around the product' },
      { id: 'm-d', label: 'd) how often a customer may take money out' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'launch', accept: 'm-a',
          why: '<b>launch</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'market', accept: 'm-a',
          why: '<b>market</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'withdrawal rule', accept: 'm-a',
          why: '<b>withdrawal rule</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'context', accept: 'm-a',
          why: '<b>context</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 4 · 8C',
      type: 'shortanswer',
      title: 'Discussion',
      instruction: 'Frames: “In my country this would work because ___.” “It would be '
  + 'harder because ___.”',
      items: [{ q: '1. Are most customers in your country paid into an account, or in cash?',
          accept: ['Are most customers in your country paid into an account, or in cash?'],
          keys: ['customers',
              'country'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Which rule would you change for your market?',
          accept: ['Which rule would you change for your market?'],
          keys: ['which',
              'would'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
