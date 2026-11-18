/* Unit 2 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can describe your own workplace to a '
  + 'colleague and direct a guest to a facility.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 2 · P4 A',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'In my ____________, there is a ____________. There are ____________. '
              + 'There isn\'t a ____________. My favourite place is ____________, '
              + 'because…',
            say: 'In my ____________, there is a ____________. There are ____________. '
              + 'There isn\'t a ____________. My favourite place is ____________, '
              + 'because…',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Describe a place',
      instruction: 'Describe a place. Work in pairs. Describe your hotel, your school, or '
  + 'your home. Use there is / there are.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 2 · P4 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A: Ask where a facility is (the spa, the gym, the restaurant…).',
            say: 'A: Ask where a facility is (the spa, the gym, the restaurant…).',
            role: 'course'
          },
          {
            h: 'B: Say the floor and use a preposition (next to, opposite, near…).',
            say: 'B: Say the floor and use a preposition (next to, opposite, near…).',
            role: 'course'
          },
          {
            h: 'A: Ask one more question (Is there…? Are there…?).',
            say: 'A: Ask one more question (Is there…? Are there…?).',
            role: 'course'
          },
          {
            h: 'B: Answer politely and give one extra piece of information.',
            say: 'B: Answer politely and give one extra piece of information.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Role-play: giving directions',
      instruction: 'Role-play: giving directions. Student A is a guest; Student B is the '
  + 'receptionist. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 2 · P4 C',
      type: 'report',
      title: 'Ask and answer',
      instruction: 'Ask and answer. Work in pairs.',
      minWords: 20,
      placeholder: 'How many rooms are there in your hotel/home?',
      stems: ['How many rooms are there in your hotel/home?',
      'Is there a garden?',
      'What is next to the reception / the front door?',
      'Are there any cafés near your workplace?']
    }
  ]
});
