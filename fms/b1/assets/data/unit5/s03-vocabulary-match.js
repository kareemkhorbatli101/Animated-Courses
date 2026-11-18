/* Unit 5 §3 — Part 1 - Vocabulary.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u5-s03', {
  book: { source: 'FMS B1.1', ref: 'Unit 5 · Part 1 - Vocabulary', part: '1', section: '3',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s seven investment and '
        + 'facilitation terms correctly, read an investor\'s role card to identify '
        + 'their sector and what they need from the ministry, and match an investor '
        + 'to the ministry resources that can actually help them.',
  prev: 's02-fluency', prevLabel: 'Warm Up - fluency',
  next: 's04-role-cards', nextLabel: 'Part 1 - Role cards',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1A',
      bookRef: 'Unit 5 · Part 1 · 1A',
      type: 'dragmatch',
      title: 'Match and Understand',
      instruction: 'Match each term (1–7) with its correct definition (A–G).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Has special customs and tax benefits designed to attract foreign '
          + 'companies' },
        { id: 'm-b', label: 'b) A formal written document signed by an investor indicating serious '
          + 'intention to proceed with a business partnership or investment' },
        { id: 'm-c', label: 'c) A comprehensive investigation carried out by an investor before '
          + 'committing to a deal, covering financial, legal, and operational risks' },
        { id: 'm-d', label: 'd) A financial benefit granted by the government to encourage companies to '
          + 'invest in a specific sector or location' },
        { id: 'm-e', label: 'e) The combination of legal, political, economic, and regulatory '
          + 'conditions that shape how attractive a country is for foreign investment' },
        { id: 'm-f', label: 'f) A detailed analysis that assesses whether a proposed investment project '
          + 'is technically, financially, and legally viable' },
        { id: 'm-g', label: 'g) A formal business partnership where two or more companies create a '
          + 'shared enterprise, dividing ownership, responsibilities, and profits' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Free zone', accept: 'm-a',
          why: '<b>Free zone</b> — Has special customs and tax benefits designed to '
            + 'attract foreign companies This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't2', num: 2, label: 'Tax incentive', accept: 'm-b',
          why: '<b>Tax incentive</b> — A formal written document signed by an investor '
            + 'indicating serious intention to proceed with a business partnership or '
            + 'investment This is the book\'s own pairing, from Column A against Column '
            + 'B.' },
        { id: 't3', num: 3, label: 'Feasibility study', accept: 'm-c',
          why: '<b>Feasibility study</b> — A comprehensive investigation carried out by an '
            + 'investor before committing to a deal, covering financial, legal, and '
            + 'operational risks This is the book\'s own pairing, from Column A against '
            + 'Column B.' },
        { id: 't4', num: 4, label: 'Letter of intent', accept: 'm-d',
          why: '<b>Letter of intent</b> — A financial benefit granted by the government to '
            + 'encourage companies to invest in a specific sector or location This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't5', num: 5, label: 'Investment climate', accept: 'm-e',
          why: '<b>Investment climate</b> — The combination of legal, political, economic, '
            + 'and regulatory conditions that shape how attractive a country is for '
            + 'foreign investment This is the book\'s own pairing, from Column A against '
            + 'Column B.' },
        { id: 't6', num: 6, label: 'Due diligence', accept: 'm-f',
          why: '<b>Due diligence</b> — A detailed analysis that assesses whether a '
            + 'proposed investment project is technically, financially, and legally '
            + 'viable This is the book\'s own pairing, from Column A against Column B.' },
        { id: 't7', num: 7, label: 'Joint venture', accept: 'm-g',
          why: '<b>Joint venture</b> — A formal business partnership where two or more '
            + 'companies create a shared enterprise, dividing ownership, '
            + 'responsibilities, and profits This is the book\'s own pairing, from Column '
            + 'A against Column B.' }]
    }
  ]
});
