/* Unit 4 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u4-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 4 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to do when a guest arrives '
  + 'before the room is ready, and offer something real.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 4 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What does Lina do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      paras: ['A guest arrives at ten o\'clock in the morning, but check-in is at '
          + 'two o\'clock, and her room is not ready. She is tired after a night '
          + 'on the train, and she has two heavy bags. She is polite, but she '
          + 'really wants to rest.']
    },
      before: '<b>What would you do?</b><ul><li>Tell the guest to come back at two '
      + 'o\'clock and say nothing else.</li><li>Give the guest a room that '
      + 'another guest has booked.</li><li>Say sorry, keep the bags, offer a '
      + 'coffee, and say when the room is going to be ready.</li><li>Ignore '
      + 'the guest until the room is ready.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one polite sentence Lina can say to the guest, using going to.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 4 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      paras: ['A guest walks in with no reservation and asks for a room for one '
          + 'night. The hotel is nearly full, but there is one single room free. '
          + 'The guest looks tired and hopeful.']
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the situation?',
      '2. What can Lina say to welcome the walk-in guest and offer the room?',
      '3. What information does Lina need to check the guest in?']
    }
  ]
});
