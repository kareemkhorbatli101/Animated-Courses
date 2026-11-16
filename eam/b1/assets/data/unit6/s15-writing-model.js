/* Unit 6 §15 — Part 6 - Writing, the model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s15', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 6 - Writing, the model', part: '6', section: '15',
          lesson: 'Part 6 - Writing, the model', title: 'Part 6 - Writing, the model' },
  objective: 'Work through Part 6 - Writing, the model of unit 6.',
  video: 'u06v15',
  prev: 's14-reading-comprehension', prevLabel: 'Part 5 - Reading, comprehension',
  next: 's16-management-file-dialogue', nextLabel: 'Part 7 - Management File, dialogue',
  cards: [
    {
      id: 'c1', covers: ['Part 6'], ref: '6A',
      bookRef: 'Unit 6 · Part 6', type: 'writer',
      title: 'Advise a Customer (50–70 words)',
      instruction: 'Write to a customer after a service. Give advice about a worn part, and '
        + 'offer to help. Use modals.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write to a customer after a service. Give advice about a worn part, and '
        + 'offer to help. Use modals.',
        words: ['You should…', 'Shall I…?', 'Could you…?', 'not urgent — you could…'],
        must: ['advice (should) used?', 'an offer (Shall I) used?', 'polite and honest?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.'],
        planPlaceholder: 'Thank you… The service is done… However, your ___ is worn, so you should '
        + '___. Shall I ___? You could ___'
      },
      aiCheck: {
        task: 'Write to a customer after a service. Give advice about a worn part, and '
        + 'offer to help. Use modals.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['advice (should) used?', 'an offer (Shall I) used?', 'polite and honest?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'Write to a customer after a service. Give advice about a worn part, and '
        + 'offer to help. Use modals.',
        parts: ['advice (should) used?', 'an offer (Shall I) used?', 'polite and honest?'],
        example: ['Thank you… The service is done… However, your ___ is worn, so you should '
        + '___. Shall I ___? You could ___'],
        criteria: [{ t: 'advice (should) used?' },
                   { t: 'an offer (Shall I) used?' },
                   { t: 'polite and honest?' },
                   { t: '50–70 words?' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 6'], ref: '6B',
      bookRef: 'Unit 6 · Part 6', type: 'writer',
      title: 'Why Honest Servicing Matters (50–70 words)',
      instruction: 'Write why honest servicing is important. Give reasons.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write why honest servicing is important. Give reasons.',
        words: ['… is important because…', 'only do the work the car needs', 'builds trust', 'a happy customer tells his friends'],
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write why honest servicing is important. Give reasons.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['a clear opinion?', 'two or three reasons?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'Write why honest servicing is important. Give reasons.',
        parts: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear opinion?' },
                   { t: 'two or three reasons?' },
                   { t: '50–70 words?' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 6'], ref: '6C',
      bookRef: 'Unit 6 · Part 6', type: 'writer',
      title: 'A Service Note (50–70 words)',
      instruction: 'Write a short note from the mechanic to the service advisor about a car’s '
        + 'condition and your advice.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write a short note from the mechanic to the service advisor about a car’s '
        + 'condition and your advice.',
        words: [],
        must: ['clear advice + a request?', 'which job is urgent?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        planPlaceholder: 'I have finished ___. The ___ is worn, so we should advise ___. The ___ can '
        + 'wait. Could you ___?'
      },
      aiCheck: {
        task: 'Write a short note from the mechanic to the service advisor about a car’s '
        + 'condition and your advice.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['clear advice + a request?', 'which job is urgent?', '50–70 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'Write a short note from the mechanic to the service advisor about a car’s '
        + 'condition and your advice.',
        parts: ['clear advice + a request?', 'which job is urgent?', '50–70 words?'],
        example: ['I have finished ___. The ___ is worn, so we should advise ___. The ___ can '
        + 'wait. Could you ___?'],
        criteria: [{ t: 'clear advice + a request?' },
                   { t: 'which job is urgent?' },
                   { t: '50–70 words?' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' }]
      }
    },
    {
      id: 'c4', covers: ['Part 6'], ref: '6D',
      bookRef: 'Unit 6 · Part 6', type: 'writer',
      title: 'Reflection — Honest Advice (40–60 words)',
      instruction: 'Write about a time someone gave you honest advice, or you gave honest '
        + 'advice to someone.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write about a time someone gave you honest advice, or you gave honest '
        + 'advice to someone.',
        words: [],
        must: ['a clear story?', 'some advice language?', '40–60 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write about a time someone gave you honest advice, or you gave honest '
        + 'advice to someone.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['a clear story?', 'some advice language?', '40–60 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'Write about a time someone gave you honest advice, or you gave honest '
        + 'advice to someone.',
        parts: ['a clear story?', 'some advice language?', '40–60 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'a clear story?' },
                   { t: 'some advice language?' },
                   { t: '40–60 words?' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' }]
      }
    }
  ]
});
