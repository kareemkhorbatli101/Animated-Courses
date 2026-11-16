/* Unit 5 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s12', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 5.',
  video: 'u05v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 5 · Part 4', type: 'roleplay',
      title: 'Explaining the Process Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u5-dialogue4',
      roles: [{ who: 'rana', label: 'Card A · Rana' }, { who: 'aboud', label: 'Card B · Mr Aboud' }],
      briefs: [{ label: 'Card A', text: 'Service advisor: explain the process to the customer, step by step (use '
        + 'the passive)' },
                { label: 'Card B', text: 'Customer: ask what happens at each step, and when the car will be ready' }],
      remember: ['Model exchange — Rana: First, your car is booked in and a job card is '
        + 'made. — Customer: Then what? — Rana: Then it is inspected and serviced. — '
        + 'Customer: And before I get it back? — Rana: It is road-tested and checked, '
        + 'then handed over.',
        'Stretch: the customer wants the car back before the quality check is done '
        + '— explain, politely, why every car must be checked first'],
      minWords: 30,
      modelScene: { id: 'u5-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Rana: First, your car is booked in and a job card is made. — Customer: '
        + 'Then what? — Rana: Then it is inspected and serviced. — Customer: And '
        + 'before I get it back? — Rana: It is road-tested and checked, then handed '
        + 'over.'],
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
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 5 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Describe the service process from '
        + 'check-in to handover. Use the passive.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Prepare a short talk (about one minute). Describe the service process from '
        + 'check-in to handover. Use the passive.',
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
        + 'customer leaving.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
