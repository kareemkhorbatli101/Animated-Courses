/* Unit 5 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can take an order and report it using this '
  + 'unit\'s vocabulary and the past simple together.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 5 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'On Tuesday evening, the restaurant was busy. A couple came in and sat '
            + 'by the window, and Rashid gave the table to Lina. It was her first '
            + 'order alone. Her hands shook a little, but she smiled and said, “Good '
            + 'evening. Welcome. Are you ready to order?”',
          say: 'On Tuesday evening, the restaurant was busy. A couple came in and sat '
            + 'by the window, and Rashid gave the table to Lina. It was her first '
            + 'order alone. Her hands shook a little, but she smiled and said, “Good '
            + 'evening. Welcome. Are you ready to order?”',
          role: 'course'
        },
        {
          h: 'The woman asked for a recommendation, and Lina remembered Rashid\'s '
            + 'advice. “The fattoush is wonderful,” she said, “and the shish taouk '
            + 'is our most popular main dish.” The couple ordered the fattoush, the '
            + 'shish taouk, and the grilled fish. Lina wrote everything down and '
            + 'repeated the order carefully. Then she took it to the kitchen. Twenty '
            + 'minutes later, she served the food, hot and fresh.',
          say: 'The woman asked for a recommendation, and Lina remembered Rashid\'s '
            + 'advice. “The fattoush is wonderful,” she said, “and the shish taouk '
            + 'is our most popular main dish.” The couple ordered the fattoush, the '
            + 'shish taouk, and the grilled fish. Lina wrote everything down and '
            + 'repeated the order carefully. Then she took it to the kitchen. Twenty '
            + 'minutes later, she served the food, hot and fresh.',
          role: 'course'
        },
        {
          h: 'After the meal, Lina asked, “Did you enjoy your dinner?” “It was '
            + 'delicious,” said the man. “Thank you.” Lina brought the bill and '
            + 'wished them a good evening. When the couple left, they thanked her by '
            + 'name. Rashid watched from across the room and gave a small nod. “Well '
            + 'done, Lina,” he said. “You didn\'t rush, you listened, and you '
            + 'smiled. That is good service.”',
          say: 'After the meal, Lina asked, “Did you enjoy your dinner?” “It was '
            + 'delicious,” said the man. “Thank you.” Lina brought the bill and '
            + 'wished them a good evening. When the couple left, they thanked her by '
            + 'name. Rashid watched from across the room and gave a small nod. “Well '
            + 'done, Lina,” he said. “You didn\'t rush, you listened, and you '
            + 'smiled. That is good service.”',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 5 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'Where did the couple sit?',
            model: 'By the window.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did Lina recommend?',
            model: 'The fattoush (and the shish taouk).',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three dishes did the couple order?',
            model: 'Fattoush, shish taouk, grilled fish.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What three things did Lina do well, according to Rashid?',
            model: 'She didn\'t rush, she listened, and she smiled.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['When did this happen? (on Tuesday evening)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 5 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The couple sat by the [[1]].'
        + '<br>'
        + '2. Lina recommended the [[2]] and the shish taouk.'
        + '<br>'
        + '3. Lina [[3]] the order carefully to check it.'
        + '<br>'
        + '4. Twenty minutes later, she [[4]] the food.'
        + '<br>'
        + '5. The couple thanked her by [[5]].'
        + '</div>',
      answers: {
        '1': ['window'],
        '2': ['fattoush'],
        '3': ['repeated'],
        '4': ['served'],
        '5': ['name']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>window</b>',
        '2': '<b>fattoush</b>',
        '3': '<b>repeated</b>',
        '4': '<b>served</b>',
        '5': '<b>name</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 5 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is it important to repeat a guest\'s order?',
      stems: ['Why is it important to repeat a guest\'s order?',
      'What makes the difference between fast service and truly good service?']
    }
  ]
});
