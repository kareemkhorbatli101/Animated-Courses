/* Unit 1 §5 — Grammar — Present Simple vs Present Continuous (2).

   Every question, item, option and model is the book's own text. */
JRN.page('u1-s05', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 2 · Grammar — Present Simple vs Present Continuous (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Simple vs Present Continuous (2)', title: 'Part 2 · Grammar — Present Simple vs Present Continuous (2)' },
  objective: 'By the end of Part 2 you can tell a routine from something happening '
  + 'now, choose present simple or present continuous for each, correct the '
  + 'commonest mistake between the two, and say both what you usually cover '
  + 'and what you are working on this week.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 1 · 2D',
      visual: { spot: 'newsroom-plan' },
      type: 'writer',
      title: 'Write about your work (40–60 words)',
      instruction: 'Write three sentences about your work or your studies: two routines '
  + '(present simple) and one thing you are doing now (present continuous).',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }],
      model: ['I usually cover transport for a regional paper. Every morning I read '
        + 'the overnight file and call the port. This week I am working on the '
        + 'floods instead, because the ring road is closed and nobody can get '
        + 'into the city from the east.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write three sentences about your work or your studies: two routines '
  + '(present simple) and one thing you are doing now (present continuous).',
        criteria: [{ t: 'Two present-simple sentences for the routines.' },
          { t: 'One present-continuous sentence for now or this week.' },
          { t: 'A time marker in each — usually, every morning, this week.' },
          { t: '40–60 words.' }]
      }
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 1 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, ask and answer. Use both tenses.<br>Tip: you will meet these '
  + 'two tenses again in the Part 5 reading (5A and 5B). There, the agency '
  + 'profile uses the simple for what is always true. It uses the continuous '
  + 'for what the agency is doing this year. Look for them.',
      minWords: 25,
      placeholder: 'What do you usually cover?',
      stems: ['What do you usually cover?',
      'What are you working on at the moment?',
      'Do you usually work to a daily deadline?'],
      model: ['“I usually cover local government, but right now I am helping with '
        + 'the election coverage.”']
    }
  ]
});
