/* Unit 10 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s19', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 10.',
  video: 'u10v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 10 · Part 9', type: 'shortanswer',
      title: 'Local Case Study — Syria in Focus: Carrying a Famous Name and Our Own',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. Which brand did Cham Motors '
        + 'represent? — An international brand.</span>',
      items: [
        { q: '1. What two names did Maher say the team now carried?',
          accept: ['the carmaker’s famous name and their own'],
          keys: ['carmaker', 'famous'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the foreign trainer report?',
          accept: ['that he was surprised the syrian team could repair things others only replace'],
          keys: ['that', 'surprised'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did Maher tell the trainer?',
          accept: ['that in syria, mechanics learn to fix, not just to change parts'],
          keys: ['that', 'syria'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 10 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A dealership must meet an international standard but also keep its own '
        + 'local strengths (like repairing parts). Should it (a) copy the '
        + 'manufacturer exactly and drop its local skills, (b) meet the standard and '
        + 'keep its honest local strengths, or (c) ignore the standard and only do '
        + 'things its own way? Decide and explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A dealership must meet an international standard but also keep its own '
        + 'local strengths (like repairing parts). Should it (a) copy the '
        + 'manufacturer exactly and drop its local skills, (b) meet the standard and '
        + 'keep its honest local strengths, or (c) ignore the standard and only do '
        + 'things its own way? Decide and explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'Reported speech',
        task: 'A dealership must meet an international standard but also keep its own '
        + 'local strengths (like repairing parts). Should it (a) copy the '
        + 'manufacturer exactly and drop its local skills, (b) meet the standard and '
        + 'keep its honest local strengths, or (c) ignore the standard and only do '
        + 'things its own way? Decide and explain. Use the frame.',
        parts: ['The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.', 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.', 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The tense steps back one: “is” becomes “was”, “has booked” becomes “had '
        + 'booked”.' },
                   { t: 'The pronouns are changed to whoever you are speaking to now — “my car” '
        + 'becomes “his car” or “her car”.' },
                   { t: 'A time word that has moved is changed too: “today” becomes “that day”, '
        + '“tomorrow” becomes “the next day”.' },
                   { t: 'A reported question has no question mark and no “do/does”: “he asked when '
        + 'it would be ready”.' },
                   { t: 'The report says what the person meant, with no words put into their mouth '
        + 'that they did not say.' }]
      }
    }
  ]
});
