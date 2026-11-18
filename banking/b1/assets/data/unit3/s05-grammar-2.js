/* Unit 3 §5 — Grammar — Quantifiers (much, many, a few, a little).

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s05', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 2 · Grammar — Quantifiers (much, many, a few, a little) (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Quantifiers (much, many, a few, a little) (2)', title: 'Part 2 · Grammar — Quantifiers (much, many, a few, a little) (2)' },
  objective: 'By the end of Part 2 you can tell a countable noun from an '
  + 'uncountable one at the counter, choose much, many, a few or a little '
  + 'for each, correct the commonest mistake, and ask a customer three '
  + 'clear questions about amounts.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 3 · 2D',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'Ask about amounts',
      html: '<p>How much would you like to withdraw? How many notes would you '
      + 'like? Would you like a few coins as well?</p>',
      instruction: 'Write three questions a teller asks a customer about amounts. Use '
  + 'much, many and a few.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 3 · 2E',
      type: 'report',
      title: 'Freer practice (speaking at the counter)',
      instruction: 'In pairs, act a short counter conversation. The teller asks at least '
  + 'three questions about amounts.<br>Tip: You will see these quantifiers '
  + 'again in the reading in Part 5 (5A and 5B). Look for them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“Good morning. How much would you like to deposit? … And how many of '
        + 'these are large notes?”']
    }
  ]
});
