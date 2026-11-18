/* Unit 9 §15 — Management File — Coaching a Savings Goal.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u9-s15', {
  book: { source: 'Banking B1', ref: 'Unit 9 · Part 7 · Management File — Coaching a Savings Goal (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Coaching a Savings Goal (2)', title: 'Part 7 · Management File — Coaching a Savings Goal (2)' },
  objective: 'By the end of Part 7 you can coach a savings goal as a manager does: '
  + 'ask the questions that uncover what the customer really wants, and '
  + 'set a target they will keep.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 9 · 7D',
      visual: { spot: 'savings-goal' },
      type: 'report',
      title: 'Role play — coach a customer',
      instruction: 'A customer has missed her savings target and wants to give up. Coach '
  + 'her without judging.<br>Card A (adviser): start from what has been '
  + 'done · find the obstacle · name it kindly · offer two '
  + 'changes.<br>Card B (customer): you have saved 2,000 since March; your '
  + 'car cost 800 in July; you feel you have failed.<br>Stretch: the '
  + 'customer says she wants to stop altogether — keep the door open '
  + 'without pressure.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“You have saved two thousand since March, which is more than most '
        + 'people manage. May I ask what got in the way? … Then the plan was '
        + 'missing a buffer, not the discipline. Shall we move the date rather '
        + 'than stop?”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 9 · 7E',
      type: 'writer',
      title: 'Writing — a coaching summary note (50–70 words)',
      instruction: 'Write a short note summarising the meeting for the customer’s '
  + 'file.<br>Plan: Subject: ___ · ___ opened ___ and has saved ___. · She '
  + 'did not ___ because ___. · We have agreed ___. · Review again '
  + '___.<br>Phrase bank: has saved ___ since… · did not reach the target '
  + 'because… · we have agreed… · review again in…<br>☐ A clear subject '
  + 'line?<br>☐ One present perfect and one past simple?<br>☐ The agreed '
  + 'next step?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Savings review — Ms Cruz Ms Cruz opened the account in March '
        + 'and has saved two thousand since then. She did not reach the original '
        + 'target because of an unexpected car repair in July. We have agreed a '
        + 'new date of February and a small emergency fund alongside the goal. '
        + 'Review again in three months. Johanna Berg'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short note summarising the meeting for the customer’s file. '
  + 'Plan: Subject: ___ · ___ opened ___ and has saved ___. · She did not '
  + '___ because ___. · We have agreed ___. · Review again ___. Phrase '
  + 'bank: has saved ___ since… · did not reach the target because… · we '
  + 'have agreed… · review again in… ☐ A clear subject line? ☐ One present '
  + 'perfect and one past simple? ☐ The agreed next step? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
