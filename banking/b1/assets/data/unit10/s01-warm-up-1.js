/* Unit 10 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s01', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say how banking for a business '
  + 'differs from banking for a person.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 10 · W-A',
      visual: { spot: 'letter-of-credit' },
      type: 'shortanswer',
      title: 'Business customers (discussion)',
      instruction: 'In small groups, talk about the businesses that bank with you.',
      items: [{ q: '1. What kinds of business bank at your branch?',
          accept: ['What kinds of business bank at your branch?'],
          keys: ['kinds',
              'business'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What do they need that a personal customer does not?',
          accept: ['What do they need that a personal customer does not?'],
          keys: ['personal',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['We have a bakery, two builders and a small import company. The import '
        + 'company is the most complicated, because it pays suppliers abroad.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 10 · W-B',
      type: 'shortanswer',
      title: 'Passing on a message (think–pair)',
      instruction: 'Think for one minute, then compare with a partner.<br>Useful words: '
  + 'Use said, told and asked in your answers.',
      items: [{ q: '1. Your colleague says, “I need the figures by Friday.” How do you '
              + 'tell the manager?',
          accept: ['Your colleague says, “I need the figures by Friday.” How do you tell '
                + 'the manager?'],
          keys: ['colleague',
              'figures'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why is it important to report exactly, and not nearly?',
          accept: ['Why is it important to report exactly, and not nearly?'],
          keys: ['important',
              'report'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
