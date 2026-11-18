/* Unit 8 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u8-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 8 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to do when a request cannot '
  + 'be met in full, and what to offer instead.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 8 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What should Lina do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      paras: ['A guest who uses a wheelchair has booked an accessible room on the '
          + 'ground floor. But today, part of the ground floor is closed for '
          + 'repairs, and the only free accessible room is on the first floor — '
          + 'and the lift is being fixed until the afternoon.']
    },
      before: '<b>What would you do?</b><ul><li>Tell the guest there is no room and '
      + 'send them away.</li><li>Apologise, explain the problem honestly, and '
      + 'offer a solution (wait in comfort, help to the room, or another '
      + 'hotel).</li><li>Give the guest a room they cannot reach and say '
      + 'nothing.</li><li>Blame the repair team and do nothing.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one sentence Lina can say, using I\'ll to make a helpful promise.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 8 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      paras: ['A guest asks for a special dish that the kitchen does not make, and '
          + 'the ingredients are not in the hotel. The guest really wants it, but '
          + 'it is simply not possible tonight.']
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the problem?',
      '2. How can Lina say \'no\' kindly? (apologise + reason + alternative)',
      '3. Write one polite sentence offering an alternative, using I\'ll.']
    }
  ]
});
