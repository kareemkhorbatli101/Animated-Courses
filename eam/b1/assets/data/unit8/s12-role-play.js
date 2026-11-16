/* Unit 8 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s12', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 8.',
  video: 'u08v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 8 · Part 4', type: 'roleplay',
      title: 'Warranty Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u8-dialogue4',
      roles: [{ who: 'aboud', label: 'Card A · Mr Aboud' }, { who: 'rana', label: 'Card B · Rana' }],
      briefs: [{ label: 'Card A', text: 'Service advisor: explain the warranty (what the customer doesn’t have to '
        + 'pay, what the garage has to do)' },
                { label: 'Card B', text: 'Customer: ask if it is free, ask about parts, and ask how long it will take' }],
      remember: ['Model exchange — Customer: My car has a fault, and it’s under warranty. — '
        + 'Advisor: Then you don’t have to pay. We’ll check it. — Customer: Will you '
        + 'use genuine parts? — Advisor: Yes, under warranty we have to. — Customer: '
        + 'Thank you.',
        'Stretch: a customer wants you to hide a small defect to save time — '
        + 'explain, firmly and politely, why you mustn’t'],
      minWords: 30,
      modelScene: { id: 'u8-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Customer: My car has a fault, and it’s under warranty. — Advisor: Then you '
        + 'don’t have to pay. We’ll check it. — Customer: Will you use genuine parts? '
        + '— Advisor: Yes, under warranty we have to. — Customer: Thank you.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 8 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Explain the quality rules at a '
        + 'good garage. Use must, have to, and mustn’t.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'Prepare a short talk (about one minute). Explain the quality rules at a '
        + 'good garage. Use must, have to, and mustn’t.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' },
                   { t: 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.' },
                   { t: 'The warranty words are used correctly: a “recall” comes from the carmaker, '
        + 'a “guarantee” is the garage\'s own promise.' },
                   { t: 'The quality claim names what was checked, not just that it was checked.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
