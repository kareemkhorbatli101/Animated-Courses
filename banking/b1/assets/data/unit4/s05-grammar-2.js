/* Unit 4 §5 — Grammar — Comparatives and Superlatives.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s05', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 2 · Grammar — Comparatives and Superlatives (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Comparatives and Superlatives (2)', title: 'Part 2 · Grammar — Comparatives and Superlatives (2)' },
  objective: 'By the end of Part 2 you can compare two products with a comparative '
  + 'and name the best of several with a superlative, form both correctly '
  + 'from short and long adjectives, and correct the commonest mistake.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 4 · 2D',
      visual: { spot: 'bank-card' },
      type: 'study',
      title: 'Compare two products',
      html: '<p>The Step Saver pays a higher rate than the Everyday Saver. '
      + 'However, the Everyday Saver is more flexible, because you can '
      + 'withdraw any day. For long-term money, the Fixed 12 is the best of '
      + 'the three.</p>',
      instruction: 'Write three sentences comparing two accounts your bank offers. Use '
  + 'one superlative.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 4 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, compare three products and recommend one. Use at least two '
  + 'comparatives and one superlative.<br>Tip: You will see these forms '
  + 'again in the reading in Part 5 (5A and 5B). Look for them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“The Fixed 12 pays the highest rate, but the Everyday Saver is more '
        + 'flexible. For your situation, I think the Step Saver is better.”']
    }
  ]
});
