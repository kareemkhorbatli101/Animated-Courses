/* Unit 2 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u2-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 2 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to tell a guest when the '
  + 'facility they want is closed, and offer an alternative.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 2 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What does Lina do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      paras: ['A guest is walking around the ground floor. He looks confused. He is '
          + 'trying to find the spa, but he is going the wrong way, towards the '
          + 'kitchen. Lina is at the desk, and she can see him.']
    },
      before: '<b>What would you do?</b><ul><li>Wait for the guest to ask for '
      + 'help.</li><li>Call across the lobby: “Wrong way!”</li><li>Go to the '
      + 'guest, smile, and give clear directions to the spa.</li><li>Point '
      + 'quickly and go back to the computer.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['A good receptionist notices a lost guest and helps before the guest '
        + 'has to ask. Do you agree? Why?']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 2 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      paras: ['An older guest has a room on the third floor. She has two heavy bags. '
          + 'But this morning, the lift is not working. The guest cannot carry the '
          + 'bags up the stairs, and she is worried.']
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the problem?',
      '2. What can Lina say to the guest? Write one polite sentence.',
      '3. What can the hotel do to help? (give one idea — think about the '
        + 'porter or a ground-floor room)']
    }
  ]
});
