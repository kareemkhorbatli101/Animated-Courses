/* Unit 5 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can greet guests at a table, take an order, '
  + 'and describe a dish when they ask.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 5 · P4 A',
      type: 'report',
      title: 'Role-play: take an order',
      instruction: 'Role-play: take an order. Student A is the waiter; Student B is the '
  + 'guest. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 5 · P4 B',
      type: 'report',
      title: 'Recommend a dish',
      instruction: 'Recommend a dish. Work in pairs. Recommend your favourite food to '
  + 'your partner. Say why.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 5 · P4 C',
      type: 'discuss',
      title: 'Talk about the past',
      instruction: 'Talk about the past. Ask and answer with the past simple.',
      questions: [{
            q: 'What did you eat yesterday?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Did you cook at home last week?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where did you go for your last special meal?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
