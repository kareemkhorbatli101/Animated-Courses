/* Unit 8 §16 — Global Case Study — Know Your Customer.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s16', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 8 · Global Case Study — Know Your Customer', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — Know Your Customer', title: 'Part 8 · Global Case Study — Know Your Customer' },
  objective: 'By the end of Part 8 you can read how know-your-customer works in '
  + 'practice, take its vocabulary, and explain to a customer why it '
  + 'applies to them.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 8 · 8A',
      visual: { spot: 'kyc-check' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why did one customer have to prove who he was twice?',
          accept: ['Why did one customer have to prove who he was twice?'],
          keys: ['customer',
              'prove'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why could the bank not build a single identity check?',
          accept: ['Why could the bank not build a single identity check?'],
          keys: ['could',
              'build'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What did the bank build instead?',
          accept: ['What did the bank build instead?'],
          keys: ['build',
              'instead'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What is the lesson of the case?',
          accept: ['What is the lesson of the case?'],
          keys: ['lesson'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 8 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the set of rules that applies in one place' },
      { id: 'm-b', label: 'b) the body that supervises banks in a country' },
      { id: 'm-c', label: 'c) asking for the same proof twice' },
      { id: 'm-d', label: 'd) the bank’s record of who a customer is' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'regulator', accept: 'm-a',
          why: '<b>regulator</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'rule book', accept: 'm-a',
          why: '<b>rule book</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'identity file', accept: 'm-a',
          why: '<b>identity file</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'duplicate check', accept: 'm-a',
          why: '<b>duplicate check</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 8 · 8C',
      type: 'shortanswer',
      title: 'Discussion',
      instruction: 'Frames: “In my country the regulator requires ___.” “This would be '
  + 'easier if ___.”',
      items: [{ q: '1. Do your customers ever bank in more than one country?',
          accept: ['Do your customers ever bank in more than one country?'],
          keys: ['customers',
              'country'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What document is accepted everywhere, in your experience?',
          accept: ['What document is accepted everywhere, in your experience?'],
          keys: ['document',
              'accepted'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
