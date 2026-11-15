/* Unit 3 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s19', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 3.',
  video: 'u03v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 3 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: Raising a Garage to Dealership Standard',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What did the garage want to '
        + 'become? — An authorised service centre.</span>',
      items: [
        { q: '1. What did Maher say the owner needed first?',
          accept: ['safety (not expensive machines)', 'safety'],
          keys: ['safety'], need: 1,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What three things did the owner do?',
          accept: ['bought safety gear and axle stands; cleaned the workshop and put up a tool '
        + 'board; trained the team'],
          keys: ['bought', 'safety'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What happened after six months?',
          accept: ['the garage passed the safety check and became an authorised service centre'],
          keys: ['garage', 'passed'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 3 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A garage owner has some money to improve his workshop. Should he first (a) '
        + 'buy a new diagnostic machine, (b) buy safety gear and axle stands and '
        + 'train the team, or (c) paint the building? Decide and explain. Use the '
        + 'frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A garage owner has some money to improve his workshop. Should he first (a) '
        + 'buy a new diagnostic machine, (b) buy safety gear and axle stands and '
        + 'train the team, or (c) paint the building? Decide and explain. Use the '
        + 'frame.'],
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'A garage owner has some money to improve his workshop. Should he first (a) '
        + 'buy a new diagnostic machine, (b) buy safety gear and axle stands and '
        + 'train the team, or (c) paint the building? Decide and explain. Use the '
        + 'frame.',
        parts: ['Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.', 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every instruction begins with the verb — <b>Put</b>, <b>Check</b>, '
        + '<b>Wear</b> — with no <i>I</i> or <i>you</i> in front of it.' },
                   { t: 'A step that keeps somebody safe comes <b>before</b> the work it protects, '
        + 'not after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' }]
      }
    }
  ]
});
