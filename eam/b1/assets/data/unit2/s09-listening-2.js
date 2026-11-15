/* Unit 2 §9 — Part 3 - Listening 2.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s09', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 3 - Listening 2', part: '3', section: '9',
          lesson: 'Part 3 - Listening 2', title: 'Part 3 - Listening 2' },
  objective: 'Work through Part 3 - Listening 2 of unit 2.',
  video: 'u02v09',
  prev: 's08-listening-1', prevLabel: 'Part 3 - Listening 1',
  next: 's10-listening-3', nextLabel: 'Part 3 - Listening 3',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 2 · Part 3', type: 'scene',
      title: 'Listen: At the Parts Store',
      instruction: '<b>Before you listen:</b> what parts does a service department keep in the '
        + 'store? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u2-dialogue2',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Tarek, are there any oil filters in the store?',
          '2. Tarek: Let me check. There are three oil filters, but there aren’t any '
        + 'air filters.',
          '3. Nabil: How much coolant is there?',
          '4. Tarek: There isn’t much — only one bottle.',
          '5. Nabil: OK. Please order some air filters and more coolant.',
          '6. Tarek: Yes, Ustaz. I’ll tell Maher.'
        ]
      },
      after: '<b>Useful phrases:</b> Are there any…? · How much…? · There aren’t '
        + 'any…<br><span class="wc">The book prints this as Audio Track 2.3. No '
        + 'studio recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 2 · Part 3', type: 'shortanswer',
        title: 'At the Parts Store',
        instruction: 'While you listen: answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is Tarek checking? — '
          + 'The parts store.</span>',
        items: [
          { q: '1. How many oil filters are there?',
            accept: ['three'],
            keys: ['three'], need: 1,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. Are there any air filters?',
            accept: ['no, there aren’t any'],
            keys: ['there', 'aren'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What must Tarek order?',
            accept: ['air filters and more coolant'],
            keys: ['filters', 'more'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
