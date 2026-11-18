/* Unit 4 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s03', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s product words '
  + 'correctly, tell one account type from another, and write about a '
  + 'product using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 4 · 1D',
      visual: { spot: 'bank-card' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common banking phrase (one noun '
  + 'is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a loan' },
      { id: 'm-b', label: 'b) an account' },
      { id: 'm-c', label: 'c) interest' },
      { id: 'm-d', label: 'd) a fee' },
      { id: 'm-e', label: 'e) the instalments' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'open', accept: 'm-a',
          why: '<b>open</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'apply for', accept: 'm-a',
          why: '<b>apply for</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'pay', accept: 'm-a',
          why: '<b>pay</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'earn', accept: 'm-a',
          why: '<b>earn</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'repay', accept: 'm-a',
          why: '<b>repay</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 4 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one banking product you use. Use at least five words from '
  + 'Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ Short, clear '
  + 'sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I have a current account for my salary and a savings account for my '
        + 'holiday. The savings account pays a better rate, but I cannot use the '
        + 'money every day. I do not pay a monthly fee, and my debit card is '
        + 'free.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one banking product you use. Use at least five words from '
  + 'Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
