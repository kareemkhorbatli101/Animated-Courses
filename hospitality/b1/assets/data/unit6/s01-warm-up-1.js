/* Unit 6 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the places a guest might want '
  + 'to visit, and say which you would recommend.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 6 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 6.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 6.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. Which places on the map do you know?',
          say: '1. Which places on the map do you know?',
          role: 'course'
        },
        {
          h: '2. Which place would you most like to visit? Why?',
          say: '2. Which place would you most like to visit? Why?',
          role: 'course'
        },
        {
          h: '3. Who in a hotel helps guests plan their days out?',
          say: '3. Who in a hotel helps guests plan their days out?',
          role: 'course'
        },
        {
          h: 'Many guests at the Orient Rose Hotel are visitors to Syria, and they '
            + 'want to see the country. This is where the concierge helps. The '
            + 'concierge — at our hotel, this is Rana — knows the city and the '
            + 'country well. She recommends places to visit, gives directions, and '
            + 'helps guests plan their days. A good recommendation can turn a simple '
            + 'trip into an unforgettable holiday.',
          say: 'Many guests at the Orient Rose Hotel are visitors to Syria, and they '
            + 'want to see the country. This is where the concierge helps. The '
            + 'concierge — at our hotel, this is Rana — knows the city and the '
            + 'country well. She recommends places to visit, gives directions, and '
            + 'helps guests plan their days. A good recommendation can turn a simple '
            + 'trip into an unforgettable holiday.',
          role: 'course'
        },
        {
          h: 'Syria has some of the most famous and beautiful places in the world. '
            + 'In Damascus, the Old City and the great Umayyad Mosque are more than '
            + 'a thousand years old. Further north, Aleppo has a mighty citadel on a '
            + 'hill. In the desert stand the ancient columns of Palmyra, and near '
            + 'the coast rises the huge castle of Krak des Chevaliers. On the west '
            + 'coast, Latakia offers sea, sun and sandy beaches.',
          say: 'Syria has some of the most famous and beautiful places in the world. '
            + 'In Damascus, the Old City and the great Umayyad Mosque are more than '
            + 'a thousand years old. Further north, Aleppo has a mighty citadel on a '
            + 'hill. In the desert stand the ancient columns of Palmyra, and near '
            + 'the coast rises the huge castle of Krak des Chevaliers. On the west '
            + 'coast, Latakia offers sea, sun and sandy beaches.',
          role: 'course'
        },
        {
          h: 'Today, a guest asks Rana, “Where is the best place to visit?” Rana '
            + 'smiles. “That depends on you,” she says. “Let me help you choose.”',
          say: 'Today, a guest asks Rana, “Where is the best place to visit?” Rana '
            + 'smiles. “That depends on you,” she says. “Let me help you choose.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'What three things does the concierge do for guests?',
            model: 'She recommends places, gives directions, and helps guests plan their days.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can a good recommendation do?',
            model: 'It can turn a simple trip into an unforgettable holiday.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How old are the Old City and the Umayyad Mosque?',
            model: 'More than a thousand years old.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can guests find in Latakia?',
            model: 'Sea, sun and sandy beaches.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Rana say when the guest asks for the best place?',
            model: '\'That depends on you. Let me help you choose.\'',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Who is the concierge at the hotel? (Rana)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 6 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'The Umayyad Mosque is in Damascus.',
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
          q: 'Aleppo has a citadel on a hill.',
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
          q: 'Palmyra is on the coast.',
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
          q: 'Latakia has beaches.',
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
          q: 'Rana says the best place is the same for everyone.',
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
