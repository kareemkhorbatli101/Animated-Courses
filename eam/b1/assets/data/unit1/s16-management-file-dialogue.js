/* ============================================================
   Unit 1 §16 — Part 7, the Management File: what a manager says.

   Part 7 is the book's supervisory strand — the same situations seen from the side of the
   person responsible. Here a manager welcomes an apprentice on his first day.

   The Phrase Bank is a MATCHING task, not a bank of phrases to try: the book prints Column A
   and Column B and says "Match what a manager says with its purpose. One purpose is not
   needed." Its key says `pairs`. An earlier version of the register typed it as a gap-fill
   because its quoted sentences are long, which is why the book's own key kind now outranks
   every heuristic about length.
   ============================================================ */
EAM.page('u1-s16', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 7 · Management File', part: '7', section: '16',
          lesson: 'Part 7 · Management File', title: 'What a manager says, and why' },
  objective: 'Recognise the purpose behind what a manager says, and follow a first-day briefing',
  video: 'u01v16',
  prev: 's15-writing-model', prevLabel: 'Four pieces to write',
  next: 's17-management-file-practice', nextLabel: 'The first day, in order',
  cards: [

    /* ------------------------------------------------------ 1. what the manager is DOING */
    {
      id: 'c1', covers: ['Part 7'], ref: '7A', bookRef: 'Unit 1 · Part 7A · Phrase bank',
      type: 'dragmatch',
      title: 'What is the manager doing when he says this?',
      instruction: 'Four things a manager says on an apprentice’s first day. Match each one '
        + 'with its <b>purpose</b> — what he is doing by saying it. <b>One purpose is not '
        + 'needed.</b>',
      poolLabel: 'Click a purpose, then click the line it belongs to.',
      cols: 2,
      say: true,
      chips: [
        { id: 'p-a', label: 'a) giving a safety rule' },
        { id: 'p-b', label: 'b) offering help and support' },
        { id: 'p-c', label: 'c) greeting a new worker' },
        { id: 'p-d', label: 'd) talking about the price' },
        { id: 'p-e', label: 'e) showing someone around' }
      ],
      whyTitle: 'Four things said, and what each one does',
      targets: [
        { id: 'q1', num: 1, label: '“Welcome to the team.”', accept: 'p-c',
          why: '<b>Greeting a new worker.</b> Four words, and they do a job: they tell Tarek he '
            + 'is in, before anything else is said. A first day that starts with instructions '
            + 'and no welcome starts badly.' },
        { id: 'q2', num: 2, label: '“Let me show you the workshop.”', accept: 'p-e',
          why: '<b>Showing someone around.</b> "Let me…" is an offer, not an order — the '
            + 'manager is doing something FOR him. Compare it with line 3, which is an order '
            + 'and is meant to be.' },
        { id: 'q3', num: 3, label: '“Always wear your safety glasses.”', accept: 'p-a',
          why: '<b>Giving a safety rule.</b> Note the form: <i>always</i> + the bare verb. A '
            + 'safety rule is one of the few things a manager says as a flat imperative, '
            + 'because it is not a request and it is not negotiable.' },
        { id: 'q4', num: 4, label: '“Ask me if you are not sure.”', accept: 'p-b',
          why: '<b>Offering help and support.</b> The most important line of the four, and the '
            + 'easiest to leave out. It tells a new worker that not knowing is allowed — which '
            + 'is what makes it safe for him to ask instead of guessing under a car.' }
      ],
      after: 'The purpose left over is <b>(d) talking about the price</b>. A manager does that '
        + 'with customers, not with a new apprentice on his first morning.'
    },

    /* ------------------------------------------------------------ 2. the briefing itself */
    {
      id: 'c2', covers: ['Part 7'], ref: '7B·text', bookRef: 'Unit 1 · Audio 1.5',
      type: 'study',
      title: 'Listen: Tarek’s first morning',
      instruction: '<b>Before you read:</b> what does a manager say to a new apprentice on the '
        + 'first day? Then read, and notice how many of the four purposes above you can hear.',
      visual: { spot: 'apprentice',
        caption: 'Maher and Nabil brief Tarek. Three people, and three different jobs being '
          + 'done in one short conversation.' },
      html: '<div class="convo" style="font-size:16.5px;line-height:2">'
        + '<p><b>Maher:</b> Good morning, Tarek. Welcome to Cham Motors.</p>'
        + '<p><b>Nabil:</b> Nice to meet you. Have you worked in a garage before?</p>'
        + '<p><b>Tarek:</b> A little. I helped my uncle.</p>'
        + '<p><b>Maher:</b> Good. This week, you watch Nabil and learn.</p>'
        + '<p><b>Nabil:</b> Always wear your safety glasses and gloves in the workshop, and '
        + 'keep your area clean.</p>'
        + '<p><b>Tarek:</b> Yes, Ustaz.</p>'
        + '<p><b>Maher:</b> If you are not sure, ask us. We work as a team here.</p>'
        + '<p><b>Tarek:</b> Thank you. I am happy to be here.</p>'
        + '</div>',
      doneLabel: 'I have listened and read',
      playable: [
        'Good morning, Tarek. Welcome to Cham Motors.',
        'Nice to meet you. Have you worked in a garage before?',
        'This week, you watch Nabil and learn.',
        'Always wear your safety glasses and gloves in the workshop, and keep your area clean.',
        'If you are not sure, ask us. We work as a team here.'
      ]
    },

    /* --------------------------------------------------------------- 3. three questions */
    {
      id: 'c3', covers: ['Part 7'], ref: '7B', bookRef: 'Unit 1 · Audio 1.5 · questions',
      type: 'shortanswer',
      title: 'Answer the three questions',
      instruction: 'A few words each. The first is done for you: <i>Where does Tarek start '
        + 'work? — At Cham Motors.</i>',
      items: [
        {
          q: '1. What is Tarek doing this week?',
          accept: ['watching nabil and learning', 'watching and learning',
                   'he is watching nabil and learning', 'watching nabil',
                   'watching and learning from nabil'],
          keys: ['watch', 'learn'], need: 2,
          placeholder: 'two things',
          evidence: 'Maher’s second line — "This week, you watch Nabil and learn."'
        },
        {
          q: '2. What safety rule does Nabil give?',
          accept: ['always wear safety glasses and gloves',
                   'wear safety glasses and gloves',
                   'always wear your safety glasses and gloves',
                   'wear safety glasses and gloves and keep your area clean'],
          keys: ['glasses', 'gloves'], need: 2,
          placeholder: 'what to wear',
          evidence: 'Nabil names two things to wear and one thing to do.'
        },
        {
          q: '3. What should Tarek do if he is not sure?',
          accept: ['ask', 'ask us', 'ask the team', 'ask them', 'ask maher and nabil',
                   'ask for help'],
          keys: ['ask'], need: 1,
          placeholder: 'one word is enough',
          evidence: 'Maher’s last line — and it is the line that matters most of the three.'
        }
      ],
      whyTitle: 'What the briefing actually did',
      after: 'Four of the five purposes from the first card are in this conversation: a '
        + 'greeting, showing him around (next week’s job), a safety rule, and an offer of '
        + 'help. The fifth — the price — belongs to a different conversation entirely.'
    }
  ]
});
