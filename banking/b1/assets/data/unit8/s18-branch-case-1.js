/* Unit 8 §18 — Branch Case Study — Rotterdam in Focus: A Large Deposit.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s18', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 9 · Branch Case Study — Rotterdam in Focus: A Large Deposit', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Rotterdam in Focus: A Large Deposit', title: 'Part 9 · Branch Case Study — Rotterdam in Focus: A Large Deposit' },
  objective: 'By the end of Part 9 you can read what a branch does about an '
  + 'unusually large deposit, weigh the duty to report against the duty to '
  + 'serve, and decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 8 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Where does Mr de Groot say the money came from?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What cannot he provide?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why can Sanne not ask the compliance officer now?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 8 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Sanne do? Write 40–60 words. Use the frame and the phrase '
  + 'bank.<br>Frame: I think Sanne should ___, because ___. Also, '
  + '___.<br>Phrase bank: move the money and the conversation somewhere '
  + 'private · record exactly what the customer said · explain that the '
  + 'form applies to everyone · escalate without telling the customer',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Sanne should take the deposit into a private room and record '
        + 'exactly what Mr de Groot said, because the money must not sit on an '
        + 'open counter. She should explain that the form is required for '
        + 'everyone. Also, she can escalate it to the compliance officer at '
        + 'noon, without telling the customer.']
    }
  ]
});
