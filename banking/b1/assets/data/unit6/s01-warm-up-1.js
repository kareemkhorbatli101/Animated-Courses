/* Unit 6 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s01', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say why people send money abroad, '
  + 'and describe how it is usually sent where you live.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 6 · W-A',
      visual: { spot: 'rate-board' },
      type: 'shortanswer',
      title: 'Changing and sending money (discussion)',
      instruction: 'In small groups, talk about moving money between countries.',
      items: [{ q: '1. Who in your country receives money from abroad, and why?',
          accept: ['Who in your country receives money from abroad, and why?'],
          keys: ['country',
              'receives'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What do people worry about most: the rate, the fee, or the time?',
          accept: ['What do people worry about most: the rate, the fee, or the time?'],
          keys: ['people',
              'worry'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['My cousin works abroad and sends money home every month. He uses the '
        + 'bank because it is safer, even though it is a little slower.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 6 · W-B',
      type: 'discuss',
      title: 'Polite questions (think–pair)',
      instruction: 'Think for one minute, then compare with a partner.<br>Useful words: '
  + 'Use the words rate, fee, transfer and exchange in your answers.',
      minWords: 12,
      questions: [{ q: 'Which sounds better to a customer: “What is the rate?” or “Could you '
            + 'tell me what the rate is?”' },
      { q: 'Why does a bank use longer, politer questions?' }]
    }
  ]
});
