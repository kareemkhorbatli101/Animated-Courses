/* Unit 1 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s vocabulary and grammar '
  + 'again without prompting, and tick honestly what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 1 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A person who stays at a hotel is a [[1]].'
        + '<br>'
        + '2. A person who carries bags is a [[2]].'
        + '<br>'
        + '3. The front desk is also called [[3]].'
        + '</div>',
      answers: {
        '1': ['guest'],
        '2': ['porter'],
        '3': ['reception']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>guest</b>',
        '2': '<b>porter</b>',
        '3': '<b>reception</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 1 · P10 B',
      type: 'cloze',
      title: 'Grammar (this unit)',
      instruction: 'Grammar (this unit). Complete with the present simple or the present '
  + 'continuous.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Every day Lina [[1]] (greet) the guests.'
        + '<br>'
        + '2. Right now she [[2]] (help) a family from Aleppo.'
        + '<br>'
        + '3. The hotel [[3]] (have) a restaurant and a café.'
        + '<br>'
        + '4. Look! A porter [[4]] (carry) the bags now.'
        + '</div>',
      answers: {
        '1': ['greets'],
        '2': ['is helping'],
        '3': ['has'],
        '4': ['is carrying']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>greets</b>',
        '2': '<b>is helping</b>',
        '3': '<b>has</b>',
        '4': '<b>is carrying</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 1 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Rana is the concierge at the Orient Rose Hotel. She helps guests '
              + 'enjoy the city. Every day she books tours, gives directions, and '
              + 'recommends restaurants. Right now she is telling a guest about the '
              + 'Old City of Damascus.',
            say: 'Rana is the concierge at the Orient Rose Hotel. She helps guests '
              + 'enjoy the city. Every day she books tours, gives directions, and '
              + 'recommends restaurants. Right now she is telling a guest about the '
              + 'Old City of Damascus.',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What is Rana\'s job?',
            model: 'Concierge.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name two things she does every day.',
            model: '(any two) books tours, gives directions, recommends restaurants.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is she doing right now?',
            model: 'She is telling a guest about the Old City of Damascus.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
