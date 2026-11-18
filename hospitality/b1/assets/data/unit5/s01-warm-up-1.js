/* Unit 5 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the meals a hotel serves and '
  + 'the people who serve them.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 5 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 5.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 5.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. What is the first step of restaurant service?',
          say: '1. What is the first step of restaurant service?',
          role: 'course'
        },
        {
          h: '2. What food do you know from Syria? (name two dishes)',
          say: '2. What food do you know from Syria? (name two dishes)',
          role: 'course'
        },
        {
          h: '3. What makes a meal in a restaurant feel special?',
          say: '3. What makes a meal in a restaurant feel special?',
          role: 'course'
        },
        {
          h: 'This week, Lina is working in the hotel restaurant. It is a new '
            + 'department and a new challenge. In the restaurant, the team welcomes '
            + 'guests, shows them to a table, takes their orders, and serves the '
            + 'food with a smile. Good service makes a meal special — and it brings '
            + 'guests back again.',
          say: 'This week, Lina is working in the hotel restaurant. It is a new '
            + 'department and a new challenge. In the restaurant, the team welcomes '
            + 'guests, shows them to a table, takes their orders, and serves the '
            + 'food with a smile. Good service makes a meal special — and it brings '
            + 'guests back again.',
          role: 'course'
        },
        {
          h: 'The Orient Rose restaurant serves Syrian and international food. In '
            + 'the morning, there is breakfast. In the evening, guests enjoy mezze — '
            + 'small plates like hummus, tabbouleh and fattoush — and main dishes '
            + 'like kebab and shish taouk. The hotel also has a small café in the '
            + 'Old City of Damascus, in a beautiful old house with a quiet '
            + 'courtyard. There, guests drink Arabic coffee and eat sweet baklava.',
          say: 'The Orient Rose restaurant serves Syrian and international food. In '
            + 'the morning, there is breakfast. In the evening, guests enjoy mezze — '
            + 'small plates like hummus, tabbouleh and fattoush — and main dishes '
            + 'like kebab and shish taouk. The hotel also has a small café in the '
            + 'Old City of Damascus, in a beautiful old house with a quiet '
            + 'courtyard. There, guests drink Arabic coffee and eat sweet baklava.',
          role: 'course'
        },
        {
          h: 'Last night, Lina watched the waiters work. Today, she is going to '
            + 'take her first order. “Listen carefully, smile, and never rush the '
            + 'guest,” says Rashid, the head waiter. “A good meal is a happy '
            + 'memory.”',
          say: 'Last night, Lina watched the waiters work. Today, she is going to '
            + 'take her first order. “Listen carefully, smile, and never rush the '
            + 'guest,” says Rashid, the head waiter. “A good meal is a happy '
            + 'memory.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'What does the restaurant team do for guests? (name two things)',
            model: '(any two) welcomes guests, shows them to a table, takes orders, '
              + 'serves the food.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What are mezze? Give two examples.',
            model: 'Small plates — e.g. hummus, tabbouleh, fattoush.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the hotel\'s café, and what is it like?',
            model: 'In the Old City of Damascus, in an old house with a quiet courtyard.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did Lina do last night?',
            model: 'She watched the waiters work.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three pieces of advice does Rashid give?',
            model: 'Listen carefully, smile, and never rush the guest.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where is Lina working this week? (in the hotel restaurant)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Hummus and tabbouleh are mezze.',
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
          q: 'The café is in the Old City of Damascus.',
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
          q: 'Guests drink Arabic coffee in the café.',
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
          q: 'Lina took her first order last night.',
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
          q: 'Rashid says a good meal is a happy memory.',
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
        }]
    }
  ]
});
