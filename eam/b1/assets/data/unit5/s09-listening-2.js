/* Unit 5 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s09', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 5.',
  video: 'u05v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 5 · Part 3', type: 'scene',
      title: 'Listen: Where Is the Car Now?',
      instruction: '<b>Before you listen:</b> what does a customer ask when the car is not '
        + 'ready? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u5-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Mr Aboud: Hello, is my car ready?',
          '2. Rana: Not yet, but let me check. It was booked in this morning, and now '
        + 'it is in the workshop.',
          '3. Mr Aboud: How long will it take?',
          '4. Rana: The oil is changed, and the brakes are checked now. After that, '
        + 'it is road-tested. It will be ready at three o’clock.',
          '5. Mr Aboud: Good.',
          '6. Rana: We’ll call you when it is handed over.'
        ]
      },
      after: '<b>Useful phrases:</b> It was booked in… · now it is… · It will be ready '
        + 'at…<br><span class="wc">The book prints this as Audio Track 5.3. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 5 · Part 3', type: 'shortanswer',
        title: 'Where Is the Car Now?',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What does Mr Aboud want to '
          + 'know? — If his car is ready.</span>',
        items: [
          { q: '1. Where is the car now?',
            accept: ['in the workshop'],
            keys: ['workshop'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What is checked now?',
            accept: ['the brakes'],
            keys: ['brakes'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. When will the car be ready?',
            accept: ['at three o’clock'],
            keys: ['three', 'clock'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
