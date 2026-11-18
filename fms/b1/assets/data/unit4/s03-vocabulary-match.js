/* Unit 4 §3 — Part 1 - Vocabulary.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u4-s03', {
  book: { source: 'FMS B1.1', ref: 'Unit 4 · Part 1 - Vocabulary', part: '1', section: '3',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s seven correspondence and '
        + 'cooperation terms correctly, complete a formal correspondence formula from '
        + 'the details on a scenario card, and state the norms that formal diplomatic '
        + 'correspondence follows.',
  prev: 's02-fluency', prevLabel: 'Warm Up - fluency',
  next: 's04-role-cards', nextLabel: 'Part 1 - Role cards',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1A',
      bookRef: 'Unit 4 · Part 1 · 1A',
      type: 'dragmatch',
      title: 'Match and Guess',
      instruction: 'Match each term (1–7) with its correct definition (A–G).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) A formal diplomatic instrument written in the third person between '
          + 'foreign ministries, used for official inter-governmental communications' },
        { id: 'm-b', label: 'b) A concise official statement, signed by both parties, recording what '
          + 'was agreed during a meeting or session' },
        { id: 'm-c', label: 'c) A short diplomatic note, written from one party to another, summarizing '
          + 'a verbal communication for the official record' },
        { id: 'm-d', label: 'd) The formal credentials presented by a newly appointed ambassador to the '
          + 'head of state of the receiving country, authorizing the ambassador to '
          + 'represent their government' },
        { id: 'm-e', label: 'e) A formal agreement outlining the terms and objectives of a future '
          + 'cooperation between two parties, without the full legal binding force of a '
          + 'treaty' },
        { id: 'm-f', label: 'f) A formal agreement between two institutions or countries defining the '
          + 'principles and scope of their intended cooperation' },
        { id: 'm-g', label: 'g) An official joint statement issued by two or more governments after a '
          + 'meeting, summarizing agreed positions and commitments' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Note Verbale', accept: 'm-a',
          why: '<b>Note Verbale</b> — A formal diplomatic instrument written in the third '
            + 'person between foreign ministries, used for official inter-governmental '
            + 'communications This is the book\'s own pairing, from Column A against '
            + 'Column B.' },
        { id: 't2', num: 2, label: 'Communiqué', accept: 'm-b',
          why: '<b>Communiqué</b> — A concise official statement, signed by both parties, '
            + 'recording what was agreed during a meeting or session This is the book\'s '
            + 'own pairing, from Column A against Column B.' },
        { id: 't3', num: 3, label: 'Aide-Mémoire', accept: 'm-c',
          why: '<b>Aide-Mémoire</b> — A short diplomatic note, written from one party to '
            + 'another, summarizing a verbal communication for the official record This '
            + 'is the book\'s own pairing, from Column A against Column B.' },
        { id: 't4', num: 4, label: 'Protocol of Cooperation', accept: 'm-d',
          why: '<b>Protocol of Cooperation</b> — The formal credentials presented by a '
            + 'newly appointed ambassador to the head of state of the receiving country, '
            + 'authorizing the ambassador to represent their government This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't5', num: 5, label: 'Joint Statement', accept: 'm-e',
          why: '<b>Joint Statement</b> — A formal agreement outlining the terms and '
            + 'objectives of a future cooperation between two parties, without the full '
            + 'legal binding force of a treaty This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't6', num: 6, label: 'Letters of Credence', accept: 'm-f',
          why: '<b>Letters of Credence</b> — A formal agreement between two institutions '
            + 'or countries defining the principles and scope of their intended '
            + 'cooperation This is the book\'s own pairing, from Column A against Column '
            + 'B.' },
        { id: 't7', num: 7, label: 'Memorandum of Understanding', accept: 'm-g',
          why: '<b>Memorandum of Understanding</b> — An official joint statement issued by '
            + 'two or more governments after a meeting, summarizing agreed positions and '
            + 'commitments This is the book\'s own pairing, from Column A against Column '
            + 'B.' }]
    }
  ]
});
