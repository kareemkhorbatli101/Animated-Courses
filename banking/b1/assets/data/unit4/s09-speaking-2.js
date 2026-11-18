/* Unit 4 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s09', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can explain a product\'s features and its '
  + 'cost plainly, compare two products aloud for a customer, and '
  + 'recommend one without overselling it.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 4 · 4D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A is an adviser; Student B is a customer. Ask and answer to '
  + 'find the best product.<br>Card A (adviser): Everyday Saver 1%, '
  + 'withdraw any day · Step Saver 3%, two withdrawals a year · Fixed 12 '
  + '5%, locked one year.<br>Card B (customer): you have 10,000; you need '
  + '2,000 of it within three months; the rest can wait two '
  + 'years.<br>Useful language: How much would you like to save? · How '
  + 'soon might you need it? · Would you prefer a higher rate or more '
  + 'flexibility?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 4 · 4E',
      type: 'dragmatch',
      title: 'Close the recommendation',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a product conversation politely. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) moving to action' },
      { id: 'm-b', label: 'b) reassuring the customer' },
      { id: 'm-c', label: 'c) confirming afterwards' },
      { id: 'm-d', label: 'd) giving the customer space' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Shall I open that for you now?”', accept: 'm-a',
          why: '<b>“Shall I open that for you now?”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“You can change this later if your plans change.”', accept: 'm-a',
          why: '<b>“You can change this later if your plans change.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“I’ll send you the details in writing.”', accept: 'm-a',
          why: '<b>“I’ll send you the details in writing.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Take your time and come back if you wish.”', accept: 'm-a',
          why: '<b>“Take your time and come back if you wish.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
