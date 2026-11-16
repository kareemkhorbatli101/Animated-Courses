/* Unit 8 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s17', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 8.',
  video: 'u08v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 8 · Part 7', type: 'cloze',
      title: 'Controlled Practice — The Quality Rules',
      instruction: 'Complete with must, mustn’t, have to, or don’t have to.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Every car [[1]] pass the quality check.' + '<br>'
        + '2. You [[2]] hand over a car with a fault.' + '<br>'
        + '3. Under warranty, we [[3]] use genuine parts.' + '<br>'
        + '4. If the car is fine, you [[4]] change anything.' + '<br>'
        + '</div>',
      answers: {
        '1': ['must'],
        '2': ['mustn’t'],
        '3': ['have to'],
        '4': ['don’t have to']
      },
      bank: ['must', 'mustn’t', 'have to', 'don’t have to'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>must</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>mustn’t</i>, <i>have to</i> in the bank.',
        '2': '<b>mustn’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i>, <i>have to</i> in the bank.',
        '3': '<b>have to</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i>, <i>mustn’t</i> in the bank.',
        '4': '<b>don’t have to</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>must</i>, <i>mustn’t</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 8 · Part 7', type: 'roleplay',
      title: 'Role-Play — The Quality Review',
      instruction: 'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the '
        + 'model and cards.',
      scene: 'u8-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'nabil', label: 'Card B · Nabil' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): ask about the road test, defects, and sign-off; decide if '
        + 'the car can be handed over' },
                { label: 'Card B', text: 'Mechanic (Nabil): report the road test, one small defect, and the sign-off '
        + 'status' }],
      remember: ['Model exchange — Maher: Did it pass the road test? — Nabil: Yes, but '
        + 'there’s a small mark. — Maher: Then we mustn’t hand it over. Fix it first. '
        + '— Nabil: And the sign-off? — Maher: Sign every job after you fix the mark.',
        'Stretch: the customer is waiting and in a hurry, but the car has a small '
        + 'defect — explain, kindly and firmly, why it mustn’t be handed over yet'],
      minWords: 30,
      modelScene: { id: 'u8-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'must, have to, mustn\'t and don\'t have to',
        task: 'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the '
        + 'model and cards.',
        parts: ['“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.', 'Every modal is followed by the plain verb — “must sign”, never “must to sign”.'],
        example: ['Maher: Did it pass the road test? — Nabil: Yes, but there’s a small mark. '
        + '— Maher: Then we mustn’t hand it over. Fix it first. — Nabil: And the '
        + 'sign-off? — Maher: Sign every job after you fix the mark.'],
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
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 8 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short quality-check note for the car’s file: what '
        + 'passed, what must be fixed, and the rule.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short quality-check note for the car’s file: what '
        + 'passed, what must be fixed, and the rule.',
        words: [],
        must: ['what passed + what must be fixed?', 'obligation language?', 'the rule stated?', '50–80 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short quality-check note for the car’s file: what '
        + 'passed, what must be fixed, and the rule.',
        grammar: 'must, have to, mustn\'t and don\'t have to',
        reader: 'the teacher',
        must: ['what passed + what must be fixed?', 'obligation language?', 'the rule stated?', '50–80 words?', '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.', 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.']
      },
      coach: {
        title: 'Check your writing',
        target: 'must, have to, mustn\'t and don\'t have to',
        minWords: 40,
        taught: ['The checks a car passes before it leaves, what a warranty promises, and '
        + 'the difference between a rule you must not break and one that does not '
        + 'apply.'],
        task: 'You are Maher. Write a short quality-check note for the car’s file: what '
        + 'passed, what must be fixed, and the rule.',
        parts: ['what passed + what must be fixed?', 'obligation language?', 'the rule stated?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'what passed + what must be fixed?' },
                   { t: 'obligation language?' },
                   { t: 'the rule stated?' },
                   { t: '50–80 words?' },
                   { t: '“mustn\'t” is used only where the thing is forbidden, and “don\'t have to” '
        + 'only where there is no rule either way.' },
                   { t: 'A rule that comes from the manufacturer or the law is given with “have '
        + 'to”; your own judgement is given with “must”.' }]
      }
    }
  ]
});
