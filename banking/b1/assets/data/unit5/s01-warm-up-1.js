/* Unit 5 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s01', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can describe how people bank online '
  + 'where you live, and say what stops some customers from using an app.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 5 · W-A',
      visual: { spot: 'atm' },
      type: 'shortanswer',
      title: 'Digital banking (discussion)',
      instruction: 'In small groups, talk about how you use banking on a phone or computer.',
      items: [{ q: '1. What do you do on the app, and what do you still do at the branch?',
          accept: ['What do you do on the app, and what do you still do at the branch?'],
          keys: ['still',
              'branch'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What do your customers find hardest about the app?',
          accept: ['What do your customers find hardest about the app?'],
          keys: ['customers',
              'hardest'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['I check my balance on the app every morning. I pay my bills online, '
        + 'but I still go to the branch for cash.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 5 · W-B',
      type: 'shortanswer',
      title: 'Quick survey',
      instruction: 'Ask three classmates and note their answers. Two minutes '
  + 'only.<br>Useful words: Use the words log in, password, code, app and '
  + 'transfer in your answers.',
      items: [{ q: '1. Do you use the app every day, every week, or rarely?',
          accept: ['Do you use the app every day, every week, or rarely?'],
          keys: ['every',
              'every'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What is the one thing you wish the app could do?',
          accept: ['What is the one thing you wish the app could do?'],
          keys: ['thing',
              'could'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    }
  ]
});
