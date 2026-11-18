/* Unit 8 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the words for accessibility, '
  + 'dietary needs and special arrangements.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 8 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-8.1.png', caption: 'Common things guests ask for.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 8 · P1 A',
      type: 'dragmatch',
      title: 'Match each request (1–6) with the reason (a–g)',
      instruction: 'Match each request (1–6) with the reason (a–g). There is one you do '
  + 'not need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. to charge a phone from a different plug' },
      { id: 'm-b', label: 'b. to dry your hair' },
      { id: 'm-c', label: 'c. the guest is cold at night' },
      { id: 'm-d', label: 'd. to press a shirt before a meeting' },
      { id: 'm-e', label: 'e. the guest is thirsty' },
      { id: 'm-f', label: 'f. the guest wants to sleep more comfortably' },
      { id: 'm-g', label: 'g. to clean the floor' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'iron', accept: 'm-d',
          why: '<b>iron</b> &mdash; to press a shirt before a meeting' },
      { id: 't2', num: 2, label: 'adapter', accept: 'm-a',
          why: '<b>adapter</b> &mdash; to charge a phone from a different plug' },
      { id: 't3', num: 3, label: 'blanket', accept: 'm-c',
          why: '<b>blanket</b> &mdash; the guest is cold at night' },
      { id: 't4', num: 4, label: 'hairdryer', accept: 'm-b',
          why: '<b>hairdryer</b> &mdash; to dry your hair' },
      { id: 't5', num: 5, label: 'extra water', accept: 'm-e',
          why: '<b>extra water</b> &mdash; the guest is thirsty' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 8 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. When a guest asks for something, that is a [[1]].'
        + '<br>'
        + '2. A good hotel tries to [[2]] everything the guest needs.'
        + '<br>'
        + '3. When you say \'I\'ll take care of it,\' you [[3]] the guest.'
        + '<br>'
        + '4. You [[4]] a taxi or a cot for the guest.'
        + '<br>'
        + '5. If something is wrong, you [[5]] and say sorry.'
        + '<br>'
        + '6. When you [[6]] something, you must keep your word.'
        + '</div>',
      answers: {
        '1': ['request'],
        '2': ['provide'],
        '3': ['reassure'],
        '4': ['arrange'],
        '5': ['apologise'],
        '6': ['promise']
      },
      bank: ['apologise',
      'arrange',
      'promise',
      'provide',
      'reassure'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>request</b>',
        '2': '<b>provide</b>',
        '3': '<b>reassure</b>',
        '4': '<b>arrange</b>',
        '5': '<b>apologise</b>',
        '6': '<b>promise</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 8 · P1 C',
      visual: { img: '../assets/figures/fig-8.2.png', caption: 'A hotel welcomes guests with special needs.' },
      type: 'cloze',
      title: 'Look at Figure 8.2',
      instruction: 'Look at Figure 8.2. Which does each guest need? Write the word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A guest who cannot use the stairs needs a lift and a [[1]].'
        + '<br>'
        + '2. A guest in a wheelchair needs a room with [[2]] access.'
        + '<br>'
        + '3. A family with a baby may need a [[3]].'
        + '<br>'
        + '4. A guest with an allergy needs [[4]] food.'
        + '</div>',
      answers: {
        '1': ['ramp'],
        '2': ['wheelchair'],
        '3': ['cot'],
        '4': ['allergy-safe']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>ramp</b>',
        '2': '<b>wheelchair</b>',
        '3': '<b>cot</b>',
        '4': '<b>allergy-safe</b>'
      }
    }
  ]
});
