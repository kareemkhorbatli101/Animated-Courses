/* Unit 8 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s07', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 8.',
  video: 'u08v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 8 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'You must to pass the quality check.',
          accept: ['You must pass the quality check.'],
          why: 'The repaired sentence is “You must pass the quality check”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'You don’t must hand over a faulty car.',
          accept: ['You mustn’t hand over a faulty car.'],
          why: 'The repaired sentence is “You mustn’t hand over a faulty car”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'We has to use genuine parts.',
          accept: ['We have to use genuine parts.'],
          why: 'The repaired sentence is “We have to use genuine parts”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'Every car must passes the road test.',
          accept: ['Every car must pass the road test.'],
          why: 'The repaired sentence is “Every car must pass the road test”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 8 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write three quality rules for a garage: one with must, one with have to, '
        + 'and one with mustn’t.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write three quality rules for a garage: one with must, one with have to, '
        + 'and one with mustn’t.',
        words: [],
        must: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.', 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.', 'The quality claim names what was checked, not just that it was checked.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write three quality rules for a garage: one with must, one with have to, '
        + 'and one with mustn’t.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.', 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.', 'The quality claim names what was checked, not just that it was checked.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write three quality rules for a garage: one with must, one with have to, '
        + 'and one with mustn’t.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 8 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which sentence means ‘it is forbidden’?',
          options: [
            { t: 'You mustn’t hide a defect.', ok: true,
              why: 'Right — You mustn’t hide a defect. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'You don’t have to hide a defect.', ok: false,
              why: 'Not this one. You don’t have to hide a defect is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence means ‘it is forbidden’”.' },
            { t: 'You have to hide a defect.', ok: false,
              why: 'Not this one. You have to hide a defect is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which sentence means ‘it is forbidden’”.' },
            { t: 'You should hide a defect.', ok: false,
              why: 'Not this one. You should hide a defect is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which sentence means ‘it is forbidden’”.' }
          ]
        },
        {
          q: '2. Which sentence means ‘it is not necessary’?',
          options: [
            { t: 'You must change it.', ok: false,
              why: 'Not this one. You must change it is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which sentence means ‘it is not necessary’”.' },
            { t: 'You mustn’t change it.', ok: false,
              why: 'Not this one. You mustn’t change it is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence means ‘it is not necessary’”.' },
            { t: 'You don’t have to change it.', ok: true,
              why: 'Right — You don’t have to change it. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'You have to change it.', ok: false,
              why: 'Not this one. You have to change it is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence means ‘it is not necessary’”.' }
          ]
        }
      ]
    }
  ]
});
