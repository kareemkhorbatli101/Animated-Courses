/* Unit 2 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s21', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 2.',
  video: 'u02v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 2 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u2-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main systems and fluids under the bonnet.' },
        { t: 'I can use there is / there are with some, any, much, and many.' },
        { t: 'I can understand a stock check between a manager and a mechanic.' },
        { t: 'I can write a short parts order or stock note (Practitioner).' },
        { t: 'I can describe what a car needs and how much / how many.' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main systems and fluids under the bonnet. I can use there '
        + 'is / there are with some, any, much, and many. I can understand a stock '
        + 'check between a manager and a mechanic. I can write a short parts order or '
        + 'stock note (Practitioner). I can describe what a car needs and how much / '
        + 'how many.', 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main systems and fluids under the bonnet. I can use there '
        + 'is / there are with some, any, much, and many. I can understand a stock '
        + 'check between a manager and a mechanic. I can write a s' },
                   { t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 2 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 2 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'battery', at: [10, 27] },
        { id: 'g2', num: 2, label: 'radiator', at: [30, 27] },
        { id: 'g3', num: 3, label: 'alternator', at: [50, 27] },
        { id: 'g4', num: 4, label: 'belt', at: [70, 27] },
        { id: 'g5', num: 5, label: 'hose', at: [90, 27] },
        { id: 'g6', num: 6, label: 'engine oil', at: [10, 77] },
        { id: 'g7', num: 7, label: 'coolant', at: [30, 77] },
        { id: 'g8', num: 8, label: 'brake fluid', at: [50, 77] },
        { id: 'g9', num: 9, label: 'air filter', at: [70, 77] },
        { id: 'g10', num: 10, label: 'dipstick', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Unit 2 glossary (10 words)',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' }]
      }
    }
  ]
});
