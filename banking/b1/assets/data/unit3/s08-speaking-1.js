/* Unit 3 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s08', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can take a customer through a transaction at '
  + 'the counter from greeting to receipt, serve three requests in a '
  + 'sensible order while saying what you are doing, and close the '
  + 'transaction properly.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 3 · 4A',
      visual: { spot: 'bank-counter' },
      type: 'dragmatch',
      title: 'Functional language — at the counter',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “How much would you like to withdraw?”' },
      { id: 'm-b', label: 'b) “Good morning. How can I help you?”' },
      { id: 'm-c', label: 'c) “Could I see your ID, please?”' },
      { id: 'm-d', label: 'd) “Here is your receipt. Anything else?”' },
      { id: 'm-e', label: 'e) “Your card has been blocked.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Greet the customer', accept: 'm-a',
          why: '<b>Greet the customer</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Ask about an amount', accept: 'm-a',
          why: '<b>Ask about an amount</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Ask for a document', accept: 'm-a',
          why: '<b>Ask for a document</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Confirm and close', accept: 'm-a',
          why: '<b>Confirm and close</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 3 · 4B',
      type: 'report',
      title: 'Teller role-play (pairwork)',
      instruction: 'Act a counter transaction, then swap roles.<br>Card A (teller): greet '
  + '· ask the amount · ask for ID · give a receipt.<br>Card B (customer): '
  + 'you want to deposit cash; you have your ID; you also want your '
  + 'balance.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: Good morning. How can I help you? — B: I’d like to deposit four '
        + 'hundred. — A: Certainly. Could you complete this slip? How many notes '
        + 'are there? — B: Eight. — A: Thank you. Here is your receipt.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 3 · 4C',
      type: 'study',
      title: 'Three-step banking task',
      html: '<p>“Let’s take them one at a time. First the withdrawal, then the '
      + 'bill, and I’ll print the statement last.”</p>',
      instruction: 'Your customer has three things to do. Serve them in a clear order and '
  + 'say what you are doing.<br>Stretch: the customer adds a fourth '
  + 'request at the end — handle it politely.',
      doneLabel: 'I have read this'
    }
  ]
});
