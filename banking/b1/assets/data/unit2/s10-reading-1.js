/* Unit 2 §10 — Reading.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s10', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 5 · Reading', part: '5', section: '10',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 5 · Reading', title: 'Part 5 · Reading' },
  objective: 'By the end of Part 5 you can read a branch\'s service guidelines for '
  + 'what staff must and may do, find the polite modals that carry it, and '
  + 'compare the guidelines with your own bank\'s.',
  cards: [
    {
      id: 'c1',
      ref: '5A',
      bookRef: 'Unit 2 · 5A',
      visual: { spot: 'queue' },
      type: 'quizset',
      title: 'Customer service guidelines',
      instruction: 'Read the branch guidelines. Notice the polite modals (can, could, '
  + 'may).<br>Decide: True or False.',
      display: 'cards',
      items: [{
          q: 'Staff should say “Give me your ID.”',
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
          q: '‘Please’ and ‘thank you’ are important.',
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
          q: 'Staff should explain the next step to customers.',
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
          q: 'It is fine to argue with an upset customer.',
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
          q: 'Staff should stay calm if there is a problem.',
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
          q: 'A warm goodbye leaves a good impression.',
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
    },
    {
      id: 'c2',
      ref: '5B',
      bookRef: 'Unit 2 · 5B',
      type: 'cloze',
      title: 'Grammar in context (from 5A)',
      instruction: 'Find in the guidelines two polite requests using could or may. Write '
  + 'them below.<br>Now make these commands polite, like the guidelines.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Request 1 (could): [[1]]'
        + '<br>'
        + '2. Request 2 (may): [[2]]'
        + '<br>'
        + '3. “Give me your card.” → [[3]]'
        + '<br>'
        + '4. “Wait here.” → [[4]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': []
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
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '5C',
      bookRef: 'Unit 2 · 5C',
      type: 'discuss',
      title: 'A training dialogue',
      instruction: 'Read the short training dialogue between a manager and a new teller.',
      questions: [{
            q: 'What should Ana do first with every customer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What should she do if a customer is angry?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What can she say if she does not know the answer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is more important, being correct or being fast?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
