/* Unit 10 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s06', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a business customer asks '
  + 'for, follow three meetings, and identify what each customer asked and '
  + 'what the bank undertook to do.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 10 · 3A',
      visual: { spot: 'letter-of-credit' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the customer will ask to open a business account, and '
      + 'then about borrowing.”</p>',
      instruction: 'You will hear three business conversations. What does a company ask a '
  + 'bank for first?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 10 · 3B',
      type: 'study',
      title: 'Opening a business account — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I have just registered my '
      + 'company and I need a business account.</p><p><b>Luca:</b> '
      + 'Congratulations. May I ask what the company '
      + 'does?</p><p><b>Customer:</b> We import coffee and sell it to '
      + 'cafés.</p><p><b>Luca:</b> Then you will be paying suppliers abroad. '
      + 'We should set the account up for international payments from the '
      + 'start. Could you bring the registration documents and the ID of every '
      + 'owner?</p><p><b>Customer:</b> There are two of us.</p></div>',
      playable: ['I have just registered my company and I need a business account.',
      'Congratulations. May I ask what the company does?',
      'We import coffee and sell it to cafés.',
      'Then you will be paying suppliers abroad. We should set the account '
        + 'up for international payments from the start. Could you bring the '
        + 'registration documents and the ID of every owner?',
      'There are two of us.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 10 · 3B',
      type: 'quizset',
      title: 'Opening a business account',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: May I '
  + 'ask what the company does? · We should set the account up for… · '
  + 'Could you bring the registration documents?',
      display: 'cards',
      items: [{
          q: 'The company sells only inside the country.',
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
          q: 'The bank needs the ID of each owner.',
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
          q: 'The account will be opened today.',
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
      bookRef: 'Unit 10 · 3C',
      type: 'study',
      title: 'Reporting a meeting — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Priya:</b> How did the meeting '
      + 'go?</p><p><b>Diego:</b> Well. She said she needed a facility of fifty '
      + 'thousand.</p><p><b>Priya:</b> Did she say why?</p><p><b>Diego:</b> '
      + 'She told me that three invoices were overdue by more than sixty days, '
      + 'and that the payroll runs on the 25th.</p><p><b>Priya:</b> And the '
      + 'decision?</p><p><b>Diego:</b> She asked whether we could decide by '
      + 'Friday. I said I would call her tomorrow.</p></div>',
      playable: ['How did the meeting go?',
      'Well. She said she needed a facility of fifty thousand.',
      'Did she say why?',
      'She told me that three invoices were overdue by more than sixty days, '
        + 'and that the payroll runs on the 25th.',
      'And the decision?',
      'She asked whether we could decide by Friday. I said I would call her '
        + 'tomorrow.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 10 · 3C',
      type: 'quizset',
      title: 'Reporting a meeting',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The customer asked for fifty thousand.',
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
          q: 'Two invoices are overdue.',
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
          q: 'The payroll runs on the 25th.',
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
          q: 'Diego promised a decision on Friday.',
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
