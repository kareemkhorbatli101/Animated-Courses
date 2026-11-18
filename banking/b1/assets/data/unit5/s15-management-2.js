/* Unit 5 §15 — Management File — Leading a Digital Change.

   Built by tools/bank_build_unit.py from the raised book. Every
   question, item, option and model is the book's own text. */
BNK.page('u5-s15', {
  book: { source: 'Banking B1', ref: 'Unit 5 · Part 7 · Management File — Leading a Digital Change (2)', part: '7', section: '15',
          track: 'practitioner', label: 'Practitioner track (optional for beginners) · experienced staff', lesson: 'Part 7 · Management File — Leading a Digital Change (2)', title: 'Part 7 · Management File — Leading a Digital Change (2)' },
  objective: 'By the end of Part 7 you can lead a digital change as a manager does: '
  + 'explain why it is happening, answer the objection you expect, and say '
  + 'what support staff and customers will get.',
  cards: [
    {
      id: 'c1',
      ref: '7D',
      bookRef: 'Unit 5 · 7D',
      visual: { spot: 'bank-card' },
      type: 'report',
      title: 'Role play — lead the change',
      instruction: 'You are a manager. Your team is anxious about a new system. Lead a '
  + 'short team meeting.<br>Card A (manager): recognise the feeling · '
  + 'reassure about the risk · say what support is coming · invite '
  + 'feedback.<br>Card B (team member): you are experienced and you '
  + 'preferred the old system; ask two hard questions.<br>Stretch: a team '
  + 'member says customers will leave — answer with evidence, not opinion.',
      minWords: 25,
      placeholder: 'Say it, then write what you said.',
      stems: ['Say it, then write what you said.'],
      model: ['“I know this is a big change. Nothing will be lost — every record has '
        + 'been copied. Training will be provided on Thursday, and until then, '
        + 'please tell me what is not working.”']
    },
    {
      id: 'c2',
      ref: '7E',
      bookRef: 'Unit 5 · 7E',
      type: 'writer',
      title: 'Writing — a staff notice about the app (50–70 words)',
      instruction: 'Write a short notice to your team about the new app, in a calm, '
  + 'official tone.<br>Plan: Subject: ___ · From ___ the ___ will be ___. '
  + '· Every ___ has been ___. · Training will be ___. · Until then, '
  + 'please ___.<br>Phrase bank: will be used from… · nothing will be lost '
  + '· training will be provided · please send any question to…<br>☐ A '
  + 'clear subject line?<br>☐ Two passive verbs?<br>☐ A date for the '
  + 'training?<br>☐ 50–70 words?',
      minWords: 50,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 50–70 words words.'
        }],
      model: ['Subject: The new app — what changes on Monday From Monday the new app '
        + 'will be used in all branches. Every record has been copied, and '
        + 'nothing will be lost. The old screens can still be opened until the '
        + 'end of the month. Training will be provided on Thursday at 09:00. '
        + 'Until then, please send any customer question to me. Marta Nowak'],
      coach: {
        title: 'Check before you finish',
        task: 'Write a short notice to your team about the new app, in a calm, '
  + 'official tone. Plan: Subject: ___ · From ___ the ___ will be ___. · '
  + 'Every ___ has been ___. · Training will be ___. · Until then, please '
  + '___. Phrase bank: will be used from… · nothing will be lost · '
  + 'training will be provided · please send any question to… ☐ A clear '
  + 'subject line? ☐ Two passive verbs? ☐ A date for the training? ☐ 50–70 '
  + 'words?',
        criteria: [{ t: 'Check before you finish' }]
      }
    }
  ]
});
