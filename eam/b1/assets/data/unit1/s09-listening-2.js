/* ============================================================
   Unit 1 §9 — Part 3, Listening 2. Audio Track 1.3.

   Rana at reception and Mr Aboud, a customer. This is the conversation the Part 4 role play
   asks the learner to perform, so the four phrases it teaches are marked in the text and
   repeated on the role-play card: a learner meets each one here, then uses it there.

   The questions are short answers rather than multiple choice because the book asks them
   that way, and because answering "What is the problem?" in your own words is closer to what
   the job needs than picking one of four.
   ============================================================ */
EAM.page('u1-s09', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 3 · Audio 1.3', part: '3', section: '9',
          lesson: 'Part 3 · Listening', title: 'At reception' },
  objective: 'Follow a booking-in conversation and answer three questions about it',
  video: 'u01v09',
  prev: 's08-listening-1', prevLabel: 'Nabil talks about his work',
  next: 's10-listening-3', nextLabel: 'A day at Cham Motors',
  cards: [

    /* -------------------------------------------------------------- 1. the conversation */
    {
      id: 'c1', covers: ['Audio 1.3', 'Part 3'], ref: '3C', bookRef: 'Unit 1 · Audio 1.3',
      type: 'study',
      title: 'Listen: booking a car in',
      instruction: '<b>Before you listen:</b> what does a service advisor ask a customer '
        + 'first? Press any line to hear it.',
      visual: { diorama: 'reception-desk',
        caption: 'Rana at the desk, Mr Aboud with his keys. Four phrases in this conversation '
          + 'are the ones you will use yourself in §12.' },
      html: '<div class="convo" style="font-size:16.5px;line-height:2">'
        + '<p><b>Rana:</b> Good morning, welcome to Cham Motors. '
        + '<b>How can I help you?</b></p>'
        + '<p><b>Mr Aboud:</b> My car needs a service.</p>'
        + '<p><b>Rana:</b> Of course. <b>What is the problem?</b></p>'
        + '<p><b>Mr Aboud:</b> It’s making a noise, and the service is due.</p>'
        + '<p><b>Rana:</b> <b>I’ll write a job card.</b> Can you leave the car with us today?</p>'
        + '<p><b>Mr Aboud:</b> Yes. When will it be ready?</p>'
        + '<p><b>Rana:</b> This afternoon. <b>We’ll call you.</b></p>'
        + '</div>'
        + '<p class="wc" style="margin-top:10px">The four phrases in bold are the ones to '
        + 'take away. Three of them are questions an advisor asks; the fourth is a promise.</p>',
      doneLabel: 'I have listened and read',
      playable: [
        'Good morning, welcome to Cham Motors. How can I help you?',
        'My car needs a service.',
        'Of course. What is the problem?',
        'It’s making a noise, and the service is due.',
        'I’ll write a job card. Can you leave the car with us today?',
        'Yes. When will it be ready?',
        'This afternoon. We’ll call you.'
      ]
    },

    /* ------------------------------------------------------------------ 2. three questions */
    {
      id: 'c2', covers: ['Audio 1.3', 'Part 3'], ref: '3D',
      bookRef: 'Unit 1 · Audio 1.3 · questions', type: 'shortanswer',
      title: 'Answer the three questions',
      instruction: 'Short answers are fine — a few words each. Spelling and capitals are '
        + 'marked kindly; the meaning is what counts. The first is done for you.',
      before: '<b>0.</b> Where is Mr Aboud? — <i>At Cham Motors (reception).</i>',
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
      after: 'Notice how little Mr Aboud says. A customer describes a <b>symptom</b> — a '
        + 'noise — and almost never a cause. Working out what is actually wrong is the '
        + 'workshop’s job, which is why the job card records what the customer said rather '
        + 'than what the fault is.'
    }
  ]
});
