/* Unit 8 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s15', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 8.',
  video: 'u08v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 8 · Part 6', type: 'writer',
      title: 'The Quality Rules (50–70 words)',
      instruction: 'Write the quality rules for a garage. Use must, have to, and mustn’t.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write the quality rules for a garage. Use must, have to, and mustn’t.',
        words: ['Every car must…', 'You have to…', 'You mustn’t…', 'we have to use genuine parts'],
        must: ['must / have to used?', 'mustn’t used?', 'clear rules?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.'],
        planPlaceholder: 'Every car must ___. You have to ___. You mustn’t ___. Under warranty, we '
        + 'have to ___'
      },
      aiCheck: {
        task: 'Write the quality rules for a garage. Use must, have to, and mustn’t.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['must / have to used?', 'mustn’t used?', 'clear rules?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write the quality rules for a garage. Use must, have to, and mustn’t.',
        parts: ['must / have to used?', 'mustn’t used?', 'clear rules?'],
        example: ['Every car must ___. You have to ___. You mustn’t ___. Under warranty, we '
        + 'have to ___'],
        criteria: [{ t: 'must / have to used?' },
                   { t: 'mustn’t used?' },
                   { t: 'clear rules?' },
                   { t: '50–70 words?' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 8 · Part 6', type: 'writer',
      title: 'Why Standards and Warranty Matter (50–70 words)',
      instruction: 'Write why quality standards and honest warranty work are important. Give '
        + 'reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why quality standards and honest warranty work are important. Give '
        + 'reasons.',
        words: ['… is important because…', 'the customer is safe', 'the customer trusts it', 'builds a good name'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why quality standards and honest warranty work are important. Give '
        + 'reasons.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write why quality standards and honest warranty work are important. Give '
        + 'reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 8 · Part 6', type: 'writer',
      title: 'Explaining a Warranty (50–70 words)',
      instruction: 'Write a short note to a customer, explaining their warranty and what it '
        + 'covers.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short note to a customer, explaining their warranty and what it '
        + 'covers.',
        words: [],
        must: ['warranty explained clearly?', 'must / mustn’t / don’t have to used?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        planPlaceholder: 'The fault is a defect, and your warranty is valid, so you don’t have to '
        + '___. We have to ___. Please don’t ___'
      },
      aiCheck: {
        task: 'Write a short note to a customer, explaining their warranty and what it '
        + 'covers.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['warranty explained clearly?', 'must / mustn’t / don’t have to used?', '50–70 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write a short note to a customer, explaining their warranty and what it '
        + 'covers.',
        parts: ['warranty explained clearly?', 'must / mustn’t / don’t have to used?', '50–70 words?'],
        example: ['The fault is a defect, and your warranty is valid, so you don’t have to '
        + '___. We have to ___. Please don’t ___'],
        criteria: [{ t: 'warranty explained clearly?' },
                   { t: 'must / mustn’t / don’t have to used?' },
                   { t: '50–70 words?' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 8 · Part 6', type: 'writer',
      title: 'Reflection — A Promise Kept (40–60 words)',
      instruction: 'Write about a time a shop or a person kept a promise (a guarantee), or did '
        + 'not. What happened?',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a time a shop or a person kept a promise (a guarantee), or did '
        + 'not. What happened?',
        words: [],
        must: ['a clear story?', 'some obligation language?', '40–60 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a time a shop or a person kept a promise (a guarantee), or did '
        + 'not. What happened?',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['a clear story?', 'some obligation language?', '40–60 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'Write about a time a shop or a person kept a promise (a guarantee), or did '
        + 'not. What happened?',
        parts: ['a clear story?', 'some obligation language?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear story?' },
                   { t: 'some obligation language?' },
                   { t: '40–60 words?' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' }]
      }
    }
  ]
});
