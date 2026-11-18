/* Unit 9 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s01', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say why people save, and what stops them.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 9 · W-A',
      visual: { spot: 'savings-goal' },
      type: 'shortanswer',
      title: 'Why we save (discussion)',
      instruction: 'In small groups, talk about why people save money.',
      items: [{ q: '1. What do people in your country save for most often?',
          accept: ['What do people in your country save for most often?'],
          keys: ['people',
              'country'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What stops people from saving?',
          accept: ['What stops people from saving?'],
          keys: ['stops',
              'people'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['Some people save for something they want, like a car. Others save '
        + 'because they are worried about losing their job. Both are good '
        + 'reasons, but they need different accounts.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 9 · W-B',
      type: 'shortanswer',
      title: 'A saving goal (think–pair)',
      instruction: 'Think of one goal, then tell your partner three things about '
  + 'it.<br>Useful words: Use the words goal, amount, monthly and interest '
  + 'in your answers.',
      items: [{ q: '1. How much is the goal, and when do you want to reach it?',
          accept: ['How much is the goal, and when do you want to reach it?'],
          keys: ['reach'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. How much would you need to put aside each month?',
          accept: ['How much would you need to put aside each month?'],
          keys: ['would',
              'aside'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
