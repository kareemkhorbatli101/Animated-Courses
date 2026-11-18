/* Unit 4 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s01', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can name the products your bank offers '
  + 'and say which kind of customer each one suits.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 4 · W-A',
      visual: { spot: 'bank-card' },
      type: 'shortanswer',
      title: 'What do customers need? (discussion)',
      instruction: 'In small groups, think of three different customers and what each one '
  + 'needs from a bank.',
      items: [{ q: '1. Who are the three most common customers at your branch?',
          accept: ['Who are the three most common customers at your branch?'],
          keys: ['three',
              'common'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does each of them ask for first?',
          accept: ['What does each of them ask for first?'],
          keys: ['first'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['A student needs a simple account with no fees. A shop owner needs a '
        + 'business account and a small loan. A family saving for a house needs '
        + 'a savings account with a good rate.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 4 · W-B',
      type: 'cloze',
      title: 'Products and uses (quick match)',
      instruction: 'In pairs, say which product each person needs. One minute '
  + 'only.<br>Useful words: Use the words account, card, loan and deposit '
  + 'in your answers.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Someone who is paid every month and pays bills: [[1]]'
        + '<br>'
        + '2. Someone who wants to keep money for three years: [[2]]'
        + '<br>'
        + '3. Someone who needs 5,000 to buy a van for work: [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    }
  ]
});
