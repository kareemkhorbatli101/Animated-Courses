/* Unit 4 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s12', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a recommendation '
  + 'email, complete one from a word list, and write your own in 50 to 70 '
  + 'words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 4 · 6A',
      visual: { spot: 'email-parts' },
      type: 'cloze',
      title: 'Guided writing — complete the recommendation',
      instruction: 'Complete the email with the words: suggest, flexible, rate, compared, suit.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Dear Mr Okonkwo, thank you for your visit. I have [[1]] our three '
            + 'savings accounts for you.'
        + '<br>'
        + '2. Based on what you told me, I would [[2]] the Step Saver.'
        + '<br>'
        + '3. It pays a better [[3]] than the Everyday Saver.'
        + '<br>'
        + '4. It is less [[4]], but you may still withdraw twice a year.'
        + '<br>'
        + '5. I believe it would [[5]] your plans for next year.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['compared',
      'flexible',
      'rate',
      'suggest',
      'suit'],
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
      bookRef: 'Unit 4 · 6B',
      type: 'writer',
      title: 'Product recommendation email (50–70 words)',
      instruction: 'Write a short email recommending one product to a customer. Use one '
  + 'comparative and one superlative.<br>Plan: Subject: ___ · Dear ___, · '
  + 'Thank you for ___. · Based on ___, I would suggest ___. · It pays a '
  + '___ rate than ___. · Kind regards, ___<br>Phrase bank: Based on what '
  + 'you told me… · I would suggest… · It pays a higher rate than… · the '
  + 'highest rate we offer<br>☐ A clear subject line?<br>☐ One comparative '
  + 'and one superlative?<br>☐ A reason for the recommendation?<br>☐ 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your savings — my recommendation Dear Mr Lima, Thank you for '
        + 'coming in. Based on your plans, I would suggest the Step Saver. It '
        + 'pays a higher rate than the Everyday Saver, and it still allows two '
        + 'withdrawals a year. The Fixed 12 pays the highest rate, but your '
        + 'money would be locked for twelve months. Kind regards, Diego Moreno'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short email recommending one product to a customer. Use one '
  + 'comparative and one superlative. Plan: Subject: ___ · Dear ___, · '
  + 'Thank you for ___. · Based on ___, I would suggest ___. · It pays a '
  + '___ rate than ___. · Kind regards, ___ Phrase bank: Based on what you '
  + 'told me… · I would suggest… · It pays a higher rate than… · the '
  + 'highest rate we offer ☐ A clear subject line? ☐ One comparative and '
  + 'one superlative? ☐ A reason for the recommendation? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 4 · 6C',
      type: 'writer',
      title: 'Compare-two-cards email (50–70 words)',
      instruction: 'A customer asks which card to take abroad. Write a short, clear '
  + 'reply.<br>Plan: Subject: ___ · Dear ___, · Thank you for ___. · A ___ '
  + 'is ___ because ___. · However, a ___ is ___. · I would suggest ___. · '
  + 'Kind regards, ___<br>☐ A clear subject line?<br>☐ Two products '
  + 'compared?<br>☐ A clear recommendation?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Debit card or credit card abroad Dear Ms Fernandes, Thank '
        + 'you for your question. A debit card is cheaper, because there is no '
        + 'annual fee. However, a credit card is safer abroad, as it is easier '
        + 'to stop a payment if something goes wrong. For a two-week trip, I '
        + 'would suggest taking both and using the credit card for hotels. Kind '
        + 'regards, Customer Service'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer asks which card to take abroad. Write a short, clear '
  + 'reply. Plan: Subject: ___ · Dear ___, · Thank you for ___. · A ___ is '
  + '___ because ___. · However, a ___ is ___. · I would suggest ___. · '
  + 'Kind regards, ___ ☐ A clear subject line? ☐ Two products compared? ☐ '
  + 'A clear recommendation? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
