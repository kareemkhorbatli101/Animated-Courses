/* Unit 8 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s06', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a customer objects to in a '
  + 'check, follow three compliance conversations, and identify what was '
  + 'required and what was produced.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 8 · 3A',
      visual: { spot: 'kyc-check' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the customer will say that he has banked here for years '
      + 'and should not have to prove who he is.”</p>',
      instruction: 'You will hear three conversations about rules. How does a customer '
  + 'feel when asked for ID again?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 8 · 3B',
      type: 'study',
      title: 'Asking for ID politely — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I’ve had this account for '
      + 'fifteen years. Why do you need my passport again?</p><p><b>Ana:</b> I '
      + 'understand. We have to check the document is still valid, and yours '
      + 'expired in March.</p><p><b>Customer:</b> Nothing has changed. I’m the '
      + 'same person.</p><p><b>Ana:</b> Of course. The rule is not about you — '
      + 'every customer must have a current document on file. If you bring it '
      + 'tomorrow, I can update it in two minutes.</p></div>',
      playable: ['I’ve had this account for fifteen years. Why do you need my passport again?',
      'I understand. We have to check the document is still valid, and yours '
        + 'expired in March.',
      'Nothing has changed. I’m the same person.',
      'Of course. The rule is not about you — every customer must have a '
        + 'current document on file. If you bring it tomorrow, I can update it '
        + 'in two minutes.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 8 · 3B',
      type: 'quizset',
      title: 'Asking for ID politely',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: We '
  + 'have to check the document is still valid. · The rule is not about '
  + 'you. · Every customer must have a current document on file.',
      display: 'cards',
      items: [{
          q: 'The rule applies only to new customers.',
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
          q: 'The customer’s document has expired.',
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
          q: 'The customer brings the passport the next day.',
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
      bookRef: 'Unit 8 · 3C',
      type: 'study',
      title: 'Explaining a rule — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I want to deposit fifteen '
      + 'thousand in cash.</p><p><b>Tomasz:</b> Certainly. For an amount like '
      + 'this we must ask about the source of the funds, and complete a short '
      + 'form.</p><p><b>Customer:</b> Are you saying I have done something '
      + 'wrong?</p><p><b>Tomasz:</b> Not at all. We have to ask everyone the '
      + 'same question above a certain amount. It takes about three minutes, '
      + 'and you don’t have to bring anything extra today.</p></div>',
      playable: ['I want to deposit fifteen thousand in cash.',
      'Certainly. For an amount like this we must ask about the source of '
        + 'the funds, and complete a short form.',
      'Are you saying I have done something wrong?',
      'Not at all. We have to ask everyone the same question above a certain '
        + 'amount. It takes about three minutes, and you don’t have to bring '
        + 'anything extra today.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 8 · 3C',
      type: 'quizset',
      title: 'Explaining a rule',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The bank asks about the source of funds only for suspicious customers.',
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
          q: 'The form takes about three minutes.',
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
          q: 'The customer must bring extra documents today.',
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
          q: 'A rule applies above a certain amount.',
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
