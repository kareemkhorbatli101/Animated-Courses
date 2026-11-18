/* Unit 2 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s08', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can offer and request in the register the '
  + 'counter needs, run a service dialogue from both sides, calm a '
  + 'customer who has waited too long, and close the conversation '
  + 'properly.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 2 · 4A',
      visual: { spot: 'queue' },
      type: 'dragmatch',
      title: 'Functional language — offers and requests',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “Could you tell me your account number?”' },
      { id: 'm-b', label: 'b) “How can I help you?”' },
      { id: 'm-c', label: 'c) “Could you wait one moment, please?”' },
      { id: 'm-d', label: 'd) “I’m sorry for the wait.”' },
      { id: 'm-e', label: 'e) “Have a good weekend.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Offer help', accept: 'm-a',
          why: '<b>Offer help</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Ask for information', accept: 'm-a',
          why: '<b>Ask for information</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Ask the customer to wait', accept: 'm-a',
          why: '<b>Ask the customer to wait</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Apologise', accept: 'm-a',
          why: '<b>Apologise</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 2 · 4B',
      type: 'report',
      title: 'Bank simulation (pairwork)',
      instruction: 'Run a short service dialogue, then swap roles.<br>Card A (banker): '
  + 'greet · ask for ID · confirm address · offer a first deposit.<br>Card '
  + 'B (customer): you want to open an account; you have your ID; your '
  + 'address is in Warsaw.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: Good morning. How may I help you? — B: I’d like to open a savings '
        + 'account. — A: Certainly. Could I see your ID, please? — B: Here you '
        + 'are. — A: Thank you. May I confirm your address?']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 2 · 4C',
      type: 'study',
      title: 'Handle a difficult situation',
      html: '<p>“I’m very sorry for the wait. Thank you for your patience. How can '
      + 'I help you now? Let me sort this out for you quickly.”</p>',
      instruction: 'A customer is upset because they waited a long time. Stay calm and '
  + 'polite. Use the steps.<br>Steps: 1) apologise · 2) thank them · 3) '
  + 'offer help · 4) act.<br>Stretch: the customer is still angry — stay '
  + 'calm and offer one clear next step.',
      doneLabel: 'I have read this'
    }
  ]
});
