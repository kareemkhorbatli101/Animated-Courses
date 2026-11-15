/* Unit 4 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s09', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 4.',
  video: 'u04v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 4 · Part 3', type: 'scene',
      title: 'Listen: The Diagnostic Report',
      instruction: '<b>Before you listen:</b> what numbers does a diagnostic report show? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u4-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Lina, what does the report say?',
          '2. Lina: The battery voltage is a little low — lower than last time.',
          '3. Nabil: How low?',
          '4. Lina: 12.1 volts. The tolerance is 12.4 to 12.7.',
          '5. Nabil: So it’s below the tolerance.',
          '6. Lina: Yes. And the tyre pressure is fine, but the tread on the rear '
        + 'left is the most worn.',
          '7. Nabil: OK. We’ll charge the battery and change that tyre. Good work — '
        + 'the numbers tell the story.'
        ]
      },
      after: '<b>Useful phrases:</b> lower than last time · below / within the tolerance '
        + '· the numbers tell the story<br><span class="wc">The book prints this as '
        + 'Audio Track 4.3. No studio recording exists yet, so the cast speaks '
        + 'it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 4 · Part 3', type: 'shortanswer',
        title: 'The Diagnostic Report',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is Lina reading? — The '
          + 'diagnostic report.</span>',
        items: [
          { q: '1. Is the battery voltage high or low?',
            accept: ['low', 'low (lower than last time, 12.1 volts)'],
            keys: [], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What is the correct tolerance?',
            accept: ['12.4 to 12.7 volts'],
            keys: ['volts'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. Which tyre is the most worn?',
            accept: ['the rear left'],
            keys: ['rear', 'left'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
