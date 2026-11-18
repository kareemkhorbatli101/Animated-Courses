/* Unit 4 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can run a check-in using this unit\'s '
  + 'vocabulary and future forms together.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 4 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'Who carries the guest\'s bags?',
            model: 'Aleppo.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the guest\'s name and room number?',
            model: 'Sami the porter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What arrangement does Lina make for the guest?',
            model: 'Omar Deeb, room 305.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How does the guest feel at the end?',
            model: 'A wake-up call for six o\'clock.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Where has the guest travelled from? (Aleppo)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 4 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest is tired after a long [[1]].'
        + '<br>'
        + '2. Lina asks to see the guest\'s [[2]].'
        + '<br>'
        + '3. The room is on the [[3]] floor.'
        + '<br>'
        + '4. Lina arranges a [[4]] call for six o\'clock.'
        + '<br>'
        + '5. The porter is taking the guest\'s [[5]] up.'
        + '</div>',
      answers: {
        '1': ['journey'],
        '2': ['passport'],
        '3': ['third'],
        '4': ['wake-up'],
        '5': ['bags']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>journey</b>',
        '2': '<b>passport</b>',
        '3': '<b>third</b>',
        '4': '<b>wake-up</b>',
        '5': '<b>bags</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 4 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why does a warm check-in matter so much for a tired guest?',
      stems: ['Why does a warm check-in matter so much for a tired guest?',
      'What small things can a receptionist do to make a check-in feel caring?']
    }
  ]
});
