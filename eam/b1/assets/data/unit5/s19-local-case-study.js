/* Unit 5 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s19', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 5.',
  video: 'u05v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 5 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: The Three-Day Fleet Job',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. Whose fleet was it? — A '
        + 'government office in Damascus.</span>',
      items: [
        { q: '1. How many cars, and how many days?',
          accept: ['fifteen cars in three days'],
          keys: ['fifteen', 'cars'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. How were the fleet cars booked in?',
          accept: ['five at a time'],
          keys: ['five', 'time'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the parts store check early?',
          accept: ['that there were enough filters and oil'],
          keys: ['that', 'there'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 5 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A big fleet job comes in, but the normal customers still need service. '
        + 'Should Maher (a) stop all normal work, (b) plan the fleet in small groups '
        + 'and keep some normal work going, or (c) refuse the fleet job? Decide and '
        + 'explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A big fleet job comes in, but the normal customers still need service. '
        + 'Should Maher (a) stop all normal work, (b) plan the fleet in small groups '
        + 'and keep some normal work going, or (c) refuse the fleet job? Decide and '
        + 'explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'A big fleet job comes in, but the normal customers still need service. '
        + 'Should Maher (a) stop all normal work, (b) plan the fleet in small groups '
        + 'and keep some normal work going, or (c) refuse the fleet job? Decide and '
        + 'explain. Use the frame.',
        parts: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' }]
      }
    }
  ]
});
