/* Unit 1 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s09', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can introduce yourself with your name, your '
  + 'role, your routine duties and your current task, take either part in '
  + 'a professional exchange, and ask the questions that close an '
  + 'information gap.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 1 · 4D',
      visual: { spot: 'branch-plan' },
      type: 'report',
      title: 'The networking event (mingle)',
      instruction: 'Stand up and introduce yourself to three classmates. Remember one '
  + 'thing each person is doing now.<br>Stretch: after each talk, report '
  + 'back — “Diego is a loan officer. He is training this week.”',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 1 · 4E',
      type: 'dragmatch',
      title: 'Small talk at work (functional phrases)',
      instruction: 'Match the small-talk phrase to the right moment (one is extra).<br>In '
  + 'pairs, practise a 30-second small-talk chat with a new colleague. Use '
  + 'two phrases above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) meeting a colleague for the first time' },
      { id: 'm-b', label: 'b) asking a new colleague how they feel' },
      { id: 'm-c', label: 'c) offering help' },
      { id: 'm-d', label: 'd) ending the week politely' },
      { id: 'm-e', label: 'e) apologising for a mistake (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“How’s your first week going?”', accept: 'm-b',
          why: '<b>“How’s your first week going?”</b> &mdash; asking a new colleague '
              + 'how they feel' },
      { id: 't2', num: 2, label: '“Can I help you with anything?”', accept: 'm-c',
          why: '<b>“Can I help you with anything?”</b> &mdash; offering help' },
      { id: 't3', num: 3, label: '“Nice to meet you.”', accept: 'm-a',
          why: '<b>“Nice to meet you.”</b> &mdash; meeting a colleague for the first time' },
      { id: 't4', num: 4, label: '“Have a good weekend.”', accept: 'm-d',
          why: '<b>“Have a good weekend.”</b> &mdash; ending the week politely' }]
    }
  ]
});
