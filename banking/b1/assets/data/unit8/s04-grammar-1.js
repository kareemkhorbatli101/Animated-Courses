/* Unit 8 §4 — Grammar — Obligation: must, have to, mustn’t, don’t have to.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s04', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t '
  + 'have to', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t have to', title: 'Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t have to' },
  objective: 'By the end of Part 2 you can tell must from have to and mustn\'t from '
  + 'don\'t have to, choose the right one for a rule, correct the '
  + 'commonest mistake, and state an obligation to a customer politely.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 8 · 2A',
      visual: { spot: 'kyc-check' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> Do I have to bring my '
      + 'passport? I have my driving licence.</p><p><b>Elif:</b> For a new '
      + 'account you must bring an official photo document, so a licence is '
      + 'fine.</p><p><b>Customer:</b> And must I come to this '
      + 'branch?</p><p><b>Elif:</b> No, you don’t have to. Any branch can do '
      + 'it. But you mustn’t send the documents by email — we are not allowed '
      + 'to accept them that way.</p></div>',
      playable: ['Do I have to bring my passport? I have my driving licence.',
      'For a new account you must bring an official photo document, so a '
        + 'licence is fine.',
      'And must I come to this branch?',
      'No, you don’t have to. Any branch can do it. But you mustn’t send the '
        + 'documents by email — we are not allowed to accept them that way.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 8 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline must, mustn’t, have to and don’t '
  + 'have to. Which two mean the same?<br>Remember: mustn’t and don’t have '
  + 'to are opposites, not the same. Mustn’t forbids; don’t have to frees.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. must / have to — do they mean the same here? [[1]]'
        + '<br>'
        + '2. mustn’t — is it a rule or a free choice? [[2]]'
        + '<br>'
        + '3. don’t have to — is it a rule or a free choice? [[3]]'
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
      ref: '2B',
      bookRef: 'Unit 8 · 2B',
      type: 'cloze',
      title: 'Controlled practice (choose the modal)',
      instruction: 'Choose must, mustn’t or don’t have to.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Staff [[1]] share a customer’s details with anyone outside the bank.'
        + '<br>'
        + '2. You [[2]] make an appointment; you can come at any time.'
        + '<br>'
        + '3. We [[3]] keep the records for five years.'
        + '<br>'
        + '4. A customer [[4]] sign the form in front of us.'
        + '<br>'
        + '5. You [[5]] write your PIN down anywhere.'
        + '<br>'
        + '6. Customers [[6]] bring two documents; one is enough.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
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
          + 'own word list.',
        '6': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 8 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'Staff don’t have to share customer data with anyone.',
          accept: ['Staff don’t have to share customer data with anyone.'],
          why: '' },
      { wrong: 'You must bringing an official document.',
          accept: ['You must bringing an official document.'],
          why: '' },
      { wrong: 'We have to keeping the records for five years.',
          accept: ['We have to keeping the records for five years.'],
          why: '' },
      { wrong: 'You mustn’t to send documents by email.',
          accept: ['You mustn’t to send documents by email.'],
          why: '' },
      { wrong: 'He doesn’t must come to this branch.',
          accept: ['He doesn’t must come to this branch.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
