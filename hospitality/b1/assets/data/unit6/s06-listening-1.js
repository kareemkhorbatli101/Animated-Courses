/* Unit 6 §6 — Listening and Dialogue.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s06', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Listening and Dialogue', part: '3',
          section: '6', lesson: 'Listening and Dialogue', title: 'Listening and Dialogue' },
  objective: 'By the end of Part 3 you can follow a guest asking for a '
  + 'recommendation and note what they actually want.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 6 · P3 · figures',
      type: 'study',
      title: 'The pictures in Listening and Dialogue',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-6.3.png', caption: 'A guest asks the concierge for a recommendation.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'Text',
      bookRef: 'Unit 6 · P3',
      type: 'study',
      title: 'The conversation',
      instruction: 'Listen and read. Each person has their own voice.',
      passage: {
      title: 'The conversation',
      listenLabel: 'Play the conversation',
      paras: [{
          h: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          say: 'Listen and read. (Your teacher will play the audio, or read the '
            + 'dialogue aloud.)',
          role: 'course'
        },
        {
          h: '<b>Guest:</b> Good morning. I have only one day in Damascus. What\'s '
            + 'the best place to visit?',
          say: 'Good morning. I have only one day in Damascus. What\'s the best place '
            + 'to visit?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> Good morning. For one day, I recommend the Old City. '
            + 'It\'s the most beautiful part of Damascus, and it\'s very close to '
            + 'the hotel.',
          say: 'Good morning. For one day, I recommend the Old City. It\'s the most '
            + 'beautiful part of Damascus, and it\'s very close to the hotel.',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Guest:</b> That sounds perfect. Is it far?',
          say: 'That sounds perfect. Is it far?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> No, it\'s closer than you think — about ten minutes by '
            + 'taxi. You can see the Umayyad Mosque, walk through the old souq, and '
            + 'have lunch there.',
          say: 'No, it\'s closer than you think — about ten minutes by taxi. You can '
            + 'see the Umayyad Mosque, walk through the old souq, and have lunch '
            + 'there.',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Guest:</b> Wonderful. Is the souq expensive?',
          say: 'Wonderful. Is the souq expensive?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> No, it\'s cheaper than the shops near the hotel, and '
            + 'much more interesting. Here is a small map for you.',
          say: 'No, it\'s cheaper than the shops near the hotel, and much more '
            + 'interesting. Here is a small map for you.',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Guest:</b> Thank you so much. That\'s a great help.',
          say: 'Thank you so much. That\'s a great help.',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Guest:</b> We have two days. Should we go to Palmyra or to Aleppo?',
          say: 'We have two days. Should we go to Palmyra or to Aleppo?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> Both are wonderful. Palmyra is more famous for its '
            + 'ancient ruins, but it is further away — about three hours by car.',
          say: 'Both are wonderful. Palmyra is more famous for its ancient ruins, but '
            + 'it is further away — about three hours by car.',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Guest:</b> And Aleppo?',
          say: 'And Aleppo?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> Aleppo is closer and has the biggest citadel in Syria, '
            + 'plus a huge old souq. For two days, I think Aleppo is easier.',
          say: 'Aleppo is closer and has the biggest citadel in Syria, plus a huge '
            + 'old souq. For two days, I think Aleppo is easier.',
          role: 'rana',
          who: 'Rana'
        },
        {
          h: '<b>Guest:</b> Which one is more beautiful?',
          say: 'Which one is more beautiful?',
          role: 'guest',
          who: 'Guest'
        },
        {
          h: '<b>Rana:</b> That\'s difficult! Palmyra has the most amazing sunset '
            + 'in the desert. But for a shorter trip, Aleppo is the better choice.',
          say: 'That\'s difficult! Palmyra has the most amazing sunset in the desert. '
            + 'But for a shorter trip, Aleppo is the better choice.',
          role: 'rana',
          who: 'Rana'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
      ref: 'A',
      bookRef: 'Unit 6 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words. (0 is done for you.)',
      questions: [{
            q: 'What does Rana recommend, and why?',
            model: 'One day.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'How far is the Old City?',
            model: 'The Old City — it\'s the most beautiful part and very close.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Name two things the guest can do there.',
            model: 'About ten minutes by taxi.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Is the souq cheaper or more expensive than the hotel shops?',
            model: '(any two) see the Umayyad Mosque, walk through the souq, have lunch.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      ideas: ['How much time does the guest have? (only one day)'],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'B',
      bookRef: 'Unit 6 · P3 B',
      visual: { img: '../assets/figures/fig-6.4.png', caption: 'Comparing two places for a trip.' },
      type: 'quizset',
      title: 'Listen again',
      instruction: 'Listen again. Write T or F. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: 'Rana recommends the Old City.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        },
      {
          q: 'The Old City is far from the hotel.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The souq is cheaper than the hotel shops.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: true,
            why: 'The text says so.'
          }]
        },
      {
          q: 'Rana gives the guest a map.',
          options: [{
            t: 'True',
            ok: true,
            why: 'The text says so.'
          },
            {
            t: 'False',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c5',
      ref: 'A',
      bookRef: 'Unit 6 · P3 A',
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Comprehension. Listen and answer in your own words.',
      questions: [{
            q: 'How many days does the guest have?',
            model: 'One day.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Why is Palmyra harder to visit?',
            model: 'The Old City — it\'s the most beautiful part and very close.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What does Aleppo have?',
            model: 'About ten minutes by taxi.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'For a shorter trip, which does Rana recommend?',
            model: '(any two) see the Umayyad Mosque, walk through the souq, have lunch.',
            minWords: 4,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
