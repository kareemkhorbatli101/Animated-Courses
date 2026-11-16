/* Unit 6 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u6-s01', {
  book: { source: 'EAM B1', ref: 'Unit 6 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 6.',
  video: 'u06v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 6 · Part 0', type: 'dragmatch',
      title: 'Servicing Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) the parts that press to stop the car' },
        { id: 'm-b', label: 'b) a tool that shows a measurement' },
        { id: 'm-c', label: 'c) how far the car has driven' },
        { id: 'm-d', label: 'd) taking out old oil and putting in new oil' },
        { id: 'm-e', label: 'e) a plan that says when to service the car' },
        { id: 'm-f', label: 'f) small parts that light the fuel in the engine' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Oil change', art: 'oil change', accept: 'm-d',
          why: '<b>Oil change</b> — taking out old oil and putting in new oil. Keep it '
        + 'apart from <i>Brake pads</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Brake pads', art: 'brake pads', accept: 'm-a',
          why: '<b>Brake pads</b> — the parts that press to stop the car. Keep it apart '
        + 'from <i>Oil change</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Spark plugs', art: 'spark plugs', accept: 'm-f',
          why: '<b>Spark plugs</b> — small parts that light the fuel in the engine. Keep '
        + 'it apart from <i>Oil change</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Service schedule', art: 'service schedule', accept: 'm-e',
          why: '<b>Service schedule</b> — a plan that says when to service the car. Keep '
        + 'it apart from <i>Oil change</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Mileage', art: 'mileage', accept: 'm-c',
          why: '<b>Mileage</b> — how far the car has driven. Keep it apart from <i>Oil '
        + 'change</i>, which is a different part of the same system. The meaning left '
        + 'in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a tool that shows a measurement”, which belongs '
        + 'to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 6 · Part 0', type: 'cloze',
      title: 'Talking to the Customer',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Your brake pads are worn. You [[1]] change them soon.' + '<br>'
        + '2. [[2]] you check the tyres, please?' + '<br>'
        + '3. [[3]] I top up the coolant for you?' + '<br>'
        + '4. [[4]] you like a full service?' + '<br>'
        + '</div>',
      answers: {
        '1': ['should'],
        '2': ['Could'],
        '3': ['Shall'],
        '4': ['Would']
      },
      bank: ['should', 'Could', 'Shall', 'Would'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>should</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>Could</i>, <i>Shall</i> in the bank.',
        '2': '<b>Could</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>should</i>, <i>Shall</i> in the bank.',
        '3': '<b>Shall</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>should</i>, <i>Could</i> in the bank.',
        '4': '<b>Would</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>should</i>, <i>Could</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 6 · Part 0', type: 'study',
      title: 'Read: Reading About Maintenance',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Routine maintenance keeps a car safe and saves money. At every service, '
        + 'the oil is changed, and the filters are replaced.' + '</p>'
        + '<p>' + 'The brakes and tyres are checked, and the mechanic advises the customer. '
        + '“You should change the brake pads soon,” he might say.' + '</p>'
        + '<p>' + 'Or, “Could you bring the car back in a month?” Good advice, given '
        + 'honestly, keeps the customer safe and builds trust.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Routine maintenance keeps a car safe and saves money. At every service, '
        + 'the oil is changed, and the filters are replaced.',
        'The brakes and tyres are checked, and the mechanic advises the customer. '
        + '“You should change the brake pads soon,” he might say.',
        'Or, “Could you bring the car back in a month?” Good advice, given '
        + 'honestly, keeps the customer safe and builds trust.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 6 · Part 0', type: 'quizset',
      title: 'Reading About Maintenance',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What is changed at every service?',
          options: [
            { t: 'The seats', ok: false,
              why: 'Not this one. The seats is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'changed at every service”.' },
            { t: 'The doors', ok: false,
              why: 'Not this one. The doors is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'changed at every service”.' },
            { t: 'The oil', ok: true,
              why: 'Right — The oil. Check it against the text or the card you met it on: this '
        + 'is stated, not inferred.' },
            { t: 'The colour', ok: false,
              why: 'Not this one. The colour is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'changed at every service”.' }
          ]
        },
        {
          q: '2. What does good, honest advice build?',
          options: [
            { t: 'Trust', ok: true,
              why: 'Right — Trust. Check it against the text or the card you met it on: this '
        + 'is stated, not inferred.' },
            { t: 'Noise', ok: false,
              why: 'Not this one. Noise is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'good, honest advice build”.' },
            { t: 'Dust', ok: false,
              why: 'Not this one. Dust is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'good, honest advice build”.' },
            { t: 'Speed', ok: false,
              why: 'Not this one. Speed is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'good, honest advice build”.' }
          ]
        }
      ]
    }
  ]
});
