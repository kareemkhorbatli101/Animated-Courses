/* Unit 3 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s07', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict how a teller opens, follow a '
  + 'withdrawal, a deposit and a longer multi-step visit, and name the '
  + 'type of transaction from what the customer says.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 3 · 3D',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'A customer with several transactions (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> Good afternoon. I have a few '
      + 'things to do today, I’m afraid.</p><p><b>Grace:</b> That’s no '
      + 'problem. Let’s take them one at a time.</p><p><b>Customer:</b> First, '
      + 'I’d like to withdraw two hundred. Then I want to pay my electricity '
      + 'bill. And I need a statement for the last three months, because my '
      + 'landlord has asked for one.</p><p><b>Grace:</b> Certainly. How much '
      + 'is the bill?</p><p><b>Customer:</b> Eighty-five. I have the paper '
      + 'here.</p><p><b>Grace:</b> Thank you. I’ll do the withdrawal first, '
      + 'then the bill, and I’ll print the statement last. It takes a little '
      + 'time, but not much.</p><p><b>Customer:</b> That’s fine. I’m not in a '
      + 'hurry today.</p></div>',
      playable: ['Good afternoon. I have a few things to do today, I’m afraid.',
      'That’s no problem. Let’s take them one at a time.',
      'First, I’d like to withdraw two hundred. Then I want to pay my '
        + 'electricity bill. And I need a statement for the last three months, '
        + 'because my landlord has asked for one.',
      'Certainly. How much is the bill?',
      'Eighty-five. I have the paper here.',
      'Thank you. I’ll do the withdrawal first, then the bill, and I’ll '
        + 'print the statement last. It takes a little time, but not much.',
      'That’s fine. I’m not in a hurry today.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 3 · 3D',
      type: 'quizset',
      title: 'A customer with several transactions (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The customer wants a statement for six months.',
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
          q: 'The teller does the three transactions in order.',
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
          q: 'The customer is in a hurry.',
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
      bookRef: 'Unit 3 · 3E',
      type: 'dragmatch',
      title: 'Identify the transaction type',
      instruction: 'Match each sentence from the listenings to the type of transaction '
  + '(one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a cash deposit' },
      { id: 'm-b', label: 'b) a cash withdrawal' },
      { id: 'm-c', label: 'c) a bill payment' },
      { id: 'm-d', label: 'd) a request for information' },
      { id: 'm-e', label: 'e) a currency exchange (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“I’d like to withdraw three hundred.”', accept: 'm-a',
          why: '<b>“I’d like to withdraw three hundred.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“I’d like to deposit this cash.”', accept: 'm-a',
          why: '<b>“I’d like to deposit this cash.”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“I want to pay my electricity bill.”', accept: 'm-a',
          why: '<b>“I want to pay my electricity bill.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“I need a statement for three months.”', accept: 'm-a',
          why: '<b>“I need a statement for three months.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
