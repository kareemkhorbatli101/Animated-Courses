/* Unit 5 §4 — Grammar — Active and Passive Voice.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s04', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 2 · Grammar — Active and Passive Voice', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Active and Passive Voice', title: 'Part 2 · Grammar — Active and Passive Voice' },
  objective: 'By the end of Part 2 you can tell active from passive, form the '
  + 'passive to describe what the system does without naming who does it, '
  + 'correct the commonest mistake, and explain a process to a customer in '
  + 'it.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 5 · 2A',
      visual: { spot: 'atm' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> I didn’t get my '
      + 'code.</p><p><b>Petra:</b> Let me check. The code is sent to the '
      + 'number on your file.</p><p><b>Customer:</b> That number is '
      + 'old.</p><p><b>Petra:</b> Then it must be changed first. Your details '
      + 'are checked by the system, so the new number will be confirmed by a '
      + 'text tomorrow.</p></div>',
      playable: ['I didn’t get my code.',
      'Let me check. The code is sent to the number on your file.',
      'That number is old.',
      'Then it must be changed first. Your details are checked by the '
        + 'system, so the new number will be confirmed by a text tomorrow.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 5 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the passive verbs. Who or what '
  + 'does the action?<br>Remember: use the passive when the doer is '
  + 'obvious, unknown or not important. Add by + the doer only when it '
  + 'matters.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. is sent — active or passive? [[1]]'
        + '<br>'
        + '2. must be changed — who changes it? [[2]]'
        + '<br>'
        + '3. are checked by the system — why does the speaker say ‘by the '
            + 'system’? [[3]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '2B',
      bookRef: 'Unit 5 · 2B',
      type: 'discuss',
      title: 'Controlled practice (make it passive)',
      instruction: 'Rewrite each sentence in the passive. Leave out the doer where it is '
  + 'obvious.',
      questions: [{
            q: 'We check every login.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'The system blocked the card.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We will send a notification.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Someone reset the password this morning.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'The bank must verify your identity.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We update the app every month.',
            minWords: 6,
            rows: 2
          },
      {
            q: 'We do not store your password.',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 5 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'Your account was froze last night.',
          accept: ['Your account was froze last night.'],
          why: '' },
      { wrong: 'The payment is process in two minutes.',
          accept: ['The payment is process in two minutes.'],
          why: '' },
      { wrong: 'The app has update.',
          accept: ['The app has update.'],
          why: '' },
      { wrong: 'Your details are check by the system.',
          accept: ['Your details are check by the system.'],
          why: '' },
      { wrong: 'The card must be block immediately.',
          accept: ['The card must be block immediately.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
