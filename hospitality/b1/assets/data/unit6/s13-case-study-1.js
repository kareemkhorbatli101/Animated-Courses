/* Unit 6 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u6-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 6 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to recommend to a guest with '
  + 'little time, and justify the choice.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 6 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What does Rana do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest has only one day in Syria and wants to see “the most amazing '
            + 'place.” She loves ancient history, but Palmyra is three hours away by '
            + 'car — six hours there and back. There is not enough time to enjoy it '
            + 'and return the same day.',
          say: 'A guest has only one day in Syria and wants to see “the most amazing '
            + 'place.” She loves ancient history, but Palmyra is three hours away by '
            + 'car — six hours there and back. There is not enough time to enjoy it '
            + 'and return the same day.',
          role: 'course'
        }]
    },
      before: '<b>What would you do?</b><ul><li>Send the guest to Palmyra anyway, '
      + 'with no warning.</li><li>Explain that Palmyra is too far for one day, '
      + 'and recommend a closer, wonderful place.</li><li>Tell the guest to '
      + 'stay in the hotel.</li><li>Say nothing and let the guest decide '
      + 'alone.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one sentence Rana can say, using a comparative or superlative.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 6 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'Two guests ask for advice at the same time. One is a father with two '
            + 'small children. The other is a young man who loves history and '
            + 'museums. They want the same thing — “the best place” — but the best '
            + 'place is different for each of them.',
          say: 'Two guests ask for advice at the same time. One is a father with two '
            + 'small children. The other is a young man who loves history and '
            + 'museums. They want the same thing — “the best place” — but the best '
            + 'place is different for each of them.',
          role: 'course'
        }]
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. Why is \'the best place\' different for these two guests?',
      '2. What can Rana recommend for the family with children?',
      '3. What can Rana recommend for the history-lover?']
    }
  ]
});
