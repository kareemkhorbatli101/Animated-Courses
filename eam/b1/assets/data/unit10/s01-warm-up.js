/* Unit 10 §1 — Warm Up.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u10-s01', {
  book: { source: 'EAM B1', ref: 'Unit 10 · Warm Up', part: '0', section: '1',
          lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'Work through Warm Up of unit 10.',
  video: 'u10v01',
  next: 's02-vocabulary', nextLabel: 'Part 1 - Vocabulary',
  cards: [
    {
      id: 'c1', covers: ['Part 0'], ref: '0A',
      bookRef: 'Unit 10 · Part 0', type: 'dragmatch',
      title: 'Customer and Manufacturer Words',
      instruction: 'Match the words with their meanings. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 4, say: true,
      chips: [
        { id: 'm-a', label: 'a) to tell someone something is good to use or buy' },
        { id: 'm-b', label: 'b) an old part repaired to work like new' },
        { id: 'm-c', label: 'c) learning new skills for the job' },
        { id: 'm-d', label: 'd) what a customer says about the service' },
        { id: 'm-e', label: 'e) the company that makes the car' },
        { id: 'm-f', label: 'f) a special plan by the carmaker' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'Feedback', art: 'feedback', accept: 'm-d',
          why: '<b>Feedback</b> — what a customer says about the service. Keep it apart '
        + 'from <i>Recommend</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'Recommend', art: 'recommend', accept: 'm-a',
          why: '<b>Recommend</b> — to tell someone something is good to use or buy. Keep '
        + 'it apart from <i>Feedback</i>, which is a different part of the same '
        + 'system. The meaning left in the pool belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'Campaign', art: 'campaign', accept: 'm-f',
          why: '<b>Campaign</b> — a special plan by the carmaker. Keep it apart from '
        + '<i>Feedback</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'Manufacturer', art: 'manufacturer', accept: 'm-e',
          why: '<b>Manufacturer</b> — the company that makes the car. Keep it apart from '
        + '<i>Feedback</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't5', num: 5, label: 'Training', art: 'training', accept: 'm-c',
          why: '<b>Training</b> — learning new skills for the job. Keep it apart from '
        + '<i>Feedback</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “an old part repaired to work like new”, which '
        + 'belongs to nothing on this card.'
    },
    {
      id: 'c2', covers: ['Part 0'], ref: '0B',
      bookRef: 'Unit 10 · Part 0', type: 'cloze',
      title: 'Reporting What People Say',
      instruction: 'Complete the sentences using the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.5">'
        + '1. The customer [[1]] he was happy.' + '<br>'
        + '2. Maher [[2]] the team to follow the new plan.' + '<br>'
        + '3. Rana [[3]] if the car was ready.' + '<br>'
        + '4. Lina said [[4]] she had finished the training.' + '<br>'
        + '</div>',
      answers: {
        '1': ['said'],
        '2': ['told'],
        '3': ['asked'],
        '4': ['that']
      },
      bank: ['said', 'told', 'asked', 'that'],
      whyTitle: 'How each gap was decided',
      why: {
        '1': '<b>said</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>told</i>, <i>asked</i> in the bank.',
        '2': '<b>told</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>said</i>, <i>asked</i> in the bank.',
        '3': '<b>asked</b>. The sentence names what this one DOES, which is what tells '
        + 'it apart from <i>said</i>, <i>told</i> in the bank.',
        '4': '<b>that</b>. The sentence names what this one DOES, which is what tells it '
        + 'apart from <i>said</i>, <i>told</i> in the bank.'
      }
    },
    {
      id: 'c3', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 10 · Part 0', type: 'study',
      title: 'Read: Reading About the Dealership',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'A good service department looks after the customer, the car, and the '
        + 'manufacturer. It listens to customer feedback and asks what they think. It '
        + 'follows the manufacturer’s updates and campaigns.' + '</p>'
        + '<p>' + 'And it trains its team, so everyone learns. At a team meeting, the manager '
        + 'reports the news: “The customer said the car was fixed.' + '</p>'
        + '<p>' + 'The manufacturer told us to update the software.” Good communication in '
        + 'every direction keeps a dealership strong.' + '</p>'
        + '</div>',
      doneLabel: 'I have read the text',
      playable: ['A good service department looks after the customer, the car, and the '
        + 'manufacturer. It listens to customer feedback and asks what they think. It '
        + 'follow',
        'And it trains its team, so everyone learns. At a team meeting, the manager '
        + 'reports the news: “The customer said the car was fixed.',
        'The manufacturer told us to update the software.” Good communication in '
        + 'every direction keeps a dealership strong.']
    },
    {
      id: 'c4', covers: ['Part 0'], ref: '0C',
      bookRef: 'Unit 10 · Part 0', type: 'quizset',
      title: 'Reading About the Dealership',
      instruction: 'Read the text and choose the correct answer. Every answer is in the text '
        + 'above — look back at it rather than answering from what you already know.',
      display: 'cards', say: true,
      items: [
        {
          q: '1. What does a good department listen to?',
          options: [
            { t: 'The radio', ok: false,
              why: 'Not this one. The radio is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does a good department listen to”.' },
            { t: 'Customer feedback', ok: true,
              why: 'Right — Customer feedback. Check it against the text or the card you met '
        + 'it on: this is stated, not inferred.' },
            { t: 'The traffic', ok: false,
              why: 'Not this one. The traffic is a real thing in a workshop, but it is not '
        + 'what the question asks about, and nothing in the material links it to '
        + '“What does a good department listen to”.' },
            { t: 'Nothing', ok: false,
              why: 'Not this one. Nothing is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does a good department listen to”.' }
          ]
        },
        {
          q: '2. What does the manager do at a team meeting?',
          options: [
            { t: 'Reports the news', ok: true,
              why: 'Right — Reports the news. Check it against the text or the card you met it '
        + 'on: this is stated, not inferred.' },
            { t: 'Sells cars', ok: false,
              why: 'Not this one. Sells cars is a real thing in a workshop, but it is not what '
        + 'the question asks about, and nothing in the material links it to “What '
        + 'does the manager do at a team meeting”.' },
            { t: 'Cleans', ok: false,
              why: 'Not this one. Cleans is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the manager do at a team meeting”.' },
            { t: 'Sleeps', ok: false,
              why: 'Not this one. Sleeps is a real thing in a workshop, but it is not what the '
        + 'question asks about, and nothing in the material links it to “What does '
        + 'the manager do at a team meeting”.' }
          ]
        }
      ]
    }
  ]
});
