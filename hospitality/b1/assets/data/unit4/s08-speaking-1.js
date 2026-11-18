/* Unit 4 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can check a guest in from greeting to key, '
  + 'explaining breakfast and the facilities as you go.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 4 · P4 A',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'B: Welcome the guest and say you are checking them in.',
            say: 'B: Welcome the guest and say you are checking them in.',
            role: 'course'
          },
          {
            h: 'A: Give your name and reservation.',
            say: 'A: Give your name and reservation.',
            role: 'course'
          },
          {
            h: 'B: Ask for the passport and the signature; give the key and room number.',
            say: 'B: Ask for the passport and the signature; give the key and room number.',
            role: 'course'
          },
          {
            h: 'A: Ask about breakfast.',
            say: 'A: Ask about breakfast.',
            role: 'course'
          },
          {
            h: 'B: Explain breakfast and one arrangement (bags / wake-up call). Wish '
              + 'a good stay.',
            say: 'B: Explain breakfast and one arrangement (bags / wake-up call). Wish '
              + 'a good stay.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Role-play: check a guest in',
      instruction: 'Role-play: check a guest in. Student A is the guest; Student B is the '
  + 'receptionist. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 4 · P4 B',
      type: 'report',
      title: 'Arrange a service',
      instruction: 'Arrange a service. Work in pairs. One asks; one arranges politely.',
      minWords: 20,
      placeholder: 'a wake-up call at 6:00',
      stems: ['a wake-up call at 6:00',
      'a taxi to the airport at 7:00',
      'help with heavy luggage']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 4 · P4 C',
      type: 'discuss',
      title: 'Talk about your plans',
      instruction: 'Talk about your plans. Ask and answer with going to.',
      questions: [{
            q: 'What are you going to do after this lesson?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What are you going to do at the weekend?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where are you going to travel next year?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
