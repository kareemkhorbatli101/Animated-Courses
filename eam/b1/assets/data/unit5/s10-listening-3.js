/* Unit 5 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s10', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 5.',
  video: 'u05v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 5 · Part 3', type: 'scene',
      title: 'Listen: Planning the Day',
      instruction: '<b>Before you listen:</b> how does a manager share out the day’s cars? '
        + 'Press play. You can slow it down, loop a line, and turn the Arabic on.',
      scene: 'u5-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Good morning.',
          '2. Let’s plan the day.',
          '3. We have six cars.',
          '4. Mr Aboud’s car is booked in first; it is serviced by Nabil.',
          '5. The second car is a big job — the brakes are inspected and repaired by '
        + 'Lina.',
          '6. Two more cars are serviced this morning, and two this afternoon.',
          '7. Every car is road-tested and checked by the quality team before it is '
        + 'handed over.',
          '8. Tarek, the parts are collected from the store and put in each bay.',
          '9. Remember: each step is written on the job card, and no car is handed '
        + 'over until it is checked.',
          '10. A clear plan keeps the day calm.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 5.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 5 · Part 3', type: 'dragmatch',
        title: 'Planning the Day',
        instruction: 'While you listen: match each item with what happens. One is not needed. '
          + '(0. is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. Mr Aboud’s car → serviced by Nabil.', a: 'Mr Aboud’s car → serviced by Nabil.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) written on the job card' },
          { id: 'm-b', label: 'b) road-tested and checked before handover' },
          { id: 'm-c', label: 'c) sold to another customer' },
          { id: 'm-d', label: 'd) inspected and repaired by Lina' },
          { id: 'm-e', label: 'e) collected and put in each bay by Tarek' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'The second car', accept: 'm-d',
            why: '<b>The second car</b> — inspected and repaired by Lina. Keep it apart from '
          + '<i>Every car</i>, which is a different part of the same system. The '
          + 'meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Every car', accept: 'm-b',
            why: '<b>Every car</b> — road-tested and checked before handover. Keep it apart '
          + 'from <i>The second car</i>, which is a different part of the same system. '
          + 'The meaning left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'The parts', accept: 'm-e',
            why: '<b>The parts</b> — collected and put in each bay by Tarek. Keep it apart '
          + 'from <i>The second car</i>, which is a different part of the same system. '
          + 'The meaning left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Each step', accept: 'm-a',
            why: '<b>Each step</b> — written on the job card. Keep it apart from <i>The '
          + 'second car</i>, which is a different part of the same system. The meaning '
          + 'left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “sold to another customer”, which belongs to '
          + 'nothing on this card.'
      }
    }
  ]
});
