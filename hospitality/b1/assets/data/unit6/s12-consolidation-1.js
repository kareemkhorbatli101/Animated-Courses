/* Unit 6 §12 — Consolidation.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s12', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Consolidation', part: '8',
          section: '12', lesson: 'Consolidation', title: 'Consolidation' },
  objective: 'By the end of Part 8 you can recommend and compare using this unit\'s '
  + 'vocabulary and grammar together.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 6 · P8 · figures',
      type: 'study',
      title: 'The pictures in Consolidation',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-6.5.png', caption: 'A sample plan for a perfect day in the Old City.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 6 · P8',
      type: 'study',
      title: 'Consolidation',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Consolidation',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'A young couple came to the concierge desk. “We have one day in '
            + 'Damascus,” they said, “and we love history and good food. What do you '
            + 'recommend?” Rana smiled and thought for a moment. “The Old City is '
            + 'perfect for you,” she said. “It\'s the most beautiful part of the '
            + 'city, and everything is close together.”',
          say: 'A young couple came to the concierge desk. “We have one day in '
            + 'Damascus,” they said, “and we love history and good food. What do you '
            + 'recommend?” Rana smiled and thought for a moment. “The Old City is '
            + 'perfect for you,” she said. “It\'s the most beautiful part of the '
            + 'city, and everything is close together.”',
          role: 'course'
        },
        {
          h: 'Rana drew a simple plan on a map. “In the morning, when it is '
            + 'quieter, visit the Umayyad Mosque — it is one of the oldest and most '
            + 'famous mosques in the world. Then walk through the old souq; it is '
            + 'busier at midday, but it is more colourful and much cheaper than the '
            + 'shops near the hotel. Have lunch in a traditional restaurant inside '
            + 'the Old City.”',
          say: 'Rana drew a simple plan on a map. “In the morning, when it is '
            + 'quieter, visit the Umayyad Mosque — it is one of the oldest and most '
            + 'famous mosques in the world. Then walk through the old souq; it is '
            + 'busier at midday, but it is more colourful and much cheaper than the '
            + 'shops near the hotel. Have lunch in a traditional restaurant inside '
            + 'the Old City.”',
          role: 'course'
        },
        {
          h: '“In the afternoon,” Rana continued, “visit a beautiful old house with '
            + 'a courtyard, and in the evening, sit in a café by a fountain and '
            + 'drink Arabic coffee. It is the best way to end the day.” The couple '
            + 'were delighted. “Thank you,” said the woman. “That sounds better than '
            + 'any tour!” That evening, they returned tired and happy. “It was the '
            + 'best day of our holiday,” they told Rana. She was very glad. A good '
            + 'recommendation, given with care, had made their trip unforgettable.',
          say: '“In the afternoon,” Rana continued, “visit a beautiful old house with '
            + 'a courtyard, and in the evening, sit in a café by a fountain and '
            + 'drink Arabic coffee. It is the best way to end the day.” The couple '
            + 'were delighted. “Thank you,” said the woman. “That sounds better than '
            + 'any tour!” That evening, they returned tired and happy. “It was the '
            + 'best day of our holiday,” they told Rana. She was very glad. A good '
            + 'recommendation, given with care, had made their trip unforgettable.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 6 · P8 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Answer in your own words. (0 is done.)',
      questions: [{
            q: 'What do the couple love?',
            model: 'History and good food.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Rana recommend, and why?',
            model: 'The Old City — it\'s the most beautiful part and everything is close.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Rana suggest for the evening?',
            model: 'Sit in a café by a fountain and drink Arabic coffee.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What did the couple say when they returned?',
            model: '\'It was the best day of our holiday.\'',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['How much time did the couple have? (one day)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 6 · P8 B',
      type: 'cloze',
      title: 'Complete each sentence with ONE word from the text',
      instruction: 'Complete each sentence with ONE word from the text. (0 is done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The Old City is the most [[1]] part of the city.'
        + '<br>'
        + '2. The mosque is one of the oldest and most [[2]] in the world.'
        + '<br>'
        + '3. The souq is cheaper than the [[3]] near the hotel.'
        + '<br>'
        + '4. In the evening, they sat in a café by a [[4]].'
        + '<br>'
        + '5. They said it was the best [[5]] of their holiday.'
        + '</div>',
      answers: {
        '1': ['beautiful'],
        '2': ['famous'],
        '3': ['shops'],
        '4': ['fountain'],
        '5': ['day']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>beautiful</b>',
        '2': '<b>famous</b>',
        '3': '<b>shops</b>',
        '4': '<b>fountain</b>',
        '5': '<b>day</b>'
      }
    },
    {
      id: 'c5',
      ref: 'C',
      bookRef: 'Unit 6 · P8 C',
      type: 'report',
      title: 'Discuss in small groups',
      instruction: 'Discuss in small groups. Give reasons and examples.',
      minWords: 20,
      placeholder: 'Why is it important to ask questions before you recommend a place?',
      stems: ['Why is it important to ask questions before you recommend a place?',
      'What makes a day out truly special for a visitor?']
    }
  ]
});
