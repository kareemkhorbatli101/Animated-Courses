/* Unit 4 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a check-in and note the room, the '
  + 'nights and what the guest was told.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 4 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-4.5.png', caption: 'Lina checks a guest in.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 4 · P3',
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
          h: '<b>Lina:</b> Good afternoon, and welcome to the Orient Rose Hotel.',
          say: 'Good afternoon, and welcome to the Orient Rose Hotel.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Good afternoon. I have a reservation. My name is Karim Sayed.',
          say: 'Good afternoon. I have a reservation. My name is Karim Sayed.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Welcome, Mr. Sayed. I\'m checking you in now. Could I '
            + 'see your passport, please?',
          say: 'Welcome, Mr. Sayed. I\'m checking you in now. Could I see your '
            + 'passport, please?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Here you are.',
          say: 'Here you are.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Thank you. Please sign here. … Wonderful. Here is your '
            + 'key card. Your room is 210, on the second floor.',
          say: 'Thank you. Please sign here. … Wonderful. Here is your key card. Your '
            + 'room is 210, on the second floor.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you. What time is breakfast?',
          say: 'Thank you. What time is breakfast?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Breakfast is from seven to ten, in the restaurant on the '
            + 'ground floor. The porter is bringing your bags now. Enjoy your stay!',
          say: 'Breakfast is from seven to ten, in the restaurant on the ground '
            + 'floor. The porter is bringing your bags now. Enjoy your stay!',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Excuse me. I have an early flight tomorrow. Could I '
            + 'have a wake-up call?',
          say: 'Excuse me. I have an early flight tomorrow. Could I have a wake-up call?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. What time would you like?',
          say: 'Of course. What time would you like?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> At half past five, please.',
          say: 'At half past five, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Certainly. I\'m arranging a wake-up call for 5:30. Are '
            + 'you going to need a taxi to the airport?',
          say: 'Certainly. I\'m arranging a wake-up call for 5:30. Are you going to '
            + 'need a taxi to the airport?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Yes, please. For six o\'clock.',
          say: 'Yes, please. For six o\'clock.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> No problem. I\'ll book a taxi for six. It\'s going to be '
            + 'here at the entrance. Have a good night.',
          say: 'No problem. I\'ll book a taxi for six. It\'s going to be here at the '
            + 'entrance. Have a good night.',
          role: 'lina',
          who: 'Lina'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 4 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What does Lina ask to see?',
            model: 'The guest\'s passport.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the guest sign?',
            model: 'The registration card.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the room number and floor?',
            model: 'Room 210, second floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who is bringing the guest\'s bags?',
            model: 'The porter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What is the guest\'s name? (Karim Sayed)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 4 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Lina asks to see the guest\'s passport.',
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
          q: 'The room is on the ground floor.',
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
          q: 'Breakfast is from seven to ten.',
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
          q: 'The manager is bringing the bags.',
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
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 4 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'Why does the guest want a wake-up call?',
            model: 'The guest\'s passport.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time does he want the call?',
            model: 'The registration card.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What else does he arrange?',
            model: 'Room 210, second floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the taxi going to be?',
            model: 'The porter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
