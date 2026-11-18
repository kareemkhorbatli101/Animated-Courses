/* Unit 3 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s03', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s transaction words '
  + 'correctly, sort them into what money comes in and what goes out, '
  + 'complete a counter sentence with the right one, and pair the verbs '
  + 'and nouns that go together.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 3 · 1D',
      visual: { spot: 'bank-counter' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common banking phrase (one noun '
  + 'is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) cash' },
      { id: 'm-b', label: 'b) a deposit' },
      { id: 'm-c', label: 'c) a transfer' },
      { id: 'm-d', label: 'd) the balance' },
      { id: 'm-e', label: 'e) the slip' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'make', accept: 'm-a',
          why: '<b>make</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'withdraw', accept: 'm-a',
          why: '<b>withdraw</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'check', accept: 'm-a',
          why: '<b>check</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'send', accept: 'm-a',
          why: '<b>send</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'sign', accept: 'm-a',
          why: '<b>sign</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 3 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one transaction you made recently. Use at least five '
  + 'words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ '
  + 'Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['Last Friday I went to my branch to deposit my salary. The teller '
        + 'checked my ID and gave me a receipt. Then I asked for my balance and '
        + 'sent a small transfer to my sister. The whole visit took ten minutes.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one transaction you made recently. Use at least five '
  + 'words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear '
  + 'sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
