/* Unit 8 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s08', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can explain a requirement without '
  + 'apologising for it, ask for a document courteously, and hold the rule '
  + 'when a customer pushes back.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 8 · 4A',
      visual: { spot: 'kyc-check' },
      type: 'dragmatch',
      title: 'Functional language — explaining rules politely',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “We have to ask everyone the same question.”' },
      { id: 'm-b', label: 'b) “I understand — it does feel like a lot.”' },
      { id: 'm-c', label: 'c) “We must see an official photo document.”' },
      { id: 'm-d', label: 'd) “You don’t have to bring anything else today.”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Soften the rule', accept: 'm-a',
          why: '<b>Soften the rule</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Say it is not personal', accept: 'm-a',
          why: '<b>Say it is not personal</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Say what is needed', accept: 'm-a',
          why: '<b>Say what is needed</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Say what is not needed', accept: 'm-a',
          why: '<b>Say what is not needed</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 8 · 4B',
      type: 'report',
      title: 'Explain a rule (pairwork)',
      instruction: 'Explain one branch rule to a customer who does not like it. Then swap '
  + 'roles.<br>Card A (staff): state the rule · say it applies to everyone '
  + '· say how long it takes · say what is not needed.<br>Card B '
  + '(customer): you are depositing a large amount from the sale of a car; '
  + 'you feel insulted by the question.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: For this amount we must ask about the source of the funds. — B: Do '
        + 'you think I’m a criminal? — A: Not at all. We have to ask everyone '
        + 'the same question above a certain amount. It takes three minutes.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 8 · 4C',
      type: 'study',
      title: 'A customer refuses',
      html: '<p>“I am sorry — I cannot complete the deposit without the form. It '
      + 'is not my decision, and it is the same in every branch. If you would '
      + 'rather do it another day, the money is safe where it is.”</p>',
      instruction: 'A customer refuses to answer a compliance question. Stay polite and '
  + 'do not break the rule.<br>Stretch: the customer asks to speak to the '
  + 'manager — hand over professionally.',
      doneLabel: 'I have read this'
    }
  ]
});
