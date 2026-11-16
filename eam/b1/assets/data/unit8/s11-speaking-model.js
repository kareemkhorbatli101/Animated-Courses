/* Unit 8 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s11', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 8.',
  video: 'u08v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 8 · Part 4', type: 'discuss',
      title: 'Discussing Quality and Warranty',
      instruction: 'Work with a partner. Ask and answer these questions. What must every car '
        + 'pass before it is handed over? Why mustn’t a garage hide a defect? What '
        + 'does a warranty mean for the customer?',
      minWords: 10,
      questions: [{ q: 'What must every car pass before it is handed over?' }, { q: 'Why mustn’t a garage hide a defect?' }, { q: 'What does a warranty mean for the customer?' }],
      ideas: ['Work with a partner. Ask and answer these questions. What must every car '
        + 'pass before it is handed over? Why mustn’t a garage hide a defect? What '
        + 'does a warranty mean for the customer?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Work with a partner. Ask and answer these questions. What must every car '
        + 'pass before it is handed over? Why mustn’t a garage hide a defect? What '
        + 'does a warranty mean for the customer?',
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
                   { t: 'The quality claim names what was checked, not just that it was checked.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 8 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Did it pass the road test?',
        'Are there any defects?',
        'Is every job signed off?',
        'Can it be handed over?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Did it pass the road test? · Are there any defects? · Is every job signed '
        + 'off? · Can it be handed over?'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
