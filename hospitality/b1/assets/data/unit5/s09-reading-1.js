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
      id: 'c2',
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
      id: 'c3',
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
