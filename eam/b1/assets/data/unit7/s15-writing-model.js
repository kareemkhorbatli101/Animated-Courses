/* Unit 7 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s15', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 7.',
  video: 'u07v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 7 · Part 6', type: 'writer',
      title: 'A Booking Email (50–70 words)',
      instruction: 'Write an email to a customer to confirm a booking. Use future forms.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write an email to a customer to confirm a booking. Use future forms.',
        words: ['I’ll…', 'We’re going to…', '… will be ready at…', 'we can offer a courtesy car'],
        must: ['will used?', 'going to used?', 'a clear ready time?', '50–70 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.'],
        planPlaceholder: 'I’ve booked you in for ___. It will take ___. Your car will be ready at '
        + '___. We’re going to ___. I’ll call you when ___'
      },
      aiCheck: {
        task: 'Write an email to a customer to confirm a booking. Use future forms.',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['will used?', 'going to used?', 'a clear ready time?', '50–70 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write an email to a customer to confirm a booking. Use future forms.',
        parts: ['will used?', 'going to used?', 'a clear ready time?'],
        example: ['I’ve booked you in for ___. It will take ___. Your car will be ready at '
        + '___. We’re going to ___. I’ll call you when ___'],
        criteria: [{ t: 'will used?' },
                   { t: 'going to used?' },
                   { t: 'a clear ready time?' },
                   { t: '50–70 words?' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 7 · Part 6', type: 'writer',
      title: 'Why Clear Communication Matters (50–70 words)',
      instruction: 'Write why clear communication is important at a service desk. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why clear communication is important at a service desk. Give reasons.',
        words: ['… is important because…', 'knows the price / the ready time', 'never surprised', 'people mind not knowing'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why clear communication is important at a service desk. Give reasons.',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write why clear communication is important at a service desk. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 7 · Part 6', type: 'writer',
      title: 'A Ready-Time Message (40–60 words)',
      instruction: 'Write a short message to a customer to tell them the car is ready.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short message to a customer to tell them the car is ready.',
        words: [],
        must: ['clear and polite?', 'a collection time?', '40–60 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        planPlaceholder: 'Good news — your car is ready. The ___ is done. You can collect it ___. At '
        + 'handover, you’ll ___'
      },
      aiCheck: {
        task: 'Write a short message to a customer to tell them the car is ready.',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['clear and polite?', 'a collection time?', '40–60 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write a short message to a customer to tell them the car is ready.',
        parts: ['clear and polite?', 'a collection time?', '40–60 words?'],
        example: ['Good news — your car is ready. The ___ is done. You can collect it ___. At '
        + 'handover, you’ll ___'],
        criteria: [{ t: 'clear and polite?' },
                   { t: 'a collection time?' },
                   { t: '40–60 words?' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 7 · Part 6', type: 'writer',
      title: 'Reflection — Waiting for Something (40–60 words)',
      instruction: 'Write about a time you waited for something (a repair, a part, or a '
        + 'delivery). How did you feel? What helped?',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a time you waited for something (a repair, a part, or a '
        + 'delivery). How did you feel? What helped?',
        words: [],
        must: ['a clear story?', 'how you felt?', '40–60 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a time you waited for something (a repair, a part, or a '
        + 'delivery). How did you feel? What helped?',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['a clear story?', 'how you felt?', '40–60 words?', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write about a time you waited for something (a repair, a part, or a '
        + 'delivery). How did you feel? What helped?',
        parts: ['a clear story?', 'how you felt?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear story?' },
                   { t: 'how you felt?' },
                   { t: '40–60 words?' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' }]
      }
    }
  ]
});
