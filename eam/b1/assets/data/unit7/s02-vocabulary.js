/* Unit 7 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s02', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 7.',
  video: 'u07v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 7 · Part 1', type: 'dragmatch',
      title: 'Service Desk Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Invoice → the bill that shows the final ', a: 'Invoice → the bill that shows the final price.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) when a time is saved for a customer’s car' },
        { id: 'm-b', label: 'b) a car the garage lends the customer' },
        { id: 'm-c', label: 'c) the final check before the car goes back' },
        { id: 'm-d', label: 'd) a fixed time to bring the car in' },
        { id: 'm-e', label: 'e) when the finished car is given back to the customer' },
        { id: 'm-f', label: 'f) a paper that shows how much the work will cost' },
        { id: 'm-g', label: 'g) money paid first, before the work' },
        { id: 'm-h', label: 'h) a request to a supplier to send parts' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Appointment', art: 'appointment', accept: 'm-d',
          why: '<b>Appointment</b> — a fixed time to bring the car in. Keep it apart from '
        + '<i>Booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Booking', art: 'booking', accept: 'm-a',
          why: '<b>Booking</b> — when a time is saved for a customer’s car. Keep it apart '
        + 'from <i>Appointment</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Estimate', art: 'estimate', accept: 'm-f',
          why: '<b>Estimate</b> — a paper that shows how much the work will cost. Keep it '
        + 'apart from <i>Appointment</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Deposit', art: 'deposit', accept: 'm-g',
          why: '<b>Deposit</b> — money paid first, before the work. Keep it apart from '
        + '<i>Appointment</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Parts order', art: 'parts order', accept: 'm-h',
          why: '<b>Parts order</b> — a request to a supplier to send parts. Keep it apart '
        + 'from <i>Appointment</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Courtesy car', art: 'courtesy car', accept: 'm-b',
          why: '<b>Courtesy car</b> — a car the garage lends the customer. Keep it apart '
        + 'from <i>Appointment</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Handover', accept: 'm-e',
          why: '<b>Handover</b> — when the finished car is given back to the customer. '
        + 'Keep it apart from <i>Appointment</i>, which is a different part of the '
        + 'same system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “the final check before the car goes back”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>estimate</b> — a paper that shows the price before the '
        + 'work</div><div><b>deposit</b> — money paid first, before the '
        + 'work</div><div><b>courtesy car</b> — a car the garage lends the '
        + 'customer</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 7 · Part 1', type: 'study',
      title: 'Desk Tasks Table',
      instruction: 'The book prints a table here and asks you to complete it. Read the worked '
        + 'row, then do the two cards on this screen — they practise the same words.',
      html: '<div style="font-size:16px;line-height:1.9">'
        + '<span class="eg-model"><b>Worked example</b>0. Make an appointment — '
        + 'before the car comes in.</span>'
        + '<div class="note warm" style="margin-top:12px">'
        + '<h4>What is missing, and why you are seeing this</h4>'
        + 'The book\'s table has more rows than the one worked for you. They are not '
        + 'in this course\'s extraction of the book, and a page that invented them '
        + 'would be teaching something the book does not say. The coverage manifest '
        + 'for this unit records the gap, and the rows will be added when the table '
        + 'is re-extracted.'
        + '</div></div>',
      doneLabel: 'I have read the worked row',
      playable: ['Make an appointment — before the car comes in.']
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 7 · Part 1', type: 'dragmatch',
      title: 'The Steps of an Order',
      instruction: 'Match each step with what happens. One is not needed. Write the letter. '
        + 'Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) the customer is told the price' },
        { id: 'm-b', label: 'b) the customer pays the invoice and collects the car' },
        { id: 'm-c', label: 'c) the car is sold to a new owner' },
        { id: 'm-d', label: 'd) a time is saved for the car' },
        { id: 'm-e', label: 'e) the customer pays some money first' },
        { id: 'm-f', label: 'f) the car is serviced or repaired' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Booking', art: 'booking', accept: 'm-d',
          why: '<b>Booking</b> — a time is saved for the car. Keep it apart from '
        + '<i>Estimate</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Estimate', art: 'estimate', accept: 'm-a',
          why: '<b>Estimate</b> — the customer is told the price. Keep it apart from '
        + '<i>Booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Deposit', art: 'deposit', accept: 'm-e',
          why: '<b>Deposit</b> — the customer pays some money first. Keep it apart from '
        + '<i>Booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Work', accept: 'm-f',
          why: '<b>Work</b> — the car is serviced or repaired. Keep it apart from '
        + '<i>Booking</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Handover', accept: 'm-b',
          why: '<b>Handover</b> — the customer pays the invoice and collects the car. Keep '
        + 'it apart from <i>Booking</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “the car is sold to a new owner”, which belongs '
        + 'to nothing on this card.'
    }
  ]
});
