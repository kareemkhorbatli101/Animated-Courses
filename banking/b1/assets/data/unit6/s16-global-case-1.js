/* Unit 6 §16 — Global Case Study — How Money Crosses Borders.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s16', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 8 · Global Case Study — How Money Crosses Borders', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — How Money Crosses Borders', title: 'Part 8 · Global Case Study — How Money Crosses Borders' },
  objective: 'By the end of Part 8 you can read how money actually crosses a '
  + 'border, take the vocabulary of correspondent banking from it, and '
  + 'explain the route to a customer.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 6 · 8A',
      visual: { spot: 'rate-board' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why is a flat fee a bigger problem on a small transfer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What target did the international body set?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why could the bank not simply cut the fee?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What did the bank change instead, and what was the result?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 6 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the difference between the buy rate and the sell rate' },
      { id: 'm-b', label: 'b) money sent home by someone working abroad' },
      { id: 'm-c', label: 'c) the same payment, set up once and repeated' },
      { id: 'm-d', label: 'd) money given by one country to another' },
      { id: 'm-e', label: 'e) a charge for a lost card (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'remittance', accept: 'm-a',
          why: '<b>remittance</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'spread', accept: 'm-a',
          why: '<b>spread</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'foreign aid', accept: 'm-a',
          why: '<b>foreign aid</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'standing transfer', accept: 'm-a',
          why: '<b>standing transfer</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 6 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “In my country the cost of sending money is ___.” “This idea '
  + 'would help because ___.”',
      questions: [{
            q: 'Do your customers send the same amount to the same person each month?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What would make a standing transfer hard to sell?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
