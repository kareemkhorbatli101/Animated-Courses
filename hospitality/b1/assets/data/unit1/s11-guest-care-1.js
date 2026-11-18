/* Unit 1 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can describe how a hotel team helps each '
  + 'other, and say why the guest comes first.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 1 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'Who carries the guest\'s bags?',
            model: 'The porter.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who makes sure the room is ready?',
            model: 'The housekeeper.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the golden rule of hospitality?',
            model: 'The guest comes first, and the team works together.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is teamwork important for the guest?',
            model: 'Because when everyone helps, the guest feels welcome.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 1 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest calls reception. Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: Good evening. Could you send a [[1]] to carry my bags, please?'
        + '<br>'
        + '2. Lina: Of course. A porter is coming to your [[2]] now.'
        + '<br>'
        + '3. Guest: Thank you. And what time is [[3]] in the morning?'
        + '</div>',
      answers: {
        '1': ['porter'],
        '2': ['room'],
        '3': ['breakfast']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>porter</b>',
        '2': '<b>room</b>',
        '3': '<b>breakfast</b>'
      }
    }
  ]
});
