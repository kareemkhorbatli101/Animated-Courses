/* Unit 4 §2 — Warm Up - fluency.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s02', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Warm Up - fluency', part: '0', section: '2',
          lesson: 'Warm Up - fluency', title: 'Warm Up - fluency' },
  objective: 'Work through Warm Up - fluency of unit 4.',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-vocabulary-match', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-C',
      bookRef: 'Unit 4 · Warm Up · W-C',
      type: 'order',
      title: 'Grammar Review – Passive Voice',
      instruction: 'The book prints this reception sequence as numbered steps. Put them back '
        + 'in order.',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [{ id: 'b1', text: 'A new bilateral investment framework ____________________ (develop) in '
          + 'coordination with the German side this month' },
        { id: 'b2', text: 'The Kazakhstan–France Cultural Cooperation Agreement ____________________ '
          + '(sign) in Paris last year' },
        { id: 'b3', text: 'All visiting delegations ____________________ (require) to submit their '
          + 'participant list 48 hours in advance' },
        { id: 'b4', text: 'A joint technical committee ____________________ (establish) to oversee '
          + 'the implementation of the modernization framework' },
        { id: 'b5', text: 'The agenda ____________________ (distribute) to all participants before '
          + 'the end of the working day.' }],
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
