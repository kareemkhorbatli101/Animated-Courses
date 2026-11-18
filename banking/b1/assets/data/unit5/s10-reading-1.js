/* Unit 5 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s10', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a digital-service notice for what '
  + 'the system does and when, find the passives that carry it, and say '
  + 'what the customer must do.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 5 · 5A',
      visual: { spot: 'atm' },
      type: 'shortanswer',
      title: 'The new Harbour app (a leaflet)',
      instruction: 'Read the leaflet. Notice the passive verbs.<br>Answer the questions.',
      items: [{ q: '1. What three steps are a payment made in?',
          accept: ['What three steps are a payment made in?'],
          keys: ['three',
              'steps'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What are the two checks in two-factor authentication?',
          accept: ['What are the two checks in two-factor authentication?'],
          keys: ['checks',
              'factor'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is shown before you confirm an international transfer?',
          accept: ['What is shown before you confirm an international transfer?'],
          keys: ['shown',
              'before'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. What can be done if a card is lost?',
          accept: ['What can be done if a card is lost?'],
          keys: [], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '5. Why is your money safe if the phone is lost?',
          accept: ['Why is your money safe if the phone is lost?'],
          keys: ['money',
              'phone'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 5 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Look back at the leaflet. Find three passive verbs.<br>Now rewrite '
  + 'these active sentences as the leaflet would write them.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Passive verb 1: [[1]]'
        + '<br>'
        + '2. Passive verb 2: [[2]]'
        + '<br>'
        + '3. Passive verb 3: [[3]]'
        + '<br>'
        + '4. We show your balance at once. → [[4]]'
        + '<br>'
        + '5. We send a code to your phone. → [[5]]'
        + '<br>'
        + '6. We do not store any data on your phone. → [[6]]'
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
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 5 · 5C',
      type: 'shortanswer',
      title: 'Should you trust the advert?',
      instruction: 'Read the short note. What is the difference between a bank message '
  + 'and a scam message?',
      items: [{ q: '1. What did the first message say had happened?',
          accept: ['What did the first message say had happened?'],
          keys: ['first',
              'message'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What two things made the second message false?',
          accept: ['What two things made the second message false?'],
          keys: ['things',
              'second'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What does a bank never ask for?',
          accept: ['What does a bank never ask for?'],
          keys: ['never'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
