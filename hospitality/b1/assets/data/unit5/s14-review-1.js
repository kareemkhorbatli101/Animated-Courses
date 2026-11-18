/* Unit 5 §14 — Review and Can-Do.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s14', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Review and Can-Do', part: '10',
          section: '14', lesson: 'Review and Can-Do', title: 'Review and Can-Do' },
  objective: 'By the end of Part 10 you can use this unit\'s restaurant language '
  + 'again without prompting, and tick what you can now do.',
  cards: [
    {
      id: 'c1',
      ref: 'A',
      bookRef: 'Unit 5 · P10 A',
      type: 'cloze',
      title: 'Vocabulary',
      instruction: 'Vocabulary. Complete the sentence.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A small dish before the main food is a [[1]].'
        + '<br>'
        + '2. The person who serves the food is the [[2]].'
        + '<br>'
        + '3. At the end of the meal, the guest pays the [[3]].'
        + '</div>',
      answers: {
        '1': ['starter'],
        '2': ['waiter'],
        '3': ['bill']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>starter</b>',
        '2': '<b>waiter</b>',
        '3': '<b>bill</b>'
      }
    },
    {
      id: 'c2',
      ref: 'B',
      bookRef: 'Unit 5 · P10 B',
      type: 'cloze',
      title: 'Grammar',
      instruction: 'Grammar. Put the verb in the past simple.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The guest [[1]] (order) the kebab.'
        + '<br>'
        + '2. We [[2]] (eat) mezze and drank tea.'
        + '<br>'
        + '3. [[3]] you [[3]] (enjoy) the meal?'
        + '<br>'
        + '4. The waiter [[4]] (not / bring) the bill quickly.'
        + '</div>',
      answers: {
        '1': ['ordered'],
        '2': ['ate'],
        '3': ['Did … enjoy'],
        '4': ['didn\'t bring']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ordered</b>',
        '2': '<b>ate</b>',
        '3': '<b>Did … enjoy</b>',
        '4': '<b>didn\'t bring</b>'
      }
    },
    {
      id: 'c3',
      ref: 'C',
      bookRef: 'Unit 5 · P10 C',
      type: 'discuss',
      title: 'Reading',
      instruction: 'Reading. Read the short text and answer.',
      questions: [{
            q: 'How many guests came, and for which meal?',
            model: 'Ten guests, for lunch.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did they order?',
            model: 'A lot of mezze to share, then grilled meat and fish.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What message did they leave?',
            model: '\'Thank you for a wonderful meal.\'',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
