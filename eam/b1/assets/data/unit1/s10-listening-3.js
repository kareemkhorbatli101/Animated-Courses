/* ============================================================
   Unit 1 §10 — Part 3, Listening 3. Audio Track 1.4.

   Maher's morning briefing. Five people, and what each one is doing right now — so this is
   where Part 2's grammar stops being an exercise: every action in the briefing is in the
   present continuous, because every one of them is happening as he speaks.

   The matching card draws the five faces rather than printing the names. These are the same
   five the videos act, so a learner who has watched u01v10 recognises them, and a learner
   who has not meets them here first.
   ============================================================ */
EAM.page('u1-s10', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.4', part: '3', section: '10',
          lesson: 'Part 3 · Listening', title: 'A day at Cham Motors' },
  objective: 'Match five people to what each one is doing now, from a team briefing',
  video: 'u01v10',
  prev: 's09-listening-2', prevLabel: 'At reception',
  next: 's11-speaking-model', nextLabel: 'Talking about cars and work',
  cards: [

    /* ------------------------------------------------------------------- 1. the briefing */
    {
      id: 'c1', covers: ['Audio 1.4', 'Part 3'], ref: '3E', bookRef: 'Unit 1 · Audio 1.4',
      type: 'study',
      title: 'Listen: Maher briefs the team',
      instruction: '<b>Before you listen:</b> who works in a car service department? Name two '
        + 'jobs. Then press the lines and follow who is doing what.',
      visual: { diorama: 'workshop-floor',
        caption: 'The workshop at the start of the day. Maher is in the office with the job '
          + 'cards; the others are where the briefing puts them.' },
      html: '<div style="font-size:16.5px;line-height:2">'
        + '<p><b>Maher:</b> Good morning, everyone. Today we are busy.</p>'
        + '<p>Nabil <b>is servicing</b> Mr Aboud’s car. Tarek, you are new here, so today you '
        + 'watch and learn.</p>'
        + '<p>Lina <b>is finding</b> a fault on another car with the computer. Rana '
        + '<b>is talking</b> to customers at reception.</p>'
        + '<p>I <b>am checking</b> the job cards in the office.</p>'
        + '<p>We work as a team, and every day we look after our customers’ cars. Remember: we '
        + 'always keep the workshop clean and safe, and we always check our work.</p>'
        + '</div>'
        + '<p class="wc" style="margin-top:10px">Every action in bold is in the <b>present '
        + 'continuous</b> — they are all happening as he speaks. The last sentence changes to '
        + 'the <b>present simple</b>, because "we always keep the workshop clean" is a rule, '
        + 'not a thing being done this minute.</p>',
      doneLabel: 'I have listened and read',
      playable: [
        'Good morning, everyone. Today we are busy.',
        'Nabil is servicing Mr Aboud’s car.',
        'Tarek, you are new here, so today you watch and learn.',
        'Lina is finding a fault on another car with the computer.',
        'Rana is talking to customers at reception.',
        'I am checking the job cards in the office.',
        'We always keep the workshop clean and safe, and we always check our work.'
      ]
    },

    /* ------------------------------------------------------- 2. who is doing what, right now */
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
          why: '<b>Talking to customers at reception.</b> You heard her doing exactly this in '
            + '§9, with Mr Aboud.' }
      ],
      after: 'The action left over is <b>(c) cleaning the tools</b>. Nobody is doing it right '
        + 'now — but Maher’s last sentence says the team <i>always</i> keeps the workshop '
        + 'clean. That is the difference between the two tenses in one card: the four actions '
        + 'that are happening, and the rule that is always true.'
    }
  ]
});
