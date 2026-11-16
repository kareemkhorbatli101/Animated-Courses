/* Unit 8 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s21', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 8.',
  video: 'u08v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 8 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u8-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main quality and warranty words.' },
        { t: 'I can use must, have to, and mustn’t for rules and prohibitions.' },
        { t: 'I can understand a quality check and a warranty conversation.' },
        { t: 'I can write the quality rules and explain a warranty.' },
        { t: 'I can run a quality review before handover (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main quality and warranty words. I can use must, have to, '
        + 'and mustn’t for rules and prohibitions. I can understand a quality check '
        + 'and a warranty conversation. I can write the quality rules and explain a '
        + 'warranty. I can run a quality review before handover (Practitioner).', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main quality and warranty words. I can use must, have to, '
        + 'and mustn’t for rules and prohibitions. I can understand a quality check '
        + 'and a warranty conversation. I can write the quality r' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
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
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 8 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 8 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'quality check', at: [10, 27] },
        { id: 'g2', num: 2, label: 'road test', at: [30, 27] },
        { id: 'g3', num: 3, label: 'defect', at: [50, 27] },
        { id: 'g4', num: 4, label: 'sign-off', at: [70, 27] },
        { id: 'g5', num: 5, label: 'warranty', at: [90, 27] },
        { id: 'g6', num: 6, label: 'recall', at: [10, 77] },
        { id: 'g7', num: 7, label: 'genuine part', at: [30, 77] },
        { id: 'g8', num: 8, label: 'service standard', at: [50, 77] },
        { id: 'g9', num: 9, label: 'inspection sheet', at: [70, 77] },
        { id: 'g10', num: 10, label: 'guarantee', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Unit 8 glossary (10 words)',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' }]
      }
    }
  ]
});
