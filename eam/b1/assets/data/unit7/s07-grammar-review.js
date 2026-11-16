/* Unit 7 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s07', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 7.',
  video: 'u07v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 7 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'I will to call you when it’s ready.',
          accept: ['I’ll call you when it’s ready.'],
          why: 'The repaired sentence is “I’ll call you when it’s ready”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'We going to order the part.',
          accept: ['We’re going to order the part.'],
          why: 'The repaired sentence is “We’re going to order the part”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'The van arrive at ten tomorrow.',
          accept: ['The van is arriving at ten tomorrow.'],
          why: 'The repaired sentence is “The van is arriving at ten tomorrow”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'Your car will ready at four.',
          accept: ['Your car will be ready at four.'],
          why: 'The repaired sentence is “Your car will be ready at four”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 7 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write three sentences to a customer: one promise (will), one plan (going '
        + 'to), and one arrangement (present continuous).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write three sentences to a customer: one promise (will), one plan (going '
        + 'to), and one arrangement (present continuous).',
        words: [],
        must: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.', 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.', 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write three sentences to a customer: one promise (will), one plan (going '
        + 'to), and one arrangement (present continuous).',
        grammar: 'Future forms: will, going to, and the present continuous',
        reader: 'the teacher',
        must: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.', 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.', 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Future forms: will, going to, and the present continuous',
        minWords: 40,
        taught: ['Taking a booking, giving an estimate and promising a ready time — and the '
        + 'three ways English talks about what has not happened yet.'],
        task: 'Write three sentences to a customer: one promise (will), one plan (going '
        + 'to), and one arrangement (present continuous).',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 7 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which is a promise or a decision made now?',
          options: [
            { t: 'We are ordering the part.', ok: false,
              why: 'Not this one. We are ordering the part is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which is a promise or a decision made now”.' },
            { t: 'I’ll call you when it’s ready.', ok: true,
              why: 'Right — I’ll call you when it’s ready. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'The van is arriving at ten.', ok: false,
              why: 'Not this one. The van is arriving at ten is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is a promise or a decision made now”.' },
            { t: 'We are going to order.', ok: false,
              why: 'Not this one. We are going to order is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which is a promise or a decision made now”.' }
          ]
        },
        {
          q: '2. Which is a fixed arrangement?',
          options: [
            { t: 'The van is arriving at ten tomorrow.', ok: true,
              why: 'Right — The van is arriving at ten tomorrow. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'The van will arrive maybe.', ok: false,
              why: 'Not this one. The van will arrive maybe is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which is a fixed arrangement”.' },
            { t: 'The van arrive at ten.', ok: false,
              why: 'Not this one. The van arrive at ten is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which is a fixed arrangement”.' },
            { t: 'The van going to ten.', ok: false,
              why: 'Not this one. The van going to ten is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which is a fixed arrangement”.' }
          ]
        }
      ]
    }
  ]
});
