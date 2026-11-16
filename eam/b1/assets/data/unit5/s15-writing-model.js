/* Unit 5 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s15', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 5.',
  video: 'u05v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 5 · Part 6', type: 'writer',
      title: 'Describe the Service Process (60–80 words)',
      instruction: 'Describe the service process from check-in to handover. Use the passive '
        + 'and sequencers.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Describe the service process from check-in to handover. Use the passive '
        + 'and sequencers.',
        words: ['is / are + past participle', 'booked in, inspected, serviced', 'road-tested, checked, handed over', 'First, Then, Next, Finally'],
        must: ['passive used throughout?', 'sequencers used?', 'the steps in order?', '60–80 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.'],
        planPlaceholder: 'First, the car is ___. Then it is ___. Next, the oil is ___. After that, '
        + 'it is ___. Finally, it is ___'
      },
      aiCheck: {
        task: 'Describe the service process from check-in to handover. Use the passive '
        + 'and sequencers.',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['passive used throughout?', 'sequencers used?', 'the steps in order?', '60–80 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'Describe the service process from check-in to handover. Use the passive '
        + 'and sequencers.',
        parts: ['passive used throughout?', 'sequencers used?', 'the steps in order?'],
        example: ['First, the car is ___. Then it is ___. Next, the oil is ___. After that, '
        + 'it is ___. Finally, it is ___'],
        criteria: [{ t: 'passive used throughout?' },
                   { t: 'sequencers used?' },
                   { t: 'the steps in order?' },
                   { t: '60–80 words?' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 5 · Part 6', type: 'writer',
      title: 'Why a Clear Process Matters (50–70 words)',
      instruction: 'Write why a clear service process is important. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why a clear service process is important. Give reasons.',
        words: ['… is important because…', 'nothing is forgotten', 'every car is checked', 'saves time / keeps cars safe'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why a clear service process is important. Give reasons.',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'Write why a clear service process is important. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 5 · Part 6', type: 'writer',
      title: 'Explaining the Process to a Customer (50–70 words)',
      instruction: 'Write a short note from Rana to a customer, explaining what will happen to '
        + 'their car.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short note from Rana to a customer, explaining what will happen to '
        + 'their car.',
        words: [],
        must: ['passive used?', 'steps in order?', 'polite and clear?', '50–70 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.'],
        planPlaceholder: 'Dear ___, First, your car is ___. Then it is ___. After that, it is ___. '
        + 'Finally, it is ___'
      },
      aiCheck: {
        task: 'Write a short note from Rana to a customer, explaining what will happen to '
        + 'their car.',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['passive used?', 'steps in order?', 'polite and clear?', '50–70 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'Write a short note from Rana to a customer, explaining what will happen to '
        + 'their car.',
        parts: ['passive used?', 'steps in order?', 'polite and clear?'],
        example: ['Dear ___, First, your car is ___. Then it is ___. After that, it is ___. '
        + 'Finally, it is ___'],
        criteria: [{ t: 'passive used?' },
                   { t: 'steps in order?' },
                   { t: 'polite and clear?' },
                   { t: '50–70 words?' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 5 · Part 6', type: 'writer',
      title: 'Reflection — A Process I Know (40–60 words)',
      instruction: 'Write about a process you know well (at work, at home, or in a shop). '
        + 'Describe the steps in order.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a process you know well (at work, at home, or in a shop). '
        + 'Describe the steps in order.',
        words: [],
        must: ['steps in order?', 'some passive used?', '40–60 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a process you know well (at work, at home, or in a shop). '
        + 'Describe the steps in order.',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['steps in order?', 'some passive used?', '40–60 words?', 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'Write about a process you know well (at work, at home, or in a shop). '
        + 'Describe the steps in order.',
        parts: ['steps in order?', 'some passive used?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'steps in order?' },
                   { t: 'some passive used?' },
                   { t: '40–60 words?' },
                   { t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' }]
      }
    }
  ]
});
