/* Unit 8 §5 — Grammar — Obligation: must, have to, mustn’t, don’t have to.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s05', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t '
  + 'have to (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t have to (2)', title: 'Part 2 · Grammar — Obligation: must, have to, mustn’t, don’t have to (2)' },
  objective: 'By the end of Part 2 you can tell must from have to and mustn\'t from '
  + 'don\'t have to, choose the right one for a rule, correct the '
  + 'commonest mistake, and state an obligation to a customer politely.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 8 · 2D',
      visual: { spot: 'kyc-check' },
      type: 'study',
      title: 'State the rule',
      html: '<p>You must verify the customer’s identity before you open an '
      + 'account. You mustn’t tell a customer that a report has been made. You '
      + 'don’t have to ask for a second document if the first one is '
      + 'valid.</p>',
      instruction: 'Write three rules for a new colleague: one with must, one with '
  + 'mustn’t and one with don’t have to.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 8 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, explain three branch rules to a new colleague. Use all '
  + 'three forms.<br>Tip: You will see these forms again in the reading in '
  + 'Part 5 (5A and 5B). Look for them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“You must screen every name. You mustn’t guess if you are unsure — '
        + 'ask. And you don’t have to decide alone; that is what escalation is '
        + 'for.”']
    }
  ]
});
