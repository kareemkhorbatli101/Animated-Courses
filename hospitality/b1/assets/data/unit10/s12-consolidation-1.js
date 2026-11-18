/* Unit 10 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can complete a checkout using this unit\'s '
  + 'vocabulary and reported speech together.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 10 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'One morning, a smiling man came to the desk. “Do you remember me?” he '
            + 'asked. Lina looked, and then she smiled too. “Mr. Deeb! Of course. '
            + 'You stayed with us a year ago.” “I did,” he said. “And you looked '
            + 'after me so well that I promised I would come back. So here I am.” '
            + 'Lina felt a warm glow of pride. This was the greatest reward of all: '
            + 'a guest who had returned.',
          say: 'One morning, a smiling man came to the desk. “Do you remember me?” he '
            + 'asked. Lina looked, and then she smiled too. “Mr. Deeb! Of course. '
            + 'You stayed with us a year ago.” “I did,” he said. “And you looked '
            + 'after me so well that I promised I would come back. So here I am.” '
            + 'Lina felt a warm glow of pride. This was the greatest reward of all: '
            + 'a guest who had returned.',
          role: 'course'
        },
        {
          h: 'Mr. Deeb stayed for three happy nights. On the last morning, he came '
            + 'to check out. Lina prepared his bill and explained each charge '
            + 'clearly. “The total is 380 dollars,” she said. He paid by card, and '
            + 'she gave him a receipt. “Did you enjoy your stay?” she asked. “Very '
            + 'much,” he said. “The room was perfect, and the food was even better '
            + 'than last year.” Lina thanked him and wrote his kind words down for '
            + 'the chef.',
          say: 'Mr. Deeb stayed for three happy nights. On the last morning, he came '
            + 'to check out. Lina prepared his bill and explained each charge '
            + 'clearly. “The total is 380 dollars,” she said. He paid by card, and '
            + 'she gave him a receipt. “Did you enjoy your stay?” she asked. “Very '
            + 'much,” he said. “The room was perfect, and the food was even better '
            + 'than last year.” Lina thanked him and wrote his kind words down for '
            + 'the chef.',
          role: 'course'
        },
        {
          h: 'As he left, Mr. Deeb turned at the door. “Thank you for everything,” '
            + 'he said. “I\'ll be back again.” “We\'ll be waiting for you,” said '
            + 'Lina, with a warm smile. Later, Mr. Nabil came over. “A year ago,” he '
            + 'said, “you were a nervous new trainee. Today, a guest travelled back '
            + 'across the country just to see you. You have learned everything I '
            + 'hoped to teach you. Well done, Lina.” And Lina understood: the '
            + 'journey that had begun with her first shy \'welcome\' had come, at '
            + 'last, full circle.',
          say: 'As he left, Mr. Deeb turned at the door. “Thank you for everything,” '
            + 'he said. “I\'ll be back again.” “We\'ll be waiting for you,” said '
            + 'Lina, with a warm smile. Later, Mr. Nabil came over. “A year ago,” he '
            + 'said, “you were a nervous new trainee. Today, a guest travelled back '
            + 'across the country just to see you. You have learned everything I '
            + 'hoped to teach you. Well done, Lina.” And Lina understood: the '
            + 'journey that had begun with her first shy \'welcome\' had come, at '
            + 'last, full circle.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 10 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'When had Mr. Deeb stayed before?',
            model: 'A year ago.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why did he come back?',
            model: 'Because Lina had looked after him so well and he had promised he '
              + 'would come back.',
            minWords: 5,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did he say about the room and the food?',
            model: 'The room was perfect and the food was even better than last year.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did Mr. Nabil say Lina was a year ago, and what is she now?',
            model: 'A year ago a nervous new trainee; today someone a guest travelled '
              + 'across the country to see (she has learned everything).',
            minWords: 6,
            rows: 3,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['Who came to the desk one morning? (Mr. Deeb, a returning guest)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 10 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. He said Lina had looked [[1]] him so well.'
        + '<br>'
        + '2. Lina explained each [[2]] on the bill clearly.'
        + '<br>'
        + '3. He paid by [[3]] and she gave him a receipt.'
        + '<br>'
        + '4. He said the food was even [[4]] than last year.'
        + '<br>'
        + '5. Lina\'s journey had come full [[5]].'
        + '</div>',
      answers: {
        '1': ['after'],
        '2': ['charge'],
        '3': ['card'],
        '4': ['better'],
        '5': ['circle']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>after</b>',
        '2': '<b>charge</b>',
        '3': '<b>card</b>',
        '4': '<b>better</b>',
        '5': '<b>circle</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 10 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is a returning guest such a special reward for a hotel?',
      stems: ['Why is a returning guest such a special reward for a hotel?',
      'Look back over the whole course. Which skill do you think matters '
        + 'most, and why?']
    }
  ]
});
