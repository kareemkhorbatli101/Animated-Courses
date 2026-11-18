/* Unit 1 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short self-introduction for a '
  + 'new colleague to read.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 1 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'My name is Lina Haddad. I am a receptionist at the Orient Rose Hotel '
            + 'in Damascus. I work in the front office. Every morning I start at '
            + 'seven o\'clock. I greet the guests, I answer the telephone, and I '
            + 'check people in. I like my job because I meet new people every day.',
          say: 'My name is Lina Haddad. I am a receptionist at the Orient Rose Hotel '
            + 'in Damascus. I work in the front office. Every morning I start at '
            + 'seven o\'clock. I greet the guests, I answer the telephone, and I '
            + 'check people in. I like my job because I meet new people every day.',
          role: 'course'
        },
        {
          h: 'Dear Mr. Sayed, welcome to the Orient Rose Hotel. Your room is 210, '
            + 'on the second floor. Breakfast is in the restaurant, from seven to '
            + 'ten. If you need anything, please call reception. We hope you enjoy '
            + 'your stay. Kind regards, Lina — Front Office.',
          say: 'Dear Mr. Sayed, welcome to the Orient Rose Hotel. Your room is 210, '
            + 'on the second floor. Breakfast is in the restaurant, from seven to '
            + 'ten. If you need anything, please call reception. We hope you enjoy '
            + 'your stay. Kind regards, Lina — Front Office.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 1 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What is Lina\'s job?',
            model: 'Receptionist.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things does she do every morning?',
            model: '(any three) greets guests, answers the telephone, checks people in.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why does she like her job?',
            model: 'Because she meets new people every day.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 1 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) your name and job 2) your department 3) two things you do '
              + 'every day 4) why you like your job',
            say: 'Plan: 1) your name and job 2) your department 3) two things you do '
              + 'every day 4) why you like your job',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Write a short self-introduction for the hotel '
  + 'noticeboard (40–60 words). Use the present simple.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
