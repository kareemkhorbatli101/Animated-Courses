/* Unit 2 §3 — Part 1 - Vocabulary.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s03', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 1 - Vocabulary', part: '1', section: '3',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'Work through Part 1 - Vocabulary of unit 2.',
  prev: 's02-fluency', prevLabel: 'Warm Up - fluency',
  next: 's04-role-cards', nextLabel: 'Part 1 - Role cards',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1A',
      bookRef: 'Unit 2 · Part 1 · 1A',
      type: 'dragmatch',
      title: 'Match and Guess',
      instruction: 'Match each term (1–7) with its correct definition (A–G).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) A structured list of topics to be discussed at a meeting, distributed '
          + 'in advance to all participants' },
        { id: 'm-b', label: 'b) A short diplomatic note summarizing a verbal communication or '
          + 'conversation for the record' },
        { id: 'm-c', label: 'c) A committee of specialists from two or more institutions meeting to '
          + 'address a specific area of cooperation' },
        { id: 'm-d', label: 'd) An official joint statement issued by two or more parties after a '
          + 'meeting or diplomatic event' },
        { id: 'm-e', label: 'e) The most senior official leading a visiting delegation to a meeting or '
          + 'event' },
        { id: 'm-f', label: 'f) A background document prepared for senior officials before a meeting, '
          + 'covering participants, agenda, and key issues' },
        { id: 'm-g', label: 'g) A formal agreement between two parties outlining the terms of their '
          + 'intended cooperation' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Agenda', accept: 'm-a',
          why: '<b>Agenda</b> — A structured list of topics to be discussed at a meeting, '
            + 'distributed in advance to all participants This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't2', num: 2, label: 'Communiqué', accept: 'm-b',
          why: '<b>Communiqué</b> — A short diplomatic note summarizing a verbal '
            + 'communication or conversation for the record This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't3', num: 3, label: 'Memorandum of Understanding', accept: 'm-c',
          why: '<b>Memorandum of Understanding</b> — A committee of specialists from two '
            + 'or more institutions meeting to address a specific area of cooperation '
            + 'This is the book\'s own pairing, from Column A against Column B.' },
        { id: 't4', num: 4, label: 'Working Group', accept: 'm-d',
          why: '<b>Working Group</b> — An official joint statement issued by two or more '
            + 'parties after a meeting or diplomatic event This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't5', num: 5, label: 'Protocol Brief', accept: 'm-e',
          why: '<b>Protocol Brief</b> — The most senior official leading a visiting '
            + 'delegation to a meeting or event This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't6', num: 6, label: 'Aide-Mémoire', accept: 'm-f',
          why: '<b>Aide-Mémoire</b> — A background document prepared for senior officials '
            + 'before a meeting, covering participants, agenda, and key issues This is '
            + 'the book\'s own pairing, from Column A against Column B.' },
        { id: 't7', num: 7, label: 'Delegation Lead', accept: 'm-g',
          why: '<b>Delegation Lead</b> — A formal agreement between two parties outlining '
            + 'the terms of their intended cooperation This is the book\'s own pairing, '
            + 'from Column A against Column B.' }]
    }
  ]
});
