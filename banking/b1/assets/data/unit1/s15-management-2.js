/* Unit 1 §15 — Management File — Welcoming a New Colleague.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u1-s15', {
  book: { source: 'Banking B1', ref: 'Unit 1 · Part 7 · Management File — Welcoming a New Colleague (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Welcoming a New Colleague (2)', title: 'Part 7 · Management File — Welcoming a New Colleague (2)' },
  objective: 'By the end of Part 7 you can welcome a new colleague as a manager '
  + 'does: use the phrases that put a new starter at ease, work through an '
  + 'induction checklist in order, and brief a new hire on their first '
  + 'week.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 1 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — welcome a new hire',
      instruction: 'You are a supervisor. Welcome a new team member. Explain three '
  + 'routine duties and one current project.<br>Card A (supervisor): greet '
  + '· explain three routine duties · mention one current project · offer '
  + 'help.<br>Card B (new hire): ask two questions about the '
  + 'job.<br>Stretch: the new hire is nervous — reassure them politely.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“Welcome aboard. In this team, we usually open accounts and answer '
        + 'customer questions. This month, we are moving to a new system, so we '
        + 'are all learning together.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 1 · 7E',
      type: 'writer',
      title: 'Writing — a team-member bio for the noticeboard (60–80 words)',
      instruction: 'Write a short, friendly bio to introduce a new colleague to the '
  + 'branch.<br>Plan: Please welcome ___, our new ___. He/She joined us '
  + '___. He/She usually ___. At the moment, he/she is ___. Please '
  + '___.<br>Phrase bank: Please welcome… · joined us this week · usually… '
  + '· at the moment… · make him/her feel welcome<br>☐ Name and role?<br>☐ '
  + 'One present-simple and one present-continuous sentence?<br>☐ A '
  + 'friendly, welcoming tone?<br>☐ 60–80 words?',
      minWords: 60,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 60–80 words words.'
        }],
      model: ['Please welcome Ana Silva, our new teller at the Warsaw branch. Ana '
        + 'joined us this week from our training programme in São Paulo. She '
        + 'usually helps customers with deposits and withdrawals. At the moment, '
        + 'she is learning our counter system and shadowing the team. Ana is '
        + 'friendly and hard-working. Please say hello and make her feel '
        + 'welcome.'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short, friendly bio to introduce a new colleague to the '
  + 'branch. Plan: Please welcome ___, our new ___. He/She joined us ___. '
  + 'He/She usually ___. At the moment, he/she is ___. Please ___. Phrase '
  + 'bank: Please welcome… · joined us this week · usually… · at the '
  + 'moment… · make him/her feel welcome ☐ Name and role? ☐ One '
  + 'present-simple and one present-continuous sentence? ☐ A friendly, '
  + 'welcoming tone? ☐ 60–80 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
