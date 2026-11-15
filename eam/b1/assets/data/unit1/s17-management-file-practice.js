/* ============================================================
   Unit 1 §17 — Part 7, the Management File: practice.

   THE FIRST CARD IS AN ORDERING TASK, AND ITS TITLE NEVER SAYS SO. The book heads it
   "Controlled Practice — First-Day Checklist" and puts the whole point in the instruction:
   "Put a manager's first-day steps in order. Number them 1-5." A rule that read titles typed
   it as a short answer, which would have thrown the exercise away. The register now reads
   the instruction too.

   The book also notes that the order "may vary a little", and that is honest: welcoming
   before introducing is not negotiable, but showing the workshop before or after the safety
   rules is a judgement. The card scores adjacent pairs rather than exact positions, so a
   defensible order is not marked wrong.
   ============================================================ */
EAM.page('u1-s17', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 7 · Practice', part: '7', section: '17',
          lesson: 'Part 7 · Management File', title: 'The first day, in order' },
  objective: 'Put a manager’s first-day steps in a sensible order, and brief an apprentice',
  video: 'u01v17',
  prev: 's16-management-file-dialogue', prevLabel: 'What a manager says',
  next: 's18-global-case-study', nextLabel: 'A small garage grows',
  cards: [

    /* ----------------------------------------------------------- 1. the five steps, in order */
    {
      id: 'c1', covers: ['Part 7'], ref: '7C', bookRef: 'Unit 1 · Part 7C · Controlled practice',
      type: 'order',
      title: 'Put the first-day steps in order',
      instruction: 'Five things a manager does on a new worker’s first morning. Put them in '
        + 'the order you would do them. <b>Step 1 is done for you.</b>',
      poolLabel: 'Click a step, then click the slot it belongs in — or drag it there.',
      visual: { art: 'first-day', wide: true,
        caption: 'One sensible order. The book says it may vary a little, and it is right — '
          + 'but not every order is defensible.' },
      say: { key: 'course' },
      blocks: [
        { id: 'b3', text: 'Show the new worker the workshop.' },
        { id: 'b5', text: 'Give the first small task.' },
        { id: 'b1', text: 'Say welcome to the new worker.' },
        { id: 'b4', text: 'Give the safety rules.' },
        { id: 'b2', text: 'Introduce the team.' }
      ],
      positions: ['b1', 'b2', 'b3', 'b4', 'b5'],
      whyTitle: 'Why this order, and where it could differ',
      after: 'The book says the order "may vary a little", and that is true of the middle. '
        + 'Showing the workshop before introducing the team is perfectly reasonable. What is '
        + 'not reasonable is putting the <b>first task</b> before the <b>safety rules</b>: '
        + 'that is the one swap that could hurt somebody, and it is why the last two steps are '
        + 'in the order they are.'
    },

    /* ----------------------------------------------------------------- 2. brief the apprentice */
    {
      id: 'c2', covers: ['Part 7'], ref: '7D', bookRef: 'Unit 1 · Part 7D · Role play',
      type: 'roleplay',
      title: 'Role play — briefing the apprentice',
      instruction: 'The book does this in pairs. On your own: <b>choose your role</b> and press '
        + 'play — the scene acts the other part and goes quiet for yours. Then swap.',
      scene: 'u1-first-day',
      modelScene: { id: 'u1-brief-model',
        label: 'See a finished briefing',
        note: 'Nabil briefing Tarek, all the way through, with the three safety rules and the '
          + 'offer of help. Try yours first.' },
      roles: [
        { who: 'A', label: 'Card A — you are Nabil, the foreman',
          body: 'Welcome Tarek. Give him three safety rules. Say what he will do today. Offer '
            + 'help if he is not sure.' },
        { who: 'B', label: 'Card B — you are Tarek, the apprentice',
          body: 'Greet Nabil. Ask where the tools are. Repeat the safety rules back in your '
            + 'own words, so he knows you understood.' }
      ],
      table: {
        head: ['Card B says', 'Your answer needs'],
        rows: [
          ['Good morning. I am Tarek, the new apprentice.', 'a welcome, and your own name'],
          ['Where are the tools?', 'a place — on the board, in the cabinet, by the bay'],
          ['What do I do today?', 'what he will do, in the present: "Today you watch and…"'],
          ['So I must wear glasses and gloves — is that right?',
           'confirm, and add the third rule']
        ]
      },
      remember: ['Welcome to the team.', 'Always wear your safety glasses and gloves.',
                 'Keep your area clean.', 'Ask me before you use a machine.',
                 'Today, watch me and learn.', 'If you are not sure, ask.'],
      minWords: 35,
      notePlaceholder: 'Plan: 1) welcome  2) three safety rules  3) today’s job  4) offer help',
      coach: {
        title: 'Check your briefing before you run it',
        target: 'imperatives for rules, and the present for what happens today',
        minWords: 35,
        taught: [
          'Audio 1.5: how Maher and Nabil actually did this.',
          'A safety rule is an imperative: Always wear… / Never work under…',
          'The four purposes of §16: greet, show around, give a rule, offer help.'
        ],
        task: 'Brief a new apprentice on his first morning: welcome him, give three safety '
          + 'rules, say what he will do today, and offer help.',
        parts: ['Welcome him by name.', 'Three safety rules, as imperatives.',
                'What he will do today.', 'An offer of help.'],
        example: [
          'Welcome to the team, Tarek. I am Nabil, and we will work together this week.',
          'Always wear your safety glasses and gloves in the workshop. Keep your area clean. '
            + 'And never use a machine before you ask me.',
          'Today, you watch me and learn. Tomorrow you can help me with an oil change.',
          'If you are not sure about anything, ask. Nobody here minds a question.'
        ],
        exampleNote: 'Then swap roles and take the apprentice’s card.',
        criteria: [
          { t: 'You welcome him before giving any rule.' },
          { t: 'Three safety rules, each an imperative.', auto: 'mentions',
            keys: ['always', 'never', 'keep', 'wear', 'ask', 'don’t', 'do not'], need: 3,
            fail: 'Say the rules as rules: "Always wear…", "Never work under…", "Keep…".' },
          { t: 'You say what he will do today, not only what he must not do.' },
          { t: 'You offer help if he is unsure.', auto: 'mentions',
            keys: ['ask', 'help', 'not sure', 'any question'], need: 1,
            fail: 'Add the line that matters most: "If you are not sure, ask me."' }
        ]
      },
      stretch: 'The apprentice wants to work under a car alone on his first day. Say no, and '
        + 'explain why — politely, and without making him feel foolish for asking.'
    },

    /* ----------------------------------------------------------- 3. the supervisory writing */
    {
      id: 'c3', covers: ['Part 7'], ref: '7E', bookRef: 'Unit 1 · Part 7E · Supervisory writing',
      type: 'writer',
      title: 'Write a welcome note (50–80 words)',
      instruction: 'You are <b>Maher</b>. Write a short welcome note to Tarek, with his plan '
        + 'for the first week.',
      visual: { spot: 'manager',
        caption: 'A manager’s note does two jobs at once: it welcomes, and it tells somebody '
          + 'what will happen.' },
      paras: [
        { label: 'Welcome', purpose: 'Warm, and short. One or two sentences.' },
        { label: 'The plan for the week',
          purpose: 'What he will do — watching, learning, a first small task.' },
        { label: 'One safety rule, and the offer of help',
          purpose: 'The rule that matters most, and "ask if you are not sure".' }
      ],
      minWords: 50,
      /* THE FOUR-STEP SCAFFOLD. A writing task is not one empty box: it is ask
         for ideas, plan, write, then ask for a marking. The two AI steps carry
         their own prompts and their own refusals - the ideas step may return only
         topics, never sentences, so a learner cannot have the piece written for
         them while believing they were helped to start it. */
      scaffold: {
        task: 'A welcome note (50-80 words) from the manager to a new apprentice, with the plan for his first week, one safety rule, and an offer of help.',
        words: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay', 'job card', 'mechanic', 'service', 'workshop'],
        must: ['a greeting and the writer’s name at the end', 'what he will do this week', 'at least one safety rule', 'an offer of help if he is unsure'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      stems: ['Dear Tarek,', 'Welcome to Cham Motors.', 'This week you will…',
              'On Thursday you can…', 'Always remember to…', 'If you are not sure,…',
              'Maher'],
      model: 'Dear Tarek,\n\nWelcome to Cham Motors. We are glad you have joined us.\n\nThis '
        + 'week you will work with Nabil. You will watch him service two or three cars, and '
        + 'you will learn where everything is kept. On Thursday you can help him with an oil '
        + 'change.\n\nAlways wear your safety glasses and gloves in the workshop. If you are '
        + 'not sure about anything, ask Nabil or me.\n\nMaher',
      modelNote: 'One way of doing it. Notice that the safety rule comes near the end, after '
        + 'the welcome — a note that opens with a rule reads as a warning, not a welcome.',
      checklist: ['a warm welcome?', 'a clear first-week plan?', 'one safety rule?',
                  '50–80 words?'],
      aiCheck: {
        task: 'A welcome note (50-80 words) from the manager to a new apprentice, with the '
          + 'plan for his first week, one safety rule, and an offer of help.',
        grammar: 'will for the plan; imperatives for the safety rule',
        reader: 'a seventeen-year-old starting his first job',
        must: ['a greeting and the writer’s name at the end',
               'what he will do this week',
               'at least one safety rule',
               'an offer of help if he is unsure']
      },
      coach: {
        title: 'Check your note',
        target: 'welcoming, planning and instructing in one short note',
        minWords: 50,
        taught: ['The four purposes of §16.',
                 'Audio 1.5: what Maher and Nabil said on the day.'],
        task: 'Write a welcome note to Tarek with his plan for the first week.',
        parts: ['Welcome.', 'The plan for the week.', 'One safety rule and an offer of help.'],
        example: ['See the model on the card — 78 words.'],
        criteria: [
          { t: 'Opens with a welcome, not with a rule.' },
          { t: 'Says what he will do this week.', auto: 'mentions',
            keys: ['this week', 'you will', 'on monday', 'on thursday', 'first'], need: 1,
            fail: 'Say what the week holds — "This week you will work with Nabil."' },
          { t: 'Contains at least one safety rule.', auto: 'mentions',
            keys: ['always', 'never', 'wear', 'safety', 'glasses', 'gloves'], need: 1,
            fail: 'Add one rule. On a first day, the glasses-and-gloves rule is the one.' },
          { t: 'Offers help.', auto: 'mentions',
            keys: ['ask', 'not sure', 'any question', 'help'], need: 1,
            fail: 'Add "If you are not sure, ask".' },
          { t: 'Between 50 and 80 words.' }
        ]
      }
    }
  ]
});
