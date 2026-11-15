/* Unit 4 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s10', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 4.',
  video: 'u04v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 4 · Part 3', type: 'scene',
      title: 'Listen: Comparing Three Cars',
      instruction: '<b>Before you listen:</b> how does a manager decide which car needs the '
        + 'most work? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u4-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. We have three cars to check this morning.',
          '2. Let’s compare them.',
          '3. The first car, Mr Aboud’s, is in good condition.',
          '4. The tyres are new, and the battery is strong.',
          '5. The second car is older.',
          '6. Its battery is weaker than the first, and two tyres are worn.',
          '7. The third car is the oldest of the three.',
          '8. It has the most worn tyres and the lowest battery voltage, so it needs '
        + 'the most work.',
          '9. Remember: measure everything, write down the readings, and compare.',
          '10. The numbers show us which car needs the most attention, and which is '
        + 'the safest to drive.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 4.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 4 · Part 3', type: 'dragmatch',
        title: 'Comparing Three Cars',
        instruction: 'While you listen: match each car with its condition. One is not needed. '
          + '(0. is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Mr Aboud’s car → in good condition.', a: 'Mr Aboud’s car → in good condition.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) older, with a weaker battery and two worn tyres' },
          { id: 'm-b', label: 'b) the oldest, with the most worn tyres' },
          { id: 'm-c', label: 'c) brand new from the factory' },
          { id: 'm-d', label: 'd) in good condition, with new tyres' },
          { id: 'm-e', label: 'e) must be measured and compared' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'First car', accept: 'm-d',
            why: '<b>First car</b> — in good condition, with new tyres. Keep it apart from '
          + '<i>Second car</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Second car', accept: 'm-a',
            why: '<b>Second car</b> — older, with a weaker battery and two worn tyres. Keep '
          + 'it apart from <i>First car</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'Third car', accept: 'm-b',
            why: '<b>Third car</b> — the oldest, with the most worn tyres. Keep it apart '
          + 'from <i>First car</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'All three', accept: 'm-e',
            why: '<b>All three</b> — must be measured and compared. Keep it apart from '
          + '<i>First car</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “brand new from the factory”, which belongs to '
          + 'nothing on this card.'
      }
    }
  ]
});
