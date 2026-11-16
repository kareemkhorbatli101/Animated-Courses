/* Unit 2 §2 — Warm Up - fluency.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s02', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Warm Up - fluency', part: '0', section: '2',
          lesson: 'Warm Up - fluency', title: 'Warm Up - fluency' },
  objective: 'Work through Warm Up - fluency of unit 2.',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-vocabulary-match', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-C',
      bookRef: 'Unit 2 · Warm Up · W-C',
      type: 'order',
      title: 'Grammar Review – Present Simple and Present Continuous',
      instruction: 'The book prints this reception sequence as numbered steps. Put them back '
        + 'in order.',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [{ id: 'b1', text: 'Youssef ____________________ (work) in the Economic Affairs Office at the '
          + 'Ministry of Foreign Affairs' },
        { id: 'b2', text: 'Salma ____________________ (coordinate) the German delegation\'s visit '
          + 'this week' },
        { id: 'b3', text: 'The ministry ____________________ (receive) foreign delegations every '
          + 'working day' },
        { id: 'b4', text: 'The protocol team ____________________ (prepare) the conference room for '
          + 'tomorrow\'s bilateral session right now' },
        { id: 'b5', text: 'Ministry staff ____________________ (represent) Morocco in all official '
          + 'interactions with foreign visitors.' }],
      positions: ['b1',
        'b2',
        'b3',
        'b4',
        'b5'],
      whyTitle: 'Why this order',
      after: 'This is the order the book numbers them in. The greeting comes first and '
        + 'the escort last; the middle is a professional sequence, not an arbitrary '
        + 'one.'
    }
  ]
});
