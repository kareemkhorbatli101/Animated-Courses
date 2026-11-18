/* Unit 4 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s07', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a customer asks about a '
  + 'product, follow three product conversations, and identify which '
  + 'product was recommended and on what grounds.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 4 · 3D',
      visual: { spot: 'bank-card' },
      type: 'study',
      title: 'A family chooses a product (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Priya:</b> How can I help you both '
      + 'today?</p><p><b>Customer A:</b> We are saving for a deposit on a '
      + 'flat. We have six thousand and can add two hundred a '
      + 'month.</p><p><b>Priya:</b> For how long?</p><p><b>Customer B:</b> '
      + 'Three years.</p><p><b>Priya:</b> Then let me compare three. The '
      + 'Everyday Saver is the most flexible but pays the lowest rate. The '
      + 'Step Saver pays more, with two withdrawals a year. The Fixed 12 pays '
      + 'the highest, but the money is locked for a year.</p><p><b>Customer '
      + 'A:</b> Could we use more than one?</p><p><b>Priya:</b> Yes, and that '
      + 'is often the best answer. Keep some where you can reach it, and the '
      + 'rest where it earns more.</p></div>',
      playable: ['How can I help you both today?',
      'We are saving for a deposit on a flat. We have six thousand and can '
        + 'add two hundred a month.',
      'For how long?',
      'Three years.',
      'Then let me compare three. The Everyday Saver is the most flexible '
        + 'but pays the lowest rate. The Step Saver pays more, with two '
        + 'withdrawals a year. The Fixed 12 pays the highest, but the money is '
        + 'locked for a year.',
      'Could we use more than one?',
      'Yes, and that is often the best answer. Keep some where you can reach '
        + 'it, and the rest where it earns more.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 4 · 3D',
      type: 'quizset',
      title: 'A family chooses a product (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The Everyday Saver pays the highest rate.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customers can save two hundred a month.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'They decide today which account to open.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 4 · 3E',
      type: 'dragmatch',
      title: 'Match the recommendation',
      instruction: 'Match each customer to the right product (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) a business loan over five years' },
      { id: 'm-b', label: 'b) the Fixed 12, locked for a year' },
      { id: 'm-c', label: 'c) a mix of two accounts' },
      { id: 'm-d', label: 'd) the Step Saver' },
      { id: 'm-e', label: 'e) a credit card with a high limit (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'A customer who may need the money in a year', accept: 'm-a',
          why: '<b>A customer who may need the money in a year</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'A shop owner buying a van', accept: 'm-a',
          why: '<b>A shop owner buying a van</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'A family saving for three years', accept: 'm-a',
          why: '<b>A family saving for three years</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'Someone who will not touch the money', accept: 'm-a',
          why: '<b>Someone who will not touch the money</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
