/* Unit 2 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can give directions that a tired guest can '
  + 'follow the first time.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 2 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A good hotel is easy for every guest to use. Clear signs show the way '
            + 'to the restaurant, the lift and the rooms. For guests who cannot use '
            + 'the stairs, there is a lift and there are rooms on the ground floor. '
            + 'There is also a ramp at the entrance for guests in a wheelchair or '
            + 'with heavy bags. When a guest looks lost, a good receptionist does '
            + 'not only point — she stands up, smiles, and gives clear, simple '
            + 'directions. Sometimes, she walks with the guest to show the way.',
          say: 'A good hotel is easy for every guest to use. Clear signs show the way '
            + 'to the restaurant, the lift and the rooms. For guests who cannot use '
            + 'the stairs, there is a lift and there are rooms on the ground floor. '
            + 'There is also a ramp at the entrance for guests in a wheelchair or '
            + 'with heavy bags. When a guest looks lost, a good receptionist does '
            + 'not only point — she stands up, smiles, and gives clear, simple '
            + 'directions. Sometimes, she walks with the guest to show the way.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'What do clear signs show?',
            model: 'The way to the restaurant, the lift and the rooms.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is there for guests who cannot use the stairs?',
            model: 'A lift and rooms on the ground floor.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is at the entrance for guests with heavy bags?',
            model: 'A ramp.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does a good receptionist do when a guest looks lost?',
            model: 'She stands up, smiles, and gives clear directions (and sometimes '
              + 'walks with the guest).',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest asks for help. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: Excuse me, I can\'t use the [[1]]. Is there a lift?'
        + '<br>'
        + '2. Lina: Yes, of course. The lift is [[2]] to the reception desk.'
        + '<br>'
        + '3. Lina: Would you like me to [[3]] with you and show the way?'
        + '</div>',
      answers: {
        '1': ['stairs'],
        '2': ['next'],
        '3': ['walk / come']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>stairs</b>',
        '2': '<b>next</b>',
        '3': '<b>walk / come</b>'
      }
    }
  ]
});
