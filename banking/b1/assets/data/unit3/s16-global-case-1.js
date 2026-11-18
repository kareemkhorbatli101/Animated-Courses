/* Unit 3 §16 — Global Case Study — Cutting the Queue.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s16', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 8 · Global Case Study — Cutting the Queue', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — Cutting the Queue', title: 'Part 8 · Global Case Study — Cutting the Queue' },
  objective: 'By the end of Part 8 you can read how a bank cut its queue, take the '
  + 'vocabulary of throughput and waiting from it, and argue your own '
  + 'view.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 3 · 8A',
      visual: { spot: 'bank-counter' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What did the bank find about the people in the queue?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does a greeter do?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why did the bank move bill payments to a separate desk?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How long was the average wait after three months?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How many extra tellers did the bank add?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 3 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a line of people waiting' },
      { id: 'm-b', label: 'b) a member of staff who meets customers at the door' },
      { id: 'm-c', label: 'c) a payment that happens again and again' },
      { id: 'm-d', label: 'd) the usual waiting time' },
      { id: 'm-e', label: 'e) a charge for a service (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'greeter', accept: 'm-a',
          why: '<b>greeter</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'queue', accept: 'm-a',
          why: '<b>queue</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'average wait', accept: 'm-a',
          why: '<b>average wait</b> &mdash; this pairing is not in the key yet; check '
              + 'it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'routine payment', accept: 'm-a',
          why: '<b>routine payment</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 3 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “This would work in my branch because ___.” “This would be '
  + 'difficult because ___.”',
      questions: [{
            q: 'Would a greeter work in your branch? Why / why not?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Which of the three changes is easiest to start tomorrow?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
