/* Unit 4 §15 — Management File — Briefing the Team on a New Product.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u4-s15', {
  book: { source: 'Banking B1', ref: 'Unit 4 · Part 7 · Management File — Briefing the Team on a New Product (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Briefing the Team on a New Product (2)', title: 'Part 7 · Management File — Briefing the Team on a New Product (2)' },
  objective: 'By the end of Part 7 you can brief a team on a new product as a '
  + 'manager does: say what it is for, what has changed, what staff must '
  + 'tell customers, and what they must not promise.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 4 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — brief your team',
      instruction: 'You are a branch manager. Brief your team on a new product in two '
  + 'minutes.<br>Card A (manager): announce · name the main difference · '
  + 'give the target · give the exact words for one likely '
  + 'question.<br>Card B (team member): ask two questions, one of them '
  + 'difficult.<br>Stretch: a team member says the target is too high — '
  + 'respond professionally.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“From Monday we are offering the Step Saver Plus. The main difference '
        + 'is the rate — half a point higher — but only one withdrawal a year. '
        + 'Our target is twenty a week. If a customer asks about fees, say there '
        + 'are none.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 4 · 7E',
      type: 'writer',
      title: 'Writing — an internal product note (50–70 words)',
      instruction: 'Write a short internal note introducing a new product to the '
  + 'branch.<br>Plan: Subject: ___ · From ___ we are offering ___. · It '
  + 'pays ___ than ___. · It is the best choice for ___. · Our target is '
  + '___.<br>Phrase bank: From Monday we are offering… · the main '
  + 'difference is… · it pays more than… · our target is…<br>☐ A clear '
  + 'subject line?<br>☐ One comparative and one superlative?<br>☐ The '
  + 'target named?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: New account from Monday — Step Saver Plus From Monday we are '
        + 'offering the Step Saver Plus. It pays half a point more than the Step '
        + 'Saver, but customers may withdraw only once a year. It is the best '
        + 'choice for money that will not be touched. There are no fees. Our '
        + 'target is twenty new accounts a week. Marta Nowak'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short internal note introducing a new product to the branch. '
  + 'Plan: Subject: ___ · From ___ we are offering ___. · It pays ___ than '
  + '___. · It is the best choice for ___. · Our target is ___. Phrase '
  + 'bank: From Monday we are offering… · the main difference is… · it '
  + 'pays more than… · our target is… ☐ A clear subject line? ☐ One '
  + 'comparative and one superlative? ☐ The target named? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
