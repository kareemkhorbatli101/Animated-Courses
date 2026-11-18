/* Unit 6 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s recommendation '
  + 'language again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 6 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'For one day, the Old City is the best choice. It\'s '
              + 'closer than Palmyra and more beautiful than the new town. The best '
              + 'time to go is the morning.\'',
            say: '[Teacher reads] \'For one day, the Old City is the best choice. It\'s '
              + 'closer than Palmyra and more beautiful than the new town. The best '
              + 'time to go is the morning.\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What is the best choice for one day?',
            model: 'The Old City.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Is it closer or further than Palmyra?',
            model: 'Closer.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When is the best time to go?',
            model: 'The morning.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 6 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Recommend the best place in your area, and '
  + 'compare it with one other place.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 6 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can recommend places to visit.',
            say: 'I can recommend places to visit.',
            role: 'course'
          },
          {
            h: 'I can compare options with comparatives &amp; superlatives.',
            say: 'I can compare options with comparatives & superlatives.',
            role: 'course'
          },
          {
            h: 'I can give simple tourist information.',
            say: 'I can give simple tourist information.',
            role: 'course'
          },
          {
            h: 'I can describe places with adjectives.',
            say: 'I can describe places with adjectives.',
            role: 'course'
          },
          {
            h: 'I can help a guest plan a day out.',
            say: 'I can help a guest plan a day out.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences: one comparative and one superlative '
  + 'about places you know.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. [[1]]'
        + '<br>'
        + '2. [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': 'The book leaves this one to you.',
        '2': 'The book leaves this one to you.'
      }
    }
  ]
});
