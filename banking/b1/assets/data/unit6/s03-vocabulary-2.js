/* Unit 6 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s03', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s exchange and transfer '
  + 'words correctly, read a rate board, and write about a transfer using '
  + 'at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 6 · 1D',
      visual: { spot: 'rate-board' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common banking phrase (one noun '
  + 'is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the rate' },
      { id: 'm-b', label: 'b) a fee' },
      { id: 'm-c', label: 'c) a transfer' },
      { id: 'm-d', label: 'd) an amount' },
      { id: 'm-e', label: 'e) the beneficiary’s details' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'send', accept: 'm-a',
          why: '<b>send</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'check', accept: 'm-a',
          why: '<b>check</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'charge', accept: 'm-a',
          why: '<b>charge</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'convert', accept: 'm-a',
          why: '<b>convert</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'confirm', accept: 'm-a',
          why: '<b>confirm</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 6 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one international transfer, from start to finish. Use at '
  + 'least five words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 '
  + 'words?<br>☐ Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['A customer wanted to send 400 to her son abroad. We checked the rate, '
        + 'confirmed the beneficiary’s IBAN, and charged a flat fee of twelve. '
        + 'The money was converted and sent the same afternoon, and it arrived '
        + 'the next working day.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one international transfer, from start to finish. Use at '
  + 'least five words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ '
  + 'Short, clear sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
