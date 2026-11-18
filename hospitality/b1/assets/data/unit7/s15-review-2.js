/* Unit 7 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s housekeeping language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 7 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Room service! I\'ve just brought your dinner. I\'ve '
              + 'also brought some extra water. Have you finished with your breakfast '
              + 'tray? I can take it away.\'',
            say: '[Teacher reads] \'Room service! I\'ve just brought your dinner. I\'ve '
              + 'also brought some extra water. Have you finished with your breakfast '
              + 'tray? I can take it away.\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What has the person just brought?',
            model: 'The dinner.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What else have they brought?',
            model: 'Some extra water.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What do they offer to take away?',
            model: 'The breakfast tray.',
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
      bookRef: 'Unit 7 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. You are a housekeeper. Report to your '
  + 'supervisor what you have done and what you haven\'t done yet.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 7 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can name housekeeping tasks and room-service items.',
            say: 'I can name housekeeping tasks and room-service items.',
            role: 'course'
          },
          {
            h: 'I can say what has been done and what still needs doing.',
            say: 'I can say what has been done and what still needs doing.',
            role: 'course'
          },
          {
            h: 'I can take a room-service order and deliver it politely.',
            say: 'I can take a room-service order and deliver it politely.',
            role: 'course'
          },
          {
            h: 'I can report the state of a room.',
            say: 'I can report the state of a room.',
            role: 'course'
          },
          {
            h: 'I can respond to a guest\'s housekeeping request.',
            say: 'I can respond to a guest\'s housekeeping request.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences with the present perfect: one thing you '
  + 'have done today, one thing you haven\'t done yet.',
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
