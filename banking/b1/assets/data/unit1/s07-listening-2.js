/* Unit 1 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s07', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a new colleague says on a '
  + 'first day, follow three workplace conversations closely enough to '
  + 'judge True, False or Not Given, and match each person to what they '
  + 'are doing at the moment.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 1 · 3D',
      visual: { spot: 'branch-plan' },
      type: 'quizset',
      title: 'A day in the life (longer listening)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Marta usually arrives at 9 a.m.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Marta says she usually arrives earlier than that.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Marta says she usually arrives earlier than that.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Marta says she usually arrives earlier than that.'
          }]
        },
      {
          q: 'She spends most of a normal day supporting her staff.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She describes supporting her staff as what most of a normal day goes on.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She describes supporting her staff as what most of a normal day goes on.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She describes supporting her staff as what most of a normal day goes on.'
          }]
        },
      {
          q: 'She is meeting more clients than usual this week.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She says she is meeting more clients than usual this week - the '
            + 'present continuous marks it as temporary.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says she is meeting more clients than usual this week - the '
            + 'present continuous marks it as temporary.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She says she is meeting more clients than usual this week - the '
            + 'present continuous marks it as temporary.'
          }]
        },
      {
          q: 'She is training three new tellers this week.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She says she is training three new tellers this week.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says she is training three new tellers this week.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She says she is training three new tellers this week.'
          }]
        },
      {
          q: 'She has been the manager for five years.',
          options: [{
            t: 'True',
            ok: false,
            why: 'How long she has been manager is never mentioned.'
          },
            {
            t: 'False',
            ok: false,
            why: 'How long she has been manager is never mentioned.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'How long she has been manager is never mentioned.'
          }]
        }]
    },
    {
      id: 'c2',
      ref: '3E',
      bookRef: 'Unit 1 · 3E',
      type: 'dragmatch',
      title: 'Who is doing what now?',
      instruction: 'Look back at the three listenings. Match each person to what they are '
  + 'doing at the moment (present continuous). One option is extra.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) is installing a firewall and setting up terminals' },
      { id: 'm-b', label: 'b) is training three new tellers' },
      { id: 'm-c', label: 'c) is starting her first day and learning the system' },
      { id: 'm-d', label: 'd) is closing the branch for the day (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Ana', accept: 'm-c',
          why: '<b>Ana</b> &mdash; is starting her first day and learning the system' },
      { id: 't2', num: 2, label: 'Petra', accept: 'm-a',
          why: '<b>Petra</b> &mdash; is installing a firewall and setting up terminals' },
      { id: 't3', num: 3, label: 'Marta', accept: 'm-b',
          why: '<b>Marta</b> &mdash; is training three new tellers' }]
    }
  ]
});
