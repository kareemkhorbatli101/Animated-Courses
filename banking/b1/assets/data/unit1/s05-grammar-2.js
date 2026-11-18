/* Unit 1 §5 — Grammar — Present Simple vs Present Continuous.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s05', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 2 · Grammar — Present Simple vs Present Continuous (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Simple vs Present Continuous (2)', title: 'Part 2 · Grammar — Present Simple vs Present Continuous (2)' },
  objective: 'By the end of Part 2 you can tell a routine from something happening '
  + 'now, choose present simple or present continuous for each, correct '
  + 'the commonest mistake between the two, and say both what you usually '
  + 'do and what you are working on this week.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 1 · 2D',
      visual: { spot: 'branch-plan' },
      type: 'writer',
      title: 'Write about your day',
      instruction: 'Write three sentences about your job: two routines (present simple) '
  + 'and one thing you are doing now (present continuous).',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40-60 words.'
        }],
      model: ['I usually open the branch at nine. I serve customers all morning. '
        + 'This week, I am training a new colleague.']
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 1 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, ask and answer. Use both tenses.<br>Tip: You will use these '
  + 'two tenses again in the reading in Part 5 (5A and 5B). Look for them '
  + 'there.',
      minWords: 25,
      placeholder: 'What do you do at your job?',
      stems: ['What do you do at your job?',
      'What are you working on now?',
      'Do you usually deal with customers?'],
      model: ['“I usually serve customers at the counter, but right now I am helping '
        + 'with the audit.”']
    }
  ]
});
