/* Unit 6 §2 — Part 1 - Vocabulary.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s02', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Part 1 - Vocabulary', part: '1', section: '2',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 6.',
  video: 'u06v02',
  prev: 's01-warm-up', prevLabel: 'Warm Up',
  next: 's03-pronunciation', nextLabel: 'Part 1 - Pronunciation',
  cards: [
    {
      id: 'c1', covers: ['Part 1'], ref: '1A',
      bookRef: 'Unit 6 · Part 1', type: 'dragmatch',
      title: 'Servicing and Maintenance Terms',
      instruction: 'Match the words with their meanings. One meaning is not needed. (0. is '
        + 'done for you.) Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      worked: { q: '0. Service → the regular check and care a c', a: 'Service → the regular check and care a car needs.',
        why: 'Done for you. Read the first words of each meaning before you start — they say whether you are looking for a part, a place, a liquid or a person.' },
      chips: [
        { id: 'm-a', label: 'a) it cleans the air going into the engine' },
        { id: 'm-b', label: 'b) a plan of when to do each service' },
        { id: 'm-c', label: 'c) a strong stand that holds the car up' },
        { id: 'm-d', label: 'd) removing old oil and adding new oil' },
        { id: 'm-e', label: 'e) the time or distance between services' },
        { id: 'm-f', label: 'f) the parts that press to stop the car' },
        { id: 'm-g', label: 'g) small parts that light the fuel' },
        { id: 'm-h', label: 'h) moving the tyres so they wear evenly' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Oil change', art: 'oil change', accept: 'm-d',
          why: '<b>Oil change</b> — removing old oil and adding new oil. Keep it apart '
        + 'from <i>Air filter</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Air filter', accept: 'm-a',
          why: '<b>Air filter</b> — it cleans the air going into the engine. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Brake pads', art: 'brake pads', accept: 'm-f',
          why: '<b>Brake pads</b> — the parts that press to stop the car. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Tyre rotation', art: 'tyre rotation', accept: 'm-h',
          why: '<b>Tyre rotation</b> — moving the tyres so they wear evenly. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Spark plugs', art: 'spark plugs', accept: 'm-g',
          why: '<b>Spark plugs</b> — small parts that light the fuel. Keep it apart from '
        + '<i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't6', num: 6, label: 'Service schedule', art: 'service schedule', accept: 'm-b',
          why: '<b>Service schedule</b> — a plan of when to do each service. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't7', num: 7, label: 'Interval', art: 'interval', accept: 'm-e',
          why: '<b>Interval</b> — the time or distance between services. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a strong stand that holds the car up”, which '
        + 'belongs to nothing on this card.<div class="note" '
        + 'style="margin-top:12px"><h4>The words the book glosses '
        + 'here</h4><div><b>tyre rotation</b> — moving the tyres so they wear '
        + 'evenly</div><div><b>interval</b> — the time or distance between '
        + 'services</div><div><b>service schedule</b> — a plan of when to do each '
        + 'service</div></div>'
    },
    {
      id: 'c2', covers: ['Part 1'], ref: '1B',
      bookRef: 'Unit 6 · Part 1', type: 'study',
      title: 'Service Jobs Table',
      instruction: 'The book prints a table here and asks you to complete it. Read the worked '
        + 'row, then do the two cards on this screen — they practise the same words.',
      html: '<div style="font-size:16px;line-height:1.9">'
        + '<span class="eg-model"><b>Worked example</b>0. Change the oil — to keep '
        + 'the engine parts moving smoothly.</span>'
        + '<div class="note warm" style="margin-top:12px">'
        + '<h4>What is missing, and why you are seeing this</h4>'
        + 'The book\'s table has more rows than the one worked for you. They are not '
        + 'in this course\'s extraction of the book, and a page that invented them '
        + 'would be teaching something the book does not say. The coverage manifest '
        + 'for this unit records the gap, and the rows will be added when the table '
        + 'is re-extracted.'
        + '</div></div>',
      doneLabel: 'I have read the worked row',
      playable: ['Change the oil — to keep the engine parts moving smoothly.']
    },
    {
      id: 'c3', covers: ['Part 1'], ref: '1C',
      bookRef: 'Unit 6 · Part 1', type: 'dragmatch',
      title: 'Service Jobs and Why We Do Them',
      instruction: 'Match each job with its reason. One reason is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) to keep clean air, oil, and fuel' },
        { id: 'm-b', label: 'b) so the tyres wear evenly' },
        { id: 'm-c', label: 'c) to clean the windscreen' },
        { id: 'm-d', label: 'd) to keep the engine parts moving smoothly' },
        { id: 'm-e', label: 'e) to make sure the car stops safely' },
        { id: 'm-f', label: 'f) to stop the engine getting too hot' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Change the oil', accept: 'm-d',
          why: '<b>Change the oil</b> — to keep the engine parts moving smoothly. Keep it '
        + 'apart from <i>Replace the filters</i>, which is a different part of the '
        + 'same system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Replace the filters', accept: 'm-a',
          why: '<b>Replace the filters</b> — to keep clean air, oil, and fuel. Keep it '
        + 'apart from <i>Change the oil</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Check the brakes', accept: 'm-e',
          why: '<b>Check the brakes</b> — to make sure the car stops safely. Keep it apart '
        + 'from <i>Change the oil</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Rotate the tyres', accept: 'm-b',
          why: '<b>Rotate the tyres</b> — so the tyres wear evenly. Keep it apart from '
        + '<i>Change the oil</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Check the coolant', accept: 'm-f',
          why: '<b>Check the coolant</b> — to stop the engine getting too hot. Keep it '
        + 'apart from <i>Change the oil</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “to clean the windscreen”, which belongs to '
        + 'nothing on this card.'
    }
  ]
});
