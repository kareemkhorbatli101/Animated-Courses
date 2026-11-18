/* Unit 9 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the words for faults, complaints '
  + 'and remedies.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 9 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-9.1.png', caption: 'Problems a guest may report.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 9 · P1 A',
      type: 'dragmatch',
      title: 'Match each problem (1–6) with the guest\'s words (a–g)',
      instruction: 'Match each problem (1–6) with the guest\'s words (a–g). There is one '
  + 'you do not need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. “There is dust everywhere and the bin is full.”' },
      { id: 'm-b', label: 'b. “The shower is cold — there\'s no hot water.”' },
      { id: 'm-c', label: 'c. “This charge on my bill is wrong.”' },
      { id: 'm-d', label: 'd. “The air conditioning doesn\'t work; the room is too hot.”' },
      { id: 'm-e', label: 'e. “I can\'t find my watch — I think I left it here.”' },
      { id: 'm-f', label: 'f. “The room next door is very loud; I couldn\'t sleep.”' },
      { id: 'm-g', label: 'g. “The wifi is very fast, thank you.”' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'no hot water', accept: 'm-b',
          why: '<b>no hot water</b> &mdash; “The shower is cold — there\'s no hot water.”' },
      { id: 't2', num: 2, label: 'broken AC', accept: 'm-d',
          why: '<b>broken AC</b> &mdash; “The air conditioning doesn\'t work; the '
              + 'room is too hot.”' },
      { id: 't3', num: 3, label: 'dirty room', accept: 'm-a',
          why: '<b>dirty room</b> &mdash; “There is dust everywhere and the bin is full.”' },
      { id: 't4', num: 4, label: 'wrong bill', accept: 'm-c',
          why: '<b>wrong bill</b> &mdash; “This charge on my bill is wrong.”' },
      { id: 't5', num: 5, label: 'lost item', accept: 'm-e',
          why: '<b>lost item</b> &mdash; “I can\'t find my watch — I think I left it here.”' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 9 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. When a guest tells you something is wrong, that is a [[1]].'
        + '<br>'
        + '2. The first thing to do is to say sorry, or [[2]].'
        + '<br>'
        + '3. Then you must [[3]] the problem — find an answer.'
        + '<br>'
        + '4. If the guest paid for something wrong, you give a [[4]] (money back).'
        + '<br>'
        + '5. A machine that does not work properly is [[5]].'
        + '<br>'
        + '6. Sometimes the hotel gives [[6]] — for example, a free meal — to '
            + 'make up for a problem.'
        + '</div>',
      answers: {
        '1': ['complaint'],
        '2': ['apologise'],
        '3': ['solve'],
        '4': ['refund'],
        '5': ['faulty'],
        '6': ['compensation']
      },
      bank: ['apologise',
      'compensation',
      'faulty',
      'refund',
      'solve'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>complaint</b>',
        '2': '<b>apologise</b>',
        '3': '<b>solve</b>',
        '4': '<b>refund</b>',
        '5': '<b>faulty</b>',
        '6': '<b>compensation</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 9 · P1 C',
      visual: { img: '../assets/figures/fig-9.2.png', caption: 'Solutions the hotel can offer.' },
      type: 'cloze',
      title: 'Look at Figure 9.2',
      instruction: 'Look at Figure 9.2. Which solution fits each problem? Write the solution.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The room is very noisy. → [[1]]'
        + '<br>'
        + '2. The lamp is broken. → [[2]]'
        + '<br>'
        + '3. The air conditioning is faulty. → [[3]]'
        + '<br>'
        + '4. The guest had a bad experience. → the hotel can [[4]]'
        + '</div>',
      answers: {
        '1': ['change the room'],
        '2': ['replace the item'],
        '3': ['send a repair'],
        '4': ['offer compensation']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>change the room</b>',
        '2': '<b>replace the item</b>',
        '3': '<b>send a repair</b>',
        '4': '<b>offer compensation</b>'
      }
    }
  ]
});
