/* Unit 4 §15 — Review and Can-Do (2).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s15', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Review and Can-Do (2)', part: '10',
          section: '15', lesson: 'Review and Can-Do (2)', title: 'Review and Can-Do (2)' },
  objective: 'By the end of Part 10 you can use this unit\'s check-in language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'D',
      bookRef: 'Unit 4 · P10 D',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: '[Teacher reads] \'Welcome, Mrs. Haddad. I\'m checking you in now. '
              + 'Your room is 118, on the first floor. Breakfast is from seven to ten. '
              + 'Would you like a wake-up call?\'',
            say: '[Teacher reads] \'Welcome, Mrs. Haddad. I\'m checking you in now. '
              + 'Your room is 118, on the first floor. Breakfast is from seven to ten. '
              + 'Would you like a wake-up call?\'',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Listening',
      instruction: 'Listening. Listen and answer. (Teacher reads.)',
      questions: [{
            q: 'What is the guest\'s room number and floor?',
            model: '118, first floor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is breakfast?',
            model: 'Seven to ten.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does the receptionist offer?',
            model: 'A wake-up call.',
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
      bookRef: 'Unit 4 · P10 E',
      type: 'report',
      title: 'Speaking',
      instruction: 'Speaking. Work in pairs. Check a guest in, from welcome to \'enjoy '
  + 'your stay\'. Use all five steps.',
      minWords: 20,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c3',
      ref: 'F',
      bookRef: 'Unit 4 · P10 F',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Can-Do check. Tick what you can do.',
            say: 'Can-Do check. Tick what you can do.',
            role: 'course'
          },
          {
            h: 'I can check a guest in and complete the registration.',
            say: 'I can check a guest in and complete the registration.',
            role: 'course'
          },
          {
            h: 'I can explain room details and hotel information.',
            say: 'I can explain room details and hotel information.',
            role: 'course'
          },
          {
            h: 'I can talk about arrangements and plans.',
            say: 'I can talk about arrangements and plans.',
            role: 'course'
          },
          {
            h: 'I can offer and arrange services.',
            say: 'I can offer and arrange services.',
            role: 'course'
          },
          {
            h: 'I can hand over the room and wish a good stay.',
            say: 'I can hand over the room and wish a good stay.',
            role: 'course'
          }]
      },
      type: 'cloze',
      title: 'Writing',
      instruction: 'Writing. Write two sentences: one arrangement (present continuous) '
  + 'and one plan (going to).',
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
