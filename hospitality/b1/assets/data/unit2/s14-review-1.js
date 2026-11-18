/* Unit 2 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s facilities vocabulary '
  + 'and place language again without prompting, and tick what you can now '
  + 'do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 2 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. You swim in the [[1]].'
        + '<br>'
        + '2. You exercise in the [[2]].'
        + '<br>'
        + '3. You go up quickly in the [[3]].'
        + '</div>',
      answers: {
        '1': ['swimming pool'],
        '2': ['gym'],
        '3': ['lift']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>swimming pool</b>',
        '2': '<b>gym</b>',
        '3': '<b>lift</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 2 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with there is / there are and a preposition where needed.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. [[1]] a café [[1]] the ground floor.'
        + '<br>'
        + '2. [[2]] fifty rooms in the hotel.'
        + '<br>'
        + '3. The lift is [[3]] the reception desk.'
        + '<br>'
        + '4. [[4]] some towels [[4]] the bathroom.'
        + '</div>',
      answers: {
        '1': ['There is … on'],
        '2': ['There are'],
        '3': ['next to'],
        '4': ['There are … in']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>There is … on</b>',
        '2': '<b>There are</b>',
        '3': '<b>next to</b>',
        '4': '<b>There are … in</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 2 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'The spa is on the ground floor, behind the reception. It is quiet and '
              + 'warm. There are three treatment rooms and a small waiting area. Right '
              + 'now, a guest is relaxing in the spa after a long journey.',
            say: 'The spa is on the ground floor, behind the reception. It is quiet and '
              + 'warm. There are three treatment rooms and a small waiting area. Right '
              + 'now, a guest is relaxing in the spa after a long journey.',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'Where is the spa?',
            model: 'On the ground floor, behind the reception.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How many treatment rooms are there?',
            model: 'Three.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the guest doing right now?',
            model: 'Relaxing (after a long journey).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
