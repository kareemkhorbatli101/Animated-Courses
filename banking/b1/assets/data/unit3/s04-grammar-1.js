/* Unit 3 §4 — Grammar — Quantifiers (much, many, a few, a little).

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s04', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 2 · Grammar — Quantifiers (much, many, a few, a little)', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Quantifiers (much, many, a few, a little)', title: 'Part 2 · Grammar — Quantifiers (much, many, a few, a little)' },
  objective: 'By the end of Part 2 you can tell a countable noun from an '
  + 'uncountable one at the counter, choose much, many, a few or a little '
  + 'for each, correct the commonest mistake, and ask a customer three '
  + 'clear questions about amounts.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 3 · 2A',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Grace:</b> Good morning. How much cash '
      + 'would you like today?</p><p><b>Customer:</b> Three hundred, please. '
      + 'And how many notes can I have?</p><p><b>Grace:</b> As many as you '
      + 'like. There are a few large notes left, and a little '
      + 'change.</p><p><b>Customer:</b> Large notes, please. I don’t have much '
      + 'time.</p></div>',
      playable: ['Good morning. How much cash would you like today?',
      'Three hundred, please. And how many notes can I have?',
      'As many as you like. There are a few large notes left, and a little change.',
      'Large notes, please. I don’t have much time.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 3 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline much, many, a few and a little. '
  + 'Which words go with countable nouns?<br>Remember: cash, money, time '
  + 'and change are uncountable → much, a little. notes, coins, accounts '
  + 'and forms are countable → many, a few.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. much — countable or uncountable? [[1]]'
        + '<br>'
        + '2. many — countable or uncountable? [[2]]'
        + '<br>'
        + '3. a few / a little — which one goes with notes? [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      bank: ['Example',
      'How many notes would you like?',
      'How much cash do you need?',
      'Quantifier',
      'Use',
      'a few / a little',
      'a few coins; a little change',
      'a small amount: a few (countable), a little (uncountable)',
      'countable nouns',
      'many',
      'much',
      'uncountable nouns, mostly in questions and negatives'],
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
      bookRef: 'Unit 3 · 2B',
      type: 'cloze',
      title: 'Controlled practice (choose the quantifier)',
      instruction: 'Choose much, many, a few or a little.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. [[1]] notes would you like, sir?'
        + '<br>'
        + '2. I only have [[2]] change in the drawer.'
        + '<br>'
        + '3. We do not have [[3]] time before the branch closes.'
        + '<br>'
        + '4. [[4]] customers are waiting outside?'
        + '<br>'
        + '5. There are still [[5]] forms on the counter.'
        + '<br>'
        + '6. She put [[6]] money into her savings account.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': []
      },
      bank: ['a few',
      'a little',
      'how many',
      'how much',
      'many',
      'much'],
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
      bookRef: 'Unit 3 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'How many money would you like to deposit?',
          accept: ['How many money would you like to deposit?'],
          why: '' },
      { wrong: 'I have a little notes in my wallet.',
          accept: ['I have a little notes in my wallet.'],
          why: '' },
      { wrong: 'There aren’t much customers today.',
          accept: ['There aren’t much customers today.'],
          why: '' },
      { wrong: 'He needs a few cash for the weekend.',
          accept: ['He needs a few cash for the weekend.'],
          why: '' },
      { wrong: 'How much forms do I have to sign?',
          accept: ['How much forms do I have to sign?'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
