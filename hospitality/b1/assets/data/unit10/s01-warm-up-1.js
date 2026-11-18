/* Unit 10 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can describe what happens at checkout, '
  + 'and say what a guest remembers about it.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 10 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 10.0 and the picture above. Think about these '
            + 'questions before you read.',
          say: 'Look at Figure 10.0 and the picture above. Think about these '
            + 'questions before you read.',
          role: 'course'
        },
        {
          h: '1. What are the main stages of a guest\'s journey?',
          say: '1. What are the main stages of a guest\'s journey?',
          role: 'course'
        },
        {
          h: '2. What happens at checkout?',
          say: '2. What happens at checkout?',
          role: 'course'
        },
        {
          h: '3. Why is the last moment of a stay so important?',
          say: '3. Why is the last moment of a stay so important?',
          role: 'course'
        },
        {
          h: 'The check-in is the guest\'s first impression; the checkout is the '
            + 'last. And people remember first and last moments most of all. A warm, '
            + 'smooth checkout — with a correct bill and a genuine farewell — sends '
            + 'the guest home happy and makes them want to return.',
          say: 'The check-in is the guest\'s first impression; the checkout is the '
            + 'last. And people remember first and last moments most of all. A warm, '
            + 'smooth checkout — with a correct bill and a genuine farewell — sends '
            + 'the guest home happy and makes them want to return.',
          role: 'course'
        },
        {
          h: 'At checkout, the receptionist prepares the bill, explains each charge '
            + 'clearly, and takes the payment. She checks that the guest enjoyed '
            + 'their stay and asks for any feedback. Then comes the most important '
            + 'part: the farewell. A good farewell is more than a quick “goodbye”. '
            + 'It is a sincere “thank you for staying with us,” a warm “we hope to '
            + 'see you again,” and a smile the guest will remember.',
          say: 'At checkout, the receptionist prepares the bill, explains each charge '
            + 'clearly, and takes the payment. She checks that the guest enjoyed '
            + 'their stay and asks for any feedback. Then comes the most important '
            + 'part: the farewell. A good farewell is more than a quick “goodbye”. '
            + 'It is a sincere “thank you for staying with us,” a warm “we hope to '
            + 'see you again,” and a smile the guest will remember.',
          role: 'course'
        },
        {
          h: 'This week, Lina reaches the end of the guest\'s journey — and the end '
            + 'of her own training. “You have learned to welcome, to serve, and to '
            + 'solve problems,” says Mr. Nabil. “Now, learn to say goodbye well. A '
            + 'guest who leaves with a smile is a guest who will come back.”',
          say: 'This week, Lina reaches the end of the guest\'s journey — and the end '
            + 'of her own training. “You have learned to welcome, to serve, and to '
            + 'solve problems,” says Mr. Nabil. “Now, learn to say goodbye well. A '
            + 'guest who leaves with a smile is a guest who will come back.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'Why are first and last moments so important?',
            model: 'Because people remember first and last moments most of all.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does the receptionist do at checkout? (name three)',
            model: '(any three) prepares the bill, explains the charges, takes the '
              + 'payment, asks for feedback, gives a farewell.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is a good farewell \'more than\'?',
            model: 'More than a quick \'goodbye\' — thanks, care, and an invitation to return.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina reach the end of this week?',
            model: 'The end of the guest\'s journey and of her own training.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Mr. Nabil say about a guest who leaves with a smile?',
            model: 'A guest who leaves with a smile will come back.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the checkout? (the guest\'s last impression of the hotel)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 10 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'People remember first and last moments most.',
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
          q: 'At checkout, the receptionist explains the bill.',
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
          q: 'A good farewell is just a quick \'goodbye\'.',
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
          q: 'A guest who leaves happy may come back.',
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
          q: 'This is the end of Lina\'s training.',
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
