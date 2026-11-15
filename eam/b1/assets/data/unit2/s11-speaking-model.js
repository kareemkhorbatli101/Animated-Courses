/* Unit 2 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s11', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 2.',
  video: 'u02v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 2 · Part 4', type: 'discuss',
      title: 'Discussing Systems and Fluids',
      instruction: 'Work with a partner. Ask and answer these questions. Which fluids does a '
        + 'car need? Name three. What can happen if there isn’t enough oil or '
        + 'coolant? How often should a driver check the fluids?',
      minWords: 10,
      questions: [{ q: 'Which fluids does a car need?' }, { q: 'What can happen if there isn’t enough oil or coolant?' }, { q: 'How often should a driver check the fluids?' }],
      ideas: ['Work with a partner. Ask and answer these questions. Which fluids does a '
        + 'car need? Name three. What can happen if there isn’t enough oil or '
        + 'coolant? How often should a driver check the fluids?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Work with a partner. Ask and answer these questions. Which fluids does a '
        + 'car need? Name three. What can happen if there isn’t enough oil or '
        + 'coolant? How often should a driver check the fluids?',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 2 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Is there any…?',
        'How much…?',
        'How many…?',
        'Is the … full or low?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
        parts: ['Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.', '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.', '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.'],
        example: ['Is there any…? · How much…? · How many…? · Is the … full or low?'],
        criteria: [{ t: 'Every sentence that says what exists uses <b>there is</b> or <b>there '
        + 'are</b>, and the one you chose matches one thing or more than one.' },
                   { t: '<b>much</b> goes with what you cannot count — oil, coolant, water; '
        + '<b>many</b> goes with what you can — filters, tyres, litres.' },
                   { t: '<b>any</b> is in your questions and your negatives; <b>some</b> is in your '
        + 'positive statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
