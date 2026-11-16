/* Unit 9 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s15', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 9.',
  video: 'u09v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 9 · Part 6', type: 'writer',
      title: 'Finding and Fixing a Fault (50–70 words)',
      instruction: 'Describe how you found and fixed a fault. Use the past simple and the '
        + 'present perfect.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Describe how you found and fixed a fault. Use the past simple and the '
        + 'present perfect.',
        words: ['Yesterday, I …ed', 'I have …ed (experience)', 'First, Then…', 'the fault has gone / stopped'],
        must: ['past simple with a time?', 'present perfect for experience or result?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        planPlaceholder: 'Yesterday, a car came in with ___. First, I ___. I have ___ many times. I '
        + 'fitted ___ and road-tested it. The fault has ___'
      },
      aiCheck: {
        task: 'Describe how you found and fixed a fault. Use the past simple and the '
        + 'present perfect.',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['past simple with a time?', 'present perfect for experience or result?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Describe how you found and fixed a fault. Use the past simple and the '
        + 'present perfect.',
        parts: ['past simple with a time?', 'present perfect for experience or result?', '50–70 words?'],
        example: ['Yesterday, a car came in with ___. First, I ___. I have ___ many times. I '
        + 'fitted ___ and road-tested it. The fault has ___'],
        criteria: [{ t: 'past simple with a time?' },
                   { t: 'present perfect for experience or result?' },
                   { t: '50–70 words?' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 9 · Part 6', type: 'writer',
      title: 'Why Every Comeback Matters (50–70 words)',
      instruction: 'Write why a garage must take every comeback seriously. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why a garage must take every comeback seriously. Give reasons.',
        words: ['… must take … seriously because…', 'trust is at risk', 'find the real cause', 'a chance to show honesty'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why a garage must take every comeback seriously. Give reasons.',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Write why a garage must take every comeback seriously. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 9 · Part 6', type: 'writer',
      title: 'A Repair Note (50–70 words)',
      instruction: 'Write a short note from the technician to the manager about a repair and a '
        + 'comeback.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short note from the technician to the manager about a repair and a '
        + 'comeback.',
        words: [],
        must: ['past simple + present perfect?', 'what has come back and why?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        planPlaceholder: 'Last week, we ___. The noise has come back, but I have diagnosed ___. I '
        + 'have ordered ___. I will ___'
      },
      aiCheck: {
        task: 'Write a short note from the technician to the manager about a repair and a '
        + 'comeback.',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['past simple + present perfect?', 'what has come back and why?', '50–70 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Write a short note from the technician to the manager about a repair and a '
        + 'comeback.',
        parts: ['past simple + present perfect?', 'what has come back and why?', '50–70 words?'],
        example: ['Last week, we ___. The noise has come back, but I have diagnosed ___. I '
        + 'have ordered ___. I will ___'],
        criteria: [{ t: 'past simple + present perfect?' },
                   { t: 'what has come back and why?' },
                   { t: '50–70 words?' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 9 · Part 6', type: 'writer',
      title: 'Reflection — A Problem I Solved (40–60 words)',
      instruction: 'Write about a problem you found and fixed (a car, a machine, or anything). '
        + 'How did you find the cause?',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a problem you found and fixed (a car, a machine, or anything). '
        + 'How did you find the cause?',
        words: [],
        must: ['a clear story?', 'past simple + present perfect?', '40–60 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a problem you found and fixed (a car, a machine, or anything). '
        + 'How did you find the cause?',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['a clear story?', 'past simple + present perfect?', '40–60 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Write about a problem you found and fixed (a car, a machine, or anything). '
        + 'How did you find the cause?',
        parts: ['a clear story?', 'past simple + present perfect?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear story?' },
                   { t: 'past simple + present perfect?' },
                   { t: '40–60 words?' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' }]
      }
    }
  ]
});
