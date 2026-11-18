/* Unit 10 §14 — Review and Can-Do  (Course Review).

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Review and Can-Do (Course Review)', part: '10',
          section: '14', lesson: 'Review and Can-Do (Course Review)', title: 'Review and Can-Do (Course Review)' },
  objective: 'By the end of Part 10 you can use the language of the whole course '
  + 'again, and tick honestly what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 10 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The paper that lists everything a guest must pay is the [[1]].'
        + '<br>'
        + '2. Money given back to a guest is a [[2]].'
        + '<br>'
        + '3. To pay and leave the hotel is to [[3]].'
        + '</div>',
      answers: {
        '1': ['bill'],
        '2': ['refund'],
        '3': ['check out']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>bill</b>',
        '2': '<b>refund</b>',
        '3': '<b>check out</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 10 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Put the sentence into reported speech.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “The room is lovely.” → She said [[1]]'
        + '<br>'
        + '2. “I will return next year.” → He said [[2]]'
        + '<br>'
        + '3. “Is breakfast included?” → She asked [[3]]'
        + '<br>'
        + '4. “What time is checkout?” → He asked [[4]]'
        + '</div>',
      answers: {
        '1': ['…the room was lovely.'],
        '2': ['…he would return the next year.'],
        '3': ['…if breakfast was included.'],
        '4': ['…what time checkout was.']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>…the room was lovely.</b>',
        '2': '<b>…he would return the next year.</b>',
        '3': '<b>…if breakfast was included.</b>',
        '4': '<b>…what time checkout was.</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 10 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A loyalty programme rewards guests who return. Each time a guest '
              + 'stays, they earn points. After several stays, they receive a free '
              + 'night, a room upgrade, or a special gift. Loyalty programmes work '
              + 'because a returning guest is more valuable to a hotel than a new one.',
            say: 'A loyalty programme rewards guests who return. Each time a guest '
              + 'stays, they earn points. After several stays, they receive a free '
              + 'night, a room upgrade, or a special gift. Loyalty programmes work '
              + 'because a returning guest is more valuable to a hotel than a new one.',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'What does a loyalty programme reward?',
            model: 'Guests who return.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What can a guest earn after several stays? (give one example)',
            model: '(any one) a free night, a room upgrade, a special gift.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why do loyalty programmes work?',
            model: 'Because a returning guest is more valuable than a new one.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
