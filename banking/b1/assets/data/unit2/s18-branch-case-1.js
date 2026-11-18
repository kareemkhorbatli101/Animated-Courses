/* Unit 2 §18 — Branch Case Study — Manila in Focus: The Crowded Branch.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s18', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 9 · Branch Case Study — Manila in Focus: The Crowded Branch', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Manila in Focus: The Crowded Branch', title: 'Part 9 · Branch Case Study — Manila in Focus: The Crowded Branch' },
  objective: 'By the end of Part 9 you can read what a crowded branch does about '
  + 'waiting, weigh the options, and decide which to try first and why.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 2 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'How long is the wait?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is Liza a little slow?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does Liza remember from her training?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Who is the experienced teller?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 2 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Carlos do to keep service polite and fast? Write 40–60 '
  + 'words. Use the frame and phrase bank.<br>Frame: I think Carlos should '
  + '___, because ___. Also, ___.<br>Phrase bank: open a second counter · '
  + 'move ___ to the busy window · apologise for the wait · thank '
  + 'customers for waiting',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Carlos should open a second counter and help at the busy '
        + 'times. He can move Nina to serve customers quickly, while Liza takes '
        + 'simple transactions. Also, Carlos can apologise to the angry customer '
        + 'and thank everyone for waiting. This keeps service calm and faster.']
    }
  ]
});
