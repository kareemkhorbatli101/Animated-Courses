/* Unit 1 §2 — Vocabulary and Terminology.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u1-s02', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 1 · Vocabulary and Terminology', part: '1',
          section: '2', lesson: 'Vocabulary and Terminology', title: 'Vocabulary and Terminology' },
  objective: 'By the end of Part 1 you can name the people who work in a hotel and '
  + 'what each one does, name the things on a front desk, and choose the '
  + 'right greeting for the time of day.',
  cards: [
    {
      id: 'c1',
      ref: 'fig',
      bookRef: 'Unit 1 · P1 · figures',
      type: 'study',
      title: 'The pictures in Vocabulary and Terminology',
      instruction: 'The book prints these pictures in this part. Look at them before you '
  + 'start — the words in the exercises come from them.',
      visual: [
        { img: '../assets/figures/fig-1.1.png', caption: 'The people who work at the hotel. Match each word to its picture.' },
        { img: '../assets/figures/fig-1.3.png', caption: 'Greetings for different times of the day.' }
      ],
      doneLabel: 'I have looked at these'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 1 · P1 A',
      type: 'dragmatch',
      title: 'Match each job (1–6) with what the person does (a–g)',
      instruction: 'Match each job (1–6) with what the person does (a–g). There is one '
  + 'meaning you do not need. (0 is done for you.)',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a. carries bags and helps guests to their rooms' },
      { id: 'm-b', label: 'b. cleans the rooms and changes the beds' },
      { id: 'm-c', label: 'c. serves food and drinks in the restaurant' },
      { id: 'm-d', label: 'd. gives information and books tours for guests' },
      { id: 'm-e', label: 'e. manages the hotel and the staff' },
      { id: 'm-f', label: 'f. welcomes guests and checks them in' },
      { id: 'm-g', label: 'g. cooks the food in the kitchen' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'porter', accept: 'm-a',
          why: '<b>porter</b> &mdash; carries bags and helps guests to their rooms' },
      { id: 't2', num: 2, label: 'housekeeper', accept: 'm-b',
          why: '<b>housekeeper</b> &mdash; cleans the rooms and changes the beds' },
      { id: 't3', num: 3, label: 'waiter', accept: 'm-c',
          why: '<b>waiter</b> &mdash; serves food and drinks in the restaurant' },
      { id: 't4', num: 4, label: 'concierge', accept: 'm-d',
          why: '<b>concierge</b> &mdash; gives information and books tours for guests' },
      { id: 't5', num: 5, label: 'manager', accept: 'm-e',
          why: '<b>manager</b> &mdash; manages the hotel and the staff' }]
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 1 · P1 B',
      type: 'cloze',
      title: 'Complete the sentences with the words in the word bank',
      instruction: 'Complete the sentences with the words in the word bank.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. A person who stays at the hotel is a [[1]].'
        + '<br>'
        + '2. The front desk is also called the [[2]].'
        + '<br>'
        + '3. A person you work with is a [[3]].'
        + '<br>'
        + '4. Lina wears a smart [[4]] at work.'
        + '<br>'
        + '5. Lina works the morning [[5]], from 7 a.m. to 3 p.m.'
        + '<br>'
        + '6. Greeting each guest is an important [[6]] at the desk.'
        + '</div>',
      answers: {
        '1': ['guest'],
        '2': ['reception'],
        '3': ['colleague'],
        '4': ['uniform'],
        '5': ['shift'],
        '6': ['task']
      },
      bank: ['guest',
      'reception',
      'shift',
      'task',
      'uniform'],
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>guest</b>',
        '2': '<b>reception</b>',
        '3': '<b>colleague</b>',
        '4': '<b>uniform</b>',
        '5': '<b>shift</b>',
        '6': '<b>task</b>'
      }
    },
    {
      id: 'c4',
      ref: 'C',
      bookRef: 'Unit 1 · P1 C',
      visual: { img: '../assets/figures/fig-1.2.png', caption: 'Things Lina uses at the front desk.' },
      type: 'cloze',
      title: 'Which thing do you use?',
      instruction: 'Which thing do you use? Write the word from Figure 1.2.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. You give this to a guest to open the room. [[1]]'
        + '<br>'
        + '2. You answer this when it rings. [[2]]'
        + '<br>'
        + '3. You write the guest\'s name in this. [[3]]'
        + '<br>'
        + '4. A guest presses this to call you. [[4]]'
        + '<br>'
        + '5. You use this to find a reservation. [[5]]'
        + '</div>',
      answers: {
        '1': ['key card'],
        '2': ['telephone'],
        '3': ['register'],
        '4': ['bell'],
        '5': ['computer']
      },
      whyTitle: 'The book\'s answer',
      why: {
        '1': '<b>key card</b>',
        '2': '<b>telephone</b>',
        '3': '<b>register</b>',
        '4': '<b>bell</b>',
        '5': '<b>computer</b>'
      }
    }
  ]
});
