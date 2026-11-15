/* ============================================================
   Unit 1 §9 — Part 3, Listening 2. Audio Track 1.3.

   Rana at reception and Mr Aboud, played on the reception set. This is the conversation the
   Part 4 role play asks the learner to perform, so hearing it acted — with the pauses, the
   faces and the four phrases in bold — is the preparation for performing it. The same scene is
   mounted again on §12, where the learner takes one of the two parts and it goes quiet for
   them.
   ============================================================ */
EAM.page('u1-s09', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.3', part: '3', section: '9',
          lesson: 'Part 3 · Listening', title: 'At reception' },
  objective: 'Follow a booking-in conversation and answer three questions about it',
  video: 'u01v09',
  prev: 's08-listening-1', prevLabel: 'Nabil talks about his work',
  next: 's10-listening-3', nextLabel: 'A day at Cham Motors',
  cards: [
    {
      id: 'c1', covers: ['Audio 1.3', 'Part 3'], ref: '3C/3D',
      bookRef: 'Unit 1 · Audio 1.3', type: 'scene',
      title: 'Listen: booking a car in',
      instruction: '<b>Before you listen:</b> what does a service advisor ask a customer '
        + 'first? Watch it once straight through, then again with the Arabic on if you need it.',
      scene: 'u1-reception',
      passage: {
        style: 'convo',
        title: 'The conversation, with the four phrases to take away',
        paras: [
          'Rana: Good morning, welcome to Cham Motors. <b>How can I help you?</b>',
          'Mr Aboud: My car needs a service.',
          'Rana: Of course. <b>What is the problem?</b>',
          'Mr Aboud: It’s making a noise, and the service is due.',
          'Rana: <b>I’ll write a job card.</b> Can you leave the car with us today?',
          'Mr Aboud: Yes. When will it be ready?',
          'Rana: This afternoon. <b>We’ll call you.</b>'
        ]
      },
      after: 'Three of the four phrases in bold are questions an advisor asks; the fourth is a '
        + 'promise. You will use all four yourself in §12.',

      quiz: {
        id: 'q1', type: 'shortanswer',
        title: 'Answer the three questions',
        instruction: 'Short answers are fine — a few words each. Spelling and capitals are '
          + 'marked kindly; the meaning is what counts. The first is done for you: '
          + '<i>Where is Mr Aboud? — At Cham Motors (reception).</i>',
        items: [
          {
            q: '1. What does his car need?',
            accept: ['a service', 'service', 'a service.', 'it needs a service',
                     'his car needs a service'],
            keys: ['service'], need: 1,
            placeholder: 'two words',
            evidence: 'Mr Aboud’s first line — he says it in four words.'
          },
          {
            q: '2. What is the problem?',
            accept: ['it is making a noise', 'it’s making a noise', 'making a noise',
                     'a noise', 'the car is making a noise',
                     'it is making a noise and the service is due'],
            keys: ['noise'], need: 1,
            placeholder: 'what the car is doing',
            evidence: 'Mr Aboud’s second line. He gives two reasons; the noise is the problem, '
              + 'and the service being due is why he came now.'
          },
          {
            q: '3. When will the car be ready?',
            accept: ['this afternoon', 'this afternoon.', 'in the afternoon',
                     'today, this afternoon', 'today'],
            keys: ['afternoon'], need: 1,
            placeholder: 'when',
            evidence: 'Rana’s last line — two words, and then a promise to telephone.'
          }
        ],
        whyTitle: 'What the three answers teach',
        after: 'Notice how little Mr Aboud says, and watch his face while he says it. A '
          + 'customer describes a <b>symptom</b> — a noise — and almost never a cause. Working '
          + 'out what is actually wrong is the workshop’s job, which is why the job card '
          + 'records what the customer said rather than what the fault is.'
      }
    }
  ]
});
