/* Unit 5 §2 — Warm Up - fluency.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s02', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Warm Up - fluency', part: '0', section: '2',
          lesson: 'Warm Up - fluency', title: 'Warm Up - fluency' },
  objective: 'By the end of this Warm Up you can say what economic diplomacy opens doors '
        + 'to, name your country\'s main investment partners and priority sectors, '
        + 'and use future forms accurately again after Unit 4.',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-vocabulary-match', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1',
      covers: ['Warm Up'],
      ref: 'W-C',
      bookRef: 'Unit 5 · Warm Up · W-C',
      type: 'order',
      title: 'Grammar Review – Future Forms',
      instruction: 'The book prints this reception sequence as numbered steps. Put them back '
        + 'in order.',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [{ id: 'b1', text: 'The ministry ____________________ (provide) a full legal framework '
          + 'document to any investor who requests one' },
        { id: 'b2', text: 'The infrastructure feasibility study ____________________ (begin) in '
          + 'January — the site assessments are already booked' },
        { id: 'b3', text: 'Dawit and the Richter delegation ____________________ (meet) on Thursday '
          + 'at ten o\'clock — the room is confirmed' },
        { id: 'b4', text: 'If investment conditions remain stable, the number of bilateral agreements '
          + '____________________ (grow) significantly next year' },
        { id: 'b5', text: 'The Investment Promotion Agency ____________________ (launch) the '
          + 'single-window process in September — the decision was made last month.' }],
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
