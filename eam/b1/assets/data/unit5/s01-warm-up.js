/* Unit 5 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s01', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 5.',
  video: 'u05v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 5 · Part 0', type: 'dragmatch',
      title: 'Service Steps',
      instruction: 'Match the steps with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) to look at a car carefully to check it' },
        { id: 'm-b', label: 'b) to lift the car with a jack' },
        { id: 'm-c', label: 'c) to give the car back to the customer' },
        { id: 'm-d', label: 'd) to write a car into the system when it arrives' },
        { id: 'm-e', label: 'e) to drive a car to check it works well' },
        { id: 'm-f', label: 'f) to do the regular checks and work on a car' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Book in', art: 'book in', accept: 'm-d',
          why: '<b>Book in</b> — to write a car into the system when it arrives. Keep it '
        + 'apart from <i>Inspect</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Inspect', art: 'inspect', accept: 'm-a',
          why: '<b>Inspect</b> — to look at a car carefully to check it. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Service', art: 'service', accept: 'm-f',
          why: '<b>Service</b> — to do the regular checks and work on a car. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Road-test', art: 'road-test', accept: 'm-e',
          why: '<b>Road-test</b> — to drive a car to check it works well. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Hand over', art: 'hand over', accept: 'm-c',
          why: '<b>Hand over</b> — to give the car back to the customer. Keep it apart '
        + 'from <i>Book in</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “to lift the car with a jack”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 5 · Part 0', type: 'cloze',
      title: 'The Order of the Work',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. First, the car is [[1]] to find any problems.' + '<br>'
        + '2. Then it is [[2]] : the oil and filters are changed.' + '<br>'
        + '3. Next, it is [[3]] to check it drives well.' + '<br>'
        + '4. Finally, the car is [[4]] over to the customer.' + '<br>'
        + '</div>',
      answers: {
        '1': ['inspected'],
        '2': ['serviced'],
        '3': ['road-tested'],
        '4': ['handed']
      },
      bank: ['inspected', 'serviced', 'road-tested', 'handed'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>inspected</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>serviced</i>, <i>road-tested</i> in the bank.',
        '2': '<b>serviced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>inspected</i>, <i>road-tested</i> in the bank.',
        '3': '<b>road-tested</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>inspected</i>, <i>serviced</i> in the bank.',
        '4': '<b>handed</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>inspected</i>, <i>serviced</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 5 · Part 0', type: 'study',
      title: 'Read: Reading About the Process',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'At a service centre, every car follows the same process. First, the car is '
        + 'booked in at reception. Then it is inspected and serviced in the workshop. '
        + 'After that, it is road-tested and checked by the quality team.' + '</p>'
        + '<p>' + 'Finally, it is cleaned and handed over to the customer. Each step is done '
        + 'in order, so nothing is forgotten.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['At a service centre, every car follows the same process. First, the car is '
        + 'booked in at reception. Then it is inspected and serviced in the workshop. ',
        'Finally, it is cleaned and handed over to the customer. Each step is done '
        + 'in order, so nothing is forgotten.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 5 · Part 0', type: 'quizset',
      title: 'Reading About the Process',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. Where is the car booked in?',
          options: [
            { t: 'At reception', ok: true,
              why: 'Right — At reception. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'In the workshop', ok: false,
              why: 'Not this one. In the workshop is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Where is the car booked in”.' },
            { t: 'On the road', ok: false,
              why: 'Not this one. On the road is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“Where is the car booked in”.' },
            { t: 'At home', ok: false,
              why: 'Not this one. At home is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “Where is '
        + 'the car booked in”.' }
          ]
        },
        {
          q: '2. What happens finally?',
          options: [
            { t: 'It is inspected', ok: false,
              why: 'Not this one. It is inspected is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What happens finally”.' },
            { t: 'It is serviced', ok: false,
              why: 'Not this one. It is serviced is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What happens finally”.' },
            { t: 'It is handed over to the customer', ok: true,
              why: 'Right — It is handed over to the customer. Check it against the text or '
        + 'the card you met it on: this is stated, not inferred.' },
            { t: 'It is booked in', ok: false,
              why: 'Not this one. It is booked in is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What happens finally”.' }
          ]
        }
      ]
    }
  ]
});
