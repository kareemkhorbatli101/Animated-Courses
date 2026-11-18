/* Unit 3 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the room types and the words a '
  + 'booking uses, and read a reservation back to a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 3 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-3.1.png', caption: 'The room types at the hotel.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 3 · P1 A',
      type: 'quizset',
      title: 'Match each room type (1–5) with its description (a–f)',
      instruction: 'Match each room type (1–5) with its description (a–f). There is one '
  + 'you do not need. (0 is done for you.)',
      display: 'cards',
      items: [{
          q: '1. double',
          options: [{
            t: 'a. two separate beds, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'b. a big room with a bed and a sofa area',
            ok: false,
            why: ''
          },
            {
            t: 'c. one bed, for one person',
            ok: false,
            why: ''
          },
            {
            t: 'd. one big bed, for two people',
            ok: true,
            why: 'The book\'s key gives “one big bed, for two people” for this one.'
          },
            {
            t: 'e. beds for parents and children',
            ok: false,
            why: ''
          },
            {
            t: 'f. a room with no bed',
            ok: false,
            why: ''
          }]
        },
      {
          q: '2. twin',
          options: [{
            t: 'a. two separate beds, for two people',
            ok: true,
            why: 'The book\'s key gives “two separate beds, for two people” for this one.'
          },
            {
            t: 'b. a big room with a bed and a sofa area',
            ok: false,
            why: ''
          },
            {
            t: 'c. one bed, for one person',
            ok: false,
            why: ''
          },
            {
            t: 'd. one big bed, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'e. beds for parents and children',
            ok: false,
            why: ''
          },
            {
            t: 'f. a room with no bed',
            ok: false,
            why: ''
          }]
        },
      {
          q: '3. family',
          options: [{
            t: 'a. two separate beds, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'b. a big room with a bed and a sofa area',
            ok: false,
            why: ''
          },
            {
            t: 'c. one bed, for one person',
            ok: false,
            why: ''
          },
            {
            t: 'd. one big bed, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'e. beds for parents and children',
            ok: true,
            why: 'The book\'s key gives “beds for parents and children” for this one.'
          },
            {
            t: 'f. a room with no bed',
            ok: false,
            why: ''
          }]
        },
      {
          q: '4. suite',
          options: [{
            t: 'a. two separate beds, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'b. a big room with a bed and a sofa area',
            ok: true,
            why: 'The book\'s key gives “a big room with a bed and a sofa area” for this one.'
          },
            {
            t: 'c. one bed, for one person',
            ok: false,
            why: ''
          },
            {
            t: 'd. one big bed, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'e. beds for parents and children',
            ok: false,
            why: ''
          },
            {
            t: 'f. a room with no bed',
            ok: false,
            why: ''
          }]
        },
      {
          q: '5. family (large)',
          options: [{
            t: 'a. two separate beds, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'b. a big room with a bed and a sofa area',
            ok: false,
            why: ''
          },
            {
            t: 'c. one bed, for one person',
            ok: false,
            why: ''
          },
            {
            t: 'd. one big bed, for two people',
            ok: false,
            why: ''
          },
            {
            t: 'e. beds for parents and children',
            ok: true,
            why: 'The book\'s key gives “beds for parents and children” for this one.'
          },
            {
            t: 'f. a room with no bed',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 3 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A booking is also called a [[1]].'
        + '<br>'
        + '2. The price of a room for one night is the [[2]].'
        + '<br>'
        + '3. Before you book, you must check the [[3]] (free rooms).'
        + '<br>'
        + '4. Some hotels ask for a [[4]] — money paid in advance.'
        + '<br>'
        + '5. At the end, you repeat the details to [[5]] the booking.'
        + '<br>'
        + '6. If a guest does not want the room any more, they [[6]] the booking.'
        + '</div>',
      answers: {
        '1': ['reservation'],
        '2': ['rate'],
        '3': ['availability'],
        '4': ['deposit'],
        '5': ['confirm'],
        '6': ['cancel']
      },
      bank: ['availability',
      'cancel',
      'confirm',
      'deposit',
      'rate'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>reservation</b>',
        '2': '<b>rate</b>',
        '3': '<b>availability</b>',
        '4': '<b>deposit</b>',
        '5': '<b>confirm</b>',
        '6': '<b>cancel</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 3 · P1 C',
      visual: { img: '../assets/figures/fig-3.2.png', caption: 'Check-in, check-out, and the number of nights.' },
      type: 'cloze',
      title: 'Look at Figure 3.2',
      instruction: 'Look at Figure 3.2. Answer the questions.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. What is the check-in date? [[1]]'
        + '<br>'
        + '2. What is the check-out date? [[2]]'
        + '<br>'
        + '3. How many nights is the booking? [[3]]'
        + '<br>'
        + '4. Write the date \'3/6\' in words. → the [[4]] of June'
        + '</div>',
      answers: {
        '1': ['the 14th of June'],
        '2': ['the 16th of June'],
        '3': ['two nights'],
        '4': ['the third of June']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>the 14th of June</b>',
        '2': '<b>the 16th of June</b>',
        '3': '<b>two nights</b>',
        '4': '<b>the third of June</b>'
      }
    }
  ]
});
