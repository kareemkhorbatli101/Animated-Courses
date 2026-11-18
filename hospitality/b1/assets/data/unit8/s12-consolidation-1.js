/* Unit 8 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can take and pass on a request using this '
  + 'unit\'s vocabulary and future forms together.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 8 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'What does Lina promise the businessman?',
            model: 'To iron his suit — ready in half an hour.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina do for the young mother? (name two things)',
            model: '(any two) put a cot in the room, ask the porter to carry the bags, '
              + 'invite her to sit and rest.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Lina arrange for the elderly couple?',
            model: 'A car with a driver who knows the quiet, easy streets.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Mr. Nabil say is the reason guests trust the hotel?',
            model: 'Because she said \'I\'ll\' and every time she did it (she kept her '
              + 'promises).',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['What does the businessman need? (his suit ironed)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 8 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The businessman has an important [[1]].'
        + '<br>'
        + '2. Lina will send someone to [[2]] the suit in five minutes.'
        + '<br>'
        + '3. Lina will put a [[3]] in the mother\'s room.'
        + '<br>'
        + '4. For the elderly couple, Lina will arrange a car with a [[4]].'
        + '<br>'
        + '5. By midday, Lina has kept every [[5]].'
        + '</div>',
      answers: {
        '1': ['meeting'],
        '2': ['collect'],
        '3': ['cot'],
        '4': ['driver'],
        '5': ['promise']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>meeting</b>',
        '2': '<b>collect</b>',
        '3': '<b>cot</b>',
        '4': '<b>driver</b>',
        '5': '<b>promise</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 8 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why does keeping small promises build big trust?',
      stems: ['Why does keeping small promises build big trust?',
      'How can a hotel prepare in advance for guests with special needs?']
    }
  ]
});
