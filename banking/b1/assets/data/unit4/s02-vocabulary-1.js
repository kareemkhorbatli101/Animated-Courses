/* Unit 4 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s02', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s product words '
  + 'correctly, tell one account type from another, and write about a '
  + 'product using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 4 · 1A',
      visual: { spot: 'bank-card' },
      type: 'dragmatch',
      title: 'Match the product to the definition',
      instruction: 'Match each product (1–8) to the correct definition (a–i). One '
  + 'definition is extra.<br>Pronunciation — word stress. Say these words: '
  + 'MORT·gage, O·ver·draft, de·PO·sit, in·TE·rest, in·STAL·ment.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) money you keep and do not spend every day' },
      { id: 'm-b', label: 'b) an account for everyday payments and bills' },
      { id: 'm-c', label: 'c) money locked away for a fixed time at a fixed rate' },
      { id: 'm-d', label: 'd) a card that spends your own money' },
      { id: 'm-e', label: 'e) a card that spends the bank’s money, repaid later' },
      { id: 'm-f', label: 'f) money you borrow and repay in monthly amounts' },
      { id: 'm-g', label: 'g) a long loan to buy a property' },
      { id: 'm-h', label: 'h) permission to go below zero on a current account' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Current account', accept: 'm-a',
          why: '<b>Current account</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Savings account', accept: 'm-a',
          why: '<b>Savings account</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'Fixed deposit', accept: 'm-a',
          why: '<b>Fixed deposit</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Debit card', accept: 'm-a',
          why: '<b>Debit card</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'Credit card', accept: 'm-a',
          why: '<b>Credit card</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Personal loan', accept: 'm-a',
          why: '<b>Personal loan</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Mortgage', accept: 'm-a',
          why: '<b>Mortgage</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Overdraft', accept: 'm-a',
          why: '<b>Overdraft</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 4 · 1B',
      type: 'cloze',
      title: 'Sort the products',
      instruction: 'Put each product from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. For keeping money: [[1]]'
        + '<br>'
        + '2. For spending money: [[2]]'
        + '<br>'
        + '3. For borrowing money: [[3]]'
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
      bookRef: 'Unit 4 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Our savings account pays a higher [[1]] than our current account.'
        + '<br>'
        + '2. There is no monthly [[2]] on a student account.'
        + '<br>'
        + '3. You repay a personal loan in equal monthly [[3]].'
        + '<br>'
        + '4. A fixed deposit has a [[4]] of one, two or three years.'
        + '<br>'
        + '5. Your credit card has a [[5]] of 2,000.'
        + '<br>'
        + '6. You can [[6]] for a loan online or at the branch.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['apply',
      'balance',
      'fee',
      'instalment',
      'interest',
      'limit',
      'rate',
      'repay',
      'term'],
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
