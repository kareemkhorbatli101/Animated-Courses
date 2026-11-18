/* Unit 9 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s complaint language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 9 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. When a guest tells you something is wrong, that is a [[1]].'
        + '<br>'
        + '2. To say sorry is to [[2]].'
        + '<br>'
        + '3. Money given back to a guest is a [[3]].'
        + '</div>',
      answers: {
        '1': ['complaint'],
        '2': ['apologise'],
        '3': ['refund']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>complaint</b>',
        '2': '<b>apologise</b>',
        '3': '<b>refund</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 9 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Complete with the first conditional or should.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. If you [[1]] (tell) me the problem, I\'ll help you.'
        + '<br>'
        + '2. If the room is noisy, we [[2]] (move) you.'
        + '<br>'
        + '3. You [[3]] (should / call) reception if there is a problem.'
        + '<br>'
        + '4. We [[4]] (should / replace) the broken lamp now.'
        + '</div>',
      answers: {
        '1': ['tell'],
        '2': ['\'ll move'],
        '3': ['should call'],
        '4': ['should replace']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>tell</b>',
        '2': '<b>\'ll move</b>',
        '3': '<b>should call</b>',
        '4': '<b>should replace</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 9 · P10 C',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'A good complaint policy helps the whole hotel. When a guest '
              + 'complains, the staff write a short report: the room, the problem, and '
              + 'the action taken. Managers read these reports and look for patterns. '
              + 'If the same problem happens again and again, they fix the real cause '
              + '— not just the single complaint.',
            say: 'A good complaint policy helps the whole hotel. When a guest '
              + 'complains, the staff write a short report: the room, the problem, and '
              + 'the action taken. Managers read these reports and look for patterns. '
              + 'If the same problem happens again and again, they fix the real cause '
              + '— not just the single complaint.',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      minWords: 30,
      paras: [{
          label: 'Your answer',
          purpose: 'Write a few sentences.'
        }],
      coach: {
        title: 'What to include',
        task: 'Reading. Read the short text and answer.',
        criteria: [{ t: 'What do staff write when a guest complains?' },
            { t: 'What do managers look for in the reports?' },
            { t: 'What do they do if the same problem happens again and again?' }]
      }
    }
  ]
});
