/* Unit 7 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s12', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 7.',
  video: 'u07v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 7 · Part 4', type: 'roleplay',
      title: 'Booking Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u7-dialogue4',
      roles: [{ who: 'rana', label: 'Card A · Rana' }, { who: 'aboud', label: 'Card B · Mr Aboud' }],
      briefs: [{ label: 'Card A', text: 'Service advisor: take the booking, give a day and time, an estimate, and a '
        + 'ready time (use will / going to)' },
                { label: 'Card B', text: 'Customer: ask how long it will take, the price, and when it will be ready' }],
      remember: ['Model exchange — Advisor: I’ll book you in for Tuesday at nine. — '
        + 'Customer: How long will it take? — Advisor: About three hours. Your car '
        + 'will be ready at twelve. — Customer: And the price? — Advisor: I’ll give '
        + 'you an estimate now.',
        'Stretch: the customer wants the car back today, but a part will not arrive '
        + 'until tomorrow — give an honest ready time and offer a courtesy car'],
      minWords: 30,
      modelScene: { id: 'u7-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Advisor: I’ll book you in for Tuesday at nine. — Customer: How long will '
        + 'it take? — Advisor: About three hours. Your car will be ready at twelve. — '
        + 'Customer: And the price? — Advisor: I’ll give you an estimate now.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 7 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Explain what happens at the '
        + 'service desk, from booking to handover. Use future forms.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'Future forms: will, going to, and the present continuous',
        task: 'Prepare a short talk (about one minute). Explain what happens at the '
        + 'service desk, from booking to handover. Use future forms.',
        parts: ['A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.', 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.', 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A plan already made before you spoke uses “going to”; a decision you make '
        + 'as you speak uses “\'ll”.' },
                   { t: 'A fixed appointment with a time uses the present continuous — “we\'re '
        + 'collecting it at four”.' },
                   { t: 'A promise about a ready time is given with “will”, and the time is an '
        + 'actual time, not “soon”.' },
                   { t: 'The desk words are used exactly — estimate, deposit, invoice, handover — '
        + 'and an estimate is never called a bill.' },
                   { t: 'The customer is told the price “before” the work, which is what an '
        + 'estimate is for.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
