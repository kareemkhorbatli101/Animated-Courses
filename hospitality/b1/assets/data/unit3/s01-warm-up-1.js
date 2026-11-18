/* Unit 3 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the ways a guest can book a '
  + 'room, and say what a hotel needs to know to hold a reservation.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 3 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 3.0 and the picture above. Think about these questions '
            + 'before you read.',
          say: 'Look at Figure 3.0 and the picture above. Think about these questions '
            + 'before you read.',
          role: 'course'
        },
        {
          h: '1. How do guests book a room? (name two ways)',
          say: '1. How do guests book a room? (name two ways)',
          role: 'course'
        },
        {
          h: '2. What information does a receptionist need for a booking?',
          say: '2. What information does a receptionist need for a booking?',
          role: 'course'
        },
        {
          h: '3. Why is polite English important on the telephone?',
          say: '3. Why is polite English important on the telephone?',
          role: 'course'
        },
        {
          h: 'Every day, people book rooms at the Orient Rose Hotel. Some guests '
            + 'come to the desk and ask for a room. Others send an email or use the '
            + 'hotel website. But many guests still telephone the hotel to make a '
            + 'reservation. On the phone, the guest cannot see your face — so your '
            + 'voice and your words are very important. Polite, clear English makes '
            + 'the guest feel welcome, even before they arrive.',
          say: 'Every day, people book rooms at the Orient Rose Hotel. Some guests '
            + 'come to the desk and ask for a room. Others send an email or use the '
            + 'hotel website. But many guests still telephone the hotel to make a '
            + 'reservation. On the phone, the guest cannot see your face — so your '
            + 'voice and your words are very important. Polite, clear English makes '
            + 'the guest feel welcome, even before they arrive.',
          role: 'course'
        },
        {
          h: 'Taking a booking is an important skill. The receptionist must ask for '
            + 'the right information: the guest\'s name, the dates, the room type, '
            + 'and the number of nights. She must check that the hotel has a free '
            + 'room. Then she confirms everything and says thank you. A small '
            + 'mistake — a wrong date or a wrong name — can cause a big problem '
            + 'later.',
          say: 'Taking a booking is an important skill. The receptionist must ask for '
            + 'the right information: the guest\'s name, the dates, the room type, '
            + 'and the number of nights. She must check that the hotel has a free '
            + 'room. Then she confirms everything and says thank you. A small '
            + 'mistake — a wrong date or a wrong name — can cause a big problem '
            + 'later.',
          role: 'course'
        },
        {
          h: 'This week, Lina is learning to take reservations. Mr. Nabil says, “Be '
            + 'polite, speak slowly, and always check the details. A good booking is '
            + 'the start of a happy stay.”',
          say: 'This week, Lina is learning to take reservations. Mr. Nabil says, “Be '
            + 'polite, speak slowly, and always check the details. A good booking is '
            + 'the start of a happy stay.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 3 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'Why are your voice and words important on the phone?',
            model: 'Your voice and words are important because the guest cannot see your face.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What four pieces of information does the receptionist need?',
            model: 'Name, dates, room type, number of nights.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What must the receptionist check before she confirms?',
            model: 'That the hotel has a free room (availability).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can a small mistake cause?',
            model: 'A big problem later.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does Mr. Nabil tell Lina to do?',
            model: 'Be polite, speak slowly, always check the details.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Name one way guests book a room. (they come to the desk / email / '
        + 'website / telephone)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 3 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'On the phone, the guest can see the receptionist\'s face.',
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
          q: 'The receptionist needs the guest\'s name and dates.',
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
          q: 'A wrong date is not a problem.',
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
          q: 'Mr. Nabil says a good booking is the start of a happy stay.',
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
          q: 'Lina is learning to take reservations this week.',
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
