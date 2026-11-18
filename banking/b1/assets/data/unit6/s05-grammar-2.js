/* Unit 6 §5 — Grammar — Indirect Questions.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s05', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 2 · Grammar — Indirect Questions (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Indirect Questions (2)', title: 'Part 2 · Grammar — Indirect Questions (2)' },
  objective: 'By the end of Part 2 you can turn a direct question into an indirect '
  + 'one, choose the right opening for the politeness the situation needs, '
  + 'correct the commonest word-order mistake, and ask a customer for '
  + 'sensitive details courteously.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 6 · 2D',
      visual: { spot: 'rate-board' },
      type: 'study',
      title: 'Ask politely',
      html: '<p>Could you tell me the full name of the beneficiary? May I ask '
      + 'which currency you would like the money to arrive in? Do you know '
      + 'whether the account is held at that branch?</p>',
      instruction: 'Write three indirect questions you would ask a customer who is '
  + 'sending money abroad.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 6 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, act a short exchange-desk conversation. Each speaker asks '
  + 'at least two indirect questions.<br>Tip: You will see indirect '
  + 'questions again in the reading in Part 5 (5A and 5B). Look for them '
  + 'there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“Could you tell me how much you would like to change? … And may I ask '
        + 'whether you have your ID with you?”']
    }
  ]
});
