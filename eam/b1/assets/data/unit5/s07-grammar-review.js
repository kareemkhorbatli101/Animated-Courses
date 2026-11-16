/* Unit 5 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s07', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 5.',
  video: 'u05v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 5 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'The car serviced by the mechanic.',
          accept: ['The car is serviced by the mechanic.'],
          why: 'The repaired sentence is “The car is serviced by the mechanic”. The fault '
        + 'is the one this unit’s focus box warns about — compare the two sentences '
        + 'word by word and the changed word is the rule.' },
        { wrong: 'The tyres is checked in the workshop.',
          accept: ['The tyres are checked in the workshop.'],
          why: 'The repaired sentence is “The tyres are checked in the workshop”. The '
        + 'fault is the one this unit’s focus box warns about — compare the two '
        + 'sentences word by word and the changed word is the rule.' },
        { wrong: 'The oil changed every service.',
          accept: ['The oil is changed every service.'],
          why: 'The repaired sentence is “The oil is changed every service”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' },
        { wrong: 'The car is hand over to the customer.',
          accept: ['The car is handed over to the customer.'],
          why: 'The repaired sentence is “The car is handed over to the customer”. The '
        + 'fault is the one this unit’s focus box warns about — compare the two '
        + 'sentences word by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 5 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Describe three steps of the service process. Use the passive (is / are + '
        + 'past participle).',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Describe three steps of the service process. Use the passive (is / are + '
        + 'past participle).',
        words: [],
        must: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.', 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Describe three steps of the service process. Use the passive (is / are + '
        + 'past participle).',
        grammar: 'The passive, for describing a process',
        reader: 'the teacher',
        must: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.', 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.']
      },
      coach: {
        title: 'Check your writing',
        target: 'The passive, for describing a process',
        minWords: 40,
        taught: ['How a car moves through the department, and how to describe a process when '
        + 'the doer does not matter.'],
        task: 'Describe three steps of the service process. Use the passive (is / are + '
        + 'past participle).',
        parts: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.' },
                   { t: 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 5 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which sentence is passive?',
          options: [
            { t: 'The mechanic services the car.', ok: false,
              why: 'Not this one. The mechanic services the car is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is passive”.' },
            { t: 'The car is serviced by the mechanic.', ok: true,
              why: 'Right — The car is serviced by the mechanic. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'The mechanic is servicing.', ok: false,
              why: 'Not this one. The mechanic is servicing is a real thing in a workshop, but '
        + 'it is not what the question asks about, and nothing in the material links '
        + 'it to “Which sentence is passive”.' },
            { t: 'The car services the mechanic.', ok: false,
              why: 'Not this one. The car services the mechanic is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which sentence is passive”.' }
          ]
        },
        {
          q: '2. Which sentence is correct?',
          options: [
            { t: 'The tyres are checked.', ok: true,
              why: 'Right — The tyres are checked. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'The tyres is checked.', ok: false,
              why: 'Not this one. The tyres is checked is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' },
            { t: 'The tyres checked.', ok: false,
              why: 'Not this one. The tyres checked is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which sentence is correct”.' },
            { t: 'The tyres be checked.', ok: false,
              why: 'Not this one. The tyres be checked is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “Which sentence is correct”.' }
          ]
        }
      ]
    }
  ]
});
