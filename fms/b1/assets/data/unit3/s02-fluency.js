/* Unit 3 §2 — Warm Up - fluency.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s02', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Warm Up - fluency', part: '0', section: '2',
          lesson: 'Warm Up - fluency', title: 'Warm Up - fluency' },
  objective: 'By the end of this Warm Up you can tell your country\'s story in English '
        + 'in a few clear sentences, anticipate the questions foreign visitors ask '
        + 'most often, and use modal verbs accurately again after Unit 2.',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-vocabulary-match', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-C',
      bookRef: 'Unit 3 · Warm Up · W-C',
      type: 'order',
      title: 'Grammar Review – Modal Verbs',
      instruction: 'The book prints this reception sequence as numbered steps. Put them back '
        + 'in order.',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [{ id: 'b1', text: 'All participants ____________________ (must) present a valid government ID '
          + 'before entering the ministry building' },
        { id: 'b2', text: 'The liaison officer ____________________ (should) send the updated agenda '
          + 'to both delegations 48 hours before the session' },
        { id: 'b3', text: 'The visiting delegation ____________________ (may) use the executive '
          + 'lounge for a pre-meeting briefing' },
        { id: 'b4', text: 'If a participant needs interpretation, they ____________________ (can) '
          + 'contact the Language Services Unit directly' },
        { id: 'b5', text: 'We ____________________ (need to) finalize the seating arrangement before '
          + 'the German delegation arrives tomorrow.' }],
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
