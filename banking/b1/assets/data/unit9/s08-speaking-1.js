/* Unit 9 §8 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s08', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 4 · Speaking', part: '4', section: '8',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking', title: 'Part 4 · Speaking' },
  objective: 'By the end of Part 4 you can help a customer set a saving goal they '
  + 'can actually meet, explain interest plainly, and avoid promising a '
  + 'return you cannot guarantee.',
  cards: [
    {
      id: 'c1',
      ref: '4A',
      bookRef: 'Unit 9 · 4A',
      visual: { spot: 'savings-goal' },
      type: 'dragmatch',
      title: 'Functional language — talking about saving',
      instruction: 'Match the function to a phrase (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) “How much have you saved so far?”' },
      { id: 'm-b', label: 'b) “When will you need the money?”' },
      { id: 'm-c', label: 'c) “The value can fall as well as rise.”' },
      { id: 'm-d', label: 'd) “You have done better than you think.”' },
      { id: 'm-e', label: 'e) “Your card has been declined.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Ask about progress', accept: 'm-a',
          why: '<b>Ask about progress</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Ask about the goal', accept: 'm-a',
          why: '<b>Ask about the goal</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Explain risk', accept: 'm-a',
          why: '<b>Explain risk</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Encourage', accept: 'm-a',
          why: '<b>Encourage</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '4B',
      bookRef: 'Unit 9 · 4B',
      type: 'report',
      title: 'Help a customer plan (pairwork)',
      instruction: 'Help a customer turn a wish into a plan. Then swap roles.<br>Card A '
  + '(adviser): ask about progress · ask about the goal and the date · do '
  + 'the arithmetic aloud · suggest one action.<br>Card B (customer): you '
  + 'want 8,000 in three years; you have 1,500; you are paid on the 28th.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['A: How much have you saved so far? — B: About two thousand. — A: And '
        + 'when do you want the money? — B: In two years. — A: Then two hundred '
        + 'a month will get you there. Shall we set up a standing transfer on '
        + 'payday?']
    },
    {
      id: 'c3',
      ref: '4C',
      bookRef: 'Unit 9 · 4C',
      type: 'study',
      title: 'Saving or investing?',
      html: '<p>“Both can be right, but they answer different questions. Saving '
      + 'gives a smaller return and the amount does not go down. Investing can '
      + 'give more over many years, but the value can fall. The question is '
      + 'when you will need the money.”</p>',
      instruction: 'A customer asks whether to invest. Explain the difference honestly '
  + 'without giving financial advice.<br>Stretch: the customer asks “What '
  + 'would you do?” — answer professionally and stay within your role.',
      doneLabel: 'I have read this'
    }
  ]
});
