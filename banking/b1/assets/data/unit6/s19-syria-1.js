/* Unit 6 §19 — Syria in Focus — Money from Abroad.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s19', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 11 · Syria in Focus — Money from Abroad', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Money from Abroad', title: 'Part 11 · Syria in Focus — Money from Abroad' },
  objective: 'By the end of this part you can explain the route an international '
  + 'payment takes, and why it can take longer than a customer expects.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 6 · S-A',
      visual: { spot: 'correspondent' },
      type: 'study',
      title: 'Read the case',
      instruction: 'On 20 November 2025 Syria\'s central bank reconnected to the SWIFT '
  + 'network after fourteen years. That made it possible, in principle, '
  + 'for Syrian banks to send and receive international payments through '
  + 'the usual channels.<br>In practice a payment still needs a '
  + 'correspondent bank on the other side willing to handle it, and many '
  + 'are still cautious. A former deputy governor described it this way: '
  + 'the legal wall has fallen, but the banking wall remains '
  + 'standing.<br>A customer at Al-Mathaq Bank is expecting money from a '
  + 'relative abroad. The officer explains the route the payment takes, '
  + 'why it can take longer than the customer expects, and what '
  + 'information the sender must give.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 6 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What happened on 20 November 2025?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does a payment still need besides a connection?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the officer explain to the waiting customer?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 6 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Explain to a partner, in four sentences, the route a payment takes '
  + 'from a sender abroad to a customer at your branch.',
      doneLabel: 'I have read this'
    }
  ]
});
