/* Unit 8 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s02', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 8.',
  video: 'u08v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 8 · Part 1', type: 'dragmatch',
      title: 'Quality and Warranty Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Inspection sheet → a paper that lists wh', a: 'Inspection sheet → a paper that lists what to check on a car.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) driving the car to check it is safe' },
        { id: 'm-b', label: 'b) when someone signs to say the work is correct' },
        { id: 'm-c', label: 'c) a car the garage lends the customer' },
        { id: 'm-d', label: 'd) the final check before a car is handed over' },
        { id: 'm-e', label: 'e) a promise to repair or replace for free for a time' },
        { id: 'm-f', label: 'f) a fault, something wrong with the car' },
        { id: 'm-g', label: 'g) when the carmaker asks owners to bring cars back to fix a fault' },
        { id: 'm-h', label: 'h) a part made by the carmaker' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Quality check', accept: 'm-d',
          why: '<b>Quality check</b> — the final check before a car is handed over. Keep '
        + 'it apart from <i>Road test</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Road test', accept: 'm-a',
          why: '<b>Road test</b> — driving the car to check it is safe. Keep it apart from '
        + '<i>Quality check</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Defect', art: 'defect', accept: 'm-f',
          why: '<b>Defect</b> — a fault, something wrong with the car. Keep it apart from '
        + '<i>Quality check</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Sign-off', art: 'sign-off', accept: 'm-b',
          why: '<b>Sign-off</b> — when someone signs to say the work is correct. Keep it '
        + 'apart from <i>Quality check</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Warranty', art: 'warranty', accept: 'm-e',
          why: '<b>Warranty</b> — a promise to repair or replace for free for a time. Keep '
        + 'it apart from <i>Quality check</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Recall', art: 'recall', accept: 'm-g',
          why: '<b>Recall</b> — when the carmaker asks owners to bring cars back to fix a '
        + 'fault. Keep it apart from <i>Quality check</i>, which is a different part '
        + 'of the same system. The meaning left in the pool belongs to nothing on '
        + 'this card.' },
        { id: 't7', num: 7, label: 'Genuine part', art: 'genuine part', accept: 'm-h',
          why: '<b>Genuine part</b> — a part made by the carmaker. Keep it apart from '
        + '<i>Quality check</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a car the garage lends the customer”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>warranty</b> — a promise that certain repairs are free '
        + 'for a time</div><div><b>recall</b> — when the carmaker asks owners to fix '
        + 'a fault for free</div><div><b>sign-off</b> — signing to say the work is '
        + 'correct</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 8 · Part 1', type: 'study',
      title: 'The Quality Check Table',
      instruction: 'The book prints a table here and asks you to complete it. Read the worked '
        + 'row, then do the two cards on this screen — they practise the same words.',
      html: '<div style="font-size:16px;line-height:1.9">'
        + '<span class="eg-model"><b>Worked example</b>0. Road test — to make sure '
        + 'the car is safe to drive.</span>'
        + '<div class="note warm" style="margin-top:12px">'
        + '<h4>What is missing, and why you are seeing this</h4>'
        + 'The book\'s table has more rows than the one worked for you. They are not '
        + 'in this course\'s extraction of the book, and a page that invented them '
        + 'would be teaching something the book does not say. The coverage manifest '
        + 'for this unit records the gap, and the rows will be added when the table '
        + 'is re-extracted.'
        + '</div></div>',
      doneLabel: 'I have read the worked row',
      playable: ['Road test — to make sure the car is safe to drive.']
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 8 · Part 1', type: 'dragmatch',
      title: 'Quality Rules and Reasons',
      instruction: 'Match each rule with its reason. One reason is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) it could be dangerous' },
        { id: 'm-b', label: 'b) to make the car look nice' },
        { id: 'm-c', label: 'c) to make sure it is safe' },
        { id: 'm-d', label: 'd) to meet the standard' },
        { id: 'm-e', label: 'e) it is dishonest and unsafe' },
        { id: 'm-f', label: 'f) to show who checked it' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Every car must pass the road test', accept: 'm-c',
          why: '<b>Every car must pass the road test</b> — to make sure it is safe. Keep '
        + 'it apart from <i>You mustn’t hand over a car with a fault</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't2', num: 2, label: 'You mustn’t hand over a car with a fault', accept: 'm-a',
          why: '<b>You mustn’t hand over a car with a fault</b> — it could be dangerous. '
        + 'Keep it apart from <i>Every car must pass the road test</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't3', num: 3, label: 'We must use genuine parts under warranty', accept: 'm-d',
          why: '<b>We must use genuine parts under warranty</b> — to meet the standard. '
        + 'Keep it apart from <i>Every car must pass the road test</i>, which is a '
        + 'different part of the same system. The meaning left in the pool belongs to '
        + 'nothing on this card.' },
        { id: 't4', num: 4, label: 'Every job must be signed off', accept: 'm-f',
          why: '<b>Every job must be signed off</b> — to show who checked it. Keep it '
        + 'apart from <i>Every car must pass the road test</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' },
        { id: 't5', num: 5, label: 'You mustn’t hide a defect', accept: 'm-e',
          why: '<b>You mustn’t hide a defect</b> — it is dishonest and unsafe. Keep it '
        + 'apart from <i>Every car must pass the road test</i>, which is a different '
        + 'part of the same system. The meaning left in the pool belongs to nothing '
        + 'on this card.' }
      ],
      after: 'The meaning left over is “to make the car look nice”, which belongs to '
        + 'nothing on this card.'
    }
  ]
});
