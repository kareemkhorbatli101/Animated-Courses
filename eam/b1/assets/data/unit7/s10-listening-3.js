/* Unit 7 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s10', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 7.',
  video: 'u07v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 7 · Part 3', type: 'scene',
      title: 'Listen: Planning the Week',
      instruction: '<b>Before you listen:</b> how does a manager plan a whole week of work? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u7-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Let’s plan the week.',
          '2. On Monday, we’re going to service four cars.',
          '3. On Tuesday, Mr Aboud’s car is coming in at nine for a full service.',
          '4. On Wednesday, a big job is arriving — a van with a gearbox problem, so '
        + 'Lina is diagnosing it first.',
          '5. We’re waiting for two parts; they’re going to arrive on Thursday, so '
        + 'we’ll finish that job on Friday.',
          '6. Rana, please call each customer with their ready time.',
          '7. Tarek, you’ll collect the parts each morning.',
          '8. Remember: we always give an estimate before we start, and we always '
        + 'call the customer at handover.',
          '9. A clear plan means no surprises.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 7.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 7 · Part 3', type: 'dragmatch',
        title: 'Planning the Week',
        instruction: 'While you listen: match each item with the detail. One is not needed. (0. '
          + 'is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Monday → service four cars.', a: 'Monday → service four cars.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) the two parts are going to arrive' },
          { id: 'm-b', label: 'b) calls each customer with their ready time' },
          { id: 'm-c', label: 'c) sell two new cars' },
          { id: 'm-d', label: 'd) Mr Aboud’s full service at nine' },
          { id: 'm-e', label: 'e) a van with a gearbox problem arrives' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'Tuesday', accept: 'm-d',
            why: '<b>Tuesday</b> — Mr Aboud’s full service at nine. Keep it apart from '
          + '<i>Wednesday</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Wednesday', accept: 'm-e',
            why: '<b>Wednesday</b> — a van with a gearbox problem arrives. Keep it apart '
          + 'from <i>Tuesday</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'Thursday', accept: 'm-a',
            why: '<b>Thursday</b> — the two parts are going to arrive. Keep it apart from '
          + '<i>Tuesday</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Rana', art: 'rana', accept: 'm-b',
            why: '<b>Rana</b> — calls each customer with their ready time. Keep it apart '
          + 'from <i>Tuesday</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “sell two new cars”, which belongs to nothing on '
          + 'this card.'
      }
    }
  ]
});
