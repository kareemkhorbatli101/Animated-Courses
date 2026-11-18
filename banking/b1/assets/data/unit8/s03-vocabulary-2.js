/* Unit 8 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s03', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s compliance words '
  + 'correctly, distinguish an identity check from a source-of-funds '
  + 'check, and write about a procedure using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 8 · 1D',
      visual: { spot: 'kyc-check' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common compliance phrase (one '
  + 'noun is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a report' },
      { id: 'm-b', label: 'b) the identity' },
      { id: 'm-c', label: 'c) a case' },
      { id: 'm-d', label: 'd) records' },
      { id: 'm-e', label: 'e) a name' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'verify', accept: 'm-a',
          why: '<b>verify</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'keep', accept: 'm-a',
          why: '<b>keep</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'file', accept: 'm-a',
          why: '<b>file</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'screen', accept: 'm-a',
          why: '<b>screen</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'escalate', accept: 'm-a',
          why: '<b>escalate</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 8 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one compliance check you do at work. Use at least five '
  + 'words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ '
  + 'Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['Before we open an account, we verify the customer’s identity with an '
        + 'official document. The name is screened against the sanctions lists. '
        + 'If anything looks unusual, we escalate it to the compliance officer, '
        + 'and we keep the records for five years.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one compliance check you do at work. Use at least five '
  + 'words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear '
  + 'sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
