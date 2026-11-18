/* Unit 7 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s12', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a safety-advice '
  + 'message, complete one from a word list, and write your own in 50 to '
  + '70 words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 7 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the safety notice',
      instruction: 'Complete the notice with the words: share, delete, report, printed, blocked.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Never [[1]] a one-time code with anyone, including bank staff.'
        + '<br>'
        + '2. If you receive a message with a deadline, please [[2]] it.'
        + '<br>'
        + '3. If you want to check a call, use the number [[3]] on your card.'
        + '<br>'
        + '4. Your card can be [[4]] in one tap in the app.'
        + '<br>'
        + '5. Please [[5]] anything unusual to us at once.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['blocked',
      'delete',
      'printed',
      'report',
      'share'],
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
      bookRef: 'Unit 7 · 6B',
      type: 'report',
      title: 'Safety advice email to customers (50–70 words)',
      instruction: 'Write a short email to customers with safety advice. Use two '
  + 'conditionals.<br>Plan: Subject: ___ · Dear ___, · We are seeing ___. '
  + '· If a message ___, it ___. · If you want to ___, please ___. · Kind '
  + 'regards, ___<br>Phrase bank: if a message asks you for… · it is not '
  + 'from us · please hang up and dial… · you can freeze your card at any '
  + 'time<br>☐ A clear subject line?<br>☐ Two conditionals?<br>☐ One clear '
  + 'action for the customer?<br>☐ 50–70 words?',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['Subject: Keeping your account safe Dear Customer, We are seeing more '
        + 'false messages at the moment. If a message asks you for a one-time '
        + 'code, it is not from us. If you want to check whether a call is real, '
        + 'please hang up and dial the number printed on your card. You can '
        + 'freeze your card in the app at any time. Kind regards, Harbour Bank']
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 7 · 6C',
      type: 'writer',
      title: 'Reply to a worried customer (50–70 words)',
      instruction: 'A customer writes that she clicked a link. Write a calm, practical '
  + 'reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · Your '
  + 'card has been ___. · If ___, we will ___. · Could you ___? · Kind '
  + 'regards, ___<br>☐ A calm, non-blaming tone?<br>☐ One '
  + 'conditional?<br>☐ A clear next step for the customer?<br>☐ 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: The link you clicked Dear Ms Fernandes, Thank you for '
        + 'telling us so quickly. Your card has been blocked, and nothing can be '
        + 'spent on it. If a payment appears after the time you reported, we '
        + 'will refund it. Could you change your password today? A new card will '
        + 'arrive within three days. You did the right thing by calling. Kind '
        + 'regards, Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer writes that she clicked a link. Write a calm, practical '
  + 'reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · Your '
  + 'card has been ___. · If ___, we will ___. · Could you ___? · Kind '
  + 'regards, ___ ☐ A calm, non-blaming tone? ☐ One conditional? ☐ A clear '
  + 'next step for the customer? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
