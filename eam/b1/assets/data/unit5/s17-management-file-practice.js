/* Unit 5 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s17', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 5.',
  video: 'u05v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 5 · Part 7', type: 'order',
      title: 'Controlled Practice — The Order of the Process',
      instruction: 'Number the steps of the service process in order. (0. is done.)',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [
        { id: 'b3', text: 'The car is road-tested' },
        { id: 'b4', text: 'The car is checked by the quality team' },
        { id: 'b5', text: 'The car is handed over to the customer' },
        { id: 'b1', text: 'The car is booked in' },
        { id: 'b2', text: 'The car is serviced in the workshop' }
      ],
      positions: ['b1', 'b2', 'b3', 'b4', 'b5'],
      whyTitle: 'Why this order',
      after: 'The book notes the order may vary a little. What may not vary is a step '
        + 'that keeps somebody safe coming before the work it protects.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 5 · Part 7', type: 'roleplay',
      title: 'Role-Play — Planning the Schedule',
      instruction: 'In pairs. One is the manager (Maher); one is the foreman (Nabil). Use the '
        + 'model and cards.',
      scene: 'u5-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'nabil', label: 'Card B · Nabil' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): share out the cars, say who does each job, and state the '
        + 'rule for handover' },
                { label: 'Card B', text: 'Foreman (Nabil): ask about the order and the other cars, and agree the plan' }],
      remember: ['Model exchange — Maher: Which car is first? — Nabil: Mr Aboud’s, a normal '
        + 'service. — Maher: Good. The second car is diagnosed by Lina. Every car is '
        + 'checked before handover. — Nabil: Understood.',
        'Stretch: one car needs a part that has not arrived — decide where to put '
        + 'it in the day’s order, and explain why'],
      minWords: 30,
      modelScene: { id: 'u5-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'In pairs. One is the manager (Maher); one is the foreman (Nabil). Use the '
        + 'model and cards.',
        parts: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Maher: Which car is first? — Nabil: Mr Aboud’s, a normal service. — Maher: '
        + 'Good. The second car is diagnosed by Lina. Every car is checked before '
        + 'handover. — Nabil: Understood.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 5 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write the plan for the day for the team. Say the order of '
        + 'the cars and the rule for handover.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write the plan for the day for the team. Say the order of '
        + 'the cars and the rule for handover.',
        words: [],
        must: ['the order clear?', 'passive used?', 'the handover rule stated?', '50–80 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write the plan for the day for the team. Say the order of '
        + 'the cars and the rule for handover.',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['the order clear?', 'passive used?', 'the handover rule stated?', '50–80 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'You are Maher. Write the plan for the day for the team. Say the order of '
        + 'the cars and the rule for handover.',
        parts: ['the order clear?', 'passive used?', 'the handover rule stated?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'the order clear?' },
                   { t: 'passive used?' },
                   { t: 'the handover rule stated?' },
                   { t: '50–80 words?' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' }]
      }
    }
  ]
});
