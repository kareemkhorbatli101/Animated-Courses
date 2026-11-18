/* Unit 8 §9 — Speaking.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s09', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 4 · Speaking (2)', part: '4', section: '9',
          track: 'operator', label: 'In-class output', lesson: 'Part 4 · Speaking (2)', title: 'Part 4 · Speaking (2)' },
  objective: 'By the end of Part 4 you can explain a requirement without '
  + 'apologising for it, ask for a document courteously, and hold the rule '
  + 'when a customer pushes back.',
  cards: [
    {
      id: 'c1',
      ref: '4D',
      bookRef: 'Unit 8 · 4D',
      visual: { spot: 'kyc-check' },
      type: 'report',
      title: 'Find the information (pairwork info-gap)',
      instruction: 'Student A works in compliance; Student B is a colleague with a '
  + 'question. Ask and answer.<br>Card A (compliance): source of funds '
  + 'above 10,000 · documents must be current · escalate three similar '
  + 'deposits in a week · never tell the customer.<br>Card B (colleague): '
  + 'a customer has paid in 9,000 twice this week; his ID expired last '
  + 'month; he is asking why.<br>Useful language: Do I have to escalate '
  + 'this? · Must the document be current? · What am I not allowed to say?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.']
    },
    {
      id: 'c2',
      ref: '4E',
      bookRef: 'Unit 8 · 4E',
      type: 'dragmatch',
      title: 'Close politely',
      instruction: 'Match the closing phrase to the situation (one is extra).<br>In '
  + 'pairs, close a compliance conversation politely. Use two phrases '
  + 'above.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) thanking the customer' },
      { id: 'm-b', label: 'b) confirming the check is finished' },
      { id: 'm-c', label: 'c) giving a clear next step' },
      { id: 'm-d', label: 'd) showing it is not personal' },
      { id: 'm-e', label: 'e) “Please take a seat.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Thank you for your patience with the form.”', accept: 'm-a',
          why: '<b>“Thank you for your patience with the form.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“Everything is in order now.”', accept: 'm-a',
          why: '<b>“Everything is in order now.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Please bring the new document when you can.”', accept: 'm-a',
          why: '<b>“Please bring the new document when you can.”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“The rule is the same in every branch.”', accept: 'm-a',
          why: '<b>“The rule is the same in every branch.”</b> &mdash; this pairing '
              + 'is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
