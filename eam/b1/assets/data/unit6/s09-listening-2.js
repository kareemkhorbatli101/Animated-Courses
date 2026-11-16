/* Unit 6 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s09', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 6.',
  video: 'u06v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 6 · Part 3', type: 'scene',
      title: 'Listen: Booking a Service',
      instruction: '<b>Before you listen:</b> what does a customer say when booking a service? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u6-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Mr Aboud: Hello, I’d like to book a service.',
          '2. Rana: Of course. Could you tell me the mileage?',
          '3. Mr Aboud: About sixty thousand kilometres.',
          '4. Rana: Then you’re due for a full service. Shall I book you in for Tuesday?',
          '5. Mr Aboud: Yes, please. Would you also check the brakes? I hear a small '
        + 'noise.',
          '6. Rana: Certainly. We’ll check them. Can you bring the car at nine?',
          '7. Mr Aboud: Yes, thank you.'
        ]
      },
      after: '<b>Useful phrases:</b> I’d like to book… · Could you tell me…? · Shall I '
        + 'book you in…?<br><span class="wc">The book prints this as Audio Track 6.3. '
        + 'No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 6 · Part 3', type: 'shortanswer',
        title: 'Booking a Service',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What does Mr Aboud want? — '
          + 'To book a service.</span>',
        items: [
          { q: '1. What is the mileage?',
            accept: ['about sixty thousand kilometres'],
            keys: ['about', 'sixty'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What day does Rana book?',
            accept: ['tuesday'],
            keys: ['tuesday'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What does Mr Aboud ask Rana to check?',
            accept: ['the brakes'],
            keys: ['brakes'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
