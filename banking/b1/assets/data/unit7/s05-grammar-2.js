/* Unit 7 §5 — Grammar — Zero and First Conditionals.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s05', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 2 · Grammar — Zero and First Conditionals (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Zero and First Conditionals (2)', title: 'Part 2 · Grammar — Zero and First Conditionals (2)' },
  objective: 'By the end of Part 2 you can state a standing rule with the zero '
  + 'conditional and a real possibility with the first, choose between '
  + 'them correctly, correct the commonest mistake, and warn a customer in '
  + 'both.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 7 · 2D',
      visual: { spot: 'phishing' },
      type: 'study',
      title: 'Give safety advice',
      html: '<p>If you share a one-time code, anyone can use your account. If you '
      + 'receive a message in a hurry, call us before you click. If you lose '
      + 'your card, we will block it immediately.</p>',
      instruction: 'Write three pieces of advice for a customer. Use one zero conditional '
  + 'and two first conditionals.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 7 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, advise a customer who has clicked a link in a false '
  + 'message. Use at least three conditionals.<br>Tip: You will see these '
  + 'conditionals again in the reading in Part 5 (5A and 5B). Look for '
  + 'them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“If you typed your password, we should change it now. If anything has '
        + 'been taken, we will open a case today.”']
    }
  ]
});
