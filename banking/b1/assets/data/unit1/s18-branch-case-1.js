/* Unit 1 §18 — Branch Case Study — Nairobi in Focus: A New Branch Opens.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s18', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 9 · Branch Case Study — Nairobi in Focus: A New Branch Opens', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Nairobi in Focus: A New Branch Opens', title: 'Part 9 · Branch Case Study — Nairobi in Focus: A New Branch Opens' },
  objective: 'By the end of Part 9 you can read what happens when a branch opens, '
  + 'weigh what the branch should do first, and defend the order you '
  + 'choose.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 1 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why do the new tellers work slowly?',
          accept: ['Why do the new tellers work slowly?'],
          keys: ['tellers',
              'slowly'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What two things does Amina want at the same time?',
          accept: ['What two things does Amina want at the same time?'],
          keys: ['things',
              'amina'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. Who is the one experienced teller?',
          accept: ['Who is the one experienced teller?'],
          keys: ['experienced',
              'teller'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 1 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Amina do first? Write 40–60 words. Use the frame and the '
  + 'phrase bank.<br>Frame: I think Amina should ___, because ___. Also, '
  + '___.<br>Phrase bank: put ___ on the busiest window · serve simple '
  + 'customers first · give support to the new tellers · help the worried '
  + 'customer',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Amina should put Grace on the busiest window, because she is '
        + 'fast and correct. The two new tellers can serve simple customers with '
        + 'support. Also, Amina can help the worried customer herself. This '
        + 'keeps service polite and reduces mistakes.']
    }
  ]
});
