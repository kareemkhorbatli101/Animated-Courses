/* Unit 6 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s07', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a customer asks about '
  + 'sending money, follow three transfer conversations, and identify the '
  + 'fee, the rate and the time quoted in each.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 6 · 3D',
      visual: { spot: 'rate-board' },
      type: 'study',
      title: 'Collecting a transfer from abroad (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> My brother sent me money from '
      + 'abroad last Friday, but nothing has arrived.</p><p><b>Luca:</b> Could '
      + 'you tell me the date and the amount?</p><p><b>Customer:</b> Friday '
      + 'the fourteenth. Five hundred.</p><p><b>Luca:</b> May I ask whether he '
      + 'gave the bank your IBAN, or only your account '
      + 'number?</p><p><b>Customer:</b> I’m not sure. He gave the number from '
      + 'my card.</p><p><b>Luca:</b> That may be the problem. Money from '
      + 'abroad needs the IBAN and our BIC. Without them it can sit at a '
      + 'correspondent bank for days.</p><p><b>Customer:</b> What should I do '
      + 'now?</p><p><b>Luca:</b> I will write down your IBAN and our BIC. Send '
      + 'them to your brother today, and if nothing moves by Thursday, come '
      + 'back.</p></div>',
      playable: ['My brother sent me money from abroad last Friday, but nothing has arrived.',
      'Could you tell me the date and the amount?',
      'Friday the fourteenth. Five hundred.',
      'May I ask whether he gave the bank your IBAN, or only your account number?',
      'I’m not sure. He gave the number from my card.',
      'That may be the problem. Money from abroad needs the IBAN and our '
        + 'BIC. Without them it can sit at a correspondent bank for days.',
      'What should I do now?',
      'I will write down your IBAN and our BIC. Send them to your brother '
        + 'today, and if nothing moves by Thursday, come back.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 6 · 3D',
      type: 'quizset',
      title: 'Collecting a transfer from abroad (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The customer is certain her brother used her IBAN.',
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
          q: 'A payment can wait at a correspondent bank for several days.',
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
          q: 'The brother lives in Spain.',
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
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 6 · 3E',
      type: 'dragmatch',
      title: 'Match the polite question',
      instruction: 'Match each indirect question from the listenings to what it asks for '
  + '(one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) the price of one currency in another' },
      { id: 'm-b', label: 'b) the account number abroad' },
      { id: 'm-c', label: 'c) the time the transfer needs' },
      { id: 'm-d', label: 'd) the beneficiary’s exact name' },
      { id: 'm-e', label: 'e) “Could you tell me your address?” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Could you tell me what the rate is today?”', accept: 'm-a',
          why: '<b>“Could you tell me what the rate is today?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“May I ask whether you have her IBAN?”', accept: 'm-a',
          why: '<b>“May I ask whether you have her IBAN?”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Do you know how long it will take?”', accept: 'm-a',
          why: '<b>“Do you know how long it will take?”</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Could you tell me the full name on the account?”', accept: 'm-a',
          why: '<b>“Could you tell me the full name on the account?”</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
