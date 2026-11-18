/* Unit 9 §12 — Writing.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s12', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 6 · Writing', part: '6', section: '12',
          track: 'operator', label: 'In-class / homework output', lesson: 'Part 6 · Writing', title: 'Part 6 · Writing' },
  objective: 'By the end of Part 6 you can recognise the parts of a short saving '
  + 'plan, complete one from a word list, and write your own in 50 to 70 '
  + 'words.',
  cards: [
    {
      id: 'c1',
      ref: '6A',
      bookRef: 'Unit 9 · 6A',
      visual: { spot: 'savings-goal' },
      type: 'cloze',
      title: 'Guided writing — complete the saving plan',
      instruction: 'Complete the plan with the words: goal, aside, payday, reached, review.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Your [[1]] is six thousand by next December.'
        + '<br>'
        + '2. You have [[2]] two thousand so far.'
        + '<br>'
        + '3. You will put two hundred and fifty [[3]] each month.'
        + '<br>'
        + '4. The transfer will leave your account on [[4]].'
        + '<br>'
        + '5. We will [[5]] the plan in six months.'
        + '</div>',
      answers: {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': []
      },
      bank: ['aside',
      'goal',
      'payday',
      'reached',
      'review'],
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
      bookRef: 'Unit 9 · 6B',
      type: 'writer',
      title: 'A short saving plan (50–70 words)',
      instruction: 'Write a short saving plan for a customer. Use one present perfect and '
  + 'one past simple.<br>Plan: Subject: ___ · Dear ___, · You opened ___ '
  + 'and you have saved ___. · To reach ___, we will ___. · We will review '
  + '___. · Kind regards, ___<br>Phrase bank: you have saved ___ so far · '
  + 'you opened the account in… · to reach ___ by ___ · we will review the '
  + 'plan in…<br>☐ A clear subject line?<br>☐ One present perfect and one '
  + 'past simple?<br>☐ A date for the review?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your saving plan Dear Ms Cruz, Thank you for coming in. You '
        + 'opened the account in March and you have saved two thousand so far — '
        + 'about two hundred and fifty a month. To reach six thousand by '
        + 'December, we will keep that amount and move the transfer to payday. '
        + 'We will review the plan in six months. Kind regards, Johanna Berg'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short saving plan for a customer. Use one present perfect and '
  + 'one past simple. Plan: Subject: ___ · Dear ___, · You opened ___ and '
  + 'you have saved ___. · To reach ___, we will ___. · We will review '
  + '___. · Kind regards, ___ Phrase bank: you have saved ___ so far · you '
  + 'opened the account in… · to reach ___ by ___ · we will review the '
  + 'plan in… ☐ A clear subject line? ☐ One present perfect and one past '
  + 'simple? ☐ A date for the review? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    },
    {
      id: 'c3',
      ref: '6C',
      bookRef: 'Unit 9 · 6C',
      type: 'writer',
      title: 'Reply to a customer about investing (50–70 words)',
      instruction: 'A customer asks whether she should invest her deposit money. Write an '
  + 'honest, careful reply.<br>Plan: Subject: ___ · Dear ___, · Thank you '
  + 'for ___. · You have told me ___. · For money needed ___, ___. · If '
  + '___, we can ___. · Kind regards, ___<br>☐ An honest, careful '
  + 'tone?<br>☐ One present perfect?<br>☐ No promise about returns?<br>☐ '
  + '50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Your question about investing Dear Ms Cruz, Thank you for '
        + 'your question. You have told me that you will need this money in '
        + 'about two years. For money needed that soon, saving is usually the '
        + 'better choice, because the value of an investment can fall just when '
        + 'you need it. If your plans change, we can look at it again. Kind '
        + 'regards, Johanna Berg'],
      coach: {
        title: 'Check before you finish',
        task: 'A customer asks whether she should invest her deposit money. Write an '
  + 'honest, careful reply. Plan: Subject: ___ · Dear ___, · Thank you for '
  + '___. · You have told me ___. · For money needed ___, ___. · If ___, '
  + 'we can ___. · Kind regards, ___ ☐ An honest, careful tone? ☐ One '
  + 'present perfect? ☐ No promise about returns? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
