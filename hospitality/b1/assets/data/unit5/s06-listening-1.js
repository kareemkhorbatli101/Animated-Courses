/* Unit 5 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow an order being taken and note '
  + 'what each guest asked for.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 5 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-5.4.png', caption: 'A waiter takes a guest\'s order.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 5 · P3',
      type: 'study',
      title: 'The conversation',
      instruction: 'Listen and read. Each person has their own voice.',
      passage: {
      title: 'The conversation',
      listenLabel: 'Play the conversation',
      paras: [{
          h: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          say: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          role: 'course'
        },
        {
          h: '<b>Waiter:</b> Good evening. Welcome to the Orient Rose restaurant. '
            + 'Are you ready to order?',
          say: 'Good evening. Welcome to the Orient Rose restaurant. Are you ready to order?',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> Yes, thank you. What do you recommend?',
          say: 'Yes, thank you. What do you recommend?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Waiter:</b> The mezze are very popular. The hummus and the '
            + 'fattoush are excellent.',
          say: 'The mezze are very popular. The hummus and the fattoush are excellent.',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> Lovely. I\'ll have the hummus to start, and then the '
            + 'kebab, please.',
          say: 'Lovely. I\'ll have the hummus to start, and then the kebab, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Waiter:</b> An excellent choice. And to drink?',
          say: 'An excellent choice. And to drink?',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> A mint tea, please.',
          say: 'A mint tea, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Waiter:</b> Of course. So that\'s hummus, then the kebab, with a '
            + 'mint tea. I\'ll bring your starter right away.',
          say: 'Of course. So that\'s hummus, then the kebab, with a mint tea. I\'ll '
            + 'bring your starter right away.',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Waiter:</b> Did you enjoy your meal?',
          say: 'Did you enjoy your meal?',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> Yes, it was delicious. The kebab was wonderful.',
          say: 'Yes, it was delicious. The kebab was wonderful.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Waiter:</b> I\'m very glad. Would you like a dessert or a coffee?',
          say: 'I\'m very glad. Would you like a dessert or a coffee?',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> Just the bill, please. We had a lovely evening.',
          say: 'Just the bill, please. We had a lovely evening.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Waiter:</b> Of course. Here you are. Thank you for coming, and '
            + 'please come again.',
          say: 'Of course. Here you are. Thank you for coming, and please come again.',
          role: 'waiter',
          who: 'Waiter'
        },
        {
          h: '<b>Guest:</b> We will. Everything was perfect.',
          say: 'We will. Everything was perfect.',
          role: 'guest',
          who: 'Guest'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 5 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What does the waiter recommend?',
            model: 'The mezze (hummus and fattoush).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest order to start?',
            model: 'The hummus.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the main dish?',
            model: 'The kebab.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest want to drink?',
            model: 'A mint tea.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where are the guest and the waiter? (in the Orient Rose restaurant)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 5 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'The waiter recommends the mezze.',
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
          q: 'The guest starts with the kebab.',
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
          q: 'The guest wants a mint tea.',
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
          q: 'The waiter repeats the order at the end.',
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
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 5 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'Did the guest enjoy the meal?',
            model: 'The mezze (hummus and fattoush).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the guest like most?',
            model: 'The hummus.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest ask for at the end?',
            model: 'The kebab.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the waiter say when the guest leaves?',
            model: 'A mint tea.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
