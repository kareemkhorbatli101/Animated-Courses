/* Unit 9 §19 — Syria in Focus — Saving While Prices Move.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s19', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 11 · Syria in Focus — Saving While Prices Move', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Saving While Prices Move', title: 'Part 11 · Syria in Focus — Saving While Prices Move' },
  objective: 'By the end of this part you can help a customer set a saving goal '
  + 'with a date and an amount, and say what the bank can and cannot '
  + 'promise.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 9 · S-A',
      visual: { spot: 'redenomination' },
      type: 'study',
      title: 'Read the case',
      instruction: 'After the redenomination, customers at Al-Mathaq Bank began asking a '
  + 'question the branch had not heard for years: is it worth saving at '
  + 'all?<br>A young teacher wants to save for her brother\'s education in '
  + 'three years. She has a small amount each month and no experience of '
  + 'saving in a bank.<br>The officer helps her set a goal with a date and '
  + 'an amount, explains what the bank can and cannot promise about the '
  + 'future, and writes the plan down so she can see it. He is careful not '
  + 'to make a prediction he cannot keep.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 9 · S-B',
      type: 'shortanswer',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. What question did customers start asking after the redenomination?',
          accept: ['What question did customers start asking after the redenomination?'],
          keys: ['question',
              'customers'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What three things does the officer help the teacher decide?',
          accept: ['What three things does the officer help the teacher decide?'],
          keys: ['three',
              'things'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What is the officer careful not to do?',
          accept: ['What is the officer careful not to do?'],
          keys: ['officer',
              'careful'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 9 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Help a partner set a saving goal with a date and an amount. Say one '
  + 'thing your bank can promise and one it cannot.',
      doneLabel: 'I have read this'
    }
  ]
});
