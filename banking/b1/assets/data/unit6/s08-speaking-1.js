/* Unit 6 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s08', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can quote a rate and a fee clearly, explain '
  + 'why the amount received differs from the amount sent, and take a '
  + 'transfer request from start to confirmation.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 6 · 4A',
      visual: { spot: 'rate-board' },
      type: 'dragmatch',
      title: 'Functional language — polite questions and answers',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “Could you tell me the beneficiary’s full name?”' },
      { id: 'm-b', label: 'b) “We are selling at 4.42 today.”' },
      { id: 'm-c', label: 'c) “The difference is called the spread.”' },
      { id: 'm-d', label: 'd) “It usually arrives within one working day.”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Ask politely for information', accept: 'm-a',
          why: '<b>Ask politely for information</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Give a price', accept: 'm-a',
          why: '<b>Give a price</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Explain a charge', accept: 'm-a',
          why: '<b>Explain a charge</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Give a time', accept: 'm-a',
          why: '<b>Give a time</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 6 · 4B',
      type: 'report',
      title: 'At the exchange desk (pairwork)',
      instruction: 'Act a short exchange-desk conversation, then swap roles.<br>Card A '
  + '(staff): ask the amount politely · give the rate · explain the spread '
  + '· ask for ID.<br>Card B (customer): you want to change 200; you ask '
  + 'why there are two rates; you have your passport.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: Could you tell me how much you would like to change? — B: Two '
        + 'hundred. What is the rate? — A: We are selling at 4.42. May I ask '
        + 'whether you have your ID with you?']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 6 · 4C',
      type: 'study',
      title: 'Explain a transfer',
      html: '<p>“Your money leaves us today, it is passed through a partner bank '
      + 'overnight, and it is credited to your daughter’s account tomorrow '
      + 'morning. Three banks are involved, and each one checks the '
      + 'payment.”</p>',
      instruction: 'A customer does not understand why a transfer takes a day. Explain '
  + 'the route simply.<br>Stretch: the customer asks why a payment within '
  + 'the country is instant but this is not — answer clearly.',
      doneLabel: 'I have read this'
    }
  ]
});
