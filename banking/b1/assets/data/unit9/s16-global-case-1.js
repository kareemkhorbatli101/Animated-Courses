/* Unit 9 §16 — Global Case Study — The Savings Habit.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s16', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 8 · Global Case Study — The Savings Habit', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — The Savings Habit', title: 'Part 8 · Global Case Study — The Savings Habit' },
  objective: 'By the end of Part 8 you can read how a bank built a saving habit '
  + 'among its customers, take its vocabulary, and judge what would work '
  + 'where you are.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 9 · 8A',
      visual: { spot: 'savings-goal' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What was the small change the bank made?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What happened to most customers who left the box ticked?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why did the bank move the box to its own line?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What principle did the bank accept at the end?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 9 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) to say no to something you were given automatically' },
      { id: 'm-b', label: 'b) the choice that happens if you do nothing' },
      { id: 'm-c', label: 'c) how many people accept something offered' },
      { id: 'm-d', label: 'd) something you do regularly without deciding each time' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'default', accept: 'm-a',
          why: '<b>default</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'to opt out', accept: 'm-a',
          why: '<b>to opt out</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'habit', accept: 'm-a',
          why: '<b>habit</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'take-up', accept: 'm-a',
          why: '<b>take-up</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 9 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “A default like this would work in my country because ___.” '
  + '“It would be unfair if ___.”',
      questions: [{
            q: 'Is a pre-ticked box fair? Why, or why not?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What default would help your customers most?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
