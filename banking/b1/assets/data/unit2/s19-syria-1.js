/* Unit 2 §19 — Syria in Focus — The Customer Who Prefers Cash.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s19', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 11 · Syria in Focus — The Customer Who Prefers Cash', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — The Customer Who Prefers Cash', title: 'Part 11 · Syria in Focus — The Customer Who Prefers Cash' },
  objective: 'By the end of this part you can answer a customer who does not trust '
  + 'banks, without arguing and without overpromising.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 2 · S-A',
      visual: { spot: 'savings-goal' },
      type: 'study',
      title: 'Read the case',
      instruction: 'Many customers in Syria have kept their savings in cash for years. At '
  + 'Al-Mathaq Bank, a customer named Abu Samir comes in to ask about '
  + 'opening an account. He says plainly that he does not trust banks and '
  + 'wants to know what happens to his money.<br>The customer service '
  + 'representative, Lina, does not argue. She explains what an account '
  + 'gives him, what the bank may and may not do with his money, and how '
  + 'he can take it out. She offers to open the account with a small '
  + 'amount first.<br>Abu Samir opens an account with a small deposit and '
  + 'says he will come back in a month.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 2 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What does Abu Samir say he wants to know?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does Lina offer that makes the first step smaller?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does Lina not argue with him?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 2 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'How do staff where you work answer a customer who does not trust '
  + 'banks? Which of Lina\'s moves would you use?',
      doneLabel: 'I have read this'
    }
  ]
});
