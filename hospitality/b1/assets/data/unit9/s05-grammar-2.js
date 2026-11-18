/* Unit 9 §5 — Grammar — The First Conditional and 'should' (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s05', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Grammar — The First Conditional and \'should\' (2)', part: '2',
          section: '5', lesson: 'Grammar — The First Conditional and \'should\' (2)', title: 'Grammar — The First Conditional and \'should\' (2)' },
  objective: 'By the end of Part 2 you can say what will happen if something is '
  + 'done with the first conditional, and advise with \'should\'.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 9 · P2 D',
      type: 'dragmatch',
      title: 'Match the problem (1–3) with a first-conditional solution (a',
      instruction: 'Match the problem (1–3) with a first-conditional solution (a–c).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. If you give me the item\'s name, we\'ll search for it.' },
      { id: 'm-b', label: 'b. If you wait a moment, I\'ll send an engineer.' },
      { id: 'm-c', label: 'c. If you show me the bill, I\'ll correct the mistake.' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'The AC is broken.', accept: 'm-b',
          why: '<b>The AC is broken.</b> &mdash; If you wait a moment, I\'ll send an '
              + 'engineer.' },
      { id: 't2', num: 2, label: 'The bill is wrong.', accept: 'm-c',
          why: '<b>The bill is wrong.</b> &mdash; If you show me the bill, I\'ll '
              + 'correct the mistake.' },
      { id: 't3', num: 3, label: 'The guest lost a watch.', accept: 'm-a',
          why: '<b>The guest lost a watch.</b> &mdash; If you give me the item\'s '
              + 'name, we\'ll search for it.' }]
    }
  ]
});
