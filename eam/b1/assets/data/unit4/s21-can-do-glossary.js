/* Unit 4 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s21', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 4.',
  video: 'u04v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 4 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u4-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main measurements on a car and the tools that read them.' },
        { t: 'I can use comparatives and superlatives to compare readings.' },
        { t: 'I can understand a diagnostic report and which reading is outside the '
        + 'tolerance.' },
        { t: 'I can write a clear readings summary (Practitioner).' },
        { t: 'I can compare cars and decide which needs the most work.' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main measurements on a car and the tools that read them. I '
        + 'can use comparatives and superlatives to compare readings. I can '
        + 'understand a diagnostic report and which reading is outside the tolerance. '
        + 'I can write a clear readings summary (Practitioner). I can compare cars '
        + 'and decide which needs the most work.', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main measurements on a car and the tools that read them. I '
        + 'can use comparatives and superlatives to compare readings. I can '
        + 'understand a diagnostic report and which reading is outside t' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 4 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 4 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'gauge', at: [10, 27] },
        { id: 'g2', num: 2, label: 'tyre pressure', at: [30, 27] },
        { id: 'g3', num: 3, label: 'tread depth', at: [50, 27] },
        { id: 'g4', num: 4, label: 'voltage', at: [70, 27] },
        { id: 'g5', num: 5, label: 'temperature', at: [90, 27] },
        { id: 'g6', num: 6, label: 'tolerance', at: [10, 77] },
        { id: 'g7', num: 7, label: 'reading', at: [30, 77] },
        { id: 'g8', num: 8, label: 'worn', at: [50, 77] },
        { id: 'g9', num: 9, label: 'meter', at: [70, 77] },
        { id: 'g10', num: 10, label: 'millimetre', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'Unit 4 glossary (10 words)',
        parts: ['Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' }]
      }
    }
  ]
});
