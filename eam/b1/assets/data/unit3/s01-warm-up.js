/* Unit 3 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u3-s01', {
  book: { source: 'EAM B1', ref: 'Unit 3 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 3.',
  video: 'u03v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 3 · Part 0', type: 'dragmatch',
      title: 'Tools and Their Uses',
      instruction: 'Match the tools with their uses. One use is not needed. Write the letter. '
        + 'Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) you use it to turn screws' },
        { id: 'm-b', label: 'b) you use it to check the oil level' },
        { id: 'm-c', label: 'c) you use it to lift the car up' },
        { id: 'm-d', label: 'd) you use it to turn nuts and bolts' },
        { id: 'm-e', label: 'e) you use it to tighten a bolt to the right level' },
        { id: 'm-f', label: 'f) you use them to hold or bend things' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Spanner', accept: 'm-d',
          why: '<b>Spanner</b> — you use it to turn nuts and bolts. Keep it apart from '
        + '<i>Screwdriver</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Screwdriver', accept: 'm-a',
          why: '<b>Screwdriver</b> — you use it to turn screws. Keep it apart from '
        + '<i>Spanner</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Jack', accept: 'm-c',
          why: '<b>Jack</b> — you use it to lift the car up. Keep it apart from '
        + '<i>Spanner</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Pliers', accept: 'm-f',
          why: '<b>Pliers</b> — you use them to hold or bend things. Keep it apart from '
        + '<i>Spanner</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Torque wrench', accept: 'm-e',
          why: '<b>Torque wrench</b> — you use it to tighten a bolt to the right level. '
        + 'Keep it apart from <i>Spanner</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “you use it to check the oil level”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 3 · Part 0', type: 'cloze',
      title: 'In the Workshop',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Wear [[1]] to protect your hands.' + '<br>'
        + '2. Wear [[2]] to protect your eyes.' + '<br>'
        + '3. Use a [[3]] to lift the car.' + '<br>'
        + '4. Keep your area [[4]] and safe.' + '<br>'
        + '</div>',
      answers: {
        '1': ['gloves'],
        '2': ['goggles'],
        '3': ['jack'],
        '4': ['tidy']
      },
      bank: ['gloves', 'goggles', 'jack', 'tidy'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>gloves</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>goggles</i>, <i>jack</i> in the bank.',
        '2': '<b>goggles</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>gloves</i>, <i>jack</i> in the bank.',
        '3': '<b>jack</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>gloves</i>, <i>goggles</i> in the bank.',
        '4': '<b>tidy</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>gloves</i>, <i>goggles</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 3 · Part 0', type: 'study',
      title: 'Read: Reading About Safety',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Safety is the most important rule in the workshop. First, put on your '
        + 'safety glasses and gloves. Then check your tools. Always use axle stands '
        + 'when a car is up on a jack. Never work under a car on a jack alone.' + '</p>'
        + '<p>' + 'Keep the floor clean, and put oil and rags away. A tidy, careful workshop '
        + 'is a safe workshop.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Safety is the most important rule in the workshop. First, put on your '
        + 'safety glasses and gloves. Then check your tools. Always use axle stands '
        + 'when a',
        'Keep the floor clean, and put oil and rags away. A tidy, careful workshop '
        + 'is a safe workshop.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 3 · Part 0', type: 'quizset',
      title: 'Reading About Safety',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What must you put on first?',
          options: [
            { t: 'Nothing', ok: false,
              why: 'Not this one. Nothing is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must you put on first”.' },
            { t: 'Your phone', ok: false,
              why: 'Not this one. Your phone is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must you put on first”.' },
            { t: 'Your coat', ok: false,
              why: 'Not this one. Your coat is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must you put on first”.' },
            { t: 'Safety glasses and gloves', ok: true,
              why: 'Right — Safety glasses and gloves. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' }
          ]
        },
        {
          q: '2. When a car is up on a jack, what must you always use?',
          options: [
            { t: 'A radio', ok: false,
              why: 'Not this one. A radio is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “When a '
        + 'car is up on a jack, what must you always use”.' },
            { t: 'A cup', ok: false,
              why: 'Not this one. A cup is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “When a car '
        + 'is up on a jack, what must you always use”.' },
            { t: 'Axle stands', ok: true,
              why: 'Right — Axle stands. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'A broom', ok: false,
              why: 'Not this one. A broom is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “When a '
        + 'car is up on a jack, what must you always use”.' }
          ]
        }
      ]
    }
  ]
});
