/* Unit 7 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s housekeeping language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 7 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. After a shower, you dry yourself with a [[1]].'
        + '<br>'
        + '2. The clean sheets for the bed are called bed [[2]].'
        + '<br>'
        + '3. You clean the carpet with a [[3]] cleaner.'
        + '</div>',
      answers: {
        '1': ['towel'],
        '2': ['linen'],
        '3': ['vacuum']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>towel</b>',
        '2': '<b>linen</b>',
        '3': '<b>vacuum</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 7 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with the present perfect and already / yet / just '
  + 'where shown.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. I [[1]] (clean) all the rooms on this floor.'
        + '<br>'
        + '2. She [[2]] (make) the beds already.'
        + '<br>'
        + '3. [[3]] you [[3]] (restock) the minibar yet?'
        + '<br>'
        + '4. Room service — I [[4]] just [[4]] (bring) your dinner.'
        + '</div>',
      answers: {
        '1': ['have cleaned'],
        '2': ['has made'],
        '3': ['Have … restocked'],
        '4': ['have … brought']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>have cleaned</b>',
        '2': '<b>has made</b>',
        '3': '<b>Have … restocked</b>',
        '4': '<b>have … brought</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 7 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Housekeeping works from early morning until evening. First, the team '
              + 'cleans the rooms of the guests who have checked out. Then they tidy '
              + 'the rooms of the guests who are staying. They have a strict checklist '
              + 'for every room, and a supervisor checks their work before a new guest '
              + 'arrives.',
            say: 'Housekeeping works from early morning until evening. First, the team '
              + 'cleans the rooms of the guests who have checked out. Then they tidy '
              + 'the rooms of the guests who are staying. They have a strict checklist '
              + 'for every room, and a supervisor checks their work before a new guest '
              + 'arrives.',
            role: 'course'
          }]
      },
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'When does housekeeping work?',
            model: 'From early morning until evening.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Whose rooms do they clean first?',
            model: 'The rooms of guests who have checked out.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Who checks their work?',
            model: 'A supervisor.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
