/* Unit 9 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s10', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 9.',
  video: 'u09v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 9 · Part 3', type: 'scene',
      title: 'Listen: The Week’s Repairs',
      instruction: '<b>Before you listen:</b> is a comeback always a mistake? Press play. You '
        + 'can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u9-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Maher: Let’s look at this week’s repairs. On Monday, Lina diagnosed '
        + 'three cars, and we fixed them all. On Tuesday, we replaced a water pump '
        + 'under warranty. Yesterday, a car came back — a comeback — with the same '
        + 'noise from last week. Have we found the cause?',
          '2. Lina: Yes, I diagnosed it this morning. The first repair was fine, but '
        + 'a second part has failed.',
          '3. Maher: Good. We’ll fix it for free, of course, because it came back so '
        + 'soon. Remember, a comeback is not always a mistake, but we must always '
        + 'find the real cause. Have you all road-tested your cars today? A car '
        + 'mustn’t leave until the fault is truly gone.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 9.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 9 · Part 3', type: 'dragmatch',
        title: 'The Week’s Repairs',
        instruction: 'While you listen: match each time with what happened. One is not needed. '
          + '(0. is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Monday → Lina diagnosed three cars.', a: 'Monday → Lina diagnosed three cars.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) a car came back with the same noise' },
          { id: 'm-b', label: 'b) a second part has failed' },
          { id: 'm-c', label: 'c) the car was sold' },
          { id: 'm-d', label: 'd) a water pump was replaced under warranty' },
          { id: 'm-e', label: 'e) Lina diagnosed the comeback' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'Tuesday', accept: 'm-d',
            why: '<b>Tuesday</b> — a water pump was replaced under warranty. Keep it apart '
          + 'from <i>Yesterday</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Yesterday', accept: 'm-a',
            why: '<b>Yesterday</b> — a car came back with the same noise. Keep it apart from '
          + '<i>Tuesday</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'This morning', accept: 'm-e',
            why: '<b>This morning</b> — Lina diagnosed the comeback. Keep it apart from '
          + '<i>Tuesday</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'The comeback', accept: 'm-b',
            why: '<b>The comeback</b> — a second part has failed. Keep it apart from '
          + '<i>Tuesday</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “the car was sold”, which belongs to nothing on '
          + 'this card.'
      }
    }
  ]
});
