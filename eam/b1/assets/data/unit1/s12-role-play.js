/* ============================================================
   Unit 1 §12 — Part 4, Role play and the mini-presentation.

   TWO EXERCISES, AND THIS SCREEN'S TITLE WAS WRONG UNTIL NOW. The plan mapped Part 4 to its
   two screens by POSITION — the first two exercises to §11, the next two to §12 — and unit 1
   has three Speaking exercises where every other unit has four. So everything slid by one:
   the screen called "Role play" held the mini-presentation, and the role play itself sat on
   the screen called "Speaking, model". Nothing was lost and nothing was duplicated; one
   screen's title simply lied. The map now assigns the part by what each exercise IS.

   Both cards state their criteria BEFORE the learner speaks. A performance judged against
   criteria revealed afterwards teaches nothing about how to prepare for the next one.
   ============================================================ */
EAM.page('u1-s12', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 4 · Role play', part: '4', section: '12',
          lesson: 'Part 4 · Speaking', title: 'Role play, and your own talk' },
  objective: 'Book a car in at reception, and give a one-minute talk about a car or a job',
  video: 'u01v12',
  prev: 's11-speaking-model', prevLabel: 'Talking about cars and work',
  next: 's13-reading-text', nextLabel: 'What is a service department?',
  cards: [

    /* ------------------------------------------------------------------- 1. the role play */
    {
      id: 'c1', covers: ['Part 4'], ref: '4B', bookRef: 'Unit 1 · Part 4 · Cards A and B',
      type: 'roleplay',
      title: 'Card A and Card B — booking a car in',
      instruction: 'The book does this in pairs. On your own: take <b>Card A</b> first and '
        + 'speak the advisor’s lines aloud — the customer’s four lines are written out, so you '
        + 'always know what comes next. Then swap and take Card B.',
      scene: 'reception-desk',
      roles: [
        { who: 'A', label: 'Card A — you are Rana, the service advisor',
          body: 'Greet the customer. Ask what they need and what the problem is. Say you will '
            + 'write a job card. Say when the car will be ready.' },
        { who: 'B', label: 'Card B — you are Mr Aboud, the customer',
          body: 'Greet the advisor. Say your car needs a service. Say what the problem is. Ask '
            + 'when it will be ready.' }
      ],
      table: {
        head: ['Your partner says', 'Your answer needs'],
        rows: [
          ['Good morning. How can I help you?', 'what the car needs — "My car needs a service."'],
          ['What is the problem?', 'a symptom, not a cause — "It’s making a noise."'],
          ['Can you leave the car with us today?', 'yes or no, and then a question of your own'],
          ['When will it be ready?', 'a time, and a promise — "This afternoon. We’ll call you."']
        ]
      },
      remember: ['How can I help you?', 'What is the problem?', 'I’ll write a job card.',
                 'Can you leave the car with us today?', 'When will it be ready?',
                 'We’ll call you.'],
      minWords: 30,
      notePlaceholder: 'Plan: 1) greet  2) ask what they need  3) ask the problem  4) job card '
        + ' 5) when it will be ready',
      coach: {
        title: 'Check your role play before you run it',
        target: 'the six phrases of a booking-in conversation',
        minWords: 30,
        taught: [
          'Audio 1.3 is this conversation, already done: Rana and Mr Aboud, seven lines.',
          'A customer gives a SYMPTOM — a noise, a smell, a warning light — not a diagnosis.',
          'The advisor writes the job card; the mechanic reads it.'
        ],
        task: 'Run the booking-in conversation as the service advisor, then as the customer.',
        parts: [
          'Greet, and ask how you can help.',
          'Ask what the problem is, and listen to the answer.',
          'Say you will write a job card, and ask to keep the car.',
          'Say when it will be ready, and promise to call.'
        ],
        example: [
          'Good morning, welcome to Cham Motors. How can I help you?',
          'Of course. What is the problem? … I see — a noise when you brake.',
          'I’ll write a job card for you. Can you leave the car with us today?',
          'It will be ready this afternoon, and we’ll call you when it is done.'
        ],
        exampleNote: 'Then swap roles. With a partner, run it twice and change the problem the '
          + 'second time — a warning light, or a service that is overdue.',
        criteria: [
          { t: 'You greet the customer before asking anything.' },
          { t: 'You ask what the problem is, and you do not guess the cause for them.' },
          { t: 'You say you will write a job card.' },
          { t: 'You give a TIME, not just "soon".' },
          { t: 'Four or more of the six phrases are used.' }
        ]
      },
      stretch: 'The customer needs the car back very quickly, but the workshop is busy. Offer '
        + 'a fair time politely, and say why it cannot be sooner.'
    },

    /* ------------------------------------------------------------- 2. the mini-presentation */
    {
      id: 'c2', covers: ['Part 4'], ref: '4C', bookRef: 'Unit 1 · Part 4 · Mini-presentation',
      type: 'report',
      title: 'Your own talk — about one minute',
      instruction: 'Describe <b>your job, or a car you know</b>: what it is, its main parts, '
        + 'and what you check or do. Use the stems to plan it, then say the whole thing aloud '
        + 'once without stopping.',
      visual: { spot: 'customer',
        caption: 'A car you know well is easier to talk about for a minute than a car you do '
          + 'not. Choose the one you can describe.' },
      minWords: 45,
      placeholder: 'I want to tell you about…',
      stems: ['I want to tell you about…', 'It is a…', 'It has a…',
              'Every week I check…', 'Right now, it needs…', 'I like it because…'],
      coach: {
        title: 'Check your talk before you give it',
        target: 'describing, with the present simple and the present continuous',
        minWords: 45,
        taught: [
          'The parts: engine, battery, radiator, bonnet, boot, wheel, door, windscreen, tyre.',
          'Present simple for what is normally true; present continuous for right now.',
          'A service is the regular check and care a car needs.'
        ],
        task: 'Give a talk of about one minute describing your job, or a car you know: what it '
          + 'is, its main parts, and what you check or do.',
        parts: [
          'Say what you are describing, in one sentence.',
          'Name three or more parts, and say something about each.',
          'Say what you check or do, and how often — present simple.',
          'Say one thing that is happening now or needs doing — present continuous.',
          'End with why you like it, or why it matters.'
        ],
        example: 'I want to tell you about my brother’s car. It is an old Toyota, and it is '
          + 'about twenty years old. It has a strong engine and a new battery, but the tyres '
          + 'are worn and the boot does not close well. Every month I check the oil and the '
          + 'water in the radiator, because the engine gets very hot in the summer. Right now '
          + 'it is making a noise when it starts, so this week we are taking it to a mechanic. '
          + 'I like this car because it is old but it always starts.',
        criteria: [
          { t: 'Names at least three parts of the car.', auto: 'mentions',
            keys: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'wheel', 'door',
                   'windscreen', 'tyre', 'brake', 'oil'],
            need: 3,
            fail: 'Name the parts — engine, battery, tyres — rather than saying "it" and '
              + '"things".' },
          { t: 'Says what you check or do, with how often.', auto: 'mentions',
            keys: ['every', 'usually', 'each', 'once a', 'always', 'often'], need: 1,
            fail: 'Add how often: every month, once a year, every time I use it.' },
          { t: 'One sentence in the present continuous for something happening now.',
            auto: 'mentions', keys: ['am ', 'is ', 'are '], need: 1,
            fail: 'Add a "right now" sentence — "Right now it is making a noise."' },
          { t: 'Long enough to fill about a minute — roughly 90 to 120 words.' },
          { t: 'Ends with a reason, not just a list.' }
        ]
      }
    }
  ]
});
