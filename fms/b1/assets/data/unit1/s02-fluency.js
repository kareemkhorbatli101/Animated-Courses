/* Unit 1 §2 — Warm Up - fluency.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s02', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Warm Up - fluency', part: '0', section: '2',
          lesson: 'Warm Up - fluency', title: 'Warm Up - fluency' },
  objective: 'Work through Warm Up - fluency of unit 1.',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-vocabulary-match', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-C',
      bookRef: 'Unit 1 · Warm Up · W-C',
      type: 'order',
      title: 'Fluency Practice – Greeting and Directing Visitors',
      instruction: 'The book prints this reception sequence as numbered steps. Put them back '
        + 'in order.',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [{ id: 'b1', text: 'Greet the visitor warmly' },
        { id: 'b2', text: 'Ask who they are here to see' },
        { id: 'b3', text: 'Request identification' },
        { id: 'b4', text: 'Offer to notify the relevant officer' },
        { id: 'b5', text: 'Direct or escort them' }],
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
