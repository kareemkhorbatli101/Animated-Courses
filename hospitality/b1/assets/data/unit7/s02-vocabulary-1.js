/* Unit 7 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the items in a room and on a '
  + 'trolley, and the words for cleaning and supplying a room.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 7 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-7.1.png', caption: 'Supplies on the housekeeping cart.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 7 · P1 A',
      type: 'dragmatch',
      title: 'Match each item (1–6) with its use (a–g)',
      instruction: 'Match each item (1–6) with its use (a–g). There is one you do not '
  + 'need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. to wash your hair' },
      { id: 'm-b', label: 'b. to clean the floor and carpet' },
      { id: 'm-c', label: 'c. the clean sheets for the bed' },
      { id: 'm-d', label: 'd. to wash your hands' },
      { id: 'm-e', label: 'e. paper for the bathroom' },
      { id: 'm-f', label: 'f. to dry yourself after a shower' },
      { id: 'm-g', label: 'g. to make the coffee' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'bed linen', accept: 'm-c',
          why: '<b>bed linen</b> &mdash; the clean sheets for the bed' },
      { id: 't2', num: 2, label: 'soap', accept: 'm-d',
          why: '<b>soap</b> &mdash; to wash your hands' },
      { id: 't3', num: 3, label: 'shampoo', accept: 'm-a',
          why: '<b>shampoo</b> &mdash; to wash your hair' },
      { id: 't4', num: 4, label: 'toilet roll', accept: 'm-e',
          why: '<b>toilet roll</b> &mdash; paper for the bathroom' },
      { id: 't5', num: 5, label: 'vacuum cleaner', accept: 'm-b',
          why: '<b>vacuum cleaner</b> &mdash; to clean the floor and carpet' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 7 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Every morning, the housekeepers [[1]] the beds.'
        + '<br>'
        + '2. They [[2]] the dirty towels for fresh ones.'
        + '<br>'
        + '3. They [[3]] the bathroom until it shines.'
        + '<br>'
        + '4. They [[4]] the room, so nothing is out of place.'
        + '<br>'
        + '5. They [[5]] the tea, coffee and water in the room.'
        + '<br>'
        + '6. They [[6]] the bin and put in a new bag.'
        + '</div>',
      answers: {
        '1': ['make'],
        '2': ['change'],
        '3': ['clean'],
        '4': ['tidy'],
        '5': ['restock'],
        '6': ['empty']
      },
      bank: ['change',
      'clean',
      'empty',
      'restock',
      'tidy'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>make</b>',
        '2': '<b>change</b>',
        '3': '<b>clean</b>',
        '4': '<b>tidy</b>',
        '5': '<b>restock</b>',
        '6': '<b>empty</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 7 · P1 C',
      visual: { img: '../assets/figures/fig-7.0.png', caption: 'A housekeeper\'s room checklist.' },
      type: 'discuss',
      title: 'Look at Figure 7.0',
      instruction: 'Look at Figure 7.0. Answer the questions.',
      questions: [{
            q: 'Which three tasks are done?',
            model: 'make the bed, change the towels, clean the bathroom.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which three tasks are still \'to do\'?',
            model: 'vacuum the floor, empty the bin, restock tea & coffee.',
            minWords: 3,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What must the housekeeper restock?',
            model: 'The tea and coffee.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Has she vacuumed the floor yet?',
            model: 'No, not yet.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
