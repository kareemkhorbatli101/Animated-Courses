/* Unit 10 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s10', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 10.',
  video: 'u10v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 10 · Part 3', type: 'scene',
      title: 'Listen: The Team Meeting',
      instruction: '<b>Before you listen:</b> what news does a manager share at a team '
        + 'meeting? Press play. You can slow it down, loop a line, and turn the '
        + 'Arabic on.',
      scene: 'u10-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Good morning, everyone.',
          '2. Here’s the news.',
          '3. First, the customers.',
          '4. The feedback is very good.',
          '5. Mr Aboud told Rana the car was running perfectly, and he recommended us '
        + 'to his family.',
          '6. Second, the manufacturer.',
          '7. They sent a bulletin; it told us to update the software on the new '
        + 'model, and it asked us to record every update.',
          '8. Third, training.',
          '9. Lina has finished the new-model course, and she will teach the rest of '
        + 'the team next week.',
          '10. Finally, a campaign.',
          '11. The manufacturer said all new-model owners should come in for a free '
        + 'safety check.',
          '12. Rana, please send a service reminder to every owner.',
          '13. A dealership is a team: the customer, the manufacturer, and us.',
          '14. When we all talk to each other, everyone wins.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 10.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 10 · Part 3', type: 'dragmatch',
        title: 'The Team Meeting',
        instruction: 'While you listen: match each topic with the news. One is not needed. (0. '
          + 'is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. The customers → the feedback is very goo', a: 'The customers → the feedback is very good.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) Lina has finished the new-model course' },
          { id: 'm-b', label: 'b) will send a service reminder to every owner' },
          { id: 'm-c', label: 'c) the garage will close next week' },
          { id: 'm-d', label: 'd) sent a bulletin about a software update' },
          { id: 'm-e', label: 'e) a free safety check for new-model owners' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'The manufacturer', accept: 'm-d',
            why: '<b>The manufacturer</b> — sent a bulletin about a software update. Keep it '
          + 'apart from <i>Training</i>, which is a different part of the same system. '
          + 'The meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'Training', art: 'training', accept: 'm-a',
            why: '<b>Training</b> — Lina has finished the new-model course. Keep it apart '
          + 'from <i>The manufacturer</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'The campaign', accept: 'm-e',
            why: '<b>The campaign</b> — a free safety check for new-model owners. Keep it '
          + 'apart from <i>The manufacturer</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Rana', art: 'rana', accept: 'm-b',
            why: '<b>Rana</b> — will send a service reminder to every owner. Keep it apart '
          + 'from <i>The manufacturer</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “the garage will close next week”, which belongs '
          + 'to nothing on this card.'
      }
    }
  ]
});
