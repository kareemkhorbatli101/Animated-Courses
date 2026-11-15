/* ============================================================
   Unit 1 §10 — Part 3, Listening 3. Audio Track 1.4.

   Maher's morning briefing, with all four of the people he is talking about on the stage. This
   is where Part 2's grammar stops being an exercise: every action in the briefing is in the
   present continuous because every one of them is happening as he speaks, and the learner can
   SEE the four of them standing there while he says so.

   The matching card below uses the same five faces, so the person in the drawing is the person
   on the stage — the whole reason identity is fixed in art-eam-cast.js rather than per card.
   ============================================================ */
EAM.page('u1-s10', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.4', part: '3', section: '10',
          lesson: 'Part 3 · Listening', title: 'A day at Cham Motors' },
  objective: 'Match five people to what each one is doing now, from a team briefing',
  video: 'u01v10',
  prev: 's09-listening-2', prevLabel: 'At reception',
  next: 's11-speaking-model', nextLabel: 'Talking about cars and work',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.4', 'Part 3'], ref: '3E',
      bookRef: 'Unit 1 · Audio 1.4', type: 'scene',
      title: 'Listen: Maher briefs the team',
      instruction: '<b>Before you listen:</b> who works in a car service department? Name two '
        + 'jobs. Then watch — everybody he mentions is standing there.',
      scene: 'u1-briefing',
      after: 'Every action in the briefing is in the <b>present continuous</b> — they are all '
        + 'happening as he speaks. His last sentence changes to the <b>present simple</b>, '
        + 'because "we always keep the workshop clean" is a rule, not a thing being done this '
        + 'minute.'
    },

    {
      id: 'c2', covers: ['Audio 1.4', 'Part 3'], ref: '3F',
      bookRef: 'Unit 1 · Audio 1.4 · match', type: 'dragmatch',
      title: 'Who is doing what, right now?',
      instruction: 'Drag each action onto the person doing it. <b>One action is not needed.</b> '
        + 'Maher is done for you.',
      poolLabel: 'Click an action, then click the person. Double-click a person to take their '
        + 'action off again.',
      cols: 4,
      say: true,
      worked: {
        q: '0. Maher',
        a: 'checking the job cards',
        why: 'Done for you — he says it himself, last of the five. Notice that he is the only '
          + 'one who describes his own work; everybody else is described by him.'
      },
      chips: [
        { id: 'a-a', label: 'a) talking to customers at reception' },
        { id: 'a-b', label: 'b) watching and learning' },
        { id: 'a-c', label: 'c) cleaning the tools' },
        { id: 'a-d', label: 'd) servicing a car' },
        { id: 'a-e', label: 'e) finding a fault with the computer' }
      ],
      whyTitle: 'Five people, and how the briefing names each one',
      targets: [
        { id: 'p-nabil', num: 1, label: 'Nabil', art: 'nabil', accept: 'a-d',
          why: '<b>Servicing a car</b> — Mr Aboud’s car, the one booked in at reception in §9. '
            + 'The three screens of Part 3 follow one car through the department, which is why '
            + 'they are in this order.' },
        { id: 'p-tarek', num: 2, label: 'Tarek', art: 'tarek', accept: 'a-b',
          why: '<b>Watching and learning.</b> Maher does not say "Tarek is watching" — he says '
            + '"you watch and learn", speaking to him directly. You had to turn an instruction '
            + 'into a description, which is the hardest of the four.' },
        { id: 'p-lina', num: 3, label: 'Lina', art: 'lina', accept: 'a-e',
          why: '<b>Finding a fault with the computer.</b> This is the diagnostic technician’s '
            + 'job, and the line that tells her apart from Nabil: he repairs what is known to '
            + 'be wrong, she works out WHAT is wrong.' },
        { id: 'p-rana', num: 4, label: 'Rana', art: 'rana', accept: 'a-a',
          why: '<b>Talking to customers at reception.</b> You watched her doing exactly this '
            + 'in §9, with Mr Aboud.' }
      ],
      after: 'The action left over is <b>(c) cleaning the tools</b>. Nobody is doing it right '
        + 'now — but Maher’s last sentence says the team <i>always</i> keeps the workshop '
        + 'clean. That is the difference between the two tenses in one card: the four actions '
        + 'that are happening, and the rule that is always true.'
    }
  ]
});
