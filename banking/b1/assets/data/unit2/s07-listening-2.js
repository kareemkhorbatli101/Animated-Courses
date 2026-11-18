/* Unit 2 §7 — Listening.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s07', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 3 · Listening (2)', part: '3', section: '7',
          track: 'operator', label: 'Pre-class input · scripts printed below', lesson: 'Part 3 · Listening (2)', title: 'Part 3 · Listening (2)' },
  objective: 'By the end of Part 3 you can predict the problems customers bring to '
  + 'a bank, match each conversation to its purpose, judge True or False '
  + 'on what you hear, and take the useful phrase out of each exchange.',
  cards: [
    {
      id: 'c1',
      ref: '3D',
      bookRef: 'Unit 2 · 3D',
      visual: { spot: 'queue' },
      type: 'study',
      title: 'A customer inquiry about online banking (longer) — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Banker:</b> Good afternoon, madam. How may '
      + 'I help you?</p><p><b>Mrs Oyelaran:</b> Good afternoon. I have a '
      + 'current account here, but I don’t have online banking. Can I register '
      + 'for it?</p><p><b>Banker:</b> Of course. It’s a great service, and you '
      + 'can use it from any country.</p><p><b>Banker:</b> Could you show me '
      + 'your ID and your bank card, please?</p><p><b>Mrs Oyelaran:</b> Here '
      + 'you are.</p><p><b>Banker:</b> Thank you. I’ll set up your account '
      + 'now. We will send a security code to your phone. Please enter it to '
      + 'finish.</p><p><b>Mrs Oyelaran:</b> That sounds easy. Thank you very '
      + 'much.</p></div>',
      playable: ['Good afternoon, madam. How may I help you?',
      'Good afternoon. I have a current account here, but I don’t have '
        + 'online banking. Can I register for it?',
      'Of course. It’s a great service, and you can use it from any country.',
      'Could you show me your ID and your bank card, please?',
      'Here you are.',
      'Thank you. I’ll set up your account now. We will send a security code '
        + 'to your phone. Please enter it to finish.',
      'That sounds easy. Thank you very much.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '3D',
      bookRef: 'Unit 2 · 3D',
      type: 'shortanswer',
      title: 'A customer inquiry about online banking (longer)',
      instruction: 'Answer the questions.',
      items: [{ q: '1. What two documents does the banker ask for?',
          accept: ['What two documents does the banker ask for?'],
          keys: ['documents',
              'banker'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '2. What does the bank send to Mrs Oyelaran’s phone?',
          accept: ['What does the bank send to Mrs Oyelaran’s phone?'],
          keys: ['oyelaran',
              'phone'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' },
      { q: '3. How does Mrs Oyelaran feel about the service?',
          accept: ['How does Mrs Oyelaran feel about the service?'],
          keys: ['oyelaran',
              'about'], need: 0,
          evidence: 'The answer is in the text above — read that part again.' }],
      whyTitle: 'What each answer rests on'
    },
    {
      id: 'c3',
      ref: '3E',
      bookRef: 'Unit 2 · 3E',
      type: 'dragmatch',
      title: 'Useful phrases from the conversations',
      instruction: 'Match each phrase from the listenings to its purpose (one is extra).',
      poolLabel: 'Click a meaning, then click the item it belongs to.',
      cols: 3,
      say: true,
      chips: [{ id: 'm-a', label: 'a) showing sympathy' },
      { id: 'm-b', label: 'b) offering quick action' },
      { id: 'm-c', label: 'c) asking the customer to wait' },
      { id: 'm-d', label: 'd) directing the customer politely' },
      { id: 'm-e', label: 'e) ending the call (extra)' }],
      whyTitle: 'What each one means',
      targets: [{ id: 't1', num: 1, label: '“I’m sorry to hear that.”', accept: 'm-a',
          why: '<b>“I’m sorry to hear that.”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't2', num: 2, label: '“I can freeze the card right now.”', accept: 'm-a',
          why: '<b>“I can freeze the card right now.”</b> &mdash; this pairing is not '
              + 'in the key yet; check it against the unit\'s glossary.' },
      { id: 't3', num: 3, label: '“Could you take a seat?”', accept: 'm-a',
          why: '<b>“Could you take a seat?”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' },
      { id: 't4', num: 4, label: '“Could you go to window 3?”', accept: 'm-a',
          why: '<b>“Could you go to window 3?”</b> &mdash; this pairing is not in the '
              + 'key yet; check it against the unit\'s glossary.' }]
    }
  ]
});
