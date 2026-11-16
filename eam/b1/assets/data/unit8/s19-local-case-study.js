/* Unit 8 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s19', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 8.',
  video: 'u08v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 8 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: The Guarantee That Kept Its Promise',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What was replaced on Mr '
        + 'Khalil’s car? — The water pump.</span>',
      items: [
        { q: '1. What guarantee did Mr Khalil get?',
          accept: ['if the same part failed within six months, the repair would be free'],
          keys: ['same', 'part'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What happened after twelve days?',
          accept: ['the new pump failed'],
          keys: ['pump', 'failed'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did Maher say a guarantee is worth?',
          accept: ['a guarantee is only worth something if you keep it'],
          keys: ['guarantee', 'only'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 8 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A customer’s repair fails inside the guarantee time. Should the garage (a) '
        + 'argue and refuse to help, (b) fix it for free as the guarantee promises, '
        + 'or (c) charge half the price? Decide and explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A customer’s repair fails inside the guarantee time. Should the garage (a) '
        + 'argue and refuse to help, (b) fix it for free as the guarantee promises, '
        + 'or (c) charge half the price? Decide and explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'A customer’s repair fails inside the guarantee time. Should the garage (a) '
        + 'argue and refuse to help, (b) fix it for free as the guarantee promises, '
        + 'or (c) charge half the price? Decide and explain. Use the frame.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' }]
      }
    }
  ]
});
