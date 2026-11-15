/* Unit 2 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s19', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 2.',
  video: 'u02v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 2 · Part 9', type: 'chipcols',
      title: 'Local Case Study — Syria in Focus: Genuine or Cheaper Parts?',
      instruction: 'Sort each one into its column.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['What did his car need?', 'What two choices did Rana explain?', 'What did Rana advise for the belt?'],
      answers: {
        'What did his car need?': 0,
        'What two choices did Rana explain?': 1,
        'What did Rana advise for the belt?': 0
      },
      whyTitle: 'What decided each one',
      why: {
        'What did his car need?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'What two choices did Rana explain?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'What did Rana advise for the belt?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 2 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A customer wants the cheapest parts for everything, even the brakes. '
        + 'Should the advisor (a) sell only cheap parts, (b) explain the difference '
        + 'and advise honestly, or (c) refuse to serve the customer? Decide and '
        + 'explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A customer wants the cheapest parts for everything, even the brakes. '
        + 'Should the advisor (a) sell only cheap parts, (b) explain the difference '
        + 'and advise honestly, or (c) refuse to serve the customer? Decide and '
        + 'explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'A customer wants the cheapest parts for everything, even the brakes. '
        + 'Should the advisor (a) sell only cheap parts, (b) explain the difference '
        + 'and advise honestly, or (c) refuse to serve the customer? Decide and '
        + 'explain. Use the frame.',
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
