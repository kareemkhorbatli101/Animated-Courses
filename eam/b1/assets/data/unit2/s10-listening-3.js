/* Unit 2 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s10', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 2.',
  video: 'u02v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 2 · Part 3', type: 'scene',
      title: 'Listen: The Morning Stock Check',
      instruction: '<b>Before you listen:</b> why does a manager check the stock before the '
        + 'day starts? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u2-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Good morning. Before we start, let’s check the stock. We have a '
        + 'busy day: five services and two repairs. Nabil, how are the fluids?',
          '2. Nabil: There is plenty of oil, but there isn’t much coolant, and there '
        + 'aren’t many brake-fluid bottles.',
          '3. Maher: OK. Tarek, please order some coolant and brake fluid today. We '
        + 'also need air filters — there aren’t any left. Lina, is the diagnostic '
        + 'computer working?',
          '4. Lina: Yes, it’s fine.',
          '5. Maher: Good. Remember, we can’t service a car without the right parts '
        + 'and fluids, so we always check the stock first.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 2.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 2 · Part 3', type: 'dragmatch',
        title: 'The Morning Stock Check',
        instruction: 'While you listen: match each person with what they do. One action is not '
          + 'needed. (0. is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Maher → leads the stock check.', a: 'Maher → leads the stock check.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) checks the diagnostic computer' },
          { id: 'm-b', label: 'b) orders coolant and brake fluid' },
          { id: 'm-c', label: 'c) cleans the service bay' },
          { id: 'm-d', label: 'd) reports on the fluids' },
          { id: 'm-e', label: 'e) checks the stock before starting' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'Nabil', art: 'nabil', accept: 'm-d',
            why: '<b>Nabil</b> — reports on the fluids. Keep it apart from <i>Tarek</i>, '
          + 'which is a different part of the same system. The meaning left in the pool '
          + 'belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Tarek', art: 'tarek', accept: 'm-b',
            why: '<b>Tarek</b> — orders coolant and brake fluid. Keep it apart from '
          + '<i>Nabil</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'Lina', art: 'lina', accept: 'm-a',
            why: '<b>Lina</b> — checks the diagnostic computer. Keep it apart from '
          + '<i>Nabil</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Everyone', accept: 'm-e',
            why: '<b>Everyone</b> — checks the stock before starting. Keep it apart from '
          + '<i>Nabil</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “cleans the service bay”, which belongs to '
          + 'nothing on this card.'
      }
    }
  ]
});
