/* Unit 3 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s09', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 3.',
  video: 'u03v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 3 · Part 3', type: 'scene',
      title: 'Listen: Where Are the Tools?',
      instruction: '<b>Before you listen:</b> where does a workshop keep its tools? Press '
        + 'play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u3-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Tarek: Ustaz, where is the torque wrench?',
          '2. Nabil: It’s on the wall, next to the socket set.',
          '3. Tarek: And the trolley jack?',
          '4. Nabil: It’s in the corner. But first, put on your gloves.',
          '5. Tarek: Yes. And the axle stands?',
          '6. Nabil: Under the bench. Always use two. Remember: chock the wheels '
        + 'first, then raise the car.'
        ]
      },
      after: '<b>Useful phrases:</b> Where is…? · It’s next to / in the corner / under… '
        + '· First…, then…<br><span class="wc">The book prints this as Audio Track '
        + '3.3. No studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 3 · Part 3', type: 'shortanswer',
        title: 'Where Are the Tools?',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is Tarek looking for? '
          + '— Tools.</span>',
        items: [
          { q: '1. Where is the torque wrench?',
            accept: ['on the wall, next to the socket set'],
            keys: ['wall', 'next'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What must Tarek do first?',
            accept: ['put on his gloves'],
            keys: ['gloves'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What must he do before raising the car?',
            accept: ['chock the wheels'],
            keys: ['chock', 'wheels'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
