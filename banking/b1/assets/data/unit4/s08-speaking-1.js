/* Unit 4 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s08', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can explain a product\'s features and its '
  + 'cost plainly, compare two products aloud for a customer, and '
  + 'recommend one without overselling it.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 4 · 4A',
      visual: { spot: 'bank-card' },
      type: 'dragmatch',
      title: 'Functional language — comparing and recommending',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “Based on what you’ve told me, I’d suggest…”' },
      { id: 'm-b', label: 'b) “The Step Saver pays more than the Everyday Saver.”' },
      { id: 'm-c', label: 'c) “How soon might you need the money?”' },
      { id: 'm-d', label: 'd) “Does that sound right for you?”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Compare two products', accept: 'm-a',
          why: '<b>Compare two products</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Recommend one', accept: 'm-a',
          why: '<b>Recommend one</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Ask about the customer’s need', accept: 'm-a',
          why: '<b>Ask about the customer’s need</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Check the customer agrees', accept: 'm-a',
          why: '<b>Check the customer agrees</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 4 · 4B',
      type: 'report',
      title: 'Recommend a product (pairwork)',
      instruction: 'Listen to the customer, compare two products, and recommend one. Then '
  + 'swap roles.<br>Card A (adviser): ask one question · compare two '
  + 'products · recommend one · check the customer agrees.<br>Card B '
  + '(customer): you have 3,000 to save; you may need it next summer; you '
  + 'do not like risk.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: How soon might you need the money? — B: In about a year. — A: Then '
        + 'the Step Saver is better than the Fixed 12, because you can withdraw '
        + 'twice a year. It pays a little less, but it is more flexible.']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 4 · 4C',
      type: 'study',
      title: 'Compare and decide',
      html: '<p>“The debit card is cheaper, because there is no annual fee. The '
      + 'credit card costs more, but it is safer for buying online and in '
      + 'another country. For travelling, I think the credit card is '
      + 'better.”</p>',
      instruction: 'Your customer cannot choose between two cards. Compare them and help '
  + 'them decide.<br>Stretch: the customer says “Which would you choose?” '
  + '— answer professionally.',
      doneLabel: 'I have read this'
    }
  ]
});
