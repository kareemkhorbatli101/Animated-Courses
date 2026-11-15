/* Unit 2 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u2-s01', {
  book: { source: 'EAM B1', ref: 'Unit 2 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 2.',
  video: 'u02v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 2 · Part 0', type: 'dragmatch',
      title: 'Fluids and Parts',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) a part that cleans the air, oil, or fuel' },
        { id: 'm-b', label: 'b) it stores electricity to start the car' },
        { id: 'm-c', label: 'c) the rubber part that touches the road' },
        { id: 'm-d', label: 'd) a liquid that keeps the engine parts moving smoothly' },
        { id: 'm-e', label: 'e) it holds the coolant and lets heat escape' },
        { id: 'm-f', label: 'f) a liquid that keeps the engine from getting too hot' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Oil', art: 'oil', accept: 'm-d',
          why: '<b>Oil</b> — a liquid that keeps the engine parts moving smoothly. Keep it '
        + 'apart from <i>Coolant</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Coolant', accept: 'm-f',
          why: '<b>Coolant</b> — a liquid that keeps the engine from getting too hot. Keep '
        + 'it apart from <i>Oil</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Battery', art: 'battery', accept: 'm-b',
          why: '<b>Battery</b> — it stores electricity to start the car. Keep it apart '
        + 'from <i>Oil</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Filter', accept: 'm-a',
          why: '<b>Filter</b> — a part that cleans the air, oil, or fuel. Keep it apart '
        + 'from <i>Oil</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Radiator', art: 'radiator', accept: 'm-e',
          why: '<b>Radiator</b> — it holds the coolant and lets heat escape. Keep it apart '
        + 'from <i>Oil</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “the rubber part that touches the road”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 2 · Part 0', type: 'cloze',
      title: 'Checking the Car',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Check the [[1]] level with the dipstick.' + '<br>'
        + '2. The engine is hot; check the [[2]] level.' + '<br>'
        + '3. The car won’t start; maybe the [[3]] is flat.' + '<br>'
        + '4. There is oil on the floor; the engine has a [[4]] .' + '<br>'
        + '</div>',
      answers: {
        '1': ['oil'],
        '2': ['coolant'],
        '3': ['battery'],
        '4': ['leak']
      },
      bank: ['oil', 'coolant', 'battery', 'leak'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>oil</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>coolant</i>, <i>battery</i> in the bank.',
        '2': '<b>coolant</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>battery</i> in the bank.',
        '3': '<b>battery</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>oil</i>, <i>coolant</i> in the bank.',
        '4': '<b>leak</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>oil</i>, <i>coolant</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 2 · Part 0', type: 'study',
      title: 'Read: Reading About the Engine',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Under the bonnet, there are many important parts. There is a battery, a '
        + 'radiator, and an engine. There are also some fluids: engine oil, coolant, '
        + 'and brake fluid. Every service, the mechanic checks the levels.' + '</p>'
        + '<p>' + 'If there isn’t enough oil or coolant, the engine can be damaged. So a good '
        + 'mechanic always checks the fluids first.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Under the bonnet, there are many important parts. There is a battery, a '
        + 'radiator, and an engine. There are also some fluids: engine oil, coolant, '
        + 'and',
        'If there isn’t enough oil or coolant, the engine can be damaged. So a good '
        + 'mechanic always checks the fluids first.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 2 · Part 0', type: 'quizset',
      title: 'Reading About the Engine',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the mechanic check every service?',
          options: [
            { t: 'The tyres', ok: false,
              why: 'Not this one. The tyres is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic check every service”.' },
            { t: 'The doors', ok: false,
              why: 'Not this one. The doors is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic check every service”.' },
            { t: 'The fluid levels', ok: true,
              why: 'Right — The fluid levels. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' },
            { t: 'The seats', ok: false,
              why: 'Not this one. The seats is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic check every service”.' }
          ]
        },
        {
          q: '2. What can happen if there isn’t enough oil?',
          options: [
            { t: 'The car goes faster', ok: false,
              why: 'Not this one. The car goes faster is a real thing in a workshop, but it is '
        + 'not what the question asks about, and nothing in the material links it to '
        + '“What can happen if there isn’t enough oil”.' },
            { t: 'The engine can be damaged', ok: true,
              why: 'Right — The engine can be damaged. Check it against the text or the card '
        + 'you met it on: this is stated, not inferred.' },
            { t: 'Nothing happens', ok: false,
              why: 'Not this one. Nothing happens is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What can happen if there isn’t enough oil”.' },
            { t: 'The radio stops', ok: false,
              why: 'Not this one. The radio stops is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What can happen if there isn’t enough oil”.' }
          ]
        }
      ]
    }
  ]
});
