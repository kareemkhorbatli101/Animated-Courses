/* Unit 8 §4 — Grammar — 'will' and 'going to' for Offers and Promises.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s04', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Grammar — \'will\' and \'going to\' for Offers and Promises', part: '2',
          section: '4', lesson: 'Grammar — \'will\' and \'going to\' for Offers and Promises', title: 'Grammar — \'will\' and \'going to\' for Offers and Promises' },
  objective: 'By the end of Part 2 you can offer and promise with \'will\', and '
  + 'describe an arrangement already made with \'going to\'.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 8 · P2 · figures',
      type: 'study',
      title: 'The pictures in Grammar — \'will\' and \'going to\' for Offers and Promises',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-8.3.png', caption: 'Use will to offer and promise; going to for plans.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 8 · P2 A',
      type: 'cloze',
      title: 'Respond to each request with an offer or promise using will',
      instruction: 'Respond to each request with an offer or promise using will. (0 is '
  + 'done for you.)',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “Could I have some more towels?” → [[1]]'
        + '<br>'
        + '2. “Is there a cot for my baby?” → [[2]]'
        + '<br>'
        + '3. “Can someone carry my bags?” → [[3]]'
        + '<br>'
        + '4. “Could you call me a taxi?” → [[4]]'
        + '</div>',
      answers: {
        '1': ['Of course. I\'ll bring you some more.'],
        '2': ['Yes, I\'ll put a cot in your room.'],
        '3': ['Certainly. I\'ll send a porter now.'],
        '4': ['Of course. I\'ll call a taxi for you. (answers vary)']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Of course. I\'ll bring you some more.</b>',
        '2': '<b>Yes, I\'ll put a cot in your room.</b>',
        '3': '<b>Certainly. I\'ll send a porter now.</b>',
        '4': '<b>Of course. I\'ll call a taxi for you. (answers vary)</b>'
      }
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 8 · P2 B',
      type: 'discuss',
      title: 'Choose will or going to',
      instruction: 'Choose will or going to.',
      questions: [{
            q: 'Don\'t worry — I ( \'ll / \'m going to ) fix that for you now.',
            model: '\'ll',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Next year, the hotel ( will / is going to ) build a new pool. It\'s '
              + 'already planned.',
            model: 'is going to',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'You\'re cold? I ( \'ll / \'m going to ) bring you a blanket.',
            model: '\'ll',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'We ( \'ll / \'re going to ) open a spa in the spring — it\'s in the plan.',
            model: '\'re going to',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 8 · P2 C',
      type: 'cloze',
      title: 'Make an offer with Shall I…?',
      instruction: 'Make an offer with Shall I…?',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. (call a taxi) → [[1]]'
        + '<br>'
        + '2. (bring your breakfast to the room) → [[2]]'
        + '<br>'
        + '3. (book a table for you) → [[3]]'
        + '</div>',
      answers: {
        '1': ['Shall I call a taxi?'],
        '2': ['Shall I bring your breakfast to the room?'],
        '3': ['Shall I book a table for you?']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>Shall I call a taxi?</b>',
        '2': '<b>Shall I bring your breakfast to the room?</b>',
        '3': '<b>Shall I book a table for you?</b>'
      }
    }
  ]
});
