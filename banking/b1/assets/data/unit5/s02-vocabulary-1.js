/* Unit 5 §2 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s02', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 1 · Vocabulary', part: '1', section: '2',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary', title: 'Part 1 · Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s digital-banking words '
  + 'correctly, name the steps of logging in and making a payment, and '
  + 'write about an app using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1A',
      bookRef: 'Unit 5 · 1A',
      visual: { spot: 'atm' },
      type: 'dragmatch',
      title: 'Match the term to the meaning',
      instruction: 'Match each digital banking word (1–8) to the correct meaning (a–i). '
  + 'One meaning is extra.<br>Pronunciation — word stress. Say these '
  + 'words: PASS·word, no·ti·fi·CA·tion, au·then·ti·CA·tion, SE·cu·ri·ty.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a short number sent to your phone for one use only' },
      { id: 'm-b', label: 'b) the secret word you type to enter your account' },
      { id: 'm-c', label: 'c) to enter your account with your details' },
      { id: 'm-d', label: 'd) two different checks before you are let in' },
      { id: 'm-e', label: 'e) a program on a phone' },
      { id: 'm-f', label: 'f) using your bank through a browser' },
      { id: 'm-g', label: 'g) a short message from the bank on your screen' },
      { id: 'm-h', label: 'h) to stop a card being used, for a short time' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Log in', accept: 'm-a',
          why: '<b>Log in</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'Password', accept: 'm-a',
          why: '<b>Password</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'One-time code', accept: 'm-a',
          why: '<b>One-time code</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Two-factor authentication', accept: 'm-a',
          why: '<b>Two-factor authentication</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'App', accept: 'm-a',
          why: '<b>App</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't6', num: 6, label: 'Online banking', accept: 'm-a',
          why: '<b>Online banking</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't7', num: 7, label: 'Notification', accept: 'm-a',
          why: '<b>Notification</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't8', num: 8, label: 'Freeze', accept: 'm-a',
          why: '<b>Freeze</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1B',
      bookRef: 'Unit 5 · 1B',
      type: 'cloze',
      title: 'Sort the words',
      instruction: 'Put each word from 1A into the correct group.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Getting in: [[1]]'
        + '<br>'
        + '2. Staying safe: [[2]]'
        + '<br>'
        + '3. Using the service: [[3]]'
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
      bookRef: 'Unit 5 · 1C',
      type: 'cloze',
      title: 'Complete the sentences',
      instruction: 'Complete the sentences with the correct word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A one-time [[1]] is sent to your phone each time you log in.'
        + '<br>'
        + '2. Your card has been [[2]], so no payments can be made.'
        + '<br>'
        + '3. The [[3]] was reset yesterday, so please use the new one.'
        + '<br>'
        + '4. You will receive a [[4]] when the money arrives.'
        + '<br>'
        + '5. The [[5]] has been [[5]], so some buttons have moved.'
        + '<br>'
        + '6. Please confirm the [[6]] on the next screen.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['app',
      'code',
      'frozen',
      'login',
      'notification',
      'password',
      'screen',
      'transfer',
      'updated'],
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
