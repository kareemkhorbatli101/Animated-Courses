/* Unit 2 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s09', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can offer and request in the register the '
  + 'counter needs, run a service dialogue from both sides, calm a '
  + 'customer who has waited too long, and close the conversation '
  + 'properly.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 2 · 4D',
      visual: { spot: 'iban-anatomy' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A is a banker; Student B is a customer with a problem. Ask '
  + 'polite questions to solve it.<br>Card A (banker): you can freeze '
  + 'cards, reset PINs, and open accounts. Ask what the customer '
  + 'needs.<br>Card B (customer): you lost your card this morning; you '
  + 'want it frozen; your account number is 4471.<br>Useful language: How '
  + 'can I help? · Could you give me…? · May I have your account number?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 2 · 4E',
      type: 'dragmatch',
      title: 'Closing the conversation politely',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, end a short service dialogue politely. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) checking the customer has no more needs' },
      { id: 'm-b', label: 'b) thanking a customer who waited' },
      { id: 'm-c', label: 'c) a warm goodbye' },
      { id: 'm-d', label: 'd) inviting future contact' },
      { id: 'm-e', label: 'e) asking for ID (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Is there anything else I can help with?”', accept: 'm-a',
          why: '<b>“Is there anything else I can help with?”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Thank you for your patience.”', accept: 'm-a',
          why: '<b>“Thank you for your patience.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Have a nice day!”', accept: 'm-a',
          why: '<b>“Have a nice day!”</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Please contact us any time.”', accept: 'm-a',
          why: '<b>“Please contact us any time.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
