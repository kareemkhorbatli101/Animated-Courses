/* Unit 2 §4 — Grammar — Modals for Requests and Offers (can / could / may).

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s04', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 2 · Grammar — Modals for Requests and Offers (can / '
  + 'could / may)', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Modals for Requests and Offers (can / could / may)', title: 'Part 2 · Grammar — Modals for Requests and Offers (can / could / may)' },
  objective: 'By the end of Part 2 you can choose between can, could and may for a '
  + 'request and for an offer, say which is more polite and why, correct '
  + 'the commonest modal mistake, and build a short service dialogue '
  + 'around three of them.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 2 · 2A',
      visual: { spot: 'queue' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Banker:</b> Good morning. How can I help '
      + 'you?</p><p><b>Customer:</b> Could you check my balance, '
      + 'please?</p><p><b>Banker:</b> Of course. May I see your '
      + 'card?</p><p><b>Customer:</b> Here you are.</p></div>',
      playable: ['Good morning. How can I help you?',
      'Could you check my balance, please?',
      'Of course. May I see your card?',
      'Here you are.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 2 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline can, could and may. Who is more '
  + 'polite?<br>Remember: could and may are more polite than can. Use them '
  + 'with customers.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. can — which speaker? [[1]]'
        + '<br>'
        + '2. could — more or less polite than can? [[2]]'
        + '<br>'
        + '3. may — formal or informal? [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      bank: ['Can I help you?',
      'Could you sign here, please?',
      'Example',
      'May I see your ID?',
      'Modal',
      'Use',
      'can',
      'could',
      'formal offer / permission',
      'informal offer or request',
      'may',
      'polite request'],
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
      bookRef: 'Unit 2 · 2B',
      type: 'cloze',
      title: 'Controlled practice (choose the modal)',
      instruction: 'Choose the best modal: can, could, or may. Sometimes more than one is '
  + 'possible.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (very formal, senior client) Good morning, sir. How [[1]] I help you?'
        + '<br>'
        + '2. (standard polite request) [[2]] I see some identification, please?'
        + '<br>'
        + '3. (friendly offer) [[3]] I get you a copy of that receipt?'
        + '<br>'
        + '4. (asking permission for a sensitive question) [[4]] I ask the '
            + 'reason for the transfer?'
        + '<br>'
        + '5. (a polite instruction) [[5]] you please fill out this deposit slip?'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['can',
      'could',
      'may'],
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
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 2 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'You must to fill this form.',
          accept: ['You must to fill this form.'],
          why: '' },
      { wrong: 'May you please sign here?',
          accept: ['May you please sign here?'],
          why: '' },
      { wrong: 'Could I seeing your ID?',
          accept: ['Could I seeing your ID?'],
          why: '' },
      { wrong: 'Can you helps me, please?',
          accept: ['Can you helps me, please?'],
          why: '' },
      { wrong: 'I could to check that for you.',
          accept: ['I could to check that for you.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
