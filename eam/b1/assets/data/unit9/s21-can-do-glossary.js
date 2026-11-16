/* Unit 9 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s21', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 9.',
  video: 'u09v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 9 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u9-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main fault-finding and repair words.' },
        { t: 'I can use the past simple and the present perfect correctly.' },
        { t: 'I can understand a diagnosis and a comeback conversation.' },
        { t: 'I can write a repair note or a comeback report.' },
        { t: 'I can handle a comeback and a warranty repair (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main fault-finding and repair words. I can use the past '
        + 'simple and the present perfect correctly. I can understand a diagnosis and '
        + 'a comeback conversation. I can write a repair note or a comeback report. I '
        + 'can handle a comeback and a warranty repair (Practitioner).', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main fault-finding and repair words. I can use the past '
        + 'simple and the present perfect correctly. I can understand a diagnosis and '
        + 'a comeback conversation. I can write a repair note or' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 9 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 9 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'symptom', at: [10, 27] },
        { id: 'g2', num: 2, label: 'diagnose', at: [30, 27] },
        { id: 'g3', num: 3, label: 'warning light', at: [50, 27] },
        { id: 'g4', num: 4, label: 'repair', at: [70, 27] },
        { id: 'g5', num: 5, label: 'replace', at: [90, 27] },
        { id: 'g6', num: 6, label: 'comeback', at: [10, 77] },
        { id: 'g7', num: 7, label: 'reconditioned part', at: [30, 77] },
        { id: 'g8', num: 8, label: 'fault-find', at: [50, 77] },
        { id: 'g9', num: 9, label: 'warranty repair', at: [70, 77] },
        { id: 'g10', num: 10, label: 'road-test', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Unit 9 glossary (10 words)',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' }]
      }
    }
  ]
});
