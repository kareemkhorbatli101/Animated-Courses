/* Unit 2 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u2-s12', {
  book: { source: 'Banking B1', ref: 'Unit 2 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a short service '
  + 'email, complete one from a word list, and write your own reply to a '
  + 'customer in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 2 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the service email',
      instruction: 'Complete the reply email with the words: apologise, confirm, assist, '
  + 'contact, regards.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Dear Mr Okonkwo, thank you for your email. I am happy to [[1]] you.'
        + '<br>'
        + '2. First, I would like to [[2]] for the delay.'
        + '<br>'
        + '3. I can [[3]] that your new card is ready to collect.'
        + '<br>'
        + '4. If you have any questions, please [[4]] us on the number below.'
        + '<br>'
        + '5. Kind [[5]], Customer Service Team.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['apologise',
      'assist',
      'confirm',
      'contact',
      'regards'],
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
      bookRef: 'Unit 2 · 6B',
      type: 'writer',
      title: 'Account inquiry email (50–70 words)',
      instruction: 'A customer asks how to open a savings account. Write a short, polite '
  + 'reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · To '
  + '___, could you please ___? · A member of staff can ___. · Kind '
  + 'regards, ___<br>Phrase bank: Thank you for your email · I am happy to '
  + 'help · could you please… · a member of staff can assist you · Kind '
  + 'regards<br>☐ A clear subject line?<br>☐ A polite request with '
  + 'could/please?<br>☐ A warm greeting and close?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your question about a savings account Dear Ms Fernandes, '
        + 'Thank you for your email. I am happy to help. To open a savings '
        + 'account, could you please visit our branch with your ID and proof of '
        + 'address? The procedure is quick, and a member of staff can assist '
        + 'you. Please contact us if you have any questions. Kind regards, '
        + 'Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer asks how to open a savings account. Write a short, polite '
  + 'reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · To ___, '
  + 'could you please ___? · A member of staff can ___. · Kind regards, '
  + '___ Phrase bank: Thank you for your email · I am happy to help · '
  + 'could you please… · a member of staff can assist you · Kind regards ☐ '
  + 'A clear subject line? ☐ A polite request with could/please? ☐ A warm '
  + 'greeting and close? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 2 · 6C',
      type: 'writer',
      title: 'Lost-card response email (50–70 words)',
      instruction: 'A customer emails to say they lost their card. Write a calm, helpful '
  + 'reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · I am '
  + 'sorry to hear ___. · For your security, we have ___. · Could you '
  + 'please ___? · Kind regards, ___<br>☐ A calm, polite tone?<br>☐ One '
  + 'polite modal request?<br>☐ A clear next step for the customer?<br>☐ '
  + '50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your lost card Dear Mr Tanaka, Thank you for letting us '
        + 'know. I am sorry to hear about your lost card. For your security, we '
        + 'have frozen it. Could you please visit the branch with your ID so we '
        + 'can issue a new card? If you see any transaction you did not make, '
        + 'please contact us at once. Kind regards, Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer emails to say they lost their card. Write a calm, helpful '
  + 'reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · I am '
  + 'sorry to hear ___. · For your security, we have ___. · Could you '
  + 'please ___? · Kind regards, ___ ☐ A calm, polite tone? ☐ One polite '
  + 'modal request? ☐ A clear next step for the customer? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
