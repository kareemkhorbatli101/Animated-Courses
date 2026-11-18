/* Unit 10 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u10-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 10 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to do when a guest disputes '
  + 'a charge at the moment of leaving.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 10 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What should Lina do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'At checkout, a guest looks at the bill and frowns. “This is wrong,” '
            + 'she says. “There\'s a charge for the minibar, but I never touched '
            + 'it.” The charge is on the bill, but the guest is sure she did not use '
            + 'the minibar, and she is starting to feel upset.',
          say: 'At checkout, a guest looks at the bill and frowns. “This is wrong,” '
            + 'she says. “There\'s a charge for the minibar, but I never touched '
            + 'it.” The charge is on the bill, but the guest is sure she did not use '
            + 'the minibar, and she is starting to feel upset.',
          role: 'course'
        }]
    },
      before: '<b>What would you do?</b><ul><li>Insist the guest must pay, and '
      + 'argue.</li><li>Apologise, check calmly, and if there is any doubt, '
      + 'remove the charge with a smile.</li><li>Accuse the guest of '
      + 'lying.</li><li>Refuse to look at the bill again.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one calm sentence Lina can say to solve this and keep the guest happy.']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 10 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'After checkout, a guest writes an online review. They praise the '
            + 'friendly staff, but they say the room was too noisy and the wifi was '
            + 'slow. Thousands of future guests will read this review. The manager '
            + 'asks Lina to help write a reply.',
          say: 'After checkout, a guest writes an online review. They praise the '
            + 'friendly staff, but they say the room was too noisy and the wifi was '
            + 'slow. Thousands of future guests will read this review. The manager '
            + 'asks Lina to help write a reply.',
          role: 'course'
        }]
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is good, and what is critical, in the review?',
      '2. How should the hotel reply to the criticism (tone and content)?',
      '3. Write one polite sentence for the reply, thanking the guest and '
        + 'reporting what they said (“You said…”).']
    }
  ]
});
