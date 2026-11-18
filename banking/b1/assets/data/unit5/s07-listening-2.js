/* Unit 5 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s07', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict what a customer asks about an '
  + 'app, follow three support conversations, and identify the step where '
  + 'each customer is stuck.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 5 · 3D',
      visual: { spot: 'atm' },
      type: 'study',
      title: 'Learning the app (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Mei:</b> I understand you would like some '
      + 'help with the app.</p><p><b>Customer:</b> Yes. My son set it up, but '
      + 'I don’t know what anything does.</p><p><b>Mei:</b> Let’s start at the '
      + 'first screen. Your balance is shown at the top, and the last ten '
      + 'payments are listed below it.</p><p><b>Customer:</b> And this '
      + 'button?</p><p><b>Mei:</b> That is for transfers. When you tap it, you '
      + 'choose the person, you type the amount, and then a code is sent to '
      + 'your phone. The payment is not made until the code is '
      + 'entered.</p><p><b>Customer:</b> So nothing can be sent by '
      + 'accident?</p><p><b>Mei:</b> Exactly. And your card can be frozen from '
      + 'this screen, and unfrozen later.</p><p><b>Customer:</b> That is a '
      + 'relief.</p></div>',
      playable: ['I understand you would like some help with the app.',
      'Yes. My son set it up, but I don’t know what anything does.',
      'Let’s start at the first screen. Your balance is shown at the top, '
        + 'and the last ten payments are listed below it.',
      'And this button?',
      'That is for transfers. When you tap it, you choose the person, you '
        + 'type the amount, and then a code is sent to your phone. The payment '
        + 'is not made until the code is entered.',
      'So nothing can be sent by accident?',
      'Exactly. And your card can be frozen from this screen, and unfrozen later.',
      'That is a relief.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 5 · 3D',
      type: 'quizset',
      title: 'Learning the app (longer)',
      instruction: 'Read and decide: True, False, or Not Given.',
      display: 'cards',
      items: [{
          q: 'The balance is shown at the bottom of the screen.',
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
          q: 'A payment is made before the code is entered.',
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
          q: 'The customer has used the app before today.',
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
      bookRef: 'Unit 5 · 3E',
      type: 'dragmatch',
      title: 'Match the passive phrase',
      instruction: 'Match each phrase from the listenings to what it means (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) you can still use it' },
      { id: 'm-b', label: 'b) the work is happening at this moment' },
      { id: 'm-c', label: 'c) we will tell you' },
      { id: 'm-d', label: 'd) you can stop it yourself' },
      { id: 'm-e', label: 'e) “Your account has been closed.” (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“Your account is not blocked.”', accept: 'm-a',
          why: '<b>“Your account is not blocked.”</b> &mdash; this pairing is not in '
              + 'the key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“It is being checked now.”', accept: 'm-a',
          why: '<b>“It is being checked now.”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“You will be notified.”', accept: 'm-a',
          why: '<b>“You will be notified.”</b> &mdash; this pairing is not in the key '
              + 'yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Your card can be frozen.”', accept: 'm-a',
          why: '<b>“Your card can be frozen.”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
