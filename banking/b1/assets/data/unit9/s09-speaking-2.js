/* Unit 9 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s09', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can help a customer set a saving goal they '
  + 'can actually meet, explain interest plainly, and avoid promising a '
  + 'return you cannot guarantee.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 9 · 4D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A is an adviser; Student B is a customer. Ask and answer to '
  + 'build a plan.<br>Card A (adviser): Everyday Saver, withdraw any day · '
  + 'Step Saver, two withdrawals a year · standing transfer free on any '
  + 'payday.<br>Card B (customer): you have 1,500 saved; your goal is '
  + '8,000 in three years; you have no emergency fund; you were paid '
  + 'yesterday.<br>Useful language: How much have you saved so far? · When '
  + 'did you start? · How much could you put aside each month?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 9 · 4E',
      type: 'dragmatch',
      title: 'Close the meeting',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a savings meeting warmly. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) moving to action' },
      { id: 'm-b', label: 'b) encouraging the customer' },
      { id: 'm-c', label: 'c) planning the next step' },
      { id: 'm-d', label: 'd) leaving the customer in control' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Shall I set up the transfer for payday?”', accept: 'm-a',
          why: '<b>“Shall I set up the transfer for payday?”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“You have done better than you think.”', accept: 'm-a',
          why: '<b>“You have done better than you think.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Come back in six months and we’ll review it.”', accept: 'm-a',
          why: '<b>“Come back in six months and we’ll review it.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Nothing here is fixed; you can change it.”', accept: 'm-a',
          why: '<b>“Nothing here is fixed; you can change it.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
