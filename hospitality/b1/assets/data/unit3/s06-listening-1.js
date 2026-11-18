/* Unit 3 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a booking taken by telephone and '
  + 'note the dates, the room type and the name.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 3 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-3.4.png', caption: 'A guest telephones to book a room.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 3 · P3',
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
          h: '<b>Lina:</b> Good morning, Orient Rose Hotel. How can I help you?',
          say: 'Good morning, Orient Rose Hotel. How can I help you?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Good morning. I\'d like to book a room for two nights, please.',
          say: 'Good morning. I\'d like to book a room for two nights, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Of course. Could I take your name, please?',
          say: 'Of course. Could I take your name, please?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Yes, it\'s Karim Sayed.',
          say: 'Yes, it\'s Karim Sayed.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Thank you, Mr. Sayed. Could you spell your family name for me?',
          say: 'Thank you, Mr. Sayed. Could you spell your family name for me?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> S-A-Y-E-D.',
          say: 'S-A-Y-E-D.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Thank you. And what dates would you like?',
          say: 'Thank you. And what dates would you like?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> The 14th and the 15th of June.',
          say: 'The 14th and the 15th of June.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> A double room for two nights. Would you like a room with '
            + 'a city view?',
          say: 'A double room for two nights. Would you like a room with a city view?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Yes, please.',
          say: 'Yes, please.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Wonderful. I\'ll send you a confirmation by email. Thank '
            + 'you for calling, Mr. Sayed.',
          say: 'Wonderful. I\'ll send you a confirmation by email. Thank you for '
            + 'calling, Mr. Sayed.',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Hello. Do you have a table free in the restaurant this '
            + 'evening?',
          say: 'Hello. Do you have a table free in the restaurant this evening?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Let me check, sir. For how many people?',
          say: 'Let me check, sir. For how many people?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> For four, at eight o\'clock.',
          say: 'For four, at eight o\'clock.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Yes, we have a table. Could I have your room number, please?',
          say: 'Yes, we have a table. Could I have your room number, please?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Room 210.',
          say: 'Room 210.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Thank you. Would you like a table by the window?',
          say: 'Thank you. Would you like a table by the window?',
          role: 'lina',
          who: 'Lina'
        },
        {
          h: '<b>Guest:</b> Yes, that would be lovely.',
          say: 'Yes, that would be lovely.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Lina:</b> Perfect. I\'ll book a table for four at eight o\'clock, '
            + 'by the window. Enjoy your evening!',
          say: 'Perfect. I\'ll book a table for four at eight o\'clock, by the '
            + 'window. Enjoy your evening!',
          role: 'lina',
          who: 'Lina'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 3 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What is the guest\'s family name?',
            model: 'Sayed.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What dates does he want?',
            model: 'The 14th and 15th of June.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What kind of view does the guest choose?',
            model: 'A city view.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How will Lina send the confirmation?',
            model: 'By email.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['How many nights does the guest want? (two nights)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 3 · P3 B',
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Lina asks the guest to spell his family name.',
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
          q: 'The dates are in July.',
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
          q: 'The guest wants a room with a city view.',
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
          q: 'Lina will send a confirmation by email.',
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
      bookRef: 'Unit 3 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'What does the guest want to book?',
            model: 'Sayed.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'For how many people, and at what time?',
            model: 'The 14th and 15th of June.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina ask for?',
            model: 'A city view.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where will the table be?',
            model: 'By email.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
