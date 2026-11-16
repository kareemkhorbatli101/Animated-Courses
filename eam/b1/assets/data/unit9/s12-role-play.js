/* Unit 9 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s12', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 9.',
  video: 'u09v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 9 · Part 4', type: 'roleplay',
      title: 'The Comeback Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u9-dialogue4',
      roles: [{ who: 'aboud', label: 'Card A · Mr Aboud' }, { who: 'rana', label: 'Card B · Rana' }],
      briefs: [{ label: 'Card A', text: 'Customer: explain that a fault has come back, say what was done last week, '
        + 'and ask if you have to pay' },
                { label: 'Card B', text: 'Service advisor: apologise, ask what was done, explain the comeback and '
        + 'the guarantee, and say what you will do' }],
      remember: ['Model exchange — Customer: I brought my car last week, but the noise has '
        + 'come back. — Advisor: I’m sorry. What did we do last week? — Customer: You '
        + 'replaced the pads. — Advisor: It’s a comeback, so you don’t have to pay. '
        + 'We’ll diagnose it again today.',
        'Stretch: the comeback is a different fault, not the old one — explain '
        + 'honestly what has happened and what is free and what is not'],
      minWords: 30,
      modelScene: { id: 'u9-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Customer: I brought my car last week, but the noise has come back. — '
        + 'Advisor: I’m sorry. What did we do last week? — Customer: You replaced the '
        + 'pads. — Advisor: It’s a comeback, so you don’t have to pay. We’ll diagnose '
        + 'it again today.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 9 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Explain how you find and fix a '
        + 'fault. Use the past simple and the present perfect.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'The present perfect against the past simple',
        task: 'Prepare a short talk (about one minute). Explain how you find and fix a '
        + 'fault. Use the past simple and the present perfect.',
        parts: ['A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.', 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.', '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'A finished time — yesterday, last week, on Monday, in 2023 — takes the '
        + 'past simple, never “have done”.' },
                   { t: 'A result the customer can see now takes the present perfect: “the warning '
        + 'light has gone out”.' },
                   { t: '“have/has” + the past participle, with the right participle — “has come '
        + 'back”, not “has came back”.' },
                   { t: 'A symptom is described before a cause is named — what the car does, then '
        + 'what you think is wrong.' },
                   { t: 'A comeback is written up without blaming the customer, and says what was '
        + 'done about it.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
