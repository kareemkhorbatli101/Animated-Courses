/* Unit 10 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s03', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s corporate-banking words '
  + 'correctly, name what a business customer needs that a personal one '
  + 'does not, and write about a business account using at least five of '
  + 'the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 10 · 1D',
      visual: { spot: 'letter-of-credit' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common business-banking phrase '
  + '(one noun is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) payroll' },
      { id: 'm-b', label: 'b) the facility' },
      { id: 'm-c', label: 'c) an invoice' },
      { id: 'm-d', label: 'd) a supplier' },
      { id: 'm-e', label: 'e) an overdue payment' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'raise', accept: 'm-a',
          why: '<b>raise</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'run', accept: 'm-a',
          why: '<b>run</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'chase', accept: 'm-a',
          why: '<b>chase</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'agree', accept: 'm-a',
          why: '<b>agree</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'pay', accept: 'm-a',
          why: '<b>pay</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 10 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one business customer, real or invented. Use at least '
  + 'five words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 '
  + 'words?<br>☐ Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['Our customer runs a small printing business. She raises about thirty '
        + 'invoices a month and runs the payroll on the 25th. Her cash flow is '
        + 'weak in January, so we have agreed a small facility. She pays one '
        + 'supplier abroad, in another currency.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one business customer, real or invented. Use at least '
  + 'five words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, '
  + 'clear sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
