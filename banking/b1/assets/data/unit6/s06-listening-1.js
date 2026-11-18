/* Unit 6 §6 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s06', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 3 · Listening', part: '3', section: '6',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening', title: 'Part 3 · Listening' },
  objective: 'By the end of Part 3 you can predict what a customer asks about '
  + 'sending money, follow three transfer conversations, and identify the '
  + 'fee, the rate and the time quoted in each.',
  cards: [
    {
      id: 'c1',
      ref: '3A',
      bookRef: 'Unit 6 · 3A',
      visual: { spot: 'rate-board' },
      type: 'study',
      title: 'Before you listen (predict)',
      html: '<p>“I think the customer will ask about the rate, and then about the '
      + 'fee.”</p>',
      instruction: 'You will hear three conversations about moving money. What does a '
  + 'customer ask first?',
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: '3B',
      bookRef: 'Unit 6 · 3B',
      type: 'study',
      title: 'Asking about the rate — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> Good morning. Could you tell '
      + 'me what the rate is today?</p><p><b>Zeynep:</b> Good morning. We are '
      + 'buying at 4.28 and selling at 4.42.</p><p><b>Customer:</b> Why are '
      + 'there two numbers?</p><p><b>Zeynep:</b> The difference is called the '
      + 'spread. It is how the bank is paid for the service. There is no '
      + 'separate commission for cash.</p><p><b>Customer:</b> I see. That is '
      + 'clearer than I expected.</p></div>',
      playable: ['Good morning. Could you tell me what the rate is today?',
      'Good morning. We are buying at 4.28 and selling at 4.42.',
      'Why are there two numbers?',
      'The difference is called the spread. It is how the bank is paid for '
        + 'the service. There is no separate commission for cash.',
      'I see. That is clearer than I expected.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c3',
      ref: '3B',
      bookRef: 'Unit 6 · 3B',
      type: 'quizset',
      title: 'Asking about the rate',
      instruction: 'Read and decide: True, False, or Not Given.<br>Useful language: Could '
  + 'you tell me what the rate is today? · We are buying at… and selling '
  + 'at… · The difference is called the spread.',
      display: 'cards',
      items: [{
          q: 'There is a separate commission for changing cash.',
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
          q: 'The bank buys at a lower number than it sells at.',
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
          q: 'The customer changes money today.',
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
      bookRef: 'Unit 6 · 3C',
      type: 'study',
      title: 'Sending a transfer — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I would like to send three '
      + 'hundred to my daughter.</p><p><b>Luca:</b> Certainly. May I ask '
      + 'whether you have her IBAN?</p><p><b>Customer:</b> Yes, here it is. Do '
      + 'you know how long it will take?</p><p><b>Luca:</b> Usually one '
      + 'working day. Could you tell me the full name on the account, exactly '
      + 'as the bank has it?</p><p><b>Customer:</b> Maria Oliveira. Is the fee '
      + 'the same for any amount?</p><p><b>Luca:</b> Up to a thousand, yes — a '
      + 'flat twelve.</p></div>',
      playable: ['I would like to send three hundred to my daughter.',
      'Certainly. May I ask whether you have her IBAN?',
      'Yes, here it is. Do you know how long it will take?',
      'Usually one working day. Could you tell me the full name on the '
        + 'account, exactly as the bank has it?',
      'Maria Oliveira. Is the fee the same for any amount?',
      'Up to a thousand, yes — a flat twelve.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c5',
      ref: '3C',
      bookRef: 'Unit 6 · 3C',
      type: 'quizset',
      title: 'Sending a transfer',
      instruction: 'Read and decide: True or False.',
      display: 'cards',
      items: [{
          q: 'The customer has the beneficiary’s IBAN.',
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
          q: 'The transfer usually takes one working day.',
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
          q: 'The name on the account does not have to match exactly.',
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
          q: 'The fee is twelve for amounts up to a thousand.',
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
