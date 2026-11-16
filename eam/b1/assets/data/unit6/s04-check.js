/* Unit 6 §4 — Part 1 - Check.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s04', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 1 - Check', part: '1', section: '4',
          lesson: 'Part 1 - Check', title: 'Part 1 - Check' },
  objective: 'Work through Part 1 - Check of unit 6.',
  video: 'u06v04',
  prev: 's03-pronunciation', prevLabel: 'Part 1 - Pronunciation',
  next: 's05-grammar-notice', nextLabel: 'Part 2 - Grammar, notice',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 6 · Part 1', type: 'quizset',
      title: 'Servicing — Multiple Choice',
      instruction: 'Read and choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is tyre rotation?',
          options: [
            { t: 'Changing the oil', ok: false,
              why: 'Not this one. Changing the oil is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is tyre rotation”.' },
            { t: 'Cleaning the car', ok: false,
              why: 'Not this one. Cleaning the car is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What is tyre rotation”.' },
            { t: 'Checking the battery', ok: false,
              why: 'Not this one. Checking the battery is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “What is tyre rotation”.' },
            { t: 'Moving the tyres so they wear evenly', ok: true,
              why: 'Right — Moving the tyres so they wear evenly. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '2. What is a service interval?',
          options: [
            { t: 'A type of oil', ok: false,
              why: 'Not this one. A type of oil is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a service interval”.' },
            { t: 'The time or distance between services', ok: true,
              why: 'Right — The time or distance between services. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' },
            { t: 'A tool', ok: false,
              why: 'Not this one. A tool is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What is a '
        + 'service interval”.' },
            { t: 'A fault', ok: false,
              why: 'Not this one. A fault is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a service interval”.' }
          ]
        },
        {
          q: '3. What do brake pads do?',
          options: [
            { t: 'Cool the engine', ok: false,
              why: 'Not this one. Cool the engine is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What do brake pads do”.' },
            { t: 'Clean the air', ok: false,
              why: 'Not this one. Clean the air is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What do brake pads do”.' },
            { t: 'Press to stop the car', ok: true,
              why: 'Right — Press to stop the car. Check it against the text or the card you '
        + 'met it on: this is stated, not inferred.' },
            { t: 'Light the fuel', ok: false,
              why: 'Not this one. Light the fuel is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What do brake pads do”.' }
          ]
        }
      ]
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 6 · Part 1', type: 'cloze',
      title: 'Vocabulary Fill-in',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. At every service, the [[1]] is changed.' + '<br>'
        + '2. The air [[2]] is replaced to keep the air clean.' + '<br>'
        + '3. Worn brake [[3]] must be changed.' + '<br>'
        + '4. The service [[4]] says when to do each job.' + '<br>'
        + '</div>',
      answers: {
        '1': ['oil'],
        '2': ['filter'],
        '3': ['pads'],
        '4': ['schedule']
      },
      bank: ['oil', 'filter', 'pads', 'schedule'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>oil</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>filter</i>, <i>pads</i> in the bank.',
        '2': '<b>filter</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>pads</i> in the bank.',
        '3': '<b>pads</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>oil</i>, <i>filter</i> in the bank.',
        '4': '<b>schedule</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>oil</i>, <i>filter</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 6 · Part 1', type: 'writer',
      title: 'Write About a Service (short)',
      instruction: 'Write two or three sentences about a routine service. Use three words from '
        + 'this unit.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write two or three sentences about a routine service. Use three words from '
        + 'this unit.',
        words: [],
        must: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.', 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.', 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write two or three sentences about a routine service. Use three words from '
        + 'this unit.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.', 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.', 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'Write two or three sentences about a routine service. Use three words from '
        + 'this unit.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' }]
      }
    }
  ]
});
