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
      ref: 'Text',
      bookRef: 'Unit 8 · P2',
      type: 'study',
      title: 'The grammar, as the book gives it',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'The grammar, as the book gives it',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'We use WILL (\'ll) to make an OFFER or a PROMISE at the moment of '
            + 'speaking — a decision we make right now to help. When a guest asks '
            + 'for something, we answer with will: “I\'ll bring it right away.” '
            + '“I\'ll make sure your room is ready.” “Don\'t worry, I\'ll take care '
            + 'of it.” We also use Shall I…? to offer: “Shall I call a taxi for '
            + 'you?”',
          say: 'We use WILL (\'ll) to make an OFFER or a PROMISE at the moment of '
            + 'speaking — a decision we make right now to help. When a guest asks '
            + 'for something, we answer with will: “I\'ll bring it right away.” '
            + '“I\'ll make sure your room is ready.” “Don\'t worry, I\'ll take care '
            + 'of it.” We also use Shall I…? to offer: “Shall I call a taxi for '
            + 'you?”',
          role: 'course'
        },
        {
          h: 'We use GOING TO for a PLAN or intention we decided BEFORE now: '
            + '“We\'re going to add a new ramp next month.” “I\'m going to check the '
            + 'store for more pillows.” The difference: will = I decide to help now; '
            + 'going to = I already had this plan.',
          say: 'We use GOING TO for a PLAN or intention we decided BEFORE now: '
            + '“We\'re going to add a new ramp next month.” “I\'m going to check the '
            + 'store for more pillows.” The difference: will = I decide to help now; '
            + 'going to = I already had this plan.',
          role: 'course'
        },
        {
          h: 'A promise with will is powerful. When you say “I\'ll do it,” the '
            + 'guest trusts you — so only promise what you can really do, and then '
            + 'do it.',
          say: 'A promise with will is powerful. When you say “I\'ll do it,” the '
            + 'guest trusts you — so only promise what you can really do, and then '
            + 'do it.',
          role: 'course'
        },
        {
          h: 'Form',
          say: 'Form',
          role: 'course'
        },
        {
          h: 'Offer / promise: I / we + will (\'ll) + base verb · Shall I + base '
            + 'verb? Plan: I am / we are + going to + base verb',
          say: 'Offer / promise: I / we + will (\'ll) + base verb · Shall I + base '
            + 'verb? Plan: I am / we are + going to + base verb',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c3',
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
      id: 'c4',
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
      id: 'c5',
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
