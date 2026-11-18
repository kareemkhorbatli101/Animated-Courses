/* Unit 7 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s03', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s security and fraud '
  + 'words correctly, tell one kind of scam from another, and write a '
  + 'short warning using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 7 · 1D',
      visual: { spot: 'phishing' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common security phrase (one noun '
  + 'is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a scam' },
      { id: 'm-b', label: 'b) the PIN' },
      { id: 'm-c', label: 'c) a card' },
      { id: 'm-d', label: 'd) fraud' },
      { id: 'm-e', label: 'e) your password' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'block', accept: 'm-a',
          why: '<b>block</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'report', accept: 'm-a',
          why: '<b>report</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'cover', accept: 'm-a',
          why: '<b>cover</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'spot', accept: 'm-a',
          why: '<b>spot</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'change', accept: 'm-a',
          why: '<b>change</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 7 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one fraud case you know, or invent one. Use at least five '
  + 'words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ '
  + 'Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['A customer received a text saying her account was blocked. The '
        + 'message had a link, and she typed her password. The next morning '
        + 'there were three unauthorised payments. She reported it, and we '
        + 'blocked the card and opened a fraud case the same day.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one fraud case you know, or invent one. Use at least five '
  + 'words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear '
  + 'sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
