/* Unit 2 §1 — Warm Up.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s01', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Warm Up', part: '0',
          section: '1', lesson: 'Warm Up', title: 'Warm Up' },
  objective: 'By the end of this Warm Up you can name the parts of a hotel building '
  + 'and say what a guest can find on each floor.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 2 · Warm-Up',
      type: 'study',
      title: 'Before you read',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you read',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Look at Figure 2.0 and the tour picture above. Think about these '
            + 'questions before you read.',
          say: 'Look at Figure 2.0 and the tour picture above. Think about these '
            + 'questions before you read.',
          role: 'course'
        },
        {
          h: '1. How many floors does the hotel have?',
          say: '1. How many floors does the hotel have?',
          role: 'course'
        },
        {
          h: '2. What is on the ground floor?',
          say: '2. What is on the ground floor?',
          role: 'course'
        },
        {
          h: '3. Where are the guest rooms?',
          say: '3. Where are the guest rooms?',
          role: 'course'
        },
        {
          h: 'The Orient Rose Hotel is a large hotel in the centre of Damascus. It '
            + 'has four floors. On the ground floor, there is a big lobby, the '
            + 'reception desk, a restaurant, a café and a spa. There is also a '
            + 'beautiful garden behind the hotel. On the first, second and third '
            + 'floors, there are the guest rooms — more than fifty rooms in total. '
            + 'There is a lift next to the reception, and there are stairs beside '
            + 'it.',
          say: 'The Orient Rose Hotel is a large hotel in the centre of Damascus. It '
            + 'has four floors. On the ground floor, there is a big lobby, the '
            + 'reception desk, a restaurant, a café and a spa. There is also a '
            + 'beautiful garden behind the hotel. On the first, second and third '
            + 'floors, there are the guest rooms — more than fifty rooms in total. '
            + 'There is a lift next to the reception, and there are stairs beside '
            + 'it.',
          role: 'course'
        },
        {
          h: 'The hotel has many facilities for its guests. There is a gym on the '
            + 'first floor, and there is free wifi everywhere. There is a car park '
            + 'under the building. The hotel even has a second home by the sea: the '
            + 'Orient Rose Resort in Latakia, on the coast. There, guests can swim, '
            + 'relax on the beach, and enjoy the sun.',
          say: 'The hotel has many facilities for its guests. There is a gym on the '
            + 'first floor, and there is free wifi everywhere. There is a car park '
            + 'under the building. The hotel even has a second home by the sea: the '
            + 'Orient Rose Resort in Latakia, on the coast. There, guests can swim, '
            + 'relax on the beach, and enjoy the sun.',
          role: 'course'
        },
        {
          h: 'Today, Mr. Nabil is showing Lina around the hotel. “A good '
            + 'receptionist knows every corner of the hotel,” he says. “When a guest '
            + 'asks a question, you must know the answer.”',
          say: 'Today, Mr. Nabil is showing Lina around the hotel. “A good '
            + 'receptionist knows every corner of the hotel,” he says. “When a guest '
            + 'asks a question, you must know the answer.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · Warm-Up A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Read the text and answer in your own words. (0 is done '
  + 'for you.)',
      questions: [{
            q: 'How many floors does the hotel have?',
            model: 'Four floors.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name three things on the ground floor.',
            model: '(any three) lobby, reception, restaurant, café, spa, garden.',
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
          },
      {
            q: 'What is the name of the resort, and where is it?',
            model: 'The Orient Rose Resort, in Latakia (on the coast).',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Mr. Nabil say a good receptionist must know?',
            model: 'The answer to every guest question / every corner of the hotel.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where is the hotel? (in the centre of Damascus)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · Warm-Up B',
      type: 'quizset',
      title: 'True or False?',
      instruction: 'True or False? Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'There is a garden behind the hotel.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The guest rooms are on the ground floor.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        },
      {
          q: 'There is a gym on the first floor.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The resort is in the mountains.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        },
      {
          q: 'There is free wifi everywhere.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
