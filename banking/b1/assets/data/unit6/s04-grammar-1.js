/* Unit 6 §4 — Grammar — Indirect Questions.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s04', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 2 · Grammar — Indirect Questions', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Indirect Questions', title: 'Part 2 · Grammar — Indirect Questions' },
  objective: 'By the end of Part 2 you can turn a direct question into an indirect '
  + 'one, choose the right opening for the politeness the situation needs, '
  + 'correct the commonest word-order mistake, and ask a customer for '
  + 'sensitive details courteously.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 6 · 2A',
      visual: { spot: 'rate-board' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Customer:</b> Could you tell me what '
      + 'today’s rate is?</p><p><b>Ana:</b> Of course. It is 4.35 to the '
      + 'euro.</p><p><b>Customer:</b> And do you know how long the transfer '
      + 'takes?</p><p><b>Ana:</b> One working day. May I ask whether you have '
      + 'the IBAN with you?</p><p><b>Customer:</b> I do, yes.</p></div>',
      playable: ['Could you tell me what today’s rate is?',
      'Of course. It is 4.35 to the euro.',
      'And do you know how long the transfer takes?',
      'One working day. May I ask whether you have the IBAN with you?',
      'I do, yes.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 6 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the indirect questions. What '
  + 'happens to the word order?<br>Remember: in an indirect question the '
  + 'subject comes before the verb, and do / does / did disappears. Use '
  + 'whether or if when there is no question word.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “what today’s rate is” — where is the verb? [[1]]'
        + '<br>'
        + '2. “how long the transfer takes” — is there do/does? [[2]]'
        + '<br>'
        + '3. whether — what kind of question does it introduce? [[3]]'
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
      bookRef: 'Unit 6 · 2B',
      type: 'discuss',
      title: 'Controlled practice (make it indirect)',
      instruction: 'Rewrite each direct question as an indirect question.',
      questions: [{
            q: 'How much does it cost?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Where is the beneficiary’s bank?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'When will the money arrive?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'Does the rate change today?',
            minWords: 6,
            rows: 2
          },
      {
            q: 'What is your account number?',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 6 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'Do you know when does the branch close?',
          accept: ['Do you know when does the branch close?'],
          why: '' },
      { wrong: 'Could you tell me how much is the fee?',
          accept: ['Could you tell me how much is the fee?'],
          why: '' },
      { wrong: 'May I ask do you have the IBAN?',
          accept: ['May I ask do you have the IBAN?'],
          why: '' },
      { wrong: 'I would like to know where is the beneficiary’s bank.',
          accept: ['I would like to know where is the beneficiary’s bank.'],
          why: '' },
      { wrong: 'Can you tell me what time does it arrive?',
          accept: ['Can you tell me what time does it arrive?'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
