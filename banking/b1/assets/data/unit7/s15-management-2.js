/* Unit 7 §15 — Management File — Keeping Customers Safe.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u7-s15', {
  book: { source: 'Banking B1', ref: 'Unit 7 · Part 7 · Management File — Keeping Customers Safe (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Keeping Customers Safe (2)', title: 'Part 7 · Management File — Keeping Customers Safe (2)' },
  objective: 'By the end of Part 7 you can keep customers safe as a manager does: '
  + 'decide what to tell staff after an incident, what to tell customers, '
  + 'and what must be reported further.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 7 · 7D',
      visual: { spot: 'cheque' },
      type: 'report',
      title: 'Role play — advise a scared customer',
      instruction: 'A customer has been told by a caller to move her savings. Stop the '
  + 'transfer without frightening her further.<br>Card A (staff): refuse '
  + 'calmly · explain with a conditional · offer to check together · '
  + 'escalate.<br>Card B (customer): you were called this morning; the '
  + 'caller knew your name and your card’s last four digits; you are '
  + 'certain he was genuine.<br>Stretch: the customer insists it is her '
  + 'money and her decision — respond respectfully and still protect her.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“I am not going to make that transfer today, and I will explain why. '
        + 'If someone has told you to move money to a safe account, that call '
        + 'was not from this bank. Let’s check it together, and nothing will be '
        + 'lost.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 7 · 7E',
      type: 'writer',
      title: 'Writing — a staff safety reminder (50–70 words)',
      instruction: 'Write a short reminder to your team about a current scam.<br>Plan: '
  + 'Subject: ___ · We have seen ___. · A caller claims ___. · If a '
  + 'customer ___, ___. · If ___, ___.<br>Phrase bank: we have seen ___ '
  + 'cases this week · a caller claims to be… · if a customer asks to…, '
  + 'slow down · escalate anything over…<br>☐ A clear subject line?<br>☐ '
  + 'Two conditionals?<br>☐ A clear instruction for the team?<br>☐ 50–70 '
  + 'words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Safe-account scam — four cases this week We have seen four '
        + 'cases this week. A caller claims to be from the fraud team and asks '
        + 'the customer to move money to a “safe account”. If a customer asks to '
        + 'move everything to a new account, slow down and ask who told them. If '
        + 'the answer is a phone call, stop the transfer and call me. Elif Demir'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short reminder to your team about a current scam. Plan: '
  + 'Subject: ___ · We have seen ___. · A caller claims ___. · If a '
  + 'customer ___, ___. · If ___, ___. Phrase bank: we have seen ___ cases '
  + 'this week · a caller claims to be… · if a customer asks to…, slow '
  + 'down · escalate anything over… ☐ A clear subject line? ☐ Two '
  + 'conditionals? ☐ A clear instruction for the team? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
