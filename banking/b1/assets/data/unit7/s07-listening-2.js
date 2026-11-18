/* Unit 7 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s07', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict how a scam call opens, follow '
  + 'three conversations about fraud, and identify what the caller wanted '
  + 'and what gave them away.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 7 · 3D',
      visual: { spot: 'phishing' },
      type: 'study',
      title: 'Staying safe — advice (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Elif:</b> Three rules, and they are the '
      + 'same in every branch of this bank.</p><p><b>Elif:</b> First, codes. '
      + 'If someone asks you for a one-time code, that person is not from the '
      + 'bank. We never ask.</p><p><b>Elif:</b> Second, hurry. If a call makes '
      + 'you feel you must act within minutes, stop. Fraud works on hurry, and '
      + 'if you slow down most scams fail.</p><p><b>Elif:</b> Third, the '
      + 'number. Call the number printed on your card, not the one in the '
      + 'message. A caller can say any name.</p><p><b>Elif:</b> And if you '
      + 'make a mistake, tell us at once. If you report it in the first hour, '
      + 'we can usually stop the money.</p></div>',
      playable: ['Three rules, and they are the same in every branch of this bank.',
      'First, codes. If someone asks you for a one-time code, that person is '
        + 'not from the bank. We never ask.',
      'Second, hurry. If a call makes you feel you must act within minutes, '
        + 'stop. Fraud works on hurry, and if you slow down most scams fail.',
      'Third, the number. Call the number printed on your card, not the one '
        + 'in the message. A caller can say any name.',
      'And if you make a mistake, tell us at once. If you report it in the '
        + 'first hour, we can usually stop the money.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 7 · 3D',
      type: 'quizset',
      title: 'Staying safe — advice (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The bank sometimes asks for a one-time code.',
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
          q: 'Calling the number in a message is safer than the number on the card.',
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
          q: 'Most customers in the room have been victims of fraud.',
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
      bookRef: 'Unit 7 · 3E',
      type: 'dragmatch',
      title: 'Match the safe response',
      instruction: 'Match each situation to the safe response (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) delete it and call the bank' },
      { id: 'm-b', label: 'b) end the call; the bank never asks' },
      { id: 'm-c', label: 'c) call and have it blocked' },
      { id: 'm-d', label: 'd) tell the bank at once and change it' },
      { id: 'm-e', label: 'e) send the code to the caller (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: 'A text gives you a one-hour deadline', accept: 'm-a',
          why: '<b>A text gives you a one-hour deadline</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: 'A caller asks for your one-time code', accept: 'm-a',
          why: '<b>A caller asks for your one-time code</b> &mdash; this pairing is '
              + 'not in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: 'You cannot find your card', accept: 'm-a',
          why: '<b>You cannot find your card</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: 'You clicked a link and typed your password', accept: 'm-a',
          why: '<b>You clicked a link and typed your password</b> &mdash; this '
              + 'pairing is not in the key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
