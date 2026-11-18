/* Unit 3 §19 — Syria in Focus — Old Notes and New at the Counter.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s19', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 11 · Syria in Focus — Old Notes and New at the Counter', part: '11', section: '19',
          track: 'syria', label: 'Syria edition · compare with where you work', lesson: 'Part 11 · Syria in Focus — Old Notes and New at the Counter', title: 'Part 11 · Syria in Focus — Old Notes and New at the Counter' },
  objective: 'By the end of this part you can state an amount in old pounds and in '
  + 'new pounds, and explain the change to a customer at the counter.',
  cards: [
    {
      id: 'c1',
      ref: 'S-A',
      bookRef: 'Unit 3 · S-A',
      visual: { spot: 'redenomination' },
      type: 'study',
      title: 'Read the case',
      instruction: 'On 1 January 2026 Syria changed its currency. Two zeros were removed: '
  + 'one hundred old pounds became one new pound. The new series has six '
  + 'denominations, from 5 to 500, and the 500 note is worth 50,000 old '
  + 'pounds. It is the first Syrian currency without pictures of people or '
  + 'places.<br>Old and new notes circulated together for ninety days, a '
  + 'period that could be extended by a further thirty.<br>At the counter '
  + 'this meant one thing above all: every teller had to be able to say '
  + 'the same amount in two ways, and to say clearly which notes a '
  + 'customer was holding and which they would receive.',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'S-B',
      bookRef: 'Unit 3 · S-B',
      type: 'discuss',
      title: 'Answer the questions',
      instruction: 'Answer from the text, in your own words.',
      questions: [{
            q: 'How many old pounds equal one new pound?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'How long did the two kinds of note circulate together?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Why did a teller need to say one amount in two ways?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c3',
      ref: 'S-C',
      bookRef: 'Unit 3 · S-C',
      type: 'study',
      title: 'Compare with where you work',
      instruction: 'Practise with a partner: one of you states an amount in old pounds, '
  + 'the other says it in new pounds, then both check.',
      doneLabel: 'I have read this'
    }
  ]
});
