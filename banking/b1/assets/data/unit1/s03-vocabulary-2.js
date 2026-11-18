/* Unit 1 §3 — Vocabulary.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s03', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 1 · Vocabulary (2)', part: '1', section: '3',
          track: 'operator', label: 'Pre-class input', lesson: 'Part 1 · Vocabulary (2)', title: 'Part 1 · Vocabulary (2)' },
  objective: 'By the end of Part 1 you can use this unit\'s banking roles and '
  + 'service words correctly, tell a front-office job from a back-office '
  + 'one and say why, and write a short paragraph using at least five of '
  + 'them.',
  cards: [
    {
      id: 'c1',
      ref: '1D',
      bookRef: 'Unit 1 · 1D',
      visual: { spot: 'kyc-check' },
      type: 'cloze',
      title: 'Front office or back office?',
      instruction: 'Put each role in the correct group. Front office = works with '
  + 'customers. Back office = works behind the scenes.<br>Roles: teller, '
  + 'IT support, loan officer, risk analyst, customer service rep, '
  + 'compliance officer.',
      text: '<div style="font-size:16px;line-height:2.4">'
        + '1. Front office (with customers): [[1]]'
        + '<br>'
        + '2. Back office (behind the scenes): [[2]]'
        + '</div>',
      answers: {
        '1': [],
        '2': []
      },
      whyTitle: 'How each gap is decided',
      why: {
        '1': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.',
        '2': 'The book prints this sentence for you to complete from the unit\'s '
          + 'own word list.'
      }
    },
    {
      id: 'c2',
      ref: '1E',
      bookRef: 'Unit 1 · 1E',
      type: 'writer',
      title: 'Write with the words (40–60 words)',
      instruction: 'Write a short paragraph about a bank you know. Use at least five '
  + 'words from Part 1.<br>☐ Did you use five Part-1 words?<br>☐ Is it '
  + '40–60 words?<br>☐ Are your sentences short and clear?',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words words.'
        }],
      model: ['My local branch is small but friendly. The tellers are polite, and '
        + 'the customer service rep always helps me. I have a savings account '
        + 'there, and I use the ATM near my home. Last year I took a small loan.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short paragraph about a bank you know. Use at least five '
  + 'words from Part 1. ☐ Did you use five Part-1 words? ☐ Is it 40–60 '
  + 'words? ☐ Are your sentences short and clear?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
