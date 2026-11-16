/* Unit 7 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u7-s01', {
  book: { source: 'EAM B1', ref: 'Unit 7 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 7.',
  video: 'u07v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 7 · Part 0', type: 'dragmatch',
      title: 'Service Desk Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) a paper that shows how much the work will cost' },
        { id: 'm-b', label: 'b) the paper that lists the work to do' },
        { id: 'm-c', label: 'c) the bill that shows the final price' },
        { id: 'm-d', label: 'd) a fixed time to bring the car in' },
        { id: 'm-e', label: 'e) a car the garage lends the customer while they wait' },
        { id: 'm-f', label: 'f) money the customer pays first, before the work' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Appointment', art: 'appointment', accept: 'm-d',
          why: '<b>Appointment</b> — a fixed time to bring the car in. Keep it apart from '
        + '<i>Estimate</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Estimate', art: 'estimate', accept: 'm-a',
          why: '<b>Estimate</b> — a paper that shows how much the work will cost. Keep it '
        + 'apart from <i>Appointment</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Deposit', art: 'deposit', accept: 'm-f',
          why: '<b>Deposit</b> — money the customer pays first, before the work. Keep it '
        + 'apart from <i>Appointment</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Courtesy car', art: 'courtesy car', accept: 'm-e',
          why: '<b>Courtesy car</b> — a car the garage lends the customer while they wait. '
        + 'Keep it apart from <i>Appointment</i>, which is a different part of the '
        + 'same system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Invoice', accept: 'm-c',
          why: '<b>Invoice</b> — the bill that shows the final price. Keep it apart from '
        + '<i>Appointment</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “the paper that lists the work to do”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 7 · Part 0', type: 'cloze',
      title: 'Talking About the Future',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The car [[1]] be ready at four o’clock.' + '<br>'
        + '2. We are [[2]] to order the part today.' + '<br>'
        + '3. The van [[3]] arriving at ten tomorrow.' + '<br>'
        + '4. Can I [[4]] you in for Tuesday?' + '<br>'
        + '</div>',
      answers: {
        '1': ['will'],
        '2': ['going'],
        '3': ['is'],
        '4': ['book']
      },
      bank: ['will', 'going', 'is', 'book'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>will</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>going</i>, <i>is</i> in the bank.',
        '2': '<b>going</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>will</i>, <i>is</i> in the bank.',
        '3': '<b>is</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>will</i>, <i>going</i> in the bank.',
        '4': '<b>book</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>will</i>, <i>going</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 7 · Part 0', type: 'study',
      title: 'Read: Reading About the Service Desk',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'At the service desk, the advisor plans the customer’s visit. First, she '
        + 'makes an appointment. Then she gives an estimate, so the customer knows '
        + 'the price before the work starts. Often, the customer pays a deposit.' + '</p>'
        + '<p>' + 'When the car is ready, the advisor calls: “Your car will be ready at '
        + 'four.” At handover, the customer pays the invoice and collects the car. '
        + 'Clear planning keeps the customer happy.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['At the service desk, the advisor plans the customer’s visit. First, she '
        + 'makes an appointment. Then she gives an estimate, so the customer knows '
        + 'the pr',
        'When the car is ready, the advisor calls: “Your car will be ready at '
        + 'four.” At handover, the customer pays the invoice and collects the car. '
        + 'Clear pla']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 7 · Part 0', type: 'quizset',
      title: 'Reading About the Service Desk',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does the advisor give so the customer knows the price?',
          options: [
            { t: 'A courtesy car', ok: false,
              why: 'Not this one. A courtesy car is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does the advisor give so the customer knows the price”.' },
            { t: 'A deposit', ok: false,
              why: 'Not this one. A deposit is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the advisor give so the customer knows the price”.' },
            { t: 'A key', ok: false,
              why: 'Not this one. A key is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the advisor give so the customer knows the price”.' },
            { t: 'An estimate', ok: true,
              why: 'Right — An estimate. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' }
          ]
        },
        {
          q: '2. When does the customer pay the invoice?',
          options: [
            { t: 'Before the appointment', ok: false,
              why: 'Not this one. Before the appointment is a real thing in a workshop, but it '
        + 'is not what the question asks about, and nothing in the material links it '
        + 'to “When does the customer pay the invoice”.' },
            { t: 'At handover', ok: true,
              why: 'Right — At handover. Check it against the text or the card you met it on: '
        + 'this is stated, not inferred.' },
            { t: 'Next year', ok: false,
              why: 'Not this one. Next year is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “When '
        + 'does the customer pay the invoice”.' },
            { t: 'Never', ok: false,
              why: 'Not this one. Never is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “When does '
        + 'the customer pay the invoice”.' }
          ]
        }
      ]
    }
  ]
});
