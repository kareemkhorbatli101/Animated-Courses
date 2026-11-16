/* Unit 6 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s12', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 6.',
  video: 'u06v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 6 · Part 4', type: 'roleplay',
      title: 'Advising a Customer Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u6-dialogue4',
      roles: [{ who: 'rana', label: 'Card A · Rana' }, { who: 'aboud', label: 'Card B · Mr Aboud' }],
      briefs: [{ label: 'Card A', text: 'Service advisor: give advice about a worn part, offer to show the quote, '
        + 'and ask the customer to approve' },
                { label: 'Card B', text: 'Customer: ask about the price, ask which job is most important, and decide' }],
      remember: ['Model exchange — Advisor: Your brake pads are worn. You should change them '
        + 'soon. — Customer: How much? — Advisor: Shall I show you the quote? The '
        + 'pads are important for safety. — Customer: OK, please do the pads. — '
        + 'Advisor: Could you sign here to approve?',
        'Stretch: the customer wants to do only the cheapest job, but a safety part '
        + 'is worn — advise honestly which one must be done, and why'],
      minWords: 30,
      modelScene: { id: 'u6-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Advisor: Your brake pads are worn. You should change them soon. — '
        + 'Customer: How much? — Advisor: Shall I show you the quote? The pads are '
        + 'important for safety. — Customer: OK, please do the pads. — Advisor: Could '
        + 'you sign here to approve?'],
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
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 6 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Explain what is done at a full '
        + 'service, and give one piece of advice to a customer.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'Modals for requests, offers and advice',
        task: 'Prepare a short talk (about one minute). Explain what is done at a full '
        + 'service, and give one piece of advice to a customer.',
        parts: ['A request to the customer is a question with “can”, “could” or “would”, '
        + 'not a bare order.', 'An offer uses “I\'ll” or “Shall I” — you are volunteering, not predicting.', 'Advice uses “should” or “shouldn\'t”, which leaves the decision with the '
        + 'customer; “must” takes it away from them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
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
    }
  ]
});
