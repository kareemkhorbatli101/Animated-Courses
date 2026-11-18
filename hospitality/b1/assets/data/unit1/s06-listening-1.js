/* Unit 1 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a short conversation at the front '
  + 'desk and one between colleagues, and answer questions about who is '
  + 'who.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 1 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints these pictures in this part. Look at them before you '
  + 'start — the words in the exercises come from them.',
      visual: [
        { img: '../assets/figures/fig-1.6.png', caption: 'Lina welcomes a guest to the hotel.' },
        { img: '../assets/figures/fig-1.7.png', caption: 'Mr. Nabil introduces Lina to the team.' }
      ],
      doneLabel: 'I have looked at these'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 1 · P3',
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
          h: '<b>Lina:</b> Good morning, and welcome to the Orient Rose Hotel. How '
            + 'can I help you?',
          say: 'Good morning, and welcome to the Orient Rose Hotel. How can I help you?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Good morning. Thank you. I have a reservation for '
            + 'tonight. My name is Karim Sayed.',
          say: 'Good morning. Thank you. I have a reservation for tonight. My name is '
            + 'Karim Sayed.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Welcome, Mr. Sayed. Let me check. Yes — one room for two '
            + 'nights. Is that correct?',
          say: 'Welcome, Mr. Sayed. Let me check. Yes — one room for two nights. Is '
            + 'that correct?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> That\'s right.',
          say: 'That\'s right.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Wonderful. Here is your key card. Your room is 210, on '
            + 'the second floor.',
          say: 'Wonderful. Here is your key card. Your room is 210, on the second floor.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Thank you. And where is the restaurant, please?',
          say: 'Thank you. And where is the restaurant, please?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> It is on the ground floor, next to the lobby. Breakfast '
            + 'is from seven to ten. Enjoy your stay!',
          say: 'It is on the ground floor, next to the lobby. Breakfast is from seven '
            + 'to ten. Enjoy your stay!',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Mr. Nabil:</b> Lina, let me introduce the team. This is Sami. He '
            + 'is a porter. He helps guests with their bags.',
          say: 'Lina, let me introduce the team. This is Sami. He is a porter. He '
            + 'helps guests with their bags.',
          role: 'nabil',
          who: 'Mr. Nabil'
        },
        {
          h: 'Sami: Nice to meet you, Lina.',
          say: 'Sami: Nice to meet you, Lina.',
          role: 'course'
        },
        {
          h: '<b>Mr. Nabil:</b> And this is Rana. She is our concierge. She books '
            + 'tours and gives information about the city.',
          say: 'And this is Rana. She is our concierge. She books tours and gives '
            + 'information about the city.',
          role: 'nabil',
          who: 'Mr. Nabil'
        },
        {
          h: '<b>Rana:</b> Welcome to the team!',
          say: 'Welcome to the team!',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Lina:</b> Thank you. It\'s nice to meet you all.',
          say: 'Thank you. It\'s nice to meet you all.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Mr. Nabil:</b> We work together. When the desk is busy, we help '
            + 'each other. That is the most important rule here.',
          say: 'We work together. When the desk is busy, we help each other. That is '
            + 'the most important rule here.',
          role: 'nabil',
          who: 'Mr. Nabil'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 1 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'How many nights is the reservation for?',
            model: 'Two nights.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the room number?',
            model: 'Room 210.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the restaurant?',
            model: 'On the ground floor, next to the lobby.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time does breakfast start?',
            model: 'Seven o\'clock (from seven to ten).',
            minWords: 2,
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
      bookRef: 'Unit 1 · P3 B',
      type: 'cloze',
      title: 'Listen again',
      instruction: 'Listen again. Write T (true) or F (false). (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The room is on the ground floor. [[1]]'
        + '<br>'
        + '2. Breakfast is from seven to ten. [[2]]'
        + '<br>'
        + '3. Lina gives the guest a key card. [[3]]'
        + '<br>'
        + '4. The restaurant is next to the lobby. [[4]]'
        + '</div>',
      answers: {
        '1': ['F'],
        '2': ['T'],
        '3': ['T'],
        '4': ['T']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>F</b>',
        '2': '<b>T</b>',
        '3': '<b>T</b>',
        '4': '<b>T</b>'
      }
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 1 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What is Sami\'s job?',
            model: 'Two nights.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a porter do?',
            model: 'Room 210.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Rana do?',
            model: 'On the ground floor, next to the lobby.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the most important rule at the hotel?',
            model: 'Seven o\'clock (from seven to ten).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
