/* Unit 5 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s09', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can talk a customer through the app one step '
  + 'at a time, check they have followed each step, and reassure someone '
  + 'who is nervous about security.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 5 · 4D',
      visual: { spot: 'email-parts' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A works in digital support; Student B is a customer. Ask and '
  + 'answer to solve the problem.<br>Card A (support): a reset link can be '
  + 'sent to email; codes go to the number on file; transfers over 1,000 '
  + 'are checked.<br>Card B (customer): you cannot log in; your phone '
  + 'number changed last year; you sent 1,500 yesterday and it has not '
  + 'arrived.<br>Useful language: When was it changed? · Has a code been '
  + 'sent to you? · Would you like a reset link sent to your email?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 5 · 4E',
      type: 'dragmatch',
      title: 'Close the explanation',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a digital-support conversation politely. Use two phrases '
  + 'above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) giving the customer something to keep' },
      { id: 'm-b', label: 'b) leaving the customer in control' },
      { id: 'm-c', label: 'c) giving a clear next step' },
      { id: 'm-d', label: 'd) practising together' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Shall I write the steps down for you?”', accept: 'm-a',
          why: '<b>“Shall I write the steps down for you?”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“You can always freeze the card yourself.”', accept: 'm-a',
          why: '<b>“You can always freeze the card yourself.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“If it happens again, call this number.”', accept: 'm-a',
          why: '<b>“If it happens again, call this number.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Would you like to try it once with me?”', accept: 'm-a',
          why: '<b>“Would you like to try it once with me?”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
