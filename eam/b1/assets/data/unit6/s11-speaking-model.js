/* Unit 6 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s11', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 6.',
  video: 'u06v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 6 · Part 4', type: 'discuss',
      title: 'Discussing Servicing',
      instruction: 'Work with a partner. Ask and answer these questions. What jobs are done at '
        + 'a full service? Why should a mechanic give honest advice? How do you '
        + 'politely tell a customer a part is worn?',
      minWords: 10,
      questions: [{ q: 'What jobs are done at a full service?' }, { q: 'Why should a mechanic give honest advice?' }, { q: 'How do you politely tell a customer a part is worn?' }],
      ideas: ['You should…',
        'Shall I…?',
        'Could you…?',
        'I advise you to…',
        'You don’t need…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Work with a partner. Ask and answer these questions. What jobs are done at '
        + 'a full service? Why should a mechanic give honest advice? How do you '
        + 'politely tell a customer a part is worn?',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['You should… · Shall I…? · Could you…? · I advise you to… · You don’t need…'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 6 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Service A; Student B looks at Service B. '
        + 'Ask and answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Is the air filter changed?',
        'Are the tyres rotated?',
        'Are the spark plugs replaced?',
        'What is checked?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Work in pairs. Student A looks at Service A; Student B looks at Service B. '
        + 'Ask and answer to find three differences. Do not show your card.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Is the air filter changed? · Are the tyres rotated? · Are the spark plugs '
        + 'replaced? · What is checked?'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
