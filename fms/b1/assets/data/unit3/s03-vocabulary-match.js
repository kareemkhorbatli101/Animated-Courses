/* Unit 3 §3 — Part 1 - Vocabulary.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u3-s03', {
  book: { source: 'FMS B1.1', ref: 'Unit 3 · Part 1 - Vocabulary', part: '1', section: '3',
          lesson: 'Part 1 - Vocabulary', title: 'Part 1 - Vocabulary' },
  objective: 'By the end of Part 1 you can use this unit\'s seven policy and programme '
        + 'terms correctly, present one of your ministry\'s programmes from a role '
        + 'card, and choose professional language for a sensitive topic rather than '
        + 'avoiding it.',
  prev: 's02-fluency', prevLabel: 'Warm Up - fluency',
  next: 's04-role-cards', nextLabel: 'Part 1 - Role cards',
  cards: [
    {
      id: 'c1',
      covers: ['Part 1'],
      ref: '1A',
      bookRef: 'Unit 3 · Part 1 · 1A',
      type: 'dragmatch',
      title: 'Match and Guess',
      instruction: 'Match each term (1–7) with its correct definition (A–G).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) A national program that extends state services, infrastructure, and '
          + 'economic opportunity to regions that have historically been underserved, '
          + 'often through temporary coordination bodies until permanent institutions '
          + 'are established' },
        { id: 'm-b', label: 'b) Non-governmental organizations, community groups, and associations that '
          + 'operate independently of the state and represent citizens\' interests' },
        { id: 'm-c', label: 'c) A formal agreement between two countries defining specific terms of '
          + 'cooperation in an area such as trade, security, or cultural exchange' },
        { id: 'm-d', label: 'd) International financial resources specifically allocated for building '
          + 'infrastructure, public services, and institutions in a partner country' },
        { id: 'm-e', label: 'e) A set of reduced tariffs and quotas granted by one group of states to '
          + 'another in order to support its exports and economic development' },
        { id: 'm-f', label: 'f) The process by which neighbouring countries align their trade, '
          + 'transport, and regulatory systems so that they function as a single '
          + 'economic area' },
        { id: 'm-g', label: 'g) A designated and internationally agreed route for the delivery of '
          + 'humanitarian assistance to communities affected by conflict or disaster' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Territorial Development', accept: 'm-a',
          why: '<b>Territorial Development</b> — A national program that extends state '
            + 'services, infrastructure, and economic opportunity to regions that have '
            + 'historically been underserved, often through temporary coordination bodies '
            + 'until permanent institutions are established This is the book\'s own '
            + 'pairing, from Column A against Column B.' },
        { id: 't2', num: 2, label: 'Development Fund', accept: 'm-b',
          why: '<b>Development Fund</b> — Non-governmental organizations, community '
            + 'groups, and associations that operate independently of the state and '
            + 'represent citizens\' interests This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't3', num: 3, label: 'Bilateral Agreement', accept: 'm-c',
          why: '<b>Bilateral Agreement</b> — A formal agreement between two countries '
            + 'defining specific terms of cooperation in an area such as trade, security, '
            + 'or cultural exchange This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't4', num: 4, label: 'Regional Integration', accept: 'm-d',
          why: '<b>Regional Integration</b> — International financial resources '
            + 'specifically allocated for building infrastructure, public services, and '
            + 'institutions in a partner country This is the book\'s own pairing, from '
            + 'Column A against Column B.' },
        { id: 't5', num: 5, label: 'Humanitarian Access', accept: 'm-e',
          why: '<b>Humanitarian Access</b> — A set of reduced tariffs and quotas granted '
            + 'by one group of states to another in order to support its exports and '
            + 'economic development This is the book\'s own pairing, from Column A '
            + 'against Column B.' },
        { id: 't6', num: 6, label: 'Trade Preference Scheme', accept: 'm-f',
          why: '<b>Trade Preference Scheme</b> — The process by which neighbouring '
            + 'countries align their trade, transport, and regulatory systems so that '
            + 'they function as a single economic area This is the book\'s own pairing, '
            + 'from Column A against Column B.' },
        { id: 't7', num: 7, label: 'Civil Society', accept: 'm-g',
          why: '<b>Civil Society</b> — A designated and internationally agreed route for '
            + 'the delivery of humanitarian assistance to communities affected by '
            + 'conflict or disaster This is the book\'s own pairing, from Column A '
            + 'against Column B.' }]
    }
  ]
});
