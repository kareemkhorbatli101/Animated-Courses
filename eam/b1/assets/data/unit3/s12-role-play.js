/* Unit 3 §12 — Part 4 - Role play.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s12', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 4 - Role play', part: '4', section: '12',
          lesson: 'Part 4 - Role play', title: 'Part 4 - Role play' },
  objective: 'Work through Part 4 - Role play of unit 3.',
  video: 'u03v12',
  prev: 's11-speaking-model', prevLabel: 'Part 4 - Speaking, model',
  next: 's13-reading-text', nextLabel: 'Part 5 - Reading, the text',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 3 · Part 4', type: 'roleplay',
      title: 'Safety Instructions Role Play',
      instruction: 'Work in pairs. Read the model, then use the cards.',
      scene: 'u3-dialogue4',
      roles: [{ who: 'nabil', label: 'Card A · Nabil' }, { who: 'tarek', label: 'Card B · Tarek' }],
      briefs: [{ label: 'Card A', text: 'Foreman: give the safety steps in order (use First, Then, Always, Never)' },
                { label: 'Card B', text: 'New mechanic: listen, ask one question, and repeat the rules in your own words' }],
      remember: ['Model exchange — Nabil: First, put on your gloves and glasses. — Tarek: '
        + 'OK. — Nabil: Then chock the wheels before you raise the car. — Tarek: And '
        + 'the axle stands? — Nabil: Always use two. Never work under a car on a jack '
        + 'alone.',
        'Stretch: the new mechanic is in a hurry and wants to skip a safety step — '
        + 'stop them, and explain why the step matters'],
      minWords: 30,
      modelScene: { id: 'u3-dialogue4',
        label: 'Watch a worked role play',
        note: 'This is one way to do it, not the only way. Try yours first — the pop-up '
        + 'opens after your attempt.' },
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Work in pairs. Read the model, then use the cards.',
        parts: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Nabil: First, put on your gloves and glasses. — Tarek: OK. — Nabil: Then '
        + 'chock the wheels before you raise the car. — Tarek: And the axle stands? — '
        + 'Nabil: Always use two. Never work under a car on a jack alone.'],
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
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 3 · Part 4', type: 'report',
      title: 'Mini-Presentation',
      instruction: 'Prepare a short talk (about one minute). Explain the safety rules in a '
        + 'workshop, and the safety gear you wear.',
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is…', 'Every week I…', 'Right now…', 'I think…'],
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Prepare a short talk (about one minute). Explain the safety rules in a '
        + 'workshop, and the safety gear you wear.',
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
        + 'the wheel”.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
