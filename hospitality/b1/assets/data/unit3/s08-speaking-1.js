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
