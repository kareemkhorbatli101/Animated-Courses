/* Unit 2 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s12', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 2.',
  video: 'u02v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 2 · Part 4', type: 'roleplay',
      title: 'Reporting Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u2-dialogue4',
      roles: [{ who: 'nabil', label: 'Card A · Nabil' }, { who: 'maher', label: 'Card B · Maher' }],
      briefs: [{ label: 'Card A', text: 'Mechanic: report on the fluids and parts (use some / any / much / many)' },
                { label: 'Card B', text: 'Manager: ask how much and how many, then decide what to order' }],
      remember: ['Model exchange — Nabil: There isn’t much coolant, and there aren’t any air '
        + 'filters. — Maher: How many oil filters are there? — Nabil: There are only '
        + 'two. — Maher: OK, please order more.',
        'Stretch: a needed part is not in the shop and hard to import — explain the '
        + 'delay to the customer politely'],
      minWords: 30,
      modelScene: { id: 'u2-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.', '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.', '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.'],
        example: ['Nabil: There isn’t much coolant, and there aren’t any air filters. — '
        + 'Maher: How many oil filters are there? — Nabil: There are only two. — '
        + 'Maher: OK, please order more.'],
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
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 2 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Say what is under the bonnet of a '
        + 'car and which fluids it needs.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'There is / There are, and some, any, much, many',
        task: 'Prepare a short talk (about one minute). Say what is under the bonnet of a '
        + 'car and which fluids it needs.',
        parts: ['Every sentence that says what exists uses “there is” or “there are”, and '
        + 'the one you chose matches one thing or more than one.', '“much” goes with what you cannot count — oil, coolant, water; “many” goes '
        + 'with what you can — filters, tyres, litres.', '“any” is in your questions and your negatives; “some” is in your positive '
        + 'statements.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
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
    }
  ]
});
