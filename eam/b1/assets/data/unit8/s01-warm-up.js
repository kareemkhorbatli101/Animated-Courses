/* Unit 8 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u8-s01', {
  book: { source: 'EAM B1', ref: 'Unit 8 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 8.',
  video: 'u08v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 8 · Part 0', type: 'dragmatch',
      title: 'Quality and Warranty Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) a promise to repair or replace for free for a time' },
        { id: 'm-b', label: 'b) money paid first, before the work' },
        { id: 'm-c', label: 'c) when the carmaker asks owners to bring cars back to fix a fault' },
        { id: 'm-d', label: 'd) a fault, something wrong with the car' },
        { id: 'm-e', label: 'e) a part made by the carmaker' },
        { id: 'm-f', label: 'f) driving the car to check it works safely' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Defect', art: 'defect', accept: 'm-d',
          why: '<b>Defect</b> — a fault, something wrong with the car. Keep it apart from '
        + '<i>Warranty</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Warranty', art: 'warranty', accept: 'm-a',
          why: '<b>Warranty</b> — a promise to repair or replace for free for a time. Keep '
        + 'it apart from <i>Defect</i>, which is a different part of the same system. '
        + 'The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Road test', accept: 'm-f',
          why: '<b>Road test</b> — driving the car to check it works safely. Keep it apart '
        + 'from <i>Defect</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Genuine part', art: 'genuine part', accept: 'm-e',
          why: '<b>Genuine part</b> — a part made by the carmaker. Keep it apart from '
        + '<i>Defect</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Recall', art: 'recall', accept: 'm-c',
          why: '<b>Recall</b> — when the carmaker asks owners to bring cars back to fix a '
        + 'fault. Keep it apart from <i>Defect</i>, which is a different part of the '
        + 'same system. The meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “money paid first, before the work”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 8 · Part 0', type: 'cloze',
      title: 'The Rules of Quality',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. Every car [[1]] pass the quality check.' + '<br>'
        + '2. You [[2]] hand over a car with a fault.' + '<br>'
        + '3. Under warranty, we [[3]] to use genuine parts.' + '<br>'
        + '4. If the car is fine, you [[4]] have to change anything.' + '<br>'
        + '</div>',
      answers: {
        '1': ['must'],
        '2': ['mustn’t'],
        '3': ['have'],
        '4': ['don’t']
      },
      bank: ['must', 'mustn’t', 'have', 'don’t'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>must</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>mustn’t</i>, <i>have</i> in the bank.',
        '2': '<b>mustn’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i>, <i>have</i> in the bank.',
        '3': '<b>have</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>must</i>, <i>mustn’t</i> in the bank.',
        '4': '<b>don’t</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>must</i>, <i>mustn’t</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 8 · Part 0', type: 'study',
      title: 'Read: Reading About Quality',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Quality is a promise. At a good service centre, every car must pass a road '
        + 'test and a quality check before it is handed over. You mustn’t give a car '
        + 'back with a fault.' + '</p>'
        + '<p>' + 'If a car is under warranty, the garage has to use genuine parts and follow '
        + 'the carmaker’s standards. A warranty means the customer’s repair is free '
        + 'for a time. Good quality and honest warranty work build trust.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['Quality is a promise. At a good service centre, every car must pass a road '
        + 'test and a quality check before it is handed over. You mustn’t give a car '
        + 'b',
        'If a car is under warranty, the garage has to use genuine parts and follow '
        + 'the carmaker’s standards. A warranty means the customer’s repair is free '
        + 'fo']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 8 · Part 0', type: 'quizset',
      title: 'Reading About Quality',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What must every car pass before handover?',
          options: [
            { t: 'A race', ok: false,
              why: 'Not this one. A race is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What must '
        + 'every car pass before handover”.' },
            { t: 'A road test and a quality check', ok: true,
              why: 'Right — A road test and a quality check. Check it against the text or the '
        + 'card you met it on: this is stated, not inferred.' },
            { t: 'A wash', ok: false,
              why: 'Not this one. A wash is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What must '
        + 'every car pass before handover”.' },
            { t: 'Nothing', ok: false,
              why: 'Not this one. Nothing is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must every car pass before handover”.' }
          ]
        },
        {
          q: '2. What must a garage use under warranty?',
          options: [
            { t: 'Any cheap part', ok: false,
              why: 'Not this one. Any cheap part is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What must a garage use under warranty”.' },
            { t: 'Old parts', ok: false,
              why: 'Not this one. Old parts is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must a garage use under warranty”.' },
            { t: 'No parts', ok: false,
              why: 'Not this one. No parts is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'must a garage use under warranty”.' },
            { t: 'Genuine parts', ok: true,
              why: 'Right — Genuine parts. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' }
          ]
        }
      ]
    }
  ]
});
