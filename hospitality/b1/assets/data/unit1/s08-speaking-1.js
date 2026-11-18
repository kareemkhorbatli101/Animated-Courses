/* Unit 1 §8 — Speaking.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s08', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Speaking', part: '4',
          section: '8', lesson: 'Speaking', title: 'Speaking' },
  objective: 'By the end of Part 4 you can introduce yourself and your job, welcome '
  + 'a guest to the hotel, and ask a colleague about their work.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 1 · P4 A',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Hello. My name is ____________. I am a ____________ at the '
              + '____________ Hotel. I work in the ____________ department. I usually '
              + 'work the ____________ shift. Nice to meet you.',
            say: 'Hello. My name is ____________. I am a ____________ at the '
              + '____________ Hotel. I work in the ____________ department. I usually '
              + 'work the ____________ shift. Nice to meet you.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Introduce yourself',
      instruction: 'Introduce yourself. Work in pairs. Use these sentences.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 1 · P4 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A: Greet the guest and welcome them to the hotel.',
            say: 'A: Greet the guest and welcome them to the hotel.',
            role: 'course'
          },
          {
            h: 'B: Say good morning and give your name and reservation.',
            say: 'B: Say good morning and give your name and reservation.',
            role: 'course'
          },
          {
            h: 'A: Welcome the guest by name and give the room number.',
            say: 'A: Welcome the guest by name and give the room number.',
            role: 'course'
          },
          {
            h: 'B: Ask where the restaurant is.',
            say: 'B: Ask where the restaurant is.',
            role: 'course'
          },
          {
            h: 'A: Answer politely and wish the guest a nice stay.',
            say: 'A: Answer politely and wish the guest a nice stay.',
            role: 'course'
          }]
      },
      type: 'report',
      title: 'Role-play: Welcome a guest',
      instruction: 'Role-play: Welcome a guest. Student A is the receptionist. Student B '
  + 'is the guest. Then change roles.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 1 · P4 C',
      type: 'report',
      title: 'Ask and answer',
      instruction: 'Ask and answer. Work in pairs. Ask your partner about their job.',
      minWords: 20,
      placeholder: 'What is your job?',
      stems: ['What is your job?',
      'Where do you work?',
      'What do you do every day?',
      'What are you doing now?']
    }
  ]
});
