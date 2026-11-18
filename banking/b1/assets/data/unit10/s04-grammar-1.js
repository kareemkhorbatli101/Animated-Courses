/* Unit 10 §4 — Grammar — Reported Speech.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s04', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 2 · Grammar — Reported Speech', part: '2', section: '4',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 2 · Grammar — Reported Speech', title: 'Part 2 · Grammar — Reported Speech' },
  objective: 'By the end of Part 2 you can report what a customer said without '
  + 'changing its meaning, shift the tense and the pronouns correctly, '
  + 'correct the commonest mistake, and write up what was agreed in a '
  + 'meeting.',
  cards: [
    {
      id: 'c1',
      ref: '2A',
      bookRef: 'Unit 10 · 2A',
      visual: { spot: 'letter-of-credit' },
      type: 'study',
      title: 'Notice the grammar — the script',
      instruction: 'Listen to each line, or read the script. Every word is the book\'s own.',
      html: '<div class="script"><p><b>Priya:</b> What did the customer '
      + 'say?</p><p><b>Diego:</b> She said she needed a facility of fifty '
      + 'thousand.</p><p><b>Priya:</b> Did she say why?</p><p><b>Diego:</b> '
      + 'She told me that three invoices were overdue, and she asked whether '
      + 'we could decide by Friday.</p><p><b>Priya:</b> Then I will call her '
      + 'tomorrow.</p></div>',
      playable: ['What did the customer say?',
      'She said she needed a facility of fifty thousand.',
      'Did she say why?',
      'She told me that three invoices were overdue, and she asked whether '
        + 'we could decide by Friday.',
      'Then I will call her tomorrow.'],
      doneLabel: 'I have listened'
    },
    {
      id: 'c2',
      ref: '2A',
      bookRef: 'Unit 10 · 2A',
      type: 'cloze',
      title: 'Notice the grammar',
      instruction: 'Read the short dialogue. Underline the reported sentences. What '
  + 'happens to the tense?<br>Remember: the verb usually steps back one '
  + 'tense: present → past, present perfect → past perfect, can → could, '
  + 'will → would. Say takes no person; tell takes one (she told me).',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. “I need a facility” → “She said she [[1]] a facility.”'
        + '<br>'
        + '2. said / told — which one is followed by a person? [[2]]'
        + '<br>'
        + '3. asked whether — what kind of sentence is being reported? [[3]]'
        + '<br>'
        + '4. “by Friday” — does a time word ever change in reported speech? [[4]]'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': []
      },
      bank: ['Direct',
      'He said they had paid.',
      'Reported',
      'She asked whether we could decide by Friday.',
      'She said she needed a facility.',
      '“Can you decide by Friday?”',
      '“I need a facility.”',
      '“We have paid.”'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c3',
      ref: '2B',
      bookRef: 'Unit 10 · 2B',
      type: 'discuss',
      title: 'Controlled practice (report what they said)',
      instruction: 'Report each sentence. Use said, told or asked.',
      questions: [{
            q: '“I need a facility.” (he)',
            minWords: 6,
            rows: 2
          },
      {
            q: '“We have paid the invoice.” (she)',
            minWords: 6,
            rows: 2
          },
      {
            q: '“Can you decide by Friday?” (she, to me)',
            minWords: 6,
            rows: 2
          },
      {
            q: '“We are opening a second shop.” (they)',
            minWords: 6,
            rows: 2
          },
      {
            q: '“I will send the figures tomorrow.” (he, to us)',
            minWords: 6,
            rows: 2
          }],
      okMsg: 'Your answers are saved — this one is a discussion, so the book prints '
        + 'no single answer.'
    },
    {
      id: 'c4',
      ref: '2C',
      bookRef: 'Unit 10 · 2C',
      type: 'editor',
      title: 'Error correction',
      instruction: 'Find and correct the mistake in each sentence.',
      write: true,
      items: [{ wrong: 'He said he has paid the invoice.',
          accept: ['He said he has paid the invoice.'],
          why: '' },
      { wrong: 'She told that the figures were ready.',
          accept: ['She told that the figures were ready.'],
          why: '' },
      { wrong: 'They asked me can we decide by Friday.',
          accept: ['They asked me can we decide by Friday.'],
          why: '' },
      { wrong: 'He said me the payroll runs on the 25th.',
          accept: ['He said me the payroll runs on the 25th.'],
          why: '' },
      { wrong: 'She said she will send it tomorrow.',
          accept: ['She said she will send it tomorrow.'],
          why: '' }],
      whyTitle: 'The fault in each sentence'
    }
  ]
});
