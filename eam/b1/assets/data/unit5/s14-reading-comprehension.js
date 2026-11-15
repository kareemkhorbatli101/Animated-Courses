/* Unit 5 §14 — Part 5 - Reading, comprehension.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s14', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 5 - Reading, comprehension', part: '5', section: '14',
          lesson: 'Part 5 - Reading, comprehension', title: 'Part 5 - Reading, comprehension' },
  objective: 'Work through Part 5 - Reading, comprehension of unit 5.',
  video: 'u05v14',
  prev: 's13-reading-text', prevLabel: 'Part 5 - Reading, the text',
  next: 's15-writing-model', nextLabel: 'Part 6 - Writing, the model',
  cards: [
    {
      id: 'c1', covers: ['Part 5'], ref: '5A',
      bookRef: 'Unit 5 · Part 5', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word from the text with its meaning. One meaning is not needed. '
        + 'Write the letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) the paper that follows the car through every step' },
        { id: 'm-b', label: 'b) to write a car into the system when it arrives' },
        { id: 'm-c', label: 'c) a tool that measures pressure' },
        { id: 'm-d', label: 'd) the final check before handover' },
        { id: 'm-e', label: 'e) to find out what is wrong' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'book in', art: 'book in', accept: 'm-b',
          why: '<b>book in</b> — to write a car into the system when it arrives. Keep it '
        + 'apart from <i>job card</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'job card', art: 'job-card', accept: 'm-a',
          why: '<b>job card</b> — the paper that follows the car through every step. Keep '
        + 'it apart from <i>book in</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'diagnose', art: 'diagnose', accept: 'm-e',
          why: '<b>diagnose</b> — to find out what is wrong. Keep it apart from <i>book '
        + 'in</i>, which is a different part of the same system. The meaning left in '
        + 'the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'quality check', art: 'quality check', accept: 'm-d',
          why: '<b>quality check</b> — the final check before handover. Keep it apart from '
        + '<i>book in</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that measures pressure”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 5 · Part 5', type: 'study',
      title: 'Read: A Big Fleet Order in Syria',
      instruction: '<b>Before you read:</b> how can a service centre do a very big order '
        + 'quickly? Say your guess, then read and see. Press a paragraph button to '
        + 'hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'One week, a taxi company brought twenty cars to Cham Motors. All of them '
        + 'needed a service before a busy season. This was a big order, and it had to '
        + 'be done in three days. Maher made a clear plan.' + '</p>'
        + '<p>' + 'The cars were booked in ten at a time. In the workshop, the oil and '
        + 'filters were changed, and the brakes and tyres were checked. Each car was '
        + 'road-tested and given a quality check before it was returned.' + '</p>'
        + '<p>' + 'The parts store was busy, because many filters and litres of oil were '
        + 'used. The team worked in order, car by car, and every job was written '
        + 'down. After three days, all twenty taxis were handed over, safe and ready.' + '</p>'
        + '<p>' + 'The taxi company was happy, and it became a regular customer. A big job is '
        + 'not hard if the process is clear.' + '</p>'
        + '</div>'
        + '<div class="note" style="margin-top:12px"><h4>Glossary, as the book prints '
        + 'it</h4><div><b>fleet</b> — a group of cars owned by one '
        + 'company</div><div><b>season</b> — a busy time of the year</div></div>',
      doneLabel: 'I have read the text',
      playable: ['One week, a taxi company brought twenty cars to Cham Motors. All of them '
        + 'needed a service before a busy season. This was a big order, and it had to '
        + 'be',
        'The cars were booked in ten at a time. In the workshop, the oil and '
        + 'filters were changed, and the brakes and tyres were checked. Each car was '
        + 'road-tes',
        'The parts store was busy, because many filters and litres of oil were '
        + 'used. The team worked in order, car by car, and every job was written '
        + 'down. Afte',
        'The taxi company was happy, and it became a regular customer. A big job is '
        + 'not hard if the process is clear.']
    },
    {
      id: 'c3', covers: ['Part 5'], ref: '5B',
      bookRef: 'Unit 5 · Part 5', type: 'tristate',
      title: 'A Big Fleet Order in Syria',
      instruction: 'Write True or False. (0. is done.) Every statement is settled by the text: '
        + 'read it again rather than answering from what you already know.',
      given: { t: 'A taxi company brought twenty cars.', ans: 'T', line: '1',
        why: 'Done for you. The text states it, which is what a True answer looks like.' },
      whyTitle: 'What settles each statement',
      items: [
        { t: 'The order had to be done in one day.', ans: 'F',
          why: '<b>False.</b> The text says: “This was a big order, and it had to be done '
        + 'in three days.”. The text says something that cannot be true at the same '
        + 'time — which is what makes this False rather than Not Given. (three days)' },
        { t: 'Each car was given a quality check before it was returned.', ans: 'T',
          why: '<b>True.</b> The text says: “Each car was road-tested and given a quality '
        + 'check before it was returned.”. A statement is True when the text SAYS it, '
        + 'not when it sounds likely.' },
        { t: 'The taxi company became a regular customer.', ans: 'T',
          why: '<b>True.</b> The text says: “The taxi company was happy, and it became a '
        + 'regular customer.”. A statement is True when the text SAYS it, not when it '
        + 'sounds likely.' }
      ]
    }
  ]
});
