/* Unit 9 §4 — Grammar — Present Perfect and Past Simple.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s04', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 2 · Grammar — Present Perfect and Past Simple', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Present Perfect and Past Simple', title: 'Part 2 · Grammar — Present Perfect and Past Simple' },
  objective: 'By the end of Part 2 you can tell what a customer has done from what '
  + 'they did, choose present perfect or past simple correctly, correct '
  + 'the commonest mistake, and ask about a customer\'s saving history in '
  + 'both.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 9 · 2A',
      visual: { spot: 'savings-goal' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Johanna:</b> How long have you been '
      + 'saving?</p><p><b>Customer:</b> I opened the account in March, so '
      + 'about eight months.</p><p><b>Johanna:</b> And how much have you saved '
      + 'so far?</p><p><b>Customer:</b> Two thousand. I added three hundred '
      + 'last month, which was a good month.</p><p><b>Johanna:</b> You have '
      + 'done better than you think.</p></div>',
      playable: ['How long have you been saving?',
      'I opened the account in March, so about eight months.',
      'And how much have you saved so far?',
      'Two thousand. I added three hundred last month, which was a good month.',
      'You have done better than you think.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 9 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the present perfect and the past '
  + 'simple. Which one gives a finished time?<br>Remember: a finished time '
  + 'word — yesterday, last month, in March, in 2023 — takes the past '
  + 'simple. so far, already, yet, ever and since take the present '
  + 'perfect.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “I opened the account in March” — why the past simple? [[1]]'
        + '<br>'
        + '2. “How much have you saved so far?” — is the saving finished? [[2]]'
        + '<br>'
        + '3. “I added three hundred last month” — finished or continuing? [[3]]'
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
      bookRef: 'Unit 9 · 2B',
      type: 'cloze',
      title: 'Controlled practice (which tense?)',
      instruction: 'Write the correct form of the verb in brackets.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. She [[1]] (open) the account last March.'
        + '<br>'
        + '2. We [[2]] (not reach) the goal yet.'
        + '<br>'
        + '3. How much [[3]] you [[3]] (put) aside this year?'
        + '<br>'
        + '4. He [[4]] (add) three hundred last month.'
        + '<br>'
        + '5. I [[5]] (save) for this since January.'
        + '<br>'
        + '6. They [[6]] (never invest) in anything before.'
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
      bookRef: 'Unit 9 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'She has reached her goal last week.',
          accept: ['She has reached her goal last week.'],
          why: '' },
      { wrong: 'I save since January.',
          accept: ['I save since January.'],
          why: '' },
      { wrong: 'We didn’t reached the target yet.',
          accept: ['We didn’t reached the target yet.'],
          why: '' },
      { wrong: 'How long do you save for this?',
          accept: ['How long do you save for this?'],
          why: '' },
      { wrong: 'He has added three hundred yesterday.',
          accept: ['He has added three hundred yesterday.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
