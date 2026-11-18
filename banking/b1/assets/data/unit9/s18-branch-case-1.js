/* Unit 9 §18 — Branch Case Study — Nairobi in Focus: Saving When Prices Rise.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s18', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 9 · Branch Case Study — Nairobi in Focus: Saving When '
  + 'Prices Rise', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Nairobi in Focus: Saving When Prices Rise', title: 'Part 9 · Branch Case Study — Nairobi in Focus: Saving When Prices Rise' },
  objective: 'By the end of Part 9 you can read what a branch advises when prices '
  + 'are rising, weigh saving against spending, and give advice you can '
  + 'defend.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 9 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'shortanswer',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      items: [{ q: '1. Why does Mrs Wanjiru feel she has less than before?',
          accept: ['Why does Mrs Wanjiru feel she has less than before?'],
          keys: ['wanjiru',
              'before'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What has her neighbour told her about?',
          accept: ['What has her neighbour told her about?'],
          keys: ['neighbour',
              'about'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. What two things does Grace know at the same time?',
          accept: ['What two things does Grace know at the same time?'],
          keys: ['things',
              'grace'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 9 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Grace do? Write 40–60 words. Use the frame and the phrase '
  + 'bank.<br>Frame: I think Grace should ___, because ___. Also, '
  + '___.<br>Phrase bank: agree with the part that is true · explain why a '
  + 'fixed high return is a warning sign · keep the fee money where it '
  + 'cannot fall · offer an appointment with an adviser',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Grace should agree with Mrs Wanjiru about inflation first, '
        + 'because her complaint is correct and she needs to be heard. Then she '
        + 'should explain that a high fixed monthly return is a warning sign. '
        + 'Also, she can offer a fixed deposit for the money not needed in six '
        + 'weeks.']
    }
  ]
});
