/* Unit 5 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s03', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s digital-banking words '
  + 'correctly, name the steps of logging in and making a payment, and '
  + 'write about an app using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 5 · 1D',
      visual: { spot: 'atm' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common digital-banking phrase '
  + '(one noun is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) your password' },
      { id: 'm-b', label: 'b) the app' },
      { id: 'm-c', label: 'c) a card' },
      { id: 'm-d', label: 'd) the code' },
      { id: 'm-e', label: 'e) a notification' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'download', accept: 'm-a',
          why: '<b>download</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'reset', accept: 'm-a',
          why: '<b>reset</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'enter', accept: 'm-a',
          why: '<b>enter</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'freeze', accept: 'm-a',
          why: '<b>freeze</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'receive', accept: 'm-a',
          why: '<b>receive</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 5 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about how a customer uses the app in one week. Use at least '
  + 'five words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 '
  + 'words?<br>☐ Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['On Monday she logs in with her password and a one-time code. On '
        + 'Wednesday she makes a transfer and receives a notification. On Friday '
        + 'she loses her card, so she freezes it in the app. She does not visit '
        + 'the branch at all.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about how a customer uses the app in one week. Use at least '
  + 'five words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, '
  + 'clear sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
