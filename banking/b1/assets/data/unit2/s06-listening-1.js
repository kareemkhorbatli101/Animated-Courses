/* Unit 2 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s06', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict the problems customers bring to '
  + 'a bank, match each conversation to its purpose, judge True or False '
  + 'on what you hear, and take the useful phrase out of each exchange.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 2 · 3A',
      visual: { spot: 'queue' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“A customer might lose a card, forget a PIN, or want to open an '
      + 'account.”</p>',
      instruction: 'What problems do customers often bring to a bank? What polite phrases '
  + 'might a banker use?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 2 · 3B',
      type: 'cloze',
      title: 'Two short conversations — match the purpose',
      instruction: 'Match each conversation to its purpose (one is extra).<br>a) opening '
  + 'an account b) reporting a lost card c) resetting a PIN '
  + '(extra)<br>Useful language: I’m sorry to hear that. · I can… right '
  + 'now. · Could I see…?',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Conversation 1: [[1]]'
        + '<br>'
        + '2. Conversation 2: [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      bank: ['Conversation 1 Customer: Hi. I think I lost my debit card. I’m '
        + 'worried someone might use it. Banker: I’m sorry to hear that. I can '
        + 'freeze the card right now. May I have your account number?',
      'Conversation 2 Customer: Good morning. I’d like to open a savings '
        + 'account. Banker: Certainly. I can help you with that. Could I see '
        + 'your ID and proof of address, please?'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '3C',
      bookRef: 'Unit 2 · 3C',
      type: 'quizset',
      title: 'Two more conversations — True or False',
      instruction: 'Decide: True or False.',
      display: 'cards',
      items: [{
          q: 'In Conversation 3, the banker helps with the loan immediately.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'In Conversation 3, the customer must wait for a loan officer.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'In Conversation 4, the customer needs to show ID.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'In Conversation 4, the customer stays at the same window.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
