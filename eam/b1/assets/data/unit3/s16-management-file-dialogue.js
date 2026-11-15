/* Unit 3 §16 — Part 7 - Management File, dialogue.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s16', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 7 - Management File, dialogue', part: '7', section: '16',
          lesson: 'Part 7 - Management File, dialogue', title: 'Part 7 - Management File, dialogue' },
  objective: 'Work through Part 7 - Management File, dialogue of unit 3.',
  video: 'u03v16',
  prev: 's15-writing-model', prevLabel: 'Part 6 - Writing, the model',
  next: 's17-management-file-practice', nextLabel: 'Part 7 - Management File, practice',
  cards: [
    {
      id: 'c1', covers: ['Part 7'], ref: '7A',
      bookRef: 'Unit 3 · Part 7', type: 'dragmatch',
      title: 'Phrase Bank',
      instruction: 'Match what a foreman says with its purpose. One purpose is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) showing someone around' },
        { id: 'm-b', label: 'b) giving a strong warning' },
        { id: 'm-c', label: 'c) giving a safety rule' },
        { id: 'm-d', label: 'd) asking about the price' },
        { id: 'm-e', label: 'e) offering help and support' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: '“Always wear your PPE.”', accept: 'm-c',
          why: '<b>“Always wear your PPE.”</b> — giving a safety rule. Keep it apart from '
        + '<i>“Let me show you where the tools are.”</i>, which is a different part '
        + 'of the same system. The meaning left in the pool belongs to nothing on '
        + 'this card.' },
        { id: 't2', num: 2, label: '“Let me show you where the tools are.”', accept: 'm-a',
          why: '<b>“Let me show you where the tools are.”</b> — showing someone around. '
        + 'Keep it apart from <i>“Always wear your PPE.”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't3', num: 3, label: '“If you are not sure, stop and ask.”', accept: 'm-e',
          why: '<b>“If you are not sure, stop and ask.”</b> — offering help and support. '
        + 'Keep it apart from <i>“Always wear your PPE.”</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't4', num: 4, label: '“Never work under a car on a jack alone.”', accept: 'm-b',
          why: '<b>“Never work under a car on a jack alone.”</b> — giving a strong '
        + 'warning. Keep it apart from <i>“Always wear your PPE.”</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' }
      ],
      after: 'The meaning left over is “asking about the price”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 7'], ref: '7B',
      bookRef: 'Unit 3 · Part 7', type: 'scene',
      title: 'Listen: Manager Dialogue',
      instruction: '<b>Before you listen:</b> what does a foreman show a new worker on their '
        + 'first day in the bay? Press play. You can slow it down, loop a line, and '
        + 'turn the Arabic on.',
      scene: 'u3-dialogue5',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Nabil: Tarek, today is your bay induction. First, this is your PPE: '
        + 'safety glasses, gloves, and overalls. Always wear them.',
          '2. Tarek: Yes, Ustaz.',
          '3. Nabil: Second, this is the tool board. Every tool has a place. After '
        + 'you use a tool, put it back.',
          '4. Tarek: OK.',
          '5. Nabil: Third, when we lift a car, we chock the wheels, then use axle '
        + 'stands. Never work under a car on a jack alone.',
          '6. Tarek: I understand.',
          '7. Nabil: Good. If you are not sure about anything, stop and ask me. '
        + 'Safety first.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 3.5. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 7'], ref: '7B',
        bookRef: 'Unit 3 · Part 7', type: 'shortanswer',
        title: 'Manager Dialogue',
        instruction: 'Answer the questions. (0. is done.)',
        before: '<span class="eg-model"><b>Worked example</b>0. What is Tarek’s induction '
          + 'about? — Safety in the bay.</span>',
        items: [
          { q: '1. What PPE must Tarek always wear?',
            accept: ['safety glasses, gloves, and overalls'],
            keys: ['safety', 'glasses'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '2. What must he do after using a tool?',
            accept: ['put it back on the tool board'],
            keys: ['back', 'tool'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' },
          { q: '3. What must he never do?',
            accept: ['work under a car on a jack alone'],
            keys: ['work', 'under'], need: 2,
            evidence: 'Look back at the text above — this answer is stated in it.' }
        ],
        whyTitle: 'What each answer rests on'
      }
    }
  ]
});
