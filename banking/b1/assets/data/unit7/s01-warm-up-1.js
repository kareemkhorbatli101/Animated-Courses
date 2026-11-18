/* Unit 7 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s01', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can describe a scam you have heard of, '
  + 'and say what makes someone fall for it.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 7 · W-A',
      visual: { spot: 'phishing' },
      type: 'shortanswer',
      title: 'Staying safe (discussion)',
      instruction: 'In small groups, talk about how people lose money to fraud.',
      items: [{ q: '1. What scams have you heard about where you live?',
          accept: ['What scams have you heard about where you live?'],
          keys: ['scams',
              'heard'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. Why do people believe a message that is clearly false?',
          accept: ['Why do people believe a message that is clearly false?'],
          keys: ['people',
              'believe'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on',
      model: ['My neighbour got a message saying her account was blocked. She '
        + 'clicked the link and typed her password. The money was gone in ten '
        + 'minutes.']
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 7 · W-B',
      type: 'cloze',
      title: 'Safe or risky? (quick sort)',
      instruction: 'In pairs, decide whether each habit is safe or risky. One minute '
  + 'only.<br>Useful words: Use the words PIN, code, link and caller in '
  + 'your answers.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Writing the PIN on a piece of paper in a wallet: [[1]]'
        + '<br>'
        + '2. Calling the number printed on the back of the card: [[2]]'
        + '<br>'
        + '3. Reading a one-time code aloud on the phone: [[3]]'
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
