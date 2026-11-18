/* Unit 2 §16 — Global Case Study — A Service Culture.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s16', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 8 · Global Case Study — A Service Culture', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — A Service Culture', title: 'Part 8 · Global Case Study — A Service Culture' },
  objective: 'By the end of Part 8 you can read how a bank builds a service '
  + 'culture, take its vocabulary, and give your own view on what makes '
  + 'service consistent.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 2 · 8A',
      visual: { spot: 'queue' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why does using a customer’s name help?',
          accept: ['Why does using a customer’s name help?'],
          keys: ['using',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does ‘first-contact resolution’ mean?',
          accept: ['What does ‘first-contact resolution’ mean?'],
          keys: ['first',
              'contact'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What happened to complaints after one year?',
          accept: ['What happened to complaints after one year?'],
          keys: ['happened',
              'complaints'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. How did the bank find out customers’ opinions?',
          accept: ['How did the bank find out customers’ opinions?'],
          keys: ['customers',
              'opinions'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. What lesson did the bank learn?',
          accept: ['What lesson did the bank learn?'],
          keys: ['lesson',
              'learn'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 2 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) when a customer says something is wrong' },
      { id: 'm-b', label: 'b) solving a problem in one visit' },
      { id: 'm-c', label: 'c) customers’ opinions about the service' },
      { id: 'm-d', label: 'd) when customers stay with the same bank' },
      { id: 'm-e', label: 'e) a fee for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'loyalty', accept: 'm-a',
          why: '<b>loyalty</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'complaint', accept: 'm-a',
          why: '<b>complaint</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'feedback', accept: 'm-a',
          why: '<b>feedback</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'first-contact resolution', accept: 'm-a',
          why: '<b>first-contact resolution</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 2 · 8C',
      type: 'shortanswer',
      title: 'Discussion',
      instruction: 'Frames: “This is similar to a bank in my country because ___.” “This '
  + 'is different because ___.”',
      items: [{ q: '1. Would greeting customers by name work in your bank? Why / why not?',
          accept: ['Would greeting customers by name work in your bank? Why / why not?'],
          keys: ['would',
              'greeting'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Which of the three rules is easiest to start today?',
          accept: ['Which of the three rules is easiest to start today?'],
          keys: ['which',
              'three'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
