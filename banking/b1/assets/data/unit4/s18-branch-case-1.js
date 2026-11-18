/* Unit 4 §18 — Branch Case Study — São Paulo in Focus: A Loan for a Small Shop.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s18', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 9 · Branch Case Study — São Paulo in Focus: A Loan for '
  + 'a Small Shop', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — São Paulo in Focus: A Loan for a Small Shop', title: 'Part 9 · Branch Case Study — São Paulo in Focus: A Loan for a Small Shop' },
  objective: 'By the end of Part 9 you can read a small business\'s loan request, '
  + 'weigh the case for and against, and make a decision you can justify.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 4 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What does Rafael want to buy, and why?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does Beatriz notice about the shop’s income?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the problem with the three-year loan?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 4 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Beatriz offer Rafael? Write 40–60 words. Use the frame '
  + 'and the phrase bank.<br>Frame: I think Beatriz should ___, because '
  + '___. Also, ___.<br>Phrase bank: offer a ___-year term · a smaller '
  + 'instalment in ___ · explain that a longer term costs more in total · '
  + 'keep a reserve for quiet months',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Beatriz should offer a four-year loan with a smaller '
        + 'instalment in January, because the shop’s income falls in that month. '
        + 'She should explain that a longer term costs more interest in total. '
        + 'Also, she can suggest keeping two thousand in the Everyday Saver for '
        + 'quiet months.']
    }
  ]
});
