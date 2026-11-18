/* Unit 7 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s06', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict how a scam call opens, follow '
  + 'three conversations about fraud, and identify what the caller wanted '
  + 'and what gave them away.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 7 · 3A',
      visual: { spot: 'phishing' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the customer will say that something strange has '
      + 'happened, and that she is frightened.”</p>',
      instruction: 'You will hear three conversations about security. What does a worried '
  + 'customer say first?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 7 · 3B',
      type: 'study',
      title: 'A suspicious message — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I got a text saying my '
      + 'account will be closed in one hour.</p><p><b>Elif:</b> Thank you for '
      + 'calling us instead of clicking. That message is not from '
      + 'us.</p><p><b>Customer:</b> How can you be sure?</p><p><b>Elif:</b> If '
      + 'a message gives you a deadline of one hour, it is a scam. The bank '
      + 'never does that, in any country.</p><p><b>Customer:</b> Should I do '
      + 'anything?</p><p><b>Elif:</b> Delete it. If you clicked the link, tell '
      + 'me now and we will change your password.</p></div>',
      playable: ['I got a text saying my account will be closed in one hour.',
      'Thank you for calling us instead of clicking. That message is not from us.',
      'How can you be sure?',
      'If a message gives you a deadline of one hour, it is a scam. The bank '
        + 'never does that, in any country.',
      'Should I do anything?',
      'Delete it. If you clicked the link, tell me now and we will change '
        + 'your password.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 7 · 3B',
      type: 'quizset',
      title: 'A suspicious message',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: Thank '
  + 'you for calling us instead of clicking. · That message is not from '
  + 'us. · If you clicked the link, tell me now.',
      display: 'cards',
      items: [{
          q: 'The message came from the bank.',
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
          q: 'A one-hour deadline is a sign of a scam.',
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
          q: 'The customer clicked the link.',
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
      bookRef: 'Unit 7 · 3C',
      type: 'study',
      title: 'Blocking a lost card — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I can’t find my card. I think '
      + 'I left it in a shop.</p><p><b>Grace:</b> I can block it now. May I '
      + 'ask when you last used it?</p><p><b>Customer:</b> About an hour '
      + 'ago.</p><p><b>Grace:</b> Good. If a payment appears after that time, '
      + 'we will refund it. A new card will be posted today and should arrive '
      + 'in three days.</p><p><b>Customer:</b> And if I find the old '
      + 'one?</p><p><b>Grace:</b> Once a card is blocked, it cannot be used '
      + 'again. Please cut it up.</p></div>',
      playable: ['I can’t find my card. I think I left it in a shop.',
      'I can block it now. May I ask when you last used it?',
      'About an hour ago.',
      'Good. If a payment appears after that time, we will refund it. A new '
        + 'card will be posted today and should arrive in three days.',
      'And if I find the old one?',
      'Once a card is blocked, it cannot be used again. Please cut it up.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 7 · 3C',
      type: 'quizset',
      title: 'Blocking a lost card',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The card can be unblocked if the customer finds it.',
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
          q: 'Payments after the lost time will be refunded.',
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
          q: 'The new card arrives the same day.',
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
          q: 'Nothing can be spent on a blocked card.',
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
