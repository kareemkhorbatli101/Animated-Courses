/* Unit 7 §18 — Branch Case Study — Istanbul in Focus: The Phone Call.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s18', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 9 · Branch Case Study — Istanbul in Focus: The Phone Call', part: '9', section: '18',
          track: 'practitioner', label: 'Practitioner track · read then decide', lesson: 'Part 9 · Branch Case Study — Istanbul in Focus: The Phone Call', title: 'Part 9 · Branch Case Study — Istanbul in Focus: The Phone Call' },
  objective: 'By the end of Part 9 you can read what a branch does about a '
  + 'suspicious phone call, weigh the duty to the customer against the '
  + 'duty to the bank, and decide.',
  cards: [
    {
      id: 'c1',
      ref: '9A',
      bookRef: 'Unit 7 · 9A',
      visual: { spot: 'branch-plan' },
      type: 'discuss',
      title: 'Comprehension',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What did the caller tell Mr Şahin, and what did he already know?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is the branch rule for amounts over five thousand?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is the situation becoming difficult for the branch?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: '9B',
      bookRef: 'Unit 7 · 9B',
      type: 'writer',
      title: 'Decision task',
      instruction: 'What should Kerem do in the next two minutes? Write 40–60 words. Use '
  + 'the frame and the phrase bank.<br>Frame: I think Kerem should ___, '
  + 'because ___. Also, ___.<br>Phrase bank: move the conversation '
  + 'somewhere private · say the transfer is paused, not refused · offer '
  + 'to call the fraud team together · show the rule in writing',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['I think Kerem should take Mr Şahin into a private room, because the '
        + 'conversation should not happen at the counter. He should explain that '
        + 'the transfer is paused, not refused, and offer to call the fraud team '
        + 'together. Also, he can show Mr Şahin that the bank never calls about '
        + 'a safe account.']
    }
  ]
});
