/* Unit 7 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s09', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can warn a customer without frightening '
  + 'them, advise what to do next in a clear order, and refuse a request '
  + 'that would breach security while keeping the customer\'s trust.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 7 · 4D',
      visual: { spot: 'phishing' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A works in the fraud team; Student B is a customer. Ask and '
  + 'answer to open a case.<br>Card A (fraud team): you can block cards '
  + 'instantly; payments after the reported time are refunded; a new card '
  + 'takes three days.<br>Card B (customer): you last used the card at '
  + '11:00; two payments appeared at 14:30; you still have the card in '
  + 'your bag.<br>Useful language: When did you last use it? · Do you '
  + 'still have the card? · Did you share a code with anyone?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 7 · 4E',
      type: 'dragmatch',
      title: 'Close the call safely',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a fraud call safely. Use two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) confirming the action' },
      { id: 'm-b', label: 'b) saying what happens next' },
      { id: 'm-c', label: 'c) giving a clear next step' },
      { id: 'm-d', label: 'd) reassuring the customer' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Your card is blocked, and nothing can be spent.”', accept: 'm-a',
          why: '<b>“Your card is blocked, and nothing can be spent.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“A new card will arrive in three days.”', accept: 'm-a',
          why: '<b>“A new card will arrive in three days.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“If anything else appears, call this number.”', accept: 'm-a',
          why: '<b>“If anything else appears, call this number.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“You did the right thing by calling.”', accept: 'm-a',
          why: '<b>“You did the right thing by calling.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
