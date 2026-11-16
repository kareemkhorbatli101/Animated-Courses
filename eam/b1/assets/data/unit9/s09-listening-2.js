/* Unit 9 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s09', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 9.',
  video: 'u09v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 9 · Part 3', type: 'scene',
      title: 'Listen: A Comeback',
      instruction: '<b>Before you listen:</b> what does a customer say when a fault returns? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u9-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Mr Aboud: Hello, I brought my car in last week, but the noise has come '
        + 'back.',
          '2. Rana: I’m sorry to hear that. What did we do last week?',
          '3. Mr Aboud: You replaced the brake pads.',
          '4. Rana: And the noise has returned?',
          '5. Mr Aboud: Yes, the same noise.',
          '6. Rana: Then it’s a comeback, and it’s under our guarantee. You don’t '
        + 'have to pay. Have you driven it far since the repair?',
          '7. Mr Aboud: Only in the city.',
          '8. Rana: OK. We’ll diagnose it again today, for free.'
        ]
      },
      after: '<b>Useful phrases:</b> the noise has come back · What did we do last week? '
        + '· it’s under our guarantee<br><span class="wc">The book prints this as '
        + 'Audio Track 9.3. No studio recording exists yet, so the cast speaks '
        + 'it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 9 · Part 3', type: 'shortanswer',
        title: 'A Comeback',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. Why is Mr Aboud back? — The '
          + 'noise has come back (a comeback).</span>',
        items: [
          { q: '1. What did the garage do last week?',
            accept: ['they replaced the brake pads'],
            keys: ['they', 'replaced'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Does Mr Aboud have to pay?',
            accept: ['no, he doesn’t have to pay', 'no, he doesn’t have to pay (it’s under guarantee)'],
            keys: ['doesn', 'have'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What will the garage do today?',
            accept: ['diagnose it again, for free'],
            keys: ['diagnose', 'again'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
