/* Unit 10 §18 — Branch Case Study — São Paulo in Focus: A Workshop Needs Help.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s18', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 9 · Branch Case Study — São Paulo in Focus: A Workshop '
  + 'Needs Help', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — São Paulo in Focus: A Workshop Needs Help', title: 'Part 9 · Branch Case Study — São Paulo in Focus: A Workshop Needs Help' },
  objective: 'By the end of Part 9 you can read what a branch does for a workshop '
  + 'that needs finance, weigh the risk against the relationship, and '
  + 'decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 10 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why is there a gap of eleven weeks?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the paper supplier want, and why?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What are the three options Beatriz is weighing?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 10 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Beatriz recommend? Write 40–60 words. Use the frame and '
  + 'the phrase bank.<br>Frame: I think Beatriz should ___, because ___. '
  + 'Also, ___.<br>Phrase bank: recommend a letter of credit · avoid '
  + 'adding to existing borrowing · report the record in the customer’s '
  + 'own words · ask for written confirmation of the buyer’s terms',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Beatriz should recommend a letter of credit, because it '
        + 'satisfies the supplier without adding to what Rafael already owes. '
        + 'She should also report his record in his own words, including the '
        + 'weak January. Also, she can ask the committee for a small facility '
        + 'only if the buyer’s terms are confirmed in writing.']
    }
  ]
});
