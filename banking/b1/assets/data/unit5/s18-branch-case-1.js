/* Unit 5 §18 — Branch Case Study — Warsaw in Focus: Banking on a Weak Signal.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s18', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 9 · Branch Case Study — Warsaw in Focus: Banking on a '
  + 'Weak Signal', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Warsaw in Focus: Banking on a Weak Signal', title: 'Part 9 · Branch Case Study — Warsaw in Focus: Banking on a Weak Signal' },
  objective: 'By the end of Part 9 you can read what a branch does where the signal '
  + 'is weak, weigh what can and cannot move online, and decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 5 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'Why is the policy not working in the villages?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What happened to the first customer’s payment?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does the bank want payments made in the app?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 5 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Marta propose on Thursday? Write 40–60 words. Use the '
  + 'frame and the phrase bank.<br>Frame: I think Marta should propose '
  + '___, because ___. Also, ___.<br>Phrase bank: send codes by email as '
  + 'well · keep counter payments free for ___ · show how many customers '
  + 'are affected · ask for the policy to be local, not national',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Marta should propose that codes can be sent by email as well '
        + 'as by text, because email arrives even on a weak signal. She should '
        + 'also ask that counter payments stay free for village customers. Also, '
        + 'she can show the regional team how many customers are affected.']
    }
  ]
});
