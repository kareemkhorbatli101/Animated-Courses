/* Unit 3 §11 — Part 4 - Speaking, model.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s11', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 4 - Speaking, model', part: '4', section: '11',
          lesson: 'Part 4 - Speaking, model', title: 'Part 4 - Speaking, model' },
  objective: 'Work through Part 4 - Speaking, model of unit 3.',
  video: 'u03v11',
  prev: 's10-listening-3', prevLabel: 'Part 3 - Listening 3',
  next: 's12-role-play', nextLabel: 'Part 4 - Role play',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A',
      bookRef: 'Unit 3 · Part 4', type: 'discuss',
      title: 'Discussing Safety',
      instruction: 'Work with a partner. Ask and answer these questions. What safety gear do '
        + 'you wear in a workshop? Why is a tidy workshop a safe workshop? What are '
        + 'three important safety rules?',
      minWords: 10,
      questions: [{ q: 'What safety gear do you wear in a workshop?' }, { q: 'Why is a tidy workshop a safe workshop?' }, { q: 'What are three important safety rules?' }],
      ideas: ['Work with a partner. Ask and answer these questions. What safety gear do '
        + 'you wear in a workshop? Why is a tidy workshop a safe workshop? What are '
        + 'three important safety rules?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Work with a partner. Ask and answer these questions. What safety gear do '
        + 'you wear in a workshop? Why is a tidy workshop a safe workshop? What are '
        + 'three important safety rules?',
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
    },
    {
      id: 'c2', covers: ['Part 4'], ref: '4B',
      bookRef: 'Unit 3 · Part 4', type: 'discuss',
      title: 'Find the Difference',
      instruction: 'Work in pairs. Student A looks at Workshop A; Student B looks at Workshop '
        + 'B. Ask and answer to find three differences. Do not show your card.',
      minWords: 10,
      questions: [{ q: 'Write your answer to the task above in two or three sentences.' }],
      ideas: ['Is the floor clean?',
        'Is he wearing…?',
        'Where are the tools?',
        'Is the car on axle stands?'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'Imperatives, and the order of the steps',
        task: 'Work in pairs. Student A looks at Workshop A; Student B looks at Workshop '
        + 'B. Ask and answer to find three differences. Do not show your card.',
        parts: ['Every instruction begins with the verb — “Put”, “Check”, “Wear” — with no '
        + '“I” or “you” in front of it.', 'A step that keeps somebody safe comes “before” the work it protects, not '
        + 'after it.', 'A reader who had never done this job could follow your steps in the order '
        + 'you wrote them.'],
        example: ['Is the floor clean? · Is he wearing…? · Where are the tools? · Is the car '
        + 'on axle stands?'],
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
