/* Unit 9 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the problems guests most '
  + 'often report, and say what makes a complaint worse.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 9 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 9.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 9.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. What problems can go wrong in a hotel room? (name two)',
          say: '1. What problems can go wrong in a hotel room? (name two)',
          role: 'course'
        },
        {
          h: '2. How should a receptionist react when a guest is angry?',
          say: '2. How should a receptionist react when a guest is angry?',
          role: 'course'
        },
        {
          h: '3. Have you ever complained about a service? What happened?',
          say: '3. Have you ever complained about a service? What happened?',
          role: 'course'
        },
        {
          h: 'No hotel is perfect. Sometimes things go wrong: a room is too noisy, '
            + 'the air conditioning breaks, or a meal arrives cold. When this '
            + 'happens, a guest may complain. Many new workers fear complaints, but '
            + 'experienced staff see them differently. A complaint is a gift. It is '
            + 'the guest saying, “I want to stay here, but please fix this.” A guest '
            + 'who complains gives the hotel a chance to put things right.',
          say: 'No hotel is perfect. Sometimes things go wrong: a room is too noisy, '
            + 'the air conditioning breaks, or a meal arrives cold. When this '
            + 'happens, a guest may complain. Many new workers fear complaints, but '
            + 'experienced staff see them differently. A complaint is a gift. It is '
            + 'the guest saying, “I want to stay here, but please fix this.” A guest '
            + 'who complains gives the hotel a chance to put things right.',
          role: 'course'
        },
        {
          h: 'The most important thing is how you respond. If you listen calmly, '
            + 'apologise sincerely, and solve the problem quickly, an angry guest '
            + 'can become a happy — and loyal — guest. This is called \'service '
            + 'recovery\'. In fact, a guest whose problem is solved well often '
            + 'trusts the hotel more than a guest who never had a problem at all.',
          say: 'The most important thing is how you respond. If you listen calmly, '
            + 'apologise sincerely, and solve the problem quickly, an angry guest '
            + 'can become a happy — and loyal — guest. This is called \'service '
            + 'recovery\'. In fact, a guest whose problem is solved well often '
            + 'trusts the hotel more than a guest who never had a problem at all.',
          role: 'course'
        },
        {
          h: 'This week, Lina is learning to handle complaints. “Never argue, and '
            + 'never make excuses,” says Mr. Nabil. “Listen, say sorry, and act. If '
            + 'you fix the problem well, you will keep the guest for life.”',
          say: 'This week, Lina is learning to handle complaints. “Never argue, and '
            + 'never make excuses,” says Mr. Nabil. “Listen, say sorry, and act. If '
            + 'you fix the problem well, you will keep the guest for life.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'Why do experienced staff see a complaint as a gift?',
            model: 'Because it gives the hotel a chance to put things right / the guest '
              + 'wants to stay but wants it fixed.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things turn an angry guest into a happy one?',
            model: 'Listen calmly, apologise sincerely, solve the problem quickly.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is \'service recovery\'?',
            model: 'Putting things right well after a problem.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who sometimes trusts a hotel most of all?',
            model: 'A guest whose problem was solved well.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What two things does Mr. Nabil say you must never do?',
            model: 'Never argue, never make excuses.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Give one example of something that can go wrong. (a noisy room / '
        + 'broken AC / cold food)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 9 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'A complaint can be seen as a gift.',
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
          q: 'You should argue with an angry guest.',
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
          q: 'Service recovery can create a loyal guest.',
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
          q: 'Mr. Nabil says you should make excuses.',
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
          q: 'A well-solved problem can build trust.',
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
