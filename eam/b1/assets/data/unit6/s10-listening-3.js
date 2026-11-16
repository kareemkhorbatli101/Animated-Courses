/* Unit 6 §10 — Part 3 - Listening 3.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s10', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 3 - Listening 3', part: '3', section: '10',
          lesson: 'Part 3 - Listening 3', title: 'Part 3 - Listening 3' },
  objective: 'Work through Part 3 - Listening 3 of unit 6.',
  video: 'u06v10',
  prev: 's09-listening-2', prevLabel: 'Part 3 - Listening 2',
  next: 's11-speaking-model', nextLabel: 'Part 4 - Speaking, model',
  cards: [
    {
      id: 'c1', covers: ['Part 3'], ref: '3A',
      bookRef: 'Unit 6 · Part 3', type: 'scene',
      title: 'Listen: The Service Schedule',
      instruction: '<b>Before you listen:</b> what is the difference between a small service '
        + 'and a full service? Press play. You can slow it down, loop a line, and '
        + 'turn the Arabic on.',
      scene: 'u6-dialogue3',
      passage: { style: 'article', title: 'What they said, line by line',
        say: { key: 'course' },
        paras: [
          '1. Today I want to talk about the service schedule.',
          '2. Every car has one.',
          '3. It tells us what to do and when.',
          '4. At a small service, the oil and oil filter are changed, and the brakes '
        + 'and tyres are checked.',
          '5. At a full service, we do more: the air filter and spark plugs are '
        + 'replaced, the tyres are rotated, and the coolant is checked.',
          '6. The schedule is based on the mileage or the time.',
          '7. But remember: we always advise honestly.',
          '8. If a part is worn, we say, “You should change it.” If a part is fine, '
        + 'we say so — we don’t sell work the car doesn’t need.',
          '9. Could you all follow the schedule and give honest advice?',
          '10. That is how we keep customers for many years.'
        ]
      },
      after: '<span class="wc">The book prints this as Audio Track 6.4. No studio '
        + 'recording exists yet, so the cast speaks it.</span>',
      quiz: {
        id: 'q1', covers: ['Part 3'], ref: '3A',
        bookRef: 'Unit 6 · Part 3', type: 'dragmatch',
        title: 'The Service Schedule',
        instruction: 'While you listen: match each item with the detail. One is not needed. (0. '
          + 'is done.) Column A Column B',
        poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
        cols: 3, say: true,
        worked: { q: '0. A small service → change the oil and oil', a: 'A small service → change the oil and oil filter.',
          why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
        chips: [
          { id: 'm-a', label: 'a) is based on the mileage or the time' },
          { id: 'm-b', label: 'b) we don’t sell work the car doesn’t need' },
          { id: 'm-c', label: 'c) we always paint the car' },
          { id: 'm-d', label: 'd) replace the air filter and spark plugs' },
          { id: 'm-e', label: 'e) say if a part is worn, and if it is fine' }
        ],
        whyTitle: 'What each one means, and what it is not',
        targets: [
          { id: 't1', num: 1, label: 'A full service', accept: 'm-d',
            why: '<b>A full service</b> — replace the air filter and spark plugs. Keep it '
          + 'apart from <i>The schedule</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' },
          { id: 't2', num: 2, label: 'The schedule', accept: 'm-a',
            why: '<b>The schedule</b> — is based on the mileage or the time. Keep it apart '
          + 'from <i>A full service</i>, which is a different part of the same system. '
          + 'The meaning left in the pool belongs to nothing on this card.' },
          { id: 't3', num: 3, label: 'Honest advice', accept: 'm-e',
            why: '<b>Honest advice</b> — say if a part is worn, and if it is fine. Keep it '
          + 'apart from <i>A full service</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' },
          { id: 't4', num: 4, label: 'Our promise', accept: 'm-b',
            why: '<b>Our promise</b> — we don’t sell work the car doesn’t need. Keep it '
          + 'apart from <i>A full service</i>, which is a different part of the same '
          + 'system. The meaning left in the pool belongs to nothing on this card.' }
        ],
        after: 'The meaning left over is “we always paint the car”, which belongs to '
          + 'nothing on this card.'
      }
    }
  ]
});
