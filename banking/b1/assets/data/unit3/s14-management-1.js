/* Unit 3 §14 — Management File — Running the Counter.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s14', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 7 · Management File — Running the Counter', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Running the Counter', title: 'Part 7 · Management File — Running the Counter' },
  objective: 'By the end of Part 7 you can run a counter as a supervisor does: '
  + 'decide what to do when the queue grows, say what you need from each '
  + 'teller, and keep the checks that cannot be skipped.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 3 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Shift and cash-control phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the cash counted matches the record' },
      { id: 'm-b', label: 'b) the cash counted is less than the record' },
      { id: 'm-c', label: 'c) passing the counter to a colleague' },
      { id: 'm-d', label: 'd) asking a colleague to check and sign' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“The drawer balances.”', accept: 'm-a',
          why: '<b>“The drawer balances.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“We are two hundred short.”', accept: 'm-a',
          why: '<b>“We are two hundred short.”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“I’m handing over to Tomasz.”', accept: 'm-a',
          why: '<b>“I’m handing over to Tomasz.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Please countersign the float.”', accept: 'm-a',
          why: '<b>“Please countersign the float.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 3 · 7B',
      type: 'study',
      title: 'Listening — the shift handover — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Grace:</b> Right, I’m handing over to you '
      + 'now. The drawer balances — I’ve counted it '
      + 'twice.</p><p><b>Tomasz:</b> Thanks. How much is in the '
      + 'float?</p><p><b>Grace:</b> Two thousand, and a little change. There '
      + 'are only a few large notes left, so order more if the queue '
      + 'builds.</p><p><b>Tomasz:</b> Anything else I should '
      + 'know?</p><p><b>Grace:</b> One customer is coming back at three for a '
      + 'statement. Her name is on the pad.</p></div>',
      playable: ['Right, I’m handing over to you now. The drawer balances — I’ve '
        + 'counted it twice.',
      'Thanks. How much is in the float?',
      'Two thousand, and a little change. There are only a few large notes '
        + 'left, so order more if the queue builds.',
      'Anything else I should know?',
      'One customer is coming back at three for a statement. Her name is on '
        + 'the pad.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 3 · 7B',
      type: 'shortanswer',
      title: 'Listening — the shift handover',
      instruction: 'Answer the questions.',
      items: [{ q: '1. How much is in the float?',
          accept: ['How much is in the float?'],
          keys: ['float'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why should Tomasz order more large notes?',
          accept: ['Why should Tomasz order more large notes?'],
          keys: ['should',
              'tomasz'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is happening at three o’clock?',
          accept: ['What is happening at three o’clock?'],
          keys: ['happening',
              'three'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 3 · 7C',
      type: 'cloze',
      title: 'Controlled practice — the handover note',
      instruction: 'Complete the handover note. Use the correct quantifier or word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The drawer [[1]] at the end of my shift.'
        + '<br>'
        + '2. There are only [[2]] large notes left in the drawer.'
        + '<br>'
        + '3. We have [[3]] change, so please order more coins.'
        + '<br>'
        + '4. The [[4]] was counted and [[4]] by a colleague.'
        + '<br>'
        + '5. We are not [[5]] any cash today.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['a few',
      'a little',
      'balances',
      'countersigned',
      'float',
      'short'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    }
  ]
});
