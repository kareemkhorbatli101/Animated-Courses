/* Unit 5 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u5-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 5 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to do when an order is wrong '
  + 'or late, and say what you will do about it.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 5 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What should the waiter do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest ordered the grilled fish, but the kitchen sent the chicken by '
            + 'mistake. The waiter did not check, and put the wrong dish in front of '
            + 'the guest. The guest is surprised and a little unhappy: “Excuse me, I '
            + 'ordered the fish.”',
          say: 'A guest ordered the grilled fish, but the kitchen sent the chicken by '
            + 'mistake. The waiter did not check, and put the wrong dish in front of '
            + 'the guest. The guest is surprised and a little unhappy: “Excuse me, I '
            + 'ordered the fish.”',
          role: 'course'
        }]
    },
      before: '<b>What would you do?</b><ul><li>Say “No, you ordered the chicken” '
      + 'and walk away.</li><li>Apologise, take the wrong dish back, and bring '
      + 'the correct one quickly.</li><li>Tell the guest to eat the '
      + 'chicken.</li><li>Argue with the guest about the order.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one polite sentence the waiter can say to the guest.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 5 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest tells the waiter, “I have an allergy to nuts.” The waiter is '
            + 'not sure if the dessert the guest wants contains nuts. If the guest '
            + 'eats nuts, they could become very ill.',
          say: 'A guest tells the waiter, “I have an allergy to nuts.” The waiter is '
            + 'not sure if the dessert the guest wants contains nuts. If the guest '
            + 'eats nuts, they could become very ill.',
          role: 'course'
        }]
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the problem?',
      '2. What should the waiter do before serving the dessert?',
      '3. Write one polite sentence the waiter can say to the guest.']
    }
  ]
});
