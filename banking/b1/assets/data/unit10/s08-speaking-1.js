/* Unit 10 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s08', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can open and close a meeting with a business '
  + 'customer, summarise what was agreed back to them, and confirm the '
  + 'next step and its date.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 10 · 4A',
      visual: { spot: 'letter-of-credit' },
      type: 'dragmatch',
      title: 'Functional language — business talk and reporting',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “May I ask what the company does?”' },
      { id: 'm-b', label: 'b) “Could you confirm the amount for me?”' },
      { id: 'm-c', label: 'c) “She told me that three invoices were overdue.”' },
      { id: 'm-d', label: 'd) “I will call you tomorrow with an answer.”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Open a business meeting', accept: 'm-a',
          why: '<b>Open a business meeting</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Check a figure', accept: 'm-a',
          why: '<b>Check a figure</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Report what was said', accept: 'm-a',
          why: '<b>Report what was said</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Agree a next step', accept: 'm-a',
          why: '<b>Agree a next step</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 10 · 4B',
      type: 'report',
      title: 'Meet a business customer (pairwork)',
      instruction: 'Hold a short meeting with a business customer, then swap '
  + 'roles.<br>Card A (relationship manager): ask what the business does · '
  + 'ask what is needed · check two figures · agree a next step.<br>Card B '
  + '(business customer): you import coffee; three invoices are overdue; '
  + 'payroll runs on the 25th; you need an answer by Friday.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: May I ask what the company does? — B: We import coffee. — A: And '
        + 'what do you need from us? — B: A facility of fifty thousand. — A: '
        + 'Could you confirm when the payroll runs? I will call you tomorrow.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 10 · 4C',
      type: 'study',
      title: 'Report the meeting',
      html: '<p>“She said she needed a facility of fifty thousand. She told me '
      + 'that three invoices were overdue by sixty days. She asked whether we '
      + 'could decide by Friday.”</p>',
      instruction: 'Report the meeting from 4B to a colleague. Use at least three '
  + 'reported sentences.<br>Stretch: your colleague asks a question you '
  + 'did not ask in the meeting — say so honestly.',
      doneLabel: 'I have read this'
    }
  ]
});
