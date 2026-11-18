/* Unit 1 §16 — Global Case Study — Onboarding at a Global Bank.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s16', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 8 · Global Case Study — Onboarding at a Global Bank', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — Onboarding at a Global Bank', title: 'Part 8 · Global Case Study — Onboarding at a Global Bank' },
  objective: 'By the end of Part 8 you can read how a large bank onboards its '
  + 'staff, take the vocabulary of induction from it, and set out your own '
  + 'view in writing.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 1 · 8A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What do new staff do in the first week?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How does a buddy help?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What happens during probation?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does the bank think a careful start is worth the time?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 1 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the training period at the start of a job' },
      { id: 'm-b', label: 'b) watch and learn from a colleague' },
      { id: 'm-c', label: 'c) a helpful colleague for a new person' },
      { id: 'm-d', label: 'd) the first months, when work is checked' },
      { id: 'm-e', label: 'e) a written warning (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'shadow', accept: 'm-b',
          why: '<b>shadow</b> &mdash; watch and learn from a colleague' },
      { id: 't2', num: 2, label: 'buddy', accept: 'm-c',
          why: '<b>buddy</b> &mdash; a helpful colleague for a new person' },
      { id: 't3', num: 3, label: 'induction', accept: 'm-a',
          why: '<b>induction</b> &mdash; the training period at the start of a job' },
      { id: 't4', num: 4, label: 'probation', accept: 'm-d',
          why: '<b>probation</b> &mdash; the first months, when work is checked' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 1 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “This is similar to a bank in my country because ___.” “This '
  + 'is different because ___.”',
      questions: [{
            q: 'Would a two-week start work in your bank? Why / why not?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is one idea here you would use?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
