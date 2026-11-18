/* Unit 3 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s booking language again '
  + 'without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 3 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Good afternoon, Orient Rose Hotel. Could I take '
              + 'your name, please? … Thank you. Would you like a single or a double '
              + 'room?\'',
            say: '[Teacher reads] \'Good afternoon, Orient Rose Hotel. Could I take '
              + 'your name, please? … Thank you. Would you like a single or a double '
              + 'room?\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What does the receptionist ask for first?',
            model: 'The guest\'s name.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What two room types does she offer?',
            model: 'Single or double.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Is her language polite or direct?',
            model: 'Polite.',
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
      bookRef: 'Unit 3 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Take a booking for a double room for two '
  + 'nights. Use all five steps.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 3 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can take a booking politely, on the phone and at the desk.',
            say: 'I can take a booking politely, on the phone and at the desk.',
            role: 'course'
          },
          {
            h: 'I can ask for and give reservation details.',
            say: 'I can ask for and give reservation details.',
            role: 'course'
          },
          {
            h: 'I can make polite requests and offers.',
            say: 'I can make polite requests and offers.',
            role: 'course'
          },
          {
            h: 'I can spell names and say dates and numbers.',
            say: 'I can spell names and say dates and numbers.',
            role: 'course'
          },
          {
            h: 'I can confirm a booking and check the details.',
            say: 'I can confirm a booking and check the details.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two polite sentences: one request to a guest, one '
  + 'offer to a guest.',
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
