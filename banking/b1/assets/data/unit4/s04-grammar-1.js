/* Unit 4 §4 — Grammar — Comparatives and Superlatives.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s04', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 2 · Grammar — Comparatives and Superlatives', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Comparatives and Superlatives', title: 'Part 2 · Grammar — Comparatives and Superlatives' },
  objective: 'By the end of Part 2 you can compare two products with a comparative '
  + 'and name the best of several with a superlative, form both correctly '
  + 'from short and long adjectives, and correct the commonest mistake.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 4 · 2A',
      visual: { spot: 'bank-card' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Diego:</b> The Step Saver pays a higher '
      + 'rate than the Everyday Saver.</p><p><b>Customer:</b> And which is the '
      + 'best for me?</p><p><b>Diego:</b> If you can wait a year, the Fixed 12 '
      + 'is the highest of the three. It is also the least '
      + 'flexible.</p><p><b>Customer:</b> So it is better for money I don’t '
      + 'need?</p><p><b>Diego:</b> Exactly. It is the safest choice for '
      + 'long-term saving.</p></div>',
      playable: ['The Step Saver pays a higher rate than the Everyday Saver.',
      'And which is the best for me?',
      'If you can wait a year, the Fixed 12 is the highest of the three. It '
        + 'is also the least flexible.',
      'So it is better for money I don’t need?',
      'Exactly. It is the safest choice for long-term saving.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 4 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the comparatives and superlatives. '
  + 'Which compares two things, and which compares all of '
  + 'them?<br>Remember: short words add -er / -est (high → higher → the '
  + 'highest). Long words take more / the most (flexible → more flexible → '
  + 'the most flexible).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. higher — comparative or superlative? [[1]]'
        + '<br>'
        + '2. the best — how many things is it comparing? [[2]]'
        + '<br>'
        + '3. less flexible / the least flexible — which compares two? [[3]]'
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
      bookRef: 'Unit 4 · 2B',
      type: 'cloze',
      title: 'Controlled practice (comparative or superlative)',
      instruction: 'Write the correct form of the word in brackets.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A credit card is [[1]] (expensive) than a debit card.'
        + '<br>'
        + '2. This is the [[2]] (good) account for a student.'
        + '<br>'
        + '3. A mortgage is [[3]] (long) than a personal loan.'
        + '<br>'
        + '4. Our online application is the [[4]] (fast) way to apply.'
        + '<br>'
        + '5. A fixed deposit is [[5]] (safe) than an investment.'
        + '<br>'
        + '6. The Everyday Saver is the [[6]] (flexible) of the three.'
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
      bookRef: 'Unit 4 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'This card is more better than the old one.',
          accept: ['This card is more better than the old one.'],
          why: '' },
      { wrong: 'The Fixed 12 is the most high rate we offer.',
          accept: ['The Fixed 12 is the most high rate we offer.'],
          why: '' },
      { wrong: 'A loan is expensiver than an overdraft.',
          accept: ['A loan is expensiver than an overdraft.'],
          why: '' },
      { wrong: 'This is the more flexible account of the three.',
          accept: ['This is the more flexible account of the three.'],
          why: '' },
      { wrong: 'A debit card is cheap than a credit card.',
          accept: ['A debit card is cheap than a credit card.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
