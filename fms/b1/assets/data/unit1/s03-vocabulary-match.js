/* Unit 1 §3 — Part 1 - Vocabulary.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u1-s03', {
  book: { source: 'FMS B1.1', ref: 'Unit 1 · Part 1 - Vocabulary', part: '1', section: '3',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s seven reception and protocol '
        + 'terms correctly, read a visitor\'s role card to work out which department '
        + 'should receive them and what they need before they proceed, and complete a '
        + 'professional sentence with the right term.',
  prev: 's02-fluency', prevLabel: 'Warm Up - fluency',
  next: 's04-role-cards', nextLabel: 'Part 1 - Role cards',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1A',
      bookRef: 'Unit 1 · Part 1 · 1A',
      type: 'dragmatch',
      title: 'Match and Guess',
      instruction: 'Match each term (1–7) with its correct function (A–G).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Handles visa applications, passports, and assistance to foreign '
          + 'nationals and citizens living abroad' },
        { id: 'm-b', label: 'b) Promotes cultural exchange programs and represents the country\'s '
          + 'culture internationally' },
        { id: 'm-c', label: 'c) Analyzes international political developments and advises senior '
          + 'officials' },
        { id: 'm-d', label: 'd) Manages official visits, ceremonies, and diplomatic etiquette' },
        { id: 'm-e', label: 'e) Handles international treaties, agreements, and legal frameworks' },
        { id: 'm-f', label: 'f) Manages media accreditation, press releases, and the ministry\'s public '
          + 'communication' },
        { id: 'm-g', label: 'g) Supports trade, investment diplomacy, and economic partnership '
          + 'negotiations' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Consular Section', accept: 'm-a',
          why: '<b>Consular Section</b> — Handles visa applications, passports, and '
            + 'assistance to foreign nationals and citizens living abroad This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't2', num: 2, label: 'Protocol Department', accept: 'm-b',
          why: '<b>Protocol Department</b> — Promotes cultural exchange programs and '
            + 'represents the country\'s culture internationally This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't3', num: 3, label: 'Political Affairs Directorate', accept: 'm-c',
          why: '<b>Political Affairs Directorate</b> — Analyzes international political '
            + 'developments and advises senior officials This is the book\'s own pairing, '
            + 'from Column A against Column B.' },
        { id: 't4', num: 4, label: 'Press and Information Office', accept: 'm-d',
          why: '<b>Press and Information Office</b> — Manages official visits, ceremonies, '
            + 'and diplomatic etiquette This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't5', num: 5, label: 'Legal Directorate', accept: 'm-e',
          why: '<b>Legal Directorate</b> — Handles international treaties, agreements, and '
            + 'legal frameworks This is the book\'s own pairing, from Column A against '
            + 'Column B.' },
        { id: 't6', num: 6, label: 'Cultural Relations Division', accept: 'm-f',
          why: '<b>Cultural Relations Division</b> — Manages media accreditation, press '
            + 'releases, and the ministry\'s public communication This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't7', num: 7, label: 'Economic Affairs Office', accept: 'm-g',
          why: '<b>Economic Affairs Office</b> — Supports trade, investment diplomacy, and '
            + 'economic partnership negotiations This is the book\'s own pairing, from '
            + 'Column A against Column B.' }]
    }
  ]
});
