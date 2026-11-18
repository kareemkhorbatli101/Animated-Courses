/* Unit 10 §1 — Warm-Up.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s01', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Warm-Up', part: '0', section: '1',
          track: 'warmup', label: 'In-class starter · speak before you read', lesson: 'Warm-Up', title: 'Warm-Up' },
  objective: 'By the end of this Warm-Up you can say how banking for a business '
  + 'differs from banking for a person.',
  cards: [
    {
      id: 'c1',
      ref: 'W-A',
      bookRef: 'Unit 10 · W-A',
      visual: { spot: 'letter-of-credit' },
      type: 'discuss',
      title: 'Business customers (discussion)',
      instruction: 'In small groups, talk about the businesses that bank with you.',
      questions: [{
            q: 'What kinds of business bank at your branch?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What do they need that a personal customer does not?',
            minWords: 6,
            rows: 2
          }],
      ideas: ['We have a bakery, two builders and a small import company. The import '
        + 'company is the most complicated, because it pays suppliers abroad.'],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c2',
      ref: 'W-B',
      bookRef: 'Unit 10 · W-B',
      type: 'discuss',
      title: 'Passing on a message (think–pair)',
      instruction: 'Think for one minute, then compare with a partner.<br>Useful words: '
  + 'Use said, told and asked in your answers.',
      questions: [{
            q: 'Your colleague says, “I need the figures by Friday.” How do you tell '
              + 'the manager?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why is it important to report exactly, and not nearly?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    }
  ]
});
