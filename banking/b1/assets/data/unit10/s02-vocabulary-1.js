/* Unit 10 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s02', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s corporate-banking words '
  + 'correctly, name what a business customer needs that a personal one '
  + 'does not, and write about a business account using at least five of '
  + 'the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 10 · 1A',
      visual: { spot: 'letter-of-credit' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each business-banking word (1–8) to the correct meaning (a–i). '
  + 'One meaning is extra.<br>Pronunciation — word stress. Say these '
  + 'words: IN·voice, PAY·roll, fa·CI·li·ty, sup·PLI·er.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a bank account for a company' },
      { id: 'm-b', label: 'b) a bill asking a customer to pay' },
      { id: 'm-c', label: 'c) the money a company pays its staff' },
      { id: 'm-d', label: 'd) money coming in and going out of a business' },
      { id: 'm-e', label: 'e) an arrangement to borrow up to a limit' },
      { id: 'm-f', label: 'f) a company that sells goods to a business' },
      { id: 'm-g', label: 'g) a bank promise to pay a seller when documents are shown' },
      { id: 'm-h', label: 'h) one bank contact who knows the business' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Business account', accept: 'm-a',
          why: '<b>Business account</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Invoice', accept: 'm-a',
          why: '<b>Invoice</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Payroll', accept: 'm-a',
          why: '<b>Payroll</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Cash flow', accept: 'm-a',
          why: '<b>Cash flow</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Facility', accept: 'm-a',
          why: '<b>Facility</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Supplier', accept: 'm-a',
          why: '<b>Supplier</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Letter of credit', accept: 'm-a',
          why: '<b>Letter of credit</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Relationship manager', accept: 'm-a',
          why: '<b>Relationship manager</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 10 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Money coming in: [[1]]'
        + '<br>'
        + '2. Money going out: [[2]]'
        + '<br>'
        + '3. The bank’s part: [[3]]'
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
      bookRef: 'Unit 10 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. We run the [[1]] on the 25th of every month.'
        + '<br>'
        + '2. The customer has asked for a [[2]] of fifty thousand.'
        + '<br>'
        + '3. Three of her [[3]] are now [[3]] by more than sixty days.'
        + '<br>'
        + '4. A letter of [[4]] is used when the buyer and the seller are in '
            + 'different countries.'
        + '<br>'
        + '5. Her [[5]] is good in summer but weak in January.'
        + '<br>'
        + '6. We pay our main [[6]] in another currency.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['cash flow',
      'credit',
      'facility',
      'invoice',
      'limit',
      'overdue',
      'payroll',
      'supplier',
      'trade'],
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
