/* Unit 10 §16 — Global Case Study — A Long Relationship.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s16', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 8 · Global Case Study — A Long Relationship', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — A Long Relationship', title: 'Part 8 · Global Case Study — A Long Relationship' },
  objective: 'By the end of Part 8 you can read how a bank kept a corporate client '
  + 'for twenty years, take its vocabulary, and say what sustained it.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 10 · 8A',
      visual: { spot: 'letter-of-credit' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What happened in the company’s worst year?',
          accept: ['What happened in the company’s worst year?'],
          keys: ['happened',
              'company'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What had the relationship manager written down nine years earlier?',
          accept: ['What had the relationship manager written down nine years earlier?'],
          keys: ['relationship',
              'manager'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What did the committee decide?',
          accept: ['What did the committee decide?'],
          keys: ['committee',
              'decide'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What lesson did the bank draw, and what lesson did it refuse to draw?',
          accept: ['What lesson did the bank draw, and what lesson did it refuse to draw?'],
          keys: ['lesson',
              'lesson'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 10 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the group that decides on lending' },
      { id: 'm-b', label: 'b) an arrangement to borrow up to a limit' },
      { id: 'm-c', label: 'c) a written record of what was said' },
      { id: 'm-d', label: 'd) to allow more time' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'facility', accept: 'm-a',
          why: '<b>facility</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'credit committee', accept: 'm-a',
          why: '<b>credit committee</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'to extend', accept: 'm-a',
          why: '<b>to extend</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'file note', accept: 'm-a',
          why: '<b>file note</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 10 · 8C',
      type: 'shortanswer',
      title: 'Discussion',
      instruction: 'Frames: “In my bank this decision would be made by ___.” “A long '
  + 'relationship matters because ___.”',
      items: [{ q: '1. Should a long relationship count in a lending decision?',
          accept: ['Should a long relationship count in a lending decision?'],
          keys: ['should',
              'relationship'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What is in your files that a future colleague would thank you for?',
          accept: ['What is in your files that a future colleague would thank you for?'],
          keys: ['files',
              'future'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
