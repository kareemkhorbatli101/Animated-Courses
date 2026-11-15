/* Unit 5 §18 — Part 8 - Global Case Study.

   Built by tools/eam_build_unit.py from the book. The card types, items,
   answers and accept lists are the book's; the explanations are
   first-pass and generated from the book's own words - see RESIDUALS CW.
*/
EAM.page('u5-s18', {
  book: { source: 'EAM B1', ref: 'Unit 5 · Part 8 - Global Case Study', part: '8', section: '18',
          lesson: 'Part 8 - Global Case Study', title: 'Part 8 - Global Case Study' },
  objective: 'Work through Part 8 - Global Case Study of unit 5.',
  video: 'u05v18',
  prev: 's17-management-file-practice', prevLabel: 'Part 7 - Management File, practice',
  next: 's19-local-case-study', nextLabel: 'Part 9 - Local Case Study',
  cards: [
    {
      id: 'c1', covers: ['Part 8'], ref: '8A',
      bookRef: 'Unit 5 · Part 8', type: 'shortanswer',
      title: 'Global Case Study — The Workshop That Cut Waiting Times',
      instruction: 'Answer in a few words each.',
      before: '<span class="eg-model"><b>Worked example</b>0. What was the problem? — '
        + 'Customers waited too long.</span>',
      items: [
        { q: '1. Why were the cars not moving well before?',
          accept: ['they were not moving in a clear order (serviced before inspected, waiting '
        + 'for parts)', 'they were not moving in a clear order'],
          keys: ['they', 'were'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '2. What did the board on the wall show?',
          accept: ['where each car was in the process'],
          keys: ['where', 'each'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' },
        { q: '3. What did the manager say a good process is about?',
          accept: ['doing each step at the right time, not speed'],
          keys: ['doing', 'each'], need: 2,
          evidence: 'Look back at the text above — this answer is stated in it.' }
      ],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2', covers: ['Part 8'], ref: '8B',
      bookRef: 'Unit 5 · Part 8', type: 'dragmatch',
      title: 'Vocabulary in Context',
      instruction: 'Match each word with its meaning. One meaning is not needed. Write the '
        + 'letter. Column A Column B',
      poolLabel: 'Click a meaning, then click the picture it belongs to. Double-click a picture to take its meaning off again.',
      cols: 3, say: true,
      chips: [
        { id: 'm-a', label: 'a) one part of a process' },
        { id: 'm-b', label: 'b) a set of steps done in order' },
        { id: 'm-c', label: 'c) a fluid that cools the engine' },
        { id: 'm-d', label: 'd) the correct sequence of steps' },
        { id: 'm-e', label: 'e) to look at a car carefully to check it' }
      ],
      whyTitle: 'What each one means, and what it is not',
      targets: [
        { id: 't1', num: 1, label: 'process', accept: 'm-b',
          why: '<b>process</b> — a set of steps done in order. Keep it apart from '
        + '<i>step</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't2', num: 2, label: 'step', accept: 'm-a',
          why: '<b>step</b> — one part of a process. Keep it apart from <i>process</i>, '
        + 'which is a different part of the same system. The meaning left in the pool '
        + 'belongs to nothing on this card.' },
        { id: 't3', num: 3, label: 'order', accept: 'm-d',
          why: '<b>order</b> — the correct sequence of steps. Keep it apart from '
        + '<i>process</i>, which is a different part of the same system. The meaning '
        + 'left in the pool belongs to nothing on this card.' },
        { id: 't4', num: 4, label: 'inspect', accept: 'm-e',
          why: '<b>inspect</b> — to look at a car carefully to check it. Keep it apart '
        + 'from <i>process</i>, which is a different part of the same system. The '
        + 'meaning left in the pool belongs to nothing on this card.' }
      ],
      after: 'The meaning left over is “a fluid that cools the engine”, which belongs to '
        + 'nothing on this card.'
    },
    {
      id: 'c3', covers: ['Part 8'], ref: '8C',
      bookRef: 'Unit 5 · Part 8', type: 'discuss',
      title: 'Discussion',
      instruction: 'Talk with a partner. Use the frames.',
      minWords: 10,
      questions: [{ q: 'Finish this sentence in your own words: A clear process helps because…' }, { q: 'Finish this sentence in your own words: In my workshop, the process is…' }, { q: 'Finish this sentence in your own words: The most important step is… because…' }],
      ideas: ['A clear process helps because…',
        'In my workshop, the process is…',
        'The most important step is… because…'],
      okMsg: 'Good. Open the notes below and compare.',
      coach: {
        title: 'Check your own work',
        target: 'The passive, for describing a process',
        task: 'Talk with a partner. Use the frames.',
        parts: ['The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.', 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.', 'The steps are joined in order — first, then, after that, finally.'],
        example: ['Answer in your own words, then read your answer back and check it against '
        + 'the list above.'],
        criteria: [{ t: 'The passive is used where the doer does not matter: <i>the car is '
        + 'checked</i>, not <i>the mechanic checks the car</i>.' },
                   { t: 'Each passive is <b>be</b> + the past participle, and <b>be</b> agrees with '
        + 'its subject — the car <i>is</i> washed, the tyres <i>are</i> checked.' },
                   { t: 'The steps are joined in order — first, then, after that, finally.' },
                   { t: 'Nothing in the process is left out between the car arriving and the '
        + 'customer leaving.' },
                   { t: 'You asked at least one question as well as answering — a conversation is '
        + 'not a speech.' }]
      }
    }
  ]
});
