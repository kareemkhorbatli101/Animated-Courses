/* Unit 5 §9 — Extended Reading.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s09', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Extended Reading', part: '5',
          section: '9', lesson: 'Extended Reading', title: 'Extended Reading' },
  objective: 'By the end of Part 5 you can read a menu and a short restaurant text, '
  + 'and answer a guest\'s question about a dish.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 5 · P5',
      type: 'study',
      title: 'The reading',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The reading',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Last Friday evening, a family came to the Orient Rose restaurant to '
            + 'celebrate a birthday. There were six people: two grandparents, a '
            + 'mother and father, and two children. Rashid, the head waiter, '
            + 'welcomed them warmly and showed them to a big table near the window. '
            + 'Lina worked with him that night, and she felt a little nervous.',
          say: 'Last Friday evening, a family came to the Orient Rose restaurant to '
            + 'celebrate a birthday. There were six people: two grandparents, a '
            + 'mother and father, and two children. Rashid, the head waiter, '
            + 'welcomed them warmly and showed them to a big table near the window. '
            + 'Lina worked with him that night, and she felt a little nervous.',
          role: 'course'
        },
        {
          h: 'First, Rashid brought the menus and gave the family a few minutes to '
            + 'choose. Then Lina took the order. The grandmother ordered the '
            + 'fattoush, and the father chose the mixed grill. The children wanted '
            + 'shish taouk with chips, and the mother asked for the grilled fish. '
            + 'Lina wrote everything down carefully and repeated the order. She did '
            + 'not make a single mistake.',
          say: 'First, Rashid brought the menus and gave the family a few minutes to '
            + 'choose. Then Lina took the order. The grandmother ordered the '
            + 'fattoush, and the father chose the mixed grill. The children wanted '
            + 'shish taouk with chips, and the mother asked for the grilled fish. '
            + 'Lina wrote everything down carefully and repeated the order. She did '
            + 'not make a single mistake.',
          role: 'course'
        },
        {
          h: 'The food arrived hot and fresh. The family ate slowly and talked and '
            + 'laughed. The grandfather said the hummus was the best in Damascus. At '
            + 'the end, Rashid brought a small cake with a candle, and the whole '
            + 'restaurant sang for the birthday. The children\'s faces shone with '
            + 'happiness.',
          say: 'The food arrived hot and fresh. The family ate slowly and talked and '
            + 'laughed. The grandfather said the hummus was the best in Damascus. At '
            + 'the end, Rashid brought a small cake with a candle, and the whole '
            + 'restaurant sang for the birthday. The children\'s faces shone with '
            + 'happiness.',
          role: 'course'
        },
        {
          h: 'When the family left, the mother thanked Lina and Rashid. “You made '
            + 'this evening special,” she said. “We will come again.” Lina smiled. '
            + 'She was tired, but she was proud. That night, she understood '
            + 'Rashid\'s words at last: a good meal really is a happy memory.',
          say: 'When the family left, the mother thanked Lina and Rashid. “You made '
            + 'this evening special,” she said. “We will come again.” Lina smiled. '
            + 'She was tired, but she was proud. That night, she understood '
            + 'Rashid\'s words at last: a good meal really is a happy memory.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P5 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'How many people were in the family?',
            model: 'Six people.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where did Rashid seat them?',
            model: 'At a big table near the window.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the children order?',
            model: 'Shish taouk with chips.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did Rashid bring at the end?',
            model: 'A small cake with a candle.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the mother say when the family left?',
            model: '\'You made this evening special. We will come again.\'',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why did the family come to the restaurant? (to celebrate a birthday)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P5 B',
      type: 'cloze',
      title: 'Choose the best answer (A–D)',
      instruction: 'Choose the best answer (A–D).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The family came to… A) work B) celebrate a birthday C) sleep D) '
            + 'complain [[1]]'
        + '<br>'
        + '2. Lina took the order and… A) made many mistakes B) made no mistakes '
            + 'C) forgot it D) lost it [[2]]'
        + '<br>'
        + '3. The grandfather liked the… A) fish B) coffee C) hummus D) cake [[3]]'
        + '<br>'
        + '4. At the end, Lina felt… A) angry B) bored C) tired but proud D) sad [[4]]'
        + '</div>',
      answers: {
        '1': ['B'],
        '2': ['B'],
        '3': ['C'],
        '4': ['C']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>B</b>',
        '2': '<b>B</b>',
        '3': '<b>C</b>',
        '4': '<b>C</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 5 · P5 C',
      type: 'cloze',
      title: 'Find a word in the text that means:',
      instruction: 'Find a word in the text that means:',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. to have a party for a special day → [[1]]'
        + '<br>'
        + '2. a person who serves in a restaurant → [[2]]'
        + '<br>'
        + '3. not one; zero → a word meaning \'not any\' → [[3]]'
        + '</div>',
      answers: {
        '1': ['celebrate'],
        '2': ['waiter'],
        '3': ['single (a single mistake) / no']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>celebrate</b>',
        '2': '<b>waiter</b>',
        '3': '<b>single (a single mistake) / no</b>'
      }
    }
  ]
});
