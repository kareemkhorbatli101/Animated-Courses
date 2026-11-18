/* Unit 5 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s08', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can talk a customer through the app one step '
  + 'at a time, check they have followed each step, and reassure someone '
  + 'who is nervous about security.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 5 · 4A',
      visual: { spot: 'atm' },
      type: 'dragmatch',
      title: 'Functional language — explaining the app',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “Let’s start at the first screen.”' },
      { id: 'm-b', label: 'b) “A code is sent to your phone.”' },
      { id: 'm-c', label: 'c) “Nothing can be sent by accident.”' },
      { id: 'm-d', label: 'd) “Shall I show you that again?”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Start an explanation', accept: 'm-a',
          why: '<b>Start an explanation</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Describe what the system does', accept: 'm-a',
          why: '<b>Describe what the system does</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Reassure', accept: 'm-a',
          why: '<b>Reassure</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Check understanding', accept: 'm-a',
          why: '<b>Check understanding</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 5 · 4B',
      type: 'report',
      title: 'Explain the app (pairwork)',
      instruction: 'Explain one app screen to a customer, step by step. Then swap '
  + 'roles.<br>Card A (staff): start at the first screen · name two things '
  + '· explain one action · check understanding.<br>Card B (customer): you '
  + 'are nervous about the app; ask two questions; ask whether you can '
  + 'undo a mistake.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: Let’s start at the first screen. Your balance is shown at the top. '
        + '— B: And this button? — A: That is for transfers. A code is sent to '
        + 'your phone before anything is paid.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 5 · 4C',
      type: 'study',
      title: 'Help a nervous customer',
      html: '<p>“Nothing is sent until the code is entered, so a payment cannot be '
      + 'made by accident. And if you are ever worried, your card can be '
      + 'frozen from this screen, and unfrozen later.”</p>',
      instruction: 'A customer is afraid of making a mistake online. Reassure them and '
  + 'explain the safety steps.<br>Stretch: the customer says “I would '
  + 'rather come to the branch” — respond respectfully.',
      doneLabel: 'I have read this'
    }
  ]
});
