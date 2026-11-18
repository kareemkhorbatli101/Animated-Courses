/* Unit 9 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s02', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s saving and investing '
  + 'words correctly, tell a saving product from an investment one, and '
  + 'write about a saving goal using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 9 · 1A',
      visual: { spot: 'savings-goal' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each saving word (1–8) to the correct meaning (a–i). One '
  + 'meaning is extra.<br>Pronunciation — word stress. Say these words: '
  + 'IN·te·rest, in·VEST·ment, in·FLA·tion, e·MER·gen·cy.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) what the bank pays you for keeping your money' },
      { id: 'm-b', label: 'b) interest paid on your interest as well as on your savings' },
      { id: 'm-c', label: 'c) money kept for something unexpected' },
      { id: 'm-d', label: 'd) the amount you are saving towards' },
      { id: 'm-e', label: 'e) the chance that the value can fall' },
      { id: 'm-f', label: 'f) what your money earns' },
      { id: 'm-g', label: 'g) money put into something that may grow or fall' },
      { id: 'm-h', label: 'h) the way prices rise over time' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Interest', accept: 'm-a',
          why: '<b>Interest</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Compound interest', accept: 'm-a',
          why: '<b>Compound interest</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Emergency fund', accept: 'm-a',
          why: '<b>Emergency fund</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Goal', accept: 'm-a',
          why: '<b>Goal</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Risk', accept: 'm-a',
          why: '<b>Risk</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Return', accept: 'm-a',
          why: '<b>Return</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Investment', accept: 'm-a',
          why: '<b>Investment</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Inflation', accept: 'm-a',
          why: '<b>Inflation</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 9 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. About saving: [[1]]'
        + '<br>'
        + '2. About investing: [[2]]'
        + '<br>'
        + '3. About the money losing value: [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '1C',
      bookRef: 'Unit 9 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Her [[1]] is six thousand by next December.'
        + '<br>'
        + '2. We suggest keeping three months’ expenses as an [[2]] fund.'
        + '<br>'
        + '3. A savings account has almost no [[3]], but the [[3]] is small.'
        + '<br>'
        + '4. [[4]] interest means you earn interest on your interest.'
        + '<br>'
        + '5. If prices rise faster than your interest, [[5]] is taking the difference.'
        + '<br>'
        + '6. A [[6]] transfer on payday is the easiest way to save.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['compound',
      'emergency',
      'goal',
      'inflation',
      'interest',
      'monthly',
      'regular',
      'return',
      'risk'],
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
          + 'own word list.',
        '6': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    }
  ]
});
