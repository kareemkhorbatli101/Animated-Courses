/* Unit 4 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the steps and the documents of a '
  + 'check-in, and the things you hand a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 4 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints this picture in this part. Look at it before you '
  + 'start — the words in the exercises come from it.',
      visual: [
        { img: '../assets/figures/fig-4.1.png', caption: 'The guest registration card.' }
      ],
      doneLabel: 'I have looked at this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 4 · P1 A',
      type: 'dragmatch',
      title: 'Match each word (1–6) with its meaning (a–g)',
      instruction: 'Match each word (1–6) with its meaning (a–g). There is one you do not '
  + 'need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. a small plastic card that opens the room door' },
      { id: 'm-b', label: 'b. an official document with your name and photo, for travel' },
      { id: 'm-c', label: 'c. the bags a guest brings' },
      { id: 'm-d', label: 'd. your name written by your own hand' },
      { id: 'm-e', label: 'e. a telephone call to wake you at a time you choose' },
      { id: 'm-f', label: 'f. the paper a guest fills in and signs at check-in' },
      { id: 'm-g', label: 'g. the money you pay for breakfast' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'passport', accept: 'm-b',
          why: '<b>passport</b> &mdash; an official document with your name and '
              + 'photo, for travel' },
      { id: 't2', num: 2, label: 'key card', accept: 'm-a',
          why: '<b>key card</b> &mdash; a small plastic card that opens the room door' },
      { id: 't3', num: 3, label: 'signature', accept: 'm-d',
          why: '<b>signature</b> &mdash; your name written by your own hand' },
      { id: 't4', num: 4, label: 'luggage', accept: 'm-c',
          why: '<b>luggage</b> &mdash; the bags a guest brings' },
      { id: 't5', num: 5, label: 'wake-up call', accept: 'm-e',
          why: '<b>wake-up call</b> &mdash; a telephone call to wake you at a time '
              + 'you choose' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 4 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. The time a guest reaches the hotel is the [[1]].'
        + '<br>'
        + '2. At check-in, the guest must [[2]] (write their details).'
        + '<br>'
        + '3. Room 210 is on the second [[3]].'
        + '<br>'
        + '4. The receptionist can [[4]] the guest to the lift and show the way.'
        + '<br>'
        + '5. Sometimes the room is not [[5]] before two o\'clock.'
        + '<br>'
        + '6. The guest shows a passport or an [[6]] card.'
        + '</div>',
      answers: {
        '1': ['arrival'],
        '2': ['register'],
        '3': ['floor'],
        '4': ['escort'],
        '5': ['ready'],
        '6': ['ID']
      },
      bank: ['ID',
      'escort',
      'floor',
      'ready',
      'register'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>arrival</b>',
        '2': '<b>register</b>',
        '3': '<b>floor</b>',
        '4': '<b>escort</b>',
        '5': '<b>ready</b>',
        '6': '<b>ID</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 4 · P1 C',
      visual: { img: '../assets/figures/fig-4.2.png', caption: 'The key card and the room information.' },
      type: 'discuss',
      title: 'Look at Figure 4.2',
      instruction: 'Look at Figure 4.2. Answer the questions.',
      questions: [{
            q: 'What is the room number?',
            model: '210',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'Which floor is the room on?',
            model: 'the second floor (Floor 2)',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is breakfast?',
            model: '7:00–10:00',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'When is check-out?',
            model: 'by 12:00 noon',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    }
  ]
});
