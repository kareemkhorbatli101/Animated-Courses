/* Unit 4 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s17', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 4.',
  video: 'u04v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 4 · Part 7', type: 'cloze',
      title: 'Controlled Practice — Reading the Table',
      instruction: 'The tread readings are: front left 6 mm, front right 5 mm, rear left 2 mm, '
        + 'rear right 3 mm. Complete with the correct word.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The front left has [[1]] tread than the rear left.' + '<br>'
        + '2. The rear left is the [[2]] worn tyre.' + '<br>'
        + '3. The front left has the [[3]] tread of all four.' + '<br>'
        + '4. The rear left is [[4]] than the rear right.' + '<br>'
        + '</div>',
      answers: {
        '1': ['more'],
        '2': ['most'],
        '3': ['deepest'],
        '4': ['worse']
      },
      bank: ['more', 'most', 'deepest', 'worse'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>more</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>most</i>, <i>deepest</i> in the bank.',
        '2': '<b>most</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>more</i>, <i>deepest</i> in the bank.',
        '3': '<b>deepest</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>more</i>, <i>most</i> in the bank.',
        '4': '<b>worse</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>more</i>, <i>most</i> in the bank.'
      }
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 4 · Part 7', type: 'roleplay',
      title: 'Role-Play — Reviewing the Report',
      instruction: 'In pairs. One is the manager (Maher); one is the technician (Lina). Use '
        + 'the model and cards.',
      scene: 'u4-dialogue6',
      roles: [{ who: 'maher', label: 'Card A · Maher' }, { who: 'lina', label: 'Card B · Lina' }],
      briefs: [{ label: 'Card A', text: 'Manager (Maher): ask about the battery and the tyres; decide what to do '
        + 'Technician (Lina): report the readings, compare them, and say what is '
        + 'below or within the tolerance' },
                { label: 'Card B', text: 'Play the other part.' }],
      remember: ['Model exchange — Maher: How is the battery? — Lina: Below the tolerance, '
        + '12.1 volts. — Maher: And the tyres? — Lina: The rear left is the most '
        + 'worn. — Maher: Charge the battery and change that tyre.',
        'Stretch: a reading is only a little outside the tolerance — decide whether '
        + 'to act now or watch it, and explain why'],
      minWords: 30,
      modelScene: { id: 'u4-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Comparatives and superlatives',
        task: 'In pairs. One is the manager (Maher); one is the technician (Lina). Use '
        + 'the model and cards.',
        parts: ['Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.', '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.'],
        example: ['Maher: How is the battery? — Lina: Below the tolerance, 12.1 volts. — '
        + 'Maher: And the tyres? — Lina: The rear left is the most worn. — Maher: '
        + 'Charge the battery and change that tyre.'],
        criteria: [{ t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' },
                   { t: '<b>good</b> and <b>bad</b> are irregular: better / the best, worse / the '
        + 'worst — never <i>gooder</i> or <i>more bad</i>.' },
                   { t: 'The numbers are given with their units — two millimetres, 12.1 volts — and '
        + 'compared with the tolerance.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 4 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write a short summary of a car’s readings for the '
        + 'customer’s file. Say what is within and what is below the tolerance, and '
        + 'what you will do.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write a short summary of a car’s readings for the '
        + 'customer’s file. Say what is within and what is below the tolerance, and '
        + 'what you will do.',
        words: [],
        must: ['clear readings + comparisons?', 'within / below the tolerance used?', 'the action stated?', '50–80 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write a short summary of a car’s readings for the '
        + 'customer’s file. Say what is within and what is below the tolerance, and '
        + 'what you will do.',
        grammar: 'Comparatives and superlatives',
        reader: 'the teacher',
        must: ['clear readings + comparisons?', 'within / below the tolerance used?', 'the action stated?', '50–80 words?', 'Every comparison of two things has <b>than</b> after it.', 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Comparatives and superlatives',
        minWords: 40,
        taught: ['Reading a gauge, comparing two measurements, and saying which is the worst.'],
        task: 'You are Maher. Write a short summary of a car’s readings for the '
        + 'customer’s file. Say what is within and what is below the tolerance, and '
        + 'what you will do.',
        parts: ['clear readings + comparisons?', 'within / below the tolerance used?', 'the action stated?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'clear readings + comparisons?' },
                   { t: 'within / below the tolerance used?' },
                   { t: 'the action stated?' },
                   { t: '50–80 words?' },
                   { t: 'Every comparison of two things has <b>than</b> after it.' },
                   { t: 'Every superlative has <b>the</b> in front of it — the most worn, the lowest.' }]
      }
    }
  ]
});
