/* Unit 5 §16 — Global Case Study — The App-Only Bank.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s16', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 8 · Global Case Study — The App-Only Bank', part: '8', section: '16',
          track: 'practitioner', label: 'Practitioner track · read then discuss', lesson: 'Part 8 · Global Case Study — The App-Only Bank', title: 'Part 8 · Global Case Study — The App-Only Bank' },
  objective: 'By the end of Part 8 you can read about a bank with no branches, take '
  + 'its vocabulary, and argue what is gained and what is lost.',
  cards: [
    {
      id: 'c1',
      ref: '8A',
      bookRef: 'Unit 5 · 8A',
      visual: { spot: 'atm' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'How was a customer’s identity confirmed?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why were the bank’s rates better than those of older banks?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What were the complaints about, and what were they not about?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What two changes did the bank make?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What did the bank learn?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '8B',
      bookRef: 'Unit 5 · 8B',
      type: 'dragmatch',
      title: 'Vocabulary in context',
      instruction: 'Match the word to its meaning (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) proving who you are' },
      { id: 'm-b', label: 'b) a bank with no branches' },
      { id: 'm-c', label: 'c) a place where customers can pay in cash' },
      { id: 'm-d', label: 'd) when a customer says something is wrong' },
      { id: 'm-e', label: 'e) a monthly charge (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'app-only bank', accept: 'm-a',
          why: '<b>app-only bank</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'identity check', accept: 'm-a',
          why: '<b>identity check</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'complaint', accept: 'm-a',
          why: '<b>complaint</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'cash deposit point', accept: 'm-a',
          why: '<b>cash deposit point</b> &mdash; this pairing is not in the key yet; '
              + 'check it against the unit\'s glossary.' }]
    },
    {
      id: 'c3',
      ref: '8C',
      bookRef: 'Unit 5 · 8C',
      type: 'discuss',
      title: 'Discussion',
      instruction: 'Frames: “This would suit customers in my country because ___.” “It '
  + 'would not suit ___ because ___.”',
      questions: [{
            q: 'Which of your customers could not use an app-only bank?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the one thing a branch does that an app cannot?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
