/* Unit 5 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s02', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 5.',
  video: 'u05v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 5 · Part 1', type: 'dragmatch',
      title: 'The Service Process Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Reception → the place where a customer b', a: 'Reception → the place where a customer brings the car and it is booked in.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) to look at a car carefully to check it' },
        { id: 'm-b', label: 'b) a final check before the car goes back' },
        { id: 'm-c', label: 'c) to measure the tyre pressure' },
        { id: 'm-d', label: 'd) to write a car into the system when it arrives' },
        { id: 'm-e', label: 'e) to give the car back to the customer' },
        { id: 'm-f', label: 'f) to find out what is wrong with a car' },
        { id: 'm-g', label: 'g) to do the regular checks and work' },
        { id: 'm-h', label: 'h) to drive a car to check it works well' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Book in', accept: 'm-d',
          why: '<b>Book in</b> — to write a car into the system when it arrives. Keep it '
        + 'apart from <i>Inspect</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Inspect', accept: 'm-a',
          why: '<b>Inspect</b> — to look at a car carefully to check it. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Diagnose', accept: 'm-f',
          why: '<b>Diagnose</b> — to find out what is wrong with a car. Keep it apart from '
        + '<i>Book in</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Service', art: 'service', accept: 'm-g',
          why: '<b>Service</b> — to do the regular checks and work. Keep it apart from '
        + '<i>Book in</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Road-test', accept: 'm-h',
          why: '<b>Road-test</b> — to drive a car to check it works well. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Quality check', accept: 'm-b',
          why: '<b>Quality check</b> — a final check before the car goes back. Keep it '
        + 'apart from <i>Book in</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Hand over', accept: 'm-e',
          why: '<b>Hand over</b> — to give the car back to the customer. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “to measure the tyre pressure”, which belongs to '
        + 'nothing on this card.<div class="note" style="margin-top:12px"><h4>The '
        + 'words the book glosses here</h4><div><b>book in</b> — to write a car into '
        + 'the system when it arrives</div><div><b>road-test</b> — to drive a car to '
        + 'check it works well</div><div><b>quality check</b> — the final check '
        + 'before handover</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 5 · Part 1', type: 'cloze',
      title: 'Departments Table',
      instruction: 'Complete the table. Write what happens in each department. (0. is done.)',
      before: '<span class="eg-model"><b>Worked example</b>0. Reception — the car is '
        + 'booked in and handed over.</span>',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '</div>',
      answers: {

      },
      whyTitle: 'How each gap was decided',
      why: {

      }
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 5 · Part 1', type: 'dragmatch',
      title: 'Departments and Their Jobs',
      instruction: 'Match each department with its job. One job is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) where the car is serviced and repaired' },
        { id: 'm-b', label: 'b) where the car is cleaned' },
        { id: 'm-c', label: 'c) where fuel is sold' },
        { id: 'm-d', label: 'd) where the car is booked in and handed over' },
        { id: 'm-e', label: 'e) where the car is checked before it goes back' },
        { id: 'm-f', label: 'f) where the parts are kept' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Reception', art: 'reception', accept: 'm-d',
          why: '<b>Reception</b> — where the car is booked in and handed over. Keep it '
        + 'apart from <i>Workshop</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Workshop', art: 'workshop', accept: 'm-a',
          why: '<b>Workshop</b> — where the car is serviced and repaired. Keep it apart '
        + 'from <i>Reception</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Parts store', art: 'parts-store', accept: 'm-f',
          why: '<b>Parts store</b> — where the parts are kept. Keep it apart from '
        + '<i>Reception</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Quality control', accept: 'm-e',
          why: '<b>Quality control</b> — where the car is checked before it goes back. '
        + 'Keep it apart from <i>Reception</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Valet', accept: 'm-b',
          why: '<b>Valet</b> — where the car is cleaned. Keep it apart from '
        + '<i>Reception</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “where fuel is sold”, which belongs to nothing on '
        + 'this card.'
    }
  ]
});
