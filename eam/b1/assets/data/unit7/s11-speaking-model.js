/* Unit 7 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s11', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 7.',
  video: 'u07v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 7 · Part 4', type: 'discuss',
      title: 'Discussing the Service Desk',
      instruction: 'Work with a partner. Ask and answer these questions. What happens step by '
        + 'step when a customer books a service? Why is an estimate important before '
        + 'the work starts? What can a garage offer if a job takes more than a day?',
      minWords: 10,
      questions: [{ q: 'What happens step by step when a customer books a service?' }, { q: 'Why is an estimate important before the work starts?' }, { q: 'What can a garage offer if a job takes more than a day?' }],
      ideas: ['Work with a partner. Ask and answer these questions. What happens step by '
        + 'step when a customer books a service? Why is an estimate important before '
        + 'the work starts? What can a garage offer if a job takes more than a day?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Work with a partner. Ask and answer these questions. What happens step by '
        + 'step when a customer books a service? Why is an estimate important before '
        + 'the work starts? What can a garage offer if a job takes more than a day?',
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
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 7 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Booking A; Student B looks at Booking B. '
        + 'Ask and answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Which day is the booking?',
        'What is the job?',
        'When will it be ready?',
        'Is there a courtesy car?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Work in pairs. Student A looks at Booking A; Student B looks at Booking B. '
        + 'Ask and answer to find three differences. Do not show your card.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Which day is the booking? · What is the job? · When will it be ready? · Is '
        + 'there a courtesy car?'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
