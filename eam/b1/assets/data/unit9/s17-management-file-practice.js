/* Unit 9 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s17', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 9.',
  video: 'u09v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 9 · Part 7', type: 'cloze',
      title: 'Controlled Practice — The Comeback',
      instruction: 'Complete with the past simple or present perfect.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Last week, we [[1]] the pads.' + '<br>'
        + '2. The noise [[2]] come back.' + '<br>'
        + '3. [[3]] you found the cause yet?' + '<br>'
        + '4. Lina [[4]] the fault this morning.' + '<br>'
        + '</div>',
      answers: {
        '1': ['replaced'],
        '2': ['has'],
        '3': ['Have'],
        '4': ['diagnosed']
      },
      bank: ['replaced', 'has', 'Have', 'diagnosed'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>replaced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>has</i>, <i>Have</i> in the bank.',
        '2': '<b>has</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>replaced</i>, <i>Have</i> in the bank.',
        '3': '<b>Have</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>replaced</i>, <i>has</i> in the bank.',
        '4': '<b>diagnosed</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>replaced</i>, <i>has</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 9 · Part 7', type: 'roleplay',
      title: 'Role-Play — Handling the Comeback',
      instruction: 'In pairs. One is the manager (Maher); one is the technician (Lina). Use '
        + 'the model and cards.',
      scene: 'u9-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'lina', label: 'Card B · Lina' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): ask about the diagnosis, what was done last week, and the '
        + 'real cause; decide it is free' },
                { label: 'Card B', text: 'Technician (Lina): report the past repair, the present result, and the new '
        + 'cause' }],
      remember: ['Model exchange — Maher: Have you diagnosed the comeback? — Lina: Yes. We '
        + 'replaced the pads last week, but a small clip has failed. — Maher: It’s a '
        + 'comeback, so we fix it for free. Have you ordered the clip? — Lina: It '
        + 'arrived an hour ago.',
        'Stretch: the customer is angry that the car came back — stay calm, explain '
        + 'what has happened, and rebuild their trust'],
      minWords: 30,
      modelScene: { id: 'u9-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'In pairs. One is the manager (Maher); one is the technician (Lina). Use '
        + 'the model and cards.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Maher: Have you diagnosed the comeback? — Lina: Yes. We replaced the pads '
        + 'last week, but a small clip has failed. — Maher: It’s a comeback, so we '
        + 'fix it for free. Have you ordered the clip? — Lina: It arrived an hour '
        + 'ago.'],
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
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 9 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short comeback report for the car’s file: what was '
        + 'done, what has come back, the real cause, and the action.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short comeback report for the car’s file: what was '
        + 'done, what has come back, the real cause, and the action.',
        words: [],
        must: ['past simple + present perfect?', 'the real cause?', 'the action and ‘free’?', '50–80 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short comeback report for the car’s file: what was '
        + 'done, what has come back, the real cause, and the action.',
        grammar: 'The present perfect against the past simple',
        reader: 'the teacher',
        must: ['past simple + present perfect?', 'the real cause?', 'the action and ‘free’?', '50–80 words?', 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The present perfect against the past simple',
        minWords: 40,
        taught: ['Finding a fault from its symptoms, saying what has been done to the car, '
        + 'and handling a car that comes back.'],
        task: 'You are Maher. Write a short comeback report for the car’s file: what was '
        + 'done, what has come back, the real cause, and the action.',
        parts: ['past simple + present perfect?', 'the real cause?', 'the action and ‘free’?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'past simple + present perfect?' },
                   { t: 'the real cause?' },
                   { t: 'the action and ‘free’?' },
                   { t: '50–80 words?' },
                   { t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' }]
      }
    }
  ]
});
