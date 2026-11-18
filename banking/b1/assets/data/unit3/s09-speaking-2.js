/* Unit 3 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s09', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can take a customer through a transaction at '
  + 'the counter from greeting to receipt, serve three requests in a '
  + 'sensible order while saying what you are doing, and close the '
  + 'transaction properly.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 3 · 4D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A is a teller; Student B is a customer. Ask and answer to '
  + 'complete the transaction.<br>Card A (teller): you can pay out up to '
  + '500 in cash; a statement takes two minutes; a bill payment needs the '
  + 'paper bill.<br>Card B (customer): you want 600 in cash, a statement '
  + 'for three months, and to pay a bill of 85.<br>Useful language: How '
  + 'much would you like? · How many notes? · Do you have the bill with '
  + 'you?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 3 · 4E',
      type: 'dragmatch',
      title: 'Closing the transaction',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a counter transaction politely. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) giving the customer the record' },
      { id: 'm-b', label: 'b) offering one more service' },
      { id: 'm-c', label: 'c) asking the customer to check' },
      { id: 'm-d', label: 'd) checking there is nothing more' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Here is your receipt.”', accept: 'm-a',
          why: '<b>“Here is your receipt.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Would you like a statement as well?”', accept: 'm-a',
          why: '<b>“Would you like a statement as well?”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Please check the amount before you leave.”', accept: 'm-a',
          why: '<b>“Please check the amount before you leave.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Is there anything else today?”', accept: 'm-a',
          why: '<b>“Is there anything else today?”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
