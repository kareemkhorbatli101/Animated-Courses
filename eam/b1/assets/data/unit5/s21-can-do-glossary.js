/* Unit 5 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s21', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 5.',
  video: 'u05v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 5 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u5-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the steps and the departments of the service process.' },
        { t: 'I can use the passive (is / are + past participle) to describe a process.' },
        { t: 'I can understand a customer explanation and a day plan.' },
        { t: 'I can explain the service process to a customer in writing.' },
        { t: 'I can plan a day’s service schedule (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the steps and the departments of the service process. I can use '
        + 'the passive (is / are + past participle) to describe a process. I can '
        + 'understand a customer explanation and a day plan. I can explain the '
        + 'service process to a customer in writing. I can plan a day’s service '
        + 'schedule (Practitioner).', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the steps and the departments of the service process. I can use '
        + 'the passive (is / are + past participle) to describe a process. I can '
        + 'understand a customer explanation and a day plan. I can' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 5 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 5 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'book in', at: [10, 27] },
        { id: 'g2', num: 2, label: 'inspect', at: [30, 27] },
        { id: 'g3', num: 3, label: 'diagnose', at: [50, 27] },
        { id: 'g4', num: 4, label: 'service', at: [70, 27] },
        { id: 'g5', num: 5, label: 'road-test', at: [90, 27] },
        { id: 'g6', num: 6, label: 'quality check', at: [10, 77] },
        { id: 'g7', num: 7, label: 'hand over', at: [30, 77] },
        { id: 'g8', num: 8, label: 'reception', at: [50, 77] },
        { id: 'g9', num: 9, label: 'workshop', at: [70, 77] },
        { id: 'g10', num: 10, label: 'invoice', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Unit 5 glossary (10 words)',
        parts: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' }]
      }
    }
  ]
});
