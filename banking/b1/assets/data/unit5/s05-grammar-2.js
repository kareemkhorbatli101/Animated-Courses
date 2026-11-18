/* Unit 5 §5 — Grammar — Active and Passive Voice.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s05', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 2 · Grammar — Active and Passive Voice (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Active and Passive Voice (2)', title: 'Part 2 · Grammar — Active and Passive Voice (2)' },
  objective: 'By the end of Part 2 you can tell active from passive, form the '
  + 'passive to describe what the system does without naming who does it, '
  + 'correct the commonest mistake, and explain a process to a customer in '
  + 'it.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 5 · 2D',
      visual: { spot: 'atm' },
      type: 'discuss',
      title: 'Active to passive',
      instruction: 'Rewrite these three notices in the passive, so they sound official.',
      questions: [{
            q: 'We check all transfers over 1,000.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We sent your new card yesterday.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We do not accept payments after 23:00.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 5 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, explain to a customer what happens when they tap “Send”. '
  + 'Use at least three passive verbs.<br>Tip: You will see the passive '
  + 'again in the reading in Part 5 (5A and 5B). Look for it there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“Your details are checked, a code is sent to your phone, and the '
        + 'payment is processed in a few seconds. You will be notified when it '
        + 'arrives.”']
    }
  ]
});
