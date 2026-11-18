/* Unit 10 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s09', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can open and close a meeting with a business '
  + 'customer, summarise what was agreed back to them, and confirm the '
  + 'next step and its date.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 10 · 4D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A is a relationship manager; Student B is a colleague in '
  + 'credit. Ask and answer to complete the file.<br>Card A (relationship '
  + 'manager): you met the customer; facility 50,000; three invoices '
  + 'overdue 60+ days; payroll on the 25th; answer wanted by '
  + 'Friday.<br>Card B (credit): you need the amount, the reason, the date '
  + 'of the payroll and the deadline, and you must know whether the '
  + 'customer has borrowed before.<br>Useful language: What did she say '
  + 'she needed? · Did she tell you why? · Did she ask for a date?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 10 · 4E',
      type: 'dragmatch',
      title: 'Close the meeting',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a business meeting professionally. Use two phrases '
  + 'above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) checking you have understood' },
      { id: 'm-b', label: 'b) agreeing the next step' },
      { id: 'm-c', label: 'c) being honest about the decision' },
      { id: 'm-d', label: 'd) asking for what is missing' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Let me read my notes back to you.”', accept: 'm-a',
          why: '<b>“Let me read my notes back to you.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“I will call you tomorrow with an answer.”', accept: 'm-a',
          why: '<b>“I will call you tomorrow with an answer.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“I cannot promise it, but I will put the case.”', accept: 'm-a',
          why: '<b>“I cannot promise it, but I will put the case.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Could you send the last three statements?”', accept: 'm-a',
          why: '<b>“Could you send the last three statements?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
