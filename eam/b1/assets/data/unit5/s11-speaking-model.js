/* Unit 5 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s11', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 5.',
  video: 'u05v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 5 · Part 4', type: 'discuss',
      title: 'Discussing the Process',
      instruction: 'Work with a partner. Ask and answer these questions. What are the main '
        + 'steps of the service process? Why is the order of the steps important? Why '
        + 'is no car handed over until it is checked?',
      minWords: 10,
      questions: [{ q: 'What are the main steps of the service process?' }, { q: 'Why is the order of the steps important?' }, { q: 'Why is no car handed over until it is checked?' }],
      ideas: ['Work with a partner. Ask and answer these questions. What are the main '
        + 'steps of the service process? Why is the order of the steps important? Why '
        + 'is no car handed over until it is checked?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Work with a partner. Ask and answer these questions. What are the main '
        + 'steps of the service process? Why is the order of the steps important? Why '
        + 'is no car handed over until it is checked?',
        parts: ['The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.', 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.' },
                   { t: 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 5 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Job card A; Student B looks at Job card '
        + 'B. Ask and answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['When was it booked in?',
        'Is it serviced yet?',
        'Is it road-tested?',
        'What is the next step?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Work in pairs. Student A looks at Job card A; Student B looks at Job card '
        + 'B. Ask and answer to find three differences. Do not show your card.',
        parts: ['The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.', 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['When was it booked in? · Is it serviced yet? · Is it road-tested? · What '
        + 'is the next step?'],
        criteria: [{ t: 'The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.' },
                   { t: 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
