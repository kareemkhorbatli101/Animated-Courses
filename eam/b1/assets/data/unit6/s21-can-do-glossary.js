/* Unit 6 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s21', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 6.',
  video: 'u06v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 6 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u6-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main routine-maintenance jobs and why we do them.' },
        { t: 'I can make polite requests and offers, and give advice, using modals.' },
        { t: 'I can understand a customer conversation and a service schedule.' },
        { t: 'I can advise a customer honestly in writing.' },
        { t: 'I can approve a service quote with a customer (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main routine-maintenance jobs and why we do them. I can '
        + 'make polite requests and offers, and give advice, using modals. I can '
        + 'understand a customer conversation and a service schedule. I can advise a '
        + 'customer honestly in writing. I can approve a service quote with a '
        + 'customer (Practitioner).', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main routine-maintenance jobs and why we do them. I can '
        + 'make polite requests and offers, and give advice, using modals. I can '
        + 'understand a customer conversation and a service schedule.' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 6 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 6 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'oil change', at: [10, 27] },
        { id: 'g2', num: 2, label: 'air filter', at: [30, 27] },
        { id: 'g3', num: 3, label: 'brake pads', at: [50, 27] },
        { id: 'g4', num: 4, label: 'tyre rotation', at: [70, 27] },
        { id: 'g5', num: 5, label: 'spark plugs', at: [90, 27] },
        { id: 'g6', num: 6, label: 'service schedule', at: [10, 77] },
        { id: 'g7', num: 7, label: 'interval', at: [30, 77] },
        { id: 'g8', num: 8, label: 'mileage', at: [50, 77] },
        { id: 'g9', num: 9, label: 'coolant flush', at: [70, 77] },
        { id: 'g10', num: 10, label: 'maintenance', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Unit 6 glossary (10 words)',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' }]
      }
    }
  ]
});
