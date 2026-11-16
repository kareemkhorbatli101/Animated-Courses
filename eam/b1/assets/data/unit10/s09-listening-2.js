/* Unit 10 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s09', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 10.',
  video: 'u10v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 10 · Part 3', type: 'scene',
      title: 'Listen: A Manufacturer Update',
      instruction: '<b>Before you listen:</b> what kind of news does a carmaker send to a '
        + 'dealer? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u10-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Lina: Maher, there’s a new bulletin from the manufacturer.',
          '2. Maher: What does it say?',
          '3. Lina: It says there’s a software update for the new model. The bulletin '
        + 'told us to update the software at the next service.',
          '4. Maher: Is it urgent?',
          '5. Lina: It said it wasn’t urgent, but it improves the engine. It also '
        + 'asked us to record every update.',
          '6. Maher: Good. Tell the team, and start it from Monday. Have you done the '
        + 'training for the new model?',
          '7. Lina: Yes, I finished it last week.'
        ]
      },
      after: '<b>Useful phrases:</b> The bulletin told us to… · It said it wasn’t urgent '
        + '· It asked us to…<br><span class="wc">The book prints this as Audio Track '
        + '10.3. No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 10 · Part 3', type: 'shortanswer',
        title: 'A Manufacturer Update',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is the bulletin about? '
          + '— A software update for the new model.</span>',
        items: [
          { q: '1. What did the bulletin tell them to do?',
            accept: ['to update the software at the next service'],
            keys: ['update', 'software'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Is the update urgent?',
            accept: ['no, it isn’t urgent', 'no, it isn’t urgent (but it improves the engine)'],
            keys: ['urgent'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. Has Lina done the training?',
            accept: ['yes, she finished it last week'],
            keys: ['finished', 'last'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
