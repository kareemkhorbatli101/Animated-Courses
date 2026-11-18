/* Unit 5 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short description of a dish for a menu.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 5 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Last night I ate at the Orient Rose restaurant. I started with '
            + 'hummus, and then I had the kebab. My friend chose the grilled fish. '
            + 'The food was fresh and delicious, and the waiter was very friendly. '
            + 'We drank mint tea after dinner. We had a wonderful evening, and we '
            + 'will come again.',
          say: 'Last night I ate at the Orient Rose restaurant. I started with '
            + 'hummus, and then I had the kebab. My friend chose the grilled fish. '
            + 'The food was fresh and delicious, and the waiter was very friendly. '
            + 'We drank mint tea after dinner. We had a wonderful evening, and we '
            + 'will come again.',
          role: 'course'
        },
        {
          h: 'Shish taouk — tender pieces of chicken, cooked over the grill and '
            + 'served with garlic sauce, warm bread and a fresh salad. A favourite '
            + 'with our guests.',
          say: 'Shish taouk — tender pieces of chicken, cooked over the grill and '
            + 'served with garlic sauce, warm bread and a fresh salad. A favourite '
            + 'with our guests.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What did the writer eat?',
            model: 'Hummus, then the kebab.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the friend choose?',
            model: 'The grilled fish.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did they drink after dinner?',
            model: 'Mint tea.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) where and when you ate 2) what you ordered / had 3) what the '
              + 'food and service were like 4) a closing sentence',
            say: 'Plan: 1) where and when you ate 2) what you ordered / had 3) what the '
              + 'food and service were like 4) a closing sentence',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Write a short review (40–60 words) of a meal you had. '
  + 'Use the past simple.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
