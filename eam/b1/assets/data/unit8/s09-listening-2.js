/* Unit 8 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s09', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 8.',
  video: 'u08v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 8 · Part 3', type: 'scene',
      title: 'Listen: A Warranty Question',
      instruction: '<b>Before you listen:</b> if a car is under warranty, who pays for a real '
        + 'defect? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u8-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Mr Aboud: My car is making a noise, and it’s still under warranty.',
          '2. Rana: Then you don’t have to pay for the repair. Let me check. Yes, the '
        + 'warranty is valid for another year.',
          '3. Mr Aboud: Good. So it’s free?',
          '4. Rana: If the fault is a defect, yes. We have to use genuine parts and '
        + 'follow the carmaker’s rules.',
          '5. Mr Aboud: How long will it take?',
          '6. Rana: We’ll diagnose it today. You mustn’t drive it if the noise gets '
        + 'worse — bring it straight to us.'
        ]
      },
      after: '<b>Useful phrases:</b> you don’t have to pay · we have to use… · you '
        + 'mustn’t drive it if…<br><span class="wc">The book prints this as Audio '
        + 'Track 8.3. No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 8 · Part 3', type: 'shortanswer',
        title: 'A Warranty Question',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is Mr Aboud’s car '
          + 'doing? — Making a noise.</span>',
        items: [
          { q: '1. Does Mr Aboud have to pay, if it is a warranty defect?',
            accept: ['no, he doesn’t have to pay'],
            keys: ['doesn', 'have'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What must the garage use under warranty?',
            accept: ['genuine parts', 'genuine parts (and follow the carmaker’s rules)'],
            keys: ['genuine', 'parts'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What mustn’t Mr Aboud do?',
            accept: ['drive it if the noise gets worse'],
            keys: ['drive', 'noise'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
