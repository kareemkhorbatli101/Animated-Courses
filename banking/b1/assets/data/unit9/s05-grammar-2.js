/* Unit 9 §5 — Grammar — Present Perfect and Past Simple.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s05', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 2 · Grammar — Present Perfect and Past Simple (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Perfect and Past Simple (2)', title: 'Part 2 · Grammar — Present Perfect and Past Simple (2)' },
  objective: 'By the end of Part 2 you can tell what a customer has done from what '
  + 'they did, choose present perfect or past simple correctly, correct '
  + 'the commonest mistake, and ask about a customer\'s saving history in '
  + 'both.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 9 · 2D',
      visual: { spot: 'savings-goal' },
      type: 'study',
      title: 'Talk about saving',
      html: '<p>She has saved two thousand so far. She has been putting money '
      + 'aside since March. She opened the account last year, after she '
      + 'changed jobs.</p>',
      instruction: 'Write three sentences about a customer’s saving: two in the present '
  + 'perfect and one in the past simple.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 9 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, ask and answer about saving. Use both tenses.<br>Tip: You '
  + 'will see both tenses again in the reading in Part 5 (5A and 5B). Look '
  + 'for them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“How long have you been saving? … And when did you start putting '
        + 'money aside each month?”']
    }
  ]
});
