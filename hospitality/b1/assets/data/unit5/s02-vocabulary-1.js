/* Unit 5 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name what is on a menu and the things on '
  + 'a table, and take an order using the right words.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 5 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-5.1.png', caption: 'The restaurant menu.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P1 A',
      type: 'cloze',
      title: 'Match each dish (1–6) with its group (a–d)',
      instruction: 'Match each dish (1–6) with its group (a–d). You will use some groups '
  + 'more than once. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. kebab [[1]]'
        + '<br>'
        + '2. baklava [[2]]'
        + '<br>'
        + '3. mint tea [[3]]'
        + '<br>'
        + '4. fattoush [[4]]'
        + '<br>'
        + '5. shish taouk [[5]]'
        + '<br>'
        + '6. Arabic coffee [[6]]'
        + '</div>',
      answers: {
        '1': ['b'],
        '2': ['d'],
        '3': ['c'],
        '4': ['a'],
        '5': ['b'],
        '6': ['c']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>b</b>',
        '2': '<b>d</b>',
        '3': '<b>c</b>',
        '4': '<b>a</b>',
        '5': '<b>b</b>',
        '6': '<b>c</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The list of food and drinks is the [[1]].'
        + '<br>'
        + '2. The person who serves the food is the [[2]].'
        + '<br>'
        + '3. A small dish before the main food is a [[3]].'
        + '<br>'
        + '4. The big, hot dish is the [[4]].'
        + '<br>'
        + '5. When guests choose their food, they give their [[5]].'
        + '<br>'
        + '6. At the end of the meal, the guest pays the [[6]].'
        + '</div>',
      answers: {
        '1': ['menu'],
        '2': ['waiter'],
        '3': ['starter'],
        '4': ['main course'],
        '5': ['order'],
        '6': ['bill']
      },
      bank: ['bill',
      'main course',
      'order',
      'starter',
      'waiter'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>menu</b>',
        '2': '<b>waiter</b>',
        '3': '<b>starter</b>',
        '4': '<b>main course</b>',
        '5': '<b>order</b>',
        '6': '<b>bill</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 5 · P1 C',
      visual: { img: '../assets/figures/fig-5.2.png', caption: 'A place setting.' },
      type: 'cloze',
      title: 'Look at Figure 5.2',
      instruction: 'Look at Figure 5.2. Which thing do you use? Write the word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. You cut your food with this. → [[1]]'
        + '<br>'
        + '2. You drink water from this. → [[2]]'
        + '<br>'
        + '3. You eat rice or soup with this. → [[3]]'
        + '<br>'
        + '4. You clean your hands and mouth with this. → [[4]]'
        + '</div>',
      answers: {
        '1': ['knife'],
        '2': ['glass'],
        '3': ['spoon'],
        '4': ['napkin']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>knife</b>',
        '2': '<b>glass</b>',
        '3': '<b>spoon</b>',
        '4': '<b>napkin</b>'
      }
    }
  ]
});
