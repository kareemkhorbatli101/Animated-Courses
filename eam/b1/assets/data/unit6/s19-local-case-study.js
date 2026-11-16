/* Unit 6 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s19', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 6.',
  video: 'u06v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 6 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: Only the Work the Car Needs',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. Whose car was it? — A young '
        + 'driver, Samer.</span>',
      items: [
        { q: '1. What did the other garage tell Samer?',
          accept: ['that the car needed a new, expensive gearbox'],
          keys: ['that', 'needed'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did Lina find?',
          accept: ['the gearbox was fine; the real problem was a small, cheap worn part'],
          keys: ['gearbox', 'fine'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. Why is honesty good business in Syria?',
          accept: ['money is tight and people trust word of mouth, so honesty brings more '
        + 'customers'],
          keys: ['money', 'tight'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 6 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A customer’s car has a small, cheap problem, but a bigger, more expensive '
        + 'repair would earn the garage more. Should the mechanic (a) do the big '
        + 'repair for more money, (b) do only the small repair the car needs, or (c) '
        + 'send the customer away? Decide and explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A customer’s car has a small, cheap problem, but a bigger, more expensive '
        + 'repair would earn the garage more. Should the mechanic (a) do the big '
        + 'repair for more money, (b) do only the small repair the car needs, or (c) '
        + 'send the customer away? Decide and explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'A customer’s car has a small, cheap problem, but a bigger, more expensive '
        + 'repair would earn the garage more. Should the mechanic (a) do the big '
        + 'repair for more money, (b) do only the small repair the car needs, or (c) '
        + 'send the customer away? Decide and explain. Use the frame.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' }]
      }
    }
  ]
});
