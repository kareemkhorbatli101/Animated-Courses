/* Unit 6 §7 — Part 2 - Grammar, review.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s07', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 2 - Grammar, review', part: '2', section: '7',
          lesson: 'Part 2 - Grammar, review', title: 'Part 2 - Grammar, review' },
  objective: 'Work through Part 2 - Grammar, review of unit 6.',
  video: 'u06v07',
  prev: 's06-grammar-practice', prevLabel: 'Part 2 - Grammar, practice',
  next: 's08-listening-1', nextLabel: 'Part 3 - Listening 1',
  cards: [
    {
      id: 'c1', covers: ['Part 2'], ref: '2A',
      bookRef: 'Unit 6 · Part 2', type: 'editor',
      title: 'Correct the Sentence',
      instruction: 'Each sentence has one grammar mistake. Write the correct sentence.',
      write: true,
      items: [
        { wrong: 'You should to change the oil.',
          accept: ['You should change the oil.'],
          why: 'The repaired sentence is “You should change the oil”. The fault is the one '
        + 'this unit’s focus box warns about — compare the two sentences word by word '
        + 'and the changed word is the rule.' },
        { wrong: 'Can you to check the brakes?',
          accept: ['Can you check the brakes?.'],
          why: 'The repaired sentence is “Can you check the brakes?”. The fault is the one '
        + 'this unit’s focus box warns about — compare the two sentences word by word '
        + 'and the changed word is the rule.' },
        { wrong: 'Shall I to top up the coolant?',
          accept: ['Shall I top up the coolant?.'],
          why: 'The repaired sentence is “Shall I top up the coolant?”. The fault is the '
        + 'one this unit’s focus box warns about — compare the two sentences word by '
        + 'word and the changed word is the rule.' },
        { wrong: 'You should not drives on worn tyres.',
          accept: ['You shouldn’t drive on worn tyres.'],
          why: 'The repaired sentence is “You shouldn’t drive on worn tyres”. The fault is '
        + 'the one this unit’s focus box warns about — compare the two sentences word '
        + 'by word and the changed word is the rule.' }
      ],
      whyTitle: 'The fault in each sentence'
    },
    {
      id: 'c2', covers: ['Part 2'], ref: '2B',
      bookRef: 'Unit 6 · Part 2', type: 'writer',
      title: 'Freer Practice',
      instruction: 'Write one request, one offer, and one piece of advice you could say to a '
        + 'customer.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'Write one request, one offer, and one piece of advice you could say to a '
        + 'customer.',
        words: [],
        must: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.', 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.', 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'Write one request, one offer, and one piece of advice you could say to a '
        + 'customer.',
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
        task: 'Write one request, one offer, and one piece of advice you could say to a '
        + 'customer.',
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
    },
    {
      id: 'c3', covers: ['Part 2'], ref: '2C',
      bookRef: 'Unit 6 · Part 2', type: 'quizset',
      title: 'Grammar Review',
      instruction: 'Choose the correct answer.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Which is a polite request?',
          options: [
            { t: 'Could you check the tyres, please?', ok: true,
              why: 'Right — Could you check the tyres, please?. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'You check the tyres.', ok: false,
              why: 'Not this one. You check the tyres is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which is a polite request”.' },
            { t: 'Check tyres you.', ok: false,
              why: 'Not this one. Check tyres you is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Which is a polite request”.' },
            { t: 'Tyres check please.', ok: false,
              why: 'Not this one. Tyres check please is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“Which is a polite request”.' }
          ]
        },
        {
          q: '2. Which is correct advice?',
          options: [
            { t: 'You should to change the oil.', ok: false,
              why: 'Not this one. You should to change the oil is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is correct advice”.' },
            { t: 'You should change the oil.', ok: true,
              why: 'Right — You should change the oil. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'You should changing the oil.', ok: false,
              why: 'Not this one. You should changing the oil is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is correct advice”.' },
            { t: 'You should changes the oil.', ok: false,
              why: 'Not this one. You should changes the oil is a real thing in a workshop, '
        + 'but it is not what the question asks about, and nothing in the material '
        + 'links it to “Which is correct advice”.' }
          ]
        }
      ]
    }
  ]
});
