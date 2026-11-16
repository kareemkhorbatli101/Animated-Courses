/* Unit 7 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s21', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 7.',
  video: 'u07v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 7 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u7-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the steps and words of a booking and a handover.' },
        { t: 'I can use will, going to, and the present continuous to talk about the future.' },
        { t: 'I can understand a booking, an estimate, and a week plan.' },
        { t: 'I can write a booking email or a ready-time message.' },
        { t: 'I can handle a big job and schedule the week (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the steps and words of a booking and a handover. I can use '
        + 'will, going to, and the present continuous to talk about the future. I can '
        + 'understand a booking, an estimate, and a week plan. I can write a booking '
        + 'email or a ready-time message. I can handle a big job and schedule the '
        + 'week (Practitioner).', 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the steps and words of a booking and a handover. I can use '
        + 'will, going to, and the present continuous to talk about the future. I can '
        + 'understand a booking, an estimate, and a week plan. I c' },
                   { t: 'A plan already made before you spoke uses “going to”; a decision you make '
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
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 7 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 7 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'appointment', at: [10, 27] },
        { id: 'g2', num: 2, label: 'booking', at: [30, 27] },
        { id: 'g3', num: 3, label: 'estimate', at: [50, 27] },
        { id: 'g4', num: 4, label: 'deposit', at: [70, 27] },
        { id: 'g5', num: 5, label: 'parts order', at: [90, 27] },
        { id: 'g6', num: 6, label: 'courtesy car', at: [10, 77] },
        { id: 'g7', num: 7, label: 'ready time', at: [30, 77] },
        { id: 'g8', num: 8, label: 'handover', at: [50, 77] },
        { id: 'g9', num: 9, label: 'invoice', at: [70, 77] },
        { id: 'g10', num: 10, label: 'collect', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Unit 7 glossary (10 words)',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
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
    }
  ]
});
