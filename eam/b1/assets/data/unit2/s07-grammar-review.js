/* Unit 2 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s07', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 2.',
  video: 'u02v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 2 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'There is two batteries in the store.',
          accept: ['There are two batteries in the store.'],
          why: 'The repaired sentence is “There are two batteries in the store”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'How much filters are there?',
          accept: ['How many filters are there?.'],
          why: 'The repaired sentence is “How many filters are there?”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'There are much oil in the engine.',
          accept: ['There is much oil in the engine.'],
          why: 'The repaired sentence is “There is much oil in the engine”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'Is there some brake fluid?',
          accept: ['Is there any brake fluid?.'],
          why: 'The repaired sentence is “Is there any brake fluid?”. The fault is the one '
        + 'this unit’s focus box warns about — compare the two sentences word by word '
        + 'and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 2 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write two sentences about your workshop or toolbox: one with there is and '
        + 'one with there are.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two sentences about your workshop or toolbox: one with there is and '
        + 'one with there are.',
        words: [],
        must: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.', 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two sentences about your workshop or toolbox: one with there is and '
        + 'one with there are.',
        grammar: 'There is / There are, and some, any, much, many',
        reader: 'the teacher',
        must: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.', 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'There is / There are, and some, any, much, many',
        minWords: 40,
        taught: ['What is under the bonnet, what each fluid does, and how to say how much of '
        + 'it there is.'],
        task: 'Write two sentences about your workshop or toolbox: one with there is and '
        + 'one with there are.',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 2 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct sentence.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which sentence is correct?',
          options: [
            { t: 'There are three filters.', ok: true,
              why: 'Right — There are three filters. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'There is three filters.', ok: false,
              why: 'Not this one. There is three filters is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' },
            { t: 'There be three filters.', ok: false,
              why: 'Not this one. There be three filters is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' },
            { t: 'There am three filters.', ok: false,
              why: 'Not this one. There am three filters is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' }
          ]
        },
        {
          q: '2. Which sentence is correct?',
          options: [
            { t: 'There is many hoses.', ok: false,
              why: 'Not this one. There is many hoses is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which sentence is correct”.' },
            { t: 'There are many hoses.', ok: true,
              why: 'Right — There are many hoses. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'There are much hoses.', ok: false,
              why: 'Not this one. There are much hoses is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' },
            { t: 'There is much hoses.', ok: false,
              why: 'Not this one. There is much hoses is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which sentence is correct”.' }
          ]
        }
      ]
    }
  ]
});
