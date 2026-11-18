/* Unit 2 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name a hotel\'s facilities and its '
  + 'floors, and say where each one is.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 2 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-2.1.png', caption: 'The facilities of the hotel. Match each word to its picture.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 2 · P1 A',
      type: 'dragmatch',
      title: 'Match each facility (1–6) with what you do there (a–g)',
      instruction: 'Match each facility (1–6) with what you do there (a–g). There is one '
  + 'you do not need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. you park your car here' },
      { id: 'm-b', label: 'b. you eat a full meal here' },
      { id: 'm-c', label: 'c. you swim here' },
      { id: 'm-d', label: 'd. you relax and enjoy treatments here' },
      { id: 'm-e', label: 'e. you exercise here' },
      { id: 'm-f', label: 'f. you drink coffee and eat a snack here' },
      { id: 'm-g', label: 'g. you sleep here' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'swimming pool', accept: 'm-c',
          why: '<b>swimming pool</b> &mdash; you swim here' },
      { id: 't2', num: 2, label: 'spa', accept: 'm-d',
          why: '<b>spa</b> &mdash; you relax and enjoy treatments here' },
      { id: 't3', num: 3, label: 'restaurant', accept: 'm-b',
          why: '<b>restaurant</b> &mdash; you eat a full meal here' },
      { id: 't4', num: 4, label: 'café', accept: 'm-f',
          why: '<b>café</b> &mdash; you drink coffee and eat a snack here' },
      { id: 't5', num: 5, label: 'car park', accept: 'm-a',
          why: '<b>car park</b> &mdash; you park your car here' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 2 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The rooms are on the second [[1]].'
        + '<br>'
        + '2. Take the [[2]] to go up quickly.'
        + '<br>'
        + '3. You can also use the [[3]] to walk up.'
        + '<br>'
        + '4. Guests wait in the [[4]] near the entrance.'
        + '<br>'
        + '5. A hotel with a pool, a gym and a spa has good [[5]].'
        + '<br>'
        + '6. The plant is in the [[6]] of the room.'
        + '</div>',
      answers: {
        '1': ['floor'],
        '2': ['lift'],
        '3': ['stairs'],
        '4': ['lobby'],
        '5': ['facilities'],
        '6': ['corner']
      },
      bank: ['corner',
      'facilities',
      'lift',
      'lobby',
      'stairs'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>floor</b>',
        '2': '<b>lift</b>',
        '3': '<b>stairs</b>',
        '4': '<b>lobby</b>',
        '5': '<b>facilities</b>',
        '6': '<b>corner</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 2 · P1 C',
      visual: { img: '../assets/figures/fig-2.2.png', caption: 'Prepositions of place — where is the ball?' },
      type: 'cloze',
      title: 'Look at Figure 2.2',
      instruction: 'Look at Figure 2.2. Complete with a preposition (in, on, under, next '
  + 'to, behind, between, in front of).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The key card is [[1]] the desk. (on top)'
        + '<br>'
        + '2. The suitcase is [[2]] the bed. (below)'
        + '<br>'
        + '3. The lift is [[3]] the reception. (beside)'
        + '<br>'
        + '4. The garden is [[4]] the hotel. (at the back)'
        + '<br>'
        + '5. The café is [[5]] the restaurant and the spa. (in the middle)'
        + '</div>',
      answers: {
        '1': ['on'],
        '2': ['under'],
        '3': ['next to'],
        '4': ['behind'],
        '5': ['between']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>on</b>',
        '2': '<b>under</b>',
        '3': '<b>next to</b>',
        '4': '<b>behind</b>',
        '5': '<b>between</b>'
      }
    }
  ]
});
