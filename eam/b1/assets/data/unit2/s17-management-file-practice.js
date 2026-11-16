/* Unit 2 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s17', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 2.',
  video: 'u02v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 2 · Part 7', type: 'cloze',
      title: 'Controlled Practice — Completing the Order',
      instruction: 'Complete with much, many, some, or any.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. There isn’t [[1]] coolant.' + '<br>'
        + '2. There aren’t [[2]] oil filters.' + '<br>'
        + '3. Please order [[3]] air filters.' + '<br>'
        + '4. Is there [[4]] brake fluid left?' + '<br>'
        + '</div>',
      answers: {
        '1': ['much'],
        '2': ['many'],
        '3': ['some'],
        '4': ['any']
      },
      bank: ['much', 'many', 'some', 'any'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>much</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>many</i>, <i>some</i> in the bank.',
        '2': '<b>many</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>much</i>, <i>some</i> in the bank.',
        '3': '<b>some</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>much</i>, <i>many</i> in the bank.',
        '4': '<b>any</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>much</i>, <i>many</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 2 · Part 7', type: 'roleplay',
      title: 'Role-Play — The Stock Check',
      instruction: 'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the '
        + 'model and cards.',
      scene: 'u2-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'nabil', label: 'Card B · Nabil' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): ask how much / how many of three items · decide what to order' },
                { label: 'Card B', text: 'Mechanic (Nabil): report the amounts using some / any / much / many' }],
      remember: ['Model exchange — Maher: How much oil do we have? — Nabil: There is plenty. '
        + '— Maher: How many filters are there? — Nabil: Only two. — Maher: Please '
        + 'order ten more.',
        'Stretch: money is tight this month — decide which parts to order now and '
        + 'which can wait, and explain why'],
      minWords: 30,
      modelScene: { id: 'u2-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'In pairs. One is the manager (Maher); one is the mechanic (Nabil). Use the '
        + 'model and cards.',
        parts: ['Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.', '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.', '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.'],
        example: ['Maher: How much oil do we have? — Nabil: There is plenty. — Maher: How '
        + 'many filters are there? — Nabil: Only two. — Maher: Please order ten more.'],
        criteria: [{ t: 'Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.' },
                   { t: '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.' },
                   { t: '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.' },
                   { t: 'The parts and fluids are named with this unit’s words, not with “thing” or '
        + '“stuff”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 2 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short parts order for the supplier. Say what you '
        + 'need and how much / how many.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short parts order for the supplier. Say what you '
        + 'need and how much / how many.',
        words: [],
        must: ['clear quantities (how much / how many)?', 'a polite request?', '50–80 words?', 'Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.', '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.', '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short parts order for the supplier. Say what you '
        + 'need and how much / how many.',
        grammar: 'There is / There are, and some, any, much, many',
        reader: 'the teacher',
        must: ['clear quantities (how much / how many)?', 'a polite request?', '50–80 words?', 'Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.', '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.', '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.']
      },
      coach: {
        title: 'Check your writing',
        target: 'There is / There are, and some, any, much, many',
        minWords: 40,
        taught: ['What is under the bonnet, what each fluid does, and how to say how much of '
        + 'it there is.'],
        task: 'You are Maher. Write a short parts order for the supplier. Say what you '
        + 'need and how much / how many.',
        parts: ['clear quantities (how much / how many)?', 'a polite request?', '50–80 words?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'clear quantities (how much / how many)?' },
                   { t: 'a polite request?' },
                   { t: '50–80 words?' },
                   { t: 'Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.' },
                   { t: '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.' },
                   { t: '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.' }]
      }
    }
  ]
});
