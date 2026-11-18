/* Unit 9 §14 — Management File — Coaching a Savings Goal.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s14', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 7 · Management File — Coaching a Savings Goal', part: '7', section: '14',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Coaching a Savings Goal', title: 'Part 7 · Management File — Coaching a Savings Goal' },
  objective: 'By the end of Part 7 you can coach a savings goal as a manager does: '
  + 'ask the questions that uncover what the customer really wants, and '
  + 'set a target they will keep.',
  cards: [
    {
      id: 'c1',
      ref: '7A',
      bookRef: 'Unit 9 · 7A',
      visual: { spot: 'org-chart' },
      type: 'dragmatch',
      title: 'Coaching phrases',
      instruction: 'Match the phrase to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) starting from where the customer is' },
      { id: 'm-b', label: 'b) finding the real obstacle' },
      { id: 'm-c', label: 'c) keeping the goal alive' },
      { id: 'm-d', label: 'd) giving honest encouragement' },
      { id: 'm-e', label: 'e) closing an account (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“How much have you saved so far?”', accept: 'm-a',
          why: '<b>“How much have you saved so far?”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“What got in the way last time?”', accept: 'm-a',
          why: '<b>“What got in the way last time?”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Shall we move the date rather than stop?”', accept: 'm-a',
          why: '<b>“Shall we move the date rather than stop?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“You have done better than you think.”', accept: 'm-a',
          why: '<b>“You have done better than you think.”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '7B',
      bookRef: 'Unit 9 · 7B',
      type: 'study',
      title: 'Listening — coaching a customer — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Johanna:</b> You have saved two thousand '
      + 'since March. That is better than you think.</p><p><b>Customer:</b> It '
      + 'doesn’t feel like it. I wanted three by now.</p><p><b>Johanna:</b> '
      + 'May I ask what got in the way?</p><p><b>Customer:</b> My car. It cost '
      + 'eight hundred in July and I never caught up.</p><p><b>Johanna:</b> '
      + 'Then the plan was missing a buffer, not the discipline. Shall we move '
      + 'the date to February and start a small emergency fund '
      + 'alongside?</p><p><b>Customer:</b> That feels possible.</p></div>',
      playable: ['You have saved two thousand since March. That is better than you think.',
      'It doesn’t feel like it. I wanted three by now.',
      'May I ask what got in the way?',
      'My car. It cost eight hundred in July and I never caught up.',
      'Then the plan was missing a buffer, not the discipline. Shall we move '
        + 'the date to February and start a small emergency fund alongside?',
      'That feels possible.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '7B',
      bookRef: 'Unit 9 · 7B',
      type: 'shortanswer',
      title: 'Listening — coaching a customer',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What got in the way in July?',
          accept: ['What got in the way in July?'],
          keys: [], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does Johanna say was missing from the plan?',
          accept: ['What does Johanna say was missing from the plan?'],
          keys: ['johanna',
              'missing'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What two changes does Johanna suggest?',
          accept: ['What two changes does Johanna suggest?'],
          keys: ['changes',
              'johanna'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c4',
      ref: '7C',
      bookRef: 'Unit 9 · 7C',
      type: 'cloze',
      title: 'Controlled practice — the coaching summary',
      instruction: 'Complete the coaching summary. Use the present perfect or the past simple.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. She [[1]] (open) the account in March.'
        + '<br>'
        + '2. She [[2]] (save) two thousand so far.'
        + '<br>'
        + '3. Her car [[3]] (cost) eight hundred in July.'
        + '<br>'
        + '4. She [[4]] (not reach) the original target.'
        + '<br>'
        + '5. We [[5]] (agree) a new date today.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
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
