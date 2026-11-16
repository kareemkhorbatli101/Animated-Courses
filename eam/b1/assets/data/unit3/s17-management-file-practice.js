/* Unit 3 §17 — Part 7 - Management File, practice.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s17', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 7 - Management File, practice', part: '7', section: '17',
          lesson: 'Part 7 - Management File, practice', title: 'Part 7 - Management File, practice' },
  objective: 'Work through Part 7 - Management File, practice of unit 3.',
  video: 'u03v17',
  prev: 's16-management-file-dialogue', prevLabel: 'Part 7 - Management File, dialogue',
  next: 's18-global-case-study', nextLabel: 'Part 8 - Global Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 3 · Part 7', type: 'order',
      title: 'Controlled Practice — Induction Steps',
      instruction: 'Put a foreman’s induction steps in order. Number them 1–5. (0. is done.)',
      poolLabel: 'Click a step, then click the slot it belongs in.',
      say: { key: 'course' },
      blocks: [
        { id: 'b3', text: 'Explain how to lift a car safely' },
        { id: 'b4', text: 'Show the fire extinguisher' },
        { id: 'b5', text: 'Say “ask me if you are not sure”' },
        { id: 'b1', text: 'Give PPE' },
        { id: 'b2', text: 'Show the tool board' }
      ],
      positions: ['b1', 'b2', 'b3', 'b4', 'b5'],
      whyTitle: 'Why this order',
      after: 'The book notes the order may vary a little. What may not vary is a step '
        + 'that keeps somebody safe coming before the work it protects.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 3 · Part 7', type: 'roleplay',
      title: 'Role-Play — Inducting a New Mechanic',
      instruction: 'In pairs. One is the foreman (Nabil); one is the new mechanic (Tarek). Use '
        + 'the model and cards.',
      scene: 'u3-dialogue6',
      roles: [{ who: 'nabil', label: 'Card A · Nabil' }, { who: 'tarek', label: 'Card B · Tarek' }],
      briefs: [{ label: 'Card A', text: 'Foreman (Nabil): give the induction in order (PPE → tools → lifting a car '
        + '→ fire extinguisher → ask if not sure)' },
                { label: 'Card B', text: 'New mechanic (Tarek): listen, ask two questions, repeat the safety rules' }],
      remember: ['Model exchange — Nabil: First, always wear your PPE. — Tarek: Yes, Ustaz. '
        + '— Nabil: After you use a tool, put it back on the board. — Tarek: OK. What '
        + 'about lifting a car? — Nabil: Chock the wheels, then use axle stands. '
        + 'Never work under a car on a jack alone.',
        'Stretch: the new mechanic says the last workshop did not use axle stands — '
        + 'explain, kindly but firmly, why Cham Motors always does'],
      minWords: 30,
      modelScene: { id: 'u3-dialogue6',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'In pairs. One is the foreman (Nabil); one is the new mechanic (Tarek). Use '
        + 'the model and cards.',
        parts: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Nabil: First, always wear your PPE. — Tarek: Yes, Ustaz. — Nabil: After '
        + 'you use a tool, put it back on the board. — Tarek: OK. What about lifting '
        + 'a car? — Nabil: Chock the wheels, then use axle stands. Never work under a '
        + 'car on a jack alone.'],
        criteria: [{ t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    },
    {
      id: 'c3', covers: ['Part 7'], ref: '7C',
      bookRef: 'Unit 3 · Part 7', type: 'writer',
      title: 'Supervisory Writing (50–80 words)',
      instruction: 'You are Maher. Write the workshop’s safety rules as a short notice for the '
        + 'wall. Use imperatives and sequencers.',
      paras: [
        { label: 'What you are writing about',
          purpose: 'One sentence that names it.' },
        { label: 'The details',
          purpose: 'Two or three sentences, using this unit’s words.' }
      ],
      minWords: 40,
      scaffold: {
        task: 'You are Maher. Write the workshop’s safety rules as a short notice for the '
        + 'wall. Use imperatives and sequencers.',
        words: [],
        must: ['clear numbered rules?', 'imperatives + sequencers?', 'the axle-stand rule included?', '50–80 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      aiCheck: {
        task: 'You are Maher. Write the workshop’s safety rules as a short notice for the '
        + 'wall. Use imperatives and sequencers.',
        grammar: 'Imperatives, and the order of the steps',
        reader: 'the teacher',
        must: ['clear numbered rules?', 'imperatives + sequencers?', 'the axle-stand rule included?', '50–80 words?', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.']
      },
      coach: {
        title: 'Check your writing',
        target: 'Imperatives, and the order of the steps',
        minWords: 40,
        taught: ['The tools on the board, the rules that keep a workshop safe, and how to '
        + 'give an instruction in the right order.'],
        task: 'You are Maher. Write the workshop’s safety rules as a short notice for the '
        + 'wall. Use imperatives and sequencers.',
        parts: ['clear numbered rules?', 'imperatives + sequencers?', 'the axle-stand rule included?'],
        example: ['Write your own. The checklist below is the book’s own — read your piece '
        + 'back against it line by line before you ask for a mark.'],
        criteria: [{ t: 'clear numbered rules?' },
                   { t: 'imperatives + sequencers?' },
                   { t: 'the axle-stand rule included?' },
                   { t: '50–80 words?' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' }]
      }
    }
  ]
});
