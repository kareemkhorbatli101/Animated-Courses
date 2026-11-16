/* Unit 7 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s09', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 7.',
  video: 'u07v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 7 · Part 3', type: 'scene',
      title: 'Listen: The Estimate',
      instruction: '<b>Before you listen:</b> what does a customer want to know before the '
        + 'work starts? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u7-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Rana: Mr Aboud, here is the estimate for the work.',
          '2. Mr Aboud: How much is it?',
          '3. Rana: The service and the brake pads are 300. If you approve, we’ll '
        + 'order the pads today, and they’re going to arrive tomorrow.',
          '4. Mr Aboud: And when will the car be ready?',
          '5. Rana: If the parts come tomorrow, the car will be ready by Thursday. '
        + 'We’ll take a small deposit now, and you’ll pay the rest at handover.',
          '6. Mr Aboud: That’s fine. Here’s the deposit.'
        ]
      },
      after: '<b>Useful phrases:</b> If you approve, we’ll… · they’re going to arrive… · '
        + 'you’ll pay the rest at handover<br><span class="wc">The book prints this '
        + 'as Audio Track 7.3. No studio recording exists yet, so the cast speaks '
        + 'it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 7 · Part 3', type: 'shortanswer',
        title: 'The Estimate',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What does Rana give Mr '
          + 'Aboud? — The estimate.</span>',
        items: [
          { q: '1. How much is the work?',
            accept: ['300', '300 (the service and brake pads)'],
            keys: [], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. When are the pads going to arrive?',
            accept: ['tomorrow'],
            keys: ['tomorrow'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What does Mr Aboud pay now?',
            accept: ['a small deposit'],
            keys: ['small', 'deposit'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
