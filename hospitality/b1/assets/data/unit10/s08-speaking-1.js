/* Unit 10 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can check a guest out, explain each charge, '
  + 'take payment, and say goodbye properly.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 10 · P4 A',
      type: 'report',
      title: 'Role-play: check a guest out',
      instruction: 'Role-play: check a guest out. Student A is the guest; Student B is '
  + 'the receptionist. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 10 · P4 B',
      type: 'report',
      title: 'Report it',
      instruction: 'Report it. Work in pairs. Your partner tells you three things about '
  + 'their stay; report each to the class with reported speech (“She '
  + 'said…”).',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 10 · P4 C',
      type: 'discuss',
      title: 'Give feedback',
      instruction: 'Give feedback. Ask and answer.',
      questions: [{
            q: 'What did you enjoy most about a hotel or restaurant you visited?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Did you leave a review? What did you write?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What makes you want to return to a place?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
