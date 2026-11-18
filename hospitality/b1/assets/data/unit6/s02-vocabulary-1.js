/* Unit 6 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the places and attractions of a '
  + 'city, and the words for getting to them.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 6 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-6.1.png', caption: 'Kinds of place a guest can visit.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 6 · P1 A',
      type: 'dragmatch',
      title: 'Match each place (1–6) with its description (a–g)',
      instruction: 'Match each place (1–6) with its description (a–g). There is one you '
  + 'do not need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. old broken buildings from long ago' },
      { id: 'm-b', label: 'b. a place with sea, sand and sun' },
      { id: 'm-c', label: 'c. a strong fort on a hill in a city' },
      { id: 'm-d', label: 'd. a big old building with high, thick walls' },
      { id: 'm-e', label: 'e. a traditional covered market' },
      { id: 'm-f', label: 'f. a place where Muslims pray' },
      { id: 'm-g', label: 'g. a modern shopping centre' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'citadel', accept: 'm-c',
          why: '<b>citadel</b> &mdash; a strong fort on a hill in a city' },
      { id: 't2', num: 2, label: 'ruins', accept: 'm-a',
          why: '<b>ruins</b> &mdash; old broken buildings from long ago' },
      { id: 't3', num: 3, label: 'castle', accept: 'm-d',
          why: '<b>castle</b> &mdash; a big old building with high, thick walls' },
      { id: 't4', num: 4, label: 'beach', accept: 'm-b',
          why: '<b>beach</b> &mdash; a place with sea, sand and sun' },
      { id: 't5', num: 5, label: 'souq', accept: 'm-e',
          why: '<b>souq</b> &mdash; a traditional covered market' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 6 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A very famous building or place is a [[1]].'
        + '<br>'
        + '2. Visiting famous places for pleasure is [[2]].'
        + '<br>'
        + '3. A small book with pictures and information is a [[3]].'
        + '<br>'
        + '4. A trip with a guide to see the sights is a [[4]].'
        + '<br>'
        + '5. When you tell a guest a good place to go, you [[5]] it.'
        + '<br>'
        + '6. From the citadel, there is a beautiful [[6]] of the city.'
        + '</div>',
      answers: {
        '1': ['landmark'],
        '2': ['sightseeing'],
        '3': ['brochure'],
        '4': ['tour'],
        '5': ['recommend'],
        '6': ['view']
      },
      bank: ['brochure',
      'landmark',
      'recommend',
      'tour',
      'view'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>landmark</b>',
        '2': '<b>sightseeing</b>',
        '3': '<b>brochure</b>',
        '4': '<b>tour</b>',
        '5': '<b>recommend</b>',
        '6': '<b>view</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 6 · P1 C',
      type: 'dragmatch',
      title: 'Match each adjective (1–5) with its opposite (a–e)',
      instruction: 'Match each adjective (1–5) with its opposite (a–e).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. quiet' },
      { id: 'm-b', label: 'b. modern / new' },
      { id: 'm-c', label: 'c. small' },
      { id: 'm-d', label: 'd. cheap' },
      { id: 'm-e', label: 'e. ugly' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'ancient', accept: 'm-b',
          why: '<b>ancient</b> &mdash; modern / new' },
      { id: 't2', num: 2, label: 'busy', accept: 'm-a',
          why: '<b>busy</b> &mdash; quiet' },
      { id: 't3', num: 3, label: 'beautiful', accept: 'm-e',
          why: '<b>beautiful</b> &mdash; ugly' },
      { id: 't4', num: 4, label: 'huge', accept: 'm-c',
          why: '<b>huge</b> &mdash; small' },
      { id: 't5', num: 5, label: 'expensive', accept: 'm-d',
          why: '<b>expensive</b> &mdash; cheap' }]
    }
  ]
});
