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
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why is there a gap of eleven weeks?',
          accept: ['Why is there a gap of eleven weeks?'],
          keys: ['there',
              'eleven'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does the paper supplier want, and why?',
          accept: ['What does the paper supplier want, and why?'],
          keys: ['paper',
              'supplier'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What are the three options Beatriz is weighing?',
          accept: ['What are the three options Beatriz is weighing?'],
          keys: ['three',
              'options'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
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
