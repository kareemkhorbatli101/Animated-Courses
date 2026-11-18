/* Unit 5 §11 — Guest-Care & Service Track.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s11', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Guest-Care & Service Track', part: '7',
          section: '11', lesson: 'Guest-Care & Service Track', title: 'Guest-Care & Service Track' },
  objective: 'By the end of Part 7 you can look after a table without hurrying it, '
  + 'and notice when a guest needs something.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 5 · P7',
      type: 'study',
      title: 'Guest-care and service',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Guest-care and service',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Great table service follows clear steps: greet and seat the guests, '
            + 'bring the menu, take the order, serve the food, check back once, '
            + 'bring the bill, and say a warm farewell. But a great waiter also '
            + 'listens for special needs. Some guests cannot eat certain foods: a '
            + 'guest may have an allergy to nuts, may not eat meat, or may need food '
            + 'without sugar. When a guest tells you about a dietary need, you must '
            + 'take it seriously, check with the kitchen, and never guess. A wrong '
            + 'dish can make a guest ill. Good service is not only fast and friendly '
            + '— it is also safe.',
          say: 'Great table service follows clear steps: greet and seat the guests, '
            + 'bring the menu, take the order, serve the food, check back once, '
            + 'bring the bill, and say a warm farewell. But a great waiter also '
            + 'listens for special needs. Some guests cannot eat certain foods: a '
            + 'guest may have an allergy to nuts, may not eat meat, or may need food '
            + 'without sugar. When a guest tells you about a dietary need, you must '
            + 'take it seriously, check with the kitchen, and never guess. A wrong '
            + 'dish can make a guest ill. Good service is not only fast and friendly '
            + '— it is also safe.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P7 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words.',
      questions: [{
            q: 'List three steps of table service.',
            model: '(any three) greet & seat, bring the menu, take the order, serve the '
              + 'food, check back, bring the bill, say farewell.',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Give two examples of a special dietary need.',
            model: '(any two) an allergy to nuts, not eating meat, food without sugar.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What must you do when a guest tells you about a dietary need?',
            model: 'Take it seriously, check with the kitchen, never guess.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is a wrong dish sometimes dangerous?',
            model: 'A wrong dish can make a guest ill.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P7 B',
      type: 'cloze',
      title: 'Listen and complete',
      instruction: 'Listen and complete. A guest tells the waiter about a dietary need. '
  + 'Write the missing word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Guest: I\'m sorry, but I have an [[1]] to nuts. Is there anything '
            + 'in this dish?'
        + '<br>'
        + '2. Waiter: Thank you for telling me. I\'ll [[2]] with the kitchen '
            + 'right away.'
        + '<br>'
        + '3. Waiter: This dish is safe, but I [[3]] recommend the fish instead, '
            + 'to be sure.'
        + '</div>',
      answers: {
        '1': ['allergy'],
        '2': ['check'],
        '3': ['would']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>allergy</b>',
        '2': '<b>check</b>',
        '3': '<b>would</b>'
      }
    }
  ]
});
