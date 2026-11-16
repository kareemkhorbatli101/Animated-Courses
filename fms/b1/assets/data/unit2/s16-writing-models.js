/* Unit 2 §16 — Part 6 - Writing, the models.

   Built by tools/fms_build_unit.py from the student book. Every question,
   item and sample answer is the book's own text. Where the book gives no
   explanation the `why` is generated from its words - see RESIDUALS FM.
*/
FMS.page('u2-s16', {
  book: { source: 'FMS B1.1', ref: 'Unit 2 · Part 6 - Writing, the models', part: '6', section: '16',
          lesson: 'Part 6 - Writing, the models', title: 'Part 6 - Writing, the models' },
  objective: 'Work through Part 6 - Writing, the models of unit 2.',
  prev: 's15-reading-comprehension', prevLabel: 'Part 5 - Comprehension',
  next: 's17-writing-bios', nextLabel: 'Part 6 - Writing, bios',
  cards: [
    {
      id: 'c1',
      covers: ['Part 6'],
      ref: '6A',
      bookRef: 'Unit 2 · Part 6 · 6A',
      type: 'study',
      title: 'Model Writing – Coordination Documents',
      instruction: 'Press a paragraph button to hear it read.',
      html: '<div class="reading" style="font-size:16.5px;line-height:1.95">'
        + '<p>' + 'Document 1: Meeting Confirmation Email' + '</p>'
        + '<p>' + 'Word list: a) note b) session c) must' + '</p>'
        + '<p>' + 'Document 2: Rescheduling Request' + '</p>'
        + '<p>' + 'Word list: a) propose b) convenience c) scheduled' + '</p>'
        + '<p>' + 'Document 3: Post-Meeting Summary Excerpt' + '</p>'
        + '<p>' + 'Word list: a) delegation b) committed c) grants' + '</p>'
        + '<p>' + 'Dear Ms. Braun, I am writing to confirm the arrangements for the '
          + 'Morocco–Germany Infrastructure Cooperation Working Group '
          + '____________________ on Tuesday, 14 March 2025, at 10:00 a.m., in '
          + 'Conference Room B, Ministry of Foreign Affairs, Rabat. All participants '
          + '____________________ present a valid form of official identification at '
          + 'the security desk. Interpretation into German will be available for the '
          + 'technical session in the afternoon. I will send a final logistics '
          + '____________________ by Monday morning. Yours sincerely, Salma Benali, '
          + 'Protocol and Liaison Officer' + '</p>'
        + '<p>' + 'Dear Mr. Richter, I am writing to inform you that the working group '
          + 'session originally ____________________ for Tuesday at ten o\'clock must '
          + 'be rescheduled due to an urgent ministerial commitment on our side. We '
          + '____________________ the session to take place on Wednesday at the same '
          + 'time and in the same location. We apologize for any inconvenience and are '
          + 'grateful for your understanding. Please confirm at your earliest '
          + '____________________. Best regards, Salma Benali' + '</p>'
        + '<p>' + 'Post-Meeting Summary — Morocco–Germany Infrastructure Working Group Date: '
          + 'Tuesday, 14 March 2025 Participants: [see attached list] The session '
          + 'opened at 10:00 a.m. with formal statements from both ____________________ '
          + 'leads. The morning session addressed rail network modernization in '
          + 'priority regions. The afternoon session covered water infrastructure '
          + '____________________. At the conclusion of the session, both delegation '
          + 'leads signed an aide-mémoire establishing the joint technical monitoring '
          + 'committee. Both sides ____________________ to hold a second working group '
          + 'session within three months.' + '</p>'
        + '</div>',
      doneLabel: 'I have read this',
      playable: ['Document 1: Meeting Confirmation Email',
        'Word list: a) note b) session c) must',
        'Document 2: Rescheduling Request',
        'Word list: a) propose b) convenience c) scheduled'],
      visual: { spot: 'email-anatomy', wide: true }
    },
    {
      id: 'c2',
      covers: ['Part 6'],
      ref: '6C',
      bookRef: 'Unit 2 · Part 6 · 6C',
      type: 'dragmatch',
      title: 'Analyze the Parts of a Meeting Agenda',
      instruction: 'Match each section (1–5) with its correct function (A–E).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 4,
      say: true,
      chips: [{ id: 'm-a', label: 'a) Shows each topic in order with allocated time, so discussions stay '
          + 'structured and within schedule' },
        { id: 'm-b', label: 'b) Records what has been agreed, who is responsible for each action, and '
          + 'what the timeline is — ensuring accountability after the meeting' },
        { id: 'm-c', label: 'c) Identifies the meeting by name, date, time, and location so all '
          + 'participants have the same reference information' },
        { id: 'm-d', label: 'd) Provides an opportunity to raise topics not included in the main agenda '
          + 'before the session closes' },
        { id: 'm-e', label: 'e) Lists the names, titles, and institutions of all participants so each '
          + 'person knows who they are meeting' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'Header / Meeting Details', accept: 'm-a',
          why: '<b>Header / Meeting Details</b> — Shows each topic in order with allocated '
            + 'time, so discussions stay structured and within schedule This is the '
            + 'book\'s own pairing, from Column A against Column B.' },
        { id: 't2', num: 2, label: 'Participant List', accept: 'm-b',
          why: '<b>Participant List</b> — Records what has been agreed, who is responsible '
            + 'for each action, and what the timeline is — ensuring accountability after '
            + 'the meeting This is the book\'s own pairing, from Column A against Column '
            + 'B.' },
        { id: 't3', num: 3, label: 'Numbered Agenda Items with Timing', accept: 'm-c',
          why: '<b>Numbered Agenda Items with Timing</b> — Identifies the meeting by name, '
            + 'date, time, and location so all participants have the same reference '
            + 'information This is the book\'s own pairing, from Column A against Column '
            + 'B.' },
        { id: 't4', num: 4, label: 'Any Other Business', accept: 'm-d',
          why: '<b>Any Other Business</b> — Provides an opportunity to raise topics not '
            + 'included in the main agenda before the session closes This is the book\'s '
            + 'own pairing, from Column A against Column B.' },
        { id: 't5', num: 5, label: 'Next Steps / Action Points', accept: 'm-e',
          why: '<b>Next Steps / Action Points</b> — Lists the names, titles, and '
            + 'institutions of all participants so each person knows who they are meeting '
            + 'This is the book\'s own pairing, from Column A against Column B.' }]
    }
  ]
});
