/* Unit 7 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s19', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 7.',
  video: 'u07v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 7 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: When the Part Is Late and the Power Is Off',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. Was the part in Syria? — '
        + 'No, it had to be imported.</span>',
      items: [
        { q: '1. Why did the part take a week?',
          accept: ['it was not in syria and had to be imported'],
          keys: ['syria', 'imported'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the team do when the power went off?',
          accept: ['they used paper job cards and worked on jobs that did not need power'],
          keys: ['they', 'used'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What is worth more than a fast promise?',
          accept: ['a clear plan and an honest phone call'],
          keys: ['clear', 'plan'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 7 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A part will take a week to import, but the customer needs the car. Should '
        + 'the advisor (a) promise the car in two days to keep the customer happy, '
        + '(b) give an honest ready time and offer a courtesy car, or (c) say nothing '
        + 'and hope the part comes? Decide and explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A part will take a week to import, but the customer needs the car. Should '
        + 'the advisor (a) promise the car in two days to keep the customer happy, '
        + '(b) give an honest ready time and offer a courtesy car, or (c) say nothing '
        + 'and hope the part comes? Decide and explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'A part will take a week to import, but the customer needs the car. Should '
        + 'the advisor (a) promise the car in two days to keep the customer happy, '
        + '(b) give an honest ready time and offer a courtesy car, or (c) say nothing '
        + 'and hope the part comes? Decide and explain. Use the frame.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' }]
      }
    }
  ]
});
