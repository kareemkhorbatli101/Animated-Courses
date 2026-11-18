/* Unit 7 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can take a room-service order and tell a '
  + 'guest what has already been done for their room.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 7 · P4 A',
      type: 'report',
      title: 'Role-play: order room service',
      instruction: 'Role-play: order room service. Student A is the guest; Student B is '
  + 'room service. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 7 · P4 B',
      type: 'report',
      title: 'Report your work',
      instruction: 'Report your work. Work in pairs. You are a housekeeper. Tell your '
  + 'partner three things you have done and one thing you haven\'t done '
  + 'yet.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 7 · P4 C',
      type: 'discuss',
      title: 'Talk about experience',
      instruction: 'Talk about experience. Ask and answer with the present perfect (ever '
  + '/ never).',
      questions: [{
            q: 'Have you ever worked in a hotel or a restaurant?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Have you ever ordered room service?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the best hotel you have ever stayed in?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
