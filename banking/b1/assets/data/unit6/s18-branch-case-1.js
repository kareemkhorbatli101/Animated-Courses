/* Unit 6 §18 — Branch Case Study — Manila in Focus: Money from Abroad.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s18', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 9 · Branch Case Study — Manila in Focus: Money from Abroad', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Manila in Focus: Money from Abroad', title: 'Part 9 · Branch Case Study — Manila in Focus: Money from Abroad' },
  objective: 'By the end of Part 9 you can read what a branch does for families '
  + 'receiving money from abroad, weigh cost against speed, and decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 6 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why has the correspondent bank not released the money?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Who has to ask for the payment to be fixed?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why can Priya not use the hardship fund straight away?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 6 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Priya do today? Write 40–60 words. Use the frame and the '
  + 'phrase bank.<br>Frame: I think Priya should ___, because ___. Also, '
  + '___.<br>Phrase bank: contact the sending bank directly · ask for '
  + 'approval by telephone · give a written note of the reference · '
  + 'explain exactly what the name must say',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Priya should call the sending bank herself, because only they '
        + 'can correct the name. She should also phone the manager for approval '
        + 'of the hardship fund by telephone. Also, she can give Mrs Reyes a '
        + 'written note of the reference number and the exact name to send her '
        + 'son.']
    }
  ]
});
