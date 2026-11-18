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
      type: 'discuss',
      title: 'The new Harbour app (a leaflet)',
      instruction: 'Read the leaflet. Notice the passive verbs.<br>Answer the questions.',
      questions: [{
            q: 'What three steps are a payment made in?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What are the two checks in two-factor authentication?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is shown before you confirm an international transfer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What can be done if a card is lost?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is your money safe if the phone is lost?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
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
      type: 'discuss',
      title: 'Should you trust the advert?',
      instruction: 'Read the short note. What is the difference between a bank message '
  + 'and a scam message?',
      questions: [{
            q: 'What did the first message say had happened?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What two things made the second message false?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does a bank never ask for?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
