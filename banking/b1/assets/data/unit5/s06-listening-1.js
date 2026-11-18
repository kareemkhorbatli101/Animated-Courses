/* Unit 5 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s06', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a customer asks about an '
  + 'app, follow three support conversations, and identify the step where '
  + 'each customer is stuck.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 5 · 3A',
      visual: { spot: 'atm' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think customers forget their password, or the code does not '
      + 'arrive.”</p>',
      instruction: 'You will hear three app conversations. What goes wrong most often '
  + 'with online banking?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 5 · 3B',
      type: 'study',
      title: 'A login problem — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I can’t log in. It says my '
      + 'password is wrong.</p><p><b>Petra:</b> I’m sorry about that. Has the '
      + 'password been changed recently?</p><p><b>Customer:</b> My daughter '
      + 'changed it for me last month.</p><p><b>Petra:</b> That explains it. '
      + 'Your account is not blocked — the old password is simply no longer '
      + 'accepted. A reset link can be sent to your email '
      + 'now.</p><p><b>Customer:</b> Please do that.</p></div>',
      playable: ['I can’t log in. It says my password is wrong.',
      'I’m sorry about that. Has the password been changed recently?',
      'My daughter changed it for me last month.',
      'That explains it. Your account is not blocked — the old password is '
        + 'simply no longer accepted. A reset link can be sent to your email '
        + 'now.',
      'Please do that.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 5 · 3B',
      type: 'quizset',
      title: 'A login problem',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: Has '
  + 'the password been changed recently? · Your account is not blocked. · '
  + 'A reset link can be sent to your email.',
      display: 'cards',
      items: [{
          q: 'The customer’s account has been blocked.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The password was changed last month.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer’s email address is out of date.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    },
    {
      id: 'c4',
      ref: '3C',
      bookRef: 'Unit 5 · 3C',
      type: 'study',
      title: 'A delayed transfer — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I sent money to my brother '
      + 'yesterday and it hasn’t arrived.</p><p><b>Mei:</b> Let me look. The '
      + 'payment was sent at 18:40.</p><p><b>Customer:</b> So where is '
      + 'it?</p><p><b>Mei:</b> It was received by his bank this morning, and '
      + 'it is being checked now. Transfers over a certain amount are always '
      + 'checked.</p><p><b>Customer:</b> How long does that '
      + 'take?</p><p><b>Mei:</b> Usually a few hours. You will be notified as '
      + 'soon as it is released.</p></div>',
      playable: ['I sent money to my brother yesterday and it hasn’t arrived.',
      'Let me look. The payment was sent at 18:40.',
      'So where is it?',
      'It was received by his bank this morning, and it is being checked '
        + 'now. Transfers over a certain amount are always checked.',
      'How long does that take?',
      'Usually a few hours. You will be notified as soon as it is released.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 5 · 3C',
      type: 'quizset',
      title: 'A delayed transfer',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The payment left this customer’s account.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The money has not reached the other bank.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'Large transfers are always checked.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        },
      {
          q: 'The customer must call again to find out.',
          options: [{
            t: 'True',
            ok: false,
            why: ''
          },
            {
            t: 'False',
            ok: false,
            why: ''
          },
            {
            t: 'Not Given',
            ok: false,
            why: ''
          }]
        }]
    }
  ]
});
