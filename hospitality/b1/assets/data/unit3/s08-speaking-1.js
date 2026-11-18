/* Unit 3 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can take a reservation from start to '
  + 'confirmation, asking for every detail you need politely.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 3 · P4 A',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A: Say you would like to book a room. Say how many nights.',
            say: 'A: Say you would like to book a room. Say how many nights.',
            role: 'course'
          },
          {
            h: 'B: Greet, and ask politely for the name (Could I…?). Ask the guest to '
              + 'spell it.',
            say: 'B: Greet, and ask politely for the name (Could I…?). Ask the guest to '
              + 'spell it.',
            role: 'course'
          },
          {
            h: 'A: Give and spell your name. Give your dates.',
            say: 'A: Give and spell your name. Give your dates.',
            role: 'course'
          },
          {
            h: 'B: Offer a room type and a view (Would you like…?). Confirm the booking.',
            say: 'B: Offer a room type and a view (Would you like…?). Confirm the booking.',
            role: 'course'
          },
          {
            h: 'A: Say thank you.',
            say: 'A: Say thank you.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Role-play: take a booking',
      instruction: 'Role-play: take a booking. Student A is the guest; Student B is the '
  + 'receptionist. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 3 · P4 B',
      type: 'report',
      title: 'Spell and say',
      instruction: 'Spell and say. Work in pairs.',
      minWords: 20,
      placeholder: 'Spell your family name to your partner.',
      stems: ['Spell your family name to your partner.',
      'Say today\'s date and tomorrow\'s date.',
      'Say these room numbers: 108, 210, 315.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 3 · P4 C',
      type: 'discuss',
      title: 'Ask and answer politely',
      instruction: 'Ask and answer politely. Use Could you…? and Would you like…?',
      questions: [{
            q: 'Ask your partner to repeat a number.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Offer your partner a cup of tea.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Ask your partner to wait one moment.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
