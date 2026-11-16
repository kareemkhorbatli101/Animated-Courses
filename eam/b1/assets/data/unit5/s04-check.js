/* Unit 5 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s04', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 5.',
  video: 'u05v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 5 · Part 1', type: 'quizset',
      title: 'The Service Process — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does ‘diagnose’ mean?',
          options: [
            { t: 'To clean the car', ok: false,
              why: 'Not this one. To clean the car is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' },
            { t: 'To find out what is wrong', ok: true,
              why: 'Right — To find out what is wrong. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'To sell the car', ok: false,
              why: 'Not this one. To sell the car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' },
            { t: 'To drive fast', ok: false,
              why: 'Not this one. To drive fast is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does ‘diagnose’ mean”.' }
          ]
        },
        {
          q: '2. Where is the car cleaned?',
          options: [
            { t: 'Reception', ok: false,
              why: 'Not this one. Reception is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “Where is '
        + 'the car cleaned”.' },
            { t: 'Workshop', ok: false,
              why: 'Not this one. Workshop is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “Where is '
        + 'the car cleaned”.' },
            { t: 'Parts store', ok: false,
              why: 'Not this one. Parts store is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Where is the car cleaned”.' },
            { t: 'The valet', ok: true,
              why: 'Right — The valet. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' }
          ]
        },
        {
          q: '3. What is a quality check?',
          options: [
            { t: 'A final check before the car goes back', ok: true,
              why: 'Right — A final check before the car goes back. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' },
            { t: 'A type of tool', ok: false,
              why: 'Not this one. A type of tool is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a quality check”.' },
            { t: 'The first step', ok: false,
              why: 'Not this one. The first step is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a quality check”.' },
            { t: 'A fluid', ok: false,
              why: 'Not this one. A fluid is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a quality check”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 5 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The car is [[1]] in at reception.' + '<br>'
        + '2. Then it is [[2]] to find problems.' + '<br>'
        + '3. In the workshop, it is [[3]] .' + '<br>'
        + '4. Finally, it is [[4]] over to the customer.' + '<br>'
        + '</div>',
      answers: {
        '1': ['booked'],
        '2': ['inspected'],
        '3': ['serviced'],
        '4': ['handed']
      },
      bank: ['booked', 'inspected', 'serviced', 'handed'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>booked</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>inspected</i>, <i>serviced</i> in the bank.',
        '2': '<b>inspected</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>booked</i>, <i>serviced</i> in the bank.',
        '3': '<b>serviced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>booked</i>, <i>inspected</i> in the bank.',
        '4': '<b>handed</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>booked</i>, <i>inspected</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 5 · Part 1', type: 'writer',
      title: 'Write About the Process (short)',
      instruction: 'Write two or three sentences about the service process. Use three words '
        + 'from this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about the service process. Use three words '
        + 'from this unit.',
        words: [],
        must: ['The passive is used where the doer does not matter: “the car is checked”, '
        + 'not “the mechanic checks the car”.', 'Each passive is “be” + the past participle, and “be” agrees with its '
        + 'subject — the car “is” washed, the tyres “are” checked.', 'The steps are joined in order — first, then, after that, finally.', 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about the service process. Use three words '
        + 'from this unit.',
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
        task: 'Write two or three sentences about the service process. Use three words '
        + 'from this unit.',
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
    }
  ]
});
