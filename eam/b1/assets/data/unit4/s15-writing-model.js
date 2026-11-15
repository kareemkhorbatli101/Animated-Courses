/* Unit 4 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s15', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 4.',
  video: 'u04v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 4 · Part 6', type: 'writer',
      title: 'Compare Two Cars (50–70 words)',
      instruction: 'Compare two cars, or two sets of tyres. Use comparatives and superlatives.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Compare two cars, or two sets of tyres. Use comparatives and superlatives.',
        words: ['… is more / -er than…', 'the most / the -est…', 'newer, stronger, worn, low', 'needs more work'],
        must: ['comparatives used?', 'at least one superlative?', 'than after comparatives?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.'],
        planPlaceholder: 'The first car is ___ than the second. Its ___ is newer/stronger. The '
        + 'second car’s ___ is the most ___. So ___ needs more work'
      },
      aiCheck: {
        task: 'Compare two cars, or two sets of tyres. Use comparatives and superlatives.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['comparatives used?', 'at least one superlative?', 'than after comparatives?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Compare two cars, or two sets of tyres. Use comparatives and superlatives.',
        parts: ['comparatives used?', 'at least one superlative?', 'than after comparatives?'],
        example: ['The first car is ___ than the second. Its ___ is newer/stronger. The '
        + 'second car’s ___ is the most ___. So ___ needs more work'],
        criteria: [{ t: 'comparatives used?' },
                   { t: 'at least one superlative?' },
                   { t: 'than after comparatives?' },
                   { t: '50–70 words?' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 4 · Part 6', type: 'writer',
      title: 'Why Measuring Matters (50–70 words)',
      instruction: 'Write why careful measuring is important in car maintenance. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why careful measuring is important in car maintenance. Give reasons.',
        words: ['… is important because…', 'find the real problem', 'within / below the tolerance', 'better than guessing'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why careful measuring is important in car maintenance. Give reasons.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Write why careful measuring is important in car maintenance. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 4 · Part 6', type: 'writer',
      title: 'A Readings Note (50–70 words)',
      instruction: 'Write a short note from Lina (technician) to Maher (manager) with a car’s '
        + 'readings.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short note from Lina (technician) to Maher (manager) with a car’s '
        + 'readings.',
        words: [],
        must: ['clear readings + comparisons?', 'a recommendation?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        planPlaceholder: 'Dear ___, Here are the readings for ___. The battery is ___. The ___ tyre '
        + 'is the most worn. I think we should ___. Thank you. ___'
      },
      aiCheck: {
        task: 'Write a short note from Lina (technician) to Maher (manager) with a car’s '
        + 'readings.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['clear readings + comparisons?', 'a recommendation?', '50–70 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Write a short note from Lina (technician) to Maher (manager) with a car’s '
        + 'readings.',
        parts: ['clear readings + comparisons?', 'a recommendation?', '50–70 words?'],
        example: ['Dear ___, Here are the readings for ___. The battery is ___. The ___ tyre '
        + 'is the most worn. I think we should ___. Thank you. ___'],
        criteria: [{ t: 'clear readings + comparisons?' },
                   { t: 'a recommendation?' },
                   { t: '50–70 words?' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 4 · Part 6', type: 'writer',
      title: 'Reflection — Comparing Two Things (40–60 words)',
      instruction: 'Write about two things you know well and compare them (for example, two '
        + 'cars, two roads, or two tools).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about two things you know well and compare them (for example, two '
        + 'cars, two roads, or two tools).',
        words: [],
        must: ['comparatives + one superlative?', 'clear comparison?', '40–60 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about two things you know well and compare them (for example, two '
        + 'cars, two roads, or two tools).',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['comparatives + one superlative?', 'clear comparison?', '40–60 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'Write about two things you know well and compare them (for example, two '
        + 'cars, two roads, or two tools).',
        parts: ['comparatives + one superlative?', 'clear comparison?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'comparatives + one superlative?' },
                   { t: 'clear comparison?' },
                   { t: '40–60 words?' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' }]
      }
    }
  ]
});
