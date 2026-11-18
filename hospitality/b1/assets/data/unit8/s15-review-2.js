/* Unit 8 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s request language again '
  + 'without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 8 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Of course we have a cot. I\'ll put it in your room '
              + 'right away. And I\'ll bring some extra towels too. Shall I arrange a '
              + 'high chair for the restaurant?\'',
            say: '[Teacher reads] \'Of course we have a cot. I\'ll put it in your room '
              + 'right away. And I\'ll bring some extra towels too. Shall I arrange a '
              + 'high chair for the restaurant?\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What will the person put in the room?',
            model: 'A cot.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What else will they bring?',
            model: 'Some extra towels.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What do they offer to arrange?',
            model: 'A high chair for the restaurant.',
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
      bookRef: 'Unit 8 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. A guest makes two requests and one special '
  + 'need. Respond to each with a promise using I\'ll.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 8 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can understand and respond to guest requests.',
            say: 'I can understand and respond to guest requests.',
            role: 'course'
          },
          {
            h: 'I can make offers and promises with will.',
            say: 'I can make offers and promises with will.',
            role: 'course'
          },
          {
            h: 'I can help guests with special needs.',
            say: 'I can help guests with special needs.',
            role: 'course'
          },
          {
            h: 'I can reassure a guest and promise action.',
            say: 'I can reassure a guest and promise action.',
            role: 'course'
          },
          {
            h: 'I can explain politely what I can and cannot do.',
            say: 'I can explain politely what I can and cannot do.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two promises for a guest, using I\'ll — one small '
  + 'request, one special need.',
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
