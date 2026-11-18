/* Unit 4 §19 — Syria in Focus — Two Banks, One Customer.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s19', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 11 · Syria in Focus — Two Banks, One Customer', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Two Banks, One Customer', title: 'Part 11 · Syria in Focus — Two Banks, One Customer' },
  objective: 'By the end of this part you can explain plainly how a conventional '
  + 'loan and a murabaha differ, without recommending either.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 4 · S-A',
      visual: { spot: 'murabaha' },
      type: 'study',
      title: 'Read the case',
      instruction: 'Syria has state-owned banks, private conventional banks and private '
  + 'Islamic banks. A customer may hold accounts with more than one, and '
  + 'will often ask a bank to explain how its products differ from the '
  + 'other kind.<br>A customer at Al-Mathaq Bank asks about a loan for a '
  + 'small shop. He has been offered a conventional loan with interest at '
  + 'another bank, and an Islamic product at a third. He wants to know, in '
  + 'plain words, what the difference is.<br>The loan officer explains '
  + 'that in a conventional loan the customer borrows money and pays '
  + 'interest; in a murabaha the bank buys the goods and sells them on at '
  + 'a known cost and a known profit, agreed in advance. He does not tell '
  + 'the customer which to choose.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 4 · S-B',
      type: 'shortanswer',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What three kinds of bank does the case name?',
          accept: ['What three kinds of bank does the case name?'],
          keys: ['three',
              'kinds'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. In a murabaha, what does the bank do before the customer pays?',
          accept: ['In a murabaha, what does the bank do before the customer pays?'],
          keys: ['murabaha',
              'before'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Why does the loan officer not tell the customer which to choose?',
          accept: ['Why does the loan officer not tell the customer which to choose?'],
          keys: ['officer',
              'customer'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 4 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Which products does your own bank offer, and how would you explain '
  + 'the difference to a customer in two sentences?',
      doneLabel: 'I have read this'
    }
  ]
});
