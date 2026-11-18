/* Unit 2 §5 — Grammar — Modals for Requests and Offers (can / could / may).

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s05', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 2 · Grammar — Modals for Requests and Offers (can / '
  + 'could / may) (2)', part: '2', section: '5',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Modals for Requests and Offers (can / could / may) (2)', title: 'Part 2 · Grammar — Modals for Requests and Offers (can / could / may) (2)' },
  objective: 'By the end of Part 2 you can choose between can, could and may for a '
  + 'request and for an offer, say which is more polite and why, correct '
  + 'the commonest modal mistake, and build a short service dialogue '
  + 'around three of them.',
  cards: [
    {
      id: 'c1',
      ref: '2D',
      bookRef: 'Unit 2 · 2D',
      visual: { spot: 'queue' },
      type: 'discuss',
      title: 'Make the command polite',
      instruction: 'Change each direct command into a polite request with can, could, or may.',
      questions: [{
            q: '“Show me your card.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“Type your PIN.”',
            minWords: 6,
            rows: 2
          },
      {
            q: '“Come back tomorrow.”',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '2E',
      bookRef: 'Unit 2 · 2E',
      type: 'report',
      title: 'Freer practice (speaking)',
      instruction: 'In pairs, write and act a short dialogue (4–6 lines) between a banker '
  + 'and a customer. Use at least three polite modals.<br>Tip: You will '
  + 'see these modals again in the reading in Part 5 (5A and 5B). Look for '
  + 'them there.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['Banker: How may I help you? — Customer: Could I open an account? — '
        + 'Banker: Certainly. May I see your ID?']
    }
  ]
});
