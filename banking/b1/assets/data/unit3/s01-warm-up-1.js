/* Unit 3 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s01', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can list what a customer can do at a '
  + 'counter in one day, and say which checks a teller makes before paying '
  + 'out.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 3 · W-A',
      visual: { spot: 'bank-counter' },
      type: 'shortanswer',
      title: 'Daily transactions (brainstorm)',
      instruction: 'With a partner, list everything a customer can do at a bank counter '
  + 'in one day.',
      items: [{ q: '1. Which of these do you do most often?',
          accept: ['Which of these do you do most often?'],
          keys: ['which',
              'these'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Which one takes the longest? Why?',
          accept: ['Which one takes the longest? Why?'],
          keys: ['which',
              'takes'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['Deposit cash. Withdraw cash. Pay a bill. Transfer money to another '
        + 'account. Change one currency for another.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 3 · W-B',
      type: 'report',
      title: 'Teller security checks (think–pair–share)',
      instruction: 'Think for one minute, then compare with a partner.<br>Useful words: '
  + 'Use the words amount, limit, ID, receipt and signature in your '
  + 'answer.',
      minWords: 25,
      placeholder: 'What does a teller check before paying out cash?',
      stems: ['What does a teller check before paying out cash?',
      'Why does the bank ask for ID for a large amount?']
    }
  ]
});
