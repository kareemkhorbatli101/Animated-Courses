/* Unit 1 §7 — Listening (2).

   The longer listening is printed in full. The baseline book asks its
   questions without printing this script; this book prints every text it
   questions, on the screen that questions it. */
JRN.page('u1-s07', {
  book: { source: 'International Journalists B1', ref: 'Unit 1 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a new reporter says on a '
  + 'first day, follow three newsroom conversations closely enough to judge '
  + 'True, False or Not Given, and match each person to what they are doing '
  + 'at the moment.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 1 · 3D',
      visual: { spot: 'newsroom-plan' },
      type: 'study',
      title: 'A day in the life — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book’s own.',
      html: '<p>Nadia Osman describes a normal day, and then this week.</p>'
      + '<div class="script"><p><b>Nadia:</b> I’m Nadia Osman. I run the '
      + 'Nairobi bureau of Crosswire.</p><p><b>Nadia:</b> I usually arrive at '
      + 'half past six, before the first conference.</p><p><b>Nadia:</b> Most '
      + 'of a normal day goes on supporting my reporters.</p><p><b>Nadia:</b> '
      + 'This week I’m meeting more officials than usual, because of the '
      + 'election.</p><p><b>Nadia:</b> I’m also training three new reporters '
      + 'this month.</p><p><b>Nadia:</b> The part I like least is telling a '
      + 'reporter that their story will not run.</p></div>',
      playable: ['I’m Nadia Osman. I run the Nairobi bureau of Crosswire.',
      'I usually arrive at half past six, before the first conference.',
      'Most of a normal day goes on supporting my reporters.',
      'This week I’m meeting more officials than usual, because of the election.',
      'I’m also training three new reporters this month.',
      'The part I like least is telling a reporter that their story will not run.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 1 · 3D',
      type: 'quizset',
      title: 'A day in the life (longer listening)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'Nadia usually arrives at nine.',
          options: [{
            t: 'True',
            ok: false,
            why: 'Nadia says she usually arrives at half past six, which is earlier '
            + 'than nine.'
          },
            {
            t: 'False',
            ok: true,
            why: 'Nadia says she usually arrives at half past six, which is earlier '
            + 'than nine.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'Nadia says she usually arrives at half past six, which is earlier '
            + 'than nine.'
          }]
        },
      {
          q: 'She spends most of a normal day supporting her reporters.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She says most of a normal day goes on supporting her reporters. Note '
            + '‘a normal day’ — the present simple marks it as the routine, not '
            + 'as today.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says most of a normal day goes on supporting her reporters. Note '
            + '‘a normal day’ — the present simple marks it as the routine, not '
            + 'as today.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She says most of a normal day goes on supporting her reporters. Note '
            + '‘a normal day’ — the present simple marks it as the routine, not '
            + 'as today.'
          }]
        },
      {
          q: 'She is meeting more officials than usual this week.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She says she is meeting more officials than usual this week — the '
            + 'present continuous marks it as temporary, and ‘than usual’ says '
            + 'plainly that it is not the routine.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says she is meeting more officials than usual this week — the '
            + 'present continuous marks it as temporary, and ‘than usual’ says '
            + 'plainly that it is not the routine.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She says she is meeting more officials than usual this week — the '
            + 'present continuous marks it as temporary, and ‘than usual’ says '
            + 'plainly that it is not the routine.'
          }]
        },
      {
          q: 'She is training three new reporters this month.',
          options: [{
            t: 'True',
            ok: true,
            why: 'She says she is training three new reporters this month.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says she is training three new reporters this month.'
          },
            {
            t: 'Not Given',
            ok: false,
            why: 'She says she is training three new reporters this month.'
          }]
        },
      {
          q: 'She has run the bureau for five years.',
          options: [{
            t: 'True',
            ok: false,
            why: 'She says she runs the bureau, but how long she has run it is never '
            + 'mentioned. A statement can be entirely plausible and still be Not '
            + 'Given.'
          },
            {
            t: 'False',
            ok: false,
            why: 'She says she runs the bureau, but how long she has run it is never '
            + 'mentioned. A statement can be entirely plausible and still be Not '
            + 'Given.'
          },
            {
            t: 'Not Given',
            ok: true,
            why: 'She says she runs the bureau, but how long she has run it is never '
            + 'mentioned. A statement can be entirely plausible and still be Not '
            + 'Given.'
          }]
        }]
    },
    {
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 1 · 3E',
      type: 'dragmatch',
      title: 'Who is doing what now?',
      instruction: 'Look back at the three listenings. Match each person to what they are '
  + 'doing at the moment (present continuous). One option is extra.',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) is setting up the photo desk and training two stringers' },
      { id: 'm-b', label: 'b) is training three new reporters' },
      { id: 'm-c', label: 'c) is starting her first week and learning the filing system' },
      { id: 'm-d', label: 'd) is closing the bureau for the night (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Aisha', accept: 'm-c',
          why: '<b>Aisha</b> &mdash; is starting her first week and learning the filing '
              + 'system' },
      { id: 't2', num: 2, label: 'Daniel', accept: 'm-a',
          why: '<b>Daniel</b> &mdash; is setting up the photo desk and training two '
              + 'stringers' },
      { id: 't3', num: 3, label: 'Nadia', accept: 'm-b',
          why: '<b>Nadia</b> &mdash; is training three new reporters' }],
      after: 'The extra option — <b>d)</b> closing the bureau for the night — belongs '
        + 'to nobody here, and it could not: a wire bureau does not close. Unit 1’s '
        + 'Global Case Study in Part 8 is about exactly that.'
    }
  ]
});
