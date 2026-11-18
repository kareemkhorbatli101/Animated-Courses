/* Unit 6 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s02', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s exchange and transfer '
  + 'words correctly, read a rate board, and write about a transfer using '
  + 'at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 6 · 1A',
      visual: { spot: 'rate-board' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each word (1–8) to the correct meaning (a–i). One meaning is '
  + 'extra.<br>Pronunciation — word stress. Say these words: ex·CHANGE, '
  + 're·MIT·tance, be·ne·FI·ci·a·ry, com·MIS·sion.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) what one currency is worth in another' },
      { id: 'm-b', label: 'b) the difference between the buy rate and the sell rate' },
      { id: 'm-c', label: 'c) the international number of a bank account' },
      { id: 'm-d', label: 'd) the code that says which bank' },
      { id: 'm-e', label: 'e) a bank that passes money between two other banks' },
      { id: 'm-f', label: 'f) money sent home by someone working abroad' },
      { id: 'm-g', label: 'g) the person who receives the money' },
      { id: 'm-h', label: 'h) what the bank charges for the service' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Exchange rate', accept: 'm-a',
          why: '<b>Exchange rate</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Spread', accept: 'm-a',
          why: '<b>Spread</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'IBAN', accept: 'm-a',
          why: '<b>IBAN</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'BIC / SWIFT', accept: 'm-a',
          why: '<b>BIC / SWIFT</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Correspondent bank', accept: 'm-a',
          why: '<b>Correspondent bank</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Remittance', accept: 'm-a',
          why: '<b>Remittance</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Beneficiary', accept: 'm-a',
          why: '<b>Beneficiary</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Commission', accept: 'm-a',
          why: '<b>Commission</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 6 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. About the price: [[1]]'
        + '<br>'
        + '2. About the route: [[2]]'
        + '<br>'
        + '3. About the people: [[3]]'
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
      bookRef: 'Unit 6 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Could you tell me the full name of the [[1]], please?'
        + '<br>'
        + '2. We will need the [[2]] of the account you are sending to.'
        + '<br>'
        + '3. There is a flat [[3]] of twelve for an international transfer.'
        + '<br>'
        + '4. The money should arrive within one [[4]].'
        + '<br>'
        + '5. In which [[5]] would you like the money to arrive?'
        + '<br>'
        + '6. The difference between our buy and sell price is called the [[6]].'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['IBAN',
      'abroad',
      'beneficiary',
      'currency',
      'fee',
      'rate',
      'spread',
      'transfer',
      'working day'],
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
