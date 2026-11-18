/* Unit 9 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can handle a complaint using this unit\'s '
  + 'vocabulary and grammar together.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 9 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'How did Lina react when the guest was loud?',
            model: 'She stayed calm.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Where did she take the guest, and why?',
            model: 'To a quiet corner, away from the other guests, so he could speak and '
              + 'she could listen.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What solution did she offer?',
            model: 'To move him to a quiet room with a view of the Old City, with the '
              + 'porter carrying his bags (and dinner with compliments).',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the guest say at the end?',
            model: '\'You turned a terrible start into a wonderful evening. I\'ll '
              + 'certainly come back.\'',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Why was the guest upset? (he booked a quiet room with a view but got '
        + 'a noisy one facing the car park)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 9 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Lina stayed [[1]] when the guest spoke loudly.'
        + '<br>'
        + '2. She led him to a quiet [[2]] and listened.'
        + '<br>'
        + '3. She offered to [[3]] him to a room with a view of the Old City.'
        + '<br>'
        + '4. She offered dinner with the hotel\'s [[4]].'
        + '<br>'
        + '5. The guest said he would certainly come [[5]].'
        + '</div>',
      answers: {
        '1': ['calm'],
        '2': ['corner'],
        '3': ['move'],
        '4': ['compliments'],
        '5': ['back']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>calm</b>',
        '2': '<b>corner</b>',
        '3': '<b>move</b>',
        '4': '<b>compliments</b>',
        '5': '<b>back</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 9 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why did Lina take the guest away from the other guests?',
      stems: ['Why did Lina take the guest away from the other guests?',
      'How can staying calm help to solve a complaint?']
    }
  ]
});
