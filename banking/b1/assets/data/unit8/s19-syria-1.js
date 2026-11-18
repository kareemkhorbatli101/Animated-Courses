/* Unit 8 §19 — Syria in Focus — Identity, and a Lost Document.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s19', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 11 · Syria in Focus — Identity, and a Lost Document', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Identity, and a Lost Document', title: 'Part 11 · Syria in Focus — Identity, and a Lost Document' },
  objective: 'By the end of this part you can ask for a document and hold a '
  + 'requirement politely, without apologising for the rule or promising '
  + 'an outcome.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 8 · S-A',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'Read the case',
      instruction: 'Syria remains under monitoring by the Financial Action Task Force, '
  + 'and banks are expected to know who their customers are and where '
  + 'money has come from. Both are ordinary banking requirements '
  + 'everywhere.<br>A customer at Al-Mathaq Bank wants to deposit a large '
  + 'sum from the sale of a property. Some of his documents were lost. He '
  + 'is impatient, and he says another bank would not ask so many '
  + 'questions.<br>The compliance officer explains what the bank must have '
  + 'and why, what she can accept instead of the missing paper, and what '
  + 'she cannot. She does not apologise for the rule, and she does not '
  + 'promise an outcome.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 8 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'What two things is a bank expected to establish about a customer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What does the officer offer the customer?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why does she not promise an outcome?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 8 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Which document would your own bank accept in place of a missing one? '
  + 'Practise saying no to a customer without apologising for the rule.',
      doneLabel: 'I have read this'
    }
  ]
});
