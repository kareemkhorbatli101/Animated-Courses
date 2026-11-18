/* Unit 9 §13 — Case Studies and Decisions.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u9-s13', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 9 · Case Studies and Decisions', part: '9',
          section: '13', lesson: 'Case Studies and Decisions', title: 'Case Studies and Decisions' },
  objective: 'By the end of Part 9 you can decide what to offer a guest whose stay '
  + 'has been spoilt, and what you must escalate.',
  cards: [
    {
      id: 'c1',
      ref: 'Case 1',
      bookRef: 'Unit 9 · P9',
      type: 'report',
      title: 'Case study and decision',
      instruction: 'What should the receptionist do? Choose the best action and say why.',
      passage: {
      title: 'The case',
      paras: ['A guest is standing in the middle of the busy lobby, speaking very '
          + 'loudly and angrily about a problem with his room. Other guests are '
          + 'watching, and some look uncomfortable. The guest is clearly upset.']
    },
      before: '<b>What would you do?</b><ul><li>Argue back loudly to defend the '
      + 'hotel.</li><li>Stay calm, apologise, and invite the guest to a '
      + 'quieter place to talk.</li><li>Ignore the guest and hope he '
      + 'stops.</li><li>Tell the guest he is disturbing the other '
      + 'guests.</li></ul>',
      minWords: 20,
      placeholder: 'I would… because…',
      stems: ['Write one calm sentence the receptionist can say, using the first '
        + 'conditional (If…, I\'ll…).']
    },
    {
      id: 'c2',
      ref: 'Case 2',
      bookRef: 'Unit 9 · P9',
      type: 'report',
      title: 'Case study: answer the questions',
      instruction: 'Read the case, then answer the questions.',
      passage: {
      title: 'The case',
      paras: ['A guest complains that his whole stay was ruined by a small problem, '
          + 'and demands a completely free stay — no payment at all. The problem '
          + 'was real, but small, and the hotel has already apologised and fixed '
          + 'it. A completely free stay is not fair or possible.']
    },
      minWords: 25,
      placeholder: 'I would… because…',
      stems: ['1. What is the problem for the receptionist?',
      '2. Why must the answer be a kind \'no\' to a totally free stay?',
      '3. What fair solution could the hotel offer instead? Write one '
        + 'sentence using should or the first conditional.']
    }
  ]
});
