/* Unit 1 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the departments of a hotel, '
  + 'say which one a colleague works in, and greet a guest arriving in the '
  + 'morning.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 1 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0. is '
  + 'done for you.)',
      questions: [{
            q: 'Name three places in the world of hospitality.',
            model: '(any three) hotels, restaurants, cafés, resorts.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is English useful for hospitality workers?',
            model: 'Because hospitality workers meet people from many countries.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the name of the hotel, and where is it?',
            model: 'The Orient Rose Hotel, in Damascus.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who is Lina Haddad?',
            model: 'A new trainee / receptionist at the hotel.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does Lina feel on her first day?',
            model: 'A little nervous, but ready to learn / happy.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is hospitality? (making guests feel welcome and comfortable)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 1 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0. is done for you.)',
      display: 'cards',
      items: [{
          q: 'Hotels and restaurants need many kinds of worker.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'Hospitality workers meet people from many countries.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The Orient Rose Hotel is in Aleppo.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        },
      {
          q: 'Lina is nineteen years old.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'Lina does not like meeting people.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        }]
    }
  ]
});
