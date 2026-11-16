/* Unit 4 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s07', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 4.',
  video: 'u04v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 4 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'This tyre is more worse than that one.',
          accept: ['This tyre is worse than that one.'],
          why: 'The repaired sentence is “This tyre is worse than that one”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'The battery is lower as yesterday.',
          accept: ['The battery is lower than yesterday.'],
          why: 'The repaired sentence is “The battery is lower than yesterday”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'This is the most low reading.',
          accept: ['This is the lowest reading.'],
          why: 'The repaired sentence is “This is the lowest reading”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'A new tyre is gooder than an old one.',
          accept: ['A new tyre is better than an old one.'],
          why: 'The repaired sentence is “A new tyre is better than an old one”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 4 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Compare two tyres or two batteries you know. Write one comparative and one '
        + 'superlative sentence.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Compare two tyres or two batteries you know. Write one comparative and one '
        + 'superlative sentence.',
        words: [],
        must: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.', 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Compare two tyres or two batteries you know. Write one comparative and one '
        + 'superlative sentence.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.', 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Compare two tyres or two batteries you know. Write one comparative and one '
        + 'superlative sentence.',
        parts: ['Every comparison of two things has “than” after it.', 'Every superlative has “the” in front of it — the most worn, the lowest.', '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'Every comparison of two things has “than” after it.' },
                   { t: 'Every superlative has “the” in front of it — the most worn, the lowest.' },
                   { t: '“good” and “bad” are irregular: better / the best, worse / the worst — '
        + 'never “gooder” or “more bad”.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 4 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct sentence.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which sentence is correct?',
          options: [
            { t: 'This tyre is more worn that that one.', ok: false,
              why: 'Not this one. This tyre is more worn that that one is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct”.' },
            { t: 'This tyre is more worn than that one.', ok: true,
              why: 'Right — This tyre is more worn than that one. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'This tyre is worner than that one.', ok: false,
              why: 'Not this one. This tyre is worner than that one is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct”.' },
            { t: 'This tyre is most worn than that one.', ok: false,
              why: 'Not this one. This tyre is most worn than that one is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct”.' }
          ]
        },
        {
          q: '2. Which sentence is correct?',
          options: [
            { t: 'This is the lowest reading.', ok: true,
              why: 'Right — This is the lowest reading. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'This is the most low reading.', ok: false,
              why: 'Not this one. This is the most low reading is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is correct”.' },
            { t: 'This is the more low reading.', ok: false,
              why: 'Not this one. This is the more low reading is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is correct”.' },
            { t: 'This is the lower reading of all.', ok: false,
              why: 'Not this one. This is the lower reading of all is a real thing in a '
        + 'workshop, but it is not what the question asks about, and nothing in the '
        + 'material links it to “Which sentence is correct”.' }
          ]
        }
      ]
    }
  ]
});
