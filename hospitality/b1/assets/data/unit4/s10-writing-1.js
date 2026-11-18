/* Unit 4 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short note for the next shift '
  + 'about an arriving guest.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 4 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, welcome to the Orient Rose Hotel. Your room is 210, '
            + 'on the second floor. Breakfast is from seven to ten in the '
            + 'restaurant. The wifi password is \'welcome\'. If you need anything, '
            + 'please call reception. We hope you are going to have a wonderful '
            + 'stay. Kind regards, Lina — Front Office.',
          say: 'Dear Mr. Sayed, welcome to the Orient Rose Hotel. Your room is 210, '
            + 'on the second floor. Breakfast is from seven to ten in the '
            + 'restaurant. The wifi password is \'welcome\'. If you need anything, '
            + 'please call reception. We hope you are going to have a wonderful '
            + 'stay. Kind regards, Lina — Front Office.',
          role: 'course'
        },
        {
          h: 'Dear Ms. Khalil, this is a note to confirm your arrangements. We\'re '
            + 'giving you a wake-up call at 5:30 tomorrow. A taxi is waiting for you '
            + 'at the entrance at 6:00. The porter is going to help with your bags. '
            + 'Have a good journey! Kind regards, Reception.',
          say: 'Dear Ms. Khalil, this is a note to confirm your arrangements. We\'re '
            + 'giving you a wake-up call at 5:30 tomorrow. A taxi is waiting for you '
            + 'at the entrance at 6:00. The porter is going to help with your bags. '
            + 'Have a good journey! Kind regards, Reception.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What is the room number and floor?',
            model: 'Room 210, second floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the wifi password?',
            model: '\'welcome\'.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina hope for the guest?',
            model: 'That the guest is going to have a wonderful stay.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) welcome the guest 2) the room number and floor 3) breakfast '
              + 'time / one arrangement 4) a warm wish for the stay',
            say: 'Plan: 1) welcome the guest 2) the room number and floor 3) breakfast '
              + 'time / one arrangement 4) a warm wish for the stay',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Write a short welcome card (40–60 words) for a guest '
  + 'arriving at your hotel. Use present continuous / going to at least '
  + 'once.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
