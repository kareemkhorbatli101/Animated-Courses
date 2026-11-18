/* Unit 10 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s07', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a business customer asks '
  + 'for, follow three meetings, and identify what each customer asked and '
  + 'what the bank undertook to do.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 10 · 3D',
      visual: { spot: 'letter-of-credit' },
      type: 'study',
      title: 'A business loan inquiry (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> We have an order from a buyer '
      + 'abroad, the largest we have ever had.</p><p><b>Priya:</b> When do you '
      + 'have to pay your supplier?</p><p><b>Customer:</b> That is the '
      + 'problem. He wants paying before shipping, and the buyer will not pay '
      + 'until the goods arrive. Eleven weeks in between.</p><p><b>Priya:</b> '
      + 'Common in trade. One answer is a facility: you borrow for eleven '
      + 'weeks and repay when the buyer pays. The other is a letter of credit, '
      + 'where our bank pays the seller against the shipping '
      + 'documents.</p><p><b>Customer:</b> Which is '
      + 'better?</p><p><b>Priya:</b> A facility helps your cash flow. A letter '
      + 'of credit reassures a supplier who does not know '
      + 'you.</p><p><b>Customer:</b> They have already asked for '
      + 'one.</p></div>',
      playable: ['We have an order from a buyer abroad, the largest we have ever had.',
      'When do you have to pay your supplier?',
      'That is the problem. He wants paying before shipping, and the buyer '
        + 'will not pay until the goods arrive. Eleven weeks in between.',
      'Common in trade. One answer is a facility: you borrow for eleven '
        + 'weeks and repay when the buyer pays. The other is a letter of credit, '
        + 'where our bank pays the seller against the shipping documents.',
      'Which is better?',
      'A facility helps your cash flow. A letter of credit reassures a '
        + 'supplier who does not know you.',
      'They have already asked for one.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 10 · 3D',
      type: 'quizset',
      title: 'A business loan inquiry (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The buyer pays before the goods are shipped.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'A letter of credit reassures a supplier who does not know the buyer.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The supplier has already asked for a letter of credit.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 10 · 3E',
      type: 'dragmatch',
      title: 'Match the report',
      instruction: 'Match each direct sentence to its correct report (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) She said she needed a facility.' },
      { id: 'm-b', label: 'b) He said they had paid.' },
      { id: 'm-c', label: 'c) She asked whether we could decide by Friday.' },
      { id: 'm-d', label: 'd) She told me the payroll ran on the 25th.' },
      { id: 'm-e', label: 'e) She said she will call us. (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“I need a facility.”', accept: 'm-a',
          why: '<b>“I need a facility.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“We have paid.”', accept: 'm-a',
          why: '<b>“We have paid.”</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Can you decide by Friday?”', accept: 'm-a',
          why: '<b>“Can you decide by Friday?”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“The payroll runs on the 25th.”', accept: 'm-a',
          why: '<b>“The payroll runs on the 25th.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
