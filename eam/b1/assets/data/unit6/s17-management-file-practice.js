/* Unit 6 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s17', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 6.',
  video: 'u06v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 6 · Part 7', type: 'cloze',
      title: 'Controlled Practice — Talking to the Customer',
      instruction: 'Complete with should, Shall, Could, or shouldn’t.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Your pads are worn. You [[1]] change them.' + '<br>'
        + '2. [[2]] I book you in for Tuesday?' + '<br>'
        + '3. [[3]] you sign the job card, please?' + '<br>'
        + '4. You [[4]] drive on worn brakes.' + '<br>'
        + '</div>',
      answers: {
        '1': ['should'],
        '2': ['Shall'],
        '3': ['Could'],
        '4': ['shouldn’t']
      },
      bank: ['should', 'Shall', 'Could', 'shouldn’t'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>should</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>Shall</i>, <i>Could</i> in the bank.',
        '2': '<b>Shall</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>should</i>, <i>Could</i> in the bank.',
        '3': '<b>Could</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>should</i>, <i>Shall</i> in the bank.',
        '4': '<b>shouldn’t</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>should</i>, <i>Shall</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 6 · Part 7', type: 'roleplay',
      title: 'Role-Play — Approving the Quote',
      instruction: 'In pairs. One is the advisor/manager; one is the customer. Use the model '
        + 'and cards.',
      scene: 'u6-dialogue6',
      roles: [{ who: 'rana', label: 'Card A · Rana' }, { who: 'aboud', label: 'Card B · Mr Aboud' }],
      briefs: [{ label: 'Card A', text: 'Advisor/Manager: advise which job is urgent, offer to show the quote, ask '
        + 'for approval' },
                { label: 'Card B', text: 'Customer: ask the price, ask which is most important, and decide' }],
      remember: ['Model exchange — Advisor: The pads are worn; you should change them for '
        + 'safety. — Customer: And the filter? — Advisor: Not urgent — you could '
        + 'wait. Shall I do the pads today? — Customer: Yes. — Advisor: Could you '
        + 'sign to approve?',
        'Stretch: the customer cannot pay for both jobs today — help them choose '
        + 'the safe one, and offer a plan for the other'],
      minWords: 30,
      modelScene: { id: 'u6-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'In pairs. One is the advisor/manager; one is the customer. Use the model '
        + 'and cards.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Advisor: The pads are worn; you should change them for safety. — Customer: '
        + 'And the filter? — Advisor: Not urgent — you could wait. Shall I do the '
        + 'pads today? — Customer: Yes. — Advisor: Could you sign to approve?'],
        criteria: [{ t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' },
                   { t: 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.' },
                   { t: 'The modal is followed by the plain verb with no “to” — “you should '
        + 'change”, never “you should to change”.' },
                   { t: 'The service jobs are named with this unit\'s words — oil change, tyre '
        + 'rotation, coolant flush — not “the usual things”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 6 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short service recommendation for the customer’s '
        + 'file: what is worn, what you advise, and what is urgent.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short service recommendation for the customer’s '
        + 'file: what is worn, what you advise, and what is urgent.',
        words: [],
        must: ['what is worn + your advice?', 'which is urgent?', 'modals used?', '50–80 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short service recommendation for the customer’s '
        + 'file: what is worn, what you advise, and what is urgent.',
        grammar: 'Modals for requests, offers and advice',
        reader: 'the teacher',
        must: ['what is worn + your advice?', 'which is urgent?', 'modals used?', '50–80 words?', 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Modals for requests, offers and advice',
        minWords: 40,
        taught: ['What a service includes, when each job is due, and how to ask, offer and '
        + 'advise without giving an order.'],
        task: 'You are Maher. Write a short service recommendation for the customer’s '
        + 'file: what is worn, what you advise, and what is urgent.',
        parts: ['what is worn + your advice?', 'which is urgent?', 'modals used?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'what is worn + your advice?' },
                   { t: 'which is urgent?' },
                   { t: 'modals used?' },
                   { t: '50–80 words?' },
                   { t: 'A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.' },
                   { t: 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.' }]
      }
    }
  ]
});
