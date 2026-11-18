/* Unit 5 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s12', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a customer '
  + 'notice, complete one from a word list, and write your own clear '
  + 'notice in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 5 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the notice',
      instruction: 'Complete the staff notice with the words: updated, shown, sent, '
  + 'entered, notified.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The app will be [[1]] on Sunday night.'
        + '<br>'
        + '2. From Monday, the balance is [[2]] at the top of the first screen.'
        + '<br>'
        + '3. A one-time code is [[3]] to the customer’s phone for every payment.'
        + '<br>'
        + '4. No payment is made until the code is [[4]].'
        + '<br>'
        + '5. Customers will be [[5]] by a message in the app.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['entered',
      'notified',
      'sent',
      'shown',
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
          + 'own word list.'
      }
    },
    {
      id: 'c2',
      ref: '6B',
      bookRef: 'Unit 5 · 6B',
      type: 'writer',
      title: 'Staff notice about a new online service (50–70 words)',
      instruction: 'Write a short internal notice about a change to the app. Use at least '
  + 'two passive verbs.<br>Plan: Subject: ___ · The ___ will be ___ on '
  + '___. · During this time, ___. · From ___, ___ is ___. · Please '
  + '___.<br>Phrase bank: will be updated on… · during this time… · '
  + 'payments cannot be made · please tell customers who ask<br>☐ A clear '
  + 'subject line?<br>☐ Two passive verbs?<br>☐ The time of the '
  + 'change?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: App update — Sunday night The Harbour app will be updated on '
        + 'Sunday night between 23:00 and 02:00. During this time, payments '
        + 'cannot be made and balances are not shown. From Monday, international '
        + 'transfers are handled in the app, and the rate and fee are shown '
        + 'before the customer confirms. Please tell customers who ask at the '
        + 'counter. Petra Horak'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short internal notice about a change to the app. Use at least '
  + 'two passive verbs. Plan: Subject: ___ · The ___ will be ___ on ___. · '
  + 'During this time, ___. · From ___, ___ is ___. · Please ___. Phrase '
  + 'bank: will be updated on… · during this time… · payments cannot be '
  + 'made · please tell customers who ask ☐ A clear subject line? ☐ Two '
  + 'passive verbs? ☐ The time of the change? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 5 · 6C',
      type: 'writer',
      title: 'Security alert to a customer (50–70 words)',
      instruction: 'A customer has received a suspicious message. Write a short, calm '
  + 'reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · The '
  + 'message was not ___. · Your account has not been ___. · Please ___. · '
  + 'Kind regards, ___<br>☐ A calm, clear tone?<br>☐ Two passive '
  + 'verbs?<br>☐ A clear instruction to the customer?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: The message you received Dear Mrs Oyelaran, Thank you for '
        + 'sending this to us. The message was not sent by the bank. Your '
        + 'account has not been blocked, and no action is needed. The bank never '
        + 'asks for a password or a one-time code, and never gives a deadline. '
        + 'Please delete the message and do not click the link. Kind regards, '
        + 'Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer has received a suspicious message. Write a short, calm '
  + 'reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · The '
  + 'message was not ___. · Your account has not been ___. · Please ___. · '
  + 'Kind regards, ___ ☐ A calm, clear tone? ☐ Two passive verbs? ☐ A '
  + 'clear instruction to the customer? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
