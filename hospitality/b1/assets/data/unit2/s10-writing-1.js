/* Unit 2 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short description of a hotel\'s '
  + 'facilities for a guest to read.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 2 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'The Orient Rose Hotel has excellent facilities. On the ground floor, '
            + 'there is a restaurant, a café and a spa. There is also a beautiful '
            + 'garden behind the hotel. On the first floor, there is a gym and a '
            + 'swimming pool. There are more than fifty comfortable rooms. There is '
            + 'free wifi everywhere, and there is a car park under the building.',
          say: 'The Orient Rose Hotel has excellent facilities. On the ground floor, '
            + 'there is a restaurant, a café and a spa. There is also a beautiful '
            + 'garden behind the hotel. On the first floor, there is a gym and a '
            + 'swimming pool. There are more than fifty comfortable rooms. There is '
            + 'free wifi everywhere, and there is a car park under the building.',
          role: 'course'
        },
        {
          h: 'Dear Guest, welcome to the Orient Rose Hotel. There is a restaurant '
            + 'and a café on the ground floor. Breakfast is from seven to ten. There '
            + 'is a gym and a pool on the first floor. If you need anything, '
            + 'reception is next to the lift. Enjoy your stay!',
          say: 'Dear Guest, welcome to the Orient Rose Hotel. There is a restaurant '
            + 'and a café on the ground floor. Breakfast is from seven to ten. There '
            + 'is a gym and a pool on the first floor. If you need anything, '
            + 'reception is next to the lift. Enjoy your stay!',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'Name two facilities on the ground floor.',
            model: '(any two) restaurant, café, spa, garden.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is on the first floor?',
            model: 'A gym and a swimming pool.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where is the car park?',
            model: 'Under the building.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) the place and its size 2) what there is on each floor / in '
              + 'each part 3) where two things are (use prepositions)',
            say: 'Plan: 1) the place and its size 2) what there is on each floor / in '
              + 'each part 3) where two things are (use prepositions)',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Describe a place you know (your hotel, home, or '
  + 'school) in 40–60 words. Use there is / there are and two '
  + 'prepositions.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
