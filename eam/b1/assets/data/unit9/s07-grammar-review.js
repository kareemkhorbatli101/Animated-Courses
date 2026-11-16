/* Unit 9 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s07', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 9.',
  video: 'u09v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 9 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'I have replaced the pads yesterday.',
          accept: ['I replaced the pads yesterday.'],
          why: 'The repaired sentence is “I replaced the pads yesterday”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'Have you diagnose the fault?',
          accept: ['Have you diagnosed the fault?.'],
          why: 'The repaired sentence is “Have you diagnosed the fault?”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'He has fix it last week.',
          accept: ['He fixed it last week.'],
          why: 'The repaired sentence is “He fixed it last week”. The fault is the one '
        + 'this unit’s focus box warns about — compare the two sentences word by word '
        + 'and the changed word is the rule.' },
        { wrong: 'Did you ever repaired a gearbox?',
          accept: ['Have you ever repaired a gearbox?.'],
          why: 'The repaired sentence is “Have you ever repaired a gearbox?”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 9 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write two sentences: one about a repair you did (past simple, with a '
        + 'time), and one about your experience (present perfect, with ever).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two sentences: one about a repair you did (past simple, with a '
        + 'time), and one about your experience (present perfect, with ever).',
        words: [],
        must: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.', 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.', 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two sentences: one about a repair you did (past simple, with a '
        + 'time), and one about your experience (present perfect, with ever).',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.', 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.', 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'Write two sentences: one about a repair you did (past simple, with a '
        + 'time), and one about your experience (present perfect, with ever).',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
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
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 9 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which sentence is correct with ‘yesterday’?',
          options: [
            { t: 'I have replaced it yesterday.', ok: false,
              why: 'Not this one. I have replaced it yesterday is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is correct with ‘yesterday’”.' },
            { t: 'I have replace it yesterday.', ok: false,
              why: 'Not this one. I have replace it yesterday is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is correct with ‘yesterday’”.' },
            { t: 'I replaced it yesterday.', ok: true,
              why: 'Right — I replaced it yesterday. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'I replacing it yesterday.', ok: false,
              why: 'Not this one. I replacing it yesterday is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which sentence is correct with ‘yesterday’”.' }
          ]
        },
        {
          q: '2. Which sentence is correct for experience?',
          options: [
            { t: 'Did you ever repair a gearbox?', ok: false,
              why: 'Not this one. Did you ever repair a gearbox? is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct for experience”.' },
            { t: 'Have you ever repaired a gearbox?', ok: true,
              why: 'Right — Have you ever repaired a gearbox?. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'Have you ever repair a gearbox?', ok: false,
              why: 'Not this one. Have you ever repair a gearbox? is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct for experience”.' },
            { t: 'You ever repaired a gearbox?', ok: false,
              why: 'Not this one. You ever repaired a gearbox? is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is correct for experience”.' }
          ]
        }
      ]
    }
  ]
});
