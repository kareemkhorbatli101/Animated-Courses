/* Unit 9 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s03', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s saving and investing '
  + 'words correctly, tell a saving product from an investment one, and '
  + 'write about a saving goal using at least five of the words.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 9 · 1D',
      visual: { spot: 'savings-goal' },
      type: 'dragmatch',
      title: 'Word partners (collocations)',
      instruction: 'Match the verb to the noun to make a common saving phrase (one noun '
  + 'is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) interest' },
      { id: 'm-b', label: 'b) a risk' },
      { id: 'm-c', label: 'c) a goal' },
      { id: 'm-d', label: 'd) your savings' },
      { id: 'm-e', label: 'e) the target' },
      { id: 'm-f', label: 'f) a queue (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'set', accept: 'm-a',
          why: '<b>set</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'reach', accept: 'm-a',
          why: '<b>reach</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'earn', accept: 'm-a',
          why: '<b>earn</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'take', accept: 'm-a',
          why: '<b>take</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' },
      { id: 't5', num: 5, label: 'build up', accept: 'm-a',
          why: '<b>build up</b> &mdash; this pairing is not in the key yet; check it '
              + 'against the unit\'s glossary.' }]
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 9 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write about one saving goal, yours or a customer’s. Use at least five '
  + 'words from Part 1.<br>☐ Five Part-1 words?<br>☐ 40–60 words?<br>☐ '
  + 'Short, clear sentences?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['My customer has set a goal of six thousand for a deposit. She has '
        + 'already saved two thousand, and she puts aside two hundred on payday. '
        + 'The account earns a small amount of interest, and she keeps one '
        + 'month’s expenses as an emergency fund.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write about one saving goal, yours or a customer’s. Use at least five '
  + 'words from Part 1. ☐ Five Part-1 words? ☐ 40–60 words? ☐ Short, clear '
  + 'sentences?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
