/* Unit 6 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u6-s12', {
  book: { source: 'Banking B1', ref: 'Unit 6 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of an inquiry and '
  + 'its reply, complete one from a word list, and write your own inquiry '
  + 'in 50 to 70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 6 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the inquiry email',
      instruction: 'Complete the email with the words: confirm, whether, arrive, charged, '
  + 'reference.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Dear Transfers Team, could you please [[1]] the status of the '
            + 'payment below?'
        + '<br>'
        + '2. The [[2]] number is HB-4471-22.'
        + '<br>'
        + '3. I would like to know [[3]] the BIC was included.'
        + '<br>'
        + '4. The customer expected the money to [[4]] on Tuesday.'
        + '<br>'
        + '5. Please also tell me what fee was [[5]].'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['arrive',
      'charged',
      'confirm',
      'reference',
      'whether'],
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
      bookRef: 'Unit 6 · 6B',
      type: 'writer',
      title: 'Transfer inquiry email (50–70 words)',
      instruction: 'Write a short internal email asking about a delayed transfer. Use two '
  + 'indirect questions.<br>Plan: Subject: ___ · Dear ___, · Could you '
  + 'tell me ___? · It was sent on ___. · May I also ask whether ___? · '
  + 'Kind regards, ___<br>Phrase bank: Could you tell me where… · May I '
  + 'ask whether… · It was sent on… · the customer is returning on…<br>☐ A '
  + 'clear subject line with the reference?<br>☐ Two indirect '
  + 'questions?<br>☐ The date the payment was sent?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Delayed transfer — reference HB-4471-22 Dear Transfers Team, '
        + 'Could you tell me where payment HB-4471-22 is at the moment? It was '
        + 'sent on Friday the fourteenth and has not arrived. May I also ask '
        + 'whether the BIC was included when it left us? The customer is '
        + 'returning on Thursday. Kind regards, Luca Rossi'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short internal email asking about a delayed transfer. Use two '
  + 'indirect questions. Plan: Subject: ___ · Dear ___, · Could you tell '
  + 'me ___? · It was sent on ___. · May I also ask whether ___? · Kind '
  + 'regards, ___ Phrase bank: Could you tell me where… · May I ask '
  + 'whether… · It was sent on… · the customer is returning on… ☐ A clear '
  + 'subject line with the reference? ☐ Two indirect questions? ☐ The date '
  + 'the payment was sent? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 6 · 6C',
      type: 'writer',
      title: 'Reply to a customer (50–70 words)',
      instruction: 'A customer asks why her transfer has not arrived. Write a short, '
  + 'honest reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. '
  + '· The payment ___. · We have now ___. · Could you let us know ___? · '
  + 'Kind regards, ___<br>☐ A clear subject line?<br>☐ An honest '
  + 'explanation of the delay?<br>☐ One indirect question?<br>☐ 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your transfer of 500 Dear Mrs Oyelaran, Thank you for your '
        + 'patience. The payment left us on Friday and is currently held by the '
        + 'partner bank, because the BIC was missing. We have now supplied it, '
        + 'and the money should arrive within one working day. Could you let us '
        + 'know if it has not arrived by Thursday? Kind regards, Customer '
        + 'Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer asks why her transfer has not arrived. Write a short, '
  + 'honest reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · '
  + 'The payment ___. · We have now ___. · Could you let us know ___? · '
  + 'Kind regards, ___ ☐ A clear subject line? ☐ An honest explanation of '
  + 'the delay? ☐ One indirect question? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
