/* Unit 10 §5 — Grammar — Reported Speech.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s05', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 2 · Grammar — Reported Speech (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Reported Speech (2)', title: 'Part 2 · Grammar — Reported Speech (2)' },
  objective: 'By the end of Part 2 you can report what a customer said without '
  + 'changing its meaning, shift the tense and the pronouns correctly, '
  + 'correct the commonest mistake, and write up what was agreed in a '
  + 'meeting.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 10 · 2D',
      visual: { spot: 'letter-of-credit' },
      type: 'study',
      title: 'Report a customer',
      html: '<p>She said that three invoices were overdue. She told me that her '
      + 'cash flow was weak in January. She asked whether we could decide by '
      + 'Friday.</p>',
      instruction: 'Write three reported sentences from a meeting you have had, or invent one.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 10 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, one of you is a customer and one takes notes. Then report '
  + 'the meeting to a third person.<br>Tip: You will see reported speech '
  + 'again in the reading in Part 5 (5A and 5B). Look for it there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“She said she needed a facility of fifty thousand, and she told me '
        + 'that three invoices were overdue.”']
    }
  ]
});
