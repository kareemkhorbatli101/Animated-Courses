/* Unit 4 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s19', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 4.',
  video: 'u04v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 4 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: Adjusting the Service Interval',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. Where did the customer’s '
        + 'car drive every day? — On rough roads outside Damascus.</span>',
      items: [
        { q: '1. How often did the book say to change the filter?',
          accept: ['every 15,000 kilometres'],
          keys: ['every', 'kilometres'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. Why was the filter blocked at only 9,000 km?',
          accept: ['because of the dust on the rough roads'],
          keys: ['because', 'dust'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What decision did Maher make?',
          accept: ['he shortened the service interval for cars on dusty, rough roads'],
          keys: ['shortened', 'service'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 4 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A customer drives every day on rough, dusty roads. Should the service '
        + 'centre (a) follow the book’s interval exactly, (b) shorten the interval '
        + 'and check more often, or (c) never service the car? Decide and explain. '
        + 'Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A customer drives every day on rough, dusty roads. Should the service '
        + 'centre (a) follow the book’s interval exactly, (b) shorten the interval '
        + 'and check more often, or (c) never service the car? Decide and explain. '
        + 'Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'A customer drives every day on rough, dusty roads. Should the service '
        + 'centre (a) follow the book’s interval exactly, (b) shorten the interval '
        + 'and check more often, or (c) never service the car? Decide and explain. '
        + 'Use the frame.',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every comparison of two things has “than” after it.' },
                   { t: 'Every superlative has “the” in front of it — the most worn, the lowest.' },
                   { t: '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' }]
      }
    }
  ]
});
