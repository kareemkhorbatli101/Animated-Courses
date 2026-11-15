/* ============================================================
   Unit 1 §15 — Part 6, Writing.

   Four pieces, and the book gives each one a plan, a word bank and a checklist but prints
   "Model — read this first:" without the model. The four models below are therefore authored,
   and each is labelled as one way of doing it rather than the answer — a model answer that
   calls itself the answer teaches copying.

   Every card carries its checklist as the book wrote it, and the rows that can be checked
   mechanically are checked: the word count, and whether both tenses appear.
   ============================================================ */
EAM.page('u1-s15', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 6 · Writing', part: '6', section: '15',
          lesson: 'Part 6 · Writing', title: 'Four pieces to write' },
  objective: 'Write about a car, a job and a reason, using both present tenses',
  video: 'u01v15',
  prev: 's14-reading-comprehension', prevLabel: 'The words of the text',
  next: 's16-management-file-dialogue', nextLabel: 'What a manager says',
  cards: [

    /* ------------------------------------------------------------ 1. describe a job or a car */
    {
      id: 'c1', covers: ['Part 6'], ref: '6A', bookRef: 'Unit 1 · Part 6 · W1',
      type: 'writer',
      title: 'Describe your job, or a car you know (50–70 words)',
      instruction: 'Use <b>one present-simple sentence</b> and <b>one present-continuous '
        + 'sentence</b>. The plan below is the book’s; fill it in, then write the piece.',
      visual: { spot: 'mechanic',
        caption: 'Write about your own work if you have it, or about a car you know well.' },
      paras: [
        { label: 'Who you are, or what the car is',
          purpose: 'One sentence. "I am a…" or "My family has a…"' },
        { label: 'What happens every day',
          purpose: 'Present simple, with a time word: every day, usually, every week.' },
        { label: 'The order of the work',
          purpose: 'First… Then… After that… — the signposts from Nabil’s recording.' },
        { label: 'What is happening right now',
          purpose: 'Present continuous: "Right now, I am…" or "This week we are…"' }
      ],
      minWords: 50,
      /* THE FOUR-STEP SCAFFOLD. A writing task is not one empty box: it is ask
         for ideas, plan, write, then ask for a marking. The two AI steps carry
         their own prompts and their own refusals - the ideas step may return only
         topics, never sentences, so a learner cannot have the piece written for
         them while believing they were helped to start it. */
      scaffold: {
        task: 'A description of the learner’s job, or of a car they know: what it is, what happens every day, the order of the work, and what is happening right now. 50-70 words.',
        words: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay', 'job card', 'mechanic', 'service', 'workshop'],
        must: ['at least one sentence in the present simple with a time word', 'at least one sentence in the present continuous', 'at least three words from this unit', 'between 50 and 70 words'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      pastCheck: false,
      stems: ['I am a…', 'My family has a…', 'Every day, I…', 'First, I… Then I…',
              'Right now, I am…', 'I like my job because…'],
      model: 'I am a mechanic in a small garage in Homs. Every day I service and repair cars. '
        + 'First, I read the job card. Then I check the car in the service bay, and I change '
        + 'the oil or the filters. Right now, I am changing the brakes on a customer’s car. I '
        + 'like my job because every car is a different problem.',
      modelNote: 'One way of doing it, not the answer. Yours will be about a different job or '
        + 'a different car — but it should do the same five things in the same order.',
      checklist: [
        'one present-simple and one present-continuous sentence?',
        'car or job words used?',
        '50–70 words?',
        'capitals and full stops?'
      ],
      aiCheck: {
        task: 'A description of the learner’s job, or of a car they know: what it is, what '
          + 'happens every day, the order of the work, and what is happening right now. '
          + '50-70 words.',
        grammar: 'the present simple for routines (adding -s with he/she/it) and the present '
          + 'continuous (am/is/are + verb-ing) for now',
        reader: 'the teacher, and other learners in the class',
        must: [
          'at least one sentence in the present simple with a time word',
          'at least one sentence in the present continuous',
          'at least three words from this unit',
          'between 50 and 70 words'
        ]
      },
      coach: {
        title: 'Check your writing',
        target: 'present simple and present continuous, in a description',
        minWords: 50,
        taught: [
          'Present simple for routines, with -s after he, she or it.',
          'Present continuous for right now: am/is/are + verb-ing.',
          'Signposts for order: First… Then… After that… Finally…'
        ],
        task: 'Write 50-70 words about your job or a car you know, using one present-simple '
          + 'and one present-continuous sentence.',
        parts: ['Who you are, or what the car is.', 'What happens every day.',
                'The order of the work.', 'What is happening right now.'],
        example: ['See the model on the card — it does all four, in order, in 61 words.'],
        criteria: [
          { t: 'A present-simple sentence with a time word.', auto: 'mentions',
            keys: ['every', 'usually', 'always', 'often', 'each'], need: 1,
            fail: 'Add a time word — every day, usually — so the routine reads as a routine.' },
          { t: 'A present-continuous sentence.', auto: 'mentions',
            keys: ['right now', 'at the moment', 'this week', 'today'], need: 1,
            fail: 'Add a "right now" sentence with am/is/are + verb-ing.' },
          { t: 'At least three words from this unit.', auto: 'mentions',
            keys: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service', 'job card',
                   'mechanic', 'workshop', 'tyre', 'oil', 'brake', 'filter'],
            need: 3, fail: 'Use the unit’s words rather than general ones.' },
          { t: 'Between 50 and 70 words.' },
          { t: 'The order of the work is signposted — First, Then, After that.' }
        ]
      }
    },

    /* ----------------------------------------------------------- 2. why servicing matters */
    {
      id: 'c2', covers: ['Part 6'], ref: '6B', bookRef: 'Unit 1 · Part 6 · W2',
      type: 'writer',
      title: 'Why good servicing matters (50–70 words)',
      instruction: 'Give <b>reasons</b>, not a description. This is the first piece in the '
        + 'unit that asks you to argue rather than report.',
      visual: { spot: 'service',
        caption: 'Three good reasons are better than one long one.' },
      paras: [
        { label: 'Your opinion, in one sentence',
          purpose: 'Start plainly: "Good servicing is important because…"' },
        { label: 'Two or three reasons',
          purpose: 'Safety, cost, and how long the car lasts. One sentence each.' }
      ],
      minWords: 50,
      /* THE FOUR-STEP SCAFFOLD. A writing task is not one empty box: it is ask
         for ideas, plan, write, then ask for a marking. The two AI steps carry
         their own prompts and their own refusals - the ideas step may return only
         topics, never sentences, so a learner cannot have the piece written for
         them while believing they were helped to start it. */
      scaffold: {
        task: 'An argument in 50-70 words for why good servicing is important, giving two or three reasons.',
        words: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay', 'job card', 'mechanic', 'service', 'workshop'],
        must: ['a clear opinion in the first sentence', 'at least two reasons', 'because or so, linking a reason to a result'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      stems: ['Good servicing is important because…', '…is safer', '…lasts longer',
              '…saves money', 'If a car is not serviced,…', 'Customers come back because…'],
      model: 'Good servicing is important because a car that is checked often is safer. The '
        + 'mechanic finds a small problem before it becomes a big one, so the owner saves '
        + 'money. A serviced car also lasts longer, and in Syria many families keep the same '
        + 'car for years. Finally, good work keeps customers happy, and they come back.',
      modelNote: 'One answer among many. Yours may give different reasons — what matters is '
        + 'that each one is a reason, and that you say why it follows.',
      checklist: ['a clear opinion?', 'two or three reasons?', '50–70 words?'],
      aiCheck: {
        task: 'An argument in 50-70 words for why good servicing is important, giving two or '
          + 'three reasons.',
        grammar: 'the present simple for general truths; because / so to join a reason to a '
          + 'result',
        reader: 'the teacher',
        must: ['a clear opinion in the first sentence',
               'at least two reasons',
               'because or so, linking a reason to a result']
      },
      coach: {
        title: 'Check your reasons',
        target: 'giving reasons with because and so',
        minWords: 50,
        taught: ['The Part 5 text: a good department is clean, safe and honest.',
                 'Cars in Syria are kept for many years, so servicing matters more.'],
        task: 'Say why good servicing is important, and give two or three reasons.',
        parts: ['An opinion in one sentence.', 'Two or three reasons, one sentence each.'],
        example: ['See the model — four reasons: safety, cost, how long the car lasts, and '
                  + 'customers returning.'],
        criteria: [
          { t: 'Two or more reasons, not one repeated.', auto: 'mentions',
            keys: ['because', 'so ', 'this means', 'as a result'], need: 2,
            fail: 'Join each reason to its result with "because" or "so".' },
          { t: 'The first sentence states an opinion.' },
          { t: 'Between 50 and 70 words.' },
          { t: 'Reasons are about servicing, not about cars in general.' }
        ]
      }
    },

    /* ------------------------------------------------------------- 3. a note to the mechanic */
    {
      id: 'c3', covers: ['Part 6'], ref: '6C', bookRef: 'Unit 1 · Part 6 · W3',
      type: 'writer',
      title: 'A note from reception to the mechanic (50–70 words)',
      instruction: 'You are <b>Rana</b>. Write a short note to <b>Nabil</b> about a car that '
        + 'has just come in. This is a real workshop task: the note is how what the customer '
        + 'said becomes what the mechanic does.',
      visual: { spot: 'job-card',
        caption: 'A note like this is what a job card is made of. Say what the customer said, '
          + 'not what you think is wrong.' },
      paras: [
        { label: 'Greeting', purpose: 'Dear Nabil, / Nabil,' },
        { label: 'What has arrived, and what it needs',
          purpose: '"Here is…  It needs…"' },
        { label: 'What the customer said',
          purpose: 'Their words, not your diagnosis: "The customer says it is making a noise."' },
        { label: 'What you are asking for, and a close',
          purpose: '"So please…  Thank you." and your name.' }
      ],
      minWords: 50,
      /* THE FOUR-STEP SCAFFOLD. A writing task is not one empty box: it is ask
         for ideas, plan, write, then ask for a marking. The two AI steps carry
         their own prompts and their own refusals - the ideas step may return only
         topics, never sentences, so a learner cannot have the piece written for
         them while believing they were helped to start it. */
      scaffold: {
        task: 'A short workplace note (50-70 words) from the service advisor to the mechanic, saying which car has arrived, what it needs, what the customer reported, and what is being asked for.',
        words: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay', 'job card', 'mechanic', 'service', 'workshop'],
        must: ['a greeting and a close with a name', 'which car, and what it needs', 'what the customer said, reported as the customer’s words', 'a clear request beginning with please'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      stems: ['Dear Nabil,', 'Here is…', 'It needs…', 'The customer says…', 'So please…',
              'Thank you,', 'Rana'],
      model: 'Dear Nabil,\n\nHere is Mr Aboud’s car, a blue Kia. It needs a full service, and '
        + 'the service is due this month. The customer says it is making a noise when he '
        + 'brakes, so please check the brakes carefully and look at the front tyres. He would '
        + 'like the car back this afternoon if we can.\n\nThank you,\nRana',
      modelNote: 'Notice what the note does NOT do: it does not say what is wrong with the '
        + 'brakes. Rana reports the symptom and asks Nabil to find the cause — that division '
        + 'of work is the whole point of the job card.',
      checklist: ['greeting and close?', 'a clear request?', '50–70 words?'],
      aiCheck: {
        task: 'A short workplace note (50-70 words) from the service advisor to the mechanic, '
          + 'saying which car has arrived, what it needs, what the customer reported, and what '
          + 'is being asked for.',
        grammar: 'the present simple for facts; please + verb for a polite request',
        reader: 'a colleague in the workshop who will act on the note',
        must: ['a greeting and a close with a name',
               'which car, and what it needs',
               'what the customer said, reported as the customer’s words',
               'a clear request beginning with please']
      },
      coach: {
        title: 'Check your note',
        target: 'reporting a customer’s words, and making a request',
        minWords: 50,
        taught: ['Audio 1.3: what Mr Aboud actually said, and what Rana promised.',
                 'A customer gives a symptom; the workshop finds the cause.'],
        task: 'Write a note from Rana to Nabil about a car that has just been booked in.',
        parts: ['Greeting.', 'Which car, and what it needs.',
                'What the customer said.', 'The request, and a close.'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'Has a greeting and a close.', auto: 'mentions',
            keys: ['dear', 'hello', 'hi ', 'thank', 'regards'], need: 2,
            fail: 'A workplace note opens and closes — "Dear Nabil," … "Thank you, Rana".' },
          { t: 'Reports what the customer SAID, rather than diagnosing the fault.',
            auto: 'mentions', keys: ['says', 'said', 'reports', 'told'], need: 1,
            fail: 'Write "The customer says it is making a noise", not "the brakes are worn".' },
          { t: 'Contains a clear request.', auto: 'mentions',
            keys: ['please', 'could you', 'can you'], need: 1,
            fail: 'Ask for something: "so please check…".' },
          { t: 'Between 50 and 70 words.' }
        ]
      }
    },

    /* -------------------------------------------------------------------- 4. the reflection */
    {
      id: 'c4', covers: ['Part 6'], ref: '6D', bookRef: 'Unit 1 · Part 6 · W4',
      type: 'writer',
      title: 'Reflection — a car in my family (40–60 words)',
      instruction: 'Write about a car in your family, or one you know well. Shorter than the '
        + 'others, and personal: this one has no right answer at all.',
      visual: { spot: 'customer',
        caption: 'A car you actually know is easier to write about — and more worth reading.' },
      paras: [
        { label: 'The car', purpose: 'What it is, and how long you have had it.' },
        { label: 'What it is like now',
          purpose: 'One present-simple and one present-continuous sentence.' }
      ],
      minWords: 40,
      /* THE FOUR-STEP SCAFFOLD. A writing task is not one empty box: it is ask
         for ideas, plan, write, then ask for a marking. The two AI steps carry
         their own prompts and their own refusals - the ideas step may return only
         topics, never sentences, so a learner cannot have the piece written for
         them while believing they were helped to start it. */
      scaffold: {
        task: 'A short personal piece (40-60 words) about a car in the learner’s family or one they know well.',
        words: ['engine', 'battery', 'radiator', 'bonnet', 'boot', 'service bay', 'job card', 'mechanic', 'service', 'workshop'],
        must: ['the car named or described', 'one present-simple sentence', 'one present-continuous sentence'],
        planPlaceholder: 'My plan:  1)…   2)…   3)…'
      },
      stems: ['My family has…', 'We have had it for…', 'It is…', 'Every year we…',
              'At the moment it…', 'I like it because…'],
      model: 'My family has an old white Peugeot. We have had it for twelve years, and my '
        + 'father drives it every day. Every year we take it to the same mechanic, because he '
        + 'knows the car. At the moment it is making a noise from the front, so we are taking '
        + 'it in on Thursday.',
      modelNote: 'Yours will be about a different car. The two tenses are what the task is '
        + 'practising, not the make of car.',
      checklist: ['the car described?', 'present simple + continuous?', '40–60 words?'],
      aiCheck: {
        task: 'A short personal piece (40-60 words) about a car in the learner’s family or one '
          + 'they know well.',
        grammar: 'the present simple and the present continuous',
        reader: 'the teacher',
        must: ['the car named or described',
               'one present-simple sentence',
               'one present-continuous sentence']
      },
      coach: {
        title: 'Check your reflection',
        target: 'both present tenses, in your own words',
        minWords: 40,
        taught: ['Present simple for what is normally true; continuous for right now.',
                 'The Syria text: many families keep one car for a long time.'],
        task: 'Write 40-60 words about a car in your family or one you know well.',
        parts: ['What the car is.', 'What it is like now, in both tenses.'],
        example: ['See the model on the card.'],
        criteria: [
          { t: 'The car is described, not just named.' },
          { t: 'One present-simple sentence.' },
          { t: 'One present-continuous sentence.', auto: 'mentions',
            keys: ['am ', 'is ', 'are '], need: 1,
            fail: 'Add "At the moment it is…" or "This week we are…".' },
          { t: 'Between 40 and 60 words.' }
        ]
      }
    }
  ]
});
