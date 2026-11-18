/* Unit 5 §19 — Syria in Focus — Banking When the Power Goes.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s19', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 11 · Syria in Focus — Banking When the Power Goes', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Banking When the Power Goes', title: 'Part 11 · Syria in Focus — Banking When the Power Goes' },
  objective: 'By the end of this part you can tell a customer what happens to a '
  + 'payment that was interrupted, in the same three sentences every '
  + 'colleague uses.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 5 · S-A',
      visual: { spot: 'atm' },
      type: 'study',
      title: 'Read the case',
      instruction: 'Syria\'s central bank has been pressing for wider use of digital '
  + 'payments. At the same time, many branches work with an electricity '
  + 'supply that is not continuous and a data connection that is not '
  + 'always fast.<br>Al-Mathaq Bank launches a mobile application. The '
  + 'branch quickly finds that the hardest part is not the application but '
  + 'the explaining: customers want to know what happens to a payment that '
  + 'is interrupted halfway.<br>The branch writes one short notice for '
  + 'customers and trains every member of staff to say the same three '
  + 'sentences about an interrupted payment.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 5 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What is the branch\'s hardest problem with the new application?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What do customers most want to know?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does the branch make every member of staff say the same sentences?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 5 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'What does your own bank tell a customer whose payment did not '
  + 'complete? Write the three sentences you would use.',
      doneLabel: 'I have read this'
    }
  ]
});
