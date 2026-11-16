/* Unit 9 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s11', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 9.',
  video: 'u09v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 9 · Part 4', type: 'discuss',
      title: 'Discussing Repairs',
      instruction: 'Work with a partner. Ask and answer these questions. How does a mechanic '
        + 'find a fault, step by step? Have you ever fixed something difficult? What '
        + 'was it? Why must a garage take every comeback seriously?',
      minWords: 10,
      questions: [{ q: 'How does a mechanic find a fault, step by step?' }, { q: 'Have you ever fixed something difficult?' }, { q: 'What was it?' }, { q: 'Why must a garage take every comeback seriously?' }],
      ideas: ['First, I look at…',
        'Have you ever…?',
        'I’ve already…',
        'It has come back…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Work with a partner. Ask and answer these questions. How does a mechanic '
        + 'find a fault, step by step? Have you ever fixed something difficult? What '
        + 'was it? Why must a garage take every comeback seriously?',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['First, I look at… · Have you ever…? · I’ve already… · It has come back…'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 9 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Is the warning light on?',
        'What is the symptom?',
        'What has failed?',
        'Has the part arrived?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and '
        + 'answer to find three differences. Do not show your card.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Is the warning light on? · What is the symptom? · What has failed? · Has '
        + 'the part arrived?'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
