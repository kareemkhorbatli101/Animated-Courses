/* Unit 4 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u4-s01', {
  book: { source: 'EAM B1', ref: 'Unit 4 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 4.',
  video: 'u04v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 4 · Part 0', type: 'dragmatch',
      title: 'Measuring Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) how hard the air pushes inside a tyre' },
        { id: 'm-b', label: 'b) a strong stand that holds the car up' },
        { id: 'm-c', label: 'c) the number a tool or meter shows' },
        { id: 'm-d', label: 'd) a tool that shows a measurement' },
        { id: 'm-e', label: 'e) the amount of electric power, in volts' },
        { id: 'm-f', label: 'f) the pattern of grooves on a tyre' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Gauge', art: 'gauge', accept: 'm-d',
          why: '<b>Gauge</b> — a tool that shows a measurement. Keep it apart from '
        + '<i>Pressure</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Pressure', accept: 'm-a',
          why: '<b>Pressure</b> — how hard the air pushes inside a tyre. Keep it apart '
        + 'from <i>Gauge</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Tread', accept: 'm-f',
          why: '<b>Tread</b> — the pattern of grooves on a tyre. Keep it apart from '
        + '<i>Gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Voltage', art: 'voltage', accept: 'm-e',
          why: '<b>Voltage</b> — the amount of electric power, in volts. Keep it apart '
        + 'from <i>Gauge</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Reading', art: 'reading', accept: 'm-c',
          why: '<b>Reading</b> — the number a tool or meter shows. Keep it apart from '
        + '<i>Gauge</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a strong stand that holds the car up”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 4 · Part 0', type: 'cloze',
      title: 'Checking the Numbers',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Check the tyre [[1]] with a gauge.' + '<br>'
        + '2. If the [[2]] is low, the tyre is worn.' + '<br>'
        + '3. Use a [[3]] to measure the pressure.' + '<br>'
        + '4. Check the battery [[4]] with a meter.' + '<br>'
        + '</div>',
      answers: {
        '1': ['pressure'],
        '2': ['tread'],
        '3': ['gauge'],
        '4': ['voltage']
      },
      bank: ['pressure', 'tread', 'gauge', 'voltage'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>pressure</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>tread</i>, <i>gauge</i> in the bank.',
        '2': '<b>tread</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>gauge</i> in the bank.',
        '3': '<b>gauge</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>tread</i> in the bank.',
        '4': '<b>voltage</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>pressure</i>, <i>tread</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 4 · Part 0', type: 'study',
      title: 'Read: Reading About Measuring',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'A good mechanic measures carefully. He checks the tyre pressure with a '
        + 'gauge, and he measures the tread depth in millimetres. He checks the '
        + 'battery voltage with a meter. Every reading has a correct level, called '
        + 'the tolerance.' + '</p>'
        + '<p>' + 'If a reading is too high or too low, there is a problem. Numbers help the '
        + 'mechanic find faults quickly.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['A good mechanic measures carefully. He checks the tyre pressure with a '
        + 'gauge, and he measures the tread depth in millimetres. He checks the '
        + 'battery vo',
        'If a reading is too high or too low, there is a problem. Numbers help the '
        + 'mechanic find faults quickly.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 4 · Part 0', type: 'quizset',
      title: 'Reading About Measuring',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the mechanic use to check the tyre pressure?',
          options: [
            { t: 'A spanner', ok: false,
              why: 'Not this one. A spanner is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic use to check the tyre pressure”.' },
            { t: 'A gauge', ok: true,
              why: 'Right — A gauge. Check it against the text or the card you met it on: this '
        + 'is stated, not inferred.' },
            { t: 'A jack', ok: false,
              why: 'Not this one. A jack is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the mechanic use to check the tyre pressure”.' },
            { t: 'A hammer', ok: false,
              why: 'Not this one. A hammer is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic use to check the tyre pressure”.' }
          ]
        },
        {
          q: '2. What does ‘tolerance’ mean?',
          options: [
            { t: 'The colour', ok: false,
              why: 'Not this one. The colour is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does ‘tolerance’ mean”.' },
            { t: 'The price', ok: false,
              why: 'Not this one. The price is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does ‘tolerance’ mean”.' },
            { t: 'The weight', ok: false,
              why: 'Not this one. The weight is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does ‘tolerance’ mean”.' },
            { t: 'The correct level for a reading', ok: true,
              why: 'Right — The correct level for a reading. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' }
          ]
        }
      ]
    }
  ]
});
