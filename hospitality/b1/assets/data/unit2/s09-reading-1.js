/* Unit 2 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a description of a property and '
  + 'find the facility a particular guest needs.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 2 · P5',
      type: 'study',
      title: 'The reading',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The reading',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Welcome to the Orient Rose Hotel. Let us take a short tour, floor by '
            + 'floor. We start on the ground floor, in the lobby. The lobby is large '
            + 'and bright, with comfortable sofas and green plants. On the right, '
            + 'there is the reception desk, where our team welcomes every guest. '
            + 'Behind reception, there is a lift and, next to it, the stairs.',
          say: 'Welcome to the Orient Rose Hotel. Let us take a short tour, floor by '
            + 'floor. We start on the ground floor, in the lobby. The lobby is large '
            + 'and bright, with comfortable sofas and green plants. On the right, '
            + 'there is the reception desk, where our team welcomes every guest. '
            + 'Behind reception, there is a lift and, next to it, the stairs.',
          role: 'course'
        },
        {
          h: 'Still on the ground floor, there is our main restaurant, which serves '
            + 'breakfast, lunch and dinner. Opposite the restaurant, there is a '
            + 'small café for coffee and snacks. At the back of the hotel, there is '
            + 'a quiet garden and a modern spa. Under the building, there is a car '
            + 'park for guests.',
          say: 'Still on the ground floor, there is our main restaurant, which serves '
            + 'breakfast, lunch and dinner. Opposite the restaurant, there is a '
            + 'small café for coffee and snacks. At the back of the hotel, there is '
            + 'a quiet garden and a modern spa. Under the building, there is a car '
            + 'park for guests.',
          role: 'course'
        },
        {
          h: 'Now let us go up. On the first floor, there is a gym with new '
            + 'machines, and there is a swimming pool next to it. On the first, '
            + 'second and third floors, there are the guest rooms — more than fifty '
            + 'in total. Every room has a comfortable bed, a desk, a television and '
            + 'a private bathroom. Some rooms have a lovely view of the city.',
          say: 'Now let us go up. On the first floor, there is a gym with new '
            + 'machines, and there is a swimming pool next to it. On the first, '
            + 'second and third floors, there are the guest rooms — more than fifty '
            + 'in total. Every room has a comfortable bed, a desk, a television and '
            + 'a private bathroom. Some rooms have a lovely view of the city.',
          role: 'course'
        },
        {
          h: 'Finally, the hotel has a second home by the sea. The Orient Rose '
            + 'Resort in Latakia is right on the beach. There are eighty rooms, two '
            + 'restaurants, a big pool, and a lot of activities for families. '
            + 'Wherever our guests stay — in the city or by the sea — we want them '
            + 'to feel at home.',
          say: 'Finally, the hotel has a second home by the sea. The Orient Rose '
            + 'Resort in Latakia is right on the beach. There are eighty rooms, two '
            + 'restaurants, a big pool, and a lot of activities for families. '
            + 'Wherever our guests stay — in the city or by the sea — we want them '
            + 'to feel at home.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What is behind the reception desk?',
            model: 'A lift and the stairs.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is opposite the restaurant?',
            model: 'A small café.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is next to the gym on the first floor?',
            model: 'A swimming pool.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does every room have? (name two things)',
            model: '(any two) a bed, a desk, a television, a private bathroom.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How many rooms are there at the resort in Latakia?',
            model: 'Eighty rooms.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where does the tour start? (in the lobby, on the ground floor)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The lobby is… A) small and dark B) large and bright C) on the roof '
            + 'D) closed [[1]]'
        + '<br>'
        + '2. The car park is… A) behind the garden B) on the first floor C) '
            + 'under the building D) at the resort [[2]]'
        + '<br>'
        + '3. The guest rooms are on… A) the ground floor B) the first, second '
            + 'and third floors C) the roof D) the beach [[3]]'
        + '<br>'
        + '4. The resort in Latakia is… A) in the city B) in the mountains C) on '
            + 'the beach D) under the hotel [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['C'],
        '3': ['B'],
        '4': ['C']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>C</b>',
        '3': '<b>B</b>',
        '4': '<b>C</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 2 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. full of light → [[1]]'
        + '<br>'
        + '2. across from → [[2]]'
        + '<br>'
        + '3. things you can see from a window → [[3]]'
        + '</div>',
      answers: {
        '1': ['bright'],
        '2': ['opposite'],
        '3': ['view']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>bright</b>',
        '2': '<b>opposite</b>',
        '3': '<b>view</b>'
      }
    }
  ]
});
