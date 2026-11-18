/* Unit 10 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s12', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a meeting note '
  + 'and a business reply, complete one from a word list, and write your '
  + 'own in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 10 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the meeting note',
      instruction: 'Complete the note with the words: said, told, asked, overdue, facility.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Ms Okafor [[1]] she needed a [[1]] of fifty thousand.'
        + '<br>'
        + '2. She [[2]] me that three invoices were [[2]] by sixty days.'
        + '<br>'
        + '3. She [[3]] whether we could decide by Friday.'
        + '<br>'
        + '4. I [[4]] her that I would call tomorrow.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': []
      },
      bank: ['asked',
      'facility',
      'overdue',
      'said',
      'told'],
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
      id: 'c2',
      ref: '6B',
      bookRef: 'Unit 10 · 6B',
      type: 'writer',
      title: 'Report a customer meeting (50–70 words)',
      instruction: 'Write a short meeting note for the credit team. Use three reported '
  + 'sentences.<br>Plan: Subject: ___ · ___ said ___. · She told me that '
  + '___. · She asked whether ___. · I said I would ___.<br>Phrase bank: '
  + 'she said she needed… · she told me that… · she asked whether… · I '
  + 'said I would…<br>☐ A clear subject line with the company?<br>☐ Three '
  + 'reported sentences?<br>☐ The customer’s words, not your opinion?<br>☐ '
  + '50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Meeting note — Okafor Coffee Ltd Ms Okafor said she needed a '
        + 'facility of fifty thousand. She told me that three invoices were '
        + 'overdue by more than sixty days, and that the payroll runs on the '
        + '25th. She asked whether we could decide by Friday. I said I would '
        + 'call her tomorrow. Statements for the last three months are attached. '
        + 'Diego Moreno'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short meeting note for the credit team. Use three reported '
  + 'sentences. Plan: Subject: ___ · ___ said ___. · She told me that ___. '
  + '· She asked whether ___. · I said I would ___. Phrase bank: she said '
  + 'she needed… · she told me that… · she asked whether… · I said I '
  + 'would… ☐ A clear subject line with the company? ☐ Three reported '
  + 'sentences? ☐ The customer’s words, not your opinion? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 10 · 6C',
      type: 'writer',
      title: 'Reply to a business customer (50–70 words)',
      instruction: 'Write a short reply to the business customer after the '
  + 'meeting.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · I '
  + 'have put ___ and explained ___. · They have asked for ___. · Could '
  + 'you ___? · Kind regards, ___<br>☐ A clear subject line?<br>☐ What you '
  + 'have done, and what is still needed?<br>☐ A clear deadline?<br>☐ '
  + '50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your facility request Dear Ms Okafor, Thank you for your '
        + 'time this morning. I have put your request to the credit team and '
        + 'explained that three invoices are overdue and that the payroll runs '
        + 'on the 25th. They have asked for the last three statements. Could you '
        + 'send them today so that we can answer by Friday? Kind regards, Diego '
        + 'Moreno'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short reply to the business customer after the meeting. Plan: '
  + 'Subject: ___ · Dear ___, · Thank you for ___. · I have put ___ and '
  + 'explained ___. · They have asked for ___. · Could you ___? · Kind '
  + 'regards, ___ ☐ A clear subject line? ☐ What you have done, and what '
  + 'is still needed? ☐ A clear deadline? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
