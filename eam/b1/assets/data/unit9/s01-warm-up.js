/* Unit 9 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u9-s01', {
  book: { source: 'EAM B1', ref: 'Unit 9 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 9.',
  video: 'u09v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 9 · Part 0', type: 'dragmatch',
      title: 'Diagnosis Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) a light on the dashboard that shows a problem' },
        { id: 'm-b', label: 'b) a part made by the carmaker' },
        { id: 'm-c', label: 'c) when a customer brings the car back with the same problem' },
        { id: 'm-d', label: 'd) a sign that something is wrong' },
        { id: 'm-e', label: 'e) to fix a fault' },
        { id: 'm-f', label: 'f) to find out what is wrong' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Symptom', art: 'symptom', accept: 'm-d',
          why: '<b>Symptom</b> — a sign that something is wrong. Keep it apart from '
        + '<i>Warning light</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Warning light', art: 'warning light', accept: 'm-a',
          why: '<b>Warning light</b> — a light on the dashboard that shows a problem. Keep '
        + 'it apart from <i>Symptom</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Diagnose', accept: 'm-f',
          why: '<b>Diagnose</b> — to find out what is wrong. Keep it apart from '
        + '<i>Symptom</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Repair', art: 'repair', accept: 'm-e',
          why: '<b>Repair</b> — to fix a fault. Keep it apart from <i>Symptom</i>, which '
        + 'is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Comeback', art: 'comeback', accept: 'm-c',
          why: '<b>Comeback</b> — when a customer brings the car back with the same '
        + 'problem. Keep it apart from <i>Symptom</i>, which is a different part of '
        + 'the same system. The meaning left in the pool belongs to nothing on this '
        + 'card.' }
      ],
      after: 'The meaning left over is “a part made by the carmaker”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 9 · Part 0', type: 'cloze',
      title: 'Talking About Repairs',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Yesterday, I [[1]] the brake pads.' + '<br>'
        + '2. [[2]] you checked the battery yet?' + '<br>'
        + '3. The car [[3]] come back with the same noise.' + '<br>'
        + '4. I’ve already [[4]] the tyres.' + '<br>'
        + '</div>',
      answers: {
        '1': ['replaced'],
        '2': ['Have'],
        '3': ['has'],
        '4': ['checked']
      },
      bank: ['replaced', 'Have', 'has', 'checked'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>replaced</b>. The sentence names what this one DOES, which is what '
        + 'tells it apart from <i>Have</i>, <i>has</i> in the bank.',
        '2': '<b>Have</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>replaced</i>, <i>has</i> in the bank.',
        '3': '<b>has</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>replaced</i>, <i>Have</i> in the bank.',
        '4': '<b>checked</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>replaced</i>, <i>Have</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 9 · Part 0', type: 'study',
      title: 'Read: Reading About Fault-Finding',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'When a car has a fault, the mechanic must find it. First, he looks at the '
        + 'symptoms: a noise, a warning light, or a leak. Then he diagnoses the '
        + 'problem, often with a computer. He repairs it, or replaces the part.' + '</p>'
        + '<p>' + 'After the repair, he road-tests the car again, to be sure. If a car comes '
        + 'back with the same fault, that is a comeback, and a good garage fixes it '
        + 'for free. “Have you road-tested it?” the foreman always asks.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['When a car has a fault, the mechanic must find it. First, he looks at the '
        + 'symptoms: a noise, a warning light, or a leak. Then he diagnoses the '
        + 'problem',
        'After the repair, he road-tests the car again, to be sure. If a car comes '
        + 'back with the same fault, that is a comeback, and a good garage fixes it '
        + 'for']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 9 · Part 0', type: 'quizset',
      title: 'Reading About Fault-Finding',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the mechanic look at first?',
          options: [
            { t: 'The symptoms', ok: true,
              why: 'Right — The symptoms. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'The price', ok: false,
              why: 'Not this one. The price is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' },
            { t: 'The colour', ok: false,
              why: 'Not this one. The colour is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' },
            { t: 'The tyres', ok: false,
              why: 'Not this one. The tyres is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the mechanic look at first”.' }
          ]
        },
        {
          q: '2. What is a comeback?',
          options: [
            { t: 'A new car', ok: false,
              why: 'Not this one. A new car is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a comeback”.' },
            { t: 'A road test', ok: false,
              why: 'Not this one. A road test is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What is a comeback”.' },
            { t: 'When a car returns with the same fault', ok: true,
              why: 'Right — When a car returns with the same fault. Check it against the text '
        + 'or the card you met it on: this is stated, not inferred.' },
            { t: 'A warranty', ok: false,
              why: 'Not this one. A warranty is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What is '
        + 'a comeback”.' }
          ]
        }
      ]
    }
  ]
});
