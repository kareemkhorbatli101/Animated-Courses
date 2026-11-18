/* Unit 6 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can recommend a place to a guest, compare it '
  + 'with another, and say how to get there.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 6 · P4 A',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A: Say how much time you have and ask for a recommendation.',
            say: 'A: Say how much time you have and ask for a recommendation.',
            role: 'course'
          },
          {
            h: 'B: Recommend a place. Say why (use a superlative).',
            say: 'B: Recommend a place. Say why (use a superlative).',
            role: 'course'
          },
          {
            h: 'A: Ask if it is far / expensive.',
            say: 'A: Ask if it is far / expensive.',
            role: 'course'
          },
          {
            h: 'B: Compare it with another option (use a comparative).',
            say: 'B: Compare it with another option (use a comparative).',
            role: 'course'
          },
          {
            h: 'A: Say thank you.',
            say: 'A: Say thank you.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Role-play: recommend a place',
      instruction: 'Role-play: recommend a place. Student A is a guest; Student B is the '
  + 'concierge. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 6 · P4 B',
      type: 'report',
      title: 'Compare and choose',
      instruction: 'Compare and choose. Work in pairs. Compare two places you know. Which '
  + 'is better for a day out? Why?',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 6 · P4 C',
      type: 'discuss',
      title: 'Talk about your area',
      instruction: 'Talk about your area. Ask and answer.',
      questions: [{
            q: 'What is the most famous place in your city or town?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the best place to eat near you?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Is your city busier or quieter than Damascus?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — the book leaves this one open.'
    }
  ]
});
