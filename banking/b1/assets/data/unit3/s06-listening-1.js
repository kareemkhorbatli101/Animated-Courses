/* Unit 3 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s06', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict how a teller opens, follow a '
  + 'withdrawal, a deposit and a longer multi-step visit, and name the '
  + 'type of transaction from what the customer says.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 3 · 3A',
      visual: { spot: 'bank-counter' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the teller will greet the customer and ask how she can '
      + 'help.”</p>',
      instruction: 'You will hear three counter conversations. What does a teller usually '
  + 'say first?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 3 · 3B',
      type: 'study',
      title: 'A simple withdrawal — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Grace:</b> Good morning. How can I help '
      + 'you?</p><p><b>Customer:</b> I’d like to withdraw three hundred, '
      + 'please.</p><p><b>Grace:</b> Certainly. May I see your card and your '
      + 'ID?</p><p><b>Customer:</b> Here you are.</p><p><b>Grace:</b> Thank '
      + 'you. How many large notes would you like?</p><p><b>Customer:</b> All '
      + 'large, please. And a receipt.</p></div>',
      playable: ['Good morning. How can I help you?',
      'I’d like to withdraw three hundred, please.',
      'Certainly. May I see your card and your ID?',
      'Here you are.',
      'Thank you. How many large notes would you like?',
      'All large, please. And a receipt.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 3 · 3B',
      type: 'quizset',
      title: 'A simple withdrawal',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: How '
  + 'can I help you? · May I see your card and your ID? · How many large '
  + 'notes would you like?',
      display: 'cards',
      items: [{
          q: 'The teller asks for one document only.',
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
          q: 'The customer wants small notes.',
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
          q: 'The customer has used this branch before.',
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
      bookRef: 'Unit 3 · 3C',
      type: 'study',
      title: 'A cash deposit — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> Hello. I’d like to deposit '
      + 'this cash into my current account.</p><p><b>Tomasz:</b> Of course. '
      + 'How much is it?</p><p><b>Customer:</b> Four hundred and fifty. I '
      + 'counted it twice.</p><p><b>Tomasz:</b> Thank you. Could you complete '
      + 'this deposit slip, please? I will count it again in front of '
      + 'you.</p><p><b>Customer:</b> Will the money be in the account '
      + 'today?</p><p><b>Tomasz:</b> Yes. Cash deposits are available at '
      + 'once.</p></div>',
      playable: ['Hello. I’d like to deposit this cash into my current account.',
      'Of course. How much is it?',
      'Four hundred and fifty. I counted it twice.',
      'Thank you. Could you complete this deposit slip, please? I will count '
        + 'it again in front of you.',
      'Will the money be in the account today?',
      'Yes. Cash deposits are available at once.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 3 · 3C',
      type: 'quizset',
      title: 'A cash deposit',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The customer is paying money into an account.',
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
          q: 'The teller does not count the money again.',
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
          q: 'The customer must complete a slip.',
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
          q: 'Cash deposits take three days.',
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
          q: 'The customer counted the money before coming.',
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
