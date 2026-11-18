/* Unit 2 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s facilities vocabulary '
  + 'and place language again without prompting, and tick what you can now '
  + 'do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 2 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'The gym is on the first floor, opposite the pool. '
              + 'It opens at six o\'clock in the morning. There are a lot of machines '
              + 'and free water.\'',
            say: '[Teacher reads] \'The gym is on the first floor, opposite the pool. '
              + 'It opens at six o\'clock in the morning. There are a lot of machines '
              + 'and free water.\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'Which floor is the gym on?',
            model: 'The first floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is opposite the gym?',
            model: 'The pool.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time does the gym open?',
            model: 'Six o\'clock (in the morning).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c2',
      ref: 'E',
      bookRef: 'Unit 2 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Give directions from reception to two facilities.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 2 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can describe the facilities of a hotel.',
            say: 'I can describe the facilities of a hotel.',
            role: 'course'
          },
          {
            h: 'I can say where things are with there is / there are.',
            say: 'I can say where things are with there is / there are.',
            role: 'course'
          },
          {
            h: 'I can use prepositions of place.',
            say: 'I can use prepositions of place.',
            role: 'course'
          },
          {
            h: 'I can use some, any, a lot of, a few.',
            say: 'I can use some, any, a lot of, a few.',
            role: 'course'
          },
          {
            h: 'I can give simple directions inside a building.',
            say: 'I can give simple directions inside a building.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences about your workplace or home: one with '
  + 'there is, one with there are.',
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
