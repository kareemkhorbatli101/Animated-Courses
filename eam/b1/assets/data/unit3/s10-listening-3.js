/* Unit 3 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s10', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 3.',
  video: 'u03v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 3 · Part 3', type: 'scene',
      title: 'Listen: The Workshop Rules',
      instruction: '<b>Before you listen:</b> how many safety rules do you think a workshop '
        + 'needs? Press play. You can slow it down, loop a line, and turn the Arabic '
        + 'on.',
      scene: 'u3-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Welcome to the workshop.',
          '2. We have five simple rules, and everyone follows them.',
          '3. First, always wear your PPE: safety glasses, gloves, and overalls.',
          '4. Second, keep your area clean and tidy — a tidy workshop is a safe workshop.',
          '5. Third, when you lift a car, chock the wheels, then use axle stands.',
          '6. Never work under a car on a jack alone.',
          '7. Fourth, if you are not sure, stop and ask.',
          '8. Fifth, if you smell fuel or see a problem, tell me at once.',
          '9. We look after each other here.',
          '10. A safe team is a good team.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 3.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 3 · Part 3', type: 'dragmatch',
        title: 'The Workshop Rules',
        instruction: 'While you listen: match each rule with what it says. One is not needed. '
          + '(0. is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Rule 1 → wear your PPE.', a: 'Rule 1 → wear your PPE.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) if you are not sure, stop and ask' },
          { id: 'm-b', label: 'b) chock the wheels, then use axle stands' },
          { id: 'm-c', label: 'c) always work faster' },
          { id: 'm-d', label: 'd) keep your area clean and tidy' },
          { id: 'm-e', label: 'e) if you smell fuel, tell the manager' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'Rule 2', accept: 'm-d',
            why: '<b>Rule 2</b> — keep your area clean and tidy. Keep it apart from <i>Rule '
          + '3</i>, which is a different part of the same system. The meaning left in '
          + 'the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Rule 3', accept: 'm-b',
            why: '<b>Rule 3</b> — chock the wheels, then use axle stands. Keep it apart from '
          + '<i>Rule 2</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'Rule 4', accept: 'm-a',
            why: '<b>Rule 4</b> — if you are not sure, stop and ask. Keep it apart from '
          + '<i>Rule 2</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Rule 5', accept: 'm-e',
            why: '<b>Rule 5</b> — if you smell fuel, tell the manager. Keep it apart from '
          + '<i>Rule 2</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “always work faster”, which belongs to nothing on '
          + 'this card.'
      }
    }
  ]
});
