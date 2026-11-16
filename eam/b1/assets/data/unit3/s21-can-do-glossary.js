/* Unit 3 §21 — Part 10 - Can-Do and glossary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s21', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 10 - Can-Do and glossary', part: '10', section: '21',
          lesson: 'Part 10 - Can-Do and glossary', title: 'Part 10 - Can-Do and glossary' },
  objective: 'Work through Part 10 - Can-Do and glossary of unit 3.',
  video: 'u03v21',
  prev: 's20-spiral-review', prevLabel: 'Part 10 - Spiral review',
  cards: [
    {
      id: 'c1', covers: ['Part 10'], ref: '10A',
      bookRef: 'Unit 3 · Part 10', type: 'checklistlive',
      title: 'Can-Do',
      instruction: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
      fromPage: 'u3-s15', fromCard: 'c1',
      items: [
        { t: 'I can name the main tools and safety gear in a workshop.' },
        { t: 'I can give instructions and safety rules using imperatives and sequencers.' },
        { t: 'I can understand a safety briefing and a bay induction.' },
        { t: 'I can write clear workshop safety rules.' },
        { t: 'I can induct and brief a new mechanic (Practitioner).' }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Can-Do checklist — tick what you can do. Each row is checked against what '
        + 'you actually did on this unit\'s writing screen, so a tick you have not '
        + 'earned says so rather than being taken on trust.',
        parts: ['I can name the main tools and safety gear in a workshop. I can give '
        + 'instructions and safety rules using imperatives and sequencers. I can '
        + 'understand a safety briefing and a bay induction. I can write clear '
        + 'workshop safety rules. I can induct and brief a new mechanic '
        + '(Practitioner).', 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'I can name the main tools and safety gear in a workshop. I can give '
        + 'instructions and safety rules using imperatives and sequencers. I can '
        + 'understand a safety briefing and a bay induction. I can write' },
                   { t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' }]
      }
    },
    {
      id: 'c2', covers: ['Part 10'], ref: '10B',
      bookRef: 'Unit 3 · Part 10', type: 'flashcards',
      title: 'Glossary',
      instruction: 'Unit 3 glossary (10 words)',
      scene: 'glossary-ten',
      items: [
        { id: 'g1', num: 1, label: 'spanner', at: [10, 27] },
        { id: 'g2', num: 2, label: 'socket set', at: [30, 27] },
        { id: 'g3', num: 3, label: 'torque wrench', at: [50, 27] },
        { id: 'g4', num: 4, label: 'trolley jack', at: [70, 27] },
        { id: 'g5', num: 5, label: 'axle stand', at: [90, 27] },
        { id: 'g6', num: 6, label: 'wheel chock', at: [10, 77] },
        { id: 'g7', num: 7, label: 'safety glasses', at: [30, 77] },
        { id: 'g8', num: 8, label: 'gloves', at: [50, 77] },
        { id: 'g9', num: 9, label: 'PPE', at: [70, 77] },
        { id: 'g10', num: 10, label: 'fire extinguisher', at: [90, 77] }
      ],
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Unit 3 glossary (10 words)',
        parts: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.' },
                   { t: 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.' },
                   { t: 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.' },
                   { t: 'The tools are named exactly — spanner, jack, goggles — not “the thing for '
        + 'the wheel”.' }]
      }
    }
  ]
});
