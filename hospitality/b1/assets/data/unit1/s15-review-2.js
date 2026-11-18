/* Unit 1 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s vocabulary and grammar '
  + 'again without prompting, and tick honestly what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 1 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Good afternoon, and welcome to the Orient Rose '
              + 'Hotel. My name is Lina. Do you have a reservation?\'',
            say: '[Teacher reads] \'Good afternoon, and welcome to the Orient Rose '
              + 'Hotel. My name is Lina. Do you have a reservation?\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What time of day is it?',
            model: 'Afternoon.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What is the receptionist\'s name?',
            model: 'Lina.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does she ask the guest?',
            model: 'If the guest has a reservation.',
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
      bookRef: 'Unit 1 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Introduce yourself and your job in four sentences.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 1 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can greet guests and colleagues.',
            say: 'I can greet guests and colleagues.',
            role: 'course'
          },
          {
            h: 'I can introduce myself and my role.',
            say: 'I can introduce myself and my role.',
            role: 'course'
          },
          {
            h: 'I can describe my daily tasks.',
            say: 'I can describe my daily tasks.',
            role: 'course'
          },
          {
            h: 'I can talk about what is happening now.',
            say: 'I can talk about what is happening now.',
            role: 'course'
          },
          {
            h: 'I can name the departments and people of a hotel.',
            say: 'I can name the departments and people of a hotel.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences: one about what you do every day, one '
  + 'about what you are doing now.',
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
