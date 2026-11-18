/* Unit 5 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s restaurant language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 5 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Good evening. Are you ready to order? … An '
              + 'excellent choice. So that\'s the fattoush and the kebab, with a fresh '
              + 'juice. I\'ll bring your starter now.\'',
            say: '[Teacher reads] \'Good evening. Are you ready to order? … An '
              + 'excellent choice. So that\'s the fattoush and the kebab, with a fresh '
              + 'juice. I\'ll bring your starter now.\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What does the waiter ask at the start?',
            model: 'If they are ready to order.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What two dishes does the guest order?',
            model: 'The fattoush and the kebab.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What will the waiter bring first?',
            model: 'The starter.',
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
      bookRef: 'Unit 5 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Take an order for a starter, a main and a '
  + 'drink. Repeat it to check.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 5 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can welcome and seat guests.',
            say: 'I can welcome and seat guests.',
            role: 'course'
          },
          {
            h: 'I can take a food and drink order politely.',
            say: 'I can take a food and drink order politely.',
            role: 'course'
          },
          {
            h: 'I can describe dishes and make recommendations.',
            say: 'I can describe dishes and make recommendations.',
            role: 'course'
          },
          {
            h: 'I can talk about what happened, using the past simple.',
            say: 'I can talk about what happened, using the past simple.',
            role: 'course'
          },
          {
            h: 'I can serve guests and bring the bill.',
            say: 'I can serve guests and bring the bill.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences about a meal you had, using the past simple.',
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
