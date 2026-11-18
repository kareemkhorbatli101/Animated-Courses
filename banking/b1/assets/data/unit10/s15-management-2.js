/* Unit 10 §15 — Management File — Relationship Management.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u10-s15', {
  book: { source: 'Banking B1', ref: 'Unit 10 · Part 7 · Management File — Relationship Management (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Relationship Management (2)', title: 'Part 7 · Management File — Relationship Management (2)' },
  objective: 'By the end of Part 7 you can manage a relationship as a manager does: '
  + 'prepare for a review meeting, raise a difficult point without '
  + 'damaging the relationship, and agree what both sides will do.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 10 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — a relationship review',
      instruction: 'Hold an annual review with a business customer. Listen more than you '
  + 'speak, and report back accurately.<br>Card A (relationship manager): '
  + 'open with a question · take notes · read them back · be honest about '
  + 'the decision.<br>Card B (business customer): your largest buyer has '
  + 'moved to ninety-day terms; you have never missed a payment; you need '
  + 'an answer by Friday.<br>Stretch: the customer asks you to predict the '
  + 'decision — stay honest and still be useful.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“Before we talk about the facility, what would worry you most about '
        + 'next year? … Let me read my notes back to you, so I take your words '
        + 'to the credit meeting and not mine.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 10 · 7E',
      type: 'writer',
      title: 'Writing — a relationship-review note (50–70 words)',
      instruction: 'Write a short review note for the customer’s file.<br>Plan: Subject: '
  + '___ · ___ said ___. · She told me that ___. · She asked whether ___. '
  + '· I said I would ___.<br>Phrase bank: she said ___ had… · she told me '
  + 'that… · she asked whether… · I said I would put the case<br>☐ A clear '
  + 'subject line?<br>☐ Three reported sentences?<br>☐ The customer’s '
  + 'words, not your opinion?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: Annual review — Okafor Coffee Ltd Ms Okafor said her largest '
        + 'buyer had moved to ninety-day terms without notice. She told me that '
        + 'three invoices were overdue but that the company had never missed a '
        + 'payment. She asked whether a decision could be made by Friday. I said '
        + 'I would put the case at Thursday’s meeting. Statements requested. '
        + 'Priya Raman'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short review note for the customer’s file. Plan: Subject: ___ '
  + '· ___ said ___. · She told me that ___. · She asked whether ___. · I '
  + 'said I would ___. Phrase bank: she said ___ had… · she told me that… '
  + '· she asked whether… · I said I would put the case ☐ A clear subject '
  + 'line? ☐ Three reported sentences? ☐ The customer’s words, not your '
  + 'opinion? ☐ 50–70 words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
