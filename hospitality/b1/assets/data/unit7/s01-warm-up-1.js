/* Unit 7 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name what housekeeping does in a '
  + 'day, and what a guest notices when it is done well.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 7 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 7.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 7.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. What tasks are on the room checklist?',
          say: '1. What tasks are on the room checklist?',
          role: 'course'
        },
        {
          h: '2. Which tasks are done, and which are still \'to do\'?',
          say: '2. Which tasks are done, and which are still \'to do\'?',
          role: 'course'
        },
        {
          h: '3. When did you last order food to your room? What did you order?',
          say: '3. When did you last order food to your room? What did you order?',
          role: 'course'
        },
        {
          h: 'Behind every clean, comfortable room is the hard work of the '
            + 'housekeeping team. Housekeeping is the heart of a good hotel. Every '
            + 'day, the housekeepers clean the rooms, change the sheets and towels, '
            + 'and make everything fresh and tidy. When a guest walks into a clean, '
            + 'sweet-smelling room, they feel welcome and safe — even if they never '
            + 'see the person who cleaned it.',
          say: 'Behind every clean, comfortable room is the hard work of the '
            + 'housekeeping team. Housekeeping is the heart of a good hotel. Every '
            + 'day, the housekeepers clean the rooms, change the sheets and towels, '
            + 'and make everything fresh and tidy. When a guest walks into a clean, '
            + 'sweet-smelling room, they feel welcome and safe — even if they never '
            + 'see the person who cleaned it.',
          role: 'course'
        },
        {
          h: 'The hotel also offers room service. Sometimes a guest is tired and '
            + 'does not want to go down to the restaurant. They simply call '
            + 'reception and order food to their room. A few minutes later, a member '
            + 'of the team brings a tray with a warm meal, a smile, and a wish for a '
            + 'pleasant evening.',
          say: 'The hotel also offers room service. Sometimes a guest is tired and '
            + 'does not want to go down to the restaurant. They simply call '
            + 'reception and order food to their room. A few minutes later, a member '
            + 'of the team brings a tray with a warm meal, a smile, and a wish for a '
            + 'pleasant evening.',
          role: 'course'
        },
        {
          h: 'This week, Lina is learning about housekeeping and room service with '
            + 'Salma, the head housekeeper. “A guest may forget many things,” says '
            + 'Salma, “but they always remember a clean room and a kind meal. We '
            + 'have cleaned this room a thousand times, and every time, we do it '
            + 'with the same care.”',
          say: 'This week, Lina is learning about housekeeping and room service with '
            + 'Salma, the head housekeeper. “A guest may forget many things,” says '
            + 'Salma, “but they always remember a clean room and a kind meal. We '
            + 'have cleaned this room a thousand times, and every time, we do it '
            + 'with the same care.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 7 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'What do the housekeepers do every day? (name two things)',
            model: '(any two) clean the rooms, change the sheets and towels, make '
              + 'everything fresh and tidy.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does a guest feel in a clean room?',
            model: 'Welcome and safe / comfortable.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why do some guests order room service?',
            model: 'Because they are tired and don\'t want to go to the restaurant.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the team bring with the tray?',
            model: 'A warm meal, a smile, and a wish for a pleasant evening.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Salma say a guest always remembers?',
            model: 'A clean room and a kind meal.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is \'the heart of a good hotel\'? (housekeeping)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 7 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Housekeeping is the heart of a good hotel.',
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
          q: 'The housekeepers change the sheets and towels.',
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
          q: 'Room service means the guest must go to the restaurant.',
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
          q: 'Salma is the head housekeeper.',
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
          q: 'A guest always remembers a clean room and a kind meal.',
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
