/* Unit 9 §19 — Part 9 - Local Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s19', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 9 - Local Case Study', part: '9', section: '19',
          lesson: 'Part 9 - Local Case Study', title: 'Part 9 - Local Case Study' },
  objective: 'Work through Part 9 - Local Case Study of unit 9.',
  video: 'u09v19',
  prev: 's18-global-case-study', prevLabel: 'Part 8 - Global Case Study',
  next: 's20-spiral-review', nextLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 9'], ref: '9A',
      bookRef: 'Unit 9 · Part 9', type: 'chipcols',
      title: 'Local Case Study — Syria in Focus: Repair or Import?',
      instruction: 'Sort each one into its column.',
      poolLabel: 'Click a sentence, then click a column.',
      cols: [{ label: 'A' }, { label: 'B' }],
      pool: ['What did Abu Firas’s taxi need?', 'Why couldn’t he import a new alternator?', 'What did Maher offer?'],
      answers: {
        'What did Abu Firas’s taxi need?': 0,
        'Why couldn’t he import a new alternator?': 1,
        'What did Maher offer?': 0
      },
      whyTitle: 'What decided each one',
      why: {
        'What did Abu Firas’s taxi need?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'Why couldn’t he import a new alternator?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.',
        'What did Maher offer?': 'Find the signal word in the sentence before you choose — it is the word '
        + 'that decides, and it is the same signal the focus box names.'
      }
    },
    {
      id: 'c2', covers: ['Part 9'], ref: '9B',
      bookRef: 'Unit 9 · Part 9', type: 'solutions',
      title: 'Decision Task',
      instruction: 'A customer’s part has failed. A new one must be imported (three weeks, '
        + 'expensive), but the old part can be reconditioned (next day, cheaper, with '
        + 'a guarantee). Should the garage (a) make the customer wait for a new '
        + 'import, (b) offer to recondition the old part, or (c) fit a cheap, '
        + 'poor-quality part? Decide and explain. Use the frame.',
      need: 1,
      placeholder: 'I think … because … .',
      ideas: ['A customer’s part has failed. A new one must be imported (three weeks, '
        + 'expensive), but the old part can be reconditioned (next day, cheaper, with '
        + 'a guarantee). Should the garage (a) make the customer wait for a new '
        + 'import, (b) offer to recondition the old part, or (c) fit a cheap, '
        + 'poor-quality part? Decide and explain. Use the frame.'],
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'A customer’s part has failed. A new one must be imported (three weeks, '
        + 'expensive), but the old part can be reconditioned (next day, cheaper, with '
        + 'a guarantee). Should the garage (a) make the customer wait for a new '
        + 'import, (b) offer to recondition the old part, or (c) fit a cheap, '
        + 'poor-quality part? Decide and explain. Use the frame.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' }]
      }
    }
  ]
});
