/* Unit 8 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u8-s12', {
  book: { source: 'Banking B1', ref: 'Unit 8 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a procedure note, '
  + 'complete one from a word list, and write your own in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 8 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the staff notice',
      instruction: 'Complete the notice with the words: verify, escalate, threshold, '
  + 'records, disclose.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Before any account is opened, you must [[1]] the customer’s identity.'
        + '<br>'
        + '2. Above the local reporting [[2]], the source-of-funds form is required.'
        + '<br>'
        + '3. You must [[3]] anything unusual to the compliance officer.'
        + '<br>'
        + '4. You mustn’t [[4]] to a customer that a report has been made.'
        + '<br>'
        + '5. [[5]] must be kept for at least five years.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['disclose',
      'escalate',
      'records',
      'threshold',
      'verify'],
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
      bookRef: 'Unit 8 · 6B',
      type: 'writer',
      title: 'Internal escalation note (50–70 words)',
      instruction: 'Write a short note escalating something unusual to the compliance '
  + 'officer.<br>Plan: Subject: ___ · Dear ___, · A customer has ___. · '
  + 'Each ___, but ___. · I have said nothing to ___. · Could you tell me '
  + '___? · Kind regards, ___<br>Phrase bank: each amount is below the '
  + 'threshold · together they are not · I have said nothing to the '
  + 'customer · could you tell me whether…<br>☐ A clear subject line with '
  + 'the account?<br>☐ The facts, with no opinion?<br>☐ A statement that '
  + 'the customer was not told?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Three cash deposits — account 4471 Dear Ms Demir, A customer '
        + 'has deposited nine thousand in cash on three days this week. Each '
        + 'amount is below the reporting threshold, but together they are not. '
        + 'The ID on file is current. I have said nothing to the customer. Could '
        + 'you tell me whether anything further is needed from me? Kind regards, '
        + 'Ana Silva'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short note escalating something unusual to the compliance '
  + 'officer. Plan: Subject: ___ · Dear ___, · A customer has ___. · Each '
  + '___, but ___. · I have said nothing to ___. · Could you tell me ___? '
  + '· Kind regards, ___ Phrase bank: each amount is below the threshold · '
  + 'together they are not · I have said nothing to the customer · could '
  + 'you tell me whether… ☐ A clear subject line with the account? ☐ The '
  + 'facts, with no opinion? ☐ A statement that the customer was not told? '
  + '☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 8 · 6C',
      type: 'writer',
      title: 'Explain a rule to a customer (50–70 words)',
      instruction: 'A customer has emailed to complain about being asked for ID again. '
  + 'Write a short, polite reply.<br>Plan: Subject: ___ · Dear ___, · '
  + 'Thank you for ___. · We must ___. · You don’t have to ___. · Kind '
  + 'regards, ___<br>☐ A polite, non-defensive tone?<br>☐ One must and one '
  + 'don’t have to?<br>☐ A clear next step?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your question about identification Dear Mr Okonkwo, Thank '
        + 'you for your email, and I am sorry for the inconvenience. We must '
        + 'hold a current official document for every customer, and the one on '
        + 'your file expired in March. You don’t have to bring anything else — '
        + 'one valid document is enough, and any branch can update it in two '
        + 'minutes. Kind regards, Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer has emailed to complain about being asked for ID again. '
  + 'Write a short, polite reply. Plan: Subject: ___ · Dear ___, · Thank '
  + 'you for ___. · We must ___. · You don’t have to ___. · Kind regards, '
  + '___ ☐ A polite, non-defensive tone? ☐ One must and one don’t have to? '
  + '☐ A clear next step? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
