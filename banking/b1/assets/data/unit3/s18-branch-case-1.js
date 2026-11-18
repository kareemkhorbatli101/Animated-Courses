/* Unit 3 §18 — Branch Case Study — Istanbul in Focus: When the Rate Moves.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s18', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 9 · Branch Case Study — Istanbul in Focus: When the Rate Moves', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Istanbul in Focus: When the Rate Moves', title: 'Part 9 · Branch Case Study — Istanbul in Focus: When the Rate Moves' },
  objective: 'By the end of Part 9 you can read what a branch does when the '
  + 'exchange rate moves during the day, weigh the risk to the customer '
  + 'and to the bank, and decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 3 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why do many customers want to change money this morning?',
          accept: ['Why do many customers want to change money this morning?'],
          keys: ['customers',
              'change'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What one question do most of them have?',
          accept: ['What one question do most of them have?'],
          keys: ['question'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What are a few customers angry about?',
          accept: ['What are a few customers angry about?'],
          keys: ['customers',
              'angry'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '4. How many staff and desks does Kerem have?',
          accept: ['How many staff and desks does Kerem have?'],
          keys: ['staff',
              'desks'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 3 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Kerem do in the next two hours? Write 40–60 words. Use '
  + 'the frame and the phrase bank.<br>Frame: I think Kerem should ___, '
  + 'because ___. Also, ___.<br>Phrase bank: open a second desk for ___ '
  + 'only · put today’s rate on a board · explain the spread once, clearly '
  + '· ask customers with one question to ___',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Kerem should open the second desk for exchange only, because '
        + 'most customers have the same question. He can put a board at the door '
        + 'with today’s rate, so people do not have to ask. Also, he can ask '
        + 'Zeynep to explain the spread once, clearly, to everyone waiting.']
    }
  ]
});
