/* Unit 3 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u3-s12', {
  book: { source: 'Banking B1', ref: 'Unit 3 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a short internal '
  + 'note, complete one from a word list, and write your own note about a '
  + 'counter problem in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 3 · 6A',
      visual: { spot: 'bank-counter' },
      type: 'cloze',
      title: 'Guided writing — complete the transaction note',
      instruction: 'Complete the internal note with the words: deposited, balance, '
  + 'receipt, verified, slip.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. At 10:15 a customer [[1]] 450 in cash into a current account.'
        + '<br>'
        + '2. I [[2]] the customer’s ID before the transaction.'
        + '<br>'
        + '3. The customer completed a deposit [[3]] and signed it.'
        + '<br>'
        + '4. The new [[4]] was shown to the customer on screen.'
        + '<br>'
        + '5. A printed [[5]] was given to the customer.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['balance',
      'deposited',
      'receipt',
      'slip',
      'verified'],
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '3': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '4': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '5': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c2',
      ref: '6B',
      bookRef: 'Unit 3 · 6B',
      type: 'writer',
      title: 'Internal email — process report (50–70 words)',
      instruction: 'Write a short internal email to your supervisor about a busy hour at '
  + 'the counter.<br>Plan: Subject: ___ · Dear ___, · Between ___ and ___ '
  + 'we ___. · Most of them were ___. · There were a few ___. · Best '
  + 'regards, ___<br>Phrase bank: Between ___ and ___ we served… · Most of '
  + 'them were… · There were a few… · No cash differences<br>☐ A clear '
  + 'subject line?<br>☐ One quantifier used correctly?<br>☐ A short, '
  + 'factual tone?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Counter report — Tuesday morning Dear Ms Nowak, Between nine '
        + 'and eleven we served forty-two customers. Most of them were cash '
        + 'deposits and withdrawals. There were a few bill payments and a little '
        + 'trouble with the note counter, which I have reported to IT. No cash '
        + 'differences at the end of the hour. Best regards, Grace'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short internal email to your supervisor about a busy hour at '
  + 'the counter. Plan: Subject: ___ · Dear ___, · Between ___ and ___ we '
  + '___. · Most of them were ___. · There were a few ___. · Best regards, '
  + '___ Phrase bank: Between ___ and ___ we served… · Most of them were… '
  + '· There were a few… · No cash differences ☐ A clear subject line? ☐ '
  + 'One quantifier used correctly? ☐ A short, factual tone? ☐ 50–70 '
  + 'words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 3 · 6C',
      type: 'writer',
      title: 'Customer inquiry email (50–70 words)',
      instruction: 'A customer emails to ask why a payment left her account. Write a '
  + 'short, clear reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for '
  + '___. · The payment of ___ was ___. · A ___ is ___. · Could you please '
  + '___? · Kind regards, ___<br>☐ A clear subject line?<br>☐ A simple '
  + 'explanation of the banking word?<br>☐ A clear next step?<br>☐ 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your question about a payment Dear Ms Fernandes, Thank you '
        + 'for your email. The payment of 85.00 on 14 March was a direct debit '
        + 'to City Power. A direct debit is a payment you have given a company '
        + 'permission to collect. If you would like to stop it, could you please '
        + 'visit the branch with your ID? Kind regards, Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer emails to ask why a payment left her account. Write a '
  + 'short, clear reply. Plan: Subject: ___ · Dear ___, · Thank you for '
  + '___. · The payment of ___ was ___. · A ___ is ___. · Could you please '
  + '___? · Kind regards, ___ ☐ A clear subject line? ☐ A simple '
  + 'explanation of the banking word? ☐ A clear next step? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
