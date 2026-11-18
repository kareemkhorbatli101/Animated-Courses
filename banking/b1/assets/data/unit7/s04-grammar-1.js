/* Unit 7 §4 — Grammar — Zero and First Conditionals.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s04', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 2 · Grammar — Zero and First Conditionals', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Zero and First Conditionals', title: 'Part 2 · Grammar — Zero and First Conditionals' },
  objective: 'By the end of Part 2 you can state a standing rule with the zero '
  + 'conditional and a real possibility with the first, choose between '
  + 'them correctly, correct the commonest mistake, and warn a customer in '
  + 'both.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 7 · 2A',
      visual: { spot: 'phishing' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I think someone has used my '
      + 'card.</p><p><b>Elif:</b> If you tell us straight away, we can usually '
      + 'stop the payment.</p><p><b>Customer:</b> And if I had '
      + 'waited?</p><p><b>Elif:</b> If a customer waits a week, the money is '
      + 'much harder to recover. That is always true.</p><p><b>Customer:</b> '
      + 'Then please block it now.</p><p><b>Elif:</b> I will block it, and if '
      + 'anything else appears, we will call you.</p></div>',
      playable: ['I think someone has used my card.',
      'If you tell us straight away, we can usually stop the payment.',
      'And if I had waited?',
      'If a customer waits a week, the money is much harder to recover. That '
        + 'is always true.',
      'Then please block it now.',
      'I will block it, and if anything else appears, we will call you.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 7 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the two conditionals. Which one is '
  + 'a general rule?<br>Remember: after if, use the present — never will. '
  + 'The will goes in the other half of the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “If a customer waits a week, the money is harder to recover” — '
            + 'rule or one occasion? [[1]]'
        + '<br>'
        + '2. “If anything else appears, we will call you” — rule or one '
            + 'occasion? [[2]]'
        + '<br>'
        + '3. Which tense comes after if in both sentences? [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      bank: ['Conditional',
      'Example',
      'First',
      'Form',
      'If you call us now, we will block the card.',
      'If you share a code, your account is at risk.',
      'Use',
      'Zero',
      'a rule that is always true',
      'if + present, present',
      'if + present, will / can',
      'one real possibility, now or soon'],
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
      bookRef: 'Unit 7 · 2B',
      type: 'cloze',
      title: 'Controlled practice (zero or first)',
      instruction: 'Write the correct form of the verb in brackets.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. If you share a one-time code, anyone [[1]] (can) use your account.'
        + '<br>'
        + '2. If you call us before midnight, we [[2]] (block) the card tonight.'
        + '<br>'
        + '3. If a message asks for your password, it [[3]] (be) not from the bank.'
        + '<br>'
        + '4. If the customer [[4]] (come) in tomorrow, we will issue a new card.'
        + '<br>'
        + '5. If you cover the keypad, nobody [[5]] (see) your PIN.'
        + '<br>'
        + '6. If you [[6]] (report) it today, we can still trace the payment.'
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
      bookRef: 'Unit 7 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'If you will share your code, your money is at risk.',
          accept: ['If you will share your code, your money is at risk.'],
          why: '' },
      { wrong: 'If a customer calls, we blocking the card.',
          accept: ['If a customer calls, we blocking the card.'],
          why: '' },
      { wrong: 'If you clicked the link, tell us now and we blocked it.',
          accept: ['If you clicked the link, tell us now and we blocked it.'],
          why: '' },
      { wrong: 'If water gets into the machine, it will always stop working.',
          accept: ['If water gets into the machine, it will always stop working.'],
          why: '' },
      { wrong: 'If you will come tomorrow, we will give you a new card.',
          accept: ['If you will come tomorrow, we will give you a new card.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
