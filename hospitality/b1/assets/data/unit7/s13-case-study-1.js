/* Unit 7 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u7-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 7 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to do when a guest asks for '
  + 'something the floor has run out of.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 7 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What should the team do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest checks in and goes up to the room. But the room has not been '
            + 'cleaned yet — the bed is not made, and there are no fresh towels. The '
            + 'guest comes back down to reception, tired and unhappy.',
          say: 'A guest checks in and goes up to the room. But the room has not been '
            + 'cleaned yet — the bed is not made, and there are no fresh towels. The '
            + 'guest comes back down to reception, tired and unhappy.',
          role: 'course'
        }]
    },
      before: '<b>What would you do?</b><ul><li>Tell the guest to wait in the room '
      + 'until it is cleaned.</li><li>Apologise, offer the guest a coffee, and '
      + 'clean the room as quickly as possible (or give another ready '
      + 'room).</li><li>Say it is not the receptionist\'s '
      + 'problem.</li><li>Argue that the room is clean enough.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one polite sentence the team can say, using the present perfect '
        + '(for example, with \'sorry\' and \'haven\'t … yet\').']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 7 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      listenLabel: 'Listen to the case',
      paras: [{
          h: 'A guest hangs a \'Do Not Disturb\' sign on the door in the morning. '
            + 'The housekeeper respects it and does not clean the room. But in the '
            + 'evening, the guest complains: “My room hasn\'t been cleaned all day!”',
          say: 'A guest hangs a \'Do Not Disturb\' sign on the door in the morning. '
            + 'The housekeeper respects it and does not clean the room. But in the '
            + 'evening, the guest complains: “My room hasn\'t been cleaned all day!”',
          role: 'course'
        }]
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. Why didn\'t the housekeeper clean the room?',
      '2. Was the housekeeper right to respect the sign? Why?',
      '3. What can the team do now to help the guest? Write one polite sentence.']
    }
  ]
});
