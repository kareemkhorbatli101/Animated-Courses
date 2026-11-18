/* Unit 3 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to offer when the room a '
  + 'guest wants is not available, and justify the offer.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 3 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What does Lina do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest calls and asks for a room for tonight. But tonight the hotel '
            + 'is completely full — there are no free rooms. The guest sounds tired '
            + 'and really wants to stay.',
          say: 'A guest calls and asks for a room for tonight. But tonight the hotel '
            + 'is completely full — there are no free rooms. The guest sounds tired '
            + 'and really wants to stay.',
          role: 'course'
        }]
    },
      before: '<b>What would you do?</b><ul><li>Say “No. Goodbye.” and end the '
      + 'call.</li><li>Say sorry, and offer another date or the resort in '
      + 'Latakia.</li><li>Give the guest a room that is already '
      + 'booked.</li><li>Say nothing and wait.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['A kind “no” always comes with a reason and a helpful offer. What '
        + 'polite sentence could Lina say? Write one.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 3 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'On the phone, a guest gives his name quickly, and Lina is not sure of '
            + 'the spelling. He also says a date that is not clear — “the 13th or '
            + 'the 30th?” If Lina writes the wrong name or date, there will be a big '
            + 'problem when the guest arrives.',
          say: 'On the phone, a guest gives his name quickly, and Lina is not sure of '
            + 'the spelling. He also says a date that is not clear — “the 13th or '
            + 'the 30th?” If Lina writes the wrong name or date, there will be a big '
            + 'problem when the guest arrives.',
          role: 'course'
        }]
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the problem?',
      '2. Write one polite sentence to check the spelling of the name.',
      '3. Write one polite sentence to check the date.']
    }
  ]
});
