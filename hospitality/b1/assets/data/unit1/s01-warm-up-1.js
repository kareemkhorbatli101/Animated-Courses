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
      ref: 'Text',
      bookRef: 'Unit 1 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 1.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 1.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. Which departments can you see in the hotel?',
          say: '1. Which departments can you see in the hotel?',
          role: 'course'
        },
        {
          h: '2. In which department does Lina work?',
          say: '2. In which department does Lina work?',
          role: 'course'
        },
        {
          h: '3. What do you say to a guest when they arrive in the morning?',
          say: '3. What do you say to a guest when they arrive in the morning?',
          role: 'course'
        },
        {
          h: 'Every day, all around the world, people stay in hotels, eat in '
            + 'restaurants, and drink coffee in cafés. This is the world of '
            + 'hospitality. Hospitality means making guests feel welcome and '
            + 'comfortable. In Syria, hospitality is very old and very important. '
            + 'For hundreds of years, Syrian people have welcomed travellers with '
            + 'warm words, good food, and a place to rest.',
          say: 'Every day, all around the world, people stay in hotels, eat in '
            + 'restaurants, and drink coffee in cafés. This is the world of '
            + 'hospitality. Hospitality means making guests feel welcome and '
            + 'comfortable. In Syria, hospitality is very old and very important. '
            + 'For hundreds of years, Syrian people have welcomed travellers with '
            + 'warm words, good food, and a place to rest.',
          role: 'course'
        },
        {
          h: 'Today, hospitality is also a big industry and a good job. Hotels, '
            + 'restaurants, resorts and cafés need many workers: receptionists, '
            + 'waiters, housekeepers, cooks and managers. These workers meet people '
            + 'from many countries, so English is very useful.',
          say: 'Today, hospitality is also a big industry and a good job. Hotels, '
            + 'restaurants, resorts and cafés need many workers: receptionists, '
            + 'waiters, housekeepers, cooks and managers. These workers meet people '
            + 'from many countries, so English is very useful.',
          role: 'course'
        },
        {
          h: 'The Orient Rose Hotel is a busy hotel in Damascus. It has rooms, a '
            + 'restaurant, a café and a garden. Today, a new trainee starts work '
            + 'there. Her name is Lina Haddad. She is nineteen years old, and she is '
            + 'a little nervous. But she is ready to learn, and she loves meeting '
            + 'people. This is where her story begins.',
          say: 'The Orient Rose Hotel is a busy hotel in Damascus. It has rooms, a '
            + 'restaurant, a café and a garden. Today, a new trainee starts work '
            + 'there. Her name is Lina Haddad. She is nineteen years old, and she is '
            + 'a little nervous. But she is ready to learn, and she loves meeting '
            + 'people. This is where her story begins.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
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
      id: 'c3',
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
