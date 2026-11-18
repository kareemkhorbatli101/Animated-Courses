/* Unit 3 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s02', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s transaction words '
  + 'correctly, sort them into what money comes in and what goes out, '
  + 'complete a counter sentence with the right one, and pair the verbs '
  + 'and nouns that go together.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 3 · 1A',
      visual: { spot: 'bank-counter' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each transaction word (1–7) to the correct meaning (a–h). One '
  + 'meaning is extra.<br>Pronunciation — word stress. Say these words: '
  + 'de·PO·sit, with·DRAW·al, TRANS·fer (noun), trans·FER (verb), '
  + 'BA·lance.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) money taken out of an account' },
      { id: 'm-b', label: 'b) money paid into an account' },
      { id: 'm-c', label: 'c) money moved from one account to another' },
      { id: 'm-d', label: 'd) the money in an account at this moment' },
      { id: 'm-e', label: 'e) a list of all the transactions on an account' },
      { id: 'm-f', label: 'f) the same payment, sent again and again' },
      { id: 'm-g', label: 'g) permission for a company to collect a payment' },
      { id: 'm-h', label: 'h) a fee the bank charges for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Deposit', accept: 'm-a',
          why: '<b>Deposit</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Withdrawal', accept: 'm-a',
          why: '<b>Withdrawal</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Transfer', accept: 'm-a',
          why: '<b>Transfer</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Balance', accept: 'm-a',
          why: '<b>Balance</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Statement', accept: 'm-a',
          why: '<b>Statement</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Standing order', accept: 'm-a',
          why: '<b>Standing order</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Direct debit', accept: 'm-a',
          why: '<b>Direct debit</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 3 · 1B',
      type: 'cloze',
      title: 'Sort the transactions',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Money in: [[1]]'
        + '<br>'
        + '2. Money out: [[2]]'
        + '<br>'
        + '3. Information only: [[3]]'
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
      bookRef: 'Unit 3 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I would like to [[1]] 200 in cash, please.'
        + '<br>'
        + '2. Could you check the [[2]] on my current account?'
        + '<br>'
        + '3. The daily [[3]] at the machine is 500.'
        + '<br>'
        + '4. I want to [[4]] this money into my savings account.'
        + '<br>'
        + '5. Please send me a [[5]] for the last three months.'
        + '<br>'
        + '6. There is a small [[6]] for an international transfer.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['balance',
      'currency',
      'deposit',
      'fee',
      'limit',
      'receipt',
      'statement',
      'transfer',
      'withdraw'],
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
